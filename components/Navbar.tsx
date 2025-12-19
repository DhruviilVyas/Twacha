'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Treatments', href: '#specialized-care' },
    { name: 'About', href: 'about' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-[#FAF9F6] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center shrink-0">
        {" "}
        <Link href="/" className="flex items-center gap-3">
          {" "}
        
          <Image
            src="/logo.png"
            alt="Twacha Logo"
            className="h-10 w-10 object-contain rounded-full border border-gray-100 shadow-sm"
     height={30}
                  width={30}
/>
        </Link>{" "}
      </div> <Link href="/" className="flex items-baseline gap-1.5 group">
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
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-stone-600 hover:tetext-[#B59459] font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link href={"https://kivihealth.com/iam/dixit.chaudhari.9bbhbbf5rxsy/bookslot"}>
            <button className="bg-[#4A332A] text-white px-5 py-2 rounded-full hover:text-[#B59459] transition-colors shadow-sm flex items-center gap-2">
              <Phone size={18} />
              <span >Book Appointment</span>
            </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:tetext-[#B59459] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#FAF9F6] border-t border-stone-200 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-stone-600 hover:text-[#B59459] hover:bg-stone-100 rounded-md text-lg font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Link href={"https://kivihealth.com/iam/dixit.chaudhari.9bbhbbf5rxsy/bookslot"}>
            <div className="mt-4">
              <button className="w-full text-[#B59459] text-white px-5 py-3 rounded-md hover:text-[#B59459] transition-colors flex justify-center items-center gap-2">
                <Phone size={18} />
                Book Appointment
              </button>
            </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;