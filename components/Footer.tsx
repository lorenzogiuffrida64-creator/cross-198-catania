import React from 'react';
import { Instagram, Facebook, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import { PageType } from '../types';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="footer" className="pt-24 pb-12 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 md:gap-16 mb-24">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-6 flex flex-col items-center md:items-start text-center md:text-left reveal space-y-10">
            <div 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-4 cursor-pointer group"
            >
              <div className="w-20 h-20 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform shrink-0">
                <img 
                  src="https://i.im.ge/2025/12/28/BEXvGm.ChatGPT-Image-27-dic-2025-20-31-30.png" 
                  alt="Logo Cross 198" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-3xl font-black tracking-tighter uppercase font-heading italic leading-none">Cross 198</span>
                <span className="text-red-600 text-[11px] font-black tracking-[0.3em] uppercase">Catania</span>
              </div>
            </div>
            
            <p className="text-white/40 max-w-md font-light text-lg leading-relaxed">
              L'epicentro del CrossFit catanese. Forza bruta, tecnica raffinata e una community che non ti lascia mai indietro. 
            </p>
            
            <div className="flex gap-5">
              <a href="https://www.instagram.com/100x100fitness_catania?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-red-600 hover:text-white hover:scale-110 transition-all border border-white/5 group">
                <Instagram className="w-6 h-6 transition-transform group-hover:rotate-12" />
              </a>
              <a href="https://www.facebook.com/p/Cross198Catania-100062953823636/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-red-600 hover:text-white hover:scale-110 transition-all border border-white/5 group">
                <Facebook className="w-6 h-6 transition-transform group-hover:-rotate-12" />
              </a>
            </div>
          </div>
          
          {/* Explore Section */}
          <div className="col-span-1 md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left reveal delay-100 space-y-10">
            <h4 className="font-black uppercase tracking-[0.4em] text-[10px] text-red-600">Esplora</h4>
            <ul className="space-y-8 md:space-y-6 text-xs font-black uppercase tracking-[0.3em] text-white/50 w-full">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors flex items-center justify-center md:justify-start gap-3 group w-full">
                  <span className="font-black text-left">IL BOX</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-red-600 hidden md:block" />
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('servizi')} className="hover:text-white transition-colors flex items-center justify-center md:justify-start gap-3 group w-full">
                  <span className="font-black text-left">SERVIZI</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-red-600 hidden md:block" />
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('community')} className="hover:text-white transition-colors flex items-center justify-center md:justify-start gap-3 group w-full">
                  <span className="font-black text-left">TRIBÙ</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-red-600 hidden md:block" />
                </button>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors flex items-center justify-center md:justify-start gap-3 group w-full">
                  <span className="font-black">CONTATTI</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-red-600 hidden md:block" />
                </a>
              </li>
            </ul>
          </div>

          {/* Info Section */}
          <div className="col-span-1 md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left reveal delay-200 space-y-10">
            <h4 className="font-black uppercase tracking-[0.4em] text-[10px] text-red-600">Info & Contatti</h4>
            <div className="space-y-8 w-full">
              <div className="space-y-6 md:space-y-4 text-xs font-black tracking-[0.1em] text-white/60">
                 <p className="flex items-center justify-center md:justify-start gap-3 uppercase">
                   <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                   Via Federico Confalonieri, 9c, 95123 Catania CT
                 </p>
                 <p className="flex items-center justify-center md:justify-start gap-3 font-black tracking-widest text-white">
                   <Phone className="w-4 h-4 text-red-600 shrink-0" />
                   +39 3921905871
                 </p>
                 <p className="flex items-center justify-center md:justify-start gap-3 font-black tracking-widest text-white/80 lowercase">
                   <Mail className="w-4 h-4 text-red-600 shrink-0" />
                   pavonelucy@gmail.com
                 </p>
              </div>
              <div className="p-8 md:p-6 bg-white/[0.03] border border-white/5 rounded-3xl space-y-4 md:space-y-3 max-w-sm mx-auto md:mx-0">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest pb-1">
                  <span className="text-white/30">LUN - SAB</span>
                  <span className="text-white">05:30 - 23:30</span>
                </div>
                <div className="text-center pt-2 border-t border-white/5">
                  <span className="text-[9px] text-white/20 uppercase tracking-[0.2em]">Sempre aperti per la tua forza</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-white/20 reveal delay-400 text-center">
          <p>© 2024 CROSS 198 CATANIA. BUILT FOR THE STRONG.</p>
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <a href="#" className="hover:text-red-600 transition-colors font-black">PRIVACY POLICY</a>
            <a href="#" className="hover:text-red-600 transition-colors font-black">TERMS OF USE</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;