import React, { useState } from 'react';
import { ShieldCheck, Copy, ExternalLink, Download, Check } from 'lucide-react';

export const ResumeCV: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyPlaintext = () => {
    const text = `POONDRU ATHARV REDDY - CYBERSECURITY RESUME
Role: Cybersecurity Analyst & VAPT Specialist
Location: Hyderabad, Telangana, India
Education: B.Sc. in Computer Science - Osmania University (Expected 2026)

EXPERIENCE:
Cybersecurity Intern - Digit Defence (Jan 2026 - Jul 2026)
- Conducted vulnerability assessments and web security testing using Burp Suite & OpenVAS targeting OWASP Top 10.
- Engineered Proof of Concept (PoC) exploits validating live target security flaws.
- Analyzed network attack surfaces and traffic anomalies using Nmap and Wireshark.
- Formulated actionable technical remediation reports with patch strategies.

CORE SKILLS & TOOLSET:
- Tools: Burp Suite, OpenVAS, Nmap, Wireshark, Kali Linux
- Protocols: TCP/IP, DNS, HTTP/HTTPS, OSI Model, Packet Analysis
- Programming: Python, Java, C++, Bash/Shell Scripting`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="resume" className="px-6 py-12 max-w-7xl mx-auto font-mono">
      {/* Top Header & Action Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold mb-1">
            <ShieldCheck className="h-4 w-4" />
            <span>VERIFIED SECURITY CREDENTIALS</span>
          </div>
          <h2 className="text-3xl font-black text-white tracking-wide">
            Professional Resume
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Interactive 3D spatial cards with official PDF downloads.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 text-xs">
          <button
            onClick={handleCopyPlaintext}
            className="px-3.5 py-2 rounded-lg border border-slate-800 bg-slate-900/80 text-slate-300 hover:text-white hover:border-slate-700 transition-all flex items-center gap-1.5"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-slate-400" />
                <span>Copy Plaintext Resume</span>
              </>
            )}
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-lg border border-cyan-500/40 bg-cyan-950/30 text-cyan-300 hover:bg-cyan-900/40 hover:border-cyan-400 transition-all flex items-center gap-1.5"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            <span>View PDF</span>
          </a>

          <a
            href="/resume.pdf"
            download="Poondru_Atharv_Reddy_Resume.pdf"
            className="px-3.5 py-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-400 transition-all flex items-center gap-1.5"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>

      {/* 2-Column Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (Cards 01, 03, 05) */}
        <div className="lg:col-span-7 space-y-6">
          {/* [01_EXECUTIVE_SUMMARY] */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-md">
            <div className="text-xs text-cyan-400 font-bold mb-3 tracking-wider">
              [01_EXECUTIVE_SUMMARY]
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
              Aspiring Cybersecurity professional with hands-on experience in vulnerability assessment, web application security, and penetration testing. Skilled in evaluating attack surfaces, validating OWASP Top 10 vulnerabilities with Burp Suite, OpenVAS, and Nmap; engineering reproducible PoC exploits; and formulating actionable remediation guidance.
            </p>
            <div className="flex flex-wrap gap-2 text-[11px]">
              {['VAPT', 'Web AppSec', 'OWASP Top 10', 'PoC Exploits', 'Remediation Roadmaps'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded border border-slate-800 bg-slate-950/80 text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* [03_FIELD_EXPERIENCE] */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-md">
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="text-cyan-400 font-bold tracking-wider">[03_FIELD_EXPERIENCE]</span>
              <span className="text-cyan-400 font-semibold text-[11px]">Jan 2026 – Jul 2026</span>
            </div>

            <div className="inline-block bg-cyan-400 text-slate-950 font-bold text-xs px-2 py-0.5 rounded mb-1">
              Cybersecurity Intern
            </div>
            <div className="text-xs text-slate-400 mb-4">
              Digit Defence — Bengaluru (Remote)
            </div>

            <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside">
              <li>
                Conducted vulnerability assessments and web security testing using Burp Suite &amp; OpenVAS targeting OWASP Top 10 vulnerabilities.
              </li>
              <li>
                Engineered Proof of Concept (PoC) exploits validating live target security flaws.
              </li>
              <li>
                Analyzed network attack surfaces and traffic anomalies using Nmap and Wireshark.
              </li>
              <li>
                Formulated actionable technical remediation reports with patch strategies.
              </li>
            </ul>
          </div>

          {/* [05_KEY_PROJECTS] */}
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/50 p-6 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            <div className="text-xs text-cyan-400 font-bold mb-4 tracking-wider">
              [05_KEY_PROJECTS]
            </div>

            <div className="space-y-4">
              {/* Project 1 */}
              <div className="rounded-lg border border-slate-800 bg-slate-950/80 p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-bold text-white">Phishing URL Detection Tool</span>
                  <span className="text-[11px] text-cyan-400">Python / Regex</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Heuristic entropy script with redirection auditing to identify typosquatting vectors.
                </p>
              </div>

              {/* Project 2 */}
              <div className="rounded-lg border border-slate-800 bg-slate-950/80 p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-bold text-white">Secure Folder Encryptor</span>
                  <span className="text-[11px] text-cyan-400">Java / AES-256</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Cryptographic desktop utility leveraging AES-256-CBC, dynamic PBKDF2 salting, and SHA-256 integrity checks.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Cards 02, 04, 06) */}
        <div className="lg:col-span-5 space-y-6">
          {/* [02_ACADEMICS] */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-md">
            <div className="text-xs text-cyan-400 font-bold mb-2 tracking-wider">
              [02_ACADEMICS]
            </div>
            <h3 className="text-base font-bold text-white mb-1">
              B.Sc. in Computer Science
            </h3>
            <div className="text-xs text-slate-400">
              Keshav Memorial Institute of Commerce &amp; Sciences
            </div>
            <div className="text-xs text-slate-500 mb-6">
              Osmania University — Hyderabad
            </div>

            <div className="flex items-center justify-between text-xs pt-4 border-t border-slate-800/80">
              <span className="text-slate-400">2023 – Expected 2026</span>
              <span className="text-emerald-400 font-semibold">Coursework Completed</span>
            </div>
          </div>

          {/* [04_SECURITY_TOOLSET] */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-md space-y-4">
            <div className="text-xs text-cyan-400 font-bold tracking-wider">
              [04_SECURITY_TOOLSET]
            </div>

            <div>
              <div className="text-[11px] text-slate-400">Assessment &amp; Frameworks</div>
              <div className="text-xs font-semibold text-slate-200 mt-0.5">
                Burp Suite, OpenVAS, Nmap, Wireshark, Kali Linux
              </div>
            </div>

            <div>
              <div className="text-[11px] text-slate-400">Networking &amp; Protocols</div>
              <div className="text-xs font-semibold text-slate-200 mt-0.5">
                TCP/IP, DNS, HTTP/HTTPS, OSI Model, Packet Analysis
              </div>
            </div>

            <div>
              <div className="text-[11px] text-slate-400">Programming &amp; Scripting</div>
              <div className="text-xs font-semibold text-slate-200 mt-0.5">
                Python, Java, C++, Bash/Shell Scripting
              </div>
            </div>
          </div>

          {/* [06_HANDS_ON_LABS] */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-md space-y-4">
            <div className="text-xs text-cyan-400 font-bold tracking-wider">
              [06_HANDS_ON_LABS]
            </div>

            <div>
              <div className="text-xs font-bold text-white">PortSwigger &amp; DVWA Labs</div>
              <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                SQLi, XSS, CSRF, and Broken Access Control bypass validation.
              </div>
            </div>

            <div>
              <div className="text-xs font-bold text-white">Host Reconnaissance &amp; Traffic Analysis</div>
              <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                Nmap NSE automated discovery and packet anomaly inspection in Wireshark.
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/80">
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                <ShieldCheck className="h-4 w-4" />
                <span>Cyber Security Internship Certificate</span>
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                Digit Defence &bull; ID: DF202712438 (Issued Jul. 2026)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};