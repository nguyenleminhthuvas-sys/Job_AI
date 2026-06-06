import { useState } from 'react';
import { mockPatients } from '../data';
import { Home, Calendar, FileText, CreditCard, User, Sparkles, ChevronRight, Gift, QrCode, ArrowRight, Activity, ScanFace, Image as ImageIcon } from 'lucide-react';

const currentCustomer = mockPatients[0]; // Nguyễn Thị Lan - Diamond

export default function CustomerApp() {
  const [activeTab, setActiveTab] = useState<'home' | 'booking' | 'medical' | 'loyalty'>('home');

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: 'var(--bg-900)' }}>
      {/* Mobile Device Mockup */}
      <div style={{ width: 400, height: 800, background: '#000000', borderRadius: 40, border: '8px solid #333', overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
        
        {/* Dynamic Island */}
        <div style={{ position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)', width: 120, height: 32, background: 'black', borderRadius: 16, zIndex: 100 }}></div>

        {/* Header */}
        <div style={{ padding: '48px 24px 20px', background: 'linear-gradient(180deg, rgba(20,20,22,0.8) 0%, rgba(0,0,0,0) 100%)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, #D4AF37, #8B6508)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 600, fontSize: 18, boxShadow: '0 4px 10px rgba(212,175,55,0.3)' }}>
                {currentCustomer.name.charAt(0)}
              </div>
              <div>
                <div style={{ fontSize: 13, color: 'var(--text-400)', letterSpacing: '0.2px' }}>Xin chào,</div>
                <div style={{ fontSize: 17, fontWeight: 700, color: 'white', letterSpacing: '-0.3px' }}>{currentCustomer.name}</div>
              </div>
            </div>
            <button style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--surface-1)', border: '1px solid var(--surface-border)', color: 'var(--text-100)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ScanFace size={20} />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '0 24px 100px' }}>
          
          {activeTab === 'home' && (
            <div className="animate-fade-in">
              {/* Loyalty VIP Card */}
              <div style={{ 
                background: 'linear-gradient(135deg, #2C2C2E 0%, #1C1C1E 100%)', 
                borderRadius: 24, 
                padding: 24, 
                border: '1px solid rgba(255,255,255,0.08)', 
                marginBottom: 24, 
                position: 'relative', 
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)' 
              }}>
                <div style={{ position: 'absolute', top: -50, right: -50, width: 150, height: 150, background: 'radial-gradient(circle, rgba(212,175,55,0.2) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%' }}></div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
                  <div style={{ fontSize: 18, fontWeight: 700, color: '#D4AF37', letterSpacing: '2px', textTransform: 'uppercase' }}>{currentCustomer.loyaltyTier}</div>
                  <Sparkles size={20} color="#D4AF37" />
                </div>
                
                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontSize: 12, color: 'var(--text-400)', textTransform: 'uppercase', letterSpacing: '1px' }}>Điểm tích luỹ</div>
                  <div style={{ fontSize: 32, fontWeight: 700, color: 'white', letterSpacing: '-1px' }}>{currentCustomer.loyaltyPoints.toLocaleString()} <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-400)', letterSpacing: '0' }}>SG Point</span></div>
                </div>

                <div style={{ display: 'flex', gap: 12 }}>
                  <button className="btn btn-primary" style={{ flex: 1, justifyContent: 'center', borderRadius: 12 }}><QrCode size={16} /> Mã Check-in</button>
                  <button className="btn btn-secondary" style={{ flex: 1, justifyContent: 'center', borderRadius: 12 }}><CreditCard size={16} /> Thanh toán</button>
                </div>
              </div>

              {/* Package Wallet Card (Apple Wallet Style) */}
              <div style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(0,0,0,0) 100%)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderRadius: 24, padding: 20, border: '1px solid rgba(212,175,55,0.2)', marginBottom: 24, position: 'relative', overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                   <div style={{ fontSize: 16, fontWeight: 600, color: 'white', letterSpacing: '-0.2px' }}>Ví Liệu Trình</div>
                   <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Hết hạn: 31/12/2026</div>
                </div>
                <div style={{ fontSize: 22, fontWeight: 700, color: '#D4AF37', marginBottom: 4, letterSpacing: '-0.5px' }}>{currentCustomer.package}</div>
                
                <div style={{ marginTop: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'rgba(255,255,255,0.8)', marginBottom: 6 }}>
                    <span>Đã dùng: {currentCustomer.sessions - currentCustomer.sessionsLeft}/{currentCustomer.sessions}</span>
                    <span style={{ fontWeight: 600, color: currentCustomer.sessionsLeft === 1 ? '#fca5a5' : 'white' }}>Còn lại: {currentCustomer.sessionsLeft} buổi</span>
                  </div>
                  <div style={{ width: '100%', height: 6, background: 'rgba(0,0,0,0.3)', borderRadius: 3, overflow: 'hidden' }}>
                    <div style={{ width: `${((currentCustomer.sessions - currentCustomer.sessionsLeft) / currentCustomer.sessions) * 100}%`, height: '100%', background: 'white', borderRadius: 3 }}></div>
                  </div>
                </div>
              </div>

              {/* Up-next Booking */}
              <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-100)', marginBottom: 12 }}>Lịch hẹn sắp tới</div>
              <div style={{ background: 'rgba(59,130,246,0.05)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: 16, padding: 16, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--blue)', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', lineHeight: 1.2 }}>
                  <div style={{ fontSize: 12, fontWeight: 500 }}>Thg 6</div>
                  <div style={{ fontSize: 18, fontWeight: 700 }}>12</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-100)' }}>Thermage FLX - Buổi 5</div>
                  <div style={{ fontSize: 13, color: 'var(--text-400)', marginTop: 2 }}>14:00 • CN Kim Mã</div>
                </div>
                <ChevronRight size={20} color="var(--text-400)" />
              </div>

              {/* Affiliate Banner */}
              <div style={{ background: 'var(--surface-1)', border: '1px solid var(--surface-border)', borderRadius: 16, padding: 16, display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(34,197,94,0.1)', color: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Gift size={20} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-100)' }}>Mời bạn bè, Nhận 500k</div>
                  <div style={{ fontSize: 12, color: 'var(--text-400)', marginTop: 2 }}>Mã của bạn: <strong style={{ color: 'var(--green)' }}>{currentCustomer.affiliateCode}</strong></div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'medical' && (
            <div className="animate-fade-in">
              <div style={{ fontSize: 22, fontWeight: 600, color: 'var(--text-100)', marginBottom: 20 }}>Hồ sơ Y tế (E-Medical)</div>
              
              <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
                <div style={{ flex: 1, padding: 16, background: 'var(--surface-1)', borderRadius: 16, border: '1px solid var(--surface-border)' }}>
                  <Activity size={20} color="var(--blue)" style={{ marginBottom: 8 }} />
                  <div style={{ fontSize: 12, color: 'var(--text-400)' }}>Tình trạng da</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-100)' }}>{currentCustomer.skinType}</div>
                </div>
                <div style={{ flex: 1, padding: 16, background: 'rgba(34,197,94,0.05)', borderRadius: 16, border: '1px solid rgba(34,197,94,0.2)' }}>
                  <FileText size={20} color="var(--green)" style={{ marginBottom: 8 }} />
                  <div style={{ fontSize: 12, color: 'var(--text-400)' }}>Dị ứng</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--green)' }}>{currentCustomer.allergy}</div>
                </div>
              </div>

              <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-100)', marginBottom: 12 }}>Nhật ký Before / After</div>
              <div style={{ height: 200, borderRadius: 16, background: 'linear-gradient(135deg, #2c2c2e, #1c1c1e)', border: '1px solid var(--surface-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: 'var(--text-400)', position: 'relative', overflow: 'hidden' }}>
                 <div style={{ position: 'absolute', left: 0, width: '50%', height: '100%', borderRight: '2px solid white', background: 'rgba(255,255,255,0.05)' }}>
                    <span style={{ position: 'absolute', bottom: 12, left: 12, fontSize: 10, background: 'rgba(0,0,0,0.5)', padding: '2px 6px', borderRadius: 4, color: 'white' }}>BEFORE</span>
                 </div>
                 <span style={{ position: 'absolute', bottom: 12, right: 12, fontSize: 10, background: 'rgba(0,0,0,0.5)', padding: '2px 6px', borderRadius: 4, color: 'white' }}>AFTER</span>
                 <ImageIcon size={32} style={{ marginBottom: 8, opacity: 0.5 }} />
                 <span style={{ fontSize: 12 }}>Kéo để so sánh hình ảnh</span>
              </div>
            </div>
          )}

          {activeTab === 'booking' && (
            <div className="animate-fade-in" style={{ paddingBottom: 120 }}>
              {/* Header Large Title */}
              <div style={{ fontSize: 34, fontWeight: 700, color: 'var(--text-100)', marginBottom: 24, letterSpacing: '-0.5px' }}>Đặt lịch hẹn</div>
              
              {/* Section 1: Bác sĩ / KTV yêu thích */}
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 17, fontWeight: 600, color: 'var(--text-100)', marginBottom: 16 }}>Bác sĩ của bạn</div>
                <div style={{ display: 'flex', gap: 16, overflowX: 'auto', paddingBottom: 8 }}>
                  {['BS. Nguyễn Tuấn', 'BS. Hoàng Yến', 'KTV. Linh Phạm'].map((doc, i) => (
                    <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, minWidth: 72 }}>
                      <div style={{ width: 64, height: 64, borderRadius: '50%', padding: 2, background: i === 0 ? 'linear-gradient(135deg, #D4AF37, #F3E5AB)' : 'var(--surface-border)' }}>
                        <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'var(--bg-800)', border: '2px solid var(--bg-950)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-400)', fontSize: 20, fontWeight: 600 }}>
                          {doc.split(' ')[1].charAt(0)}
                        </div>
                      </div>
                      <div style={{ fontSize: 12, fontWeight: i === 0 ? 600 : 400, color: i === 0 ? 'var(--text-100)' : 'var(--text-400)', textAlign: 'center', whiteSpace: 'nowrap' }}>{doc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 2: Dịch vụ & Liệu trình (Glass Card) */}
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 17, fontWeight: 600, color: 'var(--text-100)', marginBottom: 16 }}>Liệu trình tiếp theo</div>
                <div style={{ 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  backdropFilter: 'blur(20px)', 
                  WebkitBackdropFilter: 'blur(20px)',
                  borderRadius: 20, 
                  padding: 16, 
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div style={{ width: 60, height: 60, borderRadius: 12, background: 'rgba(212, 175, 55, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37' }}>
                      <Sparkles size={28} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-100)', marginBottom: 4 }}>Thermage FLX</div>
                      <div style={{ fontSize: 13, color: 'var(--text-400)' }}>Trẻ hóa da chuyên sâu • 60 phút</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: Lịch (Horizontal Calendar) */}
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 17, fontWeight: 600, color: 'var(--text-100)', marginBottom: 16 }}>Chọn ngày</div>
                <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 8 }}>
                  {[
                    { day: 'Th 2', date: '12' },
                    { day: 'Th 3', date: '13', active: true },
                    { day: 'Th 4', date: '14' },
                    { day: 'Th 5', date: '15' },
                    { day: 'Th 6', date: '16' }
                  ].map((d, i) => (
                    <div key={i} style={{ 
                      minWidth: 56, 
                      padding: '12px 0', 
                      borderRadius: 16, 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      gap: 4,
                      background: d.active ? 'rgba(212, 175, 55, 0.15)' : 'transparent',
                      border: d.active ? '1px solid rgba(212, 175, 55, 0.5)' : '1px solid transparent'
                    }}>
                      <div style={{ fontSize: 12, color: d.active ? '#D4AF37' : 'var(--text-400)' }}>{d.day}</div>
                      <div style={{ fontSize: 18, fontWeight: 600, color: d.active ? '#D4AF37' : 'var(--text-100)' }}>{d.date}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 4: Khung giờ trống (Time Slots) */}
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 17, fontWeight: 600, color: 'var(--text-100)', marginBottom: 16 }}>Khung giờ</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
                  {['09:00', '10:30', '14:00', '15:30', '17:00', '18:30'].map((time, i) => (
                    <div key={i} style={{
                      padding: '12px 0',
                      borderRadius: 12,
                      textAlign: 'center',
                      fontSize: 15,
                      fontWeight: 500,
                      background: i === 2 ? '#D4AF37' : 'rgba(255,255,255,0.05)',
                      color: i === 2 ? '#000' : (i === 1 || i === 4 ? 'rgba(255,255,255,0.3)' : 'var(--text-100)'),
                      border: '1px solid',
                      borderColor: i === 2 ? '#D4AF37' : 'rgba(255,255,255,0.1)',
                      pointerEvents: (i === 1 || i === 4) ? 'none' : 'auto'
                    }}>
                      {time}
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Action Button (FAB) */}
              <div style={{ 
                position: 'absolute', 
                bottom: 100, 
                left: 24, 
                right: 24, 
                background: 'rgba(20, 20, 22, 0.7)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                padding: '16px',
                borderRadius: 24,
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
              }}>
                <div>
                  <div style={{ fontSize: 13, color: 'var(--text-400)' }}>Tổng thanh toán</div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-100)' }}>Đã cấn trừ gói</div>
                </div>
                <button style={{ 
                  background: '#D4AF37', 
                  color: 'black', 
                  border: 'none', 
                  padding: '12px 24px', 
                  borderRadius: 100, 
                  fontSize: 16, 
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8
                }}>
                  Xác nhận <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Bottom Navigation */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 85, background: 'rgba(10,10,12,0.65)', backdropFilter: 'saturate(180%) blur(20px)', WebkitBackdropFilter: 'saturate(180%) blur(20px)', borderTop: '0.5px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingBottom: 20 }}>
          {[
            { id: 'home', icon: Home, label: 'Trang chủ' },
            { id: 'booking', icon: Calendar, label: 'Đặt lịch' },
            { id: 'medical', icon: FileText, label: 'E-Medical' },
            { id: 'loyalty', icon: User, label: 'Cá nhân' },
          ].map(tab => (
            <div key={tab.id} onClick={() => setActiveTab(tab.id as any)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, color: activeTab === tab.id ? 'var(--gold-400)' : 'var(--text-400)', cursor: 'pointer' }}>
              <tab.icon size={24} />
              <span style={{ fontSize: 10, fontWeight: 500 }}>{tab.label}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
