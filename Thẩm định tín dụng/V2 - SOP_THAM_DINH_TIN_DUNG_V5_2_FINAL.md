# QUY TRÌNH THẨM ĐỊNH TÍN DỤNG DOANH NGHIỆP & DỰ ÁN
## Standard Operating Procedure — Phiên bản Chính thức V5.2

**Ngày hiệu lực**: 12/05/2026
**Phiên bản**: V5.2 FINAL
**Áp dụng**: Toàn bộ khoản vay doanh nghiệp và dự án trên 500 tỷ VND
**Mục tiêu**: NPL <1.0% | RAROC >13% | Crisis-resilient underwriting
**Tuân thủ**: Luật TCTD 47/2010 · TT 39/2016/TT-NHNN · TT 11/2021/TT-NHNN
            TT 09/2020/TT-NHNN · TT 17/2022/TT-NHNN · IFRS9 · Basel III
            Công thức tài chính: Bộ Tài chính VN (vbpq.mof.gov.vn)

> SOP này tích hợp multi-layer liquidity defense. Không có framework nào
> loại trừ hoàn toàn tail risk. Framework này giảm thiểu — không triệt tiêu —
> rủi ro ẩn. Deploy bắt buộc có Senior Credit Officer oversight cho mỗi deal.

---

## GHI CHÚ PHÁP LÝ VỀ DSCR

**DSCR được cho phép và có định nghĩa chính thức tại VN**:
Theo tài liệu "Công thức tính toán các chỉ số tài chính" của Bộ Tài chính VN
(vbpq.mof.gov.vn/DKC.FileManagement/FileStorage/File/19730):

> *"Tỷ suất đảm bảo trả nợ (DSCR – Debt Service Coverage Ratio): là tỷ lệ
> dòng tiền từ hoạt động kinh doanh / Nợ phải trả hàng năm."*
>
> *DSCR >1: Dự án có khả năng tạo ra lợi nhuận đủ để trang trải các khoản nợ.*
> *DSCR <1: Dòng tiền có dấu hiệu xấu, dự án khó trang trải nợ từ dòng tiền.*

DSCR thuộc **Nhóm chỉ số cơ cấu vốn** trong hệ thống chỉ số tài chính VN,
cùng nhóm với D/E ratio. Hoàn toàn được phép áp dụng trong thẩm định tín dụng
theo TT 11/2021/TT-NHNN Điều 5.

---

## GHI CHÚ VỀ NGUỒN DỮ LIỆU

| Nguồn | Nội dung sử dụng |
|---|---|
| **Bộ Tài chính VN** (vbpq.mof.gov.vn) | Định nghĩa DSCR, D/E và các chỉ số tài chính chính thức |
| **SBV** | NPL theo ngành, lãi suất, tỷ giá, thống kê tín dụng |
| **GSO** | Số liệu ngành sản xuất, xây dựng, xuất nhập khẩu |
| **IMF Article IV Vietnam 2024** (AMRO 2/2025) | NPL, CAR, RE sector stress |
| **FiinGroup Vietnam Banking Report 2024** | ROE, NPL, credit concentration |
| **ADB Vietnam Financial Markets 2023–2024** | Lãi suất, tỷ giá |
| **Moody's Infrastructure Default Study 2023** | Default rate theo ngành |
| **IFC Infrastructure Cost Overrun Study 2022** | Construction overrun benchmark |
| **Kiểm toán Nhà nước VN 2018–2023** | Overrun dự án hạ tầng VN thực tế |
| **Hackett Group Working Capital Scorecard 2022** | DSO benchmark toàn cầu |
| **TT 11/2021, TT 39/2016, Luật DN 2020** | Cơ sở pháp lý framework |
| **Thực tiễn Top 5 NHTM VN** | LTV, concentration, covenant thực chiến |

---

## MỤC LỤC

1. Mục tiêu & Phân loại Giao dịch
2. KYC/AML Screening
3. Pre-Screening & Threshold Setup
4. Full Due Diligence
5. Risk Appetite & Liquidity Crisis Analysis
6. Transaction Structuring & Covenants
7. Credit Committee & Governance
8. Disbursement & Ongoing Monitoring
9. Quality Gates & Checklist (3 Gates)
10. Governance, Tools & Validation
11. Deployment Status & Long-term Roadmap
12. Phụ lục: Tổng hợp Dữ liệu & Benchmark

---

## 1. MỤC TIÊU & PHÂN LOẠI GIAO DỊCH (Ngày 0–1)

### 1.1 Mục tiêu cốt lõi

- Liquidity runway theo product type dưới extreme simultaneous stress
- DSCR (Tỷ suất đảm bảo trả nợ) đạt ngưỡng tối thiểu theo risk scorecard ngành
- Portfolio NPL <1.0%, RAROC >13%

**Cơ sở RAROC 13% tại VN**:

| Chỉ số | Giá trị | Nguồn |
|---|---|---|
| ROE bình quân 28 NH niêm yết 2022 | 19.8% | FiinGroup / Báo cáo NHTM 2022 |
| ROE Vietcombank 2024 | 18.5% | VCB Annual Report 2024 |
| ROE BIDV 2022 | 20.2% | BIDV Annual Report 2022 |
| ROE VietinBank 2023 | 17.1% | Statista / VietinBank FS 2023 |
| ROE NH nhà nước Q3/2022 | 14.8% | SBV / Statista |
| **RAROC target 13%** | Conservative anchor | Risk-adjusted sau capital charge + EL + opex |

> RAROC 13% = mức sàn risk-adjusted, thấp hơn ROE thực 15–20% của Top NHTM.
> Điều chỉnh: (a) capital charge Basel III ~2–3%, (b) expected loss provision ~2–3%,
> (c) operational cost allocation ~1–2%. Nguồn: SBV + FiinGroup 2024. Review Q1/năm.

### 1.2 Phân loại bắt buộc (Ngày 1)

```
SPV riêng + Non/Limited Recourse   →  PROJECT FINANCE   (PF)
Existing Company + Full Recourse   →  CORPORATE LOAN    (CL)
SPV + Sponsor Guarantee            →  HYBRID STRUCTURE  (HS)
```

**Phân loại sai → áp dụng sai threshold và structuring. Confirm trước khi bắt đầu DD.**

Hậu quả phân loại sai thực tế:

| Nhầm lẫn | Hậu quả |
|---|---|
| HS → PF (bỏ qua sponsor analysis) | Không phát hiện sponsor over-leveraged; bảo lãnh vô giá trị |
| PF → CL (dùng DSCR CL threshold) | Approve deal lẽ ra phải từ chối |
| Keepwell = Completion Guarantee | Tính Tầng 5 waterfall vào runway sai |

---

## 2. KYC/AML SCREENING (Ngày 1 — TRƯỚC mọi bước khác)

### 2.1 Screening Bắt buộc theo TT 09/2020/TT-NHNN

**Fail bất kỳ bước → IMMEDIATE REJECT. Không exception. Báo cáo Compliance ngay.**

| # | Bước | Yêu cầu cụ thể | Nguồn kiểm tra | Pass/Fail |
|---|---|---|---|---|
| 1 | OFAC/UN/EU Sanctions | Screening tự động, cập nhật hàng ngày | OFAC SDN List · UN Consolidated List · EU Sanctions Map | ☐ |
| 2 | PEP Screening | PEP + người liên quan: vợ/chồng, con, đồng sở hữu | NHNN danh sách · World-Check · Factiva | ☐ |
| 3 | Adverse Media | Tin tiêu cực trong 3 năm gần nhất | Google · CafeF · VnExpress · Báo Đầu tư · VCCI | ☐ |
| 4 | Source of Funds | Xác minh nguồn gốc vốn góp / tài sản bảo đảm | FS audit · Sao kê ngân hàng · Hợp đồng mua bán | ☐ |
| 5 | CIC Cross-check | Dư nợ thực tế vs khai báo + người liên quan | CIC report <30 ngày (Điều 4 TT 39/2016) | ☐ |

**Tất cả 5 bước PASS → Tiếp tục Mục 3.**

### 2.2 Enhanced Due Diligence (EDD)

Bắt buộc EDD khi có bất kỳ yếu tố sau:
- Borrower là PEP hoặc có liên quan PEP
- Giao dịch có yếu tố offshore (SPV nước ngoài, foreign sponsor)
- Ngành rủi ro cao: casino, BĐS offshore, crypto, OTC trading
- Giá trị giao dịch >1,000 tỷ VND

EDD bổ sung thêm: trace Ultimate Beneficial Owner (UBO) qua các lớp cấu trúc,
xác minh Wealth Source, Senior Management approval, monitoring tần suất cao hơn.

---

## 3. PRE-SCREENING & THRESHOLD SETUP (Ngày 1–2)

### 3.1 Tài liệu Bắt buộc

| Nhóm | Tài liệu | Ghi chú VN |
|---|---|---|
| **Tất cả** | FS audit 3 năm (Big4 preferred) | VAS chấp nhận; IFRS preferred cho PF/HS |
| | CIC report <30 ngày | Check cả người liên quan per Điều 4 TT 39/2016 |
| | **Tax clearance từ Chi cục Thuế** | Không chấp nhận tự khai — phải có xác nhận cơ quan thuế |
| | Bank statements 12 tháng (tất cả tài khoản) | Kể cả tài khoản tại ngân hàng khác |
| **PF** | GPĐT/QHĐT/EIA · EPC/PPA/O&M · GCN QSDĐ | GPĐT còn hiệu lực; EIA được Bộ TN&MT phê duyệt |
| **CL** | AR/AP aging 4 nhóm · Inventory list · Top 10 KH | AR aging: 0–30 / 30–60 / 60–90 / 90+ ngày |
| **HS** | SPV incorporation · Sponsor FS · Guarantee draft · Legal opinion | SPV VN: kiểm tra vốn điều lệ đã thực góp |
| **Liquidity** | DSRA plan · Restricted cash breakdown · Undrawn confirmation | Confirm DSRA tại ngân hàng nào, cross-default clause |

> **Other AR >20% Total Assets → Bắt buộc thêm**:
> - Aging chi tiết (0–30 / 30–60 / 60–90 / 90+ ngày)
> - Top 10 counterparty + CIC check từng counterparty
> - Legal opinion về khả năng thu hồi AR >90 ngày

---

### 3.2 Hệ thống Đánh giá Khả năng Trả nợ — DSCR Framework

**Cơ sở pháp lý**:
- **Định nghĩa DSCR**: Bộ Tài chính VN — "Tỷ suất đảm bảo trả nợ = Dòng tiền
  từ hoạt động kinh doanh / Nợ phải trả hàng năm" (vbpq.mof.gov.vn, File 19730)
- **Quyền tự xây dựng ngưỡng**: TT 11/2021/TT-NHNN Điều 5 — TCTD tự xây dựng
  bộ chỉ tiêu tài chính trong hệ thống XHTD nội bộ; NHNN không quy định con số cố định

---

#### BƯỚC 1 — Tính DSCR Thực tế

**Theo định nghĩa chính thức Bộ Tài chính VN**:

```
╔══════════════════════════════════════════════════════════════════╗
║  CORPORATE LOAN (CL):                                           ║
║                                                                  ║
║         Dòng tiền từ hoạt động kinh doanh (HĐKD)               ║
║  DSCR = ─────────────────────────────────────────               ║
║              Nợ phải trả hàng năm                               ║
║                                                                  ║
║  Trong đó:                                                       ║
║  - Dòng tiền HĐKD = EBITDA (đã normalize ±7%)                   ║
║  - Nợ phải trả hàng năm = Gốc phải trả + Lãi phải trả trong kỳ ║
║                                                                  ║
║  Nguồn: Bộ Tài chính VN (vbpq.mof.gov.vn/File/19730)           ║
╚══════════════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════════════╗
║  PROJECT FINANCE (PF):                                          ║
║                                                                  ║
║         CFADS                                                    ║
║  DSCR = ──────────────                                           ║
║         Debt Service                                             ║
║                                                                  ║
║  CFADS = EBITDA − Thuế TNDN − Δ Working Capital − Capex duy trì ║
║  Thuế TNDN = 20% standard; kiểm tra ưu đãi trong GPĐT          ║
║  Debt Service = Principal + Interest trong kỳ                   ║
║                                                                  ║
║  Nguồn: IFC/ADB PF standard; thực tiễn syndicated PF VN        ║
╚══════════════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════════════╗
║  HYBRID STRUCTURE (HS):                                         ║
║                                                                  ║
║  Bước A: Tính DSCR tại project level (dùng PF methodology)     ║
║  Bước B: Tính DSCR tại sponsor level (dùng CL methodology)     ║
║  → PHẢI PASS CẢ HAI mới được tiếp tục                          ║
╚══════════════════════════════════════════════════════════════════╝
```

**Diễn giải DSCR theo Bộ Tài chính VN**:

| DSCR | Ý nghĩa | Hành động |
|---|---|---|
| > ngưỡng yêu cầu | Dự án/DN tạo đủ dòng tiền trả nợ và có buffer | Proceed |
| = 1.0x | Dòng tiền vừa đủ trả nợ, không có buffer | Reject / Cơ cấu lại |
| < 1.0x | Dòng tiền có dấu hiệu xấu, không đủ trả nợ | Reject |

**EBITDA Normalization (áp dụng cho cả origination DD và covenant testing)**:
```
Điều chỉnh tối đa: ±7% so với EBITDA reported
Adjustment >3%: independent accountant confirmation bắt buộc

VN-specific adjustments thường gặp (phải document rõ từng khoản):
→ Related party transactions giá không arm's length
→ Circular revenues trong group (doanh thu vòng tròn nội bộ)
→ Revenue recognition sớm (BĐS: VAS 14 ghi nhận trước bàn giao)
→ Depreciation VAS khác kinh tế thực (khấu hao nhanh để giảm thuế)
→ Chi phí one-off: loại trừ nếu không tái diễn, giữ lại nếu là chi phí kinh doanh thực
→ VAS lease off-balance sheet: cộng lại như IFRS 16 khi so sánh
```

---

#### BƯỚC 2 — Xác định Ngưỡng DSCR Tối thiểu (Risk Scorecard)

Ngưỡng DSCR yêu cầu = DSCR cơ sở + Tổng điều chỉnh rủi ro

**DSCR cơ sở** (floor không thể hạ xuống):
- CL: **1.20x** (Nguồn: NHCSXH Credit Manual; thực tiễn Top 5 NHTM VN)
- PF: **1.25x** (Nguồn: IFC/ADB PF standard; thực tiễn syndicated PF VN)

**Bảng điều chỉnh theo Ngành** (cộng vào DSCR cơ sở):

| Ngành | Điều chỉnh | NPL VN thực tế | Nguồn |
|---|---|---|---|
| Utilities / IPP (có PPA EVN/PVN) | +0.00x | ~1–2% | SBV Q3/2024 |
| Consumer Staples | +0.05x | ~2% | SBV sector data |
| Manufacturing FDI (xuất khẩu) | +0.05x | ~2% | SBV sector data |
| Manufacturing nội địa | +0.10x | ~2–3% | SBV sector data |
| Real Estate Development | +0.25x | 3.4% (Jul 2024); ICR→0.7x | IMF VN 2024 |
| Oil & Gas Upstream | +0.30x | Cao; PVN overrun history | Moody's 2023 |
| Mining | +0.40x | Cao nhất; enforcement khó VN | SBV + Moody's 2023 |

**Bảng điều chỉnh theo Lifecycle dự án** (cộng vào):

| Giai đoạn | Điều chỉnh | Cơ sở | Nguồn |
|---|---|---|---|
| Stable Operations (Y3+ hoặc Completed) | +0.00x | Dòng tiền ổn định | — |
| Ramp-up Y1–2 sau COD | +0.10x | Revenue chưa đạt công suất | IFC 2022 |
| Construction | +0.15x | Overrun VN avg 35–40% | Kiểm toán NN VN 2018–2023 |
| Pre-sales <30% (RE Dev) | +0.20x | Chưa có dòng tiền đáng kể | Thực tiễn NHTM VN |

**Bảng điều chỉnh theo Loại Doanh thu** (cộng/trừ):

| Loại doanh thu | Điều chỉnh | Cơ sở | Nguồn |
|---|---|---|---|
| Take-or-Pay ≥80% (EVN/PVN contract) | **−0.10x** | Doanh thu gần chắc chắn | EVN PPA terms thực tế |
| Pre-sold ≥70% (BĐS, có công chứng) | **−0.05x** | Buyer đã cam kết | Thực tiễn RE VN |
| Hợp đồng dài hạn ≥60% | +0.00x | Mức cơ sở | — |
| Mixed 40–60% | +0.05x | Rủi ro trung bình | — |
| Spot / không hợp đồng dài hạn | +0.15x | Biến động theo giá thị trường | LME P50/P90 spread |

**Bảng điều chỉnh VN-specific**:

| Yếu tố | Điều chỉnh | Cơ sở |
|---|---|---|
| Vay VND, không có FX hedge | **+0.10x** | VND lending rate cao hơn USD 300–500bps (ADB 2023) |
| Vay USD hoặc có natural hedge | +0.00x | Không cần điều chỉnh |

---

**Ví dụ tính ngưỡng DSCR đầy đủ (step-by-step)**:

**Deal 1: IPP xây dựng, có PPA ToP ≥80% với EVN, vay VND**
```
Bước 1: DSCR cơ sở (PF)          =  1.25x
Bước 2: + Ngành Utilities          = +0.00x
         + Lifecycle Construction   = +0.15x
         + Revenue ToP ≥80% EVN    = −0.10x
         + Vay VND không hedge      = +0.10x
Bước 3: Tổng điều chỉnh           = +0.15x
Kết quả: Ngưỡng yêu cầu           =  1.40x

→ DSCR thực tế của deal phải ≥ 1.40x để pass
```

**Deal 2: Manufacturing nội địa, ổn định, hợp đồng dài hạn ≥60%, vay USD**
```
Bước 1: DSCR cơ sở (CL)           =  1.20x
Bước 2: + Ngành Mfg nội địa        = +0.10x
         + Lifecycle Stable         = +0.00x
         + Revenue long-term ≥60%   = +0.00x
         + Vay USD                  = +0.00x
Bước 3: Tổng điều chỉnh            = +0.10x
Kết quả: Ngưỡng yêu cầu            =  1.30x
```

**Deal 3: RE Dev xây dựng, pre-sold 55%, vay VND**
```
Bước 1: DSCR cơ sở (PF)            =  1.25x
Bước 2: + Ngành RE Dev              = +0.25x
         + Lifecycle Construction    = +0.15x
         + Revenue mixed 40-60%      = +0.05x
         + Vay VND                   = +0.10x
Bước 3: Tổng điều chỉnh             = +0.55x
Kết quả: Ngưỡng yêu cầu             =  1.80x
```

**Deal 4: O&G PSC Construction, hợp đồng PVN ≥70%, vay USD**
```
Bước 1: DSCR cơ sở (PF)            =  1.25x
Bước 2: + Ngành O&G Upstream        = +0.30x
         + Lifecycle Construction    = +0.15x
         + Revenue PSC/LT ≥70%      = −0.10x
         + Vay USD                   = +0.00x
Bước 3: Tổng điều chỉnh             = +0.35x
Kết quả: Ngưỡng yêu cầu             =  1.60x
```

**Deal 5: Mining Stable, bán spot, vay VND**
```
Bước 1: DSCR cơ sở (PF)            =  1.25x
Bước 2: + Ngành Mining              = +0.40x
         + Lifecycle Stable          = +0.00x
         + Revenue Spot              = +0.15x
         + Vay VND                   = +0.10x
Bước 3: Tổng điều chỉnh             = +0.65x
Kết quả: Ngưỡng yêu cầu             =  1.90x
         + CRO escalate bắt buộc vì Mining Stable Spot
           là combination rủi ro cao. CRO có thể yêu cầu
           thêm điều kiện hoặc từ chối tùy portfolio context.
```

**Bảng so sánh tổng hợp các deals**:

| Deal | Ngưỡng | Ghi chú |
|---|---|---|
| IPP Construction ToP EVN (VND) | 1.40x | Thực tế, đạt được |
| Manufacturing nội địa Stable (USD) | 1.30x | Thực tế, đạt được |
| RE Dev Construction Pre-sold 55% (VND) | 1.80x | Cao — reflect rủi ro thực tế RE VN |
| O&G PSC Construction (USD) | 1.60x | Moderate — PVN contract giảm risk |
| Mining Stable Spot (VND) | 1.90x + CRO | Cao nhất — combination nguy hiểm |

---

#### BƯỚC 3 — So sánh và Quyết định

```
DSCR thực tế ≥ Ngưỡng yêu cầu?
  → YES: Pass Lớp 1 + Lớp 2. Tiếp tục Bước 4.
  → NO : Fail. CRO escalate hoặc Reject với documented rationale.
```

---

#### BƯỚC 4 — Bộ Chỉ số Bổ sung Bắt buộc (TT 11/2021 Điều 5)

Ngoài DSCR, hệ thống XHTD nội bộ theo TT 11/2021 yêu cầu đánh giá đồng thời.
Tất cả phải được document trước Gate 2.

**Nhóm 1 — Khả năng Thanh toán** (Nguồn: Bộ Tài chính VN; TT 11/2021):

| Chỉ số | Công thức VN chính thức | Ngưỡng CL | Ngưỡng PF | Diễn giải |
|---|---|---|---|---|
| **ICR** (Khả năng TT lãi vay) | EBIT / Lãi vay phải trả | ≥ 2.0x | ≥ 1.5x | Đo lường lợi nhuận bao phủ lãi vay bao nhiêu lần |
| **Current Ratio** (Hệ số TT ngắn hạn) | TSNH / Nợ ngắn hạn | ≥ 1.2x | N/A | TSNH đủ bù nợ ngắn hạn không? <1 = nguy hiểm |
| **Quick Ratio** (Hệ số TT nhanh) | (TSNH − HTK) / Nợ ngắn hạn | ≥ 0.8x | N/A | Không cần liquidate HTK vẫn trả được nợ ngắn hạn |

**Nhóm 2 — Cơ cấu Vốn** (Nguồn: Bộ Tài chính VN — cùng nhóm với DSCR):

| Chỉ số | Công thức VN chính thức | Ngưỡng CL | Ngưỡng PF | Diễn giải |
|---|---|---|---|---|
| **D/E** (Tỷ suất nợ/vốn CSH) | Các khoản nợ phải trả / Tổng vốn CSH | ≤ 3.0x | ≤ 4.0x | D/E <1: tài sản chủ yếu từ vốn CSH (ít rủi ro hơn) |
| **Debt/EBITDA** (Đòn bẩy tài chính) | Tổng nợ vay / EBITDA | ≤ 5.0x | ≤ 6.0x | RE dev VN thực tế 4–5x (IMF 2024) |
| **Equity Ratio** (Tỷ lệ vốn tự có) | Vốn CSH / Tổng nguồn vốn | ≥ 25% | ≥ 20% | Tỷ lệ vốn tự tài trợ |

**Nhóm 3 — Khả năng Sinh lời**:

| Chỉ số | Công thức | Ngưỡng | Nguồn |
|---|---|---|---|
| **ROA** | LNST / Tổng tài sản | > 0% | TT 11/2021 |
| **EBITDA Margin** | EBITDA / Doanh thu | > 10% (CL); > 20% (PF) | Thực tiễn NHTM VN |
| **Gross Margin** | (DT − GVHB) / DT | So sánh với trung vị ngành | GSO industry data |

**Xử lý kết quả Bước 4**:

| Tình huống | Hành động |
|---|---|
| Tất cả chỉ số trong ngưỡng | Pass — tiếp tục Gate 2 |
| 1–2 chỉ số ngoài ngưỡng | Amber: ghi nhận, yêu cầu giải trình, có thể thêm covenant |
| ≥3 chỉ số ngoài ngưỡng | CRO escalate — xem xét cơ cấu lại hoặc từ chối |
| Bất kỳ Nhóm 1 nào fail (ICR, Current, Quick) | CRO escalate bắt buộc |

---

### 3.3 Liquidity Quick Screen — Product-specific Thresholds

**Ngưỡng runway theo loại sản phẩm (VN-calibrated)**:

| Product Type | Base Runway | Stress Runway | Cơ sở VN |
|---|---|---|---|
| Working Capital Facility | 3 tháng | 2 tháng | WC cycle VN: 60–120 ngày. 3 tháng = 1.5 chu kỳ buffer. VCCI 2023. |
| Term Loan (CL) | 6 tháng | 3 tháng | Cash buffer median DN VN: 2–3 tháng opex. 6 tháng = 2× median. FiinGroup 2024. |
| Project Finance (PF/HS) | 12 tháng | 6 tháng | PF contracts VN (EVN, PVN, BOT): DSRA 6 tháng minimum. IFC/ADB standard 12 tháng. |

**Step 1 — Cross-default Flag Check**:
```
Loan agreement có cross-default clause ảnh hưởng đến DSRA không?
  YES → DSRA_available = 0 cho toàn bộ runway calculation
  NO  → DSRA_available = Full DSRA balance
```

**Step 2 — Base Runway**:
```
Base Runway = (Unrestricted Cash + DSRA_available) / Monthly Burn

Pass condition: > Base Runway threshold theo product type (bảng trên)
```

**Step 3 — DSRA Adequacy**:
```
DSRA_available > 3 tháng × Stress Burn Proxy

Stress Burn Proxy tại Gate 1 = Monthly Base Burn × 2.0x
(Conservative proxy — full stress matrix chỉ có ở Mục 5.2.
 Gate 2 sẽ override bằng full calibration.)

Ví dụ: Base burn 50 tỷ/tháng
→ Stress proxy = 100 tỷ/tháng
→ DSRA_available phải ≥ 300 tỷ để pass Step 3
```

**GATE 1**: FAIL bất kỳ step → **REJECT** hoặc **Escalate CRO** với documented rationale.

---

## 4. FULL DUE DILIGENCE (Ngày 3–10)

### 4.1 Business & Industry DD

**Customer Concentration — Ngưỡng theo ngành (VN-calibrated)**:

| Ngành | Amber | Red | Xử lý Red | Cơ sở VN |
|---|---|---|---|---|
| Manufacturing B2C | >25% | >40% | Concentration covenant | Market phân tán; >40% = phụ thuộc đơn lẻ |
| Manufacturing B2B / SOE supplier | >40% | >60% | Enhanced monitoring | SOE counterparty risk thấp hơn private |
| Construction / Contractor | >50% | >70% | Legal analysis chủ đầu tư | Phổ biến 1–2 chủ đầu tư lớn tại VN |
| Consumer goods / FMCG | >20% | >35% | Add-on covenant | VN retail phân tán; >35% là warning sign |
| PF / HS | N/A | N/A | Dùng offtaker credit analysis | Doanh thu từ PPA/offtake |

> Nguồn: VCCI Annual Business Survey 2023; SBV credit concentration data.

**DSO Benchmark theo ngành (VN-calibrated)**:

| Ngành | DSO bình thường VN | Amber | Red | Cơ sở |
|---|---|---|---|---|
| Manufacturing B2C | 30–60 ngày | >75 ngày | >90 ngày | GSO 2022–2024; Hackett global avg 40.6 ngày (2022) |
| Manufacturing B2B công nghiệp | 45–90 ngày | >110 ngày | >135 ngày | B2B VN payment terms dài hơn |
| Construction / Contractor | 90–180 ngày | >200 ngày | >240 ngày | Global avg ~100 ngày (Hackett 2022); VN cao hơn do SOE chậm TT |
| Thương mại / Phân phối | 30–60 ngày | >75 ngày | >90 ngày | FMCG distribution VN: 30–45 ngày standard |
| BĐS Developer | N/A | Pre-sale <30% | Pre-sale <20% | Pre-sale rate là leading indicator quan trọng hơn DSO |

**Business DD theo loại deal**:

| Loại | Tiêu chí kiểm tra |
|---|---|
| **PF** | PPA ToP ≥80% · Capacity utilization Y3 ≥85% · EPC LD ≥10% contract value |
| **CL** | Customer concentration per bảng trên · DSO per bảng trên · WC cycle <90 ngày |
| **HS** | Sponsor D/E <2.5x pre-project · Sponsor credit rating (Moody's/Fitch/FiinRatings VN) |
| **Tất cả** | Industry Risk Score → Growth target adjustment ±15% |

### 4.2 Legal & Technical DD

| Yếu tố | PF | CL | HS |
|---|---|---|---|
| Permits | GPĐT + EIA (Bộ TN&MT) + Land 50y | Giấy phép kinh doanh còn hiệu lực | Cả hai |
| Core Contracts | EPC LD≥10% + PPA ToP | Hợp đồng cung cấp/bán hàng | PPA + Sponsor MoU |
| Insurance | All-risk + Business Interruption | Key-man policy | Project + Corporate |

**Vietnam Legal Enforceability Checklist** (bắt buộc 100% trước disbursement):

- [ ] **Land use right (QSDĐ) — phân biệt loại** *(Luật Đất đai 2013/2024, Điều 167)*:
  - **Trả tiền 1 lần**: Được thế chấp QSDĐ + TS trên đất → LTV tối đa 65% (đô thị lớn), 50% (tỉnh lẻ)
  - **Trả tiền hàng năm**: CHỈ thế chấp TS trên đất — KHÔNG thế chấp QSDĐ → LTV tối đa 50% TS trên đất *(Điều 179)*
  - GCN QSDĐ gốc phải đang giữ tại ngân hàng
- [ ] **AR/Inventory lien**: Đăng ký tại Cục Đăng ký GDBĐ (Bộ Tư pháp) *(NĐ 102/2017/NĐ-CP)*. Chưa đăng ký → không có priority khi enforcement.
- [ ] **Share pledge (HS)**: Đăng ký cơ quan ĐKDN *(Luật DN 2020)*
  - Cổ phiếu OTC: LTV 20% giá trị sổ sách (lịch sử >1 năm, volume >5 tỷ/năm)
  - Cổ phiếu niêm yết HOSE/HNX: LTV tối đa 49% net (= giá bình quân 6 tháng × 70%)
- [ ] **PPA assignment**: EVN/PVN acknowledge bằng văn bản
- [ ] **Insurance**: Ngân hàng là loss payee trên policy
- [ ] **Legal opinion**: Independent counsel xác nhận toàn bộ security package enforceable theo luật VN

**LTV theo loại tài sản bảo đảm (VN-calibrated)**:

| Loại tài sản | LTV tối đa | Cơ sở VN |
|---|---|---|
| QSDĐ trả 1 lần + TS trên đất (HN/HCM nội thành) | 65% | Top 5 NHTM VN; foreclosure 12–24 tháng (NQ 42/2017 hết hiệu lực 2023) |
| QSDĐ trả 1 lần + TS trên đất (tỉnh lẻ) | 50% | Thanh khoản thấp; giá thực khi bán thường 50–60% định giá |
| TS trên đất (QSDĐ trả hàng năm) | 50% | Chỉ TS công trình; không có QSDĐ. Luật Đất đai Điều 179 |
| Máy móc thiết bị nhập khẩu (<5 năm, bảo hành) | 50% | LTV dựa trên giá trị còn lại sổ sách |
| Máy móc thiết bị cũ (>5 năm, trong nước) | 30% | Thị trường thanh lý VN thanh khoản thấp |
| Hàng tồn kho (thông dụng, không dễ hỏng) | 60% | Cần independent audit quarterly |
| Hàng tồn kho (đặc thù / dễ hỏng / mùa vụ) | 30–40% | Rủi ro obsolescence cao |
| AR (0–60 ngày, counterparty creditworthy) | 70% | Sau khi trừ AR >60 ngày. Cần aging report confirmed. |
| AR (60–90 ngày) | 40% | Thu hồi thực tế VN thấp hơn global |
| AR (>90 ngày) | 0% | Không tính vào collateral |
| Cổ phiếu niêm yết HOSE/HNX | 49% net | Giá bình quân 6 tháng × 70% (haircut 30%) |
| Cổ phiếu OTC (chưa niêm yết) | 20% giá trị sổ sách | Thanh khoản rất thấp |

> **Nguồn**: Top 5 NHTM VN thực tiễn; VIR "70% bank collateral tied to real estate" (Nov 2024);
> Luật Đất đai 2013/2024; NĐ 102/2017/NĐ-CP; NQ 42/2017/QH14 (hết hiệu lực 2023).

### 4.3 Integrated Financial Model

```
PF:  Construction → COD ramp → Stable ops
     CFADS = EBITDA − Thuế TNDN (20%; check ưu đãi GPĐT)
             − Δ Working Capital − Capex duy trì − DSRA top-up

CL:  3-statement rolling model (P&L + Balance Sheet + Cash Flow)
     FCF = CFO − Maintenance Capex
     Lưu ý: VAS leases thường off-balance sheet → điều chỉnh khi phân tích

HS:  Project waterfall → Excess CF lên Sponsor level
     Phân tích standalone project AND consolidated với Sponsor
```

### 4.4 ESG Assessment (TT 17/2022/TT-NHNN)

| Trụ cột | Tiêu chí | Red → Reject/CRO | Amber → Covenant |
|---|---|---|---|
| **E** | EIA được Bộ TN&MT phê duyệt | Không có EIA → REJECT | — |
| | Tuân thủ QCVN | Vi phạm đang xử lý → CRO | Chưa có kế hoạch |
| **S** | ATVSLĐ (Luật 84/2015/QH13) | Tai nạn chết người 3 năm → CRO | Tranh chấp cộng đồng |
| | Lao động trẻ em / cưỡng bức | Bất kỳ bằng chứng → REJECT | — |
| **G** | Chính sách chống tham nhũng (Luật PCTN 2018) | — | Không có policy |
| | FS: kiểm toán ý kiến | Qualified/Adverse chưa giải trình → CRO | — |

ESG Pricing: Green → 0bps; Amber (1–2) → +25bps hoặc improvement covenant 12 tháng; Red → Reject/CRO.

### 4.5 Bộ Chỉ số Tài chính Tổng hợp

| Chỉ số | Ngưỡng CL | Ngưỡng PF | Công thức VN | Nhóm (Bộ TC VN) |
|---|---|---|---|---|
| **DSCR** | ≥ 1.20x + adj | ≥ 1.25x + adj | Dòng tiền HĐKD / Nợ phải trả năm | Nhóm cơ cấu vốn |
| **ICR** | ≥ 2.0x | ≥ 1.5x | EBIT / Lãi vay phải trả | Nhóm khả năng TT |
| **D/E** | ≤ 3.0x | ≤ 4.0x | Nợ phải trả / Vốn CSH | Nhóm cơ cấu vốn |
| **Debt/EBITDA** | ≤ 5.0x | ≤ 6.0x | Tổng nợ / EBITDA | Nhóm cơ cấu vốn |
| **Current Ratio** | ≥ 1.2x | N/A | TSNH / Nợ ngắn hạn | Nhóm khả năng TT |
| **Quick Ratio** | ≥ 0.8x | N/A | (TSNH−HTK) / Nợ ngắn hạn | Nhóm khả năng TT |
| **LTV** | Per loại TS | Per loại TS | Dư nợ / Giá trị TSBĐ | — |
| **FX-Adj DSCR** | — | Drop <20% khi VND+25% | DSCR × (RevFX/DebtFX) | Flag nếu drop >20% |

---

## 5. RISK APPETITE & LIQUIDITY CRISIS ANALYSIS (Ngày 8–10)

### 5.1 Dynamic Risk Appetite Limits

```
Risk Budget per deal = Base Exposure × Industry Risk Score × Correlation Factor

Portfolio concentration caps:
  Utilities      : ≤ 25%  (Thực tiễn NHTM VN; Luật TCTD 47/2010 Điều 128)
  Real Estate Dev: ≤ 15%  (NPL RE 3.4% Jul 2024 — SBV; IMF cảnh báo overexposure)
  Mining         : ≤  8%  (Rủi ro cao nhất; tài sản thanh khoản thấp)
  Single Obligor : ≤  5% Bank Capital
                   (Conservative hơn: TĐ 47/2010 Điều 128 cho phép ≤15% vốn tự có)
```

### 5.2 Simultaneous Multi-Factor Stress Matrix

| Scenario | Correlated Shocks | Burn Multiplier | Min Runway | Cơ sở VN |
|---|---|---|---|---|
| **2008 Compound** | Rev −35% + Opex +25% + AR +60 days | ×4.2 | **90 ngày** | GDP 8.5%→5.7% (2008); credit âm Q4/2008. GSO; SBV 2008. |
| **2020 COVID** | Rev −45% + Supply chain +30% + WC freeze | ×5.1 | **60 ngày** | GDP 2.9% (2020); services −40%; mfg export −15%. GSO 2020. |
| **Extreme Freeze** | All inflows = 0 + Opex 50% | ×6.5 | **45 ngày** | 2011 VN banking freeze: NHNN buộc nhiều NHTM dừng cho vay mới. |
| **FX Crisis** | VND depreciate 25% + Commodity −15% | ×3.8 | **60 ngày** | VND: −9.3% (2011), −9% (H2/2022), −4.5% (H1/2024). THB 1997: −40%. SBV; UOB 2025. |

Tất cả 4 scenarios chạy **đồng thời**. Pass: runway vượt minimum ở **tất cả**.

### 5.3 Liquidity Runway & Waterfall

**Công thức**:
```
RUNWAY = (Unrestricted Cash + DSRA_available
        + Undrawn facilities × 50% haircut
        + Liquid assets × 60% haircut)
        ÷ STRESS_BURN
```

**Định nghĩa từng thành phần**:

| Thành phần | Định nghĩa | Cơ sở VN |
|---|---|---|
| Unrestricted Cash | Total cash − Restricted cash (escrow, DSRA locked) | Confirm từng tài khoản escrow |
| DSRA_available | DSRA balance × (1 − cross_default_lock_flag) | Cross-default active → = 0 |
| Undrawn 50% haircut | 50% undrawn bị freeze bởi counterparty banks | 2011 VN: nhiều NHTM đồng thời siết hạn mức |
| Liquid assets 60% | PF assets illiquid hơn corporate | VN market depth thấp; asset sale PF: 6–12 tháng |
| FX adjustment | USD DSRA vs VND burn | Stress FX = spot × 1.25 (25% VND depreciation) |

**Sequential Waterfall (thực hiện theo đúng thứ tự)**:

```
Tầng 0: Pre-check — xác nhận và loại trừ restricted cash TRƯỚC khi tính

Tầng 1: Operating CF post-stress (net of maintenance capex — không gross)

Tầng 2: DSRA draw
         Điều kiện: không bị cross-default lock
         Confirm cross-default clause trong loan agreement TRƯỚC

Tầng 3: Undrawn LC × 50% haircut
         Assumption: 50% counterparty banks freeze commitments trong stress

Tầng 4: Asset sale × 60% haircut
         ⚠️ CHỈ tính nếu runway hiện tại > 180 ngày
         Lý do: Chuyển nhượng QSDĐ VN: 3–6 tháng (Luật ĐĐ 2013; NĐ 43/2014)
         Runway <180d mà tính Tầng 4 = FALSE LIQUIDITY — NGHIÊM CẤM

Tầng 5: Sponsor inject
         CHỈ Completion Guarantee hợp lệ
         Keepwell / Letter of Comfort = 0 trong mọi calculation
```

**CRITICAL NOTE — Extreme Freeze (45 ngày) — Waterfall theo loại deal**:

**PF (Non-recourse, không có Completion Guarantee)**:
→ Chỉ Tầng 0–3. Tầng 4 và 5 không được tính.

**HS (có Completion Guarantee hợp lệ)**:
→ Tầng 0–3 + Tầng 5, với đủ cả 3 điều kiện:
1. Legal opinion xác nhận Completion Guarantee callable trong ≤30 ngày
2. Sponsor rating ≥ BB+ (Moody's/Fitch/S&P hoặc FiinRatings VN — confirm trong 30 ngày trước draw date)
3. Không có cross-default từ bất kỳ Sponsor entity nào

→ Thiếu bất kỳ điều kiện → Tầng 5 = 0, chỉ Tầng 0–3.
→ Tầng 4 KHÔNG tính trong Extreme Freeze với mọi deal type.

### 5.4 Monte Carlo Requirements

```
Số lượng runs    : Tối thiểu 10,000 (không phải 1,000)
Phân phối        : Revenue = log-normal | Opex = gamma
                   KHÔNG dùng normal distribution (underestimates fat tail)
Output bắt buộc  : VaR95% VÀ Expected Shortfall ES97.5%
                   ES97.5% = average of worst 2.5% scenarios
Correlation      : Revenue/Opex ≥ 0.3 | Commodity/FX = 0.5 (USD-denominated)
Sensitivity      : Top 3 variables driving runway variance → report to committee
Pass condition   : ES97.5% runway > 45 ngày (không chỉ VaR95%)
```

### 5.5 Refinancing Wall Analysis (Bắt buộc PF và HS)

**Bước 1 — Map repayment schedule**:
Plot toàn bộ principal repayment đến maturity. Flag năm balloon >20% outstanding = "Wall Year".

**Bước 2 — Stress refinancing scenarios**:

| Scenario | Refi rate | Market availability | Cơ sở VN |
|---|---|---|---|
| Base | Current +150bps | 80% | Điều kiện tín dụng bình thường |
| Stress | Current +350bps | 50% | SBV thắt chặt (2011: lending rate lên 20%+) |
| Severe | Current +600bps | 0% — self-fund từ operating CF | Banking system freeze tail |

> Nguồn: SBV Interest Rate Statistics 2011, 2022; ADB Vietnam Financial Markets 2023–2024.

**Bước 3**: DSCR tại Wall Year dưới stress refi rate phải > ngưỡng scorecard → FAIL Gate 2 nếu miss.
**Bước 4**: Runway tại Wall Year ≥ 12 tháng (gấp đôi requirement bình thường).

### 5.6 IFRS9 Staging & ECL

**Stage migration triggers (document tại origination)**:

| Trigger | Stage | Action | VN Note |
|---|---|---|---|
| DSCR < ngưỡng scorecard − 0.15x | 1 → 2 | Lifetime ECL | |
| Runway < 90 ngày (base) | 1 → 2 | Lifetime ECL | |
| Runway < 45 ngày (stress) | 2 → 3 | Full provision | ~ Nhóm 3 TT 11/2021 |
| Payment missed >10 ngày | 1 → 2 | Lifetime ECL | **Nhóm 2** per TT 11/2021 Điều 10 |
| Payment missed >90 ngày | 2 → 3 | NPL, full provision | **Nhóm 3** per TT 11/2021 |
| Wall Year DSCR fail | 1 → 2 | Proactive staging | |

**Phân biệt quan trọng**:
- **Covenant EOD** (loan agreement): Payment ≥30 ngày → trigger acceleration rights
- **Regulatory Nhóm 2** (TT 11/2021): Payment ≥10 ngày → phân loại nợ cần chú ý (bắt buộc NHNN)
- **Regulatory Nhóm 3** (TT 11/2021): Payment ≥90 ngày → NPL chính thức

**ECL at origination**: Bắt buộc estimate và document PD/LGD/EAD Stage 1 trước disbursement.

---

## 6. TRANSACTION STRUCTURING & COVENANTS

### 6.1 Debt Structure

| Loại | Structure |
|---|---|
| **PF** | Sculpted amortization tenor 15–20y + DSRA 6–12 tháng + Strict cash waterfall |
| **CL** | Term loan + RCF + Quarterly leverage test |
| **HS** | Project layer first → Sponsor step-up trigger khi DSCR < 1.2x |

### 6.2 DSCR Covenant

- **Threshold**: Ngưỡng scorecard per Mục 3.2 − 0.10x buffer
- **Testing**: Quarterly (31/3 · 30/6 · 30/9 · 31/12)
- **Basis**: Trailing 12-month actuals — 4 quarters liền trước ngày test
- **Định nghĩa "trailing 12m"**: KHÔNG dùng LTM adjusted hoặc annualized partial period
- **Anti-gaming**: One-time revenue >5% total trong trailing 12m → loại khỏi EBITDA/CFADS (trừ khi Committee pre-approve)
- **EBITDA definition**: Tham chiếu Mục 3.2 — không có definition riêng tại covenant
- **Cure period**: 30 ngày post-test

**CURE PERIOD OVERRIDE — BẮT BUỘC**:
```
Runway xuống dưới 45 ngày BẤT KỲ LÚC NÀO trong cure window:
→ Cure period bị hủy NGAY LẬP TỨC
→ Event of Default có hiệu lực tức thì
→ Legal + BOD escalation không chờ hết cure period
Nguyên tắc: Runway-based EoD LUÔN ưu tiên hơn covenant cure period.
Lý do: 30 ngày cure khi runway chỉ còn 45 ngày = mất 30 ngày
        runway trong thời điểm nguy hiểm nhất.
```

### 6.3 Các Covenant Bổ sung

**Runway Covenants**:
- Runway < 120 ngày → Enhanced monthly monitoring
- Runway < 90 ngày → Weekly reporting + CRO involvement
- Runway < 45 ngày → Event of Default (cure override áp dụng)
- DSRA < 3 tháng → Mandatory equity cure injection

**Dividend Restriction** *(Luật DN 2020 Điều 135)*:
```
Không chi cổ tức nếu:
- DSCR < ngưỡng scorecard, HOẶC
- Runway < base threshold theo product type, HOẶC
- Bất kỳ covenant nào đang trong breach / cure period

VN legal: Nghị quyết ĐHĐCĐ / HĐTV về phân phối lợi nhuận
phải có bank pre-approval trước khi thông qua.
```

### 6.4 Sponsor Support Classification

| Loại | Tính pháp lý | Vị trí Waterfall | Ghi chú |
|---|---|---|---|
| **Completion Guarantee** | Legally binding, on-demand | Tầng 5 (điều kiện per Mục 5.3) | Mạnh nhất — tính đầy đủ |
| **Keepwell Agreement** | Best-efforts, không on-demand | Không tính — mitigant định tính | Không được định lượng |
| **Letter of Comfort** | Không có giá trị pháp lý VN | Không tính — bỏ qua hoàn toàn | Không ghi nhận |

Sponsor inject trigger phải có: specific amount · timeline ≤30 ngày từ trigger · cure period · failure consequence (acceleration).

### 6.5 Security Package

| Deal | 1st Lien | 2nd Lien / Support |
|---|---|---|
| **PF** | Project assets + Contract assignment (PPA, EPC, O&M) | Completion Guarantee |
| **CL** | AR/Inventory blanket lien (đã đăng ký GDBĐ) | Director Personal Guarantee |
| **HS** | Project assets + Sponsor shares pledge (đã đăng ký) | Sponsor Support (*) |

(*) HS: Chỉ Completion Guarantee là enforceable security. Keepwell = mitigant định tính. Letter of Comfort = vô hiệu lực.
**Security chưa đăng ký = không có priority trong enforcement VN.**

---

## 7. CREDIT COMMITTEE & GOVERNANCE

### 7.1 Delegation of Authority (DOA) Matrix

| Hạn mức | Cấp phê duyệt | Điều kiện |
|---|---|---|
| <100 tỷ VND | Chi nhánh Credit Committee | Trong hạn mức phân cấp |
| 100–500 tỷ VND | Hội sở Credit Committee | Tối thiểu 5 thành viên; có CRO |
| >500 tỷ VND | CEO + Board Risk Committee | CRO Veto quyền per Board DOA policy |
| PF / HS bất kỳ giá trị | Hội sở minimum | Luôn phải có CRO review |

> CRO có quyền veto bất kỳ deal nào vượt risk appetite, bất kể DOA level.
> Veto phải document bằng văn bản và report Board Risk Committee trong 5 ngày.

### 7.2 Standard Committee Pack (22 slides)

| Slide | Nội dung |
|---|---|
| 1 | Executive Summary + Recommendation + Ngưỡng DSCR scorecard áp dụng |
| 2 | Deal classification + Risk Appetite Matrix + DOA level |
| 3 | KYC/AML + ESG screening results |
| 4 | Business overview + Industry Risk Score |
| 5 | Financial model + Bộ chỉ số tổng hợp (DSCR, ICR, D/E, Debt/EBITDA) |
| **5A** | **LIQUIDITY CRISIS — Runway table + Waterfall diagram (slide riêng bắt buộc)** |
| 6 | Stress results + Monte Carlo ES97.5% + Top 3 sensitivity drivers |
| 7 | Risk matrix + Mitigants |
| 8 | Transaction structure + Covenants table |
| 9 | Security package + VN Legal Enforceability status |
| 10 | Portfolio concentration impact |
| 11 | Exit/Default waterfall + Recovery analysis |

### 7.3 Mandatory Committee Questions

```
☐ DSCR thực tế là bao nhiêu? Ngưỡng scorecard yêu cầu là bao nhiêu?
    (Trình bày step-by-step: base + từng điều chỉnh)

☐ Tất cả chỉ số Nhóm 1–3 trong ngưỡng?
    ICR · Current Ratio · Quick Ratio · D/E · Debt/EBITDA · ROA · EBITDA Margin

☐ Extreme Freeze (45 ngày) runway confirmed?
    PF (non-recourse): Waterfall Tầng 0–3 only — số runway cụ thể?
    HS: Tầng 0–3 + Tầng 5 nếu đủ 3 điều kiện?
    Ref: Mục 5.3 Critical Note

☐ DSRA covers 4.2× Compound burn multiplier?

☐ Sponsor inject mechanics confirmed?
    HS only — Completion Guarantee on-demand, legal verified?
    PF non-recourse: N/A — bỏ qua câu này

☐ Asset sale: runway có >180 ngày không?
    Nếu <180d → Tầng 4 không được tính vào runway

☐ DSCR tại Wall Year dưới stress refi rate? Pass / Fail?

☐ Top 3 Monte Carlo sensitivity drivers là gì? Committee accept không?

☐ FX stress VND +25% → FX-Adj DSCR giảm bao nhiêu %? Dưới 20% không?

☐ KYC/AML: Tất cả 5 bước pass? ESG: Không có Red flag chưa resolved?

☐ DOA: Deal có nằm trong thẩm quyền phê duyệt của cấp này không?

☐ Land rights: QSDĐ trả 1 lần hay hàng năm? LTV áp dụng đúng chưa?
```

---

## 8. DISBURSEMENT & ONGOING MONITORING

### 8.1 Conditions Precedent (CP)

| Loại | CP bắt buộc |
|---|---|
| **PF** | EPC financial close · Land handover confirmed · Insurance in place |
| **CL** | Inventory physical audit complete |
| **HS** | Sponsor Completion Guarantee executed + Legal opinion confirm enforceability |
| **Tất cả** | Security perfection (100% legal checklist Mục 4.2) · ECL Stage 1 documented (PD/LGD/EAD) · KYC/AML all clear |

### 8.2 Real-time Monitoring Dashboard

Core KPIs (update tối thiểu monthly):
- Runway forecast 6 tháng forward
- DSRA coverage ratio (actual vs required)
- Stress burn multiple (current vs scenario thresholds)
- DSCR trailing 12m vs ngưỡng scorecard

### 8.3 Early Warning Indicators

| Indicator | Nguồn | Tần suất | Amber | Red |
|---|---|---|---|---|
| Key customer credit score | CIC + FiinRatings | Monthly | Downgrade 1 notch | Downgrade 2+ notch |
| Commodity price index | Bloomberg/Reuters/LME | Weekly | −15% từ model | −25% từ model |
| USD/VND exchange rate | SBV central rate | Daily | +5% từ model | +10% từ model |
| Sector NPL | SBV bulletin | Quarterly | +0.3% QoQ | +0.5% QoQ |
| Borrower payroll/tax payment | Bank statement* | Monthly | Delay 15 ngày | Delay 30+ ngày |
| PPA Offtaker (EVN/PVN) credit | CIC + Moody's/FiinRatings | Quarterly | Downgrade 1 notch | Downgrade ≥2 notch hoặc xuống BB− |
| Key supplier credit | CIC/external | Quarterly | Downgrade 1 notch | Supplier NPL hoặc restructuring |

*Access: Quyền truy cập bank statement phải ghi trong loan agreement. Hoặc borrower nộp monthly tax payment certificate.

**Counterparty Downgrade Protocol**:
- EVN/PVN downgrade ≥2 notch hoặc xuống BB−: Re-validate revenue trong 30 ngày. Revised DSCR < ngưỡng scorecard → Stage 1→2.
- Key Supplier NPL/restructuring: Supply chain review. CRO report trong 15 ngày.

### 8.4 Escalation Triggers

| Trigger | Action | Escalation |
|---|---|---|
| Runway < 120 ngày | Monthly enhanced reporting | CRO review |
| Runway < 90 ngày | Weekly monitoring + contingency planning | Credit Committee |
| Runway < 45 ngày | **Event of Default** (cure override per Mục 6.2) | Legal + BOD |
| DSRA < 3 tháng | Mandatory equity injection | Legal enforcement |
| DSCR covenant breach | 30 ngày cure (override nếu runway <45d) | CRO + Legal |
| Sector NPL +0.5% QoQ | Re-stress toàn bộ deals trong sector | CRO + ALCO |

### 8.5 Anti-Gaming Controls

- **AR aging**: Independent third-party AR audit tối thiểu 1 lần/năm. Ghi trong loan agreement.
- **DSCR covenant**: Trailing 12-month actuals only — không dùng forward projections để meet covenant.
- **EBITDA normalization**: Tối đa ±7% (Mục 3.2). Adjustment >3% cần independent accountant.
- **Dividend**: Không chi khi vi phạm covenant — Nghị quyết phải có bank pre-approval.

### 8.6 Risk-Based Liquidity Re-stress Protocol

| Deal category | Tần suất re-stress | Coverage |
|---|---|---|
| Stage 2 (IFRS9) | Quarterly | 100% bắt buộc |
| Runway < 120 ngày | Monthly | 100% bắt buộc |
| High-risk sectors (Mining, O&G, RE Dev) | Semi-annual | 100% |
| Stage 1, Runway >120 ngày, Standard sectors | Annual | 20% random sample |

Re-stress output: Runway forecast update + Stage migration check. CRO sign-off bắt buộc nếu runway <120 ngày sau re-stress.

---

## 9. QUALITY GATES & CHECKLIST

### GATE 1 — PRE-SCREEN (Ngày 1–2)

```
☐ KYC/AML: Tất cả 5 bước pass (Mục 2.1)
    FAIL BẤT KỲ BƯỚC → IMMEDIATE REJECT — không exception

☐ DSCR sơ bộ: xác định ngưỡng scorecard
    Ghi rõ: Base (1.25x PF / 1.20x CL) + từng điều chỉnh = ngưỡng cuối

☐ Base runway > threshold theo product type:
    WC Facility: >3 tháng
    Term Loan:   >6 tháng
    PF/HS:       >12 tháng

☐ DSRA_available > 3 tháng × (Base Burn × 2.0x stress proxy)
    Ref: Mục 3.3 Step 3
```

**GATE 1 FAIL → STOP. Reject hoặc CRO escalate với full documentation.**

---

### GATE 2 — DD COMPLETE (Ngày 10)

```
☐ DSCR thực tế ≥ Ngưỡng scorecard (Mục 3.2 Bước 1 + Bước 2)
    Document: DSCR = [số]; Ngưỡng = [số]; Pass/Fail

☐ Tất cả chỉ số bổ sung trong ngưỡng hoặc có giải trình đầy đủ:
    ICR · Current Ratio · Quick Ratio · D/E · Debt/EBITDA · ROA · EBITDA Margin

☐ Compound stress runway > minimum threshold trên TẤT CẢ 4 scenarios:
    2008: >90 ngày · COVID: >60 ngày · Extreme Freeze: >45 ngày · FX: >60 ngày

☐ Financial model validated + Monte Carlo 10,000 runs ES97.5% pass

☐ Refinancing Wall Analysis complete:
    DSCR tại Wall Year > ngưỡng scorecard

☐ IFRS9 ECL Stage 1 documented: PD · LGD · EAD estimated và lưu trữ

☐ FX-Adjusted DSCR: stress VND +25% → impact < 20% so với base DSCR

☐ Vietnam Legal Enforceability Checklist: 100% hoàn thành (6 items Mục 4.2)
    Land right type xác định + LTV đúng theo loại TS

☐ ESG Assessment complete — không có Red flag chưa resolved

☐ DSO và Customer Concentration đã so sánh với ngưỡng ngành (Mục 4.1)
```

**GATE 2 FAIL → Không được trình Committee. Return to DD.**

---

### GATE 3 — COMMITTEE APPROVAL (Ngày 11)

```
☐ Liquidity Crisis slide (5A) + Monte Carlo sensitivity reviewed

☐ DSCR scorecard trình bày step-by-step:
    Committee acknowledged ngưỡng yêu cầu và DSCR thực tế

☐ Portfolio concentration limits compliant

☐ Term sheet issued và borrower acknowledged

☐ IFRS9 ECL Stage 1 (PD/LGD/EAD) disclosed và reviewed bởi Committee

☐ Refinancing Wall stress DSCR presented:
    Committee acknowledged Wall Year risk

☐ DOA confirmed: deal trong thẩm quyền phê duyệt của cấp này

☐ KYC/AML all clear + ESG status disclosed to Committee
```

**GATE 3 COMPLETE → Proceed to execution.**

---

## 10. GOVERNANCE, TOOLS & VALIDATION

### 10.1 Mandatory Excel Toolkit

| Tool | Mục đích |
|---|---|
| DSCR Scorecard Calculator | Tính ngưỡng theo ngành/lifecycle/revenue + kiểm tra Nhóm 1–3 |
| Integrated Model Builder | PF/CL/HS financial model templates (VAS + IFRS) |
| Liquidity Crisis Simulator | 10,000-run Monte Carlo + correlation matrix + ES97.5% |
| Committee Dashboard | Runway/Waterfall visualization + EWI dashboard |
| ESG Scorecard | ESG assessment + pricing impact |

**Excel governance bắt buộc**:
- Filename: `[DealName]_[YYYYMMDD]_v[X]` — không overwrite
- Mỗi deal giữ file riêng biệt, locked (read-only) sau committee approval
- Analyst override model output: phải document rationale + supervisor sign-off

### 10.2 Model Validation Framework

**DSCR Scorecard Model**:
- Independent validation bắt buộc trước go-live và mỗi khi adjustments thay đổi
- Option A: External party (audit firm/rating agency/risk consultant) — preferred
- Option B: Internal unit KHÁC với unit build model
- KHÔNG chấp nhận: cùng team/unit build và validate

Documentation: Test methodology + findings + CRO sign-off. Lưu trữ tối thiểu 5 năm.

**Monte Carlo**: Annual backtesting vs actuals. Năm đầu triển khai: industry proxy dataset được ALCO approve.

### 10.3 Annual Calibration

```
Timing  : Q1 hàng năm — ALCO session
Nội dung: PD/LGD update theo VN default experience (SBV sector NPL data)
          Scorecard adjustment review (SBV NPL bulletin; GSO/VCCI industry survey)
          Stress scenario severity review (SBV macro outlook + IMF)
          Monte Carlo parameter update
Trigger : Sector NPL +0.5% QoQ → re-calibrate ngay, không chờ Q1
```

### 10.4 Implementation Roadmap

| Phase | Timeline | Nội dung |
|---|---|---|
| Phase 1 | 30 ngày | Training + DSCR Scorecard tool + KYC/AML integration + waterfall correction |
| Phase 2 | 60 ngày | Monte Carlo upgrade (10k + ES97.5%) + Refinancing Wall tool |
| Phase 3 | 90 ngày | IFRS9 staging linkage + ESG scorecard + DOA digitization |
| Phase 4 | 6–12 tháng | Excel → Enterprise credit management platform migration |

---

## 11. DEPLOYMENT STATUS & LONG-TERM ROADMAP

### 11.1 Deployment Conditions

SOP này ở trạng thái **Near-Production**. Điều kiện bắt buộc trước live deployment:

1. **Senior Credit Officer oversight**: Mỗi deal phải có SCO review — không autonomous
2. **ALCO sign-off**: Trên scorecard adjustments trước khi áp dụng cho portfolio thực
3. **Annual backtesting**: Từ năm thứ 2 (năm đầu dùng industry proxy data — ALCO approve)
4. **DOA Board approval**: DOA Matrix phải được HĐQT phê duyệt chính thức
5. **Legal opinion template**: Chuẩn hóa theo Luật Đất đai 2024, Luật TCTD 2024

### 11.2 Long-term Gaps — Owner & Timeline

Được track trong ALCO Risk Appetite Framework, báo cáo quarterly cho Risk Committee.

| Gap | Owner | Target | Interim Mitigation |
|---|---|---|---|
| Portfolio sector correlation matrix | CRO + Portfolio Analytics | Q3 2026 | Manual sector cap: Utilities ≤25%, Mining ≤8% |
| Cash dominion mechanism | Legal + Transaction Banking | Q4 2026 | Monthly bank statement review + covenant inspection right |
| Banking system freeze scenario | ALCO + Market Risk | Q2 2027 | 50% undrawn haircut đã partially address |
| VN-specific PD/LGD calibration | Credit Risk + Data Analytics | Q4 2026 | SBV sector NPL làm proxy interim |
| ESG scoring methodology chuẩn hóa | Sustainability + Credit Risk | Q2 2027 | Checklist pass/fail hiện tại là interim |
| DSCR scorecard backtesting VN portfolio | Credit Risk + Quant | Q2 2027 | Review ALCO Q1/2027 với 12 tháng dữ liệu thực |

Owner chịu trách nhiệm cập nhật SOP khi roadmap hoàn thành. Gaps phải disclosed cho committee trong mỗi deal cho đến khi resolved.

---

## 12. PHỤ LỤC: TỔNG HỢP DỮ LIỆU & BENCHMARK

| Chỉ số | Giá trị | Nguồn | Năm |
|---|---|---|---|
| Định nghĩa DSCR chính thức VN | Dòng tiền HĐKD / Nợ phải trả hàng năm | Bộ Tài chính VN — vbpq.mof.gov.vn/File/19730 | — |
| NPL toàn hệ thống VN | 4.8% (Jul 2024); 5.3% (Mar 2025) | IMF Vietnam Article IV 2024; AMRO 2025 | 2024–2025 |
| NPL RE sector | 3.4% (Jul 2024) | SBV / IMF Vietnam 2024 | 2024 |
| RE developer ICR | 0.7x Q2/2024 (từ 1.8x năm 2022) | IMF Vietnam 2024 | 2024 |
| RE developer leverage | 4–5x equity | VIR Nov 2024 | 2024 |
| ROE bình quân 28 NH 2022 | 19.8% | FiinGroup / Báo cáo NHTM 2022 | 2022 |
| ROE Vietcombank 2024 | 18.5% | VCB Annual Report 2024 | 2024 |
| ROE BIDV 2022 | 20.2% | BIDV Annual Report 2022 | 2022 |
| ROE VietinBank 2023 | 17.1% | Statista / VietinBank FS 2023 | 2023 |
| VND depreciation | −9.3% (2011); −9% (H2/2022); −4.5% (H1/2024) | SBV; Wikipedia VND; UOB VN 2025 | 2011–2024 |
| VN construction overrun avg | 35–40% | Kiểm toán Nhà nước VN 2018–2023 | 2018–2023 |
| Global construction overrun avg | 28% | IFC Infrastructure Study 2022 | 2022 |
| DSO Construction global | ~100 ngày | Hackett Group 2022 | 2022 |
| DSO tổng thể global | 40.6 ngày | Hackett Group 2022 | 2022 |
| VN bank collateral tied to RE | 70% | VIR Nov 2024 | 2024 |
| CAR VN banking | 10.4% (SOCBs); 12.1% (private) | IMF Vietnam 2025 | 2025 |
| VND lending rate | 9–11%/năm | ADB Vietnam Financial Markets 2023–2024 | 2023 |
| DSCR base PF (IFC/ADB) | 1.25x | IFC/ADB PF standard; thực tiễn syndicated PF VN | — |
| ICR threshold CL | ≥ 2.0x | NHCSXH Credit Manual; thực tiễn Top 5 NHTM VN | — |

---

*SOP V5.2 Final — Tích hợp toàn bộ fixes từ V3.0 đến V5.2.*

*Thay đổi cốt lõi V5.2: DSCR được khôi phục theo định nghĩa chính thức Bộ Tài chính VN
(Dòng tiền HĐKD / Nợ phải trả hàng năm). Framework đánh giá gồm 4 bước tuần tự:
(1) Tính DSCR thực tế theo công thức VN, (2) Xác định ngưỡng yêu cầu bằng scorecard
cộng tính, (3) So sánh và quyết định, (4) Kiểm tra bộ chỉ số bổ sung TT 11/2021.*

*Không có SOP nào loại trừ hoàn toàn tail risk.*
*Senior Credit Officer oversight bắt buộc cho mọi deal >500 tỷ VND.*
