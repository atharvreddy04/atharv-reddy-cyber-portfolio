import React from 'react';
import { GitBranch, ExternalLink, Activity, Terminal } from 'lucide-react';

export const GithubMonitor: React.FC = () => {
  return (
    <section id="repositories" className="px-6 py-8 max-w-7xl mx-auto w-full font-mono">
      <div className="flex items-center gap-2 text-xs text-emerald-400 mb-2">
        <GitBranch className="h-4 w-4" />
        <span>SYSTEM REPOSITORIES &amp; NODES</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
        Active Repositories &amp; Build Nodes
      </h2>

      {/* Grid with full-width columns to prevent width squishing */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full items-start">
        {/* Left Monitor Block */}
        <div className="lg:col-span-5 w-full min-w-0 rounded-xl border border-cyan-500/20 bg-slate-900/60 p-6 backdrop-blur-md space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs">
              <Activity className="h-4 w-4" />
              <span>atharvreddy04 / Activity Matrix</span>
            </div>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
              SYNCHRONIZED
            </span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Continuous development and research repositories tracking security tooling, automated CVE replication scripts, and modern defensive system configurations.
          </p>

          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
            <span>Branch: main</span>
            <span className="text-emerald-400">Status: 200 OK</span>
          </div>
        </div>

        {/* Right Active Repo Card */}
        <div className="lg:col-span-7 w-full min-w-0 rounded-xl border border-cyan-500/20 bg-slate-900/60 p-6 backdrop-blur-md space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs">
              <Terminal className="h-4 w-4" />
              <span>Repository Node</span>
            </div>
            <span className="text-[10px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
              Vite + React
            </span>
          </div>

          <div>
            <h3 className="text-base font-bold text-white">
              atharv-reddy-cyber-portfolio
            </h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              React, Vite, TypeScript, and 3D spatial highlight components showcasing verified security credentials and telemetry.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400 pt-2 border-t border-slate-800">
            <span>TypeScript / React</span>
            <span className="text-emerald-400">• Production Ready</span>
          </div>

          <a
            href="https://github.com/atharvreddy04"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-cyan-300 hover:text-white transition-colors pt-2"
          >
            <span>Visit GitHub Profile</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};