import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Tổ Yến Tinh Chế', orders: 400 },
  { name: 'Yến Hũ Chưng Sẵn', orders: 700 },
  { name: 'Nước Yến', orders: 550 },
  { name: 'Quà Tặng', orders: 200 },
];

export function CategoryChart() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Đơn hàng theo danh mục</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#eee" />
              <XAxis type="number" axisLine={false} tickLine={false} tick={{fill: '#888', fontSize: 12}} />
              <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#444', fontSize: 12}} width={120} />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                cursor={{ fill: 'rgba(68, 49, 153, 0.05)' }}
              />
              <Bar dataKey="orders" fill="#443199" radius={[0, 4, 4, 0]} barSize={24} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
