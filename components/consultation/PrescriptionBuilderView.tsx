'use client';

import React, { useState } from 'react';

interface PrescriptionItem {
  id: string;
  name: string;
  dosage: string;
  duration: string;
  hasAllergyConflict?: boolean;
}

export default function PrescriptionBuilderView() {
  const [activeStep, setActiveStep] = useState(4);
  const [searchQuery, setSearchQuery] = useState('Panto');
  const [showDropdown, setShowDropdown] = useState(true);
  
  // Dosage form state
  const [selectedDrug, setSelectedDrug] = useState('Pantoprazole');
  const [form, setForm] = useState('Tablet');
  const [strength, setStrength] = useState('40 mg');
  const [frequency, setFrequency] = useState('');
  const [when, setWhen] = useState('Before food');
  const [duration, setDuration] = useState('');
  const [instructions, setInstructions] = useState('');

  // Added Rx items
  const [rxList, setRxList] = useState<PrescriptionItem[]>([
    {
      id: '1',
      name: 'Amoxicillin 500 mg',
      dosage: '1-0-1 · after food',
      duration: '5 days',
      hasAllergyConflict: true
    }
  ]);

  const handleAddDrug = () => {
    if (!frequency || !duration) return;
    const newItem: PrescriptionItem = {
      id: Date.now().toString(),
      name: `${selectedDrug} ${strength}`,
      dosage: `${frequency || '1-0-0'} · ${when}`,
      duration: duration || '7 days'
    };
    setRxList([...rxList, newItem]);
    setShowDropdown(false);
  };

  const handleLoadTemplate = (templateName: string) => {
    if (templateName === 'Acidity / GERD') {
      setRxList([
        ...rxList,
        { id: Date.now().toString(), name: 'Pantoprazole 40 mg', dosage: '1-0-0 · Before food', duration: '14 days' },
        { id: Date.now().toString() + '2', name: 'Sucralfate Syrup 10ml', dosage: '1-1-1 · After food', duration: '7 days' }
      ]);
    }
  };

  return (
    <div className="w-full flex flex-col gap-4 text-[#1a1a1a]">
      {/* Container simulating wireframe frame */}
      <div className="bg-white border border-[#1a1a1a] rounded-xl shadow-xl overflow-hidden flex flex-col min-w-[1000px]">
        {/* TOP BAR */}
        <header className="bg-[#f6f7f8] border-b border-[#1a1a1a] h-12 px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="border border-[#1a1a1a] rounded px-1.5 py-0.5 text-[9px] text-[#7a7a7a] font-bold">
              EMR
            </div>
            <div className="font-bold text-sm text-[#1a1a1a]">
              Consultation <span className="font-normal text-xs text-[#7a7a7a]">· OPD · Token #18</span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-1 bg-gray-200 p-0.5 rounded-lg text-xs">
            <button className="px-3 py-1 text-[#7a7a7a] hover:text-black">Vitals</button>
            <button className="px-3 py-1 text-[#7a7a7a] hover:text-black">Notes</button>
            <button className="px-3 py-1 bg-white font-bold text-[#1a1a1a] rounded shadow-sm">Prescription</button>
            <button className="px-3 py-1 text-[#7a7a7a] hover:text-black">Tests</button>
            <button className="px-3 py-1 text-[#7a7a7a] hover:text-black">Billing</button>
          </div>

          <div className="flex items-center gap-2">
            <button className="w-7 h-7 rounded bg-white border border-[#c4c4c4] text-xs flex items-center justify-center text-[#7a7a7a]">⌕</button>
            <button className="w-7 h-7 rounded bg-white border border-[#c4c4c4] text-xs flex items-center justify-center text-[#7a7a7a]">⚙</button>
          </div>
        </header>

        {/* PATIENT STRIP & STEPPER */}
        <div className="bg-white border-b border-[#c4c4c4] py-2.5 px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-[#1a1a1a] flex items-center justify-center font-bold text-xs bg-gray-50">
              RK
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-[#1a1a1a]">Rakesh Kumar</span>
              <span className="text-xs text-[#9a9a9a]">· 47 / M</span>
              <span className="border border-[#c4c4c4] rounded px-1.5 py-0.5 text-[10px] text-[#7a7a7a]">UHID 4471-203</span>
              <span className="bg-[#fbf6e9] border border-[#c9a23a] text-[#8a6d2f] font-bold rounded px-2 py-0.5 text-[10px]">
                ⚠ Allergy: Penicillin
              </span>
            </div>
          </div>

          {/* Stepper Journey */}
          <div className="flex items-center gap-2 text-xs">
            {[
              { num: 1, label: 'Complaint' },
              { num: 2, label: 'Exam' },
              { num: 3, label: 'Diagnosis' },
              { num: 4, label: 'Prescription' },
              { num: 5, label: 'Advice' }
            ].map((step, idx) => (
              <React.Fragment key={step.num}>
                {idx > 0 && <span className="text-gray-400">→</span>}
                <div 
                  onClick={() => setActiveStep(step.num)}
                  className={`flex items-center gap-1.5 cursor-pointer ${
                    activeStep === step.num ? 'font-bold text-[#1a1a1a]' : 'text-[#9a9a9a]'
                  }`}
                >
                  <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                    activeStep === step.num ? 'bg-[#1a1a1a] text-white font-bold' : 'border border-[#c4c4c4] text-[#7a7a7a]'
                  }`}>
                    {step.num}
                  </span>
                  <span>{step.label}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* THREE COLUMN BODY */}
        <div className="flex flex-row min-h-[650px] bg-[#f6f7f8]">
          {/* COLUMN 1: LEFT NAV CLINICAL SECTIONS */}
          <aside className="w-56 border-r border-[#1a1a1a] bg-[#f6f7f8] flex flex-col justify-between p-3 shrink-0">
            <div className="flex flex-col gap-1.5">
              <p className="text-[10px] font-bold text-[#7a7a7a] uppercase tracking-wider px-2 py-1 border-b border-[#c4c4c4] mb-1">
                Consultation sections
              </p>
              
              {[
                { id: 1, name: 'Chief complaint', done: true },
                { id: 2, name: 'Findings / Exam', done: true },
                { id: 3, name: 'Diagnosis', done: true },
                { id: 4, name: 'Prescription', active: true },
                { id: 5, name: 'Investigations' },
                { id: 6, name: 'Advice' },
                { id: 7, name: 'Follow-up' }
              ].map((sec) => (
                <div
                  key={sec.id}
                  className={`flex items-center justify-between px-2.5 py-2 rounded-md text-xs transition-colors cursor-pointer ${
                    sec.active 
                      ? 'bg-white border border-[#1a1a1a] font-bold text-[#1a1a1a] shadow-sm' 
                      : 'hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`w-4 h-4 rounded text-[9px] flex items-center justify-center font-bold ${
                      sec.active ? 'bg-[#1a1a1a] text-white' : 'bg-[#eee] border border-[#c4c4c4] text-gray-600'
                    }`}>
                      {sec.id}
                    </span>
                    <span>{sec.name}</span>
                  </div>
                  {sec.done && <span className="text-gray-400 text-xs font-bold">✓</span>}
                  {sec.active && <span className="text-gray-400 text-xs">✎</span>}
                </div>
              ))}
            </div>

            {/* Friction Warning Box */}
            <div className="bg-[#fbf6e9] border-l-4 border-[#c9a23a] border rounded p-2.5 text-[10px] text-[#6b521f]">
              <p className="font-bold mb-0.5">Friction Alert:</p>
              <p className="text-[#8a6d2f] leading-snug">
                7 sections × keyboard + mouse. Eyes on screen, not patient.
              </p>
            </div>
          </aside>

          {/* COLUMN 2: CENTER PRESCRIPTION BUILDER */}
          <main className="flex-1 border-r border-[#1a1a1a] bg-white p-5 flex flex-col gap-5 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between border-b border-[#c4c4c4] pb-2 mb-3">
                <h3 className="font-bold text-xs text-[#7a7a7a] uppercase tracking-wider">Prescription builder</h3>
                <span className="text-xs text-[#9a9a9a]">Section 4 of 7</span>
              </div>

              <h2 className="font-bold text-sm text-[#1a1a1a]">Add medicine</h2>
              <p className="text-xs text-[#7a7a7a] mt-0.5">Search the drug database, then set dosage. Repeat for each drug.</p>
            </div>

            {/* SEARCH DRUG DATABASE */}
            <div className="relative">
              <div className="flex gap-2">
                <div className="flex-1 relative flex items-center bg-white border border-[#1a1a1a] rounded-lg px-3 py-2">
                  <span className="text-gray-400 mr-2">⌕</span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setShowDropdown(true);
                    }}
                    placeholder="type drug name…"
                    className="w-full text-xs font-semibold text-[#1a1a1a] focus:outline-none"
                  />
                </div>
                <button 
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="bg-white border border-[#1a1a1a] rounded-lg px-4 py-2 font-bold text-xs hover:bg-gray-50"
                >
                  + Add
                </button>
              </div>

              {/* AUTOCOMPLETE DROPDOWN */}
              {showDropdown && searchQuery && (
                <div className="absolute left-0 right-0 top-12 bg-white border border-[#1a1a1a] rounded-lg shadow-xl z-20 overflow-hidden divide-y divide-gray-100">
                  <div className="bg-gray-50 px-3 py-1.5 text-[9.5px] font-bold text-[#9a9a9a] uppercase tracking-wider">
                    Matches in drug database
                  </div>

                  <div 
                    onClick={() => { setSelectedDrug('Pantoprazole'); setShowDropdown(false); }}
                    className="bg-[#fbeeeb] px-3 py-2.5 flex items-center justify-between cursor-pointer hover:bg-red-100 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-[#1a1a1a]">Pantoprazole</span>
                      <span className="border border-[#c4c4c4] bg-white rounded px-1.5 py-0.5 text-[10px] text-[#9a9a9a]">★ favourite</span>
                    </div>
                    <span className="text-xs text-[#7a7a7a]">PPI · 40 mg</span>
                  </div>

                  <div 
                    onClick={() => { setSelectedDrug('Pantoprazole + Domperidone'); setShowDropdown(false); }}
                    className="px-3 py-2 flex items-center justify-between cursor-pointer hover:bg-gray-50"
                  >
                    <span className="text-xs text-[#1a1a1a]">Pantoprazole + Domperidone</span>
                    <span className="text-xs text-[#7a7a7a]">combination</span>
                  </div>

                  <div 
                    onClick={() => { setSelectedDrug('Pantocid DSR'); setShowDropdown(false); }}
                    className="px-3 py-2 flex items-center justify-between cursor-pointer hover:bg-gray-50"
                  >
                    <span className="text-xs text-[#1a1a1a]">Pantocid DSR</span>
                    <span className="text-xs text-[#7a7a7a]">brand</span>
                  </div>
                </div>
              )}
            </div>

            {/* DOSAGE BUILDER BOX */}
            <div className="border border-[#c4c4c4] rounded-lg overflow-hidden bg-white shadow-sm">
              <div className="bg-[#eef0f2] border-b border-[#c4c4c4] px-3 py-2 flex items-center justify-between">
                <span className="font-bold text-xs text-[#1a1a1a]">{selectedDrug}</span>
                <span className="bg-white border border-[#c4c4c4] rounded-full px-2 py-0.5 text-[10px] font-bold text-[#7a7a7a]">
                  set dosage below
                </span>
              </div>

              <div className="p-4 flex flex-col gap-4">
                {/* Row 1: Form, Strength, Frequency */}
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-[10px] font-bold text-[#7a7a7a] uppercase tracking-wider block mb-1">Form</label>
                    <select 
                      value={form} 
                      onChange={(e) => setForm(e.target.value)}
                      className="w-full bg-white border border-[#c4c4c4] rounded-md px-2.5 py-1.5 text-xs text-[#1a1a1a] focus:outline-none"
                    >
                      <option>Tablet</option>
                      <option>Capsule</option>
                      <option>Syrup</option>
                      <option>Injection</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-[#7a7a7a] uppercase tracking-wider block mb-1">Strength *</label>
                    <select 
                      value={strength}
                      onChange={(e) => setStrength(e.target.value)}
                      className="w-full bg-[#fbeeeb] border border-[#b5402f] rounded-md px-2.5 py-1.5 text-xs text-[#1a1a1a] font-semibold focus:outline-none"
                    >
                      <option>40 mg</option>
                      <option>20 mg</option>
                      <option>80 mg</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-[#7a7a7a] uppercase tracking-wider block mb-1">Frequency *</label>
                    <select 
                      value={frequency}
                      onChange={(e) => setFrequency(e.target.value)}
                      className="w-full bg-[#fbeeeb] border border-[#b5402f] rounded-md px-2.5 py-1.5 text-xs text-[#1a1a1a] focus:outline-none"
                    >
                      <option value="">Select…</option>
                      <option value="1-0-0">1-0-0 (Once daily)</option>
                      <option value="1-0-1">1-0-1 (Twice daily)</option>
                      <option value="1-1-1">1-1-1 (Thrice daily)</option>
                    </select>
                  </div>
                </div>

                {/* Row 2: When, Duration, Qty */}
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-[10px] font-bold text-[#7a7a7a] uppercase tracking-wider block mb-1">When</label>
                    <select 
                      value={when}
                      onChange={(e) => setWhen(e.target.value)}
                      className="w-full bg-white border border-[#c4c4c4] rounded-md px-2.5 py-1.5 text-xs text-[#1a1a1a] focus:outline-none"
                    >
                      <option>Before food</option>
                      <option>After food</option>
                      <option>With food</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-[#7a7a7a] uppercase tracking-wider block mb-1">Duration</label>
                    <select 
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="w-full bg-white border border-[#c4c4c4] rounded-md px-2.5 py-1.5 text-xs text-[#1a1a1a] focus:outline-none"
                    >
                      <option value="">Select…</option>
                      <option value="5 days">5 days</option>
                      <option value="7 days">7 days</option>
                      <option value="14 days">14 days</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-[#7a7a7a] uppercase tracking-wider block mb-1">Qty</label>
                    <input 
                      type="text" 
                      readOnly 
                      value={duration ? parseInt(duration) * 1 + ' tabs' : 'auto'} 
                      className="w-full bg-[#f6f7f8] border border-[#c4c4c4] rounded-md px-2.5 py-1.5 text-xs text-gray-500"
                    />
                  </div>
                </div>

                {/* Row 3: Instructions & Add Button */}
                <div className="flex gap-3 items-end">
                  <div className="flex-1">
                    <label className="text-[10px] font-bold text-[#7a7a7a] uppercase tracking-wider block mb-1">Instructions to patient</label>
                    <input 
                      type="text" 
                      value={instructions}
                      onChange={(e) => setInstructions(e.target.value)}
                      placeholder="e.g. take with water, avoid lying down…" 
                      className="w-full bg-white border border-[#c4c4c4] rounded-md px-2.5 py-1.5 text-xs text-[#1a1a1a]"
                    />
                  </div>
                  <button 
                    onClick={handleAddDrug}
                    className="bg-[#1a1a1a] text-white font-bold text-xs rounded-md px-5 py-2 hover:bg-black transition-colors shrink-0"
                  >
                    Add to Rx
                  </button>
                </div>

                {/* Requirement warning */}
                {(!frequency || !duration) && (
                  <div className="bg-[#fbeeeb] border border-[#e3b3a8] rounded px-2.5 py-1 text-[10px] text-[#b5402f] font-medium self-start">
                    ● ~6 fields to set per drug · {(!frequency && !duration) ? '2' : '1'} still required
                  </div>
                )}
              </div>
            </div>

            {/* CURRENT PRESCRIPTION TABLE */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="font-bold text-xs text-[#7a7a7a] uppercase tracking-wider">Current prescription</span>
                <span className="bg-[#1a1a1a] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">{rxList.length}</span>
              </div>

              <div className="border border-[#c4c4c4] rounded-lg overflow-hidden bg-white">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#f6f7f8] border-b border-[#c4c4c4] text-[#9a9a9a] font-bold uppercase text-[9.5px]">
                    <tr>
                      <th className="p-2.5">Medicine</th>
                      <th className="p-2.5">Dosage</th>
                      <th className="p-2.5">Duration</th>
                      <th className="p-2.5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {rxList.map((item) => (
                      <tr key={item.id} className={item.hasAllergyConflict ? 'bg-amber-50/50' : ''}>
                        <td className="p-2.5">
                          <span className="font-bold text-[#333]">{item.name}</span>
                          {item.hasAllergyConflict && (
                            <span className="ml-2 text-[10px] text-[#b5402f] font-semibold">— added earlier</span>
                          )}
                        </td>
                        <td className="p-2.5 text-[#333]">{item.dosage}</td>
                        <td className="p-2.5 text-[#333]">{item.duration}</td>
                        <td className="p-2.5 text-right flex justify-end gap-2 text-gray-400">
                          <button className="hover:text-black">✎</button>
                          <button 
                            onClick={() => setRxList(rxList.filter(i => i.id !== item.id))} 
                            className="hover:text-red-600"
                          >
                            ✕
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Passive Allergy Warning */}
              <div className="bg-[#fbf6e9] border-l-4 border-[#c9a23a] border rounded-md p-3 text-xs text-[#6b521f]">
                <p className="font-bold mb-0.5">Allergy alert exists, but is passive:</p>
                <p className="text-[#8a6d2f] leading-relaxed">
                  Amoxicillin conflicts with the patient's Penicillin allergy. Traditional EMRs warn — but still let you save. The catch depends on the doctor noticing.
                </p>
              </div>
            </div>
          </main>

          {/* COLUMN 3: RIGHT SPEED TOOLS */}
          <aside className="w-72 bg-[#f6f7f8] p-4 flex flex-col gap-4 overflow-y-auto shrink-0">
            <h3 className="font-bold text-xs text-[#7a7a7a] uppercase tracking-wider border-b border-[#c4c4c4] pb-2">
              Speed tools
            </h3>

            {/* RX TEMPLATES */}
            <div className="bg-white border border-[#c4c4c4] border-dashed rounded-lg p-3 flex flex-col gap-2.5">
              <div className="flex items-center gap-1.5 font-bold text-xs text-[#7a7a7a] uppercase">
                <span>▣</span>
                <span>Rx templates</span>
              </div>

              {[
                { name: 'Acidity / GERD', desc: 'Pantoprazole 40 · Sucralfate syrup · diet advice' },
                { name: 'URI / Cold', desc: 'Cetirizine · Paracetamol · steam' },
                { name: 'Hypertension f/u', desc: 'Telmisartan 40 · Amlodipine 5' }
              ].map((tpl) => (
                <div key={tpl.name} className="bg-[#f6f7f8] border border-[#c4c4c4] rounded-md p-2 flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-[#1a1a1a]">{tpl.name}</span>
                    <button 
                      onClick={() => handleLoadTemplate(tpl.name)}
                      className="border border-[#1a1a1a] rounded px-2 py-0.5 text-[10px] font-bold hover:bg-gray-200"
                    >
                      Load
                    </button>
                  </div>
                  <p className="text-[10px] text-[#7a7a7a]">{tpl.desc}</p>
                </div>
              ))}

              <button className="bg-white border border-[#c4c4c4] rounded-md py-1.5 text-xs text-[#7a7a7a] hover:bg-gray-50 mt-1">
                ＋ Save current Rx as template
              </button>
            </div>

            {/* FAVOURITE DRUGS */}
            <div className="bg-white border border-[#c4c4c4] rounded-lg p-3 flex flex-col gap-2">
              <div className="flex items-center gap-1.5 font-bold text-xs text-[#7a7a7a] uppercase mb-1">
                <span>★</span>
                <span>Favourite drugs</span>
              </div>

              {[
                { name: 'Pantoprazole', strength: '40 mg' },
                { name: 'Paracetamol', strength: '650 mg' },
                { name: 'Cetirizine', strength: '10 mg' },
                { name: 'Azithromycin', strength: '500 mg' }
              ].map((fav) => (
                <div 
                  key={fav.name}
                  onClick={() => { setSelectedDrug(fav.name); setStrength(fav.strength); }}
                  className="border border-[#dcdcdc] rounded-md px-2.5 py-1.5 flex items-center justify-between text-xs cursor-pointer hover:bg-gray-50"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[#9a9a9a] text-xs">★</span>
                    <span className="text-[#1a1a1a] font-medium">{fav.name}</span>
                  </div>
                  <span className="text-[10px] text-[#9a9a9a]">{fav.strength}</span>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="bg-[#fbf6e9] border-l-4 border-[#c9a23a] border rounded p-2.5 text-[10px] text-[#6b521f]">
              <p className="font-bold">This is the real competition.</p>
              <p className="text-[#8a6d2f]">A doctor fast with templates can write a common Rx in under a minute.</p>
            </div>
          </aside>
        </div>

        {/* FOOTER ACTION BAR */}
        <footer className="bg-[#f6f7f8] border-t border-[#1a1a1a] px-4 py-3 flex items-center justify-between">
          <p className="text-xs text-[#7a7a7a]">
            Doctor reviews the typed Rx, then prints. Each section above was filled by hand.
          </p>

          <div className="flex items-center gap-3">
            <button className="bg-white border border-[#c4c4c4] rounded-lg px-4 py-1.5 text-xs text-[#7a7a7a] hover:bg-gray-50">
              Save draft
            </button>
            <button className="bg-white border border-[#1a1a1a] font-bold text-xs rounded-lg px-4 py-1.5 hover:bg-gray-100">
              Preview
            </button>
            <button className="bg-[#1a1a1a] text-white font-bold text-xs rounded-lg px-5 py-1.5 hover:bg-black transition-colors shadow">
              Save & print Rx
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
