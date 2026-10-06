import React from 'react';
import { HighlightCard3D } from './HighlightCard3D';
import { MapPin, GraduationCap, ShieldCheck } from 'lucide-react';

export const AboutJson = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-xs font-mono text-emerald-400 mb-2">// ABOUT_ME</div>
      <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">Security Focus & Profile Telemetry</h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <HighlightCard3D className="lg:col-span-6" glowColor="emerald">
          <div className="space-y-4">
            <p className="text-slate-300 text-sm leading-relaxed">
              I focus on Web Application Security, Vulnerability Assessment, and Penetration Testing (VAPT). My hands-on experience includes completing solved PortSwigger Web Security Academy labs, identifying OWASP Top 10 vulnerabilities, authoring reproducible Proof-of-Concepts (PoCs), and analyzing network traffic patterns.
            </p>
            <div className="space-y-2 text-xs font-mono pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>B.Sc. in Computer Science — Osmania University (2022–2026)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Focus: Web AppSec &middot; OWASP Top 10 &middot; VAPT &middot; SOC Analysis</span>
              </div>
            </div>
          </div>
        </HighlightCard3D>

        <HighlightCard3D className="lg:col-span-6" glowColor="cyan">
          <div className="space-y-2">
            <div className="text-xs font-mono text-slate-400 border-b border-slate-800 pb-2">
              $ cat profile.json
            </div>
            <pre className="font-mono text-[11px] sm:text-xs text-slate-300 overflow-x-auto leading-relaxed py-1">
{`{
  "name": "Poondru Atharv Reddy",
  "role": "Cybersecurity Analyst / VAPT",
  "education": "B.Sc. Computer Science (OU)",
  "specialties": [
    "Web Application Pentesting",
    "OWASP Top 10 Auditing",
    "Threat Detection & Incident Response",
    "Automated Scanner Engineering"
  ],
  "tooling": [
    "Burp Suite Pro",
    "OpenVAS",
    "Wireshark",
    "Nmap",
    "Kali Linux"
  ],
  "status": "Ready for VAPT & SOC Engagements"
}`}
            </pre>
          </div>
        </HighlightCard3D>
      </div>
    </section>
  );
};