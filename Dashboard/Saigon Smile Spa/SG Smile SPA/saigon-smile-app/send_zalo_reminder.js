import { Zalo, ThreadType } from 'zca-js';
import fs from 'fs';

// ============================================================
// CẤU HÌNH: Điền ID Zalo của người muốn gửi nhắc lịch tới
// Để lấy ID: Dùng Listener, nhờ người đó nhắn tin 1 tin nhắn 
// rồi xem log ra "message.threadId"
// ============================================================
const TARGET_ZALO_ID = "1512966250111456337"; // Trần Hoàng An

// Thông tin lịch hẹn nhắc
const BOOKING = {
    customerName: "Bỉnh Sang",
    service: "Tái khám da mặt",
    date: "Ngày 04/06/2026",
    time: "14:00",
    branch: "Chi nhánh Kim Mã",
    daysLeft: 2,
};

const reminderMessage = `🌸 *Nhắc lịch hẹn - Saigon Smile Spa* 🌸

Xin chào ${BOOKING.customerName},

Hệ thống nhắc lịch tự động thông báo:

📅 Còn *${BOOKING.daysLeft} ngày* nữa là tới lịch hẹn của bạn:
✨ Dịch vụ: ${BOOKING.service}
🕐 Thời gian: ${BOOKING.time} - ${BOOKING.date}
📍 Chi nhánh: ${BOOKING.branch}

Vui lòng đến đúng giờ để được phục vụ tốt nhất.
Nếu cần đổi lịch, vui lòng liên hệ: 1800-xxxx

Trân trọng,
✨ Saigon Smile Spa ✨`;

(async () => {
    try {
        console.log("📖 Đọc thông tin đăng nhập...");
        const credentialsRaw = fs.readFileSync('zalo_credentials.json', 'utf8');
        const credentials = JSON.parse(credentialsRaw);
        
        const zalo = new Zalo({ apiType: 1 });
        console.log("🔌 Đang kết nối Zalo...");
        const api = await zalo.login(credentials);
        
        const myId = api.getOwnId();
        console.log("✅ Kết nối thành công! Đang dùng tài khoản ID:", myId);
        
        if (TARGET_ZALO_ID === "TARGET_ID_HERE") {
            console.log("\n⚠️  CHƯA CÀI ĐẶT ID NGƯỜI NHẬN!");
            console.log("👉 Hãy chạy file 'get_friend_id.js' để lấy ID Zalo của bạn bè, rồi điền vào TARGET_ZALO_ID ở đầu file này.");
            return;
        }
        
        console.log(`\n📤 Đang gửi tin nhắn nhắc lịch đến ID: ${TARGET_ZALO_ID}...`);
        const result = await api.sendMessage(
            { msg: reminderMessage },
            TARGET_ZALO_ID,
            ThreadType.User
        );
        
        console.log("✅ ĐÃ GỬI THÀNH CÔNG!");
        console.log("📱 Người nhận hãy mở Zalo để xem tin nhắn nhắc lịch!");
        console.log("Kết quả:", JSON.stringify(result, null, 2));
        
    } catch (err) {
        console.error("❌ Lỗi:", err.message || err);
    }
})();
