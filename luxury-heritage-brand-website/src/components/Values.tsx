import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, ScrollText, Users, Leaf } from 'lucide-react';

const values = [
  { icon: Shield, title: "Authenticity", desc: "Rigorous vetting of every piece's history." },
  { icon: Sparkles, title: "Craftsmanship", desc: "Honoring master techniques from around the world." },
  { icon: ScrollText, title: "Tradition", desc: "Preserving cultural narratives for future generations." },
  { icon: Users, title: "Exclusivity", desc: "Limited series and one-of-a-kind artifacts." },
  { icon: Leaf, title: "Sustainability", desc: "Quality that lasts centuries, not seasons." }
];

const Values: React.FC = () => {
  return (
    <section className="py-24 bg-soft-white border-y border-gold/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center max-w-[200px] text-center"
            >
              <div className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center text-gold mb-6 group hover:bg-gold hover:text-white transition-all duration-500">
                <v.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-[11px] uppercase tracking-[0.4em] font-medium text-rich-black mb-3">{v.title}</h3>
              <p className="text-[10px] text-charcoal/50 leading-relaxed uppercase tracking-widest">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
