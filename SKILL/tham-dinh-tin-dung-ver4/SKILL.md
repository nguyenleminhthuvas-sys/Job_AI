---
name: tham-dinh-tin-dung-v4
description: SKILL chuẩn thực hiện thẩm định tín dụng, đánh giá khoản vay, phân tích tài chính doanh nghiệp, tính DSCR, lập báo cáo thẩm định, check KYC/AML, scoring tín dụng, định giá và quản lý TSBĐ, giám sát sau giải ngân, xử lý NPL theo Basel II/III, TT39, TT12.
---

# SKILL ROUTER: THẨM ĐỊNH TÍN DỤNG DOANH NGHIỆP (ENTERPRISE GRADE)

## 1. MỤC ĐÍCH & CÁCH SỬ DỤNG
Đây là SKILL tổng hợp đóng vai trò là "bộ định tuyến" (router) dẫn hướng AI tới các tài liệu chuyên sâu thuộc Quy trình Thẩm định Tín dụng Doanh nghiệp V3.0 (Enterprise Corporate Credit Appraisal SOP). Tùy thuộc vào yêu cầu của người dùng, bạn CHỈ CẦN đọc file Markdown tương ứng trong thư mục `references/` để lấy bộ quy tắc, công thức tính toán và hướng dẫn. Không tự ý bịa đặt công thức hoặc làm trái nguyên tắc (đặc biệt là KYC/AML, TT39, TT12).

## 2. DANH MỤC TÀI LIỆU THAM KHẢO (ROUTING MAP)

Dưới đây là sơ đồ 15 phần của SOP gốc được tách thành 9 file tham chiếu. Khi người dùng yêu cầu một nghiệp vụ cụ thể, hãy ĐỌC đúng tài liệu dưới đây trước khi thực hiện:

### 📁 `references/01_overview_and_process.md` (Phần 1–2)
- **Khi nào cần đọc:** Khi cần hiểu mục tiêu quy trình, nguyên tắc vận hành (SOD, Maker-Checker), cấu trúc tổ chức, và luồng End-to-End lifecycle (Gate control, SLA tổng quan).

### 📁 `references/02_phase_workflow.md` (Phần 3)
- **Khi nào cần đọc:** Khi thực hiện quy trình thẩm định chi tiết theo 27 phase. Cung cấp hướng dẫn Lead intake, KYC/AML, Document Collection, Legal & Business Assessment, Loan Purpose, Phê duyệt, Cơ cấu nợ, v.v.

### 📁 `references/03_risk_and_scoring.md` (Phần 4)
- **Khi nào cần đọc:** Khi chấm điểm tín dụng (Credit Scoring & Rating), tính tỷ lệ PD/LGD/EAD, hoặc kiểm tra giới hạn Risk Appetite Matrix. Chứa thang điểm từ AAA đến D.

### 📁 `references/04_financial_analysis.md` (Phần 5)
- **Khi nào cần đọc:** Khi phân tích tài chính doanh nghiệp. File chứa các công thức bắt buộc (Thanh khoản, Đòn bẩy, ROA, ROE, tính DSCR, CCC), bộ lọc Red Flags và nguyên tắc chuẩn hóa (Normalize) EBITDA.

### 📁 `references/05_collateral.md` (Phần 6)
- **Khi nào cần đọc:** Khi đánh giá, định giá và quản lý TSBĐ. File cung cấp các tỷ lệ Haircut & LTV theo loại tài sản, chu kỳ tái định giá, và checklist tính pháp lý TSBĐ.

### 📁 `references/06_post_loan_monitoring.md` (Phần 7)
- **Khi nào cần đọc:** Khi cần giám sát sau giải ngân, theo dõi covenant, thiết lập hệ thống cảnh báo sớm (Early Warning System - EWS), và quản lý nợ quá hạn (NPL) hay Restructuring.

### 📁 `references/07_governance_and_control.md` (Phần 8–9)
- **Khi nào cần đọc:** Khi cần phân định quyền hạn (RACI Matrix, Delegation of Authority - DOA), Escalation Matrix, checklist Internal Audit, và kiến trúc hệ thống công nghệ (LOS, LMS).

### 📁 `references/08_templates_and_checklists.md` (Phần 10)
- **Khi nào cần đọc:** Khi cần biểu mẫu báo cáo. Chứa cấu trúc Tờ trình Phê duyệt Tín dụng (Credit Proposal), Biên bản kiểm tra sau vay, và Bảng theo dõi Covenant.

### 📁 `references/09_antifraud_audit_appendix.md` (Phần 11–15)
- **Khi nào cần đọc:** Khi cần kiểm tra các hình thức gian lận (Anti-Fraud schemes), tuân thủ pháp luật (Luật TCTD 2024, TT39, TT12, TT11, PCRT 2022), SLA tiêu chuẩn, quy định lưu trữ, và thuật ngữ (Glossary).

### 📁 `references/10_data_sources.md`
- **Khi nào cần đọc:** Khi cần quét/tra cứu dữ liệu tài chính công khai của doanh nghiệp (CafeF, HNX, HOSE, Vietstock), kiểm tra pháp lý (ĐKKD, MST, nợ thuế GDT, thi hành án), tra cứu TSBĐ đã đăng ký (sổ GDBĐ), hoặc benchmark ngành từ SSI/VDSC Research.

### 📁 `references/11_red_flag_investigation.md`
- **Khi nào cần đọc:** Khi phát hiện bất kỳ red flag nào từ BCTC hoặc quá trình thẩm định. File chứa ma trận điều tra chéo (DSCR thấp → kiểm tra CIC + thuế GDT; doanh thu tăng đột biến → kiểm tra hợp đồng công khai...), thang mức độ nghiêm trọng 🔴🟠🟡🟢, và các mâu thuẫn chéo cần cross-check giữa BCTC với nguồn độc lập.