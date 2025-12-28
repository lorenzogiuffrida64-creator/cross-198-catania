import React from 'react';
import Button from './Button';

const FinalCTA: React.FC = () => {
  return (
    <section id="cta" className="py-24 md:py-40 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-red-600/[0.02] mix-blend-overlay" />
      <div className="container mx-auto px-6 relative z-10 max-w-[1400px]">
        <div className="max-w-6xl mx-auto p-10 md:p-24 lg:p-32 rounded-[3rem] md:rounded-[4.5rem] bg-zinc-950 border border-white/5 text-center space-y-12 relative overflow-hidden group shadow-[0_50px_100px_rgba(0,0,0,0.8)] reveal-scale">
          {/* Animated Glow in BG */}
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-red-600/10 blur-[150px] rounded-full group-hover:bg-red-600/20 transition-all duration-1000" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-zinc-900/50 blur-[150px] rounded-full transition-all duration-1000" />
          
          <div className="space-y-8 relative z-10">
            <span className="text-red-600 font-black uppercase tracking-[0.4em] text-[10px] reveal delay-100">Unisciti a noi</span>
            <h2 className="text-5xl md:text-8xl lg:text-9xl font-black font-heading tracking-tighter leading-[0.85] uppercase italic reveal delay-200">
              Pronto a <br className="hidden md:block" />
              Sfidarti?
            </h2>
          </div>
          
          <p className="text-base md:text-xl lg:text-2xl text-white/40 max-w-3xl mx-auto font-light leading-relaxed relative z-10 reveal delay-300">
            La prima lezione di prova è sempre gratuita. Vieni a conoscere il team, prova l'attrezzatura e senti l'energia di Cross 198.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 pt-6 relative z-10 reveal delay-400">
            <Button className="w-full sm:w-auto text-lg sm:text-xl px-16 py-7 shadow-2xl">
              Prenota Ora
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto text-lg sm:text-xl px-16 py-7 bg-white/5 backdrop-blur-xl border-white/10">
              Chiedi Info
            </Button>
          </div>
          
          <div className="pt-10 flex flex-col items-center gap-3 relative z-10 reveal delay-500">
            <div className="flex gap-1.5">
              {[1,2,3,4,5].map(i => (
                <span key={i} className="text-red-600 text-sm">★</span>
              ))}
            </div>
            <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.4em]">
              Nessun impegno • 100% Passione
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;