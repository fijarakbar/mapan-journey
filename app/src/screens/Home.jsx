import { TERMINALS, tone } from '../data.js';
import Icon from '../components/Icon.jsx';
import RingProgress from '../components/RingProgress.jsx';

export default function Home({ app }) {
  const { data } = app;
  const pct = Math.round((app.totalDone() / 32) * 100);
  const termsDone = TERMINALS.filter((t) => data.visaStatus[t.id]).length;
  const allVisas = TERMINALS.every((t) => !!data.visaStatus[t.id]);
  const post = !!data.journeyProgress.finished && allVisas;
  const nama = data.participantProfile.nama || 'Sahabat';

  const greeting = post ? `Selamat datang di bab berikutnya, ${nama}.` : `Halo, ${nama} 👋`;
  const greetingSub = post ? 'Perjalanan MAPAN-mu sudah lengkap.' : 'Perjalanan MAPAN-mu dimulai!';

  const achievements = [
    { n: data.passportStamps.length, label: 'Visa Diperoleh', color: '#1E8A4C', tint: '#EAF4EC' },
    { n: app.totalDone(), label: 'Modul Selesai', color: '#C9871A', tint: '#FDF3DF' },
    {
      n: TERMINALS.reduce((a, t) => {
        const r = data.responses[t.id] || {};
        return a + Object.keys(r).filter((k) => r[k] && r[k].reflection).length;
      }, 0),
      label: 'Catatan Refleksi', color: '#6C4FB6', tint: '#F0EBFA',
    },
  ];

  const postCards = [
    { title: 'My Next Chapter', sub: 'Rencana bab berikutnya', go: () => app.go('mynext') },
    { title: 'Rencana 90 Hari', sub: 'Langkah 30, 60, 90 hari', go: () => app.go('plan90') },
    { title: 'MAPAN Passport', sub: 'Visa, stamp & ringkasan', go: () => app.go('passport') },
    { title: 'Refleksi Saya', sub: 'Semua catatan perjalanan', go: () => app.go('catatan') },
    { title: 'Program Next Chapter', sub: 'Pendampingan lanjutan', go: () => app.go('program') },
  ];

  const terminals = TERMINALS.map((t, i) => {
    const c = tone(t.id);
    const dn = app.doneCount(t.id);
    const visa = !!data.visaStatus[t.id];
    const prev = i === 0 ? true : !!data.visaStatus[TERMINALS[i - 1].id];
    return {
      ...t, color: c.color, tint: c.tint, border: c.border, iconPath: c.icon,
      status: visa ? '✓ Selesai' : dn > 0 ? `Sedang berjalan · ${dn}/8` : prev ? 'Berikutnya' : 'Belum dimulai',
    };
  });

  const nextStop = app.nextStop();
  const ncCardSub = allVisas ? 'Siapkan langkahmu di bab berikutnya' : 'Berikutnya, setelah empat terminal';
  const goNextChapter = () => { if (allVisas) app.go('nextchapter'); else app.go(nextStop.screen, nextStop.params); };

  return (
    <div style={{ padding: '14px 20px 28px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: -0.4 }}>{greeting}</div>
          <div style={{ fontSize: 15, color: 'rgba(16,39,90,.65)', marginTop: 2 }}>{greetingSub}</div>
        </div>
      </div>

      {post ? (
        <>
          <div style={{ margin: '16px 0 0', padding: 20, borderRadius: 20, background: '#fff', border: '1px solid rgba(16,39,90,.10)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 17, fontWeight: 800 }}>Ringkasan Perjalanan</div>
              <div style={{ fontSize: 15, color: 'rgba(16,39,90,.7)', marginTop: 6 }}>Terus melangkah 💪</div>
              <div style={{ fontSize: 14, color: 'rgba(16,39,90,.6)', marginTop: 10 }}>
                Terminal selesai<br /><strong style={{ fontSize: 20, color: '#10275A' }}>{termsDone}</strong> dari 4
              </div>
            </div>
            <div style={{ position: 'relative', flex: 'none', width: 84, height: 84 }}>
              <RingProgress size={84} center={42} radius={34} strokeWidth={8} trackColor="rgba(16,39,90,.10)" valueColor="#1E8A4C" circumference={213.6} pct={pct} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 800, color: '#10275A' }}>{pct}%</div>
            </div>
          </div>
          <div style={{ fontSize: 17, fontWeight: 800, margin: '24px 0 12px' }}>Capaian</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
            {achievements.map((a) => (
              <div key={a.label} style={{ padding: '14px 10px', borderRadius: 16, background: '#fff', border: '1px solid rgba(16,39,90,.10)', textAlign: 'center' }}>
                <div style={{ width: 34, height: 34, margin: '0 auto', borderRadius: 11, background: a.tint, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 12, height: 12, borderRadius: '50%', background: a.color }} />
                </div>
                <div style={{ fontSize: 22, fontWeight: 800, marginTop: 8 }}>{a.n}</div>
                <div style={{ fontSize: 12, lineHeight: 1.3, color: 'rgba(16,39,90,.65)', marginTop: 2 }}>{a.label}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '22px 0 0' }}>
            {postCards.map((c) => (
              <button key={c.title} onClick={c.go} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', textAlign: 'left', padding: 18, borderRadius: 16, background: '#fff', border: '1px solid rgba(16,39,90,.10)', cursor: 'pointer', color: '#10275A' }}>
                <span>
                  <span style={{ display: 'block', fontSize: 16, fontWeight: 800 }}>{c.title}</span>
                  <span style={{ display: 'block', fontSize: 14, color: 'rgba(16,39,90,.65)', marginTop: 3 }}>{c.sub}</span>
                </span>
                <span style={{ fontSize: 22, color: 'rgba(16,39,90,.35)' }}>›</span>
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <div style={{ margin: '16px 0 0', padding: 20, borderRadius: 20, background: '#10275A', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 10px 24px rgba(16,39,90,.22)' }}>
            <div style={{ paddingRight: 12 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.7)' }}>Progres Perjalanan</div>
              <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: 0.3, margin: '2px 0 6px' }}>4 TERMINAL</div>
              <div style={{ fontSize: 14, lineHeight: 1.45, color: 'rgba(255,255,255,.75)' }}>Lengkapi setiap terminal untuk persiapan terbaikmu.</div>
            </div>
            <div style={{ position: 'relative', flex: 'none', width: 78, height: 78 }}>
              <RingProgress size={78} center={39} radius={31} strokeWidth={8} trackColor="rgba(255,255,255,.18)" valueColor="#7BD389" circumference={194.8} pct={pct} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 800, color: '#fff' }}>{pct}%</div>
            </div>
          </div>
          <div style={{ fontSize: 17, fontWeight: 800, margin: '24px 0 12px' }}>4 Terminal MAPAN</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {terminals.map((t) => (
              <button key={t.id} onClick={() => app.go('terminal', { t: t.id })} style={{ textAlign: 'left', padding: 16, borderRadius: 18, border: `1px solid ${t.border}`, background: t.tint, cursor: 'pointer', color: '#10275A', minHeight: 132, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ width: 42, height: 42, borderRadius: 14, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${t.border}` }}>
                  <Icon path={t.iconPath} size={23} color={t.color} />
                </div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: 0.4, color: t.color }}>{t.name}</div>
                  <div style={{ fontSize: 13, lineHeight: 1.35, color: 'rgba(16,39,90,.7)', marginTop: 2 }}>{t.tag}</div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: t.color, marginTop: 8 }}>{t.status}</div>
                </div>
              </button>
            ))}
          </div>
          <button onClick={goNextChapter} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', textAlign: 'left', margin: '14px 0 0', padding: 18, borderRadius: 18, background: '#fff', border: '1px solid rgba(16,39,90,.10)', cursor: 'pointer', color: '#10275A' }}>
            <span>
              <span style={{ display: 'block', fontSize: 16, fontWeight: 800 }}>Next Chapter</span>
              <span style={{ display: 'block', fontSize: 14, color: 'rgba(16,39,90,.65)', marginTop: 3 }}>{ncCardSub}</span>
            </span>
            <span style={{ fontSize: 22, color: 'rgba(16,39,90,.35)' }}>›</span>
          </button>
          <button
            onClick={() => { const n = app.nextStop(); app.go(n.screen, n.params); }}
            style={{ width: '100%', height: 56, margin: '16px 0 0', border: 'none', borderRadius: 16, background: '#1E8A4C', color: '#fff', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}
          >
            Lanjutkan Perjalanan
          </button>
          <div style={{ fontSize: 14, color: 'rgba(16,39,90,.6)', textAlign: 'center', margin: '10px 0 0' }}>Berikutnya: {nextStop.label}</div>
        </>
      )}
    </div>
  );
}
