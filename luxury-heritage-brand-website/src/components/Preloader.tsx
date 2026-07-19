import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-rich-black"
    >
      <div className="relative overflow-hidden">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-cinzel text-gold tracking-[0.2em] font-light">
            RERAT
          </h1>
          <p className="text-center text-[10px] tracking-[0.4em] text-champagne uppercase mt-2">
            Heritage You Can Hold
          </p>
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
      </div>

      <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden mt-8">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className="absolute inset-y-0 left-0 bg-gold"
        />
      </div>

      <div className="mt-4 font-body text-[10px] tracking-[0.2em] text-white/40 uppercase">
        {Math.round(progress)}%
      </div>

      <div className="absolute inset-0 pointer-events-none">
         {[...Array(12)].map((_, i) => (
           <motion.div
             key={i}
             initial={{ opacity: 0, y: -10 }}
             animate={{ 
               opacity: [0, 1, 0],
               y: [0, 50, 100],
               x: [0, (i % 2 === 0 ? 20 : -20), 0],
               rotate: [0, 45, 90]
             }}
             transition={{ 
               duration: 3, 
               repeat: Infinity, 
               delay: i * 0.2,
               ease: "linear"
             }}
             className="absolute top-0 text-sakura/20 text-xs"
             style={{ left: `${(i + 1) * 8}%` }}
           >
             🌸
           </motion.div>
         ))}
      </div>
    </motion.div>
  );
};

export default Preloader;
