"use client";

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/context/LanguageContext';
import { Sun, Moon, Languages } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeLanguageControls = () => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Language Switcher */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
        className="p-3 bg-background/80 backdrop-blur-md border border-border rounded-full shadow-lg hover:border-primary transition-colors group"
        aria-label="Switch Language"
      >
        <div className="relative w-6 h-6 flex items-center justify-center font-bold text-xs font-mono">
          <span className={`absolute transition-all duration-300 ${language === 'fr' ? 'opacity-100 scale-100 text-primary' : 'opacity-0 scale-0'}`}>FR</span>
          <span className={`absolute transition-all duration-300 ${language === 'en' ? 'opacity-100 scale-100 text-secondary' : 'opacity-0 scale-0'}`}>EN</span>
        </div>
      </motion.button>

      {/* Theme Switcher */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="p-3 bg-background/80 backdrop-blur-md border border-border rounded-full shadow-lg hover:border-primary transition-colors text-foreground"
        aria-label="Toggle Theme"
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </motion.button>
    </div>
  );
};

export default ThemeLanguageControls;
