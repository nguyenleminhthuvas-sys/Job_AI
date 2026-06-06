// === TYPES & MOCK DATA — RBAC/Data Isolation Ready ===

export type Role =
  | 'bod'
  | 'quan_ly'
  | 'le_tan'
  | 'bac_si'
  | 'cskh'
  | 'ktv';

// Data scope determines what data a user can see
export type DataScope = 'global' | 'branch' | 'self';

export interface User {
  id: string;
  name: string;
  role: Role;
  branch_id: string; // 'global' for BOD, specific branch_id for others
  branch_label: string; // Human-readable branch name
  avatar: string;
  // Legacy compat
  branch?: string;
}

export interface RoleConfig {
  label: string;
  desc: string;
  icon: string;
  color: string;
  allowedRoutes: string[];
  dataScope: DataScope;
}

export const ROLES: Record<Role, RoleConfig> = {
  bod: {
    label: 'Ban Giám Đốc',
    desc: 'Toàn quyền – Toàn hệ thống',
    icon: 'Crown',
    color: '#e8a020',
    allowedRoutes: ['/', '/bao-cao', '/scheduling', '/automation', '/ho-so', '/kpi', '/van-hanh', '/kho', '/tai-chinh', '/khieu-nai'],
    dataScope: 'global',
  },
  quan_ly: {
    label: 'Quản Lý Chi Nhánh',
    desc: 'Dữ liệu chi nhánh của mình',
    icon: 'Building2',
    color: '#3b82f6',
    allowedRoutes: ['/', '/bao-cao', '/scheduling', '/automation', '/kpi', '/van-hanh', '/kho', '/khieu-nai'],
    dataScope: 'branch',
  },
  le_tan: {
    label: 'Lễ Tân',
    desc: 'Lịch hẹn chi nhánh',
    icon: 'Calendar',
    color: '#22c55e',
    allowedRoutes: ['/scheduling'],
    dataScope: 'branch',
  },
  bac_si: {
    label: 'Bác Sĩ Da Liễu',
    desc: 'Bệnh nhân được phân công',
    icon: 'Stethoscope',
    color: '#06b6d4',
    allowedRoutes: ['/ho-so'],
    dataScope: 'self',
  },
  cskh: {
    label: 'Chăm Sóc Khách Hàng',
    desc: 'Lead & Tự động hóa',
    icon: 'MessageSquare',
    color: '#a855f7',
    allowedRoutes: ['/automation'],
    dataScope: 'global',
  },
  ktv: {
    label: 'Kỹ Thuật Viên',
    desc: 'Lịch ca & KPI cá nhân',
    icon: 'Award',
    color: '#f59e0b',
    allowedRoutes: ['/kpi', '/scheduling'],
    dataScope: 'self',
  },
};

// --- Branch Registry ---
export const BRANCH_LIST = [
  { id: 'HN_HB',    label: 'HN - Hàng Bài' },
  { id: 'HN_KM',    label: 'HN - Kim Mã' },
  { id: 'HCM_NTMK', label: 'HCM - Nguyễn Thị Minh Khai' },
  { id: 'HCM_DTH',  label: 'HCM - Đinh Tiên Hoàng' },
  { id: 'HCM_LVS',  label: 'HCM - Lê Văn Sỹ' },
];

// Legacy compat
export const BRANCHES = ['Tất cả chi nhánh', ...BRANCH_LIST.map(b => b.label)];

// --- Staff Account Registry (simulates HR database) ---
// In production: fetched from API after credential check
export interface StaffAccount {
  id: string;
  name: string;
  role: Role;
  branch_id: string;   // 'global' for BOD
  branch_label: string;
}

export const STAFF_ACCOUNTS: StaffAccount[] = [
  // Ban Giám Đốc – Global scope
  { id: 'bod_01', name: 'Nguyễn Hoàng Sang',    role: 'bod',     branch_id: 'global',   branch_label: 'Toàn hệ thống' },
  { id: 'bod_02', name: 'Trần Thị Mỹ Linh',     role: 'bod',     branch_id: 'global',   branch_label: 'Toàn hệ thống' },
  // Quản lý chi nhánh – Branch scoped
  { id: 'ql_01',  name: 'Lê Văn Mạnh',          role: 'quan_ly', branch_id: 'HN_HB',    branch_label: 'HN - Hàng Bài' },
  { id: 'ql_02',  name: 'Phạm Thị Hương',       role: 'quan_ly', branch_id: 'HN_KM',    branch_label: 'HN - Kim Mã' },
  { id: 'ql_03',  name: 'Võ Minh Tuấn',         role: 'quan_ly', branch_id: 'HCM_NTMK', branch_label: 'HCM - Nguyễn Thị Minh Khai' },
  { id: 'ql_04',  name: 'Bùi Thu Trang',        role: 'quan_ly', branch_id: 'HCM_DTH',  branch_label: 'HCM - Đinh Tiên Hoàng' },
  { id: 'ql_05',  name: 'Đỗ Thanh Hà',          role: 'quan_ly', branch_id: 'HCM_LVS',  branch_label: 'HCM - Lê Văn Sỹ' },
  // Lễ tân
  { id: 'lt_01',  name: 'Nguyễn Thị Ngọc',      role: 'le_tan',  branch_id: 'HN_HB',    branch_label: 'HN - Hàng Bài' },
  { id: 'lt_02',  name: 'Trần Hồng Nhung',      role: 'le_tan',  branch_id: 'HN_KM',    branch_label: 'HN - Kim Mã' },
  { id: 'lt_03',  name: 'Lý Thị Bảo Châu',     role: 'le_tan',  branch_id: 'HCM_NTMK', branch_label: 'HCM - Nguyễn Thị Minh Khai' },
  // Bác sĩ
  { id: 'bs_01',  name: 'BS. Nguyễn Minh Anh',  role: 'bac_si',  branch_id: 'HN_HB',    branch_label: 'HN - Hàng Bài' },
  { id: 'bs_02',  name: 'BS. Trần Thu Thảo',    role: 'bac_si',  branch_id: 'HCM_NTMK', branch_label: 'HCM - Nguyễn Thị Minh Khai' },
  { id: 'bs_03',  name: 'BS. Hoàng Yến',        role: 'bac_si',  branch_id: 'HN_KM',    branch_label: 'HN - Kim Mã' },
  // CSKH – sees leads globally but NOT medical records
  { id: 'cskh_01', name: 'Nguyễn Lan Anh',      role: 'cskh',    branch_id: 'global',   branch_label: 'Toàn hệ thống' },
  { id: 'cskh_02', name: 'Phạm Quỳnh Như',      role: 'cskh',    branch_id: 'global',   branch_label: 'Toàn hệ thống' },
  // KTV – self scope only
  { id: 'ktv_01', name: 'KTV Lê Thị Hoa',       role: 'ktv',     branch_id: 'HN_HB',    branch_label: 'HN - Hàng Bài' },
  { id: 'ktv_02', name: 'KTV Nguyễn Thị Linh',  role: 'ktv',     branch_id: 'HCM_NTMK', branch_label: 'HCM - Nguyễn Thị Minh Khai' },
  { id: 'ktv_03', name: 'KTV Trần Văn Tuấn',    role: 'ktv',     branch_id: 'HN_KM',    branch_label: 'HN - Kim Mã' },
  { id: 'ktv_04', name: 'KTV Phạm Thị Mai',     role: 'ktv',     branch_id: 'HCM_DTH',  branch_label: 'HCM - Đinh Tiên Hoàng' },
  { id: 'ktv_05', name: 'KTV Vũ Thị Nhung',     role: 'ktv',     branch_id: 'HCM_LVS',  branch_label: 'HCM - Lê Văn Sỹ' },
];

// --- Mock KPI Data (per branch) ---
export const kpiData = {
  doanhThuHomNay: 487_000_000,
  doanhThuThang: 8_240_000_000,
  khachHienTai: 34,
  tongLichHen: 127,
  luocHuy: 8,
  hieuSuatMay: 78,
  csatScore: 4.7,
  npsScore: 72,
  churnRisk: 23,
  doanThuCheo: 342_000_000,
};

export const kpiDataByBranch: Record<string, typeof kpiData> = {
  HN_HB:    { doanhThuHomNay: 142_000_000, doanhThuThang: 2_140_000_000, khachHienTai: 12, tongLichHen: 38, luocHuy: 2, hieuSuatMay: 82, csatScore: 4.8, npsScore: 74, churnRisk: 8, doanThuCheo: 98_000_000 },
  HN_KM:    { doanhThuHomNay: 98_000_000,  doanhThuThang: 1_860_000_000, khachHienTai: 9,  tongLichHen: 31, luocHuy: 2, hieuSuatMay: 75, csatScore: 4.7, npsScore: 70, churnRisk: 6, doanThuCheo: 76_000_000 },
  HCM_NTMK: { doanhThuHomNay: 112_000_000, doanhThuThang: 1_920_000_000, khachHienTai: 7,  tongLichHen: 29, luocHuy: 2, hieuSuatMay: 80, csatScore: 4.9, npsScore: 78, churnRisk: 4, doanThuCheo: 88_000_000 },
  HCM_DTH:  { doanhThuHomNay: 74_000_000,  doanhThuThang: 1_380_000_000, khachHienTai: 4,  tongLichHen: 18, luocHuy: 1, hieuSuatMay: 70, csatScore: 4.5, npsScore: 65, churnRisk: 3, doanThuCheo: 52_000_000 },
  HCM_LVS:  { doanhThuHomNay: 61_000_000,  doanhThuThang: 940_000_000,   khachHienTai: 2,  tongLichHen: 11, luocHuy: 1, hieuSuatMay: 68, csatScore: 4.6, npsScore: 68, churnRisk: 2, doanThuCheo: 28_000_000 },
};

// --- Mock Revenue Chart ---
export const revenueData = Array.from({ length: 30 }, (_, i) => {
  const d = new Date();
  d.setDate(d.getDate() - (29 - i));
  return {
    ngay: `${d.getDate()}/${d.getMonth() + 1}`,
    giamBeo: Math.floor(50 + Math.random() * 120) * 1_000_000,
    treHoa: Math.floor(80 + Math.random() * 160) * 1_000_000,
    triNam: Math.floor(20 + Math.random() * 60) * 1_000_000,
    chamSoc: Math.floor(10 + Math.random() * 40) * 1_000_000,
    total: 0,
  };
}).map(d => ({ ...d, total: d.giamBeo + d.treHoa + d.triNam + d.chamSoc }));

// --- Mock Machine Utilization ---
export const machineData = [
  { name: 'Thermage FLX', utilization: 84, sessions: 6, status: 'Đang chạy', branch_id: 'HN_HB' },
  { name: 'Ultherapy Prime', utilization: 72, sessions: 5, status: 'Đang chạy', branch_id: 'HN_HB' },
  { name: 'AI Slimtech', utilization: 90, sessions: 8, status: 'Đang chạy', branch_id: 'HN_KM' },
  { name: 'Laser Revlite', utilization: 65, sessions: 4, status: 'Rảnh', branch_id: 'HCM_NTMK' },
  { name: 'FOTONA 4D', utilization: 55, sessions: 3, status: 'Bảo trì', branch_id: 'HCM_DTH' },
  { name: 'Exion', utilization: 78, sessions: 6, status: 'Đang chạy', branch_id: 'HCM_LVS' },
];

// --- Mock Branch Revenue (BOD only) ---
export const branchData = [
  { id: 'HN_HB',    name: 'HN - Hàng Bài', revenue: 2_140_000_000, growth: 12 },
  { id: 'HN_KM',    name: 'HN - Kim Mã', revenue: 1_860_000_000, growth: 8 },
  { id: 'HCM_NTMK', name: 'HCM - NTMK', revenue: 1_920_000_000, growth: 15 },
  { id: 'HCM_DTH',  name: 'HCM - ĐTH', revenue: 1_380_000_000, growth: -3 },
  { id: 'HCM_LVS',  name: 'HCM - LVS', revenue: 940_000_000, growth: 22 },
];

// --- Mock Churn Risk Customers ---
export const churnRiskData = [
  { name: 'Nguyễn Thị Lan', lastVisit: '45 ngày trước', package: 'Thermage FLX', risk: 'Cao', remaining: 2, branch_id: 'HN_HB' },
  { name: 'Trần Minh Châu', lastVisit: '38 ngày trước', package: 'AI Slimtech', risk: 'Cao', remaining: 1, branch_id: 'HN_KM' },
  { name: 'Lê Thu Hà', lastVisit: '31 ngày trước', package: 'Laser Revlite', risk: 'Trung bình', remaining: 3, branch_id: 'HCM_NTMK' },
  { name: 'Phạm Bích Ngọc', lastVisit: '28 ngày trước', package: 'Ultherapy', risk: 'Trung bình', remaining: 2, branch_id: 'HCM_DTH' },
  { name: 'Vũ Hoàng Oanh', lastVisit: '22 ngày trước', package: 'Trị nám US Mela', risk: 'Thấp', remaining: 5, branch_id: 'HCM_LVS' },
];

// --- Mock Bookings for Scheduling ---
export const HOURS = ['8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00'];
export const ROOMS = [
  { id: 'r1', name: 'Phòng máy 1', type: 'Thermage FLX', floor: 'Tầng 2', current_status: 'available', branch_id: 'HN_HB' },
  { id: 'r2', name: 'Phòng máy 2', type: 'Ultherapy Prime', floor: 'Tầng 2', current_status: 'in_use', branch_id: 'HN_HB' },
  { id: 'r3', name: 'Phòng máy 3', type: 'AI Slimtech', floor: 'Tầng 3', current_status: 'cleaning', branch_id: 'HN_HB' },
  { id: 'r4', name: 'Phòng máy 4', type: 'Laser Revlite', floor: 'Tầng 3', current_status: 'available', branch_id: 'HN_HB' },
  { id: 'r5', name: 'Phòng 5', type: 'Chăm sóc da', floor: 'Tầng 1', current_status: 'maintenance', branch_id: 'HN_HB' },
  { id: 'r6', name: 'Phòng 6', type: 'Chăm sóc da', floor: 'Tầng 1', current_status: 'available', branch_id: 'HN_HB' },
];

export interface Booking {
  id: string;
  roomId: string;
  hourIndex: number;
  duration: number;
  clientName: string;
  service: string;
  status: 'occupied' | 'available' | 'maintenance' | 'waiting_prep';
  ktv: string;
  ktv_id: string; // Links to StaffAccount.id
  branch_id: string;
  eMedicalStatus?: 'pending' | 'completed';
  checkinMethod?: 'qr' | 'faceid';
}

export const mockBookings: Booking[] = [
  { id: 'b1', roomId: 'r1', hourIndex: 0, duration: 2, clientName: 'Nguyễn Thị Lan', service: 'Thermage FLX', status: 'occupied', ktv: 'KTV Hoa', ktv_id: 'ktv_01', branch_id: 'HN_HB', eMedicalStatus: 'completed', checkinMethod: 'faceid' },
  { id: 'b2', roomId: 'r1', hourIndex: 3, duration: 2, clientName: 'Trần Minh Châu', service: 'Thermage FLX', status: 'waiting_prep', ktv: 'KTV Hoa', ktv_id: 'ktv_01', branch_id: 'HN_HB', eMedicalStatus: 'pending' },
  { id: 'b3', roomId: 'r2', hourIndex: 1, duration: 3, clientName: 'Lê Thu Hà', service: 'Ultherapy', status: 'occupied', ktv: 'KTV Linh', ktv_id: 'ktv_02', branch_id: 'HN_HB', eMedicalStatus: 'completed' },
  { id: 'b4', roomId: 'r3', hourIndex: 0, duration: 2, clientName: 'Phạm Bích Ngọc', service: 'Slimtech', status: 'occupied', ktv: 'KTV Tuấn', ktv_id: 'ktv_03', branch_id: 'HN_HB', eMedicalStatus: 'completed' },
  { id: 'b5', roomId: 'r3', hourIndex: 4, duration: 2, clientName: 'Vũ Hoàng Oanh', service: 'Slimtech', status: 'waiting_prep', ktv: 'KTV Tuấn', ktv_id: 'ktv_03', branch_id: 'HN_HB', eMedicalStatus: 'completed' },
  { id: 'b6', roomId: 'r4', hourIndex: 2, duration: 1, clientName: 'Hoàng Mỹ Linh', service: 'Laser Revlite', status: 'occupied', ktv: 'KTV Mai', ktv_id: 'ktv_04', branch_id: 'HN_HB', eMedicalStatus: 'completed' },
  { id: 'b7', roomId: 'r5', hourIndex: 6, duration: 2, clientName: 'Đặng Thu Thủy', service: 'Phi kim căng bóng', status: 'occupied', ktv: 'KTV Nhung', ktv_id: 'ktv_05', branch_id: 'HN_HB', eMedicalStatus: 'completed' },
  { id: 'b8', roomId: 'r6', hourIndex: 5, duration: 3, clientName: 'Bảo trì định kỳ', service: 'Bảo trì', status: 'maintenance', ktv: '-', ktv_id: '', branch_id: 'HN_HB' },
];

// --- Mock Patients (with branch + assigned doctor) ---
export const mockPatients = [
  {
    id: 'p1', name: 'Nguyễn Thị Lan', age: 42, phone: '090 123 4567',
    skinType: 'Da hỗn hợp', allergy: 'Không có', package: 'Thermage FLX',
    sessions: 6, sessionsLeft: 2, lastVisit: '12/05/2026',
    doctor: 'BS. Nguyễn Minh Anh', assigned_doctor_id: 'bs_01',
    branch_id: 'HN_HB',
    history: [
      { date: '12/05/2026', treatment: 'Thermage FLX - Buổi 4', note: 'Da cải thiện rõ rệt, nâng cơ vùng má. Tiếp tục phác đồ.' },
      { date: '28/04/2026', treatment: 'Thermage FLX - Buổi 3', note: 'Kết quả tốt, khách hàng hài lòng. Giảm nhăn vùng trán ~30%.' },
      { date: '10/04/2026', treatment: 'Thermage FLX - Buổi 2', note: 'Da bắt đầu săn chắc hơn. Không có phản ứng phụ.' },
    ],
    aiRec: 'Sau Thermage FLX, khuyến nghị bổ sung S-Glow Collagen để tối ưu độ đàn hồi da.',
    loyaltyTier: 'Diamond', loyaltyPoints: 12450, affiliateCode: 'LANNGUYEN_01', referralCount: 3
  },
  {
    id: 'p2', name: 'Trần Minh Châu', age: 36, phone: '091 234 5678',
    skinType: 'Da nhạy cảm', allergy: 'Nước hoa tổng hợp', package: 'AI Slimtech',
    sessions: 10, sessionsLeft: 1, lastVisit: '15/05/2026',
    doctor: 'BS. Trần Thu Thảo', assigned_doctor_id: 'bs_02',
    branch_id: 'HCM_NTMK',
    history: [
      { date: '15/05/2026', treatment: 'AI Slimtech - Buổi 9', note: 'Giảm 2.5cm vòng eo so với buổi đầu. Khách rất hài lòng.' },
      { date: '01/05/2026', treatment: 'AI Slimtech - Buổi 8', note: 'Giảm 2cm vòng bắp đùi. Không có tác dụng phụ.' },
    ],
    aiRec: 'Khuyến nghị gói duy trì Firming 3X sau khi hoàn thành AI Slimtech.',
    loyaltyTier: 'Gold', loyaltyPoints: 5400, affiliateCode: 'CHAU_SLIM', referralCount: 1
  },
  {
    id: 'p3', name: 'Lê Thu Hà', age: 38, phone: '092 345 6789',
    skinType: 'Da khô', allergy: 'Không có', package: 'Laser Revlite',
    sessions: 8, sessionsLeft: 3, lastVisit: '18/05/2026',
    doctor: 'BS. Nguyễn Minh Anh', assigned_doctor_id: 'bs_01',
    branch_id: 'HN_HB',
    history: [
      { date: '18/05/2026', treatment: 'Laser Revlite - Buổi 5', note: 'Nám giảm ~40%. Tàn nhang mờ đi rõ rệt. Tiếp tục.' },
    ],
    aiRec: 'Kết hợp Trị nám Split Light để tăng hiệu quả phân tách sắc tố.',
    loyaltyTier: 'Silver', loyaltyPoints: 1200, affiliateCode: 'HALELASER', referralCount: 0
  },
];

// Redacted patient (for CSKH / le_tan – no medical records)
export type RedactedPatient = Omit<typeof mockPatients[0], 'history' | 'aiRec'> & {
  history: never[];
  aiRec: string;
};

// --- Mock KTV Leaderboard ---
export const ktvLeaderboard = [
  { id: 'ktv_01', name: 'KTV Lê Thị Hoa',      branch_id: 'HN_HB',    branch: 'HN - Hàng Bài', sessions: 142, revenue: 284_000_000, csat: 4.9, commission: 14_200_000 },
  { id: 'ktv_02', name: 'KTV Nguyễn Thị Linh', branch_id: 'HCM_NTMK', branch: 'HCM - NTMK',    sessions: 138, revenue: 261_000_000, csat: 4.8, commission: 13_050_000 },
  { id: 'ktv_03', name: 'KTV Trần Văn Tuấn',   branch_id: 'HN_KM',    branch: 'HN - Kim Mã',   sessions: 131, revenue: 245_000_000, csat: 4.7, commission: 12_250_000 },
  { id: 'ktv_04', name: 'KTV Phạm Thị Mai',    branch_id: 'HCM_DTH',  branch: 'HCM - ĐTH',     sessions: 119, revenue: 228_000_000, csat: 4.8, commission: 11_400_000 },
  { id: 'ktv_05', name: 'KTV Vũ Thị Nhung',    branch_id: 'HCM_LVS',  branch: 'HCM - LVS',     sessions: 112, revenue: 198_000_000, csat: 4.6, commission: 9_900_000 },
  { id: 'ktv_06', name: 'KTV Đặng Minh Khoa',  branch_id: 'HN_HB',    branch: 'HN - Hàng Bài', sessions: 98,  revenue: 176_000_000, csat: 4.5, commission: 8_800_000 },
];

// --- Lead Routing Data ---
export const leadData = {
  total: 342, converted: 87, pending: 156, lost: 99,
  byChannel: [
    { channel: 'Facebook', count: 142, color: '#3b82f6' },
    { channel: 'Zalo OA', count: 98, color: '#22c55e' },
    { channel: 'Website', count: 67, color: '#a855f7' },
    { channel: 'Hotline', count: 35, color: '#f59e0b' },
  ],
  consultants: [
    { name: 'Tư vấn A - Hoa', leads: 89, converted: 31 },
    { name: 'Tư vấn B - Lan', leads: 78, converted: 24 },
    { name: 'Tư vấn C - Mai', leads: 72, converted: 19 },
    { name: 'Tư vấn D - Hùng', leads: 65, converted: 13 },
  ],
};

// --- Automation Rules ---
export const automationRules = [
  { id: 'a1', name: 'Nhắc lịch hẹn trước 24h', trigger: 'Trước lịch hẹn 24 giờ', action: 'Gửi Zalo + SMS', status: true, sent: 1247 },
  { id: 'a2', name: 'Chăm sóc sau liệu trình Laser', trigger: 'Sau check-out điều trị Laser', action: 'Gửi Zalo hướng dẫn dưỡng da', status: true, sent: 876 },
  { id: 'a3', name: 'Chăm sóc sau Giảm béo', trigger: 'Sau check-out điều trị Giảm béo', action: 'Gửi Zalo hướng dẫn ăn uống', status: true, sent: 643 },
  { id: 'a4', name: 'Cảnh báo Churn Risk', trigger: 'Khách không check-in > 30 ngày', action: 'Alert CSKH + Gửi voucher', status: true, sent: 234 },
  { id: 'a5', name: 'Gợi ý tái ký liệu trình', trigger: 'Còn 1 buổi cuối trong gói', action: 'Gửi offer tái ký ưu đãi 10%', status: false, sent: 0 },
  { id: 'a6', name: 'Chúc mừng sinh nhật VIP', trigger: 'Trước sinh nhật KH VIP 3 ngày', action: 'Gửi Zalo + Voucher sinh nhật', status: true, sent: 89 },
  { id: 'a7', name: 'Gửi Link Đánh Giá (Rating)', trigger: 'Sau check-out 2 tiếng', action: 'Gửi Zalo form 5 sao', status: true, sent: 432 },
];

// --- Staff Operations ---
export const mockStaffTasks = [
  { id: 't1', room: 'Phòng máy 1', task: 'Chuẩn bị đầu tip Thermage FLX 900', status: 'pending', priority: 'high', assignee: 'KTV Hoa', time: '10:45', branch_id: 'HN_HB' },
  { id: 't2', room: 'Phòng 5', task: 'Sát khuẩn tia cực tím & Chuẩn bị tinh dầu', status: 'completed', priority: 'medium', assignee: 'KTV Nhung', time: '09:30', branch_id: 'HN_HB' },
  { id: 't3', room: 'Phòng máy 3', task: 'Bảo trì định kỳ AI Slimtech', status: 'in-progress', priority: 'high', assignee: 'Kỹ thuật viên', time: '14:00', branch_id: 'HN_HB' },
  { id: 't4', room: 'Phòng chờ VIP', task: 'F&B Order: 2 Trà Hoa Cúc Mật Ong', status: 'pending', priority: 'medium', assignee: 'Lễ Tân', time: '11:15', branch_id: 'HN_HB' },
];

// --- Finance Transactions ---
export interface Transaction {
  transaction_id: string;
  booking_id?: string;
  customer_id?: string;
  total_amount: number;
  revenue_type: 'package_sale' | 'single_service' | 'product_sale';
  staff_commissions: any[];
  payment_method: 'cash' | 'credit_card' | 'installment' | 'bank_transfer';
  status: 'completed' | 'refunded' | 'matched' | 'categorized_ai' | 'pending_audit';
  branch_id: string;
  // UI Display helpers
  id: string;
  time: string;
  amount: number;
  type: string;
  bank: string;
  content: string;
  category: string;
}

export const mockTransactions: Transaction[] = [
  { transaction_id: 'tx1', id: 'tx1', time: '10:24', amount: 45000000, type: 'Chuyển khoản', bank: 'Vietcombank', content: 'Nguyen Thi Lan TT Thermage', category: 'Doanh thu dịch vụ', status: 'matched', total_amount: 45000000, revenue_type: 'package_sale', staff_commissions: [{staff_id: 'bs_01', role: 'doctor', type: 'percentage', value: 10}], payment_method: 'bank_transfer', branch_id: 'HN_HB' },
  { transaction_id: 'tx2', id: 'tx2', time: '09:15', amount: 12000000, type: 'Quẹt thẻ', bank: 'Techcombank', content: 'Thanh toan the POS', category: 'Doanh thu dịch vụ', status: 'matched', total_amount: 12000000, revenue_type: 'single_service', staff_commissions: [{staff_id: 'ktv_01', role: 'ktv', type: 'fixed', value: 50000}], payment_method: 'credit_card', branch_id: 'HN_HB' },
  { transaction_id: 'tx3', id: 'tx3', time: '08:40', amount: -3500000, type: 'Chuyển khoản', bank: 'MB Bank', content: 'Thanh toan tien dien Thang 5', category: 'Chi phí vận hành', status: 'categorized_ai', total_amount: -3500000, revenue_type: 'single_service', staff_commissions: [], payment_method: 'bank_transfer', branch_id: 'HN_KM' },
  { transaction_id: 'tx4', id: 'tx4', time: 'Hôm qua', amount: 80000000, type: 'Tiền mặt', bank: '-', content: 'Chau TT goi AI Slimtech', category: 'Doanh thu dịch vụ', status: 'pending_audit', total_amount: 80000000, revenue_type: 'package_sale', staff_commissions: [], payment_method: 'cash', branch_id: 'HCM_NTMK' },
];

// --- Incident & Ticket System ---
export interface Ticket {
  ticket_id: string;
  customer_id: string;
  booking_id?: string;
  issue_category: 'service_quality' | 'staff_attitude' | 'facility' | 'medical_incident';
  severity_level: 'low' | 'medium' | 'high' | 'critical';
  assigned_to: string;
  status: 'open' | 'investigating' | 'resolved' | 'closed';
  resolution_notes: string;
  branch_id: string;
  customer_name: string;
  created_at: string;
  description: string;
}

export const mockTickets: Ticket[] = [
  { ticket_id: 'tc1', customer_id: 'p1', customer_name: 'Nguyễn Thị Lan', issue_category: 'medical_incident', severity_level: 'critical', assigned_to: 'Giám đốc Vận hành', status: 'investigating', resolution_notes: '', created_at: '10 phút trước', description: 'Khách báo bị rát da vùng má sau khi bắn Thermage FLX.', branch_id: 'HN_HB' },
  { ticket_id: 'tc2', customer_id: 'p2', customer_name: 'Trần Minh Châu', issue_category: 'facility', severity_level: 'medium', assigned_to: 'Quản lý Chi nhánh', status: 'open', resolution_notes: '', created_at: '2 giờ trước', description: 'Khách phàn nàn điều hòa phòng VIP 3 không mát.', branch_id: 'HCM_NTMK' },
  { ticket_id: 'tc3', customer_id: 'p3', customer_name: 'Lê Thu Hà', issue_category: 'service_quality', severity_level: 'low', assigned_to: 'CSKH Trưởng', status: 'resolved', resolution_notes: 'Đã gửi SMS xin lỗi tự động và gọi điện tặng voucher 1 triệu.', created_at: 'Hôm qua', description: 'Đánh giá 3 sao trên Zalo OA: "Chờ lấy xe lâu".', branch_id: 'HN_HB' },
];

// --- Inventory & Medical Supplies ---
export const mockInventory = [
  { id: 'inv1', name: 'Đầu tip Thermage FLX 900', category: 'Vật tư CNC', unit: 'Cái', stock: 12, minStock: 5, value: 45000000, status: 'normal', branch_id: 'HN_HB' },
  { id: 'inv2', name: 'Kim tiêm Meso 34G', category: 'Vật tư Y tế', unit: 'Hộp', stock: 3, minStock: 10, value: 350000, status: 'low', branch_id: 'HN_HB' },
  { id: 'inv3', name: 'Kem phục hồi B5 ZinC', category: 'Mỹ phẩm', unit: 'Tuýp', stock: 45, minStock: 20, value: 850000, status: 'normal', branch_id: 'HN_KM' },
  { id: 'inv4', name: 'Dưỡng chất Exosome', category: 'Dưỡng chất tiêm', unit: 'Lọ', stock: 1, minStock: 15, value: 3200000, status: 'critical', branch_id: 'HCM_NTMK' },
  { id: 'inv5', name: 'Gel siêu âm Laser', category: 'Vật tư Y tế', unit: 'Can 5L', stock: 24, minStock: 5, value: 400000, status: 'normal', branch_id: 'HCM_NTMK' },
];
