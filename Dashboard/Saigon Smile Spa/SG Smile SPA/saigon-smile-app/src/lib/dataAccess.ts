/**
 * dataAccess.ts — Data Access Layer (DAL)
 *
 * Simulates backend Row-Level Security (RLS) / Middleware.
 * ALL pages MUST fetch data through these functions instead of importing
 * mock arrays directly. This ensures:
 *   - BOD  → Global scope (all branches)
 *   - Manager → Strictly their branch_id only
 *   - Doctor → Their branch + assigned patients only
 *   - Receptionist → Branch schedule only, NO medical records
 *   - CSKH → Contact info only, NO clinical notes
 *   - KTV → Their own schedule + KPI only
 *
 * In production: replace mock filter logic with authenticated API calls.
 */

import type { User } from '../data';
import {
  mockBookings, mockPatients, mockTransactions, ktvLeaderboard,
  mockTickets, mockInventory, mockStaffTasks, machineData,
  churnRiskData, branchData, kpiData, kpiDataByBranch,
  revenueData, leadData, automationRules,
} from '../data';

// ─── Helpers ─────────────────────────────────────────────────────────────────

const isGlobal = (user: User) => user.branch_id === 'global';
const inBranch = (user: User, item: { branch_id: string }) =>
  isGlobal(user) || item.branch_id === user.branch_id;

// ─── Bookings ─────────────────────────────────────────────────────────────────

export function getBookings(user: User) {
  switch (user.role) {
    case 'bod':
      return mockBookings; // All branches
    case 'quan_ly':
    case 'le_tan':
      return mockBookings.filter(b => b.branch_id === user.branch_id);
    case 'ktv':
      // Only bookings assigned to this KTV
      return mockBookings.filter(b => b.ktv_id === user.id && b.branch_id === user.branch_id);
    case 'bac_si':
      // Bookings in their branch (they need to see the room schedule)
      return mockBookings.filter(b => b.branch_id === user.branch_id);
    default:
      return [];
  }
}

export function getRooms(user: User) {
  if (user.role === 'bod') return mockBookings; // unrestricted
  return mockBookings.filter(b => b.branch_id === user.branch_id);
}

// ─── Patients / Medical Records ───────────────────────────────────────────────

const REDACTED_HISTORY = '🔒 Thông tin hồ sơ bệnh án bị hạn chế theo vai trò của bạn.';

export function getPatients(user: User) {
  let patients = mockPatients;

  switch (user.role) {
    case 'bod':
      return patients; // Full access all branches

    case 'quan_ly':
      // Branch manager sees patients in their branch (full records for operational oversight)
      return patients.filter(p => p.branch_id === user.branch_id);

    case 'bac_si':
      // Doctor sees only patients they are assigned to, within their branch
      return patients.filter(
        p => p.branch_id === user.branch_id && p.assigned_doctor_id === user.id
      );

    case 'le_tan':
      // Receptionist sees names + service info only — NO medical history or AI rec
      return patients
        .filter(p => p.branch_id === user.branch_id)
        .map(p => ({ ...p, history: [], aiRec: REDACTED_HISTORY }));

    case 'cskh':
      // CSKH sees contact info + service interest only — NO clinical records at all
      return patients.map(p => ({
        ...p,
        // Keep: name, phone, package, loyaltyTier, loyaltyPoints
        history: [],
        aiRec: REDACTED_HISTORY,
        allergy: '[RESTRICTED]',
        skinType: '[RESTRICTED]',
      }));

    case 'ktv':
      // KTV has NO access to patient records
      return [];

    default:
      return [];
  }
}

// ─── Transactions / Finance ───────────────────────────────────────────────────

export function getTransactions(user: User) {
  switch (user.role) {
    case 'bod':
      return mockTransactions; // Global — all branches

    case 'quan_ly':
      // Branch manager sees only their branch's transactions
      return mockTransactions.filter(t => t.branch_id === user.branch_id);

    // All other roles have NO access to financial data
    default:
      return [];
  }
}

export function canViewFinance(user: User): boolean {
  return user.role === 'bod' || user.role === 'quan_ly';
}

// ─── KTV Leaderboard ─────────────────────────────────────────────────────────

export function getKtvLeaderboard(user: User) {
  switch (user.role) {
    case 'bod':
      return ktvLeaderboard; // Full leaderboard all branches

    case 'quan_ly':
      // Manager sees leaderboard for their branch only
      return ktvLeaderboard.filter(k => k.branch_id === user.branch_id);

    case 'ktv':
      // KTV sees ONLY their own row (no peer data)
      return ktvLeaderboard.filter(k => k.id === user.id);

    default:
      return [];
  }
}

// ─── KPI Data ─────────────────────────────────────────────────────────────────

export function getKpiData(user: User) {
  if (user.role === 'bod') return kpiData; // Global aggregate
  const branchKpi = kpiDataByBranch[user.branch_id];
  return branchKpi ?? kpiData;
}

export function getBranchRevenue(user: User) {
  if (user.role === 'bod') return branchData; // All branches visible
  // Others see ONLY their own branch
  return branchData.filter(b => b.id === user.branch_id);
}

export function getRevenueChart(user: User) {
  // Chart data is branch-agnostic in mock; in production, filter by branch
  return revenueData;
}

export function getChurnRisk(user: User) {
  if (user.role === 'bod') return churnRiskData;
  if (user.role === 'quan_ly' || user.role === 'cskh')
    return churnRiskData.filter(c => isGlobal(user) || c.branch_id === user.branch_id);
  return [];
}

export function getMachineData(user: User) {
  if (user.role === 'bod') return machineData;
  return machineData.filter(m => inBranch(user, m));
}

// ─── Tickets ─────────────────────────────────────────────────────────────────

export function getTickets(user: User) {
  switch (user.role) {
    case 'bod':
      return mockTickets;
    case 'quan_ly':
      return mockTickets.filter(t => t.branch_id === user.branch_id);
    default:
      return [];
  }
}

// ─── Inventory ────────────────────────────────────────────────────────────────

export function getInventory(user: User) {
  switch (user.role) {
    case 'bod':
      return mockInventory;
    case 'quan_ly':
      return mockInventory.filter(i => i.branch_id === user.branch_id);
    default:
      return [];
  }
}

// ─── Staff Tasks ──────────────────────────────────────────────────────────────

export function getStaffTasks(user: User) {
  if (user.role === 'bod') return mockStaffTasks;
  return mockStaffTasks.filter(t => inBranch(user, t));
}

// ─── Lead / Automation Data ───────────────────────────────────────────────────

export function getLeadData(user: User) {
  // CSKH and BOD can see lead data; others cannot
  if (user.role === 'bod' || user.role === 'cskh') return leadData;
  return null;
}

export function getAutomationRules(user: User) {
  if (user.role === 'bod' || user.role === 'cskh' || user.role === 'quan_ly')
    return automationRules;
  return [];
}

// ─── Permission Helpers ───────────────────────────────────────────────────────

export function canViewAllBranches(user: User): boolean {
  return user.role === 'bod';
}

export function canViewMedicalRecords(user: User): boolean {
  return user.role === 'bod' || user.role === 'quan_ly' || user.role === 'bac_si';
}

export function canEditMedicalRecords(user: User): boolean {
  return user.role === 'bac_si';
}

export function canViewReports(user: User): boolean {
  return user.role === 'bod' || user.role === 'quan_ly';
}
