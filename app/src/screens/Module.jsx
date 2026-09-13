import { TERMINALS, LUGGAGE, CARRY, LEAVE, tone } from '../data.js';
import VehicleDiagram from '../diagrams/VehicleDiagram.jsx';
import FinancialMapDiagram from '../diagrams/FinancialMapDiagram.jsx';
import StagesDiagram from '../diagrams/StagesDiagram.jsx';
import CompassDiagram from '../diagrams/CompassDiagram.jsx';
import TreeDiagram from '../diagrams/TreeDiagram.jsx';

const MODULE_ILLUSTRATIONS = {
  'Body as Your Vehicle': 'module-body-as-your-vehicle',
  'Move to Stay Independent': 'module-move-to-stay-independent',
  'Eat for Your Next Chapter': 'module-eat-for-your-next-chapter',
  'Sleep & Recovery': 'module-sleep-and-recovery',
  'Prevent, Don’t Wait': 'module-prevent-dont-wait',
  'My Fit to Travel Plan': 'module-my-fit-to-travel-plan',
  'Financial Check-In': 'module-financial-check-in',
  'Defining Enough': 'module-defining-enough',
  'My Financial Map': 'module-my-financial-map',
  'Packing Your Financial Luggage': 'module-packing-your-financial-luggage',
  'Protect Your Journey': 'module-protect-your-journey',
  'The Second Journey': 'module-the-second-journey',
  'Avoid Financial Turbulence': 'module-avoid-financial-turbulence',
  'My Financial Flight Plan': 'module-my-financial-flight-plan',
  'Emotional Check-In': 'module-emotional-check-in',
  'Retirement as Life Transition': 'module-retirement-as-life-transition',
  'Letting Go with Grace': 'module-letting-go-with-grace',
  'Rediscovering My Identity': 'module-rediscovering-my-identity',
  'Finding New Purpose': 'module-finding-new-purpose',
  'Staying Connected': 'module-staying-connected',
  'Building Emotional Resilience': 'module-building-emotional-resilience',
  'Boarding to My Next Chapter': 'module-boarding-next-chapter',
  'Spiritual Check-In': 'module-spiritual-check-in',
  'What Truly Matters?': 'module-what-truly-matters',
  'Gratitude Changes Perspective': 'module-gratitude-changes-perspective',
  'Legacy Beyond Position': 'module-legacy-beyond-position',
  'Serving Beyond Career': 'module-serving-beyond-career',
  'Reconnecting with Yourself': 'module-reconnecting-with-yourself',
  'Faith as Strength': 'module-faith-as-strength',
  'My Meaningful Journey': 'module-my-meaningful-journey',
};

function chipStyle(on, tc) {
  return {
    padding: '14px 16px', minHeight: 52, borderRadius: 14, fontSize: 16, fontWeight: 700, cursor: 'pointer',
    border: `1.5px solid ${on ? tc.color : 'rgba(16,39,90,.15)'}`, background: on ? tc.tint : '#fff', color: on ? tc.color : 'rgba(16,39,90,.75)',
  };
}

export default function Module({ app }) {
  const { data, params, drafts, setDrafts } = app;
  const tid = params.t || 'fitland';
  const T = app.term(tid);
  const tc = tone(tid);
  const mi = params.m == null ? 0 : params.m;
  const M = T.modules[mi] || T.modules[0];
  const R = app.resp(tid, mi);
  const chipsSel = R.chips || [];

  const setChip = (label) => {
    app.upd((x) => {
      const r = x.responses[tid]['m' + mi] || (x.responses[tid]['m' + mi] = { chips: [], reflection: '' });
      r.chips = r.chips || [];
      const at = r.chips.indexOf(label);
      if (at >= 0) r.chips.splice(at, 1);
      else r.chips.push(label);
    });
  };

  const historyKey = tid + mi;
  const historyOpen = drafts.histOpen === historyKey;
  const treeDraft = drafts.tree || '';

  const onReflection = (e) => {
    const v = e.target.value;
    app.upd((x) => {
      const r = x.responses[tid]['m' + mi] || (x.responses[tid]['m' + mi] = {});
      r.reflection = v;
      if (data.visaStatus[tid]) r.editedAfterVisa = new Date().toISOString();
    });
  };
  const onReflectionFocus = (e) => { app.editBase.current = e.target.value; };
  const onReflectionBlur = (e) => {
    const before = app.editBase.current;
    const now = e.target.value;
    app.editBase.current = null;
    if (before == null || before === now || !String(before).trim()) return;
    app.upd((x) => {
      const r = x.responses[tid]['m' + mi] || (x.responses[tid]['m' + mi] = {});
      r.history = (r.history || []).concat([{ text: before, at: new Date().toISOString() }]).slice(-5);
    }, true);
  };

  const toggleDone = () => {
    app.upd((x) => {
      const r = x.responses[tid]['m' + mi] || (x.responses[tid]['m' + mi] = {});
      r.done = !r.done;
    }, true);
  };

  const prev = () => { if (mi > 0) app.go('module', { t: tid, m: mi - 1 }); else app.go('terminal', { t: tid }); };
  const next = () => {
    app.upd((x) => {
      const r = x.responses[tid]['m' + mi] || (x.responses[tid]['m' + mi] = {});
      r.done = true;
    }, true);
    if (mi < 7) app.go('module', { t: tid, m: mi + 1 }); else app.go('visaq', { t: tid });
  };

  const history = (R.history || []).slice().reverse();
  const updatedBadge = R.editedAfterVisa ? 'Diperbarui ' + new Date(R.editedAfterVisa).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' }) : '';

  return (
    <div style={{ padding: '14px 20px 24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <button onClick={() => app.back()} style={{ flex: 'none', width: 44, height: 44, borderRadius: 14, border: '1px solid rgba(16,39,90,.12)', background: '#fff', fontSize: 19, cursor: 'pointer', color: '#10275A' }}>←</button>
        <button onClick={() => app.go('terminal', { t: tid })} style={{ flex: 1, minHeight: 44, textAlign: 'left', padding: '0 14px', borderRadius: 14, border: '1px solid rgba(16,39,90,.12)', background: '#fff', cursor: 'pointer', color: 'rgba(16,39,90,.7)', fontSize: 14, fontWeight: 700 }}>
          {T.nameTitle} • Modul {mi + 1}
        </button>
      </div>
      <div style={{ display: 'flex', gap: 8, margin: '12px 0 0' }}>
        {TERMINALS.map((t) => {
          const c2 = tone(t.id);
          const on = t.id === tid;
          const go = () => {
            if (on) return;
            let target = 0;
            for (let j = 0; j < 8; j++) { if (!app.resp(t.id, j).done) { target = j; break; } }
            app.go('module', { t: t.id, m: target });
          };
          return (
            <button key={t.id} onClick={go} style={{ flex: 1, minWidth: 0, minHeight: 44, padding: '0 6px', borderRadius: 12, fontSize: 13, fontWeight: 700, cursor: 'pointer', border: `1px solid ${on ? c2.color : c2.border}`, background: on ? c2.color : c2.tint, color: on ? '#fff' : c2.color }}>
              {t.nameTitle}
            </button>
          );
        })}
      </div>
      <h1 style={{ fontSize: 25, fontWeight: 800, letterSpacing: -0.4, lineHeight: 1.2, margin: '18px 0 0', color: tc.color }}>{M.t}</h1>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(16,39,90,.78)', margin: '12px 0 0', textWrap: 'pretty' }}>{M.lead}</p>

      {!!MODULE_ILLUSTRATIONS[M.t] && (
        <img src={`/illustrations/${MODULE_ILLUSTRATIONS[M.t]}.png`} alt="" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 20, margin: '18px 0 0' }} />
      )}

      {M.kind === 'vehicle' && <VehicleDiagram color={tc.color} points={M.points} />}
      {M.kind === 'finmap' && (
        <>
          <img src="/illustrations/module-financial-map-scale.png" alt="" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 20, margin: '18px 0 0' }} />
          <FinancialMapDiagram color={tc.color} />
        </>
      )}
      {M.kind === 'stages' && <StagesDiagram color={tc.color} />}
      {M.kind === 'compass' && <CompassDiagram color={tc.color} />}

      {M.kind === 'plain' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '20px 0 0' }}>
          {M.points.map((p, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: 16, borderRadius: 16, background: '#fff', border: '1px solid rgba(16,39,90,.10)' }}>
              <div style={{ width: 30, height: 30, flex: 'none', borderRadius: 10, background: tc.tint, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 11, height: 11, borderRadius: '50%', background: tc.color }} />
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 800 }}>{p.h}</div>
                <div style={{ fontSize: 15, lineHeight: 1.5, color: 'rgba(16,39,90,.7)', marginTop: 2, textWrap: 'pretty' }}>{p.b}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {M.kind === 'chips' && (
        <div style={{ margin: '20px 0 0' }}>
          <div style={{ fontSize: 16, fontWeight: 800 }}>Packing Your Financial Luggage</div>
          <div style={{ fontSize: 15, lineHeight: 1.5, color: 'rgba(16,39,90,.7)', margin: '4px 0 12px' }}>Pilih bekal yang paling penting untukmu. Tidak ada jawaban yang salah.</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {LUGGAGE.map((label) => (
              <button key={label} onClick={() => setChip(label)} style={chipStyle(chipsSel.indexOf(label) >= 0, tc)}>{label}</button>
            ))}
          </div>
        </div>
      )}

      {M.kind === 'twocol' && (
        <div style={{ margin: '20px 0 0', display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            { title: 'CARRY FORWARD', hint: 'Yang ingin kamu bawa ke bab berikutnya.', color: '#1E8A4C', list: CARRY },
            { title: 'LEAVE BEHIND', hint: 'Yang boleh kamu tinggalkan.', color: '#D9662F', list: LEAVE },
          ].map((col) => (
            <div key={col.title} style={{ padding: 16, borderRadius: 18, background: '#fff', border: '1px solid rgba(16,39,90,.10)' }}>
              <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.2, color: col.color }}>{col.title}</div>
              <div style={{ fontSize: 14, color: 'rgba(16,39,90,.65)', margin: '4px 0 12px' }}>{col.hint}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {col.list.map((label) => {
                  const on = chipsSel.indexOf(label) >= 0;
                  return (
                    <button key={label} onClick={() => setChip(label)} style={{ padding: '12px 14px', minHeight: 48, borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: 'pointer', border: `1.5px solid ${on ? tc.color : 'rgba(16,39,90,.15)'}`, background: on ? tc.tint : '#fff', color: on ? tc.color : 'rgba(16,39,90,.75)' }}>
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {M.kind === 'tree' && (
        <div style={{ margin: '20px 0 0', padding: 18, borderRadius: 20, background: '#FFF8EE', border: '1px solid rgba(226,116,58,.20)' }}>
          <div style={{ fontSize: 16, fontWeight: 800 }}>Tree of Legacy</div>
          <div style={{ fontSize: 15, lineHeight: 1.5, color: 'rgba(16,39,90,.7)', margin: '4px 0 14px', textWrap: 'pretty' }}>Nilai apa yang ingin kamu tinggalkan kepada keluarga, sahabat, atau masyarakat?</div>
          <div style={{ display: 'flex', gap: 8 }}>
            <input
              value={treeDraft}
              onChange={(e) => setDrafts((d) => ({ ...d, tree: e.target.value }))}
              placeholder="Tulis satu nilai"
              style={{ flex: 1, height: 52, padding: '0 14px', fontSize: 16, borderRadius: 14, border: '1px solid rgba(16,39,90,.18)', background: '#fff', color: '#10275A' }}
            />
            <button
              onClick={() => {
                const v = treeDraft.trim();
                if (!v) return;
                app.upd((x) => {
                  const r = x.responses[tid]['m' + mi] || (x.responses[tid]['m' + mi] = { reflection: '' });
                  r.leaves = (r.leaves || []).concat([v]);
                });
                setDrafts((d) => ({ ...d, tree: '' }));
              }}
              style={{ width: 96, height: 52, border: 'none', borderRadius: 14, background: '#E2743A', color: '#fff', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}
            >
              Tambah
            </button>
          </div>
          <TreeDiagram color={tc.color} leafCount={(R.leaves || []).length} />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '14px 0 0' }}>
            {(R.leaves || []).map((text, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 14px', borderRadius: 999, background: '#EAF4EC', border: '1px solid rgba(30,138,76,.25)', fontSize: 15, fontWeight: 700, color: '#1E6E42' }}>
                {text}
                <button
                  onClick={() => app.upd((x) => { x.responses[tid]['m' + mi].leaves.splice(i, 1); })}
                  style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 16, color: 'rgba(16,39,90,.45)', padding: 0 }}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      )}

      <div style={{ margin: '22px 0 0', padding: 18, borderRadius: 20, background: '#fff', border: '1px solid rgba(16,39,90,.10)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
          <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.2, color: tc.color }}>REFLEKSI</span>
          <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(16,39,90,.5)' }}>{updatedBadge}</span>
        </div>
        <div style={{ fontSize: 16, lineHeight: 1.5, fontWeight: 700, margin: '8px 0 12px', textWrap: 'pretty' }}>{M.reflect}</div>
        <textarea
          value={R.reflection || ''}
          onChange={onReflection}
          onFocus={onReflectionFocus}
          onBlur={onReflectionBlur}
          rows={4}
          placeholder="Tulis refleksimu di sini..."
          style={{ width: '100%', padding: 14, fontSize: 17, lineHeight: 1.55, borderRadius: 14, border: '1px solid rgba(16,39,90,.18)', background: '#FBF9F5', color: '#10275A', resize: 'none' }}
        />
        <div style={{ fontSize: 13, fontWeight: 600, color: '#1E8A4C', margin: '10px 0 0', height: 18 }}>{app.saved ? 'Tersimpan di perangkat' : ''}</div>
        {!!(R.history && R.history.length) && (
          <>
            <button
              onClick={() => setDrafts((d) => ({ ...d, histOpen: d.histOpen === historyKey ? null : historyKey }))}
              style={{ width: '100%', minHeight: 46, margin: '6px 0 0', textAlign: 'left', padding: '0 14px', borderRadius: 12, border: '1px dashed rgba(16,39,90,.22)', background: '#FBF9F5', color: 'rgba(16,39,90,.7)', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}
            >
              Riwayat tulisan ({R.history.length})
            </button>
            {historyOpen && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, margin: '10px 0 0' }}>
                {history.map((h, i) => (
                  <div key={i} style={{ padding: 14, borderRadius: 12, background: '#FBF9F5', border: '1px solid rgba(16,39,90,.10)' }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(16,39,90,.5)' }}>
                      {new Date(h.at).toLocaleString('id-ID', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                    </div>
                    <div style={{ fontSize: 15, lineHeight: 1.5, color: 'rgba(16,39,90,.78)', margin: '6px 0 0', textWrap: 'pretty' }}>{h.text}</div>
                    <button
                      onClick={() => app.upd((x) => {
                        const r = x.responses[tid]['m' + mi];
                        r.history = (r.history || []).concat([{ text: r.reflection || '', at: new Date().toISOString() }]).slice(-5);
                        r.reflection = h.text;
                      })}
                      style={{ minHeight: 42, margin: '10px 0 0', padding: '0 14px', borderRadius: 10, border: '1px solid rgba(16,39,90,.18)', background: '#fff', color: '#10275A', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}
                    >
                      Pulihkan tulisan ini
                    </button>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      <button
        onClick={toggleDone}
        style={{ width: '100%', minHeight: 52, margin: '12px 0 0', borderRadius: 14, fontSize: 16, fontWeight: 700, cursor: 'pointer', border: `1.5px solid ${R.done ? tc.color : 'rgba(16,39,90,.15)'}`, background: R.done ? tc.tint : '#fff', color: R.done ? tc.color : 'rgba(16,39,90,.7)' }}
      >
        {R.done ? '✓ Ditandai selesai · ketuk untuk batalkan' : 'Tandai modul ini selesai'}
      </button>
      <div style={{ display: 'flex', gap: 10, margin: '18px 0 0' }}>
        <button onClick={prev} style={{ flex: 1, height: 54, borderRadius: 16, border: '1px solid rgba(16,39,90,.18)', background: '#fff', color: '#10275A', fontSize: 17, fontWeight: 700, cursor: 'pointer' }}>Sebelumnya</button>
        <button onClick={next} style={{ flex: 1.3, height: 54, borderRadius: 16, border: 'none', background: '#10275A', color: '#fff', fontSize: 17, fontWeight: 700, cursor: 'pointer' }}>{mi === 7 ? 'Selesai & Ambil Visa' : 'Selanjutnya'}</button>
      </div>
    </div>
  );
}
