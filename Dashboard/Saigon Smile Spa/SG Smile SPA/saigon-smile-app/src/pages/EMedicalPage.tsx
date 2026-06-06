import React, { useState } from 'react';
import AppLayout from '../components/AppLayout';
import { mockPatients } from '../data';
import {
  Search, ChevronRight, Brain, Activity, Pill, User, Phone,
  Layers, AlertTriangle, CheckCircle2, Image, Sparkles,
  Calendar, FileText, Star, Link2, Users, ClipboardList, ScanFace, FileSignature, Share2, ShieldCheck
} from 'lucide-react';

type Patient = typeof mockPatients[0];

function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  return (
    <div className="ba-slider-wrap" style={{ position: 'relative', cursor: 'ew-resize', userSelect: 'none' }}
      onMouseMove={e => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        setSliderPos(Math.min(90, Math.max(10, x)));
      }}>
      {/* BEFORE */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', width: `${sliderPos}%` }}>
        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #2c2c2e, #1c1c1e)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Sparkles size={48} color="rgba(255,255,255,0.15)" strokeWidth={1} />
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 12, fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Tháng 1/2026 (Trước điều trị)</div>
        </div>
        <div className="ba-label" style={{ borderRadius: 'var(--r-sm)', fontSize: 10, letterSpacing: '0.05em' }}>TRƯỚC</div>
      </div>
      {/* AFTER */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #1c1c1e, rgba(190,146,77,0.15))', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Sparkles size={48} color="var(--gold-400)" strokeWidth={1} />
          <div style={{ fontSize: 11, color: 'var(--gold-300)', marginTop: 12, fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Tháng 5/2026 (Hiện tại)</div>
        </div>
        <div className="ba-label" style={{ borderRadius: 'var(--r-sm)', fontSize: 10, letterSpacing: '0.05em' }}>SAU</div>
      </div>
      {/* Divider */}
      <div style={{
        position: 'absolute', top: 0, bottom: 0,
        left: `${sliderPos}%`, width: 2,
        background: 'white', zIndex: 10,
        transform: 'translateX(-50%)',
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 32, height: 32, borderRadius: '50%',
          background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.4)', cursor: 'ew-resize',
          fontSize: 14, color: '#1a1a2e', fontWeight: 700,
        }}>⟺</div>
      </div>
    </div>
  );
}

function PatientDetail({ patient, onBack }: { patient: Patient; onBack: () => void }) {
  const [activeTab, setActiveTab] = useState<'lich-su' | 'ba' | 'ai' | 'checkin'>('lich-su');
  return (
    <div className="animate-fade-up">
      <button className="btn btn-ghost btn-sm mb-6" onClick={onBack} id="btn-back-patient">
        ← Quay lại danh sách
      </button>

      {/* Patient Header */}
      <div className="card mb-6" style={{ display: 'flex', alignItems: 'center', gap: 24, padding: 24 }}>
        <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg, var(--gold-400), var(--purple))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 800, color: 'white', flexShrink: 0 }}>
          {patient.name.charAt(0)}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 20, fontWeight: 600, color: 'var(--text-100)', marginBottom: 8, letterSpacing: '-0.02em' }}>{patient.name}</div>
          <div style={{ display: 'flex', gap: 16, fontSize: 12, color: 'var(--text-400)', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><User size={12} /> {patient.age} tuổi</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Phone size={12} /> {patient.phone}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Layers size={12} /> {patient.package}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Activity size={12} /> {patient.skinType}</span>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 11, color: 'var(--text-400)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Buổi điều trị</div>
          <div style={{ fontSize: 24, fontWeight: 600, color: 'var(--gold-400)' }}>{patient.sessions - patient.sessionsLeft}/{patient.sessions}</div>
          <div style={{ display: 'flex', gap: 4, marginTop: 8, justifyContent: 'flex-end' }}>
            {Array.from({ length: patient.sessions }).map((_, i) => (
              <div key={i} style={{ width: 8, height: 8, borderRadius: 2, background: i < patient.sessions - patient.sessionsLeft ? 'var(--green)' : 'var(--bg-500)' }} />
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <span className={`badge ${patient.allergy !== 'Không có' ? 'badge-red' : 'badge-green'}`} style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '4px 10px', fontSize: 11 }}>
            {patient.allergy !== 'Không có' ? <AlertTriangle size={12} /> : <CheckCircle2 size={12} />}
            {patient.allergy !== 'Không có' ? `Dị ứng: ${patient.allergy}` : 'Không dị ứng'}
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {[
          { key: 'lich-su', label: 'Lịch sử điều trị', icon: ClipboardList },
          { key: 'ba', label: 'Trước / Sau', icon: Image },
          { key: 'ai', label: 'AI Khuyến nghị', icon: Sparkles },
          { key: 'checkin', label: 'E-Medical Check-in', icon: FileSignature },
        ].map(t => {
          const Icon = t.icon;
          return (
            <button key={t.key} className={`btn ${activeTab === t.key ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setActiveTab(t.key as any)} id={`tab-patient-${t.key}`}
              style={{ display: 'flex', alignItems: 'center', gap: 6, borderRadius: 'var(--r-sm)', fontSize: 11, padding: '8px 14px' }}>
              <Icon size={13} />
              {t.label}
            </button>
          );
        })}
      </div>

      {activeTab === 'lich-su' && (
        <div className="animate-fade">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {patient.history.map((h, i) => (
              <div key={i} className="card" style={{ display: 'flex', gap: 20 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--green-dim)', border: '2px solid var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green)', fontWeight: 800, fontSize: 14 }}>
                    {patient.sessions - patient.sessionsLeft - i}
                  </div>
                  {i < patient.history.length - 1 && <div style={{ width: 2, flex: 1, background: 'var(--surface-border)', marginTop: 8 }} />}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 11, color: 'var(--gold-400)', fontWeight: 600, marginBottom: 4, display: 'flex', alignItems: 'center', gap: 4 }}><Calendar size={12} /> {h.date}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-100)', marginBottom: 8 }}>{h.treatment}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-300)', background: 'var(--surface-1)', borderRadius: 'var(--r-md)', padding: '10px 14px', borderLeft: '2px solid var(--gold-400)' }}>
                    {h.note}
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--text-400)', marginTop: 8, display: 'flex', alignItems: 'center', gap: 4 }}><User size={12} /> {patient.doctor}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="btn btn-primary mt-4" id="btn-add-session">+ Ghi nhận buổi điều trị mới</button>
        </div>
      )}

      {activeTab === 'ba' && (
        <div className="animate-fade">
          <div className="card">
            <div className="card-title"><span className="card-title-dot" />Kéo thanh trượt để so sánh kết quả điều trị</div>
            <BeforeAfterSlider />
            <div className="grid-3 mt-4" style={{ gap: 12 }}>
              {[
                { label: 'Giảm nhăn', value: '35%', icon: Sparkles, color: 'var(--gold-400)' },
                { label: 'Nâng cơ', value: '+2.1cm', icon: Activity, color: 'var(--green)' },
                { label: 'CSAT khách', value: '4.9/5', icon: Star, color: 'var(--amber)' },
              ].map((m, i) => {
                const Icon = m.icon;
                return (
                  <div key={i} style={{ textAlign: 'center', padding: 16, background: 'var(--bg-800)', borderRadius: 'var(--r-md)', border: '1px solid var(--surface-border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', color: m.color, marginBottom: 8 }}><Icon size={18} strokeWidth={1.5} /></div>
                    <div style={{ fontSize: 18, fontWeight: 600, color: 'var(--gold-400)', letterSpacing: '-0.01em' }}>{m.value}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-400)', marginTop: 2 }}>{m.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'ai' && (
        <div className="animate-fade">
          <div className="card" style={{ borderColor: 'rgba(168,85,247,0.3)' }}>
            <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, borderRadius: 'var(--r-sm)', background: 'var(--purple-dim)', border: '1px solid rgba(191,90,242,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--purple)', flexShrink: 0 }}>
                <Brain size={18} strokeWidth={1.5} />
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--purple)', marginBottom: 4 }}>Phác đồ lâm sàng AI</div>
                <div style={{ fontSize: 11, color: 'var(--text-400)' }}>Khuyến nghị tự động từ Hồ sơ điều trị Bệnh nhân</div>
              </div>
            </div>
            <div style={{ background: 'rgba(191,90,242,0.02)', borderRadius: 'var(--r-md)', padding: 16, fontSize: 12, color: 'var(--text-200)', lineHeight: 1.8, borderLeft: '2px solid var(--purple)' }}>
              {patient.aiRec}
            </div>
          </div>
          <div className="grid-2 mt-4">
            {[
              { title: 'Liệu trình tiếp theo đề xuất', items: ['S-Glow Collagen — 3 buổi', 'Thermage Eyes — 1 buổi'], color: 'var(--gold-400)', icon: Pill },
              { title: 'Chuyển tuyến hệ sinh thái', items: ['REVIV — IV Vitamin C 1000mg', 'USAC — Thư giãn cột sống'], color: 'var(--cyan)', icon: Link2 },
            ].map((block, i) => {
              const BlockIcon = block.icon;
              return (
                <div key={i} className="card" style={{ background: 'var(--bg-800)', border: '1px solid var(--surface-border)' }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: block.color, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <BlockIcon size={14} />
                    <span>{block.title}</span>
                  </div>
                {block.items.map((item, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: block.color }} />
                    <span style={{ fontSize: 13, color: 'var(--text-300)' }}>{item}</span>
                  </div>
                ))}
                <button className="btn btn-sm btn-primary mt-3 w-full" style={{ justifyContent: 'center' }}>Tư vấn ngay</button>
              </div>
            );
          })}
          </div>
        </div>
      )}

        {activeTab === 'checkin' && (
          <div className="card animate-fade-in" style={{ padding: 24, display: 'flex', gap: 24, alignItems: 'flex-start' }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-100)', marginBottom: 8 }}>E-Medical & Chữ ký số</div>
              <p style={{ fontSize: 13, color: 'var(--text-400)', marginBottom: 20 }}>Tạo đường link để khách hàng tự khai báo tình trạng sức khỏe và ký xác nhận trước khi đến hoặc ngay tại phòng chờ.</p>
              
              <div style={{ padding: 16, background: 'var(--surface-1)', borderRadius: 'var(--r-md)', border: '1px solid var(--surface-border)', marginBottom: 16 }}>
                <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-300)', marginBottom: 8 }}>Link khai báo của {patient.name}</div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <input className="input-field" value={`https://saigonsmile.com.vn/e-med/${patient.id}-xyz`} readOnly style={{ flex: 1, background: 'var(--bg-900)' }} />
                  <button className="btn btn-primary"><Share2 size={14} /> Gửi Zalo</button>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 12 }}>
                <div style={{ flex: 1, padding: 16, border: '1px solid var(--surface-border)', borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(34,197,94,0.1)', color: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-100)' }}>Trạng thái Khai báo</div>
                    <div style={{ fontSize: 11, color: 'var(--green)' }}>Đã hoàn thành lúc 08:30 hôm nay</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{ width: 280, padding: 20, background: 'var(--bg-800)', borderRadius: 'var(--r-md)', border: '1px solid var(--surface-border)', textAlign: 'center' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(190,146,77,0.1)', color: 'var(--gold-400)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <ScanFace size={32} />
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-100)', marginBottom: 8 }}>Smart Check-in</div>
              <p style={{ fontSize: 12, color: 'var(--text-400)', marginBottom: 16 }}>Hệ thống nhận diện khuôn mặt (FaceID) hoặc quét QR Zalo tại quầy lễ tân.</p>
              <button className="btn w-full" style={{ justifyContent: 'center', background: 'var(--surface-1)', color: 'var(--text-100)', border: '1px solid var(--surface-border)' }}>Mô phỏng Quét FaceID</button>
            </div>
          </div>
        )}
      </div>
  );
}

export default function EMedicalPage() {
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [search, setSearch] = useState('');

  const filtered = mockPatients.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.package.toLowerCase().includes(search.toLowerCase())
  );

  if (selectedPatient) {
    return (
      <AppLayout title={`Hồ sơ: ${selectedPatient.name}`} subtitle={`Gói: ${selectedPatient.package} • Bác sĩ: ${selectedPatient.doctor}`}>
        <PatientDetail patient={selectedPatient} onBack={() => setSelectedPatient(null)} />
      </AppLayout>
    );
  }

  return (
    <AppLayout title="Hồ sơ Bệnh nhân" subtitle="Quản lý hồ sơ điều trị điện tử">
      {/* Stats */}
      <div className="grid-4 mb-6">
        {[
          { label: 'Bệnh nhân đang trị liệu', value: '284', icon: Users, color: 'var(--gold-400)' },
          { label: 'Lịch hẹn hôm nay', value: '34', icon: Calendar, color: 'var(--green)' },
          { label: 'Hồ sơ cần cập nhật', value: '7', icon: FileText, color: 'var(--amber)' },
          { label: 'Khuyến nghị AI chờ duyệt', value: '12', icon: Sparkles, color: 'var(--purple)' },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="card animate-fade-up" style={{ animationDelay: `${i * 0.05}s`, background: 'var(--bg-800)', border: '1px solid var(--surface-border)', padding: '16px 20px', borderRadius: 'var(--r-md)' }}>
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

      {/* Search */}
      <div style={{ position: 'relative', marginBottom: 24 }}>
        <Search size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-500)' }} />
        <input
          className="input-field"
          style={{ paddingLeft: 42 }}
          placeholder="Tìm kiếm theo tên hoặc gói dịch vụ..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          id="search-patient"
        />
      </div>

      {/* Patient List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {filtered.map(patient => (
          <div key={patient.id} className="patient-card" onClick={() => setSelectedPatient(patient)} id={`patient-${patient.id}`}>
            <div className="patient-avatar">{patient.name.charAt(0)}</div>
            <div className="patient-info">
              <div className="patient-name" style={{ fontSize: 14, fontWeight: 600, letterSpacing: '-0.01em' }}>{patient.name}</div>
              <div className="patient-meta" style={{ display: 'flex', gap: 12, marginTop: 4, fontSize: 11, color: 'var(--text-400)' }}>
                <span>Tuổi: {patient.age}</span>
                <span>•</span>
                <span>Liệu trình: {patient.package}</span>
                <span>•</span>
                <span>Bác sĩ: {patient.doctor}</span>
              </div>
              <div style={{ marginTop: 6, display: 'flex', gap: 8, alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: 3 }}>
                  {Array.from({ length: patient.sessions }).map((_, i) => (
                    <div key={i} style={{ width: 8, height: 8, borderRadius: 2, background: i < patient.sessions - patient.sessionsLeft ? 'var(--green)' : 'var(--bg-500)' }} />
                  ))}
                </div>
                <span style={{ fontSize: 11, color: 'var(--text-400)' }}>
                  {patient.sessions - patient.sessionsLeft}/{patient.sessions} buổi • Còn {patient.sessionsLeft} buổi
                </span>
              </div>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{ fontSize: 11, color: 'var(--text-400)', marginBottom: 6 }}>Thăm khám gần nhất</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-200)' }}>{patient.lastVisit}</div>
              {patient.sessionsLeft <= 1 && (
                <span className="badge badge-red" style={{ marginTop: 6, display: 'inline-flex', alignItems: 'center', gap: 4, padding: '2px 8px', fontSize: 10 }}>
                  <AlertTriangle size={10} />
                  <span>Yêu cầu tái ký</span>
                </span>
              )}
            </div>
            <ChevronRight size={18} style={{ color: 'var(--text-500)', flexShrink: 0 }} />
          </div>
        ))}
      </div>
    </AppLayout>
  );
}
