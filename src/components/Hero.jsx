import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Header from './Header';
import HeroVisual from './HeroVisual';

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] min-h-[900px] bg-ivory overflow-hidden selection:bg-deep-maroon selection:text-white">
      <Header />
      
      {/* Background/Visual Layer */}
      <HeroVisual />
      
      {/* Left Content Area */}
      <div className="relative z-10 w-full lg:w-[54%] h-full pt-[130px] lg:pt-[190px] px-8 lg:pl-[65px] flex flex-col">
        <div className="max-w-[650px]">
          
          {/* Eyebrow */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-[1px] h-10 bg-deep-maroon"></div>
            <div className="font-sans text-[11px] lg:text-xs uppercase tracking-[0.2em] font-medium text-deep-maroon leading-loose">
              Not Just Events.<br />Unforgettable Experiences.
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="font-serif text-6xl lg:text-[84px] leading-[0.92] tracking-tight mb-10"
          >
            <span className="block text-black">We Don&apos;t Do</span>
            <span className="block text-black">Ordinary.</span>
            <span className="block text-deep-maroon">We Create</span>
            <span className="block text-deep-maroon">Extraordinary.</span>
          </motion.h1>

          {/* Decorative Divider */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 70 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="h-[1px] bg-deep-maroon mb-10"
          ></motion.div>

          {/* Paragraph */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
            className="font-sans text-muted-black text-base lg:text-[17px] leading-relaxed max-w-[460px] mb-12"
          >
            End-to-end event management in Dubai delivering seamless planning, creative production and unforgettable moments.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-8"
          >
            <a 
              href="#services" 
              className="flex items-center justify-between w-full sm:w-[210px] h-[56px] bg-deep-maroon text-white font-sans text-[11px] uppercase tracking-widest font-medium px-8 rounded-sm hover:bg-dark-maroon transition-colors group"
            >
              Explore Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
            </a>
            
            <button className="flex items-center gap-4 group">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-deep-maroon/30 text-deep-maroon group-hover:scale-105 group-hover:border-deep-maroon transition-all">
                <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
              </div>
              <span className="font-sans text-[11px] uppercase tracking-widest font-medium text-deep-maroon">
                Watch Showreel
              </span>
            </button>
          </motion.div>
          
        </div>
      </div>

    </section>
  );
}
