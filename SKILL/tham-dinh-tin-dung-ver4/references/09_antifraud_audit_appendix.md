# 11. IMPLEMENTATION ROADMAP

## 11.1 Phased Implementation

| Phase | Timeline | Nội dung | Deliverables |
|-------|----------|----------|-------------|
| **Phase 1** | Tháng 1-2 | SOP training, manual workflow setup | SOP approved, staff trained |
| **Phase 2** | Tháng 3-4 | LOS basic (lead → approval), DMS | LOS live, DMS live |
| **Phase 3** | Tháng 5-6 | Scoring engine, CIC integration | Auto-scoring live |
| **Phase 4** | Tháng 7-9 | LMS (disbursement → monitoring) | LMS live |
| **Phase 5** | Tháng 10-12 | BPM workflow, OCR, eKYC | Full automation |
| **Phase 6** | Năm 2 | Dashboard/MIS, advanced analytics | Portfolio view, EWS auto |

## 11.2 Maturity Model

| Level | Mô tả | Characteristics |
|-------|--------|----------------|
| **1 — Initial** | Quy trình manual, Excel-based | Inconsistent, person-dependent |
| **2 — Defined** | SOP chuẩn hóa, checklist rõ ràng | Repeatable, documented |
| **3 — Managed** | LOS/LMS cơ bản, workflow semi-auto | Measurable, tracked |
| **4 — Optimized** | Full digital, scoring auto, EWS auto | Data-driven, efficient |
| **5 — Advanced** | AI/ML, predictive analytics, real-time | Predictive, adaptive |

---

# 12. BEST PRACTICES & COMMON FAILURE POINTS

## 12.1 Common Failure Points tại Ngân hàng VN

| # | Lỗi phổ biến | Hậu quả | Phòng tránh |
|---|-------------|---------|-------------|
| 1 | RM tự chấm điểm KH (không tách bạch) | Scoring thiên vị | CA độc lập scoring |
| 2 | Không kiểm tra BCTC vs Thuế vs Sao kê | Không phát hiện BCTC giả | Triple cross-check bắt buộc |
| 3 | Định giá TSBĐ cao quá thực tế | LTV sai, recovery thấp | Independent + dual valuation |
| 4 | Không kiểm tra sử dụng vốn sau giải ngân | Vốn bị sử dụng sai mục đích | Mandatory post-disbursement check |
| 5 | Covenant monitoring bị bỏ qua | Không phát hiện suy giảm sớm | Auto covenant testing |
| 6 | Cơ cấu nợ để che giấu NPL | NPL ẩn, provision thiếu | Anti-evergreening policy |
| 7 | Phê duyệt vượt thẩm quyền | Vi phạm quản trị | System-enforced DOA |
| 8 | Hồ sơ thiếu, không lưu trữ | Không audit được | DMS mandatory, checklist |
| 9 | Phải thu khác > 20% TTS → không phát hiện | Tunneling, rút ruột | Mandatory related party review |
| 10 | KYC hời hợt, không trace UBO | Rửa tiền, sanctions | EDD for high-risk |

## 12.2 Audit Findings thường gặp

| Finding | Root cause | Remediation |
|---------|-----------|-------------|
| KYC/AML gaps | Manual screening, no system | Implement AML system |
| Missing documents | No enforced checklist | LOS mandatory checklist |
| Scoring override without approval | No override control | System-enforced override log |
| Covenant not tested on time | No automated reminder | LMS auto-testing + alert |
| TSBĐ not revalued | No tracking | Revaluation scheduler |

---

# 13. ANTI-FRAUD FRAMEWORK

## 13.1 Fraud Schemes phổ biến tại VN

| # | Scheme | Detection Method |
|---|--------|-----------------|
| 1 | Fake sales (xuất hóa đơn vòng) | BCTC vs Thuế vs Sao kê cross-check |
| 2 | Asset overvaluation | Independent valuation, market comparison |
| 3 | Double pledging | ĐKGDBĐ tra cứu bắt buộc |
| 4 | Round-tripping (đảo nợ) | Sao kê cuối tháng/cuối quý analysis |
| 5 | Fake capex (XDCB dở dang) | Site visit, progress verification |
| 6 | Related party tunneling | Consolidated vs standalone FS analysis |
| 7 | Fake restricted cash | Bank confirmation letter verification |
| 8 | Revenue recognition fraud | AR aging vs DSO trend analysis |

## 13.2 Anti-Fraud Controls

| Control | Implementation |
|---------|---------------|
| Triple cross-check | BCTC vs Thuế GTGT vs Sao kê NH |
| Site visit mandatory | 6 tháng/lần, unannounced khi cần |
| Independent valuation | Valuer ≠ RM, external cho > 100 tỷ |
| ĐKGDBĐ check | 100% trước giải ngân |
| Whistleblower channel | Anonymous reporting line |
| Media monitoring | Automated adverse media scan |
| Bank confirmation | Direct confirmation with other banks |

---

# 14. AUDIT & COMPLIANCE READINESS

## 14.1 Regulatory Compliance Map

| Quy định | Phase áp dụng | Compliance Check |
|----------|---------------|-----------------|
| Luật TCTD 2024, Điều 136-137 | Phase 12 | Giới hạn cấp tín dụng |
| TT 39/2016, Điều 7-9 | Phase 4, 9 | Điều kiện vay, hồ sơ, mục đích |
| TT 12/2024 | Phase 9, 19, 20 | Chứng minh mục đích, kiểm tra sử dụng vốn |
| TT 11/2021 | Phase 23 | Phân loại nợ, trích lập DPRR |
| Luật PCRT 2022 | Phase 3 | KYC/AML/CFT |
| TT 09/2023 | Phase 3 | Hướng dẫn phòng chống rửa tiền |
| Luật Đất đai 2024 | Phase 5, 11 | QSDĐ, thế chấp BĐS |
| NĐ 99/2022/NĐ-CP ngày 30/11/2022 về đăng ký biện pháp bảo đảm (thay thế NĐ 102/2017/NĐ-CP) | Phase 5, 17 | Đăng ký GDBĐ |

## 14.2 Audit Trail Standards

- **Completeness**: 100% actions logged
- **Immutability**: No delete, no retroactive edit
- **Traceability**: Every record traceable to person + timestamp
- **Retention**: Minimum 5 years post-closure, 10 years for approvals
- **Accessibility**: Retrievable within 24h for audit/inspection

---

# 15. APPENDICES

## Appendix A: Glossary

| Thuật ngữ | Tiếng Việt | Ý nghĩa |
|-----------|-----------|---------|
| LOS | Hệ thống khởi tạo khoản vay | Loan Origination System |
| LMS | Hệ thống quản lý khoản vay | Loan Management System |
| BPM | Quản lý quy trình nghiệp vụ | Business Process Management |
| DMS | Hệ thống quản lý tài liệu | Document Management System |
| CIC | Trung tâm Thông tin Tín dụng | Credit Information Center |
| DSCR | Tỷ suất đảm bảo trả nợ | Debt Service Coverage Ratio |
| ICR | Hệ số khả năng thanh toán lãi | Interest Coverage Ratio |
| LTV | Tỷ lệ cho vay/giá trị TSBĐ | Loan-to-Value |
| PD | Xác suất vỡ nợ | Probability of Default |
| LGD | Tỷ lệ tổn thất khi vỡ nợ | Loss Given Default |
| EAD | Dư nợ tại thời điểm vỡ nợ | Exposure at Default |
| NPL | Nợ xấu | Non-Performing Loan |
| DOA | Ma trận phân cấp phê duyệt | Delegation of Authority |
| CC | Hội đồng tín dụng | Credit Committee |
| CRO | Giám đốc Quản trị Rủi ro | Chief Risk Officer |
| EWS | Hệ thống cảnh báo sớm | Early Warning System |
| TSBĐ | Tài sản bảo đảm | Collateral |
| GDBĐ | Giao dịch bảo đảm | Secured Transaction |
| ĐKKD | Đăng ký kinh doanh | Business Registration |

## Appendix B: Sample SLA Summary

| Process Stage | SLA Target | Measurement |
|--------------|------------|-------------|
| Lead → KYC Complete | 3 ngày | Calendar days |
| KYC → DD Complete | 10 ngày | Working days |
| DD → Approval | 3 ngày | Working days |
| Approval → Disbursement | 5 ngày | Working days |
| **Total Lead → Disbursement** | **≤ 15 ngày làm việc** | Working days |
| Post-disbursement inspection | 30 ngày sau giải ngân | Calendar days |
| Annual review | 12 tháng cycle | Annual |

## Appendix C: Document Retention Schedule

| Category | Retention Period | Format | Storage |
|----------|-----------------|--------|---------|
| Credit files (active) | During loan life | Digital + Physical | DMS + Vault |
| Credit files (closed) | 5 years post-closure | Digital | DMS Archive |
| KYC/AML records | 5 years post-relationship | Digital | AML System |
| Approval minutes | 10 years | Digital + Physical | DMS + Vault |
| Audit logs | 10 years | Digital | Audit Log DB |
| Contracts | 10 years post-closure | Physical original + Digital | Vault + DMS |
| NPL/litigation files | Until resolution + 5 years | Digital + Physical | DMS + Vault |

---

*SOP V3.0 Enterprise Edition — Hoàn chỉnh.*

*Thiết kế theo mô hình enterprise-grade, tuân thủ Luật TCTD 32/2024/QH15,*
*TT 39/2016/TT-NHNN, TT 12/2024/TT-NHNN, Basel II/III.*
*Phù hợp triển khai tại ngân hàng thương mại và TCTD tại Việt Nam.*

*Ngày lập: 14/05/2026*
*Phê duyệt: Board of Directors*
*Phân phối: Toàn bộ đơn vị tín dụng, rủi ro, tuân thủ, vận hành, kiểm toán nội bộ*

