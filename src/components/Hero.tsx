import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Shield, CornerDownLeft, ArrowDown, ExternalLink } from 'lucide-react';

interface CommandOutput {
  id: string;
  command: string;
  response: React.ReactNode;
}

export const Hero: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      id: '1',
      command: 'whoami',
      response: (
        <span className="text-slate-300">
          Poondru Atharv Reddy — Cybersecurity Specialist &amp; Penetration Tester.
        </span>
      ),
    },
    {
      id: '2',
      command: 'help',
      response: (
        <span className="text-slate-400">
          Available: <span className="text-cyan-400 font-bold">skills</span>,{' '}
          <span className="text-cyan-400 font-bold">projects</span>,{' '}
          <span className="text-cyan-400 font-bold">exp</span>,{' '}
          <span className="text-cyan-400 font-bold">certs</span>,{' '}
          <span className="text-cyan-400 font-bold">netsecure</span>,{' '}
          <span className="text-cyan-400 font-bold">clear</span>
        </span>
      ),
    },
  ]);

  const [cmdHistory, setCmdHistory] = useState<string[]>(['whoami', 'help']);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = input.trim();
    if (!clean) return;

    setCmdHistory((prev) => [...prev, clean]);
    setHistoryIdx(-1);

    const cmd = clean.toLowerCase();
    let res: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        res = (
          <div className="text-[11px] text-slate-300 space-y-1">
            <div className="text-slate-400">Type any command below:</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 pt-1 text-cyan-300">
              <div><span className="text-emerald-400 font-bold">skills</span> &rarr; Resume/Toolset</div>
              <div><span className="text-emerald-400 font-bold">projects</span> &rarr; Repositories</div>
              <div><span className="text-emerald-400 font-bold">exp</span> &rarr; Internships</div>
              <div><span className="text-emerald-400 font-bold">certs</span> &rarr; Credentials</div>
              <div><span className="text-emerald-400 font-bold">netsecure</span> &rarr; Live Packet App</div>
              <div><span className="text-emerald-400 font-bold">clear</span> &rarr; Reset screen</div>
            </div>
          </div>
        );
        break;

      case 'skills':
        scrollTo('skills');
        res = <span className="text-cyan-400">&gt; Scrolling to #skills (Professional Resume &amp; Toolset)...</span>;
        break;

      case 'projects':
        scrollTo('projects');
        res = <span className="text-cyan-400">&gt; Scrolling to #projects (GitHub Contributions)...</span>;
        break;

      case 'exp':
      case 'experience':
        scrollTo('experience');
        res = <span className="text-cyan-400">&gt; Scrolling to #experience (Digit Defence &amp; VAPT)...</span>;
        break;

      case 'certs':
      case 'certifications':
        scrollTo('certifications');
        res = <span className="text-cyan-400">&gt; Scrolling to #certifications (NASSCOM &amp; IIFIS)...</span>;
        break;

      case 'netsecure':
        window.open('https://atharvreddy-network-traffic-analyzer.vercel.app', '_blank');
        res = <span className="text-emerald-400">&gt; Launching NetSecure live app in a new tab...</span>;
        break;

      case 'whoami':
        res = <span className="text-slate-300">Poondru Atharv Reddy | B.Sc Computer Science | VAPT &amp; SOC Operations</span>;
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'sudo':
      case 'sudo su':
        res = <span className="text-rose-400 font-bold">[ACCESS DENIED]: Security alert dispatched to terminal daemon.</span>;
        break;

      default:
        res = (
          <span className="text-rose-400">
            command not found: {clean}. Type <span className="underline font-bold text-white">help</span>.
          </span>
        );
    }

    setHistory((prev) => [...prev, { id: `${Date.now()}-${clean}`, command: clean, response: res }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!cmdHistory.length) return;
      const next = historyIdx === -1 ? cmdHistory.length - 1 : Math.max(0, historyIdx - 1);
      setHistoryIdx(next);
      setInput(cmdHistory[next]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx === -1) return;
      const next = historyIdx + 1;
      if (next >= cmdHistory.length) {
        setHistoryIdx(-1);
        setInput('');
      } else {
        setHistoryIdx(next);
        setInput(cmdHistory[next]);
      }
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-16 px-6 max-w-5xl mx-auto font-mono text-center">
      {/* Status Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs mb-6">
        <Shield className="w-3.5 h-3.5 animate-pulse" />
        <span>Vulnerability Assessment &amp; Threat Defense</span>
      </div>

      <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
        POONDRU ATHARV REDDY
      </h1>

      <p className="text-sm text-cyan-400 mt-2 font-semibold">
        Cybersecurity Specialist &bull; VAPT &bull; OWASP Top 10 &bull; Network Security
      </p>

      {/* Interactive Command Terminal */}
      <div
        onClick={() => inputRef.current?.focus()}
        className="mt-8 text-left rounded-xl border border-cyan-500/30 bg-slate-950/85 backdrop-blur-md p-4 shadow-[0_0_30px_rgba(6,182,212,0.12)] cursor-text max-w-2xl mx-auto"
      >
        <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-800 text-xs text-slate-500">
          <div className="flex items-center gap-2 text-slate-300">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>atharv-reddy-cyber-portfolio: ~</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          </div>
        </div>

        {/* History Log */}
        <div className="max-h-48 overflow-y-auto space-y-2 pr-1 text-xs">
          {history.map((h) => (
            <div key={h.id} className="space-y-1">
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold shrink-0">atharv-reddy-cyber-portfolio:~$</span>
                <span className="text-white">{h.command}</span>
              </div>
              <div className="pl-4 text-xs">{h.response}</div>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Active Command Input Line */}
        <form onSubmit={handleCommand} className="flex items-center gap-1.5 mt-2.5 pt-2 border-t border-slate-800 text-xs">
          <span className="text-emerald-400 font-bold shrink-0">atharv-reddy-cyber-portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type 'help' or 'projects'..."
            className="w-full bg-transparent text-cyan-300 outline-none border-none p-0 focus:ring-0 font-mono caret-cyan-400 placeholder:text-slate-600"
            spellCheck={false}
            autoComplete="off"
          />
          <button type="submit" className="text-slate-500 hover:text-cyan-400 transition-colors">
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>

      {/* Quick Jump Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 mt-8 text-xs">
        <button
          onClick={() => scrollTo('skills')}
          className="px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-colors flex items-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.25)]"
        >
          <span>View Resume / Skills</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={() => scrollTo('projects')}
          className="px-4 py-2 rounded-lg border border-slate-700 bg-slate-900/60 text-slate-300 hover:border-cyan-500/50 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <span>Explore Projects</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;