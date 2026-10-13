import React, { useState } from 'react';
import { Shield, Download, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#resume' },
    { name: 'PROJECTS', href: '#contributions' },
    { name: 'EXPERIENCE', href: '#experience' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F17]/80 backdrop-blur-md border-b border-slate-900 font-mono">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left Branding */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold tracking-wider">
            <Shield className="h-5 w-5 text-emerald-400" />
            <span className="text-white text-sm sm:text-base">[AR//SEC_OPS]</span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>SYSTEM: NOMINAL</span>
          </div>
        </div>

        {/* Desktop Links: HOME, ABOUT, SKILLS, PROJECTS, EXPERIENCE */}
        <div className="hidden md:flex items-center gap-7 text-xs text-slate-300 font-bold tracking-wider">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="/resume.pdf"
            download="Poondru_Atharv_Reddy_Resume.pdf"
            className="px-4 py-1.5 rounded-lg border border-emerald-500/50 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-400 text-xs font-semibold flex items-center gap-1.5 transition-all"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0B0F17] px-6 py-4 space-y-3 text-xs font-bold tracking-wider">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-cyan-400 py-1"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download="Poondru_Atharv_Reddy_Resume.pdf"
            className="block text-center mt-3 py-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 font-bold"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
};