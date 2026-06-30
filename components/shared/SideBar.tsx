'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { getSortedNavItems } from './navRegistry';

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

  const navItems = getSortedNavItems();

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
