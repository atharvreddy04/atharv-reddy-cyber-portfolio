import React, { useState } from 'react';
import { Mail, MapPin, ExternalLink, Copy, Check, Terminal, Send, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = 'atharvreddy.04@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/atharv-reddy-44511b282/';
  const githubUrl = 'https://github.com/atharvreddy04';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="scroll-mt-20 px-6 py-12 max-w-7xl mx-auto font-mono">
      {/* Token Header */}
      <div className="flex items-center gap-2 text-xs text-emerald-400 mb-1">
        <Terminal className="h-4 w-4" />
        <span>// TRANSMISSION_ENDPOINT</span>
      </div>
      <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 tracking-wider mb-1">
        // CONTACT
      </h2>
      <p className="text-xs text-slate-400 mb-8 italic">
        "Encrypted transmission channel for professional inquiries, vulnerability advisories, and career opportunities."
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Direct Communication Hub */}
        <div className="lg:col-span-7 space-y-4">
          {/* Primary Email Card */}
          <div className="rounded-xl border border-cyan-500/20 bg-slate-900/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-cyan-400">
            <div className="flex items-center justify-between text-xs mb-3">
              <div className="flex items-center gap-2 text-cyan-400 font-bold">
                <Mail className="h-4 w-4" />
                <span>DIRECT DISPATCH (SECURE PROTOCOL)</span>
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                ACTIVE
              </span>
            </div>

            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              For VAPT consultations, SOC analyst requirements, or security collaborations, send an encrypted inquiry:
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="flex-1 px-3.5 py-2.5 rounded-lg border border-slate-800 bg-slate-950/80 text-xs text-slate-200 select-all flex items-center justify-between">
                <span>{emailAddress}</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-2.5 rounded-lg border border-slate-700 bg-slate-900 text-xs text-slate-300 hover:text-white hover:border-slate-500 transition-all flex items-center gap-1.5 justify-center shrink-0"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${emailAddress}`}
                  className="px-4 py-2.5 rounded-lg border border-cyan-500/40 bg-cyan-950/40 text-cyan-300 hover:bg-cyan-900/40 hover:border-cyan-400 text-xs transition-all flex items-center gap-1.5 justify-center shrink-0 shadow-[0_0_12px_rgba(6,182,212,0.15)]"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Send Mail</span>
                </a>
              </div>
            </div>
          </div>

          {/* Location & Response Telemetry Box */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 backdrop-blur-md grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-slate-400">
                <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                <span>Base Coordinates</span>
              </div>
              <div className="text-slate-200 font-bold">Hyderabad, Telangana, India</div>
              <div className="text-[10px] text-slate-500">Open to On-Site, Hybrid &amp; Remote</div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-slate-400">
                <MessageSquare className="h-3.5 w-3.5 text-emerald-400" />
                <span>Response SLA</span>
              </div>
              <div className="text-emerald-400 font-bold">&lt; 12 Hours</div>
              <div className="text-[10px] text-slate-500">Security Clearance Inquiries Expedited</div>
            </div>
          </div>
        </div>

        {/* Right Column: Verified Professional Nodes */}
        <div className="lg:col-span-5 space-y-4">
          {/* LinkedIn Node */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border border-cyan-500/20 bg-slate-900/60 p-5 backdrop-blur-md transition-all duration-300 hover:border-cyan-400 group"
          >
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                PROFESSIONAL NETWORK
              </span>
              <ExternalLink className="h-3.5 w-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
            </div>
            <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
              LinkedIn Profile
            </div>
            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
              Direct connection for security audits, enterprise networking, and professional background verification.
            </p>
          </a>

          {/* GitHub Node */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border border-cyan-500/20 bg-slate-900/60 p-5 backdrop-blur-md transition-all duration-300 hover:border-cyan-400 group"
          >
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                CODE &amp; TOOL REPOSITORIES
              </span>
              <ExternalLink className="h-3.5 w-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
            </div>
            <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
              GitHub Repositories
            </div>
            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
              Source code repositories, automated detection scripts, and packet analysis tools.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};