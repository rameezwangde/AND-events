import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-[1300px] mx-auto mt-8 lg:mt-12 mb-16 lg:mb-28 py-24 lg:py-32 overflow-hidden rounded-[2rem] lg:rounded-[3rem] shadow-[0_20px_50px_rgba(138,28,34,0.2)]">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://festivation.com/images/dubai-festivals.webp')" }}
      ></div>
      
      {/* Dark Red Color Overlay */}
      <div className="absolute inset-0 bg-[#2B0408]/90"></div>
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none mix-blend-overlay"></div>
      
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-white blur-[150px] opacity-15 rounded-[50%] pointer-events-none"></div>
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <span className="font-sans text-[11px] lg:text-xs uppercase tracking-[0.2em] font-medium mb-6 text-[#C8A977]">
            Ready to collaborate?
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight tracking-tight text-[#C8A977]">
            Let&apos;s Create Something <br className="hidden md:block" />
            <span className="italic font-light text-white">Extraordinary</span>
          </h2>
          <p className="font-sans text-sm md:text-base max-w-xl mx-auto mb-12 text-[#C8A977]/80 leading-relaxed">
            From concept to execution, our team of experts is ready to bring your vision to life. Partner with us for your next iconic event.
          </p>

          <a 
            href="#contact" 
            className="flex items-center justify-between w-[220px] h-[56px] bg-[#C8A977] text-[#2B0408] font-sans text-[11px] uppercase tracking-widest font-bold px-8 rounded-sm hover:bg-[#FDFBF7] hover:shadow-[0_10px_30px_rgba(200,169,119,0.2)] transition-all group duration-300"
          >
            Start a Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
