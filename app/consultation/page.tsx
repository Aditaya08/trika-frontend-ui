'use client';

import React from 'react';
import SideBar from '@/components/shared/SideBar';
import PrescriptionBuilderView from '@/components/consultation/PrescriptionBuilderView';

export default function ConsultationPage() {
  return (
    <div className="flex h-screen bg-[#eae8e6]">
      <SideBar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* MAIN WORK AREA */}
        <div className="flex-1 overflow-y-auto bg-[#eae8e6] p-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold font-sans text-gray-800">Traditional EMR View (Friction-Heavy)</h1>
            <a href="/consultation/emr" className="text-xs text-blue-600 hover:underline font-semibold flex items-center gap-1">
              Switch to Conversational Consult →
            </a>
          </div>
          <PrescriptionBuilderView />
        </div>
      </div>
    </div>
  );
}
