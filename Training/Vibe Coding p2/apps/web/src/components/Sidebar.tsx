import { LayoutDashboard, ShoppingCart, Package, Users } from 'lucide-react';

export function Sidebar() {
  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, active: true },
    { name: 'Đơn hàng', icon: ShoppingCart, active: false },
    { name: 'Sản phẩm', icon: Package, active: false },
    { name: 'Khách hàng', icon: Users, active: false },
  ];

  return (
    <aside className="w-64 bg-[#443199] text-white flex flex-col min-h-screen p-4">
      <div className="mb-8 px-2">
        <h1 className="text-2xl font-bold">Yến Việt</h1>
      </div>
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href="#"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                item.active 
                  ? 'bg-white/10 font-semibold' 
                  : 'hover:bg-white/5 text-gray-300 hover:text-white'
              }`}
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
