import React, { useState } from 'react';
import { GitBranch, ExternalLink, Calendar, Code2, FolderGit2, Globe } from 'lucide-react';

interface RepoData {
  id: string;
  name: string;
  description: string;
  latestCommit: string;
  commitTime: string;
  languages: { name: string; percent: number; colorClass: string }[];
  repoUrl: string;
  demoUrl?: string;
  statusTag: string;
}

const repositories: RepoData[] = [
  {
    id: 'network-analyzer',
    name: 'atharvreddy-network-traffic-analyzer',
    description: 'NetSecure dashboard featuring real-time network traffic streaming, packet protocol distribution, live payload telemetry, and cyber threat monitoring.',
    latestCommit: 'feat: complete NetSecure dashboard, live traffic stream, cyber UI, an...',
    commitTime: '7 hours ago',
    languages: [
      { name: 'JavaScript', percent: 82.7, colorClass: 'bg-cyan-400' },
      { name: 'CSS', percent: 16.8, colorClass: 'bg-emerald-500' },
      { name: 'HTML', percent: 0.5, colorClass: 'bg-slate-500' },
    ],
    repoUrl: 'https://github.com/atharvreddy04/atharvreddy-network-traffic-analyzer',
    demoUrl: 'https://atharvreddy-network-traffic-analyzer.vercel.app',
    statusTag: 'Live Production',
  },
  {
    id: 'portfolio',
    name: 'atharv-reddy-cyber-portfolio',
    description: 'Offensive & defensive cybersecurity portfolio engineered with React 18, Vite, TypeScript, and interactive 3D spatial telemetry.',
    latestCommit: 'feat: align structural pattern with custom portfolio theme',
    commitTime: 'committed recently',
    languages: [
      { name: 'TypeScript / React', percent: 65, colorClass: 'bg-cyan-400' },
      { name: 'Tailwind CSS', percent: 25, colorClass: 'bg-emerald-500' },
      { name: 'HTML & Scripts', percent: 10, colorClass: 'bg-slate-500' },
    ],
    repoUrl: 'https://github.com/atharvreddy04/atharv-reddy-cyber-portfolio',
    statusTag: 'Production Ready',
  },
  {
    id: 'phishing-detector',
    name: 'phishing-url-detection-engine',
    description: 'Heuristic entropy analysis script with automated redirection chain auditing to identify typosquatting and malicious social engineering vectors.',
    latestCommit: 'feat: add Shannon entropy scoring and domain age validation',
    commitTime: '2 weeks ago',
    languages: [
      { name: 'Python', percent: 80, colorClass: 'bg-cyan-400' },
      { name: 'Regex / Shell', percent: 20, colorClass: 'bg-emerald-500' },
    ],
    repoUrl: 'https://github.com/atharvreddy04',
    statusTag: 'Security Tool',
  },
  {
    id: 'folder-encryptor',
    name: 'secure-folder-encryptor',
    description: 'Cryptographic desktop utility leveraging AES-256-CBC, PBKDF2 key derivation, and SHA-256 hash checks for tamper detection.',
    latestCommit: 'fix: optimize cipher stream buffers for large directories',
    commitTime: '1 month ago',
    languages: [
      { name: 'Java', percent: 90, colorClass: 'bg-cyan-400' },
      { name: 'XML / Config', percent: 10, colorClass: 'bg-slate-500' },
    ],
    repoUrl: 'https://github.com/atharvreddy04',
    statusTag: 'Cryptographic Core',
  },
];

export const GithubMonitor: React.FC = () => {
  const [selectedRepoId, setSelectedRepoId] = useState<string>('network-analyzer');
  const activeRepo = repositories.find((r) => r.id === selectedRepoId) || repositories[0];

  const rows = 7;
  const cols = 20;

  // 7 x 20 contribution heatmap
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
      {/* Reference Header */}
      <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 tracking-wider mb-1">
        // GITHUB_CONTRIBUTIONS
      </h2>
      <p className="text-xs text-slate-400 mb-6 italic">
        "Live monitoring of active code developments, tool commits, and syntax builds on GitHub."
      </p>

      {/* Repository Switcher Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {repositories.map((repo) => (
          <button
            key={repo.id}
            onClick={() => setSelectedRepoId(repo.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              selectedRepoId === repo.id
                ? 'bg-cyan-950/60 text-cyan-300 border border-cyan-500/50 shadow-[0_0_12px_rgba(6,182,212,0.25)]'
                : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
            }`}
          >
            <FolderGit2 className="h-3.5 w-3.5" />
            <span>{repo.name}</span>
          </button>
        ))}
      </div>

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

            {/* Heatmap Matrix Grid */}
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
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
              REPOSITORY MONITOR
            </span>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
              {activeRepo.statusTag}
            </span>
          </div>

          <div>
            <div className="text-cyan-400 font-bold flex items-center gap-1.5">
              <Code2 className="h-3.5 w-3.5" />
              <span>Selected Repository:</span>
            </div>
            <div className="text-white font-bold text-sm mt-1">{activeRepo.name}</div>
            <p className="text-slate-400 text-[11px] mt-1.5 leading-relaxed">
              {activeRepo.description}
            </p>
          </div>

          <div>
            <div className="text-cyan-400 font-bold flex items-center gap-1.5">
              <Calendar className="h-3 w-3" />
              <span>Latest Commit:</span>
            </div>
            <p className="text-slate-300 text-[11px] mt-1 italic">
              "{activeRepo.latestCommit}"
            </p>
            <div className="text-slate-500 text-[10px] mt-0.5">{activeRepo.commitTime}</div>
          </div>

          <div>
            <div className="text-slate-300 font-bold mb-2">&lt;&gt; Language Distribution:</div>
            <div className="space-y-2 text-[11px]">
              {activeRepo.languages.map((lang, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-slate-400">
                    <span>{lang.name}</span>
                    <span className="text-slate-300 font-semibold">{lang.percent}%</span>
                  </div>
                  <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-800">
                    <div
                      className={`h-full ${lang.colorClass}`}
                      style={{ width: `${lang.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 pt-1">
            <a
              href={activeRepo.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 rounded-lg border border-cyan-500/40 bg-cyan-950/30 text-cyan-300 hover:bg-cyan-900/40 hover:border-cyan-400 transition-all flex items-center justify-center gap-1.5 font-bold text-[11px]"
            >
              <span>GitHub Code</span>
              <ExternalLink className="h-3 w-3" />
            </a>

            {activeRepo.demoUrl && (
              <a
                href={activeRepo.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-400 transition-all flex items-center justify-center gap-1.5 font-bold text-[11px]"
              >
                <span>Live App</span>
                <Globe className="h-3 w-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};