import { TERMINALS, tone } from '../data.js';

export default function Catatan({ app }) {
  const notes = [];
  TERMINALS.forEach((t) => {
    const c = tone(t.id);
    t.modules.forEach((m, i) => {
      const r = app.resp(t.id, i);
      if (r.reflection) {
        notes.push({ crumb: `${t.name} • MODUL ${i + 1}`, title: m.t, text: r.reflection, color: c.color, go: () => app.go('module', { t: t.id, m: i }) });
      }
    });
  });
  const list = notes.length ? notes : [{ crumb: 'BELUM ADA', title: 'Catatan refleksimu akan muncul di sini', text: 'Setiap refleksi yang kamu tulis di modul tersimpan otomatis di perangkat ini.', color: 'rgba(16,39,90,.45)', go: () => app.go('journey') }];
  const sub = notes.length ? `${notes.length} catatan tersimpan di perangkat ini.` : 'Belum ada catatan.';

  return (
    <div style={{ padding: '14px 20px 28px' }}>
      <h1 style={{ fontSize: 24, fontWeight: 800, letterSpacing: -0.4, margin: 0 }}>Catatan Refleksi</h1>
      <p style={{ fontSize: 15, lineHeight: 1.5, color: 'rgba(16,39,90,.65)', margin: '6px 0 0' }}>{sub}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '18px 0 0' }}>
        {list.map((n, i) => (
          <button key={i} onClick={n.go} style={{ width: '100%', textAlign: 'left', padding: 16, borderRadius: 16, background: '#fff', border: '1px solid rgba(16,39,90,.10)', cursor: 'pointer', color: '#10275A' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 9, height: 9, borderRadius: '50%', background: n.color }} />
              <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: 0.8, color: n.color }}>{n.crumb}</span>
            </div>
            <div style={{ fontSize: 16, fontWeight: 800, margin: '6px 0 0' }}>{n.title}</div>
            <div style={{ fontSize: 15, lineHeight: 1.5, color: 'rgba(16,39,90,.72)', marginTop: 4 }}>{n.text}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
