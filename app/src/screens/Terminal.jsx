import Icon from '../components/Icon.jsx';
import RingProgress from '../components/RingProgress.jsx';
import { tone } from '../data.js';

export default function Terminal({ app }) {
  const { data, params } = app;
  const tid = params.t || 'fitland';
  const T = app.term(tid);
  const tc = tone(tid);
  const dn = app.doneCount(tid);
  const allDone = dn >= 8;
  let nextIdx = 7;
  for (let i = 0; i < 8; i++) {
    if (!app.resp(tid, i).done) { nextIdx = i; break; }
  }
  const pct = Math.round((dn / 8) * 100);
  const ctaLabel = data.visaStatus[tid] ? `Lihat Visa ${T.nameTitle}` : allDone ? `Ambil Visa ${T.visa}` : dn > 0 ? `Lanjut ke Modul ${nextIdx + 1}` : 'Mulai Modul 1';
  const cta = () => {
    if (data.visaStatus[tid]) { app.go('visa', { t: tid }); return; }
    app.go(allDone ? 'visaq' : 'module', { t: tid, m: nextIdx });
  };

  return (
    <div>
      <div style={{ padding: '14px 20px 22px', background: tc.tint, position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(120deg,rgba(255,255,255,.55) 0 12px,rgba(255,255,255,0) 12px 24px)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button onClick={() => app.back()} style={{ width: 44, height: 44, borderRadius: 14, border: '1px solid rgba(16,39,90,.12)', background: 'rgba(255,255,255,.8)', fontSize: 19, cursor: 'pointer', color: '#10275A' }}>←</button>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={() => app.go('welcome')} style={{ height: 32, padding: '0 12px', borderRadius: 10, border: '1px solid rgba(16,39,90,.14)', background: 'rgba(255,255,255,.85)', fontSize: 12.5, fontWeight: 700, color: '#10275A', cursor: 'pointer' }}>↺ Onboarding</button>
              <button onClick={() => app.go('home')} style={{ height: 32, padding: '0 12px', borderRadius: 10, border: '1px solid rgba(16,39,90,.14)', background: 'rgba(255,255,255,.85)', fontSize: 12.5, fontWeight: 700, color: '#10275A', cursor: 'pointer' }}>🏠 Beranda</button>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 14 }}>
            <div>
              <div style={{ width: 44, height: 44, borderRadius: 14, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${tc.border}` }}>
                <Icon path={tc.icon} size={25} color={tc.color} />
              </div>
              <div style={{ fontSize: 27, fontWeight: 800, letterSpacing: 0.4, color: tc.color, marginTop: 12 }}>{T.name}</div>
              <div style={{ fontSize: 17, fontWeight: 700, marginTop: 2 }}>{T.tag}</div>
              <div style={{ fontSize: 15, lineHeight: 1.45, color: 'rgba(16,39,90,.7)', marginTop: 8, maxWidth: 210, textWrap: 'pretty' }}>{T.q}</div>
            </div>
            <div style={{ position: 'relative', flex: 'none', width: 82, height: 82 }}>
              <svg width="82" height="82" viewBox="0 0 82 82" style={{ position: 'absolute', left: 0, top: 0 }}>
                <circle cx="41" cy="41" r="33" fill="#fff" />
              </svg>
              <RingProgress size={82} center={41} radius={33} strokeWidth={7} trackColor="rgba(16,39,90,.10)" valueColor={tc.color} circumference={207.3} pct={pct} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 800, color: '#10275A' }}>{pct}%</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: '18px 20px 28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 19, fontWeight: 800 }}>Materi</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: 'rgba(16,39,90,.6)', background: '#fff', border: '1px solid rgba(16,39,90,.10)', padding: '6px 12px', borderRadius: 10 }}>8 modul</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, margin: '14px 0 0' }}>
          {T.modules.map((m, i) => {
            const r = app.resp(tid, i);
            return (
              <button key={i} onClick={() => app.go('module', { t: tid, m: i })} style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%', textAlign: 'left', padding: '14px 16px', borderRadius: 14, background: '#fff', border: '1px solid rgba(16,39,90,.10)', cursor: 'pointer', color: '#10275A', minHeight: 56 }}>
                <span style={{ width: 26, height: 26, flex: 'none', borderRadius: 9, background: r.done ? tc.tint : '#F1F0EC', color: r.done ? tc.color : 'rgba(16,39,90,.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 800 }}>{i + 1}</span>
                <span style={{ flex: 1, fontSize: 16, fontWeight: 600, lineHeight: 1.35 }}>{m.t}</span>
                <span style={{ flex: 'none', width: 26, height: 26, borderRadius: '50%', border: `2px solid ${r.done ? tc.color : 'rgba(16,39,90,.2)'}`, background: r.done ? tc.color : 'transparent', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 800 }}>{r.done ? '✓' : ''}</span>
              </button>
            );
          })}
        </div>
        <button onClick={cta} style={{ width: '100%', height: 56, margin: '18px 0 0', border: 'none', borderRadius: 16, background: tc.color, color: '#fff', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>
          {ctaLabel}
        </button>
      </div>
    </div>
  );
}
