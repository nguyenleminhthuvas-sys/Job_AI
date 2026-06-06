#!/usr/bin/env python3
"""
docling_cpu.py — Chạy docling với monkey-patch fix lỗi float64/MPS trên Apple Silicon.
Usage:
    python3 docling_cpu.py <input.pdf> <output.md>
"""
import os, sys
from pathlib import Path

if len(sys.argv) < 3:
    print("Usage: python3 docling_cpu.py <input.pdf> <output.md>")
    sys.exit(1)

input_path  = Path(sys.argv[1])
output_path = Path(sys.argv[2])

# ── Bước 1: Import torch trước, kiểm tra device ──────────────────────────────
import torch
device_str = "cpu"
if torch.backends.mps.is_available():
    print("⚠️  MPS phát hiện — áp dụng monkey-patch float64→float32 fix")
elif torch.cuda.is_available():
    device_str = "cuda"
    print("✅ CUDA khả dụng")
else:
    print("✅ Chạy thuần CPU")

# ── Bước 2: Monkey-patch hàm gây lỗi trong transformers ────────────────────
try:
    import transformers.models.rt_detr_v2.modeling_rt_detr_v2 as _rt_detr
    _orig_build = _rt_detr.build_2d_sinusoidal_position_embedding

    def _patched_build(width, height, n_frequencies=128, dtype=None, device=None):
        """Giống hàm gốc nhưng dùng float32 thay float64 để tương thích MPS."""
        # Đổi device sang cpu nếu là MPS (tránh float64 lỗi)
        if device is not None and str(device).startswith("mps"):
            device = torch.device("cpu")
        if dtype == torch.float64:
            dtype = torch.float32
        return _orig_build(width, height, n_frequencies=n_frequencies,
                           dtype=dtype, device=device)

    _rt_detr.build_2d_sinusoidal_position_embedding = _patched_build
    print("✅ Monkey-patch rt_detr_v2 float64→float32: OK")
except Exception as e:
    print(f"⚠️  Không patch được rt_detr_v2: {e}")

# ── Bước 3: Import và chạy docling ───────────────────────────────────────────
from docling.datamodel.pipeline_options import PdfPipelineOptions
from docling.datamodel.base_models import InputFormat
from docling.document_converter import DocumentConverter, PdfFormatOption
from docling.pipeline.standard_pdf_pipeline import StandardPdfPipeline
from docling.backend.pypdfium2_backend import PyPdfiumDocumentBackend

try:
    from docling.datamodel.accelerator_options import AcceleratorOptions, Device
    accel = AcceleratorOptions(num_threads=4, device=Device.CPU)
    HAS_ACCEL = True
    print("✅ AcceleratorOptions: CPU")
except ImportError:
    HAS_ACCEL = False
    print("⚠️  AcceleratorOptions không có — dùng mặc định")

pipeline_options = PdfPipelineOptions()
pipeline_options.do_ocr = True
pipeline_options.do_table_structure = True
pipeline_options.table_structure_options.do_cell_matching = True
if HAS_ACCEL:
    pipeline_options.accelerator_options = accel

print(f"\n🔄 Đang parse: {input_path.name}")
print("   (OCR + TableFormer — có thể mất 5–20 phút với file lớn)")

converter = DocumentConverter(
    format_options={
        InputFormat.PDF: PdfFormatOption(
            pipeline_cls=StandardPdfPipeline,
            backend=PyPdfiumDocumentBackend,
            pipeline_options=pipeline_options,
        )
    }
)

result   = converter.convert(str(input_path))
md_text  = result.document.export_to_markdown()

output_path.parent.mkdir(parents=True, exist_ok=True)
output_path.write_text(md_text, encoding="utf-8")

lines   = md_text.count("\n")
size_kb = len(md_text.encode("utf-8")) / 1024
print(f"\n✅ Đã parse thành công!")
print(f"   📊 {lines:,} dòng | {size_kb:.1f} KB")
print(f"   📁 {output_path}")
