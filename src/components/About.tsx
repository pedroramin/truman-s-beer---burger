import React from 'react';
import { motion } from 'motion/react';
import { Star, MapPin, Clock } from 'lucide-react';

export const About = () => {
  return (
    <section className="py-24 bg-dark relative overflow-hidden" id="about">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary mb-6">
              <Star size={16} fill="currentColor" />
              <span className="text-sm font-bold uppercase tracking-wider">Sobre Nós</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight uppercase tracking-tighter font-serif">
              A essência da <br />
              <span className="text-primary">Truman's</span>
            </h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              A Truman's Beer & Burger nasceu do desejo de criar um espaço onde a qualidade artesanal encontra a cultura urbana. Localizada no coração de Ituverava, somos mais que uma hamburgueria; somos um ponto de encontro para quem valoriza o autêntico.
            </p>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              Cada hambúrguer é uma obra de arte, preparado com ingredientes selecionados e receitas exclusivas. Nosso ambiente foi projetado para ser acolhedor e vibrante, perfeito para relaxar com uma cerveja gelada e boa companhia.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/5">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipMr3AnLSQ_9sqxN4BOnYr6s-GRJgZXdSMp7UY1t=s2000"
                alt="Truman's Burger"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-0" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl -z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
