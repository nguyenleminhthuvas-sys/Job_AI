import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";

interface KPIData {
  title: string;
  value: string;
  unit: string;
  trend?: number;
  alert?: boolean;
  alertMsg?: string;
}

const mockKPIs: KPIData[] = [
  { title: "Doanh Thu Thuần", value: "1,250", unit: "Tr.VNĐ", trend: 5.2 },
  { title: "Số Lượng SKU Bán Ra", value: "15,400", unit: "Thùng", trend: 1.8 },
  { title: "Giá Trị Tồn Kho", value: "4,300", unit: "Tr.VNĐ", trend: -2.4 },
  { title: "DOS (Days of Stock)", value: "52", unit: "Ngày", alert: true, alertMsg: "> 45 ngày" },
  { title: "Tỷ Lệ Out-of-Stock", value: "6.5", unit: "%", alert: true, alertMsg: ">= 5%" },
  { title: "Số Điểm Bán (POS)", value: "1,240", unit: "Điểm", trend: 10.5 },
  { title: "Tỷ Suất LN Gộp", value: "32.5", unit: "%", trend: 0.5 },
  { title: "% Đạt Target", value: "95", unit: "%", trend: 2.1 },
];

export function KPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {mockKPIs.map((kpi, index) => (
        <Card key={index} className={kpi.alert ? "border-red-500/50 bg-red-50/50" : ""}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
            {kpi.alert && (
              <AlertTriangle size={16} className="text-red-500" />
            )}
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${kpi.alert ? "text-red-600" : ""}`}>
              {kpi.value} <span className="text-sm font-normal text-muted-foreground">{kpi.unit}</span>
            </div>
            
            {kpi.trend !== undefined && (
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                {kpi.trend >= 0 ? (
                  <span className="text-emerald-500 flex items-center font-medium">
                    <TrendingUp size={14} className="mr-1" />
                    +{kpi.trend}%
                  </span>
                ) : (
                  <span className="text-red-500 flex items-center font-medium">
                    <TrendingDown size={14} className="mr-1" />
                    {kpi.trend}%
                  </span>
                )}
                so với cùng kỳ
              </p>
            )}

            {kpi.alert && kpi.alertMsg && (
              <p className="text-xs text-red-500 mt-1 font-medium flex items-center">
                Vượt ngưỡng {kpi.alertMsg}
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
