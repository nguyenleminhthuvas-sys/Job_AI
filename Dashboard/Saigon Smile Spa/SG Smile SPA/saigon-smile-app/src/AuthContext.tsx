import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { Role, User } from './data';
import { ROLES } from './data';
import { Crown, Building2, Calendar, Stethoscope, MessageSquare, Award } from 'lucide-react';

interface AuthContextType {
  user: User | null;
  login: (account: User) => void;
  logout: () => void;
  hasAccess: (route: string) => boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (account: User) => {
    setUser(account);
  };

  const logout = () => setUser(null);

  const hasAccess = (route: string): boolean => {
    if (!user) return false;
    return ROLES[user.role].allowedRoutes.includes(route);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, hasAccess }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};

export function getDefaultPath(role: Role): string {
  const paths: Record<Role, string> = {
    bod: '/',
    quan_ly: '/',
    le_tan: '/scheduling',
    bac_si: '/ho-so',
    cskh: '/automation',
    ktv: '/kpi',
  };
  return paths[role] || '/';
}

export const getRoleHome = getDefaultPath;

export const getRoleIcon = (role: Role, className?: string, size = 16) => {
  const props = { className, size, strokeWidth: 1.8 };
  switch (role) {
    case 'bod':     return <Crown {...props} />;
    case 'quan_ly': return <Building2 {...props} />;
    case 'le_tan':  return <Calendar {...props} />;
    case 'bac_si':  return <Stethoscope {...props} />;
    case 'cskh':    return <MessageSquare {...props} />;
    case 'ktv':     return <Award {...props} />;
    default:        return null;
  }
};
