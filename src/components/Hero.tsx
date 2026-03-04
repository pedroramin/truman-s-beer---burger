import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Menu as MenuIcon, ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center" id="hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2000&auto=format&fit=crop"
          alt="Juicy Truman's Burger"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pb-12 md:pb-20">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-8 group">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-all" />
            <div className="relative w-full h-full bg-dark rounded-full border-2 border-white/10 flex flex-col items-center justify-center p-3 md:p-4 shadow-2xl overflow-hidden">
              <span className="text-[6px] md:text-[8px] uppercase tracking-[0.2em] text-white/40 mb-1 font-bold">Since 2018</span>
              <span className="text-lg md:text-xl font-serif font-black tracking-tighter text-white leading-none">TRUMAN'S</span>
              <span className="text-[5px] md:text-[7px] uppercase tracking-[0.1em] text-white/60 mt-1 font-bold border-t border-white/10 pt-1">Beer & Burger</span>
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-9xl font-extrabold mb-6 tracking-tighter leading-[0.9] uppercase font-serif">
            Mais que um <br />
            <span className="text-primary italic">hambúrguer.</span> <br />
            Uma experiência.
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto font-light">
            O ponto de encontro autêntico no coração de Ituverava. <br className="hidden md:block" />
            Sabor artesanal, ambiente urbano e momentos inesquecíveis.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="https://wa.me/5516981525339" target="_blank" className="btn-primary w-full sm:w-auto px-10 py-4 text-lg">
              <ShoppingCart size={22} />
              Peça pelo WhatsApp
            </a>
            <a href="#experience" className="btn-outline w-full sm:w-auto px-10 py-4 text-lg">
              Conheça a Truman's
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};
