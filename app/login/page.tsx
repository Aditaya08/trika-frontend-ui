'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Logo from '@/components/Logo';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Client-side validations
    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!password) {
      setError('Please enter your password.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      router.push('/dashboard');
    }, 1200);
  };

  return (
    <div className="flex min-h-screen bg-[#f8f2e4] w-full font-sans select-none overflow-hidden">
      {/* Left side: Hero background image (desktop only) */}
      <div className="hidden md:block md:w-1/2 relative bg-[#1b1b1a]">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/assets/bg.png"
            alt="Workspace background"
            fill
            priority
            className="object-cover opacity-85"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-[#1b1b1a]/60 via-[#1b1b1a]/30 to-transparent" />
        <div className="absolute bottom-16 left-16 text-white max-w-md z-10 space-y-3">
          <h1 className="font-serif text-4xl font-semibold tracking-wide text-[#f8f2e4] leading-tight">
            Elevating healthcare management to the next level.
          </h1>
          <p className="text-sm text-[#cdcdcd]/90 leading-relaxed font-light">
            Streamlining clinic operations, patient queues, and doctor schedules in a single interface.
          </p>
        </div>
      </div>

      {/* Right side: Login form card */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-6 sm:p-12 relative">
        <div className="absolute w-[300px] h-[300px] rounded-full bg-[#5b3570]/5 filter blur-[50px] top-10 right-10 pointer-events-none" />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-[#306cd2]/5 filter blur-[50px] bottom-10 left-10 pointer-events-none" />

        <div className="w-full max-w-[440px] bg-[#faf8f5] border border-[#c5c0b4]/30 rounded-2xl shadow-xl p-8 sm:p-10 z-10 space-y-8 transition-all hover:border-[#c5c0b4]/60">
          
          {/* Logo and Welcome Header */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 relative flex items-center justify-center bg-[#1b1b1a] rounded-xl shadow-md border border-[#cdcdcd]/20">
              <Logo className="w-10 h-10 text-[#f8f2e4]" />
            </div>
            <div className="space-y-2">
              <h2 className="font-serif text-[#242424] text-3xl font-semibold tracking-wide">
                Welcome to Trika
              </h2>
              <p className="text-[#6e6e6e] text-sm font-medium">
                Choose how you'd like to continue
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-[#b51515]/5 border border-[#b51515]/30 text-[#b51515] text-xs font-semibold px-4 py-3 rounded-lg flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{error}</span>
              </div>
            )}

            <div className="space-y-4">
              {/* Email input */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">Email Address</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 pointer-events-none">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </span>
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    className="w-full bg-white border border-[#c5c0b4] rounded-lg pl-10 pr-4 py-3 text-sm text-[#242424] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5b3570]/30 focus:border-[#5b3570] transition-colors disabled:opacity-60"
                  />
                </div>
              </div>

              {/* Password input */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">Password</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 pointer-events-none">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                    className="w-full bg-white border border-[#c5c0b4] rounded-lg pl-10 pr-10 py-3 text-sm text-[#242424] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5b3570]/30 focus:border-[#5b3570] transition-colors disabled:opacity-60"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={loading}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? (
                      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  disabled={loading}
                  className="rounded border-[#c5c0b4] text-[#5b3570] focus:ring-[#5b3570] cursor-pointer"
                />
                <span className="text-xs font-semibold text-gray-600">Remember Me</span>
              </label>
              <button
                type="button"
                onClick={() => alert('Forgot password clicked.')}
                disabled={loading}
                className="text-xs font-bold text-gray-500 hover:text-[#5b3570] transition-colors"
              >
                Forgot Password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#5b3570] hover:bg-[#4a285c] text-[#f8f2e4] font-semibold py-3.5 px-4 rounded-lg text-sm shadow-md transition-all duration-200 transform hover:-translate-y-[1px] active:translate-y-0 flex items-center justify-center gap-2 disabled:opacity-75 disabled:pointer-events-none cursor-pointer"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Logging in...</span>
                </>
              ) : (
                <span>Sign In</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
