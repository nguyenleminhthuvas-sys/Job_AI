import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, getDefaultPath, getRoleIcon } from '../AuthContext';
import { ROLES, STAFF_ACCOUNTS, type Role, type StaffAccount } from '../data';
import { Sparkles, Lock, Shield, Search, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selectedAccount, setSelectedAccount] = useState<StaffAccount | null>(null);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Filter staff accounts by search
  const filteredAccounts = useMemo(() => {
    const q = search.toLowerCase();
    return STAFF_ACCOUNTS.filter(
      a => a.name.toLowerCase().includes(q) || ROLES[a.role].label.toLowerCase().includes(q)
    );
  }, [search]);

  const handleSelectAccount = (account: StaffAccount) => {
    setSelectedAccount(account);
    setSearch(account.name);
    setShowDropdown(false);
  };

  const handleLogin = async () => {
    if (!selectedAccount) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 800));
    login({
      id: selectedAccount.id,
      name: selectedAccount.name,
      role: selectedAccount.role,
      branch_id: selectedAccount.branch_id,
      branch_label: selectedAccount.branch_label,
      branch: selectedAccount.branch_label, // legacy compat
      avatar: selectedAccount.name.charAt(0).toUpperCase(),
    });
    navigate(getDefaultPath(selectedAccount.role));
  };

  const roleColor = selectedAccount ? ROLES[selectedAccount.role].color : 'var(--gold-400)';

  return (
    <div className="login-page">
      <div className="login-bg-glow" />
      <div className="login-bg-glow" />

      <div className="login-card animate-fade-up">
        <div className="login-header">
          <div className="login-logo" style={{ background: 'rgba(190, 146, 77, 0.08)', border: '1px solid rgba(190, 146, 77, 0.2)', boxShadow: 'none' }}>
            <Sparkles size={26} color="var(--gold-400)" strokeWidth={1.5} />
          </div>
          <div className="login-title" style={{ letterSpacing: '-0.02em', fontWeight: 600 }}>Saigon Smile Medical</div>
          <div className="login-sub">Hệ thống Quản lý Nội bộ</div>
        </div>

        {/* Staff Account Selector */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-400)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
            Tài khoản nhân sự
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'relative' }}>
              <Search size={14} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-400)', pointerEvents: 'none' }} />
              <input
                className="input-field"
                type="text"
                placeholder="Tìm tên nhân viên hoặc vai trò..."
                value={search}
                onChange={e => { setSearch(e.target.value); setShowDropdown(true); setSelectedAccount(null); }}
                onFocus={() => setShowDropdown(true)}
                id="login-staff-search"
                style={{ borderRadius: 'var(--r-md)', fontSize: 13, paddingLeft: 36, paddingRight: 36 }}
              />
              <ChevronDown size={14} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-400)', pointerEvents: 'none' }} />
            </div>

            {/* Dropdown List */}
            {showDropdown && filteredAccounts.length > 0 && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 6px)', left: 0, right: 0, zIndex: 100,
                background: 'var(--bg-500)', border: '1px solid var(--surface-border)',
                borderRadius: 'var(--r-md)', overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)', maxHeight: 240, overflowY: 'auto'
              }}>
                {filteredAccounts.map(account => {
                  const cfg = ROLES[account.role];
                  const isSelected = selectedAccount?.id === account.id;
                  return (
                    <div
                      key={account.id}
                      id={`staff-${account.id}`}
                      onClick={() => handleSelectAccount(account)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px',
                        cursor: 'pointer', transition: 'background 0.15s',
                        background: isSelected ? 'rgba(190,146,77,0.08)' : 'transparent',
                        borderBottom: '1px solid rgba(255,255,255,0.04)',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}
                      onMouseLeave={e => (e.currentTarget.style.background = isSelected ? 'rgba(190,146,77,0.08)' : 'transparent')}
                    >
                      <div style={{ width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${cfg.color}20`, color: cfg.color, flexShrink: 0 }}>
                        {getRoleIcon(account.role, undefined, 15)}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-100)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{account.name}</div>
                        <div style={{ fontSize: 11, color: 'var(--text-400)', marginTop: 1 }}>{cfg.label} · {account.branch_label}</div>
                      </div>
                      {isSelected && <CheckCircle2 size={14} style={{ color: 'var(--gold-400)', flexShrink: 0 }} />}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Overlay to close dropdown */}
          {showDropdown && <div style={{ position: 'fixed', inset: 0, zIndex: 99 }} onClick={() => setShowDropdown(false)} />}
        </div>

        {/* Selected Account Info (auto-filled, read-only) */}
        {selectedAccount && (
          <div style={{ marginBottom: 24, padding: '12px 14px', background: 'rgba(255,255,255,0.02)', border: `1px solid ${roleColor}30`, borderRadius: 'var(--r-md)', display: 'flex', gap: 12, alignItems: 'center' }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${roleColor}15`, color: roleColor, fontSize: 18, fontWeight: 700, flexShrink: 0 }}>
              {selectedAccount.name.charAt(0)}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-100)' }}>{selectedAccount.name}</div>
              <div style={{ fontSize: 11, color: 'var(--text-400)', marginTop: 2, display: 'flex', gap: 8 }}>
                <span style={{ color: roleColor }}>{ROLES[selectedAccount.role].label}</span>
                <span>·</span>
                {/* Branch field — LOCKED, cannot be changed */}
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  🔒 {selectedAccount.branch_label}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Login Button */}
        <button
          className="btn btn-primary w-full"
          style={{
            justifyContent: 'center', padding: '12px', fontSize: 14, fontWeight: 500,
            borderRadius: 'var(--r-md)', opacity: !selectedAccount ? 0.4 : 1,
            background: 'var(--gold-500)', boxShadow: 'none', transition: 'all 0.2s',
            display: 'flex', alignItems: 'center', gap: 8,
          }}
          onClick={handleLogin}
          disabled={!selectedAccount || loading}
          id="btn-login"
        >
          {loading ? (
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 14, height: 14, border: '2px solid currentColor', borderTopColor: 'transparent', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.8s linear infinite' }} />
              Đang xác thực...
            </span>
          ) : (
            <>
              {selectedAccount ? getRoleIcon(selectedAccount.role, undefined, 15) : <Lock size={15} />}
              Đăng nhập hệ thống
            </>
          )}
        </button>

        <div style={{ marginTop: 16, padding: 12, background: 'rgba(255,255,255,0.015)', borderRadius: 'var(--r-md)', border: '1px solid var(--surface-border)' }}>
          <div style={{ fontSize: 10, color: 'var(--text-400)', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            <Shield size={12} style={{ color: 'var(--gold-500)', flexShrink: 0 }} />
            RBAC · Phân quyền theo chi nhánh · Dữ liệu được cô lập theo vai trò
          </div>
        </div>
      </div>
    </div>
  );
}
