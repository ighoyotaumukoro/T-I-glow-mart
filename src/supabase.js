import { createClient } from "@supabase/supabase-js";
const supabaseUrl = 
"https://pdjqrsuudllrowkfocwt.supabase.co"
const supabaseKey = "sb_publishable_b84MqfAvsYXK539BdSXmkg_qscDFJAC"

export const supabase=createClient(supabaseUrl, supabaseKey)
