import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Terminal, ShieldAlert, FileText, Send, ArrowUpRight, Activity } from 'lucide-react';
import { HighlightCard3D } from './HighlightCard3D';
import { MagneticButton } from './MagneticButton';

export const Hero: React.FC = () => {
  const prefersReduced = useReducedMotion();
  const [terminalInput, setTerminalInput] = useState('');
  const [logs, setLogs] = useState<string[]>([
    'Atharv Security Engine v2.4 initialized...',
    'Surface monitor: SECURE [0 vulnerabilities exposed].',
    'Type "help" for executable security modules.',
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    let res = '';

    if (cmd === 'help') {
      res = 'Modules: about, skills, projects, certifications, clear';
    } else if (cmd === 'about') {
      res = 'Atharv Reddy — Penetration Tester & SOC Analyst. Focused on offensive validation and zero-trust engineering.';
    } else if (cmd === 'skills') {
      res = 'Arsenal: Burp Suite Pro, Nmap, Wireshark, OpenVAS, Metasploit, Python, Java, Kali Linux.';
    } else if (cmd === 'projects') {
      res = 'Projects: Phishing URL Detection Engine, AES-256 Folder Cryptor, OWASP Lab Audits.';
    } else if (cmd === 'certifications') {
      res = 'Certifications: NASSCOM Security Professional, Google Cybersecurity, Digit Defence Internship.';
    } else if (cmd === 'clear') {
      setLogs([]);
      setTerminalInput('');
      return;
    } else if (cmd === '') {
      return;
    } else {
      res = `Engine: command not found: "${cmd}". Enter "help" for available protocols.`;
    }

    setLogs((prev) => [...prev, `atharv@sec-ops:~$ ${terminalInput}`, res]);
    setTerminalInput('');
  };

  const easeCurve = [0.16, 1, 0.3, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.7,
        ease: easeCurve,
      },
    },
  };

  const nameWords = ['POONDRU', 'ATHARV', 'REDDY'];

  return (
    <section
      id="about"
      className="relative pt-28 pb-16 px-6 max-w-7xl mx-auto w-full font-mono overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial={prefersReduced ? false : 'hidden'}
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full"
      >
        {/* Left Column: Headline & Bio */}
        <div className="lg:col-span-7 w-full min-w-0 space-y-6">
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_20px_-3px_rgba(6,182,212,0.25)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <ShieldAlert className="w-3.5 h-3.5 text-cyan-400" />
              <span className="tracking-wide">OFFENSIVE &amp; DEFENSIVE SECURITY OPERATIONS</span>
            </div>
          </motion.div>

          {/* Capital Name Header */}
          <motion.div variants={itemVariants} className="w-full">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white flex flex-wrap gap-x-3.5 gap-y-1">
              {nameWords.map((word, i) => (
                <span
                  key={i}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-300"
                >
                  {word}
                </span>
              ))}
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3 w-full">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-semibold">
              Cybersecurity Analyst <span className="text-cyan-400">|</span> VAPT &amp; SOC Analyst{' '}
              <span className="text-cyan-400">|</span> Web Application Security{' '}
              <span className="text-cyan-400">|</span> Threat Detection &amp; Incident Response
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl">
              Specialized in validating OWASP Top 10 vulnerabilities, testing attack surfaces with
              Burp Suite &amp; OpenVAS, formulating actionable remediation guidance, and engineering
              defensive countermeasures.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
            <MagneticButton
              href="#resume"
              className="group relative px-6 py-3.5 rounded-xl border border-slate-700 bg-slate-900/80 text-slate-200 text-xs font-bold hover:border-cyan-400 hover:bg-slate-900 hover:text-white transition-all duration-300 flex items-center gap-2.5 shadow-lg shadow-black/40 hover:shadow-[0_0_24px_-4px_rgba(6,182,212,0.35)]"
            >
              <FileText className="w-4 h-4 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
              <span>INSPECT RESUME</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-400" />
            </MagneticButton>

            <MagneticButton
              href="#contact"
              className="group relative px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-xs hover:from-emerald-400 hover:to-teal-300 transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-[0_0_28px_rgba(16,185,129,0.45)] flex items-center gap-2.5"
            >
              <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              <span>ESTABLISH CONTACT</span>
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-400"
          >
            <div className="flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <span>SECURITY AUDITS: <strong className="text-white">ACTIVE</strong></span>
            </div>
            <div>
              CLEARANCE: <strong className="text-cyan-400">CONFIRMED</strong>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 3D Interactive Terminal Dock */}
        <motion.div variants={itemVariants} className="lg:col-span-5 w-full min-w-0">
          <HighlightCard3D glowColor="cyan">
            <div className="bg-slate-950/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between rounded-t-xl -mx-6 -mt-6 mb-4">
              <div className="flex items-center gap-2.5">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono text-slate-300 tracking-wider">
                  sec-ops-terminal.sh
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40 border border-amber-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              </div>
            </div>

            <div className="font-mono text-xs text-slate-300 space-y-2.5 h-64 overflow-y-auto pr-1">
              {logs.map((log, idx) => (
                <div
                  key={idx}
                  className={
                    log.startsWith('atharv@')
                      ? 'text-cyan-400 font-bold'
                      : log.includes('SECURE') || log.includes('initialized')
                      ? 'text-emerald-400'
                      : 'text-slate-300 leading-relaxed'
                  }
                >
                  {log}
                </div>
              ))}

              <form onSubmit={handleCommand} className="flex items-center gap-2 pt-1">
                <span className="text-emerald-400 font-bold">atharv@sec-ops:~$</span>
                <input
                  type="text"
                  className="bg-transparent outline-none flex-1 text-slate-100 placeholder:text-slate-600 focus:placeholder-transparent"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="type 'help'"
                  autoComplete="off"
                  spellCheck="false"
                />
              </form>
            </div>
          </HighlightCard3D>
        </motion.div>
      </motion.div>
    </section>
  );
};