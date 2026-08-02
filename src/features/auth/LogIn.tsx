import { Eye, EyeOff, Mail, Lock, Loader2, ArrowLeft, User, RefreshCw } from 'lucide-react';
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router";
import Button from "@/components/ui/Button.jsx";
import authService from "@/services/authService";
import { useOnboardingRedirect } from "@/hooks/session/useOnboardingRedirect";
import image from "@/assets/images/logoOld.png";
function Login() {
  const { login, isLoading, error, clearError, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  useOnboardingRedirect();
  const [ form, setForm ] = useState({ email: "", password: "" });
  const [ showPassword, setShowPassword ] = useState(false);
  const [ rememberMe, setRememberMe ] = useState(false);
  const [ resendLoading, setResendLoading ] = useState(false);
  const [ resendSuccess, setResendSuccess ] = useState(false);

  const isEmailVerificationError = error?.toLowerCase().includes("verify your email");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    try {
      await login(form);
      navigate("/"); // redirect after successful login
    } catch (err) {
      console.error("Login failed - check error state for details", err);
    }
  };

  const handleResendVerificationEmail = async () => {
    setResendLoading(true);
    setResendSuccess(false);
    try {
      await authService.resendVerificationEmail({ email: form.email });
      setResendSuccess(true);
      setTimeout(() => setResendSuccess(false), 5000);
    } catch (err) {
      console.error("Failed to resend verification email", err);
    } finally {
      setResendLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {

  };
  useEffect(() => {
    clearError();
  }, [])

  return (
    <div className="min-h-screen bg-[#FAFAFC] flex">
      {/* Left Side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-primary-500 to-secondary-500 p-12 flex-col justify-between">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 grid-pattern" />
        </div>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-white relative z-10">
          <img src={image} alt="GenLearn" className="w-10"/>
          <span className="text-xl font-bold">GenLearn</span>
        </Link>

        {/* Illustration */}
        <div className="flex-1 flex items-center justify-center relative">
          <div className="w-80 h-80 relative">
            {/* Orbiting circles */}
            <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-spin-slow" />
            <div className="absolute inset-8 rounded-full border-2 border-white/30 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
            <div className="absolute inset-16 rounded-full border-2 border-dashed border-white/20 animate-spin-slow" />

            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                <User className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Floating elements */}
            {[ ...Array(6) ].map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 rounded-full bg-white/40 animate-float"
                style={{
                  top: `${20 + i * 10}%`,
                  left: `${10 + i * 15}%`,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="relative z-10 text-white">
          <p className="text-xl font-medium mb-2">"Transform your learning journey"</p>
          <p className="text-white/70">Join thousands of learners transforming education with AI</p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Back button - Mobile only */}
          <Link to="/" className="lg:hidden inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
            <p className="text-gray-600">Sign in to continue your learning journey</p>
          </div>

          {/* Error message */}
          {error && (
            <div className="mb-6 space-y-3">
              <div className={`p-4 rounded-xl border text-sm ${isEmailVerificationError
                  ? 'bg-orange-50 border-orange-100 text-orange-600'
                  : 'bg-red-50 border-red-100 text-red-600'
                }`}>
                {error}
              </div>
              {isEmailVerificationError && (
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">
                    Didn't receive the email? Check your spam folder or resend it.
                  </p>
                  <Button
                    type="button"
                    onClick={handleResendVerificationEmail}
                    disabled={resendLoading}
                    variant="secondary"
                    className="w-full"
                  >
                    {resendLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <RefreshCw className="w-5 h-5" />
                        Resend Verification Email
                      </>
                    )}
                  </Button>
                  {resendSuccess && (
                    <div className="p-3 rounded-lg bg-green-50 border border-green-100 text-green-600 text-sm">
                      ✓ Verification email sent! Check your inbox.
                    </div>
                  )}
                </div>
              )}
            </div>
          )}


          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="you@example.com"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 focus:border-primary-300 focus:ring-2 focus:ring-primary-500/20 transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={form.password}
                  onChange={(e) => setForm(prev => ({ ...prev, password: e.target.value }))}
                  placeholder="Enter your password"
                  required
                  className="w-full pl-12 pr-12 py-3 rounded-2xl border border-gray-200 focus:border-primary-300 focus:ring-2 focus:ring-primary-500/20 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember me & Forgot password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-primary-500 focus:ring-primary-500"
                />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-sm font-medium text-primary-600 hover:text-primary-700">
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Signing in...
                </>
              ) : (
                'Sign in'
              )}
            </Button>
          </form>

          {/* Sign up link */}
          <p className="mt-8 text-center text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="font-semibold text-primary-600 hover:text-primary-700">
              Sign up for free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
