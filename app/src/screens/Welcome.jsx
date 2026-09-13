export default function Welcome({ app }) {
  return (
    <div style={{ padding: '26px 24px 32px', animation: 'fadeUp .4s ease both' }}>
      <img src="/icons/logo.png" alt="MAPAN Journey" style={{ height: 34, display: 'block' }} />
      <h1 style={{ fontSize: 36, lineHeight: 1.12, fontWeight: 800, letterSpacing: -1, margin: '28px 0 0', textWrap: 'pretty' }}>
        Menuju Purna Tugas Yang <span style={{ color: '#1E8A4C' }}>MAPAN.</span>
      </h1>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(16,39,90,.75)', margin: '16px 0 0', textWrap: 'pretty' }}>
        Persiapkan diri untuk memasuki bab kehidupan berikutnya dengan tubuh yang sehat, bekal yang cukup, hati yang siap, dan hidup yang bermakna.
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '20px 0 0', fontSize: 14, color: 'rgba(16,39,90,.6)' }}>
        Powered by <strong style={{ fontSize: 16, color: '#10275A' }}>MDI</strong>
      </div>
      <div style={{ textAlign: 'center' }}>
        <img src="/illustrations/hero.png" alt="" style={{ width: '92%', maxWidth: 380, height: 'auto', display: 'inline-block', margin: '22px 0 0' }} />
      </div>
      <button
        onClick={() => {
          app.upd((x) => { x.journeyProgress.started = true; }, true);
          app.go('intro');
        }}
        style={{ width: '100%', height: 56, margin: '20px 0 0', border: 'none', borderRadius: 16, background: '#10275A', color: '#fff', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}
      >
        Mulai Perjalanan
      </button>
    </div>
  );
}
