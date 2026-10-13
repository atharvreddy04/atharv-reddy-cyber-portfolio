import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  badge: string;
  responsibilities: string[];
  techStack: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 'digit-defence',
    role: 'Cybersecurity Intern',
    company: 'Digit Defence',
    location: 'Remote',
    period: 'Jan 2026 – Jul 2026',
    badge: 'Security Operations & VAPT',
    responsibilities: [
      'Executed vulnerability assessments and web security testing using Burp Suite & OpenVAS targeting OWASP Top 10 vulnerabilities.',
      'Engineered reproducible Proof of Concept (PoC) exploits validating live target security flaws.',
      'Analyzed network attack vectors and inspected traffic anomalies utilizing Nmap and Wireshark.',
      'Formulated comprehensive technical remediation reports with patch guidance and mitigation roadmaps.',
    ],
    techStack: ['Burp Suite', 'OpenVAS', 'Nmap', 'Wireshark', 'Kali Linux', 'Python'],
  },
  {
    id: 'independent-research',
    role: 'Security Researcher & Lab Analyst',
    company: 'Hands-On Labs & Security Research',
    location: 'Hyderabad, India',
    period: '2025 – Present',
    badge: 'Offensive Security & CVE Replication',
    responsibilities: [
      'Conducted dynamic testing on web applications across PortSwigger Web Security Academy and DVWA environments.',
      'Simulated SQL Injection (SQLi), Cross-Site Scripting (XSS), and Cross-Site Request Forgery (CSRF) exploit chains.',
      'Developed automated security analysis tools including heuristic phishing detection and cryptographic storage solutions.',
    ],
    techStack: ['Burp Suite Pro', 'Metasploit', 'Python', 'Java', 'OWASP Top 10', 'Linux'],
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="px-6 py-12 max-w-7xl mx-auto font-mono">
      {/* Token Header */}
      <div className="flex items-center gap-2 text-xs text-emerald-400 mb-1">
        <Briefcase className="h-4 w-4" />
        <span>// CAREER_TRAJECTORY</span>
      </div>
      <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 tracking-wider mb-2">
        // EXPERIENCE
      </h2>
      <p className="text-xs text-slate-400 mb-8 italic">
        "Operational security engagements, penetration testing workflows, and professional background."
      </p>

      {/* Experience Timeline Grid */}
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="rounded-xl border border-cyan-500/20 bg-slate-900/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-cyan-400"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <span className="text-[10px] text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-2.5 py-0.5 rounded font-semibold">
                    {exp.badge}
                  </span>
                </div>
                <div className="text-sm font-semibold text-cyan-300 mt-0.5">
                  {exp.company}
                </div>
              </div>

              <div className="flex flex-col sm:items-end text-xs text-slate-400 space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                  <MapPin className="h-3 w-3" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-2 mt-4 text-xs text-slate-300">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{resp}</span>
                </li>
              ))}
            </ul>

            {/* Tech Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-4 mt-4 border-t border-slate-800/80 text-[11px]">
              <span className="text-slate-500 font-semibold text-[10px] uppercase tracking-wider">
                Tech &amp; Tools:
              </span>
              {exp.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};