import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient.js';
import { CHECKIN_DOMAINS, QUESTIONS, ARCHETYPES, ARCHETYPE_IDEAS } from '../data.js';
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
const PACKAGES = [
  { id: 'essential', label: 'Essential' },
  { id: 'professional', label: 'Professional' },
  { id: 'signature', label: 'Signature' },
];

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

function itemAverage(rows, questionIndex) {
  const key = 'q' + questionIndex;
  const vals = rows.map((r) => r.answers && r.answers[key]).filter((v) => v !== null && v !== undefined);
  if (!vals.length) return { pct: null, n: 0 };
  const mean = vals.reduce((a, b) => a + b, 0) / vals.length;
  return { pct: Math.round((mean / 5) * 100), n: vals.length };
}

function BatchManager({ app }) {
  const [batches, setBatches] = useState(null);
  const [coachingRequests, setCoachingRequests] = useState(null);
  const [instansi, setInstansi] = useState('');
  const [pkg, setPkg] = useState('essential');
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState('');
  const [copiedCode, setCopiedCode] = useState('');

  const refresh = async () => {
    const rows = await app.listBatches();
    setBatches(rows);
    const { data: reqs } = await supabase
      .from('mapan_profiles')
      .select('id, coaching_requested_at, mapan_batches(instansi, package)')
      .not('coaching_requested_at', 'is', null)
      .order('coaching_requested_at', { ascending: false });
    setCoachingRequests(reqs || []);
  };

  useEffect(() => { refresh(); }, []);

  const submit = async () => {
    if (!instansi.trim()) { setError('Isi nama instansi dulu.'); return; }
    setCreating(true);
    setError('');
    const res = await app.createBatch(instansi, pkg);
    setCreating(false);
    if (res.error) { setError(res.error); return; }
    setInstansi('');
    refresh();
  };

  const copy = (code) => {
    navigator.clipboard?.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(''), 1500);
  };

  const toggleLock = async (b) => {
    await app.lockBatch(b.id, !b.locked_at);
    refresh();
  };

  return (
    <div style={{ marginTop: 20 }}>
      {coachingRequests !== null && coachingRequests.length > 0 && (
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: 'rgba(16,39,90,.6)', letterSpacing: 0.5 }}>PERMINTAAN COACHING INDIVIDUAL ({coachingRequests.length})</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 10 }}>
            {coachingRequests.map((r) => (
              <div key={r.id} style={{ padding: 12, borderRadius: 12, background: '#EAF4EC', border: '1px solid rgba(30,138,76,.25)', fontSize: 13.5 }}>
                <strong>{r.mapan_batches ? r.mapan_batches.instansi : 'Tanpa instansi'}</strong> - diajukan {new Date(r.coaching_requested_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
              </div>
            ))}
          </div>
        </div>
      )}
      <div style={{ padding: 18, borderRadius: 18, background: '#fff', border: '1px solid rgba(16,39,90,.10)' }}>
        <div style={{ fontSize: 15, fontWeight: 800 }}>Buat Batch Baru</div>
        <input
          value={instansi}
          onChange={(e) => setInstansi(e.target.value)}
          placeholder="Nama instansi, misal: PT Angkasa Jaya"
          style={{ width: '100%', height: 48, marginTop: 12, padding: '0 14px', fontSize: 15, borderRadius: 12, border: '1px solid rgba(16,39,90,.18)' }}
        />
        <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
          {PACKAGES.map((p) => (
            <button
              key={p.id}
              onClick={() => setPkg(p.id)}
              style={{ flex: 1, height: 42, borderRadius: 12, fontSize: 13.5, fontWeight: 700, cursor: 'pointer', border: `1.5px solid ${pkg === p.id ? '#10275A' : 'rgba(16,39,90,.15)'}`, background: pkg === p.id ? '#10275A' : '#fff', color: pkg === p.id ? '#fff' : 'rgba(16,39,90,.7)' }}
            >
              {p.label}
            </button>
          ))}
        </div>
        {!!error && <div style={{ fontSize: 13, color: '#B3261E', marginTop: 8 }}>{error}</div>}
        <button
          onClick={submit}
          disabled={creating}
          style={{ width: '100%', height: 48, marginTop: 12, border: 'none', borderRadius: 12, background: '#1E8A4C', color: '#fff', fontSize: 15, fontWeight: 700, cursor: creating ? 'default' : 'pointer' }}
        >
          {creating ? 'Membuat...' : '+ Buat Batch & Kode Undangan'}
        </button>
      </div>

      <div style={{ marginTop: 20, fontSize: 13, fontWeight: 800, color: 'rgba(16,39,90,.6)', letterSpacing: 0.5 }}>BATCH YANG SUDAH DIBUAT</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 10 }}>
        {batches === null && <div style={{ color: 'rgba(16,39,90,.5)', fontSize: 14 }}>Memuat...</div>}
        {batches !== null && batches.length === 0 && <div style={{ color: 'rgba(16,39,90,.5)', fontSize: 14 }}>Belum ada batch dibuat.</div>}
        {batches && batches.map((b) => (
          <div key={b.id} style={{ padding: 14, borderRadius: 14, background: '#fff', border: '1px solid rgba(16,39,90,.10)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div style={{ fontWeight: 800, fontSize: 15 }}>{b.instansi}</div>
              <span style={{ fontSize: 11.5, fontWeight: 700, textTransform: 'uppercase', color: '#10275A', background: 'rgba(16,39,90,.08)', padding: '3px 8px', borderRadius: 999 }}>{b.package}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
              <code style={{ fontSize: 14, fontWeight: 700, background: '#FBF9F5', padding: '6px 10px', borderRadius: 8, border: '1px dashed rgba(16,39,90,.2)' }}>{b.invite_code}</code>
              <button onClick={() => copy(b.invite_code)} style={{ fontSize: 12.5, fontWeight: 700, color: '#10275A', background: 'none', border: 'none', cursor: 'pointer' }}>
                {copiedCode === b.invite_code ? 'Tersalin!' : 'Copy'}
              </button>
            </div>
            <button
              onClick={() => toggleLock(b)}
              style={{ marginTop: 10, fontSize: 12.5, fontWeight: 700, padding: '6px 12px', borderRadius: 8, border: `1px solid ${b.locked_at ? 'rgba(179,38,30,.4)' : 'rgba(16,39,90,.2)'}`, background: b.locked_at ? '#FBEAEA' : '#fff', color: b.locked_at ? '#B3261E' : 'rgba(16,39,90,.7)', cursor: 'pointer' }}
            >
              {b.locked_at ? '[LOCK] Terkunci -- klik untuk buka' : '[UNLOCK] Kunci pilihan batch ini'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function NextChapterOverview({ app }) {
  const [rows, setRows] = useState(null);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from('mapan_profiles')
        .select('primary_archetype, secondary_archetypes, archetype_ideas, mapan_batches(instansi, package)')
        .not('primary_archetype', 'is', null);
      setRows(data || []);
    })();
  }, []);

  if (rows === null) return <div style={{ marginTop: 20, color: 'rgba(16,39,90,.5)', fontSize: 14 }}>Memuat...</div>;

  const archetypeCounts = ARCHETYPES.map((a) => ({
    ...a,
    n: rows.filter((r) => r.primary_archetype === a.id).length,
  }));
  const maxN = Math.max(1, ...archetypeCounts.map((a) => a.n));

  return (
    <div style={{ marginTop: 20 }}>
      <div style={{ fontSize: 13, fontWeight: 800, color: 'rgba(16,39,90,.6)', letterSpacing: 0.5 }}>ARKETIPE UTAMA ({rows.length} PESERTA SUDAH MEMILIH)</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 10 }}>
        {archetypeCounts.map((a) => (
          <div key={a.id} style={{ padding: 14, borderRadius: 14, background: '#fff', border: '1px solid rgba(16,39,90,.10)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 14, fontWeight: 800, color: a.color }}>{a.title}</span>
              <span style={{ fontSize: 14, fontWeight: 800 }}>{a.n} orang</span>
            </div>
            <div style={{ height: 8, borderRadius: 999, background: 'rgba(16,39,90,.08)', marginTop: 8, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${(a.n / maxN) * 100}%`, background: a.color, borderRadius: 999 }} />
            </div>
          </div>
        ))}
      </div>

      <div style={{ fontSize: 13, fontWeight: 800, color: 'rgba(16,39,90,.6)', letterSpacing: 0.5, marginTop: 24 }}>IDE PALING DIMINATI (per arketipe)</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 10 }}>
        {ARCHETYPES.map((a) => {
          const counts = {};
          rows.forEach((r) => {
            const picks = (r.archetype_ideas && r.archetype_ideas[a.id]) || [];
            picks.forEach((name) => { counts[name] = (counts[name] || 0) + 1; });
          });
          const top = Object.entries(counts).sort((x, y) => y[1] - x[1]).slice(0, 5);
          if (!top.length) return null;
          return (
            <div key={a.id} style={{ padding: 14, borderRadius: 14, background: '#fff', border: '1px solid rgba(16,39,90,.10)' }}>
              <div style={{ fontSize: 13.5, fontWeight: 800, color: a.color }}>{a.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 8 }}>
                {top.map(([name, n]) => (
                  <div key={name} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
                    <span style={{ color: 'rgba(16,39,90,.75)' }}>{name}</span>
                    <span style={{ fontWeight: 700, color: '#10275A' }}>{n}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        {ARCHETYPES.every((a) => {
          const has = rows.some((r) => r.archetype_ideas && r.archetype_ideas[a.id] && r.archetype_ideas[a.id].length);
          return !has;
        }) && <div style={{ color: 'rgba(16,39,90,.5)', fontSize: 14 }}>Belum ada peserta yang memilih ide spesifik.</div>}
      </div>
    </div>
  );
}

export default function Dashboard({ app }) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDomain, setOpenDomain] = useState(null);
  const [tab, setTab] = useState('checkin');

  useEffect(() => {
    if (app.role !== 'facilitator') return;
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
  }, [app.role]);

  if (app.role !== 'facilitator') {
    return (
      <div style={{ padding: '14px 20px 32px' }}>
        <button onClick={() => app.go('profil')} style={{ width: 44, height: 44, borderRadius: 14, border: '1px solid rgba(16,39,90,.12)', background: '#fff', fontSize: 19, cursor: 'pointer', color: '#10275A' }}>←</button>
        <div style={{ marginTop: 40, textAlign: 'center', color: 'rgba(16,39,90,.55)', fontSize: 15, lineHeight: 1.6 }}>
          Halaman ini khusus fasilitator.
        </div>
      </div>
    );
  }

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

      <div style={{ display: 'flex', gap: 8, marginTop: 18 }}>
        <button
          onClick={() => setTab('checkin')}
          style={{ flex: 1, height: 42, borderRadius: 12, fontSize: 12.5, fontWeight: 700, cursor: 'pointer', border: `1.5px solid ${tab === 'checkin' ? '#10275A' : 'rgba(16,39,90,.15)'}`, background: tab === 'checkin' ? '#10275A' : '#fff', color: tab === 'checkin' ? '#fff' : 'rgba(16,39,90,.7)' }}
        >
          Check-In
        </button>
        <button
          onClick={() => setTab('nextchapter')}
          style={{ flex: 1, height: 42, borderRadius: 12, fontSize: 12.5, fontWeight: 700, cursor: 'pointer', border: `1.5px solid ${tab === 'nextchapter' ? '#10275A' : 'rgba(16,39,90,.15)'}`, background: tab === 'nextchapter' ? '#10275A' : '#fff', color: tab === 'nextchapter' ? '#fff' : 'rgba(16,39,90,.7)' }}
        >
          Next Chapter
        </button>
        <button
          onClick={() => setTab('batch')}
          style={{ flex: 1, height: 42, borderRadius: 12, fontSize: 12.5, fontWeight: 700, cursor: 'pointer', border: `1.5px solid ${tab === 'batch' ? '#10275A' : 'rgba(16,39,90,.15)'}`, background: tab === 'batch' ? '#10275A' : '#fff', color: tab === 'batch' ? '#fff' : 'rgba(16,39,90,.7)' }}
        >
          Kelola Batch
        </button>
      </div>

      {tab === 'batch' && <BatchManager app={app} />}
      {tab === 'nextchapter' && <NextChapterOverview app={app} />}

      {tab === 'checkin' && (loading ? (
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
                  <div style={{ fontSize: 38, fontWeight: 800, color: '#10275A' }}>{s.avg === null ? '--' : `${s.avg}%`}</div>
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
                  {isOpen ? 'Sembunyikan' : 'Lihat'} rincian per pertanyaan {isOpen ? '^' : 'v'}
                </button>

                {isOpen && (
                  <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10, borderTop: '1px solid rgba(16,39,90,.08)', paddingTop: 12 }}>
                    {domainQuestions.map((q) => {
                      const item = itemAverage(rows, q.i);
                      return (
                        <div key={q.i}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
                            <span style={{ fontSize: 13, lineHeight: 1.4, color: 'rgba(16,39,90,.75)', flex: 1 }}>{q.text}</span>
                            <span style={{ fontSize: 13, fontWeight: 800, color: '#10275A', flex: 'none' }}>{item.pct === null ? '--' : `${item.pct}%`}</span>
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
      ))}
    </div>
  );
}
