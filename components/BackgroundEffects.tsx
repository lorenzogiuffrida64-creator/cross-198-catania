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
  horizontalMove: string;
  animationType: 'float' | 'float-diagonal' | 'float-zigzag';
}

const BackgroundEffects: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Create more particles with varied properties for a richer effect
    const p = Array.from({ length: 120 }).map((_, i) => {
      const isRed = Math.random() > 0.65; // More red particles
      const size = Math.random();

      // Determine animation type for variety
      let animationType: 'float' | 'float-diagonal' | 'float-zigzag';
      const rand = Math.random();
      if (rand > 0.66) animationType = 'float-zigzag';
      else if (rand > 0.33) animationType = 'float-diagonal';
      else animationType = 'float';

      return {
        id: i,
        left: `${Math.random() * 100}%`,
        duration: `${20 + Math.random() * 40}s`, // Slower, more graceful movement
        delay: `${Math.random() * -30}s`,
        size: size > 0.9 ? `${3 + Math.random() * 4}px` : `${0.5 + Math.random() * 2.5}px`, // Some larger particles
        opacity: 0.05 + Math.random() * 0.35,
        color: isRed ? '#dc2626' : '#71717a',
        blur: Math.random() > 0.4 ? `blur(${0.5 + Math.random() * 2}px)` : 'none',
        horizontalMove: `${-30 + Math.random() * 60}px`, // Horizontal drift
        animationType,
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
      
      {/* Enhanced Particles Layer with Multiple Animation Types */}
      {particles.map((p) => (
        <div
          key={p.id}
          className={`particle-enhanced ${p.animationType}`}
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
            '--horizontal-move': p.horizontalMove,
            borderRadius: Math.random() > 0.5 ? '50%' : '0%', // Mix of circles and squares
          } as React.CSSProperties & { '--horizontal-move': string }}
        />
      ))}

      {/* Special Glowing Particles - Larger with glow effect */}
      {particles.slice(0, 15).map((p) => (
        <div
          key={`glow-${p.id}`}
          className="particle-glow float-diagonal"
          style={{
            left: p.left,
            bottom: '-10%',
            width: `${5 + Math.random() * 8}px`,
            height: `${5 + Math.random() * 8}px`,
            backgroundColor: p.color === '#dc2626' ? '#dc2626' : '#ffffff',
            opacity: 0.15 + Math.random() * 0.2,
            animationDuration: `${30 + Math.random() * 50}s`,
            animationDelay: `${Math.random() * -40}s`,
            '--horizontal-move': `${-40 + Math.random() * 80}px`,
            boxShadow: p.color === '#dc2626'
              ? '0 0 20px rgba(220, 38, 38, 0.6), 0 0 40px rgba(220, 38, 38, 0.3)'
              : '0 0 15px rgba(255, 255, 255, 0.4), 0 0 30px rgba(255, 255, 255, 0.2)',
          } as React.CSSProperties & { '--horizontal-move': string }}
        />
      ))}

      {/* Subtle Horizontal Scanlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] z-10 bg-[length:100%_4px,3px_100%] pointer-events-none opacity-20" />
    </div>
  );
};

export default BackgroundEffects;