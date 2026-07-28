import { motion } from 'framer-motion';
import Header from './Header';
import HeroVisual from './HeroVisual';

export default function Hero() {
  return (
    <section className="relative w-full bg-[#f7f2eb] overflow-hidden selection:bg-[#980b0b] selection:text-white flex flex-col lg:flex-row" style={{ minHeight: 'calc(100vh - 88px)' }}>
      <Header />

      {/* Decorative Background (Subtle Contour Lines) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" className="w-full h-full stroke-[#b98f68] fill-none" strokeWidth="1">
          <path d="M-100,500 Q200,300 500,500 T1100,500" />
          <path d="M-100,600 Q200,400 500,600 T1100,600" />
          <path d="M-100,700 Q200,500 500,700 T1100,700" />
          <path d="M-100,800 Q200,600 500,800 T1100,800" />
          <path d="M-100,400 Q200,200 500,400 T1100,400" />
        </svg>
      </div>

      {/* Left Content Area (47% width on desktop) */}
      <div 
        className="relative z-20 w-full lg:w-[47%] min-h-[60vh] lg:h-full flex flex-col pb-16 lg:pb-20"
        style={{
          paddingLeft: 'clamp(70px, 5vw, 110px)',
          paddingTop: 'calc(88px + clamp(40px, 5vh, 60px))'
        }}
      >
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mb-8 lg:mb-12"
        >
          <div 
            className="font-sans uppercase text-[#171515]"
            style={{ fontSize: '12px', letterSpacing: '0.24em', lineHeight: '1.8' }}
          >
            Not Just Events.<br />Unforgettable Experiences.
          </div>
        </motion.div>

        {/* Headline */}
        <div 
          className="mb-8 font-serif"
          style={{ 
            fontFamily: '"Cormorant Garamond", "Bodoni Moda", serif',
            fontSize: 'clamp(64px, 5.1vw, 94px)',
            lineHeight: 0.94,
            letterSpacing: '-0.045em'
          }}
        >
          <div className="overflow-hidden">
            <motion.span 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[#171515]"
            >
              We Don't Do
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[#171515]"
            >
              Ordinary.
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[#991313]"
            >
              We Create
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[#991313]"
            >
              Extraordinary.
            </motion.span>
          </div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
          className="font-sans text-[#4A4A4A]"
          style={{ maxWidth: '440px', fontSize: '18px', lineHeight: 1.65 }}
        >
          End-to-end event management in Dubai delivering seamless planning, creative production, and breathtaking moments.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-5 mt-10"
        >
          <a
            href="#services"
            className="flex items-center justify-between w-full sm:w-[210px] h-[56px] bg-[#980b0b] text-white font-sans text-[11px] uppercase tracking-widest font-medium px-8 rounded-sm hover:bg-[#7a0507] transition-colors group"
          >
            Explore Services
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>

          <a
            href="#contact"
            className="flex items-center justify-between w-full sm:w-[210px] h-[56px] bg-[#980b0b] text-white font-sans text-[11px] uppercase tracking-widest font-medium px-8 rounded-sm hover:bg-[#7a0507] transition-colors group"
          >
            Contact Us
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </motion.div>
      </div>

      {/* Right Visual Layer (53% width on desktop) */}
      <HeroVisual />

    </section>
  );
}

