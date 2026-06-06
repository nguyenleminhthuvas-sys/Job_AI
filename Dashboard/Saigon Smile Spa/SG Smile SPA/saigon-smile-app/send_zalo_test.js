import { Zalo, ThreadType } from 'zca-js';
import fs from 'fs';

(async () => {
    try {
        console.log("📖 Đọc thông tin đăng nhập...");
        const credentialsRaw = fs.readFileSync('zalo_credentials.json', 'utf8');
        const credentials = JSON.parse(credentialsRaw);
        
        const zalo = new Zalo({ apiType: 1 });
        console.log("🔌 Đang kết nối Zalo...");
        const api = await zalo.login(credentials);
        
        const myId = api.getOwnId();
        console.log("✅ Kết nối thành công! ID:", myId);
        console.log("ThreadType.User =", ThreadType.User); // should be 0
        
        const reminderMessage = `🌸 Nhắc lịch hẹn - Saigon Smile Spa 🌸

Xin chào anh Bỉnh Sang,

📅 Còn 2 ngày nữa là tới lịch hẹn:
   ✨ Dịch vụ: Tái khám da mặt  
   🕐 Thời gian: 14:00 - Ngày mốt
   📍 Chi nhánh: Kim Mã

Nếu cần đổi lịch, vui lòng liên hệ hotline: 1800-xxxx

Trân trọng,
Saigon Smile Spa ✨`;

        // Thử với threadType = 0 (User) trực tiếp
        console.log("\n📤 Đang gửi tin nhắn...");
        const result = await api.sendMessage(
            { msg: reminderMessage },
            myId,
            0  // ThreadType.User = 0
        );
        
        console.log("✅ GỬI THÀNH CÔNG!");
        console.log("📱 Mở Zalo → Cloud của tôi để xem tin nhắn!");
        console.log("Kết quả:", result);
        
    } catch (err) {
        console.error("❌ Lỗi:", err.message || err);
        console.log("\nError code:", err.code);
        
        // Thử gửi text đơn giản
        console.log("\n🔄 Thử cách gửi string đơn giản...");
        try {
            const credentialsRaw = fs.readFileSync('zalo_credentials.json', 'utf8');
            const credentials = JSON.parse(credentialsRaw);
            const zalo = new Zalo({ apiType: 1 });
            const api = await zalo.login(credentials);
            const myId = api.getOwnId();
            
            // Lấy danh sách bạn bè để tìm ID người khác để gửi thử
            const friends = await api.getFriendsList();
            console.log("📋 Số bạn bè:", friends?.length ?? 0);
            if (friends && friends.length > 0) {
                const firstFriend = friends[0];
                console.log("Thử gửi đến bạn đầu tiên:", firstFriend.zaloName, "ID:", firstFriend.uid);
                const res2 = await api.sendMessage(
                    { msg: "Test từ Bot Saigon Smile Spa" },
                    firstFriend.uid,
                    0
                );
                console.log("✅ Gửi đến bạn thành công:", res2);
            }
        } catch (err2) {
            console.error("❌ Cũng lỗi:", err2.message);
        }
    }
})();
