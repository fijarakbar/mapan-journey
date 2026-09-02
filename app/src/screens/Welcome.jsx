import IllustrationPlaceholder from '../components/IllustrationPlaceholder.jsx';

export default function Welcome({ app }) {
  return (
    <div style={{ padding: '26px 24px 32px', animation: 'fadeUp .4s ease both' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 54, height: 54, borderRadius: 16, background: '#EAF4EC', border: '1px solid rgba(30,138,76,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="30" height="30" viewBox="0 0 30 30">
            <circle cx="21" cy="9" r="4" fill="#E0A32A" />
            <path d="M3 24 L11 12 L17 20 L21 15 L27 24 Z" fill="#1E8A4C" />
          </svg>
        </div>
        <div>
          <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: -0.5, lineHeight: 1 }}>MAPAN</div>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 5, color: 'rgba(16,39,90,.6)' }}>JOURNEY</div>
        </div>
      </div>
      <h1 style={{ fontSize: 36, lineHeight: 1.12, fontWeight: 800, letterSpacing: -1, margin: '28px 0 0', textWrap: 'pretty' }}>
        Menuju Purna Tugas Yang <span style={{ color: '#1E8A4C' }}>MAPAN.</span>
      </h1>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(16,39,90,.75)', margin: '16px 0 0', textWrap: 'pretty' }}>
        Persiapkan diri untuk memasuki bab kehidupan berikutnya dengan tubuh yang sehat, bekal yang cukup, hati yang siap, dan hidup yang bermakna.
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '20px 0 0', fontSize: 14, color: 'rgba(16,39,90,.6)' }}>
        Powered by <strong style={{ fontSize: 16, color: '#10275A' }}>MDI</strong>
      </div>
      <IllustrationPlaceholder label="ilustrasi: pasangan berjalan di jalur pegunungan" height={190} style={{ margin: '22px 0 0' }} />
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
