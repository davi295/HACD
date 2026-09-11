const SUPABASE_URL = 'https://nezlstupywjzlrvodazr.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_1WRqcNtC3eoSnv3Fh2Cp1w_MZUdAGii';

export const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
export default supabase;
