import React from 'react';
import { MapPin } from 'lucide-react';

const MapSection: React.FC = () => {
  return (
    <section id="map" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-zinc-900/40 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-[1400px]">
        <div className="flex flex-col items-center text-center mb-16 reveal">
          <span className="text-red-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Dove Siamo</span>
          <h2 className="text-4xl md:text-7xl font-black font-heading tracking-tighter uppercase italic leading-tight">
            Vieni a <span className="text-red-600">Trovarci</span>.
          </h2>
          <p className="text-white/40 mt-6 text-base md:text-xl font-light max-w-2xl leading-relaxed">
            Il nostro box si trova in una posizione strategica a Catania, facilmente raggiungibile per tutti gli atleti della città. Ti aspettiamo per il tuo prossimo WOD.
          </p>
        </div>

        <div className="reveal-scale delay-200">
          <div className="relative w-full rounded-[3rem] overflow-hidden border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.9)] bg-zinc-950 aspect-video md:aspect-[21/9] lg:aspect-[3/1] min-h-[400px]">
            {/* Google Map Iframe - Colored version */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7079.998890446819!2d15.0603317!3d37.508341699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1313e2cdefa96c4f%3A0x9902a3cc4a2902cd!2s100%25%20Fitness%20Cross198Catania!5e1!3m2!1sit!2sit!4v1766937172713!5m2!1sit!2sit" 
              className="absolute inset-0 w-full h-full border-0 transition-opacity duration-700"
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Visual enhancements on top of the map - Subtle gradient to blend edges */}
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-[3rem]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
          </div>
          
          {/* Location details cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm flex flex-col items-center text-center group hover:border-red-600/30 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-red-600/10 flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-7 h-7" />
              </div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-2">Indirizzo</h4>
              <p className="text-lg font-bold">Via F. Confalonieri 9c, Catania</p>
            </div>

            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm flex flex-col items-center text-center group hover:border-red-600/30 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-red-600/10 flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-7 h-7" />
              </div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-2">Zona</h4>
              <p className="text-lg font-bold">Zona Cibali - Catania</p>
            </div>

            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm flex flex-col items-center text-center group hover:border-red-600/30 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-red-600/10 flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-7 h-7" />
              </div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-2">Parcheggio</h4>
              <p className="text-lg font-bold">Aree Sosta Nelle Vicinanze</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;