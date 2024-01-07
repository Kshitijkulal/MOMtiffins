import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = "https://ofbcxciqjsaplzqrgiyu.supabase.co";

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9mYmN4Y2lxanNhcGx6cXJnaXl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ2MDQ3ODcsImV4cCI6MjAyMDE4MDc4N30.ceOc6uwB-nE7AEgi7Wm2XQ_e-F7oODEcaxPXYv-BDwQ"


export const supabase = createClient(supabaseUrl,supabaseAnonKey)