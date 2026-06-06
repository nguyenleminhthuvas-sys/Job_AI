# 4. CREDIT RISK FRAMEWORK

## 4.1 Credit Scoring Model Chi tiết

### Nhóm 1: Chỉ số Tài chính (40%)

| Chỉ số | Trọng số | Score 5 (Xuất sắc) | Score 3 (TB) | Score 1 (Yếu) |
|--------|----------|---------------------|--------------|----------------|
| DSCR | 10% | ≥ 1.50x | 1.20-1.49x | < 1.20x |
| ICR | 8% | ≥ 3.0x | 2.0-2.9x | < 2.0x |
| D/E | 7% | ≤ 1.5x | 1.5-3.0x | > 3.0x |
| Current Ratio | 5% | ≥ 1.5x | 1.2-1.49x | < 1.2x |
| ROA | 4% | ≥ 5% | 1-5% | ≤ 0% |
| EBITDA Margin | 3% | ≥ 20% | 10-20% | < 10% |
| CCC | 3% | < 60 ngày | 60-120 ngày | > 120 ngày |

### Nhóm 2: Phi tài chính (25%)

| Chỉ số | Trọng số | Score 5 | Score 3 | Score 1 |
|--------|----------|---------|---------|---------|
| Industry risk | 8% | Ngành ổn định, tăng trưởng | Chu kỳ trung bình | Suy thoái, rủi ro cao |
| Market position | 5% | Top 3 thị phần | Trung bình | Yếu, mới gia nhập |
| Management quality | 5% | Kinh nghiệm >10 năm, clean | 5-10 năm | < 5 năm, vấn đề |
| Governance | 4% | Kiểm toán Big4, HĐQT độc lập | Kiểm toán local, HĐQT gia đình | Qualified audit, yếu |
| Business diversification | 3% | Đa dạng KH/SP/thị trường | Tập trung vừa | Tập trung cao |

### Nhóm 3: CIC & Lịch sử tín dụng (15%)

| Chỉ số | Trọng số | Score 5 | Score 3 | Score 1 |
|--------|----------|---------|---------|---------|
| CIC group hiện tại | 8% | Nhóm 1 (clean) | Nhóm 1 có history Nhóm 2 | Nhóm 2+ hiện tại |
| Payment history 3 năm | 4% | 0 lần quá hạn | 1-2 lần < 30 ngày | > 2 lần hoặc > 30 ngày |
| Number of TCTD | 3% | 2-4 (hợp lý) | 5-7 | > 7 (red flag) |

### Nhóm 4: TSBĐ (10%)

| Chỉ số | Trọng số | Score 5 | Score 3 | Score 1 |
|--------|----------|---------|---------|---------|
| LTV | 5% | < 50% | 50-70% | > 70% |
| Collateral quality | 3% | BĐS prime, tiền gửi | BĐS tỉnh, MMTB | HTK, AR, OTC stock |
| Legal enforceability | 2% | Clear, registered | Pending registration | Dispute, encumbered |

### Nhóm 5: Behavioral (10%)

| Chỉ số | Trọng số | Score 5 | Score 3 | Score 1 |
|--------|----------|---------|---------|---------|
| Relationship tenure | 4% | > 5 năm, track record tốt | 2-5 năm | < 2 năm |
| Covenant compliance | 3% | 100% comply | 1 minor breach | Multiple breaches |
| Transaction volume | 3% | Tăng trưởng ổn định | Ổn định | Giảm sút |

### Tổng hợp Score → Risk Grade

```
Total Score = Σ (Score × Weight) cho tất cả 5 nhóm
Range: 1.0 (worst) → 5.0 (best) → Map lên 100-point scale
```

**Giới hạn Override & Điều kiện Review Model:**

1. **Override Rate Threshold:**
   - Override rate (tỷ lệ hồ sơ có kết quả scoring bị override bởi CA/Risk) được theo dõi hàng tháng bởi Risk Officer.
   - Override rate > **15%** trong một tháng → Risk Officer phải lập báo cáo giải trình nguyên nhân trong 10 ngày làm việc.
   - Override rate > **20%** trong 2 tháng liên tiếp → **Bắt buộc trigger Model Review** do bộ phận Risk độc lập thực hiện trong vòng 60 ngày.

2. **Annual Model Backtesting — Nội dung tối thiểu:**
   - So sánh PD (Probability of Default) dự báo của model vs tỷ lệ nợ xấu thực tế theo cohort (nhóm KH được approve cùng kỳ)
   - Gini coefficient / AUC-ROC của model: nếu giảm > 5 điểm phần trăm so với năm trước → escalate lên CRO và Head of Risk để quyết định recalibrate
   - Báo cáo backtesting phải được CRO ký duyệt và lưu trữ tối thiểu 5 năm

3. **Mandatory Model Review Triggers (ngoài annual cycle):**
   - NPL của portfolio tăng > 1.5% trong 2 quý liên tiếp
   - Thay đổi lớn về cấu trúc kinh tế vĩ mô (ví dụ: lãi suất tăng > 200bps, hoặc một ngành chiếm > 15% portfolio có NPL tăng đột biến)

## 4.2 PD / LGD / EAD Framework

| Thành phần | Công thức | Ý nghĩa |
|-----------|-----------|---------|
| **PD** (Probability of Default) | Map từ Risk Grade (bảng Phase 10) | Xác suất vỡ nợ trong 12 tháng |
| **LGD** (Loss Given Default) | 1 - Recovery Rate | Tỷ lệ tổn thất khi vỡ nợ |
| **EAD** (Exposure at Default) | Drawn + CCF × Undrawn | Dư nợ tại thời điểm vỡ nợ |
| **EL** (Expected Loss) | PD × LGD × EAD | Tổn thất dự kiến |

**LGD theo loại TSBĐ** (BANKING PRACTICE):

| TSBĐ | Recovery Rate | LGD | Ghi chú |
|------|---------------|-----|---------|
| BĐS đô thị prime | 60-70% | 30-40% | Foreclosure VN: 12-24 tháng |
| BĐS tỉnh lẻ | 40-50% | 50-60% | Thanh khoản thấp |
| MMTB | 20-40% | 60-80% | Giá trị giảm nhanh |
| Không TSBĐ | 5-15% | 85-95% | Recovery chủ yếu từ CF |

## 4.3 Risk Appetite Matrix

| Risk Grade | Max single exposure | Pricing premium | Approval level |
|-----------|---------------------|-----------------|----------------|
| AAA-AA | 15% vốn tự có | Base rate | Per DOA |
| A-BBB | 10% vốn tự có | +50-100bps | Per DOA |
| BB | 5% vốn tự có | +150-250bps | CRO required |
| B | 2% vốn tự có | +300-400bps | Board required |
| CCC and below | REJECT | N/A | N/A |

---

