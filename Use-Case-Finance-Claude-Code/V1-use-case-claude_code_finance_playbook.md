# SỔ TAY SỬ DỤNG CLAUDE CODE CHO CHUYÊN GIA TÀI CHÍNH
## Phiên bản 3 — Hoàn chỉnh, Sẵn sàng triển khai
*(IB, PE, Tài chính Doanh nghiệp – Chuyên viên phân tích / Phó phòng / Giám đốc)*

> **Cách đọc tài liệu này:**
> - Mỗi mục "Thời gian tiết kiệm thực tế" đều trình bày: Tổng tiết kiệm / Chi phí kiểm tra / Tiết kiệm ròng
> - Mỗi mục "Rào cản niềm tin" trình bày: chuyên viên phân tích kiểm tra gì, mất bao lâu, và điều gì xảy ra nếu phát hiện lỗi
> - Stack công nghệ đề xuất: các thư viện được đánh dấu ⚠️ CẦN SỰ PHÊ DUYỆT CỦA IT cần được IT đồng ý trước khi cài đặt
> - "Vai trò của Claude Code" được đánh giá thực tế: nếu chỉ cần Python thông thường là đủ, tài liệu sẽ ghi rõ như vậy

---

# PHẦN 1 — TÀI CHÍNH DOANH NGHIỆP

---

## Use Case 1: Phát hiện Hardcode chéo giữa các File trong Mô hình Tài chính Excel

*Tự động kiểm toán toàn bộ các file Excel trong một thư mục: mô hình, dự báo, ngân sách, số liệu thực tế.*

**Tần suất:** Hàng tháng / Theo từng giao dịch (deal)
**Rào cản niềm tin:** THẤP — chuyên viên phân tích nhận được một danh sách các địa chỉ ô (Sheet → Hàng → Cột). Cách kiểm tra: mở từng ô bị đánh dấu trong Excel, xác nhận đó là số nhập tay (literal number) chứ không phải công thức. Thời gian kiểm tra 20 ô bị đánh dấu: ~15 phút. Nếu phát hiện lỗi: ô đó thực sự có rủi ro hardcode — chuyên viên sửa hoặc ghi chú lại như một giả định có chủ ý.
**Độ ổn định của đầu vào:** ỔN ĐỊNH — đầu vào luôn là `.xlsx` hoặc `.xls`, bất kể cách đặt tên file lộn xộn ra sao.
**Chi phí khi thất bại:** THẤP — một lỗi hardcode bị bỏ sót là lỗ hổng kiểm toán, không phải lỗi mô hình. Rủi ro về sau là thấp.
**Rủi ro tuân thủ:** KHÔNG CÓ — kịch bản (script) không bao giờ rời khỏi máy tính nội bộ. Không tải dữ liệu lên mạng.
**Thời gian tiết kiệm thực tế:**
- Tổng tiết kiệm: 3–5 giờ/tháng (cho 10–20 file mô hình)
- Chi phí kiểm tra: 15–30 phút
- Tiết kiệm ròng: 2.5–4.5 giờ/tháng

**Phương án dự phòng:** Chuyên viên dùng chức năng "Go To Special → Constants" có sẵn của Excel trên từng sheet theo cách thủ công. Chậm hơn nhưng kết quả tương đương.
**Ước lượng thời gian xây dựng:** 2 ngày
**Gánh nặng bảo trì:** 0.5 giờ/quý. Chỉ hỏng khi định dạng file Excel thay đổi (`.xlsx` → `.xlsb`). Cách sửa: cập nhật bộ lọc đuôi file trong script. Nếu người bảo trì rời đi: bất kỳ ai biết Python đều có thể sửa trong 30 phút — script chưa tới 50 dòng code.
**Stack công nghệ đề xuất:** `openpyxl`, `pandas`, `re`
**Vai trò của Claude Code:** Một script Python thông thường là đủ. Claude Code hữu ích cho: (a) quá trình xây dựng ban đầu, (b) gỡ lỗi khi openpyxl báo lỗi bất ngờ với các file Excel dị dạng từ đối tác, (c) mở rộng các quy tắc phát hiện khi nhóm định nghĩa các mẫu hardcode mới.

---

## Use Case 2: Chuẩn hóa "Số liệu có dấu" trong Mô hình (Excel)

*Chuyển đổi toàn bộ các quy ước về dấu trong một mô hình Excel nhận được sang tiêu chuẩn nội bộ: loại bỏ ngoặc đơn ( ), thay thế nhãn "Dr/Cr", chuẩn hóa logic xử lý dấu được đánh dấu bằng màu sắc.*

**Tần suất:** Theo giao dịch / hàng tháng khi nhận mô hình từ bên ngoài
**Rào cản niềm tin:** THẤP — chuyên viên kiểm tra 2–3 dòng P&L chính (Doanh thu, EBITDA, Lợi nhuận ròng) để xác nhận hướng dấu đã chính xác sau chuyển đổi. Thời gian: 10 phút. Nếu phát hiện lỗi: script đã đọc sai một quy ước đánh dấu màu — chuyên viên định nghĩa quy tắc ngoại lệ và chạy lại.
**Độ ổn định của đầu vào:** ỔN ĐỊNH — đầu vào luôn là Excel. Chỉ có các quy ước định dạng là khác nhau, không phải định dạng file.
**Chi phí khi thất bại:** THẤP — sai dấu trên một dòng sẽ lộ ra ngay trong bất kỳ tổng hoặc đối chiếu nào ở các bước sau.
**Rủi ro tuân thủ:** KHÔNG CÓ — chỉ chạy nội bộ.
**Thời gian tiết kiệm thực tế:**
- Tổng tiết kiệm: 2–3 giờ cho mỗi mô hình nhận được
- Chi phí kiểm tra: 10 phút
- Tiết kiệm ròng: 1.75–2.75 giờ mỗi mô hình

**Phương án dự phòng:** Chuyên viên dùng Find-and-Replace + định dạng lại bằng tay. Mất 2–3 giờ thủ công.
**Ước lượng thời gian xây dựng:** 2 ngày
**Gánh nặng bảo trì:** 0.5 giờ/quý. Bị hỏng nếu đối tác dùng quy ước dấu kỳ lạ không có trong bộ quy tắc (VD: dấu ngoặc đơn bên trong dấu ngoặc vuông). Cách sửa: thêm quy tắc mới. Nếu người bảo trì rời đi: quy tắc được lưu trong file cấu hình — mọi chuyên viên đều có thể thêm mẫu mới bằng một dòng lệnh.
**Stack công nghệ đề xuất:** `openpyxl`, `pandas`, `re`
**Vai trò của Claude Code:** Python script thông thường là đủ. Claude Code hữu ích lúc đầu và khi xuất hiện quy ước dấu mới đòi hỏi thiết kế Regex (biểu thức chính quy).

---

## Use Case 3: Đối chiếu Chênh lệch Đóng sổ Hàng tháng (Sổ cái vs Dự báo)

*Nhập file xuất từ Sổ cái (GL) và file dự báo, gióng hàng tài khoản và trung tâm chi phí, tính toán chênh lệch hàng tháng cho từng tài khoản, đánh dấu các sai biệt lớn nhất.*

**Tần suất:** Hàng tháng
**Rào cản niềm tin:** TRUNG BÌNH — chuyên viên kiểm tra chéo 10 sai lệch lớn nhất bằng cách trích xuất các dòng tương ứng từ Sổ cái gốc. Thời gian: 45–60 phút. Nếu phát hiện lỗi: ánh xạ tài khoản bị sai — chuyên viên cập nhật bảng ánh xạ và chạy lại. Script không được ghi đè lên file gốc.
**Độ ổn định của đầu vào:** KHÔNG ỔN ĐỊNH — file xuất ERP thường xuyên thay đổi thứ tự cột, encoding và cách đặt tên tài khoản một cách thất thường. Mỗi bản nâng cấp ERP hoặc tái cấu trúc hệ thống tài khoản đều làm hỏng ánh xạ.
**Chi phí khi thất bại:** CAO — chênh lệch sai bị đưa vào báo cáo Hội đồng quản trị. Giám đốc tài chính (CFO) sẽ đặt câu hỏi điều hành dựa trên dữ liệu sai.
**Rủi ro tuân thủ:** THẤP — chỉ áp dụng cho Sổ cái và file dự báo nội bộ. Không tải lên mạng ngoài.
**Thời gian tiết kiệm thực tế:**
- Tổng tiết kiệm: 12–18 giờ/tháng
- Chi phí kiểm tra: 1–1.5 giờ
- Tiết kiệm ròng: 10–15 giờ/tháng (giảm xuống 0 trong những tháng định dạng ERP thay đổi)

**Phương án dự phòng:** Chuyên viên quay lại dùng Excel đối chiếu thủ công cho kỳ đóng sổ đó. Lỗi script phải dễ phát hiện — script phải xuất cảnh báo "không khớp định dạng" thay vì âm thầm đưa ra kết quả sai.
**Ước lượng thời gian xây dựng:** 5 ngày
**Gánh nặng bảo trì:** 2–3 giờ/quý. Hỏng khi: định dạng ERP thay đổi, thêm trung tâm chi phí mới, phân loại lại tài khoản sau tái cơ cấu, thêm pháp nhân mới sau M&A. Việc sửa lỗi yêu cầu cập nhật bảng ánh xạ và cấu hình cột. Nếu người bảo trì rời đi và không có tài liệu: script trở thành một gánh nặng. **Cách giảm thiểu rủi ro: duy trì một file `config.yaml` chứa tất cả tên cột, ánh xạ tài khoản, và cài đặt encoding. Ghi tài liệu cho mọi thay đổi.**
**Stack công nghệ đề xuất:** `pandas`, `openpyxl`, `xlrd`, `chardet`, `python-dateutil`
**Vai trò của Claude Code:** Claude Code mang lại giá trị thực sự ở đây: khi định dạng ERP thay đổi giữa kỳ (thường xảy ra lúc 11h đêm ngày đóng sổ), chuyên viên dán tiêu đề cột mới và thông báo lỗi vào Claude Code → Claude Code viết lại logic ánh xạ chỉ trong vài phút thay vì vài giờ. Đây là công dụng duy trì chính, không chỉ ở bước xây dựng ban đầu.

---

## Use Case 4: Tự động Đối chiếu Sao kê Ngân hàng vs Sổ cái (Excel + CSV)

*Khớp giao dịch trên sao kê ngân hàng với các bút toán Sổ cái (GL), đánh dấu các mục không khớp, xuất danh sách các khoản cần đối chiếu.*

**Tần suất:** Hàng tháng
**Rào cản niềm tin:** TRUNG BÌNH — chuyên viên tự tay xử lý các mục cần đối chiếu bằng cách dò lại chứng từ gốc (hóa đơn, xác nhận thanh toán). Thời gian: 30–60 phút tùy số lượng. Nếu phát hiện lỗi: script khớp sai trường (VD: khớp số tiền nhưng không khớp ngày) — chuyên viên điều chỉnh dung sai khớp.
**Độ ổn định của đầu vào:** TRUNG BÌNH — file CSV xuất từ ngân hàng khá chuẩn (hầu hết ngân hàng lớn có định dạng nhất quán). Bố cục GL thường xuyên thay đổi hơn.
**Chi phí khi thất bại:** TRUNG BÌNH — bỏ sót khoản đối chiếu gây sai lệch báo cáo lưu chuyển tiền tệ.
**Rủi ro tuân thủ:** KHÔNG CÓ — chỉ file nội bộ.
**Thời gian tiết kiệm thực tế:**
- Tổng tiết kiệm: 10–14 giờ/tháng
- Chi phí kiểm tra: 1 giờ
- Tiết kiệm ròng: 9–13 giờ/tháng

**Phương án dự phòng:** Chuyên viên dùng Pivot Excel + VLOOKUP để khớp thủ công. Phương pháp tiêu chuẩn, ai cũng biết.
**Ước lượng thời gian xây dựng:** 3 ngày
**Gánh nặng bảo trì:** 1 giờ/quý. Hỏng khi ngân hàng thay đổi định dạng xuất CSV (hiếm nhưng vẫn xảy ra sau khi nâng cấp hệ thống ngân hàng). Định dạng GL đổi thường xuyên hơn. Nếu người bảo trì rời đi: file cấu hình chứa tên cột là đủ để người thay thế cập nhật.
**Stack công nghệ đề xuất:** `pandas`, `openpyxl`
**Vai trò của Claude Code:** Script Python thông thường là đủ. Claude Code hữu ích khi ngân hàng đổi định dạng xuất — chuyên viên dán tiêu đề CSV mới, Claude Code cập nhật trình phân tích (parser) trong một phiên làm việc.

---

## Use Case 5: Xuất dữ liệu ERP sang Bảng KPI Chuẩn hóa (Xử lý gói báo cáo Đa định dạng)

*Nhập các gói báo cáo quản trị hàng tháng xuất từ nhiều bộ phận với các định dạng khác nhau, chuẩn hóa thành template KPI tiêu chuẩn.*

**Tần suất:** Hàng tháng
**Rào cản niềm tin:** TRUNG BÌNH — chuyên viên kiểm tra 2 KPI chính mỗi bộ phận với báo cáo gốc. Thời gian: 5 phút mỗi bộ phận × số lượng bộ phận. Nếu phát hiện lỗi: ánh xạ cột cho bộ phận đó bị sai — cập nhật cấu hình của bộ phận đó và chạy lại.
**Độ ổn định của đầu vào:** KHÔNG ỔN ĐỊNH — mỗi bộ phận thay đổi template thất thường, đặc biệt sau khi thay đổi ban quản lý hoặc nâng cấp hệ thống.
**Chi phí khi thất bại:** TRUNG BÌNH — KPI sai lọt vào báo cáo HĐQT, nhưng nhóm giao dịch có thể khôi phục lại báo cáo gốc.
**Rủi ro tuân thủ:** KHÔNG CÓ — chỉ dùng xuất dữ liệu nội bộ.
**Thời gian tiết kiệm thực tế:**
- Tổng tiết kiệm: 10–14 giờ/tháng (cho 8 bộ phận)
- Chi phí kiểm tra: 40 phút (5 phút × 8 bộ phận)
- Tiết kiệm ròng: 8–12 giờ/tháng (giảm đáng kể khi nhiều bộ phận đồng loạt đổi định dạng)

**Phương án dự phòng:** Chuyên viên chạy script trên 2–3 bộ phận có định dạng ổn định, làm thủ công các bộ phận khác.
**Ước lượng thời gian xây dựng:** 4 ngày
**Gánh nặng bảo trì:** 3–4 giờ/quý. Đây là use case có chi phí bảo trì cao nhất sau giám sát danh mục đầu tư. Mỗi bộ phận đổi template = tốn 1–2 giờ cập nhật cấu hình. Với 8 bộ phận, dự kiến có 2–3 lần đổi định dạng mỗi quý. **Cách giảm thiểu: mỗi bộ phận có một file cấu hình riêng. Các thay đổi được cô lập. Nhưng điều này đòi hỏi một người chịu trách nhiệm về script — không phải "ai cũng sửa được."**
**Stack công nghệ đề xuất:** `pandas`, `openpyxl`, `chardet`

> ⚠️ CẦN SỰ PHÊ DUYỆT CỦA IT: `tabula-py` (nếu gói báo cáo là bảng PDF). Yêu cầu Java runtime. Tránh dùng nếu có thể — hãy yêu cầu các bộ phận xuất file CSV thay thế.

**Vai trò của Claude Code:** Khi một bộ phận thay đổi template, chuyên viên thả file mới vào Claude Code cùng cấu hình cũ → Claude Code xác định sự khác biệt cấu trúc và viết lại cấu hình cho bộ phận đó. Tiết kiệm 1–2 giờ ánh xạ cột thủ công mỗi khi có sự cố.

---

# PHẦN 2 — NGÂN HÀNG ĐẦU TƯ (INVESTMENT BANKING)

---

## Use Case 6: Tự động cập nhật Bảng Công ty Có thể so sánh (Comps) từ Báo cáo Cáo bạch

*Phân tích thông cáo báo chí kết quả kinh doanh hoặc bản ghi âm của MỘT công ty, trích xuất các số liệu tài chính quan trọng, cập nhật hàng tương ứng của công ty đó trong bảng comps.*

> **Đính chính phạm vi từ V2:** Use case này được thiết kế cho MỘT công ty mỗi lần chạy, không xử lý hàng loạt 15 công ty cùng lúc. Xử lý hàng loạt làm chi phí kiểm tra tăng 15 lần và khiến công cụ không đáng tin cậy. Hãy chạy từng công ty một. Mở rộng dần khi độ chính xác được xác nhận cho từng công ty.

**Tần suất:** Hàng quý / mỗi mùa báo cáo lợi nhuận (cho mỗi công ty)
**Rào cản niềm tin:** THẤP — chuyên viên xác minh 10–15 con số cho mỗi lần chạy so với file PDF gốc (doanh thu, EBITDA, EPS, dự phóng, biên lợi nhuận). Thời gian: 20 phút mỗi công ty. Nếu phát hiện lỗi: logic phân tích bỏ sót định dạng bảng cụ thể của công ty đó — chuyên viên đánh dấu công ty để cải thiện trình phân tích ở lần sau và nhập số thủ công lần này.
**Độ ổn định của đầu vào:** TRUNG BÌNH — các trường số liệu (doanh thu, EBITDA, EPS) luôn có trong thông cáo báo chí. Bố cục bảng khác nhau tùy công ty và đôi khi thay đổi theo quý.
**Chi phí khi thất bại:** THẤP — số sai sẽ bị bắt trong vòng đánh giá IC (Hội đồng Đầu tư). Xấu nhất là bảng comps thiếu một công ty, không gây sai lệch hệ thống.
**Rủi ro tuân thủ:** THẤP — chuyên viên kiểm soát file nào được xử lý. Có thể chạy hoàn toàn offline.
**Thời gian tiết kiệm thực tế (mỗi lần chạy cho một công ty):**
- Tổng tiết kiệm: 45 phút mỗi công ty
- Chi phí kiểm tra: 20 phút mỗi công ty
- Tiết kiệm ròng: 25 phút mỗi công ty
- Đối với bộ 15 công ty trong cả mùa báo cáo: ~6 giờ ròng (không phải 8–12 giờ như đã nêu ở V2)

**Phương án dự phòng:** Chuyên viên sao chép thủ công các con số từ PDF vào bảng comps. Quy trình tiêu chuẩn đã có.
**Ước lượng thời gian xây dựng:** 3 ngày
**Gánh nặng bảo trì:** 1–2 giờ/quý. Bị hỏng khi công ty thay đổi bố cục thông cáo báo chí (xảy ra ~2–3 lần mỗi năm cho 15 công ty). Cách sửa: cập nhật quy tắc phân tích cho công ty đó. Nếu người bảo trì rời đi: cấu hình phân tích nằm trong file YAML của từng công ty, dễ dàng thay thế.
**Stack công nghệ đề xuất:** `pdfplumber`, `pandas`, `openpyxl`, `python-dateutil`, `re`

> ⚠️ CẦN SỰ PHÊ DUYỆT CỦA IT: `PyPDF2` cho các PDF scan (yêu cầu trình kết xuất PDF ở cấp hệ thống). Hãy ưu tiên dùng `pdfplumber` trước — thư viện này xử lý hầu hết PDF dạng text mà không phụ thuộc hệ thống.

**Vai trò của Claude Code:** Khi một công ty thay đổi bố cục thông cáo (ví dụ: chuyển từ dạng bảng sang dạng đoạn văn), chuyên viên dán đoạn text PDF mới vào Claude Code → Claude Code viết cập nhật logic trích xuất cho công ty đó trong một phiên. Đây là công dụng bảo trì chính yếu.

---

## Use Case 7: Theo dõi Thay đổi (Redline) của Hợp đồng Mua bán Cổ phần (SPA) / Bản Điều khoản (Term Sheet)

*So sánh hai phiên bản tài liệu Word của một SPA hoặc term sheet, trích xuất các điều khoản bị thay đổi, phân nhóm theo hạng mục (kinh tế, cam kết & bảo đảm, giao ước, điều kiện hoàn tất giao dịch), xuất báo cáo tóm tắt có cấu trúc.*

> **Giới hạn phạm vi:** Công cụ này cho chuyên viên biết "cần nhìn vào đâu." Đội ngũ Pháp lý vẫn chịu trách nhiệm thẩm định cuối cùng. Đây là công cụ hỗ trợ đọc trước, không phải ý kiến pháp lý.

**Tần suất:** Theo giao dịch, nhiều vòng lặp (thường 3–6 phiên bản tài liệu mỗi deal)
**Rào cản niềm tin:** TRUNG BÌNH — đội pháp lý xem xét bản tóm tắt và xác nhận không bỏ sót điều khoản trọng yếu nào trước khi ký duyệt. Chuyên viên dùng bản tóm tắt để chuẩn bị câu hỏi cho pháp lý, chứ không dùng để đưa ra quyết định pháp lý. Thời gian để chuyên viên xem tóm tắt: 20–30 phút mỗi lần so sánh. Nếu phát hiện lỗi: có một điều khoản bị bỏ sót — chuyên viên báo lại cho pháp lý, pháp lý sẽ đọc kỹ phần đó.
**Độ ổn định của đầu vào:** KHÔNG ỔN ĐỊNH — tài liệu Word có thể có hoặc không có Tracked Changes, với các style tùy chỉnh, và đôi khi là file PDF cần chuyển đổi trước.
**Chi phí khi thất bại:** THẤP đối với chuyên viên — pháp lý vẫn phải đọc toàn bộ. Rủi ro trọng yếu chỉ xảy ra nếu chuyên viên dựa dẫm vào bản tóm tắt mà không thông qua pháp lý (đây là lỗi quy trình, không phải lỗi công cụ).
**Rủi ro tuân thủ:** THẤP — chạy nội bộ trên file nội bộ. Không upload tài liệu hợp đồng ra ngoài.
**Thời gian tiết kiệm thực tế:**
- Tổng tiết kiệm: 2–3 giờ mỗi lần so sánh (thời gian đọc và đối chiếu tài liệu 200 trang)
- Chi phí kiểm tra: 30 phút (chuyên viên + pháp lý đọc lướt)
- Tiết kiệm ròng: 1.5–2.5 giờ mỗi lần so sánh; 9–15 giờ mỗi deal (6 vòng lặp)

**Phương án dự phòng:** Chuyên viên dùng tính năng "Compare Documents" có sẵn của Word, sau đó tự tóm tắt bằng tay. Mọi chuyên viên đều quen với phương án này.
**Ước lượng thời gian xây dựng:** 4 ngày
**Gánh nặng bảo trì:** 1 giờ/quý. Bị hỏng khi tài liệu có định dạng bất thường (VD: PDF scan thay vì Word, hoặc tài liệu dùng nhiều XML tùy chỉnh). Cách sửa: thêm chức năng phát hiện định dạng và dùng so sánh gốc của Word như một phương án dự phòng. Nếu người bảo trì rời đi: logic lõi dùng tính năng diff của python-docx, đây là một thư viện được ghi chép tốt.
**Stack công nghệ đề xuất:** `python-docx`, `re`, `openpyxl`
**Vai trò của Claude Code:** Khi tài liệu ở dạng PDF scan thay vì Word (thường thấy ở các deal cũ), chuyên viên thả file vào Claude Code → Claude Code xử lý OCR + trích xuất text + so sánh (diff) trong một phiên. Nó cũng hữu ích khi pháp lý hỏi "giỏ bồi thường có đổi từ bản v2 sang v4 không" (bỏ qua v3) — so sánh nhiều tài liệu bằng câu lệnh ngôn ngữ tự nhiên.

---

## Use Case 8: Theo dõi Lịch sử Thay đổi của Phòng Dữ liệu (Data Room) qua Các Phiên bản

*Quét thư mục Data room v1 so với v2, ghi chép lại: tài liệu mới được thêm, tài liệu bị xóa, tài liệu bị đổi tên, tài liệu có nội dung thay đổi (so sánh qua hàm băm - hash). Xuất bản changelog có cấu trúc.*

> **Giới hạn phạm vi:** Công cụ này ghi chép sự thay đổi TỚI tài liệu, chứ không phải TRONG tài liệu. Nó không trích xuất số liệu tài chính. Không phân tích nội dung PDF.

**Tần suất:** Theo deal (Data room thường được cập nhật 3–8 lần trong quá trình thẩm định - DD)
**Rào cản niềm tin:** THẤP — chuyên viên kiểm tra 3–5 tài liệu quan trọng (BCTC mới nhất, cap table, hợp đồng chính) để xác nhận độ chính xác của changelog. Thời gian: 15–20 phút. Nếu phát hiện lỗi: mã băm sai lệch chỉ ra một thay đổi ảo (VD: xuất lại PDF cùng nội dung nhưng khác metadata) — chuyên viên đánh dấu là "không có thay đổi thực tế" ở kết quả xuất ra.
**Độ ổn định của đầu vào:** KHÔNG ỔN ĐỊNH — PDF có thể bị scan, đổi tên, sắp xếp lại giữa các phiên bản.
**Chi phí khi thất bại:** THẤP — bỏ sót tài liệu thay đổi là một khoảng trống thẩm định, không phải lỗi mô hình. Rủi ro tỷ lệ thuận với tầm quan trọng của tài liệu bị sót.
**Rủi ro tuân thủ:** THẤP — hoàn toàn offline. Không tải lên mạng.
**Thời gian tiết kiệm thực tế:**
- Tổng tiết kiệm: 3–4 giờ mỗi lần Data room cập nhật (thời gian để quét thư mục và tìm thay đổi thủ công)
- Chi phí kiểm tra: 20 phút
- Tiết kiệm ròng: 2.5–3.5 giờ mỗi lần cập nhật; 10–28 giờ mỗi deal

**Phương án dự phòng:** Chuyên viên sử dụng metadata của file (ngày sửa đổi, dung lượng) và so sánh trực quan cấu trúc thư mục bằng mắt thường.
**Ước lượng thời gian xây dựng:** 2 ngày
**Gánh nặng bảo trì:** 0.5 giờ/quý. Chỉ hỏng nếu cấu trúc thư mục bị sắp xếp lại giữa chừng (chia theo danh mục con mới). Cách sửa: cập nhật logic duyệt cây thư mục. Nếu người bảo trì rời đi: script chỉ có dưới 30 dòng lệnh xử lý file hệ thống.
**Stack công nghệ đề xuất:** `hashlib`, `os`, `pathlib`, `pandas`, `openpyxl`
**Vai trò của Claude Code:** Một script Python thông thường là đủ — đây là phân tích hệ thống file thuần túy. Claude Code hữu ích cho: việc xây dựng ban đầu, và xử lý các trường hợp ngoại lệ như PDF có mật khẩu trong data room (chuyên viên mô tả lỗi, Claude Code viết logic bỏ qua file đó hoặc vượt pass).

---

## Use Case 9: Khởi tạo Template Yêu cầu Thay đổi Kịch bản cho Hội đồng Đầu tư (Có Cấu trúc, Không dùng NLP)

*Sau buổi họp IC, chuyên viên điền vào một template yêu cầu phân tích độ nhạy (sensitivity) có sẵn. Script đọc template đã điền và tạo ra một bảng phân tích độ nhạy có định dạng chuẩn theo cấu trúc mô hình, điền sẵn các khoảng biến thiên được yêu cầu.*

> **Thiết kế lại từ V2:** Đã loại bỏ khả năng phân tích biên bản họp bằng NLP. Độ chính xác offline của `spacy` với thuật ngữ tài chính là không đủ tốt. Chuyên viên tự điền template thủ công (5 phút) — script sẽ đảm nhận việc tìm kiếm trong mô hình và tạo bảng.

**Tần suất:** Sau mỗi cuộc họp IC của từng deal
**Rào cản niềm tin:** THẤP — chuyên viên điền template (giả định nào, khoảng nào, tab mô hình nào) và xem xét bảng độ nhạy được tạo. Thời gian: 5 phút điền template + 10 phút kiểm tra output. Nếu phát hiện lỗi: tham chiếu ô trong template bị sai — chuyên viên sửa lại và chạy lại.
**Độ ổn định của đầu vào:** ỔN ĐỊNH — đầu vào là file Excel template có cấu trúc do chuyên viên điền + file mô hình. Chuyên viên tự kiểm soát nội dung template.
**Chi phí khi thất bại:** THẤP — khoảng biến thiên sai sẽ bị phát hiện và sửa được ngay.
**Rủi ro tuân thủ:** KHÔNG CÓ — chỉ chạy nội bộ.
**Thời gian tiết kiệm thực tế:**
- Tổng tiết kiệm: 1.5–2 giờ mỗi buổi họp IC (thời gian để tìm các ô, lập bảng data table, định dạng đầu ra)
- Chi phí kiểm tra: 15 phút
- Tiết kiệm ròng: 1–1.5 giờ mỗi buổi họp

**Phương án dự phòng:** Chuyên viên tự xây dựng data table trong Excel cho từng độ nhạy. Đây là kỹ năng tiêu chuẩn của mọi chuyên viên IB.
**Ước lượng thời gian xây dựng:** 2 ngày
**Gánh nặng bảo trì:** 0.5 giờ/quý. Hỏng nếu tên tab mô hình hoặc các dải (named ranges) bị đổi giữa các phiên bản. Cách sửa: chuyên viên cập nhật tham chiếu ô trong template. Nếu người bảo trì rời đi: template có thể tự giải thích cách hoạt động.
**Stack công nghệ đề xuất:** `openpyxl`, `pandas`
**Vai trò của Claude Code:** Khi cấu trúc mô hình đổi giữa các phiên bản (thêm tab mới, đổi tên dải), chuyên viên thả mô hình mới vào phiên làm việc của Claude Code → Claude Code tiến hành map (ánh xạ) các tham chiếu cũ sang vị trí mới và cập nhật file config của template. Việc này tiết kiệm 30–60 phút mò mẫm tìm ô thủ công.

---

# PHẦN 3 — ĐẦU TƯ TÀI CHÍNH TƯ NHÂN (PRIVATE EQUITY)

---

## Use Case 10: Dashboard Giám sát Danh mục Đầu tư (Báo cáo Hàng tháng Đa định dạng)

> **Điều kiện tiên quyết — BẮT BUỘC trước khi xây dựng:** Các công ty trong danh mục phải đồng ý nộp báo cáo hàng tháng theo một mẫu chuẩn. Đây là thỏa thuận kinh doanh, không phải công việc kỹ thuật. Nếu không có chuẩn hóa mẫu báo cáo, use case này đòi hỏi 12 cấu hình phân tích khác nhau với gánh nặng bảo trì nhân lên gấp 12 lần. Đừng xây dựng tự động hóa khi chưa giải quyết được bài toán về template.

*Nhập các gói báo cáo hàng tháng đã chuẩn hóa từ các công ty trong danh mục, tính toán KPI, cảnh báo các chỉ số sắp vi phạm giao ước (covenant), xuất Dashboard tổng hợp.*

**Tần suất:** Hàng tháng
**Rào cản niềm tin:** TRUNG BÌNH — chuyên viên kiểm tra 2–3 KPI chính cho mỗi công ty với báo cáo gốc. Thời gian: 5 phút mỗi công ty × số lượng công ty. Nếu phát hiện lỗi: cấu hình ánh xạ cột cho công ty đó bị sai — cập nhật config và chạy lại.
**Độ ổn định của đầu vào:** TRUNG BÌNH (sau khi đã chuẩn hóa template) / KHÔNG ỔN ĐỊNH (nếu chưa chuẩn hóa). Đừng thực hiện nếu không đáp ứng điều kiện tiên quyết.
**Chi phí khi thất bại:** TRUNG BÌNH — KPI sai lọt vào cuộc họp thảo luận của IC, nhưng nhóm giao dịch có thể lật lại báo cáo gốc.
**Rủi ro tuân thủ:** KHÔNG CÓ — file nội bộ.
**Thời gian tiết kiệm thực tế (sau khi chuẩn hóa template):**
- Tổng tiết kiệm: 12–16 giờ/tháng
- Chi phí kiểm tra: 1–2 giờ (cho 8–15 công ty)
- Tiết kiệm ròng: 10–14 giờ/tháng

**Phương án dự phòng:** Chuyên viên mở từng gói báo cáo một và copy thủ công KPI. Đây cũng là quy trình tiêu chuẩn hiện nay.
**Ước lượng thời gian xây dựng:** 5 ngày (sau khi template đã được chuẩn hóa)
**Gánh nặng bảo trì:** 2 giờ/quý. Bị hỏng khi công ty danh mục đổi gói báo cáo bất chấp template chuẩn (thường xảy ra sau khi công ty đó đổi CFO). Cách sửa: cấu hình lại việc ánh xạ cho công ty đó. Nếu người bảo trì rời đi: các file cấu hình cho mỗi công ty nếu đặt tên rõ ràng sẽ tự giải thích cách hoạt động.
**Stack công nghệ đề xuất:** `pandas`, `openpyxl`, `chardet`
**Vai trò của Claude Code:** Khi công ty trong danh mục nộp báo cáo lệch chuẩn (đổi CFO, định dạng mới), chuyên viên thả file vào Claude Code → Claude Code so sánh với template chuẩn, nhận diện cấu trúc bị đổi, viết lại config cho công ty đó.

---

## Use Case 11: Giám sát Giao ước (Covenant) từ Bảng Giao ước Trích xuất Thủ công

> **Đính chính phạm vi từ V2:** Đã loại bỏ phần trích xuất PDF định nghĩa giao ước từ hợp đồng tín dụng. Ngôn ngữ giao ước có các phần ngoại lệ (carve-outs), tham chiếu chéo, và các định nghĩa EBITDA điều chỉnh quá đặc thù, khiến regex không thể xử lý đáng tin cậy. Đội pháp lý phải trực tiếp trích xuất thủ công các định nghĩa này MỘT LẦN vào file Excel có cấu trúc. Script chỉ so sánh số liệu thực tế với ngưỡng định nghĩa có sẵn đó.

*Đọc file Excel định nghĩa giao ước (được duy trì thủ công bởi Tài chính/Pháp lý), đọc số liệu thực tế hàng tháng từ gói báo cáo công ty danh mục, tính toán dư địa giao ước (headroom), đánh dấu các trường hợp vi phạm hoặc sắp vi phạm (>80% ngưỡng).*

**Tần suất:** Hàng tháng
**Rào cản niềm tin:** TRUNG BÌNH — đội Tài chính/Pháp lý rà soát cảnh báo vi phạm và đối chiếu với file định nghĩa giao ước. Thời gian: 20–30 phút mỗi công ty. Nếu phát hiện lỗi: sai số ngưỡng trong file giao ước (lỗi nhập liệu của con người) — đội pháp lý sửa đổi trong file và chạy lại.
**Độ ổn định của đầu vào:** ỔN ĐỊNH cho việc theo dõi (bảng giao ước được duy trì thủ công, số thực tế từ báo cáo chuẩn hóa). Chỉ không ổn định khi hợp đồng nợ bị sửa đổi.
**Chi phí khi thất bại:** CAO — cảnh báo vi phạm sai có thể dẫn tới thông báo không cần thiết cho bên cho vay hoặc bỏ lỡ vi phạm thực tế.
**Rủi ro tuân thủ:** THẤP — offline, file nội bộ.
**Thời gian tiết kiệm thực tế:**
- Tổng tiết kiệm: 4–6 giờ/tháng (thời gian rút số liệu thực tế và kiểm tra từng giao ước cho mỗi công ty thủ công)
- Chi phí kiểm tra: 30–45 phút
- Tiết kiệm ròng: 3–5 giờ/tháng

**Phương án dự phòng:** Chuyên viên dùng bảng Excel duy trì thủ công + máy tính bỏ túi. Đó là quy trình tiêu chuẩn hiện nay.
**Ước lượng thời gian xây dựng:** 3 ngày
**Gánh nặng bảo trì:** 1 giờ/quý. Bị hỏng khi khoản nợ bị sửa đổi (giao ước mới, đổi ngưỡng) — đội pháp lý phải cập nhật file định nghĩa, sau đó script sẽ chạy chính xác lại. Nếu người bảo trì rời đi: script đọc từ file Excel tĩnh — chuyên viên nào cũng có thể cập nhật bảng Excel mà không đụng chạm tới code.
**Stack công nghệ đề xuất:** `pandas`, `openpyxl`
**Vai trò của Claude Code:** Một script Python thông thường là đủ. Claude Code chỉ hữu ích khi hợp đồng nợ được sửa đổi bổ sung cấu trúc giao ước không có trong logic theo dõi hiện tại (ví dụ: springing covenants, step-down schedules) — chuyên viên mô tả cấu trúc mới, Claude Code nâng cấp logic theo dõi.

---

## Use Case 12: Tự động Lắp ráp Gói Báo cáo HĐQT (Board Pack)

*Thu thập các file slide từ Tài chính, Nhân sự, Pháp lý, Vận hành; lắp ráp vào một Master PowerPoint theo thứ tự các phần chính xác, áp dụng việc chuẩn hóa định dạng cơ bản (cỡ chữ tối thiểu, căn lề).*

> **Giới hạn phạm vi:** Script chỉ xử lý cấu trúc và thứ tự, không thiết kế. Định dạng cuối cùng và độ trau chuốt về mặt hình ảnh vẫn do chuyên viên quyết định. Kết quả đầu ra từ python-pptx chưa sẵn sàng thuyết trình nếu không có sự xem xét của con người.

**Tần suất:** Hàng quý
**Rào cản niềm tin:** THẤP — chuyên viên đọc duyệt file tổng hợp cuối cùng để rà soát thứ tự slide, đánh số trang, và các lỗi định dạng rõ ràng. Thời gian: 45–60 phút. Nếu phát hiện lỗi: thứ tự slide bị sai hoặc thiếu một phần — chuyên viên chỉnh thủ công và cập nhật lại file config.
**Độ ổn định của đầu vào:** KHÔNG ỔN ĐỊNH — mỗi nhóm sử dụng phông chữ, bố cục và slide master khác nhau. Script chỉ chuẩn hóa những thứ có thể (cỡ chữ sàn, vị trí text box) và để lại các quyết định thiết kế cho chuyên viên.
**Chi phí khi thất bại:** THẤP — thứ tự slide sai có thể nhìn thấy ngay. Không sinh ra dữ liệu tài chính nào cả.
**Rủi ro tuân thủ:** KHÔNG CÓ — không tải lên mạng.
**Thời gian tiết kiệm thực tế:**
- Tổng tiết kiệm: 14–20 giờ/quý (thời gian thu thập, định dạng lại, lắp ráp slide thủ công từ 4 nhóm)
- Chi phí kiểm tra: 1 giờ
- Tiết kiệm ròng: 12–18 giờ/quý

**Phương án dự phòng:** Chuyên viên dùng chức năng "Reuse Slides" của PowerPoint và copy-paste thủ công. Phương án quen thuộc.
**Ước lượng thời gian xây dựng:** 3 ngày
**Gánh nặng bảo trì:** 1–2 giờ/quý. Hỏng khi một trong các bộ phận đóng góp thay đổi template slide hoặc slide master. Cách sửa: cập nhật quy tắc chuẩn hóa cho bộ phận đó. Nếu người bảo trì rời đi: thứ tự lắp ráp được định nghĩa trong file cấu hình — chuyên viên nào cũng cập nhật được thứ tự phần mà không đụng tới code.
**Stack công nghệ đề xuất:** `python-pptx`, `os`, `shutil`
**Vai trò của Claude Code:** Script Python thông thường là đủ. Claude Code phát huy tác dụng khi một nhóm nộp slide có chứa đối tượng nhúng bất thường (biểu đồ link với Excel bên ngoài) làm hỏng script lắp ráp — chuyên viên dán lỗi vào, Claude Code chẩn đoán và viết code xử lý tránh lỗi (bypass).

---

## Use Case 13: Điền Template Bản ghi nhớ (Memo) cho Cuộc họp IC Nhanh (Chỉ Điền Bảng và Chỗ Trống)

*Đọc các ô kết quả từ mô hình LBO/DCF, điền vào các trường đã để trống trong template Memo IC (định dạng Word). Chuyên viên viết toàn bộ phần nội dung chữ. Script sẽ điền: Bảng IRR, tóm tắt lợi nhuận, bảng các giả định chính, tóm tắt cấu trúc vốn (cap table).*

> **Giới hạn phạm vi:** Script chỉ dùng để điền các bảng và ô trống. Không tự sinh ra đoạn văn bản. Không dùng AI để viết lách. Chuyên viên tự kiểm soát 100% nội dung chữ viết.

**Tần suất:** Theo từng giao dịch (deal)
**Rào cản niềm tin:** TRUNG BÌNH — chuyên viên rà soát từng con số được điền vào so với mô hình trực tiếp (kiểm tra chéo 5–8 số liệu chính). Thời gian: 20 phút. Nếu phát hiện lỗi: tham chiếu ô trong file config bị sai hoặc cấu trúc mô hình đã đổi — chuyên viên cập nhật lại cấu hình và chạy lại.
**Độ ổn định của đầu vào:** ỔN ĐỊNH — giả định sử dụng template Memo chuẩn của công ty và cấu trúc tab mô hình chuẩn. Cả hai nên được kiểm soát phiên bản (version-controlled).
**Chi phí khi thất bại:** THẤP — con số sai sẽ bị Giám đốc (Partner) bắt lỗi trong buổi đánh giá. Chuyên viên hoàn toàn tự viết nội dung chữ, nên không có rủi ro về mặt "văn bản sinh ra bởi AI".
**Rủi ro tuân thủ:** THẤP (chạy nội bộ) / CAO (nếu CIM hoặc Báo cáo DD bị tải lên AI bên ngoài — đừng làm việc này). Chỉ chạy nội bộ trên mô hình nội bộ: hoàn toàn không vi phạm tuân thủ.
**Thời gian tiết kiệm thực tế:**
- Tổng tiết kiệm: 2–3 giờ mỗi deal (thời gian để copy các số liệu từ mô hình sang template)
- Chi phí kiểm tra: 20 phút
- Tiết kiệm ròng: 1.5–2.5 giờ mỗi deal

**Phương án dự phòng:** Chuyên viên copy số từ mô hình qua template thủ công. Mất 2–3 giờ.
**Ước lượng thời gian xây dựng:** 2 ngày
**Gánh nặng bảo trì:** 0.5 giờ/quý. Bị hỏng nếu tên tab trong mô hình hoặc tham chiếu ô thay đổi. Cách sửa: chuyên viên cập nhật cấu hình tham chiếu ô. Nếu người bảo trì rời đi: file cấu hình là một file Excel đơn giản chứa tham chiếu ô — có thể tự đọc hiểu dễ dàng.
**Stack công nghệ đề xuất:** `openpyxl`, `python-docx`, `pandas`, `string`
**Vai trò của Claude Code:** Khi cấu trúc mô hình thay đổi giữa các phiên bản của deal (đổi tên tab, tổ chức lại sheet giả định), chuyên viên ném cả mô hình mới và cũ vào Claude Code → Claude Code ánh xạ từ vị trí cũ sang mới và cập nhật file config. Cách này đáng tin cậy hơn việc tự mò mẫm và thay thế bằng tay qua hơn 50 ô tham chiếu.

---

# PHẦN 4 — CÁC USE CASE TẠO LỢI THẾ LỚN (HIGH-ALPHA)

---

## Use Case 14: Theo dõi Nguồn gốc của Ô trong Mô hình

*Với một mô hình Excel bất kỳ, truy xuất chuỗi phụ thuộc (dependency chain) của từng ô và phân loại mọi ô thành: HARDCODE / CÔNG THỨC-TRONG-CÙNG-SHEET / CÔNG THỨC-XUYÊN-TAB / CÔNG THỨC-XUYÊN-FILE / LIÊN KẾT GÃY (BROKEN-LINK). Kết quả xuất ra: Bảng Excel báo cáo có cấu trúc, mỗi hàng tương ứng một ô, cho thấy: tên sheet, địa chỉ ô, phân loại, text công thức, độ sâu của chuỗi phụ thuộc.*

**Tần suất:** Theo từng giao dịch / mỗi lần nhận mô hình
**Rào cản niềm tin:** THẤP — đầu ra là danh sách phân loại chứa địa chỉ ô. Chuyên viên kiểm tra chéo 5–10 ô bằng cách mở chúng trong Excel và xác nhận. Thời gian: 15–20 phút. Nếu phát hiện lỗi: openpyxl đọc sai một công thức (trường hợp thường thấy với array formulas) — chuyên viên đánh dấu là "cần kiểm tra thủ công" và ghi chú lại.
**Độ ổn định của đầu vào:** ỔN ĐỊNH — đầu vào luôn là Excel. Việc phân loại được định tính hoàn toàn thông qua phần text của công thức.
**Chi phí khi thất bại:** THẤP — phân loại sai ô là một điểm mù kiểm toán, không phải lỗi mô hình. Rủi ro duy nhất là có số liệu tự nhập (hardcode) bị phân loại nhầm thành công thức.
**Rủi ro tuân thủ:** KHÔNG CÓ — chỉ chạy nội bộ. Không upload dữ liệu.
**Thời gian tiết kiệm thực tế:**
- Tổng tiết kiệm: 3–5 giờ cho mỗi mô hình (thời gian để tự dò tìm chuỗi phụ thuộc trong một mô hình LBO 20 tab)
- Chi phí kiểm tra: 20 phút
- Tiết kiệm ròng: 2.5–4.5 giờ cho mỗi mô hình

**Phương án dự phòng:** Chuyên viên sử dụng tính năng "Trace Precedents" của Excel (chạy cho từng ô, thủ công). Chậm nhưng mang lại thông tin tương đương.
**Ước lượng thời gian xây dựng:** 3 ngày
**Gánh nặng bảo trì:** 0.5 giờ/quý. Bị hỏng khi gặp tính năng lạ trong Excel: hàm XLOOKUP (chỉ có trên Excel mới), bảng có cấu trúc tham chiếu, dynamic arrays (mảng động). Cách sửa: bổ sung cách xử lý cho từng hàm mới của Excel mỗi khi gặp. Nếu người bảo trì rời đi: danh sách ngoại lệ được tài liệu hóa trong config.
**Stack công nghệ đề xuất:** `openpyxl`, `re`, `pandas`
**Vai trò của Claude Code:** Ưu thế thực sự của Claude Code: khi mô hình sử dụng công thức lồng ghép phức tạp tham chiếu qua nhiều loại đối tượng, chuyên viên có thể hỏi "cuối cùng công thức chuỗi này phụ thuộc vào điều gì?" bằng ngôn ngữ tự nhiên — Claude Code truy vết chuỗi và giải thích bằng tiếng Anh cơ bản. Tính năng "Trace Precedents" có sẵn của Excel có vẽ mũi tên trực quan nhưng không thể tóm tắt hay xuất chuỗi dữ liệu. Đây là nhiệm vụ truy xuất đa tệp, đa bước mà bản thân ngôn ngữ Python không thể làm tốt nếu thiếu lớp thông dịch ngôn ngữ tự nhiên của Claude Code.

---

## Use Case 15: Xác định Tác động IRR qua Các Phiên bản Mô hình Khác nhau (Model Delta)

*So sánh Mô hình LBO phiên bản (n) với (n+1). Xác định mọi ô có thay đổi. Đối với từng ô bị đổi: xác định xem nó có chạy vào kết quả IRR hay không (thông qua truy vết chuỗi phụ thuộc). Với các thay đổi có làm ảnh hưởng đến IRR: lượng hóa biến thiên IRR (đo bằng điểm cơ bản - bps) tạo ra do chính thay đổi đó. Kết quả đầu ra: Bảng Delta với các cột — [Tab / Ô / Tên giả định / Giá trị v(n) / Giá trị v(n+1) / Tác động IRR (bps) / Chiều hướng].*

**Tần suất:** Theo giao dịch, theo từng lần cập nhật phiên bản (thường từ 4–8 lần mỗi deal)
**Rào cản niềm tin:** TRUNG BÌNH — chuyên viên rà soát 3–5 mục thay đổi ảnh hưởng IRR nhiều nhất bằng cách thử độ nhạy bằng tay trong Excel để xác nhận mức phân bổ bps. Thời gian: 30–45 phút. Nếu phát hiện lỗi: quá trình truy vết chuỗi phụ thuộc bị sót một liên kết gián tiếp (VD: thông qua một named range) — chuyên viên ghi chú lại lỗ hổng và điền tay sự phân bổ IRR cho ô đó.
**Độ ổn định của đầu vào:** TRUNG BÌNH — giả định cả 2 bản đều có cấu trúc tab giống nhau. Nếu đổi tên tab hoặc thay đổi cấu trúc giữa các bản, so sánh ô-với-ô sẽ thất bại. Script phải phát hiện sự sai lệch cấu trúc tab và báo lỗi trước khi chạy.
**Chi phí khi thất bại:** TRUNG BÌNH — sự phân bổ IRR sai sẽ đẩy nhóm giao dịch đi điều tra nhầm giả định. Gây mất thời gian, không phải lỗi mô hình bị dây chuyền.
**Rủi ro tuân thủ:** KHÔNG CÓ — chỉ chạy cục bộ.
**Thời gian tiết kiệm thực tế:**
- Tổng tiết kiệm: 2–4 giờ cho mỗi lần so sánh phiên bản (thời gian để thủ công rà soát thay đổi và định giá ảnh hưởng tới IRR)
- Chi phí kiểm tra: 45 phút
- Tiết kiệm ròng: 1.25–3 giờ mỗi lần so sánh; 5–24 giờ mỗi deal

**Phương án dự phòng:** Chuyên viên so sánh mô hình tay bằng chức năng "View Side by Side" của Excel + phân tích tay độ nhạy IRR cho các giả định bị nghi ngờ có thay đổi.
**Ước lượng thời gian xây dựng:** 5 ngày (độ phức tạp: yêu cầu truy vết chuỗi phụ thuộc + phân bổ độ nhạy IRR)
**Gánh nặng bảo trì:** 1–2 giờ/quý. Bị hỏng khi: các tab mô hình bị tái cấu trúc, công thức tính IRR bị đổi ô, named ranges thay đổi. **Đặc biệt lưu ý: script phải được thiết lập với tham chiếu ô IRR ngay từ lúc đầu mỗi deal.** Nếu người bảo trì rời đi: cấu trúc tab và tham chiếu ô IRR được lưu trữ trong config — người thay thế chỉ cần sửa config mà không cần chạm vào lõi code.
**Stack công nghệ đề xuất:** `openpyxl`, `pandas`, `re`
**Vai trò của Claude Code:** Đây là Use Case mang lại sức mạnh lớn nhất của Claude Code trong cuốn sổ tay này. Việc truy vết chuỗi phụ thuộc của IRR đòi hỏi: đọc công thức, truy xuất chuỗi xuyên qua các tab, tính đạo hàm riêng rẽ bằng thuật toán số (numerically), và giải thích mọi kết quả ra bằng tiếng Anh thông thường. Claude Code giải quyết câu hỏi "giả định nào kéo IRR xuống 80bps" bằng ngôn ngữ tự nhiên — Code Python bình thường chỉ xuất ra được một bảng phân bổ Delta nhưng không thể có "lớp diễn giải" mà Giám đốc cần. Mang lại giá trị khác biệt tuyệt đối.

---

## Use Case 16: Dọn dẹp Sự hỗn loạn Trong Ổ Đĩa Chia sẻ

*Quét một thư mục deal hoặc ổ đĩa chung. Nhận diện và báo cáo: (a) file trùng lặp qua nội dung băm bất chấp tên file, (b) các file có phiên bản lộn xộn trong tên (FINAL, FINAL2, FINAL v2, USE THIS, DO NOT USE), (c) file không được sửa chữa trong hơn 90 ngày, (d) các file không có quan hệ rõ ràng nào với các file khác trong thư mục (bị mồ côi). Kết quả xuất ra: Bảng báo cáo Excel làm sạch có cấu trúc gồm: đường dẫn file, loại vấn đề, hành động được đề xuất (Archive / Delete / Rename / Review).*

**Tần suất:** Khởi tạo đầu deal / Dọn dẹp ổ đĩa chia sẻ hàng quý
**Rào cản niềm tin:** THẤP — kết quả là danh sách các đường dẫn file và đề xuất. Chuyên viên sẽ rà soát các đề xuất trước khi làm bất kỳ điều gì. Script không bao giờ xóa hay chuyển vị trí file — nó chỉ báo cáo. Thời gian: 20–30 phút để đọc báo cáo. Nếu phát hiện lỗi: file bị báo trùng lại là một phiên bản khác — chuyên viên đánh dấu "Keep Both" vào báo cáo.
**Độ ổn định của đầu vào:** ỔN ĐỊNH — đầu vào là siêu dữ liệu hệ thống (metadata) và mã băm. Không cần phân tích sâu nội dung văn bản.
**Chi phí khi thất bại:** THẤP — file rác hay trùng bị sót là vấn đề về mặt tổ chức hệ thống, không phải lỗi tài chính.
**Rủi ro tuân thủ:** KHÔNG CÓ — script đọc siêu dữ liệu và băm cục bộ. Không trích xuất nội dung file. Không upload.
**Thời gian tiết kiệm thực tế:**
- Tổng tiết kiệm: 2–4 giờ mỗi lần dọn thư mục
- Chi phí kiểm tra: 30 phút
- Tiết kiệm ròng: 1.5–3.5 giờ mỗi lần làm sạch

**Phương án dự phòng:** Chuyên viên xếp thư mục thủ công theo tên, ngày, dung lượng để kiếm file trùng. Mất 2–4 giờ.
**Ước lượng thời gian xây dựng:** 1 ngày (lần build đơn giản nhất trong sổ tay này — chỉ cần dùng các hoạt động file system thuần túy)
**Gánh nặng bảo trì:** KHÔNG CÓ — script không phụ thuộc nội dung file, định dạng hay schema gì cả. Chạy tốt với bất kỳ thư mục nào bất chấp nội dung bên trong. Nếu người bảo trì rời đi: script này < 40 dòng dùng lệnh `os` + `hashlib`. Bất kỳ chuyên viên nào có Python cơ bản đều sửa được.
**Stack công nghệ đề xuất:** `os`, `pathlib`, `hashlib`, `pandas`, `openpyxl`, `re`
**Vai trò của Claude Code:** Kịch bản Python thuần túy là đủ — đây là phân tích hệ thống tập tin thuần túy mà không cần sự đánh giá của AI. Claude Code chỉ hữu ích trong việc khởi tạo. Sau đó: script chạy mãi mãi không cần bảo trì. **Đây là công cụ dễ được áp dụng nhất trong cuốn sổ tay này — hãy xây dựng nó đầu tiên.**

---

# LỘ TRÌNH ÁP DỤNG (ADOPTION ROADMAP)

## Giai đoạn 1 — Không phụ thuộc IT (Tuần 1–4)

**Điều kiện bắt buộc:** Chỉ yêu cầu `pandas` + `openpyxl` + `re` + thư viện tiêu chuẩn của Python. Có thể cài đặt qua `pip` trên bất kỳ máy tính nào, kể cả máy tính Windows công ty bị giới hạn chính sách nhóm. Không cần các hệ thống cài đặt phụ thuộc nhị phân. Không cần IT phê duyệt. Chuyên viên có thể khởi chạy bằng một dòng lệnh trên Command line.

**Công cụ ở Giai đoạn 1:**
1. Phát hiện Hardcode chéo giữa các File (Use Case 1)
2. Chuẩn hóa "Số liệu có dấu" trong Mô hình (Use Case 2)
3. Dọn dẹp Sự hỗn loạn Trong Ổ đĩa chia sẻ (Use Case 16) — chỉ dùng thư viện chuẩn, 0 phụ thuộc pip

**Tại sao chỉ có 3:** Niềm tin không được xây dựng qua các bản demo hào nhoáng. Niềm tin được củng cố khi một công cụ chạy đúng 3 lần liên tiếp. Hãy làm ra 3 công cụ. Sử dụng chúng. Chứng minh hiệu quả của chúng. Rồi mới mở rộng.

**Chỉ số thành công Giai đoạn 1:** Mỗi công cụ được sử dụng bởi ít nhất 2 chuyên viên trên các deal thực tế trong 4 tuần đầu. Nếu không đạt: hãy điều tra nguyên nhân ngăn cản trước khi phát triển Giai đoạn 2.

---

## Giai đoạn 2 — Script được Kiểm soát (Tháng 1–3)

**Điều kiện bắt buộc:** Phê duyệt của IT đối với một số thư viện pip khác (không yêu cầu hệ thống nhị phân ngoài `pdfplumber` nếu cần). Có ít nhất 1 chuyên viên trong nhóm có chuyên môn Python căn bản hoặc có 1 người chịu trách nhiệm viết script. Định dạng đầu vào cho các Use case hướng đến phải được làm thành tài liệu.

**Công cụ bổ sung ở Giai đoạn 2:**
- Tự động Đối chiếu Sao kê Ngân hàng vs Sổ cái (Use Case 4) — thêm vào nếu xác định được định dạng CSV của ngân hàng là ổn định
- Cập nhật tự động Thông cáo Báo cáo vs Comps (Use Case 6) — bắt đầu từ 3 công ty, mở rộng dần
- Theo dõi Nguồn gốc của Ô trong Mô hình (Use Case 14)
- Xác định Tác động IRR qua Các Phiên bản Mô hình Khác nhau (Use Case 15) — sự bổ sung giá trị nhất trong giai đoạn này
- Khởi tạo Template Yêu cầu Thay đổi Kịch bản cho Hội đồng Đầu tư (Use Case 9) — bản thiết kế lại, không dùng NLP

**Chỉ số thành công Giai đoạn 2:** Ít nhất 2 công cụ được dùng trên mọi deal đang diễn ra mà chuyên viên không phải hỏi "làm sao để chạy công cụ này."

---

## Giai đoạn 3 — Lớp Công cụ Nội bộ (Tháng 3–6)

**Điều kiện bắt buộc:** Người phụ trách script toàn thời gian (hoặc có đội hỗ trợ lập trình bán thời gian). Quản lý và tiêu chuẩn hóa được các định dạng đầu vào cho các công cụ tần suất cao. Quy trình dự phòng được tài liệu hóa và chạy thử. IT đã duyệt các thư viện cần thiết.

**Công cụ bổ sung ở Giai đoạn 3:**
- Đối chiếu Chênh lệch Đóng sổ Hàng tháng (Use Case 3) — ERP cần ổn định và có tài liệu chuẩn
- Xuất dữ liệu ERP sang Bảng KPI Chuẩn hóa (Use Case 5) — cần tài liệu định dạng theo bộ phận
- Theo dõi Thay đổi Hợp đồng (SPA) / Bản Điều khoản (Use Case 7)
- Theo dõi Lịch sử Thay đổi Data Room (Use Case 8)
- Điền Template Bản ghi nhớ IC Nhanh (Use Case 13)
- Tự động Lắp ráp Gói Báo cáo HĐQT (Use Case 12)

> ⚠️ `tesseract-ocr` và `tabula-py` (dùng cho các tài liệu PDF/scan) cần sự phê duyệt của IT và Java runtime. Phải báo trước khi bắt đầu Giai đoạn 3.

**Chỉ số thành công Giai đoạn 3:** Có ít nhất 3 công cụ được chạy hàng tháng mà không cần con người can thiệp sửa chữa.

---

## Giai đoạn 4 — Hệ Điều hành Tài chính Thông minh Nhân tạo AI (Tháng 12–18)

**Điều kiện bắt buộc:** Quản lý và cấu trúc cơ sở dữ liệu đã hoàn thành. Khâu tuân thủ và cho phép dùng AI nội bộ đã được ký duyệt. Có nguồn lực kỹ sư chuyên môn. Toàn bộ công cụ Giai đoạn 1–3 chạy ổn định và được áp dụng nhiều.

**Công cụ bổ sung / nâng cấp ở Giai đoạn 4:**
- Dashboard Giám sát Danh mục Đầu tư (Use Case 10) — **chỉ làm khi đã chuẩn hóa xong template báo cáo cho công ty thành viên**
- Giám sát Giao ước (Covenant) (Use Case 11) — kết hợp với Dashboard giám sát danh mục
- Pipeline xử lý toàn bộ quá trình Nhập xuất hệ thống Data room (OCR tự thân + trích xuất có cấu trúc — chạy cục bộ hoàn toàn)
- Hệ thống Audit mô hình chuyên sâu (kết hợp các Use Cases 1, 2, 14, 15 thành một công cụ dòng lệnh CLI với lịch sử phiên bản)

**Giới hạn Tuân thủ (Không thỏa hiệp):**
- Tài liệu Deal Bảo mật (CIM, Báo cáo DD, Hợp đồng, Cap table) **không bao giờ** được upload lên APIs của AI thứ ba
- Việc lấy dữ liệu (từ Capital IQ, Bloomberg, SEC EDGAR) chỉ thông qua Connector nội bộ đi kèm với hệ thống lưu vết log
- Mọi xuất liệu do AI tham gia tạo ra đều có cờ đánh dấu "yêu cầu con người đánh giá" trong Audit trail

---

# PHỤ LỤC: SỔ TAY NÀY KHÔNG PHẢI LÀ GÌ

**Đây không phải là một tài liệu chiến lược AI.** Nó là một cuốn sổ tay Tự động hóa bằng Python nơi mà Claude Code đóng vai trò lớp xây-dựng-và-sửa-lỗi (build-and-debug), không phải nguồn trí tuệ cốt lõi.

**Vai trò thực sự của Claude Code trong Sổ tay này:**
1. Viết mã (scripts) nhanh hơn một kỹ sư tự làm
2. Gỡ lỗi khi định dạng thay đổi (use case bảo trì quý giá nhất)
3. Xử lý các lỗi Parsing đặc thù trên từng deal mà không cần đợi nhân sự lập trình
4. Cung cấp một lớp thông dịch bằng ngôn ngữ tự nhiên dựa trên nền tảng kết quả được xuất ra từ script (Use Cases 14, 15)

**Ở đâu script Python thông thường là đủ (không cần Claude Code sau khi viết code xong):**
Use Cases 1, 2, 3, 4, 8, 9, 11, 12, 13, 16 — Hãy sử dụng Claude Code để xây dựng bộ công cụ, rồi sau đó dùng nó như script độc lập vĩnh viễn.

**Ở đâu Claude Code tạo nên những giá trị khác biệt, được duy trì theo thời gian:**
Use Cases 6, 7, 10, 14, 15 — định dạng thay đổi xoành xoạch, khi đó các lệnh ngôn ngữ tự nhiên thêm giá trị to lớn vào công cụ, hoặc nơi yêu cầu sự truy vết qua hàng nghìn loại files.
