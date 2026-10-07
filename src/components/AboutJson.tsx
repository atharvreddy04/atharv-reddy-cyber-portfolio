import React, { useState } from 'react';
import { ShieldCheck, Terminal, Cpu } from 'lucide-react';

export const AboutJson: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'capabilities'>('profile');

  const profileJson = {
    name: "POONDRU ATHARV REDDY",
    role: "Cybersecurity Analyst & VAPT Specialist",
    education: "B.Sc. Computer Science (Osmania University)",
    specializations: [
      "Vulnerability Assessment & Penetration Testing (VAPT)",
      "Web Application Security (OWASP Top 10)",
      "Network Traffic Analysis & Packet Inspection",
      "Threat Detection & Security Information Management"
    ],
    toolset: [
      "Burp Suite Pro",
      "OpenVAS / Greenbone",
      "Nmap",
      "Wireshark",
      "Metasploit",
      "Kali Linux"
    ],
    status: "Open for Security Operations & Penetration Testing Engagements"
  };

  return (
    <section id="about-dossier" className="px-6 py-8 max-w-7xl mx-auto w-full font-mono">
      <div className="flex items-center gap-2 text-xs text-emerald-400 mb-2">
        <ShieldCheck className="h-4 w-4" />
        <span>// ABOUT_ME</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
        Security Focus &amp; Profile Telemetry
      </h2>

      {/* Grid with full-width responsive columns to prevent squishing */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full items-start">
        {/* Left Dossier Card */}
        <div className="lg:col-span-5 w-full min-w-0 rounded-xl border border-cyan-500/20 bg-slate-900/60 p-6 backdrop-blur-md space-y-4">
          <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
            <Cpu className="h-4 w-4" />
            <span>OPERATIONAL_PROFILE</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            I specialize in Web Application Security, Vulnerability Assessment, and Penetration Testing (VAPT). My practical experience involves auditing dynamic endpoints, discovering high-impact OWASP vulnerabilities with Burp Suite and OpenVAS, engineering reproducible Proof of Concepts (PoCs), and establishing zero-trust protection perimeters.
          </p>
          <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-1.5">
            <div>LOCATION: <span className="text-slate-200">Hyderabad, India</span></div>
            <div>STATUS: <span className="text-emerald-400">Available Immediately</span></div>
          </div>
        </div>

        {/* Right JSON Terminal Card */}
        <div className="lg:col-span-7 w-full min-w-0 rounded-xl border border-cyan-500/20 bg-slate-900/60 p-6 backdrop-blur-md overflow-hidden">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Terminal className="h-4 w-4 text-emerald-400" />
              <span>$ cat profile.json</span>
            </div>
            <div className="flex gap-2 text-xs">
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activeTab === 'profile'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                profile
              </button>
            </div>
          </div>

          <pre className="text-xs text-emerald-400 font-mono overflow-x-auto p-2 bg-slate-950/80 rounded-lg leading-relaxed whitespace-pre">
            {JSON.stringify(profileJson, null, 2)}
          </pre>
        </div>
      </div>
    </section>
  );
};