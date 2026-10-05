import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ResumeCV } from './components/ResumeCV';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <ResumeCV />
        <Contact />
      </main>
      <footer className="py-8 border-t border-slate-800 text-center font-mono text-xs text-slate-500">
        [SEC_PORTFOLIO] &copy; {new Date().getFullYear()} Atharv Reddy &middot; TLS 1.3 ENCRYPTED
      </footer>
    </div>
  );
}