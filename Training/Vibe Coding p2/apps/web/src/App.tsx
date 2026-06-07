import { Sidebar } from './components/Sidebar';
import { KPICards } from './components/KPICards';
import { RevenueChart } from './components/RevenueChart';
import { CategoryChart } from './components/CategoryChart';
import { ProductTable } from './components/ProductTable';
import { GlobalFilterBar } from './components/GlobalFilterBar';
import { Bell, Search, Sun } from 'lucide-react';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50/50">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        {/* Top Navigation */}
        <header className="h-16 bg-white border-b px-6 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-4 text-sm font-medium text-gray-600">
            <span>Executive Overview</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <input 
                type="text" 
                placeholder="Tìm kiếm..." 
                className="pl-9 pr-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#443199]"
              />
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Sun size={20} className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-[#792CA2] text-white flex items-center justify-center font-semibold text-sm ml-2">
              AD
            </div>
          </div>
        </header>

        <GlobalFilterBar />

        {/* Main Content Area */}
        <div className="p-6 max-w-7xl mx-auto space-y-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-semibold text-gray-900">Tổng quan kinh doanh</h2>
            <button className="px-4 py-2 bg-[#443199] text-white rounded-md text-sm font-medium hover:bg-[#3b2a85] transition-colors">
              Export Báo cáo
            </button>
          </div>

          <KPICards />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <RevenueChart />
            <CategoryChart />
          </div>

          <ProductTable />
        </div>
      </main>
    </div>
  );
}

export default App;
