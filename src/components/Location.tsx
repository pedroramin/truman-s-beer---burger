import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Phone, Clock } from 'lucide-react';

export const Location = () => {
  return (
    <section className="py-16 md:py-24 bg-surface" id="location">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 md:mb-8">Onde <span className="text-primary italic">estamos</span></h2>
            
            <div className="space-y-6 md:space-y-8 mb-8 md:mb-10">
              <div className="flex items-start gap-4">
                <div className="p-3 md:p-4 rounded-2xl bg-primary text-dark shrink-0">
                  <MapPin size={20} md:size={24} />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold mb-1">Endereço</h4>
                  <p className="text-sm md:text-base text-white/60">R. Benjamin Constant, 439 – Centro, Ituverava – SP</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 md:p-4 rounded-2xl bg-secondary text-white shrink-0">
                  <Phone size={20} md:size={24} />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold mb-1">Contato</h4>
                  <p className="text-sm md:text-base text-white/60">(16) 98152-5339</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 md:p-4 rounded-2xl bg-white/5 text-white shrink-0">
                  <Clock size={20} md:size={24} />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold mb-1">Horário de Funcionamento</h4>
                  <p className="text-sm md:text-base text-white/60"> De Terça a Domingo das 17:30 a 00:00</p>
                </div>
              </div>
            </div>

            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=R.+Benjamin+Constant,+439+-+Centro,+Ituverava+-+SP" 
              target="_blank"
              className="btn-primary w-full sm:w-auto inline-flex"
            >
              <Navigation size={20} />
              Como chegar
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[300px] sm:h-[450px] rounded-3xl overflow-hidden border-4 border-white/5 shadow-2xl relative"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.346850123456!2d-47.7885!3d-20.3415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDIwJzI5LjQiUyA0N8KwNDcnMTguNiJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Truman's Location"
            ></iframe>
            <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-2xl text-center pointer-events-none">
              <p className="text-sm font-bold">Truman's Beer & Burguer</p>
              <p className="text-xs text-white/50">Rua Benjamin Constant, 439</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
