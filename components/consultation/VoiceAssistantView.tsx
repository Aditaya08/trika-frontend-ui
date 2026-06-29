'use client';

import React, { useState } from 'react';

export default function VoiceAssistantView() {
  const [isRecording, setIsRecording] = useState(true);
  const [transcript, setTranscript] = useState([
    {
      speaker: 'Patient',
      text: 'Doctor saab, chest mein jalan ho rahi hai 3 din se, khaana ke baad zyada.',
      highlight: 'chest mein jalan',
      time: '10:42 AM'
    },
    {
      speaker: 'Doctor',
      text: 'Koi dizziness ya shortness of breath?',
      highlight: null,
      time: '10:42 AM'
    },
    {
      speaker: 'Patient',
      text: 'Nahi doctor saab, bas heartburn aur acidity heavy feel hoti hai.',
      highlight: 'heartburn aur acidity',
      time: '10:43 AM'
    },
    {
      speaker: 'Doctor',
      text: 'Theek hai, Pantoprazole 40mg subah khaali pet lena hoga 14 din ke liye.',
      highlight: 'Pantoprazole 40mg subah khaali pet',
      time: '10:43 AM'
    }
  ]);

  const [newSpeech, setNewSpeech] = useState('');

  const handleSimulateSpeech = () => {
    if (!newSpeech.trim()) return;
    setTranscript([
      ...transcript,
      {
        speaker: 'Patient',
        text: newSpeech,
        highlight: newSpeech.substring(0, 15),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setNewSpeech('');
  };

  return (
    <div className="w-full flex flex-col gap-4 text-[#1a1a1a]">
      {/* Frame Container */}
      <div className="bg-white border border-[#1a1a1a] rounded-xl shadow-xl overflow-hidden flex flex-col min-w-[1000px]">
        {/* PATIENT STRIP WITH VITALS */}
        <div className="bg-white border-b border-[#c4c4c4] p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#1a1a1a] flex items-center justify-center font-bold text-sm bg-gray-50">
              RK
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base text-[#1a1a1a]">Rakesh Kumar</h3>
                <span className="text-xs text-[#9a9a9a]">· 47 / M</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="border border-[#c4c4c4] rounded px-1.5 py-0.5 text-[10px] text-[#7a7a7a]">UHID 4471-203</span>
                <span className="border border-[#c4c4c4] rounded px-1.5 py-0.5 text-[10px] text-[#7a7a7a]">Last visit 12 days ago</span>
                <span className="bg-[#fbf6e9] border border-[#c9a23a] text-[#8a6d2f] font-bold rounded px-2 py-0.5 text-[10px]">
                  ⚠ Allergy: Penicillin
                </span>
              </div>
            </div>
          </div>

          {/* Vitals Dashed Cards */}
          <div className="flex items-center gap-2">
            <div className="border border-[#c4c4c4] border-dashed rounded-md px-3 py-1.5 text-center bg-gray-50 min-w-[64px]">
              <p className="font-bold text-xs text-[#1a1a1a]">130/85</p>
              <p className="text-[9px] text-[#9a9a9a] uppercase tracking-wider font-semibold">BP</p>
            </div>
            <div className="border border-[#c4c4c4] border-dashed rounded-md px-3 py-1.5 text-center bg-gray-50 min-w-[64px]">
              <p className="font-bold text-xs text-[#1a1a1a]">78</p>
              <p className="text-[9px] text-[#9a9a9a] uppercase tracking-wider font-semibold">Pulse</p>
            </div>
            <div className="border border-[#c4c4c4] border-dashed rounded-md px-3 py-1.5 text-center bg-gray-50 min-w-[64px]">
              <p className="font-bold text-xs text-[#1a1a1a]">98%</p>
              <p className="text-[9px] text-[#9a9a9a] uppercase tracking-wider font-semibold">SpO₂</p>
            </div>
            <div className="border border-[#c4c4c4] border-dashed rounded-md px-3 py-1.5 text-center bg-gray-50 min-w-[64px]">
              <p className="font-bold text-xs text-gray-400">—</p>
              <p className="text-[9px] text-[#9a9a9a] uppercase tracking-wider font-semibold">Temp</p>
            </div>
          </div>
        </div>

        {/* WORK AREA: LIVE TRANSCRIPT & REALTIME MAPPING */}
        <div className="flex flex-row min-h-[600px] bg-white">
          {/* LEFT 340px: LIVE TRANSCRIPT */}
          <aside className="w-[360px] bg-[#f6f7f8] border-r border-[#1a1a1a] flex flex-col justify-between shrink-0">
            <div className="flex flex-col flex-1 overflow-hidden">
              {/* Transcript Header */}
              <div className="bg-[#f6f7f8] border-b border-[#c4c4c4] px-4 py-2.5 flex items-center justify-between">
                <span className="font-bold text-xs text-[#7a7a7a] uppercase tracking-wider">Live transcript</span>
                <button 
                  onClick={() => setIsRecording(!isRecording)}
                  className="flex items-center gap-1.5 text-xs font-bold"
                >
                  <span className={`w-2.5 h-2.5 rounded-full ${isRecording ? 'bg-[#c0392b] animate-pulse' : 'bg-gray-400'}`} />
                  <span className={isRecording ? 'text-[#c0392b]' : 'text-gray-500'}>
                    {isRecording ? 'Recording' : 'Paused'}
                  </span>
                </button>
              </div>

              {/* Dialogue Scroll Area */}
              <div className="p-4 flex flex-col gap-3 overflow-y-auto flex-1">
                {transcript.map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <div className="flex items-center justify-between text-[10px] uppercase font-bold tracking-wider">
                      <span className={item.speaker === 'Patient' ? 'text-[#9a9a9a]' : 'text-[#2c5d7c]'}>
                        {item.speaker}
                      </span>
                      <span className="text-gray-400 font-normal lowercase">{item.time}</span>
                    </div>
                    <div className="bg-white border border-[#dcdcdc] rounded-lg p-3 text-xs leading-relaxed text-[#333] shadow-sm">
                      {item.highlight ? (
                        <>
                          {item.text.split(item.highlight)[0]}
                          <span className="bg-[#f3ecd6] text-[#7a5f1e] font-bold px-1 py-0.5 rounded">
                            {item.highlight}
                          </span>
                          {item.text.split(item.highlight)[1]}
                        </>
                      ) : (
                        item.text
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Simulate Voice Input Controls */}
            <div className="p-3 bg-white border-t border-[#c4c4c4] flex gap-2">
              <input
                type="text"
                value={newSpeech}
                onChange={(e) => setNewSpeech(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSimulateSpeech()}
                placeholder="Simulate patient speech..."
                className="flex-1 bg-gray-50 border border-gray-300 rounded px-2.5 py-1 text-xs focus:outline-none"
              />
              <button 
                onClick={handleSimulateSpeech}
                className="bg-[#1a1a1a] text-white text-xs font-bold px-3 py-1 rounded hover:bg-black"
              >
                Speak
              </button>
            </div>
          </aside>

          {/* RIGHT: REALTIME CLINICAL MAPPER */}
          <main className="flex-1 p-6 flex flex-col gap-5 bg-white overflow-y-auto">
            <div className="border-b border-gray-200 pb-3 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-sm text-[#1a1a1a]">Real-time Clinical Extraction</h3>
                <p className="text-xs text-gray-500">Voice entries automatically map to EMR fields as you speak.</p>
              </div>
              <span className="bg-green-100 text-green-800 font-bold text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-600 animate-ping" /> Live Sync Active
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-amber-200 bg-amber-50/40 rounded-lg p-4">
                <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block mb-2">
                  Extracted Symptoms
                </span>
                <ul className="list-disc list-inside text-xs text-gray-800 space-y-1">
                  <li>Heartburn / Epigastric burning (3 days)</li>
                  <li>Postprandial aggravation</li>
                  <li>Acid reflux / sour belching</li>
                </ul>
              </div>

              <div className="border border-blue-200 bg-blue-50/40 rounded-lg p-4">
                <span className="text-xs font-bold text-blue-900 uppercase tracking-wider block mb-2">
                  Extracted Medications
                </span>
                <ul className="list-disc list-inside text-xs text-gray-800 space-y-1">
                  <li className="font-semibold text-blue-950">Tab. Pantoprazole 40mg — 1-0-0 before food (14d)</li>
                </ul>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
