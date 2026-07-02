'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiVolume2, FiVolumeX } from 'react-icons/fi';

export default function AsmrButton() {
  const [isActive, setIsActive] = useState(false);
  const audioRef = useRef(null);

  const toggleAsmr = () => {
    setIsActive(!isActive);
    
    if (!audioRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContext();
      
      const bufferSize = 2 * ctx.sampleRate;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / bufferSize * 4);
      }
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      
      const gain = ctx.createGain();
      gain.gain.value = 0.08;
      
      source.connect(gain);
      gain.connect(ctx.destination);
      source.start();
      source.loop = true;
      
      audioRef.current = { source, gain, ctx };
    } else {
      const { source, ctx } = audioRef.current;
      try { source.stop(); } catch(e) {}
      ctx.close();
      audioRef.current = null;
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 0.6, y: 0 }}
      whileHover={{ opacity: 1, scale: 1.05 }}
      onClick={toggleAsmr}
      className="fixed bottom-8 right-6 z-50 flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-2xl border border-white/30 rounded-full text-xs font-light tracking-widest text-chocolat/80 uppercase shadow-2xl hover:bg-white/30 transition-all"
    >
      {isActive ? <FiVolume2 className="text-matcha" /> : <FiVolumeX />}
      <span>{isActive ? 'Ambiance activée' : 'Activer sensoriel'}</span>
    </motion.button>
  );
}
