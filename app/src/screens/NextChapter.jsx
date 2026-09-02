import { TERMINALS, ARCHETYPES } from '../data.js';
import Icon from '../components/Icon.jsx';

export default function NextChapter({ app }) {
  const { data } = app;
  const allVisas = TERMINALS.every((t) => !!data.visaStatus[t.id]);
  const primary = data.nextChapter.primary;

  const select = (id) => {
    app.upd((x) => {
      const nc = x.nextChapter;
      if (nc.primary === id) { nc.primary = null; return; }
      if (!nc.primary) { nc.primary = id; nc.secondary = nc.secondary.filter((i) => i !== id); return; }
      const at = nc.secondary.indexOf(id);
      if (at >= 0) nc.secondary.splice(at, 1);
      else if (nc.secondary.length < 2) nc.secondary.push(id);
    }, true);
  };

  const archetypes = ARCHETYPES.map((a) => {
    const isP = primary === a.id;
    const isS = data.nextChapter.secondary.indexOf(a.id) >= 0;
    return { ...a, bg: isP || isS ? a.tint : '#fff', border: isP ? a.color : isS ? a.color : 'rgba(16,39,90,.10)', badge: isP ? 'UTAMA ✓' : isS ? 'PENDUKUNG' : '' };
  });

  const ncHint = !allVisas
    ? 'Next Chapter terbuka setelah empat terminal selesai.'
    : primary
      ? 'Arketipe utama: ' + ARCHETYPES.filter((a) => a.id === primary)[0].title
      : 'Ketuk satu kartu untuk memilih arketipe utama.';
  const ncCtaBg = primary && allVisas ? '#1E8A4C' : 'rgba(16,39,90,.35)';

  return (
    <div style={{ padding: '14px 20px 28px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <button onClick={() => app.back()} style={{ width: 44, height: 44, borderRadius: 14, border: '1px solid rgba(16,39,90,.12)', background: '#fff', fontSize: 19, cursor: 'pointer', color: '#10275A' }}>←</button>
        <span style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.3 }}>Next Chapter</span>
      </div>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(16,39,90,.75)', margin: '14px 0 0', textWrap: 'pretty' }}>
        Kamu sudah menyiapkan tubuh, bekal, hati, dan kompas perjalananmu. Sekarang, bab seperti apa yang ingin kamu jalani?
      </p>
      <div style={{ fontSize: 15, color: 'rgba(16,39,90,.65)', margin: '10px 0 0' }}>Pilih satu arketipe utama. Kamu boleh menambah maksimal dua pendukung.</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '18px 0 0' }}>
        {archetypes.map((a) => (
          <button key={a.id} onClick={() => select(a.id)} style={{ textAlign: 'left', padding: 16, borderRadius: 18, border: `1.5px solid ${a.border}`, background: a.bg, cursor: 'pointer', color: '#10275A', minHeight: 152, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
              <div style={{ width: 38, height: 38, borderRadius: 12, background: '#fff', border: `1px solid ${a.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon path={a.icon} size={21} color={a.color} />
              </div>
              <span style={{ fontSize: 11, fontWeight: 800, color: a.color }}>{a.badge}</span>
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 800, lineHeight: 1.25, letterSpacing: 0.3, color: a.color }}>{a.title}</div>
              <div style={{ fontSize: 13, lineHeight: 1.4, color: 'rgba(16,39,90,.7)', marginTop: 5 }}>{a.sub}</div>
            </div>
          </button>
        ))}
      </div>
      <button
        onClick={() => { if (primary && allVisas) app.go('archetype', { a: primary }); }}
        style={{ width: '100%', height: 56, margin: '18px 0 0', border: 'none', borderRadius: 16, background: ncCtaBg, color: '#fff', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}
      >
        Mulai Eksplorasi Arketipe
      </button>
      <div style={{ fontSize: 14, color: 'rgba(16,39,90,.6)', textAlign: 'center', margin: '10px 0 0' }}>{ncHint}</div>
    </div>
  );
}
