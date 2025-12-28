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
    // Optimized particle count for better performance
    const particleCount = window.innerWidth < 768 ? 25 : 50; // Fewer on mobile

    const p = Array.from({ length: particleCount }).map((_, i) => {
      const isRed = Math.random() > 0.6;
      const size = Math.random();

      // Simpler animation types for better performance
      let animationType: 'float' | 'float-diagonal' | 'float-zigzag';
      const rand = Math.random();
      if (rand > 0.7) animationType = 'float-zigzag';
      else if (rand > 0.4) animationType = 'float-diagonal';
      else animationType = 'float';

      return {
        id: i,
        left: `${Math.random() * 100}%`,
        duration: `${15 + Math.random() * 20}s`, // Faster for smoother appearance
        delay: `${Math.random() * -20}s`,
        size: size > 0.85 ? `${4 + Math.random() * 3}px` : `${1 + Math.random() * 2}px`,
        opacity: 0.2 + Math.random() * 0.4, // More visible
        color: isRed ? '#dc2626' : '#ffffff', // Changed gray to white for better visibility
        blur: Math.random() > 0.6 ? `blur(1px)` : 'none', // Less blur
        horizontalMove: `${-20 + Math.random() * 40}px`,
        animationType,
      };
    });
    setParticles(p);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Simplified Grid Overlay - Better Performance */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      {/* Enhanced Ambient Glows - More Visible */}
      <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-red-600/15 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-red-900/10 blur-[100px] rounded-full" />
      
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

      {/* Special Glowing Particles - Optimized and More Visible */}
      {particles.slice(0, 8).map((p) => (
        <div
          key={`glow-${p.id}`}
          className="particle-glow float"
          style={{
            left: p.left,
            bottom: '-10%',
            width: `${6 + Math.random() * 6}px`,
            height: `${6 + Math.random() * 6}px`,
            backgroundColor: p.color === '#dc2626' ? '#dc2626' : '#ffffff',
            opacity: 0.3 + Math.random() * 0.25,
            animationDuration: `${20 + Math.random() * 25}s`,
            animationDelay: `${Math.random() * -25}s`,
            '--horizontal-move': `${-30 + Math.random() * 60}px`,
            boxShadow: p.color === '#dc2626'
              ? '0 0 25px rgba(220, 38, 38, 0.8), 0 0 50px rgba(220, 38, 38, 0.4)'
              : '0 0 20px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.3)',
          } as React.CSSProperties & { '--horizontal-move': string }}
        />
      ))}

      {/* Subtle Horizontal Scanlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] z-10 bg-[length:100%_4px,3px_100%] pointer-events-none opacity-20" />
    </div>
  );
};

export default BackgroundEffects;