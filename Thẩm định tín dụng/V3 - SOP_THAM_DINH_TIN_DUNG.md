# QUY TRÌNH THẨM ĐỊNH TÍN DỤNG DOANH NGHIỆP
## ENTERPRISE CORPORATE CREDIT APPRAISAL — STANDARD OPERATING PROCEDURE

**Phiên bản**: V3.0 — Enterprise Edition  
**Ngày hiệu lực**: 14/05/2026  
**Phạm vi**: Toàn bộ khoản cấp tín dụng doanh nghiệp  
**Phân loại**: TÀI LIỆU MẬT — Chỉ lưu hành nội bộ  
**Tuân thủ**: Luật TCTD 32/2024/QH15 · TT 39/2016/TT-NHNN · TT 12/2024/TT-NHNN · Basel II/III  

> **Tuyên bố**: SOP này được thiết kế theo chuẩn enterprise-grade, phù hợp triển khai tại ngân hàng thương mại và tổ chức tín dụng tại Việt Nam. Mọi khoản tín dụng phải tuân thủ đầy đủ quy trình trước khi phê duyệt và giải ngân.

---

# MỤC LỤC TỔNG

| # | Phần | Mô tả |
|---|------|-------|
| 1 | Executive Overview | Tổng quan, phạm vi, nguyên tắc, mô hình tổ chức |
| 2 | End-to-End Credit Process Map | Workflow tổng, lifecycle, gate kiểm soát |
| 3 | Detailed Phase-by-Phase Workflow | 27 phase chi tiết |
| 4 | Credit Risk Framework | Scoring, rating, PD/LGD/EAD, approval matrix |
| 5 | Financial Analysis Framework | Ratios, formulas, thresholds, red flags |
| 6 | Collateral Management Framework | Valuation, LTV, legal, monitoring |
| 7 | Post-Loan Monitoring Framework | EWS, covenant, delinquency, restructuring |
| 8 | Governance & Internal Control | RACI, SOD, maker-checker, escalation |
| 9 | Technology Architecture | LOS/LMS/BPM, integrations, engines |
| 10 | SOP & Operational Templates | Checklist, memo, templates |
| 11 | Implementation Roadmap | Phase triển khai, maturity model |
| 12 | Best Practices & Common Failure Points | Anti-fraud, lessons learned |
| 13 | Anti-Fraud Framework | Detection, prevention, investigation |
| 14 | Audit & Compliance Readiness | Audit checklist, compliance mapping |
| 15 | Appendices | Glossary, samples, matrices |

---

# 1. EXECUTIVE OVERVIEW

## 1.1 Mục tiêu Quy trình

| Mục tiêu | Mô tả | Đo lường |
|-----------|--------|----------|
| **Kiểm soát rủi ro tín dụng** | Đảm bảo mọi khoản vay được thẩm định độc lập, đa chiều | NPL < 2.0% portfolio |
| **Tuân thủ pháp luật** | 100% tuân thủ Luật TCTD 2024, TT39, TT12 | 0 vi phạm pháp lý/năm |
| **Hiệu quả vận hành** | Quy trình chuẩn hóa, số hóa, đo lường được | TAT ≤ 15 ngày làm việc |
| **Quản trị minh bạch** | Tách bạch chức năng, audit trail đầy đủ | 100% hồ sơ có audit log |
| **Hỗ trợ số hóa** | Workflow-ready, API-ready, system-ready | 100% phase trên LOS/LMS |

## 1.2 Phạm vi Áp dụng

**Áp dụng cho:**
- Cho vay doanh nghiệp (Corporate Lending)
- Cho vay dự án (Project Finance)
- Bảo lãnh ngân hàng (Bank Guarantee)
- L/C và Trade Finance
- Cho vay hợp vốn (Syndicated Lending)

**Cơ sở pháp lý:**

| Văn bản | Nội dung áp dụng |
|---------|-----------------|
| Luật TCTD 32/2024/QH15 | Quy định chung về cấp tín dụng, giới hạn, điều kiện |
| TT 39/2016/TT-NHNN | Quy định hoạt động cho vay của TCTD |
| TT 12/2024/TT-NHNN | Sửa đổi, bổ sung TT39 — điều kiện vay, hồ sơ, kiểm tra sử dụng vốn |
| NĐ 116/2018/NĐ-CP | Giới hạn, tỷ lệ bảo đảm an toàn |
| Luật Phòng chống rửa tiền 2022 | KYC/AML/CFT |
| TT 09/2023/TT-NHNN | Hướng dẫn phòng chống rửa tiền |

## 1.3 Nguyên tắc Vận hành

### Nguyên tắc 1: Tách bạch chức năng (Segregation of Duty)
```
Front Office (Kinh doanh/RM) ≠ Middle Office (Thẩm định) ≠ Back Office (Vận hành)
                              ≠ Risk (Rủi ro độc lập)
                              ≠ Compliance (Tuân thủ)
                              ≠ Approval (Phê duyệt)
```
**Cơ sở**: Điều 4, Luật TCTD 32/2024 — nguyên tắc quản trị, kiểm soát nội bộ.

### Nguyên tắc 2: Three Lines of Defense
```
Line 1: Business Units (RM, Credit Analyst)
        → Chịu trách nhiệm origination, thu thập, đề xuất
        
Line 2: Risk Management, Compliance, Legal
        → Kiểm soát độc lập, thẩm định rủi ro, tuân thủ
        
Line 3: Internal Audit
        → Kiểm tra sau (post-audit), đánh giá hiệu quả Line 1 & 2
```

### Nguyên tắc 3: Maker-Checker
- Mọi thao tác nhập liệu, đánh giá, phê duyệt phải có ít nhất 2 người
- Maker ≠ Checker ở mọi cấp

### Nguyên tắc 4: Phê duyệt theo phân cấp
- Tuân thủ Delegation of Authority (DOA) do HĐQT ban hành
- Vượt thẩm quyền → escalate lên cấp trên
- Mọi exception phải được phê duyệt và ghi nhận

### Nguyên tắc 5: Audit Trail toàn diện
- Mọi hành động trên hồ sơ được ghi log: ai, làm gì, khi nào, trên hồ sơ nào
- Không xóa, không sửa ngược — chỉ bổ sung
- Lưu trữ tối thiểu 5 năm sau khi tất toán (Điều 97, Luật TCTD 2024)

## 1.4 Mô hình Tổ chức Tín dụng Enterprise

```
┌─────────────────────────────────────────────────────────────────┐
│                      BOARD OF DIRECTORS                         │
│                    Board Risk Committee                         │
├─────────────────────────────────────────────────────────────────┤
│                        CEO / TGĐ                               │
├──────────┬──────────┬──────────┬──────────┬─────────────────────┤
│  FRONT   │  MIDDLE  │   RISK   │COMPLIANCE│   BACK OFFICE      │
│  OFFICE  │  OFFICE  │          │ & LEGAL  │   & OPERATIONS     │
├──────────┼──────────┼──────────┼──────────┼─────────────────────┤
│ RM       │ Credit   │ CRO      │ CCO      │ Loan Admin         │
│ Branch   │ Analyst  │ Risk     │ AML      │ Disbursement       │
│ Sales    │ Sector   │ Review   │ Legal    │ Documentation      │
│ Customer │ Analyst  │ Portfolio│ Counsel  │ Archiving          │
│ Service  │ Valuer   │ Analytics│          │ Settlement         │
├──────────┴──────────┴──────────┴──────────┴─────────────────────┤
│                      INTERNAL AUDIT                             │
│                   (Line 3 — Independent)                        │
├─────────────────────────────────────────────────────────────────┤
│                    CREDIT COMMITTEE                             │
│         Branch CC │ Regional CC │ HO CC │ Board RC             │
└─────────────────────────────────────────────────────────────────┘
```

### Vai trò và Trách nhiệm

| Vai trò | Thuộc | Trách nhiệm chính |
|---------|-------|-------------------|
| **Relationship Manager (RM)** | Front Office | Tiếp nhận nhu cầu, thu thập hồ sơ, lập đề xuất tín dụng |
| **Credit Analyst (CA)** | Middle Office | Thẩm định độc lập: tài chính, phi tài chính, rủi ro |
| **Sector Analyst** | Middle Office | Phân tích ngành, thị trường, cạnh tranh |
| **Collateral Valuer** | Middle Office | Định giá TSBĐ, kiểm tra pháp lý tài sản |
| **Risk Officer** | Risk | Đánh giá rủi ro độc lập, stress test, portfolio review |
| **CRO** | Risk | Phê duyệt rủi ro, quyền veto, báo cáo Board |
| **Compliance Officer** | Compliance | KYC/AML, kiểm tra tuân thủ, regulatory reporting |
| **Legal Counsel** | Legal | Soạn thảo hợp đồng, ý kiến pháp lý, enforceability |
| **Credit Committee** | Governance | Phê duyệt tín dụng theo DOA |
| **Loan Admin** | Back Office | Nhập hệ thống, giải ngân, theo dõi hợp đồng |
| **Internal Audit** | Line 3 | Kiểm tra tuân thủ SOP, kiểm toán hồ sơ |
| **Recovery Team** | Special Assets | Thu hồi nợ, xử lý TSBĐ, tố tụng |

---

# 2. END-TO-END CREDIT PROCESS MAP

## 2.1 Lifecycle Tổng quan Khoản vay

```
┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐
│  INTAKE  │──▶│  DUE    │──▶│APPROVAL │──▶│DISBURSE │──▶│MONITOR  │
│ & KYC   │   │DILIGENCE│   │         │   │         │   │& COLLECT│
│         │   │         │   │         │   │         │   │         │
│Phase 1-4│   │Phase 5-13│  │Phase14-15│  │Phase16-19│  │Phase20-27│
└─────────┘   └─────────┘   └─────────┘   └─────────┘   └─────────┘
   GATE 1        GATE 2        GATE 3        GATE 4        GATE 5
```

## 2.2 Gate Control Framework

| Gate | Tên | Mục đích | Quyết định | Actor |
|------|-----|----------|------------|-------|
| **GATE 1** | Eligibility Gate | KYC/AML pass, đủ điều kiện cơ bản | GO / NO-GO | Compliance + RM Manager |
| **GATE 2** | Credit Quality Gate | Thẩm định đạt, scoring pass | APPROVE / REJECT / REWORK | Credit Analyst Manager |
| **GATE 3** | Approval Gate | Phê duyệt theo DOA | APPROVE / CONDITIONAL / REJECT | Credit Committee |
| **GATE 4** | Disbursement Gate | Điều kiện giải ngân đủ | DISBURSE / HOLD | Loan Admin + Risk |
| **GATE 5** | Monitoring Gate | Theo dõi liên tục | NORMAL / WATCHLIST / NPL | Risk + Recovery |

## 2.3 Workflow Tổng — 27 Phase

```
                    ┌──────────────────────────────────┐
                    │     1. LEAD INTAKE                │
                    └──────────┬───────────────────────┘
                               ▼
                    ┌──────────────────────────────────┐
                    │     2. CUSTOMER ONBOARDING        │
                    └──────────┬───────────────────────┘
                               ▼
                    ┌──────────────────────────────────┐
                    │     3. KYC & AML SCREENING        │
                    └──────────┬───────────────────────┘
                               ▼
              ══════ GATE 1: ELIGIBILITY ══════
                               ▼
                    ┌──────────────────────────────────┐
                    │     4. DOCUMENT COLLECTION        │
                    └──────────┬───────────────────────┘
                               ▼
            ┌──────────────────┼──────────────────┐
            ▼                  ▼                  ▼
   ┌─────────────┐  ┌──────────────┐  ┌──────────────┐
   │5. LEGAL     │  │6. BUSINESS   │  │7. FINANCIAL  │
   │ASSESSMENT   │  │ASSESSMENT    │  │ANALYSIS      │
   └──────┬──────┘  └──────┬───────┘  └──────┬───────┘
          │                │                  │
          ▼                ▼                  ▼
   ┌─────────────┐  ┌──────────────┐  ┌──────────────┐
   │             │  │9. LOAN       │  │8. CASH FLOW  │
   │             │  │PURPOSE       │  │ANALYSIS      │
   │             │  │ASSESSMENT    │  │              │
   └─────────────┘  └──────┬───────┘  └──────┬───────┘
                           │                  │
            ┌──────────────┴──────────────────┘
            ▼
   ┌──────────────────────────────────┐
   │    10. CREDIT SCORING & RATING   │
   └──────────┬───────────────────────┘
              ▼
   ┌──────────────────────────────────┐
   │    11. COLLATERAL VALUATION      │
   └──────────┬───────────────────────┘
              ▼
   ┌──────────────────────────────────┐
   │    12. INDEPENDENT RISK REVIEW   │
   └──────────┬───────────────────────┘
              ▼
         ┌────┴────┐
         │RE-WORK? │──YES──▶ 13. RE-ASSESSMENT
         └────┬────┘                 │
              │NO                    │
              ◀──────────────────────┘
              ▼
      ══════ GATE 2: CREDIT QUALITY ══════
              ▼
   ┌──────────────────────────────────┐
   │    14. APPROVAL SUBMISSION       │
   └──────────┬───────────────────────┘
              ▼
   ┌──────────────────────────────────┐
   │    15. CREDIT APPROVAL           │
   └──────────┬───────────────────────┘
              ▼
      ══════ GATE 3: APPROVAL ══════
              ▼
   ┌──────────────────────────────────┐
   │    16. FACILITY STRUCTURING      │
   └──────────┬───────────────────────┘
              ▼
   ┌──────────────────────────────────┐
   │    17. CONTRACT DRAFTING         │
   └──────────┬───────────────────────┘
              ▼
   ┌──────────────────────────────────┐
   │    18. PRE-DISBURSEMENT CHECK    │
   └──────────┬───────────────────────┘
              ▼
      ══════ GATE 4: DISBURSEMENT ══════
              ▼
   ┌──────────────────────────────────┐
   │    19. DISBURSEMENT              │
   └──────────┬───────────────────────┘
              ▼
   ┌──────────────────────────────────┐
   │    20. POST-LOAN MONITORING      │
   ├──────────────────────────────────┤
   │    21. COVENANT MONITORING       │
   ├──────────────────────────────────┤
   │    22. EARLY WARNING MONITORING  │
   ├──────────────────────────────────┤
   │    23. DELINQUENCY MONITORING    │
   └──────────┬───────────────────────┘
              ▼
         ┌────┴────┐
         │PROBLEM? │──YES──▶ 24. RESTRUCTURING
         └────┬────┘                │
              │NO                   ▼
              │            25. RECOVERY & COLLECTION
              │                     │
              │                     ▼
              │            26. NPL HANDLING
              ▼
      ══════ GATE 5: MONITORING ══════
              ▼
   ┌──────────────────────────────────┐
   │    27. ARCHIVING & AUDIT TRAIL   │
   └──────────────────────────────────┘
```

## 2.4 SLA Tổng quan theo Phase

| Phase | SLA | Actor chính | Escalation nếu vượt SLA |
|-------|-----|-------------|-------------------------|
| 1. Lead Intake | 1 ngày | RM | RM Manager |
| 2. Customer Onboarding | 2 ngày | RM + Ops | Branch Manager |
| 3. KYC/AML | 2 ngày | Compliance | CCO |
| 4. Document Collection | 5 ngày | RM | RM Manager |
| 5. Legal Assessment | 3 ngày | Legal | Head of Legal |
| 6. Business Assessment | 3 ngày | CA + Sector Analyst | CA Manager |
| 7. Financial Analysis | 3 ngày | CA | CA Manager |
| 8. Cash Flow Analysis | 2 ngày | CA | CA Manager |
| 9. Loan Purpose Assessment | 2 ngày | CA + RM | CA Manager |
| 10. Credit Scoring | 1 ngày | CA + System | CA Manager |
| 11. Collateral Valuation | 5 ngày | Valuer + Legal | Head of Valuation |
| 12. Independent Risk Review | 3 ngày | Risk Officer | CRO |
| 13. Re-Assessment | 3 ngày | CA | CA Manager |
| 14. Approval Submission | 1 ngày | CA | CA Manager |
| 15. Credit Approval | 2 ngày | Credit Committee | Board RC |
| 16. Facility Structuring | 2 ngày | CA + Legal | CA Manager |
| 17. Contract Drafting | 3 ngày | Legal | Head of Legal |
| 18. Pre-Disbursement Check | 2 ngày | Loan Admin + Risk | Ops Manager |
| 19. Disbursement | 1 ngày | Loan Admin | Ops Manager |
| 20-23. Monitoring | Ongoing | Risk + RM | CRO |
| 24. Restructuring | 15 ngày | Risk + Legal | CRO + Board |
| 25-26. Recovery/NPL | Per case | Recovery Team | CRO + Board |
| 27. Archiving | 5 ngày sau tất toán | Loan Admin | Ops Manager |

**Tổng TAT tiêu chuẩn (từ tiếp nhận đến giải ngân)**: ≤ 15 ngày làm việc

## 2.5 Exception & Rejection Flows

### Rejection Flow
```
Bất kỳ Phase nào → REJECT Decision
    → Ghi lý do từ chối (mandatory)
    → Thông báo RM + Khách hàng
    → Cập nhật trạng thái LOS: "REJECTED"
    → Lưu hồ sơ tối thiểu 5 năm
    → Audit log: rejection_reason, rejected_by, timestamp
```

### Rework Flow
```
Phase 12 (Risk Review) hoặc Phase 15 (Approval)
    → Yêu cầu bổ sung / chỉnh sửa
    → Return to Phase tương ứng
    → Ghi rework_reason, requested_by, timestamp
    → Maximum 2 rework cycles → nếu vẫn chưa đạt → REJECT
    → Audit log mọi rework
```

### Escalation Flow
```
SLA Breach (vượt SLA):
    Level 1: +1 ngày → Thông báo Manager trực tiếp
    Level 2: +2 ngày → Thông báo Head of Department
    Level 3: +3 ngày → Thông báo CEO/TGĐ
    
Risk Escalation:
    Amber trigger → CRO review trong 48h
    Red trigger   → CRO + CEO review trong 24h
    Critical      → Board Risk Committee họp khẩn
```

---

# 3. DETAILED PHASE-BY-PHASE WORKFLOW

---

## PHASE 1: LEAD INTAKE — Tiếp nhận Nhu cầu

### A. Mục tiêu
| Loại | Mô tả |
|------|--------|
| **Nghiệp vụ** | Ghi nhận nhu cầu vay vốn, xác định sơ bộ tính khả thi |
| **Kiểm soát** | Đảm bảo không tiếp nhận khách hàng thuộc danh sách cấm, loại trừ |

### B. Inputs
- Yêu cầu vay từ khách hàng (trực tiếp, email, referral, digital channel)
- Thông tin cơ bản: tên DN, MST, ngành nghề, nhu cầu vay, số tiền dự kiến
- Danh sách cấm/loại trừ nội bộ (Exclusion List)
- Nguồn CIC sơ bộ (nếu có)

### C. Quy trình Xử lý Chi tiết

| Bước | Mô tả | Actor | SLA | Hệ thống |
|------|--------|-------|-----|----------|
| 1.1 | Tiếp nhận yêu cầu, ghi nhận vào LOS | RM | 2h | LOS: tạo Lead ID |
| 1.2 | Kiểm tra Exclusion List nội bộ | RM | 1h | LOS: auto-check blacklist |
| 1.3 | Kiểm tra sơ bộ CIC (nếu có thông tin) | RM | 2h | CIC Gateway |
| 1.4 | Đánh giá sơ bộ tính khả thi | RM | 2h | LOS: pre-screening form |
| 1.5 | Quyết định: Tiếp tục / Từ chối sơ bộ | RM Manager | 1h | LOS: approval checkpoint |
| 1.6 | Nếu tiếp tục → chuyển Phase 2 | RM | 30min | LOS: route to Phase 2 |

**Escalation**: Nhu cầu vay > 100 tỷ → RM Manager review trước khi tiếp nhận.

**Exception**: KH thuộc Exclusion List → REJECT ngay, ghi lý do, thông báo Compliance.

### D. Outputs
- Lead record trên LOS (Lead ID, trạng thái, thông tin cơ bản)
- Pre-screening result: PASS / REJECT
- Nếu REJECT: rejection log + reason

### E. Rủi ro

| Loại | Rủi ro | Biện pháp |
|------|--------|-----------|
| Fraud | RM cố tình tiếp nhận KH bị cấm | Auto-check Exclusion List, dual review |
| Operational | Thông tin sai/thiếu | Mandatory fields trên LOS |
| Compliance | Không kiểm tra blacklist | System-enforced check, audit log |

### F. Controls
- **Maker-Checker**: RM tạo lead → RM Manager approve
- **System Control**: LOS tự động check Exclusion List
- **Audit Trail**: Mọi lead được log: created_by, timestamp, pre-screen result

### G. KPI/SLA
| KPI | Target |
|-----|--------|
| Lead processing time | ≤ 1 ngày làm việc |
| Exclusion check completion | 100% |
| Lead conversion rate | Tracking (không có target cố định) |

### H. Technology Actions
- LOS: Tạo Lead ID, auto-assign RM, check Exclusion List
- Workflow: Route to Phase 2 nếu PASS
- Audit: Log tất cả actions

---

## PHASE 2: CUSTOMER ONBOARDING — Đăng ký Khách hàng

### A. Mục tiêu
| Loại | Mô tả |
|------|--------|
| **Nghiệp vụ** | Thiết lập hồ sơ khách hàng đầy đủ trên hệ thống Core Banking |
| **Kiểm soát** | Xác minh danh tính pháp nhân, đảm bảo KYC cơ bản trước khi thẩm định |

### B. Inputs
- Giấy CN ĐKKD / Giấy CN đầu tư
- Điều lệ công ty
- CMND/CCCD người đại diện pháp luật
- Giấy ủy quyền (nếu không phải người đại diện)
- Biên bản họp HĐQT/HĐTV về việc vay vốn (Điều 153, Luật DN 2020)

### C. Quy trình Xử lý Chi tiết

| Bước | Mô tả | Actor | SLA | Hệ thống |
|------|--------|-------|-----|----------|
| 2.1 | Thu thập hồ sơ pháp nhân cơ bản | RM | 4h | DMS: upload documents |
| 2.2 | Xác minh MST trên hệ thống thuế | RM | 1h | API: Tổng cục Thuế |
| 2.3 | Xác minh ĐKKD trên Cổng TTQGDN | RM | 1h | API: dangkykinhdoanh.gov.vn |
| 2.4 | Kiểm tra trùng lặp KH trên Core | Ops | 1h | Core Banking: CIF check |
| 2.5 | Tạo/cập nhật CIF trên Core Banking | Ops | 2h | Core: create/update CIF |
| 2.6 | eKYC người đại diện pháp luật | RM | 1h | eKYC: facial recognition + ID verify |
| 2.7 | RM Manager review và approve onboarding | RM Manager | 2h | LOS: approval |

**Escalation**: Thông tin ĐKKD không khớp → hold, báo Compliance.

### D. Outputs
- CIF (Customer Information File) trên Core Banking
- Hồ sơ pháp nhân đã verify trên DMS
- Onboarding status: COMPLETED / PENDING / REJECTED

### E. Rủi ro

| Loại | Rủi ro | Biện pháp |
|------|--------|-----------|
| Fraud | Giả mạo ĐKKD, giả mạo người đại diện | eKYC + cross-check cổng ĐKKD |
| Legal | ĐKKD hết hạn, ngành nghề không phù hợp | Auto-check validity |
| Operational | Tạo CIF trùng | Core Banking duplicate check |

### F. Controls
- **Maker-Checker**: RM tạo → Ops verify → RM Manager approve
- **eKYC**: Xác thực sinh trắc học người đại diện
- **System**: Auto-check MST, ĐKKD, CIF duplicate
- **Audit Trail**: Onboarding log đầy đủ

### G. KPI/SLA
| KPI | Target |
|-----|--------|
| Onboarding completion time | ≤ 2 ngày |
| eKYC success rate | ≥ 95% |
| CIF duplicate rate | 0% |

### H. Technology Actions
- Core Banking: CIF creation/update
- eKYC: ID verification + face matching
- DMS: Document upload + OCR extraction
- API: MST verification, ĐKKD verification

---

## PHASE 3: KYC & AML SCREENING

### A. Mục tiêu
| Loại | Mô tả |
|------|--------|
| **Nghiệp vụ** | Xác minh danh tính, sàng lọc rửa tiền, tài trợ khủng bố |
| **Kiểm soát** | Tuân thủ Luật PCRT 2022, TT 09/2023/TT-NHNN. FAIL = REJECT tức thì |

### B. Inputs
- CIF đã tạo tại Phase 2
- Thông tin UBO (Ultimate Beneficial Owner) — chủ sở hữu hưởng lợi
- Danh sách cổ đông / thành viên góp vốn
- Nguồn gốc vốn góp
- CIC report (< 30 ngày) — Điều 4, TT 39/2016

### C. Quy trình Xử lý Chi tiết

| Bước | Mô tả | Actor | SLA | Hệ thống |
|------|--------|-------|-----|----------|
| 3.1 | Sàng lọc OFAC / UN / EU Sanctions | Compliance | 1h | AML System: auto-screening |
| 3.2 | Sàng lọc PEP (Politically Exposed Person) | Compliance | 1h | AML: PEP database |
| 3.3 | Xác minh UBO qua các lớp sở hữu | Compliance | 4h | Manual + system |
| 3.4 | Kiểm tra Adverse Media (3 năm) | Compliance | 2h | Media screening tool |
| 3.5 | Xác minh nguồn gốc vốn góp | Compliance | 4h | Document review |
| 3.6 | Tra cứu CIC đầy đủ (KH + người liên quan) | Compliance | 2h | CIC Gateway |
| 3.7 | Đánh giá mức rủi ro rửa tiền: Low/Medium/High | Compliance | 2h | AML: risk scoring |
| 3.8 | EDD nếu High Risk (PEP, offshore, >500 tỷ) | Compliance + CCO | 1 ngày | Manual deep review |
| 3.9 | Compliance Officer phê duyệt KYC/AML | Compliance Officer | 2h | AML: approval |

**GATE 1 tại đây**: FAIL bất kỳ bước 3.1-3.6 → **REJECT NGAY**. Không exception.

### D. Outputs
- KYC/AML Assessment Report
- Risk Level: LOW / MEDIUM / HIGH
- CIC Report summary
- UBO declaration verified
- GATE 1 Decision: PASS / REJECT

### E. Rủi ro

| Loại | Rủi ro | Biện pháp |
|------|--------|-----------|
| Compliance | Không phát hiện PEP, sanctions | Auto-screening + manual review |
| Fraud | UBO giả, che giấu sở hữu thực | Trace qua nhiều lớp, yêu cầu xác nhận công chứng |
| Legal | Vi phạm Luật PCRT 2022 | 100% screening, zero exception policy |
| Credit | CIC sai, nợ xấu ẩn tại tổ chức khác | Cross-check CIC + trái phiếu DN (HNX) |

### F. Controls
- **System-Enforced**: AML screening tự động, không bypass được
- **Dual Review**: Compliance Officer + CCO cho High Risk
- **Zero Exception**: FAIL = REJECT, không có override
- **Audit Trail**: Toàn bộ screening result lưu log

### G. KPI/SLA
| KPI | Target |
|-----|--------|
| KYC/AML completion | ≤ 2 ngày (Low/Medium), ≤ 3 ngày (High/EDD) |
| Screening coverage | 100% — không bỏ sót |
| False positive rate | < 10% (optimize screening rules) |

### H. Technology Actions
- AML System: Auto-screening sanctions, PEP, adverse media
- CIC Gateway: Tra cứu tự động, parse kết quả
- LOS: Update KYC status, block workflow nếu FAIL
- Audit: Log toàn bộ screening results + decisions

---

## PHASE 4: DOCUMENT COLLECTION — Thu thập Hồ sơ

### A. Mục tiêu
| Loại | Mô tả |
|------|--------|
| **Nghiệp vụ** | Thu thập đầy đủ hồ sơ pháp lý, tài chính, kinh doanh để thẩm định |
| **Kiểm soát** | Đảm bảo hồ sơ đủ, hợp lệ, còn hiệu lực trước khi vào thẩm định |

### B. Inputs — Danh mục Hồ sơ Bắt buộc

**Nhóm 1 — Hồ sơ Pháp lý** (Điều 9, TT 39/2016):
| # | Tài liệu | Yêu cầu |
|---|----------|---------|
| 1 | Giấy CN ĐKKD / Giấy CN đầu tư | Bản gốc đối chiếu, bản sao công chứng |
| 2 | Điều lệ công ty (bản mới nhất) | Bản gốc hoặc sao y |
| 3 | Biên bản ĐHĐCĐ/HĐTV về việc vay vốn | Bản gốc, đủ chữ ký, đúng tỷ lệ biểu quyết |
| 4 | Giấy ủy quyền (nếu có) | Công chứng, còn hiệu lực |
| 5 | CMND/CCCD người đại diện + người ký | Bản gốc đối chiếu |

**Nhóm 2 — Hồ sơ Tài chính** (Điều 9, TT 39/2016):
| # | Tài liệu | Yêu cầu |
|---|----------|---------|
| 6 | BCTC kiểm toán 3 năm gần nhất | Full notes, ý kiến kiểm toán |
| 7 | BCTC quý gần nhất (nếu có) | Bản gốc, chữ ký Kế toán trưởng + Giám đốc |
| 8 | Tờ khai thuế GTGT 12 tháng | Bản đã nộp cơ quan thuế |
| 9 | Xác nhận nghĩa vụ thuế từ Chi cục Thuế | Văn bản chính thức (không tự khai) |
| 10 | Sao kê ngân hàng 12 tháng (tất cả TK) | Bao gồm TK tại NH khác |

**Nhóm 3 — Hồ sơ Kinh doanh / Phương án vay**:
| # | Tài liệu | Yêu cầu |
|---|----------|---------|
| 11 | Phương án kinh doanh / Dự án đầu tư | Chi tiết, có cơ sở |
| 12 | Phương án sử dụng vốn vay | Cụ thể mục đích, đối tượng, thời gian |
| 13 | Phương án trả nợ | Nguồn trả nợ, lịch trả nợ dự kiến |
| 14 | Hợp đồng kinh tế liên quan | Hợp đồng mua bán, cung cấp, xây dựng |
| 15 | Báo giá / hóa đơn / chứng từ chứng minh mục đích vay | Theo TT 12/2024 |

**Nhóm 4 — Hồ sơ TSBĐ**:
| # | Tài liệu | Yêu cầu |
|---|----------|---------|
| 16 | GCN QSDĐ / GCN sở hữu nhà | Bản gốc |
| 17 | Đăng ký xe / máy móc thiết bị | Bản gốc |
| 18 | Hồ sơ AR/Inventory (nếu thế chấp) | Aging report, danh mục chi tiết |
| 19 | Kết quả định giá TSBĐ (nếu đã có) | Từ tổ chức định giá độc lập |

### C. Quy trình Xử lý Chi tiết

| Bước | Mô tả | Actor | SLA | Hệ thống |
|------|--------|-------|-----|----------|
| 4.1 | RM gửi checklist hồ sơ cho KH | RM | 2h | LOS: generate checklist |
| 4.2 | Thu thập và upload hồ sơ lên DMS | RM | 3 ngày | DMS: upload + OCR |
| 4.3 | OCR trích xuất dữ liệu tự động | System | Auto | OCR Engine |
| 4.4 | Kiểm tra tính đầy đủ và hợp lệ | RM | 4h | LOS: completeness check |
| 4.5 | Đánh dấu hồ sơ thiếu, yêu cầu bổ sung | RM | 2h | LOS: deficiency notice |
| 4.6 | CA review tính đầy đủ hồ sơ | CA | 4h | LOS: document review |
| 4.7 | Xác nhận hồ sơ đủ → chuyển thẩm định | CA Manager | 2h | LOS: approve + route |

**Exception**: Hồ sơ thiếu > 3 mục quan trọng sau 5 ngày → HOLD, escalate RM Manager.

### D. Outputs
- Document checklist status: COMPLETE / INCOMPLETE
- Hồ sơ đã upload và OCR trên DMS
- Deficiency list (nếu có)
- Xác nhận đủ hồ sơ để vào thẩm định

### E. Rủi ro

| Loại | Rủi ro | Biện pháp |
|------|--------|-----------|
| Fraud | Hồ sơ giả mạo, BCTC xào nấu | Cross-check nhiều nguồn, OCR + manual verify |
| Operational | Hồ sơ thiếu, hết hạn | System-enforced checklist, expiry tracking |
| Compliance | Không đủ hồ sơ theo TT39/TT12 | Mandatory checklist per regulation |
| Legal | Biên bản ĐHĐCĐ không hợp lệ | Legal review tỷ lệ biểu quyết |

### F. Controls
- **Checklist bắt buộc**: LOS không cho phép chuyển phase nếu thiếu hồ sơ mandatory
- **OCR + Manual**: Dual verification cho BCTC và hồ sơ pháp lý
- **Expiry tracking**: Hệ thống cảnh báo hồ sơ sắp hết hạn
- **Audit Trail**: Upload log, verification log, approval log

### G. KPI/SLA
| KPI | Target |
|-----|--------|
| Document collection time | ≤ 5 ngày |
| Completeness rate at first submission | ≥ 80% |
| Deficiency turnaround | ≤ 2 ngày bổ sung |
| OCR accuracy rate | ≥ 90% |

### H. Technology Actions
- DMS: Document upload, versioning, OCR extraction
- LOS: Checklist management, completeness validation
- OCR: Auto-extract data từ BCTC, ĐKKD, CMND
- Workflow: Block transition nếu mandatory docs missing

---

## PHASE 5: LEGAL ASSESSMENT — Thẩm định Pháp lý

### A. Mục tiêu
| Loại | Mô tả |
|------|--------|
| **Nghiệp vụ** | Xác minh năng lực pháp lý vay vốn, tính hợp pháp của giao dịch |
| **Kiểm soát** | Đảm bảo hợp đồng tín dụng có hiệu lực pháp lý, TSBĐ enforceable |

### B. Inputs
- Hồ sơ pháp lý đã thu thập tại Phase 4
- Điều lệ công ty, Biên bản ĐHĐCĐ/HĐTV
- GCN QSDĐ và hồ sơ TSBĐ
- Hợp đồng kinh tế liên quan
- Thông tin tranh chấp, kiện tụng (nếu có)

### C. Quy trình Xử lý Chi tiết

| Bước | Mô tả | Actor | SLA |
|------|--------|-------|-----|
| 5.1 | Kiểm tra tư cách pháp nhân: ĐKKD còn hiệu lực, ngành nghề phù hợp | Legal | 2h |
| 5.2 | Kiểm tra thẩm quyền ký kết: người đại diện, giấy ủy quyền, NQ HĐQT | Legal | 2h |
| 5.3 | Kiểm tra tỷ lệ biểu quyết Biên bản ĐHĐCĐ/HĐTV (≥65% hoặc theo Điều lệ) | Legal | 2h |
| 5.4 | Kiểm tra giới hạn vay theo Điều lệ và Luật DN 2020 | Legal | 2h |
| 5.5 | Kiểm tra pháp lý TSBĐ: quyền sở hữu, tranh chấp, quy hoạch, encumbrance | Legal | 4h |
| 5.6 | Kiểm tra QSDĐ: loại đất, hình thức trả tiền, thời hạn sử dụng | Legal | 2h |
| 5.7 | Tra cứu Đăng ký GDBĐ: TSBĐ đã thế chấp nơi khác chưa | Legal | 2h |
| 5.8 | Kiểm tra tranh chấp, kiện tụng đang có | Legal | 2h |
| 5.9 | Lập Legal Opinion | Legal Counsel | 4h |
| 5.10 | Head of Legal review và phê duyệt | Head of Legal | 2h |

### D. Outputs
- Legal Assessment Report
- Legal Opinion (ý kiến pháp lý)
- TSBĐ Legal Status: CLEAR / ENCUMBERED / DISPUTED
- Recommendation: PROCEED / CONDITIONAL / REJECT

### E. Rủi ro

| Loại | Rủi ro | Biện pháp |
|------|--------|-----------|
| Legal | NQ vay vốn không hợp lệ → HĐ vô hiệu | Kiểm tra tỷ lệ biểu quyết theo Điều lệ |
| Legal | TSBĐ đã thế chấp nơi khác (double pledging) | Tra cứu ĐKGDBĐ bắt buộc |
| Legal | QSDĐ trả tiền hàng năm → không thế chấp QSDĐ | Phân biệt loại QSDĐ theo Luật Đất đai |
| Fraud | Giả mạo GCN QSDĐ | Cross-check Văn phòng ĐKĐĐ |
| Compliance | Vi phạm giới hạn cấp tín dụng (Điều 136, Luật TCTD 2024) | Auto-check giới hạn trên LOS |

### F. Controls
- **Dual Review**: Legal Counsel lập → Head of Legal phê duyệt
- **System Check**: Auto-query ĐKGDBĐ, ĐKĐĐ
- **Mandatory**: Legal Opinion bắt buộc trước khi trình phê duyệt
- **Audit Trail**: Mọi kiểm tra pháp lý được log

### G. KPI/SLA
| KPI | Target |
|-----|--------|
| Legal assessment time | ≤ 3 ngày |
| Legal opinion issuance | 100% trước approval |
| Double-pledge detection | 100% |

---

## PHASE 6: BUSINESS ASSESSMENT — Thẩm định Doanh nghiệp

### A. Mục tiêu
| Loại | Mô tả |
|------|--------|
| **Nghiệp vụ** | Đánh giá năng lực kinh doanh, vị thế thị trường, chất lượng quản trị |
| **Kiểm soát** | Phát hiện rủi ro phi tài chính: ngành, quản trị, tập trung KH/NCC |

### B. Inputs
- BCTC 3 năm, BCTC quý gần nhất
- Phương án kinh doanh
- Hợp đồng kinh tế, danh sách KH/NCC chính
- Thông tin ngành nghề, thị trường
- CIC report, thông tin báo chí

### C. Quy trình Xử lý Chi tiết

| Bước | Mô tả | Actor | SLA |
|------|--------|-------|-----|
| 6.1 | Phân tích ngành: quy mô, tăng trưởng, chu kỳ, rào cản, rủi ro chính sách | Sector Analyst | 4h |
| 6.2 | Phân tích vị thế cạnh tranh: thị phần, lợi thế, Porter's 5 Forces | CA | 4h |
| 6.3 | Đánh giá Ban lãnh đạo: kinh nghiệm, năng lực, integrity | CA | 2h |
| 6.4 | Phân tích cơ cấu sở hữu và quan hệ liên quan | CA | 2h |
| 6.5 | Đánh giá tập trung KH: Top 5 KH chiếm bao nhiêu % DT | CA | 2h |
| 6.6 | Đánh giá tập trung NCC: Top 5 NCC chiếm bao nhiêu % chi phí | CA | 2h |
| 6.7 | Phân tích SWOT tổng hợp | CA | 2h |
| 6.8 | Kiểm tra giao dịch nội bộ / Related Party Transactions | CA | 4h |
| 6.9 | Lập Business Assessment Report | CA | 4h |
| 6.10 | CA Manager review | CA Manager | 2h |

**Ngưỡng cảnh báo tập trung KH** (BANKING PRACTICE):

| Ngành | Amber | Red |
|-------|-------|-----|
| Manufacturing B2C | > 25% DT từ 1 KH | > 40% |
| Manufacturing B2B | > 40% | > 60% |
| Construction | > 50% | > 70% |
| FMCG / Consumer | > 20% | > 35% |

### D. Outputs
- Business Assessment Report
- Industry Risk Score: LOW / MEDIUM / HIGH
- Management Quality Assessment
- SWOT Analysis
- Related Party Transaction Review

### E. Rủi ro

| Loại | Rủi ro | Biện pháp |
|------|--------|-----------|
| Credit | Ngành suy thoái, cạnh tranh gay gắt | Industry risk scoring |
| Fraud | Related party tunneling (rút ruột) | Phân tích BCTC hợp nhất vs riêng lẻ |
| Operational | Phụ thuộc 1-2 KH lớn | Concentration covenant |
| Credit | Ban lãnh đạo yếu kém | Management assessment, governance review |

### F. Controls
- **Independent Analysis**: CA thẩm định độc lập, không phụ thuộc RM
- **Dual Review**: CA lập → CA Manager review
- **Cross-check**: BCTC vs thuế vs sao kê ngân hàng
- **Audit Trail**: Assessment report versioned và locked

---

## PHASE 7: FINANCIAL ANALYSIS — Phân tích Tài chính

### A. Mục tiêu
| Loại | Mô tả |
|------|--------|
| **Nghiệp vụ** | Đánh giá sức khỏe tài chính, năng lực trả nợ, xu hướng tài chính |
| **Kiểm soát** | Phát hiện bất thường BCTC, window dressing, thao túng số liệu |

### B. Inputs
- BCTC kiểm toán 3 năm + BCTC quý gần nhất
- Sao kê ngân hàng 12 tháng
- Tờ khai thuế GTGT 12 tháng
- CIC report
- Benchmark ngành (GSO, VCCI, FiinGroup)

### C. Quy trình Xử lý Chi tiết

| Bước | Mô tả | Actor | SLA |
|------|--------|-------|-----|
| 7.1 | Normalize BCTC: loại bỏ one-off, điều chỉnh related party | CA | 4h |
| 7.2 | Tính toán bộ chỉ số tài chính (xem Framework bên dưới) | CA | 4h |
| 7.3 | So sánh DT trên BCTC vs Tờ khai thuế vs Sao kê NH | CA | 4h |
| 7.4 | Phân tích xu hướng 3 năm (trend analysis) | CA | 2h |
| 7.5 | So sánh với benchmark ngành (peer comparison) | CA | 2h |
| 7.6 | Phát hiện red flags và manipulation signs | CA | 4h |
| 7.7 | Lập Financial Analysis Report | CA | 4h |
| 7.8 | CA Manager review | CA Manager | 2h |

**Bộ chỉ số tài chính bắt buộc** (chi tiết tại Section 5):

| Nhóm | Chỉ số | Công thức | Ngưỡng tham khảo |
|------|--------|-----------|-------------------|
| **Thanh khoản** | Current Ratio | TSNH / Nợ ngắn hạn | ≥ 1.2x |
| | Quick Ratio | (TSNH - HTK) / Nợ NH | ≥ 0.8x |
| **Đòn bẩy** | D/E Ratio | Nợ phải trả / Vốn CSH | ≤ 3.0x |
| | Debt/EBITDA | Tổng nợ vay / EBITDA | ≤ 5.0x |
| **Sinh lời** | ROA | LNST / Tổng TS | > 0% |
| | ROE | LNST / Vốn CSH | > Cost of equity |
| | EBITDA Margin | EBITDA / DT thuần | > 10% |
| **Trả nợ** | DSCR | Dòng tiền HĐKD / Nợ phải trả năm | ≥ 1.20x |
| | ICR | EBIT / Lãi vay | ≥ 2.0x |
| **Hiệu quả** | CCC | DSO + DIO - DPO | < 120 ngày |

**Red Flags phát hiện thao túng BCTC**:
- DT tăng nhưng OCF âm liên tục → dấu hiệu Ponzi
- Phải thu khác > 20% Tổng TS → rút tiền cho related party
- AR tăng đột biến so với DT (DSO tăng vọt) → revenue pull-forward
- HTK tăng nhưng DIO giảm → inventory inflation
- XDCB dở dang tồn đọng nhiều năm → fake capex
- DT BCTC ≠ DT tờ khai thuế → revenue manipulation

### D. Outputs
- Financial Analysis Report
- Financial ratio summary table
- Trend analysis charts
- Red flag assessment
- Peer comparison results

### E. Rủi ro

| Loại | Rủi ro | Biện pháp |
|------|--------|-----------|
| Credit | Năng lực tài chính yếu | Multi-ratio analysis |
| Fraud | BCTC xào nấu, window dressing | Cross-check 3 nguồn: BCTC-Thuế-Sao kê → nguồn tra cứu chi tiết: `references/10_data_sources.md` |
| Operational | Phân tích sai, dùng sai công thức | Standardized templates, dual review |

### F. Controls
- **Triple Cross-check**: BCTC vs Thuế vs Sao kê ngân hàng
- **Standardized Template**: Dùng template chuẩn, không hard-code
- **Dual Review**: CA lập → CA Manager review
- **System**: Auto-calculate ratios từ OCR data 
- **Red Flag Investigation**: Khi phát hiện red flag → tra cứu ngay theo ma trận trong `references/11_red_flag_investigation.md`

---

## PHASE 8: CASH FLOW ANALYSIS — Phân tích Dòng tiền

### A. Mục tiêu
| Loại | Mô tả |
|------|--------|
| **Nghiệp vụ** | Đánh giá khả năng tạo tiền thực tế và năng lực trả nợ từ dòng tiền |
| **Kiểm soát** | Phân biệt lợi nhuận kế toán vs dòng tiền thực — chỉ tiền mới trả được nợ |

### B. Inputs
- Báo cáo lưu chuyển tiền tệ 3 năm
- Sao kê ngân hàng 12 tháng
- Lịch trả nợ hiện tại (tất cả TCTD)
- Kế hoạch CAPEX
- Working capital cycle data

### C. Quy trình Xử lý Chi tiết

| Bước | Mô tả | Actor | SLA |
|------|--------|-------|-----|
| 8.1 | Phân tích OCF (Dòng tiền hoạt động kinh doanh) 3 năm | CA | 2h |
| 8.2 | Tính FCFF = OCF - Maintenance Capex | CA | 1h |
| 8.3 | Tính DSCR = Dòng tiền HĐKD / Nợ phải trả năm | CA | 1h |
| 8.4 | Phân tích CCC (Cash Conversion Cycle) | CA | 2h |
| 8.5 | Stress test dòng tiền: DT -20%, chi phí +15%, lãi suất +300bps | CA | 4h |
| 8.6 | Đánh giá khả năng trả nợ trong kịch bản stress | CA | 2h |
| 8.7 | Phân tích liquidity runway | CA | 2h |
| 8.8 | Lập Cash Flow Analysis Report | CA | 2h |

**Công thức chính**:
```
OCF = Lợi nhuận thuần + Khấu hao - ΔWorking Capital
FCFF = OCF - Maintenance Capex
DSCR = Dòng tiền HĐKD / (Gốc phải trả + Lãi phải trả trong kỳ)
CCC  = DSO + DIO - DPO
Liquidity Runway = (Tiền mặt tự do + Hạn mức chưa sử dụng) / Chi phí hàng tháng
```

**Ngưỡng cảnh báo**:
| Chỉ số | Green | Amber | Red |
|--------|-------|-------|-----|
| DSCR | ≥ 1.30x | 1.10x - 1.30x | < 1.10x |
| OCF | Dương 3 năm liên tiếp | Dương 2/3 năm | Âm ≥ 2 năm |
| CCC | < 90 ngày | 90-150 ngày | > 150 ngày |
| Runway (base) | > 6 tháng | 3-6 tháng | < 3 tháng |

### D. Outputs
- Cash Flow Analysis Report
- DSCR calculation (base + stress)
- Liquidity runway assessment
- CCC analysis
- Stress test results

### E. Rủi ro

| Loại | Rủi ro | Biện pháp |
|------|--------|-----------|
| Credit | OCF âm → không trả được nợ | DSCR + runway analysis |
| Fraud | Cashflow illusion (giải ngân mới → tiền mặt cao) | Check nguồn gốc tiền mặt cuối kỳ |
| Operational | Stress test quá lạc quan | Standardized stress parameters |

---

## PHASE 9: LOAN PURPOSE ASSESSMENT — Đánh giá Phương án Vay

### A. Mục tiêu
| Loại | Mô tả |
|------|--------|
| **Nghiệp vụ** | Xác minh mục đích sử dụng vốn hợp pháp, khả thi, có cơ sở |
| **Kiểm soát** | Tuân thủ Điều 7, TT 39/2016 và TT 12/2024 về mục đích sử dụng vốn |

### B. Inputs
- Phương án sử dụng vốn vay (Điều 9, TT 39/2016)
- Phương án trả nợ
- Hợp đồng kinh tế, báo giá, hóa đơn chứng minh mục đích
- Giấy phép liên quan (nếu cần)

### C. Quy trình Xử lý Chi tiết

| Bước | Mô tả | Actor | SLA |
|------|--------|-------|-----|
| 9.1 | Xác minh mục đích vay: hợp pháp, không thuộc danh mục cấm | CA | 2h |
| 9.2 | Đánh giá tính khả thi của phương án KD/dự án | CA | 4h |
| 9.3 | Đối chiếu hợp đồng KT / báo giá / hóa đơn với nhu cầu vay | CA | 2h |
| 9.4 | Đánh giá phương án trả nợ: nguồn, lịch, tính khả thi | CA | 2h |
| 9.5 | Kiểm tra nhu cầu vốn vs vốn tự có (equity contribution) | CA | 2h |
| 9.6 | Xác minh không trùng lặp vay nhiều nơi cho cùng mục đích | CA | 2h |
| 9.7 | Lập Loan Purpose Assessment Report | CA | 2h |

**Danh mục cấm cho vay** (Điều 8, TT 39/2016, sửa đổi TT 12/2024):
- Mục đích vi phạm pháp luật
- Đảo nợ (trừ trường hợp NHNN cho phép)
- Thanh toán chi phí cho việc ký kết hợp đồng tín dụng
- Mua sắm tài sản mà pháp luật cấm mua bán, chuyển nhượng

**Kiểm tra vốn tự có** (BANKING PRACTICE):
| Loại vay | Yêu cầu vốn tự có tối thiểu |
|----------|------------------------------|
| Vay vốn lưu động | Không bắt buộc (theo phương án) |
| Vay trung/dài hạn đầu tư | ≥ 15-30% tổng vốn đầu tư |
| Vay dự án | ≥ 20-30% tổng mức đầu tư |

### D. Outputs
- Loan Purpose Assessment Report
- Mục đích vay: HỢP LỆ / KHÔNG HỢP LỆ
- Phương án trả nợ: KHẢ THI / KHÔNG KHẢ THI
- Nhu cầu vốn vs vốn tự có

### E. Rủi ro

| Loại | Rủi ro | Biện pháp |
|------|--------|-----------|
| Compliance | Vay sai mục đích | Kiểm tra chứng từ chứng minh theo TT 12/2024 |
| Fraud | Phương án ảo, hợp đồng giả | Cross-check đối tác, xác minh thực tế |
| Credit | Phương án KD không khả thi | Phân tích sensitivity, so sánh thị trường |
| Legal | Vi phạm danh mục cấm cho vay | Auto-check trên LOS |

### F. Controls
- **Mandatory Documentation**: Chứng từ chứng minh mục đích (TT 12/2024)
- **Cross-check**: Hợp đồng KT vs Sao kê vs Phương án
- **Dual Review**: CA lập → CA Manager review
- **Post-disbursement**: Kiểm tra sử dụng vốn đúng mục đích (Phase 20)

---

## PHASE 10: CREDIT SCORING & RATING — Chấm điểm & Xếp hạng Tín dụng

### A. Mục tiêu
| Loại | Mô tả |
|------|--------|
| **Nghiệp vụ** | Lượng hóa rủi ro tín dụng, xếp hạng khách hàng theo chuẩn nội bộ |
| **Kiểm soát** | Đảm bảo quyết định dựa trên dữ liệu, giảm thiên kiến chủ quan |

### B. Inputs
- Financial Analysis Report (Phase 7)
- Business Assessment Report (Phase 6)
- CIC Report
- Collateral information
- Historical payment behavior

### C. Quy trình Xử lý Chi tiết

| Bước | Mô tả | Actor | SLA |
|------|--------|-------|-----|
| 10.1 | Nhập dữ liệu vào hệ thống scoring | CA | 1h |
| 10.2 | Hệ thống tự động tính điểm tài chính | System | Auto |
| 10.3 | CA đánh giá điểm phi tài chính | CA | 2h |
| 10.4 | Hệ thống tổng hợp và xếp hạng | System | Auto |
| 10.5 | CA review kết quả, override nếu có lý do | CA | 1h |
| 10.6 | CA Manager phê duyệt kết quả scoring | CA Manager | 1h |

**Credit Scoring Framework** (chi tiết tại Section 4):

| Nhóm | Trọng số | Tiêu chí |
|------|----------|----------|
| **Tài chính** | 40% | DSCR, ICR, D/E, Current Ratio, ROA, EBITDA Margin |
| **Phi tài chính** | 25% | Ngành, thị trường, quản trị, kinh nghiệm BLĐ |
| **Lịch sử tín dụng (CIC)** | 15% | Nợ nhóm, lịch sử thanh toán, số TCTD quan hệ |
| **TSBĐ** | 10% | Loại TS, LTV, tính thanh khoản, pháp lý |
| **Behavioral** | 10% | Lịch sử giao dịch, tuân thủ covenant, thời gian quan hệ |

**Risk Grade Scale**:

| Grade | Score | Mô tả | PD tham khảo | Recommendation |
|-------|-------|--------|--------------|----------------|
| AAA | 90-100 | Xuất sắc | < 0.1% | Auto-approve (trong DOA) |
| AA | 80-89 | Rất tốt | 0.1-0.3% | Approve |
| A | 70-79 | Tốt | 0.3-0.5% | Approve with standard conditions |
| BBB | 60-69 | Khá | 0.5-1.0% | Approve with enhanced conditions |
| BB | 50-59 | Trung bình | 1.0-3.0% | Approve with strict conditions + CRO review |
| B | 40-49 | Yếu | 3.0-5.0% | CRO approval required |
| CCC | 30-39 | Rất yếu | 5.0-10.0% | Board approval required |
| CC-D | < 30 | Default risk | > 10% | REJECT |

### D. Outputs
- Credit Score (numerical)
- Risk Grade (AAA to D)
- Scoring breakdown by category
- Override log (nếu có)
- Recommendation: APPROVE / CONDITIONAL / REJECT

### E. Rủi ro

| Loại | Rủi ro | Biện pháp |
|------|--------|-----------|
| Operational | Override scoring không có lý do | Override phải documented + Manager approve |
| Credit | Scoring model không chính xác | Annual backtesting + validation |
| Fraud | RM/CA can thiệp kết quả scoring | System-enforced calculation, audit log |

### F. Controls
- **System-Enforced**: Scoring tự động, không sửa được kết quả
- **Override Control**: Override phải có lý do + CA Manager approve + audit log
- **Annual Validation**: Backtesting model hàng năm
- **Segregation**: CA scoring ≠ RM origination

---

## PHASE 11: COLLATERAL VALUATION — Định giá Tài sản Bảo đảm

### A. Mục tiêu
| Loại | Mô tả |
|------|--------|
| **Nghiệp vụ** | Xác định giá trị hợp lý của TSBĐ, tính LTV phù hợp |
| **Kiểm soát** | Đảm bảo định giá độc lập, khách quan, có cơ sở pháp lý |

### B. Inputs
- Hồ sơ TSBĐ (Phase 4)
- GCN QSDĐ, GCN sở hữu
- Thông tin thị trường BĐS (nếu TSBĐ là BĐS)
- Legal assessment (Phase 5)

### C. Quy trình Xử lý Chi tiết

| Bước | Mô tả | Actor | SLA |
|------|--------|-------|-----|
| 11.1 | Tiếp nhận yêu cầu định giá | Valuer | 1h |
| 11.2 | Khảo sát thực tế tài sản (site visit) | Valuer | 1 ngày |
| 11.3 | Thu thập dữ liệu thị trường, so sánh | Valuer | 4h |
| 11.4 | Áp dụng phương pháp định giá phù hợp | Valuer | 4h |
| 11.5 | Áp dụng haircut theo loại tài sản | Valuer | 1h |
| 11.6 | Tính LTV | Valuer | 1h |
| 11.7 | Lập Valuation Report | Valuer | 4h |
| 11.8 | Head of Valuation review | Head of Valuation | 2h |

**Phương pháp định giá**:

| Phương pháp | Áp dụng | Mô tả |
|-------------|---------|-------|
| So sánh thị trường | BĐS, xe | So sánh với giao dịch tương tự gần đây |
| Chi phí thay thế | Nhà xưởng, máy móc | Chi phí xây dựng/mua mới trừ khấu hao |
| Thu nhập | BĐS thương mại | Vốn hóa dòng thu nhập cho thuê |
| Giá trị sổ sách | Máy móc cũ | Giá mua trừ khấu hao lũy kế |

**Haircut & LTV** (BANKING PRACTICE):

| Loại TSBĐ | Haircut | LTV tối đa |
|-----------|---------|------------|
| QSDĐ + nhà (đô thị, trả tiền 1 lần) | 35% | 65% |
| QSDĐ + nhà (tỉnh lẻ, trả tiền 1 lần) | 50% | 50% |
| TS trên đất (QSDĐ trả hàng năm) | 50% | 50% |
| Máy móc nhập khẩu < 5 năm | 50% | 50% |
| Máy móc cũ > 5 năm | 70% | 30% |
| Hàng tồn kho (thông dụng) | 40% | 60% |
| Hàng tồn kho (đặc thù/dễ hỏng) | 60-70% | 30-40% |
| AR (0-60 ngày, KH uy tín) | 30% | 70% |
| AR (60-90 ngày) | 60% | 40% |
| AR (> 90 ngày) | 100% | 0% |
| Cổ phiếu niêm yết (HOSE/HNX) | 51% | 49% |
| Cổ phiếu OTC | 80% | 20% |
| Tiền gửi tại TCTD | 5% | 95% |

### D. Outputs
- Valuation Report
- Giá trị thị trường (Market Value)
- Giá trị sau haircut (Collateral Value)
- LTV ratio
- Legal status của TSBĐ

### E. Rủi ro

| Loại | Rủi ro | Biện pháp |
|------|--------|-----------|
| Fraud | Định giá cao giả tạo (overvaluation) | Dual valuation, so sánh thị trường |
| Legal | TSBĐ không enforceable | Legal review bắt buộc |
| Credit | Giá trị TSBĐ giảm theo thời gian | Revaluation cycle |
| Operational | Valuer thiếu kinh nghiệm | Certification requirement |

### F. Controls
- **Independent Valuation**: Valuer độc lập với RM
- **Dual Valuation**: > 50 tỷ → 2 Valuers độc lập
- **External Valuation**: > 100 tỷ → tổ chức định giá bên ngoài (BANKING PRACTICE)
- **Revaluation Cycle**: BĐS mỗi 2 năm, động sản mỗi năm, cổ phiếu mỗi quý

---

## PHASE 12: INDEPENDENT RISK REVIEW — Thẩm định Rủi ro Độc lập

### A. Mục tiêu
| Loại | Mô tả |
|------|--------|
| **Nghiệp vụ** | Đánh giá rủi ro tổng thể bởi đơn vị độc lập (Line 2) |
| **Kiểm soát** | Phản biện kết quả thẩm định, đảm bảo không bỏ sót rủi ro |

### B. Inputs
- Tất cả reports từ Phase 5-11
- Credit Score & Rating (Phase 10)
- Portfolio concentration data
- Risk appetite framework

### C. Quy trình Xử lý Chi tiết

| Bước | Mô tả | Actor | SLA |
|------|--------|-------|-----|
| 12.1 | Review toàn bộ hồ sơ thẩm định | Risk Officer | 4h |
| 12.2 | Phản biện phân tích tài chính | Risk Officer | 4h |
| 12.3 | Stress test bổ sung (nếu cần) | Risk Officer | 4h |
| 12.4 | Đánh giá portfolio concentration impact | Risk Officer | 2h |
| 12.5 | Kiểm tra tuân thủ risk appetite | Risk Officer | 2h |
| 12.6 | Kiểm tra giới hạn cấp tín dụng (Điều 136-137, Luật TCTD 2024) | Risk Officer | 2h |
| 12.7 | Lập Independent Risk Assessment Report | Risk Officer | 4h |
| 12.8 | CRO review (nếu > 100 tỷ hoặc Risk Grade ≤ BB) | CRO | 4h |

**Giới hạn cấp tín dụng** (Điều 136, Luật TCTD 2024):
- Một KH: ≤ 15% vốn tự có
- KH và người có liên quan: ≤ 25% vốn tự có
- Một KH (cho thuê tài chính): ≤ 25% vốn tự có

### D. Outputs
- Independent Risk Assessment Report
- Risk Opinion: CONCUR / CONDITIONAL / DISAGREE
- Proposed conditions/covenants (nếu có)
- Portfolio impact analysis

**GATE 2 tại đây**: Risk Assessment DISAGREE hoặc Risk Grade ≤ CC → REJECT hoặc REWORK

### E. Rủi ro

| Loại | Rủi ro | Biện pháp |
|------|--------|-----------|
| Operational | Risk review hời hợt | Structured checklist, CRO oversight |
| Credit | Bỏ sót rủi ro concentration | Auto-check portfolio limits |
| Compliance | Vượt giới hạn cấp tín dụng | System-enforced limit check |

### F. Controls
- **Independence**: Risk Officer thuộc Line 2, không báo cáo Front Office
- **CRO Oversight**: CRO review cho deal lớn hoặc rủi ro cao
- **System Check**: Auto-check concentration, regulatory limits
- **Escalation**: Risk Grade ≤ BB → CRO bắt buộc review

---

## PHASE 13: RE-ASSESSMENT — Tái thẩm định

### A. Mục tiêu
| Loại | Mô tả |
|------|--------|
| **Nghiệp vụ** | Bổ sung, chỉnh sửa theo yêu cầu từ Risk Review hoặc Credit Committee |
| **Kiểm soát** | Giới hạn số lần rework, đảm bảo chất lượng cải thiện thực sự |

### C. Quy trình Xử lý Chi tiết

| Bước | Mô tả | Actor | SLA |
|------|--------|-------|-----|
| 13.1 | Tiếp nhận yêu cầu bổ sung/chỉnh sửa | CA | 1h |
| 13.2 | Thu thập thông tin bổ sung (nếu cần) | RM + CA | 2 ngày |
| 13.3 | Cập nhật phân tích theo yêu cầu | CA | 1 ngày |
| 13.4 | CA Manager review bản cập nhật | CA Manager | 2h |
| 13.5 | Gửi lại Risk Officer review | Risk Officer | 4h |

**Quy tắc Rework**:
- Maximum 2 rework cycles
- Nếu sau 2 lần rework vẫn chưa đạt → REJECT
- Mỗi rework phải ghi rõ: lý do, yêu cầu cụ thể, người yêu cầu
- Audit trail đầy đủ cho mỗi version

---

## PHASE 14: APPROVAL SUBMISSION — Trình Phê duyệt

### A. Mục tiêu
| Loại | Mô tả |
|------|--------|
| **Nghiệp vụ** | Tổng hợp hồ sơ, lập tờ trình tín dụng để trình phê duyệt |
| **Kiểm soát** | Đảm bảo hồ sơ đủ Gate 2 trước khi trình |

### C. Quy trình Xử lý Chi tiết

| Bước | Mô tả | Actor | SLA |
|------|--------|-------|-----|
| 14.1 | Tổng hợp toàn bộ hồ sơ thẩm định | CA | 2h |
| 14.2 | Lập Tờ trình tín dụng (Credit Proposal) | CA | 4h |
| 14.3 | CA Manager review Tờ trình | CA Manager | 2h |
| 14.4 | Xác nhận Gate 2: tất cả items pass | CA Manager | 1h |
| 14.5 | Xác định cấp phê duyệt theo DOA | CA | 30min |
| 14.6 | Submit lên Credit Committee | CA | 30min |

**Nội dung Tờ trình Tín dụng**:
1. Thông tin khách hàng & nhu cầu vay
2. Kết quả KYC/AML
3. Tóm tắt thẩm định pháp lý
4. Phân tích ngành & doanh nghiệp
5. Phân tích tài chính & dòng tiền
6. Credit Score & Risk Grade
7. Phương án vay & trả nợ
8. TSBĐ & LTV
9. Independent Risk Assessment
10. Đề xuất cấu trúc khoản vay & covenants
11. Recommendation: APPROVE / CONDITIONAL / REJECT

---

## PHASE 15: CREDIT APPROVAL — Phê duyệt Tín dụng

### A. Mục tiêu
| Loại | Mô tả |
|------|--------|
| **Nghiệp vụ** | Ra quyết định cấp tín dụng theo thẩm quyền |
| **Kiểm soát** | Phê duyệt đúng cấp, đúng thẩm quyền, có đủ thông tin |

### B. Inputs
- Credit Proposal (Phase 14)
- Toàn bộ hồ sơ thẩm định
- Risk Assessment Report
- DOA Matrix

### C. Quy trình Xử lý Chi tiết

| Bước | Mô tả | Actor | SLA |
|------|--------|-------|-----|
| 15.1 | Tiếp nhận hồ sơ, kiểm tra thẩm quyền | CC Secretary | 1h |
| 15.2 | Phân phối hồ sơ cho thành viên CC | CC Secretary | 2h |
| 15.3 | Thành viên CC review độc lập | CC Members | 4h |
| 15.4 | Họp Credit Committee | CC Members | 2h |
| 15.5 | Biểu quyết: APPROVE / CONDITIONAL / REJECT | CC Members | 30min |
| 15.6 | Ghi biên bản, lập quyết định phê duyệt | CC Secretary | 2h |

**Delegation of Authority (DOA) Matrix** (BANKING PRACTICE):

| Hạn mức | Cấp phê duyệt | Thành phần tối thiểu |
|---------|----------------|---------------------|
| < 10 tỷ | Giám đốc Chi nhánh | GĐ CN + Trưởng phòng TD |
| 10-50 tỷ | HĐTD Chi nhánh | GĐ CN + TP TD + TP QLRR CN |
| 50-200 tỷ | HĐTD Hội sở | ≥ 5 thành viên, có Risk |
| 200-500 tỷ | HĐTD Hội sở mở rộng | ≥ 7 thành viên, có CRO |
| > 500 tỷ | TGĐ + HĐQT/BRC | TGĐ + CRO + Board Risk Committee |

**CRO Veto Right**: CRO có quyền veto bất kỳ khoản vay nào vượt risk appetite, bất kể DOA level. Veto phải documented và báo cáo Board trong 5 ngày.

**GATE 3 tại đây**: APPROVE → Phase 16 | CONDITIONAL → bổ sung điều kiện → Phase 16 | REJECT → End

### D. Outputs
- Credit Approval Decision
- Biên bản họp HĐTD
- Quyết định phê duyệt / từ chối
- Điều kiện phê duyệt (nếu CONDITIONAL)
- Approved facility terms

### E. Rủi ro

| Loại | Rủi ro | Biện pháp |
|------|--------|-----------|
| Operational | Phê duyệt vượt thẩm quyền | System-enforced DOA check |
| Credit | Phê duyệt thiếu thông tin | Gate 2 mandatory trước Gate 3 |
| Compliance | Không đủ quorum | Minimum quorum requirement |
| Fraud | Thông đồng phê duyệt | CRO veto right, audit trail |

### F. Controls
- **DOA Enforcement**: LOS tự động xác định cấp phê duyệt
- **Quorum**: Đủ số thành viên tối thiểu mới được họp
- **CRO Veto**: Quyền phủ quyết độc lập
- **Minutes**: Biên bản họp bắt buộc, lưu trữ vĩnh viễn
- **Audit Trail**: Mọi quyết định được log

---

## PHASE 16: FACILITY STRUCTURING — Cấu trúc Khoản vay

### A. Mục tiêu
| Loại | Mô tả |
|------|--------|
| **Nghiệp vụ** | Thiết kế cấu trúc khoản vay phù hợp với nhu cầu KH và quản lý rủi ro |
| **Kiểm soát** | Đảm bảo cấu trúc tuân thủ quyết định phê duyệt và pháp luật |

### C. Quy trình Xử lý Chi tiết

| Bước | Mô tả | Actor | SLA |
|------|--------|-------|-----|
| 16.1 | Xác định loại sản phẩm: vay ngắn/trung/dài hạn, hạn mức, L/C | CA | 2h |
| 16.2 | Thiết kế lịch trả nợ phù hợp dòng tiền | CA | 2h |
| 16.3 | Xác định lãi suất, phí, điều kiện | CA + RM | 2h |
| 16.4 | Thiết kế covenant package | CA + Risk | 4h |
| 16.5 | Xác định điều kiện giải ngân (CP) | CA | 2h |
| 16.6 | CA Manager review cấu trúc | CA Manager | 2h |

**Covenant Package tiêu chuẩn** (BANKING PRACTICE):

| Loại | Covenant | Ngưỡng |
|------|----------|--------|
| **Financial** | DSCR tối thiểu | ≥ 1.20x (quarterly test) |
| | D/E tối đa | ≤ 3.0x |
| | Current Ratio tối thiểu | ≥ 1.2x |
| **Non-Financial** | Không chia cổ tức khi DSCR < threshold | Dividend lock-up |
| | Change of Control → bank consent | Prior approval |
| | Cung cấp BCTC kiểm toán hàng năm | Within 90 days of FY-end |
| | Không thế chấp TS cho bên thứ 3 | Negative pledge |
| **Information** | BCTC quý trong 45 ngày | Quarterly |
| | CIC update | 6 tháng/lần |
| | Thông báo sự kiện bất thường | Immediately |

---

## PHASE 17: CONTRACT DRAFTING — Soạn thảo Hợp đồng

### A. Mục tiêu
| Loại | Mô tả |
|------|--------|
| **Nghiệp vụ** | Soạn thảo HĐTD, HĐ bảo đảm, các văn bản pháp lý liên quan |
| **Kiểm soát** | Đảm bảo HĐ phản ánh đúng quyết định phê duyệt, có hiệu lực pháp lý |

### C. Quy trình Xử lý Chi tiết

| Bước | Mô tả | Actor | SLA |
|------|--------|-------|-----|
| 17.1 | Soạn HĐTD dựa trên template chuẩn + điều kiện phê duyệt | Legal | 4h |
| 17.2 | Soạn HĐ thế chấp / cầm cố | Legal | 4h |
| 17.3 | Soạn các phụ lục: lịch trả nợ, điều kiện giải ngân | Legal | 2h |
| 17.4 | Head of Legal review toàn bộ bộ HĐ | Head of Legal | 4h |
| 17.5 | CA đối chiếu HĐ với quyết định phê duyệt | CA | 2h |
| 17.6 | Gửi KH review | RM | 2h |
| 17.7 | Đàm phán điều khoản (nếu cần) | RM + Legal | 1 ngày |
| 17.8 | Ký kết HĐ | RM + KH | 2h |
| 17.9 | Đăng ký GDBĐ tại cơ quan có thẩm quyền | Legal + Ops | 5-10 ngày |

**Điểm kiểm soát quan trọng**:
- HĐ phải phản ánh chính xác: số tiền, kỳ hạn, lãi suất, covenant, TSBĐ
- Đăng ký GDBĐ bắt buộc: BĐS tại VP ĐKĐĐ, động sản tại Cục ĐKGDBĐ
- Chưa đăng ký GDBĐ → chưa có quyền ưu tiên khi xử lý TSBĐ

**SLA đăng ký GDBĐ:**
- SLA: **5–10 ngày làm việc** tính từ ngày nộp hồ sơ đầy đủ hợp lệ.
- Lưu ý theo địa bàn:
  - Hà Nội / TP.HCM: 5–7 ngày làm việc (Văn phòng ĐKĐD Bộ Tư pháp).
  - Tỉnh, thành phố khác: 7–10 ngày làm việc (Chi nhánh Văn phòng ĐKĐD địa phương).
  - Trường hợp hồ sơ phức tạp (nhiều tài sản, đất nông nghiệp, TSBĐ hình thành trong tương lai): có thể kéo dài thêm 3–5 ngày — cần escalate cho Loan Admin báo cáo kịp thời.

Không giải ngân trước khi có xác nhận đăng ký GDBĐ thành công (không áp dụng exception nếu chưa có văn bản xác nhận từ cơ quan ĐKGDBĐ).

---

## PHASE 18: PRE-DISBURSEMENT CHECK — Kiểm soát Điều kiện Giải ngân

### A. Mục tiêu
| Loại | Mô tả |
|------|--------|
| **Nghiệp vụ** | Xác nhận đủ mọi điều kiện trước khi giải ngân |
| **Kiểm soát** | Không giải ngân nếu thiếu bất kỳ điều kiện nào (zero tolerance) |

### C. Quy trình Xử lý Chi tiết

| Bước | Mô tả | Actor | SLA |
|------|--------|-------|-----|
| 18.1 | Kiểm tra checklist điều kiện giải ngân (CP) | Loan Admin | 4h |
| 18.2 | Xác nhận HĐ đã ký đầy đủ | Loan Admin | 1h |
| 18.3 | Xác nhận TSBĐ đã hoàn tất đăng ký GDBĐ | Legal | 2h |
| 18.4 | Xác nhận bảo hiểm TSBĐ (nếu yêu cầu) | Loan Admin | 1h |
| 18.5 | Xác nhận vốn tự có đã góp (nếu yêu cầu) | CA | 2h |
| 18.6 | Risk Officer xác nhận CP compliance | Risk Officer | 2h |
| 18.7 | Ops Manager phê duyệt giải ngân | Ops Manager | 1h |

**Conditions Precedent (CP) tiêu chuẩn**:
- [ ] HĐTD đã ký, có chữ ký đúng thẩm quyền
- [ ] HĐ bảo đảm đã ký và đăng ký GDBĐ
- [ ] Bảo hiểm TSBĐ (NH là beneficiary) — nếu áp dụng
- [ ] Vốn tự có đã góp đủ tỷ lệ — nếu áp dụng
- [ ] Legal Opinion final
- [ ] KYC/AML còn hiệu lực
- [ ] Không có sự kiện vi phạm (no default event)
- [ ] Chứng từ chứng minh mục đích vay (TT 12/2024)

**GATE 4**: Thiếu bất kỳ CP → HOLD. Không giải ngân.

---

## PHASE 19: DISBURSEMENT — Giải ngân

### A. Mục tiêu
| Loại | Mô tả |
|------|--------|
| **Nghiệp vụ** | Thực hiện giải ngân đúng số tiền, đúng mục đích, đúng đối tượng |
| **Kiểm soát** | Kiểm soát giải ngân theo từng lần rút vốn, đúng mục đích (TT 39/2016) |

### C. Quy trình Xử lý Chi tiết

| Bước | Mô tả | Actor | SLA |
|------|--------|-------|-----|
| 19.1 | Tiếp nhận yêu cầu giải ngân từ KH | RM | 1h |
| 19.2 | Kiểm tra chứng từ chứng minh mục đích sử dụng vốn | Loan Admin | 2h |
| 19.3 | Đối chiếu yêu cầu giải ngân với HĐ | Loan Admin | 1h |
| 19.4 | Nhập lệnh giải ngân (Maker) | Loan Admin 1 | 30min |
| 19.5 | Kiểm tra và phê duyệt giải ngân (Checker) | Loan Admin 2 | 30min |
| 19.6 | Thực hiện giải ngân trên Core Banking | System | Auto |
| 19.7 | Cập nhật LMS: trạng thái khoản vay ACTIVE | System | Auto |
| 19.8 | Gửi thông báo giải ngân cho KH | System | Auto |

**Phương thức giải ngân** (Điều 20, TT 39/2016):
- Giải ngân trực tiếp vào TK người thụ hưởng (ưu tiên)
- Giải ngân vào TK KH nếu có chứng từ chứng minh mục đích
- Giải ngân theo tiến độ dự án (cho vay dự án)

**Maker-Checker bắt buộc**: Loan Admin 1 (nhập) ≠ Loan Admin 2 (duyệt)

---

## PHASE 20: POST-LOAN MONITORING — Kiểm tra Sau vay

### A. Mục tiêu
| Loại | Mô tả |
|------|--------|
| **Nghiệp vụ** | Kiểm tra sử dụng vốn đúng mục đích, theo dõi tình hình KH |
| **Kiểm soát** | Tuân thủ Điều 24, TT 39/2016 — kiểm tra, giám sát sử dụng vốn vay |

### C. Quy trình Xử lý Chi tiết

| Bước | Mô tả | Actor | Tần suất |
|------|--------|-------|----------|
| 20.1 | Kiểm tra sử dụng vốn đúng mục đích (Điều 24 TT39) | RM | Sau mỗi lần giải ngân |
| 20.2 | Kiểm tra thực tế tại cơ sở KH (site visit) | RM | 6 tháng/lần (min) |
| 20.3 | Thu thập BCTC quý/năm | RM | Theo covenant |
| 20.4 | Cập nhật CIC | Ops | 6 tháng/lần |
| 20.5 | Đánh giá lại tình hình tài chính KH | CA | Hàng năm |
| 20.6 | Đánh giá lại giá trị TSBĐ | Valuer | Theo revaluation cycle |
| 20.7 | Cập nhật Credit Rating | CA + System | Hàng năm |
| 20.8 | Lập Post-Loan Monitoring Report | RM | Hàng quý |
| 20.9 | Risk Officer review (nếu Red/Amber) | Risk Officer | Per trigger |

**Kiểm tra sử dụng vốn** (Điều 24, TT 39/2016 + TT 12/2024):
- Thu thập hóa đơn, chứng từ thanh toán
- Đối chiếu chứng từ với mục đích vay trong HĐ
- Nếu sử dụng sai mục đích → thu hồi vốn trước hạn

---

## PHASE 21: COVENANT MONITORING — Giám sát Covenant

### A. Mục tiêu
| Loại | Mô tả |
|------|--------|
| **Nghiệp vụ** | Theo dõi việc tuân thủ các cam kết tài chính và phi tài chính |
| **Kiểm soát** | Phát hiện sớm vi phạm covenant, can thiệp kịp thời |

### C. Quy trình Xử lý Chi tiết

| Bước | Mô tả | Actor | Tần suất |
|------|--------|-------|----------|
| 21.1 | Thu thập dữ liệu covenant testing | RM + Ops | Quarterly |
| 21.2 | Tính toán covenant compliance | System/CA | Quarterly |
| 21.3 | So sánh với ngưỡng covenant | System | Auto |
| 21.4 | Nếu breach → thông báo RM + Risk | System | Auto alert |
| 21.5 | RM liên hệ KH yêu cầu giải trình / khắc phục | RM | 5 ngày từ breach |
| 21.6 | Risk Officer đánh giá mức độ nghiêm trọng | Risk Officer | 3 ngày |
| 21.7 | Quyết định: waiver / cure / Event of Default | CA Manager/CRO | Per DOA |

**Covenant Breach Escalation**:
| Mức độ | Hành động | Escalation |
|--------|-----------|------------|
| Minor (1 covenant, first time) | Yêu cầu cure 30 ngày | CA Manager |
| Moderate (>1 covenant hoặc repeat) | Enhanced monitoring + CRO review | CRO |
| Severe (financial covenant + deterioration) | Event of Default consideration | Credit Committee |
| Cross-default triggered | Immediate acceleration right | Legal + Board |

---

## PHASE 22: EARLY WARNING MONITORING — Cảnh báo Sớm

### A. Mục tiêu
| Loại | Mô tả |
|------|--------|
| **Nghiệp vụ** | Phát hiện sớm dấu hiệu suy giảm tín dụng trước khi thành nợ xấu |
| **Kiểm soát** | Hệ thống EWS tự động + manual review, can thiệp chủ động |

### C. EWS Indicators

**Nhóm 1 — Tài chính**:
| Signal | Amber | Red | Nguồn | Tần suất |
|--------|-------|-----|-------|----------|
| Doanh thu giảm vs cùng kỳ | > 15% | > 30% | BCTC quý | Quarterly |
| EBITDA margin giảm | > 3% YoY | > 5% YoY | BCTC quý | Quarterly |
| OCF âm | 1 quý | 2 quý liên tiếp | BCTC quý | Quarterly |
| D/E tăng đột biến | > 0.5x | > 1.0x | BCTC quý | Quarterly |
| Dòng tiền qua TK giảm | > 20% | > 40% | Sao kê | Monthly |

**Nhóm 2 — Hành vi**:
| Signal | Amber | Red | Nguồn | Tần suất |
|--------|-------|-----|-------|----------|
| Chậm nộp BCTC | > 15 ngày | > 30 ngày | DMS | Per deadline |
| Chậm trả lãi | 1-10 ngày | > 10 ngày | Core Banking | Daily |
| Chậm trả gốc | 1-10 ngày | > 10 ngày | Core Banking | Daily |
| Xin gia hạn nợ | Lần 1 | Lần 2+ | LMS | Per event |
| Rút hạn mức bất thường | > 80% limit | > 95% limit | Core | Daily |

**Nhóm 3 — Bên ngoài**:
| Signal | Amber | Red | Nguồn |
|--------|-------|-----|-------|
| CIC downgrade | Nhóm 1 → 2 | Nhóm 2+ | CIC |
| Tin tức tiêu cực | Tin chưa xác minh | Tin xác thực | Media scan |
| Lãnh đạo chủ chốt từ nhiệm | CFO/COO | CEO/Chairman | Media/KH |
| Ngành bị ảnh hưởng chính sách | Moderate impact | Severe impact | Regulatory |
| Counterparty default | KH nhỏ | KH lớn (> 20% DT) | CIC/Media |

**Quy trình xử lý EWS**:
```
Green (no trigger)     → Normal monitoring
Amber (1-2 triggers)   → Enhanced monitoring, RM report trong 5 ngày
Red (≥3 hoặc 1 Red)   → Chuyển Watchlist, CRO review trong 48h
Critical               → Chuyển Special Mention, Credit Committee review
```

---

## PHASE 23: DELINQUENCY MONITORING — Theo dõi Nợ quá hạn

### A. Mục tiêu
| Loại | Mô tả |
|------|--------|
| **Nghiệp vụ** | Phát hiện, phân loại, xử lý nợ quá hạn theo quy định NHNN |
| **Kiểm soát** | Phân loại nợ chính xác, trích lập dự phòng đúng, tuân thủ TT 11/2021 |

### C. Phân loại nợ (TT 11/2021/TT-NHNN)

| Nhóm | Tên | Quá hạn | Trích lập DPRR |
|------|-----|---------|----------------|
| 1 | Nợ đủ tiêu chuẩn | 0 ngày | 0.75% |
| 2 | Nợ cần chú ý | 1-90 ngày | 5% |
| 3 | Nợ dưới tiêu chuẩn | 91-180 ngày | 20% |
| 4 | Nợ nghi ngờ | 181-360 ngày | 50% |
| 5 | Nợ có khả năng mất vốn | > 360 ngày | 100% |

### Quy trình xử lý

| Trigger | Action | Actor | SLA |
|---------|--------|-------|-----|
| Quá hạn 1 ngày | Thông báo tự động cho KH + RM | System | Auto |
| Quá hạn 10 ngày | RM liên hệ KH, lập biên bản | RM | 2 ngày |
| Quá hạn 30 ngày | Chuyển Nhóm 2, CRO review | Risk + RM | 3 ngày |
| Quá hạn 90 ngày | Chuyển Nhóm 3 (NPL), Special Assets | Recovery | 5 ngày |
| Quá hạn 180 ngày | Chuyển Nhóm 4, xem xét xử lý TSBĐ | Recovery + Legal | Per case |
| Quá hạn 360 ngày | Chuyển Nhóm 5, full provision | Recovery + Legal | Per case |

---

## PHASE 24: LOAN RESTRUCTURING — Cơ cấu lại Nợ

### A. Mục tiêu
| Loại | Mô tả |
|------|--------|
| **Nghiệp vụ** | Cơ cấu lại thời hạn trả nợ cho KH có khả năng phục hồi |
| **Kiểm soát** | Tuân thủ Điều 19 TT 39/2016, không cơ cấu để che giấu nợ xấu |

### C. Điều kiện cơ cấu
- KH gặp khó khăn TẠM THỜI về tài chính/thanh khoản
- Core business vẫn viable, có kế hoạch phục hồi khả thi
- KH hợp tác cung cấp thông tin
- KHÔNG cơ cấu chỉ để tránh phân loại nợ xấu (anti-evergreening)

**Cơ chế kiểm soát Evergreening — Bắt buộc áp dụng:**

1. **Automated Flag:** LOS/LMS tự động gắn cờ cảnh báo khi khoản vay được cơ cấu lại từ lần 2 trở lên trong vòng 24 tháng. Flag này chỉ được gỡ sau khi CRO ký duyệt biên bản giải trình kèm bằng chứng cải thiện thực chất dòng tiền.

2. **Mandatory Independent Review:** Khoản vay tái cơ cấu lần 2 trở lên bắt buộc phải có review độc lập bởi Risk Officer (không phải CA đang quản lý hồ sơ) trước khi trình Credit Committee.

3. **Portfolio-Level Monitoring:** Risk Officer báo cáo tỷ lệ restructured loans theo tổng portfolio mỗi quý. Nếu tỷ lệ tái cơ cấu > 8% tổng dư nợ → Internal Audit thực hiện targeted review trong 30 ngày.

4. **CIC Consistency Check:** Đối chiếu phân loại nợ nội bộ với CIC tối thiểu 1 lần/quý. Bất kỳ sai lệch nào giữa phân loại nội bộ và CIC phải được giải trình bằng văn bản trong 5 ngày làm việc.

### Quy trình

| Bước | Mô tả | Actor | SLA |
|------|--------|-------|-----|
| 24.1 | KH đề nghị cơ cấu + Kế hoạch phục hồi | RM | 3 ngày |
| 24.2 | CA đánh giá lại tình hình tài chính | CA | 5 ngày |
| 24.3 | Risk Officer đánh giá khả năng phục hồi | Risk | 3 ngày |
| 24.4 | Trình Credit Committee phê duyệt cơ cấu | CA | 2 ngày |
| 24.5 | Nếu approve → soạn phụ lục HĐ cơ cấu | Legal | 2 ngày |
| 24.6 | Bổ sung TSBĐ / bảo lãnh cá nhân (nếu yêu cầu) | RM + Legal | 5 ngày |
| 24.7 | Monitoring tăng cường sau cơ cấu | RM + Risk | Monthly |

---

## PHASE 25-26: RECOVERY & NPL HANDLING — Thu hồi Nợ & Xử lý Nợ xấu

### A. Mục tiêu
| Loại | Mô tả |
|------|--------|
| **Nghiệp vụ** | Thu hồi tối đa gốc + lãi khi KH mất khả năng trả nợ |
| **Kiểm soát** | Tuân thủ pháp luật, tối ưu recovery rate |

### Phương thức thu hồi (theo thứ tự ưu tiên)

| # | Phương thức | Mô tả | Timeline ước tính |
|---|------------|-------|-------------------|
| 1 | Đàm phán thu hồi | Yêu cầu KH trả nợ tự nguyện | 1-3 tháng |
| 2 | Xử lý TSBĐ ngoài tòa | Bán TSBĐ theo thỏa thuận HĐ | 3-6 tháng |
| 3 | Bán nợ cho VAMC/AMC | Chuyển nhượng khoản nợ | 3-6 tháng |
| 4 | Khởi kiện ra Tòa | Tố tụng dân sự / phá sản | 1-5 năm |
| 5 | Xóa nợ (write-off) | Sau khi đã tận thu mọi biện pháp | Cuối cùng |

---

## PHASE 27: ARCHIVING & AUDIT TRAIL — Lưu trữ Hồ sơ

### A. Mục tiêu
| Loại | Mô tả |
|------|--------|
| **Nghiệp vụ** | Lưu trữ đầy đủ, có hệ thống toàn bộ hồ sơ tín dụng |
| **Kiểm soát** | Tuân thủ quy định lưu trữ, sẵn sàng cho audit/thanh tra |

### Quy định lưu trữ

| Loại hồ sơ | Thời gian lưu | Cơ sở |
|------------|---------------|-------|
| Hồ sơ tín dụng (đang hoạt động) | Suốt thời gian vay | Luật TCTD 2024 |
| Hồ sơ tín dụng (đã tất toán) | 5 năm sau tất toán | Điều 97, Luật TCTD 2024 |
| Hồ sơ KYC/AML | 5 năm sau kết thúc quan hệ | Luật PCRT 2022 |
| Biên bản HĐTD, quyết định phê duyệt | 10 năm | BANKING PRACTICE |
| Audit trail / system log | 10 năm | BANKING PRACTICE |
| Hồ sơ nợ xấu / tranh tụng | Cho đến khi hoàn tất xử lý | Luật TCTD 2024 |

### Audit Trail Requirements
- Mọi action trên hồ sơ phải log: who, what, when, on which record
- Không xóa, không sửa ngược — chỉ append
- Timestamp chính xác (server time, synchronized)
- Lưu trữ log cả trên LOS, LMS, DMS, Core Banking

---

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

# 7. POST-LOAN MONITORING FRAMEWORK

## 7.1 Monitoring Calendar

| Hoạt động | Tần suất | Actor | Output |
|-----------|----------|-------|--------|
| Kiểm tra sử dụng vốn | Sau mỗi giải ngân | RM | Usage verification report |
| Site visit | 6 tháng/lần | RM | Inspection report |
| BCTC quý | Quarterly | RM → CA | Financial update |
| BCTC kiểm toán năm | Annual | RM → CA | Annual review |
| CIC update | 6 tháng/lần | Ops | CIC report |
| Covenant testing | Quarterly | CA/System | Compliance report |
| Credit rating update | Annual | CA + System | Rating migration |
| TSBĐ revaluation | Per cycle | Valuer | Valuation update |
| EWS review | Monthly | Risk | EWS dashboard |
| Portfolio review | Quarterly | CRO | Portfolio report |

## 7.2 Watchlist Management

**Phân loại Watchlist**:

| Category | Criteria | Action | Review |
|----------|----------|--------|--------|
| **Normal** | Green EWS, covenant OK | Standard monitoring | Quarterly |
| **Watch** | 1-2 Amber EWS | Enhanced monitoring | Monthly |
| **Special Mention** | Red EWS hoặc covenant breach | Intensive monitoring, CRO review | Bi-weekly |
| **Sub-standard** | Nhóm 3+ hoặc multiple Red | Recovery preparation | Weekly |

## 7.3 Stress Signal Framework

| Signal | Indicator | Action |
|--------|-----------|--------|
| **Macro** | GDP giảm > 1%, lãi suất tăng > 200bps | Re-stress portfolio |
| **Sector** | NPL ngành tăng > 0.5% QoQ | Re-review sector exposure |
| **Counterparty** | KH lớn default | Impact analysis on borrower |
| **FX** | VND giảm > 5% | Re-calculate FX-exposed deals |
| **Commodity** | Giá nguyên liệu biến động > 20% | Re-stress affected borrowers |

---

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

# 10. SOP & OPERATIONAL TEMPLATES

## 10.1 Credit Proposal Template

```
1. THÔNG TIN KHÁCH HÀNG
   - Tên DN, MST, ngành nghề, năm thành lập
   - Người đại diện, cơ cấu sở hữu
   - Quan hệ tín dụng hiện tại (tổng dư nợ, nhóm nợ)

2. NHU CẦU VAY
   - Số tiền, kỳ hạn, mục đích, nguồn trả nợ
   - Sản phẩm đề xuất

3. KẾT QUẢ THẨM ĐỊNH
   3.1 KYC/AML: PASS/FAIL
   3.2 Pháp lý: [Tóm tắt Legal Opinion]
   3.3 Ngành & DN: [Industry risk, SWOT, management]
   3.4 Tài chính: [Bảng ratio summary 3 năm]
   3.5 Dòng tiền: [DSCR, OCF, runway]
   3.6 Credit Score: [Score, Grade, PD]

4. TSBĐ
   - Loại, giá trị, LTV, legal status

5. ĐÁNH GIÁ RỦI RO
   - Risk Grade, key risks, mitigants

6. ĐỀ XUẤT
   - Cấu trúc khoản vay
   - Covenant package
   - Điều kiện giải ngân
   - Recommendation: APPROVE / CONDITIONAL / REJECT

7. PHÊ DUYỆT
   - Cấp phê duyệt theo DOA
   - Chữ ký: CA → CA Manager → Risk → CC
```

## 10.2 Post-Loan Inspection Template

```
BIÊN BẢN KIỂM TRA SAU VAY

KH: _______________  CIF: _______________
Ngày kiểm tra: _______________  RM: _______________

1. KIỂM TRA SỬ DỤNG VỐN
   [ ] Vốn sử dụng đúng mục đích HĐ
   [ ] Chứng từ chứng minh đầy đủ
   [ ] Ghi chú: _______________

2. TÌNH HÌNH HOẠT ĐỘNG
   [ ] Nhà xưởng/văn phòng hoạt động bình thường
   [ ] Nhân sự ổn định
   [ ] Sản xuất/KD bình thường
   [ ] Ghi chú: _______________

3. TSBĐ
   [ ] Tài sản còn nguyên vẹn
   [ ] Không có tranh chấp mới
   [ ] Bảo hiểm còn hiệu lực
   [ ] Ghi chú: _______________

4. NHẬN XÉT & KIẾN NGHỊ
   _______________

Chữ ký RM: _______________
Chữ ký KH: _______________
```

## 10.3 Covenant Compliance Checklist

```
BẢNG THEO DÕI COVENANT

KH: _______________  Kỳ: Q__/20__

FINANCIAL COVENANTS:
| Covenant          | Ngưỡng  | Thực tế | PASS/FAIL |
|-------------------|---------|---------|-----------|
| DSCR              | ≥ 1.20x |         |           |
| D/E               | ≤ 3.0x  |         |           |
| Current Ratio     | ≥ 1.2x  |         |           |
| Debt/EBITDA       | ≤ 5.0x  |         |           |

NON-FINANCIAL COVENANTS:
| Covenant                    | Tuân thủ | Ghi chú |
|-----------------------------|----------|---------|
| Cung cấp BCTC đúng hạn     |          |         |
| Không chia cổ tức khi breach|          |         |
| Thông báo sự kiện bất thường|          |         |
| Không thế chấp TS cho bên 3 |          |         |

Kết luận: _______________
CA: _______________  Ngày: _______________
```

---

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

