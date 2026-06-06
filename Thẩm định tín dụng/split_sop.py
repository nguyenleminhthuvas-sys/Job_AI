import re
import os

source_file = "/Users/mac/Documents/AI Antigravity/Báo cáo - Kết quả/Thẩm định tín dụng/V3 - SOP_THAM_DINH_TIN_DUNG.md"
target_dir = "/Users/mac/Documents/AI Antigravity/Skill/tham-dinh-tin-dung-ver4/references"

with open(source_file, "r", encoding="utf-8") as f:
    lines = f.readlines()

files = [
    {"name": "01_overview_and_process.md", "start_marker": "# 1. EXECUTIVE OVERVIEW", "end_marker": "# 3. DETAILED PHASE-BY-PHASE WORKFLOW"},
    {"name": "02_phase_workflow.md", "start_marker": "# 3. DETAILED PHASE-BY-PHASE WORKFLOW", "end_marker": "# 4. CREDIT RISK FRAMEWORK"},
    {"name": "03_risk_and_scoring.md", "start_marker": "# 4. CREDIT RISK FRAMEWORK", "end_marker": "# 5. FINANCIAL ANALYSIS FRAMEWORK"},
    {"name": "04_financial_analysis.md", "start_marker": "# 5. FINANCIAL ANALYSIS FRAMEWORK", "end_marker": "# 6. COLLATERAL MANAGEMENT FRAMEWORK"},
    {"name": "05_collateral.md", "start_marker": "# 6. COLLATERAL MANAGEMENT FRAMEWORK", "end_marker": "# 7. POST-LOAN MONITORING FRAMEWORK"},
    {"name": "06_post_loan_monitoring.md", "start_marker": "# 7. POST-LOAN MONITORING FRAMEWORK", "end_marker": "# 8. GOVERNANCE & INTERNAL CONTROL"},
    {"name": "07_governance_and_control.md", "start_marker": "# 8. GOVERNANCE & INTERNAL CONTROL", "end_marker": "# 10. SOP & OPERATIONAL TEMPLATES"},
    {"name": "08_templates_and_checklists.md", "start_marker": "# 10. SOP & OPERATIONAL TEMPLATES", "end_marker": "# 11. IMPLEMENTATION ROADMAP"},
    {"name": "09_antifraud_audit_appendix.md", "start_marker": "# 11. IMPLEMENTATION ROADMAP", "end_marker": None}
]

# We want everything before "# 1. EXECUTIVE OVERVIEW" (MỤC LỤC) to be included in 01_overview_and_process.md
current_idx = 0
current_content = []

start_first = False

for line in lines:
    if current_idx < len(files) - 1 and line.startswith(files[current_idx]["end_marker"]):
        # write the current file
        with open(os.path.join(target_dir, files[current_idx]["name"]), "w", encoding="utf-8") as out:
            out.writelines(current_content)
        # switch to next file
        current_idx += 1
        current_content = [line]
    else:
        current_content.append(line)

# write the last file
if current_content:
    with open(os.path.join(target_dir, files[current_idx]["name"]), "w", encoding="utf-8") as out:
        out.writelines(current_content)

print("Files generated:")
for f in os.listdir(target_dir):
    print("- " + f)
