'use client';

import React from 'react';

interface CodrivaPrintPreviewProps {
  data: any;
  onBack: () => void;
}

export default function CodrivaPrintPreview({ data, onBack }: CodrivaPrintPreviewProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full min-h-screen bg-gray-200 text-[#2c332e] font-sans pb-12">
      
      {/* TOP CONTROL BAR (no-print) */}
      <div className="bg-white border-b border-[#cdcdcd] py-4 px-6 flex items-center justify-between no-print shadow-sm">
        <button
          onClick={onBack}
          className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
        >
          ← Back to Edit
        </button>
        <span className="text-xs text-gray-500 font-semibold">
          Print Preview Mode · Standard A4 Dimensions
        </span>
        <button
          onClick={handlePrint}
          className="bg-[#1b1b1a] hover:bg-black text-white px-5 py-2 rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-2"
        >
          <span>🖨️</span> Print Prescription
        </button>
      </div>

      {/* PRINT CANVAS */}
      <div className="flex justify-center pt-8 px-4">
        {/* A4 Printable container matching Figma Node sizes (850px width x 1200px height roughly) */}
        <div className="bg-white border border-[#c4c4c4] relative w-[850px] min-h-[1100px] p-10 shadow-2xl shrink-0 font-sans text-gray-900 flex flex-col justify-between print-sheet">
          
          {/* Main Prescription content */}
          <div className="flex flex-col gap-6">
            
            {/* HOSPITAL HEADER */}
            <div className="border-b-2 border-[#466a5c] pb-5 flex justify-between items-start">
              <div className="flex flex-col gap-1 text-left">
                <h1 className="font-serif font-extrabold text-2xl tracking-tight text-gray-900">
                  {data.hospitalName || 'SN Super Speciality Hospital'}
                </h1>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">
                  {data.hospitalAddress || 'Hanumangarh - Suratgarh Bypass, Sriganganagar, Rajasthan 335001'}<br />
                  Web: {data.hospitalWeb || 'www.snhospitals.com'} · Email: {data.hospitalEmail || 'care@nethra.in'}
                </p>
              </div>

              <div className="text-right flex flex-col gap-0.5 font-sans">
                <h3 className="font-serif font-bold text-lg text-gray-900">
                  {data.doctorName || 'Dr.S. Rao, MS (Ophthalmology)'}
                </h3>
                <p className="text-xs text-gray-500 font-semibold">
                  Reg. {data.doctorReg || 'RMC/2011/20641'}
                </p>
              </div>
            </div>

            {/* DATE & PATIENT LINE */}
            <div className="flex items-center justify-between text-xs text-gray-500 border-b border-dashed border-gray-200 pb-2">
              <div className="flex gap-6 font-semibold">
                <span>Name: <strong className="text-gray-900 font-bold">{data.patientName || 'Rakesh Kumar'}</strong></span>
                <span>Age/Sex: <strong className="text-gray-900 font-semibold">{data.patientAgeSex || '47/M'}</strong></span>
                <span>Mobile: <strong className="text-gray-900 font-semibold">{data.patientMobile || '9911223321'}</strong></span>
                <span>OPD: <strong className="text-gray-900 font-semibold">{data.patientToken || 'OPD: Token #18'}</strong></span>
              </div>
              <div className="font-bold text-gray-800">
                Date: {data.date || '15 Jun 2026'}
              </div>
            </div>

            {/* CLINICAL ENTRIES */}
            <div className="flex flex-col gap-8 pt-4">
              
              {/* CHIEF COMPLAINTS */}
              <div className="flex flex-col gap-2 text-left">
                <h4 className="text-[11.5px] font-bold text-[#466a5c] uppercase tracking-wider">
                  Chief Complaint
                </h4>
                <ul className="list-disc pl-5 space-y-1.5 text-[13px] text-gray-800">
                  {(data.chiefComplaints || []).map((item: string, idx: number) => (
                    <li key={idx} className="font-semibold">{item}</li>
                  ))}
                </ul>
              </div>

              {/* DIAGNOSIS */}
              <div className="flex flex-col gap-2 text-left border-t border-gray-100 pt-4">
                <h4 className="text-[11.5px] font-bold text-[#466a5c] uppercase tracking-wider">
                  Diagnosis
                </h4>
                <p className="text-[13px] font-bold text-gray-900 pl-1">
                  Ocular Inflammation / Suspected Conjunctivitis
                </p>
              </div>

              {/* PRESCRIPTION (Rx) */}
              <div className="flex flex-col gap-3 text-left border-t border-gray-100 pt-4">
                <h4 className="text-[12px] font-bold text-[#466a5c] uppercase tracking-wider flex items-center gap-1.5">
                  <span className="text-base font-serif">℞</span> Prescription
                </h4>
                
                <div className="flex flex-col gap-4 pl-1">
                  <div className="flex flex-col gap-0.5">
                    <div className="flex justify-between items-start">
                      <span className="font-bold text-[14px] text-gray-900">1. Tab. Moxifloxacin drops 0.5%</span>
                      <span className="font-bold text-gray-800 text-xs">1 drop — 4 times a day × 5 days</span>
                    </div>
                    <span className="text-[11px] text-gray-500 italic">instill in both eyes</span>
                  </div>

                  <div className="flex flex-col gap-0.5 border-t border-gray-100 pt-3">
                    <div className="flex justify-between items-start">
                      <span className="font-bold text-[14px] text-gray-900">2. Syp. Carboxymethyl Cellulose 1%</span>
                      <span className="font-bold text-gray-800 text-xs">1 drop — 4 times a day × 2 weeks</span>
                    </div>
                    <span className="text-[11px] text-gray-500 italic">lubricant drops</span>
                  </div>
                </div>
              </div>

              {/* ADVICE */}
              <div className="flex flex-col gap-2 text-left border-t border-gray-100 pt-4">
                <h4 className="text-[11.5px] font-bold text-[#466a5c] uppercase tracking-wider">
                  Advice / Instructions
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-[12px] text-gray-600">
                  <li>Avoid rubbing the eyes. Wash hands frequently with soap and water.</li>
                  <li>Clean eyelids with warm damp cotton cloth if crusted.</li>
                  <li>Wear protective glasses when outdoors.</li>
                </ul>
              </div>

            </div>

          </div>

          {/* SIGNATURE & FOOTER NOTE */}
          <div className="mt-16 border-t border-gray-100 pt-6 flex justify-between items-end text-xs text-gray-400 select-none">
            <p className="italic text-[10px] text-left leading-normal max-w-sm">
              Generated on Sharma Care Clinic letterhead · This prescription is valid with the doctor's signature. Reviewed before printing.
            </p>

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
      </div>

      <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            background-color: white !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .print-sheet {
            border: none !important;
            box-shadow: none !important;
            width: 100% !important;
            height: auto !important;
            min-height: 0 !important;
            padding: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
