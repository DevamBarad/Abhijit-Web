import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    title: "Consultation",
    content: "A private session with our head curator to discuss your vision, aesthetic preferences, and the space the piece will inhabit.",
    image: "https://images.pexels.com/photos/32357220/pexels-photo-32357220.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800"
  },
  {
    title: "Sourcing",
    content: "Our global network of scouts identifies rare materials and historical fragments to serve as the foundation of your creation.",
    image: "https://images.pexels.com/photos/14084208/pexels-photo-14084208.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800"
  },
  {
    title: "Crafting",
    content: "Assigned master artisans begin the painstaking process of hand-tooling, carving, or weaving your bespoke heritage piece.",
    image: "https://images.pexels.com/photos/6685423/pexels-photo-6685423.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800"
  }
];

const BespokeSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="bespoke" className="py-24 md:py-40 bg-ivory overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="order-2 lg:order-1">
            <span className="text-gold text-[12px] uppercase tracking-[0.4em] mb-6 block">Private Commission</span>
            <h2 className="text-4xl md:text-7xl font-heading text-rich-black leading-tight mb-12">
              Bespoke <span className="italic">Treasures</span>
            </h2>

            <div className="space-y-8">
              {steps.map((step, i) => (
                <div 
                  key={i} 
                  className={`cursor-pointer group relative pl-12 py-6 border-l transition-all duration-500 ${
                    activeStep === i ? 'border-gold' : 'border-gold/20 hover:border-gold/50'
                  }`}
                  onClick={() => setActiveStep(i)}
                >
                  <span className={`absolute left-4 top-7 text-[10px] font-medium tracking-widest ${
                    activeStep === i ? 'text-gold' : 'text-charcoal/30'
                  }`}>
                    0{i + 1}
                  </span>
                  <h3 className={`text-2xl font-heading mb-3 transition-colors duration-500 ${
                    activeStep === i ? 'text-rich-black' : 'text-charcoal/40 group-hover:text-charcoal/60'
                  }`}>
                    {step.title}
                  </h3>
                  <AnimatePresence mode="wait">
                    {activeStep === i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-charcoal/70 font-light leading-relaxed max-w-md overflow-hidden"
                      >
                        {step.content}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <button className="mt-16 px-10 py-4 bg-rich-black text-white text-[11px] uppercase tracking-[0.3em] hover:bg-gold transition-all duration-500 rounded-sm">
              Inquire Now
            </button>
          </div>

          <div className="order-1 lg:order-2 relative">
             <div className="absolute -inset-10 bg-gold/5 rounded-full blur-3xl z-0" />
             <div className="relative z-10 aspect-square md:aspect-[4/5] overflow-hidden shadow-2xl">
               <AnimatePresence mode="wait">
                 <motion.img
                   key={activeStep}
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   transition={{ duration: 0.8 }}
                   src={steps[activeStep].image}
                   alt={steps[activeStep].title}
                   className="w-full h-full object-cover"
                 />
               </AnimatePresence>
             </div>
             
             {/* Decorative element */}
             <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b border-l border-gold/40 z-20 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default BespokeSection;
