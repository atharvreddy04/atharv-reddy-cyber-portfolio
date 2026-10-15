import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const AboutJson: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-20 px-6 py-10 max-w-7xl mx-auto font-mono">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* [02_ACADEMICS] Card */}
        <div className="rounded-xl border border-cyan-500/30 bg-[#0d1117] p-6 shadow-[0_0_20px_rgba(6,182,212,0.08)] flex flex-col justify-between">
          <div>
            <div className="text-cyan-400 font-bold text-xs tracking-wider uppercase mb-3">
              [02_ACADEMICS]
            </div>

            <h3 className="text-xl font-bold text-white tracking-wide mb-2">
              B.Sc. in Computer Science
            </h3>

            <div className="text-xs text-slate-300 space-y-1">
              <p className="text-slate-200">Keshav Memorial Institute of Commerce & Sciences</p>
              <p className="text-slate-400">Osmania University — Hyderabad</p>
            </div>
          </div>

          {/* Clean text footer without the highlighted rectangular box */}
          <div className="flex items-center justify-between text-xs mt-6 pt-3">
            <span className="text-slate-400">2023 — Expected 2026</span>
            <span className="text-emerald-400 font-semibold">Coursework Completed</span>
          </div>
        </div>

        {/* [06_HANDS_ON_LABS] Card */}
        <div className="rounded-xl border border-cyan-500/30 bg-[#0d1117] p-6 shadow-[0_0_20px_rgba(6,182,212,0.08)] flex flex-col justify-between">
          <div className="space-y-4">
            <div className="text-cyan-400 font-bold text-xs tracking-wider uppercase">
              [06_HANDS_ON_LABS]
            </div>

            <div>
              <h4 className="text-sm font-bold text-white">PortSwigger &amp; DVWA Labs</h4>
              <p className="text-xs text-slate-400 mt-1">
                SQLi, XSS, CSRF, and Broken Access Control bypass validation.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white">
                Host Reconnaissance &amp; Traffic Analysis
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Nmap NSE automated discovery and packet anomaly inspection in Wireshark.
              </p>
            </div>
          </div>

          {/* Clean text footer without the highlighted rectangular box */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs mt-6 pt-3">
            <div className="flex items-center gap-2 text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Cyber Security Internship Certificate</span>
            </div>
            <div className="text-slate-400 text-[11px] sm:text-xs">
              Digit Defence • ID: DF202712438 (Issued Jul. 2026)
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};