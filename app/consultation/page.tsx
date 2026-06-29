'use client';

import React, { useState } from 'react';
import FullDashboardView from '@/components/consultation/FullDashboardView';
import PrescriptionBuilderView from '@/components/consultation/PrescriptionBuilderView';
import VoiceAssistantView from '@/components/consultation/VoiceAssistantView';
import LetterheadView from '@/components/consultation/LetterheadView';

export default function ConsultationPage() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'builder' | 'voice' | 'letterhead'>('dashboard');

  return (
    <div className="min-h-screen bg-[#fafaf9] p-6 flex flex-col gap-6">
      {/* TOP NAVIGATION TITLE & WIREFRAME SWITCHER */}
      <div className="bg-white border border-[#cdcdcd] rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="bg-[#5b3570] text-white p-2 rounded-xl text-lg font-bold">
              🩺
            </span>
            <div>
              <h1 className="font-serif text-2xl font-bold text-[#1b1b1a]">Clinical Consultation</h1>
              <p className="text-xs text-[#727272] mt-0.5">
                Figma Designs Implementation · Interactive EMR Modules & Voice Workflows
              </p>
            </div>
          </div>
        </div>

        {/* MODE TOGGLES */}
        <div className="flex flex-wrap items-center bg-[#f0ede6] p-1.5 rounded-xl border border-[#dcd6c8] text-xs font-semibold">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'dashboard'
                ? 'bg-white text-[#1b1b1a] shadow-md font-bold'
                : 'text-[#727272] hover:text-[#1b1b1a]'
            }`}
          >
            <span>🖥️</span>
            <span>Full Dashboard (219-5333)</span>
          </button>

          <button
            onClick={() => setActiveTab('builder')}
            className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'builder'
                ? 'bg-white text-[#1b1b1a] shadow-md font-bold'
                : 'text-[#727272] hover:text-[#1b1b1a]'
            }`}
          >
            <span>💊</span>
            <span>Rx Builder & Stepper (219-3684)</span>
          </button>

          <button
            onClick={() => setActiveTab('voice')}
            className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'voice'
                ? 'bg-white text-[#1b1b1a] shadow-md font-bold'
                : 'text-[#727272] hover:text-[#1b1b1a]'
            }`}
          >
            <span>🎙️</span>
            <span>Voice Assistant (219-5150)</span>
          </button>

          <button
            onClick={() => setActiveTab('letterhead')}
            className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'letterhead'
                ? 'bg-white text-[#1b1b1a] shadow-md font-bold'
                : 'text-[#727272] hover:text-[#1b1b1a]'
            }`}
          >
            <span>📄</span>
            <span>Paper Letterhead (219-3950)</span>
          </button>
        </div>
      </div>

      {/* ACTIVE WIREFRAME CONTENT VIEW */}
      <div className="flex-1">
        {activeTab === 'dashboard' && <FullDashboardView />}
        {activeTab === 'builder' && <PrescriptionBuilderView />}
        {activeTab === 'voice' && <VoiceAssistantView />}
        {activeTab === 'letterhead' && <LetterheadView />}
      </div>
    </div>
  );
}
