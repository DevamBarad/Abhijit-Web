import React from 'react';
import { motion } from 'framer-motion';

const BrandStory: React.FC = () => {
  return (
    <section id="story" className="py-24 md:py-40 bg-ivory overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 border-t border-l border-gold/30 z-0" />
            <div className="relative z-10 aspect-[4/5] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/14084208/pexels-photo-14084208.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800"
                alt="Heritage Story"
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-gold p-8 text-white hidden md:block">
              <p className="text-3xl font-heading italic">Est. 1924</p>
              <p className="text-[10px] uppercase tracking-[0.2em] mt-2">Century of Excellence</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col"
          >
            <span className="text-gold text-[12px] uppercase tracking-[0.4em] mb-6">Our Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-heading text-rich-black leading-tight mb-8">
              Every Piece Tells a <br />
              <span className="italic">Hidden Story</span>
            </h2>
            
            <div className="w-20 h-[1px] bg-gold mb-10" />

            <div className="space-y-6 text-charcoal/80 font-light leading-relaxed text-base md:text-lg">
              <p>
                Rerat was born from a passion for preserving the intangible. We believe that true luxury isn't just about possession, but about the heritage and the hands that brought an object to life.
              </p>
              <p>
                Our curators travel the globe, from the hidden workshops of Kyoto to the antique markets of Florence, seeking treasures that embody the "Wabi-Sabi" philosophy — finding beauty in imperfection and the passage of time.
              </p>
              <p className="italic font-heading text-2xl text-rich-black py-4 border-y border-gold/10">
                "We don't just sell artifacts; we transfer stewardship of history."
              </p>
              <p>
                Each Rerat creation is a bridge between the past and the present, designed to be passed down through generations.
              </p>
            </div>

            <button className="mt-12 self-start group flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-rich-black">
              <span className="group-hover:text-gold transition-colors">Read Full History</span>
              <div className="w-12 h-[1px] bg-gold group-hover:w-20 transition-all duration-500" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BrandStory;
