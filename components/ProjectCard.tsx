"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Info, X, ChevronRight, Layers, Code, Zap } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

interface ProjectDetails {
  role: string;
  challenges: string[];
  techStack: string[];
}

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  logoSrc?: string;
  category?: string;
  projectUrl: string;
  details: ProjectDetails;
  themeColor?: string; // e.g., "purple"
}

const ProjectCard = ({
  title,
  description,
  imageSrc,
  logoSrc,
  category,
  projectUrl,
  details,
  themeColor = "purple"
}: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();

  // Dynamic styles based on theme
  const glowColor = themeColor === "purple" ? "rgba(168, 85, 247, 0.5)" : "rgba(6, 182, 212, 0.5)";
  const accentColor = themeColor === "purple" ? "text-purple-400" : "text-cyan-400";
  const buttonBg = themeColor === "purple" ? "bg-purple-600 hover:bg-purple-500" : "bg-cyan-600 hover:bg-cyan-500";

  return (
    <motion.div 
      layout
      className="relative w-full bg-card rounded-3xl overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] border border-white/5 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Soft Glow Background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -z-10 pointer-events-none" />

      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden bg-black/20">
          {imageSrc ? (
            <Image 
              src={imageSrc} 
              alt={title} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105" 
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-600 bg-gradient-to-br from-card to-black">
              <span className="text-sm font-mono">Image du Projet</span>
            </div>
          )}
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent md:bg-gradient-to-r" />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-3/5 p-8 flex flex-col justify-between relative">
          <div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className={`text-3xl font-bold text-foreground mb-1 tracking-tight`}>{title}</h3>
                {category && (
                  <span className={`text-xs font-mono uppercase tracking-wider ${accentColor} opacity-80`}>
                    {category}
                  </span>
                )}
              </div>
              {/* Logo */}
              {logoSrc ? (
                <div className="w-16 h-16 rounded-xl bg-white p-2 flex items-center justify-center shadow-lg overflow-hidden">
                  <Image 
                    src={logoSrc} 
                    alt={`${title} logo`} 
                    width={64} 
                    height={64} 
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">{title.charAt(0)}</span>
                </div>
              )}
            </div>

            <p className="text-gray-400 leading-relaxed mb-6">
              {description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {details.techStack.slice(0, 3).map((tech, i) => (
                <span key={i} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={projectUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex-1 py-3 px-6 rounded-xl text-white font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20 ${buttonBg}`}
            >
              {t.projects.access} <ExternalLink size={16} />
            </a>
            
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 transition-colors"
              aria-label={t.projects.details}
            >
              {isExpanded ? <X size={20} /> : <Info size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Expandable Details Section */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-black/20 border-t border-white/5"
          >
            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="flex items-center gap-2 text-foreground font-semibold mb-4">
                  <Layers size={18} className={accentColor} /> {t.projects.role}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {details.role}
                </p>
              </div>
              
              <div>
                <h4 className="flex items-center gap-2 text-foreground font-semibold mb-4">
                  <Zap size={18} className={accentColor} /> {t.projects.challenges}
                </h4>
                <ul className="text-sm text-gray-400 space-y-2">
                  {details.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-500" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-foreground font-semibold mb-4">
                  <Code size={18} className={accentColor} /> {t.projects.stack}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {details.techStack.map((tech, i) => (
                    <span key={i} className="px-2 py-1 text-xs rounded bg-white/5 text-gray-400 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;
