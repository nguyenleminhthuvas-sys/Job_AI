// Script để lấy Zalo ID của bạn bè (chạy script này trước)
import { Zalo } from 'zca-js';
import fs from 'fs';

(async () => {
    try {
        const credentialsRaw = fs.readFileSync('zalo_credentials.json', 'utf8');
        const credentials = JSON.parse(credentialsRaw);
        const zalo = new Zalo({ apiType: 1 });
        const api = await zalo.login(credentials);
        
        console.log("✅ Kết nối thành công!");
        console.log("👂 Đang lắng nghe tin nhắn đến...");
        console.log("📱 Hãy nhờ NGƯỜI BẠN MUỐN GỬI TIN NHẮC LỊCH nhắn cho bạn 1 tin nhắn bất kỳ.");
        console.log("   Khi nhận được, hệ thống sẽ in ra Zalo ID của họ.\n");
        
        api.listener.on('message', (msg) => {
            console.log("=".repeat(50));
            console.log("📨 Nhận được tin nhắn mới!");
            console.log("👤 Tên người gửi:", msg.data?.dName || "Không rõ");
            console.log("🆔 Zalo ID của họ:", msg.threadId);
            console.log("💬 Nội dung:", typeof msg.data?.content === 'string' ? msg.data.content : "(file/ảnh)");
            console.log("=".repeat(50));
            console.log("\n✅ Sao chép ID trên vào file send_zalo_reminder.js (TARGET_ZALO_ID)");
        });
        
        api.listener.start();
        
    } catch (err) {
        console.error("❌ Lỗi:", err.message);
    }
})();
