import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Terminal, ShieldAlert, FileText, Send, ArrowUpRight } from 'lucide-react';
import { HighlightCard3D } from './HighlightCard3D';

export const Hero: React.FC = () => {
  const prefersReduced = useReducedMotion();
  const [terminalInput, setTerminalInput] = useState('');
  const [logs, setLogs] = useState<string[]>([
    'Atharv Security Engine v2.4 initialized...',
    'Type "help" to inspect accessible nodes.',
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    let res = '';

    if (cmd === 'help') {
      res = 'Commands: about, skills, projects, clear';
    } else if (cmd === 'about') {
      res = 'Specialist in VAPT, SOC operations, vulnerability management, and incident response.';
    } else if (cmd === 'skills') {
      res = 'Tools: Burp Suite Pro, Wireshark, Nmap, OpenVAS, Kali Linux, Python, Java.';
    } else if (cmd === 'projects') {
      res = 'Projects: Phishing URL Detector, Secure Folder Encryptor, Web AppSec Labs.';
    } else if (cmd === 'clear') {
      setLogs([]);
      setTerminalInput('');
      return;
    } else if (cmd === '') {
      return;
    } else {
      res = `Command not recognized: "${cmd}". Type "help".`;
    }

    setLogs((prev) => [...prev, `atharv@sec-ops:~$ ${terminalInput}`, res]);
    setTerminalInput('');
  };

  // Apple & Linear style timing curves
  const springEase = [0.16, 1, 0.3, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.85,
        ease: springEase,
      },
    },
  };

  return (
    <section id="about" className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial={prefersReduced ? false : 'hidden'}
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
      >
        {/* Left Column: Pitched Typography & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 backdrop-blur-md shadow-[0_0_15px_-3px_rgba(6,182,212,0.25)]">
              <ShieldAlert className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>Offensive &amp; Defensive Security Operations</span>
            </div>
          </motion.div>

          {/* Headline Name */}
          <motion.div variants={itemVariants} className="overflow-hidden">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight hero-headline-shimmer">
              Poondru Atharv Reddy
            </h1>
          </motion.div>

          {/* Technical Specialty Roles */}
          <motion.div variants={itemVariants}>
            <p className="text-sm sm:text-base text-slate-300 font-mono leading-relaxed">
              Cybersecurity Analyst <span className="text-emerald-400">|</span> VAPT &amp; SOC Analyst <span className="text-emerald-400">|</span> Web Application Security <span className="text-emerald-400">|</span> Vulnerability Management <span className="text-emerald-400">|</span> Threat Detection &amp; Incident Response
            </p>
          </motion.div>

          {/* Value Proposition */}
          <motion.div variants={itemVariants}>
            <p className="text-slate-400 leading-relaxed max-w-xl text-sm sm:text-base">
              Practical experience evaluating attack surfaces, engineering PoC exploits, performing vulnerability assessments, and formulating actionable remediation roadmaps.
            </p>
          </motion.div>

          {/* Interactive Magnetic Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2 font-mono">
            <a
              href="#resume"
              className="group relative px-5 py-3 rounded-xl border border-slate-700 bg-slate-900/70 text-slate-200 text-sm font-semibold hover:border-cyan-400/60 hover:bg-slate-900 hover:text-white transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-[0_0_20px_-4px_rgba(6,182,212,0.35)] active:scale-[0.98]"
            >
              <FileText className="w-4 h-4 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
              <span>View Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
            </a>

            <a
              href="#contact"
              className="group relative px-5 py-3 rounded-xl bg-emerald-500 text-slate-950 font-semibold text-sm hover:bg-emerald-400 transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-[0_0_22px_rgba(16,185,129,0.45)] flex items-center gap-2 active:scale-[0.98]"
            >
              <Send className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              <span>Get In Touch</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Interactive Terminal in 3D Highlight Card */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5"
        >
          <HighlightCard3D glowColor="emerald">
            <div className="bg-slate-950 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between rounded-t-lg -mx-6 -mt-6 mb-4">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono text-slate-400">sec_terminal ~ session_id_902</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-slate-700" />
                <div className="w-2 h-2 rounded-full bg-slate-700" />
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
              </div>
            </div>

            <div className="font-mono text-xs text-slate-300 space-y-2 h-64 overflow-y-auto pr-1">
              {logs.map((log, idx) => (
                <div
                  key={idx}
                  className={log.startsWith('atharv@') ? 'text-emerald-400 font-semibold' : 'text-slate-300'}
                >
                  {log}
                </div>
              ))}
              <form onSubmit={handleCommand} className="flex items-center gap-1.5 mt-2">
                <span className="text-emerald-400 font-semibold">atharv@sec-ops:~$</span>
                <input
                  type="text"
                  className="bg-transparent outline-none flex-1 text-slate-100 placeholder:text-slate-600 focus:placeholder-transparent"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="help"
                />
              </form>
            </div>
          </HighlightCard3D>
        </motion.div>
      </motion.div>
    </section>
  );
};