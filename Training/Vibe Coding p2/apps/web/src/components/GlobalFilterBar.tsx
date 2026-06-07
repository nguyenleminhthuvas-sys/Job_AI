import { Filter } from "lucide-react";

export function GlobalFilterBar() {
  return (
    <div className="bg-white border-b px-6 py-3 flex items-center justify-between sticky top-16 z-10 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex items-center text-sm font-medium text-gray-600 gap-2">
          <Filter size={16} />
          <span>Lọc dữ liệu:</span>
        </div>
        
        <select className="border border-gray-200 rounded-md px-3 py-1.5 text-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#443199]">
          <option>Tháng này</option>
          <option>Tuần này</option>
          <option>Quý này</option>
          <option>Năm nay</option>
        </select>

        <select className="border border-gray-200 rounded-md px-3 py-1.5 text-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#443199]">
          <option>Tất cả Khu vực</option>
          <option>Miền Bắc</option>
          <option>Miền Trung</option>
          <option>Miền Nam</option>
        </select>

        <select className="border border-gray-200 rounded-md px-3 py-1.5 text-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#443199]">
          <option>Tất cả Kênh</option>
          <option>Siêu thị</option>
          <option>Đại lý</option>
          <option>Cửa hàng tiện lợi</option>
          <option>Online</option>
        </select>

        <select className="border border-gray-200 rounded-md px-3 py-1.5 text-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#443199]">
          <option>Tất cả Sản phẩm</option>
          <option>Tổ Yến Tinh Chế</option>
          <option>Yến Hũ</option>
          <option>Nước Yến</option>
        </select>
      </div>

      <button className="text-sm font-medium text-[#443199] hover:underline">
        Xóa bộ lọc
      </button>
    </div>
  );
}
