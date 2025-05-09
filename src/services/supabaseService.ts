
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client safely
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create client only if both URL and key are available
let supabase = null;
try {
  if (supabaseUrl && supabaseAnonKey) {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
  }
} catch (error) {
  console.error("Error initializing Supabase client:", error);
}

export const getSupabaseClient = () => supabase;

export const isSupabaseConfigured = () => !!supabase;

export const signUp = async (email: string, password: string) => {
  if (!supabase) throw new Error("Supabase client not initialized");
  
  return await supabase.auth.signUp({
    email,
    password,
  });
};

export const signIn = async (email: string, password: string) => {
  if (!supabase) throw new Error("Supabase client not initialized");
  
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
};

export const signOut = async () => {
  if (!supabase) throw new Error("Supabase client not initialized");
  
  return await supabase.auth.signOut();
};

export const getCurrentUser = async () => {
  if (!supabase) return { data: { user: null } };
  
  return await supabase.auth.getUser();
};

export const onAuthStateChange = (callback: (event: string, session: any) => void) => {
  if (!supabase) return { data: { subscription: null } };
  
  return supabase.auth.onAuthStateChange(callback);
};
