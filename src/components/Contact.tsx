import React from 'react';
import { Mail, MapPin, ShieldCheck, ExternalLink } from 'lucide-react';
import { HighlightCard3D } from './HighlightCard3D';

export const Contact = () => {
  const emailAddress = "atharvareddy.04@gmail.com";

  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <ShieldCheck className="w-3.5 h-3.5" />
          Verified Communication Channels
        </div>
        <h2 className="text-3xl font-bold text-white tracking-tight">Get In Touch</h2>
        <p className="text-slate-400 font-mono text-sm max-w-xl mx-auto">
          Open for vulnerability assessments, penetration testing engagements, and security operations roles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Direct Email Card */}
        <HighlightCard3D glowColor="emerald">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-slate-800 border border-slate-700 text-emerald-400 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="text-xs text-slate-500 font-mono block">Direct Email</span>
              <a 
                href={`mailto:${emailAddress}`}
                className="font-mono text-sm text-slate-200 hover:text-emerald-400 transition-colors break-all"
              >
                {emailAddress}
              </a>
            </div>
          </div>
        </HighlightCard3D>

        {/* Location Card */}
        <HighlightCard3D glowColor="cyan">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-slate-800 border border-slate-700 text-cyan-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-mono block">Base of Operations</span>
              <span className="font-mono text-sm text-slate-200">
                Hyderabad, India
              </span>
            </div>
          </div>
        </HighlightCard3D>
      </div>

      {/* Social Profiles - Clean Direct SVGs */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 font-mono text-xs">
        <a 
          href="https://github.com/atharvreddy04" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 hover:border-emerald-500/50 hover:text-emerald-400 active:scale-95 transition-all shadow-lg"
        >
          <svg className="w-4 h-4 fill-current text-emerald-400" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <span>GitHub Profile</span>
          <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
        </a>

        <a 
          href="https://www.linkedin.com/in/atharv-reddy-44511b282" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 hover:border-cyan-500/50 hover:text-cyan-400 active:scale-95 transition-all shadow-lg"
        >
          <svg className="w-4 h-4 fill-current text-cyan-400" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          <span>LinkedIn Profile</span>
          <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
        </a>
      </div>
    </section>
  );
};