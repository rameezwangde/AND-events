import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

const navLinks = [
  { name: 'Home', active: true },
  { name: 'About Us', active: false },
  { name: 'Services', active: false },
  { name: 'Our Work', active: false },
  { name: 'Themes', active: false },
  { name: 'Contact Us', active: false },
];

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute top-0 left-0 w-full h-[90px] lg:h-[100px] z-50 flex items-center justify-between px-6 lg:px-[60px]"
      style={{ 
        borderBottom: '1px solid rgba(120,90,70,.08)',
        background: 'linear-gradient(90deg, rgba(247,243,236,0.88) 0%, rgba(246,241,234,0.88) 55%, rgba(239,231,220,0.88) 100%)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)'
      }}
    >
      {/* Right Side Darker Beige Transition */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'rgba(214,198,181,0.55)',
          clipPath: 'polygon(60.4% 0, 100% 0, 100% 100%, calc(60.4% - 27px) 100%)'
        }}
      />

      {/* Gold Architectural Detail Line */}
      <div 
        className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#D4AF37]/60 to-transparent z-0 hidden lg:block"
        style={{
          left: '60.4%',
          transform: 'skewX(-15deg)',
          transformOrigin: 'top'
        }}
      />

      {/* Logo */}
      <a href="#" className="relative z-10 flex flex-col items-start w-[130px] lg:w-[150px]">
        <span className="font-serif text-deep-maroon text-4xl lg:text-5xl font-bold leading-none tracking-tight">
          AND
        </span>
        <span className="font-sans text-muted-black text-[9px] lg:text-[10px] uppercase tracking-[0.25em] mt-1 font-medium whitespace-nowrap">
          Events Management
        </span>
      </a>

      {/* Main Navigation (Perfectly Centered Desktop) */}
      <nav className="absolute left-1/2 -translate-x-1/2 h-full hidden lg:flex items-center gap-[40px] xl:gap-[50px] z-10 w-max">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href="#"
            className={`relative font-sans text-[15px] font-medium tracking-[0.08em] uppercase py-2 group transition-colors ${
              link.active ? 'text-deep-maroon' : 'text-black/80 hover:text-deep-maroon'
            }`}
          >
            {link.name}
            <span 
              className={`absolute left-0 bottom-0 h-[1px] bg-deep-maroon transition-all duration-400 ease-out ${
                link.active ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            />
          </a>
        ))}
      </nav>

      {/* Right CTA / Menu */}
      <div className="relative z-10 flex items-center gap-6">
        <span className="hidden lg:block font-sans text-[13px] tracking-widest uppercase font-medium text-deep-maroon">
          Let's Create Magic
        </span>
        <div className="hidden lg:block w-[1px] h-[16px] bg-deep-maroon/30"></div>
        <button 
          className="flex items-center justify-center w-[44px] h-[44px] lg:w-[52px] lg:h-[52px] rounded-full transition-all duration-300 group hover:scale-105 hover:bg-[#6E0F18]"
          style={{ border: '1px solid rgba(90,60,40,.18)' }}
          aria-label="Menu"
        >
          <Menu className="w-5 h-5 text-deep-maroon group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
        </button>
      </div>
    </motion.header>
  );
}
