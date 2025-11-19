"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Figma, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const FigmaGallery = () => {
  const { t } = useLanguage();
  
  const designs = [
    { 
      title: t.projects.figma_designs?.tontine || "Dashboard Tontine",
      image: "/figma-tontine-dashboard.jpg",
      color: "bg-orange-500/20"
    },
    { 
      title: t.projects.figma_designs?.mobile || "Mobile App UI",
      color: "bg-purple-500/20" 
    },
    { 
      title: t.projects.figma_designs?.ecommerce || "E-commerce Design",
      color: "bg-blue-500/20" 
    },
    { 
      title: t.projects.figma_designs?.design_system || "Design System",
      color: "bg-green-500/20" 
    }
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
            {design.image ? (
              <>
                {/* Real Image */}
                <Image 
                  src={design.image} 
                  alt={design.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </>
            ) : (
              <>
                {/* Placeholder */}
                <div className={`absolute inset-0 ${design.color} opacity-50 group-hover:opacity-70 transition-opacity`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/20 font-bold text-4xl group-hover:scale-110 transition-transform duration-500">UI</span>
                </div>
              </>
            )}

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <div className="flex justify-between items-end">
                <span className="text-white font-medium text-sm">{design.title}</span>
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
