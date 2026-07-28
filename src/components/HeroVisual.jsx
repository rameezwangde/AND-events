import { motion } from 'framer-motion';
import heroImage from '../assets/and2.png';

export default function HeroVisual() {
  return (
    <div className="absolute top-0 right-0 w-full lg:w-[53%] h-[60vh] lg:h-full z-0 overflow-hidden pointer-events-none flex items-center justify-center">
      
      {/* Container for the image and animations */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full h-full relative"
      >
        {/* Luxury Cinematic Event Image */}
        <img
          src={heroImage}
          alt="Luxury event setup"
          className="w-full h-full object-cover object-center"
        />

        {/* Ambient Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(72, 0, 0, 0.25) 0%, rgba(72, 0, 0, 0.04) 45%, rgba(0, 0, 0, 0.12) 100%)'
          }}
        ></div>
      </motion.div>

      {/* Floating Pendant Lights (Top Right) */}
      <div className="absolute top-0 right-[15%] w-[150px] h-[300px] z-20 flex gap-6 justify-end">
        <motion.div 
          animate={{ rotate: [-1, 1, -1] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center origin-top mt-[-10px]"
        >
          <div className="w-[1px] h-[140px] bg-white/10"></div>
          <div className="w-[14px] h-[14px] rounded-full border-[1px] border-white/20 bg-white/5 flex items-center justify-center">
            <div className="w-[4px] h-[4px] rounded-full bg-[#fce0b6] shadow-[0_0_10px_3px_rgba(252,224,182,0.8)]"></div>
          </div>
        </motion.div>

        <motion.div 
          animate={{ rotate: [1.5, -1.5, 1.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="flex flex-col items-center origin-top mt-[0px]"
        >
          <div className="w-[1px] h-[200px] bg-white/10"></div>
          <div className="w-[18px] h-[18px] rounded-full border-[1px] border-white/20 bg-white/5 flex items-center justify-center">
            <div className="w-[5px] h-[5px] rounded-full bg-[#fce0b6] shadow-[0_0_12px_4px_rgba(252,224,182,0.8)]"></div>
          </div>
        </motion.div>

        <motion.div 
          animate={{ rotate: [-1, 1, -1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="flex flex-col items-center origin-top mt-[20px]"
        >
          <div className="w-[1px] h-[100px] bg-white/10"></div>
          <div className="w-[12px] h-[12px] rounded-full border-[1px] border-white/20 bg-white/5 flex items-center justify-center">
            <div className="w-[3px] h-[3px] rounded-full bg-[#fce0b6] shadow-[0_0_8px_2px_rgba(252,224,182,0.8)]"></div>
          </div>
        </motion.div>
      </div>

      {/* Layered Sculptural Divider */}
      <motion.div 
        initial={{ x: -8 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 left-[-2px] w-[150px] lg:w-[250px] h-full z-20 pointer-events-none"
      >
        {/* Layer 1: Darkest Maroon */}
        <svg viewBox="0 0 100 1000" preserveAspectRatio="none" className="absolute inset-0 w-full h-full fill-[#2a0101]">
          <path d="M0,0 L100,0 C80,150 110,350 70,550 C30,750 90,900 100,1000 L0,1000 Z" />
        </svg>

        {/* Layer 2: Burgundy */}
        <svg viewBox="0 0 100 1000" preserveAspectRatio="none" className="absolute inset-0 w-full h-full fill-[#6e0505]">
          <path d="M0,0 L85,0 C65,180 95,380 50,600 C10,800 75,920 85,1000 L0,1000 Z" />
        </svg>

        {/* Layer 3: Ivory foreground curve */}
        <svg viewBox="0 0 100 1000" preserveAspectRatio="none" className="absolute inset-0 w-full h-full fill-[#f7f2eb]">
          <path d="M0,0 L70,0 C50,220 80,420 30,650 C-10,850 60,950 70,1000 L0,1000 Z" />
        </svg>

        {/* Layer 4: Thin Gold Contour Line */}
        <svg viewBox="0 0 100 1000" preserveAspectRatio="none" className="absolute inset-0 w-full h-full fill-none stroke-[#C99A5A]" strokeWidth="1.5">
          <path d="M70,0 C50,220 80,420 30,650 C-10,850 60,950 70,1000" />
        </svg>
      </motion.div>

    </div>
  );
}

