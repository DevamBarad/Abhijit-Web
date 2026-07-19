import React from 'react';
import { motion } from 'framer-motion';

const SakuraPetals: React.FC = () => {
  const petals = [...Array(15)];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + 'vw', 
            y: -20, 
            opacity: 0,
            rotate: 0 
          }}
          animate={{ 
            y: '110vh',
            opacity: [0, 1, 1, 0],
            x: [null, (Math.random() - 0.5) * 200 + 'px'],
            rotate: 360
          }}
          transition={{ 
            duration: 10 + Math.random() * 15,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear"
          }}
          className="absolute text-sakura/30 text-lg md:text-xl select-none"
        >
          🌸
        </motion.div>
      ))}
    </div>
  );
};

export default SakuraPetals;
