import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface SectionRevealProps {
  children: React.ReactNode;
  delay?: number;
  variant?: 'primary' | 'secondary' | 'stagger';
  className?: string;
}

export const SectionReveal: React.FC<SectionRevealProps> = ({
  children,
  delay = 0,
  variant = 'primary',
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Subtle spring ease (Linear / Apple style)
  const transitionCurve = [0.16, 1, 0.3, 1] as const;

  const variants = {
    // Primary sections: subtle upward glide + defocus recovery
    primary: {
      hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 36, filter: 'blur(4px)' },
      visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
          duration: 0.8,
          delay,
          ease: transitionCurve,
        },
      },
    },
    // Supporting data blocks: minimal vertical offset without blur
    secondary: {
      hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay,
          ease: transitionCurve,
        },
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={variants[variant === 'stagger' ? 'primary' : variant]}
      className={className}
    >
      {children}
    </motion.div>
  );
};