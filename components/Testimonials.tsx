
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  // Use exactly 2 sets of items for a seamless -50% translateX marquee loop
  const doubledTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="py-24 md:py-40 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6 relative z-10 mb-16 md:mb-32">
        <div className="flex flex-col items-center text-center space-y-4">
          <span className="text-red-600 font-black uppercase tracking-[0.4em] text-[10px]">La nostra Tribù</span>
          <h2 className="text-4xl md:text-8xl font-black font-heading tracking-tighter leading-tight uppercase italic">
            Dicono Di Noi<span className="text-red-600 not-italic">.</span>
          </h2>
        </div>
      </div>

      {/* Carousel Container with fading edges */}
      <div className="relative w-full overflow-hidden">
        {/* Fading Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-60 z-20 bg-gradient-to-r from-black via-black/90 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-60 z-20 bg-gradient-to-l from-black via-black/90 to-transparent pointer-events-none" />
        
        {/* The Marquee Wrapper - w-max is critical for percentage-based transforms */}
        <div className="flex w-max animate-marquee whitespace-nowrap gap-4 sm:gap-6 md:gap-8 lg:gap-12 py-10 md:py-24">
          {doubledTestimonials.map((t, idx) => (
            <div
              key={`${t.id}-${idx}`}
              className="inline-block w-[280px] sm:w-[320px] md:w-[400px] lg:w-[500px] shrink-0 p-8 md:p-14 rounded-[3rem] bg-white/[0.02] border border-white/5 flex flex-col justify-between hover:border-red-600/50 hover:bg-white/[0.05] transition-all duration-700 group cursor-default select-none shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-sm"
              role="article"
              aria-label={`Testimonial from ${t.name}`}
            >
              <div className="space-y-10 h-full flex flex-col justify-between whitespace-normal">
                <div className="relative">
                  <span className="absolute -top-12 -left-8 text-[12rem] text-red-600/[0.04] font-black pointer-events-none select-none">“</span>
                  <p className="text-lg md:text-2xl font-light italic leading-relaxed text-white/50 group-hover:text-white/90 transition-colors duration-500 relative z-10">
                    {t.text}
                  </p>
                </div>
                
                <div className="flex items-center gap-6 mt-auto">
                  <div className="relative">
                    <div className="absolute inset-0 bg-red-600/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <img
                      src={t.avatar}
                      className="relative w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-white/10 grayscale group-hover:grayscale-0 group-hover:border-red-600 transition-all duration-700 object-cover shadow-xl"
                      alt={t.name}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-black text-base md:text-xl text-white/80 group-hover:text-red-500 transition-colors duration-500 tracking-tighter uppercase italic">{t.name}</h4>
                    <span className="text-white/30 text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em]">{t.handle}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
