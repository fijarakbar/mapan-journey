import { NC_FIELDS } from '../data.js';

export default function MyNextChapter({ app }) {
  const { data } = app;

  return (
    <div style={{ padding: '14px 20px 28px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <button onClick={() => app.back()} style={{ width: 44, height: 44, borderRadius: 14, border: '1px solid rgba(16,39,90,.12)', background: '#fff', fontSize: 19, cursor: 'pointer', color: '#10275A' }}>←</button>
        <span style={{ fontSize: 18, fontWeight: 800 }}>My Next Chapter</span>
      </div>
      <p style={{ fontSize: 15, lineHeight: 1.55, color: 'rgba(16,39,90,.68)', margin: '14px 0 0' }}>Lengkapi sebisamu. Refleksimu tersimpan otomatis.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, margin: '18px 0 0' }}>
        {NC_FIELDS.map((f) => (
          <div key={f.key} style={{ padding: 16, borderRadius: 16, background: '#fff', border: '1px solid rgba(16,39,90,.10)' }}>
            <div style={{ fontSize: 16, fontWeight: 800 }}>{f.label}</div>
            <textarea
              value={data.nextChapter.plan[f.key] || ''}
              onChange={(e) => { const v = e.target.value; app.upd((x) => { x.nextChapter.plan[f.key] = v; }); }}
              rows={2}
              placeholder="Tulis di sini..."
              style={{ width: '100%', marginTop: 8, padding: 12, fontSize: 16, lineHeight: 1.5, borderRadius: 12, border: '1px solid rgba(16,39,90,.15)', background: '#FBF9F5', color: '#10275A', resize: 'none' }}
            />
          </div>
        ))}
      </div>
      <div style={{ fontSize: 13, fontWeight: 600, color: '#1E8A4C', margin: '10px 0 0', height: 18 }}>{app.saved ? 'Tersimpan di perangkat' : ''}</div>
      <button onClick={() => app.go('plan90')} style={{ width: '100%', height: 56, margin: '12px 0 0', border: 'none', borderRadius: 16, background: '#10275A', color: '#fff', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>
        Lanjut ke Rencana 90 Hari
      </button>
    </div>
  );
}
