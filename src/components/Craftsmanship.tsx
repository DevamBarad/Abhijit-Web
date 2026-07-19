import React from 'react';
import { motion } from 'framer-motion';
import { Compass, PenTool, Hammer, Star, ShieldCheck } from 'lucide-react';

const steps = [
  {
    icon: Compass,
    title: "Discovery & Curation",
    desc: "We traverse remote regions to identify artifacts with exceptional provenance and soul."
  },
  {
    icon: PenTool,
    title: "Conceptualization",
    desc: "Our designers envision how historical elements can be integrated into modern living spaces."
  },
  {
    icon: Hammer,
    title: "Master Handcrafting",
    desc: "Renowned artisans employ centuries-old techniques to restore or create bespoke pieces."
  },
  {
    icon: Star,
    title: "Finishing & Polishing",
    desc: "Each item undergoes a meticulous finishing process to achieve the Rerat signature glow."
  },
  {
    icon: ShieldCheck,
    title: "Authentication",
    desc: "Final verification and documentation of the piece's heritage and craftsmanship."
  }
];

const Craftsmanship: React.FC = () => {
  return (
    <section id="craft" className="py-24 md:py-40 bg-rich-black text-ivory relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_50%,rgba(200,169,106,0.05)_0%,transparent_70%)]" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold text-[12px] uppercase tracking-[0.5em] mb-4 block"
          >
            The Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-heading mb-8"
          >
            Alchemy of <span className="italic">Excellence</span>
          </motion.h2>
          <div className="w-24 h-[1px] bg-gold/50 mx-auto" />
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 w-full md:px-12 text-center md:text-right">
                  {i % 2 === 0 && (
                    <>
                      <h3 className="text-2xl font-heading mb-4 text-gold">{step.title}</h3>
                      <p className="text-white/60 font-light leading-relaxed max-w-md ml-auto">{step.desc}</p>
                    </>
                  )}
                </div>

                <div className="relative z-10 w-10 h-10 bg-rich-black border border-gold rounded-full flex items-center justify-center text-gold">
                   <step.icon size={16} />
                   <div className="absolute inset-0 rounded-full bg-gold/20 animate-ping" />
                </div>

                <div className="flex-1 w-full md:px-12 text-center md:text-left">
                  {i % 2 !== 0 && (
                    <>
                      <h3 className="text-2xl font-heading mb-4 text-gold">{step.title}</h3>
                      <p className="text-white/60 font-light leading-relaxed max-w-md mr-auto">{step.desc}</p>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;
