# BÁO CÁO THẨM ĐỊNH TÍN DỤNG: TẬP ĐOÀN NOVALAND (NVL)
**Ngày phân tích:** 12/05/2026
**Dữ liệu tham chiếu:** BCTC Kiểm toán năm 2025 (Kết thúc ngày 31/12/2025).
**Tóm tắt số liệu 2025:** Doanh thu thuần 6.965 tỷ VND; LNST 1.819 tỷ VND (chủ yếu do hoàn nhập dự phòng một lần); Tổng dư nợ: 67.190 tỷ VND; Nợ ngắn hạn: 31.520 tỷ VND. Kiểm toán có lưu ý về "giả định hoạt động liên tục".

> [!WARNING]
> Cảnh báo từ Hệ thống: Khách hàng đang đối mặt với áp lực thanh khoản ngắn hạn (Refinancing Wall) cực kỳ nghiêm trọng, rủi ro Going Concern do kiểm toán viên nhấn mạnh. Đề xuất: **ESCALATE LÊN CRO & CHUYỂN IFRS9 STAGE 2/3**.

---

## 1. PHÂN LOẠI GIAO DỊCH
- **Loại Deal:** Corporate Loan (CL) - Đánh giá trên cấp độ Tập đoàn mẹ (Full Recourse).
- Có thể kết hợp Hybrid Structure (HS) nếu tài trợ cho từng phân khu dự án cụ thể (như Aqua City, NovaWorld) sau khi pháp lý được khơi thông.

---

## 2. GATE 1: PRE-SCREENING & DYNAMIC THRESHOLD (FAIL ❌)

### 2.1 Dynamic DSCR Threshold
- **Industry:** Real Estate Dev (`M = 1.6`)
- **Lifecycle:** Đang xây dựng & Tái khởi động (`F = 1.4`)
- **Revenue Stability:** Pre-sold 40-70% do vướng mắc tiến độ bàn giao (`F = 1.10`)
- **Tính toán DSCR Final:** `1.25 × 1.6 × 1.4 × 1.10 = 3.08x`
*(LNST năm 2025 chủ yếu đến từ yếu tố đột biến (one-off) 3.638 tỷ VND từ dự án Lakeview City. Dòng tiền hoạt động (CFO) thực tế từ kinh doanh cốt lõi không đủ đáp ứng mức DSCR > 3.08x).*

### 2.2 Liquidity Quick Screen
- **Cross-default Flag:** Có rủi ro cao do lịch sử chậm trả lãi/gốc trái phiếu trong năm 2024-2025. Theo SOP, `DSRA_available = 0`.
- **Base Runway:** 
  - Nợ ngắn hạn (đáo hạn trong 12 tháng) = 31.520 tỷ VND (~2.626 tỷ VND/tháng).
  - Tồn kho rất lớn (153.400 tỷ VND) nhưng là tài sản kém thanh khoản (Illiquid Assets).
  - Khả năng duy trì (Runway) = `(Tiền mặt + DSRA) / Monthly Burn` < 2 tháng (Thấp hơn rất nhiều so với mức yêu cầu 6 tháng).
- **Kết luận Gate 1:** Vi phạm nghiêm trọng Base Runway. Kiểm toán cũng lưu ý về khả năng thanh khoản. 👉 **REJECT hoặc ESCALATE TO CRO.**

---

## 3. GATE 2: FULL DUE DILIGENCE (KHÔNG ĐẠT ❌)

### 3.1 Business & Industry DD
- **Chất lượng lợi nhuận (EBITDA Normalization):** Phải loại trừ khoản lợi nhuận đột biến từ hoàn nhập dự phòng (Lakeview City) ra khỏi Core EBITDA khi tính toán covenant. Khi loại trừ khoản này, Core EBITDA của năm 2025 là số âm.
- **DSO (Days Sales Outstanding):** Rất dài do khách hàng hoãn thanh toán chờ pháp lý hoàn thiện. Vi phạm tiêu chí `DSO < 60 ngày`.
- **Vietnam Legal Enforceability:** Dù năm 2025 đã gỡ vướng pháp lý tại một số dự án trọng điểm, nhiều phân khu khác chưa có sổ đỏ. TSĐB không đảm bảo 100% priority enforcement.

### 3.2 Refinancing Wall Analysis
- NVL đang nằm chính giữa **"Wall Year"** với ~47% tổng nợ (31.520 / 67.190 tỷ VND) là ngắn hạn/đến hạn trả (bao gồm 25.000 tỷ dư nợ trái phiếu còn lại).
- Dưới kịch bản *Severe Stress (Không có nguồn Refinance, phải tự tài trợ từ CFADS)*: DSCR < 1.0x (Vỡ nợ kỹ thuật nếu không đàm phán giãn nợ thành công).

---

## 4. GATE 3: LIQUIDITY CRISIS & STRESS TEST (CRITICAL 🚨)

Chạy **Simultaneous Multi-Factor Stress Matrix**:
- **Kịch bản Extreme Freeze (Runway 45 ngày):**
  - Mọi dòng tiền vào = 0 (bán hàng đóng băng).
  - Waterfall Tầng 0-3: Unrestricted Cash mỏng, Undrawn facilities = 0 (các bank đều đóng hạn mức chưa giải ngân đối với NVL do rủi ro tín dụng). Tầng 4 (Asset Sale) bị loại trừ theo SOP.
  - **Kết quả:** Liquidity Runway < 45 ngày.

- **IFRS9 Staging:**
  - Runway < 45 ngày (stress) + Lỗ lũy kế/Cơ cấu nợ + Kiểm toán nhấn mạnh Going Concern → Trigger: **Stage 3 (Full provision — credit impaired)**.

---

## 5. TỔNG KẾT & QUYẾT ĐỊNH CỦA ỦY BAN

> [!CAUTION]
> **DECISION:** REJECT đối với Cấp tín dụng Corporate Loan (CL) mới.
> **ACTION PLAN ĐỐI VỚI DƯ NỢ HIỆN HỮU:** 
> 1. Ghi nhận nhóm nợ Stage 3 IFRS9.
> 2. Kích hoạt Event of Default (EoD) nhằm tăng cường quyền kiểm soát của Ngân hàng (Can thiệp vào dòng tiền).
> 3. Tuyệt đối không giải ngân tín dụng tín chấp. Mọi khoản tín dụng mới (nếu có) phải cấu trúc theo dạng **Project Finance (PF) khép kín (Ring-fencing)** cho từng dự án nhỏ đã có giấy phép bán hàng.
