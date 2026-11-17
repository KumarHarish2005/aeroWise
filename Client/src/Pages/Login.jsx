
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Plane,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Login = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(activeTab, formData);

    // Connect login/register API here later
  };

  const switchTab = (tab) => {
    setActiveTab(tab);
    setShowPassword(false);
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-slate-50">

      {/* Left Branding Section */}
      <div className="hidden lg:flex flex-col justify-between bg-slate-950 text-white p-12">

        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-xl">
            <Plane className="h-6 w-6" />
          </div>

          <span className="text-2xl font-bold tracking-tight">
            AeroWise
          </span>
        </div>

        <div className="max-w-lg space-y-6">
          <p className="text-blue-400 font-semibold tracking-widest text-sm">
            TRAVEL SMARTER. FLY BETTER.
          </p>

          <h1 className="text-5xl xl:text-6xl font-bold leading-tight">
            Your journey,
            <span className="text-blue-400"> reimagined.</span>
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed">
            Discover smarter flight combinations, find better
            prices and let artificial intelligence plan your
            next adventure.
          </p>

          <div className="flex gap-3 pt-4">
            <div className="h-1 w-16 bg-blue-500 rounded-full" />
            <div className="h-1 w-8 bg-slate-700 rounded-full" />
            <div className="h-1 w-8 bg-slate-700 rounded-full" />
          </div>
        </div>

        <p className="text-sm text-slate-500">
          © 2026 AeroWise. All rights reserved.
        </p>

      </div>

      {/* Right Authentication Section */}
      <div className="flex items-center justify-center p-5 sm:p-10">

        <div className="w-full max-w-md">

          {/* Mobile Logo */}
          <div className="flex lg:hidden justify-center items-center gap-2 mb-8">
            <Plane className="h-7 w-7 text-blue-600" />
            <span className="text-2xl font-bold text-slate-900">
              AeroWise
            </span>
          </div>

          <Card className="border border-slate-200 shadow-xl shadow-slate-200/50 rounded-2xl overflow-hidden">

            {/* Heading */}
            <CardHeader className="text-center pt-8 pb-5">
              <CardTitle className="text-3xl font-bold tracking-tight">
                {activeTab === "login"
                  ? "Welcome back"
                  : "Create an account"}
              </CardTitle>

              <CardDescription className="text-sm mt-2">
                {activeTab === "login"
                  ? "Sign in to continue your journey with AeroWise."
                  : "Join AeroWise and start planning smarter journeys."}
              </CardDescription>
            </CardHeader>

            <CardContent className="px-6 sm:px-8 pb-8">

              {/* Tabs */}
              <div className="grid grid-cols-2 border-b mb-7">

                <button
                  type="button"
                  onClick={() => switchTab("login")}
                  className={`pb-3 text-sm font-semibold border-b-2 transition-colors ${
                    activeTab === "login"
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-slate-500 hover:text-slate-900"
                  }`}
                >
                  Login
                </button>

                <button
                  type="button"
                  onClick={() => switchTab("register")}
                  className={`pb-3 text-sm font-semibold border-b-2 transition-colors ${
                    activeTab === "register"
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-slate-500 hover:text-slate-900"
                  }`}
                >
                  Register
                </button>

              </div>

              {/* Authentication Form */}
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name - Register Only */}
                {activeTab === "register" && (
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>

                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-slate-400" />

                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        className="h-11 pl-10"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>

                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />

                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="h-11 pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="password">Password</Label>

                    {activeTab === "login" && (
                      <Link
                        to="/forgot-password"
                        className="text-xs font-medium text-blue-600 hover:underline"
                      >
                        Forgot password?
                      </Link>
                    )}
                  </div>

                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-400" />

                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      className="h-11 pl-10 pr-11"
                      minLength={8}
                      required
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-slate-400 hover:text-slate-700"
                    >
                      {showPassword ? (
                        <EyeOff size={19} />
                      ) : (
                        <Eye size={19} />
                      )}
                    </button>
                  </div>

                  {activeTab === "register" && (
                    <p className="text-xs text-slate-500">
                      Password must contain at least 8 characters.
                    </p>
                  )}
                </div>

                {/* Remember Me - Login Only */}
                {activeTab === "login" && (
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="remember"
                      className="h-4 w-4 accent-blue-600"
                    />

                    <Label
                      htmlFor="remember"
                      className="text-sm font-normal text-slate-600"
                    >
                      Remember me
                    </Label>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                >
                  {activeTab === "login"
                    ? "Sign In"
                    : "Create Account"}

                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

              </form>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-slate-200" />
                </div>

                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-3 text-slate-400">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Google Login */}
              <Button
                type="button"
                variant="outline"
                className="w-full h-11 border-slate-200"
                onClick={() => console.log("Google authentication coming soon")}
              >
                <span className="font-bold text-lg mr-2">G</span>
                Google
              </Button>

              {/* Bottom Text */}
              <p className="text-center text-sm text-slate-500 mt-7">
                {activeTab === "login"
                  ? "Don't have an account?"
                  : "Already have an account?"}

                <button
                  type="button"
                  onClick={() =>
                    switchTab(
                      activeTab === "login" ? "register" : "login"
                    )
                  }
                  className="ml-1 text-blue-600 font-semibold hover:underline"
                >
                  {activeTab === "login" ? "Register" : "Login"}
                </button>
              </p>

            </CardContent>
          </Card>

          <p className="text-center text-xs text-slate-400 mt-6">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;
