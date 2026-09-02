import { ARCHETYPES } from '../data.js';

export default function Archetype({ app }) {
  const { data, params } = app;
  const A = ARCHETYPES.filter((a) => a.id === (params.a || data.nextChapter.primary))[0] || ARCHETYPES[0];

  return (
    <div style={{ padding: '14px 20px 28px' }}>
      <button onClick={() => app.back()} style={{ width: 44, height: 44, borderRadius: 14, border: '1px solid rgba(16,39,90,.12)', background: '#fff', fontSize: 19, cursor: 'pointer', color: '#10275A' }}>←</button>
      <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.5, color: A.color, margin: '18px 0 0' }}>ARKETIPE UTAMA</div>
      <h1 style={{ fontSize: 25, fontWeight: 800, lineHeight: 1.2, letterSpacing: -0.4, margin: '8px 0 0' }}>{A.title}</h1>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(16,39,90,.75)', margin: '12px 0 0', textWrap: 'pretty' }}>{A.body}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '20px 0 0' }}>
        {A.examples.map((e) => (
          <div key={e} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '15px 16px', borderRadius: 14, background: '#fff', border: '1px solid rgba(16,39,90,.10)' }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: A.color }} />
            <span style={{ fontSize: 16, fontWeight: 600 }}>{e}</span>
          </div>
        ))}
      </div>
      <button onClick={() => app.go('mynext')} style={{ width: '100%', height: 56, margin: '20px 0 0', border: 'none', borderRadius: 16, background: '#10275A', color: '#fff', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>
        Susun My Next Chapter
      </button>
    </div>
  );
}
