# Phân tích Yêu cầu: Dashboard Điều hành (Executive Dashboard)

## 1. Mục tiêu dự án
- Xây dựng một Dashboard tổng quan và trực quan giúp Ban điều hành (CEO, Giám đốc) theo dõi sát sao tình hình hoạt động kinh doanh của doanh nghiệp.
- Cung cấp cái nhìn toàn diện về sức khỏe doanh nghiệp thông qua các chỉ số cốt lõi (KPIs) về doanh thu, sản lượng, tồn kho, và hiệu quả hoạt động.
- Hỗ trợ ra quyết định nhanh chóng, kịp thời dựa trên dữ liệu chính xác và cập nhật.
- Theo dõi tiến độ hoàn thành mục tiêu (Target) và sự tăng trưởng so với cùng kỳ năm trước (YoY).

## 2. Đối tượng người dùng
- **Ban điều hành cấp cao (C-Level):** CEO, CFO, COO - Những người cần cái nhìn bao quát, các chỉ số "chốt" và cảnh báo sớm để định hướng chiến lược.
- **Giám đốc/Quản lý Kinh doanh (Sales Director/Manager):** Theo dõi doanh thu, độ phủ (số lượng điểm bán), tình trạng bán hàng.
- **Giám đốc/Quản lý Chuỗi cung ứng (Supply Chain Director/Manager):** Theo dõi lượng hàng tồn kho, giá trị tồn kho, tỷ lệ hết hàng (Out-of-stock), và số ngày tồn kho (DOS) để tối ưu vận hành.

## 3. Danh sách tính năng chi tiết
- **Tổng quan (Overview Scorecards):** Hiển thị các thẻ chỉ số tóm tắt chứa các KPI quan trọng nhất ở màn hình chính.
- **Bộ lọc động (Dynamic Filters):** Cho phép lọc toàn bộ dữ liệu trên Dashboard theo thời gian (Ngày, Tuần, Tháng, Quý, Năm), khu vực địa lý, kênh bán hàng, hoặc nhóm sản phẩm.
- **Trực quan hóa dữ liệu (Data Visualization):** 
  - Biểu đồ (đường/cột) thể hiện xu hướng Doanh thu, Sản lượng và Tăng trưởng YoY theo thời gian.
  - Biểu đồ Gauge/Bullet cho phần trăm (%) Đạt Target.
- **Hệ thống cảnh báo (Alerts/Color Coding):** Tự động đổi màu (VD: Đỏ/Xanh) hoặc có biểu tượng cảnh báo đối với các chỉ số vi phạm ngưỡng an toàn (VD: DOS > 45 ngày, Tỷ lệ Out-of-Stock >= 5%).
- **Drill-down (Báo cáo chi tiết):** Khả năng click vào một nhóm dữ liệu tổng để xem dữ liệu phân rã chi tiết.
- **Xuất báo cáo (Export):** Tính năng trích xuất dữ liệu, biểu đồ ra định dạng Excel hoặc PDF để sử dụng cho các cuộc họp.

## 4. Các màn hình cần thiết
1. **Màn hình Tổng quan (Executive Overview):** Màn hình chính gộp tất cả các chỉ số (Doanh thu, Tồn kho, Lợi nhuận, Điểm bán) giúp lãnh đạo nắm bắt tình hình trong 5 giây.
2. **Màn hình Chi tiết Bán hàng (Sales Performance):** Tập trung phân tích sâu về Doanh Thu Thuần, Số Lượng SKU Bán Ra, Số Điểm Bán (POS), % Đạt Target, % Tăng Trưởng YoY.
3. **Màn hình Quản lý Chuỗi cung ứng (Supply Chain & Inventory):** Tập trung phân tích Giá Trị Tồn Kho, DOS (Days of Stock), Tỷ Lệ Out-of-Stock.
4. **Màn hình Hiệu quả Tài chính (Financial Health):** (Có thể gộp) Hiển thị Tỷ Suất LN Gộp.

## 5. Dữ liệu cần hiển thị

Dashboard cần hiển thị các chỉ số (KPIs) sau theo bảng yêu cầu:

| KPI | Đơn vị | Nguồn / Công thức | Ý nghĩa | Quy tắc Cảnh báo / Ngưỡng |
|-----|--------|-------------------|----------|---------------------------|
| **Doanh Thu Thuần** | Tr.VNĐ | `SUM(sell-out revenue)` | Tổng doanh thu thuần đã bán ra | So sánh trực quan với Target |
| **Số Lượng SKU Bán Ra** | Thùng | `SUM(cases sold)` | Tổng sản lượng tiêu thụ | So sánh với Target |
| **Giá Trị Tồn Kho** | Tr.VNĐ | `Tồn Cuối × Giá Vốn / 10^6` | Giá trị vốn của lượng hàng đang tồn | Kiểm soát dòng tiền nằm ở tồn kho |
| **DOS (Days of Stock)** | Ngày | Số ngày tồn kho tính theo sức bán | Đánh giá tốc độ luân chuyển hàng | 🔴 Cảnh báo khi **> 45 ngày** |
| **Tỷ Lệ Out-of-Stock** | % | % SKU hết hàng tại điểm bán | Đánh giá mức độ đứt gãy cung ứng | 🔴 Cảnh báo khi **>= 5%** |
| **Số Điểm Bán (POS)** | Điểm | `COUNTIFS(unique customers)` | Số lượng điểm bán đang hoạt động | Đo lường độ phủ thị trường |
| **Tỷ Suất LN Gộp** | % | `Gross Profit / Revenue` | Biên lợi nhuận gộp | Theo dõi hiệu quả sinh lời |
| **% Đạt Target** | % | `Actual / Target` | Tỷ lệ hoàn thành mục tiêu đề ra | 🟢 >=100%, 🟡 90-99%, 🔴 <90% |
| **% Tăng Trưởng YoY** | % | `(Current-Prior) / Prior` | Tốc độ tăng trưởng so với cùng kỳ | 🟢 Số dương, 🔴 Số âm |

## 6. Yêu cầu phi chức năng
- **Hiệu năng (Performance):** Tốc độ tải trang nhanh (Load time < 3s), hệ thống phải chịu tải tốt với lượng dữ liệu giao dịch lớn.
- **Tính bảo mật (Security):** Áp dụng phân quyền người dùng (Role-based Access Control - RBAC) nghiêm ngặt do đây là dữ liệu cấp quản lý nhạy cảm. Đảm bảo mã hóa dữ liệu.
- **Tính khả dụng (Usability & UI/UX):** Giao diện hiện đại, tối giản, áp dụng nguyên tắc "Data-ink ratio" cao (tập trung vào số liệu). Responsive tốt trên thiết bị di động (Mobile/Tablet) để lãnh đạo xem bất cứ lúc nào.
- **Khả năng tích hợp (Integration):** Có khả năng kết nối API/ETL lấy dữ liệu tự động từ các hệ thống sẵn có (ERP, DMS, CRM, Excel/CSV upload).
- **Tính ổn định (Reliability):** Dữ liệu phải được cập nhật thường xuyên, chính xác (Cập nhật Real-time, hoặc ít nhất là theo đợt tự động vào cuối ngày/đầu ngày).
