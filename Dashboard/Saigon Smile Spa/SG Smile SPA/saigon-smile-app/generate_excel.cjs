const xlsx = require('xlsx');
const fs = require('fs');

const features = [
  // --- Module 1: Smart Booking Engine ---
  { STT: 1, PhanHe: 'Smart Booking Engine', TenTinhNang: 'Sơ đồ Phòng Live Map', MoTa: 'Hiển thị sơ đồ phòng thời gian thực, tự động đổi màu theo trạng thái (Trống, Đang phục vụ, Đang dọn, Bảo trì).', NenTang: 'Web Admin', Mandays: 3, UuTien: 'Cao' },
  { STT: 2, PhanHe: 'Smart Booking Engine', TenTinhNang: 'Chống trùng lịch (Overbooking Prevention)', MoTa: 'Tự động khóa khung giờ nếu KTV, Bác sĩ hoặc Máy CNC (như Thermage) đã bị chiếm dụng.', NenTang: 'Web Admin', Mandays: 4, UuTien: 'Cao' },
  { STT: 3, PhanHe: 'Smart Booking Engine', TenTinhNang: 'AI Happy Hours Suggestion', MoTa: 'Gợi ý các khung giờ trống trong ngày kèm voucher giảm giá để kích thích lấp đầy lịch.', NenTang: 'Web Admin / App', Mandays: 3, UuTien: 'Trung bình' },

  // --- Module 2: Customer Portal (Super App) ---
  { STT: 4, PhanHe: 'Customer Portal', TenTinhNang: 'Thẻ VIP / Loyalty Card', MoTa: 'Hiển thị hạng thẻ, điểm tích lũy và QR Code Check-in dành cho khách hàng.', NenTang: 'Mobile App', Mandays: 3, UuTien: 'Cao' },
  { STT: 5, PhanHe: 'Customer Portal', TenTinhNang: 'Ví Liệu Trình (Apple Wallet Style)', MoTa: 'Giao diện trực quan xem số buổi đã dùng/còn lại của các gói dịch vụ (như thanh tiến trình).', NenTang: 'Mobile App', Mandays: 4, UuTien: 'Cao' },
  { STT: 6, PhanHe: 'Customer Portal', TenTinhNang: 'Mã giới thiệu (Affiliate)', MoTa: 'Khách hàng có mã riêng giới thiệu bạn bè để nhận hoa hồng/điểm thưởng.', NenTang: 'Mobile App', Mandays: 2, UuTien: 'Trung bình' },

  // --- Module 3: E-Medical Record (Hồ sơ Y khoa) ---
  { STT: 7, PhanHe: 'E-Medical Record', TenTinhNang: 'Ghi chú Y Khoa Chuyên Sâu', MoTa: 'Lưu thông số chi tiết của máy CNC sau mỗi ca (Số Shot mặt, mức năng lượng, mã đầu tip).', NenTang: 'Web Admin / Tablet', Mandays: 4, UuTien: 'Cao' },
  { STT: 8, PhanHe: 'E-Medical Record', TenTinhNang: 'Chữ ký điện tử (E-Signature)', MoTa: 'Khách hàng ký xác nhận trực tiếp lên màn hình Tablet sau khi điều trị xong.', NenTang: 'Tablet', Mandays: 3, UuTien: 'Cao' },
  { STT: 9, PhanHe: 'E-Medical Record', TenTinhNang: 'Thư viện Before/After', MoTa: 'Giao diện Slider kéo thả để so sánh trực quan hiệu quả trước và sau điều trị.', NenTang: 'Web Admin / App', Mandays: 2, UuTien: 'Trung bình' },

  // --- Module 4: Staff Operations ---
  { STT: 10, PhanHe: 'Staff Operations', TenTinhNang: 'Bảng Checklist KTV', MoTa: 'Danh sách công việc chuẩn bị phòng, chuẩn bị máy móc, vật tư theo từng ca.', NenTang: 'Tablet / Mobile App', Mandays: 3, UuTien: 'Trung bình' },
  { STT: 11, PhanHe: 'Staff Operations', TenTinhNang: 'Thông báo Nội bộ Thời gian thực', MoTa: 'Nhận alert khi có lịch mới, đổi lịch hoặc yêu cầu F&B từ phòng VIP.', NenTang: 'Web Admin / App', Mandays: 3, UuTien: 'Trung bình' },

  // --- Module 5: Finance & Commission Engine ---
  { STT: 12, PhanHe: 'Finance & Commission', TenTinhNang: 'Báo cáo Cashflow vs Revenue', MoTa: 'Tách biệt Tiền thu thực tế (Cashflow) và Doanh thu phân bổ theo số buổi (Revenue).', NenTang: 'Web Admin', Mandays: 5, UuTien: 'Cao' },
  { STT: 13, PhanHe: 'Finance & Commission', TenTinhNang: 'Động cơ Chia Hoa hồng tự động', MoTa: 'Tự động tính % cho Bác sĩ, tiền Tua cố định cho KTV, % chốt deal cho Sale ngay khi ca hoàn thành.', NenTang: 'Web Admin', Mandays: 6, UuTien: 'Cực Cao' },
  { STT: 14, PhanHe: 'Finance & Commission', TenTinhNang: 'Đối soát Giao dịch Ngân hàng', MoTa: 'Bảng đối soát tự động báo cáo các khoản chuyển khoản/quẹt thẻ so với bill trên hệ thống.', NenTang: 'Web Admin', Mandays: 4, UuTien: 'Cao' },

  // --- Module 6: Crisis Management (Hệ thống Xử lý Sự cố) ---
  { STT: 15, PhanHe: 'Crisis Management', TenTinhNang: 'Bảng Kanban Xử lý Sự cố', MoTa: 'Quản lý Ticket (Khiếu nại, Lỗi thiết bị) dưới dạng bảng kéo thả (Open, Investigating, Resolved).', NenTang: 'Web Admin', Mandays: 4, UuTien: 'Cao' },
  { STT: 16, PhanHe: 'Crisis Management', TenTinhNang: 'Cảnh báo Đỏ (Red Alerts) & SLA', MoTa: 'Các Ticket mức độ nghiêm trọng (Critical) như sự cố Y khoa sẽ trồi lên trên cùng kèm bộ đếm ngược SLA.', NenTang: 'Web Admin', Mandays: 3, UuTien: 'Cao' },
];

const wb = xlsx.utils.book_new();

// Format Headers
const wsData = [
  ['STT', 'Phân Hệ', 'Tên Tính Năng', 'Mô tả Chi tiết (UI/UX & Logic)', 'Nền tảng', 'Ước tính Mandays', 'Mức độ Ưu tiên', 'Đơn giá (VNĐ)', 'Thành tiền (VNĐ)'],
];

features.forEach(f => {
  const donGia = 1500000; // Giả sử 1.5tr / manday
  wsData.push([
    f.STT, f.PhanHe, f.TenTinhNang, f.MoTa, f.NenTang, f.Mandays, f.UuTien, donGia, f.Mandays * donGia
  ]);
});

// Calculate Totals
const totalMandays = features.reduce((sum, f) => sum + f.Mandays, 0);
const totalCost = features.reduce((sum, f) => sum + (f.Mandays * 1500000), 0);
wsData.push([]);
wsData.push(['', '', '', '', 'TỔNG CỘNG', totalMandays, '', '', totalCost]);

const ws = xlsx.utils.aoa_to_sheet(wsData);

// Set column widths
ws['!cols'] = [
  { wch: 5 },  // STT
  { wch: 20 }, // Phân hệ
  { wch: 35 }, // Tên Tính Năng
  { wch: 60 }, // Mô tả
  { wch: 20 }, // Nền tảng
  { wch: 15 }, // Mandays
  { wch: 15 }, // Ưu tiên
  { wch: 15 }, // Đơn giá
  { wch: 15 }, // Thành tiền
];

xlsx.utils.book_append_sheet(wb, ws, 'Báo Giá Tính Năng');

const outputPath = 'C:/Users/Sang/OneDrive/Desktop/Bang_Bao_Gia_Tinh_Nang_Saigon_Smile_Spa.xlsx';
xlsx.writeFile(wb, outputPath);

console.log(`Excel file created successfully at: ${outputPath}`);
