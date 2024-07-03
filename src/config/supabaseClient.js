import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "rickroll";
const supabaseKey =
  "rickroll";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
