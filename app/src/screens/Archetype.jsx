import { ARCHETYPES, ARCHETYPE_IDEAS } from '../data.js';

const MAX_IDEAS = 5;

export default function Archetype({ app }) {
  const { data, params } = app;
  const A = ARCHETYPES.filter((a) => a.id === (params.a || data.nextChapter.primary))[0] || ARCHETYPES[0];
  const ideas = ARCHETYPE_IDEAS[A.id] || [];
  const picked = data.nextChapter.ideas?.[A.id] || [];
  const locked = !!data.nextChapter.locked || !!app.batchLocked;

  const toggle = (name) => {
    if (locked) return;
    app.upd((x) => {
      if (!x.nextChapter.ideas) x.nextChapter.ideas = {};
      const cur = x.nextChapter.ideas[A.id] || [];
      const at = cur.indexOf(name);
      if (at >= 0) cur.splice(at, 1);
      else if (cur.length < MAX_IDEAS) cur.push(name);
      x.nextChapter.ideas[A.id] = cur;
    }, true);
    app.syncArchetypeChoice({ ...data.nextChapter, ideas: { ...data.nextChapter.ideas, [A.id]: (() => {
      const cur = (data.nextChapter.ideas?.[A.id] || []).slice();
      const at = cur.indexOf(name);
      if (at >= 0) cur.splice(at, 1); else if (cur.length < MAX_IDEAS) cur.push(name);
      return cur;
    })() } });
  };

  return (
    <div style={{ padding: '14px 20px 28px' }}>
      <button onClick={() => app.back()} style={{ width: 44, height: 44, borderRadius: 14, border: '1px solid rgba(16,39,90,.12)', background: '#fff', fontSize: 19, cursor: 'pointer', color: '#10275A' }}>←</button>
      <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.5, color: A.color, margin: '18px 0 0' }}>ARKETIPE UTAMA</div>
      <h1 style={{ fontSize: 25, fontWeight: 800, lineHeight: 1.2, letterSpacing: -0.4, margin: '8px 0 0' }}>{A.title}</h1>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(16,39,90,.75)', margin: '12px 0 0', textWrap: 'pretty' }}>{A.body}</p>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', margin: '22px 0 0' }}>
        <div style={{ fontSize: 15, fontWeight: 800 }}>Pilih ide yang paling menarik</div>
        <div style={{ fontSize: 13, fontWeight: 700, color: picked.length >= MAX_IDEAS ? A.color : 'rgba(16,39,90,.5)' }}>{picked.length}/{MAX_IDEAS} dipilih</div>
      </div>
      {locked && (
        <div style={{ fontSize: 13, color: 'rgba(16,39,90,.55)', background: 'rgba(16,39,90,.06)', padding: '10px 12px', borderRadius: 10, margin: '8px 0 0' }}>
          [LOCK] Pilihanmu sudah dikunci karena program sudah dimulai. Hubungi fasilitator kalau ingin mengubahnya.
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '14px 0 0' }}>
        {ideas.map((idea) => {
          const isPicked = picked.indexOf(idea.n) >= 0;
          const disabled = locked || (!isPicked && picked.length >= MAX_IDEAS);
          return (
            <button
              key={idea.n}
              onClick={() => toggle(idea.n)}
              disabled={disabled}
              style={{
                textAlign: 'left', padding: '14px 16px', borderRadius: 14, cursor: disabled && !isPicked ? 'default' : 'pointer',
                background: isPicked ? A.tint : '#fff',
                border: `1.5px solid ${isPicked ? A.color : 'rgba(16,39,90,.10)'}`,
                opacity: disabled && !isPicked ? 0.5 : 1,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <div style={{ width: 20, height: 20, borderRadius: 6, flex: 'none', marginTop: 1, border: `1.5px solid ${isPicked ? A.color : 'rgba(16,39,90,.25)'}`, background: isPicked ? A.color : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {isPicked && <span style={{ color: '#fff', fontSize: 13, fontWeight: 800 }}>[v]</span>}
                </div>
                <div>
                  <div style={{ fontSize: 15.5, fontWeight: 800, color: isPicked ? A.color : '#10275A' }}>{idea.n}</div>
                  <div style={{ fontSize: 13.5, lineHeight: 1.5, color: 'rgba(16,39,90,.65)', marginTop: 3, textWrap: 'pretty' }}>{idea.d}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 3, marginTop: 6 }}>
                    <div style={{ fontSize: 12.5, color: '#1E6E42' }}>[v] {idea.p}</div>
                    <div style={{ fontSize: 12.5, color: '#9C4B22' }}>[!] {idea.m}</div>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <button onClick={() => app.go('mynext')} style={{ width: '100%', height: 56, margin: '20px 0 0', border: 'none', borderRadius: 16, background: '#10275A', color: '#fff', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>
        Susun My Next Chapter
      </button>
    </div>
  );
}
