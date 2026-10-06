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
  const [isHighlighted, setIsHighlighted] = useState(false);

  // Desktop Mouse Move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Mobile Touch Move & Tap
  const handleTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!cardRef.current || e.touches.length === 0) return;
    const rect = cardRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    setCoords({
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    });
    setIsHighlighted(true);
  };

  const glowRgba = glowColor === 'emerald' 
    ? 'rgba(16, 185, 129, 0.28)' 
    : 'rgba(6, 182, 212, 0.28)';

  const borderHighlight = glowColor === 'emerald'
    ? 'rgba(52, 211, 153, 0.85)'
    : 'rgba(56, 189, 248, 0.85)';

  return (
    <div className={`relative rounded-2xl ${className}`}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHighlighted(true)}
        onMouseLeave={() => setIsHighlighted(false)}
        onTouchStart={handleTouch}
        onTouchMove={handleTouch}
        onTouchEnd={() => {
          // Keep the highlight briefly visible after lifting finger for responsive feedback
          setTimeout(() => setIsHighlighted(false), 300);
        }}
        onTouchCancel={() => setIsHighlighted(false)}
        style={{
          borderColor: isHighlighted ? borderHighlight : 'rgba(30, 41, 59, 0.8)',
          boxShadow: isHighlighted
            ? `0 12px 32px -10px ${glowRgba}, 0 0 25px -6px ${borderHighlight}`
            : '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
        }}
        className="relative h-full w-full rounded-2xl bg-slate-900/80 border p-6 transition-all duration-200 ease-out overflow-hidden backdrop-blur-md"
      >
        {/* Dynamic Light Cone — triggers on both Mouse and Finger Touch */}
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-200"
          style={{
            opacity: isHighlighted ? 1 : 0,
            background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, ${glowRgba}, transparent 70%)`,
          }}
        />

        {/* Content container remains fully clickable */}
        <div className="relative z-10 h-full flex flex-col justify-between pointer-events-auto">
          {children}
        </div>
      </div>
    </div>
  );
};