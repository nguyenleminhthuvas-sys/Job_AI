# Design System & UI Specifications: Executive Dashboard

Tài liệu này mô tả chi tiết hệ thống thiết kế và các thành phần giao diện (UI components) cho hệ thống Executive Dashboard, được xây dựng dựa trên yêu cầu chức năng từ `specs.md`.

## 1. Layout tổng thể (Overall Layout)

Dashboard sử dụng kiến trúc layout phổ biến cho ứng dụng quản trị, giúp tối ưu hóa không gian hiển thị dữ liệu:

*   **Top Navigation (Header):** Thanh điều hướng cố định trên cùng (top). Chứa logo doanh nghiệp, menu điều hướng chính tới các màn hình:
    *   Tổng quan (Executive Overview)
    *   Chi tiết Bán hàng (Sales Performance)
    *   Quản lý Chuỗi cung ứng (Supply Chain & Inventory)
    *   Hiệu quả Tài chính (Financial Health)
    Bên góc phải chứa thanh tìm kiếm, thông báo (Alerts), nút chuyển Dark/Light mode và thông tin User.
*   **Main Content (Dưới):** Phần không gian hiển thị nội dung bên dưới Header. Chứa:
    *   **Sub-Header / Tool Bar:** Chứa các bộ lọc động (Dynamic Filters) toàn cục (Thời gian, Khu vực, Kênh, Sản phẩm) và nút Export báo cáo.
    *   **Dashboard Content Area:** Vùng hiển thị dữ liệu (Scorecards, Biểu đồ, Bảng chi tiết), cuộn dọc.

## 2. Bảng màu (Color Palette)

Hệ thống sử dụng các tông màu mang tính chuyên nghiệp, hiện đại, đảm bảo tính tương phản "Data-ink ratio" cao để làm nổi bật số liệu:

*   **Primary:** `#443199` (Tím đậm) - Sử dụng cho các thành phần chính, header, thanh điều hướng đang active, và các nút bấm quan trọng.
*   **Secondary:** `#792CA2` (Tím sáng) - Sử dụng cho các thành phần thứ cấp, hover state, hoặc một số đường biểu đồ.
*   **Accent:** `#C13383` (Hồng cánh sen/Đỏ tím) - Sử dụng để tạo điểm nhấn, thông báo đặc biệt hoặc các nút CTA (Call to Action).
*   **Background:** `#E05454` (Đỏ nhạt/San hô) - *Lưu ý: Do màu nền này khá nổi bật, có thể sử dụng làm màu nền cho các khu vực nổi bật, banner, hoặc header. Đối với nền toàn trang chính (Main Background), có thể kết hợp với các sắc độ nhạt hơn hoặc Trắng/Xám để dữ liệu chính không bị chìm.*
*   **Màu trạng thái (Semantic Colors):**
    *   **Success** (Tốt, Tăng trưởng, Đạt target): `#10B981` (Xanh lá)
    *   **Warning** (Cần chú ý): `#F59E0B` (Vàng/Cam)
    *   **Danger** (Nguy hiểm, Out-of-Stock, DOS cao): `#EF4444` (Đỏ)

## 3. Typography (Kiểu chữ)

*   **Font Family:** `Inter`, `Roboto`, hoặc `Outfit` (Đề xuất `Inter` cho dữ liệu số liệu để đảm bảo hiển thị sắc nét, dễ đọc).
*   **Size Hierarchy:**
    *   **H1 (Tiêu đề trang):** 24px / Font-weight: 600 (Semi-bold) / VD: "Executive Overview"
    *   **H2 (Tiêu đề Section/Widget):** 18px / Font-weight: 600 (Semi-bold) / VD: "Sales Performance", "Doanh Thu Thuần"
    *   **H3 (Tiêu đề phụ/Label):** 14px / Font-weight: 500 (Medium)
    *   **Body (Văn bản thường):** 14px / Font-weight: 400 (Regular) / Dùng cho nội dung chung.
    *   **Small/Caption (Ghi chú, Đơn vị):** 12px / Font-weight: 400 (Regular) / VD: "Tr.VNĐ", "% so với cùng kỳ"
    *   **Metric/KPI Value (Số liệu lớn):** 28px - 36px / Font-weight: 700 (Bold) / Dùng trong các Scorecards.

## 4. Component List (Danh sách Thành phần)

Dựa trên yêu cầu từ `specs.md`, hệ thống cần các UI Components sau:

1.  **TopNavigation:** Menu điều hướng nằm ngang ở Header, có icon, trạng thái active/inactive.
2.  **GlobalFilterBar:** Thanh công cụ chứa Dropdown/Select cho Ngày/Tuần/Tháng/Năm, Khu vực, Kênh, Sản phẩm.
3.  **KPIScorecard (Thẻ chỉ số tóm tắt):**
    *   Hiển thị Label (Tên KPI), Value (Số liệu hiện tại), Đơn vị, và Badge tăng/giảm YoY (VD: +5.2% 🟢 hoặc -1.2% 🔴).
    *   Dùng cho các chỉ số: Doanh Thu Thuần, Số Lượng SKU Bán Ra, Giá Trị Tồn Kho, DOS, Tỷ Lệ Out-of-Stock, Số Điểm Bán (POS), Tỷ Suất LN Gộp.
4.  **TargetGauge / BulletChart:** Biểu đồ hiển thị phần trăm (%) đạt Target (Dùng cho % Đạt Target, cảnh báo màu sắc theo ngưỡng >=100%, 90-99%, <90%).
5.  **TrendChart (Biểu đồ xu hướng):** Biểu đồ Line/Bar chart thể hiện biến động Doanh thu, Sản lượng và Tăng trưởng YoY theo thời gian.
6.  **AlertBadge / AlertIcon:** Thành phần cảnh báo tự động đổi màu (Đỏ) hiển thị trên các số liệu vi phạm ngưỡng (VD: DOS > 45 ngày hoặc Out-of-Stock >= 5%).
7.  **DataGrid / Table (Bảng dữ liệu chi tiết):** Cho phép xem chi tiết (Drill-down) số liệu phân rã, có hỗ trợ phân trang (Pagination) và sắp xếp (Sorting).
8.  **ExportButton:** Nút Export (Excel/PDF) nằm ở góc phải Header để hỗ trợ trích xuất báo cáo.

## 5. Responsive (Tương thích thiết bị)

Hệ thống phải đảm bảo hiển thị tốt trên nhiều kích thước màn hình để phục vụ các cấp quản lý xem mọi lúc mọi nơi:

*   **Desktop/Laptop (>= 1024px):**
    *   Top Navigation hiển thị đầy đủ các menu nằm ngang.
    *   Main content hiển thị dạng lưới (Grid) 3-4 cột cho các KPI Scorecards.
*   **Tablet (768px - 1023px):**
    *   Top Navigation thu gọn các menu item, có thể đưa vào nút "More" (Dropdown) nếu không đủ chỗ, hoặc chuyển thành dạng Drawer (ẩn hiện qua nút Hamburger).
    *   Scorecards hiển thị 2 cột.
    *   Biểu đồ chiếm toàn bộ chiều rộng màn hình.
*   **Mobile (< 768px):**
    *   Top Navigation ẩn hoàn toàn các menu ngang, điều hướng thông qua Hamburger Menu.
    *   Toàn bộ Layout chuyển sang hiển thị cột dọc (1 cột). KPI Scorecards xếp chồng lên nhau.
    *   Biểu đồ có thể cần tính năng scroll ngang (horizontal scroll) để xem chi tiết.
    *   Các bộ lọc (Filters) gom vào một nút "Filter" để mở ra popup hoặc Bottom Sheet.

## 6. Dark/Light Mode (Chế độ giao diện)

*   **Cách chuyển đổi:** Sử dụng nút chuyển đổi (Toggle Button) hình Mặt trời/Mặt trăng trên Header để người dùng tùy chọn, hoặc tự động đồng bộ theo cấu hình hệ thống (OS preference).
*   **Behavior (Hành vi):**
    *   Hệ thống sử dụng CSS Variables hoặc TailwindCSS dark variant để quản lý hệ thống màu.
    *   Khi đổi theme, nền (Background) và màu chữ (Text) sẽ được đảo ngược (VD: Nền trắng, chữ xám đen ở Light Mode -> Nền xám đen, chữ trắng ở Dark Mode).
    *   Các màu nền hoặc biểu đồ ở chế độ Dark Mode sẽ được giảm độ bão hòa (saturation) hoặc dùng opacity để tránh gây chói mắt và làm mỏi mắt người dùng trong môi trường ánh sáng yếu.
    *   Bảng màu (Primary, Secondary, Accent, Background #E05454) có thể tinh chỉnh các shade màu sáng/tối khác nhau cho phù hợp với từng mode mà vẫn giữ được tinh thần thương hiệu.
