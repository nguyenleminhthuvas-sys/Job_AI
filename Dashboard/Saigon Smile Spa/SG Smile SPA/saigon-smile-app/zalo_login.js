import { Zalo, LoginQRCallbackEventType } from 'zca-js';
import QRCode from 'qrcode';
import fs from 'fs';

const zalo = new Zalo();

console.log("Đang khởi tạo kết nối Zalo (ZCA)...");

zalo.loginQR({}, async (event) => {
    switch (event.type) {
        case LoginQRCallbackEventType.QRCodeGenerated:
            console.log("\n====================================");
            console.log("MÃ QR ĐÃ ĐƯỢC TẠO!");
            console.log("====================================\n");
            
            if (event.data && event.data.image) {
                try {
                    const base64Data = event.data.image.replace(/^data:image\/png;base64,/, "");
                    fs.writeFileSync('zalo_qr.png', base64Data, 'base64');
                    console.log("✅ Đã lưu mã QR vào file: zalo_qr.png");
                    console.log("Vui lòng mở file zalo_qr.png và dùng ứng dụng Zalo để quét!");
                } catch (err) {
                    console.error("Lỗi khi lưu ảnh QR:", err);
                }
            } else if (event.data && event.data.token) {
                try {
                    await QRCode.toFile('zalo_qr.png', event.data.token, {
                        color: { dark: '#000000', light: '#FFFFFF' },
                        width: 400
                    });
                    console.log("✅ Đã tạo mã QR từ token và lưu vào file: zalo_qr.png");
                } catch (err) {
                    console.error("Lỗi khi tạo ảnh QR từ token:", err);
                }
            } else {
                console.log("Dữ liệu QR không nhận dạng được:", event.data);
            }
            break;
            
        case LoginQRCallbackEventType.QRCodeScanned:
            console.log("✅ Đã quét mã QR. Vui lòng BẤM XÁC NHẬN ĐĂNG NHẬP trên điện thoại của bạn!");
            break;
            
        case LoginQRCallbackEventType.QRCodeExpired:
            console.log("❌ Mã QR đã hết hạn. Bạn hãy chạy lại kịch bản.");
            process.exit(1);
            break;
            
        case LoginQRCallbackEventType.QRCodeDeclined:
            console.log("❌ Bạn đã từ chối đăng nhập Zalo.");
            process.exit(1);
            break;
            
        case LoginQRCallbackEventType.GotLoginInfo:
            console.log("\n🎉 Đăng nhập Zalo thành công!");
            fs.writeFileSync('zalo_credentials.json', JSON.stringify(event.data, null, 2));
            console.log("Đã lưu thông tin đăng nhập (Cookies, IMEI) vào file zalo_credentials.json");
            break;
    }
}).then((api) => {
    console.log("Zalo API đã sẵn sàng!");
    process.exit(0);
}).catch((err) => {
    console.error("Lỗi đăng nhập:", err.message);
});
