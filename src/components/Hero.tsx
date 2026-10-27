import React from 'react';
import { 
  ShieldCheck, 
  Terminal, 
  FileText, 
  ExternalLink, 
  Mail, 
  ChevronRight,
  Server,
  Activity
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-[#090d16] text-slate-100 overflow-hidden"
    >
      {/* Background Cyber Grid & Glow Accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d18_1px,transparent_1px),linear-gradient(to_bottom,#1f293d18_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[380px] h-[250px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto w-full text-center z-10">
        
        {/* Top Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-xs sm:text-sm font-medium tracking-wide mb-8 shadow-sm shadow-cyan-950">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span>Security Operations & Threat Defense Active</span>
        </div>

        {/* Primary Identity Header */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">
            POONDRU ATHARV REDDY
          </span>
        </h1>

        {/* Target Domains */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-slate-300 text-base sm:text-lg md:text-xl font-medium mb-6">
          <span className="text-cyan-400 font-semibold">SOC Operations (L1/L2)</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-200">Vulnerability Assessment & Penetration Testing</span>
          <span className="text-slate-600">•</span>
          <span className="text-cyan-400 font-semibold">OWASP Top 10 Auditing</span>
        </div>

        {/* Summary Description */}
        <p className="max-w-3xl mx-auto text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed mb-10">
          Cybersecurity professional focused on securing application perimeters, dissecting network traffic anomalies, 
          and executing structured penetration testing using tools like Burp Suite, OpenVAS, Nmap, and Wireshark. 
          Dedicated to actionable technical remediation and proactive threat detection.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {/* View Updated Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold text-sm sm:text-base hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <FileText className="w-4 h-4 text-slate-950" />
            <span>View Updated Resume</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-950" />
          </a>

          {/* Jump to Projects */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm sm:text-base transition-all hover:border-slate-600"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>Explore Security Projects</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </a>
        </div>

        {/* Social & Contact Links (Using clean inline SVGs to avoid import errors) */}
        <div className="flex items-center justify-center gap-5 mb-14 text-slate-400">
          <a
            href="https://linkedin.com/in/atharv-reddy-44511b282"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/60 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
            </svg>
          </a>
          <a
            href="https://github.com/atharvreddy04"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/60 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
          <a
            href="mailto:atharvareddy.04@gmail.com"
            aria-label="Email"
            className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/60 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Highlight Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto border border-slate-800/80 bg-slate-900/40 backdrop-blur-md rounded-xl p-4 sm:p-5">
          <div className="flex flex-col items-center justify-center p-2">
            <div className="flex items-center gap-1.5 text-cyan-400 font-bold text-xl sm:text-2xl">
              <ShieldCheck className="w-5 h-5" />
              <span>VAPT & SOC</span>
            </div>
            <span className="text-xs text-slate-400 mt-1 uppercase tracking-wider">L1/L2 Monitoring</span>
          </div>

          <div className="flex flex-col items-center justify-center p-2 border-l border-slate-800">
            <div className="flex items-center gap-1.5 text-cyan-400 font-bold text-xl sm:text-2xl">
              <Activity className="w-5 h-5" />
              <span>OWASP 10</span>
            </div>
            <span className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Web Security</span>
          </div>

          <div className="flex flex-col items-center justify-center p-2 border-t sm:border-t-0 sm:border-l border-slate-800">
            <div className="flex items-center gap-1.5 text-cyan-400 font-bold text-xl sm:text-2xl">
              <Server className="w-5 h-5" />
              <span>Net Secure</span>
            </div>
            <span className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Packet Telemetry</span>
          </div>

          <div className="flex flex-col items-center justify-center p-2 border-t sm:border-t-0 border-l border-slate-800">
            <div className="flex items-center gap-1.5 text-cyan-400 font-bold text-xl sm:text-2xl">
              <span>4+</span>
            </div>
            <span className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Certifications</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;