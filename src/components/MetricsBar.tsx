import React from 'react';
import { Terminal, ShieldAlert, Bug, Wrench, Calendar, GraduationCap } from 'lucide-react';

const stats = [
  {
    icon: Terminal,
    value: 'Solved',
    label: 'PortSwigger Labs',
    sub: 'Hands-on Web AppSec Modules',
  },
  {
    icon: ShieldAlert,
    value: '25+',
    label: 'VAPT Assessments',
    sub: 'Target validations & audits',
  },
  {
    icon: Bug,
    value: '10+',
    label: 'PoC Exploits',
    sub: 'Validated flaw findings',
  },
  {
    icon: Wrench,
    value: '4',
    label: 'Security Tools',
    sub: 'Custom detection utilities',
  },
  {
    icon: Calendar,
    value: '2026',
    label: 'Internship Completed',
    sub: 'Digit Defence (Remote)',
  },
  {
    icon: GraduationCap,
    value: '2026',
    label: 'B.Sc. Graduate',
    sub: 'Osmania University',
  },
];

export const MetricsBar: React.FC = () => {
  return (
    <section className="px-6 py-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {stats.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-4 rounded-xl border border-cyan-500/20 bg-slate-900/40 text-center font-mono hover:border-cyan-500/50 hover:bg-slate-900/70 transition-all shadow-lg"
            >
              <Icon className="h-5 w-5 text-cyan-400 mb-2" />
              <div className="text-xl font-bold text-cyan-300">{s.value}</div>
              <div className="text-xs font-semibold text-slate-200 mt-1">{s.label}</div>
              <div className="text-[10px] text-slate-500 mt-0.5 leading-tight">{s.sub}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};