import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-ivory">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/20 z-10" />
        <img
          src="https://images.pexels.com/photos/27850953/pexels-photo-27850953.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2400"
          alt="Luxury Heritage"
          className="h-full w-full object-cover scale-110"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6"
        >
          <span className="text-[10px] md:text-[12px] uppercase tracking-[0.5em] text-gold font-medium bg-white/10 backdrop-blur-sm px-4 py-1 border border-white/20 rounded-full">
            Curated Heritage Collection
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          style={{ y: y2 }}
          className="text-5xl md:text-8xl lg:text-9xl font-heading text-white leading-tight mb-8 max-w-5xl"
        >
          Timeless Heritage,<br />
          <span className="italic font-light">Crafted For Modern Living</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-ivory/80 text-sm md:text-lg max-w-xl font-light tracking-wide mb-12 leading-relaxed"
        >
          Preserving the soul of traditional craftsmanship through curated pieces that tell a story of centuries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col md:flex-row gap-6"
        >
          <button className="px-10 py-4 bg-gold text-white text-[11px] uppercase tracking-[0.3em] hover:bg-champagne transition-all duration-500 rounded-sm">
            Explore Collection
          </button>
          <button className="px-10 py-4 border border-white/30 text-white text-[11px] uppercase tracking-[0.3em] hover:bg-white hover:text-rich-black transition-all duration-500 rounded-sm backdrop-blur-sm">
            Our Story
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/60">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>

      {/* Mouse Spotlight Effect - Subtle */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(200,169,106,0.1)_0%,transparent_50%)]" id="hero-spotlight" />
    </section>
  );
};

export default Hero;
