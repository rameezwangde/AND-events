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



export default function OurStory() {
  const radius = 280; // dotted circle radius

  return (
    <section className="relative w-full bg-[#F8F4EE] overflow-hidden selection:bg-[#6E0F18] selection:text-white pt-10 lg:pt-4 pb-0">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-[50vw] max-w-[400px] h-[50vw] max-h-[400px] border-t-[1px] border-l-[1px] border-[#C8A56A]/20 rounded-tl-full opacity-50 md:top-5 md:left-5"></div>
      <div className="absolute bottom-0 right-0 w-[50vw] max-w-[400px] h-[50vw] max-h-[400px] border-b-[1px] border-r-[1px] border-[#C8A56A]/20 rounded-br-full opacity-50 md:bottom-5 md:right-5"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-[0.03] pointer-events-none"></div>

      <div className="w-full px-8 lg:px-[65px] relative z-10">
        
        {/* Main 2-Column Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20 lg:gap-[40px] mb-4">
          
          {/* LEFT COLUMN (approx 42%) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-[42%] flex flex-col z-20"
          >
            {/* Eyebrow */}
            <div className="flex flex-col items-start mb-8">
              <span className="font-sans text-[14px] md:text-[16px] uppercase tracking-[0.25em] text-[#6E0F18] font-bold mb-3">
                Our Story
              </span>
              <div className="flex items-center w-full max-w-[100px]">
                <div className="flex-1 h-[1px] bg-[#6E0F18]/30"></div>
                <div className="w-[6px] h-[6px] border border-[#6E0F18]/50 rotate-45 mx-2"></div>
                <div className="flex-1 h-[1px] bg-[#6E0F18]/30"></div>
              </div>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-[36px] md:text-[48px] xl:text-[56px] leading-[1.05] mb-10 ml-[-2px] md:ml-[-4px]">
              <span className="block text-black font-medium">Crafting Moments.</span>
              <span className="block text-[#6E0F18] font-medium">Creating Legacies.</span>
            </h2>

            {/* Decorative divider under heading */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-[40px] h-[1px] bg-[#6E0F18]/30"></div>
              <div className="w-[4px] h-[4px] rounded-full bg-[#C8A56A]"></div>
              <div className="w-[100px] h-[1px] bg-gradient-to-r from-[#6E0F18]/30 to-transparent"></div>
            </div>

            {/* Paragraph */}
            <p className="font-sans text-[#555] text-[16px] md:text-[18px] leading-[1.9] max-w-[460px] mb-12">
              AND Events Management was born from a simple belief – that every celebration is unique and every detail matters. What started as a passion for creating unforgettable experiences has grown into a full-service event management company trusted by clients across Dubai.<br /><br />
              With creativity at our core and perfection in our process, we transform ideas into extraordinary events that leave lasting impressions.
            </p>

            {/* Outline Button */}
            <a href="#journey" className="flex items-center justify-between w-max gap-6 h-[54px] bg-white text-[#6E0F18] border border-[#6E0F18] font-sans text-[12px] uppercase tracking-[0.15em] font-bold px-8 rounded-sm hover:bg-[#6E0F18] hover:text-white transition-all duration-400 group shadow-md hover:shadow-xl">
              Discover Our Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-400" strokeWidth={1.5} />
            </a>
          </motion.div>

          {/* RIGHT COLUMN - Circular Diagram (approx 58%) */}
          <div className="w-full lg:w-[58%] relative flex justify-center items-center h-[700px] lg:h-[800px] mt-20 lg:mt-0">
            
            {/* Center Area */}
            <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] z-10 flex items-center justify-center">
              
              {/* Soft Radial Light */}
              <div className="absolute inset-0 bg-[#6E0F18] blur-[100px] rounded-full opacity-10"></div>
              
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
            <div className="absolute w-[400px] h-[400px] md:w-[560px] md:h-[560px] rounded-full border-[1.5px] border-dotted border-[#6E0F18]/40 z-0 hidden md:block">
              {/* Animated Traveling Dot */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="w-full h-full absolute inset-0"
              >
                <div className="absolute top-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#C8A56A] shadow-[0_0_10px_2px_rgba(200,165,106,0.6)]"></div>
              </motion.div>

              {/* Static tiny nodes at quarters */}
              <div className="absolute top-[-3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#6E0F18]"></div>
              <div className="absolute bottom-[-3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#6E0F18]"></div>
              <div className="absolute left-[-3px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#6E0F18]"></div>
              <div className="absolute right-[-3px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#6E0F18]"></div>
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
                    className="absolute top-1/2 left-1/2 w-[185px] pointer-events-auto z-20"
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
                        className="w-full bg-white rounded-[20px] p-[16px] shadow-[0_15px_40px_-10px_rgba(107,15,26,0.08)] cursor-pointer group hover:-translate-y-[10px] transition-all duration-400"
                      >
                        <div className="flex gap-3 items-start">
                          <div className="w-8 h-8 rounded-full bg-[#6E0F18] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-400 shadow-lg">
                            <card.icon className="w-3.5 h-3.5 text-white stroke-[2px]" />
                          </div>
                          <div className="flex flex-col mt-1">
                            <h4 className="font-sans text-[12px] uppercase tracking-[0.15em] font-bold text-[#6E0F18] mb-1.5">
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
                    <div className="w-10 h-10 rounded-full bg-[#6E0F18] flex items-center justify-center shrink-0">
                      <card.icon className="w-4 h-4 text-white stroke-[2px]" />
                    </div>
                    <div className="flex flex-col mt-1">
                      <h4 className="font-sans text-[11px] uppercase tracking-[0.15em] font-bold text-[#6E0F18] mb-1.5">
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



      </div>
    </section>
  );
}
