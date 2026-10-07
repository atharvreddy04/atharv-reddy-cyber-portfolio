import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface HighlightCard3DProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'emerald' | 'purple';
}

export const HighlightCard3D: React.FC<HighlightCard3DProps> = ({
  children,
  className = '',
  glowColor = 'cyan',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -5;
    const rY = ((x - centerX) / centerX) * 5;

    setRotateX(rX);
    setRotateY(rY);
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.16,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  const glowShadow =
    glowColor === 'emerald'
      ? 'shadow-[0_0_40px_-10px_rgba(16,185,129,0.2)]'
      : 'shadow-[0_0_40px_-10px_rgba(6,182,212,0.2)]';

  return (
    <div className="w-full min-w-0" style={{ perspective: 1000 }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX, rotateY }}
        transition={{ type: 'spring', stiffness: 240, damping: 24, mass: 0.5 }}
        style={{ transformStyle: 'preserve-3d' }}
        className={`relative w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl ${glowShadow} ${className}`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-2xl"
          style={{
            opacity: glarePosition.opacity,
            background: `radial-gradient(350px circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.15), transparent 65%)`,
          }}
        />
        <div className="w-full">{children}</div>
      </motion.div>
    </div>
  );
};