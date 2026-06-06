import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth, getDefaultPath } from './AuthContext';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import SchedulingPage from './pages/SchedulingPage';
import AutomationPage from './pages/AutomationPage';
import EMedicalPage from './pages/EMedicalPage';
import KPIPage from './pages/KPIPage';
import ReportsPage from './pages/ReportsPage';
import StaffOperationsPage from './pages/StaffOperationsPage';
import CustomerApp from './pages/CustomerApp';
import InventoryPage from './pages/InventoryPage';
import { FinancePage } from './pages/FinancePage';
import { TicketSystemPage } from './pages/TicketSystemPage';
import './index.css';

function ProtectedRoute({ children, path }: { children: React.ReactNode; path: string }) {
  const { user, hasAccess } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  if (!hasAccess(path)) return <Navigate to={getDefaultPath(user.role)} replace />;
  return <>{children}</>;
}

function AppRoutes() {
  const { user } = useAuth();
  return (
    <Routes>
      <Route path="/login" element={user ? <Navigate to={getDefaultPath(user.role)} replace /> : <LoginPage />} />
      <Route path="/" element={<ProtectedRoute path="/"><DashboardPage /></ProtectedRoute>} />
      <Route path="/bao-cao" element={<ProtectedRoute path="/bao-cao"><ReportsPage /></ProtectedRoute>} />
      <Route path="/scheduling" element={<ProtectedRoute path="/scheduling"><SchedulingPage /></ProtectedRoute>} />
      <Route path="/automation" element={<ProtectedRoute path="/automation"><AutomationPage /></ProtectedRoute>} />
      <Route path="/ho-so" element={<ProtectedRoute path="/ho-so"><EMedicalPage /></ProtectedRoute>} />
      <Route path="/kpi" element={<ProtectedRoute path="/kpi"><KPIPage /></ProtectedRoute>} />
      <Route path="/van-hanh" element={<ProtectedRoute path="/van-hanh"><StaffOperationsPage /></ProtectedRoute>} />
      <Route path="/kho" element={<ProtectedRoute path="/kho"><InventoryPage /></ProtectedRoute>} />
      <Route path="/tai-chinh" element={<ProtectedRoute path="/tai-chinh"><FinancePage /></ProtectedRoute>} />
      <Route path="/khieu-nai" element={<ProtectedRoute path="/khieu-nai"><TicketSystemPage /></ProtectedRoute>} />
      <Route path="/app" element={<CustomerApp />} />
      <Route path="*" element={<Navigate to={user ? getDefaultPath(user.role) : '/login'} replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
