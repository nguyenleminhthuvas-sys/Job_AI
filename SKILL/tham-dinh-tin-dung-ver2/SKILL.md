---
name: sop-tham-dinh-tin-dung-final
description: Thẩm định tín dụng doanh nghiệp và dự án theo chuẩn SOP Phiên bản Chính thức (Basel III, IFRS9). Sử dụng khi người dùng yêu cầu thẩm định khoản vay trên 500 tỷ, tính toán DSCR dynamic, phân tích thanh khoản (liquidity crisis), hoặc đánh giá dự án/doanh nghiệp.
---

# Quy trình Thẩm định Tín dụng Doanh nghiệp & Dự án (SOP Chính thức)

-# Mục tiêu & Phân loại Giao dịch
Tiêu chuẩn: NPL <1.0% | RAROC >13% | Crisis-resilient.
Yêu cầu thanh khoản (Liquidity runway): **>45 ngày** dưới Extreme Freeze.
Bắt buộc phân loại trước khi Due Diligence (DD):
- **PF (Project Finance)**: SPV riêng + Non/Limited Recourse.
- **CL (Corporate Loan)**: Existing Company + Full Recourse.
- **HS (Hybrid Structure)**: SPV + Sponsor Guarantee.

-# Instructions
--# Bước 1: Pre-Screening & Dynamic Threshold Setup (Gate 1)
1. Thu thập tài liệu theo loại deal: FS audit 3-5 năm, CIC clean <30 ngày, GPĐT/EPC/PPA (PF).
2. Tính toán **Dynamic DSCR Threshold**: `DSCR_final = 1.25 × Industry_M × Lifecycle_F × Revenue_F`. (Cap ≤4.0x, Floor ≥1.25x. Vượt Cap phải báo cáo CRO).
3. Thực hiện **Liquidity Quick Screen**:
   - Kiểm tra Cross-default.
   - Base Runway = `(Unrestricted Cash + DSRA_available) / Monthly Burn` > 6 tháng.
   - DSRA_available > `3 tháng × Stress Burn Proxy` (Proxy = Monthly Base Burn × 2.0x).
- **Kết luận Gate 1**: Nếu FAIL bất kỳ step nào → STOP (Reject hoặc CRO escalate).

--# Bước 2: Full Due Diligence (Gate 2)
Thẩm định toàn diện Kinh doanh, Pháp lý, Kỹ thuật và Tài chính.
- Yêu cầu đặc thù: PF cần PPA Take-or-Pay ≥80%; CL cần Customer concentration <25%.
- Hoàn thành **Vietnam Legal Enforceability Checklist** (Đăng ký tài sản thế chấp, ý kiến pháp lý độc lập).
- Cập nhật mô hình tài chính: EBITDA điều chỉnh tối đa ±7%. Adjustment >3% cần accountant confirmation.
- Tính toán FX-Adjusted DSCR: Kịch bản VND mất giá 25%, impact giảm phải <20%.

--# Bước 3: Risk Appetite & Liquidity Crisis Analysis
Chạy đồng thời các kịch bản Multi-Factor Stress Matrix:
1. 2008 Compound (Runway tối thiểu 90 ngày)
2. 2020 COVID (Runway tối thiểu 60 ngày)
3. Extreme Freeze (Runway tối thiểu 45 ngày)
4. FX Crisis (Runway tối thiểu 60 ngày)
Thực hiện **Monte Carlo Requirements**: Tối thiểu 10,000 runs, ES97.5% runway phải > 45 ngày.
Đánh giá **Refinancing Wall**: Tính DSCR tại Refinancing Wall Year (năm có balloon payment >20%).

--# Bước 4: Transaction Structuring
Thiết lập cấu trúc khoản vay, Covenants và Security.
- **DSCR Covenant**: Test hàng quý, dựa trên trailing 12-month actuals.
- **Runway Covenants**: Runway <120 ngày → Enhanced monitoring; <45 ngày → Event of Default (Hủy Cure period).
- **Sponsor Support (Đối với HS)**: Chỉ Completion Guarantee (callable ≤30 ngày, Sponsor ≥BB+, no cross-default) mới được tính vào Waterfall Tầng 5 của Runway. Keepwell/Letter of Comfort không tính.
- Đảm bảo 100% Security phải đăng ký (perfection) trước giải ngân.

--# Bước 5: Credit Committee Presentation (Gate 3)
Chuẩn bị Presentation 22-Slide Template.
Ủy ban phải trả lời 7 câu hỏi bắt buộc trước khi vote:
1. Extreme Freeze runway confirmed? (Waterfall Tầng 0-3 cho PF, thêm Tầng 5 cho HS nếu hợp lệ).
2. DSRA covers 4.2x Compound burn multiplier?
3. Sponsor inject mechanics confirmed?
4. Asset sale excluded từ runway < 180 ngày?
5. Refinancing Wall Year DSCR pass?
6. Top 3 Monte Carlo sensitivity drivers là gì?
7. FX stress VND +25% → FX-Adjusted DSCR giảm <20%?

-# Checklist Các Cổng Kiểm Soát (Quality Gates)
Trước khi kết thúc quy trình, đảm bảo hoàn thành các Gate:
- [ ] **GATE 1 (Pre-Screen)**: Dynamic DSCR ≤4.0x, Base runway >6 tháng, DSRA đủ.
- [ ] **GATE 2 (DD Complete)**: Compound stress runway >45 ngày cho mọi scenario, Monte Carlo ES97.5% pass, IFRS9 ECL Stage 1 documented, Legal Checklist 100% hoàn thành.
- [ ] **GATE 3 (Committee Approval)**: Trình bày Liquidity Crisis slide, Term sheet issued, ECL Stage 1 (PD/LGD/EAD) disclosed.

-# Giám sát Sau Vay & Early Warning Indicators (EWI)
Thực hiện giám sát hàng tháng/quý:
- EWI: Sector NPL, tỷ giá, giá hàng hóa, điểm tín dụng (CIC) của khách hàng/nhà cung cấp.
- **Escalation Triggers**:
  - Runway < 120 ngày → Bắt buộc báo cáo hàng tháng (CRO review).
  - Runway < 90 ngày → Weekly monitoring + Credit Committee.
  - Runway < 45 ngày → Event of Default (Legal + BOD can thiệp).
  - DSRA < 3 tháng → Mandatory equity injection.
