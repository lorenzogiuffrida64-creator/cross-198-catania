import React, { useEffect, useRef, useState } from 'react';
import { FEATURES, IconMap } from '../constants';

const Features: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const totalScrollable = rect.height - windowHeight;
      const currentScroll = -rect.top;
      
      const rawProgress = currentScroll / totalScrollable;
      const clampedProgress = Math.min(Math.max(rawProgress, 0), 1);
      
      setProgress(clampedProgress);
      
      if (clampedProgress < 0.33) setActiveStep(0);
      else if (clampedProgress < 0.66) setActiveStep(1);
      else setActiveStep(2);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const storyData = [
    {
      title: "POTENZA",
      subtitle: "Weightlifting & Power",
      description: "Sviluppa la forza bruta con la pesistica olimpica e attrezzatura Rogue d'élite.",
      img: "https://images.unsplash.com/photo-1534367507873-d2d7e24959cf?q=80&w=2000&auto=format&fit=crop",
      accent: "text-red-600"
    },
    {
      title: "INTENSITÀ",
      subtitle: "CrossFit & WOD",
      description: "Supera i tuoi limiti con sessioni ad alta intensità progettate per il massimo rendimento.",
      img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2000&auto=format&fit=crop",
      accent: "text-zinc-100"
    },
    {
      title: "EQUILIBRIO",
      subtitle: "Yoga & Mobility",
      description: "Recupera e migliora la tua flessibilità articolare per una performance senza infortuni.",
      img: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2000&auto=format&fit=crop",
      accent: "text-red-500"
    }
  ];

  return (
    <section id="features" className="relative bg-[#050505] overflow-x-clip">
      {/* Introduction Grid */}
      <div className="py-24 md:py-40 lg:py-52 container mx-auto px-6 relative z-10 max-w-[1400px]">
        <div className="flex flex-col items-center text-center mb-16 md:mb-32 space-y-4 reveal">
          <span className="text-red-600 font-black uppercase tracking-[0.4em] text-[10px]">Servizi</span>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black font-heading tracking-tighter max-w-4xl leading-tight text-center">
            Eccellenza Senza <br className="hidden md:block" /> Compromessi<span className="text-red-600">.</span>
          </h2>
          <p className="text-white/40 max-w-xl text-base md:text-xl font-light leading-relaxed text-center">
            Ogni dettaglio del nostro box è studiato per offrirti la migliore esperienza di allenamento possibile a Catania.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {FEATURES.map((feature, idx) => (
            <div 
              key={feature.id}
              className={`group p-10 lg:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-red-600/30 transition-all duration-700 hover:bg-white/[0.04] backdrop-blur-sm reveal-scale delay-${(idx + 1) * 100} text-center flex flex-col items-center`}
            >
              <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-500 mb-8 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-700">
                {IconMap[feature.icon]}
              </div>
              <h3 className="text-2xl md:text-3xl font-black font-heading mb-4 tracking-tight uppercase italic">{feature.title}</h3>
              <p className="text-white/40 leading-relaxed font-light text-sm md:text-base text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Pinned Scroll Storytelling Section */}
      <div ref={containerRef} className="relative h-[300vh] md:h-[400vh]">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          
          {/* Main Visual Frames */}
          <div className="absolute inset-0 w-full h-full">
            {storyData.map((step, idx) => (
              <div 
                key={idx}
                className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] transform ${
                  activeStep === idx 
                    ? 'opacity-100 scale-100 translate-y-0' 
                    : 'opacity-0 scale-105 translate-y-10 pointer-events-none'
                }`}
              >
                <img
                  src={step.img}
                  className="w-full h-full object-cover"
                  alt={step.title}
                  loading="lazy"
                />
                
                {/* Immersive Overlays */}
                <div className="absolute inset-0 bg-black/70 md:bg-black/50" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
              </div>
            ))}
          </div>

          {/* Fixed Text Content Layer - Now Centered */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 pointer-events-none text-center h-full flex items-center justify-center max-w-[1400px]">
            <div className="w-full relative min-h-[50vh] flex flex-col items-center">
              {storyData.map((step, idx) => (
                <div 
                  key={idx}
                  className={`transition-all duration-1000 absolute inset-0 flex flex-col justify-center items-center ${
                    activeStep === idx 
                      ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                      : 'opacity-0 translate-y-20 scale-95 blur-md'
                  }`}
                >
                  <span className="text-red-600 font-black tracking-[0.5em] uppercase text-[10px] md:text-xs mb-4 md:mb-8 text-center">
                    {step.subtitle}
                  </span>
                  <h3 className={`text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-black font-heading leading-none tracking-tighter mb-6 md:mb-10 px-4 ${step.accent} drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] uppercase italic text-center`}>
                    {step.title}<span className="text-red-600 not-italic">.</span>
                  </h3>
                  <p className="text-base sm:text-xl md:text-2xl xl:text-3xl text-white/60 font-light max-w-2xl leading-relaxed drop-shadow-lg text-center mx-auto">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Interaction Indicators - Centered Horizontal Bars */}
          <div className="absolute bottom-16 left-0 right-0 flex justify-center items-center gap-5 z-20 reveal">
            {storyData.map((_, i) => (
              <div key={i} className="relative w-16 h-1.5 md:h-1">
                 <div className="absolute inset-0 bg-white/10 rounded-full" />
                 <div 
                    className="absolute inset-0 bg-red-600 rounded-full transition-all duration-500 ease-out origin-left"
                    style={{ 
                        transform: `scaleX(${activeStep === i ? 1 : 0})`,
                        boxShadow: activeStep === i ? '0 0 15px #dc2626' : 'none'
                    }}
                 />
              </div>
            ))}
          </div>

          {/* Removed Vertical Bar for a cleaner central layout */}
          
          {/* Decorative Corner Viewfinders */}
          <div className="absolute top-16 left-16 w-32 h-32 border-t border-l border-white/10 pointer-events-none hidden xl:block" />
          <div className="absolute bottom-16 right-16 w-32 h-32 border-b border-r border-white/10 pointer-events-none hidden xl:block" />
        </div>
      </div>
    </section>
  );
};

export default Features;