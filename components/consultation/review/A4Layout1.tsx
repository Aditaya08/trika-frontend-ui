'use client';

import React from 'react';

export default function A4Layout1() {
  return (
    <div className="w-full flex justify-center p-6 bg-gray-200 min-h-screen overflow-x-auto">
      {/* Exact A4 Canvas (925px x 1350px) matching Figma Node 219:4524 */}
      <div 
        className="bg-white border border-[#c4c4c4] relative w-[925px] h-[1350px] shadow-2xl shrink-0 font-sans text-[#1a1a1a]" 
        data-node-id="219:4524" 
        data-name="A4 - 1"
      >
        {/* LETTERHEAD HEADER */}
        <div className="-translate-x-1/2 absolute border-[#c4c4c4] border-b-2 border-solid h-[114px] left-1/2 top-[-1px] w-[925px] px-6 py-5 flex justify-between items-start" data-node-id="219:4529">
          <div className="flex gap-[12px] items-start">
            <div className="bg-[#464646] relative rounded-[11px] shrink-0 size-[46px] flex items-center justify-center text-white shadow-md">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div className="flex flex-col gap-[2px]">
              <h1 className="font-['Spectral',serif] font-bold text-[#454545] text-[20px] tracking-[-0.25px] leading-[21px]">
                Sharma Care Clinic
              </h1>
              <p className="font-['Inter',sans-serif] font-medium text-[#767676] text-[12px] leading-[16px]">
                General Medicine & Diabetology<br />
                B-12, Tonk, Road, Jaipur, Rajasthan 302015
              </p>
            </div>
          </div>

          <div className="text-right flex flex-col gap-[2px]">
            <h2 className="font-['Spectral',serif] font-bold text-[#2c2c2c] text-[18px] leading-[20.25px]">
              Dr. Anil Sharma
            </h2>
            <div className="font-['Inter',sans-serif] font-medium text-[#767676] text-[12px] leading-[16px]">
              <p>MBBS, MD (General Medicine), Reg. No.: RMC/2009/14872</p>
              <p>Consult hours: Mon–Sat, 10 AM – 2 PM</p>
              <p>Phone: +91 98290 00000, care@sharmaclinic.in</p>
            </div>
          </div>
        </div>

        {/* PATIENT METADATA BAR */}
        <div className="absolute left-[24px] right-[24px] top-[135px] flex items-center justify-between font-['Inter',sans-serif]">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-[#1a1a1a] text-[16px]">Rakesh Kumar</span>
            <span className="text-[#9a9a9a]">| 47yrs / Male</span>
            <span className="border border-[#c4c4c4] rounded px-2 py-0.5 text-[10.5px] text-[#7a7a7a]">
              UHID: 4471-203
            </span>
            <span className="bg-[#fbf6e9] border border-[#c9a23a] rounded px-2 py-0.5 text-[10.3px] font-bold text-[#8a6d2f]">
              ⚠ Allergy: Penicillin
            </span>
          </div>
          <div className="text-[#7a7a7a] text-[13px] flex gap-4">
            <span>Date: 15 Jun 2026</span>
            <span>OPD · <strong className="font-semibold text-[#7a7a7a]">Token #18</strong></span>
            <span>Visit: <strong className="font-semibold text-[#7a7a7a]">Follow-up</strong></span>
          </div>
        </div>

        {/* RICH MOCK CLINICAL DATA CARDS */}
        {/* 1. Chief Complaint */}
        <div className="absolute bg-white border border-[#c9c9c9] h-[154px] left-[24px] right-[calc(50%+7.5px)] rounded-[12px] top-[220px] overflow-hidden shadow-sm">
          <div className="h-[41px] px-3.5 flex items-center justify-between border-b border-[#c9c9c9] bg-gray-50">
            <span className="font-['Cormorant_Garamond',serif] font-bold text-[#1a1a1a] text-[17px] tracking-[0.4px]">Chief Complaint</span>
            <span className="text-[#9a9a9a] text-[10px] font-medium">captured ✓</span>
          </div>
          <div className="p-3.5 text-[14px] text-[#111] leading-[22px] relative">
            <p className="font-medium">Persistent epigastric burning & acid reflux for 3 days.</p>
            <p className="text-gray-600 text-xs mt-1">Exacerbated post-meals. No breathlessness or cardiac history.</p>
            <button className="absolute right-3 bottom-3 w-[22px] h-[22px] rounded-full bg-[#efefef] flex items-center justify-center text-[#555] text-xs">✎</button>
          </div>
        </div>

        {/* 2. Findings / Exam */}
        <div className="absolute bg-white border border-[#c9c9c9] h-[154px] left-[calc(50%+8.5px)] right-[23px] rounded-[12px] top-[220px] overflow-hidden shadow-sm">
          <div className="h-[41px] px-3.5 flex items-center justify-between border-b border-[#c9c9c9] bg-gray-50">
            <span className="font-['Cormorant_Garamond',serif] font-bold text-[#1a1a1a] text-[17px] tracking-[0.4px]">Findings/ Exam</span>
            <span className="text-[#9a9a9a] text-[10px] font-medium">captured ✓</span>
          </div>
          <div className="p-3.5 text-[14px] text-[#111] leading-[22px] relative">
            <p>Abdomen soft, epigastric tenderness present (+).</p>
            <p className="text-gray-600 text-xs mt-1">BP: 130/85 mmHg · Pulse: 78 bpm · SpO2: 98%</p>
            <button className="absolute right-3 bottom-3 w-[22px] h-[22px] rounded-full bg-[#efefef] flex items-center justify-center text-[#555] text-xs">✎</button>
          </div>
        </div>

        {/* 3. Diagnosis */}
        <div className="absolute bg-white border border-[#c9c9c9] h-[154px] left-[24px] right-[calc(50%+7.5px)] rounded-[12px] top-[390px] overflow-hidden shadow-sm">
          <div className="h-[41px] px-3.5 flex items-center justify-between border-b border-[#c9c9c9] bg-gray-50">
            <span className="font-['Cormorant_Garamond',serif] font-bold text-[#1a1a1a] text-[17px] tracking-[0.4px]">Diagnosis</span>
            <span className="text-[#9a9a9a] text-[10px] font-medium">captured ✓</span>
          </div>
          <div className="p-3.5 text-[14px] text-[#111] leading-[22px] relative">
            <p className="font-bold text-blue-950">Gastroesophageal Reflux Disease (GERD)</p>
            <p className="text-gray-600 text-xs mt-1">Associated with Mild Non-Ulcer Dyspepsia</p>
            <button className="absolute right-3 bottom-3 w-[22px] h-[22px] rounded-full bg-[#efefef] flex items-center justify-center text-[#555] text-xs">✎</button>
          </div>
        </div>

        {/* 4. Investigations */}
        <div className="absolute bg-white border border-[#c9c9c9] h-[154px] left-[calc(50%+8.5px)] right-[23px] rounded-[12px] top-[390px] overflow-hidden shadow-sm">
          <div className="h-[41px] px-3.5 flex items-center justify-between border-b border-[#c9c9c9] bg-gray-50">
            <span className="font-['Cormorant_Garamond',serif] font-bold text-[#1a1a1a] text-[17px] tracking-[0.4px]">Investigations</span>
            <span className="text-[#9a9a9a] text-[10px] font-medium">captured ✓</span>
          </div>
          <div className="p-3.5 text-[13px] text-[#111] leading-[20px] relative">
            <p>1. 12-Lead ECG (Rule out atypical cardiac pain)</p>
            <p>2. Complete Blood Count (CBC) & Stool Routine</p>
            <button className="absolute right-3 bottom-3 w-[22px] h-[22px] rounded-full bg-[#efefef] flex items-center justify-center text-[#555] text-xs">✎</button>
          </div>
        </div>

        {/* 5. Prescription Rx */}
        <div className="absolute bg-white border border-[#c9c9c9] h-[144px] left-[23px] right-[34px] rounded-[12px] top-[560px] overflow-hidden shadow-sm">
          <div className="h-[41px] px-3.5 flex items-center justify-between border-b border-[#c9c9c9] bg-gray-50">
            <span className="font-['Cormorant_Garamond',serif] font-bold text-[#1a1a1a] text-[17px] tracking-[0.4px]">Prescription (Rx)</span>
            <span className="text-[#9a9a9a] text-[10px] font-medium">captured ✓</span>
          </div>
          <div className="p-3.5 text-[14px] text-[#222] relative flex flex-col gap-2">
            <div className="flex items-center justify-between border-b border-gray-100 pb-1">
              <span className="font-bold">1. Tab. Pantoprazole 40 mg (PPI · before food)</span>
              <span className="font-semibold text-gray-700">1—0—0 × 14 days</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-bold">2. Syr. Sucralfate 10 ml (after meals)</span>
              <span className="font-semibold text-gray-700">1—1—1 × 7 days</span>
            </div>
            <button className="absolute right-3 bottom-3 w-[22px] h-[22px] rounded-full bg-[#efefef] flex items-center justify-center text-[#555] text-xs">✎</button>
          </div>
        </div>

        {/* 6. Advise */}
        <div className="absolute bg-white border border-[#c9c9c9] h-[154px] left-[24px] right-[calc(25%+125.25px)] rounded-[12px] top-[720px] overflow-hidden shadow-sm">
          <div className="h-[41px] px-3.5 flex items-center justify-between border-b border-[#c9c9c9] bg-gray-50">
            <span className="font-['Cormorant_Garamond',serif] font-bold text-[#1a1a1a] text-[17px] tracking-[0.4px]">Advise</span>
            <span className="text-[#9a9a9a] text-[10px] font-medium">captured ✓</span>
          </div>
          <div className="p-3.5 text-[13px] text-[#111] leading-[20px] relative">
            <p>Avoid spicy/oily foods & late dinner.</p>
            <p className="text-gray-600 text-xs mt-1">Elevate head during sleep (2 hrs gap after meals).</p>
            <button className="absolute right-3 bottom-3 w-[22px] h-[22px] rounded-full bg-[#efefef] flex items-center justify-center text-[#555] text-xs">✎</button>
          </div>
        </div>

        {/* 7. Follow up */}
        <div className="absolute bg-white border border-[#c9c9c9] h-[154px] left-[calc(50%+121.5px)] right-[23px] rounded-[12px] top-[720px] overflow-hidden shadow-sm">
          <div className="h-[41px] px-3.5 flex items-center justify-between border-b border-[#c9c9c9] bg-gray-50">
            <span className="font-['Cormorant_Garamond',serif] font-bold text-[#1a1a1a] text-[17px] tracking-[0.4px]">Follow up</span>
            <span className="text-[#9a9a9a] text-[10px] font-medium">captured ✓</span>
          </div>
          <div className="p-3.5 text-[13px] text-[#111] leading-[20px] relative">
            <p>Review after 14 days with ECG report.</p>
            <p className="text-gray-600 text-xs mt-1">Return earlier if acute retrosternal pain develops.</p>
            <button className="absolute right-3 bottom-3 w-[22px] h-[22px] rounded-full bg-[#efefef] flex items-center justify-center text-[#555] text-xs">✎</button>
          </div>
        </div>

        {/* EXACT SIGNATURE FOOTER */}
        <div className="absolute bottom-[24px] right-[40px] text-center w-[180px]">
          <div className="font-['Caveat',cursive] text-[32px] text-[#1c1c1c] -rotate-3 mb-1 font-normal leading-none">
            A. Sharma
          </div>
          <div className="border-t border-[#9aa39d] pt-1 text-[11px] text-[#3a3a3a] font-['Inter',sans-serif]">
            Doctor's signature
          </div>
        </div>
      </div>
    </div>
  );
}
