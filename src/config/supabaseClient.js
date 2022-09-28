import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://myfifgqclngrhflpowek.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15ZmlmZ3FjbG5ncmhmbHBvd2VrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjI5NzI0NTQsImV4cCI6MTk3ODU0ODQ1NH0.qnwsdTmwoxm7t4C1tLdih-9LkyH7KkDUNTHxU-fAUac";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
