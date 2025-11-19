"use client";

import React from 'react';
import { MotionWrapper } from './ui/MotionWrapper';
import { useLanguage } from '@/context/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      company: "ASHDOWNX",
      role: t.experience.role_ashdown,
      period: `Sept 2022 - ${t.experience.current}`,
      missions: t.experience.missions_ashdown,
      tech: ["AngularJS", "ReactJS", "NextJS", "Python", "Figma"]
    },
    {
      company: "SERDI Informatique",
      role: t.experience.role_serdi,
      period: "Juin 2022 - Août 2022",
      missions: t.experience.missions_serdi,
      tech: ["JavaScript", "Laravel", "MySQL", "UML"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
      <MotionWrapper>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 flex items-center gap-4">
          <span className="text-primary">01.</span> {t.experience.title}
          <span className="h-px bg-gray-800 flex-grow max-w-xs ml-4"></span>
        </h2>
      </MotionWrapper>

      <div className="space-y-12 border-l border-gray-800 ml-3 md:ml-0 pl-8 md:pl-0">
        {experiences.map((exp, index) => (
          <MotionWrapper key={index} delay={index * 0.1} direction="up">
            <div className="relative md:pl-8 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[37px] md:-left-[5px] top-2 w-4 h-4 rounded-full bg-gray-800 border-2 border-gray-600 group-hover:border-primary group-hover:bg-primary transition-colors duration-300"></div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {exp.role} <span className="text-primary">@ {exp.company}</span>
                </h3>
                <span className="text-sm font-mono text-gray-500 md:ml-auto">{exp.period}</span>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.missions.map((mission, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-400 text-sm md:text-base leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0"></span>
                    {mission}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-mono text-primary bg-primary/5 rounded-full border border-primary/10">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </MotionWrapper>
        ))}
      </div>
    </section>
  );
};

export default Experience;

