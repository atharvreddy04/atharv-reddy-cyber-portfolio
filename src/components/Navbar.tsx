import React, { useState } from 'react';
import { Download, Menu, X, Shield } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'CONTACT', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const navbarHeight = 80; // height of sticky navbar in pixels
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      window.history.pushState(null, '', href);
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0B0F17]/90 border-b border-slate-800/80 px-4 sm:px-8 py-3.5 select-none transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand / SecOps Status */}
        <a
          href="#home"
          onClick={(e) => handleScroll(e, '#home')}
          className="flex items-center gap-2.5 font-mono group"
        >
          <div className="flex items-center gap-1.5 text-cyan-400 font-bold text-sm tracking-wider group-hover:text-cyan-300 transition-colors">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span>[AR//SEC_OPS]</span>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] text-emerald-400 font-semibold bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            SYSTEM: NOMINAL
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 font-mono text-xs font-semibold tracking-wider text-slate-300">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Action: Download Resume & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-cyan-500/40 bg-cyan-950/30 text-cyan-400 text-xs font-mono font-semibold hover:bg-cyan-500/20 hover:border-cyan-400 transition-all shadow-[0_0_12px_rgba(6,182,212,0.15)] cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 stroke-[2.2]" />
            <span>Download Resume</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg border border-slate-700 bg-slate-900/60 text-slate-300 hover:text-cyan-400 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-slate-800/80 font-mono text-xs space-y-2 pb-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="block px-3 py-2 rounded-md text-slate-300 hover:text-cyan-400 hover:bg-cyan-950/20 transition-all cursor-pointer"
            >
              &gt; {item.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 text-cyan-400 hover:bg-cyan-950/20 rounded-md font-semibold"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;