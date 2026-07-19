import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Rerat understands that heritage isn't just about the past; it's about the energy a piece brings to a modern home. Their curation is unparalleled.",
    author: "Elena Rossi",
    role: "Interior Architect, Milan"
  },
  {
    quote: "The bespoke commission process was a journey in itself. Watching our family crest be integrated into a centuries-old technique was profound.",
    author: "Marcus Thorne",
    role: "Collector"
  },
  {
    quote: "Museum quality meets contemporary elegance. Every item I've acquired from Rerat is a conversation starter and a future heirloom.",
    author: "Sophie Chen",
    role: "Art Consultant"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 md:py-40 bg-ivory">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <Quote className="text-gold/20 mb-8 group-hover:text-gold/40 transition-colors" size={48} />
              <p className="text-xl md:text-2xl font-heading italic text-rich-black leading-relaxed mb-10">
                "{t.quote}"
              </p>
              <div className="mt-auto">
                <p className="text-rich-black font-medium tracking-[0.2em] text-[11px] uppercase mb-1">{t.author}</p>
                <p className="text-charcoal/40 text-[10px] uppercase tracking-[0.3em]">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
