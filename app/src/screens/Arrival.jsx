import { ARCHETYPES } from '../data.js';

export default function Arrival({ app }) {
  const { data } = app;
  const nama = data.participantProfile.nama || 'Sahabat';
  const primary = data.nextChapter.primary;
  const archetype = primary ? ARCHETYPES.filter((a) => a.id === primary)[0].title : 'Belum dipilih';
  const mission = data.nextChapter.plan.menjadi || app.resp('soulland', 7).reflection || 'Belum diisi';
  const firstStep = data.nextChapter.plan.langkah || 'Belum diisi';

  const finish = () => {
    const allVisas = ['fitland', 'assetland', 'mindland', 'soulland'].every((id) => !!data.visaStatus[id]);
    if (allVisas) app.upd((x) => { x.journeyProgress.finished = true; }, true);
    app.setState({ screen: 'home', params: {}, stack: [] });
  };

  return (
    <div style={{ padding: '26px 24px 32px', background: '#FDF8EE', minHeight: '100%' }}>
      <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 2.5, color: 'rgba(16,39,90,.55)', textAlign: 'center' }}>ARRIVAL</div>
      <h1 style={{ fontSize: 27, fontWeight: 800, lineHeight: 1.25, letterSpacing: -0.5, margin: '12px 0 0', textAlign: 'center' }}>Selamat datang di bab berikutnya.</h1>
      <div style={{ margin: '24px 0 0', padding: 22, borderRadius: 20, background: '#10275A', color: '#fff', boxShadow: '0 14px 32px rgba(16,39,90,.25)' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, color: '#E0A32A' }}>ARRIVAL CARD</div>
        <div style={{ fontSize: 24, fontWeight: 800, margin: '10px 0 0' }}>{nama}</div>
        <div style={{ height: 1, background: 'rgba(224,163,42,.35)', margin: '16px 0' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: 15 }}>
          <div><div style={{ fontSize: 12, color: 'rgba(255,255,255,.6)' }}>Destination</div><div style={{ fontWeight: 700, fontSize: 17, marginTop: 2 }}>THE NEXT CHAPTER</div></div>
          <div><div style={{ fontSize: 12, color: 'rgba(255,255,255,.6)' }}>Primary Archetype</div><div style={{ fontWeight: 700, fontSize: 17, marginTop: 2 }}>{archetype}</div></div>
          <div><div style={{ fontSize: 12, color: 'rgba(255,255,255,.6)' }}>My Mission</div><div style={{ fontWeight: 600, lineHeight: 1.5, marginTop: 2 }}>{mission}</div></div>
          <div><div style={{ fontSize: 12, color: 'rgba(255,255,255,.6)' }}>My First Step</div><div style={{ fontWeight: 600, lineHeight: 1.5, marginTop: 2 }}>{firstStep}</div></div>
        </div>
      </div>
      <button onClick={finish} style={{ width: '100%', height: 56, margin: '24px 0 0', border: 'none', borderRadius: 16, background: '#1E8A4C', color: '#fff', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>
        Mulai Bab Baruku
      </button>
    </div>
  );
}
