import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-100 pt-16 pb-8 border-t border-stone-200 text-stone-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Brand Info */}
          <div>
           <Link href="/" className="flex items-baseline gap-1.5 group">
  {/* 'Twacha' in Dark Coffee Brown with the decorative font */}
  <span 
    className="text-3xl font-bold text-[#4A332A]" 
    style={{ fontFamily: "'Cinzel', serif" }} // Inline style to ensure the font applies
  >
    Twacha
  </span>

  {/* 'Skin Clinic' in Muted Gold with a clean font */}
  <span 
    className="text-lg font-medium text-[#B59459] uppercase tracking-wider"
    style={{ fontFamily: "'Lato', sans-serif" }}
  >
    Skin Clinic
  </span>
</Link>
            <p className="text-stone-600 mb-4 leading-relaxed">
              Advanced dermatology and cosmetology care tailored to your skin's needs. Rejuvenate your glow with our expert treatments.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#B59459] shadow-sm hover:bg-[#B59459] hover:text-white transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#B59459] shadow-sm hover:bg-[#B59459] hover:text-white transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#B59459] shadow-sm hover:bg-[#B59459] hover:text-white transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-stone-800 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="#home" className="hover:text-[#B59459] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#B59459] transition-colors">About Us</Link></li>
              <li><Link href="/treatments" className="hover:text-[#B59459] transition-colors">Treatments</Link></li>
              <li><Link href="#doctors" className="hover:text-[#B59459] transition-colors">Our Doctors</Link></li>
              <li><Link href="#contact" className="hover:text-[#B59459] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Treatments */}
          <div>
            <h4 className="text-lg font-semibold text-stone-800 mb-6">Treatments</h4>
            <ul className="space-y-3">
              <li><Link href="/treatments" className="hover:text-[#B59459] transition-colors">Laser Hair Removal</Link></li>
              <li><Link href="/treatments" className="hover:text-[#B59459] transition-colors">Acne Treatment</Link></li>
              <li><Link href="/treatments" className="hover:text-[#B59459] transition-colors">Chemical Peels</Link></li>
              <li><Link href="/treatments" className="hover:text-[#B59459] transition-colors">Anti-Aging</Link></li>
              <li><Link href="/treatments" className="hover:text-[#B59459] transition-colors">Skin Polishing</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-stone-800 mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#B59459] mt-1 flex-shrink-0" size={20} />
                <span>Avadh complex,<br />vastral, India </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#B59459] flex-shrink-0" size={20} />
                <span>+91 9104 77 5531


                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#B59459] flex-shrink-0" size={20} />
                <span>contact@twachaclinic.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-200 pt-8 text-center text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} Twacha Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;