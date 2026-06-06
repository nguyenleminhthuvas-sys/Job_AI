# Tư vấn Giải pháp Tự động hóa, Hệ thống nội bộ và Báo cáo cho Saigon Smile Spa
## Đề xuất và Lộ trình Triển khai Chi tiết

> **Ngày lập:** 02/06/2026  
> **Đơn vị tư vấn:** Sunext AI – Customer Intelligence Team  
> **Đối tác:** Hệ thống Saigon Smile Spa (Saigon Smile Medical)  

---

## Phần 1: Tổng quan Chiến lược Chuyển đổi

Để giải quyết đồng thời 3 nhu cầu cốt lõi của Saigon Smile Spa bao gồm **Tự động hóa công việc (Automation)**, **App/Web quản lý nội bộ (Internal Management Platform)**, và **Dashboard/Báo cáo thông minh (BI Dashboard)**, chúng ta cần xây dựng một kiến trúc công nghệ đồng bộ xoay quanh hệ thống lõi **CloudPro CRM** hiện tại của spa.

Mục tiêu cốt lõi của dự án:
1. **Giải phóng sức lao động:** Giảm 60% thời gian xử lý thủ công các công việc lặp đi lặp lại của lễ tân, CSKH và kế toán.
2. **Tối ưu hóa nguồn lực vật lý:** Nâng hiệu suất sử dụng máy công nghệ cao (Thermage, Ultherapy, Laser) và công suất phục vụ của Kỹ thuật viên (KTV) lên thêm 25-30%.
3. **Cung cấp dữ liệu thời gian thực cho BOD:** Giúp Ban giám đốc đưa ra các quyết định kinh doanh dựa trên số liệu trực quan thay vì báo cáo giấy hoặc file Excel chậm trễ.

---

## Phần 2: Chi tiết 3 Trụ cột Giải pháp & Các công việc cần làm

### Trụ cột 1: Tự động hóa công việc (Automation)

Tập trung vào số hóa và tự động hóa các điểm chạm có tần suất lặp lại cao giữa khách hàng và nhân viên vận hành.

#### Các công việc cần làm:
1. **Tự động hóa Tiếp nhận đa kênh (Omnichannel Lead Routing):**
   - *Mô tả:* Tự động thu thập Lead/Khách đặt lịch từ các kênh Facebook Fanpage, Zalo OA, Website Form, Hotline (IP Call Center) và đồng bộ trực tiếp vào CloudPro CRM theo thời gian thực.
   - *Phân công tự động:* Sử dụng thuật toán phân chia Lead tự động cho tư vấn viên theo quy tắc xoay vòng (Round Robin) hoặc theo hiệu suất chốt sale (Sales Performance routing).
2. **Tự động hóa CSKH sau liệu trình (Post-treatment Care Automation):**
   - *Mô tả:* Sau khi khách hoàn thành buổi trị liệu (check-out trên CRM), hệ thống tự động kích hoạt Zalo Cloud Message gửi hướng dẫn chăm sóc da tại nhà theo phác đồ bác sĩ chỉ định.
   - *Nhắc lịch tự động:* Hệ thống tự động gửi tin nhắn nhắc hẹn buổi điều trị tiếp theo trước 24 giờ và nhận xác nhận tự động (Bấm nút "Xác nhận tham gia" hoặc "Đổi lịch" ngay trên Zalo).
3. **Tự động hóa Kiểm soát Chất lượng Setup Phòng (Vision AI Room Audit):**
   - *Mô tả:* KTV sau khi setup phòng spa chụp ảnh và tải lên hệ thống nội bộ. AI tự động quét ảnh để kiểm tra tiêu chuẩn bài trí 5 sao (vị trí khăn, độ sạch sẽ, đèn, sản phẩm tiêu hao) trước khi đón khách.

---

### Trụ cột 2: App/Web quản lý nội bộ (Internal Management System)

Xây dựng cổng thông tin quản trị tập trung dưới dạng WebApp dành riêng cho Bác sĩ da liễu, Kỹ thuật viên và Quản lý chi nhánh.

#### Các công việc cần làm:
1. **Bảng điều phối Lịch hẹn & Phòng máy thời gian thực (Real-time Scheduling & Capacity Board):**
   - *Mô tả:* Giao diện màn hình ngang (Kanban hoặc Timeline) hiển thị trực quan trạng thái của từng phòng điều trị, từng KTV và từng máy công nghệ cao (Đang trống, Đang phục vụ, Đang bảo trì).
   - *Điều phối thông minh:* Cho phép lễ tân kéo thả lịch hẹn để tối ưu hóa thời gian chạy máy Thermage/Laser, giảm thiểu thời gian chết (idle time).
2. **Phác đồ điều trị điện tử (E-Medical Record & Treatment Log):**
   - *Mô tả:* Module dành riêng cho Bác sĩ da liễu để ghi nhận tình trạng da, lịch sử soi da, ảnh chụp trước/sau điều trị của khách hàng qua từng buổi.
   - *AI Support:* Gợi ý phác đồ cá nhân hóa nâng cao (ví dụ: kết hợp thêm dịch vụ IV Therapy của REVIV hoặc chiropractic xương khớp của USAC dựa trên hồ sơ bệnh lý).
3. **Module Tính Hoa hồng & Hiệu suất Nhân sự (Commission & KPI Engine):**
   - *Mô tả:* Tự động tính toán hoa hồng cho KTV dựa trên số ca phục vụ thực tế và điểm đánh giá CSAT của khách sau buổi spa.
   - *KPI Dashboard nội bộ:* Cho phép nhân viên tự theo dõi doanh thu cá nhân, số giờ công và tiền thưởng hàng tháng trên giao diện di động.

---

### Trụ cột 3: Dashboard & Báo cáo thông minh (BI Dashboard)

Xây dựng hệ thống báo cáo quản trị động (Dynamic BI Dashboard) kết nối trực tiếp với CloudPro CRM để hiển thị dữ liệu thời gian thực cho Ban giám đốc (BOD) và Quản lý cơ sở.

#### Các công việc cần làm:
1. **Dashboard Hiệu suất Vận hành (Operations Dashboard):**
   - *Chỉ số hiển thị:* Thời gian chờ trung bình của khách hàng tại chi nhánh, Tỷ lệ hủy/đổi lịch sát giờ, Hiệu suất sử dụng phòng máy (%), Năng suất phục vụ trung bình của KTV (ca/ngày).
2. **Dashboard Doanh thu & Bán chéo (Revenue & Cross-selling Dashboard):**
   - *Chỉ số hiển thị:* Doanh thu gói mới bán ra, Tỷ lệ tái ký liệu trình cũ, Doanh thu từ sản phẩm bán kèm, Tỷ lệ bán chéo chéo sang các thương hiệu REVIV và USAC.
3. **Dashboard Trải nghiệm & Ý kiến Khách hàng (Customer Experience Dashboard):**
   - *Chỉ số hiển thị:* Điểm số hài lòng CSAT sau dịch vụ, Chỉ số đo lường mức độ thiện cảm NPS, Phân tích cảm xúc (Sentiment Analysis) từ phản hồi của khách hàng qua tin nhắn khảo sát tự động.

---

## Phần 3: Lộ trình Triển khai & Phân bổ Nguồn lực (Roadmap)

Dự án được chia làm 3 giai đoạn chính trong vòng 6 tháng để đảm bảo tính an toàn và giảm thiểu rủi ro vận hành:

```
Giai đoạn 1 (Tháng 1-2)    Giai đoạn 2 (Tháng 3-4)    Giai đoạn 3 (Tháng 5-6)
 ┌──────────────────────┐   ┌──────────────────────┐   ┌──────────────────────┐
 │ Tự động hóa CSKH     │   │ App quản lý nội bộ   │   │ Hệ thống Dashboard   │
 │ đa kênh & Đặt lịch   │──>│ Điều phối phòng máy  │──>│ Quản trị BI          │
 │ tự động qua Zalo     │   │ Phác đồ điện tử      │   │ Tối ưu hóa toàn chuỗi│
 └──────────────────────┘   └──────────────────────┘   └──────────────────────┘
```

### Giai đoạn 1: Số hóa & Tự động hóa tương tác khách hàng (Tháng 1 - 2)
- **Công việc trọng tâm:**
  - Thiết lập API tích hợp đa kênh đổ Lead về CRM.
  - Xây dựng Zalo OA Care Agent gửi tin nhắn nhắc lịch và hướng dẫn sau liệu trình tự động.
- **Kết quả mong đợi:** 100% lịch hẹn được xác nhận tự động; không còn tình trạng sót Lead từ fanpage/web.

### Giai đoạn 2: Nâng cấp Công cụ Quản lý Nội bộ (Tháng 3 - 4)
- **Công việc trọng tâm:**
  - Xây dựng giao diện WebApp điều phối phòng điều trị và máy công nghệ cao cho lễ tân.
  - Triển khai phân hệ Phác đồ điều trị điện tử (E-Record) cho đội ngũ Bác sĩ da liễu.
- **Kết quả mong đợi:** Hiệu suất sử dụng các phòng máy công nghệ cao tăng 20%; giảm thời gian khách chờ đợi tại quầy xuống dưới 10 phút.

### Giai đoạn 3: Dashboard Quản trị & Tối ưu hóa (Tháng 5 - 6)
- **Công việc trọng tâm:**
  - Kết nối dữ liệu CRM về hệ thống BI Dashboard (Sử dụng Tableau/PowerBI hoặc Google Looker Studio).
  - Tích hợp module tính toán hoa hồng tự động cho nhân viên.
- **Kết quả mong đợi:** BOD có báo cáo tài chính và hiệu suất cập nhật theo thời gian thực (real-time); tự động hóa hoàn toàn quy trình tính lương thưởng KTV.

---

## Phần 4: Dự toán Hiệu quả Kinh tế (ROI)

| Khía cạnh | Nguồn tiết kiệm / Tăng trưởng | Con số kỳ vọng |
|---|---|---|
| **Năng suất nhân sự** | Giảm thời gian lễ tân và CSKH thực hiện các cuộc gọi nhắc hẹn, nhập liệu thủ công. | Tiết kiệm 45-60 giờ làm việc/tuần trên mỗi chi nhánh. |
| **Công suất máy móc** | Tối ưu hóa thời gian trống của máy thẩm mỹ đắt tiền nhờ hệ thống xếp lịch AI. | Tăng 25% doanh thu khai thác trên mỗi đầu máy. |
| **Tỷ lệ khách hàng cũ** | Chăm sóc tự động chuẩn y khoa qua Zalo giúp cải thiện trải nghiệm sau dịch vụ. | Tăng 12% tỷ lệ tái mua liệu trình da liễu mới. |

---

## Sources

1. **Về việc triển khai CloudPro CRM số hóa quản trị khách hàng tại các hệ thống spa:**
   - CloudPro CRM cho Spa và Thẩm mỹ viện: [https://cloudpro.vn/giai-phap/crm-nganh-spa-tham-my-vien](https://cloudpro.vn/giai-phap/crm-nganh-spa-tham-my-vien)
   - Case study chuyển đổi số vận hành Spa: [https://cloudpro.vn/khach-hang/saigon-smile-spa-so-hoa-quan-tri-khach-hang](https://cloudpro.vn/khach-hang/saigon-smile-spa-so-hoa-quan-tri-khach-hang)
2. **Quy trình tối ưu hóa đặt lịch và vận hành hệ thống spa lớn:**
   - BookingCare Vietnam Spa Management Solutions: [https://bookingcare.vn/cam-nang/giai-phap-quan-ly-lich-hen-spa-hieu-qua-p3421.html](https://bookingcare.vn/cam-nang/giai-phap-quan-ly-lich-hen-spa-hieu-qua-p3421.html)

---

Tư vấn Giải pháp Saigon Smile Spa | Trang 1
