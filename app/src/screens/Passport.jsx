import { TERMINALS, tone } from '../data.js';

export default function Passport({ app }) {
  const { data } = app;
  const nama = data.participantProfile.nama || 'Sahabat';
  const pct = Math.round((app.totalDone() / 32) * 100);
  const startDate = new Date(data.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });

  const visaRows = TERMINALS.map((t) => {
    const c = tone(t.id);
    const on = !!data.visaStatus[t.id];
    return {
      visa: t.visa, color: on ? c.color : 'rgba(16,39,90,.45)',
      bg: on ? c.tint : '#fff', border: on ? c.border : 'rgba(16,39,90,.10)',
      check: on ? '✓' : '', statusText: on ? '✓ Selesai' : 'Belum diperoleh',
    };
  });

  const stamps = data.passportStamps.length
    ? data.passportStamps.map((p) => ({ label: p.label + ' · ' + new Date(p.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' }), color: tone(p.id).color }))
    : [{ label: 'Belum ada stamp', color: 'rgba(16,39,90,.4)' }];

  return (
    <div style={{ padding: '14px 20px 28px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <button onClick={() => app.back()} style={{ width: 44, height: 44, borderRadius: 14, border: '1px solid rgba(16,39,90,.12)', background: '#fff', fontSize: 19, cursor: 'pointer', color: '#10275A' }}>←</button>
        <span style={{ fontSize: 18, fontWeight: 800 }}>MAPAN Passport</span>
      </div>
      <div style={{ margin: '16px 0 0', padding: '24px 22px', borderRadius: 20, background: '#10275A', color: '#fff', boxShadow: '0 12px 30px rgba(16,39,90,.25)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, color: '#E0A32A' }}>MAPAN</div>
            <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: 1, color: '#E0A32A' }}>PASSPORT</div>
          </div>
          <svg width="46" height="46" viewBox="0 0 46 46">
            <circle cx="23" cy="23" r="20" fill="none" stroke="#E0A32A" strokeWidth="2" />
            <circle cx="23" cy="23" r="8" fill="none" stroke="#E0A32A" strokeWidth="1.5" />
            <path d="M3 23 H43" stroke="#E0A32A" strokeWidth="1.5" />
          </svg>
        </div>
        <div style={{ height: 1, background: 'rgba(224,163,42,.35)', margin: '20px 0' }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, fontSize: 14 }}>
          <div><div style={{ color: 'rgba(255,255,255,.6)', fontSize: 12 }}>Nama</div><div style={{ fontWeight: 700, fontSize: 16, marginTop: 2 }}>{nama}</div></div>
          <div><div style={{ color: 'rgba(255,255,255,.6)', fontSize: 12 }}>Destination</div><div style={{ fontWeight: 700, fontSize: 16, marginTop: 2 }}>The Next Chapter</div></div>
          <div><div style={{ color: 'rgba(255,255,255,.6)', fontSize: 12 }}>Mulai Perjalanan</div><div style={{ fontWeight: 700, fontSize: 16, marginTop: 2 }}>{startDate}</div></div>
          <div><div style={{ color: 'rgba(255,255,255,.6)', fontSize: 12 }}>Progres</div><div style={{ fontWeight: 700, fontSize: 16, marginTop: 2 }}>{pct}%</div></div>
        </div>
      </div>
      <div style={{ fontSize: 17, fontWeight: 800, margin: '24px 0 12px' }}>Halaman Visa</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {visaRows.map((v) => (
          <div key={v.visa} style={{ padding: 16, borderRadius: 16, background: v.bg, border: `1px solid ${v.border}`, minHeight: 120, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ width: 34, height: 34, borderRadius: '50%', border: `2px dashed ${v.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: v.color, fontSize: 14, fontWeight: 800 }}>{v.check}</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 800, lineHeight: 1.25, letterSpacing: 0.3, color: v.color }}>{v.visa}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(16,39,90,.6)', marginTop: 4 }}>{v.statusText}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: 17, fontWeight: 800, margin: '24px 0 12px' }}>Passport Stamps</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {stamps.map((s, i) => (
          <span key={i} style={{ padding: '10px 14px', borderRadius: 999, background: '#fff', border: `1px dashed ${s.color}`, fontSize: 14, fontWeight: 700, color: s.color }}>{s.label}</span>
        ))}
      </div>
      <button onClick={() => app.go('summary')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', textAlign: 'left', margin: '20px 0 0', padding: 18, borderRadius: 16, background: '#fff', border: '1px solid rgba(16,39,90,.10)', cursor: 'pointer', color: '#10275A' }}>
        <span>
          <span style={{ display: 'block', fontSize: 16, fontWeight: 800 }}>My Passport Summary</span>
          <span style={{ display: 'block', fontSize: 14, color: 'rgba(16,39,90,.65)', marginTop: 3 }}>Ringkasan jawaban perjalananmu</span>
        </span>
        <span style={{ fontSize: 22, color: 'rgba(16,39,90,.35)' }}>›</span>
      </button>
    </div>
  );
}
