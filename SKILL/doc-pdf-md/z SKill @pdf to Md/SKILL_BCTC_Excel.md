---
name: bctc-to-excel
description: Skill chuyển đổi PDF Báo cáo tài chính (BCTC) thành đồng thời 2 file — Markdown (.md) cho AI đọc và Excel (.xlsx) để mở, chỉnh sửa. Engine AI TableFormer (docling) bóc chính xác bảng biểu phức tạp. Hỗ trợ single file và batch convert cả folder.
author: Nguyen Tung Chi
version: "1.0"
website: nguyentungchi.com
contact: "0909134153"
---

# BCTC to Excel Skill v1.0

## Mục đích
Chuyển đổi file **PDF Báo cáo tài chính** thành **đồng thời**:
- `file.md` — Markdown sạch để LLM đọc, phân tích, tóm tắt
- `file.xlsx` — Excel có thể mở ngay trong Numbers / Microsoft Excel

## Kích hoạt khi nào?
- Người dùng upload hoặc cung cấp file **PDF báo cáo tài chính (BCTC)**.
- Người dùng nói: `"chuyển BCTC sang excel"`, `"bóc bảng tài chính"`, `"pdf to excel"`.
- Triggers: `"bctc"`, `"báo cáo tài chính"`, `"financial report"`, `"xuất excel"`, `"pdf sang xlsx"`, `"bóc bảng số"`.

## Output

| File | Nội dung |
|------|----------|
| `filename.md` | Toàn bộ nội dung văn bản + bảng dạng Markdown |
| `filename.xlsx` | Mỗi bảng biểu = 1 sheet riêng + 1 sheet "Full Text" |

### Cấu trúc file Excel xuất ra
```
filename.xlsx
├── Bảng 1     ← Bảng cân đối kế toán
├── Bảng 2     ← Kết quả hoạt động kinh doanh
├── Bảng 3     ← Lưu chuyển tiền tệ
├── ...
└── 📄 Full Text  ← Toàn bộ nội dung Markdown
```

### Style Excel
- Header: nền xanh navy, chữ trắng, in đậm
- Hàng dữ liệu: xen kẽ màu trắng / xanh nhạt
- Số: format kế toán có dấu phẩy (1,234,567)
- Freeze panes: cố định dòng header khi scroll
- Auto-fit column width

## Lệnh sử dụng

### Single file → Markdown + Excel cùng lúc:
```bash
python3 "bctc_excel.py" "BCTC_2024.pdf"
# Xuất: BCTC_2024.md + BCTC_2024.xlsx (cùng thư mục)
```

### Single file với đường dẫn tùy chỉnh:
```bash
python3 "bctc_excel.py" "BCTC_2024.pdf" --out "output/report.md" --excel "output/report.xlsx"
```

### Batch convert toàn bộ folder:
```bash
python3 "bctc_excel.py" "/path/to/folder" --batch
# Tạo subfolder "BCTC Excel/" chứa tất cả .md + .xlsx
```

### Batch với thư mục output tùy chỉnh:
```bash
python3 "bctc_excel.py" "/path/to/folder" --batch --outdir "/path/to/output"
```

## Quy trình agent (Workflow)
1. **Nhận file**: Xác định đường dẫn PDF (single) hoặc folder (batch).
2. **Phân tích**: Chạy `docling` AI TableFormer bóc toàn bộ bảng biểu.
3. **Xuất Markdown**: Ghi `.md` — xác nhận `✅ Markdown: ...`.
4. **Xuất Excel**: Ghi `.xlsx` — mỗi bảng 1 sheet — xác nhận `✅ Excel: ...`.
5. **Báo cáo**: Trả link 2 file + số sheet + số dòng.

## Yêu cầu môi trường
```bash
pip3 install -r requirements.txt
```
> Yêu cầu thêm `openpyxl>=3.1.0` (xem requirements.txt)

## Đường dẫn script
```
z SKill @pdf to Md/bctc_excel.py
```

## So sánh với pdf_skill.py

| Tính năng | pdf_skill.py | bctc_excel.py |
|-----------|-------------|---------------|
| Output MD | ✅ | ✅ |
| Output Excel | ❌ | ✅ |
| Mode book (sách) | ✅ | ❌ (chỉ finance) |
| Mode finance (BCTC) | ✅ | ✅ |
| Mode epub | ✅ | ❌ |
| Style Excel đẹp | — | ✅ |
| Tối ưu cho | Ebooks / tài liệu chung | BCTC / báo cáo tài chính |
