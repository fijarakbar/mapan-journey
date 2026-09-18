import { useEffect, useState } from 'react';
import { CHECKIN_DOMAINS } from '../data.js';
import { fetchPopulationStats, computeZ, zToLevel, MIN_POPULATION } from '../statsHelper.js';

function absoluteBand(p) {
  return p < 50 ? 'Perlu Perhatian' : p < 65 ? 'Mulai Berkembang' : p < 80 ? 'Cukup Siap' : p < 90 ? 'Siap' : 'Sangat Siap';
}

export default function Result({ app }) {
  const sco = app.data.initialAssessment.scores || {};
  const [pop, setPop] = useState(null); // null = loading
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetchPopulationStats()
      .then((r) => { if (!cancelled) setPop(r); })
      .catch(() => { if (!cancelled) setError(true); });
    return () => { cancelled = true; };
  }, []);

  const usePopulation = pop && pop.n >= MIN_POPULATION;

  const rows = CHECKIN_DOMAINS.map((d) => {
    const p = sco[d.id] == null ? 0 : sco[d.id];
    let level = null;
    if (usePopulation) {
      const z = computeZ(p, pop.stats[d.id]);
      level = zToLevel(z);
    }
    return { name: d.label, color: d.color, pct: p, band: level ? level.label : absoluteBand(p), bandColor: level ? level.color : d.color };
  });

  return (
    <div style={{ padding: '22px 24px 32px' }}>
      <h1 style={{ fontSize: 26, fontWeight: 800, letterSpacing: -0.5, margin: 0 }}>Titik Awal Perjalananmu</h1>
      <p style={{ fontSize: 16, lineHeight: 1.55, color: 'rgba(16,39,90,.7)', margin: '10px 0 0', textWrap: 'pretty' }}>
        {pop === null && !error
          ? 'Memuat gambaran dibanding peserta lain...'
          : usePopulation
          ? `Ini posisimu dibanding ${pop.n} peserta lain yang sudah check-in sejauh ini — bukan penilaian pribadi mutlak, dan semuanya bisa terus dikembangkan. Semakin banyak yang check-in, semakin akurat gambaran ini.`
          : 'Kamu peserta pertama yang check-in, jadi belum ada pembanding sama sekali. Ini skor mentahmu sendiri dulu.'}
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, margin: '22px 0 0' }}>
        {rows.map((s) => (
          <div key={s.name} style={{ padding: '16px 18px', borderRadius: 16, background: '#fff', border: '1px solid rgba(16,39,90,.10)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontSize: 16, fontWeight: 800, letterSpacing: 0.3, color: s.color }}>{s.name}</span>
              <span style={{ fontSize: 18, fontWeight: 800 }}>{s.pct}%</span>
            </div>
            <div style={{ height: 10, borderRadius: 6, background: 'rgba(16,39,90,.08)', margin: '10px 0 8px', overflow: 'hidden' }}>
              <div style={{ height: '100%', borderRadius: 6, width: `${s.pct}%`, background: s.color }} />
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, color: s.bandColor }}>{s.band}</div>
          </div>
        ))}
      </div>
      <button
        onClick={() => app.setState({ screen: 'home', params: {}, stack: [] })}
        style={{ width: '100%', height: 56, margin: '22px 0 0', border: 'none', borderRadius: 16, background: '#10275A', color: '#fff', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}
      >
        Aktifkan MAPAN Passport
      </button>
      <div style={{ marginTop: 18, padding: 16, borderRadius: 14, background: 'rgba(16,39,90,.05)', fontSize: 12.5, lineHeight: 1.6, color: 'rgba(16,39,90,.6)' }}>
        <strong style={{ color: 'rgba(16,39,90,.8)' }}>Bukan nasihat medis, finansial, atau psikologis profesional.</strong> Ini murni gambaran persepsi diri (self-assessment) berdasarkan jawabanmu sendiri, sifatnya subjektif dan bisa berubah kapan saja. Jangan jadikan ini satu-satunya rujukan untuk keputusan kesehatan, keuangan, atau hidup yang penting — untuk itu, tetap konsultasikan ke dokter, perencana keuangan, atau profesional yang berwenang.
      </div>
    </div>
  );
}
