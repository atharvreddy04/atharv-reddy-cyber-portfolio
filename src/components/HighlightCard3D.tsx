import React, { useRef, useState, useEffect } from 'react';

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
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const glowRgba = glowColor === 'emerald' 
    ? 'rgba(16, 185, 129, 0.22)' 
    : 'rgba(6, 182, 212, 0.22)';

  const borderHighlight = glowColor === 'emerald'
    ? 'rgba(52, 211, 153, 0.7)'
    : 'rgba(56, 189, 248, 0.7)';

  return (
    <div className={`relative rounded-2xl ${className}`}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => !isTouchDevice && setIsHovered(true)}
        onMouseLeave={() => !isTouchDevice && setIsHovered(false)}
        style={{
          borderColor: isHovered ? borderHighlight : 'rgba(30, 41, 59, 0.8)',
          boxShadow: isHovered
            ? `0 10px 30px -10px ${glowRgba}, 0 0 25px -8px ${borderHighlight}`
            : '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
        }}
        className="relative h-full w-full rounded-2xl bg-slate-900/80 border p-6 transition-all duration-200 ease-out overflow-hidden backdrop-blur-md"
      >
        {/* Luminous Mouse-Following Radial Spotlight (Stationary Card, Moving Glow) */}
        {!isTouchDevice && (
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, ${glowRgba}, transparent 70%)`,
            }}
          />
        )}

        <div className="relative z-10 h-full flex flex-col justify-between pointer-events-auto">
          {children}
        </div>
      </div>
    </div>
  );
};