import React, { useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'emerald' | 'cyan';
}

export const HighlightCard3D: React.FC<Props> = ({ 
  children, 
  className = '', 
  glowColor = 'emerald' 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [rot, setRot] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCoords({ x, y });

    // Calculate physical 3D tilt angles
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRot({ x: rotateX, y: rotateY });
  };

  const glowRgba = glowColor === 'emerald' 
    ? 'rgba(16, 185, 129, 0.18)' 
    : 'rgba(6, 182, 212, 0.18)';

  const borderHighlight = glowColor === 'emerald'
    ? 'rgba(52, 211, 153, 0.6)'
    : 'rgba(56, 189, 248, 0.6)';

  return (
    <div
      style={{ perspective: 1200 }}
      className={`relative rounded-2xl ${className}`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setRot({ x: 0, y: 0 });
        }}
        style={{
          transform: isHovered
            ? `rotateX(${rot.x}deg) rotateY(${rot.y}deg) translateZ(28px)`
            : 'rotateX(0deg) rotateY(0deg) translateZ(0px)',
          borderColor: isHovered ? borderHighlight : 'rgba(30, 41, 59, 0.8)',
          boxShadow: isHovered
            ? `0 20px 40px -15px ${glowRgba}, 0 0 30px -10px ${borderHighlight}`
            : '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
        }}
        className="relative h-full w-full rounded-2xl bg-slate-900/80 border p-6 transition-transform duration-150 ease-out will-change-transform overflow-hidden backdrop-blur-md"
      >
        {/* Dynamic 3D Cursor Highlight Spotlight */}
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(450px circle at ${coords.x}px ${coords.y}px, ${glowRgba}, transparent 70%)`,
          }}
        />

        {/* Content elevated forward in 3D */}
        <div className="relative z-10 h-full flex flex-col justify-between" style={{ transform: 'translateZ(20px)' }}>
          {children}
        </div>
      </div>
    </div>
  );
};