import { motion } from 'framer-motion';

const topRowPartners = [
  { name: 'FOUR SEASONS', type: 'Hospitality Partner' },
  { name: 'VOGUE', type: 'Media Partner' },
  { name: 'EMIRATES', type: 'Travel Partner' },
  { name: 'CARTIER', type: 'Luxury Partner' },
];

const bottomRowPartners = [
  { name: 'RITZ-CARLTON', type: 'Hospitality Partner' },
  { name: 'MOËT & CHANDON', type: 'Beverage Partner' },
  { name: 'BVLGARI', type: 'Jewelry Partner' },
];

function HexagonTile({ partner }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05, y: -10 }}
      className="relative w-[160px] h-[140px] md:w-[220px] md:h-[190px] flex flex-col items-center justify-center bg-[#FDFBF7] group cursor-pointer transition-transform duration-500"
      style={{ 
        clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
        backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')"
      }}
    >
      {/* Inner Bevel Highlight */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(circle at center, rgba(138,28,34,0.08) 0%, transparent 70%)' }}
      ></div>

      <h4 className="font-serif text-[14px] md:text-[20px] font-bold text-[#1B1B1B] text-center px-4 leading-tight group-hover:text-[#8A1C22] transition-colors duration-400">
        {partner.name}
      </h4>
      <p className="font-sans text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-[#666] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
        {partner.type}
      </p>
    </motion.div>
  );
}

export default function Partners() {
  return (
    <section className="relative w-full bg-[#FBF9F6] pt-24 lg:pt-36 pb-32 lg:pb-48 overflow-hidden selection:bg-[#8A1C22] selection:text-white">
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Heading */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <div className="w-[40px] h-[40px] mb-6 text-[#8A1C22] opacity-80">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
              <path d="M12 4v16m-8-8h16" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <h2 className="font-sans text-[32px] md:text-[48px] font-bold text-[#1B1B1B] tracking-tight uppercase leading-none mb-4">
            Our <span className="text-[#8A1C22]">Partners</span>
          </h2>
          <p className="font-serif text-[#666] text-[18px] md:text-[22px] italic">
            Collaborating with visionaries. Building a stronger tomorrow.
          </p>
        </div>

        {/* 3D Interlocking Hexagon Structure */}
        <div className="relative w-full flex flex-col items-center justify-center">
          
          {/* Backlight Glow behind the whole structure */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[150px] bg-[#8A1C22] blur-[100px] opacity-15 rounded-[50%] pointer-events-none"></div>

          {/* Row 1 */}
          <div className="relative z-20 flex justify-center gap-1 md:gap-4 filter drop-shadow-[0_15px_30px_rgba(138,28,34,0.1)] hover:drop-shadow-[0_20px_40px_rgba(138,28,34,0.2)] transition-all duration-700">
            {topRowPartners.map((partner, idx) => (
              <HexagonTile key={idx} partner={partner} />
            ))}
          </div>

          {/* Row 2 (Pulled up to interlock) */}
          <div className="relative z-30 flex justify-center gap-1 md:gap-4 mt-[-35px] md:mt-[-50px] filter drop-shadow-[0_20px_40px_rgba(138,28,34,0.15)] hover:drop-shadow-[0_30px_50px_rgba(138,28,34,0.25)] transition-all duration-700">
            {bottomRowPartners.map((partner, idx) => (
              <HexagonTile key={idx} partner={partner} />
            ))}
          </div>

          {/* 3D Stone Podium/Shelf */}
          <div className="w-[110%] max-w-[1000px] h-[50px] md:h-[80px] bg-gradient-to-b from-[#2B0408] to-[#1A0204] rounded-[50%] mt-[-20px] md:mt-[-30px] relative z-10 shadow-[0_30px_60px_rgba(0,0,0,0.4)] flex items-start justify-center">
            {/* Edge reflection */}
            <div className="w-[80%] h-[2px] bg-gradient-to-r from-transparent via-[#F8F3EE] to-transparent opacity-30 mt-1"></div>
            {/* Shelf bottom depth bevel */}
            <div className="absolute bottom-2 w-[70%] h-[4px] bg-black/40 rounded-[50%] blur-[2px]"></div>
          </div>

        </div>

      </div>

    </section>
  );
}
