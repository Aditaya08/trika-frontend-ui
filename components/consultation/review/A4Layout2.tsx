'use client';

import React from 'react';

export default function A4Layout2() {
  return (
    <div className="w-full flex justify-center p-6 bg-gray-200 min-h-screen overflow-x-auto">
      {/* Exact A4 Canvas (925px x 1350px) matching Figma Node 219:4622 */}
      <div 
        className="bg-white border border-[#c4c4c4] relative w-[925px] h-[1350px] shadow-2xl shrink-0 font-sans text-[#1a1a1a]" 
        data-node-id="219:4622" 
        data-name="A4 - 2"
      >
        {/* LETTERHEAD HEADER */}
        <div className="-translate-x-1/2 absolute border-[#c4c4c4] border-b-2 border-solid h-[114px] left-1/2 top-[-1px] w-[925px] px-6 py-5 flex justify-between items-start">
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

        {/* PATIENT STRIP */}
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

        {/* TWO-COLUMN FLOW WITH RICH MOCK DATA */}
        {/* Row 1: Chief Complaint & Findings/Exam */}
        <div className="absolute left-[36px] top-[230px] font-['Cormorant_Garamond',serif] font-bold text-[#1a1a1a] text-[17px] tracking-[0.4px]">
          Chief Complaint
        </div>
        <div className="absolute left-[38px] top-[274px] text-[15px] text-[#111] leading-[23px] w-[418px] border-b border-[#c4c4c4] border-dashed pb-6">
          <p className="mb-0 font-medium">Epigastric burning & acid regurgitation × 3 days.</p>
          <p className="text-gray-600 text-xs mt-1">Exacerbated by meals. No shortness of breath or cardiac radiating pain.</p>
        </div>

        <div className="absolute left-[calc(50%+20.5px)] top-[230px] font-['Cormorant_Garamond',serif] font-bold text-[#1a1a1a] text-[17px] tracking-[0.4px]">
          Findings/ Exam
        </div>
        <div className="absolute left-[calc(50%+22.5px)] top-[274px] text-[15px] text-[#111] leading-[23px] w-[418px] border-b border-[#c4c4c4] border-dashed pb-6">
          <p className="mb-0">Abdomen soft, mild epigastric tenderness on palpation (+).</p>
          <p className="text-gray-600 text-xs mt-1">Bowel sounds present. Vitals stable: BP 130/85 mmHg, Pulse 78 bpm.</p>
        </div>

        {/* Row 2: Diagnosis & Investigations */}
        <div className="absolute left-[36px] top-[400px] font-['Cormorant_Garamond',serif] font-bold text-[#1a1a1a] text-[17px] tracking-[0.4px]">
          Diagnosis
        </div>
        <div className="absolute left-[38px] top-[444px] text-[15px] text-[#111] leading-[23px] w-[418px] border-b border-[#c4c4c4] border-dashed pb-6">
          <p className="mb-0 font-bold text-blue-950">GERD / Non-Ulcer Acid Dyspepsia</p>
          <p className="text-gray-600 text-xs mt-1">ICD-10 K21.9 · Prescribed proton-pump inhibitor therapy.</p>
        </div>

        <div className="absolute left-[calc(50%+20.5px)] top-[400px] font-['Cormorant_Garamond',serif] font-bold text-[#1a1a1a] text-[17px] tracking-[0.4px]">
          Investigations
        </div>
        <div className="absolute left-[calc(50%+22.5px)] top-[444px] text-[15px] text-[#111] leading-[23px] w-[418px] border-b border-[#c4c4c4] border-dashed pb-6">
          <p className="mb-0">1. 12-Lead Electrocardiogram (ECG)</p>
          <p className="text-gray-600 text-xs mt-1">2. Serum Electrolytes & Complete Blood Count (CBC)</p>
        </div>

        {/* Row 3: Prescription Rx */}
        <div className="absolute left-[35px] top-[570px] font-['Cormorant_Garamond',serif] font-bold text-[#1a1a1a] text-[17px] tracking-[0.4px]">
          Prescription (Rx)
        </div>
        <div className="absolute left-[37px] top-[614px] text-[15px] text-[#222] leading-[23px] w-[864px] border-b border-[#c4c4c4] border-dashed pb-6 flex justify-between items-center">
          <div>
            <p className="font-bold">1. Tab. Pantoprazole 40 mg (PPI · before breakfast)</p>
            <p className="text-xs text-gray-600">2. Syr. Sucralfate 10 ml (thrice daily after food)</p>
          </div>
          <span className="font-semibold text-gray-800">1—0—0 × 14 days</span>
        </div>

        {/* Row 4: Advise & Follow Up */}
        <div className="absolute left-[38px] top-[730px] font-['Cormorant_Garamond',serif] font-bold text-[#1a1a1a] text-[17px] tracking-[0.4px]">
          Advise
        </div>
        <div className="absolute left-[38px] top-[774px] text-[15px] text-[#111] leading-[23px] w-[418px]">
          <p className="mb-0">Avoid spicy, oily food and caffeine.</p>
          <p className="text-gray-600 text-xs mt-1">Elevate bed head end. Maintain 2 hr gap between dinner and sleep.</p>
        </div>

        <div className="absolute left-[calc(50%+133.5px)] top-[730px] font-['Cormorant_Garamond',serif] font-bold text-[#1a1a1a] text-[17px] tracking-[0.4px]">
          Follow up
        </div>
        <div className="absolute left-[calc(50%+135.5px)] top-[774px] text-[15px] text-[#111] leading-[23px] w-[418px]">
          <p className="mb-0 font-medium">Review in 14 days with ECG reports.</p>
          <p className="text-gray-600 text-xs mt-1">Return immediately if acute chest pressure occurs.</p>
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
