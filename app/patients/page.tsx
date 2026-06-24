'use client';

import React, { useState, useMemo } from 'react';
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

export default function PatientsPage() {
  const [isAddPatientOpen, setIsAddPatientOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Paid' | 'Unpaid' | 'Refunded'>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  
  const [sortField, setSortField] = useState<keyof Patient | ''>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const [patients, setPatients] = useState<Patient[]>([
    { id: '1', name: 'Rahul Sharma', type: 'Returning patient', uhid: 'TRI-2026-000123', mobile: '98765 43210', date: '12 Jun 2026', doctor: 'Dr Sharma', paymentStatus: 'Paid' },
    { id: '2', name: 'Anita Verma', type: 'New patient', uhid: 'TRI-2026-000124', mobile: '98123 45678', date: '15 Jun 2026', doctor: 'Dr Mehta', paymentStatus: 'Unpaid' },
    { id: '3', name: 'Vikram Singh', type: 'Returning patient', uhid: 'TRI-2026-000125', mobile: '99887 76655', date: '16 Jun 2026', doctor: 'Dr Bose', paymentStatus: 'Paid' },
    { id: '4', name: 'Priyanka Sen', type: 'New patient', uhid: 'TRI-2026-000126', mobile: '97654 32109', date: '18 Jun 2026', doctor: 'Dr Sharma', paymentStatus: 'Refunded' },
    { id: '5', name: 'Amit Patel', type: 'Returning patient', uhid: 'TRI-2026-000127', mobile: '95555 12345', date: '19 Jun 2026', doctor: 'Dr Mehta', paymentStatus: 'Paid' },
    { id: '6', name: 'Kunal Kapoor', type: 'New patient', uhid: 'TRI-2026-000128', mobile: '98222 77777', date: '20 Jun 2026', doctor: 'Dr Bose', paymentStatus: 'Unpaid' },
    { id: '7', name: 'Sunita Rao', type: 'Returning patient', uhid: 'TRI-2026-000129', mobile: '91111 22222', date: '21 Jun 2026', doctor: 'Dr Sharma', paymentStatus: 'Paid' },
    { id: '8', name: 'Megha Gupta', type: 'Returning patient', uhid: 'TRI-2026-000130', mobile: '94444 88888', date: '22 Jun 2026', doctor: 'Dr Mehta', paymentStatus: 'Paid' },
    { id: '9', name: 'Rajesh Kumar', type: 'New patient', uhid: 'TRI-2026-000131', mobile: '90000 11111', date: '23 Jun 2026', doctor: 'Dr Bose', paymentStatus: 'Unpaid' },
    { id: '10', name: 'Neha Joshi', type: 'Returning patient', uhid: 'TRI-2026-000132', mobile: '93333 44444', date: '24 Jun 2026', doctor: 'Dr Sharma', paymentStatus: 'Refunded' }
  ]);

  const handleSavePatient = (data: any) => {
    const randomUHID = `TRI-2026-000${Math.floor(100 + Math.random() * 900)}`;
    const newPatient: Patient = {
      id: String(patients.length + 1),
      name: `${data.firstName} ${data.lastName}`.trim(),
      type: 'New patient',
      uhid: randomUHID,
      mobile: data.mobile,
      date: '25 Jun 2026',
      doctor: data.doctor || 'Dr Sharma',
      paymentStatus: 'Paid',
    };
    setPatients([newPatient, ...patients]);
    setCurrentPage(1);
  };

  const handleSort = (field: keyof Patient) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const processedPatients = useMemo(() => {
    let result = [...patients];

    if (searchTerm.trim()) {
      const lowerSearch = searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(lowerSearch) ||
          p.uhid.toLowerCase().includes(lowerSearch) ||
          p.mobile.includes(lowerSearch)
      );
    }

    if (statusFilter !== 'All') {
      result = result.filter((p) => p.paymentStatus === statusFilter);
    }

    if (sortField) {
      result.sort((a, b) => {
        const valA = a[sortField].toLowerCase();
        const valB = b[sortField].toLowerCase();
        if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
        if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [patients, searchTerm, statusFilter, sortField, sortOrder]);

  const totalItems = processedPatients.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedPatients = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return processedPatients.slice(start, start + itemsPerPage);
  }, [processedPatients, currentPage, itemsPerPage]);

  return (
    <div className="flex h-screen bg-[#eae8e6]">
      <SideBar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-14 bg-[#fffdfb] border-b border-[#cdcdcd] px-8 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-semibold font-sans text-[#1b1b1a]">Patients</h1>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <svg className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                placeholder="Search Patient (name, UHID, mobile...)"
                className="w-80 pl-9 pr-4 py-2 border border-[#cdcdcd] rounded-md text-sm outline-none focus:border-[#306cd2] focus:ring-1 focus:ring-[#306cd2] bg-white transition-all"
              />
            </div>

            <button
              onClick={() => setIsAddPatientOpen(true)}
              className="bg-[#306cd2] hover:bg-[#2c65cc] text-white px-4 py-2 rounded text-sm font-semibold flex items-center gap-2 transition-transform active:scale-95 shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Add Patient
            </button>
          </div>
        </header>

        <div className="bg-white border-b border-[#cdcdcd] py-2 px-8 flex items-center gap-8 shrink-0">
          {(['All', 'Paid', 'Unpaid', 'Refunded'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => { setStatusFilter(tab); setCurrentPage(1); }}
              className={`relative py-2 px-1 text-sm font-medium transition-colors ${
                statusFilter === tab ? 'text-black' : 'text-gray-500 hover:text-black'
              }`}
            >
              {tab === 'All' ? 'All Patients' : `${tab} List`}
              {statusFilter === tab && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#5b3570]" />
              )}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto p-8">
          <div className="bg-white border border-[#cdcdcd] rounded-md shadow-sm overflow-hidden flex flex-col max-w-6xl mx-auto">
            <div className="px-6 py-4 border-b border-[#cdcdcd] flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#1b1b1a]">Patients List</h3>
              <span className="text-xs text-[#727272]">Showing {totalItems} total patient records</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-[#cdcdcd] text-xs font-bold text-gray-500 uppercase select-none">
                    <th className="px-6 py-3 cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => handleSort('name')}>
                      <div className="flex items-center gap-1.5">
                        Patient Name
                        {sortField === 'name' && (sortOrder === 'asc' ? '▲' : '▼')}
                      </div>
                    </th>
                    <th className="px-6 py-3 cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => handleSort('uhid')}>
                      <div className="flex items-center gap-1.5">
                        UHID
                        {sortField === 'uhid' && (sortOrder === 'asc' ? '▲' : '▼')}
                      </div>
                    </th>
                    <th className="px-6 py-3">Phone</th>
                    <th className="px-6 py-3 cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => handleSort('date')}>
                      <div className="flex items-center gap-1.5">
                        Date Joined
                        {sortField === 'date' && (sortOrder === 'asc' ? '▲' : '▼')}
                      </div>
                    </th>
                    <th className="px-6 py-3">Assigned Doctor</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#cdcdcd] text-sm">
                  {paginatedPatients.length > 0 ? (
                    paginatedPatients.map((pat) => (
                      <tr key={pat.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="font-semibold text-gray-900">{pat.name}</div>
                          <div className="text-[11px] text-[#727272]">{pat.type}</div>
                        </td>
                        <td className="px-6 py-4 text-gray-500">{pat.uhid}</td>
                        <td className="px-6 py-4 text-gray-500">{pat.mobile}</td>
                        <td className="px-6 py-4 text-gray-500">{pat.date}</td>
                        <td className="px-6 py-4 font-medium text-gray-600">{pat.doctor}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              pat.paymentStatus === 'Paid' ? 'bg-[#ecf8e8] text-[#147046]' : pat.paymentStatus === 'Unpaid' ? 'bg-[#f8f3e6] text-[#b57700]' : 'bg-[#f7e4e4] text-[#b51515]'
                            }`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${
                              pat.paymentStatus === 'Paid' ? 'bg-[#147046]' : pat.paymentStatus === 'Unpaid' ? 'bg-[#b57700]' : 'bg-[#b51515]'
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
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                        No patients found matching the filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {totalPages > 1 && (
              <div className="px-6 py-4 border-t border-[#cdcdcd] bg-gray-50 flex items-center justify-between select-none">
                <span className="text-xs text-gray-500">
                  Showing {Math.min(totalItems, (currentPage - 1) * itemsPerPage + 1)}-{Math.min(totalItems, currentPage * itemsPerPage)} of {totalItems} entries
                </span>
                
                <div className="flex items-center gap-2 text-xs">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="p-2 border border-[#cdcdcd] rounded disabled:opacity-50 hover:bg-gray-100 disabled:hover:bg-transparent bg-white transition-colors"
                    aria-label="Previous page"
                  >
                    <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {Array.from({ length: totalPages }).map((_, idx) => {
                    const pageNum = idx + 1;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`w-8 h-8 rounded border font-medium transition-colors ${
                          currentPage === pageNum ? 'bg-[#306cd2] border-[#306cd2] text-white' : 'bg-white border-[#cdcdcd] text-[#25282b] hover:bg-gray-100'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}

                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 border border-[#cdcdcd] rounded disabled:opacity-50 hover:bg-gray-100 disabled:hover:bg-transparent bg-white transition-colors"
                    aria-label="Next page"
                  >
                    <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

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
