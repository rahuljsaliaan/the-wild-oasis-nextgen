import { createClient } from "@supabase/supabase-js";
import config from "@/app/_lib/config/config";
import { Database } from "@/app/_lib/supabase/database.types";

const supabase = createClient<Database>(
  config.env.supabaseUrl,
  config.env.supabaseKey
);

export default supabase;
