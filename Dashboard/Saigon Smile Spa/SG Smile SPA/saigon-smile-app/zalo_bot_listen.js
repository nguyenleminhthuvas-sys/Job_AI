import { Zalo } from 'zca-js';
import fs from 'fs';

// ============================================================
// BỘ KỊCH BẢN NHẮC LỊCH NGẪU NHIÊN - SAIGON SMILE SPA
// ============================================================
const SCENARIOS = [
  // 1. Nhắc lịch hẹn tái khám
  (name) => `🌸 *[Saigon Smile Spa - Nhắc Lịch Hẹn]* 🌸

Xin chào ${name}! 😊

Hệ thống nhắc lịch tự động thông báo:
📅 *Còn 2 ngày* nữa là đến lịch hẹn của bạn:

✨ Dịch vụ: *Tái khám da mặt*
🕐 Thời gian: *14:00 - Thứ 5, 05/06/2026*
📍 Chi nhánh: *Kim Mã - Hà Nội*
👩‍⚕️ Bác sĩ phụ trách: *BS. Nguyễn Tuấn*

📌 Lưu ý: Vui lòng đến trước 10 phút để được tư vấn tốt nhất.
📞 Đổi lịch/hỏi thêm: Nhắn *"đổi lịch"* hoặc gọi *1800-xxxx*

Trân trọng, ✨ Saigon Smile Spa ✨`,

  // 2. Nhắc buổi điều trị còn lại
  (name) => `💆 *[Saigon Smile Spa - Ví Liệu Trình]* 💆

Xin chào ${name}!

Thông báo tình trạng gói điều trị của bạn:

🎯 Gói: *Thermage FLX Pro (10 buổi)*
✅ Đã hoàn thành: *7 buổi*
⏳ Còn lại: *3 buổi*
⏰ Hết hạn gói: *31/12/2026*

📅 *Lịch buổi tiếp theo:*
🕐 15:00 - Thứ 6, 06/06/2026
📍 CN Kim Mã | 👩‍⚕️ BS. Hoàng Yến

💡 Nhắn *"đặt lịch"* để xếp lịch cho 3 buổi còn lại ngay hôm nay!

Saigon Smile Spa - Đồng hành cùng vẻ đẹp của bạn ✨`,

  // 3. Chăm sóc sau liệu trình
  (name) => `🌟 *[Saigon Smile Spa - Chăm Sóc Sau Điều Trị]* 🌟

Xin chào ${name}! Cảm ơn bạn đã tin tưởng Saigon Smile Spa 💕

Hôm nay đã được *7 ngày* kể từ buổi điều trị *Peel da chuyên sâu* của bạn.

🔍 *Checklist chăm sóc sau liệu trình:*
☑️ Dưỡng ẩm 2 lần/ngày
☑️ Chống nắng SPF 50+ mỗi sáng
☑️ Không dùng các sản phẩm có acid trong 2 tuần
⬜ Tái khám định kỳ *(chưa đặt lịch)*

📸 Nhớ chụp ảnh *Before/After* để theo dõi kết quả nhé!

Nhắn *"tái khám"* để đặt lịch kiểm tra kết quả điều trị miễn phí!
Saigon Smile Spa 🌸`,

  // 4. Chương trình khuyến mãi VIP
  (name) => `💎 *[Saigon Smile Spa - Ưu Đãi Thành Viên DIAMOND]* 💎

Xin chào ${name} - Thành viên Diamond đặc biệt!

🎁 *Quà tặng sinh nhật tháng 6:*
🔸 Giảm *20%* tất cả dịch vụ trong tháng sinh nhật
🔸 1 buổi *Massage thư giãn 60 phút* MIỄN PHÍ
🔸 Bộ quà tặng chăm sóc da trị giá *500.000đ*

⏳ Ưu đãi có hiệu lực: Đến hết *30/06/2026*

📞 Đặt lịch ngay hôm nay để không bỏ lỡ!
Nhắn *"ưu đãi"* để xem toàn bộ quyền lợi thành viên Diamond.

Saigon Smile Spa - Nơi vẻ đẹp được trân trọng 💎✨`,

  // 5. Mời giới thiệu bạn bè
  (name) => `🎀 *[Saigon Smile Spa - Chương Trình Giới Thiệu]* 🎀

Xin chào ${name}!

Bạn đang có *Mã giới thiệu: SG-SANG-2026* 🎯

💰 *Phần thưởng khi giới thiệu thành công:*
👉 Bạn nhận: *500.000đ* vào tài khoản spa
👉 Người được giới thiệu: Giảm *10%* lần đầu
👉 Thưởng thêm: Giới thiệu 3 người → Tặng 1 buổi Facial FREE

📊 Tình trạng hiện tại:
✅ Đã giới thiệu thành công: *2 người*
🎯 Còn thiếu *1 người* để nhận buổi Facial miễn phí!

Chia sẻ mã *SG-SANG-2026* cho bạn bè ngay nhé!
Saigon Smile Spa - Đẹp cùng nhau 🌸`,
];

// Lấy kịch bản ngẫu nhiên
function getRandomScenario(name) {
  const idx = Math.floor(Math.random() * SCENARIOS.length);
  console.log(`📋 Đang dùng kịch bản #${idx + 1}/${SCENARIOS.length}`);
  return SCENARIOS[idx](name);
}

// ============================================================
// KHỞI ĐỘNG BOT
// ============================================================
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
    console.log("\n🤖 Bot Saigon Smile Spa đang chạy...");
    console.log("📱 Nhắn các từ khóa sau để thử:\n");
    console.log("   💬 'test' hoặc 'nhắc lịch'  → Nhận tin nhắc lịch hẹn ngẫu nhiên");
    console.log("   💬 'kịch bản 1' → '5'        → Chọn kịch bản cụ thể");
    console.log("   💬 'xin chào'               → Chào hỏi");
    console.log("   💬 'đặt lịch'               → Hướng dẫn đặt lịch");
    console.log("   💬 'ưu đãi'                 → Xem khuyến mãi\n");

    api.listener.on('message', async (message) => {
      // Bỏ qua tin nhắn của chính mình
      if (message.isSelf) return;

      let text = "";
      if (typeof message.data?.content === 'string') {
        text = message.data.content.toLowerCase().trim();
      } else {
        return; // Bỏ qua file/ảnh
      }

      const senderName = message.data?.dName || "Quý khách";
      const threadId = message.threadId;
      const threadType = message.type;

      console.log(`\n📨 Tin từ [${senderName}]: "${message.data.content}"`);

      let reply = null;

      // Kịch bản cụ thể
      if (text.includes("kịch bản 1") || text === "1") {
        reply = SCENARIOS[0](senderName);
      } else if (text.includes("kịch bản 2") || text === "2") {
        reply = SCENARIOS[1](senderName);
      } else if (text.includes("kịch bản 3") || text === "3") {
        reply = SCENARIOS[2](senderName);
      } else if (text.includes("kịch bản 4") || text === "4") {
        reply = SCENARIOS[3](senderName);
      } else if (text.includes("kịch bản 5") || text === "5") {
        reply = SCENARIOS[4](senderName);
      }
      // Từ khóa test / nhắc lịch → ngẫu nhiên
      else if (text.includes("test") || text.includes("nhắc lịch") || text.includes("nhac lich")) {
        reply = getRandomScenario(senderName);
      }
      // Chào hỏi
      else if (text.includes("xin chào") || text.includes("chào") || text.includes("hi") || text.includes("hello")) {
        reply = `🌸 Xin chào ${senderName}! Chào mừng bạn đến với Saigon Smile Spa 💕\n\nBạn có thể nhắn:\n📅 "nhắc lịch" - Xem lịch hẹn\n🎁 "ưu đãi" - Xem khuyến mãi\n📋 "đặt lịch" - Đặt lịch mới\n📞 Hoặc gọi 1800-xxxx để được tư vấn trực tiếp!`;
      }
      // Đặt lịch
      else if (text.includes("đặt lịch") || text.includes("dat lich") || text.includes("book")) {
        reply = `📅 *Đặt lịch tại Saigon Smile Spa* 📅\n\nBạn có thể đặt lịch qua:\n🌐 Website: sgsmile.com/dat-lich\n📱 App: Tải về trên App Store / Google Play\n📞 Hotline: 1800-xxxx (7:00 - 21:00)\n\nHoặc nhắn tin ngay tại đây, chúng tôi sẽ hỗ trợ bạn trong vài phút! 😊`;
      }
      // Ưu đãi
      else if (text.includes("ưu đãi") || text.includes("khuyen mai") || text.includes("khuyến mãi") || text.includes("giảm giá")) {
        reply = SCENARIOS[3](senderName); // Kịch bản ưu đãi VIP
      }

      if (reply) {
        try {
          await api.sendMessage({ msg: reply }, threadId, threadType);
          console.log(`✅ Đã trả lời ${senderName}`);
        } catch (e) {
          console.error(`❌ Lỗi gửi tin:`, e.message);
        }
      } else {
        console.log(`   ⏭️  Từ khóa không nhận ra, bỏ qua.`);
      }
    });

    api.listener.start();
    console.log("🟢 Bot đang lắng nghe... (Nhấn Ctrl+C để dừng)\n");

  } catch (err) {
    console.error("❌ Lỗi khởi động Bot:", err.message || err);
  }
})();
