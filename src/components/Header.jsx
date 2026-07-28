import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', active: true },
  { name: 'About Us', active: false },
  { name: 'Services', active: false },
  { name: 'Our Work', active: false },
  { name: 'Contact Us', active: false },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full h-[90px] lg:h-[100px] z-50 flex items-center justify-between px-6 lg:px-[60px]"
        style={{ 
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          background: 'rgba(147, 7, 8, 0.98)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)'
        }}
      >


        {/* Logo */}
        <a href="#" className="relative z-10 flex items-center justify-start w-[120px] lg:w-[140px]">
          <img src="/and-logo.jpeg" alt="AND Events Management Logo" className="w-full h-auto object-contain rounded-lg" />
        </a>

        {/* Main Navigation (Perfectly Centered Desktop) */}
        <nav className="absolute left-1/2 -translate-x-1/2 h-full hidden lg:flex items-center gap-[40px] xl:gap-[50px] z-10 w-max">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href="#"
              className={`relative font-sans text-[15px] font-medium tracking-[0.08em] uppercase py-2 group transition-colors ${
                link.active ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.name}
              <span 
                className={`absolute left-0 bottom-0 h-[1px] bg-white transition-all duration-400 ease-out ${
                  link.active ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          ))}
        </nav>

        {/* Right CTA / Menu */}
        <div className="relative z-10 flex items-center gap-6">
          {/* CTA Button only on Desktop */}
          <a 
            href="#contact" 
            className="hidden lg:flex items-center justify-center bg-white text-logo-red px-8 py-3.5 rounded-full font-sans text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300"
          >
            Let's Create Magic
          </a>
          
          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden flex items-center justify-center w-[44px] h-[44px] rounded-full transition-all duration-300 group hover:scale-105 hover:bg-white/10"
            style={{ border: '1px solid rgba(255,255,255,.2)' }}
            aria-label="Menu"
          >
            <Menu className="w-5 h-5 text-white transition-colors duration-300" strokeWidth={1.5} />
          </button>
        </div>
      </motion.header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-ivory flex flex-col justify-center px-8"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-6 w-12 h-12 flex items-center justify-center rounded-full border border-logo-red/20 text-logo-red hover:bg-logo-red hover:text-white transition-colors"
            >
              <X className="w-6 h-6" strokeWidth={1.5} />
            </button>
            
            <nav className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className={`font-serif text-4xl font-medium tracking-wide ${
                    link.active ? 'text-logo-red' : 'text-black/70'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 + 0.2 }}
                className="mt-4 font-sans text-xs tracking-[0.2em] uppercase font-bold text-logo-red"
              >
                Let's Create Magic &rarr;
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
