'use client';

import React from 'react';
import SideBar from '@/components/SideBar';

export default function InfoPage() {
  return (
    <div className="flex h-screen w-full bg-[#f8f2e4] overflow-hidden">
      <SideBar />
      <main className="flex-1 flex flex-col h-full overflow-hidden p-8">
        <div className="flex flex-col gap-6 max-w-4xl w-full mx-auto my-auto items-center justify-center text-center space-y-4">
          <div className="w-20 h-20 rounded-full bg-[#5b3570]/10 flex items-center justify-center text-[#5b3570]">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="space-y-2">
            <h1 className="font-serif text-3xl font-bold text-[#1b1b1a]">Application Info</h1>
            <p className="font-sans text-sm text-[#727272] max-w-md mx-auto">
              View system version, connected devices, integrations status, and help desk documentation.
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
