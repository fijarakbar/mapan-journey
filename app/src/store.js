import { useCallback, useMemo, useRef, useState } from 'react';
import { TERMINALS } from './data.js';

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
    nextChapter: { primary: null, secondary: [], plan: {} },
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
    /* storage unavailable — journey stays in-memory only */
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
  const savedTimer = useRef(null);
  const editBase = useRef(null);
  const fileRef = useRef(null);

  const upd = useCallback((fn, quiet) => {
    setData((prev) => {
      const next = JSON.parse(JSON.stringify(prev));
      fn(next);
      next.updatedAt = new Date().toISOString();
      persist(next);
      return next;
    });
    if (!quiet) {
      setSaved(true);
      clearTimeout(savedTimer.current);
      savedTimer.current = setTimeout(() => setSaved(false), 2200);
    } else {
      setSaved(false);
    }
  }, []);

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
          return { screen: 'module', params: { t: t.id, m: j }, label: t.nameTitle + ' · Modul ' + (j + 1) };
        }
      }
      return { screen: 'visaq', params: { t: t.id }, label: 'Visa ' + t.nameTitle };
    }
    if (!data.nextChapter.primary) return { screen: 'nextchapter', params: {}, label: 'Next Chapter' };
    return { screen: 'plan90', params: {}, label: 'Rencana 90 Hari' };
  }, [data, resp]);

  const backup = useCallback(() => {
    const nama = (data.participantProfile.nama || 'Peserta').replace(/\s+/g, '-');
    const date = new Date().toISOString().slice(0, 10);
    const payload = { format: 'MAPAN-JOURNEY-BACKUP', version: 1, exportedAt: new Date().toISOString(), data };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'MAPAN-Backup-' + nama + '-' + date + '.json';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    setSaved(true);
    clearTimeout(savedTimer.current);
    savedTimer.current = setTimeout(() => setSaved(false), 2500);
  }, [data]);

  const restore = useCallback((e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      let parsed = null;
      try {
        parsed = JSON.parse(reader.result);
      } catch (err) {
        parsed = null;
      }
      if (!parsed || parsed.format !== 'MAPAN-JOURNEY-BACKUP' || !parsed.data || !parsed.data.participantProfile) {
        window.alert('File ini sepertinya bukan backup MAPAN yang utuh. Coba pilih file lain.');
        return;
      }
      if (!window.confirm('Data MAPAN yang ada di perangkat ini akan diganti dengan data dari file backup. Lanjutkan?')) return;
      const d = Object.assign(blank(), parsed.data);
      persist(d);
      setData(d);
      setScreen('home');
      setParams({});
      setStack([]);
      setSaved(true);
    };
    reader.readAsText(file);
    e.target.value = '';
  }, []);

  const reset = useCallback(() => {
    setResetStep((step) => {
      if (step === 0) {
        window.alert('Tekan sekali lagi untuk mengulang perjalanan. Semua refleksi, visa, dan rencana di perangkat ini akan dihapus.');
        return 1;
      }
      if (!window.confirm('Yakin ingin mengulang perjalanan dari awal? Sebaiknya lakukan Backup Data terlebih dahulu.')) {
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

  return {
    data,
    screen,
    params,
    stack,
    saved,
    drafts,
    setDrafts,
    resetStep,
    fileRef,
    editBase,
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
    backup,
    restore,
    reset,
  };
}
