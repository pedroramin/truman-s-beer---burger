import React from 'react';
import { motion } from 'motion/react';
import { Camera, Beer, Utensils, Users } from 'lucide-react';

const MOMENTS = [
  {
    id: 1,
    title: "Smash Burgers",
    description: "Fininhos, suculentos e com aquela crosta perfeita na chapa.",
    image: "https://i.imgur.com/5Vft4ae.png",
    icon: <Camera size={24} />
  },
  {
    id: 2,
    title: "Combos Especiais",
    description: "Combinações perfeitas para matar a fome e compartilhar momentos.",
    image: "https://i.imgur.com/QfrRphL.png",
    icon: <Beer size={24} />
  },
  {
    id: 3,
    title: "Burgões Artesanais",
    description: "Altos, robustos e preparados para quem leva fome a sério.",
    image: "https://i.imgur.com/UtwtH2W.png",
    icon: <Users size={24} />
  },
  {
    id: 4,
    title: "Burguer de Frango",
    description: "Crocante por fora, suculento por dentro e cheio de personalidade. ",
    image: "https://i.imgur.com/O5OuPtN.png",
    icon: <Utensils size={24} />
  }
];

export const Experience = () => {
  return (
    <section className="py-32 bg-surface relative overflow-hidden" id="experience">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 uppercase tracking-tighter font-serif">
              A <span className="text-secondary">Experiência</span> <br />
              Truman's
            </h2>
            <p className="text-white/60 text-lg">
              Não é apenas sobre comer, é sobre o momento. Explore o que faz da nossa casa o lugar mais desejado da cidade.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-px bg-primary/30 mb-4" />
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Ituverava • SP</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {MOMENTS.map((moment, index) => (
            <motion.div
              key={moment.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[350px] md:h-[500px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <img
                src={moment.image}
                alt={moment.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 md:p-3 rounded-2xl bg-primary text-dark">
                    {moment.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight">{moment.title}</h3>
                </div>
                <p className="text-sm md:text-base text-white/70 max-w-md transform md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 opacity-100 translate-y-0">
                  {moment.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
