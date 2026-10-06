import React from 'react';
import { HighlightCard3D } from './HighlightCard3D';
import { Terminal, Shield, Bug, FolderCode, Briefcase, Award } from 'lucide-react';

export const MetricsBar = () => {
  const stats = [
    { 
      icon: Terminal, 
      value: 'Solved', 
      label: 'PortSwigger Labs', 
      desc: 'Hands-on Web AppSec solved', 
      color: 'emerald' as const 
    },
    { 
      icon: Shield, 
      value: '25+', 
      label: 'VAPT Assessments', 
      desc: 'Target validations & audits', 
      color: 'cyan' as const 
    },
    { 
      icon: Bug, 
      value: '10+', 
      label: 'PoC Exploits', 
      desc: 'Validated flaw findings', 
      color: 'emerald' as const 
    },
    { 
      icon: FolderCode, 
      value: '4', 
      label: 'Security Tools', 
      desc: 'Custom detection utilities', 
      color: 'cyan' as const 
    },
    { 
      icon: Briefcase, 
      value: '2026', 
      label: 'Internship Completed', 
      desc: 'Digit Defence (Remote)', 
      color: 'emerald' as const 
    },
    { 
      icon: Award, 
      value: '2026', 
      label: 'B.Sc. Graduate', 
      desc: 'Osmania University', 
      color: 'cyan' as const 
    },
  ];

  return (
    <section className="py-10 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map((s, idx) => {
          const Icon = s.icon;
          return (
            <HighlightCard3D key={idx} glowColor={s.color} className="text-center">
              <div className="flex flex-col items-center justify-center space-y-1.5 py-1">
                <Icon className={`w-5 h-5 ${s.color === 'emerald' ? 'text-emerald-400' : 'text-cyan-400'}`} />
                <span className={`text-xl font-black font-mono tracking-tight ${s.color === 'emerald' ? 'text-emerald-400' : 'text-cyan-400'}`}>
                  {s.value}
                </span>
                <span className="text-xs font-bold text-white block">{s.label}</span>
                <span className="text-[10px] text-slate-400 font-mono block">{s.desc}</span>
              </div>
            </HighlightCard3D>
          );
        })}
      </div>
    </section>
  );
};