import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Download, Check, Shield, Terminal, ArrowRight } from 'lucide-react';

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
    hidden: { opacity: 0, y: prefersReduced ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeCurve,
      },
    },
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-5xl mx-auto w-full text-center z-10"
      >
        {/* Security Status Tag */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-xs sm:text-sm font-medium tracking-wide mb-8 shadow-sm shadow-cyan-950">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span>Security Operations & Threat Defense Active</span>
        </motion.div>

        {/* Main Name / Title */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6"
        >
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">
            POONDRU ATHARV REDDY
          </span>
        </motion.h1>

        {/* Sub-headline / Roles */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-slate-300 text-base sm:text-lg md:text-xl font-medium mb-6"
        >
          <span className="text-cyan-400 font-semibold">SOC Operations (L1/L2)</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-200">Vulnerability Assessment & Penetration Testing</span>
          <span className="text-slate-600">•</span>
          <span className="text-cyan-400 font-semibold">OWASP Top 10 Auditing</span>
        </motion.div>

        {/* Profile Bio */}
        <motion.p 
          variants={itemVariants}
          className="max-w-3xl mx-auto text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed mb-10"
        >
          Cybersecurity professional specializing in securing enterprise attack surfaces, investigating network anomalies, 
          and executing structured penetration testing using Burp Suite, OpenVAS, Nmap, and Wireshark. Focused on actionable remediation 
          and incident monitoring.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          {/* Download / View Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold text-sm sm:text-base hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download className="w-4 h-4 text-slate-950" />
            <span>Download Resume</span>
          </a>

          {/* Contact / Projects Navigation Button */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm sm:text-base transition-all hover:border-slate-600"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </a>
        </motion.div>

        {/* Bottom Feature Badges */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto border border-slate-800/80 bg-slate-900/40 backdrop-blur-md rounded-xl p-4 sm:p-5"
        >
          <div className="flex flex-col items-center justify-center p-2">
            <div className="flex items-center gap-1.5 text-cyan-400 font-bold text-xl sm:text-2xl">
              <Shield className="w-5 h-5" />
              <span>VAPT & SOC</span>
            </div>
            <span className="text-xs text-slate-400 mt-1 uppercase tracking-wider">L1/L2 Monitoring</span>
          </div>

          <div className="flex flex-col items-center justify-center p-2 border-l border-slate-800">
            <div className="flex items-center gap-1.5 text-cyan-400 font-bold text-xl sm:text-2xl">
              <Check className="w-5 h-5" />
              <span>OWASP 10</span>
            </div>
            <span className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Web Security</span>
          </div>

          <div className="flex flex-col items-center justify-center p-2 border-t sm:border-t-0 sm:border-l border-slate-800">
            <div className="flex items-center gap-1.5 text-cyan-400 font-bold text-xl sm:text-2xl">
              <span>Net Secure</span>
            </div>
            <span className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Packet Telemetry</span>
          </div>

          <div className="flex flex-col items-center justify-center p-2 border-t sm:border-t-0 border-l border-slate-800">
            <div className="flex items-center gap-1.5 text-cyan-400 font-bold text-xl sm:text-2xl">
              <span>4+</span>
            </div>
            <span className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Certifications</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;