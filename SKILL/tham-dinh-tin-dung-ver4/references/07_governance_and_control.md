# 8. GOVERNANCE & INTERNAL CONTROL

## 8.1 RACI Matrix

| Activity | RM | CA | Risk | Legal | Compliance | CC | Ops | Audit |
|----------|----|----|------|-------|------------|-------|-----|-------|
| Lead Intake | **R/A** | I | I | - | I | - | - | - |
| KYC/AML | I | I | I | - | **R/A** | - | - | - |
| Document Collection | **R** | **A** | I | I | - | - | I | - |
| Financial Analysis | I | **R/A** | C | - | - | - | - | - |
| Risk Review | - | C | **R/A** | - | - | - | - | - |
| Approval | - | I | C | C | C | **R/A** | - | - |
| Contract Drafting | C | C | I | **R/A** | - | - | I | - |
| Disbursement | I | - | C | - | - | - | **R/A** | - |
| Post-Loan Monitoring | **R** | C | **A** | - | - | - | I | - |
| Audit | - | - | - | - | - | - | - | **R/A** |

*R = Responsible, A = Accountable, C = Consulted, I = Informed*

## 8.2 Segregation of Duty Matrix

| Actor 1 | Actor 2 | Quy tắc |
|---------|---------|---------|
| RM (origination) | CA (analysis) | KHÔNG ĐƯỢC là cùng 1 người |
| CA (analysis) | Risk Officer (review) | KHÔNG ĐƯỢC cùng reporting line |
| Loan Admin Maker | Loan Admin Checker | KHÔNG ĐƯỢC cùng 1 người |
| Valuer | RM | KHÔNG ĐƯỢC có quan hệ lợi ích |
| CC Member | RM/CA của deal | PHẢI declare conflict of interest |

## 8.3 Approval Authority Matrix (DOA)

| Hạn mức (VND) | Cấp phê duyệt | CRO Required | Board Required |
|---------------|----------------|--------------|----------------|
| < 10 tỷ | GĐ Chi nhánh | No | No |
| 10-50 tỷ | HĐTD Chi nhánh | No | No |
| 50-200 tỷ | HĐTD Hội sở | Yes (nếu BB+) | No |
| 200-500 tỷ | HĐTD HO mở rộng | Yes | No |
| > 500 tỷ | TGĐ + Board RC | Yes | Yes |
| Risk Grade ≤ BB | CRO approval | Yes (bắt buộc) | Nếu > 200 tỷ |
| Exception to policy | TGĐ + CRO | Yes | Nếu > 100 tỷ |

## 8.4 Escalation Matrix

| Trigger | Level 1 (24h) | Level 2 (48h) | Level 3 (72h) |
|---------|---------------|---------------|---------------|
| SLA breach | Manager trực tiếp | Head of Dept | CEO |
| Covenant breach | CA Manager | CRO | Credit Committee |
| EWS Red | RM Manager | CRO | Board RC |
| Fraud suspicion | Compliance | CCO + CRO | Board + Regulators |
| Regulatory breach | Compliance | CCO + CEO | Board + NHNN |

## 8.5 Internal Audit Checklist

| # | Kiểm tra | Tần suất | Standard |
|---|----------|----------|----------|
| 1 | KYC/AML screening completeness | Annual sample | 100% compliance |
| 2 | Document checklist compliance | Annual sample | ≥ 95% |
| 3 | Scoring model accuracy | Annual | Backtesting pass |
| 4 | DOA compliance | Annual sample | 100% |
| 5 | Maker-checker compliance | Annual sample | 100% |
| 6 | Covenant monitoring timeliness | Annual sample | ≥ 90% on-time |
| 7 | Post-loan inspection | Annual sample | ≥ 80% on-schedule |
| 8 | TSBĐ revaluation | Annual sample | ≥ 90% on-cycle |
| 9 | Audit trail completeness | Annual sample | 100% |
| 10 | Regulatory limit compliance | Quarterly | 100% |

---

# 9. TECHNOLOGY ARCHITECTURE

## 9.1 System Landscape

```
┌────────────────────────────────────────────────────────────┐
│                    PRESENTATION LAYER                       │
│  Web Portal │ Mobile App │ Management Dashboard │ MIS      │
├────────────────────────────────────────────────────────────┤
│                    APPLICATION LAYER                        │
│                                                            │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐     │
│  │   LOS   │  │   LMS   │  │   BPM   │  │   DMS   │     │
│  │ Loan    │  │ Loan    │  │Workflow │  │Document │     │
│  │Originate│  │ Manage  │  │ Engine  │  │ Manage  │     │
│  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘     │
│       │            │            │            │            │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐     │
│  │Scoring  │  │  Rule   │  │   OCR   │  │  eKYC   │     │
│  │ Engine  │  │ Engine  │  │ Engine  │  │ Engine  │     │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘     │
├────────────────────────────────────────────────────────────┤
│                    INTEGRATION LAYER                        │
│  API Gateway │ ESB │ Message Queue                         │
├────────────────────────────────────────────────────────────┤
│                    EXTERNAL SYSTEMS                         │
│  CIC │ NHNN │ Tổng cục Thuế │ ĐKGDBĐ │ ĐKKD │ AML DB    │
├────────────────────────────────────────────────────────────┤
│                    CORE SYSTEMS                             │
│  Core Banking │ GL │ Data Warehouse │ Audit Log DB         │
└────────────────────────────────────────────────────────────┘
```

## 9.2 System Components

| Component | Chức năng | Key Features |
|-----------|----------|--------------|
| **LOS** | Quản lý quy trình từ Lead → Approval | Workflow, checklist, scoring, approval routing |
| **LMS** | Quản lý sau giải ngân | Disbursement, repayment, monitoring, covenant |
| **BPM** | Workflow engine | Configurable workflow, SLA tracking, escalation |
| **DMS** | Quản lý tài liệu | Upload, versioning, OCR, search, retention |
| **Scoring Engine** | Chấm điểm tín dụng | Auto-calculate, configurable weights, override log |
| **Rule Engine** | Business rules | Eligibility, limits, DOA, compliance checks |
| **OCR Engine** | Trích xuất dữ liệu | BCTC, CMND, ĐKKD auto-extraction |
| **eKYC** | Xác thực danh tính | Face matching, ID verification, liveness check |
| **Audit Log** | Ghi nhận mọi action | Immutable log, who-what-when, report generation |
| **Dashboard/MIS** | Báo cáo quản trị | Portfolio view, KPI tracking, EWS display |

## 9.3 Integration Points

| Integration | Protocol | Frequency | Purpose |
|------------|----------|-----------|---------|
| CIC → LOS | API REST | On-demand | Credit check |
| NHNN → LMS | Batch/API | Daily | Regulatory reporting |
| Tổng cục Thuế → LOS | API | On-demand | MST verification |
| ĐKKD → LOS | API | On-demand | Business registration check |
| ĐKGDBĐ → LOS | API | On-demand | Security registration check |
| AML Database → AML System | API | Real-time | Sanctions/PEP screening |
| Core Banking → LMS | API | Real-time | Account, balance, transaction |
| OCR → DMS | Internal | On-upload | Document data extraction |

## 9.4 Audit Logging Requirements

| What to Log | Fields | Retention |
|-------------|--------|-----------|
| User actions | user_id, action, timestamp, record_id, old_value, new_value | 10 years |
| System events | event_type, timestamp, system, result | 10 years |
| Approval decisions | approver_id, decision, conditions, timestamp | Permanent |
| Document uploads | uploader_id, doc_type, filename, timestamp, hash | 10 years |
| Scoring results | score, grade, override_flag, override_reason | 10 years |

## 9.5 Quy trình Dự phòng Thủ công (Manual Fallback Procedure — MFP)

**A. Điều kiện kích hoạt MFP:**
MFP được kích hoạt khi LOS/DMS/BPM không khả dụng liên tục > 4 giờ làm việc trong giờ hành chính. Quyết định kích hoạt: Trưởng bộ phận Loan Operations hoặc người được ủy quyền.

**B. Nguyên tắc vận hành thủ công:**
- Mọi hồ sơ xử lý trong thời gian MFP phải được đánh dấu "MFP — [Ngày/Giờ kích hoạt]"
- Sử dụng mẫu giấy/file Excel đã được phê duyệt sẵn (lưu tại SharePoint/ổ đĩa dùng chung ngoài LOS) — Loan Admin chịu trách nhiệm cập nhật template định kỳ hàng quý
- Phê duyệt qua email có chữ ký điện tử của cấp có thẩm quyền (theo DOA hiện hành)
- KHÔNG xử lý hồ sơ mới vượt hạn mức [xác định theo DOA từng tổ chức] trong thời gian MFP

**C. Reconciliation sau MFP:**
Trong vòng 1 ngày làm việc sau khi hệ thống khôi phục: Loan Admin nhập toàn bộ giao dịch MFP vào LOS với ghi chú "Manual Entry — MFP Reference No." Internal Audit sampling 100% giao dịch MFP trong vòng 5 ngày làm việc.

---

