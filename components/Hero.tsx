import React from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center pt-40 pb-16 md:pt-48 lg:pt-64 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Interno palestra Cross 198" 
          className="w-full h-full object-cover grayscale-[30%]"
        />
        <div className="absolute inset-0 bg-black/75 md:bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 z-10 flex flex-col items-center justify-center w-full max-w-[1600px]">
        {/* Soft Animated Gradient Container */}
        <div className="relative w-full">
          {/* Animated Background Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] pointer-events-none z-[-1] overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.12)_0%,rgba(31,41,55,0.3)_45%,transparent_75%)] blur-[100px] animate-hero-pulse" />
          </div>

          <div className="flex flex-col items-center text-center space-y-8 md:space-y-12 py-12 md:py-16">
            <div className="reveal delay-100">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse shadow-[0_0_8px_#dc2626]" />
                Elite CrossFit Box Catania
              </div>
            </div>
            
            <h1 className="w-full flex flex-col items-center text-center text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[11rem] font-black font-heading leading-[1.1] md:leading-[1] tracking-tighter text-white">
              <div className="reveal delay-200 block w-full">
                L'<span className="text-red-600 underline-red">Allenamento</span>
              </div>
              <div className="reveal delay-300 block w-full text-white text-4xl sm:text-5xl md:text-7xl lg:text-[7rem] xl:text-[8rem]">
                è il miglior
              </div>
              <div className="reveal delay-400 block w-full">
                <span className="text-red-600 underline-red">Maestro</span><span className="text-red-600">.</span>
              </div>
            </h1>
            
            <div className="reveal delay-500 max-w-2xl px-4">
              <p className="text-sm md:text-lg lg:text-xl text-white/40 font-light leading-relaxed text-center">
                Il box dove la fatica si trasforma in eccellenza. Cross 198 è la community di atleti più forte nel cuore di Catania. Sfidiamo i tuoi limiti, ogni singolo giorno.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 reveal delay-600 w-full px-6">
              <a href="#cta" className="w-full sm:w-auto">
                <Button className="w-full px-10 md:px-14 py-5 md:py-6 text-sm md:text-base">
                  Prova Gratuita <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <a href="#features" className="w-full sm:w-auto">
                <Button variant="secondary" className="w-full backdrop-blur-xl bg-white/5 px-10 md:px-14 py-5 md:py-6 text-sm md:text-base border-white/10">
                  Guarda i Corsi
                </Button>
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-6 pt-10 md:pt-16 reveal delay-700 opacity-50 hover:opacity-100 transition-opacity duration-500">
               <div className="flex -space-x-4">
                 {[1,2,3,4].map(i => (
                   <img key={i} src={`https://i.pravatar.cc/150?u=${i + 20}`} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black object-cover bg-zinc-800" alt="atleta" />
                 ))}
                 <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black bg-zinc-900 flex items-center justify-center text-[10px] font-black">+</div>
               </div>
               <div className="flex flex-col items-start text-left border-l border-white/10 pl-6">
                  <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-white">500+ Atleti</span>
                  <span className="text-[8px] md:text-[9px] font-bold text-white/30 uppercase tracking-widest">Attivi ogni mese</span>
               </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-1" />
    </section>
  );
};

export default Hero;