import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    title: "Golden Celestial Vessel",
    year: "Circa 1750",
    origin: "Edo Period, Japan",
    image: "https://images.pexels.com/photos/15023819/pexels-photo-15023819.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
    description: "A masterwork of gold leaf and bronze, representing the celestial cycles."
  },
  {
    title: "Imperial Silver Chalice",
    year: "Circa 1820",
    origin: "Saint Petersburg",
    image: "https://images.pexels.com/photos/14644999/pexels-photo-14644999.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
    description: "Finely engraved silver with intricate floral motifs used in royal banquets."
  },
  {
    title: "Ancient Bronze Urn",
    year: "Han Dynasty",
    origin: "Chang'an, China",
    image: "https://images.pexels.com/photos/16153606/pexels-photo-16153606.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
    description: "An exceptional example of early bronze casting with mythical beast iconography."
  }
];

const FeaturedCollection: React.FC = () => {
  return (
    <section id="collection" className="py-24 md:py-40 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-gold text-[12px] uppercase tracking-[0.4em] mb-4 block">The Vault</span>
            <h2 className="text-4xl md:text-7xl font-heading text-rich-black leading-none">
              Featured <br /><span className="italic">Heritage</span>
            </h2>
          </div>
          <p className="max-w-md text-charcoal/60 font-light leading-relaxed">
            A curated selection of our most rare and significant artifacts, each vetted for authenticity and historical provenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group cursor-none"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-ivory mb-8">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-rich-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white text-[10px] uppercase tracking-[0.4em] border border-white/30 px-6 py-2 backdrop-blur-sm">View Details</span>
                </div>
              </div>
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-heading text-rich-black group-hover:text-gold transition-colors">{item.title}</h3>
                <span className="text-[10px] text-gold border border-gold/30 px-2 py-0.5">{item.year}</span>
              </div>
              
              <p className="text-[11px] uppercase tracking-[0.2em] text-charcoal/40 mb-4">{item.origin}</p>
              <p className="text-charcoal/70 font-light leading-relaxed text-sm">
                {item.description}
              </p>
              
              <div className="mt-8 w-full h-[1px] bg-charcoal/5 group-hover:bg-gold/30 transition-colors" />
            </motion.div>
          ))}
        </div>

        <div className="mt-24 flex justify-center">
          <button className="px-12 py-5 border border-rich-black text-rich-black text-[11px] uppercase tracking-[0.3em] hover:bg-rich-black hover:text-white transition-all duration-500">
            View Full Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
