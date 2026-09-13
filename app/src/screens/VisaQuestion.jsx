import { tone } from '../data.js';

export default function VisaQuestion({ app }) {
  const { data, params } = app;
  const tid = params.t || 'fitland';
  const T = app.term(tid);
  const tc = tone(tid);
  const commitment = data.commitments[tid] || '';

  const claimVisa = () => {
    app.upd((x) => {
      x.visaStatus[tid] = true;
      if (!x.passportStamps.some((p) => p.id === tid)) x.passportStamps.push({ id: tid, label: T.visa, date: new Date().toISOString() });
    }, true);
    app.go('visa', { t: tid });
  };

  return (
    <div style={{ padding: '14px 20px 28px' }}>
      <button onClick={() => app.back()} style={{ width: 44, height: 44, borderRadius: 14, border: '1px solid rgba(16,39,90,.12)', background: '#fff', fontSize: 19, cursor: 'pointer', color: '#10275A' }}>←</button>
      <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.2, color: tc.color, margin: '18px 0 0' }}>SEBELUM VISA {T.name}</div>
      <h1 style={{ fontSize: 23, fontWeight: 800, lineHeight: 1.35, letterSpacing: -0.3, margin: '8px 0 0', textWrap: 'pretty' }}>{T.visaQ}</h1>
      <textarea
        value={commitment}
        onChange={(e) => { const v = e.target.value; app.upd((x) => { x.commitments[tid] = v; }); }}
        rows={6}
        placeholder="Tulis komitmenmu..."
        style={{ width: '100%', margin: '18px 0 0', padding: 16, fontSize: 17, lineHeight: 1.6, borderRadius: 18, border: '1px solid rgba(16,39,90,.18)', background: '#fff', color: '#10275A', resize: 'none' }}
      />
      <div style={{ fontSize: 13, fontWeight: 600, color: '#1E8A4C', margin: '10px 0 0', height: 18 }}>{app.saved ? 'Tersimpan di perangkat' : ''}</div>
      <button onClick={claimVisa} style={{ width: '100%', height: 56, margin: '12px 0 0', border: 'none', borderRadius: 16, background: tc.color, color: '#fff', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>
        Ambil Visa
      </button>
      <div style={{ fontSize: 14, color: 'rgba(16,39,90,.6)', textAlign: 'center', margin: '10px 0 0' }}>Kamu bisa kembali ke bagian ini kapan saja.</div>
    </div>
  );
}
