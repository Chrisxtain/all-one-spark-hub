
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

interface AuthFormsProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  handleSignIn: (e: React.FormEvent) => Promise<void>;
  handleSignUp: (e: React.FormEvent) => Promise<void>;
  loading: boolean;
}

const AuthForms: React.FC<AuthFormsProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  handleSignIn,
  handleSignUp,
  loading
}) => {
  return (
    <div className="max-w-md mx-auto">
      <Card className="p-6">
        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          
          <TabsContent value="signin" className="space-y-4">
            <SignInForm
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleSignIn={handleSignIn}
              loading={loading}
            />
          </TabsContent>
          
          <TabsContent value="signup" className="space-y-4">
            <SignUpForm
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleSignUp={handleSignUp}
              loading={loading}
            />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default AuthForms;
