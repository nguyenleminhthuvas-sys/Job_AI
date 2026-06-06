import math

class CreditAppraisalTool:
    """
    Automated Credit Appraisal Tool based on SOP V5.2.
    Handles DSCR Thresholds, Stress Testing, and Liquidity analysis.
    """

    # --- CONSTANTS FROM SOP V5.2 ---
    BASE_THRESHOLD = {
        "CL": 1.20,
        "PF": 1.25
    }

    INDUSTRY_ADJ = {
        "Utilities": 0.00,
        "Consumer Staples": 0.05,
        "Manufacturing FDI": 0.05,
        "Manufacturing Domestic": 0.10,
        "Real Estate Development": 0.25,
        "Oil & Gas Upstream": 0.30,
        "Mining": 0.40
    }

    LIFECYCLE_ADJ = {
        "Stable": 0.00,
        "Ramp-up": 0.10,
        "Construction": 0.15,
        "Pre-sales <30%": 0.20
    }

    REVENUE_ADJ = {
        "Take-or-Pay >=80%": -0.10,
        "Pre-sold >=70%": -0.05,
        "Long-term >=60%": 0.00,
        "Mixed 40-60%": 0.05,
        "Spot": 0.15
    }

    VN_SPECIFIC_ADJ = {
        "VND_No_Hedge": 0.10,
        "Natural_Hedge": 0.00
    }

    PRODUCT_RUNWAY_THRESHOLD = {
        "Working Capital": {"base": 3, "stress": 2},
        "Term Loan": {"base": 6, "stress": 3},
        "PF/HS": {"base": 12, "stress": 6}
    }

    STRESS_SCENARIOS = {
        "2008 Compound": {"rev_shock": -0.35, "opex_shock": 0.25, "burn_mult": 4.2, "min_runway": 90},
        "2020 COVID": {"rev_shock": -0.45, "opex_shock": 0.30, "burn_mult": 5.1, "min_runway": 60},
        "Extreme Freeze": {"rev_shock": -1.00, "opex_shock": 0.50, "burn_mult": 6.5, "min_runway": 45},
        "FX Crisis": {"rev_shock": 0.00, "opex_shock": 0.00, "burn_mult": 3.8, "min_runway": 60} # FX specific logic handled in run_stress_tests
    }

    def __init__(self, deal_name, deal_type, industry, lifecycle, revenue_type, currency_hedge="Natural_Hedge"):
        self.deal_name = deal_name
        self.deal_type = deal_type # 'CL', 'PF', or 'HS'
        self.industry = industry
        self.lifecycle = lifecycle
        self.revenue_type = revenue_type
        self.currency_hedge = currency_hedge

    def calculate_required_dscr(self):
        """Calculates the required DSCR threshold based on scorecard adjustments."""
        base = self.BASE_THRESHOLD.get(self.deal_type if self.deal_type != "HS" else "PF", 1.25)
        adj_industry = self.INDUSTRY_ADJ.get(self.industry, 0.10)
        adj_lifecycle = self.LIFECYCLE_ADJ.get(self.lifecycle, 0.00)
        adj_revenue = self.REVENUE_ADJ.get(self.revenue_type, 0.00)
        adj_vn = self.VN_SPECIFIC_ADJ.get(self.currency_hedge, 0.00)

        total_adj = adj_industry + adj_lifecycle + adj_revenue + adj_vn
        required = base + total_adj

        return {
            "base": base,
            "adjustments": {
                "industry": adj_industry,
                "lifecycle": adj_lifecycle,
                "revenue": adj_revenue,
                "vn_specific": adj_vn
            },
            "total_adjustment": total_adj,
            "required_dscr": round(required, 2)
        }

    def calculate_liquidity_runway(self, cash, dsra, monthly_burn, undrawn_lc=0, assets=0, is_cross_default=False):
        """
        Calculates runway using the sequential waterfall defined in SOP.
        """
        dsra_available = 0 if is_cross_default else dsra
        
        # Tầng 1 & 2
        liquidity_base = cash + dsra_available
        runway_base = liquidity_base / monthly_burn if monthly_burn > 0 else float('inf')

        # Tầng 3: Undrawn LC (50% haircut)
        liquidity_t3 = liquidity_base + (undrawn_lc * 0.5)
        runway_t3 = liquidity_t3 / monthly_burn if monthly_burn > 0 else float('inf')

        # Tầng 4: Asset sale (60% haircut) - Only if runway > 180 days
        liquidity_t4 = liquidity_t3
        if runway_t3 > 6: # 180 days ~ 6 months
            liquidity_t4 += (assets * 0.4) # 60% haircut means 40% value
        
        runway_t4 = liquidity_t4 / monthly_burn if monthly_burn > 0 else float('inf')

        return {
            "liquidity_tiers": {
                "base": liquidity_base,
                "t3": liquidity_t3,
                "t4": liquidity_t4
            },
            "runway_months": {
                "base": round(runway_base, 2),
                "t3": round(runway_t3, 2),
                "t4": round(runway_t4, 2)
            }
        }

    def run_stress_tests(self, cash, dsra, monthly_burn):
        results = {}
        for name, params in self.STRESS_SCENARIOS.items():
            stress_burn = monthly_burn * params["burn_mult"]
            
            # Special logic for FX Crisis
            if name == "FX Crisis" and self.currency_hedge == "VND_No_Hedge":
                # VND depreciation 25% impacts costs/debt if partially USD or commodity-linked
                stress_burn *= 1.25 

            runway = (cash + dsra) / stress_burn if stress_burn > 0 else float('inf')
            runway_days = runway * 30 # Convert months to days
            
            results[name] = {
                "stress_burn": round(stress_burn, 2),
                "runway_days": round(runway_days, 1),
                "min_required": params["min_runway"],
                "pass": runway_days >= params["min_runway"]
            }
        return results

    def analyze_deal(self, actual_dscr, cash, dsra, monthly_burn, undrawn_lc=0, assets=0):
        req_data = self.calculate_required_dscr()
        liq_data = self.calculate_liquidity_runway(cash, dsra, monthly_burn, undrawn_lc, assets)
        stress_data = self.run_stress_tests(cash, dsra, monthly_burn)

        pass_dscr = actual_dscr >= req_data["required_dscr"]
        
        # Determine pass/fail for liquidity based on deal type
        product_key = "PF/HS" if self.deal_type in ["PF", "HS"] else "Term Loan"
        min_runway_base = self.PRODUCT_RUNWAY_THRESHOLD[product_key]["base"]
        pass_liquidity_base = liq_data["runway_months"]["base"] >= min_runway_base
        
        # Extreme Freeze check (Gate 2 mandatory)
        pass_extreme_freeze = stress_data["Extreme Freeze"]["pass"]

        status = "PASS" if pass_dscr and pass_liquidity_base and pass_extreme_freeze else "FAIL/ESCALATE"
        if not pass_extreme_freeze:
            status += " (EXTREME FREEZE FAIL)"
        elif not pass_dscr:
            status += " (DSCR FAIL)"

        return {
            "deal_info": {
                "name": self.deal_name,
                "type": self.deal_type
            },
            "dscr_check": {
                "actual": actual_dscr,
                "required": req_data["required_dscr"],
                "pass": pass_dscr,
                "breakdown": req_data["adjustments"]
            },
            "liquidity_check": {
                "runway_base": liq_data["runway_months"]["base"],
                "required_base": min_runway_base,
                "pass": pass_liquidity_base
            },
            "stress_tests": stress_data,
            "status": status
        }

# --- SAMPLE EXECUTION BASED ON SOP EXAMPLES ---
if __name__ == "__main__":
    # Deal 1: IPP Construction, ToP EVN, VND
    deal1 = CreditAppraisalTool(
        deal_name="IPP Solar A",
        deal_type="PF",
        industry="Utilities",
        lifecycle="Construction",
        revenue_type="Take-or-Pay >=80%",
        currency_hedge="VND_No_Hedge"
    )
    
    print(f"--- Analysis: {deal1.deal_name} ---")
    result1 = deal1.analyze_deal(actual_dscr=1.45, cash=100, dsra=300, monthly_burn=50)
    print(f"Required DSCR: {result1['dscr_check']['required']}")
    print(f"Actual DSCR: {result1['dscr_check']['actual']} -> {'PASS' if result1['dscr_check']['pass'] else 'FAIL'}")
    print(f"Base Runway: {result1['liquidity_check']['runway_base']} months")
    print("Stress Tests:")
    for test, data in result1["stress_tests"].items():
        print(f"  - {test}: {data['runway_days']} days (Min: {data['min_required']}) -> {'PASS' if data['pass'] else 'FAIL'}")
    print(f"Final Status: {result1['status']}\n")

    # Deal 3: RE Dev, Construction, Pre-sold 55%, VND
    deal3 = CreditAppraisalTool(
        deal_name="Luxury Condo B",
        deal_type="PF",
        industry="Real Estate Development",
        lifecycle="Construction",
        revenue_type="Mixed 40-60%",
        currency_hedge="VND_No_Hedge"
    )
    print(f"--- Analysis: {deal3.deal_name} ---")
    result3 = deal3.analyze_deal(actual_dscr=1.70, cash=50, dsra=100, monthly_burn=80)
    print(f"Required DSCR: {result3['dscr_check']['required']}")
    print(f"Actual DSCR: {result3['dscr_check']['actual']} -> {'PASS' if result3['dscr_check']['pass'] else 'FAIL'}")
    print("Stress Tests:")
    for test, data in result3["stress_tests"].items():
        print(f"  - {test}: {data['runway_days']} days (Min: {data['min_required']}) -> {'PASS' if data['pass'] else 'FAIL'}")
    print(f"Final Status: {result3['status']}")
