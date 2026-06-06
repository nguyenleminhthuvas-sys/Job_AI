import argparse
import os
import sys

# ─────────────────────────────────────────────
# MODE: book — PDF dạng sách/tài liệu nhiều text
# ─────────────────────────────────────────────
def parse_pdf_book(pdf_path, output_path):
    """(Book Mode) PDF Sách — dùng pymupdf4llm, siêu tốc"""
    try:
        import pymupdf4llm
        md_text = pymupdf4llm.to_markdown(pdf_path)
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(md_text)
        print(f"✅ Đã parse SÁCH thành công: {output_path}")
    except ImportError:
        print("❌ Lỗi: Cần cài đặt pymupdf4llm (pip3 install pymupdf4llm)")
        sys.exit(1)
    except Exception as e:
        print(f"❌ Lỗi xử lý PDF bằng pymupdf: {e}")
        sys.exit(1)

# ─────────────────────────────────────────────
# MODE: finance — PDF bảng biểu tài chính
# ─────────────────────────────────────────────
def parse_pdf_finance(pdf_path, output_path):
    """(Finance Mode) Chuyên gia bóc tách bảng (TableFormer AI)"""
    try:
        print("🔄 Đang quét sâu các bảng biểu qua AI TableFormer (vui lòng đợi)...")
        from docling.document_converter import DocumentConverter
        converter = DocumentConverter()
        result = converter.convert(pdf_path)
        md_text = result.document.export_to_markdown()
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(md_text)
        print(f"✅ Đã parse BCTC thành công: {output_path}")
    except ImportError:
        print("❌ Lỗi: Cần cài đặt docling (pip3 install docling)")
        sys.exit(1)
    except Exception as e:
        print(f"❌ Lỗi xử lý PDF (docling): {e}")
        sys.exit(1)

# ─────────────────────────────────────────────
# MODE: epub — File EPUB → Markdown
# ─────────────────────────────────────────────
def parse_epub(epub_path, output_path):
    """(EPUB Mode) Chuyển file .epub thành Markdown dùng pypandoc"""
    try:
        import pypandoc
        pypandoc.convert_file(epub_path, "markdown", outputfile=output_path)
        size_kb = os.path.getsize(output_path) // 1024
        print(f"✅ Đã parse EPUB thành công: {output_path} ({size_kb}KB)")
    except ImportError:
        print("❌ Lỗi: Cần cài đặt pypandoc_binary (pip3 install pypandoc_binary)")
        sys.exit(1)
    except Exception as e:
        print(f"❌ Lỗi xử lý EPUB: {e}")
        sys.exit(1)

# ─────────────────────────────────────────────
# BATCH — Convert toàn bộ folder
# ─────────────────────────────────────────────
def batch_convert(folder_path, output_folder, mode):
    """Batch convert tất cả PDF/EPUB trong folder"""
    import glob

    os.makedirs(output_folder, exist_ok=True)

    # Xác định extensions cần xử lý
    if mode == "epub":
        patterns = ["*.epub"]
    elif mode in ["book", "finance"]:
        patterns = ["*.pdf"]
    else:  # auto: cả hai
        patterns = ["*.pdf", "*.epub"]

    files = []
    for pattern in patterns:
        files += glob.glob(os.path.join(folder_path, pattern))
    files = sorted(files)

    if not files:
        print(f"⚠️  Không tìm thấy file nào trong: {folder_path}")
        return

    print(f"📂 Tìm thấy {len(files)} file cần convert\n")
    count, fail = 0, 0

    for i, filepath in enumerate(files, 1):
        filename = os.path.splitext(os.path.basename(filepath))[0]
        ext = os.path.splitext(filepath)[1].lower()
        out_path = os.path.join(output_folder, filename + ".md")

        print(f"⏳ ({i}/{len(files)}) {filename[:65]}")
        try:
            if ext == ".epub":
                parse_epub(filepath, out_path)
            elif mode == "finance":
                parse_pdf_finance(filepath, out_path)
            else:
                parse_pdf_book(filepath, out_path)
            count += 1
        except SystemExit:
            fail += 1
        except Exception as e:
            print(f"  ❌ Lỗi: {e}")
            fail += 1

    print(f"\n{'='*50}")
    print(f"=== KẾT QUẢ: {count} thành công, {fail} thất bại ===")
    print(f"{'='*50}")


# ─────────────────────────────────────────────
# MAIN
# ─────────────────────────────────────────────
if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Universal Ebook Parser — PDF & EPUB → Markdown",
        formatter_class=argparse.RawTextHelpFormatter
    )
    parser.add_argument("input", help=(
        "File cần convert (PDF hoặc EPUB), "
        "hoặc FOLDER nếu dùng --batch"
    ))
    parser.add_argument("--mode", choices=["book", "finance", "epub", "auto"],
                        default="auto",
                        help=(
                            "book   → PDF sách/văn bản (pymupdf4llm)\n"
                            "finance→ PDF bảng biểu tài chính (docling)\n"
                            "epub   → File EPUB (pypandoc)\n"
                            "auto   → Tự nhận dạng theo đuôi file [default]"
                        ))
    parser.add_argument("--out", default=None,
                        help="File .md xuất ra (mặc định: cùng tên, cùng thư mục input)")
    parser.add_argument("--batch", action="store_true",
                        help="Batch convert toàn bộ folder (input là thư mục)")
    parser.add_argument("--outdir", default=None,
                        help="Thư mục xuất khi dùng --batch (mặc định: [input]/Book MD)")

    args = parser.parse_args()

    # ── BATCH MODE ──
    if args.batch:
        if not os.path.isdir(args.input):
            print(f"❌ Lỗi: '{args.input}' không phải thư mục hợp lệ")
            sys.exit(1)
        out_folder = args.outdir or os.path.join(args.input, "Book MD")
        batch_convert(args.input, out_folder, args.mode)

    # ── SINGLE FILE MODE ──
    else:
        if not os.path.exists(args.input):
            print(f"❌ Lỗi: File không tồn tại ({args.input})")
            sys.exit(1)

        ext = os.path.splitext(args.input)[1].lower()

        # Xác định mode tự động nếu là "auto"
        effective_mode = args.mode
        if effective_mode == "auto":
            if ext == ".epub":
                effective_mode = "epub"
            else:
                effective_mode = "book"

        # Xác định file output
        if args.out:
            out_path = args.out
        else:
            base = os.path.splitext(args.input)[0]
            out_path = base + ".md"

        # Thực thi
        if effective_mode == "epub" or ext == ".epub":
            parse_epub(args.input, out_path)
        elif effective_mode == "finance":
            parse_pdf_finance(args.input, out_path)
        else:
            parse_pdf_book(args.input, out_path)
