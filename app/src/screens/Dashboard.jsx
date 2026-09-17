import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient.js';

const DOMAINS = [
  { key: 'fitland_score', label: 'Fitland', color: '#1E8A4C' },
  { key: 'assetland_score', label: 'Assetland', color: '#C9871A' },
  { key: 'mindland_score', label: 'Mindland', color: '#6C4FB6' },
  { key: 'soulland_score', label: 'Soulland', color: '#D9662F' },
  { key: 'next_score', label: 'Next Chapter', color: '#10275A' },
];

function avg(rows, key) {
  const vals = rows.map((r) => r[key]).filter((v) => v !== null && v !== undefined);
  if (!vals.length) return null;
  return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
}

export default function Dashboard({ app }) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let channel;
    (async () => {
      const { data } = await supabase.from('mapan_checkin_results').select('*').order('submitted_at', { ascending: false });
      setRows(data || []);
      setLoading(false);
    })();

    // Live updates: any insert/update to the results table refreshes the list.
    channel = supabase
      .channel('mapan_checkin_results_live')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'mapan_checkin_results' }, (payload) => {
        setRows((prev) => {
          const next = prev.filter((r) => r.id !== payload.new?.id && r.id !== payload.old?.id);
          if (payload.eventType !== 'DELETE') next.unshift(payload.new);
          return next.sort((a, b) => new Date(b.submitted_at) - new Date(a.submitted_at));
        });
      })
      .subscribe();

    return () => { if (channel) supabase.removeChannel(channel); };
  }, []);

  return (
    <div style={{ padding: '14px 20px 32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <button onClick={() => app.go('profil')} style={{ width: 44, height: 44, borderRadius: 14, border: '1px solid rgba(16,39,90,.12)', background: '#fff', fontSize: 19, cursor: 'pointer', color: '#10275A' }}>←</button>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.3, margin: 0 }}>Dashboard Live</h1>
          <div style={{ fontSize: 13, color: 'rgba(16,39,90,.55)', display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
            <span style={{ width: 8, height: 8, borderRadius: 999, background: '#1E8A4C', display: 'inline-block' }} />
            {rows.length} peserta sudah check-in
          </div>
        </div>
      </div>

      {loading ? (
        <div style={{ marginTop: 40, textAlign: 'center', color: 'rgba(16,39,90,.5)' }}>Memuat...</div>
      ) : (
        <>
          <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {DOMAINS.map((d) => {
              const a = avg(rows, d.key);
              return (
                <div key={d.key} style={{ padding: 16, borderRadius: 16, background: '#fff', border: '1px solid rgba(16,39,90,.10)' }}>
                  <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 0.5, color: d.color }}>{d.label.toUpperCase()}</div>
                  <div style={{ fontSize: 30, fontWeight: 800, marginTop: 6, color: '#10275A' }}>{a === null ? '—' : `${a}%`}</div>
                  <div style={{ fontSize: 12, color: 'rgba(16,39,90,.5)', marginTop: 2 }}>rata-rata</div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: 24, fontSize: 14, fontWeight: 800, color: 'rgba(16,39,90,.6)', letterSpacing: 0.5 }}>SUBMISI TERBARU</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 10 }}>
            {rows.length === 0 && <div style={{ color: 'rgba(16,39,90,.5)', fontSize: 14 }}>Belum ada peserta check-in.</div>}
            {rows.map((r) => (
              <div key={r.id} style={{ padding: 14, borderRadius: 14, background: '#fff', border: '1px solid rgba(16,39,90,.10)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div style={{ fontWeight: 800, fontSize: 15 }}>{r.nama || 'Tanpa nama'}</div>
                  <div style={{ fontSize: 12, color: 'rgba(16,39,90,.45)' }}>{new Date(r.submitted_at).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}</div>
                </div>
                {!!r.instansi && <div style={{ fontSize: 13, color: 'rgba(16,39,90,.55)' }}>{r.instansi}</div>}
                <div style={{ display: 'flex', gap: 6, marginTop: 8, flexWrap: 'wrap' }}>
                  {DOMAINS.map((d) => r[d.key] != null && (
                    <span key={d.key} style={{ fontSize: 11.5, fontWeight: 700, padding: '4px 9px', borderRadius: 999, background: d.color + '1A', color: d.color }}>
                      {d.label} {r[d.key]}%
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
