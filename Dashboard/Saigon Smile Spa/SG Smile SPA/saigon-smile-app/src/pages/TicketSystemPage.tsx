import React, { useState } from 'react';
import { AlertOctagon, AlertTriangle, CheckCircle, Clock, Info, ShieldAlert, ArrowRight } from 'lucide-react';
import { mockTickets, Ticket } from '../data';

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'critical': return 'var(--red)';
    case 'high': return '#f97316'; // orange-500
    case 'medium': return 'var(--amber)';
    case 'low': return 'var(--text-400)';
    default: return 'var(--text-400)';
  }
};

const getCategoryLabel = (category: string) => {
  switch (category) {
    case 'medical_incident': return 'Sự cố Y khoa';
    case 'service_quality': return 'Chất lượng Dịch vụ';
    case 'staff_attitude': return 'Thái độ Nhân viên';
    case 'facility': return 'Cơ sở vật chất';
    default: return category;
  }
};

export const TicketSystemPage: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>(mockTickets);
  
  // Sort tickets: Critical always on top
  const sortedTickets = [...tickets].sort((a, b) => {
    if (a.severity_level === 'critical' && b.severity_level !== 'critical') return -1;
    if (a.severity_level !== 'critical' && b.severity_level === 'critical') return 1;
    return 0;
  });

  const columns = [
    { id: 'open', title: 'Mới Nhận (Open)' },
    { id: 'investigating', title: 'Đang Xử Lý (Investigating)' },
    { id: 'resolved', title: 'Đã Chốt (Resolved)' },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--text-100)] mb-1 flex items-center gap-2">
            <ShieldAlert className="text-[var(--red)]" /> Hệ Thống Khiếu Nại & Khủng Hoảng
          </h1>
          <p className="text-sm text-[var(--text-400)]">Bảo vệ uy tín thương hiệu, xử lý lập tức các sự cố cấp độ Critical.</p>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-primary bg-[var(--red)] border-[var(--red)] hover:bg-red-600 text-white flex items-center gap-2">
            <AlertOctagon size={16} /> Tạo Cảnh Báo Đỏ
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {columns.map(col => (
          <div key={col.id} className="bg-[var(--bg-800)] border border-[var(--surface-border)] rounded-[var(--r-md)] p-4 min-h-[500px]">
            <div className="flex justify-between items-center mb-4 border-b border-[var(--surface-border)] pb-2">
              <h3 className="font-semibold text-[var(--text-100)]">{col.title}</h3>
              <span className="bg-[var(--surface-1)] text-[var(--text-400)] text-xs px-2 py-1 rounded-full">
                {sortedTickets.filter(t => t.status === col.id).length}
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {sortedTickets.filter(t => t.status === col.id).map(ticket => (
                <div 
                  key={ticket.ticket_id} 
                  className={`p-3 rounded-[var(--r-sm)] border cursor-pointer hover:opacity-80 transition-opacity
                    ${ticket.severity_level === 'critical' 
                      ? 'bg-[rgba(239,68,68,0.1)] border-[var(--red)] shadow-[0_0_10px_rgba(239,68,68,0.2)]' 
                      : 'bg-[var(--surface-1)] border-[var(--surface-border)]'}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-mono text-[var(--text-400)]">#{ticket.ticket_id}</span>
                    <span 
                      className="text-xs font-semibold px-2 py-0.5 rounded-sm"
                      style={{ 
                        color: getSeverityColor(ticket.severity_level),
                        backgroundColor: `${getSeverityColor(ticket.severity_level)}20`
                      }}
                    >
                      {ticket.severity_level.toUpperCase()}
                    </span>
                  </div>
                  
                  <h4 className="font-semibold text-[var(--text-100)] mb-1 text-sm">{getCategoryLabel(ticket.issue_category)}</h4>
                  <p className="text-xs text-[var(--text-300)] mb-3 line-clamp-2">{ticket.description}</p>
                  
                  <div className="flex justify-between items-center text-xs border-t border-[var(--surface-border)] pt-2">
                    <div className="flex items-center gap-1 text-[var(--text-400)]">
                      <Clock size={12} /> {ticket.created_at}
                    </div>
                    <div className="text-[var(--text-200)] truncate max-w-[100px]">
                      {ticket.assigned_to}
                    </div>
                  </div>

                  {ticket.severity_level === 'critical' && ticket.status === 'open' && (
                    <div className="mt-2 text-xs text-[var(--red)] flex items-center gap-1 bg-[rgba(239,68,68,0.15)] p-1 rounded">
                      <AlertTriangle size={12} /> Cảnh báo: Sắp vi phạm SLA (2h)
                    </div>
                  )}
                  {ticket.status === 'resolved' && (
                    <div className="mt-2 text-xs text-[var(--green)] flex items-center gap-1 bg-[rgba(34,197,94,0.1)] p-1 rounded">
                      <CheckCircle size={12} /> Auto-Apology sent
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
