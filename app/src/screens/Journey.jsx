import { TERMINALS, tone, ICON, NAVY } from '../data.js';
import Icon from '../components/Icon.jsx';

const LEG_LABELS = ['menuju Fitland', 'menuju Assetland', 'menuju Mindland', 'menuju Soulland', 'menuju Next Chapter'];

export default function Journey({ app }) {
  const { data } = app;
  const allVisas = TERMINALS.every((t) => !!data.visaStatus[t.id]);

  let route = [
    {
      key: 'start', kicker: 'START', name: 'Boarding Pass', sub: 'Persiapan perjalanan', color: NAVY,
      markBg: '#EEF1F7', border: 'rgba(16,39,90,.14)', bg: '#fff', shadow: 'none', iconPath: ICON.plane,
      check: data.initialAssessment.done ? '✓' : '', ringColor: data.initialAssessment.done ? '#1E8A4C' : 'rgba(16,39,90,.2)',
      ringFill: data.initialAssessment.done ? '#1E8A4C' : 'transparent',
      go: () => app.go(data.initialAssessment.done ? 'result' : 'checkin'),
    },
    ...TERMINALS.map((t, i) => {
      const c = tone(t.id);
      const visa = !!data.visaStatus[t.id];
      const current = !visa && (i === 0 || !!data.visaStatus[TERMINALS[i - 1].id]);
      return {
        key: t.id, kicker: `TERMINAL ${i + 1}`, name: t.name, sub: t.tag, color: c.color,
        markBg: c.tint, border: current || visa ? c.border : 'rgba(16,39,90,.10)',
        bg: current || visa ? c.tint : '#fff', shadow: current ? '0 6px 18px rgba(16,39,90,.10)' : 'none',
        iconPath: c.icon,
        check: visa ? '✓' : '', ringColor: visa ? c.color : 'rgba(16,39,90,.2)', ringFill: visa ? c.color : 'transparent',
        go: () => app.go('terminal', { t: t.id }),
      };
    }),
    {
      key: 'next', kicker: 'DESTINATION', name: 'Next Chapter', color: NAVY,
      markBg: '#EEF1F7', border: 'rgba(16,39,90,.14)', bg: '#fff', shadow: 'none', iconPath: ICON.pin,
      sub: allVisas ? 'Pilih arketipe & langkahmu' : 'Berikutnya, setelah empat terminal',
      check: data.nextChapter.primary ? '✓' : '', ringColor: data.nextChapter.primary ? '#1E8A4C' : 'rgba(16,39,90,.2)',
      ringFill: data.nextChapter.primary ? '#1E8A4C' : 'transparent',
      go: () => { if (allVisas) app.go('nextchapter'); else { const n = app.nextStop(); app.go(n.screen, n.params); } },
    },
  ];
  route = route.map((r, i) => ({
    ...r,
    hasLeg: i < route.length - 1,
    legLabel: LEG_LABELS[i] || '',
    legColor: route[i + 1] ? route[i + 1].color : NAVY,
  }));

  return (
    <div style={{ padding: '14px 20px 28px' }}>
      <h1 style={{ fontSize: 24, fontWeight: 800, letterSpacing: -0.4, margin: 0 }}>Perjalanan MAPAN</h1>
      <p style={{ fontSize: 15, lineHeight: 1.5, color: 'rgba(16,39,90,.65)', margin: '6px 0 0' }}>Selesaikan setiap terminal untuk mendapatkan visa.</p>
      <div style={{ position: 'relative', margin: '20px 0 0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
          {route.map((r) => (
            <div key={r.key}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 54, flex: 'none', display: 'flex', justifyContent: 'center' }}>
                  <div style={{ width: 38, height: 38, borderRadius: 13, background: r.markBg, border: `1px solid ${r.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon path={r.iconPath} size={21} color={r.color} />
                  </div>
                </div>
                <button onClick={r.go} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'left', padding: 16, borderRadius: 18, border: `1px solid ${r.border}`, background: r.bg, cursor: 'pointer', color: '#10275A', boxShadow: r.shadow }}>
                  <span>
                    <span style={{ display: 'block', fontSize: 11, fontWeight: 800, letterSpacing: 1.1, color: r.color }}>{r.kicker}</span>
                    <span style={{ display: 'block', fontSize: 17, fontWeight: 800, letterSpacing: 0.3, marginTop: 2 }}>{r.name}</span>
                    <span style={{ display: 'block', fontSize: 13, color: 'rgba(16,39,90,.65)', marginTop: 2 }}>{r.sub}</span>
                  </span>
                  <span style={{ flex: 'none', width: 30, height: 30, borderRadius: '50%', border: `2px solid ${r.ringColor}`, background: r.ringFill, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 800 }}>{r.check}</span>
                </button>
              </div>
              {r.hasLeg && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, height: 52 }}>
                  <div style={{ width: 54, flex: 'none', display: 'flex', justifyContent: 'center' }}>
                    <svg width="54" height="52" viewBox="0 0 54 52" fill="none" style={{ display: 'block' }}>
                      <path d="M27 2 C27 14 27 38 27 50" stroke="rgba(16,39,90,.22)" strokeWidth="2" strokeDasharray="3 5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Icon path={ICON.walk} size={22} color={r.legColor} />
                    <div style={{ flex: 1, height: 0, borderTop: '2px dotted rgba(16,39,90,.22)' }} />
                    <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(16,39,90,.45)' }}>{r.legLabel}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => { const n = app.nextStop(); app.go(n.screen, n.params); }}
        style={{ width: '100%', height: 56, margin: '18px 0 0', border: 'none', borderRadius: 16, background: '#10275A', color: '#fff', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}
      >
        Lanjutkan Perjalanan
      </button>
    </div>
  );
}
