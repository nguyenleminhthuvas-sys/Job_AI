import React, { useState } from 'react';
import AppLayout from '../components/AppLayout';
import { ktvLeaderboard } from '../data';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { Trophy, BarChart3, DollarSign, Award, Star, Activity, Check, Clock, Sparkles } from 'lucide-react';

const fmt = (n: number) => n >= 1_000_000 ? `${(n / 1_000_000).toFixed(0)}Tr` : n.toLocaleString('vi-VN');

const PERSONAL_RADAR = [
  { subject: 'Số ca', A: 86, fullMark: 100 },
  { subject: 'Doanh thu', A: 78, fullMark: 100 },
  { subject: 'CSAT', A: 96, fullMark: 100 },
  { subject: 'Đúng giờ', A: 92, fullMark: 100 },
  { subject: 'Tái ký', A: 71, fullMark: 100 },
  { subject: 'Cross-sell', A: 55, fullMark: 100 },
];

const WEEKLY_SESSIONS = [
  { day: 'T2', sessions: 5, revenue: 48 },
  { day: 'T3', sessions: 7, revenue: 72 },
  { day: 'T4', sessions: 6, revenue: 61 },
  { day: 'T5', sessions: 8, revenue: 88 },
  { day: 'T6', sessions: 9, revenue: 94 },
  { day: 'T7', sessions: 10, revenue: 115 },
  { day: 'CN', sessions: 8, revenue: 89 },
];

export default function KPIPage() {
  const [activeTab, setActiveTab] = useState<'leaderboard' | 'personal' | 'commission'>('leaderboard');
  const [selectedKTV, setSelectedKTV] = useState(ktvLeaderboard[0]);

  return (
    <AppLayout title="KPI & Hoa hồng" subtitle="Theo dõi hiệu suất và tính toán hoa hồng nhân sự">
      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {[
          { key: 'leaderboard', label: 'Bảng xếp hạng', icon: Trophy },
          { key: 'personal', label: 'KPI cá nhân', icon: BarChart3 },
          { key: 'commission', label: 'Hoa hồng', icon: DollarSign },
        ].map(t => {
          const Icon = t.icon;
          return (
            <button key={t.key} className={`btn ${activeTab === t.key ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setActiveTab(t.key as any)} id={`tab-kpi-${t.key}`}
              style={{ display: 'flex', alignItems: 'center', gap: 6, borderRadius: 'var(--r-sm)', fontSize: 11, padding: '8px 14px' }}>
              <Icon size={13} />
              {t.label}
            </button>
          );
        })}
      </div>

      {/* === LEADERBOARD === */}
      {activeTab === 'leaderboard' && (
        <div className="animate-fade">
          {/* Top 3 Podium */}
          <div className="card mb-6">
            <div className="card-title mb-6"><span className="card-title-dot" />Top KTV tháng {new Date().getMonth() + 1}</div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 24, marginBottom: 32 }}>
              {/* 2nd */}
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: 50, height: 50, borderRadius: 'var(--r-sm)', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--surface-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 600, color: 'var(--text-300)', margin: '0 auto 12px' }}>
                  {ktvLeaderboard[1].name.charAt(0)}
                </div>
                <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-200)', marginBottom: 2 }}>{ktvLeaderboard[1].name.split(' ').pop()}</div>
                <div style={{ fontSize: 11, color: 'var(--text-400)', marginBottom: 8 }}>{ktvLeaderboard[1].sessions} ca</div>
                <div style={{ height: 50, width: 70, background: 'var(--surface-1)', border: '1px solid var(--surface-border)', borderRadius: 'var(--r-sm) var(--r-sm) 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                  <span style={{ fontSize: 11, color: 'var(--text-400)', fontWeight: 600 }}>II</span>
                </div>
              </div>

              {/* 1st */}
              <div style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 6 }}><Award size={14} color="var(--gold-400)" /></div>
                <div style={{ width: 60, height: 60, borderRadius: 'var(--r-sm)', background: 'rgba(190,146,77,0.06)', border: '1px solid rgba(190,146,77,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 700, color: 'var(--gold-400)', margin: '0 auto 12px' }}>
                  {ktvLeaderboard[0].name.charAt(0)}
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--gold-400)', marginBottom: 2 }}>{ktvLeaderboard[0].name.split(' ').pop()}</div>
                <div style={{ fontSize: 11, color: 'var(--text-400)', marginBottom: 8 }}>{ktvLeaderboard[0].sessions} ca</div>
                <div style={{ height: 75, width: 70, background: 'rgba(190,146,77,0.1)', border: '1px solid rgba(190,146,77,0.25)', borderRadius: 'var(--r-sm) var(--r-sm) 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                  <span style={{ fontSize: 11, color: 'var(--gold-400)', fontWeight: 700 }}>I</span>
                </div>
              </div>

              {/* 3rd */}
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: 50, height: 50, borderRadius: 'var(--r-sm)', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--surface-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 600, color: 'var(--amber)', margin: '0 auto 12px' }}>
                  {ktvLeaderboard[2].name.charAt(0)}
                </div>
                <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-200)', marginBottom: 2 }}>{ktvLeaderboard[2].name.split(' ').pop()}</div>
                <div style={{ fontSize: 11, color: 'var(--text-400)', marginBottom: 8 }}>{ktvLeaderboard[2].sessions} ca</div>
                <div style={{ height: 35, width: 70, background: 'var(--surface-1)', border: '1px solid var(--surface-border)', borderRadius: 'var(--r-sm) var(--r-sm) 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                  <span style={{ fontSize: 11, color: 'var(--text-400)', fontWeight: 600 }}>III</span>
                </div>
              </div>
            </div>

            {/* Full List */}
            {ktvLeaderboard.map((ktv, i) => (
              <div
                key={i}
                className="leaderboard-item"
                style={{ cursor: 'pointer', background: selectedKTV.name === ktv.name ? 'rgba(232,160,32,0.05)' : 'var(--surface-1)', borderColor: selectedKTV.name === ktv.name ? 'var(--gold-400)' : 'transparent' }}
                onClick={() => { setSelectedKTV(ktv); setActiveTab('personal'); }}
                id={`ktv-rank-${i+1}`}
              >
                <div className={`leaderboard-rank ${i === 0 ? 'r1' : i === 1 ? 'r2' : i === 2 ? 'r3' : 'other'}`}>{i + 1}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-200)' }}>{ktv.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-400)' }}>📍 {ktv.branch}</div>
                </div>
                <div style={{ textAlign: 'center', minWidth: 70 }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--text-100)' }}>{ktv.sessions}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-400)' }}>ca phục vụ</div>
                </div>
                <div style={{ textAlign: 'center', minWidth: 80 }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--gold-400)' }}>{fmt(ktv.revenue)}đ</div>
                  <div style={{ fontSize: 11, color: 'var(--text-400)' }}>doanh thu</div>
                </div>
                <div style={{ textAlign: 'center', minWidth: 65 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
                    <Star size={11} fill="var(--green)" color="var(--green)" />
                    <span>{ktv.csat}</span>
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--text-400)', marginTop: 2 }}>CSAT</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* === PERSONAL KPI === */}
      {activeTab === 'personal' && (
        <div className="animate-fade">
          <div className="flex gap-3 mb-6" style={{ flexWrap: 'wrap' }}>
            {ktvLeaderboard.map(ktv => (
              <button key={ktv.name} className={`btn btn-sm ${selectedKTV.name === ktv.name ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setSelectedKTV(ktv)}>
                {ktv.name.split(' ').pop()}
              </button>
            ))}
          </div>

          {/* Personal Stats */}
          <div className="grid-4 mb-6">
            {[
              { label: 'Ca phục vụ', value: selectedKTV.sessions, unit: 'ca', color: 'var(--gold-400)' },
              { label: 'Doanh thu tháng', value: fmt(selectedKTV.revenue) + 'đ', unit: '', color: 'var(--green)' },
              { label: 'Điểm CSAT', value: `${selectedKTV.csat}/5.0`, unit: 'Điểm hài lòng', color: 'var(--blue)' },
              { label: 'Hoa hồng ước tính', value: fmt(selectedKTV.commission) + 'đ', unit: '', color: 'var(--purple)' },
            ].map((item, i) => (
              <div key={i} className="card" style={{ borderTop: `2px solid ${item.color}` }}>
                <div className="metric-label">{item.label}</div>
                <div style={{ fontSize: 22, fontWeight: 800, color: item.color, marginTop: 6 }}>{item.value}</div>
                {item.unit && <div style={{ fontSize: 12, color: 'var(--text-400)' }}>{item.unit}</div>}
              </div>
            ))}
          </div>

          <div className="grid-2">
            {/* Radar Chart */}
            <div className="card">
              <div className="card-title"><span className="card-title-dot" />Chỉ số năng lực toàn diện</div>
              <ResponsiveContainer width="100%" height={250}>
                <RadarChart data={PERSONAL_RADAR}>
                  <PolarGrid stroke="rgba(255,255,255,0.08)" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--text-400)', fontSize: 12 }} />
                  <PolarRadiusAxis domain={[0, 100]} tick={{ fill: 'var(--text-500)', fontSize: 10 }} />
                  <Radar name={selectedKTV.name} dataKey="A" stroke="var(--gold-400)" fill="var(--gold-400)" fillOpacity={0.15} strokeWidth={2} />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* Weekly Sessions Chart */}
            <div className="card">
              <div className="card-title"><span className="card-title-dot" />Ca phục vụ 7 ngày qua</div>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={WEEKLY_SESSIONS}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                  <XAxis dataKey="day" tick={{ fill: 'var(--text-500)', fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: 'var(--text-500)', fontSize: 11 }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ background: 'var(--bg-600)', border: '1px solid var(--surface-border)', borderRadius: 8, fontSize: 12 }} />
                  <Bar dataKey="sessions" name="Số ca" fill="var(--gold-400)" radius={[4, 4, 0, 0]} opacity={0.85} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {/* === COMMISSION === */}
      {activeTab === 'commission' && (
        <div className="animate-fade">
          <div className="card mb-6" style={{ borderColor: 'rgba(232,160,32,0.3)' }}>
            <div className="card-title"><span className="card-title-dot" />Quy tắc tính hoa hồng tháng này</div>
            <div className="grid-3" style={{ gap: 16, marginBottom: 24 }}>
              {[
                { label: 'Hoa hồng cơ bản', value: '5%', desc: 'Trên doanh thu cá nhân', color: 'var(--gold-400)' },
                { label: 'Bonus CSAT ≥ 4.8', value: '+1%', desc: 'Điểm hài lòng xuất sắc', color: 'var(--green)' },
                { label: 'Bonus Cross-sell', value: '+0.5%', desc: 'Mỗi dịch vụ bán chéo', color: 'var(--purple)' },
              ].map((item, i) => (
                <div key={i} style={{ padding: 16, background: 'var(--surface-1)', borderRadius: 'var(--r-md)', border: `1px solid ${item.color}30`, textAlign: 'center' }}>
                  <div style={{ fontSize: 28, fontWeight: 800, color: item.color }}>{item.value}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-200)', marginTop: 4 }}>{item.label}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-400)', marginTop: 2 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Commission Table */}
          <div className="card">
            <div className="card-title mb-4"><span className="card-title-dot" />Chi tiết hoa hồng từng KTV</div>
            <div className="table-wrapper">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Kỹ thuật viên</th>
                    <th>Chi nhánh</th>
                    <th>Doanh thu</th>
                    <th>HC cơ bản (5%)</th>
                    <th>Bonus CSAT</th>
                    <th>Bonus Cross-sell</th>
                    <th>Tổng hoa hồng</th>
                    <th>Trạng thái</th>
                  </tr>
                </thead>
                <tbody>
                  {ktvLeaderboard.map((ktv, i) => {
                    const base = ktv.revenue * 0.05;
                    const csatBonus = ktv.csat >= 4.8 ? ktv.revenue * 0.01 : 0;
                    const crossBonus = Math.floor(Math.random() * 5) * ktv.revenue * 0.005;
                    const total = base + csatBonus + crossBonus;
                    return (
                      <tr key={i}>
                        <td style={{ fontWeight: 700 }}>{ktv.name}</td>
                        <td style={{ color: 'var(--text-400)', fontSize: 12 }}>{ktv.branch}</td>
                        <td style={{ color: 'var(--gold-400)', fontWeight: 700 }}>{fmt(ktv.revenue)}đ</td>
                        <td>{fmt(base)}đ</td>
                        <td style={{ color: ktv.csat >= 4.8 ? 'var(--green)' : 'var(--text-500)' }}>
                          {ktv.csat >= 4.8 ? `+${fmt(csatBonus)}đ` : '—'}
                        </td>
                        <td style={{ color: 'var(--purple)' }}>+{fmt(crossBonus)}đ</td>
                        <td style={{ fontSize: 15, fontWeight: 800, color: 'var(--text-100)' }}>{fmt(total)}đ</td>
                        <td>
                          <span className={`badge ${i < 3 ? 'badge-green' : 'badge-amber'}`} style={{ padding: '2px 8px', fontSize: 10 }}>
                            {i < 3 ? <Check size={10} /> : <Clock size={10} />}
                            &nbsp;{i < 3 ? 'Đã duyệt' : 'Chờ duyệt'}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="flex justify-between items-center mt-4" style={{ padding: '12px 0', borderTop: '1px solid var(--surface-border)', flexWrap: 'wrap', gap: 12 }}>
              <div style={{ fontSize: 13, color: 'var(--text-400)' }}>
                Tổng hoa hồng phải trả tháng này:
                <span style={{ color: 'var(--gold-400)', fontWeight: 600, fontSize: 16, marginLeft: 12, letterSpacing: '-0.01em' }}>
                  {fmt(ktvLeaderboard.reduce((sum, k) => sum + k.commission, 0))}đ
                </span>
              </div>
              <button className="btn btn-primary" id="btn-approve-commission" style={{ borderRadius: 'var(--r-sm)', fontSize: 12, padding: '8px 14px' }}>Duyệt hoa hồng tháng này</button>
            </div>
          </div>
        </div>
      )}
    </AppLayout>
  );
}
