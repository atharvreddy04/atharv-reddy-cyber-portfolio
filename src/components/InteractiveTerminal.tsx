import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft } from 'lucide-react';

interface CommandOutput {
  id: string;
  command: string;
  response: React.ReactNode;
}

export const InteractiveTerminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      id: 'init-1',
      command: 'whoami',
      response: (
        <span className="text-slate-300">
          Poondru Atharv Reddy — Cybersecurity Specialist &amp; Ethical Hacker.
        </span>
      ),
    },
    {
      id: 'init-2',
      command: 'help',
      response: (
        <span className="text-slate-400">
          Type <span className="text-cyan-400 font-bold">skills</span>,{' '}
          <span className="text-cyan-400 font-bold">projects</span>,{' '}
          <span className="text-cyan-400 font-bold">exp</span>,{' '}
          <span className="text-cyan-400 font-bold">certs</span>,{' '}
          <span className="text-cyan-400 font-bold">contact</span>, or{' '}
          <span className="text-cyan-400 font-bold">clear</span>.
        </span>
      ),
    },
  ]);

  const [cmdHistory, setCmdHistory] = useState<string[]>(['whoami', 'help']);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll inside terminal output on new message
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Navigate command history using Up / Down arrow keys
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(cmdHistory[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= cmdHistory.length) {
        setHistoryIndex(-1);
        setInput('');
      } else {
        setHistoryIndex(nextIndex);
        setInput(cmdHistory[nextIndex]);
      }
    }
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const rawInput = input.trim();
    if (!rawInput) return;

    const lowerCmd = rawInput.toLowerCase();
    let response: React.ReactNode = null;

    // Track command history
    setCmdHistory((prev) => [...prev, rawInput]);
    setHistoryIndex(-1);

    switch (lowerCmd) {
      case 'help':
        response = (
          <div className="space-y-1 text-slate-300">
            <div>Available Commands:</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-[11px] text-cyan-300 pt-1">
              <div><span className="text-emerald-400 font-bold">whoami</span> — Identity</div>
              <div><span className="text-emerald-400 font-bold">skills</span> — Jump to Skills</div>
              <div><span className="text-emerald-400 font-bold">projects</span> — Jump to Projects</div>
              <div><span className="text-emerald-400 font-bold">exp</span> — Experience</div>
              <div><span className="text-emerald-400 font-bold">certs</span> — Certifications</div>
              <div><span className="text-emerald-400 font-bold">contact</span> — Reach out</div>
              <div><span className="text-emerald-400 font-bold">netsecure</span> — Launch Live App</div>
              <div><span className="text-emerald-400 font-bold">clear</span> — Wipe terminal</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
        response = (
          <span className="text-slate-300">
            Poondru Atharv Reddy | B.Sc Computer Science | VAPT &amp; SOC Analyst
          </span>
        );
        break;

      case 'skills':
        scrollToSection('skills');
        response = (
          <span className="text-cyan-400">
            &gt; Navigating to #skills (Security Toolset &amp; Technical Stack)...
          </span>
        );
        break;

      case 'projects':
        scrollToSection('projects');
        response = (
          <span className="text-cyan-400">
            &gt; Navigating to #projects (GitHub Contributions &amp; Repositories)...
          </span>
        );
        break;

      case 'exp':
      case 'experience':
        scrollToSection('experience');
        response = (
          <span className="text-cyan-400">
            &gt; Navigating to #experience (Digit Defence &amp; Labs)...
          </span>
        );
        break;

      case 'certs':
      case 'certifications':
        scrollToSection('certifications');
        response = (
          <span className="text-cyan-400">
            &gt; Navigating to #certifications (NASSCOM Gold &amp; IIFIS)...
          </span>
        );
        break;

      case 'contact':
        scrollToSection('contact');
        response = (
          <span className="text-cyan-400">
            &gt; Navigating to #contact section...
          </span>
        );
        break;

      case 'netsecure':
        window.open('https://atharvreddy-network-traffic-analyzer.vercel.app', '_blank');
        response = (
          <span className="text-emerald-400">
            &gt; Initializing NetSecure live deployment in new tab...
          </span>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'sudo':
      case 'sudo su':
        response = (
          <span className="text-red-400 font-bold">
            [ACCESS DENIED]: Incident reported to sec-ops monitoring daemon.
          </span>
        );
        break;

      default:
        response = (
          <span className="text-rose-400">
            zsh: command not found: {rawInput}. Type <span className="underline font-bold text-white">help</span> for commands.
          </span>
        );
    }

    setHistory((prev) => [
      ...prev,
      { id: `${Date.now()}-${rawInput}`, command: rawInput, response },
    ]);
    setInput('');
  };

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="w-full max-w-3xl mx-auto rounded-xl border border-cyan-500/30 bg-slate-950/85 backdrop-blur-md p-4 font-mono shadow-[0_0_25px_rgba(6,182,212,0.12)] text-left cursor-text"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2 text-slate-400">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>atharv-reddy-cyber-portfolio: ~</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
        </div>
      </div>

      {/* Terminal History Container */}
      <div className="max-h-56 overflow-y-auto space-y-2 pr-1 text-xs">
        {history.map((item) => (
          <div key={item.id} className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-emerald-400 font-bold shrink-0">
                atharv-reddy-cyber-portfolio:~$
              </span>
              <span className="text-white">{item.command}</span>
            </div>
            <div className="pl-4 text-xs leading-relaxed">{item.response}</div>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Active Prompt Line */}
      <form onSubmit={handleCommand} className="flex items-center gap-1.5 mt-3 pt-2 border-t border-slate-800/80 text-xs">
        <span className="text-emerald-400 font-bold shrink-0">
          atharv-reddy-cyber-portfolio:~$
        </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="type 'help' or commands..."
          className="w-full bg-transparent text-cyan-300 outline-none border-none focus:ring-0 p-0 font-mono caret-cyan-400 placeholder:text-slate-600 text-xs"
          spellCheck={false}
          autoComplete="off"
        />
        <button type="submit" className="text-slate-600 hover:text-cyan-400 transition-colors">
          <CornerDownLeft className="w-3 h-3" />
        </button>
      </form>
    </div>
  );
};

export default InteractiveTerminal;