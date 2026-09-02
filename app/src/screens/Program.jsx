import { TERMINALS, tone } from '../data.js';
import Icon from '../components/Icon.jsx';

export default function Program({ app }) {
  return (
    <div style={{ padding: '14px 20px 28px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <button onClick={() => app.back()} style={{ width: 44, height: 44, borderRadius: 14, border: '1px solid rgba(16,39,90,.12)', background: '#fff', fontSize: 19, cursor: 'pointer', color: '#10275A' }}>←</button>
        <span style={{ fontSize: 18, fontWeight: 800 }}>Program Next Chapter</span>
      </div>
      <div style={{ margin: '18px 0 0', padding: 20, borderRadius: 20, background: '#FDF8EE', border: '1px solid rgba(224,163,42,.30)' }}>
        <p style={{ fontSize: 17, lineHeight: 1.65, margin: 0, textWrap: 'pretty' }}>
          Setelah menyelesaikan MAPAN Journey, peserta dapat melanjutkan ke program pendampingan pascapensiun sesuai kebutuhan dan paket yang dipilih. Peserta dapat memilih arketipe Next Chapter yang paling sesuai, sekaligus memperoleh pendampingan berkelanjutan pada aspek kesehatan, keuangan maupun psikologis sesuai keperluan.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '16px 0 0' }}>
        {TERMINALS.map((t) => {
          const c = tone(t.id);
          return (
            <div key={t.id} style={{ padding: 16, borderRadius: 16, background: c.tint, border: `1px solid ${c.border}` }}>
              <div style={{ width: 32, height: 32, borderRadius: 11, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${c.border}` }}>
                <Icon path={c.icon} size={19} color={c.color} />
              </div>
              <div style={{ fontSize: 15, fontWeight: 800, marginTop: 10 }}>{t.support}</div>
              <div style={{ fontSize: 13, color: 'rgba(16,39,90,.65)' }}>({t.nameTitle})</div>
            </div>
          );
        })}
      </div>
      <div style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(16,39,90,.65)', margin: '16px 0 0' }}>Pendampingan fleksibel sesuai paket yang kamu pilih dan sesuai kebutuhanmu.</div>
    </div>
  );
}
