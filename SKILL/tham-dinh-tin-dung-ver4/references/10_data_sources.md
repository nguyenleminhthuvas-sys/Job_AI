# Nguồn Dữ liệu Tài chính Doanh nghiệp Việt Nam

## Tầng 1 — BCTC Chính thức (Độ tin cậy cao nhất)

| Nguồn | URL | Dữ liệu | Ưu tiên |
|-------|-----|---------|---------|
| HNX Công bố thông tin | hnx.vn/cong-bo-thong-tin | BCTC kiểm toán PDF, niêm yết HNX | ★★★★★ |
| HOSE | hsx.vn | BCTC kiểm toán PDF, niêm yết HOSE | ★★★★★ |
| CafeF | cafef.vn/[MÃ]-ctcp.chn | BCTC parse sẵn, quý/năm | ★★★★ |
| Vietstock | finance.vietstock.vn/[MÃ]/tai-chinh.htm | Ratios tính sẵn + BCTC | ★★★★ |
| FiinGroup | fiingroup.vn | Dữ liệu chuyên sâu, benchmark ngành | ★★★★★ (cần tài khoản) |

**Quy trình quét BCTC:**
1. `web_search`: "[Mã CK] BCTC kiểm toán 2024 site:hnx.vn" hoặc "site:hsx.vn"
2. Nếu không có PDF gốc → `web_fetch` CafeF/Vietstock
3. Ưu tiên: PDF kiểm toán > BCTC hợp nhất năm > BCTC quý
4. Ghi rõ nguồn + ngày BCTC trong mọi output

---

## Tầng 2 — Thuế & Pháp lý (Phát hiện rủi ro ẩn)

| Nguồn | URL | Dữ liệu | Cách dùng |
|-------|-----|---------|-----------|
| Tổng cục Thuế | tracuunnt.gdt.gov.vn | Trạng thái MST, nợ thuế, cưỡng chế | Tra MST → kiểm tra "đang hoạt động" hay "cưỡng chế" |
| Cổng ĐKKD Quốc gia | dangkykinhdoanh.gov.vn | Vốn điều lệ, cổ đông, thay đổi | Phát hiện thay đổi chủ sở hữu đột ngột |
| Thi hành án | thads.moj.gov.vn | Quyết định THA, cưỡng chế | DN bị THA → dấu hiệu vỡ nợ thực tế |
| Toà án (công báo) | web_search "[Tên DN] tranh chấp tòa án" | Kiện tụng, phá sản | Cross-check với BCTC |

**Signal quan trọng:**
- DN báo lãi nhưng MST bị "cưỡng chế nợ thuế" → dòng tiền thực âm
- Vốn điều lệ tăng đột biến không giải thích được → nghi vốn ảo
- Thay đổi cổ đông lớn trước khi vay → rủi ro thay đổi kiểm soát

---

## Tầng 3 — Tín dụng & Giao dịch Bảo đảm

| Nguồn | Dữ liệu | Cách tiếp cận |
|-------|---------|--------------|
| CIC (NHNN) | Dư nợ toàn hệ thống, nhóm nợ, lịch sử | Bắt buộc — yêu cầu DN cung cấp bản in CIC |
| Sổ GDBĐ | moj.gov.vn/tsbđ | TSBĐ đã thế chấp ở ngân hàng nào | Tra biển số xe, số GCN đất trước khi nhận TSBĐ |
| HNX — Trái phiếu | hnx.vn/trai-phieu-doanh-nghiep | Dư nợ trái phiếu, lãi suất, covenant | DN có thể ẩn nợ qua trái phiếu |

---

## Tầng 4 — Thị trường & Ngành

| Nguồn | URL | Dữ liệu |
|-------|-----|---------|
| SSI Research | web_search "SSI Research [ngành] 2024" | Báo cáo ngành, benchmark |
| VDSC / MBS / VCSC | web_search "[ngành] outlook [năm] research" | Triển vọng ngành, peer comparison |
| Giá nguyên liệu | investing.com, bloomberg | Thép, xăng dầu, tỷ giá USD/VND |
| PMI Việt Nam | web_search "Vietnam PMI [tháng/năm]" | Chu kỳ sản xuất, đơn hàng |

---

## Tầng 5 — Phi tài chính (Thường bị bỏ qua)

| Nguồn | Dữ liệu | Signal |
|-------|---------|--------|
| VnExpress / Tuổi Trẻ / CafeF News | Scandal, tranh chấp lao động, thu hồi SP | Rủi ro reputational → doanh thu tương lai |
| Mua sắm công | muasamcong.mpi.gov.vn | Hợp đồng nhà nước → xác minh doanh thu khu vực công |
| Google Maps / review | Đánh giá thực tế khách hàng | Doanh thu tăng nhưng review giảm → nghi ngờ |

---

## Quy trình Quét Chuẩn (Theo thứ tự)

```
Bước 1: Xác định DN — tên đầy đủ, MST, mã CK (nếu có)
Bước 2: Tra trạng thái pháp lý → dangkykinhdoanh.gov.vn + tracuunnt.gdt.gov.vn
Bước 3: Lấy BCTC gần nhất → HNX/HOSE (ưu tiên) hoặc CafeF
Bước 4: Kiểm tra TSBĐ → moj.gov.vn nếu DN đề xuất TSBĐ cụ thể
Bước 5: Quét tin tức → web_search "[Tên DN]" lọc 12 tháng gần nhất
Bước 6: Benchmark ngành → SSI/VDSC research + peer comparison
```