'use client';

import React from 'react';
import SideBar from '@/components/shared/SideBar';

export default function DoctorsPage() {
  return (
    <div className="flex h-screen w-full bg-[#f8f2e4] overflow-hidden">
      <SideBar />
      <main className="flex-1 flex flex-col h-full overflow-hidden p-8">
        <div className="flex flex-col gap-6 max-w-4xl w-full mx-auto my-auto items-center justify-center text-center space-y-4">
          <div className="w-20 h-20 rounded-full bg-[#5b3570]/10 flex items-center justify-center text-[#5b3570]">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.952 11.952 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div className="space-y-2">
            <h1 className="font-serif text-3xl font-bold text-[#1b1b1a]">Doctors Directory</h1>
            <p className="font-sans text-sm text-[#727272] max-w-md mx-auto">
              Monitor active shifts, queue numbers, specialties, and doctor status indicators.
            </p>
          </div>
          <div className="inline-flex px-4 py-2 bg-[#1b1b1a] text-[#f8f2e4] rounded-lg text-xs font-semibold tracking-wider uppercase select-none">
            Coming Soon
          </div>
        </div>
      </main>
    </div>
  );
}
