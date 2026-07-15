'use client';

import React, { useState } from 'react';

interface FullDashboardViewProps {
  onViewChange: (tab: 'dashboard' | 'letterhead') => void;
}

export default function FullDashboardView({ onViewChange }: FullDashboardViewProps) {
  const [isListening, setIsListening] = useState(true);

  // Today's Queue list according to Image 1
  const queuePatients = [
    { token: 16, name: 'Suresh M.', detail: '52 / M', status: 'done' },
    { token: 17, name: 'Priya N.', detail: '34 / F', status: 'done' },
    { token: 18, name: 'Rakesh Kumar', detail: '47 / M', status: 'now' },
    { token: 19, name: 'Aarti S.', detail: '29 / F', status: 'waiting', isNew: true },
    { token: 20, name: 'Imran K.', detail: '41 / M', status: 'waiting' },
    { token: 21, name: 'Deepa R.', detail: '38 / F', status: 'waiting' }
  ];

  return (
    <div className="w-full flex flex-col gap-6 text-[#1b1b1a] max-w-7xl mx-auto pb-12 font-sans">
      
      {/* 1440px Main Container */}
      <div className="bg-[#f0ede6] border border-[#cdcdcd] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* TOP BAR */}
        <header className="bg-white border-b border-[#cdcdcd] h-14 px-6 flex items-center justify-between shrink-0 select-none">
          <div className="flex items-center gap-3">
            {/* Square brand logo box */}
            <div className="w-9 h-9 rounded-lg bg-[#1b1b1a] text-white flex flex-col items-center justify-center font-bold text-[10px] tracking-wider leading-none">
              <span>LOGO</span>
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm leading-tight text-[#1b1b1a]">Codriva Care</h3>
              <p className="text-[9px] text-[#727272] tracking-wider uppercase font-semibold leading-none mt-0.5">Consultation</p>
            </div>
          </div>

          {/* Patient Search Input */}
          <div className="relative w-80 md:w-[480px]">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#727272] text-sm">⌕</span>
            <input
              type="text"
              placeholder="Search patient by name, UHID or phone..."
              className="w-full bg-[#f9f7f3] border border-[#cdcdcd] rounded-xl pl-9 pr-4 py-2 text-xs text-[#1b1b1a] placeholder-[#727272] focus:outline-none focus:border-[#5b3570] transition-colors"
            />
          </div>

          {/* Profile & Notifications */}
          <div className="flex items-center gap-4">
            <button className="w-8 h-8 rounded-lg bg-[#f9f7f3] hover:bg-gray-100 flex items-center justify-center text-sm text-[#727272] transition-colors">
              ⚙
            </button>
            <div className="relative">
              <button className="w-8 h-8 rounded-lg bg-[#f9f7f3] hover:bg-gray-100 flex items-center justify-center text-sm text-[#727272] transition-colors">
                🔔
              </button>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#1b1b1a] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                1
              </span>
            </div>
            <div className="flex items-center gap-2 bg-[#f9f7f3] rounded-full pl-1 pr-3 py-1 select-none">
              <div className="w-6 h-6 rounded-full bg-[#1b1b1a] text-white text-[10px] font-bold flex items-center justify-center">
                DR
              </div>
              <div className="text-left">
                <p className="font-bold text-xs leading-none text-[#1b1b1a]">Dr. Sharma</p>
                <p className="text-[8px] text-[#727272] tracking-wider uppercase font-semibold leading-none mt-0.5">Physician</p>
              </div>
            </div>
          </div>
        </header>

        {/* BODY CONTAINER (30% Support Column + 70% Letterhead Work Area) */}
        <div className="flex flex-col lg:flex-row min-h-[750px]">
          
          {/* LEFT 30% SUPPORT COLUMN */}
          <aside className="lg:w-[320px] bg-[#fcfbf9] border-r border-[#cdcdcd] flex flex-col shrink-0">
            
            {/* 1. Voice Status Strip */}
            <div className="p-5 border-b border-[#cdcdcd]">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsListening(!isListening)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    isListening ? 'bg-[#b5402f] text-white shadow-md animate-pulse' : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-white" />
                </button>
                <div>
                  <span className={`text-xs font-bold uppercase tracking-wider ${isListening ? 'text-[#b5402f]' : 'text-gray-500'}`}>
                    {isListening ? 'Listening' : 'Paused'}
                  </span>
                  <p className="text-xs text-[#727272]">
                    Writing to → <span className="font-bold text-[#1b1b1a]">Findings</span>
                  </p>
                </div>
              </div>
              
              <div className="mt-3 flex items-center gap-1.5 bg-[#f9f7f3] border border-[#dcd6c8] rounded-full px-3 py-1 text-[10.5px] text-[#727272] self-start w-max">
                <span>◐</span> English + हिन्दी · auto-detect
              </div>

              {/* Annotation Card under voice status */}
              <div className="bg-[#fbf6e9] border border-[#e3d3a0] rounded-lg p-3 text-[10.5px] text-[#8a6d2f] leading-relaxed mt-4">
                <strong>Why it's here:</strong> the per-field mic is the action; this strip is the persistent status — is it listening, which section, what language — visible even when scrolling.
              </div>
            </div>

            {/* 2. Patient at a Glance */}
            <div className="p-5 border-b border-[#cdcdcd] flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs uppercase tracking-wider text-[#727272]">Patient at a Glance</span>
                <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full text-[9px] font-bold">
                  Returning · visit #4
                </span>
              </div>
              
              <div className="bg-[#fbeeeb] border border-[#e3b3a8] rounded-lg p-3 text-xs font-bold text-[#b5402f] flex items-center gap-1.5">
                <span>⚠</span> ALLERGY: Penicillin
              </div>

              <div className="flex flex-col gap-2.5 mt-1">
                <div className="flex flex-col gap-1 border-b border-[#cdcdcd]/60 pb-2">
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">Conditions</span>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-[#f0ede6] border border-[#dcd6c8] rounded px-2 py-0.5 text-[10.5px] font-medium text-gray-800">Type 2 Diabetes</span>
                    <span className="bg-[#f0ede6] border border-[#dcd6c8] rounded px-2 py-0.5 text-[10.5px] font-medium text-gray-800">Hypertension</span>
                  </div>
                </div>

                <div className="flex flex-col gap-1 border-b border-[#cdcdcd]/60 pb-2">
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">Current Meds</span>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-[#f0ede6] border border-[#dcd6c8] rounded px-2 py-0.5 text-[10.5px] font-medium text-gray-800">Metformin 500</span>
                    <span className="bg-[#f0ede6] border border-[#dcd6c8] rounded px-2 py-0.5 text-[10.5px] font-medium text-gray-800">Telmisartan 40</span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-b border-[#cdcdcd]/60 pb-2 text-xs">
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">Last Visit</span>
                  <span className="font-semibold text-gray-800">12 days ago — acidity</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">Last Rx</span>
                  <span className="font-semibold text-gray-800">Pantoprazole, Sucralfate</span>
                </div>
              </div>

              <p className="text-[10px] text-gray-400 italic leading-snug mt-2 pt-2.5 border-t border-[#cdcdcd]/60 border-dashed">
                Empty for a new patient (shows "First visit"). The headline proof digital beats paper — history is instantly present.
              </p>
            </div>

            {/* 3. Today's Queue */}
            <div className="p-5 flex flex-col gap-3 flex-1">
              <div className="flex items-center justify-between text-xs font-bold text-[#727272] uppercase tracking-wider">
                <span>Today's Queue</span>
                <span className="text-[9.5px] bg-[#f0ede6] border border-[#dcd6c8] text-gray-700 px-2 py-0.5 rounded font-bold">6 waiting</span>
              </div>
              
              <div className="flex flex-col gap-2 overflow-y-auto max-h-[320px]">
                {queuePatients.map((pat) => (
                  <div 
                    key={pat.token}
                    className={`p-2.5 rounded-xl border transition-all ${
                      pat.status === 'now' 
                        ? 'bg-white border-2 border-[#1b1b1a] shadow-md font-bold scale-[1.02]' 
                        : 'bg-white border-[#cdcdcd]/60 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center ${
                          pat.status === 'now' ? 'bg-[#1b1b1a] text-white' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {pat.token}
                        </span>
                        <div>
                          <div className="flex items-center gap-1">
                            <span className="text-xs text-[#1b1b1a]">{pat.name}</span>
                            {pat.isNew && (
                              <span className="bg-purple-100 text-purple-700 text-[8px] font-bold px-1 rounded uppercase tracking-wider">New</span>
                            )}
                          </div>
                          <span className="text-[10px] text-[#727272] font-normal">{pat.detail}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2.5 h-2.5 rounded-full ${
                          pat.status === 'now' ? 'bg-[#b5402f] animate-pulse' : pat.status === 'done' ? 'bg-gray-400' : 'bg-yellow-500'
                        }`} />
                        <span className="text-[9.5px] font-bold capitalize text-gray-600">
                          {pat.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </aside>

          {/* RIGHT 70% MAIN WORK AREA (Sharma Care Clinic Letterhead Layout) */}
          <main className="flex-1 bg-[#eae8e6] p-6 flex flex-col justify-between gap-6 overflow-y-auto">
            
            <div className="flex flex-col gap-4">
              
              {/* LETTERHEAD CONTROLS OVER BAR */}
              <div className="flex items-center justify-between bg-transparent px-2 text-xs">
                <div className="flex items-center gap-1.5 text-green-700 font-bold">
                  <span className="text-sm">✓</span>
                  <span>Saved · autosaving</span>
                </div>

                <div className="flex border border-[#cdcdcd] rounded-xl overflow-hidden bg-[#f0ede6] p-1 font-semibold text-[11px] shadow-inner">
                  <button 
                    onClick={() => onViewChange('dashboard')}
                    className="bg-white text-[#1b1b1a] px-3 py-1.5 rounded-lg shadow-sm font-bold border border-[#cdcdcd]/65"
                  >
                    Consult
                  </button>
                  <button 
                    onClick={() => onViewChange('letterhead')}
                    className="text-[#727272] hover:text-[#1b1b1a] px-3 py-1.5 rounded-lg transition-colors"
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

              {/* THE PAPER SHEET CONTAINER */}
              <div className="bg-[#fbfaf5] border border-[#efe9da] rounded-xl shadow-xl p-8 flex flex-col gap-6 font-serif">
                
                {/* CLINIC HEADINGS */}
                <div className="border-b border-[#cdcdcd] pb-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex items-start gap-4">
                    <div className="border-2 border-[#1b1b1a] rounded px-2.5 py-1 text-[9.5px] font-bold tracking-widest text-[#1b1b1a] uppercase select-none">
                      CLINIC<br />LOGO
                    </div>
                    <div>
                      <h1 className="text-xl font-bold tracking-tight text-[#1b1b1a]">Sharma Care Clinic</h1>
                      <p className="text-[10px] font-sans text-[#727272] leading-relaxed mt-0.5">
                        General Medicine & Diabetology<br />
                        B-12, Tonk Road, Jaipur, Rajasthan 302015<br />
                        +91 98290 00000 · care@sharmaclinic.in · Clinic Reg. RJ-JPR-2014-00821
                      </p>
                    </div>
                  </div>
                  <div className="text-right font-sans">
                    <h3 className="font-serif font-bold text-base text-[#1b1b1a]">Dr. Anil Sharma</h3>
                    <p className="text-[10.5px] text-[#727272] mt-0.5">
                      MBBS, MD (General Medicine)<br />
                      Consultant Physician<br />
                      Reg. No. RMC/2009/14872
                    </p>
                  </div>
                </div>

                {/* DATE & METADATA */}
                <div className="flex flex-wrap items-center justify-between text-xs font-sans text-[#727272] border-b border-[#efe9da] pb-2">
                  <div className="flex gap-6">
                    <span>Date: <strong className="text-[#1b1b1a] font-semibold">15 Jun 2026</strong></span>
                    <span>OPD No.: <strong className="text-[#1b1b1a] font-semibold">18</strong></span>
                    <span>Visit: <strong className="text-[#1b1b1a] font-semibold">Follow-up</strong></span>
                  </div>
                </div>

                {/* PATIENT LINE */}
                <div className="flex flex-wrap items-center justify-between text-xs font-sans border-b border-[#cdcdcd] pb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="uppercase text-[#9a9a9a] font-bold text-[9px] tracking-wider">Name</span>
                    <span className="font-serif font-bold text-[#1b1b1a]">Rakesh Kumar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="uppercase text-[#9a9a9a] font-bold text-[9px] tracking-wider">Age/Sex</span>
                    <span className="font-serif font-semibold text-[#1b1b1a]">47 / M</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="uppercase text-[#9a9a9a] font-bold text-[9px] tracking-wider">UHID</span>
                    <span className="font-serif font-semibold text-[#1b1b1a]">4471-203</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="uppercase text-[#9a9a9a] font-bold text-[9px] tracking-wider">Allergy</span>
                    <span className="font-sans font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded text-[11px] flex items-center gap-1 select-none">
                      Penicillin <span className="text-[10px] text-amber-700">⚠</span>
                    </span>
                  </div>
                </div>

                {/* SOAP SECTIONS */}
                <div className="flex flex-col gap-6 pt-2 font-serif text-sm text-[#1b1b1a]">
                  
                  {/* S COMPLAINT */}
                  <div className="flex gap-3.5 items-start">
                    <span className="w-7 h-7 rounded-full border border-[#1b1b1a] text-xs font-bold flex items-center justify-center shrink-0 font-sans mt-0.5 select-none bg-white">
                      S
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-sans font-bold text-[10.5px] uppercase tracking-wider text-[#727272]">Complaint</h4>
                        <span className="font-sans text-[10px] text-gray-400 italic">tap mic to dictate</span>
                      </div>
                      <p className="mt-1 leading-relaxed text-[#232323]">
                        Chest burning since 3 days, worse after meals. No breathlessness, no sweating.
                      </p>
                    </div>
                  </div>

                  {/* O OBJECTIVE */}
                  <div className="flex gap-3.5 items-start">
                    <span className="w-7 h-7 rounded-full border border-[#1b1b1a] text-xs font-bold flex items-center justify-center shrink-0 font-sans mt-0.5 select-none bg-white">
                      O
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-sans font-bold text-[10.5px] uppercase tracking-wider text-[#727272]">Objective</h4>
                        <span className="font-sans text-[10.5px] text-[#b5402f] font-bold flex items-center gap-1.5 select-none">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#b5402f] animate-pulse" /> listening
                        </span>
                      </div>
                      <p className="mt-1 leading-relaxed text-[#232323]">
                        Vitals: BP 130/85 · Pulse 78 · SpO₂ 98% · Temp 37.0°C<br />
                        Mild epigastric tenderness. Chest clear.
                      </p>
                    </div>
                  </div>

                  {/* A ASSESSMENT */}
                  <div className="flex gap-3.5 items-start">
                    <span className="w-7 h-7 rounded-full border border-[#1b1b1a] text-xs font-bold flex items-center justify-center shrink-0 font-sans mt-0.5 select-none bg-white">
                      A
                    </span>
                    <div className="flex-1">
                      <h4 className="font-sans font-bold text-[10.5px] uppercase tracking-wider text-[#727272]">Assessment</h4>
                      <p className="mt-1 leading-relaxed text-[#232323]">
                        Acid reflux / GERD (working diagnosis). <span className="text-gray-500 italic">Rule out cardiac.</span>
                      </p>
                    </div>
                  </div>

                  {/* P PLAN (Prescription & Investigations) */}
                  <div className="flex gap-3.5 items-start">
                    <span className="w-7 h-7 rounded-full border border-[#1b1b1a] text-xs font-bold flex items-center justify-center shrink-0 font-sans mt-0.5 select-none bg-white">
                      P
                    </span>
                    <div className="flex-1 flex flex-col gap-4">
                      <div>
                        <h4 className="font-sans font-bold text-[10.5px] uppercase tracking-wider text-[#727272]">Plan</h4>
                        <p className="font-serif italic text-xs text-[#727272] mt-0.5">prescription & investigations</p>
                      </div>

                      {/* Dual column for Prescription and Investigations */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
                        
                        {/* Column 1: Prescription */}
                        <div className="border border-[#cdcdcd] rounded-xl p-4 bg-white shadow-sm flex flex-col gap-3">
                          <div className="flex items-center gap-1 text-[11px] font-bold text-gray-500 uppercase tracking-wide border-b border-[#cdcdcd]/60 pb-1.5">
                            <span>℞</span> Prescription
                          </div>
                          
                          <div className="flex flex-col gap-2.5 text-xs text-[#1b1b1a]">
                            <div>
                              <div className="flex justify-between items-start">
                                <span className="font-bold">1. Pantoprazole 40 mg</span>
                                <span className="text-gray-500">1-0-0 · 2w</span>
                              </div>
                              <p className="text-[10px] text-gray-400 leading-none">tablet · before food</p>
                            </div>
                            <div className="border-t border-gray-100 pt-2">
                              <div className="flex justify-between items-start">
                                <span className="font-bold">2. Sucralfate</span>
                                <span className="text-gray-500">2 tsp · TDS · 1w</span>
                              </div>
                              <p className="text-[10px] text-gray-400 leading-none">syrup · after meals</p>
                            </div>
                          </div>

                          {/* Favourites - One Tap */}
                          <div className="mt-2 flex flex-col gap-1 border-t border-[#cdcdcd]/60 pt-3">
                            <span className="text-[9.5px] font-bold text-[#727272] uppercase tracking-wider">Favourites — one tap</span>
                            <div className="flex flex-wrap gap-1.5">
                              <button className="bg-white border border-[#cdcdcd] border-dashed rounded px-2 py-1 text-[10px] hover:bg-gray-50 flex items-center gap-1 font-semibold text-gray-700 transition-colors">
                                <span>★</span> Paracetamol 650
                              </button>
                              <button className="bg-white border border-[#cdcdcd] border-dashed rounded px-2 py-1 text-[10px] hover:bg-gray-50 flex items-center gap-1 font-semibold text-gray-700 transition-colors">
                                <span>★</span> Cetirizine 10
                              </button>
                              <button className="bg-white border border-[#cdcdcd] border-dashed rounded px-2 py-1 text-[10px] hover:bg-gray-50 flex items-center gap-1 font-semibold text-gray-700 transition-colors">
                                <span>★</span> Azithromycin 500
                              </button>
                            </div>
                          </div>

                          {/* Templates - Whole Set */}
                          <div className="flex flex-col gap-1 mt-1 border-t border-[#cdcdcd]/60 pt-3">
                            <span className="text-[9.5px] font-bold text-[#727272] uppercase tracking-wider">Templates — whole set</span>
                            <div className="flex flex-wrap gap-1.5">
                              <button className="bg-white border border-[#cdcdcd] border-dashed rounded px-2 py-1 text-[10px] hover:bg-gray-50 font-semibold text-gray-700 transition-colors">
                                ▣ Acidity set
                              </button>
                              <button className="bg-white border border-[#cdcdcd] border-dashed rounded px-2 py-1 text-[10px] hover:bg-gray-50 font-semibold text-gray-700 transition-colors">
                                ▣ URI / cold
                              </button>
                            </div>
                          </div>

                          <button className="bg-white border border-[#cdcdcd] rounded-lg py-1.5 text-center text-xs font-bold text-gray-700 hover:bg-gray-50 transition-all mt-2 flex items-center justify-center gap-1 select-none">
                            <span>+</span> Save current as template
                          </button>
                        </div>

                        {/* Column 2: Investigations */}
                        <div className="border border-[#cdcdcd] rounded-xl p-4 bg-white shadow-sm flex flex-col gap-3">
                          <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-500 uppercase tracking-wide border-b border-[#cdcdcd]/60 pb-1.5">
                            <span>🔬</span> Investigations
                          </div>

                          <ul className="flex flex-col gap-2 text-xs text-[#1b1b1a] list-none pl-0">
                            <li className="flex items-center gap-2 font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                              CBC
                            </li>
                            <li className="flex items-center justify-between border-t border-gray-100 pt-2 font-medium">
                              <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#b5402f]" />
                                <span className="text-[#b5402f] font-semibold">ECG</span>
                              </div>
                              <span className="text-[10px] text-[#b5402f] font-bold bg-[#fbeeeb] px-1.5 py-0.5 rounded select-none">just added</span>
                            </li>
                            <li className="flex items-center gap-2 border-t border-gray-100 pt-2 text-gray-400 italic">
                              <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                              listening for more...
                            </li>
                          </ul>

                          {/* Common Panels */}
                          <div className="mt-auto flex flex-col gap-1 border-t border-[#cdcdcd]/60 pt-3">
                            <span className="text-[9.5px] font-bold text-[#727272] uppercase tracking-wider">Common Panels</span>
                            <div className="flex flex-wrap gap-1.5">
                              <button className="bg-white border border-[#cdcdcd] border-dashed rounded px-2 py-1 text-[10px] hover:bg-gray-50 font-semibold text-gray-700 transition-colors">
                                ▣ Diabetes panel
                              </button>
                              <button className="bg-white border border-[#cdcdcd] border-dashed rounded px-2 py-1 text-[10px] hover:bg-gray-50 font-semibold text-gray-700 transition-colors">
                                ▣ Lipid profile
                              </button>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* ADVICE */}
                  <div className="flex flex-col gap-1 border-t border-[#efe9da] pt-4 font-sans text-xs">
                    <span className="font-bold text-gray-500 uppercase tracking-wider text-[9.5px]">Advice</span>
                    <p className="text-sm font-serif font-medium leading-relaxed text-[#1b1b1a]">
                      Avoid spicy/oily food. Light, early dinner. <strong className="font-semibold text-black">No lying down</strong> after meals.
                    </p>
                  </div>

                  {/* FOLLOW-UP */}
                  <div className="flex flex-col gap-1 border-t border-[#efe9da] pt-4 font-sans text-xs pb-4">
                    <span className="font-bold text-gray-500 uppercase tracking-wider text-[9.5px]">Follow-up</span>
                    <p className="text-xs leading-relaxed text-[#1b1b1a] flex flex-wrap items-center gap-1.5">
                      <span>Review after</span>
                      <select className="bg-white border border-[#cdcdcd] rounded px-2 py-1 font-bold text-[#1b1b1a] focus:outline-none">
                        <option>1 week</option>
                        <option>2 weeks</option>
                        <option>1 month</option>
                      </select>
                      <span className="text-gray-500">— auto-creates a return visit on this patient's record.</span>
                    </p>
                  </div>

                </div>

                {/* BOTTOM CHIPS & SIGNATURE */}
                <div className="mt-4 pt-6 border-t border-[#efe9da] flex flex-col md:flex-row justify-between items-center gap-6 select-none font-sans">
                  
                  {/* Plus chips */}
                  <div className="flex flex-wrap gap-2 text-xs">
                    <button className="border border-[#cdcdcd] rounded-full px-3 py-1.5 text-gray-600 hover:bg-gray-50 transition-colors font-medium">
                      + History of illness
                    </button>
                    <button className="border border-[#cdcdcd] rounded-full px-3 py-1.5 text-gray-600 hover:bg-gray-50 transition-colors font-medium">
                      + Past / Family history
                    </button>
                    <button className="border border-[#cdcdcd] rounded-full px-3 py-1.5 text-gray-600 hover:bg-gray-50 transition-colors font-medium">
                      + Review of systems
                    </button>
                  </div>

                  {/* Doctor Signature */}
                  <div className="text-right">
                    <div className="font-serif italic text-[#1b1b1a] text-lg font-bold pr-2 leading-none">A. Sharma</div>
                    <div className="w-44 border-t border-[#727272] mt-1 pt-1 text-[10.5px] text-[#727272] font-medium text-center">
                      Dr. Anil Sharma — signature
                    </div>
                  </div>
                </div>

                <div className="text-[10px] text-gray-400 italic text-center font-sans mt-2 border-t border-[#efe9da] pt-3">
                  Valid only with the doctor's signature. Reviewed on-screen before printing.
                </div>

              </div>

            </div>

            {/* ACTION BAR FOOTER */}
            <div className="bg-white border border-[#cdcdcd] rounded-xl px-5 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 select-none font-sans">
              <p className="text-xs text-[#727272] leading-tight max-w-md">
                <strong>Autosaved continuously.</strong> Sign locks the record; Print / WhatsApp / Pharmacy only deliver it — they never do the saving.
              </p>
              
              <div className="flex items-center gap-3">
                <button className="px-5 py-2 border border-[#cdcdcd] rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-50 transition-colors bg-white">
                  Preview
                </button>
                <button className="px-5 py-2 border border-[#cdcdcd] rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-50 transition-colors bg-white">
                  Sign
                </button>
                <button className="px-6 py-2.5 bg-[#1b1b1a] text-white rounded-xl text-xs font-bold hover:bg-black transition-all shadow-md flex flex-col items-center">
                  <span>Sign & Print ℞</span>
                  <span className="text-[8px] text-gray-300 font-normal leading-none mt-0.5">print · WhatsApp · pharmacy</span>
                </button>
              </div>
            </div>

            {/* WIREFRAME EXPLANATORY COLUMNS */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 select-none font-sans text-left">
              <div className="bg-white/40 border border-[#cdcdcd]/60 rounded-xl p-4 flex flex-col gap-1.5">
                <h5 className="font-bold text-[10px] uppercase tracking-wider text-[#1b1b1a]">Voice = Status, not a 2nd mic</h5>
                <p className="text-[10.5px] text-[#727272] leading-relaxed">
                  The per-field mic acts; this strip shows state — listening, active section, language — so the doctor always knows it's recording, even mid-scroll. Resolves the redundancy.
                </p>
              </div>

              <div className="bg-white/40 border border-[#cdcdcd]/60 rounded-xl p-4 flex flex-col gap-1.5">
                <h5 className="font-bold text-[10px] uppercase tracking-wider text-[#1b1b1a]">Patient-at-a-glance</h5>
                <p className="text-[10.5px] text-[#727272] leading-relaxed">
                  Allergy → conditions → current meds → last visit → last Rx. Empty for new patients, gold for returning ones. The clearest "digital beats paper" moment.
                </p>
              </div>

              <div className="bg-white/40 border border-[#cdcdcd]/60 rounded-xl p-4 flex flex-col gap-1.5">
                <h5 className="font-bold text-[10px] uppercase tracking-wider text-[#1b1b1a]">Queue + Templates</h5>
                <p className="text-[10.5px] text-[#727272] leading-relaxed">
                  Queue: one tap loads the next patient's record. Templates (whole recipe) & favourites (one ingredient) surface inside the Plan, where prescribing happens — not a permanent sidebar.
                </p>
              </div>

              <div className="bg-white/40 border border-[#cdcdcd]/60 rounded-xl p-4 flex flex-col gap-1.5">
                <h5 className="font-bold text-[10px] uppercase tracking-wider text-[#1b1b1a]">Save / Sign / Deliver</h5>
                <p className="text-[10.5px] text-[#727272] leading-relaxed">
                  Autosave from word one ("Saved ✓") finalises. Print/WhatsApp/Pharmacy deliver. Three separate concepts — never collapsed into one button.
                </p>
              </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}
