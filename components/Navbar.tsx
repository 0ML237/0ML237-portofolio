"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const Navbar = () => {
  const { t } = useLanguage();

  return (
    <nav className="fixed w-full z-50 top-0 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-20 h-20 flex items-center justify-between">
        <div className="relative w-12 h-12">
          <Image 
            src="/logo.png" 
            alt="Logo Marcus Temgoua" 
            fill 
            className="object-contain"
            priority
          />
        </div>
        <div className="hidden md:flex gap-8 text-sm font-mono text-gray-300">
          <a href="#experience" className="hover:text-primary transition-colors">
            <span className="text-primary">01.</span> {t.nav.experience}
          </a>
          <a href="#skills" className="hover:text-primary transition-colors">
            <span className="text-primary">02.</span> {t.nav.skills}
          </a>
          <a href="#projects" className="hover:text-primary transition-colors">
            <span className="text-primary">03.</span> {t.nav.projects}
          </a>
          <a href="#education" className="hover:text-primary transition-colors">
            <span className="text-primary">04.</span> {t.nav.education}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
