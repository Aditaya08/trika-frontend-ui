'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Logo from '@/components/Logo';
import BookAppointmentDrawer from '@/components/BookAppointmentDrawer';

interface PatientQueueItem {
  id: string;
  name: string;
  uhid: string;
  doctor: string;
  specialty: string;
  detail: string;
  status: 'Waiting - Intake' | 'Intake';
  timeBadge?: string;
  note?: string;
  isEmergency?: boolean;
  actionText: 'Start Intake' | 'Resume Intake' | 'view (read-only)';
  actionType: 'filled' | 'outline' | 'text';
}

export default function NurseDashboardPage() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<'All' | 'Waiting' | 'In progress' | 'This Month'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Drawer state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activePatientForBooking, setActivePatientForBooking] = useState<{
    name: string;
    uhid: string;
    detail: string;
  } | null>(null);

  // Dropdown states for each card
  const [activeDropdownId, setActiveDropdownId] = useState<string | null>(null);

  const [queue, setQueue] = useState<PatientQueueItem[]>([
    {
      id: '1',
      name: 'John Doe',
      uhid: 'TRI-2026-000123',
      doctor: 'Dr Sharma',
      specialty: 'General Med',
      detail: '34/Male',
      status: 'Waiting - Intake',
      actionText: 'Start Intake',
      actionType: 'filled'
    },
    {
      id: '2',
      name: 'John Doe',
      uhid: 'TRI-2026-000123',
      doctor: 'Dr Sharma',
      specialty: 'General Med',
      detail: '34/Male',
      status: 'Intake',
      timeBadge: '12 min',
      actionText: 'view (read-only)',
      actionType: 'text'
    },
    {
      id: '3',
      name: 'Imran Khan',
      uhid: 'TRI-2026-000123',
      doctor: 'Dr Sharma',
      specialty: 'General Med',
      detail: '34/Male',
      status: 'Waiting - Intake',
      timeBadge: '12 min',
      actionText: 'Start Intake',
      actionType: 'filled'
    },
    {
      id: '4',
      name: 'Vikram Rao',
      uhid: 'TRI-2026-000123',
      doctor: 'Dr Sharma',
      specialty: 'General Med',
      detail: '34/Male',
      status: 'Intake',
      note: 'You started - draft saved',
      actionText: 'Resume Intake',
      actionType: 'outline'
    },
    {
      id: '5',
      name: 'John Doe',
      uhid: 'TRI-2026-000123',
      doctor: 'Dr Sharma',
      specialty: 'General Med',
      detail: '34/Male',
      status: 'Waiting - Intake',
      timeBadge: '8 min',
      isEmergency: true,
      actionText: 'Start Intake',
      actionType: 'filled'
    }
  ]);

  const handleActionClick = (pat: PatientQueueItem) => {
    // Navigate to Intake Form with query params
    router.push(
      `/nurse/intake?id=${pat.id}&name=${encodeURIComponent(pat.name)}&uhid=${pat.uhid}&detail=${encodeURIComponent(pat.detail)}&isEmergency=${pat.isEmergency || false}`
    );
  };

  const openBookingDrawer = (pat: PatientQueueItem) => {
    setActivePatientForBooking({
      name: pat.name,
      uhid: pat.uhid,
      detail: pat.detail
    });
    setIsDrawerOpen(true);
    setActiveDropdownId(null);
  };

  const filteredQueue = queue.filter((pat) => {
    // Text search query filter
    const matchesSearch = 
      pat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pat.uhid.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    // Tab filter
    if (activeFilter === 'Waiting') return pat.status === 'Waiting - Intake';
    if (activeFilter === 'In progress') return pat.status === 'Intake';
    return true;
  });

  return (
    <div className="flex h-screen bg-[#eae8e6] text-[#1b1b1a] overflow-hidden font-sans">
      
      {/* COLLAPSED SIDEBAR (matching Image 1 narrow sidebar) */}
      <aside className="w-16 h-screen bg-white border-r border-[#cdcdcd] flex flex-col items-center justify-between shrink-0 select-none py-4">
        <div className="flex flex-col gap-6 items-center w-full">
          {/* Logo container */}
          <div className="w-9 h-9 rounded-lg bg-[#1b1b1a] text-white flex items-center justify-center transition-transform hover:rotate-12 cursor-pointer shadow-sm">
            <Logo className="w-5 h-5 text-[#f8f2e4]" />
          </div>
          
          <div className="w-full border-t border-[#cdcdcd]/60" />

          {/* Navigation Home Icon */}
          <button className="w-11 h-11 bg-[#f0ede6] border border-[#dcd6c8] rounded-xl flex items-center justify-center text-[#1b1b1a] transition-all hover:bg-gray-100">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </button>

          {/* Documents Icon */}
          <button className="w-11 h-11 bg-white hover:bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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

      {/* RIGHT WORK AREA */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        
        {/* HEADER */}
        <header className="h-14 bg-white border-b border-[#cdcdcd] px-8 flex items-center justify-between shrink-0 select-none">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold font-sans text-gray-900 tracking-tight">Home</h1>
            <button className="p-1 text-gray-400 hover:text-black rounded hover:bg-gray-100 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative w-80">
              <svg className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.637 10.637Z" />
              </svg>
              <input
                type="text"
                placeholder="Search Patient (name, UHID, mobile...)"
                className="w-full bg-[#f9f7f3] border border-[#cdcdcd] rounded-xl pl-9 pr-4 py-2 text-xs text-[#1b1b1a] placeholder-[#727272] focus:outline-none focus:border-[#306cd2] transition-colors"
              />
            </div>

            <div className="relative cursor-pointer">
              <svg className="w-6 h-6 text-gray-600 hover:text-black transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-md animate-pulse">
                3
              </span>
            </div>

            <div className="flex items-center gap-1 cursor-pointer select-none">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-[#cdcdcd] bg-gray-200">
                <div className="w-full h-full bg-[#306cd2] text-white font-bold flex items-center justify-center text-xs">
                  AK
                </div>
              </div>
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>
        </header>

        {/* WORKSPACE CONTENT CONTAINER */}
        <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-8">
          
          {/* WELCOME BAR */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 leading-tight">Hi Akash!</h2>
            <div className="flex items-center gap-4 mt-1 text-xs text-gray-500 font-semibold">
              <span>Friday, 21 June 2026</span>
              <span>Updated 2 min ago</span>
            </div>
          </div>

          {/* SUMMARY METRICS CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 select-none">
            <div className="bg-white p-5 rounded-2xl border border-[#cdcdcd] shadow-sm flex flex-col gap-2 transition-transform hover:-translate-y-0.5 hover:shadow-md">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Waiting</span>
              <span className="text-3xl font-extrabold text-gray-900">8</span>
              <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-[#ca4bc4]">
                ● for intake
              </span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#cdcdcd] shadow-sm flex flex-col gap-2 transition-transform hover:-translate-y-0.5 hover:shadow-md">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">In progress</span>
              <span className="text-3xl font-extrabold text-gray-900">2</span>
              <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-[#ca4bc4]">
                ● being seen
              </span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#cdcdcd] shadow-sm flex flex-col gap-2 transition-transform hover:-translate-y-0.5 hover:shadow-md">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Completed today</span>
              <span className="text-3xl font-extrabold text-gray-900">14</span>
              <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-[#ca4bc4]">
                ● handed to doctor
              </span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#cdcdcd] shadow-sm flex flex-col gap-2 transition-transform hover:-translate-y-0.5 hover:shadow-md">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Emergency</span>
              <span className="text-3xl font-extrabold text-gray-900">1</span>
              <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-[#ca4bc4]">
                ● priority
              </span>
            </div>
          </div>

          {/* QUEUE TABLE / LIST */}
          <div className="bg-white border border-[#cdcdcd] rounded-2xl shadow-sm flex flex-col">
            
            {/* Queue header & filter controls */}
            <div className="px-6 py-4 border-b border-[#cdcdcd] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 select-none">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-gray-900">Waiting for Intake</h3>
              </div>

              <div className="flex items-center gap-6">
                {/* Filter Tabs */}
                <div className="flex bg-[#f0ede6] p-1 border border-[#dcd6c8] rounded-xl text-xs font-bold">
                  {(['All', 'Waiting', 'In progress', 'This Month'] as const).map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-4 py-1.5 rounded-lg transition-all ${
                        activeFilter === filter 
                          ? 'bg-white text-gray-900 shadow-sm font-bold border border-[#dcd6c8]/50' 
                          : 'text-gray-500 hover:text-gray-900'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>

                {/* Quick find input */}
                <div className="relative">
                  <span className="text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 text-sm">⌕</span>
                  <input 
                    type="text" 
                    placeholder="Quick find......."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8 pr-3 py-1.5 bg-[#fcfbf9] border border-[#cdcdcd] rounded-lg text-xs placeholder-gray-400 outline-none w-56 focus:border-[#306cd2] transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Patients List Grid */}
            <div className="p-6 flex flex-col gap-4 overflow-y-auto">
              {filteredQueue.map((pat) => (
                <div 
                  key={pat.id}
                  className={`bg-white border rounded-xl p-4 flex items-center justify-between shadow-sm relative ${
                    pat.isEmergency ? 'border-red-600 border-2 scale-[1.01]' : 'border-[#cdcdcd]'
                  }`}
                >
                  {/* Left Column info */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full border border-[#cdcdcd] bg-gray-50 flex items-center justify-center text-gray-400 text-sm select-none">
                      👤
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-gray-900">{pat.name}</span>
                        <span className="text-xs text-gray-500 font-semibold">| {pat.detail}</span>
                        {pat.isEmergency && (
                          <span className="bg-red-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-md uppercase tracking-wider select-none animate-pulse">
                            ● Emergency
                          </span>
                        )}
                      </div>
                      <p className="text-[11.5px] font-semibold text-gray-600 mt-1 select-none">
                        {pat.uhid} · <span className="font-bold text-gray-800">{pat.doctor} / {pat.specialty}</span>
                      </p>
                      
                      {/* Badges strip below info */}
                      <div className="flex items-center gap-2 mt-2 select-none">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                          pat.status === 'Waiting - Intake' 
                            ? 'bg-[#fbf6e9] border border-[#c9a23a] text-[#8a6d2f]' 
                            : 'bg-[#eef5f0] border border-[#b4d2bf] text-[#2e7d32]'
                        }`}>
                          {pat.status === 'Waiting - Intake' ? 'Waiting - Intake' : 'Intake'}
                        </span>
                        
                        {pat.timeBadge && (
                          <span className="inline-flex items-center gap-1 bg-gray-100 border border-gray-200 rounded-md px-2 py-0.5 text-[10px] text-gray-500">
                            ⏱ {pat.timeBadge}
                          </span>
                        )}

                        {pat.note && (
                          <span className="text-[10px] text-gray-400 italic">
                            {pat.note}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Actions buttons on the right */}
                  <div className="flex items-center gap-4 relative">
                    {pat.actionType === 'filled' && (
                      <button
                        onClick={() => handleActionClick(pat)}
                        className="bg-[#306cd2] hover:bg-[#2c65cc] text-white px-4 py-1.5 rounded-lg text-xs font-bold shadow-sm active:scale-95 transition-transform"
                      >
                        {pat.actionText}
                      </button>
                    )}

                    {pat.actionType === 'outline' && (
                      <button
                        onClick={() => handleActionClick(pat)}
                        className="bg-white hover:bg-gray-50 text-[#306cd2] border border-[#306cd2] px-4 py-1.5 rounded-lg text-xs font-bold shadow-sm active:scale-95 transition-transform"
                      >
                        {pat.actionText}
                      </button>
                    )}

                    {pat.actionType === 'text' && (
                      <button
                        onClick={() => handleActionClick(pat)}
                        className="text-gray-400 hover:text-black font-semibold text-xs transition-colors"
                      >
                        {pat.actionText}
                      </button>
                    )}

                    {/* Ellipsis Menu button */}
                    <div className="relative">
                      <button 
                        onClick={() => setActiveDropdownId(activeDropdownId === pat.id ? null : pat.id)}
                        className="p-1 hover:bg-gray-100 rounded text-gray-400 hover:text-black transition-colors"
                        aria-label="Actions menu"
                      >
                        •••
                      </button>

                      {/* Dropdown popup */}
                      {activeDropdownId === pat.id && (
                        <div className="absolute right-0 top-7 bg-white border border-[#cdcdcd] rounded-xl shadow-lg z-20 py-1 w-44">
                          <button
                            type="button"
                            onClick={() => openBookingDrawer(pat)}
                            className="w-full text-left px-4 py-2 text-xs font-semibold hover:bg-gray-50 text-gray-700"
                          >
                            📅 Book Appointment
                          </button>
                          <button
                            type="button"
                            onClick={() => setActiveDropdownId(null)}
                            className="w-full text-left px-4 py-2 text-xs font-semibold hover:bg-gray-50 text-gray-700 border-t border-gray-100"
                          >
                            ⚙ Patient Details
                          </button>
                        </div>
                      )}
                    </div>

                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>

      </div>

      {/* Book Appointment Drawer Overlay */}
      {activePatientForBooking && (
        <BookAppointmentDrawer
          isOpen={isDrawerOpen}
          onClose={() => {
            setIsDrawerOpen(false);
            setActivePatientForBooking(null);
          }}
          patientName={activePatientForBooking.name}
          patientUhid={activePatientForBooking.uhid}
          patientDetail={activePatientForBooking.detail}
          onConfirm={(details) => {
            alert(`Appointment Confirmed with ${details.doctor} on ${details.date} at ${details.time}`);
          }}
        />
      )}

    </div>
  );
}
