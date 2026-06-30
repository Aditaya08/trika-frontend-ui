'use client';

import React, { useState, useEffect } from 'react';

interface AppointmentFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: (patientData: any) => void;
}

export default function AppointmentForm({ isOpen, onClose, onSave }: AppointmentFormProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('Select');
  const [dob, setDob] = useState('');
  
  const [mobile, setMobile] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [whatsappSameAsMobile, setWhatsappSameAsMobile] = useState(false);
  const [emergencyNo, setEmergencyNo] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [address, setAddress] = useState('');

  const [allergies, setAllergies] = useState('');
  const [conditions, setConditions] = useState('');
  const [medications, setMedications] = useState('');
  
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Sync WhatsApp number if checkbox is checked
  useEffect(() => {
    if (whatsappSameAsMobile) {
      setWhatsapp(mobile);
    }
  }, [mobile, whatsappSameAsMobile]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!firstName.trim()) newErrors.firstName = 'First name is required';
    if (!mobile.trim()) newErrors.mobile = 'Mobile number is required';
    if (!consent) newErrors.consent = 'Patient consent is required to save';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const patientData = {
      firstName,
      lastName,
      gender,
      dob,
      mobile,
      whatsapp: whatsappSameAsMobile ? mobile : whatsapp,
      emergencyNo,
      aadhar,
      address,
      allergies,
      conditions,
      medications,
      consent,
    };

    if (onSave) {
      onSave(patientData);
    }
    
    // Clear and close
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setGender('Select');
    setDob('');
    setMobile('');
    setWhatsapp('');
    setWhatsappSameAsMobile(false);
    setEmergencyNo('');
    setAadhar('');
    setAddress('');
    setAllergies('');
    setConditions('');
    setMedications('');
    setConsent(false);
    setErrors({});
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#f1f1f1] rounded-lg shadow-2xl overflow-hidden border border-[#cdcdcd] max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-[#cdcdcd]">
          <h2 className="text-xl font-bold font-sans text-[#1b1b1a]">Add Patient</h2>
          <button
            onClick={() => { resetForm(); onClose(); }}
            className="text-[#727272] hover:text-[#1b1b1a] transition-colors p-1"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-8 space-y-8">
          
          {/* PERSONAL DETAILS */}
          <div className="space-y-4">
            <h3 className="text-base font-bold tracking-[0.48px] text-[#1b1b1a] uppercase font-sans">
              Personal Details
            </h3>
            <hr className="border-t border-[#cdcdcd]" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div className="flex items-center gap-4">
                <label className="w-28 text-right font-medium text-sm text-[#1b1b1a]">
                  First Name*
                </label>
                <div className="flex-1 flex flex-col">
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Rahul"
                    className={`w-full px-3 py-2 bg-white border rounded text-sm outline-none transition-all ${
                      errors.firstName ? 'border-[#b51515] focus:ring-1 focus:ring-[#b51515]' : 'border-[#cdcdcd] focus:border-[#3677e5] focus:ring-1 focus:ring-[#3677e5]'
                    }`}
                  />
                  {errors.firstName && <span className="text-xs text-[#b51515] mt-1">{errors.firstName}</span>}
                </div>
              </div>

              {/* Last Name */}
              <div className="flex items-center gap-4">
                <label className="w-28 text-right font-medium text-sm text-[#1b1b1a]">
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Sharma"
                  className="flex-1 px-3 py-2 bg-white border border-[#cdcdcd] rounded text-sm outline-none focus:border-[#3677e5] focus:ring-1 focus:ring-[#3677e5]"
                />
              </div>

              {/* Gender */}
              <div className="flex items-center gap-4">
                <label className="w-28 text-right font-medium text-sm text-[#1b1b1a]">
                  Gender
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="flex-1 px-3 py-2 bg-white border border-[#cdcdcd] rounded text-sm outline-none focus:border-[#3677e5] focus:ring-1"
                >
                  <option value="Select">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Date of Birth */}
              <div className="flex items-center gap-4">
                <label className="w-28 text-right font-medium text-sm text-[#1b1b1a]">
                  Date of Birth
                </label>
                <input
                  type="text"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  placeholder="dd/mm/yy"
                  className="flex-1 px-3 py-2 bg-white border border-[#cdcdcd] rounded text-sm outline-none focus:border-[#3677e5] focus:ring-1 focus:ring-[#3677e5]"
                />
              </div>
            </div>
          </div>

          {/* CONTACT DETAILS */}
          <div className="space-y-4">
            <h3 className="text-base font-bold tracking-[0.48px] text-[#1b1b1a] uppercase font-sans">
              Contact & ID Details
            </h3>
            <hr className="border-t border-[#cdcdcd]" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mobile */}
              <div className="flex items-center gap-4">
                <label className="w-28 text-right font-medium text-sm text-[#1b1b1a]">
                  Mobile*
                </label>
                <div className="flex-1 flex flex-col">
                  <input
                    type="text"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="+91 991122321"
                    className={`w-full px-3 py-2 bg-white border rounded text-sm outline-none transition-all ${
                      errors.mobile ? 'border-[#b51515] focus:ring-1 focus:ring-[#b51515]' : 'border-[#cdcdcd] focus:border-[#3677e5] focus:ring-1 focus:ring-[#3677e5]'
                    }`}
                  />
                  {errors.mobile && <span className="text-xs text-[#b51515] mt-1">{errors.mobile}</span>}
                </div>
              </div>

              {/* Whatsapp */}
              <div className="flex items-center gap-4">
                <label className="w-28 text-right font-medium text-sm text-[#1b1b1a]">
                  Whatsapp
                </label>
                <div className="flex-1 flex flex-col justify-center">
                  <input
                    type="text"
                    value={whatsappSameAsMobile ? mobile : whatsapp}
                    disabled={whatsappSameAsMobile}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="Same as mobile"
                    className="w-full px-3 py-2 bg-white disabled:bg-gray-100 border border-[#cdcdcd] rounded text-sm outline-none focus:border-[#3677e5] focus:ring-1 focus:ring-[#3677e5]"
                  />
                  <label className="flex items-center gap-2 mt-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={whatsappSameAsMobile}
                      onChange={(e) => setWhatsappSameAsMobile(e.target.checked)}
                      className="rounded border-[#cdcdcd] text-[#3677e5] focus:ring-0"
                    />
                    <span className="text-xs text-[#727272]">WhatsApp same as mobile</span>
                  </label>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="flex items-center gap-4">
                <label className="w-28 text-right font-medium text-sm text-[#1b1b1a]">
                  Emergency No.
                </label>
                <input
                  type="text"
                  value={emergencyNo}
                  onChange={(e) => setEmergencyNo(e.target.value)}
                  placeholder="+91 9891654532"
                  className="flex-1 px-3 py-2 bg-white border border-[#cdcdcd] rounded text-sm outline-none focus:border-[#3677e5] focus:ring-1 focus:ring-[#3677e5]"
                />
              </div>

              {/* Aadhar Number */}
              <div className="flex items-center gap-4">
                <label className="w-28 text-right font-medium text-sm text-[#1b1b1a]">
                  Aadhar Number
                </label>
                <input
                  type="text"
                  value={aadhar}
                  onChange={(e) => setAadhar(e.target.value)}
                  placeholder="1234 5678 9012"
                  className="flex-1 px-3 py-2 bg-white border border-[#cdcdcd] rounded text-sm outline-none focus:border-[#3677e5] focus:ring-1 focus:ring-[#3677e5]"
                />
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 md:col-span-2">
                <label className="w-28 text-right font-medium text-sm text-[#1b1b1a] mt-2">
                  Address
                </label>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="House, area, city"
                  rows={2}
                  className="flex-1 px-3 py-2 bg-white border border-[#cdcdcd] rounded text-sm outline-none focus:border-[#3677e5] focus:ring-1 focus:ring-[#3677e5] resize-none"
                />
              </div>
            </div>
          </div>

          {/* MEDICAL HISTORY */}
          <div className="space-y-4">
            <h3 className="text-base font-bold tracking-[0.48px] text-[#1b1b1a] uppercase font-sans">
              Medical History
            </h3>
            <hr className="border-t border-[#cdcdcd]" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Allergies */}
              <div className="flex items-center gap-4">
                <label className="w-28 text-right font-medium text-sm text-[#1b1b1a]">
                  Allergies
                </label>
                <input
                  type="text"
                  value={allergies}
                  onChange={(e) => setAllergies(e.target.value)}
                  placeholder="e.g. Penicillin, Peanuts"
                  className="flex-1 px-3 py-2 bg-white border border-[#cdcdcd] rounded text-sm outline-none focus:border-[#3677e5] focus:ring-1 focus:ring-[#3677e5]"
                />
              </div>

              {/* Conditions */}
              <div className="flex items-center gap-4">
                <label className="w-28 text-right font-medium text-sm text-[#1b1b1a]">
                  Conditions
                </label>
                <input
                  type="text"
                  value={conditions}
                  onChange={(e) => setConditions(e.target.value)}
                  placeholder="e.g. Hypertension, Diabetes"
                  className="flex-1 px-3 py-2 bg-white border border-[#cdcdcd] rounded text-sm outline-none focus:border-[#3677e5] focus:ring-1 focus:ring-[#3677e5]"
                />
              </div>

              {/* Medications */}
              <div className="flex items-center gap-4 md:col-span-2">
                <label className="w-28 text-right font-medium text-sm text-[#1b1b1a]">
                  Medications
                </label>
                <input
                  type="text"
                  value={medications}
                  onChange={(e) => setMedications(e.target.value)}
                  placeholder="e.g. Metformin 500mg"
                  className="flex-1 px-3 py-2 bg-white border border-[#cdcdcd] rounded text-sm outline-none focus:border-[#3677e5] focus:ring-1 focus:ring-[#3677e5]"
                />
              </div>
            </div>
          </div>

          {/* CONSENT AND SUBMIT */}
          <div className="space-y-6 pt-4 border-t border-[#cdcdcd]">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className={`mt-1 rounded border-gray-300 text-[#3677e5] focus:ring-0 ${errors.consent ? 'border-[#b51515] ring-1 ring-[#b51515]' : ''}`}
              />
              <span className="text-sm text-[#727272]">
                Patient consents to data storage and treatment as per clinic policy.
              </span>
            </label>
            {errors.consent && <p className="text-xs text-[#b51515] pl-7">{errors.consent}</p>}

            <div className="flex justify-end pt-4 border-t border-[#cdcdcd] gap-4">
              <button
                type="button"
                onClick={() => { resetForm(); onClose(); }}
                className="px-6 py-2 border border-[#cdcdcd] bg-white text-[#1b1b1a] rounded text-sm font-semibold hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-[#3677e5] text-white rounded text-sm font-semibold hover:bg-[#2c65cc] transition-colors shadow-sm"
              >
                Save Patient
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
