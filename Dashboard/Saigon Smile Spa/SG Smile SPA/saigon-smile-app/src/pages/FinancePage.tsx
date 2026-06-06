import React, { useState } from 'react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Legend } from 'recharts';
import { DollarSign, Wallet, ArrowUpRight, ArrowDownRight, RefreshCcw, CheckCircle2, AlertTriangle, Search } from 'lucide-react';
import { mockTransactions } from '../data';

// --- Giả lập dữ liệu Biểu đồ Cashflow vs Revenue (30 ngày) ---
const financeChartData = Array.from({ length: 30 }, (_, i) => {
  const d = new Date();
  d.setDate(d.getDate() - (29 - i));
  const baseRevenue = Math.floor(40 + Math.random() * 60) * 1_000_000;
  // Cashflow thường biến động mạnh hơn (khách mua gói)
  const cashflow = baseRevenue + (Math.random() > 0.7 ? Math.floor(50 + Math.random() * 100) * 1_000_000 : -Math.floor(10 + Math.random() * 20) * 1_000_000);
  return {
    ngay: `${d.getDate()}/${d.getMonth() + 1}`,
    revenue: baseRevenue,
    cashflow: Math.max(0, cashflow),
  };
});

export const FinancePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'reconciliation' | 'commissions'>('overview');

  const formatVND = (val: number) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--text-100)] mb-1">Tài Chính & Hoa Hồng</h1>
          <p className="text-sm text-[var(--text-400)]">Minh bạch dòng tiền, tự động đối soát và phân bổ hoa hồng đa tầng.</p>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-primary" onClick={() => {}}>
            <RefreshCcw size={16} /> Chốt Sổ Cuối Ngày
          </button>
        </div>
      </div>

      <div className="flex gap-4 mb-6 border-b border-[var(--surface-border)] pb-2">
        <button className={`pb-2 px-1 ${activeTab === 'overview' ? 'border-b-2 border-[var(--gold-400)] text-[var(--gold-400)] font-semibold' : 'text-[var(--text-400)]'}`} onClick={() => setActiveTab('overview')}>Tổng Quan Dòng Tiền</button>
        <button className={`pb-2 px-1 ${activeTab === 'reconciliation' ? 'border-b-2 border-[var(--gold-400)] text-[var(--gold-400)] font-semibold' : 'text-[var(--text-400)]'}`} onClick={() => setActiveTab('reconciliation')}>Đối Soát Ngân Hàng (Auto-Reconcile)</button>
        <button className={`pb-2 px-1 ${activeTab === 'commissions' ? 'border-b-2 border-[var(--gold-400)] text-[var(--gold-400)] font-semibold' : 'text-[var(--text-400)]'}`} onClick={() => setActiveTab('commissions')}>Qũy Hoa Hồng Nhân Sự</button>
      </div>

      {activeTab === 'overview' && (
        <div className="animate-fade-up">
          <div className="grid-4 mb-6">
            <div className="card">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-[rgba(34,197,94,0.1)] flex items-center justify-center text-[var(--green)]">
                  <DollarSign size={20} />
                </div>
                <div className="text-sm text-[var(--text-400)]">Cashflow (Tiền thu vào)</div>
              </div>
              <div className="text-2xl font-bold text-[var(--text-100)]">{formatVND(1254000000)}</div>
              <div className="text-xs text-[var(--green)] flex items-center gap-1 mt-1"><ArrowUpRight size={12} /> +15% so với tháng trước</div>
            </div>
            <div className="card">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-[rgba(232,160,32,0.1)] flex items-center justify-center text-[var(--gold-400)]">
                  <Wallet size={20} />
                </div>
                <div className="text-sm text-[var(--text-400)]">Revenue (Doanh thu thực)</div>
              </div>
              <div className="text-2xl font-bold text-[var(--text-100)]">{formatVND(890000000)}</div>
              <div className="text-xs text-[var(--green)] flex items-center gap-1 mt-1"><ArrowUpRight size={12} /> +8% so với tháng trước</div>
            </div>
            <div className="card">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-[rgba(239,68,68,0.1)] flex items-center justify-center text-[var(--red)]">
                  <ArrowDownRight size={20} />
                </div>
                <div className="text-sm text-[var(--text-400)]">Chi Phí Vận Hành</div>
              </div>
              <div className="text-2xl font-bold text-[var(--text-100)]">{formatVND(340000000)}</div>
              <div className="text-xs text-[var(--red)] flex items-center gap-1 mt-1"><ArrowUpRight size={12} /> +5% so với tháng trước</div>
            </div>
            <div className="card">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-[rgba(168,85,247,0.1)] flex items-center justify-center text-[var(--purple)]">
                  <DollarSign size={20} />
                </div>
                <div className="text-sm text-[var(--text-400)]">Qũy Hoa Hồng Đã Chia</div>
              </div>
              <div className="text-2xl font-bold text-[var(--text-100)]">{formatVND(112000000)}</div>
              <div className="text-xs text-[var(--text-500)] mt-1">~12.5% Revenue</div>
            </div>
          </div>

          <div className="card mb-6">
            <div className="card-title mb-4">Biểu Đồ Cashflow vs Revenue (Tháng này)</div>
            <div style={{ height: 350 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={financeChartData}>
                  <defs>
                    <linearGradient id="colorCashflow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#e8a020" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#e8a020" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--surface-border)" vertical={false} />
                  <XAxis dataKey="ngay" stroke="var(--text-500)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="var(--text-500)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value / 1000000}Tr`} />
                  <RechartsTooltip 
                    contentStyle={{ backgroundColor: 'var(--bg-800)', borderColor: 'var(--surface-border)', borderRadius: 'var(--r-md)', color: 'var(--text-100)' }}
                    itemStyle={{ color: 'var(--text-200)' }}
                    formatter={(value: any) => [`${(Number(value) / 1000000).toFixed(1)} Triệu`, '']}
                  />
                  <Legend />
                  <Area type="monotone" dataKey="cashflow" name="Cashflow (Tiền thu)" stroke="#22c55e" strokeWidth={2} fillOpacity={1} fill="url(#colorCashflow)" />
                  <Area type="monotone" dataKey="revenue" name="Revenue (Doanh thu)" stroke="#e8a020" strokeWidth={2} fillOpacity={1} fill="url(#colorRevenue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 p-4 bg-[var(--surface-1)] rounded-[var(--r-md)] border border-[var(--surface-border)] text-sm text-[var(--text-300)]">
              <strong>💡 Insight:</strong> Sự chênh lệch lớn giữa Cashflow và Revenue vào các ngày 15, 18, 22 là do các chiến dịch bán Gói liệu trình (Package Sales) thành công. Tiền đã thu nhưng dịch vụ chưa cung cấp hết, hệ thống ghi nhận vào Nợ phải trả (Deferred Revenue).
            </div>
          </div>
        </div>
      )}

      {activeTab === 'reconciliation' && (
        <div className="animate-fade-up">
          <div className="card mb-6">
            <div className="flex justify-between items-center mb-4">
              <div className="card-title">Đối Soát Giao Dịch (Hôm nay)</div>
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-500)]" />
                <input type="text" placeholder="Tìm mã GD, nội dung..." className="bg-[var(--bg-800)] border border-[var(--surface-border)] rounded-[var(--r-sm)] py-1.5 pl-9 pr-3 text-sm text-[var(--text-100)] w-64" />
              </div>
            </div>
            
            <div className="table-wrapper">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Thời gian</th>
                    <th>Mã GD (Nội bộ)</th>
                    <th>Nội dung chuyển khoản</th>
                    <th>Phương thức</th>
                    <th className="text-right">Số tiền</th>
                    <th>Trạng thái</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {mockTransactions.map((tx, idx) => (
                    <tr key={idx}>
                      <td>{tx.time}</td>
                      <td className="font-mono text-xs">{tx.id}</td>
                      <td>{tx.content}</td>
                      <td>
                        <span className="px-2 py-1 rounded bg-[var(--surface-1)] text-xs text-[var(--text-300)] border border-[var(--surface-border)]">
                          {tx.type}
                        </span>
                      </td>
                      <td className={`text-right font-semibold ${tx.amount > 0 ? 'text-[var(--green)]' : 'text-[var(--red)]'}`}>
                        {tx.amount > 0 ? '+' : ''}{formatVND(tx.amount)}
                      </td>
                      <td>
                        {tx.status === 'matched' && <span className="badge badge-success"><CheckCircle2 size={12}/> Đã khớp Bank</span>}
                        {tx.status === 'categorized_ai' && <span className="badge badge-warning"><AlertTriangle size={12}/> AI Phân loại</span>}
                        {tx.status === 'pending_audit' && <span className="badge badge-danger">Chờ kiểm toán</span>}
                      </td>
                      <td>
                        <button className="btn btn-sm btn-secondary">Chi tiết</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'commissions' && (
        <div className="animate-fade-up card">
           <div className="card-title mb-4">Động cơ chia Hoa hồng (Auto-Split Engine)</div>
           <p className="text-[var(--text-400)] text-sm mb-6">Mô phỏng quy tắc chia hoa hồng tự động khi một Booking chuyển sang trạng thái "Completed".</p>
           
           <div className="p-4 bg-[var(--surface-1)] rounded-[var(--r-md)] border border-[var(--surface-border)] mb-4">
             <div className="flex justify-between items-center mb-3">
                <span className="text-[var(--text-200)] font-semibold">Quy tắc: Dịch vụ "Thermage FLX"</span>
                <span className="badge badge-success">Đang kích hoạt</span>
             </div>
             <div className="grid-3 gap-4">
                <div className="p-3 bg-[var(--bg-800)] rounded-[var(--r-sm)] border border-[var(--surface-border)]">
                  <div className="text-xs text-[var(--text-500)] mb-1">Bác sĩ thực hiện</div>
                  <div className="text-lg font-bold text-[var(--gold-400)]">10% <span className="text-sm font-normal text-[var(--text-400)]">Doanh thu</span></div>
                </div>
                <div className="p-3 bg-[var(--bg-800)] rounded-[var(--r-sm)] border border-[var(--surface-border)]">
                  <div className="text-xs text-[var(--text-500)] mb-1">KTV Phụ tá (Tiền Tua)</div>
                  <div className="text-lg font-bold text-[var(--purple)]">150.000đ <span className="text-sm font-normal text-[var(--text-400)]">/ ca</span></div>
                </div>
                <div className="p-3 bg-[var(--bg-800)] rounded-[var(--r-sm)] border border-[var(--surface-border)]">
                  <div className="text-xs text-[var(--text-500)] mb-1">Sale tư vấn (Lần đầu)</div>
                  <div className="text-lg font-bold text-[var(--green)]">5% <span className="text-sm font-normal text-[var(--text-400)]">Giá trị hóa đơn</span></div>
                </div>
             </div>
           </div>
        </div>
      )}
    </div>
  );
};
