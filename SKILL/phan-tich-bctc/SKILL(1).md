---
name: phan-tich-bctc-prompt-1a
description: >
  Prompt phân tích BCTN/BCTC toàn diện (Prompt 1A) cho doanh nghiệp niêm yết
  tại Việt Nam (HOSE/HNX/UPCoM). Đây là SKILL độc lập — chỉ cần điền 4 ô
  [TÊN CÔNG TY / MÃ CK / NGÀNH / SÀN] và paste nội dung tài liệu là chạy
  được ngay. Bao gồm: Business & Structure, Đào số liệu, MD&A, Risk 3 lớp,
  So sánh tone qua năm, Câu hỏi phản biện, Limitations. Áp dụng cho mọi
  ngành: BĐS, ngân hàng, sản xuất, bán lẻ, công nghệ.
---

# SKILL: PROMPT 1A — PHÂN TÍCH BCTN/BCTC TOÀN DIỆN

## 1. MỤC ĐÍCH

SKILL này đóng gói **Prompt 1A (Claude Optimized)** — prompt phân tích định
tính + định lượng từ BCTN/BCTC của doanh nghiệp niêm yết Việt Nam thành một
câu lệnh sẵn sàng sử dụng.

**Khi nào dùng SKILL này:**
- Có ít nhất 1 file BCTN hoặc BCTC đã convert sang text (`.md`, `.txt`, hoặc
  paste trực tiếp)
- Muốn nhận output có cấu trúc đầy đủ 7 phần trong một lần chạy
- Muốn đảm bảo chất lượng output với bộ quy tắc R1–R6 nhúng sẵn

**SKILL liên quan:**
- `phan-tich-bctc-vn` (`SKILL.md`) — bộ SKILL đầy đủ gồm 4 prompt (1A, 1B,
  2B, MEMO) + checklist cross-check thủ công

---

## 2. CHUẨN BỊ TRƯỚC KHI CHẠY

### Tài liệu cần có
- BCTN (Báo cáo thường niên) — ưu tiên 2–3 năm gần nhất
- BCTC kiểm toán hợp nhất — nếu có (bổ sung số liệu bảng cân đối)
- Tùy chọn: Bản cáo bạch, Tài liệu ĐHCĐ, Công bố thông tin HOSE/HNX/UPCoM,
  tài liệu IR

### Convert PDF → text
Dùng Antigravity SKILL `pdf-to-md` nếu tài liệu ở dạng PDF:
- BCTN: mode `book` thường đủ (text layer tốt)
- BCTC kiểm toán: dùng `--mode finance` nếu file scan (bảng biểu bị lỗi)
- Kiểm tra: nếu file chỉ có `picture intentionally omitted` → cần OCR lại

### Điền thông tin công ty
Thay 4 ô `[...]` ở đầu prompt:
```
[TÊN CÔNG TY]  → ví dụ: Công ty CP Vinhomes
[MÃ CK]        → ví dụ: VHM
[NGÀNH]        → ví dụ: Bất động sản khu dân cư
[SÀN]          → HOSE / HNX / UPCoM
```

---

## 3. PROMPT 1A — SẴN SÀNG SỬ DỤNG

> **Cách dùng:** Copy toàn bộ block dưới đây. Điền 4 ô `[...]` ở đầu.
> Paste nội dung file tài liệu vào **sau** prompt. Gửi cho Claude Pro.

```
Bạn là senior financial analyst chuyên thị trường vốn Việt Nam.

Tôi paste tài liệu của [TÊN CÔNG TY] ([MÃ CK]) — [NGÀNH] niêm yết tại [SÀN]:
- Tài liệu 1: [TÊN TÀI LIỆU 1 + NĂM]
- Tài liệu 2: [TÊN TÀI LIỆU 2 + NĂM]
(Thêm dòng nếu có nhiều hơn 2 tài liệu)

Lưu ý nguồn tài liệu VN: nếu tôi cung cấp thêm Bản cáo bạch,
Tài liệu ĐHCĐ, Công bố thông tin HOSE/HNX/UPCoM, hoặc tài
liệu IR — hãy khai thác tất cả, không chỉ đọc BCTN.

══ QUY TẮC NỀN TẢNG ══

[R1] NGUỒN: Mọi nhận định định tính → ghi ngay sau câu đó:
     *(Tài liệu [tên] — [tên mục/phần] — trang [X] nếu có)*

[R2] INFERENCE: Khi diễn giải, suy luận, hoặc kết nối thông tin
     không được nêu tường minh trong tài liệu → gắn [INFERENCE]
     trước câu đó. Inference có giá trị — dùng chủ động nhưng
     phân biệt rõ với Fact.

[R3] THIẾU DỮ LIỆU: Nếu thông tin thực sự không có trong tài
     liệu → ghi "Không có trong tài liệu". Không đoán mò.

[R4] SỐ LIỆU: Khi trích số liệu, ghi đủ: năm + đơn vị + nguồn.
     Ghi rõ chuẩn kế toán đang dùng (VAS hay IFRS). Nếu tài
     liệu công bố cả 2 chuẩn → so sánh và gắn cờ ⚑ nếu chênh
     lệch đáng kể. Gắn cờ ⚑ nếu chỉ số bất thường so với chuẩn
     ngành hoặc lịch sử — giải thích cơ chế tài chính.

[R5] HALLUCINATE GUARD — chủ động tránh 3 lỗi phổ biến:
     (i)  Dịch sai ngôn ngữ pháp lý: "có thể xảy ra" ≠ "sẽ xảy
          ra" — giữ nguyên mức độ chắc chắn của tài liệu gốc.
     (ii) Nhầm đơn vị hoặc kỳ: phân biệt rõ triệu VND / tỷ VND
          / USD, và số liệu năm vs quý.
     (iii) Nhầm pháp nhân: ghi rõ tên công ty cụ thể khi trích
          số — không gộp chung công ty mẹ, con, SPV.

[R6] GIỚI HẠN: Không khuyến nghị mua/bán. Không nhận xét
     định giá.

══ NHIỆM VỤ ══

── PHẦN 1: BUSINESS & STRUCTURE ──

Mô tả cách công ty tạo ra doanh thu và giá trị — đặc thù mô
hình kinh doanh của ngành này (không mô tả chung chung).

Cần làm rõ:
- Các mảng kinh doanh / phân khúc sản phẩm chính: tên, loại,
  địa lý hoặc khách hàng mục tiêu, sản phẩm/dự án tiêu biểu.
- Cấu trúc tập đoàn: công ty mẹ kinh tế, công ty con quan
  trọng, cổ đông kiểm soát, tỷ lệ nắm giữ.
- Cơ chế ghi nhận doanh thu theo VAS nếu tài liệu đề cập.
- [INFERENCE được khuyến khích]: Từ cấu trúc sở hữu và mô
  hình huy động vốn, có điểm nào đáng chú ý về rủi ro minh
  bạch hoặc xung đột lợi ích không?

Ghi nguồn [R1] cho từng ý.

── PHẦN 2: ĐÀO SỐ LIỆU TỪ TÀI LIỆU ──

Chủ động tìm và trích xuất TẤT CẢ số liệu tài chính có trong
tài liệu — không chỉ bảng tóm tắt, mà kể cả số liệu rải rác
trong phần Ban TGĐ, HĐQT, UBKT, Nghị quyết HĐQT, thư cổ đông.

Lập 2 bảng:

Bảng A — Kết quả kinh doanh (tất cả các năm có sẵn):
  Năm | Doanh thu | LN gộp | LNST (VAS) | LNST (IFRS nếu có) |
  Tài sản trọng yếu của ngành* | Tiền & tương đương |
  Tổng nợ vay | Vốn chủ sở hữu | EPS | BVPS
  (* BĐS = Hàng tồn kho; Ngân hàng = Dư nợ tín dụng;
     Sản xuất = Tài sản cố định; Bán lẻ = Hàng tồn kho)

Bảng B — Hoạt động huy động vốn và sự kiện tài chính đáng
chú ý:
  Thời điểm | Loại sự kiện | Quy mô | Đối tác / chi tiết

Ghi rõ đơn vị. Gắn cờ ⚑ + giải thích cơ chế tài chính.

── PHẦN 3: MD&A HIGHLIGHTS ──

Trích các điểm chính management nhấn mạnh trong mỗi năm:
- Driver tăng trưởng doanh thu và lợi nhuận
- Biến động chi phí đáng chú ý
- Sự kiện đặc biệt (M&A, thoái vốn, tái cơ cấu, thay đổi
  pháp lý)
- Kế hoạch và mục tiêu cho năm tiếp theo

Ghi nguồn [R1]. Giữ nguyên mức độ chắc chắn của tài liệu
gốc theo [R5(i)] — không diễn giải mạnh hơn nguyên văn.

── PHẦN 4: KEY RISKS — PHÂN TÍCH 3 LỚP ──

Lấy từ phần Rủi ro / Quản trị rủi ro. Chia 3 nhóm:

A. Business model risk
B. Financial risk (đòn bẩy, thanh khoản, lãi vay, tỷ giá,
   công cụ nợ)
C. Execution / Operational risk (pháp lý, vận hành, thị
   trường, nhân sự, công nghệ)

Với mỗi risk:
- Nguyên văn tiêu đề + năm xuất hiện + mục nguồn
- Giải thích 1–2 câu bằng ngôn ngữ tài chính — không dùng
  lại ngôn ngữ PR của doanh nghiệp
- ★ MỚI nếu risk chỉ xuất hiện ở tài liệu năm gần nhất
- [INFERENCE] nếu risk thực tế nghiêm trọng hơn cách tài
  liệu trình bày — giải thích tại sao

── PHẦN 5: SO SÁNH QUA CÁC NĂM ──

Phân tích sự dịch chuyển giữa các tài liệu theo thứ tự thời
gian.

Bảng so sánh tone management:
  Chiều so sánh       | [Năm cũ nhất] | [Năm mới nhất]
  Giọng điệu chủ đạo  | ...           | ...
  Từ khóa nổi bật     | ...           | ...
  Kỳ vọng / mục tiêu  | ...           | ...
  Ngôn ngữ rủi ro     | ...           | ...
  Thay đổi nhân sự KT | ...           | ...
  Kết quả vs mục tiêu | ...           | ...

Sau bảng: 1 đoạn phân tích (5–8 câu) về ý nghĩa tài chính
của sự dịch chuyển — không tóm tắt lại bảng, mà diễn giải
tại sao thay đổi tone có ý nghĩa với analyst. [INFERENCE]
phù hợp.

── PHẦN 6: CÂU HỎI PHẢN BIỆN SẮC BÉN ──

10 câu hỏi, mỗi câu phải đáp ứng đủ 3 tiêu chí:
(a) Gắn với ít nhất 1 con số hoặc sự kiện cụ thể từ tài liệu
(b) Chỉ ra mâu thuẫn, khoảng trống, hoặc rủi ro ẩn
(c) Không có câu trả lời dễ dàng

Ưu tiên khai thác (điều chỉnh theo ngành):
- Khoảng cách lợi nhuận kế toán VAS và dòng tiền thực tế
- Chênh lệch VAS vs IFRS nếu có — và nguyên nhân
- Cấu trúc nợ: kỳ hạn, lãi suất, covenant
- Tài sản trọng yếu của ngành: chất lượng và rủi ro định giá
- Cam kết với đối tác / khách hàng vs khả năng thực hiện
- Sự kiện huy động vốn lớn: điều kiện thực sự là gì
- Thông tin bị rút ra / thay đổi so với tài liệu năm trước

── PHẦN 7: LIMITATIONS & DISCLAIMERS ──

- 3–5 giới hạn cụ thể — phải liên quan đến công ty và tài
  liệu cụ thể này, không phải disclaimer chung chung. Bắt
  buộc đề cập: chuẩn VAS có giới hạn gì so với IFRS trong
  việc phản ánh thực trạng tài chính của công ty này.
- Kết thúc bằng đúng câu: "Phân tích này chỉ dựa trên tài
  liệu được cung cấp và không phải khuyến nghị đầu tư dưới
  bất kỳ hình thức nào."
```

---

## 4. LƯU Ý KHI DÙNG

### Về giới hạn context
- **Claude Pro**: paste được 2–3 file .md cùng lúc nếu mỗi file < 50.000 từ
- **ChatGPT** (có giới hạn context): paste từng file một; thêm dòng vào
  Phần 2 — *"Tìm bảng 'Tổng quan Tài chính' / 'Financial Highlights' trước
  khi tìm số liệu rải rác"* — vì ChatGPT không tự tìm như Claude
- Nếu tài liệu dài > 100.000 từ → tách thành 2 session: session 1 chạy
  Phần 1–3, session 2 chạy Phần 4–7

### Sau khi có output
1. **Cross-check thủ công 5 điểm** (xem `SKILL.md` Mục 8):
   kiểm tra dòng tiền kinh doanh, nợ vay, ngôn ngữ risk, 2 chỉ số tự tính
2. **Chạy thêm Prompt 1B** (trong `SKILL.md` Mục 5) nếu có file BCTC
   kiểm toán riêng để đào sâu red flag và dòng tiền
3. **Chạy Prompt 2B** (trong `SKILL.md` Mục 6) nếu muốn Claude critique
   output từ ChatGPT

### Nguyên tắc vàng
> AI giỏi "diễn giải và nhận diện pattern" hơn là tính toán.
> Số tốt nhất vẫn nên trích bằng Excel rồi đưa vào AI phân tích.
> Không để AI tự fetch số từ internet khi phân tích BCTC.

---

## 5. OUTPUT MẪU — CẤU TRÚC KỲ VỌNG

Sau khi chạy prompt, output của AI nên có đủ 7 phần:

| Phần | Nội dung chính | Dấu hiệu output tốt |
|------|---------------|---------------------|
| 1 | Business & Structure | Có tên mảng KD cụ thể, tỷ lệ sở hữu, cơ chế ghi nhận DT |
| 2 | Bảng số | Bảng A đủ cột, Bảng B có sự kiện huy động vốn |
| 3 | MD&A | Trích dẫn có nguồn [R1], giữ ngôn ngữ gốc |
| 4 | Risk 3 lớp | Phân loại A/B/C rõ, có ★ MỚI và [INFERENCE] |
| 5 | So sánh năm | Bảng tone + đoạn phân tích 5–8 câu |
| 6 | Câu hỏi | 10 câu, mỗi câu có số liệu cụ thể |
| 7 | Limitations | Đề cập VAS vs IFRS, kết thúc bằng disclaimer đúng |

**Gắn cờ kiểm tra nếu output:**
- Phần 2 không có cờ ⚑ dù có số liệu bất thường → AI bỏ sót
- Câu hỏi Phần 6 không có số liệu gắn theo → câu hỏi quá chung
- Phần 7 chỉ là disclaimer mẫu, không đề cập VAS/IFRS → yêu cầu viết lại
