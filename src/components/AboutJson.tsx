import React from 'react';
import { MapPin, GraduationCap, Crosshair, ShieldCheck } from 'lucide-react';

export const AboutJson: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-20 px-6 py-12 max-w-7xl mx-auto font-mono">
      {/* Top Section: ABOUT_ME Narrative & cat profile.json Terminal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-16">
        
        {/* Left Column: Bio Narrative & Metadata List */}
        <div className="space-y-6">
          <div className="text-cyan-400 font-bold text-sm tracking-wider uppercase">
            // ABOUT_ME
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            I focus on Web Application Security and Vulnerability Assessment. My
            experience includes auditing attack surfaces, completing hands-on PortSwigger
            Web Security Academy labs, verifying OWASP Top 10 vulnerabilities with Burp
            Suite and OpenVAS, developing reproducible PoC scripts, and gaining practical
            offensive-defensive knowledge through internships.
          </p>

          <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Hyderabad, Telangana, India</span>
            </div>

            <div className="flex items-center gap-3">
              <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>B.Sc. in Computer Science — Osmania University</span>
            </div>

            <div className="flex items-center gap-3">
              <Crosshair className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Web Pentesting • SQL Injection &amp; XSS • Business Logic Audits</span>
            </div>
          </div>
        </div>

        {/* Right Column: Terminal Window with profile.json */}
        <div className="rounded-xl border border-slate-800 bg-[#0B0F17]/90 p-5 sm:p-6 shadow-[0_0_30px_rgba(6,182,212,0.05)]">
          <div className="text-xs text-slate-400 font-semibold mb-3">
            $ cat profile.json
          </div>

          <div className="rounded-lg border border-slate-800/80 bg-[#06090e] p-5 text-xs text-slate-300 leading-relaxed overflow-x-auto">
            <pre className="font-mono">
              <code>
{`{
  "name": "Poondru Atharv Reddy",
  "role": "Cybersecurity Analyst & VAPT Specialist",
  "education": "B.Sc. in Computer Science - Osmania University",
  "vulnerabilities_reported": "OWASP Top 10 Verified",
  "labs_completed": "PortSwigger & DVWA",
  "specialties": [
    "Web Application Pentesting",
    "Vulnerability Assessment & VAPT",
    "OWASP Top 10 Auditing",
    "Network Packet Analysis (Wireshark)"
  ],
  "certifications": [
    "NASSCOM Certified Cyber Security Professional",
    "Google Foundations of Cybersecurity",
    "Digit Defence Cybersecurity Internship"
  ],
  "status": "Open to security opportunities",
  "available_immediately": true
}`}
              </code>
            </pre>
          </div>
        </div>

      </div>

      {/* Bottom Section: Academics & Hands-on Labs (Clean, without highlighted box wrappers) */}
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
              <p className="text-slate-200">Keshav Memorial Institute of Commerce &amp; Sciences</p>
              <p className="text-slate-400">Osmania University — Hyderabad</p>
            </div>
          </div>

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