'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiClock, FiHeart, FiLeaf, FiZap } from 'react-icons/fi';

export default function Home() {
  const categories = [
    { name: 'Mug Cakes', emoji: '🍰', color: 'bg-ube/10' },
    { name: 'Lattés', emoji: '🥛', color: 'bg-beige' },
    { name: 'Matcha', emoji: '🍵', color: 'bg-matcha/10' },
    { name: 'Poudres', emoji: '✨', color: 'bg-cream' },
    { name: 'Tartinades', emoji: '🍫', color: 'bg-chocolat/10' },
    { name: 'Boules énergétiques', emoji: '⚡', color: 'bg-ube/5' },
  ];

  const benefits = [
    { icon: <FiZap />, title: 'Simplicité', desc: 'Prêt en 2 minutes' },
    { icon: <FiHeart />, title: 'Qualité', desc: 'Ingrédients nobles' },
    { icon: <FiLeaf />, title: 'Naturel', desc: 'Sans additifs' },
    { icon: <FiClock />, title: 'Gourmandise', desc: 'Plaisir instantané' },
  ];

  return (
    <main>
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-beige/50 to-matcha/10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-ube/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="steam-container">
          <div className="steam-particle"></div>
          <div className="steam-particle"></div>
          <div className="steam-particle"></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-cream/80 via-transparent to-transparent" />

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute bottom-20 left-0 right-0 px-6 text-center z-20"
        >
          <h1 className="font-playfair text-5xl md:text-7xl text-chocolat leading-tight italic drop-shadow-sm">
            Une nouvelle façon de <br/>savourer votre pause
          </h1>
          <p className="mt-4 font-inter text-base md:text-lg text-chocolat/70 max-w-lg mx-auto font-light">
            Des préparations simples, rapides et gourmandes conçues avec des ingrédients soigneusement sélectionnés.
          </p>
          <Link href="#produits">
            <button className="mt-8 group px-10 py-4 bg-matcha text-cream rounded-full text-sm tracking-widest uppercase hover:bg-chocolat transition-all shadow-2xl shadow-matcha/30 hover:shadow-chocolat/20 inline-flex items-center gap-3">
              Découvrir nos produits
              <FiArrowRight className="group-hover:translate-x-1 transition" />
            </button>
          </Link>
        </motion.div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl italic text-chocolat">Pourquoi NutriCute ?</h2>
          <div className="w-20 h-1 bg-matcha mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {benefits.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-center group"
            >
              <div className="text-4xl text-matcha bg-beige/50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-matcha group-hover:text-cream transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="font-playfair text-xl text-chocolat">{item.title}</h3>
              <p className="text-sm text-chocolat/60 mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="produits" className="py-16 px-6 bg-beige/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="font-playfair text-4xl md:text-5xl italic text-chocolat mb-12 text-center"
          >
            Nos catégories
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`${cat.color} rounded-3xl p-8 text-center border border-white/30 backdrop-blur-sm cursor-pointer shadow-sm hover:shadow-xl transition-shadow`}
              >
                <span className="text-5xl block mb-3">{cat.emoji}</span>
                <h3 className="font-playfair text-xl text-chocolat">{cat.name}</h3>
                <p className="text-xs text-chocolat/40 mt-1 font-inter tracking-wider uppercase">Bientôt disponible</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 text-center border-t border-beige">
        <p className="font-playfair text-2xl italic text-chocolat">
          Nutri<span className="text-matcha">Cute</span>
        </p>
        <p className="text-xs text-chocolat/40 mt-2 font-inter tracking-widest uppercase">
          L'alimentation gourmande et fonctionnelle.
        </p>
        <p className="text-[10px] text-chocolat/20 mt-6">© 2026 - Designed with 💚 pour durer.</p>
      </footer>
    </main>
  );
                }
