import React from 'react';
import { MapPin, GraduationCap, Crosshair } from 'lucide-react';

export const AboutJson: React.FC = () => {
  const profileJson = {
    name: "Poondru Atharv Reddy",
    role: "Cybersecurity Analyst & VAPT Specialist",
    education: "B.Sc. in Computer Science - Osmania University",
    vulnerabilities_reported: "OWASP Top 10 Verified",
    labs_completed: "PortSwigger & DVWA",
    specialties: [
      "Web Application Pentesting",
      "Vulnerability Assessment & VAPT",
      "OWASP Top 10 Auditing",
      "Network Packet Analysis (Wireshark)"
    ],
    certifications: [
      "NASSCOM Certified Cyber Security Professional",
      "Google Foundations of Cybersecurity",
      "Digit Defence Cybersecurity Internship"
    ],
    status: "Open to security opportunities",
    available_immediately: true
  };

  return (
    <section id="about" className="px-6 py-12 max-w-7xl mx-auto font-mono">
      {/* Token Header */}
      <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 tracking-wider mb-6">
        // ABOUT_ME
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Narrative & Key Attribute Items */}
        <div className="lg:col-span-6 space-y-6 text-xs sm:text-sm text-slate-300">
          <p className="leading-relaxed">
            I focus on Web Application Security and Vulnerability Assessment. My experience includes auditing attack surfaces, completing hands-on PortSwigger Web Security Academy labs, verifying OWASP Top 10 vulnerabilities with Burp Suite and OpenVAS, developing reproducible PoC scripts, and gaining practical offensive-defensive knowledge through internships.
          </p>

          <div className="space-y-3 pt-2 text-xs">
            <div className="flex items-center gap-3 text-slate-300">
              <MapPin className="h-4 w-4 text-cyan-400 shrink-0" />
              <span>Hyderabad, Telangana, India</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <GraduationCap className="h-4 w-4 text-cyan-400 shrink-0" />
              <span>B.Sc. in Computer Science &mdash; Osmania University</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Crosshair className="h-4 w-4 text-cyan-400 shrink-0" />
              <span>Web Pentesting &bull; SQL Injection &amp; XSS &bull; Business Logic Audits</span>
            </div>
          </div>
        </div>

        {/* Right Column: $ cat profile.json Code Box */}
        <div className="lg:col-span-6 rounded-xl border border-cyan-500/20 bg-slate-900/60 p-5 backdrop-blur-md">
          <div className="text-xs text-slate-400 mb-3">$ cat profile.json</div>
          <pre className="text-xs font-mono text-cyan-300 overflow-x-auto leading-relaxed whitespace-pre bg-slate-950/70 p-4 rounded-lg border border-slate-800">
{JSON.stringify(profileJson, null, 2)}
          </pre>
        </div>
      </div>
    </section>
  );
};