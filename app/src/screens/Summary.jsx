import { SUMMARY_FIELDS } from '../data.js';

export default function Summary({ app }) {
  const { data } = app;

  const autoSummary = {
    identitas: app.resp('mindland', 7).reflection || '',
    nilai: (app.resp('soulland', 3).leaves || []).join(', '),
    orang: app.resp('mindland', 5).reflection || '',
    kebiasaan: data.commitments.fitland || '',
    keuangan: (app.resp('assetland', 3).chips || []).join(', ') || data.commitments.assetland || '',
    misi: app.resp('soulland', 7).reflection || '',
    legacy: app.resp('soulland', 3).reflection || '',
  };

  const fields = SUMMARY_FIELDS.map((f) => ({
    ...f,
    value: data.passportSummary[f.key] != null ? data.passportSummary[f.key] : autoSummary[f.key],
  }));

  return (
    <div style={{ padding: '14px 20px 28px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <button onClick={() => app.back()} style={{ width: 44, height: 44, borderRadius: 14, border: '1px solid rgba(16,39,90,.12)', background: '#fff', fontSize: 19, cursor: 'pointer', color: '#10275A' }}>←</button>
        <span style={{ fontSize: 18, fontWeight: 800 }}>My Passport Summary</span>
      </div>
      <p style={{ fontSize: 15, lineHeight: 1.55, color: 'rgba(16,39,90,.68)', margin: '14px 0 0' }}>Disusun dari jawabanmu. Kamu bisa memperbaikinya kapan saja.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, margin: '18px 0 0' }}>
        {fields.map((f) => (
          <div key={f.key} style={{ padding: 16, borderRadius: 16, background: '#fff', border: '1px solid rgba(16,39,90,.10)' }}>
            <div style={{ fontSize: 15, fontWeight: 800 }}>{f.label}</div>
            <textarea
              value={f.value || ''}
              onChange={(e) => { const v = e.target.value; app.upd((x) => { x.passportSummary[f.key] = v; }); }}
              rows={2}
              placeholder="Belum diisi"
              style={{ width: '100%', marginTop: 8, padding: 12, fontSize: 16, lineHeight: 1.5, borderRadius: 12, border: '1px solid rgba(16,39,90,.15)', background: '#FBF9F5', color: '#10275A', resize: 'none' }}
            />
          </div>
        ))}
      </div>
      <div style={{ fontSize: 13, fontWeight: 600, color: '#1E8A4C', margin: '10px 0 0', height: 18 }}>{app.saved ? 'Tersimpan di perangkat' : ''}</div>
      <button
        onClick={() => {
          const allVisas = ['fitland', 'assetland', 'mindland', 'soulland'].every((id) => !!data.visaStatus[id]);
          if (allVisas) app.go('nextchapter');
          else { const n = app.nextStop(); app.go(n.screen, n.params); }
        }}
        style={{ width: '100%', height: 56, margin: '12px 0 0', border: 'none', borderRadius: 16, background: '#10275A', color: '#fff', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}
      >
        Lanjut ke Next Chapter
      </button>
    </div>
  );
}
