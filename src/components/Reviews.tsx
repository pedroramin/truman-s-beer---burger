import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: "João Silva",
    text: "Ambiente aconchegante e comida maravilhosa!! O melhor burguer da região.",
    rating: 5
  },
  {
    id: 2,
    name: "Maria Oliveira",
    text: "Atendimento nota 10 e a cerveja está sempre trincando. Recomendo muito!",
    rating: 5
  },
  {
    id: 3,
    name: "Pedro Santos",
    text: "Hambúrguer artesanal de verdade. Ingredientes frescos e sabor inigualável.",
    rating: 5
  }
];

export const Reviews = () => {
  return (
    <section className="py-16 md:py-24 bg-dark overflow-hidden" id="reviews">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 md:mb-16 gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">O que dizem <br /> <span className="text-primary italic">nossos clientes</span></h2>
          </div>
          <div className="glass p-6 md:p-8 rounded-3xl flex items-center gap-4 md:gap-6 w-full md:w-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-primary mb-1">4.9</div>
              <div className="flex text-primary">
                <Star size={14} md:size={16} fill="currentColor" />
                <Star size={14} md:size={16} fill="currentColor" />
                <Star size={14} md:size={16} fill="currentColor" />
                <Star size={14} md:size={16} fill="currentColor" />
                <Star size={14} md:size={16} className="opacity-50" />
              </div>
            </div>
            <div className="h-10 md:h-12 w-px bg-white/10" />
            <div>
              <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-white/50 mb-1">Ifood Reviews</div>
              <div className="text-[10px] md:text-xs text-white/30">100+ avaliações reais</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-8 text-white/5" size={48} />
              <div className="flex text-primary mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg text-white/80 mb-6 italic">"{review.text}"</p>
              <div className="font-bold text-sm uppercase tracking-widest text-primary">{review.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
