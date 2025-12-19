import React from 'react';
import { Phone, Info, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const FloatingCTA = () => {
  return (
    <section className="py-12 bg-[#FAF9F6] flex justify-center">
      
      {/* Premium Floating Dock */}
      <div className="bg-stone-900 p-2 pr-3 rounded-full shadow-2xl shadow-stone-400/50 flex items-center gap-2 max-w-fit border border-stone-700 transform hover:scale-105 transition-transform duration-300">
        
        {/* Button 1: About Us (Subtle) */}
        <Link 
          href="/about" 
          className="flex items-center gap-2 px-6 py-3 rounded-full text-stone-300 hover:text-white hover:bg-stone-800 transition-all font-medium"
        >
          <Info size={18} />
          <span>About Clinic</span>
        </Link>

        {/* Divider */}
        <div className="w-px h-6 bg-stone-700"></div>

        {/* Button 2: Contact Us (Gold & Bold) */}
        <Link 
          href="/appointment" 
          className="flex items-center gap-2 bg-[#B59459] text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-amber-900/20 hover:shadow-amber-500/30 transition-all"
        >
          <Phone size={18} className="fill-current" />
          <span>Book Now</span>
          <ArrowRight size={16} />
        </Link>

      </div>

    </section>
  );
};

export default FloatingCTA;