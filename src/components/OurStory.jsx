import { motion } from 'framer-motion';
import { Lightbulb, Users, Gem, Star } from 'lucide-react';
import ourStoryImage from '../assets/our-story-image.png';
import heroEventImage from '../assets/hero-event.png';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function OurStory() {
  return (
    <section 
      className="relative w-full overflow-hidden selection:bg-[#6E0F18] selection:text-white"
      style={{
        background: 'radial-gradient(circle at top left, #FBF8F3 0%, #F7F3EC 55%, #F1E8DB 100%)'
      }}
    >
      {/* Decorative Gold Curved Line */}
      <div className="absolute top-0 right-0 w-full h-full z-0 pointer-events-none overflow-hidden opacity-40 hidden lg:block">
        <svg viewBox="0 0 1600 1200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-[-100px] right-[-100px] w-full h-full min-w-[1200px]">
          <path d="M 200,800 C 600,800 800,200 1400,0" stroke="#C8A977" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto pt-[80px] lg:pt-[120px] pb-[80px] lg:pb-[120px] px-6 lg:px-[70px]">
        
        {/* TOP LAYOUT: Left Content (46%) + Right Image (54%) */}
        <div className="flex flex-col lg:flex-row items-start justify-between relative mb-20 lg:mb-[-80px]">
          
          {/* Left Content (46%) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="w-full lg:w-[46%] pt-0 lg:pt-10 relative z-20"
          >
            {/* Top Label */}
            <motion.div variants={fadeIn} className="mb-8 lg:mb-10">
              <h4 className="font-sans text-[14px] uppercase tracking-[0.25em] text-[#6E0F18] font-medium mb-4">
                Our Story
              </h4>
              <div className="w-[70px] h-[1px] bg-[#6E0F18]/40"></div>
            </motion.div>

            {/* Heading */}
            <motion.h2 
              variants={fadeIn}
              className="font-serif text-[42px] lg:text-[76px] leading-[0.95] tracking-tight mb-8 lg:mb-12"
            >
              <span className="block text-black">Crafting Moments.</span>
              <span className="block text-[#6E0F18]">Creating Legacies.</span>
            </motion.h2>

            <motion.div variants={fadeIn} className="w-[70px] h-[1px] bg-[#6E0F18]/40 mb-8 lg:mb-12"></motion.div>

            {/* Paragraphs */}
            <motion.div variants={fadeIn} className="font-sans text-[16px] lg:text-[18px] leading-[2] text-[#2B2B2B] max-w-[520px]">
              <p className="mb-8 lg:mb-10">
                AND Events Management was born from a simple belief – that every celebration is unique and every detail matters. What started as a passion for creating unforgettable experiences has grown into a full-service event management company trusted by clients across Dubai.
              </p>
              <p>
                With creativity at our core and perfection in our process, we transform ideas into extraordinary events that leave lasting impressions.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Image (54%) */}
          <div className="w-full lg:w-[54%] h-[400px] sm:h-[500px] lg:h-[850px] relative mt-16 lg:mt-0 z-10 lg:absolute lg:right-[70px] lg:top-0">
            <motion.div 
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full h-full relative"
              style={{
                clipPath: 'polygon(35% 0, 100% 0, 100% 100%, 0 100%, 0 70%, 8% 52%, 22% 20%)'
              }}
            >
              <img 
                src={ourStoryImage} 
                alt="Luxury Banquet Setup" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
            </motion.div>

            {/* Anniversary Badge */}
            <motion.div 
              initial={{ opacity: 0, rotate: -8 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute left-[-10px] sm:left-[5%] top-[5%] lg:top-[20%] w-[120px] h-[120px] lg:w-[170px] lg:h-[170px] bg-[#6E0F18] rounded-full flex items-center justify-center shadow-2xl z-30"
            >
              <div className="w-[105px] h-[105px] lg:w-[150px] lg:h-[150px] rounded-full border border-white/20 flex flex-col items-center justify-center relative">
                {/* Dots */}
                <div className="absolute left-1 lg:left-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#C8A977] rounded-full"></div>
                <div className="absolute right-1 lg:right-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#C8A977] rounded-full"></div>
                
                <span className="font-sans text-[7px] lg:text-[9px] uppercase tracking-[0.3em] text-white/70 mb-1">
                  Passion
                </span>
                <span className="font-serif text-[32px] lg:text-[42px] text-white leading-none mb-1 mt-1">
                  10+
                </span>
                <span className="font-sans text-[9px] lg:text-[11px] uppercase tracking-[0.2em] text-[#C8A977] mb-1 lg:mb-2">
                  Years
                </span>
                <span className="font-sans text-[7px] lg:text-[9px] uppercase tracking-[0.3em] text-white/70">
                  Perfection
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Glass Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-30 w-full lg:w-[92%] mx-auto rounded-[36px] mt-12 lg:mt-[160px] mb-20 lg:mb-24 flex flex-col lg:flex-row overflow-hidden"
          style={{
            background: 'rgba(255,250,244,.92)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(180,160,130,.15)',
            boxShadow: '0 25px 60px rgba(0,0,0,.08)'
          }}
        >
          {/* 4 Columns (Stacks to 2x2 on tablet) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full h-full">
            <div className="flex flex-col items-center justify-center p-8 lg:p-10 lg:border-r border-b lg:border-b-0 md:border-r border-[#C8A977]/20 relative group min-h-[220px] lg:min-h-[240px]">
              <Lightbulb className="w-[42px] h-[42px] lg:w-[52px] lg:h-[52px] text-[#6E0F18] stroke-[1px] mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h5 className="font-sans text-[12px] lg:text-[13px] uppercase tracking-[0.18em] text-[#6E0F18] font-semibold mb-3 lg:mb-4 text-center">
                Vision Driven
              </h5>
              <p className="font-sans text-[15px] lg:text-[16px] text-[#2B2B2B] text-center leading-relaxed">
                We imagine beyond the ordinary to deliver exceptional experiences.
              </p>
            </div>
            
            <div className="flex flex-col items-center justify-center p-8 lg:p-10 lg:border-r border-b lg:border-b-0 md:border-r-0 lg:border-r border-[#C8A977]/20 relative group min-h-[220px] lg:min-h-[240px]">
              <Users className="w-[42px] h-[42px] lg:w-[52px] lg:h-[52px] text-[#6E0F18] stroke-[1px] mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h5 className="font-sans text-[12px] lg:text-[13px] uppercase tracking-[0.18em] text-[#6E0F18] font-semibold mb-3 lg:mb-4 text-center">
                Client Focused
              </h5>
              <p className="font-sans text-[15px] lg:text-[16px] text-[#2B2B2B] text-center leading-relaxed">
                Your dreams guide us.<br />Your satisfaction drives us.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center p-8 lg:p-10 lg:border-r border-b md:border-b-0 md:border-r border-[#C8A977]/20 relative group min-h-[220px] lg:min-h-[240px]">
              <Gem className="w-[42px] h-[42px] lg:w-[52px] lg:h-[52px] text-[#6E0F18] stroke-[1px] mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h5 className="font-sans text-[12px] lg:text-[13px] uppercase tracking-[0.18em] text-[#6E0F18] font-semibold mb-3 lg:mb-4 text-center">
                Detail Obsessed
              </h5>
              <p className="font-sans text-[15px] lg:text-[16px] text-[#2B2B2B] text-center leading-relaxed">
                From the smallest detail to the grandest design, we perfect everything.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center p-8 lg:p-10 relative group min-h-[220px] lg:min-h-[240px]">
              <Star className="w-[42px] h-[42px] lg:w-[52px] lg:h-[52px] text-[#6E0F18] stroke-[1px] mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h5 className="font-sans text-[12px] lg:text-[13px] uppercase tracking-[0.18em] text-[#6E0F18] font-semibold mb-3 lg:mb-4 text-center">
                Experience Makers
              </h5>
              <p className="font-sans text-[15px] lg:text-[16px] text-[#2B2B2B] text-center leading-relaxed">
                We don&apos;t just plan events, we craft moments that live in memories forever.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Asymmetric Grid */}
        <div className="flex flex-col lg:flex-row gap-[30px] w-full lg:h-[520px]">
          
          {/* Card 1: 40% */}
          <div className="w-full lg:w-[40%] h-[350px] lg:h-full rounded-[24px] overflow-hidden relative group">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src={heroEventImage} 
              alt="Luxury Stage"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700"></div>
          </div>

          {/* Card 2: 25% */}
          <div className="w-full lg:w-[25%] h-[400px] lg:h-full rounded-[24px] overflow-hidden relative group hidden md:block">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src={ourStoryImage} 
              alt="Luxury Dinner Details"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700"></div>
          </div>

          {/* Card 3: 35% Quote Card */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-[35%] h-[350px] lg:h-full bg-gradient-to-br from-[#6E0F18] to-[#4B080E] rounded-[36px] p-10 lg:p-14 relative flex flex-col justify-center"
            style={{
              clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)'
            }}
          >
            {/* Top Right Decorative Arc lines */}
            <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[80%] rounded-full border-[1px] border-white/10 pointer-events-none"></div>
            <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full border-[1px] border-white/5 pointer-events-none"></div>

            <span className="font-serif text-[#C8A977] text-[80px] lg:text-[90px] leading-none absolute top-4 left-6 lg:left-8 opacity-60">
              &ldquo;
            </span>
            
            <h4 className="font-serif text-[24px] lg:text-[32px] leading-[1.4] text-white mt-10 lg:mt-12 mb-8 lg:mb-16 relative z-10 max-w-[90%] lg:max-w-[85%]">
              We believe events are not measured by their size, but by the emotions they create and the stories they inspire.
            </h4>
            
            <div className="mt-auto pt-6 border-t border-white/20">
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-white/70">
                Team And Events Management
              </span>
            </div>
          </motion.div>

        </div>
        
      </div>
    </section>
  );
}
