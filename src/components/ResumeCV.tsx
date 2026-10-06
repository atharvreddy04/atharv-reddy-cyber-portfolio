import React from 'react';
import { ShieldCheck, Copy, Download, ExternalLink } from 'lucide-react';

export const ResumeCV: React.FC = () => {
  return (
    <section id="resume" className="px-6 py-8 max-w-7xl mx-auto font-mono">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs text-emerald-400">
            <ShieldCheck className="h-4 w-4" />
            <span>VERIFIED SECURITY CREDENTIALS</span>
          </div>
          <h2 className="text-2xl font-bold text-white mt-1">Professional Resume</h2>
          <p className="text-xs text-slate-400">Interactive 3D spatial cards with official PDF downloads.</p>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <button
            onClick={() => navigator.clipboard.writeText("Poondru Atharv Reddy - Cybersecurity Analyst")}
            className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-slate-300 hover:text-white hover:border-slate-500 hover:shadow-[0_0_15px_-3px_rgba(148,163,184,0.2)] transition-all duration-300"
          >
            <Copy className="h-3.5 w-3.5" />
            <span>Copy Plaintext Resume</span>
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg border border-cyan-500/40 bg-cyan-950/40 px-3 py-1.5 text-cyan-300 hover:bg-cyan-900/40 hover:border-cyan-400 hover:shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)] transition-all duration-300"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            <span>View PDF</span>
          </a>
          <a
            href="/resume.pdf"
            download="Poondru_Atharv_Reddy_Resume.pdf"
            className="flex items-center gap-1.5 rounded-lg border border-emerald-500/50 bg-emerald-500/10 px-3 py-1.5 text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-400 hover:shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)] transition-all duration-300"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* [01_EXECUTIVE_SUMMARY] */}
        <div className="lg:col-span-2 rounded-xl border border-cyan-500/20 bg-slate-900/50 p-5 text-xs transition-all duration-300 hover:border-cyan-400 hover:bg-slate-900/80 hover:shadow-[0_0_20px_-3px_rgba(6,182,212,0.25)]">
          <div className="text-cyan-400 font-semibold mb-2">[01_EXECUTIVE_SUMMARY]</div>
          <p className="text-slate-300 leading-relaxed mb-4">
            Aspiring Cybersecurity professional with hands-on experience in vulnerability assessment, web application security, and penetration testing. Skilled in evaluating attack surfaces, validating OWASP Top 10 vulnerabilities with Burp Suite, OpenVAS, and Nmap; engineering reproducible PoC exploits; and formulating actionable remediation guidance.
          </p>
          <div className="flex flex-wrap gap-2 text-[10px]">
            {['VAPT', 'Web AppSec', 'OWASP Top 10', 'PoC Exploits', 'Remediation Roadmaps'].map((pill, idx) => (
              <span key={idx} className="rounded-md border border-slate-700 bg-slate-800/80 px-2 py-1 text-slate-300 transition-colors hover:border-slate-500">
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* [02_ACADEMICS] */}
        <div className="rounded-xl border border-cyan-500/20 bg-slate-900/50 p-5 text-xs flex flex-col justify-between transition-all duration-300 hover:border-cyan-400 hover:bg-slate-900/80 hover:shadow-[0_0_20px_-3px_rgba(6,182,212,0.25)]">
          <div>
            <div className="text-cyan-400 font-semibold mb-2">[02_ACADEMICS]</div>
            <div className="text-sm font-bold text-white">B.Sc. in Computer Science</div>
            <div className="text-slate-400 mt-0.5">Keshav Memorial Institute of Commerce &amp; Sciences</div>
            <div className="text-slate-500">Osmania University — Hyderabad</div>
          </div>
          <div className="flex items-center justify-between text-[11px] pt-4 border-t border-slate-800">
            <span className="text-slate-400">2023 – Expected 2026</span>
            <span className="text-emerald-400">Coursework Completed</span>
          </div>
        </div>

        {/* [03_FIELD_EXPERIENCE] */}
        <div className="lg:col-span-2 rounded-xl border border-cyan-500/20 bg-slate-900/50 p-5 text-xs space-y-3 transition-all duration-300 hover:border-cyan-400 hover:bg-slate-900/80 hover:shadow-[0_0_20px_-3px_rgba(6,182,212,0.25)]">
          <div className="flex items-center justify-between">
            <div className="text-cyan-400 font-semibold">[03_FIELD_EXPERIENCE]</div>
            <span className="text-emerald-400 text-[11px]">Jan 2026 – Jul 2026</span>
          </div>
          <div>
            <div className="text-sm font-bold text-white">Cybersecurity Intern</div>
            <div className="text-slate-400">Digit Defence — Bengaluru (Remote)</div>
          </div>
          <ul className="list-disc pl-4 space-y-1.5 text-slate-300">
            <li>Conducted vulnerability assessments and web security testing using Burp Suite &amp; OpenVAS targeting OWASP Top 10 vulnerabilities.</li>
            <li>Engineered Proof of Concept (PoC) exploits validating live target security flaws.</li>
            <li>Analyzed network attack surfaces and traffic anomalies using Nmap and Wireshark.</li>
            <li>Formulated actionable technical remediation reports with patch strategies.</li>
          </ul>
        </div>

        {/* [04_SECURITY_TOOLSET] */}
        <div className="rounded-xl border border-cyan-500/20 bg-slate-900/50 p-5 text-xs space-y-3 transition-all duration-300 hover:border-cyan-400 hover:bg-slate-900/80 hover:shadow-[0_0_20px_-3px_rgba(6,182,212,0.25)]">
          <div className="text-cyan-400 font-semibold">[04_SECURITY_TOOLSET]</div>
          <div>
            <div className="text-slate-400 text-[11px]">Assessment &amp; Frameworks</div>
            <div className="text-slate-200 mt-0.5">Burp Suite, OpenVAS, Nmap, Wireshark, Kali Linux</div>
          </div>
          <div>
            <div className="text-slate-400 text-[11px]">Networking &amp; Protocols</div>
            <div className="text-slate-200 mt-0.5">TCP/IP, DNS, HTTP/HTTPS, OSI Model, Packet Analysis</div>
          </div>
          <div>
            <div className="text-slate-400 text-[11px]">Programming &amp; Scripting</div>
            <div className="text-slate-200 mt-0.5">Python, Java, C++, Bash/Shell Scripting</div>
          </div>
        </div>

        {/* [05_KEY_PROJECTS] */}
        <div className="lg:col-span-2 rounded-xl border border-cyan-500/20 bg-slate-900/50 p-5 text-xs space-y-4 transition-all duration-300 hover:border-cyan-400 hover:bg-slate-900/80 hover:shadow-[0_0_20px_-3px_rgba(6,182,212,0.25)]">
          <div className="text-cyan-400 font-semibold">[05_KEY_PROJECTS]</div>

          <div className="border border-slate-800 rounded-lg p-3 bg-slate-950/40 transition-all duration-300 hover:border-slate-700 hover:bg-slate-950/70">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-white text-sm">Phishing URL Detection Tool</span>
              <span className="text-[10px] text-cyan-400">Python / Regex</span>
            </div>
            <p className="text-slate-400">Heuristic entropy script with redirection auditing to identify typosquatting vectors.</p>
          </div>

          <div className="border border-slate-800 rounded-lg p-3 bg-slate-950/40 transition-all duration-300 hover:border-slate-700 hover:bg-slate-950/70">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-white text-sm">Secure Folder Encryptor</span>
              <span className="text-[10px] text-cyan-400">Java / AES-256</span>
            </div>
            <p className="text-slate-400">Cryptographic desktop utility leveraging AES-256-CBC, dynamic PBKDF2 salting, and SHA-256 integrity checks.</p>
          </div>
        </div>

        {/* [06_HANDS_ON_LABS] */}
        <div className="rounded-xl border border-cyan-500/20 bg-slate-900/50 p-5 text-xs space-y-4 transition-all duration-300 hover:border-cyan-400 hover:bg-slate-900/80 hover:shadow-[0_0_20px_-3px_rgba(6,182,212,0.25)]">
          <div className="text-cyan-400 font-semibold">[06_HANDS_ON_LABS]</div>

          <div>
            <div className="font-bold text-white">PortSwigger &amp; DVWA Labs</div>
            <div className="text-slate-400 mt-1">SQLi, XSS, CSRF, and Broken Access Control bypass validation.</div>
          </div>

          <div>
            <div className="font-bold text-white">Host Reconnaissance &amp; Traffic Analysis</div>
            <div className="text-slate-400 mt-1">Nmap NSE automated discovery and packet anomaly inspection in Wireshark.</div>
          </div>

          <div className="pt-2 border-t border-slate-800">
            <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4" />
              <span>Cyber Security Internship Certificate</span>
            </div>
            <div className="text-slate-500 text-[10px] mt-0.5">Digit Defence • ID: DF202712438 (Issued Jul. 2026)</div>
          </div>
        </div>
      </div>
    </section>
  );
};