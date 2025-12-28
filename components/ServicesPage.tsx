import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES, IconMap } from '../constants';
import BrandCarousel from './BrandCarousel';
import Testimonials from './Testimonials';
import ContactForm from './ContactForm';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Header */}
      <section className="pt-32 md:pt-48 pb-16 md:pb-24 container mx-auto px-6 text-center reveal">
        <span className="text-red-600 font-black uppercase tracking-[0.5em] text-[10px] md:text-[11px] mb-4 inline-block">Eccellenza in Ogni Disciplina</span>
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] font-black font-heading tracking-tighter uppercase italic leading-none mb-8">
          I Nostri <span className="text-red-600">Servizi</span>.
        </h1>
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-2xl text-white/50 font-light leading-relaxed">
          Dalle fondamenta del CrossFit alla precisione del Pilates. Offriamo una programmazione d'élite per ogni tipo di obiettivo fisico.
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

              {/* Text Info */}
              <div className="px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                  <div>
                    <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">{service.subtitle}</span>
                    <h3 className="text-3xl md:text-5xl font-black font-heading uppercase italic">{service.title}</h3>
                  </div>
                  <div className="flex gap-4">
                    {service.benefits.slice(0, 2).map((benefit, bIdx) => (
                      <div key={bIdx} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-white/40">
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
                
                <p className="text-white/40 text-base md:text-xl font-light leading-relaxed mb-8 max-w-2xl">
                  {service.description}
                </p>

                <div className="pt-6 border-t border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {service.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                      <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Sections Required */}
      <BrandCarousel />
      <Testimonials />
      <ContactForm />

      {/* Floating Action Hint */}
      <div className="py-24 text-center reveal">
         <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em] mb-8">Non hai ancora deciso?</p>
         <button className="text-white hover:text-red-600 transition-colors text-3xl md:text-5xl font-black font-heading italic uppercase flex items-center justify-center gap-4 mx-auto group">
            Vieni a Provare <ArrowRight className="w-10 h-10 group-hover:translate-x-4 transition-transform" />
         </button>
      </div>
    </div>
  );
};

export default ServicesPage;