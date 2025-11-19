"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Figma, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const FigmaGallery = () => {
  const { t } = useLanguage();
  
  // Placeholder data - User should replace images
  const designs = [
    { title: "Dashboard Analytics", color: "bg-blue-500/20" },
    { title: "Mobile App UI", color: "bg-purple-500/20" },
    { title: "E-commerce Design", color: "bg-orange-500/20" },
    { title: "Design System", color: "bg-green-500/20" }
  ];

  return (
    <div className="mt-20">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-[#1e1e1e] rounded-lg border border-white/10">
          <Figma size={24} className="text-[#F24E1E]" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">{t.projects.figma_title}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {designs.map((design, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-border cursor-pointer"
          >
            {/* Placeholder Visual */}
            <div className={`absolute inset-0 ${design.color} opacity-50 group-hover:opacity-70 transition-opacity`} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/20 font-bold text-4xl group-hover:scale-110 transition-transform duration-500">UI</span>
            </div>

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <div className="flex justify-between items-end">
                <span className="text-white font-medium">{design.title}</span>
                <div className="p-2 bg-white/10 rounded-full backdrop-blur-sm">
                  <ArrowUpRight size={16} className="text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <a href="#" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-foreground transition-colors border-b border-transparent hover:border-foreground pb-0.5">
          {t.projects.figma_link} <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  );
};

export default FigmaGallery;
