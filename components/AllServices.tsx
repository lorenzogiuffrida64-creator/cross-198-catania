import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES, IconMap } from '../constants';
import { PageType } from '../types';

interface AllServicesProps {
  onNavigate?: (page: PageType) => void;
}

const AllServices: React.FC<AllServicesProps> = ({ onNavigate }) => {
  return (
    <section id="all-services" className="bg-[#050505] py-24 md:py-40 relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-zinc-900/40 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-[1400px]">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24 reveal">
          <span className="text-red-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4">I Nostri Corsi</span>
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black font-heading tracking-tighter uppercase italic leading-tight">
            Tutti i Nostri <span className="text-red-600">Servizi</span>.
          </h2>
          <p className="text-white/40 mt-6 text-base md:text-xl font-light max-w-2xl leading-relaxed">
            Trova il Tuo Percorso. Dalla forza esplosiva del CrossFit alla precisione del Pilates, offriamo soluzioni per ogni obiettivo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id}
              className={`group p-8 md:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-red-600/30 transition-all duration-700 hover:bg-white/[0.04] backdrop-blur-sm flex flex-col h-full reveal-scale`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Icon Container */}
              <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center text-red-600 mb-8 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-lg">
                {IconMap[service.icon]}
              </div>

              {/* Titles */}
              <div className="mb-6">
                <h3 className="text-xl font-black font-heading tracking-tight uppercase italic mb-1">
                  {service.title}
                </h3>
                <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider">
                  {service.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-white/40 font-light leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>

              {/* Benefits List */}
              <ul className="space-y-3 mb-10">
                {service.benefits.map((benefit, bIdx) => (
                  <li key={bIdx} className="flex items-center gap-2 text-[11px] font-bold text-white/30 tracking-tight">
                    <span className="w-1 h-1 rounded-full bg-red-600 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* CTA Link */}
              <div className="mt-auto">
                <button 
                  onClick={() => onNavigate?.('servizi')}
                  className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-red-600 group/btn transition-all"
                >
                  Scopri di più 
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllServices;