// src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dhkkmcexhrlkjhcpeuer.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoa2ttY2V4aHJsa2poY3BldWVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxOTY2MjEsImV4cCI6MjA2NTc3MjYyMX0.zGpQDqmQ02Xhxu5aS38a8M-tOpUg10DeElkPY0BR4Y8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
