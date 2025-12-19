import React from 'react';
import { Clock, MapPin, Phone, Star, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  // Theme Colors (Gold/Bronze based on your logo)
  const accentColor = "text-[#B59459]";
  const bgAccentLight = "bg-[#B59459]/10"; // Added opacity /10 for soft background
  const bgAccentDark = "bg-[#B59459] hover:bg-[#967a45]";
  const borderColor = "border-[#B59459]";
  const tagBg = "bg-[#B59459]/10 text-[#B59459]";
  const dotsColor = "text-[#B59459]/30"; 

  return (
    // 👇 FIXED: Reduced 'lg:pt-48' to 'lg:pt-28' to remove the big gap
    <section id="home" className="relative bg-[#FAF9F6] pt-24 pb-16 lg:pt-28 lg:pb-24 overflow-hidden">
      
      {/* Background Decor Element */}
      <div className={`absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full ${bgAccentLight} blur-3xl`}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left Side: Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${tagBg} text-sm font-semibold mb-6`}>
              <Star size={14} fill="currentColor" />
              <span>Best Skin Clinic in Vastral</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-[#4A332A] leading-tight mb-6">
              Reveal Your True <br />
              <span className={accentColor}>Radiance & Glow</span>
            </h1>
            
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Advanced clinical dermatology and cosmetology by <span className="font-semibold text-stone-800">Dr. Dixit Chaudhari (MD Skin & V.D.)</span>. 
              Specializing in Laser Hair Removal, PRP Therapy, and advanced skin rejuvenation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Link href="https://kivihealth.com/iam/dixit.chaudhari.9bbhbbf5rxsy/bookslot" className={`${bgAccentDark} text-white px-8 py-4 rounded-full font-medium transition-shadow shadow-lg hover:shadow-xl flex items-center justify-center gap-2`}>
                <Phone size={20} />
                <span>Book Appointment</span>
              </Link>
              <Link href="/treatments" className="bg-white text-stone-700 border border-stone-200 px-8 py-4 rounded-full font-medium hover:bg-stone-50 transition-colors flex items-center justify-center gap-2">
                View Treatments
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Quick Info Strip */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-stone-500 border-t border-stone-200 pt-6">
              <div className="flex items-center gap-2">
                <Clock className={accentColor} size={18} />
                <span>4:00 PM - 8:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className={accentColor} size={18} />
                <span>Avadh Pride Complex, Vastral</span>
              </div>
            </div>
          </div>

          {/* Right Side: Visuals / Doctor Profile Card */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <div className="bg-stone-200 h-[400px] w-full flex items-center justify-center text-stone-400">
                <Image
                  src="/hero.png"
                  alt="Dr. Dixit Chaudhari"
                  className="object-cover h-full w-full"
                  height={400}
                  width={400}
                  priority 
                />
              </div>
              
              <div className={`absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border-l-4 ${borderColor} max-w-xs`}>
                <p className="text-xs font-bold text-stone-400 uppercase mb-1">Available Services</p>
                <div className="flex flex-wrap gap-2">
                  <span className={`px-2 py-1 ${tagBg} text-xs rounded-md font-medium`}>Hydra Facial</span>
                  <span className={`px-2 py-1 ${tagBg} text-xs rounded-md font-medium`}>Laser</span>
                  <span className={`px-2 py-1 ${tagBg} text-xs rounded-md font-medium`}>PRP</span>
                </div>
              </div>
            </div>

            <div className={`absolute -z-10 top-10 -right-10 ${dotsColor}`}>
              <svg width="100" height="100" fill="currentColor">
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="2" />
                </pattern>
                <rect width="100" height="100" fill="url(#dots)" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;