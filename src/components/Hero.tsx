import React from 'react';
import { Download, Check } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-24 pb-16 px-6 max-w-7xl mx-auto font-mono text-center">
      {/* 1. Circular Avatar Anchor */}
      <div className="flex justify-center mb-5">
        <div className="relative">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-cyan-500/50 bg-slate-900 flex items-center justify-center shadow-[0_0_25px_rgba(6,182,212,0.25)]">
            <span className="text-3xl sm:text-4xl text-cyan-400 font-bold tracking-wider">AR</span>
          </div>
        </div>
      </div>

      {/* 2. Terminal Whoami Command Line */}
      <div className="text-xs sm:text-sm text-slate-400 mb-3 tracking-widest">
        &gt;_ ~/atharv $ whoami
      </div>

      {/* 3. Capitalized Headline */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-wider mb-4">
        POONDRU ATHARV REDDY
      </h1>

      {/* 4. Certification Pill Tag */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-slate-900/60 text-xs text-slate-200 mb-4 flex-wrap justify-center">
        <span>🏆</span>
        <span className="font-semibold text-slate-300">
          NEW - NASSCOM Certified Cyber Security Professional (July 2026)
        </span>
        <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
          Govt. Approved
        </span>
      </div>

      {/* 5. Role & Domain Subtitles */}
      <div className="text-lg sm:text-xl font-bold text-white mb-1">
        Cybersecurity Analyst &amp; VAPT Specialist
      </div>
      <div className="text-xs sm:text-sm text-slate-400 mb-8">
        Web Application Security &bull; VAPT &bull; Security Research
      </div>

      {/* 6. 4-Column Capability Checklist */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 max-w-4xl mx-auto mb-10 text-xs text-slate-300">
        <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg border border-slate-800 bg-slate-900/50">
          <Check className="h-3.5 w-3.5 text-cyan-400" />
          <span>OWASP Top 10 Labs</span>
        </div>
        <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg border border-slate-800 bg-slate-900/50">
          <Check className="h-3.5 w-3.5 text-cyan-400" />
          <span>PoC Exploits Validated</span>
        </div>
        <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg border border-slate-800 bg-slate-900/50">
          <Check className="h-3.5 w-3.5 text-cyan-400" />
          <span>Junior Security Analyst</span>
        </div>
        <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg border border-slate-800 bg-slate-900/50">
          <Check className="h-3.5 w-3.5 text-cyan-400" />
          <span>Web Application Security</span>
        </div>
      </div>

      {/* 7. Action Controls */}
      <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
        <a
          href="#certifications"
          className="px-6 py-2.5 rounded-lg border border-cyan-500/40 bg-cyan-950/30 text-cyan-300 hover:bg-cyan-900/40 hover:border-cyan-400 transition-all flex items-center gap-1.5"
        >
          <span>&gt; View Certifications</span>
        </a>
        <a
          href="#contact"
          className="px-6 py-2.5 rounded-lg border border-slate-700 bg-slate-900/80 text-slate-300 hover:text-white hover:border-slate-500 transition-all flex items-center gap-1.5"
        >
          <span>&gt; Contact Me</span>
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          download="Poondru_Atharv_Reddy_Resume.pdf"
          className="px-6 py-2.5 rounded-lg border border-emerald-500/50 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-400 transition-all flex items-center gap-1.5"
        >
          <Download className="h-3.5 w-3.5" />
          <span>Download PDF</span>
        </a>
      </div>
    </section>
  );
};