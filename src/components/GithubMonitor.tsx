import React from 'react';
import { GitBranch, ExternalLink, Calendar } from 'lucide-react';

export const GithubMonitor: React.FC = () => {
  const rows = 7;
  const cols = 20;

  // 7 x 20 contribution matrix
  const matrix = Array.from({ length: rows }, (_, r) =>
    Array.from({ length: cols }, (_, c) => {
      const val = (r * 3 + c * 7) % 10;
      if (val > 6) return 'bg-cyan-400';
      if (val > 4) return 'bg-cyan-600';
      if (val > 2) return 'bg-cyan-950 border border-cyan-800/40';
      return 'bg-slate-900';
    })
  );

  return (
    <section id="contributions" className="px-6 py-12 max-w-7xl mx-auto font-mono">
      {/* Token Header */}
      <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 tracking-wider mb-1">
        // GITHUB_CONTRIBUTIONS
      </h2>
      <p className="text-xs text-slate-400 mb-6 italic">
        "Live monitoring of active code developments, tool commits, and syntax builds on GitHub."
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Contribution Activity Matrix */}
        <div className="lg:col-span-7 rounded-xl border border-cyan-500/20 bg-slate-900/60 p-5 flex flex-col justify-between backdrop-blur-md">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-300 mb-6">
              <div className="flex items-center gap-2">
                <GitBranch className="h-3.5 w-3.5 text-cyan-400" />
                <span className="font-bold">atharvreddy04 / Contribution History</span>
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30 uppercase">
                ACTIVE BUILD NODE
              </span>
            </div>

            {/* Heatmap Matrix */}
            <div className="flex flex-col gap-1.5 overflow-x-auto pb-4">
              {matrix.map((row, rIdx) => (
                <div key={rIdx} className="flex gap-1.5">
                  {row.map((color, cIdx) => (
                    <div
                      key={cIdx}
                      className={`w-3.5 h-3.5 rounded-sm shrink-0 ${color}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Scale Legend */}
          <div className="flex items-center justify-between text-[10px] text-slate-500 pt-4 border-t border-slate-800">
            <span>LESS</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-slate-900" />
              <span className="w-2.5 h-2.5 rounded-sm bg-cyan-950 border border-cyan-800/40" />
              <span className="w-2.5 h-2.5 rounded-sm bg-cyan-600" />
              <span className="w-2.5 h-2.5 rounded-sm bg-cyan-400" />
            </div>
            <span>MORE</span>
          </div>
        </div>

        {/* Right Column: Repository Monitor */}
        <div className="lg:col-span-5 rounded-xl border border-cyan-500/20 bg-slate-900/60 p-5 space-y-5 text-xs backdrop-blur-md">
          <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
            REPOSITORY MONITOR
          </div>

          <div>
            <div className="text-cyan-400 font-bold flex items-center gap-1.5">
              <span>Latest Repository:</span>
            </div>
            <div className="text-white font-bold mt-1">atharv-reddy-cyber-portfolio</div>
            <p className="text-slate-400 text-[11px] mt-1 leading-relaxed">
              React 18, Vite, TypeScript portfolio showcasing verified cybersecurity credentials, VAPT assessments, and live telemetry.
            </p>
          </div>

          <div>
            <div className="text-cyan-400 font-bold flex items-center gap-1.5">
              <Calendar className="h-3 w-3" />
              <span>Latest Commit:</span>
            </div>
            <p className="text-slate-300 text-[11px] mt-1 italic">
              "feat: align structural pattern with custom portfolio theme"
            </p>
            <div className="text-slate-500 text-[10px] mt-0.5">committed recently</div>
          </div>

          <div>
            <div className="text-slate-300 font-bold mb-2">&lt;&gt; Language Distribution:</div>
            <div className="space-y-1.5 text-[11px]">
              <div className="flex justify-between text-slate-400">
                <span>TypeScript / React</span>
                <span className="text-cyan-300">65%</span>
              </div>
              <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-800">
                <div className="bg-cyan-400 h-full w-[65%]" />
              </div>

              <div className="flex justify-between text-slate-400 pt-1">
                <span>Python / Bash</span>
                <span className="text-emerald-300">25%</span>
              </div>
              <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-800">
                <div className="bg-emerald-500 h-full w-[25%]" />
              </div>

              <div className="flex justify-between text-slate-400 pt-1">
                <span>HTML &amp; CSS</span>
                <span className="text-slate-300">10%</span>
              </div>
              <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-800">
                <div className="bg-slate-600 h-full w-[10%]" />
              </div>
            </div>
          </div>

          <a
            href="https://github.com/atharvreddy04"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 rounded-lg border border-cyan-500/40 bg-cyan-950/30 text-cyan-300 hover:bg-cyan-900/40 hover:border-cyan-400 transition-all flex items-center justify-center gap-1.5 font-bold"
          >
            <span>Visit GitHub Profile</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};