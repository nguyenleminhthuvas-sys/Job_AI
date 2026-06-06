---
name: universal-ebook-parser
description: Skill chuyên bóc tách PDF & EPUB thành định dạng Markdown dùng cho LLM. Hỗ trợ 4 chế độ — "book" (PDF văn bản, siêu tốc), "finance" (PDF bảng biểu, AI TableFormer), "epub" (file EPUB via pandoc), "auto" (tự nhận dạng). Có tính năng batch convert toàn bộ folder chỉ 1 lệnh.
author: Nguyen Tung Chi
version: "2.0"
website: nguyentungchi.com
contact: "0909134153"
---

# Universal Ebook Parser Skill v2.0

## Mục đích
Chuyển đổi file PDF & EPUB thành Markdown sạch để LLM có thể đọc, tóm tắt, trích xuất dữ liệu mà không bị hallucination.

## Kích hoạt khi nào?
- Người dùng cung cấp file **PDF** (sách, tài liệu, báo cáo tài chính).
- Người dùng cung cấp file **EPUB** (ebook).
- Người dùng nói: "chuyển sang md", "convert to markdown", "batch convert folder".
- Triggers: `"bóc tách pdf"`, `"đọc epub"`, `"parse pdf"`, `"pdf to markdown"`, `"epub to md"`, `"batch"`.

## 4 Chế độ hoạt động

| Mode | Dùng khi | Engine |
|------|----------|--------|
| `book` | PDF sách / văn bản nhiều text | `pymupdf4llm` — siêu tốc |
| `finance` | PDF báo cáo tài chính / bảng biểu phức tạp | `docling` — AI TableFormer |
| `epub` | File EPUB | `pypandoc` — pandoc engine |
| `auto` | Tự nhận dạng theo đuôi file *(default)* | tự động chọn engine phù hợp |

## Lệnh sử dụng

### Single file — PDF (book mode):
```bash
python3 "pdf_skill.py" "file.pdf" --mode book --out "output.md"
```

### Single file — EPUB:
```bash
python3 "pdf_skill.py" "file.epub" --mode epub --out "output.md"
```

### Single file — Auto detect (không cần chỉ mode):
```bash
python3 "pdf_skill.py" "file.epub" --out "output.md"
```

### Batch convert toàn bộ folder → subfolder "Book MD":
```bash
python3 "pdf_skill.py" "/path/to/folder" --batch
```

### Batch với outdir tùy chỉnh:
```bash
python3 "pdf_skill.py" "/path/to/folder" --batch --outdir "/path/to/output"
```

### Batch chỉ convert EPUB:
```bash
python3 "pdf_skill.py" "/path/to/folder" --batch --mode epub
```

## Đường dẫn script
```
/Users/tungchi/Library/CloudStorage/GoogleDrive-chinguyen@sunext.vn/Shared drives/SunextAI/9. Research Lab/0. Ebooks/z SKill @pdf to Md/pdf_skill.py
```

## Quy trình agent (Workflow)
1. **Nhận yêu cầu**: Xác định file đơn hay batch folder.
2. **Chọn mode**: Tự động theo đuôi file hoặc theo yêu cầu người dùng.
3. **Thực thi**: Chạy lệnh Python trong terminal nội bộ.
4. **Kiểm tra**: Chờ xuất hiện `✅ Đã parse... thành công`.
5. **Báo cáo**: Trả link file MD + thống kê dòng/byte.

## Yêu cầu môi trường
```bash
pip3 install -r requirements.txt
# Gồm: pymupdf4llm, docling, pypandoc_binary
```

## Cấu trúc thư mục
```
z SKill @pdf to Md/
├── SKILL.md          — Hướng dẫn cho Agent (file này)
├── pdf_skill.py      — Script parser lõi
├── requirements.txt  — Thư viện phụ thuộc
└── README.md         — Ghi chú thêm
```
