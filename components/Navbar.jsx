'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['Produits', 'Catégories', 'À propos', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4 bg-cream/80 backdrop-blur-md border-b border-beige/50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="font-playfair text-2xl italic text-chocolat tracking-wide">
          Nutri<span className="text-matcha">Cute</span>
        </h1>
        
        <div className="hidden md:flex gap-8 font-inter text-sm font-light tracking-widest uppercase text-chocolat/70">
          {links.map((link) => (
            <a key={link} href="#" className="hover:text-matcha transition-colors">{link}</a>
          ))}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-chocolat text-2xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col items-center gap-4 pt-6 pb-8 bg-cream border-b border-beige"
        >
          {links.map((link) => (
            <a key={link} href="#" className="font-inter text-chocolat/70 hover:text-matcha transition">{link}</a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
