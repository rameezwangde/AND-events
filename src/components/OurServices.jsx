import { motion } from 'framer-motion';
import { 
  ClipboardList, 
  Lightbulb, 
  Settings, 
  MapPin, 
  Armchair, 
  Users, 
  Mic, 
  Camera,
  Gem,
  ShieldCheck,
  Heart,
  Star
} from 'lucide-react';
import ourStoryImage from '../assets/our-story-image.png';

const services = [
  { icon: ClipboardList, title: "EVENT STRATEGY & PLANNING", desc: "We craft strategic plans tailored to your goals, audience and occasion." },
  { icon: Lightbulb, title: "CREATIVE CONCEPT & DESIGN", desc: "Original concepts and stunning designs that turn your ideas into unforgettable experiences." },
  { icon: Settings, title: "PRODUCTION & TECHNICAL", desc: "State-of-the-art production and technical solutions for seamless event delivery." },
  { icon: MapPin, title: "VENUE SOURCING & MANAGEMENT", desc: "We find the perfect venue and manage every detail to suit your vision and requirements." },
  { icon: Armchair, title: "EVENT STYLING & DÉCOR", desc: "Thoughtful styling and exquisite décor that elevate the ambience and experience." },
  { icon: Users, title: "GUEST EXPERIENCE & HOSPITALITY", desc: "Exceptional hospitality and guest experiences that leave lasting impressions." },
  { icon: Mic, title: "ENTERTAINMENT & TALENT", desc: "Curated entertainment and talent that engage, inspire and captivate your guests." },
  { icon: Camera, title: "PHOTOGRAPHY & VIDEOGRAPHY", desc: "Capturing every moment with creativity and precision to tell your story beautifully." },
];

const promisePillars = [
  { icon: Gem, title: "EXPERIENCE", desc: "10+ years of expertise in delivering world-class events across Dubai." },
  { icon: Users, title: "CREATIVITY", desc: "Innovative ideas and bespoke solutions tailored to you." },
  { icon: ShieldCheck, title: "RELIABILITY", desc: "Trusted by clients for seamless execution every time." },
  { icon: Heart, title: "PASSION", desc: "We don't just manage events, we create unforgettable memories." },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function OurServices() {
  return (
    <section 
      className="relative w-full overflow-hidden selection:bg-[#6E0F18] selection:text-white"
      style={{
        background: 'radial-gradient(circle at top left, #FBF8F3 0%, #F7F3EC 60%, #F1E8DB 100%)'
      }}
    >
      <div className="max-w-[1600px] mx-auto pt-[80px] lg:pt-[120px] pb-[80px] lg:pb-[120px] px-6 lg:px-[70px]">
        
        {/* Top Layout: Arched Image (Left) + Vertical Services List (Right) */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-[60px] lg:gap-[100px] mb-20 lg:mb-32">
          
          {/* Left Column - Arched Image (Approx 40%) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-[40%] relative flex justify-center lg:justify-start"
          >
            {/* Decorative dotted lines and star */}
            <div className="absolute left-[-20px] lg:left-[-40px] top-1/2 -translate-y-1/2 flex gap-2 pointer-events-none hidden md:flex opacity-60">
              <div className="flex flex-col gap-2">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-[#C8A977]"></div>
                ))}
              </div>
              <div className="flex flex-col gap-2 mt-8">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-[#C8A977]"></div>
                ))}
              </div>
              <Star className="absolute top-[-30px] left-2 w-6 h-6 text-[#C8A977] stroke-[1px]" />
            </div>

            {/* Arched Image */}
            <div 
              className="w-full max-w-[450px] lg:max-w-none h-[600px] lg:h-[850px] overflow-hidden shadow-2xl relative"
              style={{
                borderTopLeftRadius: '250px',
                borderTopRightRadius: '250px',
                borderBottomLeftRadius: '12px',
                borderBottomRightRadius: '12px',
              }}
            >
              <img 
                src={ourStoryImage} 
                alt="Luxury Event Setup" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Right Column - Vertical Services List (Approx 60%) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="w-full lg:w-[60%] flex flex-col"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="flex items-center gap-6 lg:gap-8 py-6 lg:py-7 border-b border-[rgba(90,60,40,.12)] group hover:bg-[#FBF8F3]/50 transition-colors px-2 lg:px-4 rounded-xl"
              >
                {/* Circular Icon */}
                <div className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] rounded-full border border-[#6E0F18]/20 flex items-center justify-center shrink-0 group-hover:bg-[#6E0F18] transition-colors duration-400">
                  <service.icon className="w-5 h-5 lg:w-6 lg:h-6 text-[#6E0F18] group-hover:text-white transition-colors duration-400 stroke-[1.5px]" />
                </div>
                
                {/* Text Content */}
                <div className="flex-1 pr-4">
                  <h5 className="font-sans text-[13px] lg:text-[14px] uppercase tracking-[0.12em] text-[#6E0F18] font-bold mb-1 lg:mb-2 group-hover:translate-x-1 transition-transform duration-300">
                    {service.title}
                  </h5>
                  <p className="font-sans text-[13px] lg:text-[14px] text-[#2B2B2B] leading-relaxed max-w-[90%]">
                    {service.desc}
                  </p>
                </div>

                {/* Large Number */}
                <div className="flex items-center gap-3 lg:gap-4 shrink-0">
                  <span className="font-serif text-[28px] lg:text-[34px] text-[#6E0F18] opacity-80 group-hover:opacity-100 transition-opacity">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="w-[15px] lg:w-[20px] h-[1px] bg-[#6E0F18]/30 group-hover:bg-[#6E0F18] transition-colors"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Block: The And Promise */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full bg-gradient-to-r from-[#4B080E] to-[#6E0F18] rounded-[24px] lg:rounded-[36px] overflow-hidden flex flex-col lg:flex-row p-8 lg:p-14 relative shadow-2xl"
        >
          {/* Subtle Decorative Star */}
          <Star className="absolute top-8 right-8 w-8 h-8 text-[#C8A977]/20 stroke-[1px]" />
          <div className="absolute bottom-[-20%] right-[-5%] w-[40%] h-[150%] rounded-full border border-white/5 pointer-events-none"></div>

          {/* Left Area (approx 35%) */}
          <div className="w-full lg:w-[35%] flex flex-col pr-0 lg:pr-12 mb-12 lg:mb-0 relative z-10">
            <span className="font-sans text-[10px] lg:text-[11px] uppercase tracking-[0.2em] text-[#C8A977] font-bold mb-6 block">
              The And Promise
            </span>
            <h3 className="font-serif text-[32px] lg:text-[40px] xl:text-[46px] text-white leading-[1.1] mb-8">
              More Than Events.<br />We Create Impact.
            </h3>
            <div className="w-[50px] h-[1px] bg-[#C8A977]/60 mb-8"></div>
            <p className="font-sans text-white/70 text-[14px] leading-relaxed max-w-[320px]">
              Our commitment is to deliver excellence at every step, ensuring your event is seamless, meaningful and unforgettable.
            </p>
          </div>

          {/* Right Area (approx 65%) - 4 Pillars */}
          <div className="w-full lg:w-[65%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 relative z-10">
            {promisePillars.map((pillar, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center text-center p-6 lg:p-8 relative group ${
                  index !== promisePillars.length - 1 ? 'xl:border-r border-white/10' : ''
                } ${
                  index % 2 === 0 ? 'md:border-r border-white/10 xl:border-r' : ''
                }`}
              >
                <div className="w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] rounded-full border border-white/20 flex items-center justify-center mb-6 lg:mb-8 group-hover:bg-white/5 transition-colors duration-300">
                  <pillar.icon className="w-6 h-6 lg:w-7 lg:h-7 text-white stroke-[1px] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h5 className="font-sans text-[12px] lg:text-[13px] uppercase tracking-[0.15em] text-white font-bold mb-4">
                  {pillar.title}
                </h5>
                <p className="font-sans text-[13px] text-white/60 leading-relaxed max-w-[200px]">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
