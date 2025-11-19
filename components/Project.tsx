"use client";

import React from 'react';
import { MotionWrapper } from './ui/MotionWrapper';
import ProjectCard from './ProjectCard';
import FigmaGallery from './FigmaGallery';
import { useLanguage } from '@/context/LanguageContext';

const Project = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
      <MotionWrapper>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 flex items-center gap-4">
          <span className="text-primary">03.</span> {t.projects.title}
          <span className="h-px bg-gray-800 flex-grow max-w-xs ml-4"></span>
        </h2>
      </MotionWrapper>

      <div className="space-y-12">
        {/* Palabre AI Card */}
        <MotionWrapper direction="up">
          <ProjectCard 
            title="Palabre AI"
            description={t.projects.palabre.desc}
            imageSrc="/palabreimg.webp"
            logoSrc="/palabre-logo.png"
            category={t.projects.categories?.ai_literature}
            projectUrl="https://app.palabre.ai/app/dashboard"
            themeColor="purple"
            details={{
              role: t.projects.palabre.role,
              challenges: t.projects.palabre.challenges,
              techStack: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "Framer Motion", "Zustand"]
            }}
          />
        </MotionWrapper>

        {/* MINPOSTEL Card */}
        <MotionWrapper direction="up" delay={0.2}>
          <ProjectCard 
            title="Gestion des Réservations (MINPOSTEL)"
            description={t.projects.minpostel.desc}
            imageSrc="/minpostel.png"
            logoSrc="/minpostel-logo.jpg"
            category={t.projects.categories?.admin_management}
            projectUrl="#"
            themeColor="cyan"
            details={{
              role: t.projects.minpostel.role,
              challenges: t.projects.minpostel.challenges,
              techStack: ["JavaScript", "HTML/CSS", "MySQL", "PHP", "MVC Pattern"]
            }}
          />
        </MotionWrapper>
      </div>

      {/* Figma Gallery Section */}
      <MotionWrapper delay={0.4}>
        <FigmaGallery />
      </MotionWrapper>
    </section>
  );
};

export default Project;


