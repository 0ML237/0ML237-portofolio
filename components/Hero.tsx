"use client";

import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Code2, Palette, Terminal, Monitor, Smartphone, Database, Layers, Cpu, Download } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  // Mouse position motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for mouse movement
  const springConfig = { damping: 50, stiffness: 50, mass: 1 }; // Very smooth and floaty
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      // Calculate normalized position (-1 to 1)
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const icons = [
    { Icon: Code2, color: "text-cyan-400", delay: 0, depth: 1 },
    { Icon: Palette, color: "text-purple-400", delay: 2, depth: 2 },
    { Icon: Terminal, color: "text-green-400", delay: 4, depth: 1.5 },
    { Icon: Monitor, color: "text-blue-400", delay: 1, depth: 0.5 },
    { Icon: Smartphone, color: "text-pink-400", delay: 3, depth: 2.5 },
    { Icon: Database, color: "text-yellow-400", delay: 5, depth: 1.2 },
    { Icon: Layers, color: "text-orange-400", delay: 2.5, depth: 1.8 },
    { Icon: Cpu, color: "text-red-400", delay: 4.5, depth: 0.8 },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden bg-background transition-colors duration-500">
      
      {/* Dynamic Floating Icons */}
      {icons.map(({ Icon, color, delay, depth }, index) => {
        // Create unique parallax transforms for each icon based on its depth
        const x = useTransform(springX, [-1, 1], [-40 * depth, 40 * depth]);
        const y = useTransform(springY, [-1, 1], [-40 * depth, 40 * depth]);
        
        return (
          <motion.div
            key={index}
            className={`absolute ${color} opacity-20`}
            style={{ x, y, left: `${(index / icons.length) * 80 + 10}%`, top: `${(index % 3) * 30 + 15}%` }}
          >
            {/* Inner floating animation */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 5 + Math.random() * 3, // Slower, more organic float
                repeat: Infinity, 
                ease: "easeInOut",
                delay: delay
              }}
            >
              <Icon size={32 + Math.random() * 24} />
            </motion.div>
          </motion.div>
        );
      })}

      {/* Centralized Content */}
      <div className="z-10 text-center space-y-8 max-w-4xl mx-auto relative">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-medium tracking-[0.2em] uppercase text-sm md:text-base"
        >
          {t.hero.role}
        </motion.h2>
        
        <div className="relative py-4">
          {/* Glow Effect Behind Text */}
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
          
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter relative z-10"
          >
            <span 
              className="block md:inline hover:scale-105 transition-transform duration-500 cursor-default"
              style={{ 
                color: "#f5f5f5",
                textShadow: "0 0 30px rgba(239, 68, 68, 0.6), 0 0 60px rgba(239, 68, 68, 0.4)",
                filter: "drop-shadow(0 0 10px rgba(239, 68, 68, 0.5))"
              }}
            >
              MARCUS
            </span>
            <span 
              className="block md:inline md:ml-4 hover:scale-105 transition-transform duration-500 cursor-default"
              style={{ 
                color: "#f5f5f5",
                textShadow: "0 0 30px rgba(236, 72, 153, 0.6), 0 0 60px rgba(236, 72, 153, 0.4)",
                filter: "drop-shadow(0 0 10px rgba(236, 72, 153, 0.5))"
              }}
            >
              TEMGOUA
            </span>
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          dangerouslySetInnerHTML={{ __html: t.hero.description }}
        />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 pt-8"
        >
          <a 
            href="#projects"
            className="group relative px-8 py-4 bg-background border border-primary/50 text-primary rounded-full overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:border-primary"
          >
            <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative font-medium">{t.hero.cta_projects}</span>
          </a>
          
          <a 
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/5 border border-white/10 text-foreground rounded-full hover:bg-white/10 transition-all flex items-center gap-2"
          >
            <Download size={18} />
            <span>{t.hero.resume}</span>
          </a>

          <a 
            href="mailto:marcustemgoua2@gmail.com"
            className="px-8 py-4 bg-white/5 border border-white/10 text-foreground rounded-full hover:bg-white/10 transition-all"
          >
            {t.nav.contact}
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs uppercase tracking-widest">{t.hero.scroll}</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
