import { STATUSES } from '../data.js';

const PERIODS = [
  { key: 'd30', title: '30 HARI', color: '#1E8A4C' },
  { key: 'd60', title: '60 HARI', color: '#C9871A' },
  { key: 'd90', title: '90 HARI', color: '#10275A' },
];

export default function Plan90({ app }) {
  const { data, drafts, setDrafts } = app;

  return (
    <div style={{ padding: '14px 20px 28px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <button onClick={() => app.back()} style={{ width: 44, height: 44, borderRadius: 14, border: '1px solid rgba(16,39,90,.12)', background: '#fff', fontSize: 19, cursor: 'pointer', color: '#10275A' }}>←</button>
        <span style={{ fontSize: 18, fontWeight: 800 }}>Rencana 90 Hari</span>
      </div>
      <p style={{ fontSize: 15, lineHeight: 1.55, color: 'rgba(16,39,90,.68)', margin: '14px 0 0' }}>Maksimal tiga langkah per periode. Sederhana saja.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, margin: '18px 0 0' }}>
        {PERIODS.map((p) => {
          const list = data.ninetyDayPlan[p.key] || [];
          const draft = drafts[p.key] || '';
          return (
            <div key={p.key} style={{ padding: 18, borderRadius: 18, background: '#fff', border: '1px solid rgba(16,39,90,.10)' }}>
              <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: 0.3, color: p.color }}>{p.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, margin: '12px 0 0' }}>
                {list.map((a, i) => {
                  const done = a.status === 'Selesai';
                  const run = a.status === 'Sedang Berjalan';
                  const bg = done ? '#EAF4EC' : run ? '#FDF3DF' : '#fff';
                  const fg = done ? '#1E6E42' : run ? '#8A5B10' : 'rgba(16,39,90,.7)';
                  const border = done ? 'rgba(30,138,76,.35)' : run ? 'rgba(201,135,26,.35)' : 'rgba(16,39,90,.15)';
                  return (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', borderRadius: 12, background: '#FBF9F5', border: '1px solid rgba(16,39,90,.10)' }}>
                      <span style={{ flex: 1, fontSize: 16, lineHeight: 1.4, fontWeight: 600 }}>{a.text}</span>
                      <button
                        onClick={() => app.upd((x) => { const it = x.ninetyDayPlan[p.key][i]; it.status = STATUSES[(STATUSES.indexOf(it.status) + 1) % 3]; }, true)}
                        style={{ flex: 'none', padding: '8px 12px', minHeight: 40, borderRadius: 10, border: `1px solid ${border}`, background: bg, color: fg, fontSize: 13, fontWeight: 700, cursor: 'pointer' }}
                      >
                        {done ? '✓ Selesai' : a.status}
                      </button>
                      <button onClick={() => app.upd((x) => { x.ninetyDayPlan[p.key].splice(i, 1); })} style={{ border: 'none', background: 'none', fontSize: 20, color: 'rgba(16,39,90,.4)', cursor: 'pointer' }}>×</button>
                    </div>
                  );
                })}
              </div>
              <div style={{ display: 'flex', gap: 8, margin: '10px 0 0' }}>
                <input
                  value={draft}
                  onChange={(e) => { const v = e.target.value; setDrafts((d) => ({ ...d, [p.key]: v })); }}
                  placeholder="Tambah langkah"
                  style={{ flex: 1, height: 50, padding: '0 14px', fontSize: 16, borderRadius: 12, border: '1px solid rgba(16,39,90,.18)', background: '#fff', color: '#10275A' }}
                />
                <button
                  onClick={() => {
                    const v = draft.trim();
                    if (!v || list.length >= 3) return;
                    app.upd((x) => { x.ninetyDayPlan[p.key].push({ text: v, status: 'Belum Dimulai' }); });
                    setDrafts((d) => ({ ...d, [p.key]: '' }));
                  }}
                  style={{ width: 88, height: 50, border: 'none', borderRadius: 12, background: p.color, color: '#fff', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}
                >
                  Tambah
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => { if (['fitland', 'assetland', 'mindland', 'soulland'].every((id) => !!data.visaStatus[id])) app.go('arrival'); }}
        style={{ width: '100%', height: 56, margin: '18px 0 0', border: 'none', borderRadius: 16, background: '#10275A', color: '#fff', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}
      >
        Selesaikan Rencana
      </button>
    </div>
  );
}
