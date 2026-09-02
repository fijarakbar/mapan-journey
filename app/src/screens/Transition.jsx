import { TERMINALS } from '../data.js';
import IllustrationPlaceholder from '../components/IllustrationPlaceholder.jsx';

const COPY = [
  { title: 'Kendaraanmu sudah dipersiapkan.', body: 'Sekarang waktunya memastikan bekal perjalananmu cukup.', cta: 'Berangkat ke Assetland' },
  { title: 'Bekalmu sudah dihitung.', body: 'Sekarang waktunya menyiapkan hati dan identitasmu.', cta: 'Berangkat ke Mindland' },
  { title: 'Hatimu sudah lebih siap.', body: 'Sekarang waktunya menemukan makna yang menjadi kompasmu.', cta: 'Berangkat ke Soulland' },
  { title: 'Empat terminal telah kamu lalui.', body: 'Waktunya melewati Immigration dan melihat passport perjalananmu.', cta: 'Menuju Immigration' },
];

export default function Transition({ app }) {
  const { params } = app;
  const tid = params.t || 'fitland';
  const idx = TERMINALS.map((x) => x.id).indexOf(tid);
  const copy = COPY[idx < 0 ? 0 : idx];
  const go = () => { if (idx >= 3) app.go('immigration'); else app.go('terminal', { t: TERMINALS[idx + 1].id }); };

  return (
    <div style={{ padding: '30px 24px', minHeight: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <IllustrationPlaceholder label="ilustrasi: jalan menuju terminal berikutnya" height={170} style={{ background: 'repeating-linear-gradient(135deg,#EDF1F7 0 10px,#E4EAF3 10px 20px)', alignItems: 'center' }} />
      <h1 style={{ fontSize: 26, fontWeight: 800, lineHeight: 1.25, letterSpacing: -0.5, margin: '26px 0 0', textWrap: 'pretty' }}>{copy.title}</h1>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(16,39,90,.75)', margin: '12px 0 0', textWrap: 'pretty' }}>{copy.body}</p>
      <button onClick={go} style={{ width: '100%', height: 56, margin: '26px 0 0', border: 'none', borderRadius: 16, background: '#10275A', color: '#fff', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>
        {copy.cta}
      </button>
    </div>
  );
}
