import { useState } from 'react';
import AppLayout from '../components/AppLayout';
import { mockInventory } from '../data';
import { Package, AlertTriangle, Plus, Search, Filter, ArrowDownUp } from 'lucide-react';

export default function InventoryPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const filtered = mockInventory.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'all' ? true : filter === 'low' ? item.status !== 'normal' : item.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <AppLayout title="Quản lý Kho & Tài sản" subtitle="Theo dõi định mức tiêu hao vật tư y tế">
      <div className="grid-3 mb-6">
        <div className="card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(59,130,246,0.1)', color: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Package size={24} />
            </div>
            <div>
              <div style={{ fontSize: 13, color: 'var(--text-400)' }}>Tổng Mã Sản Phẩm</div>
              <div style={{ fontSize: 24, fontWeight: 700, color: 'var(--text-100)' }}>145</div>
            </div>
          </div>
        </div>
        <div className="card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(239,68,68,0.1)', color: 'var(--red)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <AlertTriangle size={24} />
            </div>
            <div>
              <div style={{ fontSize: 13, color: 'var(--text-400)' }}>Cảnh báo Hết Hàng</div>
              <div style={{ fontSize: 24, fontWeight: 700, color: 'var(--red)' }}>12</div>
            </div>
          </div>
        </div>
        <div className="card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(168,85,247,0.1)', color: 'var(--purple)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ArrowDownUp size={24} />
            </div>
            <div>
              <div style={{ fontSize: 13, color: 'var(--text-400)' }}>Giá trị Tồn Kho</div>
              <div style={{ fontSize: 24, fontWeight: 700, color: 'var(--purple)' }}>1.45 Tỷ</div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-4" style={{ flex: 1 }}>
            <div style={{ position: 'relative', width: 300 }}>
              <Search size={16} color="var(--text-400)" style={{ position: 'absolute', left: 12, top: 10 }} />
              <input type="text" className="input-field w-full" placeholder="Tìm kiếm tên vật tư..." style={{ paddingLeft: 36 }} value={search} onChange={e => setSearch(e.target.value)} />
            </div>
            <select className="input-field" value={filter} onChange={e => setFilter(e.target.value)}>
              <option value="all">Tất cả danh mục</option>
              <option value="low">Sắp hết hàng (Cảnh báo)</option>
              <option value="Vật tư CNC">Vật tư Công Nghệ Cao</option>
              <option value="Dưỡng chất tiêm">Dưỡng chất tiêm (Meso)</option>
              <option value="Mỹ phẩm">Mỹ phẩm mang về</option>
            </select>
          </div>
          <button className="btn btn-primary"><Plus size={16} /> Nhập Kho</button>
        </div>

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Mã / Tên Vật Tư</th>
                <th>Danh mục</th>
                <th>Tồn kho</th>
                <th>Đơn vị tính</th>
                <th>Đơn giá nhập</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(item => (
                <tr key={item.id}>
                  <td>
                    <div style={{ fontWeight: 600, color: 'var(--text-100)' }}>{item.name}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-400)', marginTop: 2 }}>SKU: {item.id.toUpperCase()}</div>
                  </td>
                  <td>{item.category}</td>
                  <td>
                    <span style={{ fontSize: 15, fontWeight: 600, color: item.status === 'critical' ? 'var(--red)' : item.status === 'low' ? 'var(--amber)' : 'var(--text-100)' }}>
                      {item.stock}
                    </span>
                    <span style={{ fontSize: 11, color: 'var(--text-500)', marginLeft: 4 }}>/ Định mức {item.minStock}</span>
                  </td>
                  <td>{item.unit}</td>
                  <td>{item.value.toLocaleString()}đ</td>
                  <td>
                    {item.status === 'normal' ? <span className="badge badge-success">Đủ định mức</span> :
                     item.status === 'low' ? <span className="badge badge-warning">Sắp hết</span> :
                     <span className="badge badge-danger">Khẩn cấp</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppLayout>
  );
}
