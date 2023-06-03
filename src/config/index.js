import { createClient } from "@supabase/supabase-js"

const supabase = createClient("https://meobwtecfzzcjpldbwcr.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lb2J3dGVjZnp6Y2pwbGRid2NyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExMzE2NTQsImV4cCI6MTk5NjcwNzY1NH0.zdgoHDrf_bWxF-oO53jmXaWlyuSFgVPqge9ihOIBGgs");


export default supabase;