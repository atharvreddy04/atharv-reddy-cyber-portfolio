import React, { useEffect, useRef } from 'react';

export const ParticleSpace: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 3;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      document.documentElement.style.setProperty('--cursor-x', `${mouseX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${mouseY}px`);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Discrete micro-particles
    const count = Math.min(Math.floor(window.innerWidth / 32), 48);
    const nodes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.2 + 0.4,
      baseAlpha: Math.random() * 0.4 + 0.1,
      alpha: 0,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Fine interactive cursor gradient
      const radial = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 500);
      radial.addColorStop(0, 'rgba(6, 182, 212, 0.05)');
      radial.addColorStop(0.5, 'rgba(16, 185, 129, 0.015)');
      radial.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = radial;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0) n.x = width;
        if (n.x > width) n.x = 0;
        if (n.y < 0) n.y = height;
        if (n.y > height) n.y = 0;

        // Proximity detection to mouse
        const dx = mouseX - n.x;
        const dy = mouseY - n.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const mouseFactor = Math.max(0, 1 - dist / 280);

        n.alpha = n.baseAlpha + mouseFactor * 0.5;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size * (1 + mouseFactor * 0.4), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148, 163, 184, ${n.alpha})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full hero-spotlight"
    />
  );
};