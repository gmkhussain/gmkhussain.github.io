
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || `Imh0dHBzOi8vb2ZuZXZzd3d0aWV2cWhsbmpyZXouc3VwYWJhc2UuY28i`;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY || `InNiX3B1Ymxpc2hhYmxlX1Y3M0VVOXRvUXBla0hHSTVtTTJKX1FfZTJCX1d1THUi`;

const clr =( str => JSON.parse(atob(str)))

export const supabase = createClient(clr(supabaseUrl), clr(supabaseKey));