import { QUESTIONS, tone } from '../data.js';

export default function CheckIn({ app }) {
  const { data } = app;
  const answers = data.initialAssessment.answers;
  const answered = Object.keys(answers).length;
  const cta = answered >= QUESTIONS.length ? 'Lihat Titik Awal Perjalananmu' : `Terjawab ${answered} dari ${QUESTIONS.length}`;
  const ctaBg = answered >= QUESTIONS.length ? '#10275A' : 'rgba(16,39,90,.35)';

  const pick = (i, n) => app.upd((x) => { x.initialAssessment.answers['q' + i] = n; }, true);

  const finish = () => {
    if (answered < QUESTIONS.length) return;
    const sum = {};
    const cnt = {};
    QUESTIONS.forEach((q, i) => {
      const v = answers['q' + i] || 3;
      sum[q.id] = (sum[q.id] || 0) + v;
      cnt[q.id] = (cnt[q.id] || 0) + 1;
    });
    const scores = {};
    Object.keys(sum).forEach((k) => { scores[k] = Math.round((sum[k] / cnt[k] / 5) * 100); });
    app.upd((x) => { x.initialAssessment.scores = scores; x.initialAssessment.done = true; }, true);
    app.syncCheckinResult({ ...data, initialAssessment: { ...data.initialAssessment, scores } });
    app.go('result');
  };

  return (
    <div style={{ padding: '22px 24px 32px' }}>
      <h1 style={{ fontSize: 26, fontWeight: 800, letterSpacing: -0.5, margin: 0 }}>Check-In Awal</h1>
      <p style={{ fontSize: 16, lineHeight: 1.55, color: 'rgba(16,39,90,.7)', margin: '10px 0 0', textWrap: 'pretty' }}>
        Bukan tes, bukan diagnosa. Hanya cara melihat titik awal perjalananmu. Pilih 1 (belum) sampai 5 (sudah sangat).
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, margin: '22px 0 0' }}>
        {QUESTIONS.map((q, i) => {
          const c = tone(q.id);
          const val = answers['q' + i];
          return (
            <div key={i} style={{ padding: 18, borderRadius: 18, background: '#fff', border: '1px solid rgba(16,39,90,.10)', boxShadow: '0 1px 2px rgba(16,39,90,.04)' }}>
              <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.2, color: c.color }}>{q.area}</div>
              <div style={{ fontSize: 16, lineHeight: 1.5, fontWeight: 600, margin: '6px 0 14px', textWrap: 'pretty' }}>{q.text}</div>
              <div style={{ display: 'flex', gap: 8 }}>
                {[1, 2, 3, 4, 5].map((n) => {
                  const on = val === n;
                  return (
                    <button
                      key={n}
                      onClick={() => pick(i, n)}
                      style={{ flex: 1, height: 48, borderRadius: 12, fontSize: 16, fontWeight: 700, cursor: 'pointer', border: `1px solid ${on ? c.color : 'rgba(16,39,90,.15)'}`, background: on ? c.color : '#FBF9F5', color: on ? '#fff' : 'rgba(16,39,90,.75)' }}
                    >
                      {n}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={finish} style={{ width: '100%', height: 56, margin: '22px 0 0', border: 'none', borderRadius: 16, background: ctaBg, color: '#fff', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>
        {cta}
      </button>
    </div>
  );
}
