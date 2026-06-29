'use client';

import React, { useState } from 'react';

export default function FullDashboardView() {
  const [isListening, setIsListening] = useState(true);

  return (
    <div className="w-full flex flex-col gap-4 text-[#1a1a1a]">
      {/* Description & Legend Header */}
      <div className="bg-[#f6f7f8] border border-[#1a1a1a] rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <h2 className="font-bold text-base flex items-center gap-2">
            <span>Clinic Dashboard — Full Wireframe</span>
            <span className="text-xs font-normal text-[#7a7a7a]">/ 1440px · consult screen, everything assembled</span>
          </h2>
          <p className="text-xs text-[#7a7a7a] mt-1">
            Top bar · 30% support column (voice status, patient-at-a-glance, queue) · 70% letterhead with SOAP rows flowing into a two-column Plan.
          </p>
        </div>
        
        {/* Status Legends */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#fbeeeb] border border-[#e3b3a8] rounded text-[#b5402f] font-medium">
            <span className="w-2 h-2 rounded-full bg-[#b5402f] animate-pulse" /> live / listening
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#eef5f0] border border-[#b4d2bf] rounded text-[#2e7d32] font-medium">
            <span className="w-2 h-2 rounded-full bg-[#2e7d32]" /> autosaved
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#eef0f2] border border-[#c4c4c4] border-dashed rounded text-[#7a7a7a]">
            template / favourite
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#fbf6e9] border border-[#e3d3a0] rounded text-[#8a6d2f] font-medium">
            ⚠ annotation
          </span>
        </div>
      </div>

      {/* Main Container Mocking the 1440px App Layout */}
      <div className="bg-white border border-[#1a1a1a] rounded-xl shadow-xl overflow-hidden flex flex-col">
        {/* TOP BAR */}
        <header className="bg-[#f6f7f8] border-b border-[#1a1a1a] h-14 px-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#1a1a1a] text-white flex items-center justify-center font-bold text-xs">
              CC
            </div>
            <div>
              <h3 className="font-bold text-sm leading-tight">Codriva Care</h3>
              <p className="text-[10px] text-[#9a9a9a]">Consultation</p>
            </div>
          </div>

          {/* Patient Search */}
          <div className="relative w-72 md:w-96">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9a9a9a] text-sm">⌕</span>
            <input
              type="text"
              placeholder="Search patient by name, UHID or phone…"
              className="w-full bg-white border border-[#c4c4c4] rounded-lg pl-8 pr-3 py-1.5 text-xs text-[#1a1a1a] placeholder-[#9a9a9a] focus:outline-none focus:border-[#1a1a1a]"
            />
          </div>

          {/* User & Actions */}
          <div className="flex items-center gap-3">
            <button className="w-8 h-8 rounded-lg bg-white border border-[#c4c4c4] flex items-center justify-center text-sm text-[#7a7a7a] hover:bg-gray-50">
              ⚙
            </button>
            <div className="relative">
              <button className="w-8 h-8 rounded-lg bg-white border border-[#c4c4c4] flex items-center justify-center text-sm text-[#7a7a7a] hover:bg-gray-50">
                🔔
              </button>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#1a1a1a] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                3
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-[#c4c4c4] rounded-full pl-1 pr-3 py-1">
              <div className="w-6 h-6 rounded-full bg-[#1a1a1a] text-white text-[10px] font-bold flex items-center justify-center">
                DR
              </div>
              <div className="text-left">
                <p className="font-bold text-xs leading-none text-[#1a1a1a]">Dr. Sharma</p>
                <p className="text-[9px] text-[#9a9a9a] leading-none mt-0.5">Physician</p>
              </div>
            </div>
          </div>
        </header>

        {/* BODY (30% Support Column + 70% Letterhead Work Area) */}
        <div className="flex flex-col lg:flex-row min-h-[700px]">
          {/* LEFT 30% SUPPORT COLUMN */}
          <aside className="lg:w-[320px] bg-[#f6f7f8] border-r border-[#1a1a1a] flex flex-col divide-y divide-[#c4c4c4] shrink-0">
            {/* VOICE STATUS STRIP */}
            <div className="p-4 bg-white flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsListening(!isListening)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      isListening ? 'bg-[#b5402f] text-white shadow-md animate-pulse' : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    ●
                  </button>
                  <div>
                    <span className={`text-xs font-bold ${isListening ? 'text-[#b5402f]' : 'text-gray-500'}`}>
                      {isListening ? 'Listening' : 'Paused'}
                    </span>
                    <p className="text-[11px] text-[#7a7a7a]">
                      Writing to → <span className="font-bold text-[#1a1a1a]">Findings</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-[#f6f7f8] border border-[#c4c4c4] rounded-full px-3 py-1 text-[10px] text-[#7a7a7a] self-start">
                <span>◐</span> English + हिन्दी · auto-detect
              </div>
            </div>

            {/* PATIENT AT A GLANCE */}
            <div className="p-4 bg-white flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-[#1a1a1a] flex items-center justify-center font-bold text-sm bg-gray-50">
                  RK
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#1a1a1a]">Rakesh Kumar</h4>
                  <p className="text-xs text-[#9a9a9a]">47 / M · UHID 4471-203</p>
                </div>
              </div>
              
              <div className="bg-[#fbf6e9] border border-[#c9a23a] rounded-md px-2.5 py-1.5 text-xs font-bold text-[#8a6d2f]">
                ⚠ Allergy: Penicillin
              </div>

              {/* Vitals summary grid */}
              <div className="grid grid-cols-4 gap-2 pt-1">
                <div className="border border-[#c4c4c4] border-dashed rounded-lg p-2 text-center bg-gray-50">
                  <p className="font-bold text-xs text-[#1a1a1a]">130/85</p>
                  <p className="text-[9px] text-[#9a9a9a] uppercase tracking-wider font-semibold">BP</p>
                </div>
                <div className="border border-[#c4c4c4] border-dashed rounded-lg p-2 text-center bg-gray-50">
                  <p className="font-bold text-xs text-[#1a1a1a]">78</p>
                  <p className="text-[9px] text-[#9a9a9a] uppercase tracking-wider font-semibold">Pulse</p>
                </div>
                <div className="border border-[#c4c4c4] border-dashed rounded-lg p-2 text-center bg-gray-50">
                  <p className="font-bold text-xs text-[#1a1a1a]">98%</p>
                  <p className="text-[9px] text-[#9a9a9a] uppercase tracking-wider font-semibold">SpO₂</p>
                </div>
                <div className="border border-[#c4c4c4] border-dashed rounded-lg p-2 text-center bg-gray-50">
                  <p className="font-bold text-xs text-[#1a1a1a]">98.4°F</p>
                  <p className="text-[9px] text-[#9a9a9a] uppercase tracking-wider font-semibold">Temp</p>
                </div>
              </div>
            </div>

            {/* QUEUE STRIP */}
            <div className="p-4 flex flex-col gap-2 flex-1">
              <div className="flex items-center justify-between text-xs font-bold text-[#7a7a7a] uppercase tracking-wider mb-1">
                <span>Today's Queue</span>
                <span className="text-[10px] bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded">Token #18</span>
              </div>
              <div className="bg-white border-2 border-[#1a1a1a] rounded-lg p-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#1a1a1a] text-white text-[10px] font-bold flex items-center justify-center">18</span>
                  <div>
                    <p className="font-bold text-xs">Rakesh Kumar</p>
                    <p className="text-[10px] text-[#7a7a7a]">OPD Consultation</p>
                  </div>
                </div>
                <span className="text-[10px] bg-green-100 text-green-800 px-2 py-0.5 rounded font-bold">In Room</span>
              </div>

              <div className="bg-white border border-[#c4c4c4] rounded-lg p-2.5 flex items-center justify-between opacity-70">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-gray-200 text-gray-700 text-[10px] font-bold flex items-center justify-center">19</span>
                  <div>
                    <p className="font-bold text-xs">Sunita Sharma</p>
                    <p className="text-[10px] text-[#7a7a7a]">Follow-up</p>
                  </div>
                </div>
                <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded">Waiting</span>
              </div>
            </div>
          </aside>

          {/* RIGHT 70% MAIN WORK AREA (SOAP Rows flowing into Plan) */}
          <main className="flex-1 bg-white p-6 flex flex-col justify-between gap-6 overflow-y-auto">
            <div className="flex flex-col gap-6">
              {/* LETTERHEAD TOP HEADER */}
              <div className="border-b-2 border-[#1a1a1a] pb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h1 className="text-xl font-bold text-[#1a1a1a]">Sharma Care Clinic</h1>
                  <p className="text-xs text-[#7a7a7a]">General Medicine & Diabetology · Jaipur</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-[#1a1a1a]">Dr. A. Sharma</p>
                  <p className="text-xs text-[#7a7a7a]">MBBS, MD (Medicine) Reg. RAJ/2009/14872</p>
                </div>
              </div>

              {/* SOAP SECTIONS */}
              <div className="flex flex-col gap-4">
                {/* 1. Chief Complaint */}
                <div className="border border-[#c4c4c4] rounded-lg p-4 bg-[#fafafa]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#7a7a7a] uppercase tracking-wider flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#1a1a1a] text-white text-[10px] flex items-center justify-center font-bold">1</span>
                      Chief Complaint
                    </span>
                    <span className="text-xs text-green-600 font-medium">✓ Auto-captured</span>
                  </div>
                  <p className="text-sm text-[#1a1a1a] bg-white border border-gray-200 rounded p-3 italic">
                    "Doctor saab, chest mein jalan ho rahi hai 3 din se, khaana ke baad zyada. Mild sour belching."
                  </p>
                </div>

                {/* 2. Examination & Findings */}
                <div className="border border-[#c4c4c4] rounded-lg p-4 bg-[#fafafa]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#7a7a7a] uppercase tracking-wider flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#1a1a1a] text-white text-[10px] flex items-center justify-center font-bold">2</span>
                      Examination / Findings
                    </span>
                    <span className="text-xs text-green-600 font-medium">✓ Auto-captured</span>
                  </div>
                  <p className="text-sm text-[#1a1a1a] bg-white border border-gray-200 rounded p-3">
                    Abdomen soft, epigastric tenderness present (+). Bowel sounds normal. No radiation of pain to neck/back.
                  </p>
                </div>

                {/* 3. Diagnosis */}
                <div className="border border-[#c4c4c4] rounded-lg p-4 bg-[#fafafa]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#7a7a7a] uppercase tracking-wider flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#1a1a1a] text-white text-[10px] flex items-center justify-center font-bold">3</span>
                      Diagnosis
                    </span>
                    <span className="text-xs text-green-600 font-medium">✓ Auto-captured</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-50 border border-blue-200 text-blue-900 px-3 py-1 rounded-full text-xs font-semibold">
                      Gastroesophageal Reflux Disease (GERD)
                    </span>
                    <span className="bg-gray-100 border border-gray-300 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                      Non-ulcer Dyspepsia
                    </span>
                  </div>
                </div>

                {/* 4. Two-Column Plan (Prescription & Advice/Investigations) */}
                <div className="border border-[#1a1a1a] rounded-lg p-4 bg-white">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-200">
                    <span className="text-xs font-bold text-[#1a1a1a] uppercase tracking-wider flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#1a1a1a] text-white text-[10px] flex items-center justify-center font-bold">4</span>
                      Plan & Treatment
                    </span>
                    <span className="text-xs text-gray-500">Section 4 of 4</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Column A: Prescription */}
                    <div className="flex flex-col gap-3">
                      <h4 className="font-bold text-xs text-[#7a7a7a] uppercase tracking-wider">Prescription (Rx)</h4>
                      <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <table className="w-full text-left text-xs">
                          <thead className="bg-gray-100 text-gray-600 font-bold border-b border-gray-200">
                            <tr>
                              <th className="p-2">Drug</th>
                              <th className="p-2">Dosage</th>
                              <th className="p-2">Duration</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            <tr>
                              <td className="p-2 font-bold">Tab. Pantoprazole 40mg</td>
                              <td className="p-2">1-0-0 (Before food)</td>
                              <td className="p-2">14 days</td>
                            </tr>
                            <tr>
                              <td className="p-2 font-bold">Syr. Sucralfate 10ml</td>
                              <td className="p-2">1-1-1 (After food)</td>
                              <td className="p-2">7 days</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Column B: Advice & Investigations */}
                    <div className="flex flex-col gap-3">
                      <h4 className="font-bold text-xs text-[#7a7a7a] uppercase tracking-wider">Advice & Investigations</h4>
                      <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-3 text-xs flex flex-col gap-2">
                        <div>
                          <p className="font-bold text-gray-700">Dietary Advice:</p>
                          <p className="text-gray-600">Avoid spicy & oily food. Eat early dinner, maintain 2hr gap before sleep.</p>
                        </div>
                        <div>
                          <p className="font-bold text-gray-700">Recommended Tests:</p>
                          <p className="text-gray-600">ECG (to rule out cardiac origin if pain persists), Stool Routine.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ACTION BAR FOOTER */}
            <div className="border-t border-[#1a1a1a] pt-4 flex items-center justify-between mt-auto">
              <p className="text-xs text-[#7a7a7a]">
                Doctor reviews the typed Rx before finalization.
              </p>
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 border border-[#c4c4c4] rounded-lg text-xs font-semibold text-[#7a7a7a] hover:bg-gray-50">
                  Save draft
                </button>
                <button className="px-4 py-2 border border-[#1a1a1a] rounded-lg text-xs font-bold text-[#1a1a1a] hover:bg-gray-100">
                  Preview
                </button>
                <button className="px-5 py-2 bg-[#1a1a1a] text-white rounded-lg text-xs font-bold hover:bg-black transition-colors shadow-md">
                  Save & print Rx
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
