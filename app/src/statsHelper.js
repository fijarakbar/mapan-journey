import { supabase } from './supabaseClient.js';
import { CHECKIN_DOMAINS } from './data.js';

// Below this many respondents, a population mean/SD isn't statistically
// meaningful yet (classic rule of thumb for the normal approximation to
// kick in) — so we fall back to showing the raw absolute score instead of
// a relative level.
export const MIN_POPULATION = 30;

const COLMAP = {
  fitland: 'fitland_score',
  assetland: 'assetland_score',
  mindland: 'mindland_score',
  sosial: 'sosial_score',
  soulland: 'soulland_score',
};

// Fetches every completed check-in's domain scores and computes the
// population mean/SD per domain, client-side. Fine at moderate scale;
// if this ever needs to run against thousands of rows, move the
// aggregation into a Postgres function instead.
export async function fetchPopulationStats() {
  const { data, error } = await supabase
    .from('mapan_checkin_results')
    .select('fitland_score,assetland_score,mindland_score,sosial_score,soulland_score');
  if (error || !data) return { n: 0, stats: {} };
  const stats = {};
  CHECKIN_DOMAINS.forEach((d) => {
    const col = COLMAP[d.id];
    const vals = data.map((r) => r[col]).filter((v) => v !== null && v !== undefined);
    if (!vals.length) { stats[d.id] = null; return; }
    const mean = vals.reduce((a, b) => a + b, 0) / vals.length;
    const variance = vals.reduce((a, b) => a + (b - mean) ** 2, 0) / vals.length;
    const sd = Math.sqrt(variance) || 1; // guard divide-by-zero when everyone answers identically
    stats[d.id] = { mean, sd, n: vals.length };
  });
  return { n: data.length, stats };
}

export function computeZ(value, domainStat) {
  if (!domainStat) return null;
  return (value - domainStat.mean) / domainStat.sd;
}

// Bands follow the standard normal distribution: roughly the middle ~24%
// lands "Cukup Siap", ~22% on each side "Mulai Berkembang"/"Siap", and the
// outer ~16% on each tail "Perlu Perhatian"/"Sangat Siap".
export function zToLevel(z) {
  if (z === null || z === undefined || Number.isNaN(z)) return null;
  if (z < -1) return { label: 'Perlu Perhatian', color: '#B3261E' };
  if (z < -0.3) return { label: 'Mulai Berkembang', color: '#C9871A' };
  if (z < 0.3) return { label: 'Cukup Siap', color: '#6C4FB6' };
  if (z < 1) return { label: 'Siap', color: '#1E8A4C' };
  return { label: 'Sangat Siap', color: '#0F6E3A' };
}
