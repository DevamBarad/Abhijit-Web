import React from 'react';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-rich-black text-ivory pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Sakura Watermark */}
      <div className="absolute -bottom-20 -right-20 text-[300px] text-white/[0.02] pointer-events-none font-serif select-none">
        R
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24 mb-24">
        <div className="col-span-1 lg:col-span-1">
          <h2 className="text-3xl font-cinzel text-gold tracking-[0.2em] mb-8">RERAT</h2>
          <p className="text-ivory/50 font-light leading-relaxed text-sm mb-8 uppercase tracking-widest">
            Heritage You Can Hold.<br />
            Preserving the soul of craft since 1924.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-ivory/40 hover:text-gold transition-colors">Instagram</a>
            <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-ivory/40 hover:text-gold transition-colors">Facebook</a>
            <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-ivory/40 hover:text-gold transition-colors">Pinterest</a>
          </div>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-[0.4em] text-gold mb-8">Navigation</h4>
          <ul className="space-y-4">
            {['Collection', 'Our Story', 'Craftsmanship', 'Bespoke Commissions', 'Exhibitions'].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-ivory/60 hover:text-gold transition-colors font-light tracking-wide">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-[0.4em] text-gold mb-8">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-sm text-ivory/60 font-light tracking-wide">
              <Mail size={16} strokeWidth={1} className="text-gold/50" />
              atelier@rerat.com
            </li>
            <li className="text-sm text-ivory/60 font-light tracking-wide">
              12 Atelier Place, Kyoto, Japan
            </li>
            <li className="text-sm text-ivory/60 font-light tracking-wide">
              +81 75 555 0123
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-[0.4em] text-gold mb-8">Newsletter</h4>
          <p className="text-sm text-ivory/50 font-light mb-6 tracking-wide">Receive updates on new acquisitions and private viewings.</p>
          <form className="relative">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent border-b border-white/20 py-3 text-sm focus:outline-none focus:border-gold transition-colors font-light"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-widest text-gold hover:text-ivory transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[10px] uppercase tracking-[0.3em] text-ivory/30">
          © 2024 RERAT Heritage Brand. All Rights Reserved.
        </p>
        <div className="flex gap-8 text-[10px] uppercase tracking-[0.3em] text-ivory/30">
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
