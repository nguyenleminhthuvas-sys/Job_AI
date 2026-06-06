import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth, getRoleIcon } from '../AuthContext';
import { ROLES, type Role } from '../data';
import {
  LayoutDashboard, ClipboardCheck, Users, BriefcaseMedical,
  LogOut, Bell, Menu, X, Settings, Target, Sparkles,
  BarChart3, Calendar, FileText, Trophy, Zap, ShieldAlert, Package, DollarSign
} from 'lucide-react';

// Giữ lại cấu trúc 4 nhóm như bản trước nhưng dùng icon nhẹ nhàng hơn
const NAV_GROUPS = [
  {
    section: 'Chiến lược',
    items: [
      { path: '/', label: 'Medical Dashboard', icon: LayoutDashboard, roles: ['bod', 'quan_ly', 'bac_si', 'cskh'] },
      { path: '/bao-cao', label: 'Báo cáo', icon: BarChart3, roles: ['bod', 'quan_ly'] },
      { path: '/tai-chinh', label: 'Tài chính', icon: DollarSign, roles: ['bod', 'quan_ly'] },
    ],
  },
  {
    section: 'Vận hành',
    items: [
      { path: '/scheduling', label: 'Lịch hẹn & Phòng', icon: Calendar, roles: ['bod', 'quan_ly', 'le_tan', 'ktv'] },
      { path: '/van-hanh', label: 'Task & Vận hành', icon: ClipboardCheck, roles: ['bod', 'quan_ly', 'ktv'] },
      { path: '/kho', label: 'Kho & Tài sản', icon: Package, roles: ['bod', 'quan_ly'] },
    ],
  },
  {
    section: 'Nhân sự',
    items: [
      { path: '/ho-so', label: 'Hồ sơ Bệnh nhân', icon: Users, roles: ['bod', 'quan_ly', 'bac_si'] },
      { path: '/kpi', label: 'Dịch vụ & KPIs', icon: BriefcaseMedical, roles: ['bod', 'quan_ly', 'ktv'] },
    ],
  },
  {
    section: 'Hệ thống',
    items: [
      { path: '/automation', label: 'Tự động hoá', icon: Zap, roles: ['bod', 'quan_ly', 'cskh'] },
      { path: '/khieu-nai', label: 'Khiếu nại & Sự cố', icon: ShieldAlert, roles: ['bod', 'quan_ly', 'cskh'] },
    ],
  },
];

interface LayoutProps { children: React.ReactNode; title?: string; subtitle?: string; }

export default function AppLayout({ children, title }: LayoutProps) {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => { logout(); navigate('/login'); };
  const roleConfig = user ? ROLES[user.role as Role] : null;

  return (
    <div className="app-layout">
      {/* EXPANDED SIDEBAR (LIGHT THEME) */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`} style={{ width: 260, alignItems: 'stretch' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '0 24px', marginBottom: 32 }}>
          <div className="sidebar-logo" style={{ marginBottom: 0, width: 36, height: 36, flexShrink: 0 }}>
            S
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span className="font-serif" style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-100)', letterSpacing: '0.02em', lineHeight: 1.2 }}>Saigon Smile</span>
            <span style={{ fontSize: 11, color: 'var(--gold-500)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Medical</span>
          </div>
        </div>

        <nav className="sidebar-nav" style={{ padding: '0 16px', overflowY: 'auto' }}>
          {NAV_GROUPS.map(group => {
            const visibleItems = group.items.filter(item => user && item.roles.includes(user.role));
            if (visibleItems.length === 0) return null;

            return (
              <div key={group.section} style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-500)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8, paddingLeft: 12 }}>
                  {group.section}
                </div>
                {visibleItems.map(item => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <button
                      key={item.path}
                      className={`nav-item ${isActive ? 'active' : ''}`}
                      onClick={() => { navigate(item.path); setSidebarOpen(false); }}
                      style={{ justifyContent: 'flex-start', paddingLeft: 12, height: 44, borderRadius: 8, gap: 12 }}
                    >
                      <Icon size={18} strokeWidth={isActive ? 2 : 1.5} />
                      <span style={{ fontSize: 14, fontWeight: isActive ? 600 : 500 }}>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            );
          })}
        </nav>

        <div className="sidebar-footer" style={{ padding: '0 16px', borderTop: '1px solid var(--surface-border)', paddingTop: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 12px', background: 'var(--surface-1)', borderRadius: 12, border: '1px solid var(--surface-border)' }}>
             <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" alt="Avatar" style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover' }} />
             <div style={{ flex: 1, overflow: 'hidden' }}>
               <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-100)', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>{user?.name}</div>
               <div style={{ fontSize: 11, color: 'var(--text-400)', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>{roleConfig?.label}</div>
             </div>
             <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: 'var(--text-400)', cursor: 'pointer', padding: 4 }} title="Đăng xuất">
               <LogOut size={16} />
             </button>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.2)', zIndex: 99 }}
        />
      )}

      {/* MAIN CONTENT */}
      <div className="main-content" style={{ marginLeft: 260 }}>
        {/* ELEGANT HEADER */}
        <header className="header" style={{ left: 260 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <button
              className="header-btn"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              style={{ display: 'none' }}
              id="btn-menu-toggle"
            >
              <Menu size={24} />
            </button>
            <div className="header-brand" style={{ display: 'none' }}>Saigon Smile Medical</div>
          </div>

          <div className="header-actions">
            {user?.branch_label && (
               <div style={{
                 padding: '6px 14px', background: 'var(--gold-100)',
                 border: '1px solid var(--surface-border-gold)',
                 borderRadius: 'var(--r-full)', fontSize: 12, color: 'var(--gold-500)',
                 display: 'flex', alignItems: 'center', gap: 6, fontWeight: 600,
                 marginRight: 16
               }}>
                 <Sparkles size={14} />
                 {user.branch_label}
               </div>
            )}
            <button className="header-btn" style={{ position: 'relative' }}>
              <Bell size={20} />
              <span style={{ position: 'absolute', top: 0, right: 2, width: 8, height: 8, background: 'var(--red)', borderRadius: '50%', border: '2px solid var(--bg-900)' }} />
            </button>
            <button className="header-btn" style={{ marginLeft: 8 }}>
              <Settings size={20} />
            </button>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="page-container">
          {children}
        </main>
      </div>
    </div>
  );
}
