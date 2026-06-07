import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const products = [
  { id: "SP001", name: "Tổ Yến Tinh Chế Loại 1 100g", category: "Tổ Yến Tinh Chế", price: "4,500,000", stock: 120, status: "Còn hàng" },
  { id: "SP002", name: "Yến Hũ Chưng Đường Phèn (Lốc 6)", category: "Yến Hũ", price: "240,000", stock: 850, status: "Còn hàng" },
  { id: "SP003", name: "Nước Yến Sào Nhân Sâm", category: "Nước Yến", price: "180,000", stock: 15, status: "Sắp hết" },
  { id: "SP004", name: "Hộp Quà Tặng Yến Sào Cao Cấp", category: "Quà Tặng", price: "1,200,000", stock: 0, status: "Hết hàng" },
];

export function ProductTable() {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Sản phẩm nổi bật</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Mã SP</TableHead>
              <TableHead>Tên Sản Phẩm</TableHead>
              <TableHead>Danh mục</TableHead>
              <TableHead className="text-right">Giá (VNĐ)</TableHead>
              <TableHead className="text-right">Tồn kho</TableHead>
              <TableHead className="text-right">Trạng thái</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell className="text-right">{product.price}</TableCell>
                <TableCell className="text-right">{product.stock}</TableCell>
                <TableCell className="text-right">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    product.status === 'Còn hàng' ? 'bg-emerald-100 text-emerald-700' :
                    product.status === 'Sắp hết' ? 'bg-amber-100 text-amber-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {product.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
