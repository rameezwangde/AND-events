import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, Cake, Heart, Clapperboard, Music, Megaphone, Sparkles, Camera } from 'lucide-react';

const services = [
  { id: 1, title: 'CORPORATE EVENTS', desc: 'Gala Dinners, Product Launches, Conferences, Team Building and more.', icon: CalendarDays, img: 'https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/11/01/1154/SELRS-P1200-Grand-Ballroom-Business-Conference.jpg/SELRS-P1200-Grand-Ballroom-Business-Conference.4x3.jpg', rotate: -3, pinType: 'clip', offsetClass: 'lg:mt-10 lg:mr-[-10px] z-20' },
  { id: 2, title: 'BIRTHDAY / THEME PARTIES', desc: 'From intimate celebrations to grand theme parties, we design magical moments.', icon: Cake, img: 'https://img.freepik.com/premium-photo/birthday-party-with-balloons-banner-that-says-bday_1015384-65431.jpg', rotate: 2, pinType: 'tape', offsetClass: 'lg:mt-8 z-10' },
  { id: 3, title: 'WEDDING CELEBRATIONS', desc: 'End-to-end wedding planning and flawless execution for your beautiful beginning.', icon: Heart, img: 'https://i.pinimg.com/originals/c3/3b/80/c33b8076fdce4f23372ae540744341c5.gif', rotate: -4, pinType: 'pin', offsetClass: 'lg:mt-16 lg:ml-[-10px] z-30' },
  { id: 4, title: 'IN-HOUSE PRODUCTION', desc: 'State-of-the-art in-house production and technical solutions for a seamless experience.', icon: Clapperboard, img: 'https://picsum.photos/seed/production/800/600', rotate: 4, pinType: 'tape', offsetClass: 'lg:mt-[20px] lg:mr-[-15px] z-40' },
  { id: 5, title: 'ENTERTAINMENT & PERFORMERS', desc: 'Dancers, Performers, Bollywood artists, Samba Dancers and Percussionists.', icon: Music, img: 'https://tse4.mm.bing.net/th/id/OIP.yq8FRnkRTxObxDck6TTalgHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3', rotate: -1, pinType: 'clip', offsetClass: 'lg:mt-8 z-20' },
  { id: 6, title: 'EVENTS & ACTIVATIONS', desc: 'Mall Activations, Road Shows, Exhibitions, Supplier Meets, and Annual Days.', icon: Megaphone, img: 'https://www.canvasidea.in/images/Exhibitions.webp', rotate: 3, pinType: 'tape', offsetClass: 'lg:mt-20 lg:ml-[-20px] z-30' },
];

export default function OurServices() {
  return (
    <section className="relative w-full bg-[#F8F3EE] overflow-hidden selection:bg-[#8A1C22] selection:text-white pt-10 pb-8 lg:pt-10 lg:pb-8 px-6 lg:px-10">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-[0.3] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-8">
        
        {/* LEFT COLUMN */}
        <div className="w-full lg:w-[40%] flex flex-col lg:sticky lg:top-[120px]">
          
          <div className="flex items-center gap-4 mb-6">
            <span className="font-sans text-[13px] md:text-[14px] uppercase tracking-[0.2em] font-bold text-[#8A1C22]">
              Our Services
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#8A1C22] opacity-50"></div>
            <div className="flex-1 h-[1px] bg-[#8A1C22]/20"></div>
          </div>

          <h2 className="font-serif text-[48px] md:text-[64px] leading-[1.05] tracking-tight mb-6">
            <span className="block text-[#1B1B1B]">Creating Experiences.</span>
            <span className="block text-[#8A1C22]">Celebrating Together.</span>
          </h2>

          {/* Brush stroke SVG */}
          <div className="w-[140px] h-[12px] mb-10 text-[#8A1C22] opacity-80">
            <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current">
              <path d="M5,15 C40,5 120,5 195,15 C120,10 40,10 5,15 Z" />
            </svg>
          </div>

          <p className="font-sans text-[#666] text-[16px] leading-[1.8] max-w-[420px] mb-12">
            From corporate events to celebrations, theme parties to grand productions – we bring ideas to life with creativity, precision and passion.
            <br /><br />
            Whatever the occasion, we deliver an experience that stays with you forever.
          </p>

          <a href="#services" className="relative flex items-center justify-between w-max gap-8 h-[60px] bg-gradient-to-b from-[#8F1E26] to-[#6F1116] text-white font-sans text-[13px] uppercase tracking-[0.1em] font-semibold px-8 rounded-lg shadow-[0_15px_30px_-10px_rgba(138,28,34,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(138,28,34,0.6)] hover:-translate-y-1 hover:rotate-1 transition-all duration-400 group overflow-hidden">
            <span className="relative z-10">Explore Our Services</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-400" />
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
          </a>

        </div>

        {/* RIGHT COLUMN - Moodboard Collage */}
        <div className="w-full lg:w-[60%] relative lg:pt-[80px]">
          
          {/* Decorative Doodles */}
          <svg className="absolute top-[20%] left-[-5%] w-[80px] h-[80px] text-[#8A1C22] opacity-30 -rotate-12 hidden xl:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10,90 Q50,10 90,90 M80,70 L90,90 L70,90" />
          </svg>
          <svg className="absolute bottom-[20%] right-[-5%] w-[100px] h-[100px] text-[#8A1C22] opacity-20 hidden xl:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
          </svg>
          <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-[#8A1C22] rounded-full opacity-20 hidden xl:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-6 xl:gap-8 relative">
            
            {services.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 60, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: card.rotate }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: idx * 0.1 }}
                whileHover={{ rotate: 0, scale: 1.05, zIndex: 100, y: -10 }}
                className={`relative bg-[#FFFDF9] rounded-[2px] p-4 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_50px_-15px_rgba(138,28,34,0.3)] transition-shadow duration-400 group cursor-pointer ${card.offsetClass}`}
                style={{ 
                  boxShadow: "2px 2px 10px rgba(0,0,0,0.05), inset 0 0 40px rgba(0,0,0,0.02)"
                }}
              >

                {/* Paper details (Tapes, Clips, Pins) */}
                {card.pinType === 'tape' && (
                  <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-[60px] h-[25px] bg-white/60 backdrop-blur-sm border border-black/5 rotate-[-2deg] shadow-sm z-20 group-hover:rotate-[2deg] transition-transform"></div>
                )}
                {card.pinType === 'pin' && (
                  <div className="absolute top-[10px] right-[15px] w-[14px] h-[14px] rounded-full bg-gradient-to-b from-white to-gray-300 shadow-md z-20">
                    <div className="absolute inset-2 rounded-full bg-gray-400"></div>
                  </div>
                )}
                {card.pinType === 'clip' && (
                  <div className="absolute top-[-15px] left-[20px] w-[15px] h-[40px] border-[2px] border-gray-400 rounded-full z-20 rotate-[-10deg]"></div>
                )}

                {/* Card Image Wrapper */}
                <div className="relative mb-6">
                  <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-gray-100">
                    <motion.img 
                      src={card.img} 
                      alt={card.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  {/* Floating Icon */}
                  <div className="absolute bottom-[-16px] left-1/2 -translate-x-1/2 w-10 h-10 bg-[#8A1C22] rounded-full flex items-center justify-center border-[3px] border-[#FFFDF9] shadow-lg group-hover:-translate-y-2 group-hover:scale-110 transition-transform duration-400 z-30">
                    <card.icon className="w-4 h-4 text-white stroke-[2px]" />
                  </div>
                </div>

                {/* Content */}
                <div className="pt-2 pb-4 px-2 text-center">
                  <h4 className="font-sans text-[11px] uppercase tracking-[0.1em] font-bold text-[#8A1C22] mb-2 leading-tight">
                    {card.title}
                  </h4>
                  <p className="font-sans text-[11px] text-[#666] leading-relaxed line-clamp-3">
                    {card.desc}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
