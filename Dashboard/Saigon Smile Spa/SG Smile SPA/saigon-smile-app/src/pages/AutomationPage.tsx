import React, { useState } from 'react';
import AppLayout from '../components/AppLayout';
import { automationRules, leadData } from '../data';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import {
  MessageSquare, BarChart3, CheckSquare, Zap, Smartphone, Sparkles, ClipboardList, Send, Check,
  Inbox, CheckCircle2, Clock, XCircle, Camera, Building2, AlertTriangle, ChevronRight, User
} from 'lucide-react';

const ZALO_TEMPLATES: Record<string, { title: string; messages: string[] }> = {
  laser: {
    title: 'Chăm sóc sau liệu trình Laser / Trị nám',
    messages: [
      '🌸 Chào chị [TÊN KH],\n\nSaigon Smile Medical cảm ơn chị đã tin tưởng điều trị nám tại cơ sở. Sau liệu trình hôm nay, chị lưu ý:',
      '✅ Trong 24h đầu:\n• Không trang điểm\n• Tránh ánh nắng trực tiếp\n• Thoa kem chống nắng SPF 50+ mỗi 3 giờ\n• Dưỡng ẩm nhẹ dịu 2 lần/ngày',
      '📅 Lịch tái khám buổi tiếp theo của chị:\n📍 [CHI NHÁNH] - [NGÀY GIỜ]\n\nChị nhấn XÁC NHẬN để giữ chỗ hoặc ĐỔI LỊCH nếu cần nhé 💕',
    ],
  },
  giam_beo: {
    title: 'Hướng dẫn sau liệu trình Giảm béo',
    messages: [
      '💪 Chào chị [TÊN KH],\n\nHoàn thành buổi [SỐ BUỔI] rồi! Để tối ưu kết quả giảm béo, chị tuân thủ nhé:',
      '🥗 Dinh dưỡng 72h sau:\n• Uống tối thiểu 2.5 lít nước\n• Giảm tinh bột, đường tinh luyện\n• Bổ sung protein (trứng, cá, ức gà)\n• Tránh rượu bia hoàn toàn',
      '🎯 Chỉ số đo được hôm nay:\n📐 Vòng eo: [CM] cm\n📐 Vòng đùi: [CM] cm\n\nSo với buổi đầu giảm được [KẾT QUẢ]. Tuyệt vời! 🌟',
    ],
  },
  nhac_lich: {
    title: 'Nhắc lịch hẹn trước 24h',
    messages: [
      '📅 Nhắc nhở lịch hẹn của chị [TÊN KH]',
      '⏰ Ngày mai [NGÀY GIỜ]\n📍 [CHI NHÁNH]\n💆 Dịch vụ: [DỊCH VỤ]\n👩‍⚕️ KTV: [TÊN KTV]\n\nChị nhấn XÁC NHẬN tham gia hoặc ĐỔI LỊCH nếu cần thay đổi ạ.',
      '🌹 Lưu ý: Đến trước 10 phút để làm thủ tục check-in và thư giãn trước khi điều trị nhé chị! Hẹn gặp chị ngày mai 💕',
    ],
  },
  churn_risk: {
    title: 'Cảnh báo Rủi ro Rời bỏ (Churn Risk)',
    messages: [
      '⚠️ Hệ thống AI phát hiện khách hàng [TÊN KH] đã > 30 ngày chưa quay lại sử dụng Gói liệu trình [TÊN GÓI].',
      '🤖 Đề xuất tự động (Auto-action): Gửi tin nhắn Zalo tặng Voucher Tái kích hoạt.',
      '🎁 "Chào chị [TÊN KH], Saigon Smile gửi tặng chị Voucher 500k cho buổi liệu trình tiếp theo. Chị đặt lịch ngay để duy trì hiệu quả nhé!"'
    ],
  },
  review: {
    title: 'Xin Đánh Giá (Rating 5 Sao)',
    messages: [
      '🌟 Chào chị [TÊN KH],\n\nCảm ơn chị đã trải nghiệm dịch vụ tại Saigon Smile Spa hôm nay.',
      '💖 Chị đánh giá trải nghiệm hôm nay thế nào ạ? (Vui lòng chọn số sao để nhận thêm 100 điểm thẻ thành viên nhé)',
      '⭐⭐⭐⭐⭐ - Rất hài lòng\n⭐⭐⭐⭐ - Hài lòng\n⭐⭐⭐ - Bình thường\n⭐⭐ - Không hài lòng'
    ],
  },
};

const FLOW_STEPS = [
  { icon: Smartphone, label: 'Khách check-out', sub: 'Trên CRM CloudPro', color: 'var(--gold-400)' },
  { icon: Sparkles, label: 'AI nhận trigger', sub: 'Theo loại liệu trình', color: 'var(--blue)' },
  { icon: ClipboardList, label: 'Chọn template', sub: 'Phác đồ bác sĩ', color: 'var(--purple)' },
  { icon: Send, label: 'Gửi Zalo OA', sub: 'Tự động trong 30 phút', color: 'var(--green)' },
  { icon: Check, label: 'Khách xác nhận', sub: 'Nhắc lịch tái khám', color: 'var(--cyan)' },
];

export default function AutomationPage() {
  const [activeTab, setActiveTab] = useState<'zalo' | 'lead' | 'audit' | 'rules'>('zalo');
  const [selectedTemplate, setSelectedTemplate] = useState<'laser' | 'giam_beo' | 'nhac_lich' | 'churn_risk' | 'review'>('laser');
  const [rules, setRules] = useState(automationRules);
  const [auditResult, setAuditResult] = useState<Record<string, boolean | null>>({});

  const toggleRule = (id: string) => {
    setRules(rules.map(r => r.id === id ? { ...r, status: !r.status } : r));
  };

  const AUDIT_ITEMS = [
    'Khăn trải giường được gấp chuẩn',
    'Vị trí sản phẩm tiêu hao đúng quy định',
    'Đèn chiếu sáng hoạt động bình thường',
    'Máy điều hòa nhiệt độ 22-24°C',
    'Nước uống VIP đặt đúng chỗ',
    'Tinh dầu thơm đã khuếch tán',
    'Màn hình cảm ứng check-in hoạt động',
    'Bộ dụng cụ vệ sinh được khử trùng',
  ];

  const mockAudit = () => {
    const results: Record<string, boolean | null> = {};
    AUDIT_ITEMS.forEach(item => {
      results[item] = Math.random() > 0.2;
    });
    setAuditResult(results);
  };

  return (
    <AppLayout title="Trung tâm Tự động hoá" subtitle="Quản lý các luồng tự động vận hành">
      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {[
          { key: 'zalo', label: 'Zalo Care Agent', icon: MessageSquare },
          { key: 'lead', label: 'Lead Routing', icon: BarChart3 },
          { key: 'audit', label: 'Kiểm tra Phòng', icon: CheckSquare },
          { key: 'rules', label: 'Automation Rules', icon: Zap },
        ].map(t => {
          const Icon = t.icon;
          return (
            <button
              key={t.key}
              className={`btn ${activeTab === t.key ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setActiveTab(t.key as any)}
              id={`tab-${t.key}`}
              style={{ display: 'flex', alignItems: 'center', gap: 6, borderRadius: 'var(--r-sm)', fontSize: 11, padding: '8px 14px' }}
            >
              <Icon size={13} />
              {t.label}
            </button>
          );
        })}
      </div>

      {/* === ZALO CARE AGENT === */}
      {activeTab === 'zalo' && (
        <div className="animate-fade">
          {/* Flow Diagram */}
          <div className="card mb-6">
            <div className="card-title"><span className="card-title-dot" />Luồng Tự động hoá Zalo Care Agent</div>
            <div className="flow-diagram">
              {FLOW_STEPS.map((step, i) => {
                const StepIcon = step.icon;
                return (
                  <React.Fragment key={i}>
                    <div className="flow-step">
                      <div className="flow-step-content">
                        <div className="flow-step-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12, color: step.color }}>
                          <StepIcon size={20} strokeWidth={1.5} />
                        </div>
                        <div className="flow-step-label" style={{ color: step.color }}>{step.label}</div>
                        <div className="flow-step-sub">{step.sub}</div>
                      </div>
                    </div>
                    {i < FLOW_STEPS.length - 1 && <div className="flow-arrow">→</div>}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          <div className="grid-2">
            {/* Template Selector */}
            <div className="card">
              <div className="card-title"><span className="card-title-dot" />Chọn Template tin nhắn</div>
              <div className="flex flex-col gap-3 mb-4">
                {(Object.keys(ZALO_TEMPLATES) as ('laser' | 'giam_beo' | 'nhac_lich' | 'churn_risk' | 'review')[]).map(key => (
                  <div
                    key={key}
                    onClick={() => setSelectedTemplate(key)}
                    style={{
                      padding: '12px 16px', borderRadius: 'var(--r-md)',
                      border: `2px solid ${selectedTemplate === key ? 'var(--gold-400)' : 'var(--surface-border)'}`,
                      background: selectedTemplate === key ? 'rgba(232,160,32,0.06)' : 'var(--surface-1)',
                      cursor: 'pointer', transition: 'all 0.2s',
                    }}
                  >
                    <div style={{ fontSize: 14, fontWeight: 600, color: selectedTemplate === key ? 'var(--gold-400)' : 'var(--text-200)' }}>
                      {ZALO_TEMPLATES[key].title}
                    </div>
                    <div style={{ fontSize: 11, color: 'var(--text-500)', marginTop: 2 }}>
                      {ZALO_TEMPLATES[key].messages.length} tin nhắn trong workflow
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ padding: 12, background: 'var(--surface-1)', borderRadius: 'var(--r-md)', border: '1px solid var(--surface-border)', fontSize: 12 }}>
                <div style={{ color: 'var(--text-400)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 8 }}>Thống kê tháng này</div>
                <div className="flex justify-between" style={{ marginBottom: 6 }}>
                  <span style={{ color: 'var(--text-300)' }}>Tin nhắn đã gửi</span>
                  <span style={{ color: 'var(--green)', fontWeight: 700 }}>2,847</span>
                </div>
                <div className="flex justify-between" style={{ marginBottom: 6 }}>
                  <span style={{ color: 'var(--text-300)' }}>Tỷ lệ đọc</span>
                  <span style={{ color: 'var(--gold-400)', fontWeight: 700 }}>94.2%</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--text-300)' }}>KH xác nhận lịch</span>
                  <span style={{ color: 'var(--blue)', fontWeight: 700 }}>78.3%</span>
                </div>
              </div>
            </div>

            {/* Zalo Preview */}
            <div>
              <div className="card-title mb-4"><span className="card-title-dot" />Preview tin nhắn Zalo OA</div>
              <div className="zalo-phone-frame">
                <div className="zalo-header">
                  <div className="zalo-avatar" style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Sparkles size={14} color="var(--gold-400)" />
                  </div>
                  <div>
                    <div className="zalo-name">Saigon Smile Medical</div>
                    <div className="zalo-status">Official Account • Online</div>
                  </div>
                </div>
                <div className="zalo-messages">
                  {ZALO_TEMPLATES[selectedTemplate].messages.map((msg, i) => (
                    <div key={i} className="zalo-bubble" style={{ whiteSpace: 'pre-line', fontSize: 12, lineHeight: 1.5 }}>
                      {msg}
                    </div>
                  ))}
                  <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                    <div style={{ background: '#0068ff', color: 'white', borderRadius: 8, padding: '6px 12px', fontSize: 12, fontWeight: 700, flex: 1, textAlign: 'center' }}>XÁC NHẬN</div>
                    <div style={{ background: '#f0f2f5', color: '#1a1a2e', borderRadius: 8, padding: '6px 12px', fontSize: 12, fontWeight: 700, flex: 1, textAlign: 'center' }}>ĐỔI LỊCH</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* === LEAD ROUTING === */}
      {activeTab === 'lead' && (
        <div className="animate-fade">
          <div className="grid-4 mb-6">
            {[
              { label: 'Tổng Lead tháng', value: leadData.total, color: 'var(--text-100)', icon: Inbox },
              { label: 'Đã chuyển đổi', value: leadData.converted, color: 'var(--green)', icon: CheckCircle2 },
              { label: 'Đang xử lý', value: leadData.pending, color: 'var(--amber)', icon: Clock },
              { label: 'Không thành công', value: leadData.lost, color: 'var(--red)', icon: XCircle },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="card" style={{ padding: '16px 20px', borderRadius: 'var(--r-md)', background: 'var(--bg-800)', border: '1px solid var(--surface-border)' }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="metric-label" style={{ fontSize: 11, fontWeight: 500, color: 'var(--text-400)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{item.label}</div>
                      <div style={{ fontSize: 24, fontWeight: 600, color: item.color, marginTop: 4, letterSpacing: '-0.02em' }}>{item.value}</div>
                    </div>
                    <div style={{ color: 'var(--text-400)', opacity: 0.8 }}><Icon size={22} strokeWidth={1.5} /></div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid-2">
            {/* By Channel Pie */}
            <div className="card">
              <div className="card-title"><span className="card-title-dot" />Lead theo kênh tiếp thị</div>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={leadData.byChannel} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="count" nameKey="channel">
                    {leadData.byChannel.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                  </Pie>
                  <Tooltip contentStyle={{ background: 'var(--bg-600)', border: '1px solid var(--surface-border)', borderRadius: 8, fontSize: 12 }} />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                </PieChart>
              </ResponsiveContainer>
              {leadData.byChannel.map((ch, i) => (
                <div key={i} className="flex items-center justify-between" style={{ marginBottom: 8 }}>
                  <div className="flex items-center gap-2">
                    <div style={{ width: 10, height: 10, borderRadius: 2, background: ch.color }} />
                    <span style={{ fontSize: 13, color: 'var(--text-300)' }}>{ch.channel}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-100)' }}>{ch.count} lead</span>
                    <span style={{ fontSize: 12, color: 'var(--text-500)' }}>{Math.round(ch.count/leadData.total*100)}%</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Consultant Performance */}
            <div className="card">
              <div className="card-title"><span className="card-title-dot" />Hiệu suất Tư vấn viên</div>
              {leadData.consultants.map((c, i) => (
                <div key={i} style={{ marginBottom: 16 }}>
                  <div className="flex justify-between" style={{ marginBottom: 6 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-200)' }}>{c.name}</span>
                    <span style={{ fontSize: 13, color: 'var(--text-400)' }}>{c.converted}/{c.leads} lead</span>
                  </div>
                  <div className="progress-bar-wrap" style={{ height: 8 }}>
                    <div className="progress-bar gold" style={{ width: `${(c.converted/c.leads)*100}%` }} />
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--text-500)', marginTop: 4 }}>
                    Tỷ lệ chuyển đổi: <span style={{ color: 'var(--gold-400)', fontWeight: 700 }}>{Math.round(c.converted/c.leads*100)}%</span>
                  </div>
                </div>
              ))}
              <div style={{ padding: 12, background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: 'var(--r-md)', fontSize: 12 }}>
                🤖 AI phân công Round Robin tự động • Cân bằng tải theo hiệu suất thực tế
              </div>
            </div>
          </div>
        </div>
      )}

      {/* === ROOM AUDIT === */}
      {activeTab === 'audit' && (
        <div className="animate-fade">
          <div className="grid-2">
            <div className="card">
              <div className="card-title"><span className="card-title-dot" />Kiểm tra phòng trước khi đón khách</div>
              <div style={{ border: '1px dashed var(--surface-border)', borderRadius: 'var(--r-md)', padding: 40, textAlign: 'center', marginBottom: 24, cursor: 'pointer', transition: 'border-color 0.2s', background: 'rgba(255,255,255,0.005)' }}>
                <Camera size={36} color="var(--gold-400)" strokeWidth={1.5} style={{ marginBottom: 12 }} />
                <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-200)', marginBottom: 6 }}>Chụp ảnh phòng và phân tích chuẩn AI</div>
                <div style={{ fontSize: 11, color: 'var(--text-400)', marginBottom: 16 }}>Định dạng hỗ trợ: JPG, PNG · Tối đa 10MB</div>
                <button className="btn btn-secondary btn-sm" onClick={mockAudit} id="btn-run-audit" style={{ borderRadius: 'var(--r-sm)', fontSize: 12 }}>
                  Khởi chạy AI Audit
                </button>
              </div>

              {Object.keys(auditResult).length > 0 && (
                <div className="animate-fade">
                  <div style={{ marginBottom: 12, fontSize: 13, fontWeight: 600, color: 'var(--text-100)' }}>
                    Kết quả kiểm tra: &nbsp;
                    <span style={{ color: Object.values(auditResult).every(Boolean) ? 'var(--green)' : 'var(--amber)' }}>
                      {Object.values(auditResult).filter(Boolean).length}/{AUDIT_ITEMS.length} tiêu chuẩn đạt
                    </span>
                  </div>
                  {AUDIT_ITEMS.map(item => (
                    <div key={item} className="flex items-center justify-between" style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                      <span style={{ fontSize: 12, color: 'var(--text-300)' }}>{item}</span>
                      <span style={{ display: 'flex', alignItems: 'center' }}>
                        {auditResult[item] ? <CheckCircle2 size={14} color="var(--green)" /> : <XCircle size={14} color="var(--red)" />}
                      </span>
                    </div>
                  ))}
                  {!Object.values(auditResult).every(Boolean) && (
                    <div style={{ marginTop: 16, padding: '10px 14px', background: 'var(--amber-dim)', border: '1px solid rgba(255,159,10,0.15)', borderRadius: 'var(--r-md)', fontSize: 12, color: 'var(--amber)', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <AlertTriangle size={14} style={{ flexShrink: 0 }} />
                      <span>Có {Object.values(auditResult).filter(v => !v).length} tiêu chí chưa đạt. Vui lòng khắc phục ngay.</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="card">
              <div className="card-title"><span className="card-title-dot" />Lịch sử Audit — Tháng này</div>
              {['Phòng máy 1', 'Phòng máy 2', 'Phòng 5', 'Phòng máy 3'].map((room, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                  <Building2 size={16} color="var(--gold-400)" />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-200)' }}>{room}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-500)' }}>{i === 1 ? '28/05/2026 09:15' : i === 2 ? '27/05/2026 08:30' : '26/05/2026 10:00'}</div>
                  </div>
                  <span className={`badge ${i === 1 ? 'badge-amber' : 'badge-green'}`} style={{ padding: '2px 8px', fontSize: 10 }}>
                    {i === 1 ? '7/8 đạt' : '8/8 đạt'}
                  </span>
                </div>
              ))}

              <div style={{ marginTop: 16, padding: 12, background: 'var(--surface-1)', borderRadius: 'var(--r-md)', border: '1px solid var(--surface-border)' }}>
                <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-200)', marginBottom: 4 }}>Hiệu suất đạt chuẩn bình quan</div>
                <div style={{ fontSize: 24, fontWeight: 600, color: 'var(--green)', letterSpacing: '-0.02em' }}>96.2%</div>
                <div style={{ fontSize: 11, color: 'var(--text-400)', marginTop: 2 }}>Vượt chỉ tiêu quản lý vận hành (KPI 95%)</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* === AUTOMATION RULES === */}
      {activeTab === 'rules' && (
        <div className="animate-fade">
          <div className="flex justify-between items-center mb-6">
            <div style={{ fontSize: 14, color: 'var(--text-400)' }}>
              {rules.filter(r => r.status).length}/{rules.length} rules đang hoạt động
            </div>
            <button className="btn btn-primary btn-sm">+ Tạo rule mới</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {rules.map(rule => (
              <div key={rule.id} className="card" style={{ padding: '16px 20px' }}>
                <div className="flex items-center gap-4">
                  <div style={{ width: 36, height: 36, borderRadius: 'var(--r-sm)', background: rule.status ? 'var(--green-dim)' : 'rgba(255,255,255,0.02)', border: '1px solid var(--surface-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: rule.status ? 'var(--green)' : 'var(--text-400)', flexShrink: 0 }}>
                    <Zap size={16} strokeWidth={1.5} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: rule.status ? 'var(--text-100)' : 'var(--text-400)', marginBottom: 4 }}>
                      {rule.name}
                    </div>
                    <div style={{ fontSize: 11, color: 'var(--text-500)', display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span>Kích hoạt: {rule.trigger}</span>
                      <span>•</span>
                      <span>Hành động: {rule.action}</span>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right', marginRight: 16 }}>
                    <div style={{ fontSize: 18, fontWeight: 800, color: rule.status ? 'var(--green)' : 'var(--text-500)' }}>
                      {rule.status ? rule.sent.toLocaleString('vi-VN') : '—'}
                    </div>
                    <div style={{ fontSize: 11, color: 'var(--text-500)' }}>lần gửi</div>
                  </div>
                  {/* Toggle */}
                  <div
                    onClick={() => toggleRule(rule.id)}
                    style={{
                      width: 48, height: 26, borderRadius: 13,
                      background: rule.status ? 'var(--green)' : 'var(--bg-500)',
                      position: 'relative', cursor: 'pointer',
                      transition: 'background 0.2s', flexShrink: 0,
                    }}
                    id={`toggle-rule-${rule.id}`}
                  >
                    <div style={{
                      position: 'absolute', top: 3, left: rule.status ? 26 : 3,
                      width: 20, height: 20, borderRadius: '50%',
                      background: 'white', transition: 'left 0.2s',
                      boxShadow: '0 1px 4px rgba(0,0,0,0.3)',
                    }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </AppLayout>
  );
}
