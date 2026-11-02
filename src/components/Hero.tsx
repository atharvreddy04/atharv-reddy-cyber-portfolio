import React, { useState, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Download, Check, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  const prefersReduced = useReducedMotion();
  const easeCurve = [0.16, 1, 0.3, 1] as const;

  // Terminal state
  const [cmd, setCmd] = useState('');
  const [cmdFeedback, setCmdFeedback] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  const scrollToTarget = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const query = cmd.trim().toLowerCase();
    if (!query) return;

    if (query === 'help') {
      setCmdFeedback('Available commands: skills, projects, exp, certs, about, contact, netsecure, clear');
    } else if (query.includes('skill') || query.includes('tool') || query.includes('resume')) {
      scrollToTarget('skills');
      setCmdFeedback('> Navigating to #skills (Resume & Security Toolset)...');
    } else if (query.includes('project') || query.includes('repo') || query.includes('git') || query.includes('code')) {
      scrollToTarget('projects');
      setCmdFeedback('> Navigating to #projects (GitHub Contributions & Repos)...');
    } else if (query.includes('exp') || query.includes('intern') || query.includes('work')) {
      scrollToTarget('experience');
      setCmdFeedback('> Navigating to #experience (Digit Defence Internship)...');
    } else if (query.includes('cert') || query.includes('iifis') || query.includes('nasscom')) {
      scrollToTarget('certifications');
      setCmdFeedback('> Navigating to #certifications (Verified Credentials)...');
    } else if (query.includes('about') || query.includes('bio')) {
      scrollToTarget('about');
      setCmdFeedback('> Navigating to #about...');
    } else if (query.includes('contact') || query.includes('mail') || query.includes('reach')) {
      scrollToTarget('contact');
      setCmdFeedback('> Navigating to #contact...');
    } else if (query.includes('netsecure')) {
      window.open('https://atharvreddy-network-traffic-analyzer.vercel.app', '_blank', 'noopener,noreferrer');
      setCmdFeedback('> Launching NetSecure Analyzer in new tab...');
    } else if (query === 'whoami') {
      setCmdFeedback('Poondru Atharv Reddy — Cybersecurity Specialist & Ethical Hacker');
    } else if (query === 'clear' || query === 'cls') {
      setCmdFeedback(null);
    } else {
      setCmdFeedback(`command not found: "${cmd.trim()}". Type "help" or search: skills, projects, certs`);
    }

    setCmd('');
  };

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
    hidden: { 
      opacity: 0, 
      y: prefersReduced ? 0 : 20,
      filter: prefersReduced ? 'none' : 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: easeCurve,
      },
    },
  };

  const cardListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.05,
      },
    },
  };

  const cardItemVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: easeCurve },
    },
  };

  const cards = [
    { title: 'PortSwigger & DVWA', subtitle: 'Practical Web Security Labs' },
    { title: 'Digit Defence', subtitle: 'Cybersecurity Intern' },
    { title: 'Net Secure & Tools', subtitle: 'Traffic DPI & Security PoCs' },
    { title: 'Burp & Wireshark', subtitle: 'VAPT, Nmap & OpenVAS' },
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 font-mono text-center overflow-hidden bg-[#040911]"
    >
      {/* Cyan Ambient Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[340px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-6xl mx-auto w-full flex flex-col items-center z-10"
      >
        {/* Terminal Whoami Prompt */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md border border-cyan-800/60 bg-[#06121e]/80 text-cyan-400 text-xs sm:text-sm tracking-wider mb-6 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
        >
          <span className="text-cyan-400">&gt;_</span>
          <span>~/atharv $ whoami</span>
        </motion.div>

        {/* Large Neon Name Header */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-wider text-cyan-400 mb-6 drop-shadow-[0_0_28px_rgba(6,182,212,0.6)]"
        >
          POONDRU ATHARV REDDY
        </motion.h1>

        {/* Domain Strip */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-400 mb-10 tracking-wide"
        >
          <span>Vulnerability Assessment (VAPT)</span>
          <span className="text-cyan-400 font-bold">&bull;</span>
          <span>SOC Operations (L1/L2)</span>
          <span className="text-cyan-400 font-bold">&bull;</span>
          <span>OWASP Top 10</span>
          <span className="text-cyan-400 font-bold">&bull;</span>
          <span>Network Packet Analysis</span>
        </motion.div>

        {/* 4 Feature Cards */}
        <motion.div
          variants={cardListVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 w-full max-w-5xl mb-10"
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={cardItemVariants}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="flex items-center gap-3 p-3.5 rounded-lg border border-cyan-800/40 bg-[#06121e]/75 shadow-[0_0_15px_rgba(6,182,212,0.08)] text-left hover:border-cyan-500/50 hover:bg-[#081726] transition-all"
            >
              <Check className="w-4 h-4 text-cyan-400 shrink-0 stroke-[2.5]" />
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-slate-100 tracking-tight">
                  {card.title}
                </span>
                <span className="text-[11px] text-slate-400">
                  {card.subtitle}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 3 Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm mb-10"
        >
          {/* Button 1: View Projects */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#projects"
            onClick={(e) => handleScroll(e, '#projects')}
            className="px-6 py-3 rounded-md border border-cyan-800/70 bg-[#061320] text-cyan-400 font-semibold hover:border-cyan-500 hover:bg-cyan-950/40 transition-all shadow-[0_0_15px_rgba(6,182,212,0.12)] cursor-pointer"
          >
            &gt; View Projects
          </motion.a>

          {/* Button 2: Contact Me */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="px-6 py-3 rounded-md border border-cyan-800/70 bg-[#061320] text-cyan-400 font-semibold hover:border-cyan-500 hover:bg-cyan-950/40 transition-all shadow-[0_0_15px_rgba(6,182,212,0.12)] cursor-pointer"
          >
            &gt; Contact Me
          </motion.a>

          {/* Button 3: Solid Cyan Download PDF Button */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Poondru_Atharv_Reddy_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-cyan-400 text-slate-950 font-bold uppercase tracking-wider hover:bg-cyan-300 transition-all shadow-[0_0_22px_rgba(6,182,212,0.55)] cursor-pointer"
          >
            <Download className="w-4 h-4 stroke-[2.5]" />
            <span>DOWNLOAD PDF</span>
          </motion.a>
        </motion.div>

        {/* Minimal Functional Command Prompt at the Bottom */}
        <motion.div variants={itemVariants} className="w-full max-w-xl">
          <form
            onSubmit={handleCommand}
            onClick={() => inputRef.current?.focus()}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-cyan-800/50 bg-[#06121e]/85 shadow-[0_0_15px_rgba(6,182,212,0.1)] text-xs text-left cursor-text hover:border-cyan-500/50 transition-colors"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="text-emerald-400 font-bold shrink-0">
              atharv-reddy-cyber-portfolio:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={cmd}
              onChange={(e) => setCmd(e.target.value)}
              placeholder="type a command (e.g. skills, projects, certs)..."
              className="w-full bg-transparent text-cyan-300 outline-none border-none p-0 focus:ring-0 font-mono caret-cyan-400 placeholder:text-slate-600 text-xs"
              spellCheck={false}
              autoComplete="off"
            />
          </form>

          {/* Inline Command Feedback Output */}
          {cmdFeedback && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-left px-3 text-[11px] text-cyan-300 font-mono"
            >
              {cmdFeedback}
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;