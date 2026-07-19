import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://images.pexels.com/photos/27850953/pexels-photo-27850953.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  "https://images.pexels.com/photos/14644999/pexels-photo-14644999.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
  "https://images.pexels.com/photos/14084208/pexels-photo-14084208.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  "https://images.pexels.com/photos/30688201/pexels-photo-30688201.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
  "https://images.pexels.com/photos/15023819/pexels-photo-15023819.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  "https://images.pexels.com/photos/16153606/pexels-photo-16153606.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 md:py-40 bg-white overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-gold text-[12px] uppercase tracking-[0.4em] mb-4 block">Visual Archive</span>
          <h2 className="text-4xl md:text-7xl font-heading text-rich-black">
            The <span className="italic text-gold/60">Aesthetic</span>
          </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="relative group overflow-hidden break-inside-avoid"
            >
              <img
                src={src}
                alt="Heritage Gallery"
                className="w-full h-auto object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-rich-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-12 h-12 border border-white/50 rounded-full flex items-center justify-center text-white scale-50 group-hover:scale-100 transition-transform duration-500">
                  <span className="text-xl font-light">+</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
