import { TERMINALS, tone } from '../data.js';
import Icon from '../components/Icon.jsx';

export default function Intro({ app }) {
  return (
    <div style={{ padding: '22px 24px 32px' }}>
      <h1 style={{ fontSize: 28, lineHeight: 1.2, fontWeight: 800, letterSpacing: -0.6, margin: 0 }}>Ini bukan sekadar pelatihan.</h1>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(16,39,90,.75)', margin: '14px 0 0', textWrap: 'pretty' }}>
        MAPAN adalah perjalanan persiapan menuju bab kehidupan berikutnya. Kamu akan melewati empat terminal untuk melihat kesiapan tubuh, keuangan, hati, serta makna hidupmu.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '24px 0 0' }}>
        {TERMINALS.map((t, i) => {
          const c = tone(t.id);
          return (
            <div key={t.id} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px', borderRadius: 16, border: '1px solid rgba(16,39,90,.10)', background: c.tint }}>
              <div style={{ width: 34, height: 34, borderRadius: 11, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 15, color: c.color }}>{i + 1}</div>
              <div>
                <div style={{ fontSize: 17, fontWeight: 800, letterSpacing: 0.3, color: c.color }}>{t.name}</div>
                <div style={{ fontSize: 14, color: 'rgba(16,39,90,.65)' }}>{t.tag}</div>
              </div>
            </div>
          );
        })}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 18, borderRadius: 16, background: '#10275A', color: '#fff' }}>
          <div style={{ width: 34, height: 34, borderRadius: 11, background: 'rgba(255,255,255,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="16" height="16" viewBox="0 0 16 16">
              <circle cx="8" cy="6" r="3.4" fill="none" stroke="#E0A32A" strokeWidth="2" />
              <path d="M8 10 L8 15" stroke="#E0A32A" strokeWidth="2" />
            </svg>
          </div>
          <div>
            <div style={{ fontSize: 17, fontWeight: 800, letterSpacing: 0.3 }}>THE NEXT CHAPTER</div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,.7)' }}>Tujuan perjalananmu</div>
          </div>
        </div>
      </div>
      <button
        onClick={() => app.go('profile')}
        style={{ width: '100%', height: 56, margin: '24px 0 0', border: 'none', borderRadius: 16, background: '#10275A', color: '#fff', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}
      >
        Siapkan Passport Saya
      </button>
    </div>
  );
}
