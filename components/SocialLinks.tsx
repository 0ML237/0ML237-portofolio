"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const SocialLinks = () => {
  const { t } = useLanguage();

  const socials = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/marcus-temgoua-953256237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      color: 'hover:text-[#0A66C2] hover:border-[#0A66C2]',
      bgHover: 'hover:bg-[#0A66C2]/10'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/0ML237',
      color: 'hover:text-white hover:border-white',
      bgHover: 'hover:bg-white/10'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/share/1Bn5UVV3di/?mibextid=wwXIfr',
      color: 'hover:text-[#1877F2] hover:border-[#1877F2]',
      bgHover: 'hover:bg-[#1877F2]/10'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/marcustemgoua',
      color: 'hover:text-[#E4405F] hover:border-[#E4405F]',
      bgHover: 'hover:bg-[#E4405F]/10'
    }
  ];

  return (
    <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          {t.social.title}
        </h2>
        <p className="text-gray-400 mb-8">
          {t.social.subtitle}
        </p>
        
        <div className="flex justify-center gap-4 flex-wrap">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative p-4 rounded-2xl border border-border bg-card transition-all duration-300 ${social.color} ${social.bgHover}`}
              aria-label={social.name}
            >
              <social.icon size={28} className="transition-transform duration-300 group-hover:rotate-12" />
              
              {/* Tooltip */}
              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-card border border-border rounded-lg text-sm text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                {social.name}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SocialLinks;
