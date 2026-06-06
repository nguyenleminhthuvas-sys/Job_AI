import { useState } from 'react';
import { CheckCircle2, Clock, AlertTriangle, Coffee, Sparkles, Plus, Settings } from 'lucide-react';
import { mockStaffTasks, ROOMS } from '../data';

export default function StaffOperationsPage() {
  const [activeTab, setActiveTab] = useState<'tasks' | 'fnb' | 'rooms' | 'medical' | 'commission' | 'ticket'>('tasks');
  const [tasks, setTasks] = useState(mockStaffTasks);
  const [rooms, setRooms] = useState(ROOMS.map(r => ({ ...r, status: r.id === 'r1' ? 'dirty' : 'ready' })));

  const handleCompleteTask = (id: string) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, status: 'completed' } : t));
  };

  const handleRoomStatus = (id: string, newStatus: string) => {
    setRooms(prev => prev.map(r => r.id === id ? { ...r, status: newStatus } : r));
  };

  return (
    <div className="page-container animate-fade-in">
      <div className="page-header">
        <div>
          <h1 className="page-title">Vận Hành & Chuẩn Bị Phòng</h1>
          <p className="page-subtitle">Quản lý công việc KTV và trạng thái phòng máy</p>
        </div>
        <div className="tab-group" style={{ flexWrap: 'wrap', gap: 8 }}>
          <button className={`tab-btn ${activeTab === 'tasks' ? 'active' : ''}`} onClick={() => setActiveTab('tasks')}>Task List</button>
          <button className={`tab-btn ${activeTab === 'fnb' ? 'active' : ''}`} onClick={() => setActiveTab('fnb')}>F&B / VIP</button>
          <button className={`tab-btn ${activeTab === 'rooms' ? 'active' : ''}`} onClick={() => setActiveTab('rooms')}>Trạng Thái Phòng</button>
          <button className={`tab-btn ${activeTab === 'medical' ? 'active' : ''}`} onClick={() => setActiveTab('medical')}>Nhật ký Y Khoa</button>
          <button className={`tab-btn ${activeTab === 'commission' ? 'active' : ''}`} onClick={() => setActiveTab('commission')}>Hoa hồng</button>
          <button className={`tab-btn ${activeTab === 'ticket' ? 'active' : ''}`} onClick={() => setActiveTab('ticket')}>Báo sự cố</button>
        </div>
      </div>

      {activeTab === 'tasks' && (
        <div className="grid-3">
          <div className="card" style={{ gridColumn: 'span 2' }}>
            <div className="card-title"><span className="card-title-dot" />Nhiệm vụ chuẩn bị phòng (KTV)</div>
            <div className="table-container mt-4">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Thời gian</th>
                    <th>Phòng</th>
                    <th>Công việc</th>
                    <th>Mức độ</th>
                    <th>Trạng thái</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.filter(t => !t.task.includes('F&B')).map(t => (
                    <tr key={t.id}>
                      <td><div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-300)' }}><Clock size={14} /> {t.time}</div></td>
                      <td>{t.room}</td>
                      <td style={{ color: 'var(--text-100)', fontWeight: 500 }}>{t.task}</td>
                      <td>
                        <span className={`badge badge-${t.priority === 'high' ? 'danger' : 'warning'}`}>{t.priority === 'high' ? 'Khẩn cấp' : 'Bình thường'}</span>
                      </td>
                      <td>
                        <span className={`badge badge-${t.status === 'completed' ? 'success' : t.status === 'in-progress' ? 'warning' : 'neutral'}`}>
                          {t.status === 'completed' ? 'Đã xong' : t.status === 'in-progress' ? 'Đang làm' : 'Chưa xử lý'}
                        </span>
                      </td>
                      <td>
                        {t.status !== 'completed' && (
                          <button className="btn btn-sm btn-primary" onClick={() => handleCompleteTask(t.id)}>
                            <CheckCircle2 size={14} /> Xong
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="card">
            <div className="card-title"><span className="card-title-dot" style={{ background: 'var(--blue)' }} />AI Gợi ý vận hành</div>
            <div style={{ marginTop: 16, padding: 12, background: 'rgba(59,130,246,0.05)', borderRadius: 'var(--r-md)', border: '1px solid rgba(59,130,246,0.2)' }}>
              <div style={{ display: 'flex', gap: 12 }}>
                <Sparkles size={20} color="var(--blue)" style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--blue)', marginBottom: 4 }}>Dự báo quá tải lúc 14:00</div>
                  <div style={{ fontSize: 12, color: 'var(--text-300)', lineHeight: 1.5 }}>
                    Phòng máy 1 và 3 chuẩn bị đón khách VIP. Đề xuất điều động thêm 1 KTV hỗ trợ chuẩn bị đầu tip Thermage.
                  </div>
                  <button className="btn btn-sm mt-3" style={{ background: 'rgba(59,130,246,0.1)', color: 'var(--blue)', border: 'none' }}>Điều động KTV</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'fnb' && (
        <div className="card">
          <div className="card-title"><span className="card-title-dot" style={{ background: 'var(--purple)' }} />F&B VIP Orders</div>
          <div className="grid-3 mt-4">
            {tasks.filter(t => t.task.includes('F&B')).map(t => (
              <div key={t.id} style={{ padding: 16, background: 'var(--bg-800)', borderRadius: 'var(--r-md)', border: '1px solid var(--surface-border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--purple)', fontWeight: 600 }}>
                    <Coffee size={18} /> Order Mới
                  </div>
                  <span style={{ fontSize: 12, color: 'var(--text-400)' }}>{t.time}</span>
                </div>
                <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-100)', marginBottom: 8 }}>{t.task.replace('F&B Order: ', '')}</div>
                <div style={{ fontSize: 13, color: 'var(--text-300)', marginBottom: 16 }}>Giao đến: <strong style={{ color: 'var(--gold-400)' }}>{t.room}</strong></div>
                <button 
                  className={`btn btn-sm w-full ${t.status === 'completed' ? 'btn-neutral' : 'btn-primary'}`} 
                  style={{ justifyContent: 'center' }}
                  onClick={() => handleCompleteTask(t.id)}
                  disabled={t.status === 'completed'}
                >
                  {t.status === 'completed' ? 'Đã phục vụ' : 'Xác nhận & Giao ngay'}
                </button>
              </div>
            ))}
            <div style={{ padding: 16, border: '1px dashed var(--surface-border)', borderRadius: 'var(--r-md)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, cursor: 'pointer', color: 'var(--text-400)' }}>
              <Plus size={24} />
              <div style={{ fontSize: 13, fontWeight: 500 }}>Tạo Order F&B Mới</div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'rooms' && (
        <div className="card">
          <div className="card-title"><span className="card-title-dot" style={{ background: 'var(--green)' }} />Cập nhật Trạng thái Phòng Nhanh (1-Tap)</div>
          <p style={{ fontSize: 13, color: 'var(--text-400)', marginBottom: 20 }}>Dành cho KTV/Nhân viên dọn phòng cập nhật tức thời khi hoàn tất công việc.</p>
          <div className="grid-3">
            {rooms.map(r => (
              <div key={r.id} style={{ padding: 16, background: 'var(--bg-800)', borderRadius: 'var(--r-md)', border: '1px solid', borderColor: r.status === 'dirty' ? 'rgba(239,68,68,0.3)' : r.status === 'maintenance' ? 'rgba(245,158,11,0.3)' : 'rgba(34,197,94,0.3)' }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-100)', marginBottom: 4 }}>{r.name}</div>
                <div style={{ fontSize: 12, color: 'var(--text-400)', marginBottom: 16 }}>{r.type} • {r.floor}</div>
                
                <div style={{ display: 'flex', gap: 8 }}>
                  <button 
                    className="btn btn-sm" 
                    style={{ flex: 1, background: r.status === 'ready' ? 'rgba(34,197,94,0.1)' : 'var(--bg-900)', color: r.status === 'ready' ? 'var(--green)' : 'var(--text-400)', border: '1px solid', borderColor: r.status === 'ready' ? 'rgba(34,197,94,0.2)' : 'var(--surface-border)', justifyContent: 'center' }}
                    onClick={() => handleRoomStatus(r.id, 'ready')}
                  >
                    <CheckCircle2 size={14} /> Sẵn sàng
                  </button>
                  <button 
                    className="btn btn-sm" 
                    style={{ flex: 1, background: r.status === 'dirty' ? 'rgba(239,68,68,0.1)' : 'var(--bg-900)', color: r.status === 'dirty' ? 'var(--red)' : 'var(--text-400)', border: '1px solid', borderColor: r.status === 'dirty' ? 'rgba(239,68,68,0.2)' : 'var(--surface-border)', justifyContent: 'center' }}
                    onClick={() => handleRoomStatus(r.id, 'dirty')}
                  >
                    <AlertTriangle size={14} /> Cần dọn
                  </button>
                  <button 
                    className="btn btn-sm btn-icon" 
                    style={{ background: r.status === 'maintenance' ? 'rgba(245,158,11,0.1)' : 'var(--bg-900)', color: r.status === 'maintenance' ? 'var(--yellow)' : 'var(--text-400)', border: '1px solid', borderColor: r.status === 'maintenance' ? 'rgba(245,158,11,0.2)' : 'var(--surface-border)' }}
                    onClick={() => handleRoomStatus(r.id, 'maintenance')}
                  >
                    <Settings size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {activeTab === 'medical' && (
        <div className="card animate-fade-in">
          <div className="card-title"><span className="card-title-dot" style={{ background: 'var(--blue)' }} />Cập nhật Phác đồ & Ghi chú Y khoa</div>
          <div style={{ marginTop: 16 }}>
            <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
              <select className="input-field" style={{ flex: 1 }}>
                <option>Nguyễn Thị Lan - Thermage FLX (Buổi 5)</option>
                <option>Trần Minh Châu - AI Slimtech (Buổi 10)</option>
              </select>
              <button className="btn btn-secondary">Đang điều trị (14:00 - 15:30)</button>
            </div>
            
            <div className="grid-2">
              <div style={{ padding: 16, background: 'var(--surface-1)', borderRadius: 'var(--r-md)', border: '1px solid var(--surface-border)' }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-200)', marginBottom: 12 }}>Thông số máy (Thermage FLX)</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div>
                    <label style={{ fontSize: 11, color: 'var(--text-400)', marginBottom: 4, display: 'block' }}>Số Shot (Mặt)</label>
                    <input type="number" className="input-field w-full" defaultValue={900} />
                  </div>
                  <div>
                    <label style={{ fontSize: 11, color: 'var(--text-400)', marginBottom: 4, display: 'block' }}>Mức Năng lượng</label>
                    <input type="number" className="input-field w-full" defaultValue={2.5} step="0.1" />
                  </div>
                  <div style={{ gridColumn: 'span 2' }}>
                    <label style={{ fontSize: 11, color: 'var(--text-400)', marginBottom: 4, display: 'block' }}>Mã Đầu Tip</label>
                    <input type="text" className="input-field w-full" defaultValue="FLX-900-2412A" />
                  </div>
                </div>
              </div>

                <div style={{ padding: 16, background: 'var(--surface-1)', borderRadius: 'var(--r-md)', border: '1px solid var(--surface-border)' }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-200)', marginBottom: 12 }}>Chữ ký điện tử (Khách hàng xác nhận)</div>
                  <div style={{ width: '100%', height: 120, background: 'var(--bg-800)', border: '1px dashed var(--text-500)', borderRadius: 'var(--r-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-500)', fontSize: 12, cursor: 'crosshair', position: 'relative' }}>
                    [ Canvas ký tên ]
                    <button className="btn btn-sm btn-secondary" style={{ position: 'absolute', bottom: 8, right: 8, fontSize: 10 }}>Xóa chữ ký</button>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 12, gridColumn: 'span 2' }}>
                  <button className="btn btn-primary" style={{ padding: '12px 24px', fontSize: 14 }}><CheckCircle2 size={18} /> Lưu hồ sơ & Đồng bộ Khách hàng</button>
                </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'commission' && (
        <div className="card animate-fade-in">
          <div className="card-title"><span className="card-title-dot" style={{ background: 'var(--gold-400)' }} />Bảng Lương & Hoa hồng (Tháng 6/2026)</div>
          
          <div className="grid-3 mt-4 mb-6">
            <div style={{ padding: 16, background: 'var(--bg-800)', borderRadius: 'var(--r-md)', border: '1px solid var(--surface-border)' }}>
              <div style={{ fontSize: 12, color: 'var(--text-400)', marginBottom: 4 }}>Lương cứng</div>
              <div style={{ fontSize: 24, fontWeight: 700, color: 'var(--text-100)' }}>8,000,000đ</div>
            </div>
            <div style={{ padding: 16, background: 'var(--bg-800)', borderRadius: 'var(--r-md)', border: '1px solid var(--surface-border)' }}>
              <div style={{ fontSize: 12, color: 'var(--text-400)', marginBottom: 4 }}>Hoa hồng Tour (Đã làm)</div>
              <div style={{ fontSize: 24, fontWeight: 700, color: 'var(--gold-400)' }}>4,250,000đ</div>
            </div>
            <div style={{ padding: 16, background: 'rgba(34,197,94,0.05)', borderRadius: 'var(--r-md)', border: '1px solid rgba(34,197,94,0.2)' }}>
              <div style={{ fontSize: 12, color: 'var(--green)', marginBottom: 4 }}>Tổng thu nhập Tạm tính</div>
              <div style={{ fontSize: 24, fontWeight: 700, color: 'var(--green)' }}>12,250,000đ</div>
            </div>
          </div>

          <table className="data-table">
            <thead>
              <tr>
                <th>Ngày</th>
                <th>Khách hàng</th>
                <th>Dịch vụ</th>
                <th>Đánh giá</th>
                <th>Hoa hồng</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hôm nay 10:30</td>
                <td>Nguyễn Thị Lan</td>
                <td>Thermage FLX (KTV Phụ)</td>
                <td><span style={{ color: 'var(--amber)' }}>★★★★★</span></td>
                <td style={{ color: 'var(--gold-400)', fontWeight: 600 }}>+150,000đ</td>
              </tr>
              <tr>
                <td>Hôm qua 15:00</td>
                <td>Lê Thu Hà</td>
                <td>Chăm sóc da chuyên sâu</td>
                <td><span style={{ color: 'var(--amber)' }}>★★★★☆</span></td>
                <td style={{ color: 'var(--gold-400)', fontWeight: 600 }}>+80,000đ</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'ticket' && (
        <div className="card animate-fade-in" style={{ maxWidth: 600, margin: '0 auto' }}>
          <div className="card-title"><span className="card-title-dot" style={{ background: 'var(--red)' }} />Báo cáo Sự cố & Yêu cầu Kỹ thuật</div>
          
          <div style={{ marginTop: 16 }}>
            <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-200)', marginBottom: 8, display: 'block' }}>Phân loại sự cố</label>
            <select className="input-field w-full mb-4">
              <option>Lỗi máy móc (Máy không lên nguồn, kêu to...)</option>
              <option>Thiếu vật tư tiêu hao khẩn cấp</option>
              <option>Vệ sinh / Hạ tầng (Điều hòa, đèn hỏng...)</option>
            </select>

            <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-200)', marginBottom: 8, display: 'block' }}>Phòng / Vị trí</label>
            <select className="input-field w-full mb-4">
              <option>Phòng máy 1 (Thermage)</option>
              <option>Phòng máy 2 (Ultherapy)</option>
            </select>

            <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-200)', marginBottom: 8, display: 'block' }}>Mô tả chi tiết</label>
            <textarea className="input-field w-full mb-4" rows={3} placeholder="Mô tả sự cố để kỹ thuật mang đúng dụng cụ sửa chữa..."></textarea>

            <button className="btn btn-primary w-full" style={{ justifyContent: 'center' }}><AlertTriangle size={18} /> Gửi Báo Cáo Khẩn</button>
          </div>
        </div>
      )}
    </div>
  );
}
