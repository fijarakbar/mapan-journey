import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// The anon/publishable key is designed to be safe in client bundles —
// real protection comes from the Row Level Security policies on each
// table (see the mapan_* migrations), not from keeping this key secret.
export const supabase = createClient(url, anonKey);
