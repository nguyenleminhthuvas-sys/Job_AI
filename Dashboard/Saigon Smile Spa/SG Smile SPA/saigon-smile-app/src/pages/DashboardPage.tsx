import React, { useState, useEffect, useMemo } from 'react';
import AppLayout from '../components/AppLayout';
import { useAuth } from '../AuthContext';
import { getKpiData, getTransactions } from '../lib/dataAccess';
import { 
  Users, DollarSign, Activity, ChevronDown, 
  ArrowRight, MoreHorizontal, Calendar, 
  Sparkles, Stethoscope, Droplets 
} from 'lucide-react';

// Format helper
const fmt = (n: number) => {
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(1)}B`;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  return n.toLocaleString('en-US');
};

export default function DashboardPage() {
  const { user } = useAuth();
  const [animated, setAnimated] = useState(false);
  const kpi = useMemo(() => user ? getKpiData(user) : null, [user]);

  useEffect(() => { setTimeout(() => setAnimated(true), 150); }, []);

  return (
    <AppLayout>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        
        {/* PAGE HEADER */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 32 }}>
          <h1 className="font-serif" style={{ fontSize: 36, fontWeight: 500, color: 'var(--text-100)', letterSpacing: '-0.02em', lineHeight: 1 }}>
            Medical dashboard
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ 
              display: 'flex', alignItems: 'center', gap: 12, 
              padding: '10px 16px', background: 'var(--bg-800)', 
              borderRadius: 'var(--r-md)', border: '1px solid var(--surface-border)',
              color: 'var(--text-300)', fontSize: 14, cursor: 'pointer', boxShadow: 'var(--shadow-sm)'
            }}>
              <Calendar size={18} />
              <span>10/1/2023</span>
              <ChevronDown size={16} />
            </div>
            <button className="btn btn-primary" style={{ padding: '10px 24px', borderRadius: 'var(--r-md)' }}>
              Quick action
            </button>
          </div>
        </div>

        {/* TOP SECTION: Grid Layout matching the mockup */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginBottom: 32 }}>
          
          {/* LEFT 3 COLUMNS: KPI Cards */}
          <div style={{ gridColumn: 'span 3', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            
            {/* ROW 1 */}
            <div className="card animate-fade-up stagger-1" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <div className="kpi-value">20</div>
                <Users size={28} color="var(--gold-400)" strokeWidth={1.5} style={{ opacity: 0.8 }} />
              </div>
              <div className="kpi-label">New patients</div>
            </div>

            <div className="card animate-fade-up stagger-2" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className="kpi-value" style={{ fontSize: 46 }}>${fmt(kpi?.doanhThuHomNay || 1800000000)}</div>
              <div className="kpi-label">Revenue</div>
            </div>

            <div className="card animate-fade-up stagger-3" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -30, right: -20, opacity: 0.1 }}>
                 <Sparkles size={120} color="var(--gold-400)" />
              </div>
              <div className="kpi-value">84</div>
              <div className="kpi-label">Procedures</div>
            </div>

            {/* ROW 2 */}
            <div className="card animate-fade-up stagger-2" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ marginBottom: 16, width: 36, height: 36, borderRadius: 12, background: 'var(--gold-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-500)' }}>
                <Activity size={20} strokeWidth={1.5} />
              </div>
              <div className="kpi-value" style={{ fontSize: 36 }}>25</div>
              <div className="kpi-label">Reduction Count</div>
            </div>

            <div className="card animate-fade-up stagger-3" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ marginBottom: 16, width: 36, height: 36, borderRadius: 12, background: 'var(--gold-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-500)' }}>
                <Sparkles size={20} strokeWidth={1.5} />
              </div>
              <div className="kpi-value" style={{ fontSize: 36 }}>40</div>
              <div className="kpi-label">Rejuvenation</div>
            </div>

            <div className="card animate-fade-up stagger-4" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ marginBottom: 16, width: 36, height: 36, borderRadius: 12, background: 'var(--gold-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-500)' }}>
                <Stethoscope size={20} strokeWidth={1.5} />
              </div>
              <div className="kpi-value" style={{ fontSize: 36 }}>53</div>
              <div className="kpi-label">Rejuvenation Count</div>
            </div>
            
          </div>

          {/* RIGHT 1 COLUMN: Featured Image Card */}
          <div className="card animate-fade-up stagger-4" style={{ 
            gridColumn: 'span 1', padding: 0, overflow: 'hidden', position: 'relative', 
            background: 'var(--gold-200)', display: 'flex', flexDirection: 'column',
            boxShadow: '0 20px 40px rgba(197, 138, 77, 0.15)', border: 'none'
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(243,232,216,1) 100%)', zIndex: 1 }} />
            <img 
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80" 
              alt="Spa Model" 
              style={{ width: '100%', height: '70%', objectFit: 'cover', position: 'relative', zIndex: 0 }}
            />
            <div style={{ padding: 24, position: 'relative', zIndex: 2, marginTop: 'auto' }}>
              <h2 className="font-serif" style={{ fontSize: 26, fontWeight: 500, color: 'var(--text-100)', lineHeight: 1.2 }}>
                Saigon Smile<br/>Medical
              </h2>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          
          {/* Client Management Table */}
          <div className="animate-fade-up stagger-3">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 500, color: 'var(--text-100)' }}>
                Client management
              </h2>
              <button className="btn btn-primary" style={{ padding: '8px 16px', borderRadius: 'var(--r-md)' }}>
                Quick action
              </button>
            </div>
            
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <table className="data-table">
                <thead style={{ background: 'var(--bg-800)' }}>
                  <tr>
                    <th style={{ width: 40, paddingLeft: 24 }}>
                      <input type="checkbox" style={{ accentColor: 'var(--gold-400)' }} />
                    </th>
                    <th>Client</th>
                    <th>Date lite</th>
                    <th>Revenue</th>
                    <th>Status</th>
                    <th style={{ width: 40 }}></th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Nguyễn Linh', sub: 'Sandorurean', date: '03/2023', rev: '2.88', status: 138, active: true },
                    { name: 'Thanh Thang', sub: 'Sando:urean', date: '03/2023', rev: '2.64', status: 128 },
                    { name: 'Nganh Linh', sub: 'Major Son', date: '03/2023', rev: '2.06', status: 77 },
                  ].map((client, i) => (
                    <tr key={i} style={{ background: client.active ? 'var(--gold-100)' : 'transparent' }}>
                      <td style={{ paddingLeft: 24 }}>
                        <input type="checkbox" style={{ accentColor: 'var(--gold-400)' }} />
                      </td>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                          <img 
                            src={`https://i.pravatar.cc/150?u=${client.name}`} 
                            alt={client.name} 
                            style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover' }}
                          />
                          <div>
                            <div style={{ fontWeight: 600, color: 'var(--text-100)', fontSize: 14 }}>{client.name}</div>
                            <div style={{ fontSize: 12, color: 'var(--text-400)' }}>{client.sub}</div>
                          </div>
                        </div>
                      </td>
                      <td style={{ color: 'var(--text-300)' }}>{client.date}</td>
                      <td style={{ fontWeight: 500 }}>{client.rev}</td>
                      <td style={{ fontWeight: 500 }}>{client.status}</td>
                      <td style={{ color: 'var(--text-400)', cursor: 'pointer' }}>
                        <MoreHorizontal size={18} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{ padding: 16, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, borderTop: '1px solid var(--surface-border)' }}>
                <span style={{ color: 'var(--text-400)', cursor: 'pointer' }}>&lt;</span>
                <span style={{ fontSize: 13, fontWeight: 600 }}>1/2</span>
                <span style={{ color: 'var(--text-400)', cursor: 'pointer' }}>&gt;</span>
              </div>
            </div>
          </div>

          {/* Service Management Cards */}
          <div className="animate-fade-up stagger-4">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 500, color: 'var(--text-100)' }}>
                Service management
              </h2>
              <button className="btn btn-secondary" style={{ padding: '8px 16px', borderRadius: 'var(--r-md)', background: 'var(--gold-400)', color: 'white', border: 'none' }}>
                View procedure
              </button>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {[
                { 
                  title: 'Laser Device', 
                  desc: 'Professional high quality laser venators.', 
                  img: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=400&q=80' // Placeholder for device
                },
                { 
                  title: 'Skin Treatment', 
                  desc: 'Sansrøxeitin reduction, skin tsaome focus...', 
                  img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71c9?auto=format&fit=crop&w=400&q=80'
                },
                { 
                  title: 'Skin Treatment', 
                  desc: 'Brash opair treatment, with roctor spiniscing...', 
                  img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=400&q=80'
                }
              ].map((svc, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ 
                    borderRadius: 'var(--r-lg)', overflow: 'hidden', height: 160,
                    boxShadow: 'var(--shadow-sm)', border: '1px solid rgba(0,0,0,0.02)'
                  }}>
                    <img src={svc.img} alt={svc.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-100)', marginBottom: 4 }}>{svc.title}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-400)', lineHeight: 1.4 }}>{svc.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </AppLayout>
  );
}
