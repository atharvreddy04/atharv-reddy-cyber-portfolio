import React from 'react';
import { CheckCircle2, Send } from 'lucide-react';

export const RecruitmentBanner: React.FC = () => {
  const roles = [
    'VAPT Engineer / Penetration Tester',
    'SOC Analyst (L1 / L2 Operations)',
    'Junior Application Security Engineer',
    'Vulnerability Management Analyst',
  ];

  return (
    <section className="px-6 py-6 max-w-7xl mx-auto font-mono">
      <div className="rounded-xl border border-cyan-500/20 bg-[#0B0F17]/90 p-6 sm:p-8 backdrop-blur-md">
        
        {/* Top Tag & Title */}
        <div className="text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-1">
          &gt; RECRUITMENT STATUS DASHBOARD
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide mb-6">
          &gt; CURRENTLY AVAILABLE FOR:
        </h3>

        {/* Main Content Layout (Without Vertical Divider Border) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          
          {/* Left Column: Roles & Status */}
          <div className="lg:col-span-2 space-y-5">
            {/* 2x2 Grid of Roles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
              {roles.map((role) => (
                <div key={role} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{role}</span>
                </div>
              ))}
            </div>

            {/* Clean Relocation & Availability text without the rectangular box */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-slate-400 tracking-wider text-[11px]">RELOCATION:</span>
                <span className="text-emerald-400 font-semibold">Open / Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400 tracking-wider text-[11px]">AVAILABILITY:</span>
                <span className="text-cyan-400 font-semibold">Immediate</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Note & Button (No vertical border line) */}
          <div className="flex flex-col justify-center items-start lg:items-end space-y-4">
            <p className="text-slate-400 text-xs sm:text-sm max-w-xs leading-relaxed text-left lg:text-right">
              Looking to fill a security operations or application security role? Let's connect directly.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-emerald-500/40 bg-emerald-950/20 text-emerald-400 text-xs font-semibold hover:bg-emerald-900/30 hover:border-emerald-400 transition-all shadow-[0_0_15px_rgba(16,185,129,0.15)]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Contact Directly</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};