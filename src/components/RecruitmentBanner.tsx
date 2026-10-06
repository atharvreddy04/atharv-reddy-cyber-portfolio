import React from 'react';
import { HighlightCard3D } from './HighlightCard3D';
import { CheckCircle2, Send } from 'lucide-react';

export const RecruitmentBanner = () => {
  const roles = [
    'VAPT Engineer / Penetration Tester',
    'SOC Analyst (L1 / L2 Operations)',
    'Junior Application Security Engineer',
    'Vulnerability Management Analyst',
  ];

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <HighlightCard3D glowColor="emerald">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono text-emerald-400 font-bold">
              &gt;_ RECRUITMENT STATUS DASHBOARD
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              &gt; CURRENTLY AVAILABLE FOR:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {roles.map((r, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-mono text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{r}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-6 text-xs font-mono text-slate-400">
              <div>
                <span className="block text-[10px] text-slate-500">RELOCATION</span>
                <span className="text-emerald-400 font-bold">✓ Open / Ready</span>
              </div>
              <div>
                <span className="block text-[10px] text-slate-500">AVAILABILITY</span>
                <span className="text-emerald-400 font-bold">✓ Immediate</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-950/80 border border-slate-800/80 rounded-xl p-6 text-center space-y-3">
            <p className="text-xs text-slate-300 font-mono leading-relaxed">
              Looking to fill a security operations or application security role? Let's connect directly.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs font-mono hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
            >
              <Send className="w-4 h-4" />
              <span>Contact Directly</span>
            </a>
          </div>
        </div>
      </HighlightCard3D>
    </section>
  );
};