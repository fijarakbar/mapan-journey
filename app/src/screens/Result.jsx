import { TERMINALS, tone, NAVY } from '../data.js';

function band(p) {
  return p < 50 ? 'Perlu diperhatikan' : p < 65 ? 'Sedang dipersiapkan' : p < 80 ? 'Sudah cukup kuat' : 'Bisa terus dikembangkan';
}

export default function Result({ app }) {
  const sco = app.data.initialAssessment.scores || {};
  const scores = TERMINALS.map((t) => {
    const c = tone(t.id);
    const p = sco[t.id] == null ? 0 : sco[t.id];
    return { name: t.name, color: c.color, pctText: p + '%', band: band(p) };
  }).concat([{ name: 'NEXT CHAPTER', color: NAVY, pctText: (sco.next == null ? 0 : sco.next) + '%', band: band(sco.next == null ? 0 : sco.next) }]);

  return (
    <div style={{ padding: '22px 24px 32px' }}>
      <h1 style={{ fontSize: 26, fontWeight: 800, letterSpacing: -0.5, margin: 0 }}>Titik Awal Perjalananmu</h1>
      <p style={{ fontSize: 16, lineHeight: 1.55, color: 'rgba(16,39,90,.7)', margin: '10px 0 0' }}>Ini gambaran awal, bukan penilaian. Semuanya bisa terus dikembangkan.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, margin: '22px 0 0' }}>
        {scores.map((s) => (
          <div key={s.name} style={{ padding: '16px 18px', borderRadius: 16, background: '#fff', border: '1px solid rgba(16,39,90,.10)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontSize: 16, fontWeight: 800, letterSpacing: 0.3, color: s.color }}>{s.name}</span>
              <span style={{ fontSize: 18, fontWeight: 800 }}>{s.pctText}</span>
            </div>
            <div style={{ height: 10, borderRadius: 6, background: 'rgba(16,39,90,.08)', margin: '10px 0 8px', overflow: 'hidden' }}>
              <div style={{ height: '100%', borderRadius: 6, width: s.pctText, background: s.color }} />
            </div>
            <div style={{ fontSize: 14, color: 'rgba(16,39,90,.7)' }}>{s.band}</div>
          </div>
        ))}
      </div>
      <button
        onClick={() => app.setState({ screen: 'home', params: {}, stack: [] })}
        style={{ width: '100%', height: 56, margin: '22px 0 0', border: 'none', borderRadius: 16, background: '#10275A', color: '#fff', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}
      >
        Aktifkan MAPAN Passport
      </button>
    </div>
  );
}
