import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient.js';
import { CHECKIN_DOMAINS, QUESTIONS } from '../data.js';
import { computeZ, zToLevel, MIN_POPULATION } from '../statsHelper.js';

const COLMAP = {
  fitland: 'fitland_score',
  assetland: 'assetland_score',
  mindland: 'mindland_score',
  sosial: 'sosial_score',
  soulland: 'soulland_score',
};

const LEVELS = ['Perlu Perhatian', 'Mulai Berkembang', 'Cukup Siap', 'Siap', 'Sangat Siap'];
const LEVEL_COLORS = { 'Perlu Perhatian': '#B3261E', 'Mulai Berkembang': '#C9871A', 'Cukup Siap': '#6C4FB6', Siap: '#1E8A4C', 'Sangat Siap': '#0F6E3A' };

function domainStats(rows, domainId) {
  const col = COLMAP[domainId];
  const vals = rows.map((r) => r[col]).filter((v) => v !== null && v !== undefined);
  if (!vals.length) return { avg: null, n: 0, dist: null };
  const mean = vals.reduce((a, b) => a + b, 0) / vals.length;
  const variance = vals.reduce((a, b) => a + (b - mean) ** 2, 0) / vals.length;
  const sd = Math.sqrt(variance) || 1;
  const avg = Math.round(mean);

  if (vals.length < MIN_POPULATION) return { avg, n: vals.length, dist: null };

  const counts = { 'Perlu Perhatian': 0, 'Mulai Berkembang': 0, 'Cukup Siap': 0, Siap: 0, 'Sangat Siap': 0 };
  vals.forEach((v) => {
    const z = computeZ(v, { mean, sd });
    const lvl = zToLevel(z);
    if (lvl) counts[lvl.label] += 1;
  });
  const dist = LEVELS.map((label) => ({ label, pct: Math.round((counts[label] / vals.length) * 100) }));
  return { avg, n: vals.length, dist };
}

// Per-item breakdown: for each of the 32 questions, average every
// respondent's raw 1-5 answer to that specific item, converted to %.
function itemAverage(rows, questionIndex) {
  const key = 'q' + questionIndex;
  const vals = rows.map((r) => r.answers && r.answers[key]).filter((v) => v !== null && v !== undefined);
  if (!vals.length) return { pct: null, n: 0 };
  const mean = vals.reduce((a, b) => a + b, 0) / vals.length;
  return { pct: Math.round((mean / 5) * 100), n: vals.length };
}

export default function Dashboard({ app }) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDomain, setOpenDomain] = useState(null);

  useEffect(() => {
    let channel;
    (async () => {
      const { data } = await supabase.from('mapan_checkin_results').select('*').order('submitted_at', { ascending: false });
      setRows(data || []);
      setLoading(false);
    })();

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
        <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
          {CHECKIN_DOMAINS.map((d) => {
            const s = domainStats(rows, d.id);
            const isOpen = openDomain === d.id;
            const domainQuestions = QUESTIONS.map((q, i) => ({ ...q, i })).filter((q) => q.id === d.id);
            return (
              <div key={d.id} style={{ padding: '20px 22px', borderRadius: 20, background: '#fff', border: '1px solid rgba(16,39,90,.10)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 800, letterSpacing: 0.5, color: d.color }}>{d.label.toUpperCase()}</div>
                    {s.n > 0 && <div style={{ fontSize: 11.5, color: 'rgba(16,39,90,.45)', marginTop: 2 }}>berdasarkan {s.n} peserta</div>}
                  </div>
                  <div style={{ fontSize: 38, fontWeight: 800, color: '#10275A' }}>{s.avg === null ? '—' : `${s.avg}%`}</div>
                </div>
                {s.dist ? (
                  <>
                    <div style={{ display: 'flex', height: 14, borderRadius: 999, overflow: 'hidden', marginTop: 14 }}>
                      {s.dist.map((seg) => seg.pct > 0 && (
                        <div key={seg.label} style={{ width: `${seg.pct}%`, background: LEVEL_COLORS[seg.label] }} title={`${seg.label} ${seg.pct}%`} />
                      ))}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 12px', marginTop: 10 }}>
                      {s.dist.filter((seg) => seg.pct > 0).map((seg) => (
                        <span key={seg.label} style={{ fontSize: 11.5, fontWeight: 700, color: LEVEL_COLORS[seg.label], display: 'flex', alignItems: 'center', gap: 5 }}>
                          <span style={{ width: 8, height: 8, borderRadius: 999, background: LEVEL_COLORS[seg.label], display: 'inline-block' }} />
                          {seg.label} {seg.pct}%
                        </span>
                      ))}
                    </div>
                  </>
                ) : (
                  <div style={{ fontSize: 12.5, color: 'rgba(16,39,90,.5)', marginTop: 10 }}>
                    Belum ada peserta yang check-in untuk domain ini.
                  </div>
                )}

                <button
                  onClick={() => setOpenDomain(isOpen ? null : d.id)}
                  style={{ marginTop: 14, background: 'none', border: 'none', padding: 0, fontSize: 13, fontWeight: 700, color: d.color, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}
                >
                  {isOpen ? 'Sembunyikan' : 'Lihat'} rincian per pertanyaan {isOpen ? '▲' : '▼'}
                </button>

                {isOpen && (
                  <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10, borderTop: '1px solid rgba(16,39,90,.08)', paddingTop: 12 }}>
                    {domainQuestions.map((q) => {
                      const item = itemAverage(rows, q.i);
                      return (
                        <div key={q.i}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
                            <span style={{ fontSize: 13, lineHeight: 1.4, color: 'rgba(16,39,90,.75)', flex: 1 }}>{q.text}</span>
                            <span style={{ fontSize: 13, fontWeight: 800, color: '#10275A', flex: 'none' }}>{item.pct === null ? '—' : `${item.pct}%`}</span>
                          </div>
                          <div style={{ height: 6, borderRadius: 999, background: 'rgba(16,39,90,.08)', marginTop: 5, overflow: 'hidden' }}>
                            <div style={{ height: '100%', width: `${item.pct || 0}%`, background: d.color, borderRadius: 999 }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          <div style={{ padding: 14, borderRadius: 14, background: 'rgba(16,39,90,.05)', fontSize: 12, lineHeight: 1.55, color: 'rgba(16,39,90,.55)' }}>
            Data ini adalah agregat persepsi diri peserta, bukan diagnosis medis, finansial, atau psikologis. Gunakan sebagai bahan diskusi kelompok, bukan rujukan tunggal untuk keputusan individu.
          </div>
        </div>
      )}
    </div>
  );
}
