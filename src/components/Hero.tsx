import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Download, Terminal, ArrowRight, ShieldCheck, Check, Server, Lock } from 'lucide-react';

export const Hero: React.FC = () => {
  const prefersReduced = useReducedMotion();
  const easeCurve = [0.16, 1, 0.3, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: easeCurve,
      },
    },
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-[#070b12] text-slate-100 overflow-hidden"
    >
      {/* Background Cyber Circuit & Glow Accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00e5ff0d_1px,transparent_1px),linear-gradient(to_bottom,#00e5ff0d_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[320px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-5xl mx-auto w-full text-center z-10 flex flex-col items-center"
      >
        {/* Terminal Command Line Header */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-cyan-400/90 mb-5 tracking-wider bg-cyan-950/40 border border-cyan-800/40 px-3.5 py-1.5 rounded-md"
        >
          <span className="text-cyan-500 font-bold">&gt;_</span>
          <span>~/atharv $ whoami</span>
        </motion.div>

        {/* Large Cyber Display Name */}
        <motion.h1 
          variants={itemVariants}
          className="font-mono text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-wider text-cyan-400 mb-6 drop-shadow-[0_0_20px_rgba(6,182,212,0.55)]"
        >
          POONDRU ATHARV REDDY
        </motion.h1>

        {/* Primary Role / Designation */}
        <motion.h2 
          variants={itemVariants}
          className="font-mono text-lg sm:text-2xl font-bold text-cyan-300 mb-3 tracking-wide"
        >
          Cybersecurity Professional &bull; SOC &amp; VAPT Specialist
        </motion.h2>

        {/* Core Domains */}
        <motion.div 
          variants={itemVariants}
          className="font-mono text-xs sm:text-sm text-slate-400 flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-8 tracking-wider"
        >
          <span>Vulnerability Assessment (VAPT)</span>
          <span className="text-cyan-500">&bull;</span>
          <span>SOC Operations (L1/L2)</span>
          <span className="text-cyan-500">&bull;</span>
          <span>OWASP Top 10</span>
          <span className="text-cyan-500">&bull;</span>
          <span>Network Packet Analysis</span>
        </motion.div>

        {/* 4 Terminal Stats / Resume Highlights Badges */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl mb-10 text-left font-mono"
        >
          {/* Badge 1 */}
          <div className="flex items-center gap-2.5 p-3 rounded-lg border border-cyan-500/30 bg-[#0a121e]/80 shadow-[0_0_12px_rgba(6,182,212,0.08)]">
            <Check className="w-4 h-4 text-cyan-400 shrink-0" />
            <div>
              <p className="text-xs font-semibold text-slate-200">PortSwigger &amp; DVWA</p>
              <p className="text-[10px] text-slate-400">Practical Web Security Labs</p>
            </div>
          </div>

          {/* Badge 2 */}
          <div className="flex items-center gap-2.5 p-3 rounded-lg border border-cyan-500/30 bg-[#0a121e]/80 shadow-[0_0_12px_rgba(6,182,212,0.08)]">
            <Check className="w-4 h-4 text-cyan-400 shrink-0" />
            <div>
              <p className="text-xs font-semibold text-slate-200">Digit Defence</p>
              <p className="text-[10px] text-slate-400">Cybersecurity Intern</p>
            </div>
          </div>

          {/* Badge 3 */}
          <div className="flex items-center gap-2.5 p-3 rounded-lg border border-cyan-500/30 bg-[#0a121e]/80 shadow-[0_0_12px_rgba(6,182,212,0.08)]">
            <Check className="w-4 h-4 text-cyan-400 shrink-0" />
            <div>
              <p className="text-xs font-semibold text-slate-200">Net Secure &amp; Tools</p>
              <p className="text-[10px] text-slate-400">Traffic DPI &amp; Security PoCs</p>
            </div>
          </div>

          {/* Badge 4 */}
          <div className="flex items-center gap-2.5 p-3 rounded-lg border border-cyan-500/30 bg-[#0a121e]/80 shadow-[0_0_12px_rgba(6,182,212,0.08)]">
            <Check className="w-4 h-4 text-cyan-400 shrink-0" />
            <div>
              <p className="text-xs font-semibold text-slate-200">Burp &amp; Wireshark</p>
              <p className="text-[10px] text-slate-400">VAPT, Nmap &amp; OpenVAS</p>
            </div>
          </div>
        </motion.div>

        {/* 3 Action Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 font-mono text-sm"
        >
          {/* Button 1: View Projects */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-cyan-500/60 bg-[#081523] text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
          >
            <span>&gt; View Projects</span>
          </a>

          {/* Button 2: Contact Me */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-cyan-500/60 bg-[#081523] text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
          >
            <span>&gt; Contact Me</span>
          </a>

          {/* Button 3: Solid Resume Download */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center justify-center px-6 py-2.5 rounded-md bg-cyan-400 text-slate-950 font-bold hover:bg-cyan-300 transition-all duration-200 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
          >
            <div className="flex items-center gap-1.5 text-xs uppercase tracking-tight">
              <Download className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Download PDF</span>
            </div>
            <span className="text-[9px] font-normal text-slate-900 leading-none mt-0.5">ATS Resume Updated</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;