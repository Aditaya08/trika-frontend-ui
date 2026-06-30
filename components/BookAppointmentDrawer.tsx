'use client';

import React, { useState } from 'react';

interface BookAppointmentDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  patientName: string;
  patientUhid: string;
  patientDetail: string;
  onConfirm?: (bookingDetails: any) => void;
}

export default function BookAppointmentDrawer({
  isOpen,
  onClose,
  patientName,
  patientUhid,
  patientDetail,
  onConfirm
}: BookAppointmentDrawerProps) {
  const [selectedDoctor, setSelectedDoctor] = useState('Dr. Sharma');
  const [bookingDate, setBookingDate] = useState('2026-06-21');
  const [bookingTime, setBookingTime] = useState('10:00 AM');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onConfirm) {
      onConfirm({
        doctor: selectedDoctor,
        date: bookingDate,
        time: bookingTime,
        notes
      });
    }
    onClose();
  };

  const timeslots = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'];

  return (
    <div className="fixed inset-0 z-50 flex justify-end font-sans">
      {/* Left side gray overlay mask */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-[1px] transition-opacity cursor-pointer animate-fade-in"
      />

      {/* Right Drawer (Book Appointment side panel) */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 animate-slide-in select-none border-l border-[#cdcdcd]">
        
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#cdcdcd] bg-white">
          <h2 className="text-[17px] font-bold text-gray-900 leading-tight">Book Appointment</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-black transition-colors"
            aria-label="Close drawer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Body Form */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          
          {/* Patient Card Details (matching Image 4) */}
          <div className="bg-[#fffdfa] border border-[#dcd6c8]/60 rounded-xl p-4 flex flex-col gap-1.5 shadow-sm">
            <span className="bg-[#fcf1fa] border border-[#ecc1eb] text-[#ca4bc4] text-[8.5px] font-bold px-1.5 py-0.5 rounded-md uppercase tracking-wider self-start select-none">
              ● New Patient
            </span>
            <h3 className="font-bold text-base text-gray-900">{patientName}</h3>
            <p className="text-xs text-gray-500 font-semibold">{patientUhid} · {patientDetail}</p>
          </div>

          {/* Doctor Select dropdown */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10.5px] font-bold text-gray-500 uppercase tracking-wide">Select Doctor</label>
            <select 
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              className="w-full bg-[#fcfbf9] border border-[#cdcdcd] rounded-xl px-3 py-2 text-xs font-semibold text-gray-800 focus:outline-none focus:border-[#306cd2] transition-colors"
            >
              <option>Dr. Sharma (General Medicine)</option>
              <option>Dr. Mehta (Cardiology)</option>
              <option>Dr. Bose (Ayurveda)</option>
            </select>
          </div>

          {/* Date Picker */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10.5px] font-bold text-gray-500 uppercase tracking-wide">Select Date</label>
            <input 
              type="date" 
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
              className="w-full bg-[#fcfbf9] border border-[#cdcdcd] rounded-xl px-3 py-2 text-xs font-semibold text-gray-800 focus:outline-none focus:border-[#306cd2] transition-colors"
            />
          </div>

          {/* Slots grid */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10.5px] font-bold text-gray-500 uppercase tracking-wide">Available Slots</label>
            <div className="grid grid-cols-3 gap-2">
              {timeslots.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setBookingTime(time)}
                  className={`py-2 px-1 text-center text-xs font-semibold border rounded-lg transition-all ${
                    bookingTime === time 
                      ? 'bg-[#306cd2] border-[#306cd2] text-white shadow-sm font-bold' 
                      : 'bg-white border-[#cdcdcd] text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Reason/Notes */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10.5px] font-bold text-gray-500 uppercase tracking-wide">Notes / Reason</label>
            <textarea 
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Regular consult for acidity..."
              rows={3}
              className="w-full bg-[#fcfbf9] border border-[#cdcdcd] rounded-xl px-3 py-2 text-xs text-gray-800 focus:outline-none focus:border-[#306cd2] transition-all resize-none"
            />
          </div>

          {/* Submit buttons */}
          <div className="mt-auto flex flex-col gap-2 pt-4 border-t border-[#efe9da]">
            <button
              type="submit"
              className="w-full bg-[#306cd2] hover:bg-[#2c65cc] text-white rounded-xl py-2.5 text-xs font-bold transition-all shadow-md active:scale-95"
            >
              Confirm Appointment
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full bg-white border border-[#cdcdcd] text-gray-700 hover:bg-gray-50 rounded-xl py-2.5 text-xs font-bold transition-colors"
            >
              Cancel
            </button>
          </div>

        </form>

      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.25s ease-out forwards;
        }
        .animate-slide-in {
          animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}
