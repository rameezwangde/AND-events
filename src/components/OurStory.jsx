import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Star, Users, Flame, Settings, Briefcase, Gem } from 'lucide-react';
import ourStoryImage from '../assets/our-story-image.png';

const floatingCards = [
  { id: 1, title: 'CREATIVE VISION', desc: 'We bring imagination to life with concepts that are fresh, impactful, and memorable.', icon: Lightbulb, angle: -90 },
  { id: 2, title: 'DETAIL PERFECTION', desc: 'From the smallest detail to the grandest setup, we leave nothing to chance.', icon: Star, angle: -30 },
  { id: 3, title: 'EXPERIENCE MAKERS', desc: 'We don\'t just plan events, we craft experiences that people remember forever.', icon: Users, angle: 30 },
  { id: 4, title: 'PASSION DRIVEN', desc: 'Our passion fuels every event we create and every client relationship we build.', icon: Flame, angle: 90 },
  { id: 5, title: 'SEAMLESS EXECUTION', desc: 'With a dedicated team and proven process, we ensure every event runs flawlessly.', icon: Settings, angle: 150 },
  { id: 6, title: 'CLIENT FOCUSED', desc: 'Your vision, preferences, and satisfaction guide everything we do.', icon: Briefcase, angle: -150 },
];

const featureStrips = [
  { title: 'VISION DRIVEN', desc: 'We imagine beyond the ordinary to deliver exceptional experiences.', icon: Lightbulb },
  { title: 'CLIENT FOCUSED', desc: 'Your dreams guide us. Your satisfaction drives us.', icon: Users },
  { title: 'DETAIL OBSESSED', desc: 'From the smallest detail to the grandest design, we perfect everything.', icon: Gem },
  { title: 'EXPERIENCE MAKERS', desc: 'We don\'t just plan events, we craft moments that live in memories forever.', icon: Star },
];

export default function OurStory() {
  const radius = 310; // dotted circle radius

  return (
    <section className="relative w-full bg-[#F8F4EE] overflow-hidden selection:bg-[#6B0F1A] selection:text-white pt-[120px] pb-[120px]">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-[200px] h-[200px] border-t-[1px] border-l-[1px] border-[#C8A56A]/20 rounded-tl-full opacity-50"></div>
      <div className="absolute bottom-10 right-10 w-[200px] h-[200px] border-b-[1px] border-r-[1px] border-[#C8A56A]/20 rounded-br-full opacity-50"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-[1450px] mx-auto px-6 lg:px-[100px] relative z-10">
        
        {/* Main 2-Column Layout */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-20 xl:gap-[40px] mb-24">
          
          {/* LEFT COLUMN (approx 42%) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full xl:w-[42%] flex flex-col z-20"
          >
            {/* Eyebrow */}
            <div className="flex flex-col items-start mb-8">
              <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#6B0F1A] font-bold mb-3">
                Our Story
              </span>
              <div className="flex items-center w-full max-w-[100px]">
                <div className="flex-1 h-[1px] bg-[#6B0F1A]/30"></div>
                <div className="w-[6px] h-[6px] border border-[#6B0F1A]/50 rotate-45 mx-2"></div>
                <div className="flex-1 h-[1px] bg-[#6B0F1A]/30"></div>
              </div>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-[42px] md:text-[56px] xl:text-[68px] leading-[1.05] mb-10">
              <span className="block text-black font-medium">Crafting Moments.</span>
              <span className="block text-[#6B0F1A] font-medium">Creating Legacies.</span>
            </h2>

            {/* Decorative divider under heading */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-[40px] h-[1px] bg-[#6B0F1A]/30"></div>
              <div className="w-[4px] h-[4px] rounded-full bg-[#C8A56A]"></div>
              <div className="w-[100px] h-[1px] bg-gradient-to-r from-[#6B0F1A]/30 to-transparent"></div>
            </div>

            {/* Paragraph */}
            <p className="font-sans text-[#555] text-[16px] md:text-[18px] leading-[1.9] max-w-[460px] mb-12">
              AND Events Management was born from a simple belief – that every celebration is unique and every detail matters. What started as a passion for creating unforgettable experiences has grown into a full-service event management company trusted by clients across Dubai.<br /><br />
              With creativity at our core and perfection in our process, we transform ideas into extraordinary events that leave lasting impressions.
            </p>

            {/* Outline Button */}
            <a href="#journey" className="flex items-center justify-between w-max gap-6 h-[54px] bg-white text-[#6B0F1A] border border-[#6B0F1A] font-sans text-[12px] uppercase tracking-[0.15em] font-bold px-8 rounded-sm hover:bg-[#6B0F1A] hover:text-white transition-all duration-400 group shadow-md hover:shadow-xl">
              Discover Our Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-400" strokeWidth={1.5} />
            </a>
          </motion.div>

          {/* RIGHT COLUMN - Circular Diagram (approx 58%) */}
          <div className="w-full xl:w-[58%] relative flex justify-center items-center h-[700px] xl:h-[800px] mt-20 xl:mt-0">
            
            {/* Center Area */}
            <div className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px] z-10 flex items-center justify-center">
              
              {/* Soft Radial Light */}
              <div className="absolute inset-0 bg-[#6B0F1A] blur-[100px] rounded-full opacity-10"></div>
              
              {/* Organic Burgundy Blob (SVG) */}
              <div className="absolute w-[120%] h-[120%] z-0 text-[#4B080E] opacity-90" style={{ transform: 'rotate(15deg)' }}>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current">
                  <path d="M42.7,-71.4C56,-65.7,67.7,-55,75.1,-41.8C82.5,-28.6,85.6,-13,84.4,2.3C83.2,17.6,77.7,32.6,69.5,45.3C61.2,58,50.1,68.4,37,74.9C23.9,81.4,8.8,84,-5.4,80.8C-19.6,77.6,-33,68.5,-44.6,58C-56.2,47.5,-66,35.6,-73,21.5C-80,7.3,-84.3,-9.1,-80.4,-23.4C-76.5,-37.7,-64.5,-49.9,-51,-55.8C-37.5,-61.7,-22.4,-61.3,-7.4,-57.4C7.6,-53.4,15.2,-45.8,29.4,-77.1Z" transform="translate(100 100)" />
                </svg>
              </div>

              {/* Circular Image */}
              <div className="relative w-full h-full rounded-[40%] md:rounded-full overflow-hidden shadow-2xl z-10 border-[4px] border-[#F8F4EE]">
                <img src={ourStoryImage} alt="Event Details" className="w-full h-full object-cover scale-110" />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            </div>

            {/* Dotted Circular Path (Hidden on mobile for better stacking, visible md+) */}
            <div className="absolute w-[450px] h-[450px] md:w-[620px] md:h-[620px] rounded-full border-[1.5px] border-dotted border-[#6B0F1A]/40 z-0 hidden md:block">
              {/* Animated Traveling Dot */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="w-full h-full absolute inset-0"
              >
                <div className="absolute top-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#C8A56A] shadow-[0_0_10px_2px_rgba(200,165,106,0.6)]"></div>
              </motion.div>

              {/* Static tiny nodes at quarters */}
              <div className="absolute top-[-3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#6B0F1A]"></div>
              <div className="absolute bottom-[-3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#6B0F1A]"></div>
              <div className="absolute left-[-3px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#6B0F1A]"></div>
              <div className="absolute right-[-3px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#6B0F1A]"></div>
            </div>

            {/* Floating Cards (Absolute on md+, Stacked horizontally on mobile) */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 z-20 pointer-events-none hidden md:block"
            >
              {floatingCards.map((card, idx) => {
                const angleRad = (card.angle * Math.PI) / 180;
                const x = radius * Math.cos(angleRad);
                const y = radius * Math.sin(angleRad);
                
                return (
                  <div
                    key={card.id}
                    className="absolute top-1/2 left-1/2 w-[250px] pointer-events-auto z-20"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                    }}
                  >
                    {/* Counter-rotation to keep cards upright while the parent container orbits */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                      className="w-full h-full origin-center"
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="w-full bg-white rounded-[24px] p-[22px] shadow-[0_15px_40px_-10px_rgba(107,15,26,0.08)] cursor-pointer group hover:-translate-y-[10px] transition-all duration-400"
                      >
                        <div className="flex gap-4 items-start">
                          <div className="w-10 h-10 rounded-full bg-[#6B0F1A] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-400 shadow-lg">
                            <card.icon className="w-4 h-4 text-white stroke-[2px]" />
                          </div>
                          <div className="flex flex-col mt-1">
                            <h4 className="font-sans text-[12px] uppercase tracking-[0.15em] font-bold text-[#6B0F1A] mb-1.5">
                              {card.title}
                            </h4>
                            <p className="font-sans text-[12px] text-gray-500 leading-relaxed">
                              {card.desc}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
            
            {/* Mobile Cards (Horizontal Scroll) */}
            <div className="absolute bottom-[-150px] left-0 w-full md:hidden flex overflow-x-auto gap-4 px-6 pb-10 snap-x hide-scrollbar pointer-events-auto z-30">
              {floatingCards.map((card) => (
                <div key={card.id} className="min-w-[240px] snap-center bg-white rounded-[20px] p-[20px] shadow-[0_15px_30px_-10px_rgba(107,15,26,0.08)]">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-[#6B0F1A] flex items-center justify-center shrink-0">
                      <card.icon className="w-4 h-4 text-white stroke-[2px]" />
                    </div>
                    <div className="flex flex-col mt-1">
                      <h4 className="font-sans text-[11px] uppercase tracking-[0.15em] font-bold text-[#6B0F1A] mb-1.5">
                        {card.title}
                      </h4>
                      <p className="font-sans text-[12px] text-gray-500 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* BOTTOM FEATURE STRIP */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full mt-32 md:mt-10 bg-white rounded-[24px] md:rounded-[32px] border border-[#6B0F1A]/20 shadow-[0_20px_50px_-20px_rgba(107,15,26,0.1)] p-8 md:p-12 xl:h-[180px] flex flex-col xl:flex-row items-center relative overflow-hidden"
        >
          {/* Subtle angled corner cuts (Chamfer illusion using absolute shapes) */}
          <div className="absolute top-[-10px] left-[-10px] w-12 h-12 bg-[#6B0F1A] rotate-45 border-b border-r border-[#6B0F1A]/20"></div>
          <div className="absolute top-[-10px] right-[-10px] w-12 h-12 bg-[#6B0F1A] rotate-45 border-b border-l border-[#6B0F1A]/20"></div>
          <div className="absolute bottom-[-10px] left-[-10px] w-12 h-12 bg-[#6B0F1A] rotate-45 border-t border-r border-[#6B0F1A]/20"></div>
          <div className="absolute bottom-[-10px] right-[-10px] w-12 h-12 bg-[#6B0F1A] rotate-45 border-t border-l border-[#6B0F1A]/20"></div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-0 relative z-10">
            {featureStrips.map((feature, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col items-center text-center group cursor-pointer hover:-translate-y-2 transition-transform duration-400 ${
                  idx !== featureStrips.length - 1 ? 'xl:border-r border-[#6B0F1A]/10' : ''
                } px-4`}
              >
                <div className="w-10 h-10 rounded-full bg-[#F8F4EE] border border-[#6B0F1A]/20 flex items-center justify-center mb-4 group-hover:bg-[#6B0F1A] transition-colors duration-400">
                  <feature.icon className="w-4 h-4 text-[#6B0F1A] group-hover:text-white transition-colors duration-400" />
                </div>
                <h5 className="font-sans text-[12px] uppercase tracking-[0.15em] text-[#6B0F1A] font-bold mb-3">
                  {feature.title}
                </h5>
                <p className="font-sans text-[12px] text-gray-500 max-w-[220px] leading-relaxed mb-4">
                  {feature.desc}
                </p>
                <div className="w-8 h-[1px] bg-[#6B0F1A]/30 group-hover:bg-[#C8A56A] group-hover:w-12 transition-all duration-400"></div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
