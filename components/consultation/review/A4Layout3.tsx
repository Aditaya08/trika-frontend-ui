'use client';

import React from 'react';

export default function A4Layout3() {
  return (
    <div className="w-full flex justify-center p-6 bg-gray-200 min-h-screen overflow-x-auto">
      {/* Exact A4 Canvas (866px x 1250px) matching Figma Node 219:4214 */}
      <div 
        className="bg-white border border-[#c4c4c4] relative w-[866px] h-[1250px] shadow-2xl shrink-0 font-sans text-[#1a1a1a]" 
        data-node-id="219:4214" 
        data-name="A4 - 3"
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

        {/* FULL WIDTH CHIEF COMPLAINT CARD */}
        <div className="absolute bg-white border border-[#c9c9c9] h-[187px] left-[23px] right-[33px] rounded-[12px] top-[220px] overflow-hidden shadow-sm" data-node-id="219:4233">
          <div className="h-[41px] px-3.5 flex items-center justify-between border-b border-[#c9c9c9] bg-gray-50">
            <span className="font-['Cormorant_Garamond',serif] font-bold text-[#1a1a1a] text-[17px] tracking-[0.4px]">Chief Complaint</span>
            <span className="text-[#9a9a9a] text-[10px] font-medium">captured ✓</span>
          </div>
          <div className="p-4 text-[15px] text-[#111] leading-[23px] relative">
            <p className="mb-0 font-medium">Patient presents with retrosternal burning & acid regurgitation for 3 days.</p>
            <p className="text-gray-600 text-xs mt-1">Aggravated post-meals. Denies dyspnea, diaphoresis, or radiating pain to arm/jaw.</p>
            <button className="absolute right-3 bottom-3 w-[22px] h-[22px] rounded-full bg-[#efefef] flex items-center justify-center text-[#555] text-xs">✎</button>
          </div>
        </div>

        {/* DUAL INVESTIGATION CARDS */}
        <div className="absolute bg-white border border-[#c9c9c9] h-[187px] left-[23px] right-[calc(50%+111.5px)] rounded-[12px] top-[634px] overflow-hidden shadow-sm" data-node-id="219:4243">
          <div className="h-[41px] px-3.5 flex items-center justify-between border-b border-[#dcdcdc] bg-gray-50">
            <span className="font-['Cormorant_Garamond',serif] font-bold text-[#1a1a1a] text-[17px] tracking-[0.4px]">Investigations</span>
            <span className="text-[#9a9a9a] text-[10px] font-medium">captured ✓</span>
          </div>
          <div className="p-4 text-[14px] text-[#222] leading-[22px] relative">
            <p className="font-bold">1. 12-Lead ECG</p>
            <p className="text-gray-600 text-xs mt-1">2. Complete Blood Count & Stool Occult Blood Test.</p>
            <button className="absolute right-3 bottom-3 w-[22px] h-[22px] rounded-full bg-[#efefef] flex items-center justify-center text-[#555] text-xs">✎</button>
          </div>
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
