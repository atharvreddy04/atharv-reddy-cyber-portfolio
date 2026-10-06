import React, { useState } from 'react';
import { Copy, Check, Download, ExternalLink, Briefcase, GraduationCap, ShieldCheck, Terminal, Award, Code2, Network, FolderGit2 } from 'lucide-react';
import { HighlightCard3D } from './HighlightCard3D';

export const ResumeCV = () => {
  const [copied, setCopied] = useState(false);

  const plainTextResume = `POONDRU ATHARV REDDY
Phone: +91 9573546197 | Email: atharvareddy.04@gmail.com | Location: Hyderabad, India
LinkedIn: linkedin.com/in/atharv-reddy-44511b282 | GitHub: github.com/atharvreddy04

PROFESSIONAL SUMMARY:
Aspiring Cybersecurity professional with practical experience in vulnerability assessment, web application security, and penetration testing. Proficient in evaluating attack surfaces and validating standard OWASP Top 10 vulnerabilities using Burp Suite, OpenVAS, Nmap, and Wireshark. Experienced in assessing live targets, engineering PoC exploits, and compiling comprehensive technical remediation reports.

EDUCATION:
Keshav Memorial Institute of Commerce & Sciences (Osmania University)
Bachelor of Science in Computer Science (Coursework Completed; Degree in Progress) | 2022 - Expected 2026

TECHNICAL SKILLS:
- Vulnerability Assessment & Testing: Web Application Security, OWASP Top 10, VAPT, Threat Analysis, Penetration Testing
- Tools & Frameworks: Burp Suite, OpenVAS, Nmap, Wireshark, Kali Linux, Oracle VM VirtualBox
- Networking & Protocols: TCP/IP, DNS, HTTP/HTTPS, OSI Model, Port Scanning, Packet Capture & Inspection
- Programming & Scripting: Python, Java, C++, Bash/Shell Scripting
- Documentation & Reporting: Vulnerability Reporting, Proof-of-Concept (PoC) Documentation, Remediation Guidance

EXPERIENCE:
Digit Defence, Bengaluru, India (Remote) — Cybersecurity Intern (Doc ID: DF260727438) | Jan 2026 - Jul 2026
- Conducted vulnerability assessments and web security testing using Burp Suite and OpenVAS targeting OWASP Top 10 flaws.
- Evaluated live client environments and engineered Proof of Concept (PoC) demonstrations to validate exploitable security flaws.
- Assisted project teams in assessing network attack surfaces and analyzing traffic anomalies using Nmap and Wireshark.
- Formulated technical remediation reports detailing vulnerability severities, reproduction steps, and actionable patch recommendations.

PROJECTS:
- Phishing URL Detection Tool: Developed heuristic detection script classifying deceptive domains by evaluating structural URL entropy and redirection flows. Mitigated typosquatting via regex pattern extraction and automated HTTP response-header inspection.
- Secure Folder Encryptor: Built desktop cryptographic application leveraging AES-256 in CBC mode. Employed PBKDF2 with dynamic salting and SHA-256 file integrity checks.

PRACTICAL LABS & TRAINING:
- Web Application Security Labs (PortSwigger & DVWA): Solved challenges across SQLi, XSS, CSRF, and Broken Access Control using Burp Suite Repeater and Intruder.
- Host Reconnaissance & Traffic Analysis Lab: Configured target labs in VirtualBox, performed Nmap NSE scans, and inspected packet streams via Wireshark.

CERTIFICATIONS:
- Cyber Security Internship Experience Certificate - Digit Defence (Doc ID: DF260727438, Issued: Jul 2026)`;

  const handleCopy = () => {
    navigator.clipboard.writeText(plainTextResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="resume" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-slate-800">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            Verified Security Credentials
          </div>
          <h2 className="text-3xl font-bold tracking-tight aurora-heading">Professional Resume</h2>
          <p className="text-slate-400 font-mono text-xs">
            Interactive 3D spatial cards with official PDF downloads.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-800 bg-slate-900/80 text-slate-300 hover:border-slate-600 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied' : 'Copy Plaintext Resume'}
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-800 bg-slate-900/80 text-slate-300 hover:border-slate-600 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            View PDF
          </a>
          <a
            href="/resume.pdf"
            download="Poondru_Atharv_Reddy_Resume.pdf"
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
          >
            <Download className="w-3.5 h-3.5" />
            Download Resume
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        {/* BLOCK 1: Summary */}
        <HighlightCard3D className="lg:col-span-8" glowColor="emerald">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold">
              <Terminal className="w-4 h-4" />
              [01_EXECUTIVE_SUMMARY]
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Aspiring Cybersecurity professional with hands-on experience in vulnerability assessment, web application security, and penetration testing. Skilled in evaluating attack surfaces, validating OWASP Top 10 vulnerabilities with Burp Suite, OpenVAS, and Nmap, engineering reproducible PoC exploits, and preparing actionable remediation guidance.
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap gap-2 text-[11px] font-mono">
            {['VAPT', 'Web AppSec', 'OWASP Top 10', 'PoC Exploitation', 'Remediation Roadmaps'].map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60">
                {tag}
              </span>
            ))}
          </div>
        </HighlightCard3D>

        {/* BLOCK 2: Education */}
        <HighlightCard3D className="lg:col-span-4" glowColor="cyan">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold">
              <GraduationCap className="w-4 h-4" />
              [02_ACADEMICS]
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">B.Sc. in Computer Science</h4>
              <p className="text-slate-300 text-xs mt-1">Keshav Memorial Institute of Commerce & Sciences</p>
              <p className="text-slate-500 font-mono text-[11px]">Osmania University &middot; Hyderabad</p>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">2022 – Expected 2026</span>
            <span className="text-emerald-400 text-[11px]">Coursework Completed</span>
          </div>
        </HighlightCard3D>

        {/* BLOCK 3: Experience */}
        <HighlightCard3D className="lg:col-span-7" glowColor="emerald">
          <div className="space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold">
                <Briefcase className="w-4 h-4" />
                [03_FIELD_EXPERIENCE]
              </div>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                Jan 2026 – Jul 2026
              </span>
            </div>

            <div>
              <h4 className="text-white font-bold text-base">Cybersecurity Intern</h4>
              <p className="text-slate-400 font-mono text-xs">Digit Defence &middot; Bengaluru (Remote)</p>
              <p className="text-slate-500 font-mono text-[11px]">Doc ID: DF260727438</p>
            </div>

            <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside leading-relaxed">
              <li>Conducted vulnerability assessments and web security testing using Burp Suite & OpenVAS targeting OWASP Top 10 vulnerabilities.</li>
              <li>Engineered Proof of Concept (PoC) exploits validating live target security flaws.</li>
              <li>Analyzed network attack surfaces and traffic anomalies using Nmap and Wireshark.</li>
              <li>Formulated actionable technical remediation reports with patch strategies.</li>
            </ul>
          </div>
        </HighlightCard3D>

        {/* BLOCK 4: Toolset */}
        <HighlightCard3D className="lg:col-span-5" glowColor="cyan">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold">
              <Code2 className="w-4 h-4" />
              [04_SECURITY_TOOLSET]
            </div>

            <div className="space-y-3 text-xs font-mono">
              <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[11px] mb-1">Assessment & Frameworks</span>
                <span className="text-emerald-300">Burp Suite, OpenVAS, Nmap, Wireshark, Kali Linux</span>
              </div>

              <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[11px] mb-1">Networking & Protocols</span>
                <span className="text-cyan-300">TCP/IP, DNS, HTTP/HTTPS, OSI Model, Packet Analysis</span>
              </div>

              <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[11px] mb-1">Programming & Scripting</span>
                <span className="text-slate-200">Python, Java, C++, Bash/Shell Scripting</span>
              </div>
            </div>
          </div>
        </HighlightCard3D>

        {/* BLOCK 5: Key Projects */}
        <HighlightCard3D className="lg:col-span-6" glowColor="emerald">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold">
              <FolderGit2 className="w-4 h-4" />
              [05_KEY_PROJECTS]
            </div>

            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between">
                  <h5 className="text-white font-bold text-xs">Phishing URL Detection Tool</h5>
                  <span className="text-[10px] font-mono text-emerald-400">Python / Regex</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Heuristic entropy script with redirection auditing to identify typosquatting vectors.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between">
                  <h5 className="text-white font-bold text-xs">Secure Folder Encryptor</h5>
                  <span className="text-[10px] font-mono text-cyan-400">Java / AES-256</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Cryptographic desktop utility leveraging AES-256 CBC, dynamic PBKDF2 salting, and SHA-256 integrity checks.
                </p>
              </div>
            </div>
          </div>
        </HighlightCard3D>

        {/* BLOCK 6: Practical Labs & Credential */}
        <HighlightCard3D className="lg:col-span-6" glowColor="cyan">
          <div className="space-y-4 flex flex-col justify-between h-full">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold">
                <Network className="w-4 h-4" />
                [06_HANDS_ON_LABS]
              </div>

              <div className="space-y-2 text-xs leading-relaxed">
                <div className="border-l-2 border-emerald-500/40 pl-3">
                  <span className="text-white font-bold block">PortSwigger & DVWA Labs</span>
                  <span className="text-slate-400">SQLi, XSS, CSRF, and Broken Access Control bypass validation.</span>
                </div>
                <div className="border-l-2 border-cyan-500/40 pl-3">
                  <span className="text-white font-bold block">Host Reconnaissance & Traffic Analysis</span>
                  <span className="text-slate-400">Nmap NSE automated discovery and packet anomaly inspection in Wireshark.</span>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3.5 rounded-xl bg-slate-950 border border-emerald-500/30 flex items-center gap-3">
              <Award className="w-7 h-7 text-emerald-400 shrink-0" />
              <div className="text-xs">
                <p className="text-white font-bold">Cyber Security Internship Certificate</p>
                <p className="text-slate-400 font-mono text-[11px]">Digit Defence &middot; ID: DF260727438 (Issued Jul 2026)</p>
              </div>
            </div>
          </div>
        </HighlightCard3D>
      </div>
    </section>
  );
};