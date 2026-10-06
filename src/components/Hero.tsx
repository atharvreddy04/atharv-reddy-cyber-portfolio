import React, { useRef, useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Eye, MessageSquare, Terminal, Shield, ArrowUpRight, Copy, Check } from 'lucide-react';

interface MouseCoords {
  x: number;
  y: number;
}

export const Hero: React.FC = () => {
  const prefersReduced = useReducedMotion();
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [copied, setCopied] = useState(false);
  const [cardOffset, setCardOffset] = useState<MouseCoords>({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || prefersReduced || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setCardOffset({ x: x * 16, y: y * -16 });
  };

  const handleCardMouseLeave = () => {
    setCardOffset({ x: 0, y: 0 });
  };

  const handleCopyStatus = () => {
    navigator.clipboard.writeText("Poondru Atharv Reddy | SecOps & VAPT Analyst");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Easing curve shared by high-end design systems (Linear/Apple)
  const springEase = [0.16, 1, 0.3, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.85,
        ease: springEase,
      },
    },
  };

  return (
    <section className="relative px-6 pt-16 pb-12 max-w-7xl mx-auto overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial={prefersReduced ? false : "hidden"}
        animate="visible"
        className="flex flex-col lg:flex-row lg:items-center justify-between gap-12"
      >
        {/* Left Column: Hero Content */}
        <div className="max-w-3xl space-y-6">
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/20 px-3.5 py-1 text-[11px] font-mono font-medium text-emerald-400 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>[AR//SEC_OPS]</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-300">ACTIVE DEFENSE TELEMETRY</span>
            </div>
          </motion.div>

          {/* Subheader category indicator */}
          <motion.div variants={itemVariants}>
            <p className="text-xs sm:text-sm font-mono text-cyan-400/90 tracking-wide font-medium">
              Cybersecurity Analyst <span className="text-slate-600">|</span> VAPT &amp; SOC Analyst <span className="text-slate-600">|</span> Web AppSec <span className="text-slate-600">|</span> Threat Response
            </p>
          </motion.div>

          {/* Headline Name */}
          <motion.div variants={itemVariants} className="overflow-hidden">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-mono text-shimmer">
              Poondru Atharv Reddy
            </h1>
          </motion.div>

          {/* Lead Paragraph */}
          <motion.div variants={itemVariants}>
            <p className="text-sm sm:text-base font-mono text-slate-400 leading-relaxed max-w-2xl">
              Practical experience evaluating attack surfaces, engineering reproducible PoC exploits, performing vulnerability assessments, and formulating actionable remediation roadmaps.
            </p>
          </motion.div>

          {/* CTA Button Group */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs">
            <a
              href="#resume"
              className="group relative inline-flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-slate-900/80 px-5 py-3 text-cyan-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-950/40 hover:shadow-[0_0_24px_-4px_rgba(6,182,212,0.4)] active:scale-[0.98]"
            >
              <Eye className="h-4 w-4 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-semibold">View Resume</span>
              <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
            </a>

            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-950/20 px-5 py-3 text-emerald-300 backdrop-blur-md transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-900/30 hover:shadow-[0_0_24px_-4px_rgba(16,185,129,0.35)] active:scale-[0.98]"
            >
              <MessageSquare className="h-4 w-4 text-emerald-400 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-semibold">Get In Touch</span>
            </a>

            <button
              onClick={handleCopyStatus}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-slate-400 transition-all duration-300 hover:border-slate-700 hover:text-slate-200 active:scale-[0.98]"
              title="Copy verified signature"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy Handle</span>
                </>
              )}
            </button>
          </motion.div>
        </div>

        {/* Right Column: Interactive 3D Telemetry Terminal Box */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-[420px] perspective-1000"
        >
          <div
            ref={cardRef}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            style={{
              transform: prefersReduced
                ? 'none'
                : `rotateX(${cardOffset.y}deg) rotateY(${cardOffset.x}deg)`,
              transition: cardOffset.x === 0 && cardOffset.y === 0 ? 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
              transformStyle: 'preserve-3d',
            }}
            className="relative rounded-2xl border-glow-subtle bg-slate-900/60 p-5 font-mono text-xs backdrop-blur-xl shadow-2xl transition-colors duration-300 hover:border-cyan-500/30"
          >
            {/* Window bar */}
            <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-800/80">
              <div className="flex items-center gap-2 text-slate-400">
                <Terminal className="h-4 w-4 text-cyan-400" />
                <span className="text-[11px] tracking-wider text-slate-300">atharv@secops:~</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-slate-700/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-slate-700/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
              </div>
            </div>

            {/* Terminal contents */}
            <div className="space-y-2.5 leading-relaxed text-[11px]">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-cyan-400">$</span>
                <span className="text-slate-200">curl -s /api/v1/secops/telemetry</span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/70 text-slate-300 space-y-1 font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-500">HTTP_STATUS:</span>
                  <span className="text-emerald-400 font-semibold">200 OK</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">HOST_KERNEL:</span>
                  <span className="text-cyan-300">Atharv-SecOps v1.0.4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">TARGET_AUDIT:</span>
                  <span className="text-slate-300">OWASP Top 10 / VAPT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">ACCESS_STATE:</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <Shield className="h-3 w-3 inline" /> nominal
                  </span>
                </div>
              </div>

              <p className="text-slate-400 text-[10px] pt-1">
                Type <span className="text-cyan-300 underline underline-offset-2">help</span> to inspect accessible nodes across cluster.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};