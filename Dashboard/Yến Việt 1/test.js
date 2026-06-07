
    // --- Data ---
    const periodData = {
      thang: {
        label: 'Tháng này',
        revenue: { val: 25.4, target: 26.0, pct: 97.7, trend: [18.5,19.2,21.0,22.5,24.0,25.4], badge: 'ĐẠT', color: 'navy', class: 'dat' },
        margin:  { val: 45.0, target: 48.0, diff: 'Hụt 3,0', trend: [42,44,44,45,47,45], badge: 'CHÚ Ý', color: 'amber', class: 'chu_y' },
        mom: '+12,2%', yoy: '+18,5%',
        ebitda: { val: 3.7, margin: 14.8, progress: 74 },
        channel: { total: 25.4, offline: 47.2, shopee: 23.6, tiktok: 19.7, b2b: 9.5 },
        ccc: { days: 42, dio: 28, dso: 22, dpo: 8, sub: 'Cải thiện từ 47 ngày ↓', badge: 'CHÚ Ý', color: 'amber', class: 'chu_y' },
        otif: 94.2, coverage: 81
      },
      qtd: {
        label: 'QTD',
        revenue: { val: 71.2, target: 78.0, pct: 91.3, trend: [22.1,23.7,25.4,0,0,0], badge: 'CHÚ Ý', color: 'amber', class: 'chu_y' },
        margin:  { val: 44.5, target: 48.0, diff: 'Hụt 3,5', trend: [43,44,45,44.5,0,0], badge: 'CHÚ Ý', color: 'amber', class: 'chu_y' },
        mom: '+8,5%', yoy: '+15,2%',
        ebitda: { val: 10.2, margin: 14.3, progress: 71.5 },
        channel: { total: 71.2, offline: 46.3, shopee: 24.5, tiktok: 20.0, b2b: 9.2 },
        ccc: { days: 45, dio: 30, dso: 23, dpo: 8, sub: 'Xấu đi từ 42 ngày ↑', badge: 'CHÚ Ý', color: 'amber', class: 'chu_y' },
        otif: 93.1, coverage: 79
      },
      ytd: {
        label: 'YTD',
        revenue: { val: 138.5, target: 156.0, pct: 88.8, trend: [18.5,19.2,21.0,22.5,24.0,33.3], badge: 'CHÚ Ý', color: 'amber', class: 'chu_y' },
        margin:  { val: 43.8, target: 48.0, diff: 'Hụt 4,2', trend: [42,43,44,44,45,43.8], badge: 'NGUY HIỂM', color: 'red', class: 'nguy_hiem' },
        mom: '+5,2%', yoy: '+22,1%',
        ebitda: { val: 19.8, margin: 14.3, progress: 71.5 },
        channel: { total: 138.5, offline: 46.9, shopee: 24.2, tiktok: 19.5, b2b: 9.4 },
        ccc: { days: 44, dio: 29, dso: 23, dpo: 8, sub: 'Target ≤ 35 ngày', badge: 'CHÚ Ý', color: 'amber', class: 'chu_y' },
        otif: 92.8, coverage: 77
      }
    };

    // --- Chart Plugins & Configs ---
    Chart.defaults.font.family = "'Be Vietnam Pro', sans-serif";
    Chart.defaults.color = '#888';

    const tooltipConfig = {
      backgroundColor: '#134686',
      titleColor: '#FDF4E3',
      bodyColor: '#FFFFFF',
      cornerRadius: 8,
      padding: 10
    };

    const needlePlugin = {
      id: 'needle',
      afterDatasetsDraw(chart) {
        const { ctx } = chart;
        const meta = chart.getDatasetMeta(0);
        if (!meta.data.length) return;
        const arc = meta.data[0];
        const { x, y } = arc;
        const innerR = arc.innerRadius;
        const outerR = arc.outerRadius;
        const needleLen = innerR + (outerR - innerR) * 0.7;
        const value = 0.8, min = 0, max = 5;
        const angle = Math.PI * (-1 + (value - min) / (max - min));
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(0, -3);
        ctx.lineTo(needleLen, 0);
        ctx.lineTo(0, 3);
        ctx.closePath();
        ctx.fillStyle = '#333';
        ctx.fill();
        ctx.rotate(-angle);
        ctx.beginPath();
        ctx.arc(0, 0, 8, 0, Math.PI * 2);
        ctx.fillStyle = '#333';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(0, 0, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();
        ctx.restore();
      }
    };

    let revChartInstance = null;
    let marginChartInstance = null;
    let gaugeChartInstance = null;

    function initCharts(periodKey) {
      const data = periodData[periodKey];

      // 1. Revenue Sparkline
      const ctxRev = document.getElementById('revChart').getContext('2d');
      if (revChartInstance) revChartInstance.destroy();
      revChartInstance = new Chart(ctxRev, {
        type: 'line',
        data: {
          labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'],
          datasets: [{
            data: data.revenue.trend,
            borderColor: '#134686',
            backgroundColor: 'rgba(19,70,134,0.06)',
            fill: true,
            tension: 0.4,
            pointRadius: 2,
            pointBackgroundColor: '#134686'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              ...tooltipConfig,
              callbacks: { label: (ctx) => `Tháng \${ctx.label}: \${ctx.raw} tỷ đồng` }
            }
          },
          scales: {
            x: { display: false },
            y: { display: false, min: 0 }
          },
          layout: { padding: { top: 5, bottom: 5 } }
        }
      });

      // 2. Margin Chart
      const ctxMargin = document.getElementById('marginChart').getContext('2d');
      if (marginChartInstance) marginChartInstance.destroy();
      
      const gradient = ctxMargin.createLinearGradient(0, 0, 0, 110);
      gradient.addColorStop(0, 'rgba(254,178,26,0.3)');
      gradient.addColorStop(1, 'rgba(254,178,26,0.0)');

      marginChartInstance = new Chart(ctxMargin, {
        type: 'line',
        data: {
          labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'],
          datasets: [
            {
              label: 'Thực tế',
              data: data.margin.trend,
              borderColor: '#FEB21A',
              backgroundColor: gradient,
              fill: true,
              tension: 0.3,
              pointRadius: 3,
              pointBackgroundColor: '#FEB21A'
            },
            {
              label: 'Target',
              data: [48, 48, 48, 48, 48, 48],
              borderColor: 'rgba(237,63,39,0.35)',
              borderDash: [5, 4],
              pointRadius: 0,
              fill: false,
              tension: 0
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              ...tooltipConfig,
              mode: 'index',
              intersect: false,
              callbacks: {
                label: (ctx) => `\${ctx.dataset.label}: \${ctx.raw}%`
              }
            }
          },
          scales: {
            x: { grid: { display: false }, ticks: { font: { size: 10 } } },
            y: { 
              min: 40, max: 52, 
              ticks: { stepSize: 4, callback: (val) => val + '%', font: { size: 10 } },
              border: { display: false }
            }
          }
        }
      });

      // 3. Gauge Chart
      if (!gaugeChartInstance) {
        const ctxGauge = document.getElementById('gaugeChart').getContext('2d');
        gaugeChartInstance = new Chart(ctxGauge, {
          type: 'doughnut',
          data: {
            labels: ['An toàn', 'Nguy hiểm'],
            datasets: [{
              data: [10, 90],
              backgroundColor: ['#134686', '#ED3F27'],
              borderWidth: 0,
              cutout: '70%'
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            rotation: -90,
            circumference: 180,
            plugins: {
              legend: { display: false },
              tooltip: { enabled: false }
            }
          },
          plugins: [needlePlugin]
        });
      }
    }

    // --- Interaction Logic ---
    window.setPeriod = function(periodKey) {
      // Update pills
      document.querySelectorAll('.pill').forEach(el => el.classList.remove('active'));
      event.target.classList.add('active');

      const d = periodData[periodKey];

      // Update Revenue
      document.getElementById('rev-val').textContent = d.revenue.val.toString().replace('.', ',') + ' tỷ';
      document.getElementById('rev-val').className = `big-number \${d.revenue.color}`;
      document.getElementById('rev-sub').textContent = `Mục tiêu \${d.revenue.target.toString().replace('.', ',')} tỷ · Đạt \${d.revenue.pct.toString().replace('.', ',')}%`;
      document.getElementById('rev-progress').style.width = `\${d.revenue.pct}%`;
      document.getElementById('rev-progress').className = `progress-bar-fill \${d.revenue.color}`;
      document.getElementById('rev-badge').textContent = d.revenue.badge;
      document.getElementById('rev-badge').className = `badge \${d.revenue.class}`;

      // Update Margin
      document.getElementById('margin-val').textContent = d.margin.val.toString().replace('.', ',') + '%';
      document.getElementById('margin-val').className = `big-number \${d.margin.color}`;
      document.getElementById('margin-sub').textContent = `Mục tiêu \${d.margin.target.toString().replace('.', ',')}% · \${d.margin.diff} điểm %`;
      document.getElementById('margin-badge').textContent = d.margin.badge;
      document.getElementById('margin-badge').className = `badge \${d.margin.class}`;

      // Update Growth & EBITDA
      document.getElementById('mom-val').textContent = d.mom;
      document.getElementById('yoy-val').textContent = d.yoy;
      document.getElementById('ebitda-val').textContent = d.ebitda.val.toString().replace('.', ',') + ' tỷ';
      document.getElementById('ebitda-sub').textContent = `Margin \${d.ebitda.margin.toString().replace('.', ',')}% · Target 13,0%`;
      document.getElementById('ebitda-progress').style.width = `\${d.ebitda.progress}%`;

      // Update Channel Total & Bar
      document.getElementById('ch-total').textContent = d.channel.total.toString().replace('.', ',') + ' tỷ';
      document.getElementById('seg-offline').style.width = `\${d.channel.offline}%`;
      document.getElementById('seg-offline').textContent = `\${d.channel.offline}%`;
      document.getElementById('seg-shopee').style.width = `\${d.channel.shopee}%`;
      document.getElementById('seg-shopee').textContent = `\${d.channel.shopee}%`;
      document.getElementById('seg-tiktok').style.width = `\${d.channel.tiktok}%`;
      document.getElementById('seg-tiktok').textContent = `\${d.channel.tiktok}%`;
      document.getElementById('seg-b2b').style.width = `\${d.channel.b2b}%`;
      document.getElementById('seg-b2b').textContent = `\${d.channel.b2b}%`;

      // Update OTIF & Coverage
      document.getElementById('otif-val').textContent = d.otif.toString().replace('.', ',') + '%';
      document.getElementById('coverage-val').textContent = d.coverage + '/100';

      // Update CCC
      document.getElementById('ccc-val').textContent = `\${d.ccc.days} ngày`;
      document.getElementById('ccc-val').className = `big-number \${d.ccc.color}`;
      document.getElementById('ccc-sub').textContent = `Target ≤ 35 ngày · \${d.ccc.sub}`;
      document.getElementById('ccc-badge').textContent = d.ccc.badge;
      document.getElementById('ccc-badge').className = `badge \${d.ccc.class}`;
      document.getElementById('ccc-dio').textContent = `DIO: \${d.ccc.dio} ngày`;
      document.getElementById('ccc-dso').textContent = `DSO: \${d.ccc.dso} ngày`;
      document.getElementById('ccc-dpo').textContent = `DPO: \${d.ccc.dpo} ngày`;

      // Update Footer label
      document.getElementById('footer-period').textContent = d.label;

      // Re-init charts with new data
      initCharts(periodKey);
    }

    // Modal Logic
    const modals = {
      revenue: {
        title: "CHI TIẾT DOANH THU",
        content: `
          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
            <div>
              <div style="color: var(--text-sub); font-size: 11px;">OFFLINE</div>
              <div style="font-family: var(--font-display); font-size: 20px; color: var(--primary);">12,0 tỷ</div>
              <div style="color: #4CAF50; font-size: 11px;">↑ 5,2% YoY</div>
            </div>
            <div>
              <div style="color: var(--text-sub); font-size: 11px;">THƯƠNG MẠI ĐIỆN TỬ</div>
              <div style="font-family: var(--font-display); font-size: 20px; color: var(--primary);">11,0 tỷ</div>
              <div style="color: #4CAF50; font-size: 11px;">↑ 24,5% YoY</div>
            </div>
            <div>
              <div style="color: var(--text-sub); font-size: 11px;">B2B / DOANH NGHIỆP</div>
              <div style="font-family: var(--font-display); font-size: 20px; color: var(--primary);">2,4 tỷ</div>
              <div style="color: var(--alert); font-size: 11px;">↓ 2,1% YoY</div>
            </div>
          </div>
          <div class="insight-box">
            <strong>Insight:</strong> Kênh TMĐT (đặc biệt TikTok Shop) đang đóng góp lớn nhất vào tăng trưởng. Cần phân bổ thêm ngân sách MKT để vít scale doanh thu Q3.
          </div>
        `
      },
      margin: {
        title: "PHÂN TÍCH BIÊN LỢI NHUẬN GỘP",
        content: `
          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
            <div>
              <div style="color: var(--text-sub); font-size: 11px;">MARGIN OFFLINE</div>
              <div style="font-family: var(--font-display); font-size: 20px; color: var(--primary);">48,5%</div>
              <div style="font-size: 11px; color: #888;">Đạt Target</div>
            </div>
            <div>
              <div style="color: var(--text-sub); font-size: 11px;">MARGIN SHOPEE</div>
              <div style="font-family: var(--font-display); font-size: 20px; color: var(--warning);">41,2%</div>
              <div style="font-size: 11px; color: var(--alert);">Dưới Target (45%)</div>
            </div>
            <div>
              <div style="color: var(--text-sub); font-size: 11px;">MARGIN TIKTOK</div>
              <div style="font-family: var(--font-display); font-size: 20px; color: var(--alert);">38,0%</div>
              <div style="font-size: 11px; color: var(--alert);">Báo động</div>
            </div>
          </div>
          <div class="insight-box" style="border-left-color: var(--alert);">
            <strong>Cảnh báo:</strong> Chi phí sàn (phí thanh toán + phí cố định + trợ giá Xtra) của TikTok & Shopee đã tăng trung bình 2,5%. Cần xem lại cấu trúc giá bán lẻ TMĐT và thiết kế lại combo để tối ưu margin.
          </div>
        `
      },
      ccc: {
        title: "CASH CONVERSION CYCLE",
        content: `
          <ul style="margin-left: 20px; margin-bottom: 16px; color: var(--text-main);">
            <li style="margin-bottom: 8px;"><strong>DIO (Ngày tồn kho): 28 ngày.</strong> Đã cải thiện so với tháng trước (32 ngày) nhờ giải phóng lô yến tinh chế cận date.</li>
            <li style="margin-bottom: 8px;"><strong>DSO (Ngày thu tiền): 22 ngày.</strong> Đang bị kéo dài do kênh chuỗi siêu thị thanh toán chậm.</li>
            <li><strong>DPO (Ngày trả tiền): 8 ngày.</strong> Đang thanh toán nhà cung cấp bao bì quá sớm.</li>
          </ul>
          <div class="insight-box">
            <strong>Cơ hội cải thiện:</strong> Đàm phán kéo dài công nợ với NCC bao bì và nhà yến lên 15-20 ngày để tối ưu dòng tiền lưu động.
          </div>
        `
      },
      stockout: {
        title: "HÀNH ĐỘNG KHẨN - STOCKOUT",
        content: `
          <div style="margin-bottom: 16px;">
            <strong>3 điểm đỏ cần bổ sung hàng gấp:</strong>
          </div>
          <ul style="margin-left: 20px; margin-bottom: 16px; color: var(--text-main);">
            <li style="margin-bottom: 8px;"><strong>Tổ sấy TH tại Đà Nẵng (Out 7,2%):</strong> Lỗi do kho trung chuyển hụt tồn. Cần điều chuyển từ kho HCM ngay hôm nay.</li>
            <li style="margin-bottom: 8px;"><strong>Yến chưng tại HCM (Out 6,0%):</strong> Nhu cầu mua lẻ tăng vọt dịp lễ. Đã hối thúc xưởng đóng gói.</li>
            <li><strong>Cháo IQ tại HN (Out 5,8%):</strong> Phân phối chuỗi mẹ & bé M-kids đang đứt hàng.</li>
          </ul>
          <div class="insight-box" style="border-left-color: var(--alert); background: #FFF5F5; color: #7B1111;">
            <strong>Đề xuất:</strong> Approve chi phí vận chuyển chành xe hỏa tốc (khoảng 15tr) để cover hàng cho Đà Nẵng và HN trong 24h.
          </div>
        `
      },
      defect: {
        title: "QUẢN LÝ CHẤT LƯỢNG & KHIẾU NẠI",
        content: `
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div>
              <div style="color: var(--text-sub); font-size: 11px;">DEFECT RATE (TỶ LỆ LỖI SX)</div>
              <div style="font-family: var(--font-display); font-size: 20px; color: var(--alert);">0,8%</div>
              <div style="color: var(--alert); font-size: 11px;">Vượt ngưỡng (0,5%)</div>
            </div>
            <div>
              <div style="color: var(--text-sub); font-size: 11px;">SỐ LƯỢNG KHIẾU NẠI MỚI</div>
              <div style="font-family: var(--font-display); font-size: 20px; color: var(--warning);">3 Case</div>
            </div>
          </div>
          <div class="insight-box" style="border-left-color: var(--alert); background: #FFF5F5; color: #7B1111;">
            <strong>Hành động khẩn:</strong> Có 1 case khiếu nại khách hàng V.I.P phát hiện tạp chất trong lô Yến Tinh Chế ngày 12/05. Đã cô lập toàn bộ tồn kho lô này chờ QA kiểm tra lại. Bộ phận CSKH đang deal đền bù 1 đổi 3.
          </div>
        `
      }
    };

    window.openModal = function(key) {
      if (!modals[key]) return;
      document.getElementById('modal-title').textContent = modals[key].title;
      document.getElementById('modal-content').innerHTML = modals[key].content;
      document.getElementById('modal-overlay').classList.add('show');
      document.body.style.overflow = 'hidden';
    }

    window.closeModal = function(e) {
      document.getElementById('modal-overlay').classList.remove('show');
      document.body.style.overflow = 'auto';
    }

    document.addEventListener('keydown', function(event) {
      if (event.key === "Escape") {
        closeModal();
      }
    });

    // Init first time
    window.onload = () => {
      initCharts('thang');
    };
  