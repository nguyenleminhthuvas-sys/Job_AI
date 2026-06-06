import React, { useState } from 'react';
import AppLayout from '../components/AppLayout';
import { revenueData, branchData, kpiData, machineData, BRANCHES } from '../data';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell, Legend, AreaChart, Area
} from 'recharts';
import { Download, Printer, DollarSign, Activity, TrendingUp, RefreshCw } from 'lucide-react';

const fmt = (n: number) => {
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(2)}Tỷ`;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(0)}Tr`;
  return n.toLocaleString('vi-VN');
};

export default function ReportsPage() {
  const [period, setPeriod] = useState<'week' | 'month' | 'quarter'>('month');
  const [branch, setBranch] = useState(BRANCHES[0]);

  const areaData = revenueData.map(d => ({
    ...d,
    total: d.giamBeo + d.treHoa + d.triNam + d.chamSoc,
  }));

  return (
    <AppLayout title="Báo cáo Quản trị" subtitle="Dữ liệu thời gian thực từ CloudPro CRM">
      {/* Filters */}
      <div className="flex items-center gap-4 mb-6" style={{ flexWrap: 'wrap' }}>
        <div className="tabs" style={{ flex: 'none' }}>
          {(['week', 'month', 'quarter'] as const).map(p => (
            <button key={p} className={`tab-item ${period === p ? 'active' : ''}`} onClick={() => setPeriod(p)} id={`period-${p}`}>
              {p === 'week' ? 'Tuần này' : p === 'month' ? 'Tháng này' : 'Quý này'}
            </button>
          ))}
        </div>
        <select className="input-field select-field" style={{ width: 220 }} value={branch} onChange={e => setBranch(e.target.value)} id="report-branch-select">
          {BRANCHES.map(b => <option key={b}>{b}</option>)}
        </select>
        <button className="btn btn-secondary btn-sm" id="btn-export" style={{ display: 'flex', alignItems: 'center', gap: 6, borderRadius: 'var(--r-sm)', fontSize: 12, padding: '6px 12px' }}><Download size={14} /> Xuất báo cáo CSV</button>
        <button className="btn btn-secondary btn-sm" id="btn-export-pdf" style={{ display: 'flex', alignItems: 'center', gap: 6, borderRadius: 'var(--r-sm)', fontSize: 12, padding: '6px 12px' }}><Printer size={14} /> In PDF</button>
      </div>

      {/* Summary Cards */}
      <div className="grid-4 mb-6">
        {[
          { label: 'Tổng doanh thu', value: fmt(kpiData.doanhThuThang) + 'đ', change: '+14.2%', up: true, icon: DollarSign, color: 'var(--gold-400)' },
          { label: 'Tổng lượt phục vụ', value: '1,847', change: '+8.6%', up: true, icon: Activity, color: 'var(--green)' },
          { label: 'Giá trị đơn trung bình', value: '4.46Trđ', change: '+5.1%', up: true, icon: TrendingUp, color: 'var(--blue)' },
          { label: 'Tỷ lệ tái mua', value: '68.3%', change: '-2.1%', up: false, icon: RefreshCw, color: 'var(--purple)' },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="card animate-fade-up" style={{ animationDelay: `${i * 0.05}s`, background: 'var(--bg-800)', border: '1px solid var(--surface-border)', padding: '16px 20px', borderRadius: 'var(--r-md)' }}>
              <div className="flex justify-between items-start">
                <div>
                  <div className="metric-label" style={{ fontSize: 11, fontWeight: 500, color: 'var(--text-400)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{item.label}</div>
                  <div style={{ fontSize: 22, fontWeight: 600, color: 'var(--text-100)', marginTop: 6, letterSpacing: '-0.02em' }}>{item.value}</div>
                  <div style={{ fontSize: 11, color: item.up ? 'var(--green)' : 'var(--red)', marginTop: 4, fontWeight: 500 }}>
                    {item.up ? '↑' : '↓'} {item.change} so với kỳ trước
                  </div>
                </div>
                <div style={{ color: item.color, opacity: 0.8 }}><Icon size={20} strokeWidth={1.8} /></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Area Chart — Total Revenue */}
      <div className="card mb-6 animate-fade-up stagger-2">
        <div className="flex justify-between items-center mb-4">
          <div className="card-title"><span className="card-title-dot" />Xu hướng doanh thu tổng hợp</div>
        </div>
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={areaData} margin={{ top: 5, right: 10, bottom: 5, left: 10 }}>
            <defs>
              <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#e8a020" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#e8a020" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
            <XAxis dataKey="ngay" tick={{ fill: 'var(--text-500)', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: 'var(--text-500)', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => `${(v/1000000).toFixed(0)}Tr`} />
            <Tooltip formatter={(v: any) => [`${fmt(Number(v))}đ`, 'Tổng DT']} contentStyle={{ background: 'var(--bg-600)', border: '1px solid var(--surface-border)', borderRadius: 8, fontSize: 12 }} />
            <Area type="monotone" dataKey="total" stroke="#e8a020" strokeWidth={2} fill="url(#colorTotal)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* 2 col charts */}
      <div className="grid-2 mb-6">
        {/* Revenue by Service */}
        <div className="card animate-fade-up stagger-3">
          <div className="card-title"><span className="card-title-dot" />Doanh thu theo nhóm dịch vụ</div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={revenueData.slice(-7)}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="ngay" tick={{ fill: 'var(--text-500)', fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: 'var(--text-500)', fontSize: 10 }} tickFormatter={v => `${v/1000000}Tr`} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: 'var(--bg-600)', border: '1px solid var(--surface-border)', borderRadius: 8, fontSize: 12 }} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Bar dataKey="giamBeo" name="Giảm béo" stackId="a" fill="#e8a020" />
              <Bar dataKey="treHoa" name="Trẻ hóa" stackId="a" fill="#3b82f6" />
              <Bar dataKey="triNam" name="Trị nám" stackId="a" fill="#22c55e" />
              <Bar dataKey="chamSoc" name="Chăm sóc" stackId="a" fill="#a855f7" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Branch Revenue */}
        <div className="card animate-fade-up stagger-4">
          <div className="card-title"><span className="card-title-dot" />Doanh thu & Tăng trưởng chi nhánh</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {branchData.map((b, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1">
                  <span style={{ fontSize: 13, color: 'var(--text-300)', fontWeight: 500 }}>{b.name}</span>
                  <div className="flex gap-3 items-center">
                    <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-100)' }}>{fmt(b.revenue)}đ</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: b.growth >= 0 ? 'var(--green)' : 'var(--red)' }}>
                      {b.growth >= 0 ? '↑' : '↓'}{Math.abs(b.growth)}%
                    </span>
                  </div>
                </div>
                <div className="progress-bar-wrap" style={{ height: 6 }}>
                  <div className="progress-bar gold" style={{ width: `${(b.revenue / 2200000000) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Machine ROI Table */}
      <div className="card animate-fade-up stagger-5">
        <div className="card-title mb-4"><span className="card-title-dot" />ROI máy móc thiết bị</div>
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Thiết bị</th>
                <th>Số ca/tháng</th>
                <th>Hiệu suất</th>
                <th>Doanh thu ước tính</th>
                <th>Idle time</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {machineData.map((m, i) => {
                const revenue = m.sessions * 45 * 3_500_000;
                return (
                  <tr key={i}>
                    <td style={{ fontWeight: 700 }}>{m.name}</td>
                    <td>{m.sessions * 45} ca</td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div className="progress-bar-wrap" style={{ width: 80, height: 6 }}>
                          <div className={`progress-bar ${m.utilization > 80 ? 'green' : m.utilization > 60 ? 'gold' : 'blue'}`} style={{ width: `${m.utilization}%` }} />
                        </div>
                        <span style={{ fontSize: 13, fontWeight: 700 }}>{m.utilization}%</span>
                      </div>
                    </td>
                    <td style={{ color: 'var(--gold-400)', fontWeight: 700 }}>{fmt(revenue)}đ</td>
                    <td style={{ color: m.utilization < 70 ? 'var(--amber)' : 'var(--text-400)' }}>
                      {100 - m.utilization}%
                    </td>
                    <td>
                      <span className={`badge badge-${m.status === 'Đang chạy' ? 'green' : m.status === 'Bảo trì' ? 'amber' : 'blue'}`}>
                        {m.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </AppLayout>
  );
}
