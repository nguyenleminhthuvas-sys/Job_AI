
# CEO Dashboard Yến Việt — Tài Liệu Yêu Cầu Chỉ Số

**Phiên bản:** 1.0 | **Ngày lập:** 06/2026 | **Trạng thái:** Draft — Chờ review

---

## 1. TỔNG QUAN

### 1.1 Mục tiêu Dashboard

CEO Dashboard Yến Việt được thiết kế nhằm:

- **Cung cấp tầm nhìn toàn cảnh** về tình hình kinh doanh theo thời gian thực — doanh thu, biên lợi nhuận, tồn kho, dòng tiền — chỉ trong 30 giây mỗi buổi sáng.
- **Cảnh báo sớm** các rủi ro đặc thù ngành yến sào: hàng giả, hàng cận date, biến động giá yến thô, chi phí sàn TMĐT ăn mòn biên lợi nhuận.
- **Hỗ trợ ra quyết định** kịp thời về phân bổ nguồn lực, điều chỉnh chiến lược kênh phân phối, định giá sản phẩm và kế hoạch sản xuất.
- **Theo dõi hiệu suất** theo 4 cấp độ: tổng thể → nhóm → vận hành → dự báo.

**Câu hỏi dashboard phải trả lời được:**

1. 📊 Tuần này/tháng này doanh thu đang chạy tốt hay xấu so với kế hoạch?
2. 💰 Biên lợi nhuận gộp thực tế sau chi phí sàn TMĐT là bao nhiêu?
3. 📦 Sản phẩm nào sắp hết hàng? Sản phẩm nào sắp hết date?
4. 🛒 Kênh nào đang tăng trưởng, kênh nào đang suy giảm?
5. 🚨 Có vụ hàng giả mới nào phát hiện trên thị trường không?
6. 👥 Khách hàng quay lại mua lần 2 chiếm bao nhiêu % doanh thu?
7. ⚙️ Nhà máy Phan Rang đang chạy ở công suất bao nhiêu?
8. 💵 Dòng tiền 13 tuần tới có đủ cho kế hoạch sản xuất không?

---

### 1.2 North Star Metric

> **"Profitable Revenue Growth — Tăng trưởng doanh thu có lãi bền vững"**

**Tại sao đây là North Star của Yến Việt:**

Không giống các FMCG thông thường chỉ tối ưu doanh thu, Yến Việt đối mặt với cấu trúc chi phí kép rất đặc thù:

- **Chi phí nguyên liệu biến động cao**: Yến thô 12–25 triệu VNĐ/kg, biến động ±20–30% theo mùa và thị trường.
- **Chi phí kênh TMĐT cắt biên nặng**: Shopee 39,5% / TikTok 45,6% doanh thu kênh — nếu chỉ đuổi GMV mà không kiểm soát mix kênh, công ty có thể tăng doanh thu nhưng lỗ thực tế.
- **Rủi ro hàng giả ăn mòn thương hiệu**: Doanh thu có thể tạm thời tăng nhưng uy tín và tái mua giảm dài hạn.

Vì vậy, North Star Metric phải kết hợp **cả 3 chiều**: doanh thu tăng trưởng (top-line) + biên lợi nhuận ≥ ngưỡng (profitability) + bền vững (retention & brand health). Không thể tách rời.

**Công thức đo North Star:**
```
NSM Score = Net Revenue Growth YoY (%) × Gross Margin Ach (%) × Retention Rate (%)
            ──────────────────────────────────────────────────────────────────────
                                     Base Target
```

---

### 1.3 Nguyên tắc thiết kế

- 🎯 **Thiết kế theo quyết định, không theo dữ liệu**: Mỗi KPI phải gắn với ít nhất 1 quyết định cụ thể CEO cần đưa ra. Không đưa vào dashboard chỉ vì "hay có".
- 📱 **Không quá 15 KPI trên 1 màn hình**: CEO không có thời gian đọc 50 chỉ số — 10 KPI Layer 1 là giới hạn tối đa cho one-pager.
- 🟢🟡🔴 **Màu RAG với ngưỡng số cụ thể**: Xanh = Đạt/Tốt, Vàng = Cần theo dõi, Đỏ = Nguy hiểm/Escalate. Mỗi ngưỡng phải là con số cụ thể, không chấp nhận định tính.
- 📐 **Actual vs Target vs YoY — 3 chiều so sánh**: Mọi KPI phải hiển thị đồng thời: giá trị thực tế, % so kế hoạch, % so cùng kỳ năm trước.
- 📱 **Mobile-first**: CEO di chuyển thường xuyên — dashboard phải xem tốt trên điện thoại, font tối thiểu 16px, card layout, tap target ≥ 44px.
- 👤 **Mỗi KPI có 1 người chịu trách nhiệm rõ ràng (KPI Owner)**: Không có chủ thể = không có hành động = dashboard vô nghĩa.

---

### 1.4 Đối tượng & Tần suất sử dụng

| Role | Layer | Tần suất | Thiết bị ưu tiên |
|------|-------|----------|-----------------|
| CEO | Layer 1 + xem nhanh L2 | Hàng ngày (sáng) | Mobile |
| CFO | Layer 1 + 2A (Tài chính) | Hàng ngày | Desktop |
| CMO / E-commerce Manager | Layer 2B + 2C + 2D | Hàng ngày | Desktop |
| Sales Director | Layer 2B + 2C | Hàng ngày | Mobile/Desktop |
| Ops Director | Layer 2F + Layer 3 | Hàng ngày | Desktop |
| QA Manager | Layer 3 (chất lượng) | Hàng ngày | Desktop |
| Board / VinaCapital | Layer 1 | Hàng tháng/quý | Desktop/PDF |
| IT Admin | Toàn bộ (quản trị) | Theo yêu cầu | Desktop |

---

## 2. KIẾN TRÚC 4 LAYER

```
┌─────────────────────────────────────────────────────────────────┐
│  LAYER 1 — CEO ONE PAGE                                         │
│  10 KPI tổng hợp | Tần suất: Hàng ngày | Đối tượng: CEO, Board │
│  Trả lời: "Công ty đang ở đâu so với kế hoạch?"                 │
└────────────────────┬────────────────────────────────────────────┘
                     │ Drill-down
┌────────────────────▼────────────────────────────────────────────┐
│  LAYER 2 — DRILL-DOWN THEO NHÓM (6 nhóm)                       │
│  2A: Tài chính | 2B: Bán hàng | 2C: Kênh & TMĐT               │
│  2D: Khách hàng | 2E: SKU | 2F: Vận hành                       │
│  30–50 KPI | Tần suất: Hàng ngày–tuần | Đối tượng: C-level     │
│  Trả lời: "Tại sao? Vấn đề ở đâu?"                             │
└────────────────────┬────────────────────────────────────────────┘
                     │ Alert & Monitor
┌────────────────────▼────────────────────────────────────────────┐
│  LAYER 3 — VẬN HÀNH HÀNG NGÀY                                  │
│  Stockout, Near-expiry, Defect, Hàng giả, Xung đột giá         │
│  Alert real-time | Đối tượng: Ops, QA, E-commerce              │
│  Trả lời: "Hôm nay cần xử lý gì ngay?"                         │
└────────────────────┬────────────────────────────────────────────┘
                     │ Predict & Optimize
┌────────────────────▼────────────────────────────────────────────┐
│  LAYER 4 — DỰ BÁO & PHÂN TÍCH NÂNG CAO                        │
│  Forecast 90 ngày, Churn prediction, ML segmentation           │
│  Giai đoạn: Tháng 10–18 | Đối tượng: CEO, CFO, Data team      │
│  Trả lời: "Điều gì sẽ xảy ra? Nên làm gì tiếp theo?"          │
└─────────────────────────────────────────────────────────────────┘
```

---

## 3. LAYER 1 — CEO ONE PAGE (10 KPI)

> 📱 *"CEO mở dashboard buổi sáng, chỉ cần 30 giây để biết công ty đang ở đâu"*

| STT | Tên KPI | Định nghĩa | Công thức tính | Đơn vị | Nguồn dữ liệu | Tần suất cập nhật | 🟢 Xanh | 🟡 Vàng | 🔴 Đỏ | KPI Owner | Lý do chọn cho Yến Việt |
|-----|---------|------------|---------------|--------|---------------|-------------------|---------|---------|------|-----------|------------------------|
| 1 | **Net Revenue** — Tổng Doanh Thu Thuần | Doanh thu sau chiết khấu, trả hàng, giảm giá; TRƯỚC chi phí sàn TMĐT | Doanh thu gộp − Chiết khấu − Hàng trả lại | Tỷ VNĐ / tháng | ERP/OMS | Hàng ngày (T+1) | ≥ 25 tỷ/tháng | 20–25 tỷ | < 20 tỷ | CFO | Thước đo tổng thể hiệu suất kinh doanh; baseline để tính tất cả tỷ lệ khác |
| 2 | **Revenue Growth %** — Tăng Trưởng | Tốc độ tăng trưởng so kỳ trước (MoM) và cùng kỳ năm ngoái (YoY) | (Revenue kỳ này − kỳ trước) / kỳ trước × 100 | % | ERP | Hàng tháng | YoY ≥ +15%; MoM ≥ +5% | YoY +5–15%; MoM 0–5% | YoY < +5% hoặc âm | CEO + CFO | Yến Việt đang trong giai đoạn tăng trưởng — cần giám sát đà tăng liên tục |
| 3 | **Gross Margin %** — Biên Lợi Nhuận Gộp | % lợi nhuận gộp trên doanh thu thuần; phản ánh sức khỏe định giá và kiểm soát giá vốn | (Net Revenue − COGS) / Net Revenue × 100 | % | ERP + Kế toán | Hàng tháng (W+1) | ≥ 48% | 45–48% | < 45% | CFO | Yến thô biến động 12–25tr/kg — GM% là cảnh báo sớm nhất khi chi phí NVL tăng |
| 4 | **EBITDA** — Lợi Nhuận Vận Hành | Thu nhập trước lãi vay, thuế, khấu hao — đo hiệu quả vận hành thực sự | Net Revenue − COGS − OPEX (trừ lãi vay, thuế, D&A) | Tỷ VNĐ / tháng; % margin | ERP + Kế toán | Hàng tháng | EBITDA margin ≥ 18% | 12–18% | < 12% | CFO | Cho thấy công ty có lãi thực sự sau toàn bộ chi phí vận hành hay không |
| 5 | **Inventory Days (DIO)** — Số Ngày Tồn Kho | Số ngày trung bình hàng hóa nằm trong kho trước khi bán | Avg Inventory / (COGS / 365) | Ngày | WMS + ERP | Hàng tuần | 30–45 ngày | 45–60 ngày | > 60 ngày hoặc < 20 ngày | Ops Director | Yến sào có hạn sử dụng 12–24 tháng — DIO cao = rủi ro hàng cận date, vốn bị chiếm dụng |
| 6 | **OTIF Rate** — Giao Hàng Đúng Đủ | % đơn hàng giao đúng số lượng (On Time = đúng ngày cam kết; In Full = đủ SKU) | Số đơn OTIF / Tổng đơn × 100 | % | WMS + OMS | Hàng tuần | ≥ 95% | 90–95% | < 90% | Ops Director | Chuỗi siêu thị (AEON, Co.op) phạt nặng OTIF < 95% — ảnh hưởng listing hàng |
| 7 | **Market Coverage** — Độ Phủ Điểm Bán | % điểm bán có sản phẩm Yến Việt trên tổng điểm bán mục tiêu trong 63 tỉnh/thành | Số điểm bán có hàng / Tổng điểm bán mục tiêu × 100 | % | CRM/SFA + Báo cáo field sales | Hàng tháng | ≥ 85% | 70–85% | < 70% | Sales Director | Yến Việt có 80+ cửa hàng — cần theo dõi tỷ lệ phủ so với tiềm năng |
| 8 | **Top 10 SKU Contribution** — Đóng Góp SKU Chủ Lực | % doanh thu đến từ 10 SKU bán chạy nhất — đo sức khỏe danh mục | Revenue Top 10 SKU / Total Revenue × 100 | % | ERP/OMS | Hàng tuần | 60–75% | 75–85% | > 85% (tập trung rủi ro) hoặc < 55% | CMO + Sales Director | Nếu >85% DT từ 10 SKU → rủi ro cao khi 1 SKU có vấn đề chất lượng hoặc thiếu hàng |
| 9 | **Cash Conversion Cycle (CCC)** — Vòng Quay Tiền | Số ngày từ khi bỏ tiền mua NVL → thu được tiền từ khách hàng | DIO + DSO − DPO | Ngày | ERP + Kế toán | Hàng tháng | CCC ≤ 35 ngày | 35–55 ngày | > 55 ngày | CFO | Với giá yến thô cao, CCC dài = vốn lưu động bị chiếm dụng lớn → áp lực tài chính |
| 10 | **Channel Revenue Mix** — Cơ Cấu Kênh | Tỷ trọng % doanh thu của từng kênh: Offline / Siêu thị / CVS / TMĐT / Xuất khẩu | Revenue từng kênh / Total Revenue × 100 | % theo kênh | ERP/OMS | Hàng tháng | Không kênh nào > 45% | 1 kênh chiếm 45–60% | 1 kênh > 60% total revenue | CEO + CMO | Chi phí TMĐT 39–46% — nếu TMĐT chiếm quá lớn mà không có chiến lược kênh mix, biên lợi nhuận sụp đổ |

**📝 Ghi chú đặc thù ngành yến sào:**

- **Gross Margin %**: Phải tính *sau* chiết khấu nhưng *trước* chi phí sàn TMĐT để có thể so sánh giữa các kênh. Cần thêm chỉ số phụ "Net Margin after Channel Cost" để thấy bức tranh thực.
- **Inventory Days**: Cần phân tách thành 3 kho (HCM / HN / Đà Nẵng) và theo từng SKU vì tốc độ bán rất khác nhau giữa nước yến lon (bán nhanh) và tổ yến nguyên chất (giá cao, bán chậm).
- **OTIF Rate**: Tết Nguyên Đán và Trung Thu là 2 mùa cao điểm — OTIF trong 30 ngày trước Tết là KPI sống còn, cần theo dõi hàng ngày trong giai đoạn này.
- **Channel Revenue Mix**: Kênh xuất khẩu (Nhật/Úc/Trung Quốc) cần tách riêng vì margin và payment terms khác biệt hoàn toàn với thị trường nội địa.

---

## 4. LAYER 2 — DRILL-DOWN THEO NHÓM

### 4A. 💰 Tài Chính & Lợi Nhuận

> Yến Việt hoạt động với cấu trúc chi phí đặc biệt: NVL yến thô giá cao + chi phí sàn TMĐT lớn + chi phí chứng nhận quốc tế (HACCP/ISO/FDA). Nhóm tài chính phải phơi bày toàn bộ cấu trúc chi phí thực tế để CEO ra quyết định đúng về giá, kênh và danh mục sản phẩm.

| Tên KPI | Định nghĩa | Nguồn | Tần suất | 🟢/🟡/🔴 | Owner |
|---------|------------|-------|----------|-----------|-------|
| P&L Chi tiết (Revenue, COGS, Gross Profit, OPEX, EBIT, EBITDA) | Báo cáo lãi lỗ đầy đủ theo tháng, so kế hoạch và YoY | ERP + Kế toán | Hàng tháng | GM% ≥48% / 45–48% / <45% | CFO |
| Cash Flow 13 tuần | Dự báo dòng tiền vào/ra 13 tuần tới — phát hiện sớm nguy cơ thiếu tiền mặt | ERP + Kế toán | Hàng tuần | Cuối kỳ dương ≥ 5 tỷ / 2–5 tỷ / < 2 tỷ | CFO |
| Break-even by SKU | Điểm hòa vốn của từng SKU sau phân bổ chi phí cố định — xác định SKU nào đang lỗ | ERP + Kế toán | Hàng quý | > 20% buffer / 5–20% / < 5% hoặc lỗ | CFO + CMO |
| ROI Marketing | Doanh thu tăng thêm / Chi phí marketing; đo hiệu quả đầu tư quảng cáo | CRM + ERP + Ads platform | Hàng tháng | ROI ≥ 3x / 2–3x / < 2x | CMO |
| Chi phí sàn TMĐT % doanh thu | % hoa hồng + vận hành sàn trên doanh thu kênh TMĐT (Shopee/TikTok/Lazada) | Seller Center + Kế toán | Hàng tuần | < 40% / 40–45% / > 45% | Ecom Manager |
| Net Margin after Channel Cost | Biên lợi nhuận thực tế của từng kênh SAU KHI trừ toàn bộ chi phí kênh | ERP + Seller Center | Hàng tháng | ≥ 20% / 10–20% / < 10% | CFO |
| Price Elasticity by SKU | Độ nhạy cảm giá — khi tăng giá X% thì doanh số giảm Y% | ERP + OMS (A/B test giá) | Hàng quý | Phân tích chiều dọc | CMO |
| Công nợ đại lý (AR Aging) | Số tiền đại lý còn nợ, phân loại theo tuổi nợ: <30/30–60/60–90/>90 ngày | ERP + Kế toán | Hàng tuần | AR >90 ngày < 5% total AR / 5–10% / > 10% | CFO + Sales |

---

### 4B. 📈 Bán Hàng & Tăng Trưởng

> Với 80+ cửa hàng trải dài 63 tỉnh/thành và mạng lưới đại lý đa tầng, Sales Dashboard phải cho thấy: ai đang bán tốt, ai đang tụt hậu, kênh nào đang phát triển theo đúng kế hoạch, và mùa vụ sắp đến cần chuẩn bị gì.

| Tên KPI | Định nghĩa | Nguồn | Tần suất | 🟢/🟡/🔴 | Owner |
|---------|------------|-------|----------|-----------|-------|
| Sell-in vs Sell-out Gap | Chênh lệch giữa hàng xuất từ kho (sell-in) và hàng thực tế tiêu thụ tại điểm bán (sell-out) | WMS + POS | Hàng tuần | Gap < 10% / 10–20% / > 20% (tồn kênh tăng) | Sales Director |
| Doanh thu theo vùng Bắc/Trung/Nam | Doanh thu và tăng trưởng theo từng vùng địa lý | OMS + SFA | Hàng tháng | ≥ 100% KH / 85–100% / < 85% | Sales Director |
| Top 20 đại lý | Doanh thu, % hoàn thành KH, công nợ của 20 đại lý lớn nhất | ERP + CRM | Hàng tháng | ≥ 100% KH / 85–100% / < 85% | Sales Director |
| % Team đạt target | Tỷ lệ % nhân viên bán hàng đạt hoặc vượt KPI tháng | SFA + HRM | Hàng tháng | ≥ 70% team đạt / 50–70% / < 50% | Sales Director |
| AOV theo kênh (Average Order Value) | Giá trị trung bình mỗi đơn hàng theo từng kênh bán | OMS | Hàng tuần | Trend tăng / Flat / Giảm >10% | Sales Director |
| Peak Season Performance | Doanh thu thực tế vs kế hoạch trong Tết/Trung Thu/8-3/Vu Lan | OMS + ERP | Theo mùa (tracking 60 ngày trước peak) | ≥ 110% KH / 90–110% / < 90% | CEO + CMO |
| Pipeline B2B (quà biếu DN) | Giá trị đơn hàng quà tặng doanh nghiệp đang trong pipeline bán hàng | CRM | Hàng tuần | Pipeline ≥ 3x revenue target / 2–3x / < 2x | Sales Director |
| New Distributor Acquisition | Số đại lý/cửa hàng mới ký trong tháng | CRM | Hàng tháng | ≥ 5 điểm mới / 2–5 / 0–1 | Sales Director |

---

### 4C. 🛒 Kênh Phân Phối & TMĐT

> Chi phí sàn TMĐT cực kỳ cao (Shopee 39,5%; TikTok 45,6%) là rủi ro đặc trưng của Yến Việt. Nhóm kênh phải giám sát đồng thời hiệu quả tăng trưởng lẫn biên lợi nhuận theo từng sàn — tăng GMV nhưng lỗ thực là thất bại chiến lược.

| Tên KPI | Định nghĩa | Nguồn | Tần suất | 🟢/🟡/🔴 | Owner |
|---------|------------|-------|----------|-----------|-------|
| GMV theo sàn (Shopee/TikTok/Lazada/Website) | Tổng giá trị hàng hóa bán ra theo từng sàn trước hoàn hàng | Seller Center | Hàng ngày | ≥ 100% KH / 85–100% / < 85% | Ecom Manager |
| Tỷ trọng kênh | % doanh thu từng kênh trên tổng doanh thu | ERP | Hàng tháng | Không kênh > 45% / 45–60% / > 60% | CEO |
| Chi phí sàn % doanh thu kênh | Tổng phí hoa hồng + vận hành / Doanh thu kênh | Seller Center + Kế toán | Hàng tuần | < 40% / 40–45% / > 45% | Ecom Manager |
| Conversion Rate | % người xem → đặt hàng thành công trên từng sàn | Seller Center + GA4 | Hàng tuần | ≥ 3% / 1,5–3% / < 1,5% | Ecom Manager |
| Return Rate theo kênh | % đơn hàng bị hoàn trả theo từng kênh | OMS + Seller Center | Hàng tuần | < 3% / 3–6% / > 6% | Ecom Manager |
| Livestream GMV | Doanh thu từ các phiên livestream trên TikTok/Shopee | Seller Center | Sau mỗi phiên | ≥ 100% KH phiên / 70–100% / < 70% | Ecom Manager |
| Xung đột giá kênh | Chênh lệch giá cùng SKU giữa các kênh bán | Price monitoring tool / Manual | Hàng ngày | Chênh lệch < 5% / 5–10% / > 10% | CMO + Sales |
| Same-store Growth (offline) | Tăng trưởng doanh thu tại các cửa hàng đã mở ≥ 12 tháng (loại trừ cửa hàng mới) | POS | Hàng tháng | ≥ +10% YoY / 0–10% / âm | Sales Director |
| Off-take Velocity (siêu thị) | Tốc độ bán hàng tại quầy siêu thị (đơn vị/tuần) — cơ sở tái đặt hàng | POS siêu thị | Hàng tuần | ≥ 100% KH / 85–100% / < 85% | Sales Director |

---

### 4D. 👥 Khách Hàng & Retention

> Khách hàng Yến Việt mua theo nhiều dịp khác nhau: sức khỏe bản thân, biếu tặng, cho con trẻ, người cao tuổi. Hiểu rõ hành vi tái mua theo từng phân khúc là chìa khóa để thiết kế chương trình khách hàng trung thành đúng đích.

| Tên KPI | Định nghĩa | Nguồn | Tần suất | 🟢/🟡/🔴 | Owner |
|---------|------------|-------|----------|-----------|-------|
| New vs Returning Customer % | Tỷ lệ khách hàng mới vs khách hàng quay lại trong tháng | CRM/CDP | Hàng tháng | Returning ≥ 40% / 25–40% / < 25% | CMO |
| CAC by Channel (Customer Acquisition Cost) | Chi phí để có 1 khách hàng mới theo từng kênh | Ads Platform + CRM | Hàng tháng | Trend giảm / Flat / Tăng > 20% so target | CMO |
| CLV (Customer Lifetime Value) | Tổng doanh thu dự kiến từ 1 khách hàng trong suốt vòng đời | CRM + ERP | Hàng quý | CLV ≥ 5 triệu VNĐ / 2–5 triệu / < 2 triệu | CMO |
| CAC:CLV Ratio | Hiệu quả đầu tư thu hút khách — CLV phải lớn hơn CAC nhiều lần | CRM | Hàng quý | CLV:CAC ≥ 4:1 / 2–4:1 / < 2:1 | CMO |
| Cohort Retention (M1, M3, M6) | % khách hàng mua lần đầu tháng X còn mua lại tại tháng X+1, X+3, X+6 | CRM | Hàng tháng | M3 ≥ 35% / 20–35% / < 20% | CMO |
| Purchase Frequency by Occasion | Số lần mua trung bình/năm theo dịp: sức khỏe/biếu tặng/trẻ em | CRM | Hàng quý | Phân tích chiều dọc | CMO |
| RFM Segmentation | Phân nhóm khách hàng theo Recency (gần nhất), Frequency (tần suất), Monetary (giá trị) | CRM/CDP | Hàng tháng | % Champion ≥ 15% / 8–15% / < 8% | CMO |
| NPS (Net Promoter Score) | Điểm đo khả năng khách hàng giới thiệu sản phẩm cho người khác (thang 0–10) | Survey / App | Hàng quý | NPS ≥ 50 / 30–50 / < 30 | CMO + QA |
| CSAT (Customer Satisfaction) | Tỷ lệ khách hàng hài lòng (rating 4–5 sao) trên tổng phản hồi | Survey + TMĐT review | Hàng tuần | ≥ 90% / 80–90% / < 80% | CMO |
| Phân khúc: Sức khỏe / Biếu tặng / Trẻ em / Cao tuổi | % doanh thu theo từng phân khúc mục tiêu — giám sát dịch chuyển danh mục khách | CRM + OMS | Hàng quý | Phân tích chiều dọc | CMO |

---

### 4E. 📦 Sản Phẩm & Danh Mục SKU

> Yến Việt có danh mục đa dạng từ yến thô nguyên chất (margin cao, bán chậm) đến nước yến lon (margin thấp hơn, volume lớn). Quản lý SKU đúng nghĩa là tránh tình trạng: 20% SKU chiếm 80% doanh thu nhưng 80% SKU còn lại đang ăn mòn chi phí kho và sự tập trung của đội bán hàng.

| Tên KPI | Định nghĩa | Nguồn | Tần suất | 🟢/🟡/🔴 | Owner |
|---------|------------|-------|----------|-----------|-------|
| Revenue by SKU | Doanh thu từng SKU — ranking và trend | OMS/ERP | Hàng tuần | ≥ 100% KH / 85–100% / < 85% | CMO |
| Gross Margin by SKU | % biên lợi nhuận gộp của từng SKU sau phân bổ giá vốn trực tiếp | ERP + Kế toán | Hàng tháng | ≥ 48% / 40–48% / < 40% | CFO + CMO |
| Hero Product Tracking (Top 5 SKU) | Theo dõi tăng trưởng, tồn kho, margin của 5 SKU đóng góp > 80% doanh thu | ERP + OMS | Hàng ngày | Đủ hàng + on target / Cần bổ sung / Stockout hoặc off-track | CMO + Ops |
| Slow-moving SKU (> 60 ngày tồn) | Danh sách SKU không bán được trong 60 ngày — cần xử lý giảm giá hoặc ngừng sản xuất | WMS | Hàng tuần | 0 SKU slow-moving / 1–3 SKU / > 3 SKU | CMO + Ops |
| New Product Adoption Rate | % doanh thu từ sản phẩm mới (ra mắt < 6 tháng) trên tổng doanh thu | OMS | Hàng tháng | ≥ 8% / 3–8% / < 3% (đổi mới quá chậm) | CMO |
| SKU Cannibalization | Mức độ sản phẩm mới ăn vào doanh thu sản phẩm hiện có thay vì tăng thị phần | OMS | Sau mỗi launch | < 20% cannibalization / 20–40% / > 40% | CMO |
| Pack Mix Optimization | Tỷ lệ sản phẩm đơn lẻ / combo / hộp quà — tối ưu margin theo pack | OMS | Hàng tháng | Combo/Gift ≥ 30% doanh thu / 15–30% / < 15% | CMO + Sales |
| Rating by SKU trên TMĐT | Rating trung bình (1–5 sao) và số lượng đánh giá của từng SKU trên Shopee/TikTok | Seller Center | Hàng tuần | Rating ≥ 4,5 sao / 4,0–4,5 / < 4,0 | CMO + QA |

---

### 4F. ⚙️ Vận Hành & Chất Lượng

> Nhà máy Phan Rang với chứng nhận HACCP/ISO 22000/FDA là lợi thế cạnh tranh cốt lõi của Yến Việt. Bất kỳ sự cố chất lượng nào cũng có thể xóa bỏ uy tín tích lũy nhiều năm. Dashboard vận hành phải cảnh báo sớm trước khi vấn đề leo thang ra thị trường.

| Tên KPI | Định nghĩa | Nguồn | Tần suất | 🟢/🟡/🔴 | Owner |
|---------|------------|-------|----------|-----------|-------|
| Production Output vs Kế hoạch | Sản lượng thực tế nhà máy / Kế hoạch sản xuất × 100 | MES/ERP | Hàng ngày | ≥ 95% / 85–95% / < 85% | Ops Director |
| Capacity Utilization nhà máy Phan Rang | % công suất nhà máy đang sử dụng trên tổng công suất thiết kế | MES | Hàng tuần | 75–85% / 60–75% hoặc >85% / < 60% hoặc > 90% (nguy cơ quá tải) | Ops Director |
| Raw Material Inventory (yến thô) | Số ngày tồn kho yến thô — đảm bảo không bị đứt nguồn nguyên liệu | WMS | Hàng tuần | 30–45 ngày / 15–30 ngày / < 15 ngày (nguy cơ đứt nguồn) | Ops Director |
| Near-expiry Inventory (< 30/60 ngày) | Tỷ lệ hàng thành phẩm sắp hết hạn sử dụng trong 30 và 60 ngày tới | WMS | Hàng ngày | < 2% tổng kho / 2–5% / > 5% | Ops Director |
| DIFOT Rate (Delivered In Full On Time) | % đơn hàng giao đúng số lượng và đúng ngày thực tế tại điểm đến cuối | WMS + OMS | Hàng tuần | ≥ 95% / 90–95% / < 90% | Ops Director |
| Logistics Cost per Order | Chi phí vận chuyển trung bình cho mỗi đơn hàng (nội địa) | ERP + 3PL | Hàng tháng | < 45.000 VNĐ/đơn / 45–65.000 / > 65.000 | Ops Director |
| Defect Rate (tỷ lệ lỗi sản phẩm) | % sản phẩm không đạt tiêu chuẩn chất lượng trong quá trình kiểm tra | QA System | Hàng ngày (theo lô) | < 0,5% / 0,5–1,5% / > 1,5% | QA Manager |
| Complaint Rate (tỷ lệ khiếu nại) | Số khiếu nại khách hàng về chất lượng / 1.000 đơn hàng | CRM + CS | Hàng tuần | < 1 / 1–3 / > 3 khiếu nại / 1.000 đơn | QA Manager |
| Lab Test Compliance | % lô hàng đã qua kiểm nghiệm lab đạt chuẩn trước khi xuất kho | QA System | Mỗi lô sản xuất | 100% / NA / < 100% (không thể chấp nhận) | QA Manager |
| Certificate Status (HACCP / ISO / FDA) | Trạng thái còn hiệu lực của các chứng nhận quốc tế (ngày hết hạn, tái chứng nhận) | QA System | Hàng tháng | > 6 tháng còn hiệu lực / 3–6 tháng / < 3 tháng | QA Manager |
| Brand Counterfeiting Incidents | Số vụ hàng giả/nhái phát hiện trên thị trường và trên sàn TMĐT | Legal + E-com monitoring | Hàng ngày | 0 vụ / NA / ≥ 1 vụ (escalate ngay) | Legal + CMO |

---

## 5. LAYER 3 — VẬN HÀNH HÀNG NGÀY

### 5.1 Chỉ số theo dõi hàng ngày

| KPI | Ngưỡng cảnh báo | Hành động khi vượt ngưỡng | Owner |
|-----|-----------------|--------------------------|-------|
| Stockout alert theo SKU × Kho (HCM/HN/ĐN) | Tồn kho < 7 ngày bán tại bất kỳ kho nào | Trigger lệnh điều phối kho / bổ sung sản xuất khẩn | Ops Director |
| Near-expiry alert (< 30 ngày hết hạn) | > 2% tổng kho trong vùng cảnh báo | Kích hoạt chiến dịch xả hàng / đàm phán điểm bán | Ops Director |
| Defect rate theo lô sản xuất | Defect rate > 1,5% trong bất kỳ lô nào | Giữ lô, điều tra nguyên nhân, thông báo QA Manager | QA Manager |
| GMV TMĐT hàng ngày so baseline | GMV < 70% baseline ngày thường | Review ngay: lỗi sàn / tắt quảng cáo / sản phẩm bị ẩn / đối thủ xả hàng | Ecom Manager |
| Phát hiện hàng giả trên sàn TMĐT | Bất kỳ 1 listing hàng giả nào | Report lên sàn ngay, thông báo Legal, log vào incident tracker | Legal + CMO |
| Xung đột giá kênh > 10% | Chênh lệch giá cùng SKU giữa 2 kênh > 10% | Xác định nguồn xung đột, cảnh báo đại lý / cửa hàng vi phạm | Sales Director |
| Số đơn hàng B2B mới | Không có đơn B2B nào trong 3 ngày liên tiếp (mùa cao điểm) | Review pipeline, thúc đẩy sales team liên hệ khách hàng tiềm năng | Sales Director |

---

### 5.2 Chỉ số theo dõi hàng tuần

| KPI | Ngưỡng cảnh báo | Hành động khi vượt ngưỡng | Owner |
|-----|-----------------|--------------------------|-------|
| Sell-in vs Sell-out gap theo kênh | Gap > 20% (tồn kênh tích lũy) | Điều tra: đại lý ôm hàng hay thị trường hấp thụ chậm? Đánh giá xúc tiến | Sales Director |
| Off-take velocity tại siêu thị | Off-take < 70% baseline tuần trước tại ≥ 3 chuỗi siêu thị | Review trưng bày, khuyến mãi, kiểm tra đối thủ cạnh tranh trên kệ | Sales Director |
| Conversion rate theo sàn | Conversion < 1,5% trên Shopee hoặc < 2% trên TikTok | Review: ảnh sản phẩm, giá, review rating, quảng cáo keyword | Ecom Manager |
| Return rate theo kênh | Return rate > 5% tại bất kỳ kênh nào | Điều tra lý do hoàn: chất lượng / giao sai / khách đổi ý; thông báo QA | QA + Ecom |
| Tỷ lệ nhân viên sales đạt KPI tuần | < 50% team đạt KPI tuần liên tiếp 2 tuần | 1:1 coaching với quản lý tuyến, review territory assignment | Sales Director |
| Rating SKU trên TMĐT | SKU nào có rating < 4,0 sao với > 50 đánh giá | Review chất lượng, packaging, mô tả sản phẩm; phản hồi đánh giá tiêu cực | CMO + QA |
| Capacity Utilization nhà máy | < 60% hoặc > 90% kéo dài > 2 tuần | Dưới: review kế hoạch sản xuất / lưu kho. Trên: đánh giá tăng ca hoặc subcontract | Ops Director |
| Công nợ đại lý quá hạn mới phát sinh | Đại lý nào phát sinh công nợ > 60 ngày mới trong tuần | Liên hệ thu hồi, tạm dừng cấp hàng nếu cần, báo CFO | CFO + Sales |

---

## 6. LAYER 4 — DỰ BÁO & PHÂN TÍCH NÂNG CAO

| Phân tích | Mô tả | Điều kiện cần | Công cụ đề xuất | Độ ưu tiên | Giai đoạn |
|-----------|-------|---------------|----------------|------------|-----------|
| Revenue Forecast 90 ngày với Confidence Interval | Dự báo doanh thu theo từng kênh có biên độ tin cậy 80% và 95% | ≥ 24 tháng lịch sử doanh thu sạch theo kênh | Python (Prophet), Looker Studio | 🔴 Cao | Tháng 10–12 |
| Demand Forecast theo SKU | Dự báo nhu cầu từng SKU để tối ưu kế hoạch sản xuất và tồn kho | ≥ 18 tháng lịch sử bán hàng theo SKU × kho | SAP APO / Python Statsmodels | 🔴 Cao | Tháng 10–12 |
| Seasonality Model | Mô hình hóa biên độ mùa vụ: Tết/Trung Thu/Vu Lan/8-3 theo từng kênh và SKU | ≥ 3 năm dữ liệu mùa vụ, kết hợp dữ liệu Google Trends | Python (statsmodels), BigQuery ML | 🔴 Cao | Tháng 10–12 |
| Inventory Forecast — Cảnh báo Stockout/Overstock | Dự báo tồn kho 4–8 tuần tới, tự động cảnh báo nguy cơ hết hàng hoặc dư hàng | Demand forecast + Lead time NCC ổn định | Python + WMS integration | 🔴 Cao | Tháng 10–12 |
| Churn Prediction | Dự báo khách hàng nào có khả năng ngừng mua trong 60–90 ngày tới | ≥ 12 tháng dữ liệu CRM với purchase history đủ | Python (XGBoost/LightGBM), CDP | 🟡 Trung bình | Tháng 13–15 |
| Customer Segmentation ML | Phân nhóm tự động khách hàng theo hành vi mua (vượt RFM cơ bản) | CDP với ≥ 10.000 khách hàng có lịch sử đủ | Python (K-means, DBSCAN), Tableau | 🟡 Trung bình | Tháng 13–15 |
| Marketing Mix Modeling (MMM) | Đo đóng góp của từng kênh marketing vào doanh thu để tối ưu ngân sách | ≥ 18 tháng dữ liệu chi tiêu marketing + doanh thu theo tuần | Python (Robyn/LightweightMMM) | 🟡 Trung bình | Tháng 14–16 |
| Anomaly Detection tự động | Tự động phát hiện bất thường trong doanh thu, tồn kho, chất lượng — alert ngay | Streaming data pipeline; ≥ 6 tháng baseline | Datadog / GCP Monitoring / Prophet | 🟡 Trung bình | Tháng 13–15 |
| What-if Scenario Simulator | Mô phỏng: nếu giá yến thô tăng 20%, nếu Shopee tăng phí, nếu tung SKU mới → P&L thay đổi thế nào? | Financial model đã chuẩn hóa + P&L data sạch | Excel/Google Sheets advanced + Looker | 🔴 Cao | Tháng 10–12 |
| Predictive Pricing Engine | Đề xuất giá tối ưu theo từng SKU, kênh, mùa vụ để cân bằng volume và margin | Dữ liệu giá lịch sử + price elasticity + đối thủ | Python + price monitoring tool | 🟢 Thấp | Tháng 16–18 |

---

### 📵 Dashboard KHÔNG nên làm trước — Lý do chưa đủ điều kiện

> Các phân tích dưới đây có giá trị cao nhưng **không nên ưu tiên** trong giai đoạn đầu vì thiếu điều kiện tiên quyết:

- **Social Listening Sentiment Analysis**: Cần ≥ 6 tháng data social đủ volume và tool NLP tiếng Việt tốt — nên làm sau khi có nền tảng dữ liệu nội bộ.
- **Real-time Dynamic Pricing**: Cần hạ tầng API kết nối tất cả kênh và khả năng thực thi giá đồng thời — phức tạp về kỹ thuật và có nguy cơ xung đột kênh nếu không quản lý tốt.
- **KOL ROI Attribution**: Không thể đo chính xác nếu chưa có UTM tracking nhất quán và CRM tích hợp TMĐT đầy đủ.

---

## 7. NGUỒN DỮ LIỆU & TÍCH HỢP HỆ THỐNG

### 7.1 Bản đồ nguồn dữ liệu

| Loại dữ liệu | Field cần có (ví dụ) | Hệ thống nguồn | Phòng ban sở hữu | Tần suất sync | Ưu tiên | Rủi ro nếu thiếu |
|-------------|---------------------|---------------|-----------------|--------------|---------|-----------------|
| ERP/OMS (đơn hàng, bán hàng) | Order ID, SKU, Qty, Price, Channel, Date, Customer ID | SAP / Odoo / Tùy chỉnh | IT + Sales | Hàng ngày (T+1) | 🔴 Cao | Không tính được Net Revenue, Gross Margin — Layer 1 sụp đổ |
| POS (điểm bán lẻ offline) | Transaction ID, Store ID, SKU, Qty, Price, Timestamp | POS system (80+ cửa hàng) | Sales | Hàng ngày | 🔴 Cao | Mù về sell-out thực tế, không đo được same-store growth |
| WMS (kho) | SKU, Batch, Qty, Location, Expiry Date, Inbound/Outbound Date | WMS (3 kho HCM/HN/ĐN) | Ops | Hàng ngày | 🔴 Cao | Không phát hiện được near-expiry, stockout, DIO không chính xác |
| Kế toán / Tài chính | COGS, OPEX by category, AR/AP aging, Cash position | ERP kế toán | Finance | Hàng tuần | 🔴 Cao | Không tính được EBITDA, CCC, Net Margin thực sự |
| CRM / CDP | Customer ID, Purchase history, Channel, Segment, Contact | CRM (Salesforce/HubSpot/tùy chỉnh) | Marketing | Hàng ngày | 🟡 Trung bình | Không đo được CAC, CLV, Retention, RFM |
| Shopee Seller Center | GMV, Orders, Returns, Commission, Ad spend, Rating | Shopee API | E-commerce | Hàng ngày | 🔴 Cao | Không kiểm soát chi phí sàn lớn nhất; GMV TMĐT tối |
| TikTok Shop Seller Center | GMV, Livestream revenue, Commission, Returns, Follower | TikTok API | E-commerce | Hàng ngày | 🔴 Cao | Kênh chi phí cao nhất (45,6%) — mù hoàn toàn là rủi ro lớn |
| Google Analytics 4 (GA4) | Sessions, Conversion, Revenue, Traffic source, User behavior | GA4 | Marketing | Hàng ngày | 🟡 Trung bình | Không đo được hiệu quả website yenvietmall.com |
| Meta/TikTok/Shopee Ads | Ad spend, Impressions, Clicks, ROAS, CPC by campaign | Ads API | Marketing | Hàng ngày | 🟡 Trung bình | Không tính được ROI marketing, MMM thiếu đầu vào |
| Social Listening | Brand mentions, Sentiment, Reach, Fake product reports | Buzzmetrics / YouNet | Marketing | Hàng ngày | 🟡 Trung bình | Chậm phản ứng với khủng hoảng thương hiệu và hàng giả |
| HRM / Chấm công | Headcount, Sales rep attendance, Performance score | HRM system | HR | Hàng tuần | 🟢 Thấp | Không liên kết được hiệu suất sales theo nhân sự |
| OKR Tool | Objective, Key Result, Progress, Owner | OKR tool (Weekdone/Lattice/tùy chỉnh) | All departments | Hàng tuần | 🟢 Thấp | Không hiển thị được tiến độ OKR cạnh KPI dashboard |

---

### 7.2 Điều kiện tiên quyết — Single Source of Truth (SSOT)

**SSOT cho Yến Việt được định nghĩa là:** Mọi chỉ số tài chính và kinh doanh đều phải có một và chỉ một nguồn dữ liệu gốc đã được đội Finance xác nhận. Mọi dashboard chỉ đọc từ Data Warehouse — không đọc trực tiếp từ hệ thống nguồn.

**Các bước thiết lập data pipeline:**
1. Kiểm toán dữ liệu hiện có — xác định hệ thống nào đã có, chất lượng thế nào
2. Thiết lập ETL jobs tự động từ từng hệ thống nguồn vào Data Warehouse (BigQuery/Snowflake)
3. Định nghĩa data dictionary — thống nhất cách tính từng chỉ số (ví dụ: Net Revenue có bao gồm VAT không? COGS có bao gồm chi phí sàn không?)
4. Kiểm tra cross-validation: Revenue từ ERP vs Revenue từ Kế toán phải khớp ±0,1%
5. Thiết lập data freshness monitoring — alert khi data trễ > 2 giờ so với SLA

**Data Quality KPI:**
- % dữ liệu đầy đủ (completeness): ≥ 98%
- Độ trễ cập nhật (latency): ERP ≤ 24h; TMĐT ≤ 4h; WMS ≤ 24h
- Tỷ lệ lỗi (error rate): < 0,5% record lỗi trên tổng record

**Phân quyền truy cập dữ liệu:**
- Layer 1: CEO, CFO, Board — read-only, không export
- Layer 2: C-level theo phòng ban — read-only theo nhóm chức năng
- Layer 3: Ops/QA/Ecom managers — read-only theo scope
- Layer 4: Data team — read/write cho modeling
- Admin: IT only — full access

---

### 7.3 Kiến trúc kỹ thuật đề xuất

```
DATA SOURCES                ETL/PIPELINE           DATA WAREHOUSE        BI LAYER          DASHBOARD
──────────────              ────────────           ──────────────        ────────          ─────────
ERP/OMS          ──────┐
POS (80+ stores) ──────┤
WMS (3 kho)      ──────┤
Kế toán          ──────┼──► Apache Airflow ──────► BigQuery / ─────────► dbt (transform) ──► Looker Studio /
CRM/CDP          ──────┤    hoặc Fivetran          Snowflake             (data models,        Power BI /
Shopee API       ──────┤    (managed ETL)          (Data Warehouse)      metrics layer)       Metabase
TikTok API       ──────┤
GA4              ──────┤                           Data Quality          Semantic Layer    CEO Dashboard
Ads Platforms    ──────┘                           Monitoring            (business rules)  (Layer 1–4)
                                                   (Great Expectations)
```

---

## 8. QUY TẮC RAG — NGƯỠNG CẢNH BÁO

### 8.1 Định nghĩa màu

| Màu | Trạng thái | Hành động mặc định |
|-----|------------|-------------------|
| 🟢 **XANH** — Đạt/Tốt | KPI đạt hoặc vượt ngưỡng kỳ vọng | Duy trì — không cần can thiệp đặc biệt |
| 🟡 **VÀNG** — Cần theo dõi | KPI chưa nguy hiểm nhưng đang đi sai hướng | Review nguyên nhân trong 48h, lên kế hoạch điều chỉnh |
| 🔴 **ĐỎ** — Nguy hiểm | KPI vi phạm ngưỡng tối thiểu có thể chấp nhận | Escalate lên CEO/CFO ngay trong ngày, họp khẩn nếu cần |

---

### 8.2 Bảng ngưỡng chi tiết toàn bộ KPI

| KPI | 🟢 Xanh | 🟡 Vàng | 🔴 Đỏ | Ghi chú đặc thù Yến Việt |
|-----|---------|---------|------|--------------------------|
| Net Revenue (tháng) | ≥ 25 tỷ VNĐ | 20–25 tỷ | < 20 tỷ | Điều chỉnh ngưỡng theo mùa: Tết tháng 1–2 target x2 |
| Revenue Growth YoY | ≥ +15% | +5–15% | < +5% hoặc âm | Ngành yến Việt Nam tăng trưởng ~15–20%/năm — dưới mức này là mất thị phần |
| Gross Margin % | ≥ 48% | 45–48% | < 45% | Khi giá yến thô tăng >15%, margin có thể sụt 3–5 điểm % chỉ trong 1 tháng |
| EBITDA Margin % | ≥ 18% | 12–18% | < 12% | Benchmark FMCG Việt Nam: 10–15%; Yến sào premium có thể đạt 18–22% |
| Inventory Days (DIO) | 30–45 ngày | 45–60 ngày | > 60 ngày hoặc < 20 ngày | DIO < 20 ngày = nguy cơ thiếu hàng mùa cao điểm |
| OTIF Rate | ≥ 95% | 90–95% | < 90% | AEON/Co.op phạt nặng nếu OTIF < 95% — risk listing bị rút |
| Market Coverage | ≥ 85% | 70–85% | < 70% | Đo trên tổng điểm bán mục tiêu, không phải 63 tỉnh/thành |
| Top 10 SKU Contribution | 60–75% | 75–85% | > 85% (tập trung) hoặc < 55% | > 85% nghĩa là 1 SKU có vấn đề = ảnh hưởng toàn bộ công ty |
| Cash Conversion Cycle (CCC) | ≤ 35 ngày | 35–55 ngày | > 55 ngày | Giá yến thô cao + CCC dài = áp lực vốn lưu động cực lớn |
| Channel Mix — kênh lớn nhất | Không kênh > 45% | 1 kênh 45–60% | 1 kênh > 60% | Phụ thuộc 1 kênh = rủi ro tập trung; TMĐT margin thấp = nguy hiểm |
| Chi phí sàn TMĐT % DT kênh | < 40% | 40–45% | > 45% | Shopee 39,5% đã là ngưỡng vàng — cần monitor liên tục |
| Net Margin after Channel Cost | ≥ 20% | 10–20% | < 10% | Thực tế biên sau chi phí sàn có thể < 5% nếu không quản lý |
| Cash Flow 13 tuần (cuối kỳ) | ≥ 5 tỷ VNĐ | 2–5 tỷ | < 2 tỷ | Cần thanh toán yến thô nhanh (thường tiền mặt) |
| AR Aging > 90 ngày / Total AR | < 5% | 5–10% | > 10% | Đại lý ôm hàng không trả = rủi ro nợ xấu cao |
| Slow-moving SKU (> 60 ngày) | 0 SKU | 1–3 SKU | > 3 SKU | Hàng yến cận date không bán được = hủy bỏ, lỗ trực tiếp |
| Near-expiry Inventory % | < 2% tổng kho | 2–5% | > 5% | ⚠️ Ngưỡng đặc thù ngành yến: > 5% = alert đỏ ngay |
| Defect Rate by Production Batch | < 0,5% | 0,5–1,5% | > 1,5% | FDA/HACCP yêu cầu 0 tolerance với một số lỗi; track theo lô |
| Complaint Rate / 1.000 đơn | < 1 | 1–3 | > 3 | Khiếu nại về yến giả/chất lượng tăng viral rất nhanh trên MXH |
| NPS Score | ≥ 50 | 30–50 | < 30 | Benchmark thực phẩm cao cấp: 40–60; < 30 là tín hiệu rất xấu |
| CSAT (% hài lòng 4–5 sao) | ≥ 90% | 80–90% | < 80% | Rating TMĐT trực tiếp ảnh hưởng conversion rate kênh |
| CAC:CLV Ratio | CLV ≥ 4× CAC | CLV 2–4× CAC | CLV < 2× CAC | Ngành thực phẩm cao cấp có thể đạt CLV:CAC = 5:1 nếu loyalty tốt |
| Return Rate theo kênh | < 3% | 3–6% | > 6% | TMĐT return rate cao = chi phí sàn tăng + biên giảm kép |
| Capacity Utilization nhà máy | 75–85% | 60–75% hoặc 85–90% | < 60% hoặc > 90% | > 90% kéo dài = nguy cơ sự cố, không đảm bảo chứng nhận |
| Raw Material Inventory (ngày) | 30–45 ngày | 15–30 ngày | < 15 ngày | Đứt nguồn yến thô = dừng sản xuất ngay vì không có nguyên liệu thay thế |
| DIFOT Rate | ≥ 95% | 90–95% | < 90% | Phân biệt OTIF (cam kết) với DIFOT (thực tế nhận hàng tại điểm đến) |
| Brand Counterfeiting Incidents | 0 vụ | NA | ≥ 1 vụ bất kỳ | 🚨 **Alert đỏ ngay lập tức** — Zero tolerance với hàng giả |
| Giá yến thô tăng MoM | ≤ 5% | 5–15% | > 15% MoM | 🚨 Ngưỡng đặc thù: > 15%/tháng → review giá bán và margin ngay |
| Rating SKU TMĐT (trung bình) | ≥ 4,5 sao | 4,0–4,5 sao | < 4,0 sao | Shopee: rating < 4,0 với nhiều đánh giá → sàn giảm hiển thị tự động |
| Conversion Rate TMĐT | ≥ 3% | 1,5–3% | < 1,5% | Trung bình ngành FMCG trên Shopee: 2–4%; yến sào premium có thể thấp hơn |
| New Product Adoption Rate | ≥ 8% | 3–8% | < 3% | Đổi mới quá chậm = mất cơ hội và mất đà tăng trưởng |
| Production Output vs KH | ≥ 95% | 85–95% | < 85% | Dưới 85% 2 tuần liên tiếp = nguy cơ không đủ hàng mùa cao điểm |

---

## 9. PHÂN QUYỀN XEM DASHBOARD

| Role | Layer 1 | Layer 2A (Tài chính) | Layer 2B (Bán hàng) | Layer 2C (Kênh/TMĐT) | Layer 2D (KH) | Layer 2E (SKU) | Layer 2F (Vận hành) | Layer 3 | Layer 4 | Export | Ghi chú |
|------|---------|---------------------|--------------------|--------------------|--------------|----------------|--------------------|---------|---------|----|-------|
| **CEO** | ✅ Full | ✅ Summary | ✅ Summary | ✅ Summary | ✅ Summary | ✅ Summary | ✅ Summary | ⚠️ Alert only | ✅ Full | PDF + Excel | Xem tất cả, export báo cáo tháng |
| **CFO** | ✅ Full | ✅ Full | ⬜ No | ⬜ No | ⬜ No | ✅ Margin only | ⬜ No | ⚠️ Financial alert | ✅ Financial | Excel | Focus tài chính và dòng tiền |
| **CMO** | ✅ View | ⬜ No | ✅ Full | ✅ Full | ✅ Full | ✅ Full | ⬜ No | ⚠️ Brand alert | ✅ Marketing | Excel | Toàn bộ dữ liệu marketing, kênh, KH |
| **Sales Director** | ✅ View | ⬜ No | ✅ Full | ✅ Full | ⚠️ Basic | ✅ Revenue only | ⬜ No | ⚠️ Sales alert | ⬜ No | Excel | Tập trung bán hàng và kênh |
| **Ops Director** | ✅ View | ⬜ No | ⬜ No | ⬜ No | ⬜ No | ✅ Stock only | ✅ Full | ✅ Full | ⬜ No | PDF | Vận hành và kho toàn bộ |
| **QA Manager** | ⬜ No | ⬜ No | ⬜ No | ⬜ No | ⬜ No | ⬜ No | ✅ QA only | ✅ QA + Expiry | ⬜ No | PDF | Chỉ dữ liệu chất lượng và tuân thủ |
| **Ecom Manager** | ✅ View | ⬜ No | ✅ Ecom | ✅ Full | ✅ Ecom | ✅ SKU TMĐT | ⬜ No | ⚠️ Ecom alert | ⬜ No | Excel | Toàn bộ TMĐT; không xem financial |
| **IT Admin** | ✅ Full | ✅ Full | ✅ Full | ✅ Full | ✅ Full | ✅ Full | ✅ Full | ✅ Full | ✅ Full | All | Admin system — không phải business user |

---

## 10. CÂU HỎI PHỎNG VẤN STAKEHOLDER

*Mục đích: Thu thập yêu cầu, xác nhận data, và đảm bảo dashboard phản ánh đúng cách CEO và các lãnh đạo ra quyết định thực tế.*

### 10.1 CEO

1. Sáng nay khi nhìn vào điện thoại, điều đầu tiên bạn muốn biết về công ty là gì?
2. Quyết định nào trong 6 tháng qua bạn cảm thấy thiếu dữ liệu để ra quyết định kịp thời?
3. Rủi ro nào khiến bạn lo ngại nhất — hàng giả, giá nguyên liệu, hay chi phí TMĐT?
4. Khi nào thì một vấn đề cần được escalate lên bạn? Ngưỡng nào là "đủ nguy hiểm để báo CEO ngay"?
5. Dashboard lý tưởng của bạn trông như thế nào — bạn mong muốn nhìn thấy gì trên màn hình đầu tiên?

### 10.2 CFO / Tài Chính

1. Hiện tại bạn mất bao lâu để có được báo cáo P&L tháng? Bao nhiêu ngày sau khi tháng kết thúc?
2. Chi phí sàn TMĐT hiện đang được hạch toán vào đâu trong P&L? COGS hay OPEX? Có ảnh hưởng đến cách tính Gross Margin không?
3. Dự báo cash flow hiện được làm bằng công cụ gì và tần suất ra sao? Có thể tự động hóa không?
4. Danh sách nợ xấu đại lý cập nhật bao lâu một lần? Ngưỡng nào thì tạm dừng cấp hàng?
5. Khi giá yến thô tăng đột biến, quy trình review giá bán hiện tại mất bao lâu từ phát hiện đến thực thi?

### 10.3 Sales Director

1. Làm thế nào bạn biết được đại lý nào đang bán thực sự (sell-out) và đại lý nào chỉ nhận hàng về kho (sell-in)?
2. Hệ thống SFA/CRM hiện tại của team sales là gì? Data nhập tay hay tự động?
3. Kênh B2B (quà biếu doanh nghiệp) hiện chiếm bao nhiêu % doanh thu và tracking như thế nào?
4. Xung đột giá giữa cửa hàng offline, siêu thị và TMĐT xảy ra thường xuyên không? Quy trình xử lý hiện tại là gì?
5. Peak season (Tết/Trung Thu) team chuẩn bị từ bao giờ? Dữ liệu từ năm trước có được lưu trữ để tham chiếu không?

### 10.4 Marketing / Ecommerce

1. ROAS (Return on Ad Spend) hiện được đo riêng cho từng sàn Shopee, TikTok, Lazada không? Công cụ nào đang dùng?
2. Chi phí KOL/KOC được hạch toán như thế nào? Có đo được conversion trực tiếp không?
3. Livestream được tổ chức bao nhiêu phiên/tuần? GMV từ livestream chiếm bao nhiêu % TMĐT tổng thể?
4. Dữ liệu khách hàng từ TMĐT có được kéo về CRM để đo retention không? Hay đang tồn tại rời rạc trên từng sàn?
5. Phát hiện listing hàng giả trên sàn TMĐT hiện được làm theo quy trình thủ công hay có tool hỗ trợ?

### 10.5 Vận Hành / QA

1. Hệ thống WMS hiện tại có theo dõi ngày hết hạn (expiry date) theo từng lô hàng không?
2. Tỷ lệ defect rate hiện đang ở mức nào? Dữ liệu có được ghi nhận theo lô sản xuất không?
3. Khi phát hiện lô hàng lỗi sau khi đã xuất kho, quy trình thu hồi mất bao lâu và tracking như thế nào?
4. Chứng nhận HACCP/ISO/FDA tái chứng nhận định kỳ bao lâu? Ai theo dõi và báo cáo trạng thái?
5. Nhà máy Phan Rang hiện có hệ thống MES (Manufacturing Execution System) hay chỉ theo dõi sản lượng thủ công?

### 10.6 IT / Data

1. Hiện tại dữ liệu từ các hệ thống (ERP, POS, WMS, TMĐT) có được tổng hợp vào một chỗ không hay đang nằm rải rác?
2. ERP đang dùng là phần mềm gì (SAP / Odoo / MISA / tự phát triển)? Có API xuất dữ liệu không?
3. Dữ liệu từ Shopee Seller Center có đang được download thủ công hay đã có kết nối API tự động?
4. Đội IT có bao nhiêu người có thể hỗ trợ data pipeline và dashboard? Năng lực SQL/Python ở mức nào?
5. Có backup và data governance policy rõ ràng không? Dữ liệu lịch sử được lưu bao xa (bao nhiêu năm)?

---

## 11. LỘ TRÌNH TRIỂN KHAI

### Phase 1 — MVP Dashboard (Tháng 1–3)

*Ưu tiên: Dữ liệu có thể thu thập ngay + Tác động quyết định CEO cao nhất + Rủi ro khi thiếu lớn nhất*

| STT | Dashboard | Lý do ưu tiên | Điều kiện cần | KPI Owner | Thời gian |
|-----|-----------|--------------|--------------|-----------|-----------|
| 1 | CEO One-Page (Layer 1 — 10 KPI) | Trả lời câu hỏi sáng hàng ngày của CEO; nền tảng mọi layer khác | ERP + WMS + OMS kết nối | CFO + CEO | Tuần 1–4 |
| 2 | Revenue & P&L Dashboard | Kiểm soát gross margin và phát hiện sớm ảnh hưởng giá yến thô | ERP + Kế toán sync | CFO | Tuần 2–5 |
| 3 | Inventory & Near-expiry Alert | Rủi ro hủy hàng cận date = lỗ trực tiếp; stockout = mất doanh thu mùa cao điểm | WMS với expiry date tracking | Ops Director | Tuần 3–6 |
| 4 | TMĐT Channel Dashboard (Shopee/TikTok) | Chi phí sàn 39–46% cần monitor hàng ngày; GMV và margin theo kênh | Seller Center API integration | Ecom Manager | Tuần 4–7 |
| 5 | Sales Performance by Region & Agent | Sales Director cần daily view để coaching team và theo dõi top 20 đại lý | OMS + SFA integration | Sales Director | Tuần 5–8 |
| 6 | Brand Counterfeiting Alert | Zero tolerance — 1 vụ không phát hiện kịp = rủi ro thương hiệu lớn | TMĐT monitoring tool + manual input | Legal + CMO | Tuần 6–8 |
| 7 | Cash Flow 13 tuần | Dự báo dòng tiền để hoạch định mua yến thô (giá cao, cần tiền mặt) | Kế toán + ERP AP/AR | CFO | Tuần 7–10 |
| 8 | OTIF & Logistics Dashboard | Siêu thị partner yêu cầu OTIF ≥ 95%; vi phạm có thể bị rút listing | WMS + OMS + 3PL data | Ops Director | Tuần 8–10 |
| 9 | QA & Certificate Status Dashboard | Chứng nhận FDA/HACCP/ISO là lợi thế cạnh tranh — cần giám sát liên tục | QA system digital | QA Manager | Tuần 9–11 |
| 10 | SKU Performance & Slow-moving Alert | Xác định SKU cần đẩy mạnh và SKU cần xử lý trước khi thành hàng lỗi | OMS + WMS + ERP cost | CMO | Tuần 10–12 |

---

### Phase 2 — Mở Rộng (Tháng 4–9)

| STT | Dashboard | Lý do ưu tiên | Điều kiện cần | KPI Owner | Thời gian |
|-----|-----------|--------------|--------------|-----------|-----------|
| 1 | Customer Retention & RFM | Tăng CLV là đòn bẩy tăng trưởng bền vững — cần CRM đủ dữ liệu | CRM tích hợp TMĐT + Offline POS | CMO | Tháng 4–5 |
| 2 | Marketing ROI & ROAS by Channel | Phân bổ ngân sách marketing hiệu quả — tránh đốt tiền vào kênh kém hiệu quả | Ads API + CRM + UTM tracking | CMO | Tháng 4–6 |
| 3 | Price Conflict Monitoring | Xung đột giá kênh xảy ra thường xuyên — cần tự động hóa phát hiện | Price monitoring API hoặc tool | CMO + Sales | Tháng 5–6 |
| 4 | Raw Material & Production Planning | Giá yến thô biến động mạnh — cần forecast để đặt hàng NVL đúng thời điểm | MES + Supplier data | Ops Director | Tháng 6–7 |
| 5 | Peak Season Command Center | Tết/Trung Thu chiếm 40–50% doanh thu năm — cần dashboard riêng tracking real-time | All data sources integrated | CEO | Tháng 7–8 |
| 6 | Export Market Dashboard (JP/AU/CN) | Xuất khẩu có margin và payment terms khác hẳn nội địa — cần view riêng | ERP xuất khẩu tách riêng | Sales Director | Tháng 8–9 |

---

### Phase 3 — AI & Predictive (Tháng 10–18)

| STT | Dashboard / Phân tích | Lý do ưu tiên | Điều kiện cần | KPI Owner | Thời gian |
|-----|-----------------------|--------------|--------------|-----------|-----------|
| 1 | Revenue Forecast 90 ngày | Hoạch định sản xuất và tài chính dài hạn | ≥ 24 tháng data sạch | CFO + CEO | Tháng 10–12 |
| 2 | Demand Forecast per SKU | Tối ưu sản xuất và tồn kho; tránh overstock/stockout | ≥ 18 tháng data SKU | Ops Director | Tháng 10–12 |
| 3 | What-if Scenario Simulator | Thử nghiệm "nếu giá yến thô tăng 20% thì P&L thay đổi thế nào?" | Financial model chuẩn hóa | CFO | Tháng 11–13 |
| 4 | Churn Prediction Model | Ưu tiên giữ khách hàng cao giá trị — giảm chi phí acquisition | CRM ≥ 12 tháng + ML readiness | CMO | Tháng 13–15 |
| 5 | Anomaly Detection tự động | Alert thông minh thay thế manual monitoring — giảm tải cho ops team | Streaming pipeline + baseline | IT + Ops | Tháng 14–16 |
| 6 | Predictive Pricing Engine | Tối ưu giá theo mùa vụ và cạnh tranh | Price history + elasticity data | CMO + CFO | Tháng 16–18 |

---

## 12. RỦI RO ĐẶC THÙ NGÀNH YẾN SÀO

> ⚠️ *Yến Việt hoạt động trong môi trường rủi ro cao — cần dashboard cảnh báo sớm cho CEO*

| Loại rủi ro | Mô tả | Chỉ số giám sát | Ngưỡng cảnh báo | Hành động đề xuất | Tần suất |
|------------|-------|----------------|----------------|-------------------|----------|
| 🚨 **1. Hàng giả & làm nhái thương hiệu** | Sản phẩm giả Yến Việt lưu thông trên thị trường và TMĐT — tháng 5/2026: 400.000+ sản phẩm giả bị khởi tố | Brand Counterfeiting Incidents; Customer complaints về chất lượng | ≥ 1 vụ bất kỳ = alert đỏ ngay | Báo cáo lên sàn TMĐT; phối hợp công an; thông cáo báo chí; tăng cường QR code xác thực | Hàng ngày |
| 💰 **2. Biến động giá nguyên liệu yến thô** | Giá yến thô 12–25 triệu/kg, biến động theo mùa và cung cầu thị trường Trung Quốc | Giá mua yến thô MoM (%); Raw material cost % COGS | Tăng > 15% MoM = alert đỏ; 5–15% = vàng | Review giá bán ngay; đàm phán với nhà cung cấp; đánh giá tăng giá bán thị trường | Hàng tuần |
| 📦 **3. Hàng cận date & hủy hàng** | Sản phẩm yến sào có hạn dùng 12–24 tháng — nếu tồn kho chậm có thể cận date và phải hủy | Near-expiry % tổng kho (< 30/60 ngày); Inventory Days by SKU | Near-expiry > 5% tổng kho = đỏ; > 2% = vàng | Kích hoạt khuyến mãi; ưu tiên xuất hàng cận date trước; xem xét thanh lý | Hàng ngày |
| 🛒 **4. Chi phí sàn TMĐT ăn biên lợi nhuận** | Shopee 39,5% / TikTok 45,6% — chưa tính phí logistics, KOL, quảng cáo trong sàn | Chi phí sàn % doanh thu kênh; Net Margin after Channel Cost | > 45% chi phí sàn / DT kênh = đỏ; > 40% = vàng | Đàm phán lại hợp đồng sàn; tối ưu SKU mix; tăng tỷ trọng kênh có margin cao hơn | Hàng tuần |
| ⚖️ **5. Xung đột giá giữa các kênh** | Cùng 1 SKU có giá khác nhau trên Shopee, TikTok, cửa hàng, siêu thị — đại lý phản ứng mạnh | Price Conflict % chênh lệch cùng SKU cùng thời điểm | Chênh lệch > 10% = đỏ; 5–10% = vàng | Cảnh báo kênh vi phạm; review chính sách giá toàn kênh; enforce price floor | Hàng ngày |
| ⚙️ **6. Rủi ro chất lượng & an toàn thực phẩm** | Sự cố chất lượng (dị vật, nhiễm khuẩn, sai nhãn mác) có thể dẫn đến thu hồi sản phẩm toàn quốc | Defect rate by batch; Complaint rate; Lab test fail | Defect > 1,5% bất kỳ lô nào = đỏ ngay; Complaint > 3/1.000 = đỏ | Giữ lô hàng; điều tra nguyên nhân; thông báo QA/Ops; cân nhắc voluntary recall | Mỗi lô sản xuất |
| ⚖️ **7. Rủi ro pháp lý quảng cáo TPCN** | Quảng cáo sai về công dụng sức khỏe của yến sào có thể bị Cục ATTP xử phạt hoặc cấm | Số lần cảnh báo từ cơ quan quản lý; Số content quảng cáo bị gỡ | Bất kỳ 1 cảnh báo chính thức nào = đỏ | Review toàn bộ content marketing; phối hợp Legal; tạm dừng các claim chưa có bằng chứng | Hàng tháng |
| 🔗 **8. Rủi ro tập trung kênh** | Nếu 1 kênh chiếm > 60% doanh thu, bất kỳ thay đổi chính sách của kênh đó sẽ ảnh hưởng nghiêm trọng | Channel Revenue Mix; GMV từng kênh % tổng | 1 kênh > 60% total = đỏ; > 45% = vàng | Tích cực phát triển kênh thứ 2 và thứ 3; đàm phán exclusive deal để giảm phụ thuộc | Hàng tháng |
| 💵 **9. Rủi ro dòng tiền & công nợ đại lý** | Đại lý nợ tiền hàng kéo dài + giá yến thô cao = áp lực vốn lưu động cực lớn | AR Aging > 60/90 ngày; Cash Flow 13 tuần | AR > 90 ngày vượt 10% tổng AR = đỏ; Dòng tiền < 2 tỷ = đỏ | Tạm dừng cấp hàng đại lý vi phạm; đàm phán cấu trúc lại nợ; xem xét factoring | Hàng tuần |
| 📱 **10. Rủi ro danh tiếng thương hiệu trên MXH** | 1 video viral về hàng giả hoặc vấn đề chất lượng có thể xóa sạch uy tín thương hiệu trong 24h | Social mention sentiment; Negative review volume; Share of Voice | Sentiment âm vượt 20% mentions trong ngày = đỏ | Kích hoạt crisis communication plan; CEO statement; phối hợp KOL để phản bác thông tin sai | Hàng ngày |

---

## 13. GLOSSARY — THUẬT NGỮ

**OTIF** (On Time In Full): Chỉ số giao hàng đúng ngày và đủ số lượng. *Ví dụ Yến Việt: AEON yêu cầu OTIF ≥ 95% — nếu không đạt có thể bị phạt và rút listing.*

**DIFOT** (Delivered In Full On Time): Tương tự OTIF nhưng đo tại điểm nhận hàng thực tế, không phải ngày xuất kho. *Ví dụ Yến Việt: Giao từ nhà máy Phan Rang đến kho Co.opmart HCM — DIFOT tính khi hàng đến kho Co.op, không phải khi xe xuất cổng nhà máy.*

**Sell-in**: Doanh thu từ nhà sản xuất/phân phối bán vào kênh trung gian (đại lý, siêu thị). *Ví dụ Yến Việt: Yến Việt xuất 10.000 hộp nước yến cho đại lý = sell-in 10.000 hộp.*

**Sell-out**: Sản phẩm thực tế được người tiêu dùng cuối mua tại điểm bán. *Ví dụ Yến Việt: Đại lý bán được 8.000/10.000 hộp cho khách lẻ = sell-out 8.000 hộp; 2.000 hộp còn nằm trong kho đại lý.*

**SKU** (Stock Keeping Unit): Mã sản phẩm đơn lẻ, mỗi biến thể (size, loại) là 1 SKU riêng. *Ví dụ Yến Việt: Nước yến lon 70g = 1 SKU; Nước yến lon 180g = SKU khác; Hộp quà 6 lon = SKU khác nữa.*

**Hero SKU**: SKU bán chạy nhất, đóng góp phần lớn doanh thu. *Ví dụ Yến Việt: Nước yến chưng sẵn hũ thủy tinh 70ml là hero SKU nếu chiếm > 25% tổng doanh thu.*

**Slow-moving SKU**: SKU không bán được trong thời gian dài (thường > 60 ngày). *Ví dụ Yến Việt: Combo đông trùng hạ thảo VietFuji tồn kho 75 ngày chưa bán = slow-moving.*

**Near-expiry**: Hàng hóa sắp hết hạn sử dụng. *Ví dụ Yến Việt: Lô nước yến hộp còn 25 ngày đến ngày hết hạn = near-expiry, cần ưu tiên xuất trước.*

**CCC** (Cash Conversion Cycle — Vòng quay tiền mặt): Số ngày từ khi bỏ tiền mua nguyên liệu đến khi thu được tiền từ khách hàng. CCC = DIO + DSO − DPO. *Ví dụ Yến Việt: DIO 40 ngày + DSO 30 ngày − DPO 20 ngày = CCC 50 ngày.*

**DIO** (Days Inventory Outstanding — Số ngày tồn kho): Số ngày trung bình hàng nằm trong kho. *Ví dụ Yến Việt: Tổ yến nguyên chất DIO thường 45–60 ngày vì giá cao, bán chậm hơn nước yến lon.*

**DSO** (Days Sales Outstanding — Số ngày thu tiền): Số ngày trung bình để thu được tiền từ khách hàng sau khi giao hàng. *Ví dụ Yến Việt: Đại lý thường được 30 ngày credit — DSO mục tiêu ≤ 35 ngày.*

**DPO** (Days Payable Outstanding — Số ngày trả tiền): Số ngày trung bình công ty trả tiền cho nhà cung cấp. *Ví dụ Yến Việt: Nhà cung cấp yến thô thường yêu cầu thanh toán ngay hoặc trong 15 ngày — DPO ngắn làm CCC dài.*

**CAC** (Customer Acquisition Cost — Chi phí thu hút khách hàng mới): Tổng chi phí marketing và bán hàng để có 1 khách hàng mới. *Ví dụ Yến Việt: Nếu chi 100 triệu quảng cáo Shopee và có 500 khách mới = CAC 200.000 VNĐ/khách.*

**CLV / LTV** (Customer Lifetime Value — Giá trị vòng đời khách hàng): Tổng doanh thu dự kiến từ 1 khách hàng trong suốt thời gian là khách của công ty. *Ví dụ Yến Việt: Khách mua nước yến 2 thùng/tháng × 24 tháng × 250.000 VNĐ/thùng = CLV 12 triệu VNĐ.*

**RFM** (Recency, Frequency, Monetary): Phương pháp phân khúc khách hàng theo 3 chiều: Gần nhất mua khi nào, mua bao nhiêu lần, chi bao nhiêu tiền. *Ví dụ Yến Việt: Khách mua tuần trước (R=cao), mua 10 lần/năm (F=cao), chi 5 triệu/lần (M=cao) = Champion segment.*

**Cohort**: Nhóm khách hàng được tập hợp theo cùng một đặc điểm (ví dụ: cùng tháng mua lần đầu). *Ví dụ Yến Việt: Cohort tháng 1/2026 = tất cả khách lần đầu mua trong tháng 1; theo dõi xem tháng 4 còn bao nhiêu % còn mua.*

**NPS** (Net Promoter Score): Điểm đo mức độ khách hàng sẵn sàng giới thiệu sản phẩm cho người khác (thang -100 đến +100). *Ví dụ Yến Việt: 60% promoters − 10% detractors = NPS 50 (tốt cho ngành FMCG).*

**CSAT** (Customer Satisfaction Score): Tỷ lệ % khách hàng đánh giá hài lòng (4–5 sao). *Ví dụ Yến Việt: Trên Shopee, 92% đánh giá 5 sao cho Nước Yến Nest IQ = CSAT 92%.*

**ROAS** (Return on Ad Spend): Doanh thu sinh ra từ mỗi đồng quảng cáo. ROAS = Revenue / Ad Spend. *Ví dụ Yến Việt: Chi 50 triệu quảng cáo TikTok Ads, thu 150 triệu GMV = ROAS 3x.*

**GMV** (Gross Merchandise Value): Tổng giá trị hàng hóa giao dịch trên sàn, trước khi trừ hoàn hàng và phí. *Ví dụ Yến Việt: GMV Shopee tháng 5 = 2 tỷ nhưng sau hoàn hàng 8% và phí sàn 39,5% thì doanh thu thực = 2 tỷ × (1−8%) × (1−39,5%) ≈ 1,1 tỷ.*

**AOV** (Average Order Value): Giá trị trung bình mỗi đơn hàng. *Ví dụ Yến Việt: TMĐT AOV 450.000 VNĐ; Offline store AOV 1.200.000 VNĐ; B2B gift AOV 5.000.000 VNĐ.*

**Conversion Rate**: Tỷ lệ % người xem → mua hàng thành công. *Ví dụ Yến Việt: 10.000 lượt xem listing Shopee, 250 đơn = Conversion Rate 2,5%.*

**Return Rate**: Tỷ lệ % đơn hàng bị hoàn trả. *Ví dụ Yến Việt: Return rate TikTok 4,5% nghĩa là cứ 100 đơn thì 4–5 đơn bị trả lại — ảnh hưởng lớn đến chi phí thực tế.*

**Gross Margin**: Biên lợi nhuận gộp = (Doanh thu − Giá vốn) / Doanh thu × 100. *Ví dụ Yến Việt: Nước yến chưng sẵn giá bán 250.000 VNĐ, giá vốn 130.000 VNĐ = Gross Margin 48%.*

**EBITDA**: Thu nhập trước lãi vay, thuế, khấu hao — đo hiệu quả vận hành thuần túy. *Ví dụ Yến Việt: Net Revenue 25 tỷ − COGS 13 tỷ − OPEX 7,5 tỷ = EBITDA 4,5 tỷ (18% margin).*

**North Star Metric**: Chỉ số duy nhất quan trọng nhất phản ánh giá trị cốt lõi công ty tạo ra. *Ví dụ Yến Việt: "Profitable Revenue Growth" — vừa tăng doanh thu vừa giữ biên lợi nhuận bền vững.*

**RAG** (Red Amber Green): Hệ thống màu cảnh báo: Đỏ = nguy hiểm, Vàng = theo dõi, Xanh = tốt. *Ví dụ Yến Việt: Gross Margin 46% = Vàng (cần theo dõi vì đang tiến về ngưỡng đỏ < 45%).*

**SSOT** (Single Source of Truth): Một nguồn dữ liệu duy nhất được tất cả đồng thuận là chính xác. *Ví dụ Yến Việt: Revenue từ ERP Kế toán là SSOT — không dùng số từ Excel riêng lẻ của từng phòng ban.*

**ETL** (Extract, Transform, Load): Quy trình trích xuất dữ liệu từ nguồn, biến đổi theo chuẩn, nạp vào Data Warehouse. *Ví dụ Yến Việt: Kéo dữ liệu từ Shopee Seller Center → làm sạch → đưa vào BigQuery.*

**CDP** (Customer Data Platform): Nền tảng tập trung dữ liệu khách hàng từ nhiều điểm tiếp xúc. *Ví dụ Yến Việt: CDP tích hợp dữ liệu khách hàng từ POS offline + Shopee + TikTok + yenvietmall.com vào một profile.*

**MoM** (Month over Month): So sánh tháng này vs tháng trước. *Ví dụ Yến Việt: Doanh thu tháng 6 là 26 tỷ, tháng 5 là 24 tỷ → MoM +8,3%.*

**YoY** (Year over Year): So sánh cùng kỳ năm ngoái. *Ví dụ Yến Việt: Doanh thu tháng 6/2026 là 26 tỷ, tháng 6/2025 là 22 tỷ → YoY +18,2%.*

**YTD** (Year to Date): Lũy kế từ đầu năm đến nay. *Ví dụ Yến Việt: YTD tháng 6/2026 = tổng doanh thu từ 1/1 đến 30/6/2026.*

**QTD** (Quarter to Date): Lũy kế từ đầu quý. *Ví dụ Yến Việt: QTD Q2/2026 = tổng doanh thu từ 1/4 đến thời điểm hiện tại.*

**Off-take Velocity**: Tốc độ bán hàng tại điểm bán cuối (end consumer) — dùng phổ biến trong đo hiệu quả trong siêu thị. *Ví dụ Yến Việt: Nước yến lon bán 500 lon/tuần tại Co.opmart Quận 1 = off-take velocity 500 lon/tuần.*

**Same-store Growth**: Tăng trưởng doanh thu tại các cửa hàng đã mở ≥ 12 tháng — loại trừ cửa hàng mới để đo tăng trưởng thực. *Ví dụ Yến Việt: 70 cửa hàng mở > 12 tháng tăng trưởng +12% YoY = same-store growth 12%, dù tổng mạng lưới tăng do thêm 10 cửa hàng mới.*

**Brand Counterfeiting**: Làm giả, làm nhái sản phẩm và thương hiệu. *Ví dụ Yến Việt: Tháng 5/2026, cơ quan chức năng khởi tố vụ sản xuất và lưu thông 400.000+ sản phẩm giả nhãn hiệu Yến Việt.*

**Price Conflict** (Xung đột giá kênh): Cùng 1 SKU được bán với giá khác nhau trên các kênh khác nhau, gây bất bình đẳng và mâu thuẫn giữa đại lý. *Ví dụ Yến Việt: Hộp quà Tết giá 500.000 VNĐ tại cửa hàng nhưng chỉ 420.000 VNĐ trên TikTok Shop — đại lý offline phản ứng mạnh.*

---

## 14. PHỤ LỤC

### A. Mock Data Tham Chiếu

*Giá trị tham chiếu hợp lý dựa trên benchmark ngành yến sào Việt Nam 2025–2026:*

| KPI | Giá trị tham chiếu | Ghi chú |
|-----|--------------------|---------|
| Net Revenue (tháng bình thường) | 22–26 tỷ VNĐ | ~300 tỷ/năm ÷ 12 tháng |
| Net Revenue (tháng Tết/Trung Thu) | 45–55 tỷ VNĐ | Peak x2–2,5 lần tháng thường |
| Gross Margin % | 46–50% | Tùy SKU mix tháng |
| EBITDA Margin % | 15–20% | Sau toàn bộ OPEX |
| Inventory Days | 35–50 ngày | Biến động theo mùa |
| OTIF Rate | 93–96% | Target ≥ 95% |
| CCC | 40–55 ngày | Tùy điều khoản NCC và đại lý |
| CAC (kênh TMĐT) | 150.000–300.000 VNĐ | Tùy chiến dịch và mùa |
| CLV (khách hàng trung thành) | 3–8 triệu VNĐ | 18–24 tháng |
| NPS | 40–55 | Benchmark thực phẩm premium VN |
| Conversion Rate (Shopee) | 2–3,5% | Biến động theo giá và review |
| Return Rate (TMĐT) | 3–5% | Benchmark FMCG ngành ăn uống |
| Defect Rate | 0,3–0,8% | Nhà máy đạt chuẩn HACCP |
| GMV TMĐT / Total Revenue | 25–35% | Đang tăng dần theo xu hướng |
| Offline + Siêu thị / Total Revenue | 50–60% | Vẫn là kênh chủ đạo |
| Xuất khẩu / Total Revenue | 10–15% | Nhật Bản, Úc, Trung Quốc |

---

### B. Benchmark Ngành

| Chỉ số | Benchmark FMCG Việt Nam | Benchmark Yến Sào Việt Nam | Mục tiêu Yến Việt |
|--------|------------------------|--------------------------|-------------------|
| Gross Margin % | 30–45% | 40–55% | ≥ 48% |
| EBITDA Margin % | 8–15% | 15–22% | ≥ 18% |
| OTIF Rate | ≥ 95% | ≥ 93% | ≥ 95% |
| Inventory Days | 25–40 ngày | 35–55 ngày | 30–45 ngày |
| Retention Rate (M6) | 25–35% | 30–45% | ≥ 38% |
| CCC | 30–45 ngày | 40–60 ngày | ≤ 45 ngày |
| NPS | 30–45 | 40–55 | ≥ 50 |
| CAC:CLV Ratio | 1:3 đến 1:5 | 1:4 đến 1:7 | ≥ 1:4 |
| Return Rate (TMĐT) | 3–8% | 2–5% | < 4% |
| YoY Revenue Growth | 8–15% | 15–25% | ≥ 15% |

---

### C. Tài Liệu Tham Khảo

1. **Metric.vn** — Số liệu ngành FMCG Việt Nam, benchmark biên lợi nhuận
2. **VinaCapital VOF Annual Report** — Thông tin đầu tư và định giá ngành thực phẩm Việt Nam
3. **Cục Chăn Nuôi — Bộ NNPTNT** — Thống kê số lượng nhà yến, sản lượng yến thô quốc gia
4. **Nielsen Vietnam FMCG Report 2025** — Benchmark off-take velocity, shopper behavior
5. **Euromonitor Vietnam Packaged Food 2025** — Market size ngành yến sào Việt Nam
6. **Shopee Seller Center — Báo cáo phí nền tảng 2026** — Chi phí sàn 39,5% (công bố chính thức)
7. **TikTok Shop Vietnam — Commission Structure 2026** — Chi phí sàn 45,6%
8. **VOV / Báo Khánh Hòa** — Thông tin vụ khởi tố hàng giả Yến Việt tháng 5/2026
9. **ISO 22000:2018, HACCP CODEX 2020, FDA 21 CFR** — Tiêu chuẩn chất lượng nhà máy
10. **Gartner — Supply Chain Metrics That Matter** — Framework DIO, DSO, DPO, CCC
11. **McKinsey — Consumer Goods Analytics** — CLV, RFM, Churn prediction framework cho FMCG
12. **Google Analytics 4 Help Center** — Chuẩn đo conversion rate, attribution model

---

📅 **Ngày lập:** Tháng 6/2026
📝 **Phiên bản:** 1.0
🏢 **Công ty:** Công ty Cổ phần Yến Việt (YenViet PureNest)
⚡ **Trạng thái:** Draft — Chờ xác nhận từ stakeholder
🔄 **Cập nhật tiếp theo:** Sau phỏng vấn CEO & CFO
👤 **Người lập:** Chuyên gia tư vấn BI Dashboard — FMCG Việt Nam
