export interface KPI {
  id: string;
  label: string;
  value: string | number;
  unit?: string;
  trend: number; // percentage change
}

export interface RevenueData {
  date: string;
  revenue: number;
}

export interface OrderCategoryData {
  category: string;
  orders: number;
}
