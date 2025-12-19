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
            <h3 className="text-2xl font-serif font-bold text-stone-800 mb-4">
              Twacha<span className="text-emerald-600">Clinic</span>
            </h3>
            <p className="text-stone-600 mb-4 leading-relaxed">
              Advanced dermatology and cosmetology care tailored to your skin's needs. Rejuvenate your glow with our expert treatments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-emerald-600 shadow-sm hover:bg-emerald-600 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-emerald-600 shadow-sm hover:bg-emerald-600 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-emerald-600 shadow-sm hover:bg-emerald-600 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-stone-800 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="#home" className="hover:text-emerald-600 transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-emerald-600 transition-colors">About Us</Link></li>
              <li><Link href="#treatments" className="hover:text-emerald-600 transition-colors">Treatments</Link></li>
              <li><Link href="#doctors" className="hover:text-emerald-600 transition-colors">Our Doctors</Link></li>
              <li><Link href="#contact" className="hover:text-emerald-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Treatments */}
          <div>
            <h4 className="text-lg font-semibold text-stone-800 mb-6">Treatments</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-emerald-600 transition-colors">Laser Hair Removal</Link></li>
              <li><Link href="#" className="hover:text-emerald-600 transition-colors">Acne Treatment</Link></li>
              <li><Link href="#" className="hover:text-emerald-600 transition-colors">Chemical Peels</Link></li>
              <li><Link href="#" className="hover:text-emerald-600 transition-colors">Anti-Aging</Link></li>
              <li><Link href="#" className="hover:text-emerald-600 transition-colors">Skin Polishing</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-stone-800 mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-emerald-600 mt-1 flex-shrink-0" size={20} />
                <span>123 Wellness Ave, Green Park,<br />New Delhi, India 110016</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-emerald-600 flex-shrink-0" size={20} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-emerald-600 flex-shrink-0" size={20} />
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