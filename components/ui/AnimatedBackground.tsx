'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const DENSITY = 9000; // higher = fewer particles
    const MAX_DIST = 150; // line-connect distance
    const SPEED = 0.2;

    type Particle = { x: number; y: number; vx: number; vy: number };
    let particles: Particle[] = [];

    function initParticles() {
      const count = Math.floor((width * height) / DENSITY);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
      }));
    }

    function resize() {
      width = canvas!.width = window.innerWidth;
      height = canvas!.height = window.innerHeight;
      initParticles();
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      ctx!.fillStyle = 'rgba(45, 212, 255, 0.55)'; // signal cyan
      ctx!.strokeStyle = 'rgba(45, 212, 255, 0.15)';

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, 1.3, 0, Math.PI * 2);
        ctx!.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }
    }

    initParticles();

    if (prefersReducedMotion) {
      draw(); // render one static frame, no animation loop
      window.addEventListener('resize', resize);
      return () => window.removeEventListener('resize', resize);
    }

    let raf: number;
    function loop() {
      draw();
      raf = requestAnimationFrame(loop);
    }
    loop();

    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-80"
      aria-hidden="true"
    />
  );
}