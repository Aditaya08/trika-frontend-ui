'use client';

import React, { useState } from 'react';

interface LetterheadViewProps {
  onViewChange: (tab: 'dashboard' | 'letterhead') => void;
}

export default function LetterheadView({ onViewChange }: LetterheadViewProps) {
  const [activeSection, setActiveSection] = useState<'findings' | 'complaint' | 'diagnosis' | 'prescription'>('findings');
  const [showHistory, setShowHistory] = useState(false);
  const [showPastFamily, setShowPastFamily] = useState(false);
  const [showAdvice, setShowAdvice] = useState(true);
  const [showFollowUp, setShowFollowUp] = useState(true);

  return (
    <div className="w-full flex flex-col gap-6 text-[#23302e] max-w-7xl mx-auto pb-12 font-sans">
      
      {/* 1440px Main Container */}
      <div className="bg-[#f0ede6] border border-[#cdcdcd] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* TOP BAR */}
        <header className="bg-white border-b border-[#cdcdcd] h-14 px-6 flex items-center justify-between shrink-0 select-none">
          <div className="flex items-center gap-3">
            {/* Square brand logo box */}
            <div className="w-9 h-9 rounded-lg bg-[#0f5d55] text-white flex items-center justify-center font-bold text-base shadow-inner">
              <span>✚</span>
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm leading-tight text-[#0c3f3a]">Sharma Care Clinic</h3>
              <p className="text-[9px] text-[#6b756f] tracking-wider uppercase font-semibold leading-none mt-0.5">Consultation Pad</p>
            </div>
          </div>

          <div className="font-sans text-xs text-[#6b756f]">
            Sub-view: <strong className="text-black uppercase">Paper Letterhead</strong>
          </div>

          {/* User Profile & Actions */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-[#f4f3ed] rounded-full pl-1 pr-3 py-1 select-none border border-[#efe9da]">
              <div className="w-6 h-6 rounded-full bg-[#0f5d55] text-white text-[10px] font-bold flex items-center justify-center">
                AS
              </div>
              <div className="text-left font-sans">
                <p className="font-bold text-xs leading-none text-[#23302e]">Dr. A. Sharma</p>
                <p className="text-[8px] text-[#6b756f] tracking-wider uppercase font-semibold leading-none mt-0.5">Physician</p>
              </div>
            </div>
          </div>
        </header>

        {/* TWO-COLUMN LAYOUT */}
        <div className="flex flex-col lg:flex-row min-h-[750px]">
          
          {/* LEFT 70% MAIN WORK AREA (The A4 Paper Sheet) */}
          <main className="flex-1 bg-[#efebe2] p-8 flex flex-col gap-6 overflow-y-auto">
            
            {/* LETTERHEAD CONTROLS OVER BAR */}
            <div className="flex items-center justify-between px-2 text-xs select-none">
              <div className="flex items-center gap-1.5 text-green-800 font-bold">
                <span className="text-sm">✓</span>
                <span>Saved · autosaving</span>
              </div>

              <div className="flex border border-[#cdcdcd] rounded-xl overflow-hidden bg-[#f0ede6] p-1 font-semibold text-[11px] shadow-inner">
                <button 
                  onClick={() => onViewChange('dashboard')}
                  className="text-[#727272] hover:text-[#1b1b1a] px-3 py-1.5 rounded-lg transition-colors"
                >
                  Consult
                </button>
                <button 
                  onClick={() => onViewChange('letterhead')}
                  className="bg-white text-[#1b1b1a] px-3 py-1.5 rounded-lg shadow-sm font-bold border border-[#cdcdcd]/65"
                >
                  Print preview
                </button>
                <button 
                  onClick={() => {}}
                  className="text-[#727272] hover:text-[#1b1b1a] px-3 py-1.5 rounded-lg transition-colors"
                >
                  History timeline
                </button>
              </div>
            </div>

            {/* THE PAPER SHEET */}
            <div className="bg-[#fbfaf5] border border-[#efe9da] rounded-xl shadow-2xl p-8 flex flex-col gap-6 font-serif max-w-[850px] mx-auto w-full">
              
              {/* CLINIC HEADINGS */}
              <div className="border-b-2 border-[#0f5d55] pb-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0f5d55] to-[#0c3f3a] text-white flex items-center justify-center font-bold text-xl shadow-md select-none">
                    ✚
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold tracking-tight text-[#0c3f3a]">Sharma Care Clinic</h1>
                    <p className="text-xs font-sans text-[#6b756f] mt-0.5 leading-relaxed">
                      General Medicine & Diabetology · Jaipur
                    </p>
                  </div>
                </div>
                <div className="text-right font-sans">
                  <h3 className="font-serif font-bold text-base text-[#23302e]">Dr. A. Sharma</h3>
                  <p className="text-xs text-[#6b756f] mt-0.5 leading-relaxed">
                    MBBS, MD (Medicine) Reg. No. RAJ/2009/14872
                  </p>
                </div>
              </div>

              {/* DATE & TOKEN METADATA */}
              <div className="flex flex-wrap items-center justify-between text-xs font-sans text-[#6b756f] border-b border-dashed border-[#efe9da] pb-2">
                <div className="flex gap-6">
                  <span>Date: <strong className="text-[#23302e] font-semibold">15 Jun 2026</strong></span>
                  <span>Token: <strong className="text-[#23302e] font-semibold">#18</strong></span>
                  <span>Visit: <strong className="text-[#23302e] font-semibold">Follow-up</strong></span>
                </div>
              </div>

              {/* PATIENT LINE */}
              <div className="bg-[#f4f1e8] border border-dashed border-[#cdcdcd] rounded-xl p-3.5 flex flex-wrap items-center justify-between text-xs font-sans gap-2.5">
                <div className="flex items-center gap-2">
                  <span className="uppercase text-[#9aa39d] font-bold text-[9px] tracking-wider">Name:</span>
                  <span className="font-serif font-bold text-[#23302e] text-sm">Rakesh Kumar</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="uppercase text-[#9aa39d] font-bold text-[9px] tracking-wider">Age / Sex:</span>
                  <span className="font-serif font-bold text-[#23302e] text-sm">47 / M</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="uppercase text-[#9aa39d] font-bold text-[9px] tracking-wider">UHID:</span>
                  <span className="font-serif font-bold text-[#23302e] text-sm">4471-203</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="uppercase text-[#9aa39d] font-bold text-[9px] tracking-wider">Allergy:</span>
                  <span className="font-sans font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded text-[11px] flex items-center gap-1 select-none">
                    Penicillin <span className="text-amber-700">⚠</span>
                  </span>
                </div>
              </div>

              {/* SOAP LETTERHEAD BODY CONTENT SECTIONS */}
              <div className="flex flex-col gap-6 pt-2 text-[#23302e] text-sm">
                
                {/* Chief Complaint */}
                <div 
                  onClick={() => setActiveSection('complaint')}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                    activeSection === 'complaint' 
                      ? 'bg-white border-[#0f5d55] shadow-md' 
                      : 'border-transparent hover:bg-gray-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-[#efe9da] pb-1.5 mb-2 font-sans text-xs">
                    <span className="font-bold text-[#0f5d55] uppercase tracking-wider flex items-center gap-2 select-none">
                      <span>💬</span> Complaint
                    </span>
                    <button className="w-5 h-5 rounded-full bg-[#f4f3ed] hover:bg-gray-100 flex items-center justify-center text-[10px] border border-[#d9d2c4] text-[#0f5d55]">
                      🎙
                    </button>
                  </div>
                  <p className="leading-relaxed italic text-gray-800 pl-1">
                    Chest burning since 3 days, worse after meals. No breathlessness or sweating.
                  </p>
                </div>

                {/* Findings / Examination */}
                <div 
                  onClick={() => setActiveSection('findings')}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                    activeSection === 'findings' 
                      ? 'bg-white border-[#0f5d55] shadow-md' 
                      : 'border-transparent hover:bg-gray-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-[#efe9da] pb-1.5 mb-2 font-sans text-xs">
                    <span className="font-bold text-[#0f5d55] uppercase tracking-wider flex items-center gap-2 select-none">
                      <span>🔍</span> Findings / Examination
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-[#0f5d55] font-bold bg-[#e8f2f1] px-1.5 py-0.5 rounded select-none flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0f5d55] animate-pulse" /> listening
                      </span>
                      <button className="w-5 h-5 rounded-full bg-[#f4f3ed] hover:bg-gray-100 flex items-center justify-center text-[10px] border border-[#d9d2c4] text-[#0f5d55]">
                        🎙
                      </button>
                    </div>
                  </div>
                  <p className="leading-relaxed text-gray-800 pl-1">
                    Vitals: BP 130/85, Pulse 78, SpO₂ 98%.<br />
                    Mild epigastric tenderness. Chest clear.
                  </p>
                </div>

                {/* Optional History of Illness */}
                {showHistory && (
                  <div className="p-3.5 rounded-xl border border-[#efe9da] bg-white">
                    <div className="flex items-center justify-between border-b border-[#efe9da] pb-1.5 mb-2 font-sans text-xs">
                      <span className="font-bold text-gray-500 uppercase tracking-wider">History of Illness</span>
                      <button 
                        onClick={(e) => { e.stopPropagation(); setShowHistory(false); }}
                        className="text-gray-400 hover:text-red-500 text-xs"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="leading-relaxed italic text-gray-600 pl-1">No previous episodes of acidity or burning. No family history of ulcers.</p>
                  </div>
                )}

                {/* Optional Past Family History */}
                {showPastFamily && (
                  <div className="p-3.5 rounded-xl border border-[#efe9da] bg-white">
                    <div className="flex items-center justify-between border-b border-[#efe9da] pb-1.5 mb-2 font-sans text-xs">
                      <span className="font-bold text-gray-500 uppercase tracking-wider">Past / Family History</span>
                      <button 
                        onClick={(e) => { e.stopPropagation(); setShowPastFamily(false); }}
                        className="text-gray-400 hover:text-red-500 text-xs"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="leading-relaxed italic text-gray-600 pl-1">Non-smoker. No chronic illnesses. Father had mild GERD.</p>
                  </div>
                )}

                {/* Diagnosis */}
                <div 
                  onClick={() => setActiveSection('diagnosis')}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                    activeSection === 'diagnosis' 
                      ? 'bg-white border-[#0f5d55] shadow-md' 
                      : 'border-transparent hover:bg-gray-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-[#efe9da] pb-1.5 mb-2 font-sans text-xs">
                    <span className="font-bold text-[#0f5d55] uppercase tracking-wider flex items-center gap-2 select-none">
                      <span>📝</span> Diagnosis
                    </span>
                    <button className="w-5 h-5 rounded-full bg-[#f4f3ed] hover:bg-gray-100 flex items-center justify-center text-[10px] border border-[#d9d2c4] text-[#0f5d55]">
                      🎙
                    </button>
                  </div>
                  <p className="leading-relaxed text-gray-800 font-bold pl-1">
                    Acid reflux / GERD. <span className="font-normal text-gray-500 italic">— to rule out cardiac.</span>
                  </p>
                </div>

                {/* Prescription (Rx) */}
                <div 
                  onClick={() => setActiveSection('prescription')}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                    activeSection === 'prescription' 
                      ? 'bg-white border-[#0f5d55] shadow-md' 
                      : 'border-transparent hover:bg-gray-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-[#efe9da] pb-1.5 mb-3 font-sans text-xs">
                    <span className="font-bold text-[#0f5d55] uppercase tracking-wider flex items-center gap-2 select-none">
                      <span className="text-sm">℞</span> Prescription
                    </span>
                    <span className="text-gray-400 font-normal lowercase select-none">say drug - dose - frequency - duration</span>
                  </div>
                  
                  {/* Fictional Rx line items */}
                  <div className="flex flex-col gap-3 font-sans text-xs pl-1">
                    <div className="flex flex-col gap-0.5">
                      <div className="flex justify-between items-start">
                        <span className="font-bold text-[#23302e] text-[13px]">1. Tab. Pantoprazole 40 mg</span>
                        <span className="font-bold text-gray-700">1—0—0 × 2 weeks</span>
                      </div>
                      <span className="text-[10px] text-gray-500 italic">PPI - before food</span>
                    </div>

                    <div className="flex flex-col gap-0.5 border-t border-[#cdcdcd]/30 pt-2.5">
                      <div className="flex justify-between items-start">
                        <span className="font-bold text-[#23302e] text-[13px]">2. Syp. Sucralfate</span>
                        <span className="font-bold text-gray-700">2 tsp — 2 tsp — 2 tsp × 1 week</span>
                      </div>
                      <span className="text-[10px] text-gray-500 italic">after meals</span>
                    </div>
                  </div>
                </div>

                {/* Advice (if toggled) */}
                {showAdvice && (
                  <div className="flex flex-col gap-1 border-t border-[#cdcdcd]/40 pt-4 font-sans text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-gray-500 uppercase tracking-wider text-[9.5px]">Advice</span>
                      <button onClick={() => setShowAdvice(false)} className="text-gray-400 hover:text-red-500">✕</button>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 mt-1 text-[12px]">
                      <li>Avoid oily, spicy, and heavy meals at night.</li>
                      <li>Maintain an upright posture for at least 2 hours after eating.</li>
                    </ul>
                  </div>
                )}

                {/* Follow-up (if toggled) */}
                {showFollowUp && (
                  <div className="flex flex-col gap-1 border-t border-[#cdcdcd]/40 pt-4 font-sans text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-gray-500 uppercase tracking-wider text-[9.5px]">Follow-up</span>
                      <button onClick={() => setShowFollowUp(false)} className="text-gray-400 hover:text-red-500">✕</button>
                    </div>
                    <p className="text-[12px] text-gray-700 mt-1 pl-1">
                      Review after <span className="font-bold text-black border border-gray-300 rounded px-1.5 py-0.5 bg-white">1 week</span> — auto-creates a return visit on this patient's record.
                    </p>
                  </div>
                )}

              </div>

              {/* CHIPS ROW AT BOTTOM */}
              <div className="flex flex-wrap gap-2 text-xs font-sans mt-2 select-none justify-center">
                {!showHistory && (
                  <button onClick={() => setShowHistory(true)} className="border border-[#efe9da] border-dashed rounded-full px-3 py-1 text-gray-500 hover:bg-[#efe9da]/30">
                    + History of illness
                  </button>
                )}
                {!showPastFamily && (
                  <button onClick={() => setShowPastFamily(true)} className="border border-[#efe9da] border-dashed rounded-full px-3 py-1 text-gray-500 hover:bg-[#efe9da]/30">
                    + Past / Family history
                  </button>
                )}
                <button className="border border-[#efe9da] border-dashed rounded-full px-3 py-1 text-gray-500 hover:bg-[#efe9da]/30">
                  + Investigations
                </button>
                {!showAdvice && (
                  <button onClick={() => setShowAdvice(true)} className="border border-[#efe9da] border-dashed rounded-full px-3 py-1 text-gray-500 hover:bg-[#efe9da]/30">
                    + Advice
                  </button>
                )}
                {!showFollowUp && (
                  <button onClick={() => setShowFollowUp(true)} className="border border-[#efe9da] border-dashed rounded-full px-3 py-1 text-gray-500 hover:bg-[#efe9da]/30">
                    + Follow-up
                  </button>
                )}
              </div>

              {/* DOCTOR SIGNATURE AREA */}
              <div className="mt-8 pt-5 border-t border-[#efe9da] flex justify-between items-end font-sans text-xs text-[#6b756f] select-none">
                <p className="italic text-[10px]">Generated via Trika EMR Voice-to-Text</p>
                <div className="text-right">
                  <div className="h-9 font-serif italic text-lg text-[#0c3f3a] pr-4 font-bold select-none">A. Sharma</div>
                  <p className="border-t border-gray-400 pt-1 font-semibold text-[10px] w-36 text-center">Doctor's Signature</p>
                </div>
              </div>

              <div className="text-[10px] text-gray-400 italic text-center font-sans mt-1">
                Generated on Sharma Care Clinic letterhead - This prescription is valid with the doctor's signature. Reviewed before printing.
              </div>

            </div>

          </main>

          {/* RIGHT 30% SIDEBAR (Speed Tools & Assistant Panel) */}
          <aside className="lg:w-[340px] bg-[#f4f3ed] border-l border-[#cdcdcd] p-5 flex flex-col gap-5 shrink-0 overflow-y-auto">
            
            {/* 1. Voice Assistant Listening Status Card */}
            <div className="bg-white border border-[#efe9da] rounded-2xl p-4 shadow-sm flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#0f5d55] flex items-center justify-center text-white shadow-inner animate-pulse select-none">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0f5d55]">Listening — Findings</h4>
                <p className="text-[11px] text-[#6b756f] mt-1 leading-normal px-2">
                  Speak naturally. Tap any section on the page to point the pen there.
                </p>
              </div>
              <div className="bg-[#f4f3ed] border border-[#efe9da] rounded-full px-3 py-1 text-[10px] text-gray-600 font-bold select-none">
                ◐ English + हिन्दी · auto
              </div>
            </div>

            {/* 2. Prescription Templates */}
            <div className="bg-white border border-[#cdcdcd] border-dashed rounded-2xl p-4 flex flex-col gap-3">
              <div className="flex items-center gap-1.5 font-bold text-xs text-[#6b756f] uppercase tracking-wide border-b border-[#efe9da] pb-1.5">
                <span>▣</span> Prescription Templates
              </div>

              <div className="flex flex-col gap-2">
                <div className="bg-[#fbfaf5] border border-[#efe9da] rounded-xl p-3 flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-gray-800">Acidity / GERD</span>
                    <button className="border border-[#0c3f3a] rounded-lg px-2.5 py-0.5 text-[10px] font-bold text-[#0c3f3a] hover:bg-[#0f5d55] hover:text-white transition-all">
                      Use
                    </button>
                  </div>
                  <p className="text-[10px] text-[#6b756f] leading-normal mt-0.5">
                    Pantoprazole · Sucralfate · diet advice
                  </p>
                </div>

                <div className="bg-[#fbfaf5] border border-[#efe9da] rounded-xl p-3 flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-gray-800">Cold / URI</span>
                    <button className="border border-[#0c3f3a] rounded-lg px-2.5 py-0.5 text-[10px] font-bold text-[#0c3f3a] hover:bg-[#0f5d55] hover:text-white transition-all">
                      Use
                    </button>
                  </div>
                  <p className="text-[10px] text-[#6b756f] leading-normal mt-0.5">
                    Cetirizine · Paracetamol · steam
                  </p>
                </div>
              </div>

              {/* Informative text */}
              <div className="bg-[#fbf6e9] border-l-4 border-[#c9a23a] border rounded p-2.5 text-[10px] text-[#6b521f] leading-normal mt-1.5">
                <strong>Faster than the pen.</strong> Speak a line, or tap a saved template. The doctor never types — and the page prints exactly as it looks.
              </div>
            </div>

            {/* 3. Action Buttons */}
            <div className="flex flex-col gap-2 mt-auto select-none">
              <button 
                onClick={() => window.print()}
                className="bg-white border border-[#cdcdcd] rounded-xl py-2 text-center text-xs font-bold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
              >
                Preview print
              </button>
              
              <button 
                onClick={() => {}}
                className="bg-[#0f5d55] text-white rounded-xl py-2.5 text-center text-xs font-bold hover:bg-[#0c3f3a] transition-all shadow-md flex flex-col items-center"
              >
                <span>Sign & Print ℞</span>
                <span className="text-[8px] text-[#a1dfd9] font-normal leading-none mt-0.5">print · WhatsApp to patient</span>
              </button>
            </div>

          </aside>
        </div>

        {/* THREE COLUMNS OF NOTES AT THE VERY BOTTOM */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-[#cdcdcd] bg-white p-6 select-none font-sans text-left">
          <div className="flex flex-col gap-1 bg-[#f4f3ed]/40 p-4 rounded-xl border border-[#efe9da]">
            <h5 className="font-bold text-[10px] uppercase tracking-wider text-[#0c3f3a]">Why it looks like paper</h5>
            <p className="text-[10.5px] text-[#6b756f] leading-relaxed">
              For a doctor who's used a pad for 30 years, familiarity removes fear. The screen is their letterhead — crest, reg. number, patient line, Rx symbol, signature. It reads as "my prescription," not "software."
            </p>
          </div>

          <div className="flex flex-col gap-1 bg-[#f4f3ed]/40 p-4 rounded-xl border border-[#efe9da]">
            <h5 className="font-bold text-[10px] uppercase tracking-wider text-[#0c3f3a]">Voice is the pen, not AI</h5>
            <p className="text-[10.5px] text-[#6b756f] leading-relaxed">
              No diagnosis-suggesting, no autopilot. The mic simply writes what the doctor says into the active section — in English or Hindi. It's faster than the pen, which is the one thing that beats paper at the point of care.
            </p>
          </div>

          <div className="flex flex-col gap-1 bg-[#f4f3ed]/40 p-4 rounded-xl border border-[#efe9da]">
            <h5 className="font-bold text-[10px] uppercase tracking-wider text-[#0c3f3a]">Short cases stay short</h5>
            <p className="text-[10.5px] text-[#6b756f] leading-relaxed">
              Only Complaint • Findings • Rx show by default — the 80% case. History, Family, Investigations sit as + chips and appear only when the case needs them. No giant form to fight through.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
