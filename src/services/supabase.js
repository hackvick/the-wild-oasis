
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://dhweddxdbqvjnewiggzz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRod2VkZHhkYnF2am5ld2lnZ3p6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUxMjk0OTEsImV4cCI6MjA0MDcwNTQ5MX0.JCaE3B3yOQ6snB-d8yjClAQvMNAwVAIPyei8A36xu38'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase 