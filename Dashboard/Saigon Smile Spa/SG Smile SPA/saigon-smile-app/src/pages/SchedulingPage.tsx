import React, { useState } from 'react';
import AppLayout from '../components/AppLayout';
import { ROOMS, HOURS, mockBookings, type Booking } from '../data';
import { Plus, ChevronLeft, ChevronRight, Info, Calendar, Activity, AlertTriangle, Wrench, Coffee, Check, CheckCircle2, User, Sparkles, Wifi, Thermometer, ShieldAlert, X } from 'lucide-react';

const KTV_LIST = ['KTV Hoa', 'KTV Linh', 'KTV Tuấn', 'KTV Mai', 'KTV Nhung', 'KTV Khoa'];
const KTV_STATUS = [
  { name: 'KTV Hoa', status: 'Đang phục vụ', room: 'Phòng máy 1', client: 'Nguyễn Thị Lan' },
  { name: 'KTV Linh', status: 'Đang phục vụ', room: 'Phòng máy 2', client: 'Lê Thu Hà' },
  { name: 'KTV Tuấn', status: 'Nghỉ giải lao', room: '—', client: '—' },
  { name: 'KTV Mai', status: 'Rảnh', room: '—', client: '—' },
  { name: 'KTV Nhung', status: 'Đang phục vụ', room: 'Phòng 5', client: 'Đặng Thu Thủy' },
  { name: 'KTV Khoa', status: 'Rảnh', room: '—', client: '—' },
];

interface BookingModalProps {
  onClose: () => void;
  hourIndex?: number;
  roomId?: string;
}

function BookingModal({ onClose, hourIndex, roomId }: BookingModalProps) {
  const [form, setForm] = useState({
    client: '', phone: '', service: 'Thermage FLX', ktv: 'KTV Hoa',
    hour: hourIndex !== undefined ? HOURS[hourIndex] : '09:00',
    duration: '2', room: roomId || 'r1', note: ''
  });

  const SERVICES = ['Thermage FLX', 'Ultherapy Prime', 'AI Slimtech', 'Laser Revlite', 'FOTONA 4D', 'Phi kim căng bóng', 'Trị nám Split Light', 'Giảm béo Slimfit'];

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200 }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{ width: 480, background: 'var(--bg-700)', border: '1px solid var(--surface-border)', borderRadius: 'var(--r-xl)', padding: 'var(--sp-8)', boxShadow: 'var(--shadow-lg)' }} className="animate-fade-up">
        <div className="flex justify-between items-center mb-6">
          <h2 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-100)', display: 'flex', alignItems: 'center', gap: 8 }}>
            <Calendar size={18} color="var(--gold-400)" />
            Đặt lịch mới
          </h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text-400)', cursor: 'pointer', fontSize: 18 }}>✕</button>
        </div>

        <div style={{ display: 'grid', gap: 16 }}>
          {[
            { label: 'Tên khách hàng', key: 'client', type: 'text', placeholder: 'Nguyễn Thị...' },
            { label: 'Số điện thoại', key: 'phone', type: 'tel', placeholder: '090 xxx xxxx' },
          ].map(f => (
            <div key={f.key}>
              <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-400)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: 6 }}>{f.label}</label>
              <input className="input-field" type={f.type} placeholder={f.placeholder}
                value={(form as any)[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })} />
            </div>
          ))}

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div>
              <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-400)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: 6 }}>Dịch vụ</label>
              <select className="input-field select-field" value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                {SERVICES.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-400)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: 6 }}>Kỹ thuật viên</label>
              <select className="input-field select-field" value={form.ktv} onChange={e => setForm({ ...form, ktv: e.target.value })}>
                {KTV_LIST.map(k => <option key={k}>{k}</option>)}
              </select>
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-400)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: 6 }}>Giờ bắt đầu</label>
              <select className="input-field select-field" value={form.hour} onChange={e => setForm({ ...form, hour: e.target.value })}>
                {HOURS.map(h => <option key={h}>{h}</option>)}
              </select>
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-400)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: 6 }}>Thời lượng (giờ)</label>
              <select className="input-field select-field" value={form.duration} onChange={e => setForm({ ...form, duration: e.target.value })}>
                {['1', '1.5', '2', '2.5', '3', '4'].map(d => <option key={d}>{d} giờ</option>)}
              </select>
            </div>
          </div>

          <div style={{ padding: '10px 14px', background: 'var(--green-dim)', border: '1px solid rgba(48,209,88,0.15)', borderRadius: 'var(--r-md)', fontSize: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Info size={14} color="var(--green)" />
            <div style={{ color: 'var(--text-300)' }}>
              <span style={{ color: 'var(--green)', fontWeight: 600 }}>Khung giờ đề xuất:</span> <strong style={{ color: 'var(--text-100)' }}>13:00–15:00</strong> (Phòng trống, giảm chờ). Giảm 10%.
            </div>
          </div>

          <div>
            <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-400)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: 6 }}>Ghi chú</label>
            <textarea className="input-field" rows={2} placeholder="Ghi chú đặc biệt..." style={{ resize: 'none' }}
              value={form.note} onChange={e => setForm({ ...form, note: e.target.value })} />
          </div>

          <div className="flex gap-3">
            <button className="btn btn-secondary flex-1" onClick={onClose}>Huỷ</button>
            <button className="btn btn-primary flex-1" onClick={onClose} id="btn-confirm-booking" style={{ borderRadius: 'var(--r-md)', fontSize: 13, fontWeight: 500, justifyContent: 'center' }}>
              Xác nhận đặt lịch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SchedulingPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCell, setSelectedCell] = useState<{ hourIndex: number; roomId: string } | null>(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [hoveredBooking, setHoveredBooking] = useState<Booking | null>(null);

  const dateStr = selectedDate.toLocaleDateString('vi-VN', { weekday: 'long', day: 'numeric', month: 'numeric', year: 'numeric' });

  const getBookingsForCell = (roomId: string, hourIndex: number) =>
    mockBookings.filter(b => b.roomId === roomId && b.hourIndex === hourIndex);

  const handleCellClick = (roomId: string, hourIndex: number) => {
    const existing = getBookingsForCell(roomId, hourIndex);
    if (existing.length === 0) {
      setSelectedCell({ roomId, hourIndex });
      setShowModal(true);
    }
  };

  const totalOccupied = mockBookings.filter(b => b.status === 'occupied').length;
  const totalSlots = ROOMS.length * HOURS.length;

  return (
    <AppLayout title="Lịch hẹn & Điều phối phòng" subtitle={dateStr}>
      {showModal && (
        <BookingModal
          onClose={() => setShowModal(false)}
          hourIndex={selectedCell?.hourIndex}
          roomId={selectedCell?.roomId}
        />
      )}

      {/* Actions Bar */}
      <div className="flex gap-4 mb-6">
        <button className="btn btn-primary" style={{ flex: 1, padding: '16px', borderRadius: 'var(--r-md)', justifyContent: 'center', fontSize: 15 }}>
          <Sparkles size={18} /> Quét QR Check-in Khách Hàng (FaceID/QR)
        </button>
        <button className="btn btn-secondary" style={{ flex: 1, padding: '16px', borderRadius: 'var(--r-md)', justifyContent: 'center', fontSize: 15, background: 'rgba(190,146,77,0.1)', color: 'var(--gold-400)', border: '1px solid rgba(190,146,77,0.3)' }}>
          <Plus size={18} /> POS & Bán thêm Sản phẩm (Up-sale)
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid-4 mb-6">
        {[
          { label: 'Lịch hẹn hôm nay', value: `${mockBookings.filter(b=>b.status==='occupied').length * 3 + 7}`, icon: Calendar, color: 'var(--gold-400)' },
          { label: 'Đang phục vụ', value: `${mockBookings.filter(b=>b.status==='occupied').length}`, icon: Activity, color: 'var(--green)' },
          { label: 'Phòng đang rảnh', value: `${ROOMS.length - 4}`, icon: CheckCircle2, color: 'var(--blue)' },
          { label: 'Lượt hủy/đổi lịch', value: '3', icon: AlertTriangle, color: 'var(--amber)' },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="card animate-fade-up" style={{ animationDelay: `${i * 0.05}s`, padding: '16px 20px', borderRadius: 'var(--r-md)', background: 'var(--bg-800)', border: '1px solid var(--surface-border)' }}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="metric-label" style={{ fontSize: 11, fontWeight: 500, color: 'var(--text-400)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{item.label}</div>
                  <div style={{ fontSize: 24, fontWeight: 600, color: item.color, marginTop: 4, letterSpacing: '-0.02em' }}>{item.value}</div>
                </div>
                <div style={{ color: 'var(--text-400)', opacity: 0.8 }}><Icon size={22} strokeWidth={1.5} /></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* AI Happy Hours Banner */}
      <div style={{ padding: '12px 20px', background: 'rgba(48,209,88,0.05)', border: '1px solid rgba(48,209,88,0.15)', borderRadius: 'var(--r-md)', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 16 }} className="animate-fade-up">
        <Sparkles size={20} color="var(--green)" strokeWidth={1.5} style={{ flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--green)', marginBottom: 2 }}>Gợi ý tự động (AI Happy Hours)</div>
          <div style={{ fontSize: 12, color: 'var(--text-300)' }}>Khung giờ thấp điểm hôm nay: <strong style={{ color: 'var(--text-100)' }}>13:00–15:00</strong> còn 8 slot trống • Khuyến nghị: <strong style={{ color: 'var(--gold-400)' }}>Áp dụng ưu đãi Happy Hour giảm 10%</strong></div>
        </div>
        <button className="btn btn-success btn-sm" style={{ borderRadius: 'var(--r-sm)', fontSize: 11, padding: '6px 12px' }}>Kích hoạt</button>
      </div>
      
      {/* AI Overbooking Alert */}
      <div style={{ padding: '12px 20px', background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 'var(--r-md)', marginBottom: 24, display: 'flex', alignItems: 'flex-start', gap: 16 }} className="animate-fade-up">
        <ShieldAlert size={20} color="var(--red)" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 2 }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--red)', marginBottom: 4 }}>Cảnh báo Xung đột Lịch (Overbooking)</div>
          <div style={{ fontSize: 12, color: 'var(--text-300)' }}>Máy <strong style={{ color: 'var(--text-100)' }}>Thermage FLX</strong> đang được xếp lịch trùng lúc 14:00 (Phòng máy 1 và Phòng máy 2). Đề nghị dời lịch 1 ca sang 15:00.</div>
        </div>
        <button className="btn btn-sm" style={{ background: 'rgba(239,68,68,0.1)', color: 'var(--red)', border: 'none', borderRadius: 'var(--r-sm)', fontSize: 11, padding: '6px 12px' }}>Tự động dời lịch</button>
      </div>

      <div className="grid-2 gap-6 mb-6" style={{ gridTemplateColumns: '1fr 300px' }}>
        {/* Timeline Board */}
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div className="flex items-center justify-between" style={{ padding: '16px 20px', borderBottom: '1px solid var(--surface-border)' }}>
            <div className="card-title" style={{ marginBottom: 0 }}>
              <span className="card-title-dot" />Bảng điều phối phòng máy
            </div>
            <div className="flex gap-2">
              <button className="btn-icon" onClick={() => { const d = new Date(selectedDate); d.setDate(d.getDate()-1); setSelectedDate(d); }}><ChevronLeft size={16} /></button>
              <div style={{ padding: '6px 12px', background: 'var(--surface-1)', borderRadius: 'var(--r-md)', fontSize: 13, color: 'var(--text-200)', fontWeight: 600 }}>
                {selectedDate.toLocaleDateString('vi-VN', { day: 'numeric', month: 'numeric' })}
              </div>
              <button className="btn-icon" onClick={() => { const d = new Date(selectedDate); d.setDate(d.getDate()+1); setSelectedDate(d); }}><ChevronRight size={16} /></button>
              <button className="btn btn-primary btn-sm" onClick={() => { setSelectedCell(null); setShowModal(true); }} id="btn-new-booking">
                <Plus size={14} /> Đặt lịch
              </button>
            </div>
          </div>

          <div className="timeline-wrap">
            <div className="timeline-grid">
              {/* Header */}
              <div className="timeline-header">
                <div className="timeline-time-cell" style={{ textAlign: 'left', paddingLeft: 16 }}>Phòng</div>
                {HOURS.map(h => <div key={h} className="timeline-time-cell">{h}</div>)}
              </div>

              {/* Rows */}
              {ROOMS.map(room => (
                <div key={room.id} className="timeline-row">
                  <div className="timeline-room-label" style={{ 
                    borderLeft: `4px solid ${
                      room.current_status === 'in_use' ? 'var(--red)' : 
                      room.current_status === 'cleaning' ? 'var(--amber)' : 
                      room.current_status === 'maintenance' ? 'var(--text-400)' : 'var(--green)'
                    }`
                  }}>
                    <div className="timeline-room-name" style={{ display: 'flex', justifyContent: 'space-between' }}>
                       {room.name}
                       {room.current_status === 'in_use' && <span style={{ fontSize: 9, padding: '2px 4px', background: 'var(--red)', color: 'white', borderRadius: 4 }}>Live 12:45</span>}
                       {room.current_status === 'cleaning' && <span style={{ fontSize: 9, padding: '2px 4px', background: 'var(--amber)', color: 'black', borderRadius: 4 }}>Dọn 05:00</span>}
                    </div>
                    <div className="timeline-room-type">{room.type}</div>
                    <div style={{ fontSize: 10, color: 'var(--text-500)', marginTop: 2, display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span>{room.floor}</span>
                      {room.id === 'r1' && <span title="IoT Online"><Wifi size={10} color="var(--green)" /></span>}
                      {room.id === 'r1' && <span title="24°C"><Thermometer size={10} color="var(--gold-400)" /></span>}
                    </div>
                  </div>
                  {HOURS.map((h, hIdx) => {
                    const bookings = getBookingsForCell(room.id, hIdx);
                    const booking = bookings[0];
                    return (
                      <div key={hIdx} className="timeline-cell" onClick={() => handleCellClick(room.id, hIdx)}>
                        {booking ? (
                          <div
                            className={`booking-block ${booking.status}`}
                            title={`${booking.clientName} - ${booking.service}`}
                            onMouseEnter={() => setHoveredBooking(booking)}
                            onMouseLeave={() => setHoveredBooking(null)}
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, height: '100%', fontSize: 10 }}
                          >
                            {booking.status === 'maintenance' ? (
                              <><Wrench size={10} /> <span>BT</span></>
                            ) : booking.status === 'waiting_prep' ? (
                              <><Coffee size={10} /> <span>Chuẩn bị</span></>
                            ) : (
                              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                                  <User size={10} /> <span>{booking.clientName.split(' ').pop()}</span>
                                </div>
                                {booking.eMedicalStatus === 'completed' && <div style={{ fontSize: 8, color: 'var(--green)', opacity: 0.8, marginTop: 2, transform: 'scale(0.9)' }}>[E-Med: ✔]</div>}
                              </div>
                            )}
                          </div>
                        ) : (
                          <div style={{ width: '100%', height: '100%', borderRadius: 4, opacity: 0 }} className="timeline-cell-hover" />
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex gap-4" style={{ padding: '12px 20px', borderTop: '1px solid var(--surface-border)', overflowX: 'auto' }}>
            {[['Đang phục vụ', 'red'], ['Chờ KTV chuẩn bị', 'purple'], ['Đang rảnh', 'green'], ['Bảo trì', 'amber']].map(([label, color]) => (
              <div key={label} className="flex items-center gap-2" style={{ fontSize: 12, color: 'var(--text-400)', whiteSpace: 'nowrap' }}>
                <div style={{ width: 10, height: 10, borderRadius: 2, background: `var(--${color})`, opacity: 0.7 }} />
                {label}
              </div>
            ))}
            <div style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--text-400)', display: 'flex', alignItems: 'center', gap: 4 }}>
              <Info size={12} style={{ color: 'var(--gold-400)' }} />
              <span>Click ô trống để đặt lịch mới</span>
            </div>
          </div>
        </div>

        {/* KTV Status Panel */}
        <div className="card">
          <div className="card-title"><span className="card-title-dot" />Trạng thái KTV hôm nay</div>
          {KTV_STATUS.map((ktv, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: i < KTV_STATUS.length - 1 ? '1px solid rgba(255,255,255,0.02)' : 'none' }}>
              <div style={{ width: 30, height: 30, borderRadius: 'var(--r-sm)', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--surface-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 600, color: 'var(--gold-400)', flexShrink: 0 }}>
                {ktv.name.replace('KTV ', '').charAt(0)}
              </div>
              <div style={{ flex: 1, overflow: 'hidden' }}>
                <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-200)' }}>{ktv.name}</div>
                <div style={{ fontSize: 11, color: 'var(--text-500)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {ktv.room !== '—' ? `KTV ${ktv.room} · ${ktv.client.split(' ').pop()}` : 'Sẵn sàng phục vụ'}
                </div>
              </div>
              <span className={`badge badge-${ktv.status === 'Đang phục vụ' ? 'green' : ktv.status === 'Nghỉ giải lao' ? 'amber' : 'blue'}`} style={{ padding: '2px 8px', fontSize: 10 }}>
                {ktv.status === 'Đang phục vụ' ? <Activity size={10} /> : ktv.status === 'Nghỉ giải lao' ? <Coffee size={10} /> : <Check size={10} />}
                &nbsp;{ktv.status === 'Đang phục vụ' ? 'Bận' : ktv.status === 'Nghỉ giải lao' ? 'Nghỉ' : 'Rảnh'}
              </span>
            </div>
          ))}

          <div style={{ marginTop: 16, padding: 12, background: 'var(--surface-1)', borderRadius: 'var(--r-md)', border: '1px solid var(--surface-border)' }}>
            <div style={{ fontSize: 11, color: 'var(--text-400)', marginBottom: 8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Năng suất hôm nay</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
              <span style={{ color: 'var(--text-300)' }}>Đang làm việc</span>
              <span style={{ color: 'var(--green)', fontWeight: 700 }}>3/6 KTV</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginTop: 6 }}>
              <span style={{ color: 'var(--text-300)' }}>TB ca/KTV</span>
              <span style={{ color: 'var(--gold-400)', fontWeight: 700 }}>4.2 ca</span>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
