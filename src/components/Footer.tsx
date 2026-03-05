import React from 'react';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 bg-dark border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-dark rounded-full border border-white/10 flex flex-col items-center justify-center p-1 shadow-lg">
              <span className="text-[4px] uppercase tracking-[0.1em] text-white/40 font-bold">2018</span>
              <span className="text-[8px] font-serif font-black text-white leading-none">TRUMAN'S</span>
              <span className="text-[3px] uppercase text-white/60 font-bold">Beer & Burger</span>
            </div>
            <div>
              <h3 className="font-serif font-black text-xl tracking-tight uppercase">Truman's</h3>
              <p className="text-xs text-white/40 uppercase tracking-widest">Beer & Burger</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/trumansburger/" className="p-3 rounded-full bg-white/5 hover:bg-primary hover:text-dark transition-all">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/soutrumansburger" className="p-3 rounded-full bg-white/5 hover:bg-primary hover:text-dark transition-all">
              <Facebook size={20} />
            </a>
            <a href="https://wa.me/5516981525339" className="p-3 rounded-full bg-white/5 hover:bg-[#25D366] hover:text-white transition-all">
              <MessageCircle size={20} />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-white/40">© 2018 Truman's Beer & Burger.</p>
            <p className="text-xs text-white/20 mt-1 italic">Feito com sabor em Ituverava.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
