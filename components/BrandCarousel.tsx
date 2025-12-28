
import React from 'react';
import { BRANDS } from '../constants';

const BrandCarousel: React.FC = () => {
  // Use exactly 2 sets for a perfect 0 to -50% loop
  const doubledBrands = [...BRANDS, ...BRANDS];

  return (
    <section className="py-12 md:py-20 border-t border-white/5 bg-black overflow-hidden relative">
      <div className="container mx-auto px-6 mb-8 md:mb-10 text-center">
        <h3 className="text-[10px] md:text-sm font-black uppercase tracking-[0.3em] text-white/30">
          Partner Tecnici & Attrezzatura
        </h3>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Fading side masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 z-10 bg-gradient-to-r from-black to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 z-10 bg-gradient-to-l from-black to-transparent" />

        {/* Marquee - w-max ensures the transform percentage uses the content width */}
        <div className="flex w-max animate-marquee-slow whitespace-nowrap gap-10 md:gap-20 items-center py-4">
          {doubledBrands.map((brand, idx) => (
            <div 
              key={`${brand.name}-${idx}`}
              className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white/20 hover:text-red-600 transition-all duration-500 cursor-default select-none ${brand.style}`}
            >
              {brand.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;
