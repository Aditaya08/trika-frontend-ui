'use client';

import React from 'react';

export default function A4Layout4() {
  return (
    <div className="w-full flex justify-center p-6 bg-gray-200 min-h-screen overflow-x-auto">
      {/* Exact A4 Canvas (866px x 1250px) matching Figma Node 219:4488 */}
      <div 
        className="bg-white border border-[#c4c4c4] relative w-[866px] h-[1250px] shadow-2xl shrink-0 font-sans text-[#1a1a1a]" 
        data-node-id="219:4488" 
        data-name="A4 - 4"
      >
        {/* LETTERHEAD HEADER */}
        <div className="-translate-x-1/2 absolute border-[#c4c4c4] border-b-2 border-solid h-[114px] left-1/2 top-[-1px] w-[866px] px-6 py-5 flex justify-between items-start">
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
        <div className="absolute left-[23px] right-[24px] top-[137px] flex items-center justify-between font-['Inter',sans-serif]">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-[#1a1a1a] text-[16px]">Rakesh Kumar</span>
            <span className="text-[#9a9a9a]">| 47yrs / Male</span>
            <span className="border border-[#c7c7c7] rounded px-2.5 py-0.5 text-[11px] text-[#7a7a7a]">
              UHID: 4471-203
            </span>
          </div>
          <div className="text-[#7a7a7a] text-[13px] flex gap-4">
            <span>Date: 15 Jun 2026</span>
            <span>OPD · <strong className="font-semibold text-[#7a7a7a]">Token #18</strong></span>
            <span>Visit: <strong className="font-semibold text-[#7a7a7a]">Follow-up</strong></span>
          </div>
        </div>

        {/* SECTION 1: CHIEF COMPLAINT */}
        <div className="absolute left-[27px] top-[210px] font-['Cormorant_Garamond',serif] font-bold text-[#1a1a1a] text-[19px] tracking-[0.4px]">
          Chief Complaint
        </div>
        <div className="absolute font-['Inter',sans-serif] font-normal left-[29px] right-[calc(50%+69.5px)] text-[#111] text-[15px] top-[260px]">
          <p className="leading-[23px] mb-0 font-medium">Heartburn & epigastric burning sensation for 3 days.</p>
          <p className="leading-[23px] text-gray-600 text-xs mt-1">Aggravated by meals. No dyspnea or diaphoresis.</p>
        </div>

        {/* SECTION 2: FINDINGS / EXAM */}
        <div className="absolute left-[27px] top-[400px] font-['Cormorant_Garamond',serif] font-bold text-[#1a1a1a] text-[19px] tracking-[0.4px]">
          Findings / Exam
        </div>
        <div className="absolute font-['Inter',sans-serif] font-normal left-[29px] right-[calc(50%+69.5px)] text-[#111] text-[15px] top-[450px]">
          <p className="leading-[23px] mb-0 font-medium">Abdomen soft, mild epigastric tenderness (+).</p>
          <p className="leading-[23px] text-gray-600 text-xs mt-1">Bowel sounds present. Vitals: BP 130/85 mmHg, Pulse 78 bpm.</p>
        </div>

        {/* SECTION 3: INVESTIGATIONS */}
        <div className="absolute left-[27px] top-[610px] font-['Cormorant_Garamond',serif] font-bold text-[#1a1a1a] text-[19px] tracking-[0.4px]">
          Investigations
        </div>
        <div className="absolute font-['Inter',sans-serif] font-normal left-[29px] right-[calc(50%+145.5px)] text-[#222] text-[15px] top-[660px]">
          <p className="leading-[23px] font-medium">1. 12-Lead Electrocardiogram (ECG)</p>
          <p className="leading-[23px] text-gray-600 text-xs mt-1">2. Serum Electrolytes & Complete Blood Count (CBC)</p>
        </div>

        {/* DISCLAIMER AND SIGNATURE FOOTER */}
        <div className="absolute bottom-[24px] left-[34px] right-[34px] flex justify-between items-end">
          <div className="text-[10.5px] text-[#9aa39d] font-['Inter',sans-serif] leading-[15.75px]">
            <p className="mb-0">Generated on Sharma Care Clinic letterhead · This prescription is</p>
            <p>valid with the doctor's signature. Reviewed before printing.</p>
          </div>

          <div className="text-center w-[180px]">
            <div className="font-['Caveat',cursive] text-[32px] text-[#1f4f7a] -rotate-3 mb-1 font-normal leading-none">
              A. Sharma
            </div>
            <div className="border-t border-[#9aa39d] pt-1 text-[11px] text-[#6b756f] font-['Inter',sans-serif]">
              Doctor's signature
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
