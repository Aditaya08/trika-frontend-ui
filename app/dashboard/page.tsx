'use client';

import React, { useState } from 'react';
import SideBar from '@/components/SideBar';
import AppointmentForm from '@/components/AppointmentForm';

interface Patient {
  id: string;
  name: string;
  type: string;
  uhid: string;
  mobile: string;
  date: string;
  doctor: string;
  paymentStatus: 'Paid' | 'Unpaid' | 'Refunded';
}

interface AlertItem {
  id: string;
  message: string;
  time: string;
  type: 'danger' | 'warning';
  actionLabel: string;
}

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  time: string;
  status: 'Online' | 'Offline';
  queue: string;
}

export default function DashboardPage() {
  const [isAddPatientOpen, setIsAddPatientOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'All' | 'Waiting' | 'In Consultation' | 'Completed'>('All');
  const [isReloading, setIsReloading] = useState(false);

  const [patients, setPatients] = useState<Patient[]>([
    {
      id: '1',
      name: 'Rahul Sharma',
      type: 'Returning patient',
      uhid: 'TRI-2026-000123',
      mobile: '98765 43210',
      date: '21 Jun 2026',
      doctor: 'Dr Sharma',
      paymentStatus: 'Paid',
    },
    {
      id: '2',
      name: 'Anita Verma',
      type: 'New patient',
      uhid: 'TRI-2026-000124',
      mobile: '98123 45678',
      date: '21 Jun 2026',
      doctor: 'Dr Mehta',
      paymentStatus: 'Unpaid',
    },
    {
      id: '3',
      name: 'Vikram Singh',
      type: 'Returning patient',
      uhid: 'TRI-2026-000125',
      mobile: '99887 76655',
      date: '21 Jun 2026',
      doctor: 'Dr Bose',
      paymentStatus: 'Paid',
    },
    {
      id: '4',
      name: 'Priyanka Sen',
      type: 'New patient',
      uhid: 'TRI-2026-000126',
      mobile: '97654 32109',
      date: '21 Jun 2026',
      doctor: 'Dr Sharma',
      paymentStatus: 'Refunded',
    }
  ]);

  const [doctors] = useState<Doctor[]>([
    {
      id: '1',
      name: 'Dr Sharma',
      specialty: 'General Med',
      time: '09:00 AM - 06:00 PM',
      status: 'Online',
      queue: '1 in queue',
    },
    {
      id: '2',
      name: 'Dr Mehta',
      specialty: 'Cardiology',
      time: '09:00 AM - 06:00 PM',
      status: 'Online',
      queue: '3 in queue',
    },
    {
      id: '3',
      name: 'Dr Bose',
      specialty: 'Ayurveda',
      time: '09:00 AM - 06:00 PM',
      status: 'Offline',
      queue: '1 in queue',
    }
  ]);

  const [alerts] = useState<AlertItem[]>([
    {
      id: '1',
      message: 'Anita Verma waiting 34 min',
      time: 'just now',
      type: 'danger',
      actionLabel: 'View in queue',
    },
    {
      id: '2',
      message: '₹4,200 pending · 5 invoices',
      time: 'just now',
      type: 'warning',
      actionLabel: 'Collect',
    },
    {
      id: '3',
      message: 'Dr Bose unavailable — 1 affected',
      time: 'just now',
      type: 'danger',
      actionLabel: 'Reschedule',
    },
    {
      id: '4',
      message: '2 refund requests pending',
      time: 'just now',
      type: 'danger',
      actionLabel: 'Review',
    }
  ]);

  const handleSavePatient = (data: any) => {
    const randomUHID = `TRI-2026-000${Math.floor(100 + Math.random() * 900)}`;
    const newPatient: Patient = {
      id: String(patients.length + 1),
      name: `${data.firstName} ${data.lastName}`.trim(),
      type: 'New patient',
      uhid: randomUHID,
      mobile: data.mobile,
      date: '21 Jun 2026',
      doctor: data.doctor || 'Dr Sharma',
      paymentStatus: 'Paid',
    };
    setPatients([newPatient, ...patients]);
  };

  const triggerReload = () => {
    setIsReloading(true);
    setTimeout(() => setIsReloading(false), 800);
  };

  return (
    <div className="flex h-screen bg-[#eae8e6]">
      <SideBar />

      <div className="flex-1 flex flex-col overflow-hidden relative">
        {isReloading && (
          <div className="absolute inset-0 bg-[#eae8e6]/60 z-50 flex items-center justify-center backdrop-blur-[1px]">
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 border-4 border-[#306cd2] border-t-transparent rounded-full animate-spin"></div>
              <span className="text-sm font-semibold text-[#1b1b1a]">Updating dashboard...</span>
            </div>
          </div>
        )}

        <header className="h-14 bg-[#fffdfb] border-b border-[#cdcdcd] px-8 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-semibold font-sans text-[#1b1b1a]">Home</h1>
            <button
              onClick={triggerReload}
              className="p-1.5 text-gray-500 hover:text-black rounded hover:bg-gray-100 transition-colors"
              aria-label="Reload dashboard"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89M9 11l3-3 3 3" />
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <svg className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search Patient (name, UHID, mobile...)"
                className="w-80 pl-9 pr-4 py-2 border border-[#cdcdcd] rounded-md text-sm outline-none focus:border-[#306cd2] focus:ring-1 focus:ring-[#306cd2] bg-white transition-all"
              />
            </div>

            <div className="relative cursor-pointer group">
              <svg className="w-6 h-6 text-gray-700 group-hover:text-black transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </div>

            <div className="flex items-center gap-1 cursor-pointer">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-[#cdcdcd] bg-gray-200">
                <img src="/assets/avatar.png" alt="Doctor profile" className="w-full h-full object-cover" />
              </div>
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </header>

        <div className="bg-[#306cd2] border-y border-[#d2cdc1] py-4 px-8 flex items-center justify-between shrink-0">
          <div>
            <h2 className="text-xl font-bold text-white">Hi Akash!</h2>
            <div className="flex gap-4 mt-1 text-xs text-white/50">
              <span>Friday, 21 June 2026</span>
              <span className="font-semibold text-white/75">Updated 2 min ago</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAddPatientOpen(true)}
              className="bg-white hover:bg-gray-50 text-[#1b1b1a] px-5 py-2.5 rounded shadow-sm text-sm font-semibold flex items-center gap-2 transition-transform active:scale-95"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Add Patient
            </button>
            <button
              onClick={() => alert('Emergency protocol activated')}
              className="bg-[#b51515] hover:bg-[#991212] text-white px-5 py-2.5 rounded shadow-sm text-sm font-semibold flex items-center gap-2 transition-transform active:scale-95 animate-pulse"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Emergency
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            
            {/* Stats Panel */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-[#fffdfb] p-4 rounded-lg border border-[#cdcdcd] shadow-[0px_0px_4px_rgba(0,0,0,0.08)] flex flex-col gap-2 transition-all hover:-translate-y-0.5 hover:shadow-md">
                <span className="text-xs font-medium text-gray-500 uppercase">Appointments</span>
                <span className="text-3xl font-semibold text-[#1b1b1a]">32</span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-medium bg-[#f9e8ff] text-[#ba00ab] w-max">
                  12 Completed
                </span>
              </div>

              <div className="bg-[#fffdfb] p-4 rounded-lg border border-[#cdcdcd] shadow-[0px_0px_4px_rgba(0,0,0,0.08)] flex flex-col gap-2 transition-all hover:-translate-y-0.5 hover:shadow-md">
                <span className="text-xs font-medium text-gray-500 uppercase">Patient Waiting</span>
                <span className="text-3xl font-semibold text-[#1b1b1a]">7</span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-medium bg-[#f9e8ff] text-[#ba00ab] w-max">
                  7 Waiting
                </span>
              </div>

              <div className="bg-[#fffdfb] p-4 rounded-lg border border-[#cdcdcd] shadow-[0px_0px_4px_rgba(0,0,0,0.08)] flex flex-col gap-2 transition-all hover:-translate-y-0.5 hover:shadow-md">
                <span className="text-xs font-medium text-gray-500 uppercase">Payments Pending</span>
                <span className="text-3xl font-semibold text-[#1b1b1a]">₹4,300</span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-medium bg-[#f9e8ff] text-[#ba00ab] w-max">
                  5 Invoices
                </span>
              </div>

              <div className="bg-[#fffdfb] p-4 rounded-lg border border-[#cdcdcd] shadow-[0px_0px_4px_rgba(0,0,0,0.08)] flex flex-col gap-2 transition-all hover:-translate-y-0.5 hover:shadow-md">
                <span className="text-xs font-medium text-gray-500 uppercase">Emergency</span>
                <span className="text-3xl font-semibold text-[#1b1b1a]">1</span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-medium bg-[#f9e8ff] text-[#ba00ab] w-max">
                  Active Now
                </span>
              </div>
            </div>

            {/* My OPDs Table */}
            <div className="bg-white border border-[#c5c0b4] rounded-md shadow-sm overflow-hidden flex flex-col">
              <div className="px-6 py-4 border-b border-[#cdcdcd] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h3 className="text-lg font-bold text-[#1b1b1a]">My OPDs</h3>
                
                <div className="flex border border-[#cdcdcd] rounded-md overflow-hidden bg-[#faf8f5] text-xs">
                  {(['All', 'Waiting', 'In Consultation', 'Completed'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 font-medium transition-colors ${
                        activeTab === tab ? 'bg-[#306cd2] text-white' : 'text-gray-600 hover:text-black hover:bg-gray-100'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-[#cdcdcd] text-xs font-bold text-gray-500 uppercase">
                      <th className="px-6 py-3">Patient Name</th>
                      <th className="px-6 py-3">UHID</th>
                      <th className="px-6 py-3">Phone</th>
                      <th className="px-6 py-3">Doctor</th>
                      <th className="px-6 py-3">Payment</th>
                      <th className="px-6 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#cdcdcd] text-sm">
                    {patients.map((pat) => (
                      <tr key={pat.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="font-semibold text-gray-900">{pat.name}</div>
                          <div className="text-[11px] text-[#727272]">{pat.type}</div>
                        </td>
                        <td className="px-6 py-4 text-gray-500">{pat.uhid}</td>
                        <td className="px-6 py-4 text-gray-500">{pat.mobile}</td>
                        <td className="px-6 py-4 font-medium text-gray-600">{pat.doctor}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              pat.paymentStatus === 'Paid' ? 'bg-green-100 text-green-800' : pat.paymentStatus === 'Unpaid' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                            }`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${
                              pat.paymentStatus === 'Paid' ? 'bg-green-600' : pat.paymentStatus === 'Unpaid' ? 'bg-yellow-600' : 'bg-red-600'
                            }`} />
                            {pat.paymentStatus}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end items-center gap-2">
                            <button className="px-4 py-1.5 border border-[#cdcdcd] text-xs font-semibold rounded hover:bg-gray-100 transition-colors text-black">
                              Open
                            </button>
                            <button className="p-1.5 text-gray-400 hover:text-black rounded transition-colors">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          <div className="space-y-8">
            {/* Alerts Box */}
            <div className="bg-white border border-[#c5c0b4] rounded-md shadow-sm p-5 space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <h3 className="text-base font-bold text-[#1b1b1a]">Alerts</h3>
                  <span className="bg-[#f9e8ff] text-[#ba00ab] px-2 py-0.5 rounded text-[10px] font-bold">
                    3 New
                  </span>
                </div>
                <a href="#" className="text-xs font-medium text-[#1b1b1a] underline hover:text-[#5b3570]">
                  view all
                </a>
              </div>

              <div className="space-y-3">
                {alerts.map((alertItem) => (
                  <div
                    key={alertItem.id}
                    className={`bg-[#fffdfb] p-3 rounded border-l-2 shadow-sm flex items-start justify-between gap-3 ${
                      alertItem.type === 'danger' ? 'border-[#b51515]' : 'border-[#b57700]'
                    }`}
                  >
                    <div>
                      <h4 className="text-xs font-semibold text-[#1b1b1a] leading-4">{alertItem.message}</h4>
                      <span className="text-[10px] text-gray-400 mt-1 block">{alertItem.time}</span>
                    </div>
                    <button
                      onClick={() => alert(`Action: ${alertItem.actionLabel}`)}
                      className="px-2 py-1 border border-[#cdcdcd] hover:bg-gray-50 text-[10px] font-bold text-gray-700 rounded whitespace-nowrap transition-colors"
                    >
                      {alertItem.actionLabel}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Doctor Availability Box */}
            <div className="bg-white border border-[#c5c0b4] rounded-md shadow-sm p-5 space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-base font-bold text-[#1b1b1a]">Doctor Availability</h3>
                <span className="text-xs font-semibold text-[#008348] hover:underline cursor-pointer">
                  5 Available
                </span>
              </div>

              <div className="space-y-3">
                {doctors.map((doc) => (
                  <div
                    key={doc.id}
                    className="bg-[#fffdfb] p-3 border border-[#ececec] rounded shadow-sm flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden border border-[#cdcdcd] bg-gray-200 shrink-0">
                        <img src="/assets/avatar.png" alt="Doctor profile" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#1b1b1a]">{doc.name}</h4>
                        <div className="flex gap-2 text-[10px] text-[#727272] mt-0.5">
                          <span>{doc.specialty}</span>
                          <span>·</span>
                          <span className="font-semibold">{doc.time}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          doc.status === 'Online' ? 'bg-[#28a800]' : 'bg-[#727272]'
                        }`} />
                        <span className="text-xs font-medium text-[#1b1b1a]">{doc.status}</span>
                      </div>
                      <span className="text-[10px] text-[#727272] block mt-0.5">{doc.queue}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <AppointmentForm
        isOpen={isAddPatientOpen}
        onClose={() => setIsAddPatientOpen(false)}
        onSave={handleSavePatient}
      />
    </div>
  );
}
