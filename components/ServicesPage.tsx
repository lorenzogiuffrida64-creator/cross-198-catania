import React from 'react';
import { SERVICES, IconMap } from '../constants';
import Testimonials from './Testimonials';
import ContactForm from './ContactForm';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Header - Simplified */}
      <section className="pt-32 md:pt-48 pb-16 md:pb-24 container mx-auto px-6 text-center reveal">
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] font-black font-heading tracking-tighter uppercase italic leading-none mb-8">
          I Nostri <span className="text-red-600">Servizi</span>
        </h1>
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/40 font-light leading-relaxed">
          Scegli il percorso perfetto per i tuoi obiettivi
        </p>
      </section>

      {/* Full Content Grid with Images */}
      <section className="pb-24 md:pb-40 container mx-auto px-6 max-w-[1500px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id}
              className="reveal flex flex-col group"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-8 border border-white/5">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Floating Icon On Image */}
                <div className="absolute bottom-6 left-6 w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-2xl transition-transform group-hover:rotate-12">
                  {IconMap[service.icon]}
                </div>
              </div>

              {/* Text Info - Cleaner Layout */}
              <div className="px-4 space-y-6">
                {/* Title */}
                <div>
                  <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.3em] mb-3 block">{service.subtitle}</span>
                  <h3 className="text-3xl md:text-5xl font-black font-heading uppercase italic">{service.title}</h3>
                </div>

                {/* Description */}
                <p className="text-white/50 text-base md:text-lg font-light leading-relaxed max-w-xl">
                  {service.description}
                </p>

                {/* Benefits - Clean List */}
                <div className="flex flex-wrap gap-3 pt-4">
                  {service.benefits.map((benefit, bIdx) => (
                    <span key={bIdx} className="px-4 py-2 bg-white/5 rounded-full text-[10px] font-bold text-white/40 uppercase tracking-wider">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Sections */}
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default ServicesPage;