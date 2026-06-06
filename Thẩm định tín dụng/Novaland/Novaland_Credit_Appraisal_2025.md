# BÁO CÁO THẨM ĐỊNH TÍN DỤNG DOANH NGHIỆP: NOVALAND (NVL)
**Ngày phân tích:** 12/05/2026
**Cơ sở dữ liệu:** Báo cáo Tài chính Kiểm toán 2025 (Ngày 31/12/2025)
**Skill áp dụng:** `sop-tham-dinh-tin-dung-final`

> [!WARNING]
> Báo cáo Kiểm toán 2025 có lưu ý quan trọng về "Giả định hoạt động liên tục" (Going concern material uncertainty). Tình trạng thanh khoản ở mức báo động đỏ.

---

## MỤC TIÊU & PHÂN LOẠI GIAO DỊCH
- **Phân loại Deal:** Corporate Loan (CL) – Cho vay doanh nghiệp đối với Tập đoàn Novaland (Full Recourse).
- Có thể phân loại thành **Project Finance (PF)** nếu cấp vốn riêng lẻ cho một pháp nhân dự án (SPV) đã sạch pháp lý.

---

## BƯỚC 1: PRE-SCREENING & DYNAMIC THRESHOLD SETUP (GATE 1)

**1. Tính toán Dynamic DSCR Threshold:**
- **Industry:** Real Estate Dev (`M = 1.6`)
- **Lifecycle:** Đang xây dựng & Tái khởi động (`F = 1.4`)
- **Revenue Stability:** Pre-sold 40-70% do kẹt bàn giao (`F = 1.10`)
- **DSCR Final Yêu cầu:** `1.25 × 1.6 × 1.4 × 1.10 = 3.08x`
*(LNST 2025 đạt 1.819 tỷ VND nhưng chủ yếu do khoản lợi nhuận đột biến hoàn nhập 3.638 tỷ VND từ dự án Lakeview City. Dòng tiền Core CFO âm, DSCR thực tế < 1.0x).*

**2. Liquidity Quick Screen:**
- **Cross-default Flag:** Lịch sử cơ cấu nợ trái phiếu và ngân hàng 2024-2025 cho thấy rủi ro Cross-default rất cao. Theo SOP, `DSRA_available = 0`.
- **Base Runway:**
  - Nợ ngắn hạn: 31.520 tỷ VND (Burn rate > 2.626 tỷ VND/tháng).
  - Tồn kho: 153.400 tỷ VND (Illiquid, không được tính vào thanh khoản ngắn hạn).
  - Runway thực tế: Rất thấp, nhỏ hơn nhiều so với chuẩn `> 6 tháng`.

> **KẾT LUẬN GATE 1:** FAIL ❌. Vi phạm Base Runway và Dynamic DSCR. (Escalate lên CRO lập tức).

---

## BƯỚC 2: FULL DUE DILIGENCE (GATE 2)

**1. Business & Industry DD:**
- Chênh lệch lớn giữa lợi nhuận sổ sách và dòng tiền thực tế. Core EBITDA (loại trừ one-off) bị âm.
- Customer concentration: Phân tán (khách hàng cá nhân), nhưng DSO vi phạm chuẩn `< 60 ngày` do khách hoãn đóng tiền chờ sổ đỏ.

**2. Vietnam Legal Enforceability Checklist:**
- Một số dự án được khơi thông (Aqua City, Lakeview City), nhưng phần lớn tài sản thế chấp chưa hoàn thiện 100% pháp lý để đảm bảo quyền xử lý ưu tiên (priority enforcement).

**3. Refinancing Wall Analysis:**
- Khách hàng đang ở chính giữa **"Wall Year"** với lượng nợ ngắn hạn khổng lồ (gần 47% tổng nợ). Rủi ro Refinancing cực độ.

> **KẾT LUẬN GATE 2:** FAIL ❌. Bắt buộc quay lại Due Diligence và không được trình Ủy ban đối với dạng tín chấp hoặc tài sản chưa chuẩn pháp lý.

---

## BƯỚC 3: RISK APPETITE & LIQUIDITY CRISIS ANALYSIS

Chạy mô phỏng rủi ro (Multi-Factor Stress Matrix):
- **Kịch bản Extreme Freeze (Runway 45 ngày):**
  - Giả định không bán được hàng, dòng tiền vào = 0.
  - Ngân hàng thắt chặt, hạn mức chưa giải ngân (Undrawn facilities) bị khóa.
  - **Kết quả:** Liquidity Runway < 45 ngày (Nguy cơ vỡ nợ kỹ thuật).
- **Phân loại IFRS9:** Rơi vào **Stage 3** (Credit Impaired) do Runway < 45 ngày (stress) và kiểm toán viên nhấn mạnh yếu tố rủi ro liên tục.

---

## BƯỚC 4: TRANSACTION STRUCTURING (ĐỐI VỚI DƯ NỢ HIỆN HỮU)

Do không vượt qua Gate 1 và Gate 2, ngân hàng không cấp mới (New Money) đối với CL. Đối với các khoản đã giải ngân, cấu trúc lại như sau:
- **Runway Covenants:** Do Runway < 45 ngày, kích hoạt Event of Default (EoD), hủy bỏ toàn bộ Cure period.
- Siết chặt Cash Dominion: Ngân hàng quản lý toàn bộ dòng tiền thu từ khách hàng mua nhà tại các dự án.

---

## BƯỚC 5: CREDIT COMMITTEE PRESENTATION (GATE 3)

Trả lời các câu hỏi bắt buộc trình Ủy ban:
1. **Extreme Freeze runway confirmed?** Trượt. Dưới 45 ngày.
2. **Asset sale excluded từ runway < 180 ngày?** Đã loại trừ tồn kho kém thanh khoản.
3. **Refinancing Wall Year DSCR pass?** Trượt. Nợ đáo hạn quá lớn so với CFADS.

---

## TỔNG KẾT & QUYẾT ĐỊNH

- [x] **DECISION:** **REJECT** (Từ chối cấp tín dụng mới theo dạng Corporate Loan).
- [x] **ACTION PLAN:** 
  1. Yêu cầu bộ phận Pháp chế (Legal) và Ban điều hành (BOD) can thiệp sớm đối với dư nợ hiện hữu.
  2. Kích hoạt giám sát đặc biệt hàng tuần (Weekly monitoring).
  3. Chỉ xem xét giải ngân dạng **Project Finance (PF)** cho một số SPV biệt lập nếu đáp ứng 100% Legal Checklist (Đã có sổ đỏ, GPĐT hoàn chỉnh).
