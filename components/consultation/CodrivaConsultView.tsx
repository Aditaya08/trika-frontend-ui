'use client';

import React, { useState } from 'react';

interface CodrivaConsultViewProps {
  onPreview: (data: any) => void;
}

export default function CodrivaConsultView({ onPreview }: CodrivaConsultViewProps) {
  const [complaintActive, setComplaintActive] = useState(true);
  const [activeChip, setActiveChip] = useState('Complaint');
  const [chiefComplaints, setChiefComplaints] = useState([
    'Redness & watering, right eye, since 4 days',
    'Mild itching, worse in morning. No pain, no vision drop.'
  ]);
  const [heardText, setHeardText] = useState(
    'moxifloxacin drops, one drop four times a day, both eyes, five days... and carboxymethyl cellulose...'
  );

  const chips = [
    'Complaint',
    'Findings',
    'Vitals',
    'Diagnosis',
    'Prescription',
    'Investigations',
    'Advice',
    'Follow-up'
  ];

  const handleDone = () => {
    setComplaintActive(false);
  };

  const handleStartListening = () => {
    setComplaintActive(true);
  };

  const handlePreviewClick = () => {
    onPreview({
      patientName: 'Rakesh Kumar',
      patientAgeSex: '47/M',
      patientMobile: '9911223321',
      patientToken: 'OPD: Token #18',
      chiefComplaints,
      heardText,
      doctorName: 'Dr.S. Rao, MS (Ophthalmology)',
      doctorReg: 'RMC/2011/20641',
      date: '15 Jun 2026',
      hospitalName: 'SN Super Speciality Hospital',
      hospitalAddress: 'Hanumangarh - Suratgarh Bypass, Sriganganagar, Rajasthan 335001',
      hospitalWeb: 'www.snhospitals.com',
      hospitalEmail: 'care@nethra.in'
    });
  };

  // Mock audio sound wave bar heights
  const waveBars = [12, 24, 8, 16, 32, 14, 20, 28, 10, 18, 6, 22, 12, 16, 24, 8, 14, 30, 20, 12, 6, 18, 22, 10, 28, 16, 32, 14, 8, 24];

  return (
    <div className="w-full min-h-screen bg-[#c5d3ca] text-[#2c332e] font-sans pb-12">
      
      {/* GREEN TOP HEADER (matching screenshot) */}
      <header className="bg-[#466a5c] h-16 px-6 flex items-center justify-between shadow-md text-white select-none border-b border-[#3b5b4e]">
        <div className="flex items-center gap-3">
          {/* Circular green Codriva Care logo */}
          <div className="w-9 h-9 rounded-full bg-[#82b8a0] flex items-center justify-center text-white shadow-inner animate-pulse">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
            </svg>
          </div>
          <div>
            <h2 className="font-serif font-extrabold text-[15px] leading-tight tracking-wide">Codriva Care</h2>
            <p className="text-[9px] text-[#a5cbba] font-medium tracking-wide leading-none mt-0.5">Conversational consult</p>
          </div>
        </div>

        {/* Center Search Input */}
        <div className="relative w-80 md:w-[480px]">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 text-sm">⌕</span>
          <input
            type="text"
            placeholder="Search patient by name, UHID or phone..."
            className="w-full bg-[#527a6a] border border-[#3e6052] rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-gray-300 focus:outline-none focus:border-[#82b8a0] transition-colors"
          />
        </div>

        {/* Profile & Notifications */}
        <div className="flex items-center gap-4">
          <button className="w-8 h-8 rounded-lg bg-[#527a6a] hover:bg-[#5c8876] flex items-center justify-center text-sm text-white border border-[#3e6052] transition-colors">
            🔔
          </button>
          <button className="w-8 h-8 rounded-lg bg-[#527a6a] hover:bg-[#5c8876] flex items-center justify-center text-sm text-white border border-[#3e6052] transition-colors">
            ⚙
          </button>
          
          <div className="w-8 h-8 rounded-full bg-[#82b8a0] text-[#2c332e] font-extrabold text-xs flex items-center justify-center shadow-inner border border-white">
            DR
          </div>
        </div>
      </header>

      {/* CENTER PATIENT PAD CONTAINER */}
      <main className="max-w-4xl mx-auto mt-6 p-4">
        
        {/* THE LETTERHEAD PAD SHEET */}
        <div className="bg-white border border-[#b2c3b8] rounded-xl shadow-2xl p-8 flex flex-col gap-6">
          
          {/* HOSPITAL HEADER */}
          <div className="border-b-2 border-[#466a5c]/35 pb-5 flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="flex flex-col gap-1 text-left">
              <h1 className="font-serif font-extrabold text-lg tracking-tight text-gray-900">
                SN Super Speciality Hospital
              </h1>
              <p className="text-[11px] font-sans text-gray-500 leading-normal">
                Hanumangarh - Suratgarh Bypass, Sriganganagar, Rajasthan 335001<br />
                Web: <span className="underline">www.snhospitals.com</span> · Email: care@nethra.in
              </p>
            </div>
            
            {/* Doctor Info */}
            <div className="text-right flex flex-col gap-0.5">
              <h3 className="font-serif font-bold text-[14px] text-gray-900">
                Dr.S. Rao, MS (Ophthalmology)
              </h3>
              <p className="text-[11px] font-sans text-gray-500">
                Reg. RMC/2011/20641
              </p>
            </div>
          </div>

          {/* DATE & PATIENT DETAILS LINE */}
          <div className="flex flex-wrap items-center justify-between text-xs text-gray-500 border-b border-dashed border-gray-200 pb-2">
            <div className="flex gap-6 font-semibold">
              <span>Name: <strong className="text-gray-900 font-bold">Rakesh Kumar</strong></span>
              <span>Age/Sex: <strong className="text-gray-900 font-semibold">47/M</strong></span>
              <span>Mobile: <strong className="text-gray-900 font-semibold">9911223321</strong></span>
              <span>OPD: <strong className="text-gray-900 font-semibold">Token #18</strong></span>
            </div>
            <div className="font-bold text-gray-800">
              Date: 15 Jun 2026
            </div>
          </div>

          {/* SECTIONS LIST */}
          <div className="bg-[#f2f4f3] border border-[#d2dcd5] rounded-xl p-4 flex flex-col gap-2 shadow-sm select-none">
            <h4 className="text-[10px] font-bold text-[#55695d] uppercase tracking-wider">
              Sections — tap to write
            </h4>
            
            <div className="flex flex-wrap gap-2 mt-1">
              {chips.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => setActiveChip(chip)}
                  className={`px-3 py-1 text-xs border rounded-lg transition-all font-semibold ${
                    activeChip === chip 
                      ? 'bg-[#466a5c] border-[#466a5c] text-white font-bold shadow-sm'
                      : 'bg-white border-[#cdcdcd] text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  + {chip}
                </button>
              ))}
              <button className="px-3 py-1 text-xs border border-dashed border-gray-400 rounded-lg text-gray-500 font-semibold hover:bg-gray-50 bg-white">
                + Custom Tag
              </button>
            </div>
          </div>

          {/* LISTENING WAVEFORM CARD (Screen 1 Main Active Section) */}
          {complaintActive ? (
            <div className="border-2 border-[#82b8a0] bg-[#fbfdfb] rounded-xl p-4 flex items-center justify-between shadow-md relative animate-pulse">
              <div className="flex flex-col gap-2 w-2/3 text-left">
                <span className="text-xs font-bold text-[#466a5c] uppercase tracking-wider flex items-center gap-1.5 select-none">
                  Complaint <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500" /> <span className="text-[9.5px] font-bold text-green-600 lowercase tracking-wide font-sans">filling</span>
                </span>
                
                <h3 className="font-serif italic text-lg text-gray-400 select-none">
                  Listening...
                </h3>

                {/* Animated Audio Sound Waveform */}
                <div className="flex items-end gap-0.5 h-12 pt-2 select-none">
                  {waveBars.map((height, i) => (
                    <div 
                      key={i}
                      style={{ height: `${height}px` }}
                      className="w-1.5 bg-[#8bb5a4] rounded-t-md transition-all duration-300"
                    />
                  ))}
                </div>
              </div>

              {/* Done and close buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleDone}
                  className="bg-[#466a5c] hover:bg-[#3b5b4e] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm"
                >
                  Done ✓
                </button>
                <button
                  type="button"
                  onClick={() => setComplaintActive(false)}
                  className="w-8 h-8 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-gray-400 hover:text-black transition-colors text-sm"
                >
                  ✕
                </button>
              </div>
            </div>
          ) : (
            <div className="border border-dashed border-gray-300 rounded-xl p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider select-none">
                Complaint Section
              </span>
              <button
                type="button"
                onClick={handleStartListening}
                className="text-[#466a5c] hover:text-[#3b5b4e] text-xs font-bold flex items-center gap-1.5"
              >
                🎙 Start listening
              </button>
            </div>
          )}

          {/* CAPTURED CHIEF COMPLAINTS CARD */}
          <div className="bg-white border border-[#cdcdcd] rounded-xl overflow-hidden shadow-sm">
            <div className="bg-gray-50 border-b border-[#cdcdcd] px-4 py-2.5 flex items-center justify-between font-sans text-xs">
              <span className="font-bold text-gray-800 uppercase tracking-wider flex items-center gap-2 select-none">
                Chief Complaint <span className="text-[10px] text-gray-400 font-medium tracking-wide lowercase">captured ✓</span>
              </span>
              <button 
                type="button"
                className="text-gray-500 hover:text-black font-bold text-[10.5px] border border-gray-300 rounded px-2.5 py-1 bg-white flex items-center gap-1 shadow-sm"
              >
                📝 Edit Type
              </button>
            </div>
            
            <div className="p-4 text-xs text-gray-800 leading-relaxed font-sans text-left">
              <ul className="list-disc pl-4 space-y-1">
                {chiefComplaints.map((item, index) => (
                  <li key={index} className="font-semibold text-gray-800">{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* TRANSCRIPTION CARD (moxifloxacin drops... heard box) */}
          <div className="bg-[#fdfcf9] border border-[#e1d5ba] rounded-xl p-4 flex flex-col gap-4 relative shadow-sm">
            {/* Capsule badge on top left */}
            <span className="bg-white border border-[#cdcdcd] text-gray-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider self-start select-none shadow-sm">
              Complaint
            </span>
            
            <div className="text-left">
              <p className="text-xs text-gray-500 italic leading-relaxed">
                heard: <span className="font-bold text-gray-700">"{heardText}"</span>
              </p>
            </div>

            {/* Bottom buttons */}
            <div className="flex items-center justify-between border-t border-[#efebd7] pt-3">
              <button
                type="button"
                className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 px-4 py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm"
              >
                + Diagnosis
              </button>

              <button
                type="button"
                onClick={handleStartListening}
                className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 px-4 py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm flex items-center gap-1"
              >
                <span>Tap to Speak</span> 🎙
              </button>
            </div>
          </div>

          {/* SIGNATURE AND FOOTER COMMENTS */}
          <div className="mt-8 pt-5 border-t border-gray-200 flex justify-between items-end text-xs text-gray-400 select-none">
            <p className="italic text-[10px] text-left leading-relaxed max-w-sm">
              Generated on Sharma Care Clinic letterhead · This prescription is valid with the doctor's signature. Reviewed before printing.
            </p>
            
            {/* Signature Area */}
            <div className="text-right">
              <div className="h-10 font-serif italic text-xl text-[#2c65cc] font-bold pr-4 select-none">
                S. Rao
              </div>
              <p className="border-t border-gray-400 pt-1 font-semibold text-[10px] w-36 text-center text-gray-500">
                Doctor's signature
              </p>
            </div>
          </div>

        </div>

      </main>

      {/* FLOATING ACTION BOTTOM BAR */}
      <footer className="fixed bottom-6 right-8 z-20">
        <button
          type="button"
          onClick={handlePreviewClick}
          className="bg-[#1b1b1a] hover:bg-black text-white px-6 py-3 rounded-xl text-xs font-bold tracking-wide transition-all shadow-xl active:scale-95 flex items-center gap-2"
        >
          <span>Preview & print Rx</span>
        </button>
      </footer>

    </div>
  );
}
