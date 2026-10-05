import React, { useState } from 'react';
import { Terminal, ShieldAlert, FileText, Send } from 'lucide-react';
import { HighlightCard3D } from './HighlightCard3D';

export const Hero = () => {
  const [terminalInput, setTerminalInput] = useState('');
  const [logs, setLogs] = useState<string[]>([
    'Atharv Security Engine v2.4 initialized...',
    'Type "help" to inspect accessible nodes.',
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    let res = '';

    if (cmd === 'help') {
      res = 'Commands: about, skills, projects, clear';
    } else if (cmd === 'about') {
      res = 'Specialist in VAPT, SOC operations, vulnerability management, and incident response.';
    } else if (cmd === 'skills') {
      res = 'Tools: Burp Suite Pro, Wireshark, Nmap, OpenVAS, Kali Linux, Python, Java.';
    } else if (cmd === 'projects') {
      res = 'Projects: Phishing URL Detector, Secure Folder Encryptor, Web AppSec Labs.';
    } else if (cmd === 'clear') {
      setLogs([]);
      setTerminalInput('');
      return;
    } else if (cmd === '') {
      return;
    } else {
      res = `Command not recognized: "${cmd}". Type "help".`;
    }

    setLogs((prev) => [...prev, `atharv@sec-ops:~$ ${terminalInput}`, res]);
    setTerminalInput('');
  };

  return (
    <section id="about" className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
      {/* Left Pitch */}
      <div className="lg:col-span-7 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <ShieldAlert className="w-3.5 h-3.5" />
          Offensive & Defensive Security Operations
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Poondru Atharv Reddy
        </h1>

        <p className="text-sm sm:text-base text-slate-300 font-mono leading-relaxed">
          Cybersecurity Analyst <span className="text-emerald-400">|</span> VAPT & SOC Analyst <span className="text-emerald-400">|</span> Web Application Security <span className="text-emerald-400">|</span> Vulnerability Management <span className="text-emerald-400">|</span> Threat Detection & Incident Response
        </p>

        <p className="text-slate-400 leading-relaxed max-w-xl">
          Practical experience evaluating attack surfaces, engineering PoC exploits, performing vulnerability assessments, and formulating actionable remediation roadmaps.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <a 
            href="#resume" 
            className="px-5 py-2.5 rounded-lg border border-slate-700 bg-slate-900/60 text-slate-200 text-sm font-semibold hover:border-slate-500 transition-colors flex items-center gap-2"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            View Resume
          </a>
          <a 
            href="#contact" 
            className="px-5 py-2.5 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-sm hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20 flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            Get In Touch
          </a>
        </div>
      </div>

      {/* Right Terminal in 3D Highlight Card */}
      <div className="lg:col-span-5">
        <HighlightCard3D glowColor="emerald">
          <div className="bg-slate-950 px-4 py-2 border-b border-slate-800 flex items-center gap-2 rounded-t-lg -mx-6 -mt-6 mb-4">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono text-slate-400">sec_terminal ~ session_id_902</span>
          </div>
          
          <div className="font-mono text-xs text-slate-300 space-y-2 h-64 overflow-y-auto">
            {logs.map((log, idx) => (
              <div key={idx} className={log.startsWith('atharv@') ? 'text-emerald-400' : 'text-slate-300'}>
                {log}
              </div>
            ))}
            <form onSubmit={handleCommand} className="flex items-center gap-1.5 mt-2">
              <span className="text-emerald-400">atharv@sec-ops:~$</span>
              <input 
                type="text" 
                className="bg-transparent outline-none flex-1 text-slate-100" 
                value={terminalInput} 
                onChange={(e) => setTerminalInput(e.target.value)} 
                placeholder="help"
              />
            </form>
          </div>
        </HighlightCard3D>
      </div>
    </section>
  );
};