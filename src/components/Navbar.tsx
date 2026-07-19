import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collection', href: '#collection' },
    { name: 'Our Story', href: '#story' },
    { name: 'Craftsmanship', href: '#craft' },
    { name: 'Bespoke', href: '#bespoke' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-ivory/80 backdrop-blur-md py-4' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex-1 hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 2).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.3em] text-charcoal/70 hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex-1 flex justify-center">
            <a href="/" className="group">
              <h1 className="text-2xl md:text-3xl font-cinzel text-charcoal tracking-[0.2em] group-hover:text-gold transition-colors">
                RERAT
              </h1>
              <div className="h-[1px] w-0 group-hover:w-full bg-gold transition-all duration-500 mx-auto" />
            </a>
          </div>

          <div className="flex-1 flex items-center justify-end gap-6 md:gap-8">
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.slice(2).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[11px] uppercase tracking-[0.3em] text-charcoal/70 hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <button className="text-charcoal hover:text-gold transition-colors p-1">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button className="lg:hidden text-charcoal hover:text-gold transition-colors p-1" onClick={() => setIsMenuOpen(true)}>
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-rich-black text-ivory flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 text-ivory hover:text-gold transition-colors"
            >
              <X size={32} strokeWidth={1} />
            </button>
            
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl md:text-5xl font-heading hover:text-gold transition-colors italic"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-20 flex flex-col items-center">
              <p className="text-[10px] tracking-[0.4em] text-gold uppercase mb-4">Heritage You Can Hold</p>
              <div className="w-12 h-[1px] bg-gold/30" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
