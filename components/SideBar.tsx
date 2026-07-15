'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

interface SidebarLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  icon: React.ReactNode;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ href, label, isActive, icon }) => {
  return (
    <Link
      href={href}
      className={`w-full flex items-center gap-3 px-6 py-4 transition-all duration-200 group border-l-2 ${
        isActive
          ? 'bg-[#f9f7f3] border-[#5b3570] text-[#1b1b1a]'
          : 'border-transparent text-[#727272] hover:bg-[#fafaf9] hover:text-[#1b1b1a]'
      }`}
    >
      <div className={`transition-transform duration-200 group-hover:scale-110 ${isActive ? 'text-[#5b3570]' : 'text-[#727272] group-hover:text-[#1b1b1a]'}`}>
        {icon}
      </div>
      <span className="font-sans font-semibold text-sm tracking-wide leading-5 whitespace-nowrap">
        {label}
      </span>
    </Link>
  );
};

export default function SideBar() {
  const pathname = usePathname();

  const navItems = [
    {
      href: '/dashboard',
      label: 'Home',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      href: '/patients',
      label: 'Patients',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      href: '/appointments',
      label: 'Appointments',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      href: '/consultation',
      label: 'Consultation',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      href: '/doctors',
      label: 'Doctors',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.952 11.952 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <aside className="w-64 h-screen bg-white border-r border-[#ccc2aa] flex flex-col justify-between shrink-0 select-none">
      <div className="flex flex-col w-full">
        {/* Brand Logo Wrapper */}
        <div className="h-16 px-6 border-b border-[#cdcdcd] flex items-center gap-3">
          <div className="bg-[#1b1b1a] rounded-[5.8px] w-9 h-9 flex items-center justify-center transition-transform duration-300 hover:rotate-12 cursor-pointer">
            <Logo className="w-5 h-5 text-[#f8f2e4]" />
          </div>
          <span className="font-serif text-lg font-semibold tracking-wide text-[#1b1b1a]">Trika</span>
        </div>

        {/* Navigation Section */}
        <nav className="mt-4 flex flex-col w-full">
          {navItems.map((item) => (
            <SidebarLink
              key={item.href}
              href={item.href}
              label={item.label}
              isActive={pathname === item.href}
              icon={item.icon}
            />
          ))}
        </nav>
      </div>

      {/* Bottom Info Section */}
      <div className="border-t border-[#cdcdcd] w-full">
        <SidebarLink
          href="/info"
          label="Info"
          isActive={pathname === '/info'}
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
      </div>
    </aside>
  );
}
