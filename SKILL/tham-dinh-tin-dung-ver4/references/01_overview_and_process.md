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

