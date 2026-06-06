# STANDARD OPERATING PROCEDURE (SOP): CORPORATE CREDIT APPRAISAL & RISK MANAGEMENT
**Version:** 1.0 (Institutional Grade)
**Confidentiality:** Strictly Confidential (Internal Use Only)
**Target Audience:** Corporate Banking, Credit Risk, Project Finance, Credit Committee Members

---

## 1. MỤC TIÊU SOP
- **Objective:** Chuẩn hóa quy trình thẩm định tín dụng doanh nghiệp lớn (Corporate) và tài trợ dự án (Project Finance) tại Việt Nam theo chuẩn Basel II/III và IFRS9, tích hợp góc nhìn phòng thủ rủi ro (defense-first).
- **Logic:** Ngăn chặn các rủi ro hệ thống từ việc bóp méo BCTC (Window Dressing), rủi ro thanh khoản (Liquidity Trap), và định giá tài sản ảo (Overvaluation).
- **Decision Rule:** Không cấp tín dụng dựa trên "mối quan hệ" hay "quy mô tài sản thế chấp". Quyết định phải dựa trên Cashflow thực tế, năng lực trả nợ (Repayment Capacity) và khả năng thanh lý tài sản (Legal Enforceability).

## 2. PHẠM VI ÁP DỤNG
- Áp dụng cho các khoản cấp tín dụng > 50 tỷ VNĐ (Mid-corp) và > 500 tỷ VNĐ (Large Corp/Project Finance).
- **Out of scope:** SME, Micro-SME, Retail (Sử dụng Credit Scoring Model thay vì phân tích Fundamental).

## 3. DEAL CLASSIFICATION
- **Logic:** Phân loại Deal để áp dụng mức độ thẩm định (DD) phù hợp.
- **Classification:**
  - *Tier 1 (Core & Clean):* Blue-chips, Niêm yết VN30, BCTC Big 4 audited (Unqualified). DD chuẩn.
  - *Tier 2 (Complex/High Yield):* Bất động sản (Real Estate), Năng lượng tái tạo (RE), BOT. Yêu cầu Stress Testing & Cashflow Ring-fencing.
  - *Tier 3 (High Risk/Restructuring):* Dòng tiền âm, nợ nhóm 2 (CIC), đảo nợ. Yêu cầu LGD Model và Liquidation Value Assessment.
- **Escalation Condition:** Bất kỳ Deal Tier 3 nào phải được trình lên Risk Head / CRO trước khi ký Termsheet.

## 4. PRE-SCREENING (GATE 0)
- **Objective:** Loại bỏ nhanh các deal "độc hại" (Toxic deals) để tiết kiệm nguồn lực (Time-wasting avoidance).
- **Checklist (Knock-out criteria):**
  1. CIC có nợ nhóm 3-5 trong vòng 3 năm gần nhất (Bao gồm cả related parties/Sponsors).
  2. BCTC kiểm toán bởi Non-Big 4 có ý kiến ngoại trừ (Qualified Opinion) liên quan đến Going Concern hoặc Ghi nhận doanh thu.
  3. Lĩnh vực kinh doanh nằm trong Exclusion List (Vũ khí, cờ bạc, phá rừng nguyên sinh...).
  4. Đã từng Default / Haircut với ngân hàng khác.
- **Vietnam-specific:** Cẩn thận với CIC "sạch" nhưng có các khoản nợ trái phiếu doanh nghiệp (Corporate Bonds) chậm trả lãi. Phải check HNX (Chuyên trang TPDN).

## 5. MANDATORY DOCUMENTS CHECKLIST
- **Objective:** Đảm bảo hồ sơ "pháp lý - tài chính - dự án" đầy đủ và có thể sử dụng làm bằng chứng pháp lý (Legal enforceability).
- **Checklist:**
  - BCTC kiểm toán 3 năm (Full notes, không chỉ bảng cân đối).
  - Sao kê tài khoản ngân hàng (Bank statements) 12 tháng gần nhất (Bắt buộc để check cashflow thực).
  - Tờ khai thuế VAT (Đối chiếu doanh thu thực tế vs Doanh thu BCTC).
  - Hồ sơ pháp lý dự án (Chấp thuận chủ trương đầu tư, GPXD, 1/500, Giấy chứng nhận QSDĐ).
- **Warning Sign:** Khách hàng từ chối cung cấp Sao kê ngân hàng hoặc Tờ khai thuế -> **Reject ngay lập tức**. BCTC có thể xào nấu, nhưng dòng tiền bank và thuế khó làm giả hơn.

## 6. FINANCIAL STATEMENT ANALYSIS (BEYOND THE NUMBERS)
- **Objective:** Lọc bỏ "lớp trang điểm" (Window dressing) để tìm ra Core Earnings thực sự.
- **Logic:** Lợi nhuận kế toán (Accounting Profit) KHÔNG trả được nợ. Chỉ có Tiền (Cash) mới trả được nợ.
- **Warning Signs & Manipulation Detection:**
  - *Revenue Pull-forward:* Phải thu (AR) tăng đột biến so với Doanh thu (DSO tăng vọt).
  - *Inventory Inflation:* Hàng tồn kho tăng nhưng Vòng quay HTK (DIO) giảm mạnh. (Check: Có trích lập dự phòng giảm giá HTK không?).
  - *Fake Capex:* Chi phí XDCB dở dang (WIP) tồn đọng nhiều năm không kết chuyển thành TSCĐ (Dấu hiệu rút tiền qua công ty sân sau).
  - *Capitalized Expenses:* Vốn hóa chi phí lãi vay (Capitalized Interest) quá mức vào dự án để che giấu lỗ hoạt động.
- **Decision Rule:** Điều chỉnh BCTC (Pro-forma). Cắt giảm các khoản mục ảo khỏi Vốn chủ sở hữu (Tangible Net Worth - TNW). Nếu TNW < 0 sau điều chỉnh -> **Reject**.

## 7. CASHFLOW ANALYSIS
- **Objective:** Phân tích khả năng tạo tiền thực tế.
- **Formula:** 
  - `Operating Cash Flow (OCF) = Net Income + D&A - Change in Net Working Capital`
  - `Free Cash Flow to Firm (FCFF) = OCF - Capex`
- **Logic:** Nhiều doanh nghiệp VN báo lãi khủng nhưng OCF âm liên tục. Đây là mô hình Ponzi (Lấy nợ mới đắp nợ cũ).
- **Thresholds:** OCF/Debt Service > 1.2x.
- **Vietnam-specific:** Cảnh giác "Cashflow Illusion" - Tiền mặt đầu kỳ/cuối kỳ cao do vừa giải ngân tiền vay, không phải từ HĐKD. Check "Dòng tiền thuần từ HĐKD".

## 8. EBITDA NORMALIZATION
- **Objective:** Chuẩn hóa EBITDA để tính tỷ lệ đòn bẩy và DSCR chính xác.
- **Logic:** Loại bỏ các khoản thu nhập/chi phí không thường xuyên (One-off items).
- **Adjustments (Add-backs & Deductions):**
  - Trừ đi: Lãi từ đánh giá lại tài sản (Revaluation gain), Lãi từ bán tài sản/công ty con (nếu không phải core business).
  - Trừ đi: Doanh thu nội bộ (Intercompany revenue) không tạo ra dòng tiền bên ngoài.
  - Cộng lại: Chi phí tái cấu trúc một lần, Lỗ do tỷ giá chưa thực hiện.
- **Warning Sign:** Khách hàng đề xuất "Add-backs" quá nhiều chi phí vô lý.
- **Threshold:** Adjusted EBITDA margin phải ổn định so với peer group. Nếu biến động > 50% y-o-y mà không có lý do hợp lý -> Có dấu hiệu xào nấu.

## 9. WORKING CAPITAL ANALYSIS
- **Objective:** Đánh giá chu kỳ chuyển hóa tiền mặt (Cash Conversion Cycle - CCC) và nhu cầu vốn lưu động cốt lõi.
- **Formula:** `CCC = DSO + DIO - DPO`
- **Logic:** Doanh nghiệp thiếu thanh khoản thường kéo dài DPO (Chiếm dụng vốn NCC) và không thu được AR (DSO tăng).
- **Warning Sign:** Phải thu khác (Other Receivables) chiếm > 20% Tổng tài sản. Tại Việt Nam, "Phải thu khác" thường là hố đen giấu tiền rút ra cho Chủ tịch/Related parties (Ủy thác đầu tư, tạm ứng cá nhân).
- **Escalation:** Nếu Phải thu khác > Vốn chủ sở hữu -> **Auto-reject** hoặc yêu cầu Chủ tịch bảo lãnh cá nhân (Personal Guarantee).

## 10. LIQUIDITY & RUNWAY ANALYSIS
- **Objective:** Tính toán doanh nghiệp có thể "sống sót" bao lâu nếu dòng tiền doanh thu dừng lại.
- **Formula:** `Liquidity Runway (Months) = (Cash + Undrawn Committed Facilities) / Monthly Cash Burn`
- **Logic:** Doanh nghiệp không phá sản vì thiếu vốn chủ, họ phá sản vì hết tiền mặt (Illiquidity).
- **Thresholds:** Runway > 6 tháng trong kịch bản Base case; > 3 tháng trong kịch bản Stress.
- **Treatment:** Bỏ qua "Restricted Cash" (Tiền gửi bị phong tỏa cho L/C, Bảo lãnh) ra khỏi công thức tính Runway.

## 11. DEBT STRUCTURE ANALYSIS
- **Objective:** Bóc tách cấu trúc nợ (Seniority, Maturity, Currency).
- **Logic:** Đánh giá rủi ro kỳ hạn (Maturity mismatch) và thứ tự ưu tiên (Lien priority).
- **Checklist:**
  - Short-term Debt / Total Debt.
  - Unsecured vs Secured Debt.
  - Off-balance sheet debt: Trái phiếu doanh nghiệp (đang hạch toán ngoài bảng), Cam kết bảo lãnh cho công ty con.
- **Warning Sign:** Doanh nghiệp dùng Nợ ngắn hạn (Short-term working capital loan) để tài trợ Tài sản dài hạn (Project Capex). Đây là công thức dẫn đến tử vong (Death spiral).

## 12. REFINANCING RISK
- **Objective:** Đánh giá khả năng "bức tường nợ" (Refinancing Wall) đổ sập.
- **Logic:** Nếu DN có lượng trái phiếu / nợ gốc đến hạn khổng lồ trong 12-24 tháng tới mà không có nguồn OCF hoặc Refinancing facility rõ ràng -> Nguy cơ vỡ nợ (Default) cực cao.
- **Action:** Yêu cầu cung cấp Repayment Schedule chi tiết của TẤT CẢ các tổ chức tín dụng và Trái phiếu. Check tính khả thi của dòng tiền đối ứng.

## 13. INDUSTRY RISK FRAMEWORK
- **Objective:** Đánh giá rủi ro hệ thống từ vĩ mô và chu kỳ ngành.
- **Framework (Porter's 5 + Macro):**
  - Tính chu kỳ (Cyclicality): Bất động sản, Thép, Vận tải biển (High risk) vs Utilities, Y tế (Low risk).
  - Rủi ro chính sách (Regulatory Risk): Năng lượng tái tạo (FIT rate), BĐS (Siết tín dụng, Luật đất đai).
- **Decision Rule:** Áp dụng LTV (Loan-to-Value) khắt khe hơn đối với các ngành High Cyclicality. Cấm cấp tín dụng cho các ngành Sunset (Đang thoái trào).

## 14. RELATED-PARTY TRANSACTION REVIEW
- **Objective:** Phát hiện "Tunneling" (Rút ruột doanh nghiệp).
- **Logic:** Tại VN, hệ sinh thái gia đình (Family-owned ecosystems) rất phổ biến. Lợi nhuận thường được giữ ở công ty sân sau, lỗ đẩy vào công ty đi vay.
- **Warning Signs:**
  - Bán hàng cho công ty liên quan với biên lợi nhuận thấp bất thường.
  - Mua tài sản / Cổ phần của công ty liên quan với giá trên trời (Overpriced M&A).
  - Tạm ứng không lãi suất cho các cá nhân trong HĐQT.
- **Action:** Yêu cầu BCTC Hợp nhất (Consolidated) VÀ BCTC Riêng lẻ (Standalone) của các core subs. Đánh giá tín dụng trên cơ sở Hợp nhất rủi ro.

## 15. FRAUD DETECTION FRAMEWORK
- **Objective:** Săn lùng sự dối trá (Forensic view).
- **Manipulation Schemes tại VN:**
  - *Fake Sales:* Xuất hóa đơn lòng vòng giữa các công ty con để đẩy doanh thu (Check: Biên lợi nhuận gộp rất nhỏ, Phải thu/Phải trả nội bộ phình to).
  - *Asset Overvaluation:* Mua mảnh đất nông nghiệp, bơm giá qua các công ty thẩm định giá, thế chấp bank rút tiền thật.
  - *Double Pledging:* Cầm cố 1 tài sản ở nhiều nơi (Thiếu cập nhật trên Dăng ký Giao dịch Đảm bảo).
- **Checklist:** Đối chiếu thuế (Tax returns) vs BCTC; Đối chiếu tiền điện/nước vs công suất nhà máy (nhà máy báo chạy 100% nhưng tiền điện giảm).

## 16. LEGAL DD
- **Objective:** Đảm bảo khả năng siết nợ (Enforceability).
- **Checklist:**
  - Quyền sử dụng đất (LURC) có trả tiền 1 lần hay hàng năm? (Trả hàng năm KHÔNG ĐƯỢC thế chấp quyền sử dụng, chỉ thế chấp tài sản trên đất).
  - Cổ phiếu cầm cố có bị phong tỏa (Block) hay hạn chế chuyển nhượng (Lock-up) không?
  - Bảo lãnh của công ty mẹ (Corporate Guarantee) có Nghị quyết HĐQT / ĐHCĐ hợp lệ không? (Nếu thiếu, tòa án VN sẽ tuyên vô hiệu).
- **Reality:** Phá sản tại VN (Bankruptcy) tốn 3-5 năm. Luôn ưu tiên Cầm cố/Thế chấp (Pledge/Mortgage) có quyền tự xử lý tài sản (Right to sell) thay vì chờ phát mãi qua Tòa.

## 17. COLLATERAL VALUATION FRAMEWORK
- **Objective:** Xác định giá trị thu hồi thực tế (Fire-sale value).
- **Logic:** Giá thị trường (Market Value) != Giá thanh lý (Liquidation Value).
- **Haircut thresholds:**
  - BĐS Vị trí trung tâm (Prime Real Estate): Haircut 30-40%.
  - BĐS Tỉnh / Đất dự án chưa đền bù xong: Haircut 60-80% hoặc không nhận.
  - Máy móc thiết bị chuyên dụng: Haircut 70-90%.
  - Cổ phiếu niêm yết có thanh khoản cao: Haircut 50% + Call margin trigger.
  - Cổ phiếu chưa niêm yết (OTC): Value = 0 (Cho mục đích tính LGD, chỉ nhận để kiểm soát quyền sở hữu).

## 18. STRESS TESTING FRAMEWORK
- **Objective:** Kiểm tra khả năng vỡ nợ dưới các cú sốc.
- **Logic:** Base case luôn đẹp do RM (Relationship Manager) viết. RM luôn lạc quan. CRO phải bi quan.
- **Variables to Stress:** Doanh thu giảm 20-30%, Biên gộp giảm 5-10%, Lãi suất vay tăng 3-5% (300-500 bps), Tỷ giá VND/USD tăng 5-10%.
- **Decision Rule:** Nếu DSCR < 1.0x trong kịch bản Stress -> Phải có cấu trúc bù đắp (DSRA - Debt Service Reserve Account ít nhất 6 tháng).

## 19. SCENARIO ANALYSIS
- **Scenarios:**
  - *Recession Scenario:* Suy thoái kinh tế, khách hàng chậm trả (DSO tăng thêm 90 ngày).
  - *Interest Rate Shock:* FED giữ rate cao, SBV thắt chặt, lãi suất huy động tăng vọt.
  - *Real Estate Freeze (Đặc thù VN):* Dự án không bán được hàng, thanh khoản thị trường đóng băng (Zero presales trong 12 tháng).

## 20. MONTE CARLO / SENSITIVITY ANALYSIS
- **Objective:** Chạy mô phỏng định lượng (Quantitative simulation) cho Project Finance.
- **Logic:** Xác định độ nhạy (Sensitivities) của NPV/IRR/DSCR đối với Giá bán (Tariff), Sản lượng (Volume) và Capex overrun.
- **Output:** Ma trận độ nhạy (Data Table trong Excel). Tìm ra "Điểm hòa vốn" (Breakeven points) của DSCR = 1.0x.

## 21. IFRS9 STAGING
- **Logic:** Xác định rủi ro suy giảm tín dụng (SICR - Significant Increase in Credit Risk) để trích lập dự phòng (ECL - Expected Credit Loss).
- **Stages:**
  - *Stage 1:* Performing (12-month ECL).
  - *Stage 2:* Under-performing (Lifetime ECL) - Trễ hạn > 30 ngày, hoặc vi phạm Covenant.
  - *Stage 3:* Non-performing (Lifetime ECL) - Trễ hạn > 90 ngày (Default).

## 22. PD / LGD / EAD FRAMEWORK
- **Probability of Default (PD):** Dựa trên Internal Rating / Credit Scoring (A, B, C, D) map với ma trận PD lịch sử.
- **Loss Given Default (LGD):** = `1 - Recovery Rate`. Tính toán dựa trên giá trị thanh lý tài sản bảo đảm (đã tính haircut và chi phí thu hồi kéo dài 3-5 năm tại VN).
- **Exposure at Default (EAD):** = `Drawn Amount + (Credit Conversion Factor * Undrawn Amount)`.

## 23. COVENANT ENGINEERING (THE CRO'S WEAPON)
- **Objective:** Tạo rào cản pháp lý để can thiệp sớm trước khi DN phá sản.
- **Financial Covenants:**
  - Hạn mức đòn bẩy (Max Leverage): `Total Debt / EBITDA < 4.0x`.
  - Khả năng trả nợ (Min DSCR): `CFADS / Debt Service > 1.2x`.
  - Vốn chủ sở hữu tối thiểu (Min Tangible Net Worth).
- **Non-Financial Covenants:**
  - Không được chia cổ tức (Dividend Lock-up) nếu DSCR < 1.2x.
  - Thay đổi cơ cấu cổ đông (Change of Control) -> Bank có quyền thu hồi nợ trước hạn.
  - Pari-passu: Không được thế chấp tài sản tốt nhất cho bank khác.

## 24. EARLY WARNING INDICATORS (EWI)
- **Objective:** Phản ứng trước khi nợ thành nợ xấu (NPL).
- **Red Flags (EWI):**
  - Chậm nộp BCTC quá 30 ngày.
  - Lãnh đạo chủ chốt / CFO từ nhiệm đột ngột.
  - Dòng tiền qua tài khoản ngân hàng giảm > 30% so với cùng kỳ.
  - Trễ hạn nộp thuế hoặc BHXH.
  - Có tin đồn trên báo chí (Media scanning) về bắt bớ lãnh đạo.

## 25. EVENT OF DEFAULT (EOD) TRIGGERS
- **Objective:** Quyền lực tuyệt đối để thu hồi nợ (Acceleration).
- **Triggers:**
  - Non-payment (Chậm trả gốc/lãi 1 ngày).
  - Breach of Covenants (Vi phạm các chỉ số tài chính đã cam kết).
  - Cross-default: Vỡ nợ với BẤT KỲ tổ chức tín dụng/trái phiếu nào khác (Bắt buộc phải có điều khoản này tại VN).
  - Material Adverse Effect (MAE): Điều khoản quét (Catch-all) cho phép bank rút tiền nếu tình hình kinh tế/luật pháp thay đổi làm DN không thể hoạt động.

## 26. COMMITTEE ESCALATION LOGIC
- **Delegation of Authority (DOA):**
  - < 100 tỷ: Branch / Regional Credit Committee.
  - 100 - 500 tỷ: Head Office Credit Committee.
  - > 500 tỷ hoặc Tier 3 Deals: CEO / Board Risk Committee.
- **Veto Right:** CRO hoặc Trưởng phòng QLRR có quyền phủ quyết (Veto) bất kỳ deal nào, bất chấp quy mô. Vượt Veto phải lên cấp Board.

## 27. POST-DISBURSEMENT MONITORING
- **Objective:** Kiểm soát dòng tiền sau giải ngân, tránh việc dùng sai mục đích (Misappropriation).
- **Checklist:**
  - Thu thập hóa đơn VAT đầu vào, Tờ khai hải quan để đối chiếu với khế ước nhận nợ.
  - Chạy CIC hàng tháng.
  - Rà soát EWI hàng quý.
  - Đánh giá lại tài sản bảo đảm (Valuation update) hàng năm.

## 28. RESTRUCTURING TRIGGER FRAMEWORK
- **Objective:** Cơ cấu lại thời hạn trả nợ (Rescheduling) để cứu DN VÀ cứu Bank.
- **Conditions:** Khách hàng gặp khó khăn TẠM THỜI về thanh khoản (Temporary illiquidity) nhưng VẪN CÓ khả năng sinh lời cốt lõi (Core viability).
- **Anti-evergreening rule:** Cấm cơ cấu nợ chỉ để giấu nợ xấu (Delaying the inevitable). Phải có mô hình tài chính chứng minh được khả năng phục hồi (Turnaround plan). Yêu cầu bổ sung tài sản hoặc bảo lãnh cá nhân làm điều kiện cơ cấu.

## 29. WORKOUT / RECOVERY LOGIC
- **Objective:** Thu hồi tối đa gốc và lãi khi DN mất khả năng phục hồi.
- **Steps:**
  1. Yêu cầu phong tỏa toàn bộ tài khoản (Cash sweep/dominion).
  2. Bắt giữ tài sản lưu động (Hàng tồn kho, Phải thu).
  3. Bán nợ (NPL sale) cho VAMC hoặc các quỹ distressed assets (nếu có).
  4. Khởi kiện ra tòa (Biện pháp cuối cùng do tốn thời gian).

## 30. QUALITY GATES (THE 3 LINES OF DEFENSE)
- **Line 1 (Business Unit / RM):** Origination, thu thập hồ sơ, lập tờ trình (Credit Proposal). Chịu trách nhiệm về tính xác thực của thông tin.
- **Line 2 (Credit Risk Management / Underwriting):** Independent approval. Phản biện, stress test, set covenants.
- **Line 3 (Internal Audit):** Post-audit, kiểm tra việc tuân thủ SOP của cả Line 1 và Line 2.

## 31. GOVERNANCE & MODEL VALIDATION
- **Logic:** Các mô hình Internal Rating, PD, LGD phải được back-test (Kiểm định lại) hàng năm bằng dữ liệu lịch sử vỡ nợ thực tế của Bank.
- **Rule:** Tránh tình trạng "Garbage In - Garbage Out". Dữ liệu nhập vào hệ thống Rating phải do Risk kiểm soát, không để RM tự chấm điểm (RM luôn chấm điểm cao để deal pass).

## 32. EXCEL TOOLKIT REQUIREMENTS
- **Standardized Model:** Yêu cầu dùng File Excel chuẩn của Bank (Financial Spreading & Projection Tool).
- **No hard-coding:** Mọi giả định (Growth rate, margin) phải link với Bảng Assumptions. Mọi công thức phải minh bạch.
- **Audit-friendly:** Có sheet Error Check (Balance sheet chênh lệch = 0, Cashflow = Change in Cash).

## 33. REPORTING TEMPLATES
- **Credit Memorandum (Tờ trình thẩm định) tối thiểu phải có:**
  - Executive Summary (Strengths, Weaknesses, Mitigants).
  - Sponsor / Management Assessment.
  - Historical Financial Analysis & Adjustment.
  - Projected Cashflow & Sensitivities.
  - Facility Structure & Covenants.

## 34. CREDIT COMMITTEE TEMPLATE (PRESENTATION)
- **Rule:** Slide trình bày Ủy ban Tín dụng tối đa 10 slides.
- **Focus:** 1 Slide rủi ro cốt lõi (Key Risks) và Biện pháp giảm thiểu (Mitigants). 1 Slide định giá tài sản và LGD. 1 Slide Cashflow stress-test. (Không trình bày lại lịch sử hình thành lằng nhằng).

## 35. VIETNAM-SPECIFIC LEGAL CONSIDERATIONS
- **Đăng ký Giao dịch bảo đảm:** Bắt buộc đăng ký tại Cục ĐKGDBĐ (Bộ Tư pháp) đối với động sản, và Văn phòng Đăng ký đất đai với BĐS. Nếu thiếu bước này, Hợp đồng thế chấp vô hiệu đối với bên thứ ba.
- **Luật Doanh nghiệp:** Chú ý tỷ lệ biểu quyết (65% hay 51% theo Điều lệ mới/cũ) để đảm bảo Nghị quyết vay vốn hợp lệ.

## 36. COMMON MANIPULATION SCHEMES IN VIETNAMESE ENTERPRISES
- **Đảo nợ (Round-tripping):** Vay Bank A trả Bank B để làm đẹp hồ sơ trả nợ đúng hạn. (Check dòng tiền sao kê những ngày cuối tháng/cuối quý).
- **Hợp đồng tiền gửi giả/Bị phong tỏa (Fake/Restricted Cash):** DN show có 500 tỷ tiền gửi kỳ hạn, nhưng thực chất đã bị cầm cố bảo lãnh cho 1 khoản vay khác hoặc cấm rút.
- **"Xào" giá trị Xây dựng (Capex Overstatement):** Ký hợp đồng EPC với công ty xây dựng sân sau giá 2000 tỷ (giá trị thật 1000 tỷ), rút 1000 tỷ ra ngoài.

## 37. SECTOR-SPECIFIC ADJUSTMENTS
- **Real Estate:** Không nhìn Lợi nhuận (P&L), chỉ nhìn Presales (Tiền khách hàng trả trước) và Tỷ lệ hấp thụ (Absorption rate). Yêu cầu quản lý tài khoản chuyên thu (Escrow account).
- **Renewable Energy:** Cắt giảm giả định số giờ phát điện (P50 vs P90). Kiểm tra rủi ro Cắt giảm công suất (Curtailment risk) từ EVN.
- **Manufacturing:** Kiểm tra sự phụ thuộc vào 1-2 khách hàng lớn (Client concentration) và rủi ro gián đoạn chuỗi cung ứng.

## 38. RISK APPETITE FRAMEWORK (RAF)
- **Objective:** Xác định "khẩu vị rủi ro" của Ngân hàng theo từng thời kỳ.
- **Metrics:** 
  - NPL < 1.5%.
  - Tỷ trọng cho vay BĐS < 20% tổng danh mục.
  - Không cho vay không có TSĐB đối với KH mới (New-to-bank).

## 39. PORTFOLIO CONCENTRATION RULES
- **Objective:** Tránh rủi ro hệ thống (Systemic collapse).
- **Single Borrower Limit:** Tối đa 15% Vốn tự có (Equity) của Bank (Theo luật TCTD VN).
- **Group/Related Parties Limit:** Tối đa 25% Vốn tự có.
- **Industry Limit:** Thiết lập Hạn mức ngành (Industry Cap). Nếu ngành BĐS chạm Cap, ngừng giải ngân toàn bộ hồ sơ BĐS mới.

## 40. CRISIS-MODE UNDERWRITING PROTOCOL
- **Objective:** Cách thẩm định trong bối cảnh khủng hoảng (Ví dụ: Covid-19, SCB/Vạn Thịnh Phát crisis).
- **Action:**
  - Tạm dừng (Freeze) toàn bộ các khoản vay Unsecured.
  - Hạ LTV các TSĐB xuống mức an toàn (Vd: BĐS từ 70% xuống 50%).
  - Chuyển sang "Cash-flow sweeping" - Tự động trích tiền từ tài khoản doanh nghiệp ngay khi có dòng tiền về để thu hồi nợ trước.
  - Focus vào "Survival Analysis" thay vì "Growth Analysis".

---
**Prepared by:** Chief Risk Officer (CRO)
**Approved by:** Board of Directors
**Date:** May 2026
**Distribution:** All Credit Risk & Corporate Banking Staff
*(Document is subject to annual review and validation based on back-testing results of the loan portfolio)*
