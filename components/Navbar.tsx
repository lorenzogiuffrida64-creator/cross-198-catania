import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, ArrowRight, MapPin, Phone } from 'lucide-react';
import { PageType, NavLink } from '../types';

interface NavbarProps {
  onNavigate: (page: PageType) => void;
  currentPage: PageType;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Handle Escape key to close menu
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const navLinks: NavLink[] = [
    { name: 'Home', action: () => onNavigate('home'), type: 'home' },
    { name: 'Servizi', action: () => onNavigate('servizi'), type: 'servizi' },
    { name: 'Community', action: () => onNavigate('community'), type: 'community' },
    { name: 'Contatti', href: '#contact', type: 'section' },
  ];

  const handleLinkClick = (link: NavLink) => {
    setIsOpen(false);
    if (link.action) {
      link.action();
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-in-out ${
          isScrolled || isOpen 
            ? 'bg-black/95 backdrop-blur-3xl py-3 border-b border-white/5' 
            : 'bg-transparent py-6 md:py-10'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center max-w-[1600px]">
          
          {/* LEFT: Logo & Brand */}
          <div className="flex-1 flex items-center">
            <div 
              onClick={() => onNavigate('home')} 
              className="flex items-center gap-3 md:gap-4 transition-transform duration-500 cursor-pointer group"
            >
              <div className={`relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-red-600/30 bg-zinc-900 ${isScrolled ? 'w-10 h-10 md:w-12 md:h-12' : 'w-14 h-14 md:w-18 md:h-18'}`}>
                <img 
                  src="https://i.im.ge/2025/12/28/BEXvGm.ChatGPT-Image-27-dic-2025-20-31-30.png" 
                  alt="Logo Cross 198" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className={`font-black tracking-tighter uppercase font-heading leading-none transition-all duration-500 ${isScrolled ? 'text-sm md:text-lg' : 'text-lg md:text-xl'}`}>
                  Cross 198
                </span>
                <span className={`text-red-600 font-black tracking-[0.3em] uppercase transition-all duration-500 ${isScrolled ? 'text-[6px]' : 'text-[8px]'}`}>
                  Catania
                </span>
              </div>
            </div>
          </div>

          {/* CENTER: Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center justify-center gap-6 lg:gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-white/50">
            {navLinks.map(link => (
              link.href ? (
                <a key={link.name} href={link.href} className="hover:text-white transition-colors py-2 relative group whitespace-nowrap">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full" />
                </a>
              ) : (
                <button 
                  key={link.name} 
                  onClick={() => handleLinkClick(link)}
                  className={`hover:text-white transition-colors py-2 relative group whitespace-nowrap ${currentPage === link.type ? 'text-white' : ''}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-red-600 transition-all duration-300 ${currentPage === link.type ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </button>
              )
            ))}
          </div>

          {/* RIGHT: Mobile Menu Trigger */}
          <div className="flex-1 flex items-center justify-end gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 md:hidden active:scale-90 transition-all z-[110] relative ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'}`}
              aria-label={isOpen ? "Close navigation" : "Toggle menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[90] bg-black transition-all duration-700 ease-[cubic-bezier(0.8,0,0.2,1)] ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        {/* Subtle Background Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-zinc-900/50 blur-[100px] rounded-full" />
        </div>

        <div className="h-full flex flex-col px-8 pt-32 pb-12 relative z-10">
          <div className="flex-1 flex flex-col justify-center space-y-4">
            {navLinks.map((link, idx) => (
              <div key={link.name} className="overflow-hidden py-1">
                {link.href ? (
                  <a 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`group flex items-center justify-between text-5xl font-black font-heading tracking-tighter transition-all duration-700 hover:text-red-600 text-left ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                    style={{ transitionDelay: `${100 + idx * 80}ms` }}
                  >
                    <span>{link.name}<span className="text-red-600">.</span></span>
                    <ArrowRight className="w-8 h-8 opacity-0 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-red-600" />
                  </a>
                ) : (
                  <button 
                    onClick={() => handleLinkClick(link)}
                    className={`group flex items-center justify-between w-full text-5xl font-black font-heading tracking-tighter transition-all duration-700 hover:text-red-600 text-left ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                    style={{ transitionDelay: `${100 + idx * 80}ms` }}
                  >
                    <span>{link.name}<span className="text-red-600">.</span></span>
                    <ArrowRight className="w-8 h-8 opacity-0 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-red-600" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Footer Info */}
          <div className={`mt-auto space-y-10 transition-all duration-1000 delay-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-col gap-4 text-xs font-black uppercase tracking-[0.2em] text-white/40">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-red-600" />
                  <span>Via Federico Confalonieri, 9c, Catania</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-red-600" />
                  <span>+39 3921905871</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center border-t border-white/10 pt-8">
              <div className="flex gap-6">
                <a href="https://www.instagram.com/100x100fitness_catania?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Instagram className="w-5 h-5 text-white/60" />
                </a>
                <a href="https://www.facebook.com/p/Cross198Catania-100062953823636/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Facebook className="w-5 h-5 text-white/60" />
                </a>
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
                Cross 198 Catania
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;