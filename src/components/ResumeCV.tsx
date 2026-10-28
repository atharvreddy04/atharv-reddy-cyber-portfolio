import React, { useState } from 'react';
import { Download, ExternalLink, Copy, Check, ShieldCheck } from 'lucide-react';

export const ResumeCV: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const resumeText = `
POONDRU ATHARV REDDY
Cybersecurity Specialist | VAPT | SOC Operations (L1/L2) | OWASP Top 10
Hyderabad, Telangana, India
LinkedIn: https://www.linkedin.com/in/atharv-reddy-44511b282/

[01_EXECUTIVE_SUMMARY]
Aspiring Cybersecurity professional with hands-on experience in vulnerability assessment, web application security, and penetration testing. Skilled in evaluating attack surfaces, validating OWASP Top 10 vulnerabilities with Burp Suite, OpenVAS, and Nmap; engineering reproducible PoC exploits; and formulating actionable remediation guidance.

[02_ACADEMICS]
B.Sc. in Computer Science - Keshav Memorial Institute of Commerce & Sciences (Osmania University, Hyderabad)

[03_FIELD_EXPERIENCE]
Cybersecurity Intern - Digit Defence (Remote) | Jan 2026 – Jul 2026 [Doc ID: DF260727438]
- Conducted vulnerability assessments and web security testing using Burp Suite & OpenVAS targeting OWASP Top 10 vulnerabilities.
- Engineered Proof of Concept (PoC) exploits validating live target security flaws.
- Analyzed network attack surfaces and traffic anomalies using Nmap and Wireshark.
- Formulated actionable technical remediation reports with patch strategies.

[04_SECURITY_TOOLSET]
- Assessment & Frameworks: Burp Suite, OpenVAS, Nmap, Wireshark, Kali Linux, Metasploit
- Networking & Protocols: TCP/IP, DNS, HTTP/HTTPS, OSI Model, Packet Analysis
- Programming & Scripting: Python, Java, C++, Bash/Shell Scripting, React, TypeScript

[05_KEY_PROJECTS]
1. NetSecure: Network Packet Analyzer & Security Dashboard (React, Tailwind CSS, Vite)
2. Phishing URL Detection Tool (Python, Heuristics, Regex)
3. Secure Folder Encryptor (Java, AES-256-CBC, PBKDF2)

[06_HANDS_ON_LABS & CERTIFICATIONS]
- PortSwigger & DVWA Labs: SQLi, XSS, CSRF, and Broken Access Control bypass validation.
- Host Reconnaissance & Traffic Analysis: Nmap NSE automated discovery and packet anomaly inspection.
- IIFIS Certified Cyber Security Professional
- NASSCOM Certified Cyber Security Professional
- Cyber Security Internship Experience Certificate (Digit Defence: DF260727438)
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="scroll-mt-24 max-w-6xl mx-auto px-4 py-16 font-mono">
      {/* Top Credentials Action Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-widest uppercase">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Verified Security Credentials</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white mt-1">Professional Resume</h2>
          <p className="text-xs text-slate-400 mt-1 font-sans">
            Interactive spatial cards with official PDF downloads.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900/60 text-xs text-slate-300 hover:border-slate-500 hover:text-white transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-cyan-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy Plaintext Resume'}</span>
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-cyan-800 bg-cyan-950/40 text-xs text-cyan-400 hover:bg-cyan-900/40 transition-colors cursor-pointer"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>View PDF</span>
          </a>

          <a
            href="/resume.pdf"
            download="Poondru_Atharv_Reddy_Resume.pdf"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-400 hover:bg-emerald-500/30 transition-colors font-semibold cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>

      {/* Spatial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* [01_EXECUTIVE_SUMMARY] */}
          <div className="p-6 rounded-xl border border-slate-800 bg-[#070e17]/80 backdrop-blur shadow-sm">
            <span className="text-cyan-400 text-xs font-bold tracking-wider block mb-3">
              [01_EXECUTIVE_SUMMARY]
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              Aspiring Cybersecurity professional with hands-on experience in vulnerability assessment, web application security, and penetration testing. Skilled in evaluating attack surfaces, validating OWASP Top 10 vulnerabilities with Burp Suite, OpenVAS, and Nmap; engineering reproducible PoC exploits; and formulating actionable remediation guidance.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['VAPT', 'Web AppSec', 'OWASP Top 10', 'PoC Exploits', 'Remediation Roadmaps'].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-2.5 py-1 rounded border border-slate-800 bg-[#0B0F17] text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* [03_FIELD_EXPERIENCE] */}
          <div id="experience" className="scroll-mt-28 p-6 rounded-xl border border-slate-800 bg-[#070e17]/80 backdrop-blur shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <span className="text-cyan-400 text-xs font-bold tracking-wider">[03_FIELD_EXPERIENCE]</span>
              <span className="text-xs text-slate-400">Jan 2026 – Jul 2026</span>
            </div>
            <div className="inline-block px-2.5 py-0.5 rounded bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-bold mb-1">
              Cybersecurity Intern
            </div>
            <div className="text-xs text-slate-400 mb-3">
              Digit Defence &bull; Bengaluru (Remote) &bull; ID: DF260727438
            </div>
            <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside font-sans leading-relaxed">
              <li>Conducted vulnerability assessments and web security testing using Burp Suite &amp; OpenVAS targeting OWASP Top 10 vulnerabilities.</li>
              <li>Engineered Proof of Concept (PoC) exploits validating live target security flaws.</li>
              <li>Analyzed network attack surfaces and traffic anomalies using Nmap and Wireshark.</li>
              <li>Formulated actionable technical remediation reports with patch strategies.</li>
            </ul>
          </div>

          {/* [05_KEY_PROJECTS] */}
          <div id="projects" className="scroll-mt-28 p-6 rounded-xl border border-cyan-800/60 bg-[#070e17]/90 backdrop-blur space-y-4 shadow-sm">
            <span className="text-cyan-400 text-xs font-bold tracking-wider block">[05_KEY_PROJECTS]</span>
            
            <div className="p-4 rounded-lg border border-slate-800 bg-[#0B0F17]/90 hover:border-cyan-500/50 transition-colors">
              <div className="flex justify-between items-start">
                <span className="text-sm font-bold text-white">NetSecure Analyzer</span>
                <span className="text-[11px] text-cyan-400">React / Vite / Tailwind</span>
              </div>
              <p className="text-xs text-slate-300 mt-2 font-sans leading-relaxed">
                Network traffic inspection dashboard featuring real-time stream simulation, packet distribution analytics, and automated security rule alerts.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-slate-800 bg-[#0B0F17]/90 hover:border-cyan-500/50 transition-colors">
              <div className="flex justify-between items-start">
                <span className="text-sm font-bold text-white">Phishing URL Detection Tool</span>
                <span className="text-[11px] text-cyan-400">Python / Regex</span>
              </div>
              <p className="text-xs text-slate-300 mt-2 font-sans leading-relaxed">
                Heuristic entropy script with redirection auditing to identify typosquatting vectors and suspicious domains.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-slate-800 bg-[#0B0F17]/90 hover:border-cyan-500/50 transition-colors">
              <div className="flex justify-between items-start">
                <span className="text-sm font-bold text-white">Secure Folder Encryptor</span>
                <span className="text-[11px] text-cyan-400">Java / AES-256</span>
              </div>
              <p className="text-xs text-slate-300 mt-2 font-sans leading-relaxed">
                Cryptographic desktop utility leveraging AES-256-CBC, dynamic PBKDF2 salting, and SHA-256 integrity verification.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-6 space-y-6">

          {/* [02_ACADEMICS] */}
          <div className="p-6 rounded-xl border border-slate-800 bg-[#070e17]/80 backdrop-blur shadow-sm">
            <span className="text-cyan-400 text-xs font-bold tracking-wider block mb-2">[02_ACADEMICS]</span>
            <div className="text-base font-bold text-white">B.Sc. in Computer Science</div>
            <div className="text-xs text-slate-400 mt-0.5">Keshav Memorial Institute of Commerce &amp; Sciences</div>
            <div className="text-xs text-slate-500">Osmania University &ndash; Hyderabad</div>
            <div className="border-t border-slate-800/80 my-4" />
            <div className="flex justify-between items-center text-xs text-slate-400">
              <span>Coursework Completed</span>
              <span className="text-emerald-400 font-semibold">Osmania Affiliated</span>
            </div>
          </div>

          {/* [04_SECURITY_TOOLSET] */}
          <div id="skills" className="scroll-mt-28 p-6 rounded-xl border border-slate-800 bg-[#070e17]/80 backdrop-blur space-y-4 shadow-sm">
            <span className="text-cyan-400 text-xs font-bold tracking-wider block">[04_SECURITY_TOOLSET]</span>
            
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wide mb-1 font-mono">Assessment &amp; Frameworks</div>
              <div className="text-xs font-semibold text-white font-sans">Burp Suite, OpenVAS, Nmap, Wireshark, Kali Linux, Metasploit</div>
            </div>

            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wide mb-1 font-mono">Networking &amp; Protocols</div>
              <div className="text-xs font-semibold text-white font-sans">TCP/IP, DNS, HTTP/HTTPS, OSI Model, Packet Analysis</div>
            </div>

            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wide mb-1 font-mono">Programming &amp; Scripting</div>
              <div className="text-xs font-semibold text-white font-sans">Python, Java, C++, Bash/Shell Scripting, React, TypeScript</div>
            </div>
          </div>

          {/* [06_HANDS_ON_LABS & CERTIFICATIONS] */}
          <div className="p-6 rounded-xl border border-slate-800 bg-[#070e17]/80 backdrop-blur space-y-4 shadow-sm">
            <span className="text-cyan-400 text-xs font-bold tracking-wider block">[06_HANDS_ON_LABS &amp; CERTIFICATIONS]</span>
            
            <div>
              <div className="text-xs font-bold text-white">PortSwigger &amp; DVWA Labs</div>
              <div className="text-xs text-slate-400 font-sans mt-0.5">SQLi, XSS, CSRF, and Broken Access Control bypass validation.</div>
            </div>

            <div>
              <div className="text-xs font-bold text-white">Host Reconnaissance &amp; Traffic Analysis</div>
              <div className="text-xs text-slate-400 font-sans mt-0.5">Nmap NSE automated discovery and packet anomaly inspection in Wireshark.</div>
            </div>

            <div className="border-t border-slate-800/80 pt-3 space-y-2.5">
              <div className="text-xs text-emerald-400 font-semibold flex items-center gap-2">
                <Check className="w-3.5 h-3.5 shrink-0" />
                <span>IIFIS Certified Cyber Security Professional</span>
              </div>
              <div className="text-xs text-emerald-400 font-semibold flex items-center gap-2">
                <Check className="w-3.5 h-3.5 shrink-0" />
                <span>NASSCOM Certified Cyber Security Professional</span>
              </div>
              <div className="text-xs text-emerald-400 font-semibold flex items-center gap-2">
                <Check className="w-3.5 h-3.5 shrink-0" />
                <span>Cyber Security Internship Certificate &ndash; Digit Defence (ID: DF260727438)</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ResumeCV;