
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AuthError from '@/components/auth/AuthError';
import AuthForms from '@/components/auth/AuthForms';
import MemberContent from '@/components/members/MemberContent';
import { 
  getSupabaseClient, 
  isSupabaseConfigured,
  signUp,
  signIn,
  signOut,
  getCurrentUser,
  onAuthStateChange
} from '@/services/supabaseService';

const Members = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [supabaseError, setSupabaseError] = useState(!isSupabaseConfigured());
  const { toast } = useToast();
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    if (!isSupabaseConfigured()) return;
    
    const { data: authListener } = onAuthStateChange(
      (event, session) => {
        if (session?.user) {
          setUser(session.user);
        } else {
          setUser(null);
        }
      }
    );

    // Get current user on initial load
    const fetchCurrentUser = async () => {
      const { data } = await getCurrentUser();
      setUser(data.user);
    };
    
    fetchCurrentUser();
    return () => {
      if (authListener?.subscription) {
        authListener.subscription.unsubscribe();
      }
    };
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!isSupabaseConfigured()) {
      toast({
        title: "Configuration Error",
        description: "Authentication is not available. Please contact the administrator.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    try {
      const { error } = await signUp(email, password);
      
      if (error) throw error;
      
      toast({
        title: "Success!",
        description: "Check your email for the confirmation link.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!isSupabaseConfigured()) {
      toast({
        title: "Configuration Error",
        description: "Authentication is not available. Please contact the administrator.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    try {
      const { error } = await signIn(email, password);
      
      if (error) throw error;
      
      toast({
        title: "Welcome back!",
        description: "You have successfully signed in.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    if (!isSupabaseConfigured()) return;
    
    try {
      const { error } = await signOut();
      if (error) throw error;
      setUser(null);
      toast({
        title: "Success!",
        description: "You have been signed out.",
      });
    } catch (error) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-display font-bold text-center mb-8">
          Members <span className="gradient-text">Community</span>
        </h1>
        
        {supabaseError && (
          <AuthError message="Supabase environment variables are not properly configured. Please make sure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in your environment." />
        )}
        
        {!supabaseError && !user ? (
          <AuthForms
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleSignIn={handleSignIn}
            handleSignUp={handleSignUp}
            loading={loading}
          />
        ) : !supabaseError && user ? (
          <MemberContent handleSignOut={handleSignOut} />
        ) : null}
      </main>
      
      <Footer />
    </div>
  );
};

export default Members;
