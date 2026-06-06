import { Zalo, ThreadType } from 'zca-js';
import fs from 'fs';

const PHONE_NUMBER = "0815427979";

const reminderMessage = `🌸 Nhắc lịch hẹn - Saigon Smile Spa 🌸

Xin chào bạn,

Hệ thống nhắc lịch tự động thông báo:

📅 Còn 2 ngày nữa là tới lịch hẹn:
✨ Dịch vụ: Tái khám da mặt
🕐 Thời gian: 14:00 - Ngày 04/06/2026
📍 Chi nhánh: Kim Mã

Vui lòng đến đúng giờ để được phục vụ tốt nhất.
Nếu cần đổi lịch, vui lòng liên hệ: 1800-xxxx

Trân trọng,
✨ Saigon Smile Spa ✨`;

(async () => {
    try {
        console.log("📖 Đọc thông tin đăng nhập...");
        const credentialsRaw = fs.readFileSync('zalo_credentials.json', 'utf8');
        const credentials = JSON.parse(credentialsRaw);

        // Thử apiType 0 (mobile API) thay vì web API
        const zalo = new Zalo();
        console.log("🔌 Đang kết nối Zalo...");
        const api = await zalo.login(credentials);
        console.log("✅ Kết nối thành công!");

        // Tìm user theo số điện thoại - findUser tự convert 0815... -> 84815...
        console.log(`\n🔍 Đang tìm Zalo ID của: ${PHONE_NUMBER}...`);
        const userInfo = await api.findUser(PHONE_NUMBER);
        
        console.log("📋 Thông tin tìm được:", JSON.stringify(userInfo, null, 2));
        
        if (!userInfo) {
            console.log("\n⚠️ Số điện thoại này chưa đăng ký Zalo hoặc đã cài đặt riêng tư.");
            console.log("💡 Thử dùng listener: nhờ họ nhắn tin trước để lấy ID.");
            return;
        }
        
        const targetId = userInfo.uid;
        const targetName = userInfo.zaloName || userInfo.name || PHONE_NUMBER;
        
        console.log(`\n✅ Tìm thấy tài khoản: ${targetName} (ID: ${targetId})`);
        console.log(`📤 Đang gửi tin nhắc lịch...`);
        
        const result = await api.sendMessage(
            { msg: reminderMessage },
            targetId,
            ThreadType.User
        );
        
        console.log("\n🎉 ĐÃ GỬI THÀNH CÔNG!");
        console.log(`📱 Tin nhắc lịch đã đến Zalo của ${targetName}!`);
        
    } catch (err) {
        console.error("❌ Lỗi:", err.message || err);
        if (err.code) console.error("   Code:", err.code);
        
        if (err.code === 216 || (err.message || '').includes('hợp lệ')) {
            console.log("\n💡 Nguyên nhân có thể:");
            console.log("   1. Số điện thoại chưa có tài khoản Zalo");
            console.log("   2. Người dùng đã cài đặt 'Không cho tìm kiếm bằng số điện thoại'");
            console.log("   3. Cookie đăng nhập đã hết hạn → cần quét QR lại");
        }
    }
})();
