import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Terminal, Shield, Lock, Layers } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  icon: React.ElementType;
  statusBadge: string;
}

const projects: Project[] = [
  {
    id: 'netsecure',
    title: 'NetSecure Analyzer',
    tagline: 'Network Traffic DPI & Threat Monitor',
    description:
      'Futuristic web-based packet analyzer engineered with React, Vite, and Tailwind CSS. Simulates live packet streaming, protocol distribution breakdowns, IP geolocation analysis, threat correlation, and automated security rule alerts.',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Lucide React'],
    liveUrl: 'https://atharvreddy-network-traffic-analyzer.vercel.app',
    icon: Terminal,
    statusBadge: 'LIVE_DEPLOYMENT',
  },
  {
    id: 'phishing-detector',
    title: 'Phishing URL Detection Tool',
    tagline: 'Heuristic Threat & Entropy Scanner',
    description:
      'Automated cybersecurity tool built in Python using heuristic pattern matching, Shannon entropy calculation, regex extraction, and HTTP response-header verification to expose deceptive and typosquatted domains.',
    techStack: ['Python', 'Regex', 'Heuristic Engine', 'Requests', 'Network Sec'],
    icon: Shield,
    statusBadge: 'CLI_TOOL',
  },
  {
    id: 'folder-encryptor',
    title: 'Secure Folder Encryptor',
    tagline: 'Cryptographic Desktop File Vault',
    description:
      'Robust local storage security utility built in Java implementing AES-256 in CBC mode, dynamic PBKDF2 key derivation with salting, and SHA-256 cryptographic hashes for full file integrity checking.',
    techStack: ['Java', 'AES-256-CBC', 'PBKDF2', 'SHA-256', 'Swing/AWT'],
    icon: Lock,
    statusBadge: 'DESKTOP_APP',
  },
];

// Interactive 3D Spatial Tilt Card Component
const Card3D: React.FC<{ project: Project }> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 250, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 250, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['14deg', '-14deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-14deg', '14deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = project.icon;

  return (
    <div
      style={{ perspective: 1200 }}
      className="w-full flex justify-center"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-6 sm:p-7 backdrop-blur-md transition-shadow duration-300 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] flex flex-col justify-between"
      >
        {/* Glow Accent Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

        {/* Card Top Section */}
        <div style={{ transform: 'translateZ(40px)' }}>
          <div className="flex items-center justify-between mb-4">
            <div className="p-2.5 rounded-lg border border-cyan-800/60 bg-cyan-950/40 text-cyan-400">
              <Icon className="w-5 h-5 stroke-[2]" />
            </div>
            <span className="text-[10px] font-mono tracking-wider font-bold text-cyan-300 bg-cyan-950/60 border border-cyan-800/60 px-2.5 py-1 rounded">
              {project.statusBadge}
            </span>
          </div>

          <h3 className="text-xl font-bold text-white tracking-wide font-mono">
            {project.title}
          </h3>
          <div className="text-xs font-semibold text-cyan-400 mt-1 font-mono">
            &gt; {project.tagline}
          </div>

          <p className="text-xs text-slate-300 mt-4 leading-relaxed font-sans">
            {project.description}
          </p>
        </div>

        {/* Card Bottom Section */}
        <div style={{ transform: 'translateZ(30px)' }} className="mt-6 pt-5 border-t border-slate-800/80">
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-400 text-slate-950 text-xs font-mono font-bold hover:bg-cyan-300 transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] cursor-pointer"
            >
              <span>Launch Live App</span>
              <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          ) : (
            <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
              <span>●</span>
              <span>Standalone Security Repository</span>
            </span>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export const HighlightCard3D: React.FC = () => {
  return (
    <section id="projects" className="scroll-mt-24 px-6 py-12 max-w-7xl mx-auto font-mono">
      {/* Terminal Token Header */}
      <div className="flex items-center gap-2 text-xs text-emerald-400 mb-1">
        <Layers className="h-4 w-4" />
        <span>// SECURITY_ENGINEERING</span>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 tracking-wider mb-2">
        // FEATURED_PROJECTS
      </h2>
      <p className="text-xs text-slate-400 mb-10 italic">
        "Spatial 3D showcases of interactive web security analyzers, offensive scripts, and cryptographic tools."
      </p>

      {/* 3D Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj) => (
          <Card3D key={proj.id} project={proj} />
        ))}
      </div>
    </section>
  );
};

export default HighlightCard3D;