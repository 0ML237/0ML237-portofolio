"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type MotionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
};

export const MotionWrapper = ({
  children,
  className,
  delay = 0,
  direction = "up",
}: MotionWrapperProps) => {
  const getVariants = (): Variants => {
    const distance = 50;
    const initial = { opacity: 0, y: 0, x: 0 };
    
    if (direction === "up") initial.y = distance;
    if (direction === "down") initial.y = -distance;
    if (direction === "left") initial.x = distance;
    if (direction === "right") initial.x = -distance;

    return {
      hidden: initial,
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut",
          delay: delay,
        },
      },
    };
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};
