'use client';

import React from 'react';

export default function LetterheadView() {
  return (
    <div className="w-full flex flex-col gap-4 text-[#23302e]">
      {/* Description & Status Banner */}
      <div className="bg-[#f4f3ed] border border-[#efe9da] rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-sm">
        <div>
          <h2 className="font-serif font-semibold text-lg text-[#23302e]">
            The Letterhead — a prescription pad that listens
          </h2>
          <p className="text-xs text-[#6b756f] mt-1">
            Voice-to-text, no AI. The screen looks and prints like the doctor's own letterhead, so a paper-trained doctor feels at home on the first day. They speak; it lands in clean type on the page.
          </p>
        </div>

        {/* Legend pills */}
        <div className="flex flex-wrap items-center gap-2 text-xs shrink-0">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#1f4f7a] text-white rounded font-medium text-[11px]">
            filled by voice ("the pen")
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#0f5d55] text-white rounded font-medium text-[11px]">
            active section
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-[#9aa39d] border-dashed text-[#6b756f] rounded text-[11px]">
            optional · add only if needed
          </span>
        </div>
      </div>

      {/* THE SHEET (AUTHENTIC PAPER LETTERHEAD) */}
      <div className="mx-auto w-full max-w-4xl bg-[#fbfaf5] border border-[#efe9da] rounded-lg shadow-2xl overflow-hidden p-8 flex flex-col gap-6 font-serif">
        {/* CLINIC HEADER */}
        <div className="border-b-2 border-[#0f5d55] pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0f5d55] to-[#0c3f3a] text-white flex items-center justify-center font-bold text-xl shadow-inner">
              ✚
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#0c3f3a] tracking-tight">Sharma Care Clinic</h1>
              <p className="text-xs font-sans text-[#6b756f] mt-0.5">
                General Medicine & Diabetology · Jaipur
              </p>
            </div>
          </div>

          <div className="text-right font-sans">
            <h3 className="font-serif font-bold text-base text-[#23302e]">Dr. A. Sharma</h3>
            <p className="text-xs text-[#6b756f]">MBBS, MD (Medicine) Reg. No. RAJ/2009/14872</p>
          </div>
        </div>

        {/* DATE & TOKEN METADATA STRIP */}
        <div className="flex flex-wrap items-center justify-between text-xs font-sans text-[#6b756f] border-b border-dashed border-[#d9d2c4] pb-2">
          <div className="flex items-center gap-6">
            <span>Date: <strong className="text-[#23302e] font-semibold">15 Jun 2026</strong></span>
            <span>Token: <strong className="text-[#23302e] font-semibold">#18</strong></span>
            <span>Visit: <strong className="text-[#23302e] font-semibold">Follow-up</strong></span>
          </div>
        </div>

        {/* PATIENT LINE */}
        <div className="bg-[#f4f1e8] border border-dashed border-[#9aa39d] rounded-lg p-3 flex flex-wrap items-center justify-between text-xs font-sans">
          <div className="flex items-center gap-2">
            <span className="uppercase text-[#9aa39d] font-semibold text-[10px] tracking-wider">Name:</span>
            <span className="font-serif font-semibold text-[#23302e] text-sm">Rakesh Kumar</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="uppercase text-[#9aa39d] font-semibold text-[10px] tracking-wider">Age / Sex:</span>
            <span className="font-serif font-semibold text-[#23302e] text-sm">47 / M</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="uppercase text-[#9aa39d] font-semibold text-[10px] tracking-wider">UHID:</span>
            <span className="font-serif font-semibold text-[#23302e] text-sm">4471-203</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="uppercase text-[#9aa39d] font-semibold text-[10px] tracking-wider">Allergy:</span>
            <span className="font-sans font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded text-[11px]">
              Penicillin
            </span>
          </div>
        </div>

        {/* LETTERHEAD BODY CONTENT SECTIONS */}
        <div className="flex flex-col gap-6 pt-2">
          {/* Chief Complaints Section */}
          <div className="flex flex-col gap-1">
            <h4 className="font-sans text-xs font-bold text-[#0f5d55] uppercase tracking-wider border-b border-[#efe9da] pb-1">
              C/O (Chief Complaints)
            </h4>
            <p className="text-sm text-[#23302e] leading-relaxed italic pl-2 border-l-2 border-[#1f4f7a]">
              Heartburn and chest burning sensation for 3 days. Aggravated after taking meals. Mild regurgitation.
            </p>
          </div>

          {/* Clinical Examination */}
          <div className="flex flex-col gap-1">
            <h4 className="font-sans text-xs font-bold text-[#0f5d55] uppercase tracking-wider border-b border-[#efe9da] pb-1">
              O/E (On Examination)
            </h4>
            <p className="text-sm text-[#23302e] leading-relaxed pl-2 border-l-2 border-[#1f4f7a]">
              P/A: Soft, tenderness present in epigastrium. No organomegaly. Chest clear, S1 S2 normal.
            </p>
          </div>

          {/* Diagnosis */}
          <div className="flex flex-col gap-1">
            <h4 className="font-sans text-xs font-bold text-[#0f5d55] uppercase tracking-wider border-b border-[#efe9da] pb-1">
              Diagnosis
            </h4>
            <p className="text-sm font-bold text-[#23302e] pl-2 border-l-2 border-[#0f5d55]">
              GERD (Gastroesophageal Reflux Disease) / Acid Dyspepsia
            </p>
          </div>

          {/* Rx Medication Table */}
          <div className="flex flex-col gap-2">
            <h4 className="font-sans text-xs font-bold text-[#0f5d55] uppercase tracking-wider border-b border-[#efe9da] pb-1 flex items-center justify-between">
              <span>Rx (Prescription)</span>
              <span className="text-[10px] text-gray-500 font-normal lowercase">printed in clean type</span>
            </h4>

            <div className="border border-[#d9d2c4] rounded overflow-hidden font-sans">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#f4f1e8] text-[#0c3f3a] font-bold border-b border-[#d9d2c4]">
                  <tr>
                    <th className="p-2.5">Medicine Name</th>
                    <th className="p-2.5">Dosage</th>
                    <th className="p-2.5">Timing</th>
                    <th className="p-2.5">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#efe9da] bg-white text-[#23302e]">
                  <tr>
                    <td className="p-2.5 font-bold">1. Tab. Pantoprazole 40mg</td>
                    <td className="p-2.5">1 Tablet</td>
                    <td className="p-2.5">Before Breakfast</td>
                    <td className="p-2.5">14 Days</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold">2. Syr. Sucralfate (10 ml)</td>
                    <td className="p-2.5">2 Teaspoons</td>
                    <td className="p-2.5">Thrice daily after food</td>
                    <td className="p-2.5">7 Days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Advice */}
          <div className="flex flex-col gap-1">
            <h4 className="font-sans text-xs font-bold text-[#0f5d55] uppercase tracking-wider border-b border-[#efe9da] pb-1">
              Advice & Follow-Up
            </h4>
            <ul className="list-disc list-inside text-xs font-sans text-[#23302e] space-y-1 pl-2">
              <li>Avoid oily, spicy, and heavy meals at night.</li>
              <li>Maintain an upright posture for at least 2 hours after eating.</li>
              <li>Follow up after 14 days or earlier if severe chest pain occurs.</li>
            </ul>
          </div>
        </div>

        {/* DOCTOR SIGNATURE AREA */}
        <div className="mt-12 pt-6 border-t border-[#efe9da] flex justify-between items-end font-sans text-xs text-[#6b756f]">
          <p>Generated via Trika EMR Voice-to-Text</p>
          <div className="text-right">
            <div className="h-10 font-serif italic text-lg text-[#0c3f3a] pr-4">Dr. A. Sharma</div>
            <p className="border-t border-gray-400 pt-1 font-semibold">Doctor's Signature</p>
          </div>
        </div>
      </div>
    </div>
  );
}
