import React from 'react';
import { Shield, Download } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F17]/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Shield className="w-6 h-6 text-emerald-400" />
          <span className="font-mono font-bold tracking-wider text-slate-100">[AR//SEC_OPS]</span>
          <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            SYSTEM: NOMINAL
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-6 text-sm text-slate-400 font-mono">
          <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
          <a href="#resume" className="hover:text-emerald-400 transition-colors">Resume</a>
          <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
        </div>

        <a 
          href="/resume.pdf" 
          download="Poondru_Atharv_Reddy_Resume.pdf"
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-mono border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 transition-colors"
        >
          <Download className="w-3.5 h-3.5" />
          Download Resume
        </a>
      </div>
    </nav>
  );
};