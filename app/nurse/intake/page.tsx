'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Logo from '@/components/Logo';

function IntakeFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get query details
  const patientId = searchParams.get('id') || '1';
  const queryName = searchParams.get('name') || 'Rahul Sharma';
  const queryUhid = searchParams.get('uhid') || 'TRI-2026-000123';
  const queryDetail = searchParams.get('detail') || '34/Male';
  const queryEmergency = searchParams.get('isEmergency') === 'true';

  // State management
  const [complaintText, setComplaintText] = useState(
    'Headache for 3 days, poor sleep, occasional dizziness.'
  );

  // Vitals inputs
  const [weight, setWeight] = useState('78');
  const [height, setHeight] = useState('175');
  const [bmi, setBmi] = useState('25.5');
  const [bpSystolic, setBpSystolic] = useState('130');
  const [bpDiastolic, setBpDiastolic] = useState('85');
  const [pulse, setPulse] = useState('78');
  const [temp, setTemp] = useState('98.6');
  
  // Optional vitals
  const [bloodSugar, setBloodSugar] = useState('');
  const [spo2, setSpo2] = useState('');
  const [respRate, setRespRate] = useState('');

  // Auto-saved message timer
  const [saveMessage, setSaveMessage] = useState('Draft auto-saved - 30s ago');

  // Documents list
  const [files, setFiles] = useState([
    { name: 'blood-report.pdf', size: '1.2 MB' }
  ]);

  // BMI Auto-calculation hook
  useEffect(() => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (!isNaN(w) && !isNaN(h) && h > 0) {
      const heightInMeters = h / 100;
      const calculatedBmi = w / (heightInMeters * heightInMeters);
      setBmi(calculatedBmi.toFixed(1));
    } else {
      setBmi('');
    }
  }, [weight, height]);

  // Append complaint tags
  const handleTagClick = (tag: string) => {
    const textToAppend = tag.replace('+', '').trim();
    if (complaintText.endsWith('.') || complaintText.trim() === '') {
      setComplaintText(prev => prev.trim() + ' ' + textToAppend + '.');
    } else if (complaintText.endsWith(',')) {
      setComplaintText(prev => prev.trim() + ' ' + textToAppend + ',');
    } else {
      setComplaintText(prev => prev.trim() + ', ' + textToAppend);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, idx) => idx !== index));
  };

  const handleSaveDraft = () => {
    setSaveMessage('Draft saved successfully!');
    setTimeout(() => {
      setSaveMessage('Draft auto-saved - just now');
    }, 2000);
  };

  const handleCompleteIntake = () => {
    alert(`Intake completed for ${queryName}! Vitals details have been submitted to Dr. Sharma.`);
    router.push('/nurse');
  };

  return (
    <div className="flex h-screen bg-[#eae8e6] text-[#1b1b1a] overflow-hidden font-sans">
      
      {/* COLLAPSED SIDEBAR (matching narrow navigation bar on Left of Image 3) */}
      <aside className="w-16 h-screen bg-white border-r border-[#cdcdcd] flex flex-col items-center justify-between shrink-0 select-none py-4">
        <div className="flex flex-col gap-6 items-center w-full">
          {/* Logo container */}
          <div 
            onClick={() => router.push('/nurse')}
            className="w-9 h-9 rounded-lg bg-[#1b1b1a] text-white flex items-center justify-center transition-transform hover:rotate-12 cursor-pointer shadow-sm"
          >
            <Logo className="w-5 h-5 text-[#f8f2e4]" />
          </div>
          
          <div className="w-full border-t border-[#cdcdcd]/60" />

          {/* Navigation Home Icon */}
          <button 
            onClick={() => router.push('/nurse')}
            className="w-11 h-11 bg-white hover:bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </button>

          {/* Documents Icon (Active/Selected in intake view) */}
          <button 
            onClick={() => router.push('/nurse/intake')}
            className="w-11 h-11 bg-[#f0ede6] border border-[#dcd6c8] rounded-xl flex items-center justify-center text-[#1b1b1a]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
          </button>
        </div>

        {/* Bottom Help Icon */}
        <button className="w-11 h-11 bg-white hover:bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
          </svg>
        </button>
      </aside>

      {/* RIGHT MAIN CONTAINER */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        
        {/* HEADER BAR (Rahul Sharma Header strip - matching Image 3) */}
        <header className="h-16 bg-[#1a1a1a] text-white px-8 flex items-center justify-between shrink-0 select-none border-b border-[#333]">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => router.push('/nurse')}
              className="text-gray-400 hover:text-white p-1 rounded hover:bg-[#333] transition-colors"
              aria-label="Back to dashboard"
            >
              ← Back
            </button>
            
            {/* Avatar circle */}
            <div className="w-9 h-9 rounded-full bg-gray-600 text-white font-extrabold flex items-center justify-center text-sm shadow-inner">
              RS
            </div>

            {/* Patient name & basic stats */}
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-[15px] font-bold tracking-wide">{queryName}</h1>
                {queryEmergency && (
                  <span className="bg-red-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded uppercase select-none tracking-wider">
                    Emergency
                  </span>
                )}
              </div>
              <p className="text-[10.5px] text-gray-400 font-semibold mt-0.5">
                {queryUhid} · {queryDetail} · +91 98•••• 3210
              </p>
            </div>
          </div>

          {/* Doctor Details */}
          <div className="text-left border-l border-gray-700 pl-6 hidden md:block">
            <span className="text-[9.5px] font-bold text-gray-500 uppercase tracking-wider block">For Doctor</span>
            <span className="text-xs font-bold text-gray-200">Dr Sharma · General Medicine</span>
          </div>

          {/* Visit details */}
          <div className="text-left border-l border-gray-700 pl-6 hidden md:block">
            <span className="text-[9.5px] font-bold text-gray-500 uppercase tracking-wider block">Visit</span>
            <span className="text-xs font-bold text-gray-200">#TRI-V-0456 · 10:00 AM</span>
          </div>

          {/* Confirm checkmark badge */}
          <div className="bg-[#e9f7ee] border border-[#a1e2b6] rounded-lg px-3 py-1 flex items-center gap-1.5 shadow-sm">
            <span className="text-[#2e7d32] text-xs">✔</span>
            <span className="text-[#2e7d32] text-[10.5px] font-extrabold tracking-wide uppercase select-none">
              Patient Confirmed
            </span>
          </div>
        </header>

        {/* INTAKE WORKSPACE CONTENT */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col lg:flex-row gap-6">
          
          {/* LEFT/CENTER COLUMN (Form entry fields) */}
          <div className="flex-1 flex flex-col gap-6">
            
            {/* CHIEF COMPLAINTS PANEL */}
            <div className="bg-white border border-[#cdcdcd] rounded-2xl p-5 flex flex-col gap-3 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                  Chief Complaints <span className="text-red-500 ml-1">• required</span>
                </h3>
              </div>
              
              <textarea
                value={complaintText}
                onChange={(e) => setComplaintText(e.target.value)}
                rows={3}
                className="w-full bg-[#fcfbf9] border border-[#cdcdcd] rounded-xl p-3 text-xs text-[#1b1b1a] focus:outline-none focus:border-[#306cd2] transition-colors resize-none leading-relaxed"
                placeholder="Enter patient complaints here..."
              />

              {/* Tag Quick-add buttons */}
              <div className="flex flex-wrap gap-2 mt-1 select-none">
                {['+ Fever', '+ Cough', '+ Body ache', '+ Fatigue', '+ Nausea'].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => handleTagClick(tag)}
                    className="bg-[#f0ede6] hover:bg-[#eae8e2] border border-[#dcd6c8] rounded-lg px-2.5 py-1 text-xs text-gray-700 font-semibold transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* VITALS ENTRY FORM */}
            <div className="bg-white border border-[#cdcdcd] rounded-2xl p-5 flex flex-col gap-4 shadow-sm">
              <div>
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                  Vitals <span className="text-red-500 ml-1">• BP, weight, pulse required</span>
                </h3>
              </div>

              {/* Required Vitals Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* Weight */}
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wide">
                    Weight <span className="text-gray-400 font-medium">(kg)</span>
                  </label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="bg-[#fcfbf9] border border-[#cdcdcd] rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:border-[#306cd2] transition-colors"
                  />
                </div>

                {/* Height */}
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wide">
                    Height <span className="text-gray-400 font-medium">(cm)</span>
                  </label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="bg-[#fcfbf9] border border-[#cdcdcd] rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:border-[#306cd2] transition-colors"
                  />
                </div>

                {/* BMI (auto calculated & disabled) */}
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">
                    BMI <span className="text-gray-400 font-medium">(auto)</span>
                  </label>
                  <input
                    type="text"
                    value={bmi}
                    disabled
                    className="bg-[#f3f2ef] border border-[#cdcdcd] rounded-xl px-3 py-2 text-xs font-semibold text-gray-500 outline-none select-none cursor-not-allowed"
                  />
                </div>

                {/* Blood Pressure */}
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wide">
                    Blood Pressure <span className="text-gray-400 font-medium">(mmHg)</span>
                  </label>
                  <div className="flex items-center gap-1">
                    <input
                      type="number"
                      placeholder="Sys"
                      value={bpSystolic}
                      onChange={(e) => setBpSystolic(e.target.value)}
                      className="bg-[#fcfbf9] border border-[#cdcdcd] rounded-xl px-3 py-2 text-xs font-semibold text-center w-1/2 focus:outline-none focus:border-[#306cd2] transition-colors"
                    />
                    <span className="text-gray-400 text-sm">/</span>
                    <input
                      type="number"
                      placeholder="Dia"
                      value={bpDiastolic}
                      onChange={(e) => setBpDiastolic(e.target.value)}
                      className="bg-[#fcfbf9] border border-[#cdcdcd] rounded-xl px-3 py-2 text-xs font-semibold text-center w-1/2 focus:outline-none focus:border-[#306cd2] transition-colors"
                    />
                  </div>
                </div>

                {/* Pulse */}
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wide">
                    Pulse <span className="text-gray-400 font-medium">(bpm)</span>
                  </label>
                  <input
                    type="number"
                    value={pulse}
                    onChange={(e) => setPulse(e.target.value)}
                    className="bg-[#fcfbf9] border border-[#cdcdcd] rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:border-[#306cd2] transition-colors"
                  />
                </div>

                {/* Temperature */}
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wide">
                    Temperature <span className="text-gray-400 font-medium">(°F)</span>
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={temp}
                    onChange={(e) => setTemp(e.target.value)}
                    className="bg-[#fcfbf9] border border-[#cdcdcd] rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:border-[#306cd2] transition-colors"
                  />
                </div>

              </div>

              {/* Optional vitals details divider */}
              <div className="border-t border-[#cdcdcd]/60 my-2" />
              <div>
                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Optional Vitals</h4>
              </div>

              {/* Optional Vitals Fields Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Blood Sugar */}
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wide">
                    Blood Sugar <span className="text-gray-400 font-medium">(mg/dL)</span>
                  </label>
                  <input
                    type="number"
                    value={bloodSugar}
                    placeholder="—"
                    onChange={(e) => setBloodSugar(e.target.value)}
                    className="bg-[#fcfbf9] border border-[#cdcdcd] rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:border-[#306cd2] transition-colors"
                  />
                </div>

                {/* SpO2 */}
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wide">
                    SpO₂ <span className="text-gray-400 font-medium">(%)</span>
                  </label>
                  <input
                    type="number"
                    value={spo2}
                    placeholder="—"
                    onChange={(e) => setSpo2(e.target.value)}
                    className="bg-[#fcfbf9] border border-[#cdcdcd] rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:border-[#306cd2] transition-colors"
                  />
                </div>

                {/* Resp Rate */}
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wide">
                    Resp. Rate <span className="text-gray-400 font-medium">(/min)</span>
                  </label>
                  <input
                    type="number"
                    value={respRate}
                    placeholder="—"
                    onChange={(e) => setRespRate(e.target.value)}
                    className="bg-[#fcfbf9] border border-[#cdcdcd] rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:border-[#306cd2] transition-colors"
                  />
                </div>
              </div>

            </div>

            {/* DOCUMENTS & PHOTO SECTION */}
            <div className="bg-white border border-[#cdcdcd] rounded-2xl p-5 flex flex-col gap-4 shadow-sm">
              <div>
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                  Documents & Photo
                </h3>
              </div>

              {/* Upload report actions boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Upload Report block */}
                <div className="border-2 border-dashed border-[#cdcdcd] rounded-xl p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 hover:border-[#306cd2] transition-all py-6">
                  <span className="text-2xl mb-1 select-none">📄</span>
                  <span className="text-xs font-bold text-gray-800">Upload Report</span>
                  <span className="text-[10px] text-gray-400 font-medium mt-0.5">PDF / JPG - max 10MB</span>
                </div>

                {/* Capture Photo block */}
                <div className="border-2 border-dashed border-[#cdcdcd] rounded-xl p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 hover:border-[#306cd2] transition-all py-6">
                  <span className="text-2xl mb-1 select-none">📷</span>
                  <span className="text-xs font-bold text-gray-800">Capture Photo</span>
                  <span className="text-[10px] text-gray-400 font-medium mt-0.5">patient photo for record</span>
                </div>

              </div>

              {/* Attached file items list */}
              {files.length > 0 && (
                <div className="flex flex-col gap-2 mt-2 select-none">
                  {files.map((file, idx) => (
                    <div 
                      key={idx}
                      className="bg-[#fcfbf9] border border-[#cdcdcd] rounded-xl px-4 py-2.5 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">📄</span>
                        <div>
                          <p className="text-xs font-bold text-gray-800">{file.name}</p>
                          <p className="text-[9.5px] text-gray-400 font-semibold">{file.size} · Lab Report</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeFile(idx)}
                        className="text-gray-400 hover:text-red-500 font-bold p-1 transition-colors"
                        aria-label="Remove document"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}

            </div>

          </div>

          {/* RIGHT SIDEBAR COLUMN (Previous Vitals and patient flags) */}
          <div className="w-full lg:w-80 flex flex-col gap-6 shrink-0 select-none">
            
            {/* PREVIOUS VITALS SUMMARY */}
            <div className="bg-white border border-[#cdcdcd] rounded-2xl p-5 flex flex-col gap-3.5 shadow-sm">
              <div>
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                  Previous Vitals
                </h3>
                <p className="text-[10px] text-gray-400 font-semibold mt-0.5">
                  Last visit · 12 Jun 2026 · Nurse Asha
                </p>
              </div>

              <div className="border-t border-[#cdcdcd]/60 pt-3 flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-gray-500">Weight</span>
                  <span className="text-gray-800 font-bold">80 kg</span>
                </div>
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-gray-500">BMI</span>
                  <span className="text-gray-800 font-bold">26.1</span>
                </div>
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-gray-500">Blood Pressure</span>
                  <span className="text-gray-800 font-bold">135 / 88 mmHg</span>
                </div>
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-gray-500">Pulse</span>
                  <span className="text-gray-800 font-bold">82 bpm</span>
                </div>
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-gray-500">Temperature</span>
                  <span className="text-gray-800 font-bold">98.4 °F</span>
                </div>
              </div>
            </div>

            {/* PATIENT FLAGS CARD */}
            <div className="bg-white border border-[#cdcdcd] rounded-2xl p-5 flex flex-col gap-4 shadow-sm">
              <div>
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                  Patient Flags
                </h3>
              </div>

              <div className="flex flex-col gap-4 border-t border-[#cdcdcd]/60 pt-4">
                {/* Allergies Block */}
                <div className="flex flex-col gap-2">
                  <span className="text-[9.5px] font-bold text-gray-400 uppercase tracking-wide">Allergies</span>
                  <div className="bg-[#fff9f6] border border-[#fbdcd0] rounded-lg p-2.5 flex items-center gap-1.5 self-start">
                    <span className="text-[#ca5b2a] text-xs">⚠️</span>
                    <span className="text-[#ca5b2a] text-[10.5px] font-bold">
                      Penicillin
                    </span>
                  </div>
                </div>

                {/* Conditions Block */}
                <div className="flex flex-col gap-2">
                  <span className="text-[9.5px] font-bold text-gray-400 uppercase tracking-wide">Conditions</span>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="bg-gray-100 border border-gray-200 rounded-lg px-2.5 py-1 text-xs text-gray-700 font-semibold">
                      Type 2 Diabetes
                    </span>
                    <span className="bg-gray-100 border border-gray-200 rounded-lg px-2.5 py-1 text-xs text-gray-700 font-semibold">
                      Hypertension
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM FIXED FOOTER BAR */}
        <footer className="h-16 bg-white border-t border-[#cdcdcd] px-8 flex items-center justify-between shrink-0 select-none z-10 shadow-md">
          <div className="flex items-center gap-2 text-xs text-gray-400 font-semibold">
            <span className="text-gray-300">●</span> {saveMessage}
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={handleSaveDraft}
              className="bg-white hover:bg-gray-50 text-gray-700 border border-[#cdcdcd] px-6 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 shadow-sm"
            >
              Save Draft
            </button>
            <button
              type="button"
              onClick={handleCompleteIntake}
              className="bg-[#306cd2] hover:bg-[#2c65cc] text-white px-6 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 shadow-sm flex items-center gap-1.5"
            >
              Complete Intake →
            </button>
          </div>
        </footer>

      </div>

    </div>
  );
}

export default function NurseIntakePage() {
  return (
    <Suspense fallback={
      <div className="flex h-screen bg-[#eae8e6] text-[#1b1b1a] items-center justify-center font-sans">
        <div className="text-sm font-bold text-gray-500">Loading intake details...</div>
      </div>
    }>
      <IntakeFormContent />
    </Suspense>
  );
}
