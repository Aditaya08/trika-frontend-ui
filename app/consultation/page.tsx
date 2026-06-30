'use client';

import React, { useState } from 'react';
import SideBar from '@/components/SideBar';
import FullDashboardView from '@/components/consultation/FullDashboardView';
import LetterheadView from '@/components/consultation/LetterheadView';

export default function ConsultationPage() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'letterhead'>('dashboard');

  return (
    <div className="flex h-screen bg-[#eae8e6]">
      <SideBar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* MAIN WORK AREA */}
        <div className="flex-1 overflow-y-auto bg-[#eae8e6] p-6">
          {activeTab === 'dashboard' ? (
            <FullDashboardView onViewChange={setActiveTab} />
          ) : (
            <LetterheadView onViewChange={setActiveTab} />
          )}
        </div>
      </div>
    </div>
  );
}

