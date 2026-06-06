# 6. COLLATERAL MANAGEMENT FRAMEWORK

## 6.1 Collateral Lifecycle

```
Tiếp nhận → Định giá → Pháp lý → Đăng ký GDBĐ → Giám sát → Tái định giá → Giải chấp
```

## 6.2 Revaluation Cycle

| Loại TSBĐ | Cycle | Trigger tái định giá sớm |
|-----------|-------|--------------------------|
| BĐS | 24 tháng | Thị trường biến động > 20%, quy hoạch thay đổi |
| MMTB | 12 tháng | Hư hỏng, lỗi thời công nghệ |
| HTK | 6 tháng | Giá nguyên liệu biến động > 15% |
| AR | 3 tháng | Counterparty default, aging deterioration |
| Cổ phiếu niêm yết | 3 tháng (hoặc margin call trigger) | Giá giảm > 30% |
| Cổ phiếu OTC | 12 tháng | Thay đổi BCTC công ty phát hành |

## 6.3 Collateral Monitoring

| Hoạt động | Tần suất | Actor |
|-----------|----------|-------|
| Kiểm tra tình trạng vật lý TSBĐ | 6 tháng/lần | RM (site visit) |
| Kiểm tra bảo hiểm TSBĐ | Hàng năm (trước hết hạn) | Ops |
| Kiểm tra giá trị thị trường | Theo revaluation cycle | Valuer |
| Kiểm tra tình trạng pháp lý | Hàng năm | Legal |
| Kiểm tra đăng ký GDBĐ còn hiệu lực | Hàng năm | Legal |

## 6.4 Legal Enforceability Checklist

- [ ] TSBĐ thuộc quyền sở hữu hợp pháp của bên bảo đảm
- [ ] Không có tranh chấp, kiện tụng liên quan
- [ ] Không nằm trong quy hoạch giải tỏa
- [ ] Đã đăng ký GDBĐ tại cơ quan có thẩm quyền
- [ ] HĐ bảo đảm đã công chứng (nếu BĐS)
- [ ] Bảo hiểm còn hiệu lực, NH là beneficiary
- [ ] QSDĐ: phân biệt trả tiền 1 lần vs hàng năm
- [ ] GCN QSDĐ gốc đang giữ tại NH

---

