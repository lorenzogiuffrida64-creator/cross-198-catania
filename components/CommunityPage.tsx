import React, { useEffect, useRef, useState } from 'react';
import Testimonials from './Testimonials';
import BrandCarousel from './BrandCarousel';

const CommunityPage: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      
      const rect = scrollContainerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const totalScrollable = rect.height - windowHeight;
      const currentScroll = -rect.top;
      
      const progress = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scenes = [
    {
      title: "Allenati. Cresci. Ripeti.",
      description: "Entra in un ecosistema dove ogni ripetizione conta. Costruisci una versione d'élite di te stesso.",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069"
    },
    {
      title: "Programmazione. Che Ti Segue.",
      description: "WOD studiati per il tuo livello, spingendoti costantemente oltre i limiti in totale sicurezza.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070"
    },
    {
      title: "Una Community. Che Spinge.",
      description: "Non sei un numero, sei parte della tribù. Sostegno reciproco e celebrazione di ogni PR.",
      image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974"
    }
  ];

  // Helper to calculate opacity and transform based on scroll
  const getSceneStyles = (index: number) => {
    const step = 1 / scenes.length;
    const start = index * step;
    const end = (index + 1) * step;
    const center = (start + end) / 2;

    let opacity = 0;
    if (scrollProgress >= start - 0.15 && scrollProgress <= end + 0.15) {
      const distFromCenter = Math.abs(scrollProgress - center);
      opacity = Math.max(0, 1 - (distFromCenter / (step * 0.85)));
    }

    const localProgress = (scrollProgress - start) / step;
    const scale = 1.05 + (localProgress * 0.05);
    const translateY = (localProgress - 0.5) * 50;
    const blur = Math.max(0, (Math.abs(scrollProgress - center) - 0.1) * 20);

    return {
      opacity,
      transform: `scale(${scale}) translateY(${translateY}px)`,
      filter: `blur(${blur}px)`,
      zIndex: opacity > 0.1 ? 10 : 0
    };
  };

  const getTextStyles = (index: number) => {
    const step = 1 / scenes.length;
    const center = (index * step) + (step / 2);
    const dist = scrollProgress - center;
    
    const opacity = Math.max(0, 1 - Math.abs(dist) * 8);
    const translateY = dist * 200;
    const scale = 1 - Math.abs(dist) * 0.5;

    return {
      opacity,
      transform: `translateY(${translateY}px) scale(${scale})`,
      pointerEvents: (opacity > 0.5 ? 'auto' : 'none') as any,
    };
  };

  return (
    <div className="bg-black">
      {/* Hero Intro */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 container mx-auto px-6 text-center reveal">
        <span className="text-red-600 font-black uppercase tracking-[0.5em] text-[10px] md:text-[11px] mb-4 inline-block">Visione & Community</span>
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black font-heading tracking-tighter uppercase italic leading-none mb-6">
          La Nostra <span className="text-red-600">Tribù</span>.
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-2xl text-white/50 font-light leading-relaxed">
          Il cuore pulsante di Cross 198 non sono i pesi, ma le persone che li sollevano insieme.
        </p>
      </section>

      {/* FULL-SCREEN BACKGROUND SCROLL STORYTELLING */}
      <section 
        ref={scrollContainerRef} 
        className="relative h-[400vh] bg-black"
      >
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
          
          {/* BACKGROUND LAYER: Cinematic Full-Bleed Images */}
          <div className="absolute inset-0 z-0">
            {scenes.map((scene, i) => {
              const styles = getSceneStyles(i);
              return (
                <div 
                  key={i}
                  className="absolute inset-0 transition-opacity duration-300 ease-out"
                  style={{ 
                    opacity: styles.opacity, 
                    zIndex: styles.zIndex 
                  }}
                >
                  <img 
                    src={scene.image} 
                    className="w-full h-full object-cover grayscale-[20%]"
                    style={{ 
                      transform: styles.transform,
                      filter: styles.filter
                    }}
                    alt={scene.title}
                  />
                  
                  <div className="absolute inset-0 bg-black/70 pointer-events-none" />
                  <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black via-black/40 to-transparent pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
                </div>
              );
            })}
          </div>

          {/* TEXT CONTENT LAYER (Centered on Background) */}
          <div className="container mx-auto px-6 h-full flex flex-col items-center justify-center relative z-20 text-center">
            <div className="relative w-full max-w-[1400px] flex items-center justify-center flex-1">
              {scenes.map((scene, i) => {
                const textStyles = getTextStyles(i);
                return (
                  <div 
                    key={i}
                    className="absolute inset-0 flex flex-col items-center justify-center space-y-6 md:space-y-12 w-full px-4"
                    style={{
                      opacity: textStyles.opacity,
                      transform: textStyles.transform,
                      pointerEvents: textStyles.pointerEvents
                    }}
                  >
                    <div className="space-y-6 md:space-y-12 w-full max-w-[95vw] mx-auto">
                      <h2 className="text-4xl sm:text-6xl md:text-[6vw] lg:text-[7.5vw] xl:text-[8.5vw] font-black font-heading tracking-tighter leading-[1] md:leading-[0.9] italic uppercase text-white drop-shadow-[0_20px_60px_rgba(0,0,0,1)] text-center break-words">
                        {scene.title.split('.').map((part, pi) => (
                          part.trim() && (
                            <span key={pi} className="block last:text-red-600">
                              {part.trim()}{pi < scene.title.split('.').length - 1 ? '.' : ''}
                            </span>
                          )
                        ))}
                      </h2>
                      <p className="text-white/90 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light leading-relaxed max-w-4xl mx-auto drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)] text-center px-4">
                        {scene.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Minimal Navigation Progress Indicator */}
          <div className="absolute bottom-8 md:bottom-16 left-1/2 -translate-x-1/2 flex flex-col md:flex-row items-center gap-4 md:gap-8 z-30">
            <div className="flex gap-3 md:gap-4">
               {scenes.map((_, i) => {
                 const step = 1 / scenes.length;
                 const isActive = scrollProgress >= i * step && scrollProgress < (i + 1) * step;
                 return (
                   <div 
                    key={i} 
                    className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-700 ${
                      isActive ? 'bg-red-600 scale-150 shadow-[0_0_20px_#dc2626]' : 'bg-white/20'
                    }`} 
                   />
                 );
               })}
            </div>
            <div className="w-32 md:w-80 h-[2px] bg-white/10 rounded-full relative overflow-hidden">
               <div 
                className="absolute inset-0 bg-red-600 origin-left transition-transform duration-150 ease-out"
                style={{ transform: `scaleX(${scrollProgress})` }}
               />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials and Brands */}
      <Testimonials />
      <BrandCarousel />
    </div>
  );
};

export default CommunityPage;