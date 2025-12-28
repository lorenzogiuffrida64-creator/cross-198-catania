import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: string;
  duration: string;
  delay: string;
  size: string;
  opacity: number;
  color: string;
  blur: string;
}

const BackgroundEffects: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const p = Array.from({ length: 60 }).map((_, i) => {
      const isRed = Math.random() > 0.7;
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        duration: `${15 + Math.random() * 25}s`,
        delay: `${Math.random() * -20}s`, // Negative delay so they start at different positions
        size: `${1 + Math.random() * 3}px`,
        opacity: 0.1 + Math.random() * 0.4,
        color: isRed ? '#dc2626' : '#71717a',
        blur: Math.random() > 0.5 ? 'blur(1px)' : 'none',
      };
    });
    setParticles(p);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
      {/* Grid Shimmer Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', 
          backgroundSize: '60px 60px' 
        }} 
      />
      
      {/* Immersive Ambient Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-red-900/10 blur-[150px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-zinc-900/30 blur-[120px] rounded-full" />
      
      {/* Particles Layer */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            bottom: '-5%',
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            opacity: p.opacity,
            filter: p.blur,
            animationDuration: p.duration,
            animationDelay: p.delay,
            '--duration': p.duration, // For the CSS keyframe if used
          } as any}
        />
      ))}

      {/* Subtle Horizontal Scanlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] z-10 bg-[length:100%_4px,3px_100%] pointer-events-none opacity-20" />
    </div>
  );
};

export default BackgroundEffects;