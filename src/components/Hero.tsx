import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Download, Check } from 'lucide-react';

export const Hero: React.FC = () => {
  const prefersReduced = useReducedMotion();

  // Cinematic Apple / Linear easing curve
  const easeCurve = [0.16, 1, 0.3, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: prefersReduced ? 0 : 24, 
      filter: prefersReduced ? 'none' : 'blur(6px)' 
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: easeCurve,
      },
    },
  };

  const avatarVariants = {
    hidden: { 
      opacity: 0, 
      scale: prefersReduced ? 1 : 0.85,
      filter: prefersReduced ? 'none' : 'blur(8px)' 
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.9,
        ease: easeCurve,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 16, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: easeCurve,
      },
    },
  };

  const checklistContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.05,
      },
    },
  };

  const checkItemVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeCurve },
    },
  };

  const stats = [
    'OWASP Top 10 Labs',
    'PoC Exploits Validated',
    'Junior Security Analyst',
    'Web Application Security',
  ];

  return (
    <section id="hero" className="relative pt-24 pb-16 px-6 max-w-7xl mx-auto font-mono text-center overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        {/* 1. Circular Avatar Anchor with Glow & Scale Reveal */}
        <motion.div variants={avatarVariants} className="flex justify-center mb-5">
          <div className="relative group">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-cyan-500/50 bg-slate-900 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-shadow duration-500 group-hover:shadow-[0_0_40px_rgba(6,182,212,0.5)]">
              <span className="text-3xl sm:text-4xl text-cyan-400 font-bold tracking-wider select-none">
                AR
              </span>
            </div>
          </div>
        </motion.div>

        {/* 2. Terminal Whoami Command Line */}
        <motion.div
          variants={itemVariants}
          className="text-xs sm:text-sm text-slate-400 mb-3 tracking-widest select-none"
        >
          &gt;_ ~/atharv $ whoami
        </motion.div>

        {/* 3. Main Name Header (Clean Uppercase with Blur-to-Sharp Transition) */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-wider mb-4 drop-shadow-[0_0_24px_rgba(6,182,212,0.18)]"
        >
          POONDRU ATHARV REDDY
        </motion.h1>

        {/* 4. Certification Pill Tag */}
        <motion.div
          variants={badgeVariants}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/40 bg-slate-900/70 text-xs text-slate-200 mb-4 flex-wrap justify-center shadow-[0_0_20px_rgba(6,182,212,0.15)]"
        >
          <span>🏆</span>
          <span className="font-semibold text-slate-300">
            NEW - NASSCOM Certified Cyber Security Professional (July 2026)
          </span>
          <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
            Govt. Approved
          </span>
        </motion.div>

        {/* 5. Role & Domain Subtitles */}
        <motion.div variants={itemVariants} className="text-lg sm:text-xl font-bold text-white mb-1">
          Cybersecurity Analyst &amp; VAPT Specialist
        </motion.div>
        <motion.div variants={itemVariants} className="text-xs sm:text-sm text-slate-400 mb-8">
          Web Application Security &bull; VAPT &bull; Security Research
        </motion.div>

        {/* 6. Staggered Checkbox Capability Matrix */}
        <motion.div
          variants={checklistContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-2.5 max-w-4xl w-full mx-auto mb-10 text-xs text-slate-300"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={checkItemVariants}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              className="flex items-center justify-center gap-2 p-2.5 rounded-lg border border-slate-800 bg-slate-900/50 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-colors"
            >
              <Check className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
              <span>{stat}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* 7. Action CTA Trio */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold"
        >
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#certifications"
            className="px-6 py-2.5 rounded-lg border border-cyan-500/40 bg-cyan-950/30 text-cyan-300 hover:bg-cyan-900/40 hover:border-cyan-400 transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(6,182,212,0.1)]"
          >
            <span>&gt; View Certifications</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="px-6 py-2.5 rounded-lg border border-slate-700 bg-slate-900/80 text-slate-300 hover:text-white hover:border-slate-500 transition-all flex items-center gap-1.5"
          >
            <span>&gt; Contact Me</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="/resume.pdf"
            target="_blank"
            download="Poondru_Atharv_Reddy_Resume.pdf"
            className="px-6 py-2.5 rounded-lg border border-emerald-500/50 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-400 transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Download PDF</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};