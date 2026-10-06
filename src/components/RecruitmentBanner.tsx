import React from 'react';
import { CheckCircle2, Radio, Calendar, ArrowRight } from 'lucide-react';

export const RecruitmentBanner: React.FC = () => {
  return (
    <section className="px-6 py-6 max-w-7xl mx-auto">
      <div className="cyber-card-highlight-emerald rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
              <Radio className="h-3 w-3 animate-pulse text-emerald-400" />
              <span>RECRUITMENT STATUS DASHBOARD</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-mono text-white">
              Open to SecOps, SOC &amp; VAPT Roles
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-mono max-w-2xl leading-relaxed">
              Available for immediate full-time or contract offensive/defensive cybersecurity positions, penetration testing engagements, and SOC operations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950/60 border border-slate-800 text-xs font-mono text-slate-300">
              <Calendar className="h-3.5 w-3.5 text-emerald-400" />
              <span>Status: Active &amp; Ready</span>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-mono text-xs font-bold hover:bg-emerald-400 transition-all duration-300 shadow-[0_0_20px_-3px_rgba(16,185,129,0.4)]"
            >
              <span>Initiate Contact</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};