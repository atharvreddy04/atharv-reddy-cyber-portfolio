import React from 'react';
import { FileText, Download, Briefcase, GraduationCap, Award, ExternalLink } from 'lucide-react';

export const ResumeCV: React.FC = () => {
  return (
    <section id="resume" className="px-6 py-12 max-w-7xl mx-auto">
      <div className="cyber-card-highlight rounded-2xl border border-slate-800 bg-slate-900/40 p-8 backdrop-blur-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs mb-1">
              <FileText className="h-4 w-4" />
              <span>DOSSIER // CURRICULUM VITAE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
              Professional Resume
            </h2>
          </div>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 shadow-[0_0_15px_-3px_rgba(6,182,212,0.2)]"
          >
            <Download className="h-4 w-4" />
            <span>Download PDF</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          {/* Experience Card */}
          <div className="cyber-card-highlight rounded-xl border border-slate-800/80 bg-slate-950/60 p-5 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold">
              <Briefcase className="h-4 w-4" />
              <span>EXPERIENCE</span>
            </div>
            <h3 className="text-sm font-semibold text-white">Cybersecurity Intern</h3>
            <p className="text-xs text-slate-400 font-mono">Digit Defence &middot; 2026</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Conducted web application vulnerability assessments, attack surface mapping, and verification testing with Burp Suite.
            </p>
          </div>

          {/* Education Card */}
          <div className="cyber-card-highlight rounded-xl border border-slate-800/80 bg-slate-950/60 p-5 space-y-3">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold">
              <GraduationCap className="h-4 w-4" />
              <span>EDUCATION</span>
            </div>
            <h3 className="text-sm font-semibold text-white">B.Sc. in Physics &amp; CS</h3>
            <p className="text-xs text-slate-400 font-mono">Osmania University &middot; Class of 2026</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Data Structures, C++, Network Security Fundamentals, System Architecture, and Algorithms.
            </p>
          </div>

          {/* Certifications Card */}
          <div className="cyber-card-highlight rounded-xl border border-slate-800/80 bg-slate-950/60 p-5 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-semibold">
              <Award className="h-4 w-4" />
              <span>LABS &amp; AUDITS</span>
            </div>
            <h3 className="text-sm font-semibold text-white">PortSwigger Certified Labs</h3>
            <p className="text-xs text-slate-400 font-mono">Web Security Academy</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              SQL Injection, Cross-Site Scripting (XSS), CSRF, Server-Side Request Forgery, and Access Control bypasses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};