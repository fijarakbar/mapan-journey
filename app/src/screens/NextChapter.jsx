import { useState } from 'react';
import { TERMINALS, ARCHETYPES } from '../data.js';

export default function NextChapter({ app }) {
  const { data } = app;
  const [requesting, setRequesting] = useState(false);
  const [requested, setRequested] = useState(!!data.nextChapter.coachingRequested);
  const allVisas = TERMINALS.every((t) => !!data.visaStatus[t.id]);
  const primary = data.nextChapter.primary;
  const locked = !!data.nextChapter.locked || !!app.batchLocked;

  const askCoaching = async () => {
    setRequesting(true);
    const res = await app.requestCoaching();
    setRequesting(false);
    if (!res.error) {
      setRequested(true);
      app.upd((x) => { x.nextChapter.coachingRequested = true; x.nextChapter.locked = true; }, true);
    }
  };

  const select = (id) => {
    if (locked) return;
    app.upd((x) => {
      const nc = x.nextChapter;
      if (nc.primary === id) { nc.primary = null; return; }
      if (!nc.primary) { nc.primary = id; nc.secondary = nc.secondary.filter((i) => i !== id); return; }
      const at = nc.secondary.indexOf(id);
      if (at >= 0) nc.secondary.splice(at, 1);
      else if (nc.secondary.length < 2) nc.secondary.push(id);
    }, true);
    app.syncArchetypeChoice({ ...data.nextChapter, primary: data.nextChapter.primary === id ? null : (data.nextChapter.primary || id) });
  };

  const archetypes = ARCHETYPES.map((a) => {
    const isP = primary === a.id;
    const isS = data.nextChapter.secondary.indexOf(a.id) >= 0;
    return { ...a, bg: isP || isS ? a.tint : '#fff', border: isP ? a.color : isS ? a.color : 'rgba(16,39,90,.10)', badge: isP ? 'UTAMA [v]' : isS ? 'PENDUKUNG' : '' };
  });

  const ncHint = !allVisas
    ? 'Next Chapter terbuka setelah empat terminal selesai.'
    : primary
      ? 'Arketipe utama: ' + ARCHETYPES.filter((a) => a.id === primary)[0].title
      : 'Ketuk satu kartu untuk memilih arketipe utama.';
  const ncCtaBg = primary && allVisas ? '#1E8A4C' : 'rgba(16,39,90,.35)';

  return (
    <div style={{ padding: '14px 20px 28px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <button onClick={() => app.back()} style={{ width: 44, height: 44, borderRadius: 14, border: '1px solid rgba(16,39,90,.12)', background: '#fff', fontSize: 19, cursor: 'pointer', color: '#10275A' }}>←</button>
        <div style={{ width: 44, height: 44, borderRadius: 14, background: '#fff', border: '1px solid rgba(16,39,90,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <img src="/icons/badge-nextchapter.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <span style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.3 }}>Next Chapter</span>
      </div>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(16,39,90,.75)', margin: '14px 0 0', textWrap: 'pretty' }}>
        Kamu sudah menyiapkan tubuh, bekal, hati, dan kompas perjalananmu. Sekarang, bab seperti apa yang ingin kamu jalani?
      </p>
      <div style={{ fontSize: 15, color: 'rgba(16,39,90,.65)', margin: '10px 0 0' }}>Pilih satu arketipe utama. Kamu boleh menambah maksimal dua pendukung.</div>
      {locked && (
        <div style={{ fontSize: 13, color: 'rgba(16,39,90,.55)', background: 'rgba(16,39,90,.06)', padding: '10px 12px', borderRadius: 10, margin: '10px 0 0' }}>
          [LOCK] Pilihan arketipe sudah dikunci karena program sudah dimulai.
        </div>
      )}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '18px 0 0' }}>
        {archetypes.map((a) => (
          <button key={a.id} onClick={() => select(a.id)} disabled={locked} style={{ textAlign: 'left', padding: 16, borderRadius: 18, border: `1.5px solid ${a.border}`, background: a.bg, cursor: locked ? 'default' : 'pointer', opacity: locked ? 0.75 : 1, color: '#10275A', minHeight: 152, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
              <div style={{ width: 38, height: 38, borderRadius: 12, background: '#fff', border: `1px solid ${a.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <img src={`/icons/archetype-${a.id}.png`} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span style={{ fontSize: 11, fontWeight: 800, color: a.color }}>{a.badge}</span>
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 800, lineHeight: 1.25, letterSpacing: 0.3, color: a.color }}>{a.title}</div>
              <div style={{ fontSize: 13, lineHeight: 1.4, color: 'rgba(16,39,90,.7)', marginTop: 5 }}>{a.sub}</div>
            </div>
          </button>
        ))}
      </div>
      <button
        onClick={() => { if (primary && allVisas) app.go('archetype', { a: primary }); }}
        style={{ width: '100%', height: 56, margin: '18px 0 0', border: 'none', borderRadius: 16, background: ncCtaBg, color: '#fff', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}
      >
        Mulai Eksplorasi Arketipe
      </button>
      <div style={{ fontSize: 14, color: 'rgba(16,39,90,.6)', textAlign: 'center', margin: '10px 0 0' }}>{ncHint}</div>

      {primary && allVisas && (
        <div style={{ marginTop: 20, padding: 18, borderRadius: 18, border: '1px solid rgba(16,39,90,.10)', background: '#fff' }}>
          {app.packageTier === 'signature' ? (
            <>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#0F6E3A' }}>Paket Signature-mu termasuk Coaching Individual</div>
              <div style={{ fontSize: 14, lineHeight: 1.55, color: 'rgba(16,39,90,.7)', marginTop: 6 }}>
                Pendampingan lanjutan 6 bulan bareng coach spesialis sesuai arketipe pilihanmu. Ajukan sekarang, fasilitator akan menghubungimu untuk jadwal sesi pertama.
              </div>
              <button
                onClick={askCoaching}
                disabled={requested || requesting}
                style={{ width: '100%', height: 50, marginTop: 14, border: 'none', borderRadius: 14, background: requested ? 'rgba(30,138,76,.5)' : '#1E8A4C', color: '#fff', fontSize: 15, fontWeight: 700, cursor: requested ? 'default' : 'pointer' }}
              >
                {requested ? '[v] Sudah Diajukan' : requesting ? 'Mengirim...' : 'Ajukan Coaching Individual'}
              </button>
            </>
          ) : app.packageTier === 'professional' ? (
            <>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#10275A' }}>Paket Professional-mu termasuk Personal Holistic Retirement Plan</div>
              <div style={{ fontSize: 14, lineHeight: 1.55, color: 'rgba(16,39,90,.7)', marginTop: 6 }}>
                Rencana pribadi berdasarkan arketipe pilihanmu akan disiapkan tim fasilitator dan dibagikan dalam bentuk folder cetak setelah sesi training.
              </div>
            </>
          ) : (
            <>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#10275A' }}>Eksplorasi Mandiri</div>
              <div style={{ fontSize: 14, lineHeight: 1.55, color: 'rgba(16,39,90,.7)', marginTop: 6 }}>
                Lanjutkan eksplorasi arketipe di halaman berikutnya. Kalau ingin pendampingan lebih lanjut, tanyakan ke HR/fasilitator soal upgrade paket.
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
