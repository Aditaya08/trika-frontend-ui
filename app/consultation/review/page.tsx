'use client';

import React, { useState } from 'react';
import A4Layout1 from '@/components/consultation/review/A4Layout1';
import A4Layout2 from '@/components/consultation/review/A4Layout2';
import A4Layout3 from '@/components/consultation/review/A4Layout3';
import A4Layout4 from '@/components/consultation/review/A4Layout4';

export default function ReviewLetterheadsPage() {
  const [activeVariant, setActiveVariant] = useState<'a4-1' | 'a4-2' | 'a4-3' | 'a4-4'>('a4-1');

  return (
    <div className="min-h-screen bg-[#f0ede6] p-6 flex flex-col gap-6">
      {/* TOP NAVIGATION TITLE & VARIANT SWITCHER */}
      <div className="bg-white border border-[#cdcdcd] rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="bg-[#1f4f7a] text-white p-2.5 rounded-xl text-xl font-bold">
              📄
            </span>
            <div>
              <h1 className="font-serif text-2xl font-bold text-[#1b1b1a]">A4 Letterhead Review Gallery</h1>
              <p className="text-xs text-[#727272] mt-0.5">
                Subfolder Route: <code className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-800">/consultation/review</code> · Exact Replications of 4 Figma Print Wireframes
              </p>
            </div>
          </div>
        </div>

        {/* VARIANT SELECTOR BUTTONS */}
        <div className="flex flex-wrap items-center bg-[#f0ede6] p-1.5 rounded-xl border border-[#dcd6c8] text-xs font-semibold">
          <button
            onClick={() => setActiveVariant('a4-1')}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeVariant === 'a4-1'
                ? 'bg-white text-[#1b1b1a] shadow font-bold'
                : 'text-[#727272] hover:text-[#1b1b1a]'
            }`}
          >
            A4 - 1 (Boxed Cards 219-4524)
          </button>

          <button
            onClick={() => setActiveVariant('a4-2')}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeVariant === 'a4-2'
                ? 'bg-white text-[#1b1b1a] shadow font-bold'
                : 'text-[#727272] hover:text-[#1b1b1a]'
            }`}
          >
            A4 - 2 (Split Column 219-4622)
          </button>

          <button
            onClick={() => setActiveVariant('a4-3')}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeVariant === 'a4-3'
                ? 'bg-white text-[#1b1b1a] shadow font-bold'
                : 'text-[#727272] hover:text-[#1b1b1a]'
            }`}
          >
            A4 - 3 (Dual Investigation 219-4214)
          </button>

          <button
            onClick={() => setActiveVariant('a4-4')}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeVariant === 'a4-4'
                ? 'bg-white text-[#1b1b1a] shadow font-bold'
                : 'text-[#727272] hover:text-[#1b1b1a]'
            }`}
          >
            A4 - 4 (Minimal Garamond 219-4488)
          </button>
        </div>
      </div>

      {/* PRINT BANNER CONTROLS */}
      <div className="flex items-center justify-between bg-white px-6 py-3 rounded-xl border border-gray-200 text-xs">
        <span className="text-gray-600">
          Showing template preview for <strong className="text-black uppercase">{activeVariant}</strong>. Click print to generate PDF / paper printout.
        </span>
        <button
          onClick={() => window.print()}
          className="bg-[#1b1b1a] text-white px-4 py-2 rounded-lg font-bold hover:bg-black transition-colors flex items-center gap-2"
        >
          <span>🖨️</span> Print A4 Prescription
        </button>
      </div>

      {/* RENDERED A4 TEMPLATE */}
      <div className="flex-1 overflow-x-auto pb-12">
        {activeVariant === 'a4-1' && <A4Layout1 />}
        {activeVariant === 'a4-2' && <A4Layout2 />}
        {activeVariant === 'a4-3' && <A4Layout3 />}
        {activeVariant === 'a4-4' && <A4Layout4 />}
      </div>
    </div>
  );
}
