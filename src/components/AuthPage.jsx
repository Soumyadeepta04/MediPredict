import React, { useState } from "react";
import { Activity, Mail, Lock, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function AuthPage({ onNavigate, setIsLoggedIn }) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login - in real app would validate credentials
    if (loginEmail && loginPassword) {
      setIsLoggedIn(true);
      onNavigate('dashboard');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Mock signup - in real app would create account
    if (signupEmail && signupPassword && signupPassword === signupConfirmPassword) {
      setIsLoggedIn(true);
      onNavigate('dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#005BEA]/5 via-white to-[#00C6FB]/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#005BEA] to-[#00C6FB]">
              <Activity className="h-7 w-7 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#005BEA] to-[#00C6FB] bg-clip-text text-transparent">
              MediPredict
            </span>
          </div>
          <p className="text-gray-600">Welcome back! Please login to your account</p>
        </div>

        <Card className="border-2 shadow-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Account Access</CardTitle>
            <CardDescription className="text-center">
              Login or create a new account to get started
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login" className="cursor-pointer transition-all">Login</TabsTrigger>
                <TabsTrigger value="signup" className="cursor-pointer transition-all">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="pl-10"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="login-password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded cursor-pointer" />
                      <span className="text-gray-600">Remember me</span>
                    </label>
                    <a href="#" className="text-[#005BEA] hover:underline cursor-pointer transition-colors">
                      Forgot password?
                    </a>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#005BEA] to-[#00C6FB] hover:opacity-90 text-white hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                  >
                    Login
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="signup-name"
                        type="text"
                        placeholder="John Doe"
                        className="pl-10"
                        value={signupName}
                        onChange={(e) => setSignupName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="pl-10"
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="signup-password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10"
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-confirm-password">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="signup-confirm-password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10"
                        value={signupConfirmPassword}
                        onChange={(e) => setSignupConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="text-sm text-gray-600">
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input type="checkbox" className="mt-1 rounded cursor-pointer" required />
                      <span>
                        I agree to the{" "}
                        <a href="#" className="text-[#005BEA] hover:underline cursor-pointer transition-colors">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-[#005BEA] hover:underline cursor-pointer transition-colors">
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#005BEA] to-[#00C6FB] hover:opacity-90 text-white hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                  >
                    Create Account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <p className="text-center mt-6 text-sm text-gray-600">
          Protected by industry-standard encryption and security
        </p>
      </div>
    </div>
  );
}