import React from 'react';
import { motion } from 'framer-motion';

const handmadeItems = [
  {
    title: "Silk Embroidered Screen",
    category: "Textiles",
    image: "https://images.pexels.com/photos/5642023/pexels-photo-5642023.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
  },
  {
    title: "Hand-Carved Cedar Chest",
    category: "Furniture",
    image: "https://images.pexels.com/photos/17061898/pexels-photo-17061898.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
  },
  {
    title: "Kintsugi Ceramic Set",
    category: "Ceramics",
    image: "https://images.pexels.com/photos/6685423/pexels-photo-6685423.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
  },
  {
    title: "Bronze Temple Bells",
    category: "Metalwork",
    image: "https://images.pexels.com/photos/30688201/pexels-photo-30688201.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
  }
];

const HandmadeCollection: React.FC = () => {
  return (
    <section className="py-24 md:py-40 bg-soft-white overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="flex flex-col mb-20">
          <span className="text-gold text-[12px] uppercase tracking-[0.4em] mb-4">Artisan Works</span>
          <h2 className="text-4xl md:text-7xl font-heading text-rich-black leading-none">
            Modern <span className="italic">Interpretations</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {handmadeItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="relative aspect-square overflow-hidden group shadow-2xl shadow-black/5"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rich-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                <p className="text-gold text-[10px] uppercase tracking-[0.3em] mb-2">{item.category}</p>
                <h3 className="text-white text-xl font-heading">{item.title}</h3>
                <div className="mt-4 w-12 h-[1px] bg-gold" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HandmadeCollection;
