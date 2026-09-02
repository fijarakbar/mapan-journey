import { TERMINALS, tone } from '../data.js';

export default function Immigration({ app }) {
  const { data } = app;
  const visaRows = TERMINALS.map((t) => {
    const c = tone(t.id);
    const on = !!data.visaStatus[t.id];
    return { visa: t.visa, name: t.nameTitle, color: on ? c.color : 'rgba(16,39,90,.45)' };
  });

  return (
    <div style={{ padding: '26px 24px 32px' }}>
      <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 2, color: 'rgba(16,39,90,.55)' }}>IMMIGRATION</div>
      <h1 style={{ fontSize: 27, fontWeight: 800, lineHeight: 1.25, letterSpacing: -0.5, margin: '10px 0 0' }}>Semua visa perjalananmu telah diperoleh.</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '24px 0 0' }}>
        {visaRows.map((v) => (
          <div key={v.visa} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 18px', borderRadius: 16, background: '#fff', border: '1px solid rgba(16,39,90,.10)' }}>
            <div style={{ width: 30, height: 30, flex: 'none', borderRadius: '50%', background: v.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 800 }}>✓</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: 0.3 }}>{v.visa}</div>
              <div style={{ fontSize: 14, color: 'rgba(16,39,90,.65)' }}>{v.name}</div>
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#1E8A4C' }}>Selesai</div>
          </div>
        ))}
      </div>
      <button onClick={() => app.go('summary')} style={{ width: '100%', height: 56, margin: '24px 0 0', border: 'none', borderRadius: 16, background: '#10275A', color: '#fff', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>
        Lihat Passport Saya
      </button>
    </div>
  );
}
