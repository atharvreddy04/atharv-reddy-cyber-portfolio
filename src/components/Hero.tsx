import React from 'react';
import { Shield, Terminal, ArrowRight, Download } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-[75vh] flex flex-col items-center justify-center text-center px-6 pt-16 pb-12 overflow-hidden">
      {/* Target Focus Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-cyan-950/40 text-cyan-300 border border-cyan-500/30 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
        <Shield className="w-3.5 h-3.5 text-cyan-400" />
        Cybersecurity Analyst &middot; VAPT &middot; Web AppSec
      </div>

      {/* Main Name with Reference Aurora Glow */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase aurora-heading">
        Poondru Atharv Reddy
      </h1>

      {/* Reference Laser Wipe Line */}
      <div className="w-64 sm:w-96 my-5 laser-beam mx-auto" />

      {/* Subtitles & Role Spec */}
      <p className="text-lg sm:text-2xl font-bold text-slate-200 tracking-wide font-mono mt-2">
        Cybersecurity Analyst <span className="text-cyan-400">&bull;</span> VAPT Specialist <span className="text-amber-300">&bull;</span> AppSec
      </p>

      <p className="text-slate-400 max-w-2xl mx-auto text-xs sm:text-sm font-mono mt-3 leading-relaxed">
        Evaluating attack surfaces, engineering reproducible PoC exploits, and securing digital infrastructures against critical OWASP Top 10 vulnerabilities.
      </p>

      {/* Action CTA Buttons */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4 font-mono text-xs">
        <a
          href="#projects"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 hover:bg-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all active:scale-95"
        >
          <Terminal className="w-4 h-4" />
          <span>&gt; View Projects</span>
        </a>

        <a
          href="#contact"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:border-slate-700 hover:text-white transition-all active:scale-95"
        >
          <span>&gt; Contact Me</span>
          <ArrowRight className="w-4 h-4 text-slate-400" />
        </a>

        <a
          href="/resume.pdf"
          download="Poondru_Atharv_Reddy_Resume.pdf"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold hover:brightness-110 shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
        >
          <Download className="w-4 h-4" />
          <span>Download PDF</span>
        </a>
      </div>
    </section>
  );
};