# 5. FINANCIAL ANALYSIS FRAMEWORK

## 5.1 Bộ Chỉ số Chi tiết

### Nhóm 1 — Thanh khoản (Liquidity)

| Chỉ số | Công thức | Ý nghĩa | Ngưỡng | Red Flag |
|--------|-----------|---------|--------|----------|
| **Current Ratio** | TSNH / Nợ ngắn hạn | Khả năng thanh toán NH | ≥ 1.2x | < 1.0x → nguy hiểm |
| **Quick Ratio** | (TSNH - HTK) / Nợ NH | TT nhanh không cần bán HTK | ≥ 0.8x | < 0.5x |
| **Cash Ratio** | Tiền & tương đương / Nợ NH | Khả năng TT bằng tiền mặt | ≥ 0.2x | < 0.1x |

### Nhóm 2 — Đòn bẩy (Leverage)

| Chỉ số | Công thức | Ý nghĩa | Ngưỡng | Red Flag |
|--------|-----------|---------|--------|----------|
| **D/E** | Nợ phải trả / Vốn CSH | Cơ cấu vốn | ≤ 3.0x | > 5.0x |
| **Debt/EBITDA** | Tổng nợ vay / EBITDA | Số năm trả hết nợ | ≤ 5.0x | > 7.0x |
| **Equity Ratio** | Vốn CSH / Tổng nguồn vốn | Tỷ lệ tự tài trợ | ≥ 25% | < 15% |

### Nhóm 3 — Sinh lời (Profitability)

| Chỉ số | Công thức | Ý nghĩa | Ngưỡng | Red Flag |
|--------|-----------|---------|--------|----------|
| **ROA** | LNST / Tổng TS bình quân | Hiệu quả sử dụng TS | > 1% | ≤ 0% (2 năm) |
| **ROE** | LNST / Vốn CSH bình quân | Hiệu quả vốn CSH | > 10% | < 0% |
| **EBITDA Margin** | EBITDA / DT thuần | Biên LN trước KH, lãi, thuế | > 10% | < 5% |
| **Gross Margin** | (DT - GVHB) / DT | Biên LN gộp | So sánh ngành | Giảm > 5% YoY |

### Nhóm 4 — Khả năng Trả nợ (Debt Service)

| Chỉ số | Công thức | Ý nghĩa | Ngưỡng | Red Flag |
|--------|-----------|---------|--------|----------|
| **DSCR** | Dòng tiền HĐKD / Nợ phải trả năm | Khả năng trả nợ từ HĐKD | ≥ 1.20x | < 1.0x |
| **ICR** | EBIT / Lãi vay | LN bao phủ lãi vay | ≥ 2.0x | < 1.5x |
| **OCF/Debt** | OCF / Tổng nợ vay | CF HĐKD / tổng nợ | > 15% | < 5% |

### Nhóm 5 — Hiệu quả Hoạt động (Efficiency)

| Chỉ số | Công thức | Ý nghĩa | Ngưỡng | Red Flag |
|--------|-----------|---------|--------|----------|
| **DSO** | (Phải thu KH / DT) × 365 | Số ngày thu tiền | < 90 ngày | > 150 ngày |
| **DIO** | (HTK / GVHB) × 365 | Số ngày tồn kho | < 90 ngày | > 180 ngày |
| **DPO** | (Phải trả NCC / GVHB) × 365 | Số ngày trả NCC | < 90 ngày | > 120 ngày (chiếm dụng) |
| **CCC** | DSO + DIO - DPO | Chu kỳ chuyển đổi tiền | < 120 ngày | > 180 ngày |

## 5.2 EBITDA Normalization

**Điều chỉnh bắt buộc**:
```
EBITDA báo cáo
  (-) Doanh thu từ đánh giá lại TS (revaluation gain)
  (-) Doanh thu bán TS/công ty con (không phải core)
  (-) Doanh thu nội bộ nhóm (intercompany — không tạo CF bên ngoài)
  (+) Chi phí tái cấu trúc one-off
  (+) Lỗ tỷ giá chưa thực hiện
  (-) Revenue pull-forward (AR bất thường)
= EBITDA NORMALIZED
```

**Giới hạn điều chỉnh**: Tối đa ±7% so với EBITDA reported. Điều chỉnh > 3% → cần independent accountant xác nhận.

---

