'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Logo from '@/components/Logo';

export default function SplashPage() {
  const router = useRouter();
  const [loadingDots, setLoadingDots] = useState('');

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setLoadingDots((prev) => (prev.length >= 6 ? '' : prev + '.'));
    }, 450);
    return () => clearInterval(dotsInterval);
  }, []);

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      router.push('/login');
    }, 3000);
    return () => clearTimeout(redirectTimeout);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f8f2e4] w-full select-none relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#5b3570]/5 filter blur-[80px] -top-40 -left-40 animate-pulse pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#306cd2]/5 filter blur-[80px] -bottom-40 -right-40 animate-pulse pointer-events-none" style={{ animationDelay: '1.5s' }} />

      <div className="flex flex-col items-center gap-8 z-10 max-w-sm px-4">
        <div className="bg-[#1b1b1a] rounded-[12px] p-6 shadow-xl border border-[#cdcdcd]/30 animate-pulse-slow">
          <Logo className="w-16 h-16 text-[#f8f2e4] animate-spin-slow" />
        </div>

        <div className="text-center space-y-2">
          <h2 className="font-serif text-[#1b1b1a] text-3xl font-semibold tracking-wide">
            Trika HealthOS
          </h2>
          <p className="font-sans font-semibold text-[15px] leading-normal text-[#737066] text-center w-64 min-h-[24px]">
            Setting up workspace{loadingDots}
          </p>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
        <span className="text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#737066]/70">
          Powered by TRIKA Health Inc.
        </span>
      </div>

      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.03); opacity: 0.95; }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite ease-in-out;
        }
        .animate-spin-slow {
          animation: spin-slow 20s infinite linear;
        }
      `}</style>
    </div>
  );
}
