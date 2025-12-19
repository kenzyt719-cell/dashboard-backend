
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://tvqdqyevabpvydbcytbw.supabase.co'
const supabaseKey = 'sb_publishable_0XuWUcslNVIs-MysTdxDqg_c6zIEEXm'
export const supabase = createClient(supabaseUrl, supabaseKey)