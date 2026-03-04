import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ArrowRight } from 'lucide-react';

export const CallToAction = () => {
  return (
    <section className="py-20 md:py-32 bg-dark relative overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-secondary/10 rounded-full blur-[80px] md:blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-[80px] md:blur-[120px] translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="glass p-8 md:p-24 rounded-[2rem] md:rounded-[3rem] text-center border-white/5">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-7xl font-extrabold mb-6 md:mb-8 uppercase tracking-tighter leading-tight font-serif">
              Ficou com <span className="text-primary italic">vontade?</span>
            </h2>
            <p className="text-lg md:text-2xl text-white/60 mb-8 md:mb-12 max-w-2xl mx-auto font-light">
              Chama no WhatsApp agora mesmo e garanta o seu Truman's. Estamos prontos para te atender.
            </p>
            
            <div className="flex flex-col items-center gap-6">
              <a 
                href="https://wa.me/5516981525339" 
                target="_blank"
                className="btn-primary px-10 md:px-12 py-4 md:py-5 text-lg md:text-2xl w-full sm:w-auto"
              >
                <MessageCircle size={24} md:size={28} fill="currentColor" />
                Chamar no WhatsApp
              </a>
              
              <div className="flex items-center gap-2 text-white/40 text-sm uppercase tracking-widest font-bold">
                <span>Atendimento rápido</span>
                <ArrowRight size={14} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
