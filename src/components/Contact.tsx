import React from 'react';
import { Mail, MapPin, ShieldCheck, ExternalLink, Globe } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="px-6 py-12 max-w-7xl mx-auto font-mono text-center">
      <div className="inline-flex items-center gap-2 text-xs text-emerald-400 mb-2">
        <ShieldCheck className="h-4 w-4" />
        <span>Verified Communication Channels</span>
      </div>

      <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
      <p className="text-xs text-slate-400 max-w-md mx-auto mb-8">
        Open for vulnerability assessments, penetration testing engagements, and security operations roles.
      </p>

      {/* Email & Location Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-6">
        <div className="rounded-xl border border-cyan-500/20 bg-slate-900/50 p-5 flex items-center gap-4 text-left">
          <div className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-400">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 uppercase tracking-wider">Direct Email</div>
            <a
              href="mailto:atharvreddy.04@gmail.com"
              className="text-xs font-semibold text-slate-200 hover:text-cyan-400 transition-colors"
            >
              atharvreddy.04@gmail.com
            </a>
          </div>
        </div>

        <div className="rounded-xl border border-cyan-500/20 bg-slate-900/50 p-5 flex items-center gap-4 text-left">
          <div className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-400">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 uppercase tracking-wider">Base of Operations</div>
            <div className="text-xs font-semibold text-slate-200">
              Hyderabad, India
            </div>
          </div>
        </div>
      </div>

      {/* Profile Links */}
      <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
        <a
          href="https://github.com/atharvreddy04"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 bg-slate-900/60 text-slate-300 hover:text-white hover:border-cyan-500 transition-all"
        >
          <Globe className="h-4 w-4 text-cyan-400" />
          <span className="font-semibold">GitHub Profile</span>
          <ExternalLink className="h-3.5 w-3.5 text-slate-500" />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 bg-slate-900/60 text-slate-300 hover:text-white hover:border-cyan-500 transition-all"
        >
          <Globe className="h-4 w-4 text-emerald-400" />
          <span className="font-semibold">LinkedIn Profile</span>
          <ExternalLink className="h-3.5 w-3.5 text-slate-500" />
        </a>
      </div>
    </section>
  );
};