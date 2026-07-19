import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { AnimatePresence, motion, useScroll } from 'framer-motion';

// Components
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import FeaturedCollection from './components/FeaturedCollection';
import Craftsmanship from './components/Craftsmanship';
import HandmadeCollection from './components/HandmadeCollection';
import BespokeSection from './components/BespokeSection';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Values from './components/Values';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import SakuraPetals from './components/SakuraPetals';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Mouse Spotlight Effect Logic
    const handleMouseMove = (e: MouseEvent) => {
      const spotlight = document.getElementById('hero-spotlight');
      if (spotlight) {
        spotlight.style.setProperty('--x', `${e.clientX}px`);
        spotlight.style.setProperty('--y', `${e.clientY}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      lenis.destroy();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const { scrollYProgress } = useScroll();

  return (
    <div className="relative overflow-x-hidden">
      <CustomCursor />
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gold z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <main>
          <SakuraPetals />
          <Navbar />
          <Hero />
          <div className="relative z-10">
            <BrandStory />
            <Values />
            <FeaturedCollection />
            <Craftsmanship />
            <HandmadeCollection />
            <BespokeSection />
            <Gallery />
            <Testimonials />
            <CTA />
            <Footer />
          </div>
        </main>
      )}
    </div>
  );
};

export default App;
