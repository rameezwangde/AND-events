import { motion } from 'framer-motion';

const testimonials1 = [
  { quote: "The most flawless corporate gala we've ever hosted. Every detail was executed with absolute precision.", author: "Sarah Jenkins", role: "Marketing Director, Nexus Corp" },
  { quote: "AND Events didn't just plan our wedding; they orchestrated a masterpiece that our families will talk about forever.", author: "Michael & Emily", role: "Wedding Clients" },
  { quote: "From the initial moodboard to the final curtain call, their creativity and dedication were unmatched.", author: "David Al Fayed", role: "CEO, Horizon Real Estate" },
  { quote: "An absolute pleasure to work with. They took our crazy ideas and turned them into a stunning visual reality.", author: "Jessica Thorne", role: "Brand Manager, Vogue" },
];

const testimonials2 = [
  { quote: "Their technical production team is simply the best in Dubai. Flawless sound, lighting, and stage management.", author: "Omar Hassan", role: "Event Producer" },
  { quote: "We wanted a birthday party that felt like a movie set, and they delivered exactly that. Pure magic.", author: "The Al Maktoum Family", role: "Private Clients" },
  { quote: "Professional, visionary, and incredibly calm under pressure. They are our go-to agency for all regional activations.", author: "Elena Rostova", role: "Head of Comms, TechFlow" },
  { quote: "Every floral arrangement, every lighting cue, every napkin fold was perfect. True perfectionists.", author: "Sophie Laurent", role: "Creative Director" },
];

export default function Testimonials() {
  return (
    <section className="relative w-full bg-[#FBF9F6] border-y border-[#8A1C22]/10 overflow-hidden selection:bg-[#8A1C22] selection:text-white py-24 lg:py-40">
      
      {/* Custom Styles for Infinite Marquee */}
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marqueeLeft 80s linear infinite;
        }
        .animate-marquee-right {
          animation: marqueeRight 80s linear infinite;
        }
        .pause-on-hover:hover .animate-marquee-left,
        .pause-on-hover:hover .animate-marquee-right {
          animation-play-state: paused;
        }
      `}</style>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-[0.4] pointer-events-none"></div>
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#8A1C22] blur-[150px] rounded-full opacity-[0.03] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#C8A56A] blur-[150px] rounded-full opacity-[0.05] pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 relative z-10 mb-20 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-[30px] h-[1px] bg-[#8A1C22]/30"></div>
          <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-[#8A1C22]">
            Client Stories
          </span>
          <div className="w-[30px] h-[1px] bg-[#8A1C22]/30"></div>
        </div>

        <h2 className="font-serif text-[42px] md:text-[56px] text-[#1B1B1B] leading-tight">
          Words of Praise
        </h2>
      </div>

      <div className="w-full relative z-10 flex flex-col gap-8 pause-on-hover">
        
        {/* Row 1 (Moves Left) */}
        <div className="w-full overflow-hidden flex">
          <div className="flex w-max animate-marquee-left items-center">
            {[...testimonials1, ...testimonials1].map((item, idx) => (
              <div key={`row1-${idx}`} className="w-[350px] md:w-[500px] mx-4 md:mx-6 flex-shrink-0 whitespace-normal group bg-[#2B0408] p-8 md:p-10 shadow-[0_10px_40px_-10px_rgba(43,4,8,0.3)] hover:-translate-y-2 transition-transform duration-500 rounded-sm">
                <div className="flex flex-col">
                  <div className="text-[50px] md:text-[60px] text-[#C8A56A] font-serif leading-none h-[30px] md:h-[40px] opacity-40 group-hover:opacity-100 transition-opacity duration-500">"</div>
                  <p className="text-[20px] md:text-[24px] text-[#F8F3EE] font-serif leading-[1.5] mb-8">
                    {item.quote}
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-[20px] h-[1px] bg-[#C8A56A]/50 group-hover:w-[40px] transition-all duration-500"></div>
                    <div>
                      <h6 className="text-[11px] uppercase tracking-[0.2em] font-sans font-bold text-[#C8A56A] mb-1">{item.author}</h6>
                      <p className="text-[12px] font-sans text-white/50">{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 (Moves Right) */}
        <div className="w-full overflow-hidden flex">
          <div className="flex w-max animate-marquee-right items-center">
            {[...testimonials2, ...testimonials2].map((item, idx) => (
              <div key={`row2-${idx}`} className="w-[350px] md:w-[500px] mx-4 md:mx-6 flex-shrink-0 whitespace-normal group bg-[#2B0408] p-8 md:p-10 shadow-[0_10px_40px_-10px_rgba(43,4,8,0.3)] hover:-translate-y-2 transition-transform duration-500 rounded-sm">
                <div className="flex flex-col">
                  <div className="text-[50px] md:text-[60px] text-[#C8A56A] font-serif leading-none h-[30px] md:h-[40px] opacity-40 group-hover:opacity-100 transition-opacity duration-500">"</div>
                  <p className="text-[20px] md:text-[24px] text-[#F8F3EE] font-serif leading-[1.5] mb-8">
                    {item.quote}
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-[20px] h-[1px] bg-[#C8A56A]/50 group-hover:w-[40px] transition-all duration-500"></div>
                    <div>
                      <h6 className="text-[11px] uppercase tracking-[0.2em] font-sans font-bold text-[#C8A56A] mb-1">{item.author}</h6>
                      <p className="text-[12px] font-sans text-white/50">{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
