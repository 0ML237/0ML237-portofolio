"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 text-center text-gray-500 text-sm font-mono">
      <p>{t.footer.designed}</p>
      <p className="mt-2">© {new Date().getFullYear()} - {t.footer.rights}</p>
    </footer>
  );
};

export default Footer;
