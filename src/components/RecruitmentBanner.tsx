import React from 'react';
import { CheckCircle2, Send } from 'lucide-react';

export const RecruitmentBanner: React.FC = () => {
  return (
    <section className="px-6 py-6 max-w-7xl mx-auto font-mono">
      <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/60 p-6 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:bg-slate-900/80 hover:shadow-[0_0_25px_-4px_rgba(6,182,212,0.3)]">
        <div>
          <div className="text-xs text-cyan-400 mb-1">&gt; RECRUITMENT STATUS DASHBOARD</div>
          <h3 className="text-xl font-bold text-white mb-4">&gt; CURRENTLY AVAILABLE FOR:</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>VAPT Engineer / Penetration Tester</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>SOC Analyst (L1 / L2 Operations)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Junior Application Security Engineer</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Vulnerability Management Analyst</span>
            </div>
          </div>

          <div className="flex items-center gap-6 mt-4 pt-4 border-t border-slate-800 text-[11px] text-slate-400">
            <div>RELOCATION: <span className="text-emerald-400 font-semibold">Open / Ready</span></div>
            <div>AVAILABILITY: <span className="text-cyan-400 font-semibold">Immediate</span></div>
          </div>
        </div>

        <div className="w-full md:w-auto text-center md:text-right border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
          <p className="text-xs text-slate-400 mb-3 max-w-xs">
            Looking to fill a security operations or application security role? Let's connect directly.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/50 bg-emerald-500/10 px-6 py-2.5 text-xs text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-400 hover:shadow-[0_0_20px_-3px_rgba(16,185,129,0.35)] transition-all duration-300 w-full md:w-auto font-semibold"
          >
            <Send className="h-3.5 w-3.5" />
            <span>Contact Directly</span>
          </a>
        </div>
      </div>
    </section>
  );
};