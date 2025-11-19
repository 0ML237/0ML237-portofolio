"use client";

import React from 'react';
import { MotionWrapper } from './ui/MotionWrapper';
import { useLanguage } from '@/context/LanguageContext';

const Education = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
      <MotionWrapper>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 flex items-center gap-4">
          <span className="text-primary">04.</span> {t.education.title}
          <span className="h-px bg-gray-800 flex-grow max-w-xs ml-4"></span>
        </h2>
      </MotionWrapper>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.education.degrees.map((edu, index) => (
          <MotionWrapper key={index} delay={index * 0.1} direction="up">
            <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] group h-full flex flex-col">
              <div className="mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {edu.title}
              </h3>
              <p className="text-gray-400 text-sm mt-auto pt-4 border-t border-gray-800">
                {edu.school}
              </p>
            </div>
          </MotionWrapper>
        ))}
      </div>
    </section>
  );
};

export default Education;

