import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { TERMINALS } from './data.js';
import { supabase } from './supabaseClient.js';

const KEY = 'mapan-journey-v1';

export function blank() {
  return {
    appVersion: '0.1.0',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    participantProfile: { nama: '', instansi: '', purna: '', harapan: '', avatar: '' },
    initialAssessment: { answers: {}, scores: null, done: false },
    responses: { fitland: {}, assetland: {}, mindland: {}, soulland: {} },
    commitments: {},
    visaStatus: {},
    passportStamps: [],
    passportSummary: {},
    nextChapter: { primary: null, secondary: [], plan: {}, coachingRequested: false, ideas: {}, locked: false },
    ninetyDayPlan: { d30: [], d60: [], d90: [] },
    notes: [],
    reminders: [],
    appPreferences: { textSize: 'normal' },
    journeyProgress: { started: false, finished: false },
  };
}

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const d = JSON.parse(raw);
    if (!d || !d.participantProfile) return null;
    return d;
  } catch (e) {
    return null;
  }
}

function persist(d) {
  try {
    localStorage.setItem(KEY, JSON.stringify(d));
  } catch (e) {
    /* storage unavailable -- journey stays in-memory only */
  }
}

/** Replicates the dc-prototype's Component class: navigation stack,
 * autosave-on-edit, and the small derived helpers every screen needs. */
export function useJourney() {
  const initial = useMemo(() => load() || blank(), []);
  const [data, setData] = useState(initial);
  const [screen, setScreen] = useState(initial.journeyProgress.started ? 'home' : 'welcome');
  const [params, setParams] = useState({});
  const [stack, setStack] = useState([]);
  const [saved, setSaved] = useState(false);
  const [drafts, setDrafts] = useState({});
  const [resetStep, setResetStep] = useState(0);
  const [session, setSession] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [role, setRole] = useState('participant');
  const [packageTier, setPackageTier] = useState(null);
  const [batchLocked, setBatchLocked] = useState(false);
  const savedTimer = useRef(null);
  const editBase = useRef(null);
  const syncTimer = useRef(null);

  // Pick up an existing Supabase session on load, and keep it in sync.
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session: s } }) => {
      setSession(s);
      setAuthLoading(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((event, s) => {
      setSession(s);
      if (event === 'SIGNED_OUT') {
        const d = blank();
        persist(d);
        setData(d);
        setScreen('welcome');
        setParams({});
        setStack([]);
        setRole('participant');
        setPackageTier(null);
      }
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  // When a session appears (sign in / sign up), pull that user's saved
  // journey_state from Supabase if it exists; otherwise push whatever is
  // currently local (e.g. a fresh blank journey) as their first row.
  useEffect(() => {
    if (!session) return;
    let cancelled = false;
    (async () => {
      const { data: row } = await supabase.from('mapan_journey_state').select('data').eq('user_id', session.user.id).maybeSingle();
      if (cancelled) return;
      if (row && row.data && row.data.participantProfile) {
        persist(row.data);
        setData(row.data);
        setScreen(row.data.journeyProgress.started ? 'home' : 'welcome');
      } else {
        await supabase.from('mapan_journey_state').upsert({ user_id: session.user.id, data });
      }
    })();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  // Ensure a mapan_profiles row exists for this user (role defaults to
  // 'participant' -- facilitators are flagged manually via SQL after their
  // account is created), and read back their role + package tier (via
  // whichever batch/instansi their profile is linked to, if any).
  useEffect(() => {
    if (!session) { setRole('participant'); setPackageTier(null); return; }
    let cancelled = false;
    (async () => {
      const { data: row } = await supabase
        .from('mapan_profiles')
        .select('role, batch_id, mapan_batches(package, instansi, locked_at)')
        .eq('id', session.user.id)
        .maybeSingle();
      if (cancelled) return;
      if (row) {
        setRole(row.role || 'participant');
        setPackageTier(row.mapan_batches ? row.mapan_batches.package : null);
        setBatchLocked(!!(row.mapan_batches && row.mapan_batches.locked_at));
      } else {
        await supabase.from('mapan_profiles').insert({ id: session.user.id });
        setRole('participant');
        setPackageTier(null);
        setBatchLocked(false);
      }
    })();
    return () => { cancelled = true; };
  }, [session]);

  const upd = useCallback((fn, quiet) => {
    setData((prev) => {
      const next = JSON.parse(JSON.stringify(prev));
      fn(next);
      next.updatedAt = new Date().toISOString();
      persist(next);
      if (session) {
        clearTimeout(syncTimer.current);
        syncTimer.current = setTimeout(() => {
          supabase.from('mapan_journey_state').upsert({ user_id: session.user.id, data: next, updated_at: new Date().toISOString() }).then(() => {});
        }, 800);
      }
      return next;
    });
    if (!quiet) {
      setSaved(true);
      clearTimeout(savedTimer.current);
      savedTimer.current = setTimeout(() => setSaved(false), 2200);
    } else {
      setSaved(false);
    }
  }, [session]);

  const go = useCallback((nextScreen, nextParams) => {
    setStack((s) => s.concat([{ screen, params }]));
    setScreen(nextScreen);
    setParams(nextParams || {});
    setResetStep(0);
    requestAnimationFrame(() => {
      const el = document.querySelector('[data-scroll]');
      if (el) el.scrollTop = 0;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen, params]);

  const back = useCallback(() => {
    setStack((s) => {
      const st = s.slice();
      const prev = st.pop() || { screen: 'home', params: {} };
      setScreen(prev.screen);
      setParams(prev.params);
      setResetStep(0);
      return st;
    });
  }, []);

  const term = useCallback((id) => TERMINALS.filter((t) => t.id === id)[0], []);
  const resp = useCallback((tid, i) => (data.responses[tid] || {})['m' + i] || {}, [data]);
  const doneCount = useCallback(
    (tid) => {
      const r = data.responses[tid] || {};
      return Object.keys(r).filter((k) => r[k] && r[k].done).length;
    },
    [data]
  );
  const totalDone = useCallback(() => TERMINALS.reduce((a, t) => a + doneCount(t.id), 0), [doneCount]);

  const nextStop = useCallback(() => {
    for (let i = 0; i < TERMINALS.length; i++) {
      const t = TERMINALS[i];
      if (data.visaStatus[t.id]) continue;
      for (let j = 0; j < 8; j++) {
        if (!resp(t.id, j).done) {
          return { screen: 'module', params: { t: t.id, m: j }, label: t.nameTitle + ' - Modul ' + (j + 1) };
        }
      }
      return { screen: 'visaq', params: { t: t.id }, label: 'Visa ' + t.nameTitle };
    }
    if (!data.nextChapter.primary) return { screen: 'nextchapter', params: {}, label: 'Next Chapter' };
    return { screen: 'plan90', params: {}, label: 'Rencana 90 Hari' };
  }, [data, resp]);

  const reset = useCallback(() => {
    setResetStep((step) => {
      if (step === 0) {
        window.alert('Tekan sekali lagi untuk mengulang perjalanan. Semua refleksi, visa, dan rencana di perangkat ini akan dihapus.');
        return 1;
      }
      if (!window.confirm('Yakin ingin mengulang perjalanan dari awal?')) {
        return 0;
      }
      const d = blank();
      persist(d);
      setData(d);
      setScreen('welcome');
      setParams({});
      setStack([]);
      return 0;
    });
  }, []);

  const signUp = useCallback(async (email, password) => {
    const { data: res, error } = await supabase.auth.signUp({ email, password });
    if (error) return { error: error.message };
    return { session: !!res.session };
  }, []);

  const signIn = useCallback(async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return error ? error.message : null;
  }, []);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
  }, []);

  const syncCheckinResult = useCallback((d) => {
    if (!session) return;
    const s = d.initialAssessment.scores || {};
    supabase.from('mapan_checkin_results').upsert({
      user_id: session.user.id,
      nama: d.participantProfile.nama || null,
      instansi: d.participantProfile.instansi || null,
      fitland_score: s.fitland ?? null,
      assetland_score: s.assetland ?? null,
      mindland_score: s.mindland ?? null,
      soulland_score: s.soulland ?? null,
      sosial_score: s.sosial ?? null,
      answers: d.initialAssessment.answers || null,
      submitted_at: new Date().toISOString(),
    }).then(() => {});
  }, [session]);

  const joinBatch = useCallback(async (code) => {
    if (!session || !code) return { error: 'Kode tidak boleh kosong.' };
    const { data: batch } = await supabase.from('mapan_batches').select('id, instansi, package').eq('invite_code', code.trim().toUpperCase()).maybeSingle();
    if (!batch) return { error: 'Kode undangan tidak ditemukan. Cek lagi ke HR/fasilitator.' };
    await supabase.from('mapan_profiles').upsert({ id: session.user.id, batch_id: batch.id });
    setPackageTier(batch.package);
    return { instansi: batch.instansi, package: batch.package };
  }, [session]);

  const createBatch = useCallback(async (instansi, pkg) => {
    if (!session) return { error: 'Belum login.' };
    const slug = instansi.trim().toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6) || 'BATCH';
    const suffix = Math.random().toString(36).slice(2, 6).toUpperCase();
    const code = `${slug}-${pkg.slice(0, 3).toUpperCase()}-${suffix}`;
    const { data: row, error } = await supabase
      .from('mapan_batches')
      .insert({ instansi: instansi.trim(), package: pkg, invite_code: code, created_by: session.user.id })
      .select()
      .single();
    if (error) return { error: error.message };
    return { batch: row };
  }, [session]);

  const listBatches = useCallback(async () => {
    const { data: rows } = await supabase.from('mapan_batches').select('*').order('created_at', { ascending: false });
    return rows || [];
  }, []);

  const lockBatch = useCallback(async (batchId, lock) => {
    const { error } = await supabase.from('mapan_batches').update({ locked_at: lock ? new Date().toISOString() : null }).eq('id', batchId);
    return error ? { error: error.message } : { ok: true };
  }, []);

  const requestCoaching = useCallback(async () => {
    if (!session) return { error: 'Belum login.' };
    const { error } = await supabase.from('mapan_profiles').update({ coaching_requested_at: new Date().toISOString() }).eq('id', session.user.id);
    if (error) return { error: error.message };
    return { ok: true };
  }, [session]);

  // Sync the participant's chosen archetype + specific idea picks to a
  // facilitator-readable row, mirroring the checkin-results pattern.
  const syncArchetypeChoice = useCallback((nc) => {
    if (!session) return;
    supabase.from('mapan_profiles').update({
      primary_archetype: nc.primary,
      secondary_archetypes: nc.secondary,
      archetype_ideas: nc.ideas,
    }).eq('id', session.user.id).then(() => {});
  }, [session]);


  return {
    data,
    screen,
    params,
    stack,
    saved,
    drafts,
    setDrafts,
    resetStep,
    editBase,
    session,
    authLoading,
    role,
    packageTier,
    batchLocked,
    signUp,
    signIn,
    signOut,
    syncCheckinResult,
    joinBatch,
    createBatch,
    listBatches,
    lockBatch,
    requestCoaching,
    syncArchetypeChoice,
    upd,
    go,
    back,
    setState: ({ screen: s2, params: p2, stack: st2 }) => {
      if (s2 !== undefined) setScreen(s2);
      if (p2 !== undefined) setParams(p2);
      if (st2 !== undefined) setStack(st2);
    },
    term,
    resp,
    doneCount,
    totalDone,
    nextStop,
    reset,
  };
}