"use client";

import React from 'react';
import { MotionWrapper } from './ui/MotionWrapper';
import { useLanguage } from '@/context/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t.skills.languages,
      skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3/Sass", "Python", "SQL"]
    },
    {
      title: t.skills.frameworks,
      skills: ["ReactJS", "Next.js 14", "AngularJS", "Tailwind CSS", "Framer Motion", "Django"]
    },
    {
      title: t.skills.tools,
      skills: ["Git & GitHub", "VS Code", "Docker", "Postman", "Vercel", "MySQL/PostgreSQL"]
    },
    {
      title: t.skills.methodologies,
      skills: ["Agile/Scrum", "Responsive Design", "Mobile First", "UML Modeling", "MVC Pattern"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-20 max-w-7xl mx-auto bg-background/50">
      <MotionWrapper>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 flex items-center gap-4">
          <span className="text-primary">02.</span> {t.skills.title}
          <span className="h-px bg-gray-800 flex-grow max-w-xs ml-4"></span>
        </h2>
      </MotionWrapper>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <MotionWrapper key={index} delay={index * 0.1} direction="up">
            <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors duration-300 h-full group hover:shadow-lg hover:shadow-primary/5">
              <h3 className="text-xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 text-sm bg-background/50 text-gray-300 rounded-md border border-border group-hover:border-primary/30 transition-all hover:bg-primary/10 hover:text-primary cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </MotionWrapper>
        ))}
      </div>
      
      {/* Special Highlight for UI/UX */}
      <MotionWrapper delay={0.4} className="mt-8">
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-1 rounded-xl">
          <div className="bg-card p-6 rounded-lg flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="text-2xl">🎨</span> Figma (UI/UX)
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Prototypage haute fidélité, Design Systems, Wireframing
              </p>
            </div>
            <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-bold border border-primary/50 animate-pulse">
              {t.skills.design_focus}
            </span>
          </div>
        </div>
      </MotionWrapper>
    </section>
  );
};

export default Skills;
