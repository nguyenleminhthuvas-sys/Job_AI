# QUY TRÌNH THẨM ĐỊNH TÍN DỤNG DOANH NGHIỆP & DỰ ÁN
## Standard Operating Procedure — Phiên bản Chính thức

**Ngày hiệu lực**: 12/05/2026
**Áp dụng**: Toàn bộ khoản vay doanh nghiệp và dự án trên 500 tỷ VND
**Mục tiêu**: NPL <1.0% | RAROC >13% | Crisis-resilient underwriting
**Tuân thủ**: Basel III · NHNN 39/2016/TT-NHNN · IFRS9 · Moody's Infrastructure Standards

> SOP này tích hợp multi-layer liquidity defense. Không có framework nào loại trừ
> hoàn toàn tail risk. Framework này giảm thiểu — không triệt tiêu — rủi ro ẩn.
> Deploy bắt buộc có Senior Credit Officer oversight cho mỗi deal.

---

## MỤC LỤC

1. Mục tiêu & Phân loại Giao dịch
2. Pre-Screening & Dynamic Threshold Setup
3. Full Due Diligence
4. Risk Appetite & Liquidity Crisis Analysis
5. Transaction Structuring
6. Credit Committee Presentation
7. Disbursement & Ongoing Monitoring
8. Quality Gates & Checklist
9. Governance, Tools & Validation
10. Deployment Status & Long-term Roadmap

---

## 1. MỤC TIÊU & PHÂN LOẠI GIAO DỊCH (Ngày 0–1)

### 1.1 Mục tiêu cốt lõi

- Liquidity runway **>45 ngày** dưới extreme simultaneous stress
- DSCR dynamic theo industry / lifecycle / revenue risk profile
- Portfolio NPL <1.0%, RAROC >13%

### 1.2 Phân loại bắt buộc

```
SPV riêng + Non/Limited Recourse   →  PROJECT FINANCE (PF)
Existing Company + Full Recourse   →  CORPORATE LOAN  (CL)
SPV + Sponsor Guarantee            →  HYBRID STRUCTURE (HS)
```

Phân loại sai dẫn đến áp dụng sai threshold và structuring — phải confirm trước khi bắt đầu DD.

---

## 2. PRE-SCREENING & DYNAMIC THRESHOLD SETUP (Ngày 1–2)

### 2.1 Tài liệu Bắt buộc

| Nhóm | Tài liệu |
|---|---|
| **Tất cả** | FS audit 3–5 năm · CIC clean (<30d quá hạn) · Tax clearance · Bank statement 12 tháng |
| **PF** | GPĐT/QHĐT/EIA · EPC/PPA/O&M contracts · Land lease 50y · DCF model |
| **CL** | AR/AP aging report · Inventory valuation · Top 10 customer list |
| **HS** | SPV incorporation · Sponsor FS · Guarantee draft · Legal opinion |
| **Liquidity** | DSRA plan · Restricted cash breakdown · Undrawn facilities confirmation |

### 2.2 Dynamic DSCR Threshold Calculator

**Công thức**:
```
DSCR_final = 1.25 × Industry_M × Lifecycle_F × Revenue_F

COMBINED CAP  : ≤ 4.0x  (nếu vượt → Escalate CRO, không tự động reject)
COMBINED FLOOR: ≥ 1.25x (bất kể multipliers)
```

**Bảng Multipliers**:

| Industry | M | Lifecycle | F | Revenue Stability | F |
|---|---|---|---|---|---|
| **Utilities (IPP)** | 1.0 | Construction | 1.5 | Take-or-Pay ≥80% | 0.90 |
| | | Ramp-up Y1–2 | 1.3 | Long-term contract ≥60% | 1.00 |
| | | Stable Ops Y3+ | 1.0 | Spot ≤40% | 1.40 |
| **Consumer Staples** | 1.1 | Construction | 1.5 | Subscription ≥70% | 0.95 |
| | | Ramp-up Y1–2 | 1.3 | Long-term ≥60% | 1.00 |
| | | Stable Ops Y3+ | 1.0 | Spot ≤40% | 1.40 |
| **Manufacturing** | 1.3 | Construction | 1.5 | Long-term ≥60% | 1.00 |
| | | Ramp-up Y1–2 | 1.3 | Mixed 40–60% | 1.20 |
| | | Stable Ops Y3+ | 1.0 | Spot ≤40% | 1.40 |
| **Real Estate Dev** | 1.6 | Pre-sales <30% | 1.6 | Pre-sold ≥70% | 0.90 |
| | | Construction | 1.4 | Pre-sold 40–70% | 1.10 |
| | | Completed/Sold | 1.0 | Spot sales <40% | 1.50 |
| **Oil & Gas Upstream** | 2.0 | Construction | 1.5 | PSC/Long-term ≥70% | 0.95 |
| | | Ramp-up Y1–3 | 1.4 | Spot/Short-term | 1.50 |
| | | Stable Y4+ | 1.0 | Field decline phase | 1.60 |
| **Mining** | 2.3 | Construction | 1.6 | Offtake ≥70% | 1.00 |
| | | Ramp-up Y1–3 | 1.4 | Long-term ≥50% | 1.20 |
| | | Stable Y4+ | 1.0 | Spot commodity | 1.50 |
| | | Decline/Depleting | 1.3 | Field decline | 1.60 |

**Ví dụ tính toán**:

| Deal | Tính | Kết quả | Xử lý |
|---|---|---|---|
| IPP Construction ToP ≥80% | 1.25×1.0×1.5×0.90 | **1.69x** | OK — proceed |
| O&G PSC Construction | 1.25×2.0×1.5×0.95 | **3.56x** | OK — proceed |
| RE Dev Construction Pre-sold 55% | 1.25×1.6×1.4×1.10 | **3.08x** | OK — proceed |
| Mining Stable Spot | 1.25×2.3×1.0×1.50 | **4.31x** | Vượt cap → CRO escalate |
| Mining Construction Offtake ≥70% | 1.25×2.3×1.6×1.00 | **4.60x** | Vượt cap → CRO bắt buộc |

> Mining Construction là combination rủi ro cao nhất trong framework. CRO có thể
> yêu cầu điều kiện tăng cường (Sponsor AAA + DSRA 18m + additional security)
> hoặc từ chối tùy portfolio context.

**Calibration basis**:
- **Industry_M**: Moody's Infrastructure Default Study 2023 + SBV NPL sector data. ALCO review Q1 hàng năm.
- **Lifecycle_F**: IFC 2022 — average construction overrun 28%, risk premium embedded.
- **Revenue_F**: Take-or-Pay discount vs commodity volatility premium (P50/P90 spread).
- **Review trigger**: Sector NPL tăng +0.5% QoQ → re-calibrate ngay, không chờ Q1.

### 2.3 Liquidity Quick Screen (3 Steps bắt buộc)

**Step 1 — Cross-default Flag Check**:
```
Loan agreement có cross-default clause ảnh hưởng đến DSRA không?
  YES → DSRA_available = 0 cho toàn bộ runway calculation
  NO  → DSRA_available = Full DSRA balance
```

**Step 2 — Base Runway**:
```
Base Runway = (Unrestricted Cash + DSRA_available) / Monthly Burn

Pass condition: > 6 tháng
```

**Step 3 — DSRA Adequacy**:
```
DSRA_available > 3 tháng × Stress Burn Proxy

Stress Burn Proxy tại Gate 1 = Monthly Base Burn × 2.0x
(Proxy conservative vì full stress matrix chưa có ở giai đoạn này.
 Gate 2 sẽ override bằng full calibration.)

Ví dụ: Base burn 50 tỷ/tháng
→ Stress proxy = 100 tỷ/tháng
→ DSRA_available phải ≥ 300 tỷ để pass Step 3.
```

**GATE 1**: FAIL bất kỳ step → **REJECT** hoặc **Escalate CRO** với documented rationale.

---

## 3. FULL DUE DILIGENCE (Ngày 3–10)

### 3.1 Business & Industry DD

| Loại | Tiêu chí |
|---|---|
| **PF** | PPA Take-or-Pay ≥80% · Capacity utilization Y3 ≥85% · EPC LD clause ≥10% contract value |
| **CL** | Customer concentration <25% · DSO <60 ngày · Working capital cycle <90 ngày |
| **HS** | Sponsor standalone D/E <2.5x pre-project · Sponsor credit rating documented |
| **Tất cả** | Industry Risk Score → Growth target adjustment (±15%) |

### 3.2 Legal & Technical DD

| Yếu tố | PF | CL | HS |
|---|---|---|---|
| Permits | GPĐT + EIA + Land lease 50y | Business License | Cả hai |
| Core Contracts | EPC LD10% + PPA ToP | Supply agreements | PPA + Sponsor MoU |
| Insurance | All-risk + Business Interruption | Key-man policy | Project + Corporate |

**Vietnam Legal Enforceability Checklist** (bắt buộc hoàn thành trước disbursement):

- [ ] AR/Inventory lien: đã đăng ký tại Cục Đăng ký Giao dịch Bảo đảm?
  *(Chưa đăng ký → lien không có priority, không tính vào recovery value)*
- [ ] Share pledge (HS): đã đăng ký tại cơ quan đăng ký doanh nghiệp?
- [ ] Land use right mortgage: GCNQSDĐ gốc đang được giữ tại ngân hàng?
- [ ] PPA assignment: offtaker (EVN/PVN) đã acknowledge bằng văn bản?
- [ ] Insurance policy: ngân hàng đã được ghi nhận là loss payee?
- [ ] Legal opinion: independent counsel xác nhận toàn bộ security package enforceable theo luật Việt Nam.

### 3.3 Integrated Financial Model

**Model architecture theo loại deal**:

```
PF:  Construction phase → COD ramp → Stable ops
     CFADS = EBITDA − Tax − Opex Reserve − Debt Service Reserve top-up

CL:  3-statement rolling model (P&L + Balance Sheet + Cash Flow)
     FCF = CFO − Maintenance Capex

HS:  Project waterfall → Excess cash flow up to Sponsor level
     Phân tích cả project standalone và consolidated với Sponsor
```

**EBITDA Normalization — Single Source of Truth**:
```
Điều chỉnh tối đa: ±7% so với reported EBITDA
Adjustment >3%: bắt buộc có independent accountant confirmation
Áp dụng nhất quán cho: origination DD và ongoing covenant testing
Không có definition riêng tại covenant section (ref mục này)
```

### 3.4 Dynamic Metrics Framework

| Metric | Base threshold | Formula | IPP Const (ex.) | Mining Spot (ex.) |
|---|---|---|---|---|
| **DSCR** | 1.25x | Base × M × F × F | 1.69x | 4.31x → CRO |
| **LLCR** | 1.50x | Base × LC × Revenue factor | 2.03x | N/A |
| **Debt/EBITDA** | 4.0x | Base × Industry | 4.0x | 5.2x |
| **LTV** | 70% | Fixed | 70% | 70% |
| **FX-Adjusted DSCR** | — | DSCR × (Revenue_FX / Debt_FX) | Stress VND+25%: drop <20% | — |

**FX DSCR stress rule**: Nếu FX-Adjusted DSCR giảm >20% so với base khi VND depreciate 25% → flag cho committee, yêu cầu natural hedge analysis hoặc FX covenant.

---

## 4. RISK APPETITE & LIQUIDITY CRISIS ANALYSIS (Ngày 8–10)

### 4.1 Dynamic Risk Appetite Limits

```
Risk Budget per deal = Base Exposure × Industry Risk Score × Correlation Factor

Portfolio concentration caps:
  Utilities      : ≤ 25% of total credit portfolio
  Real Estate Dev: ≤ 15%
  Mining         : ≤  8%
  Single Obligor : ≤  5% of Bank Capital (Basel III limit)
```

### 4.2 Simultaneous Multi-Factor Stress Matrix

| Scenario | Correlated Shocks | Burn Rate Multiplier | Minimum Runway |
|---|---|---|---|
| **2008 Compound** | Revenue −35% + Opex +25% + AR collection +60 days | ×4.2 | **90 ngày** |
| **2020 COVID** | Revenue −45% + Supply chain cost +30% + WC freeze | ×5.1 | **60 ngày** |
| **Extreme Freeze** | All inflows = 0 + Opex 50% of normal | ×6.5 | **45 ngày** |
| **FX Crisis** | VND depreciate 25% + Commodity price −15% | ×3.8 | **60 ngày** |

Tất cả scenarios phải được chạy đồng thời. Pass condition: runway vượt minimum ở **tất cả** scenarios.

### 4.3 Liquidity Runway & Waterfall

**Công thức runway**:
```
RUNWAY = (Unrestricted Cash
        + DSRA_available
        + Undrawn facilities × 50% haircut
        + Liquid assets × 60% haircut)
        ÷ STRESS_BURN
```

**Định nghĩa từng thành phần**:

| Thành phần | Định nghĩa | Lưu ý |
|---|---|---|
| Unrestricted Cash | Total cash − Restricted cash (escrow, debt-service reserve locked bởi senior lender covenant) | Phải confirm từng escrow account |
| DSRA_available | DSRA balance × (1 − cross_default_lock_flag) | Cross-default active → = 0 |
| Undrawn haircut 50% | Assume 50% undrawn facilities bị freeze bởi counterparty banks trong stress | Conservative — phản ánh 2011 VN banking behavior |
| Liquid assets haircut 60% | PF assets illiquid hơn corporate → haircut conservative hơn standard 70% | |
| FX adjustment | USD-denominated DSRA vs VND burn → apply stress FX = spot × 1.25 | 25% VND depreciation scenario |

**Sequential Waterfall**:

```
Tầng 0: Pre-check — xác nhận và loại trừ restricted cash trước khi tính

Tầng 1: Operating CF post-stress (net of maintenance capex — không gross)

Tầng 2: DSRA draw
         Điều kiện: không bị cross-default lock
         DSRA tại ngân hàng nào? Confirm cross-default clause trước.

Tầng 3: Undrawn LC × 50% haircut
         Stress assumption: 50% counterparty banks freeze commitments

Tầng 4: Asset sale × 60% haircut
         QUAN TRỌNG: CHỈ tính vào runway nếu runway hiện tại > 180 ngày
         Lý do: Asset sale PF không thể close trong < 6 tháng
         Runway < 180d mà tính Tầng 4 = false liquidity — NGHIÊM CẤM

Tầng 5: Sponsor inject
         CHỈ tính nếu là Completion Guarantee (xem Mục 5)
         Keepwell và Letter of Comfort = 0 trong mọi calculation
```

**CRITICAL NOTE — Extreme Freeze (45 ngày): Waterfall theo loại deal**

*PF (Non-recourse, không có Completion Guarantee)*:
Chỉ sử dụng Tầng 0–3. Tầng 4 và Tầng 5 không được tính vào runway.

*HS (có Completion Guarantee hợp lệ)*:
Sử dụng Tầng 0–3 + Tầng 5, với đủ cả 3 điều kiện sau:
1. Legal opinion xác nhận Completion Guarantee callable trong ≤30 ngày
2. Sponsor credit rating ≥ BB+ tại thời điểm draw — phải được confirm từ Moody's/Fitch/S&P trong vòng 30 ngày trước draw date
3. Không có cross-default từ bất kỳ Sponsor entity nào khác

Nếu bất kỳ điều kiện nào không thỏa mãn → Tầng 5 = 0, chỉ dùng Tầng 0–3.

Tầng 4 (Asset sale) KHÔNG được tính trong Extreme Freeze với bất kỳ deal type nào.

### 4.4 Monte Carlo Requirements

```
Số lượng runs    : Tối thiểu 10,000 (không phải 1,000)
Phân phối        : Revenue = log-normal | Opex = gamma
                   KHÔNG dùng normal distribution (underestimates tail)
Output bắt buộc  : VaR95% VÀ Expected Shortfall ES97.5%
                   ES = average of worst 2.5% scenarios
Correlation      : Revenue/Opex ≥ 0.3 (không independent)
                   Commodity price/FX = 0.5 với USD-denominated inputs
Sensitivity      : Top 3 variables driving runway variance
                   — phải identify và trình bày tới committee
Pass condition   : ES97.5% runway > 45 ngày (không chỉ VaR95%)
```

### 4.5 Refinancing Wall Analysis (Bắt buộc với PF và HS)

**Bước 1 — Map repayment schedule**:
Plot toàn bộ principal repayment đến maturity. Flag năm có balloon payment >20% outstanding principal = "Wall Year".

**Bước 2 — Stress refinancing scenarios**:

| Scenario | Refi rate assumption | Market availability |
|---|---|---|
| Base | Current rate +150bps | 80% of outstanding |
| Stress | Current rate +350bps | 50% of outstanding |
| Severe | Current rate +600bps | 0% — must self-fund từ operating CF |

**Bước 3 — DSCR tại Wall Year**:
Re-calculate DSCR tại Wall Year dưới stress refi rate. Phải > dynamic threshold → FAIL Gate 2 nếu miss.

**Bước 4 — Runway tại Wall Year**:
Project phải có liquidity runway ≥ 12 tháng tại Wall Year (gấp đôi yêu cầu bình thường 6 tháng).

### 4.6 IFRS9 Staging & ECL

**Stage migration triggers** (document tại origination):

| Trigger | Stage move | Action |
|---|---|---|
| DSCR < dynamic threshold − 0.15x | Stage 1 → 2 | Lifetime ECL, enhanced monitoring |
| Runway < 90 ngày (base) | Stage 1 → 2 | Lifetime ECL |
| Runway < 45 ngày (stress) | Stage 2 → 3 | Full provision — credit impaired |
| Payment missed >30 ngày | Stage 2 → 3 | Non-performing |
| Wall Year DSCR fail | Stage 1 → 2 | Proactive staging |

**ECL at origination**: Bắt buộc estimate và document PD/LGD/EAD Stage 1 trước khi disbursement. Đây là điều kiện disbursement, không phải optional.

---

## 5. TRANSACTION STRUCTURING

### 5.1 Debt Structure

| Loại | Structure |
|---|---|
| **PF** | Sculpted amortization tenor 15–20y + DSRA 6–12 tháng + Strict cash waterfall |
| **CL** | Term loan + Revolving Credit Facility + Quarterly leverage test |
| **HS** | Project layer first → Sponsor step-up trigger khi DSCR < 1.2x |

### 5.2 Dynamic Covenants

**DSCR Covenant**:
- Threshold: Dynamic threshold − 0.1x buffer
- **Testing frequency**: Quarterly (31/3 · 30/6 · 30/9 · 31/12)
- **Basis**: Trailing 12-month actuals — 4 quarters liền trước ngày test
- **Định nghĩa trailing 12m**: KHÔNG được dùng LTM adjusted hoặc annualized partial period
- **Anti-gaming rule**: One-time revenue items >5% of total revenue trong trailing 12m phải được loại trừ khỏi CFADS/EBITDA, trừ khi Credit Committee pre-approve trước kỳ test
- **EBITDA definition**: Tham chiếu Mục 3.3 — không có definition riêng tại đây
- **Cure period**: 30 ngày kể từ ngày test để remedy breach

**CURE PERIOD OVERRIDE — BẮT BUỘC**:

Nếu runway xuống dưới 45 ngày bất kỳ lúc nào trong cure window:
- Cure period bị hủy ngay lập tức
- Event of Default trigger per Mục 7 có hiệu lực tức thì
- Legal và BOD escalation không chờ hết cure period

Nguyên tắc: Runway-based EoD trigger luôn ưu tiên hơn covenant cure period. Lý do: 30 ngày cure trong khi runway chỉ còn 45 ngày = nguy cơ mất thêm 30 ngày runway trong thời điểm nguy hiểm nhất.

**Runway Covenants**:
- Runway < 120 ngày → Enhanced monthly monitoring
- Runway < 90 ngày → Weekly reporting + CRO involvement
- Runway < 45 ngày → Event of Default
- DSRA < 3 tháng → Mandatory equity cure injection

### 5.3 Sponsor Support Classification

| Loại | Tính pháp lý | Vị trí trong Waterfall | Ghi chú |
|---|---|---|---|
| **Completion Guarantee** | Legally binding, on-demand | Tầng 5 (điều kiện per Mục 4.3) | Mạnh nhất — tính đầy đủ |
| **Keepwell Agreement** | Best-efforts, không on-demand | Không tính vào bất kỳ calculation nào | Chỉ ghi nhận là mitigant định tính |
| **Letter of Comfort** | Không có giá trị pháp lý | Không tính — bỏ qua hoàn toàn | Không ghi nhận dù dưới bất kỳ hình thức nào |

Sponsor inject trigger phải có: specific amount · timeline ≤30 ngày từ trigger date · cure period · failure consequence (acceleration).

Legal opinion bắt buộc xác nhận enforceability theo luật Việt Nam trước khi tính Completion Guarantee vào runway.

### 5.4 Security Package

| Loại deal | 1st Lien | 2nd Lien / Support |
|---|---|---|
| **PF** | Project assets + Contract assignment (PPA, EPC, O&M) | Completion Guarantee |
| **CL** | AR/Inventory blanket lien | Director Personal Guarantee |
| **HS** | Project assets + Sponsor shares pledge | Sponsor Support (*) |

(*) HS Sponsor Support: Chỉ Completion Guarantee được công nhận là enforceable security. Keepwell = mitigant định tính. Letter of Comfort = vô hiệu lực.

**Lưu ý bắt buộc**: Toàn bộ security phải hoàn thành đăng ký pháp lý theo Vietnam Legal Enforceability Checklist (Mục 3.2) trước disbursement. Security chưa đăng ký = không có priority trong enforcement.

---

## 6. CREDIT COMMITTEE PRESENTATION (Ngày 11)

### 6.1 Standard 22-Slide Template

| Slide | Nội dung |
|---|---|
| 1 | Executive Summary + Recommendation + Dynamic threshold áp dụng |
| 2 | Deal classification + Risk Appetite Matrix |
| 3 | Business overview + Industry Risk Score |
| 4 | Financial model + Dynamic metrics table |
| **5A** | **LIQUIDITY CRISIS — Runway table + Waterfall diagram (slide riêng bắt buộc)** |
| 6 | Stress results + Monte Carlo ES97.5% + Top 3 sensitivity drivers |
| 7 | Risk matrix + Mitigants |
| 8 | Transaction structure + Covenants table |
| 9 | Portfolio concentration impact |
| 10 | Exit/Default waterfall + Recovery analysis |

### 6.2 Mandatory Committee Questions

Committee phải confirm trả lời cho toàn bộ các câu hỏi sau trước khi vote:

```
☐ Extreme Freeze (45 ngày) runway confirmed?
    PF (non-recourse)         : Waterfall Tầng 0–3 only — số runway?
    HS (Completion Guarantee) : Tầng 0–3 + Tầng 5 nếu đủ 3 điều kiện
                                (callable ≤30d · Sponsor ≥BB+ · no cross-default)
                                Ref: Mục 4.3 Critical Note

☐ DSRA covers 4.2× Compound burn multiplier?

☐ Sponsor inject mechanics confirmed?
    HS only — Completion Guarantee on-demand đã được legal verify?
    PF non-recourse: câu hỏi N/A, bỏ qua
    Ref: Mục 5.3

☐ Asset sale excluded từ runway? (Confirm runway < 180 ngày nếu applicable)

☐ DSCR tại Refinancing Wall Year dưới stress refi rate? Pass/Fail?

☐ Top 3 Monte Carlo sensitivity drivers là gì? Committee có accept không?

☐ FX stress VND +25% → FX-Adjusted DSCR giảm bao nhiêu? Dưới 20% không?
```

---

## 7. DISBURSEMENT & ONGOING MONITORING

### 7.1 Conditions Precedent (CP)

| Loại | CP bắt buộc |
|---|---|
| **PF** | EPC financial close · Land handover confirmed · Insurance policies in place |
| **CL** | Inventory physical audit complete |
| **HS** | Sponsor Completion Guarantee executed + Legal opinion confirm enforceability |
| **Tất cả** | Security perfection (toàn bộ legal checklist Mục 3.2 hoàn thành) · ECL Stage 1 documented (PD/LGD/EAD) |

### 7.2 Real-time Monitoring Dashboard

**Core KPIs** (update tối thiểu monthly):
- Runway forecast 6 tháng forward
- DSRA coverage ratio (actual vs required)
- Stress burn multiple (current vs scenario thresholds)

### 7.3 Early Warning Indicators

| Indicator | Nguồn | Tần suất | Amber | Red |
|---|---|---|---|---|
| Key customer credit score | CIC + external rating | Monthly | Downgrade 1 notch | Downgrade 2+ notch |
| Commodity price index | Bloomberg/Reuters | Weekly | −15% từ model base | −25% từ model base |
| USD/VND exchange rate | SBV | Daily | +5% từ model | +10% từ model |
| Sector NPL | SBV bulletin | Quarterly | +0.3% QoQ | +0.5% QoQ |
| Borrower payroll/tax payment | Bank statement* | Monthly | Delay 15 ngày | Delay 30+ ngày |
| PPA Offtaker credit rating | CIC + Moody's/Fitch | Quarterly | Downgrade 1 notch | Downgrade ≥2 notch hoặc xuống dưới BB− |
| Key supplier credit | CIC/external | Quarterly | Downgrade 1 notch | Supplier NPL hoặc restructuring |

*Bank statement access: quyền truy cập phải được ghi rõ trong loan agreement. Alternatively, borrower nộp monthly tax payment certificate theo yêu cầu.

**Counterparty Downgrade Protocol**:

- **PPA Offtaker (EVN/PVN) downgrade ≥2 notch hoặc xuống BB−**:
  Trigger mandatory revenue assumption re-validation trong 30 ngày. Nếu revised DSCR < dynamic threshold → migrate Stage 1 → Stage 2.

- **Key Supplier downgrade/NPL**:
  Trigger supply chain dependency review. CRO report trong 15 ngày.

### 7.4 Escalation Triggers

| Trigger | Action | Escalation |
|---|---|---|
| Runway < 120 ngày | Monthly enhanced reporting bắt buộc | CRO review |
| Runway < 90 ngày | Weekly monitoring + contingency planning | Credit Committee |
| Runway < 45 ngày | **Event of Default** (cure override per Mục 5.2) | Legal + BOD |
| DSRA < 3 tháng | Mandatory equity injection | Legal enforcement |

### 7.5 Anti-Gaming Controls

- **AR aging**: Ngân hàng có quyền independent verification qua third-party AR audit, tối thiểu 1 lần/năm. Quyền này phải được ghi trong loan agreement.
- **DSCR covenant**: Trailing 12-month actuals only, không được dùng forward projections để demonstrate compliance.
- **EBITDA normalization**: Tối đa ±7% (Mục 3.3). Adjustment >3% cần independent accountant. Borrower không được tự điều chỉnh mà không có xác nhận.

---

## 8. QUALITY GATES & CHECKLIST

### GATE 1 — PRE-SCREEN (Ngày 1–2)

```
☐ Dynamic DSCR calculated — check combined cap ≤4.0x
    Nếu >4.0x: document và escalate CRO trước khi tiếp tục

☐ Base runway > 6 tháng (sau cross-default adjustment)

☐ DSRA_available > 3 tháng × (Base Burn × 2.0x stress proxy)
    Ref: Mục 2.3 Step 3
```

**GATE 1 FAIL → STOP. Reject hoặc CRO escalate với full documentation.**

---

### GATE 2 — DD COMPLETE (Ngày 10)

```
☐ Compound stress runway > 45 ngày trên TẤT CẢ scenarios

☐ Financial model validated + Monte Carlo 10,000 runs ES97.5% pass

☐ Refinancing Wall Analysis complete:
    DSCR tại Wall Year > dynamic threshold

☐ IFRS9 ECL Stage 1 documented:
    PD · LGD · EAD đã được estimate và lưu trữ

☐ FX-Adjusted DSCR: stress VND +25% → impact < 20% so với base

☐ Vietnam Legal Enforceability Checklist: 100% hoàn thành
    (toàn bộ 6 items Mục 3.2)
```

**GATE 2 FAIL → Không được trình Committee. Return to DD.**

---

### GATE 3 — COMMITTEE APPROVAL (Ngày 11)

```
☐ Liquidity Crisis slide (5A) + Monte Carlo sensitivity reviewed

☐ Portfolio concentration limits compliant

☐ Term sheet issued và borrower acknowledged

☐ IFRS9 ECL Stage 1 (PD/LGD/EAD) disclosed và reviewed bởi Committee

☐ Refinancing Wall stress DSCR trình bày — Committee acknowledged Wall Year risk
```

**GATE 3 COMPLETE → Proceed to execution.**

---

## 9. GOVERNANCE, TOOLS & VALIDATION

### 9.1 Mandatory Excel Toolkit

| Tool | Mục đích |
|---|---|
| Dynamic Appetite Calculator | DSCR multiplier calculation + cap/floor check tự động |
| Integrated Model Builder | PF/CL/HS financial model templates |
| Liquidity Crisis Simulator | 10,000-run Monte Carlo + correlation matrix + ES97.5% output |
| Committee Dashboard | Runway/Waterfall visualization + EWI dashboard |

**Excel governance bắt buộc**:
- Filename phải include: `[DealName]_[YYYYMMDD]_v[X]` — không được overwrite
- Mỗi deal giữ file riêng biệt, locked (read-only) sau committee approval
- Analyst override model output: phải document rationale + supervisor sign-off

### 9.2 Model Validation Framework

**Dynamic DSCR Model**:
Independent validation bắt buộc trước go-live và mỗi lần multipliers thay đổi.
- **Option A**: External party (audit firm/rating agency/risk consultant) — preferred
- **Option B**: Internal unit **khác** với unit build model (e.g. Credit builds → Market Risk hoặc Quant validates)
- **Không chấp nhận**: Cùng team/unit build và validate

Documentation: Validation report gồm (a) test methodology, (b) findings và exceptions, (c) CRO hoặc Chief Model Risk Officer sign-off. Lưu trữ tối thiểu 5 năm.

**Monte Carlo Model**: Annual backtesting — compare predicted runway distributions vs actuals. Năm đầu triển khai chưa có data: dùng industry proxy dataset được ALCO approve.

### 9.3 Risk-Based Liquidity Re-stress Protocol

| Deal category | Tần suất re-stress | Coverage |
|---|---|---|
| Stage 2 (IFRS9) | Quarterly | 100% bắt buộc |
| Runway < 120 ngày | Monthly | 100% bắt buộc |
| High-risk sectors (Mining, O&G, RE Dev) | Semi-annual | 100% |
| Stage 1, Runway > 120 ngày, Standard sectors | Annual | 20% random sample |

Re-stress output: Runway forecast update + Stage migration check. CRO sign-off bắt buộc nếu runway < 120 ngày sau re-stress.

### 9.4 Annual Calibration

```
Timing  : Q1 hàng năm — ALCO session
Nội dung: PD/LGD update theo actual default experience
          Multiplier review theo sector NPL data (SBV)
          Stress scenario severity review (macro conditions)
          Monte Carlo distribution parameter update
Trigger ngoài Q1: Sector NPL +0.5% QoQ → re-calibrate ngay
```

### 9.5 Implementation Roadmap

| Phase | Timeline | Nội dung |
|---|---|---|
| Phase 1 | 30 ngày | Training toàn bộ credit team + Excel toolkit deployment + waterfall correction |
| Phase 2 | 60 ngày | Monte Carlo upgrade (10k runs + ES97.5%) + Refinancing Wall tool build |
| Phase 3 | 90 ngày | IFRS9 staging linkage + anti-gaming covenant protocols |
| Phase 4 | 6–12 tháng | Migration từ Excel sang enterprise credit management platform |

---

## 10. DEPLOYMENT STATUS & LONG-TERM ROADMAP

### 10.1 Deployment Conditions

SOP này ở trạng thái **Near-Production**. Các điều kiện bắt buộc trước live deployment:

1. **Senior Credit Officer oversight**: Mỗi deal phải có SCO review — không chạy autonomous
2. **ALCO sign-off**: Trên multiplier calibration basis trước khi áp dụng cho portfolio thực
3. **Annual backtesting**: Bắt đầu từ năm thứ 2 (năm đầu dùng industry proxy data)
4. **Legal opinion template**: Chuẩn hóa template legal opinion cho security package theo luật VN

### 10.2 Long-term Gaps — Owner & Timeline

Ba gaps dưới đây được acknowledge và đang có roadmap xử lý. Chúng được track trong ALCO Risk Appetite Framework và báo cáo quarterly cho Risk Committee.

| Gap | Owner | Target | Interim Mitigation |
|---|---|---|---|
| **Portfolio sector correlation matrix** | Chief Risk Officer + Portfolio Analytics team | Q3 2026 | Manual sector cap enforcement: Utilities ≤25%, Mining ≤8% |
| **Cash dominion mechanism** | Legal + Transaction Banking | Q4 2026 | Monthly bank statement review + covenant right to inspect borrower accounts |
| **Banking system freeze scenario** | ALCO + Market Risk | Q2 2027 | Undrawn line 50% haircut đã partially address; full scenario modeling pending |

Owner chịu trách nhiệm cập nhật SOP khi roadmap hoàn thành. Gaps này không block deployment nhưng phải được disclosed cho committee trong mỗi deal presentation cho đến khi được resolve.

---

*Phiên bản này tích hợp toàn bộ 31 fixes qua 4 batches từ V3.0 đến V4.3.*
*Không có SOP nào loại trừ hoàn toàn tail risk.*
*Senior Credit Officer oversight bắt buộc cho mọi deal trên 500 tỷ VND.*
