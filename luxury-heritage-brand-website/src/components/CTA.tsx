import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  return (
    <section className="relative py-32 md:py-56 bg-rich-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/14084208/pexels-photo-14084208.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=2000"
          alt="CTA Background"
          className="w-full h-full object-cover opacity-20 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-rich-black via-transparent to-rich-black" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <span className="text-gold text-[12px] uppercase tracking-[0.6em] mb-8 block">Your Heritage Awaits</span>
          <h2 className="text-5xl md:text-8xl font-heading text-ivory leading-tight mb-12">
            Acquire a <span className="italic font-light">Legacy</span>
          </h2>
          <p className="max-w-2xl mx-auto text-ivory/60 text-lg md:text-xl font-light leading-relaxed mb-16">
            Join an exclusive circle of collectors and stewards of history. Discover the piece that speaks to your soul.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <button className="px-12 py-5 bg-gold text-white text-[11px] uppercase tracking-[0.4em] hover:bg-white hover:text-rich-black transition-all duration-700">
              Request Private Viewing
            </button>
            <button className="px-12 py-5 border border-white/30 text-white text-[11px] uppercase tracking-[0.4em] hover:bg-white hover:text-rich-black transition-all duration-700">
              Join The Archive
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Sakura Petal in Dark Mode */}
      <div className="absolute bottom-10 right-10 opacity-20 text-4xl">🌸</div>
    </section>
  );
};

export default CTA;
