import React, { useEffect, useState } from 'react';

interface Props {
  onComplete: () => void;
  name?: string;
}

export const CyberIntroSplash: React.FC<Props> = ({ 
  onComplete, 
  name = "POONDRU ATHARV REDDY" 
}) => {
  const [phase, setPhase] = useState<'booting' | 'granted' | 'fadeout'>('booting');
  const [text, setText] = useState('');
  
  const bootLines = [
    'Initializing System...',
    'Loading Security Profile...',
    'Decrypting Threat Models...',
    'Access Granted ✓'
  ];

  useEffect(() => {
    let lineIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    const interval = setInterval(() => {
      const currentFullLine = bootLines[lineIdx];

      if (!isDeleting) {
        setText(currentFullLine.substring(0, charIdx + 1));
        charIdx++;

        if (charIdx === currentFullLine.length) {
          if (lineIdx === bootLines.length - 1) {
            // Final line reached: Access Granted ✓
            clearInterval(interval);
            setPhase('granted');
            setTimeout(() => setPhase('fadeout'), 1800);
            setTimeout(() => onComplete(), 2400);
            return;
          }
          // Pause before deleting
          isDeleting = true;
        }
      } else {
        setText(currentFullLine.substring(0, charIdx - 1));
        charIdx--;

        if (charIdx === 0) {
          isDeleting = false;
          lineIdx++;
        }
      }
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-700 ${
        phase === 'fadeout' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Star Points */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/40 via-black to-black pointer-events-none" />

      {phase === 'booting' && (
        <div className="relative font-mono text-cyan-400 text-base sm:text-xl tracking-widest flex items-center gap-1">
          <span>{text}</span>
          <span className="w-2.5 h-5 bg-cyan-400 animate-pulse inline-block" />
        </div>
      )}

      {phase !== 'booting' && (
        <div className="relative flex flex-col items-center text-center space-y-4 px-4 animate-in fade-in zoom-in-95 duration-500">
          <div className="text-xs sm:text-sm font-mono tracking-widest text-cyan-300/90 flex items-center gap-2">
            <span>Access Granted</span>
            <span className="text-emerald-400">✓</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-cyan-400 to-amber-200 drop-shadow-[0_0_35px_rgba(6,182,212,0.45)]">
            {name}
          </h1>

          {/* Laser Wipe Beam */}
          <div className="w-48 sm:w-80 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-amber-300 shadow-[0_0_12px_#38bdf8] transition-all duration-700 ease-out" />
        </div>
      )}
    </div>
  );
};