'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award,ArrowLeft, ShieldCheck, HeartPulse, GraduationCap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
        <header className="bg-white border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
          
          <Link href="/" className="flex items-center gap-3 group">
             <Image
               src="/logo.png"
               alt="Twacha Logo"
               className="h-9 w-9 object-contain rounded-full border border-stone-100"
               height={36}
               width={36}
             />
             <div className="flex flex-col">
                <span className="text-lg font-bold text-[#4A332A] leading-none" style={{ fontFamily: "'Cinzel', serif" }}>
                  Twacha
                </span>
                <span className="text-[10px] font-bold text-[#B59459] uppercase tracking-widest leading-none mt-0.5">
                  Skin Clinic
                </span>
             </div>
          </Link>

          <Link href="/" className="text-sm font-medium text-stone-500 hover:text-[#B59459] flex items-center gap-1 transition-colors">
            <ArrowLeft size={16} /> <span className="hidden sm:inline">Back to Home</span>
          </Link>
        </div>
      </header>
      {/* 1. HERO SECTION (Text Only - Editorial Style) */}
      <section className="pt-24 pb-16 px-4 border-b border-gray-100">
       
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-6">
            Since 2023 • Vastral, Ahmedabad
          </p>
          <h1 className="text-4xl md:text-7xl font-serif font-medium mb-8 text-stone-900">
            Science-Backed <br /> 
            <span className="italic text-gray-500">Skin Care.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Twacha Skin Clinic bridges the gap between clinical dermatology and modern aesthetics. We don&apos;t just treat symptoms; we diagnose the root cause.
          </p>
        </div>
      </section>

      {/* 2. MEET THE DOCTOR SECTION */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            
            {/* Left: Doctor Image */}
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-[4/5] relative bg-gray-100 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
                 {/* Replace with Dr. Dixit's actual photo */}
                 <Image
                   src="/hero.png" 
                   alt="Dr. Dixit Chaudhari"
                   fill
                   className="object-cover"
                 />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 border border-gray-100 shadow-xl hidden md:block">
                 <p className="font-serif text-3xl font-bold">10k+</p>
                 <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">Patients Treated</p>
              </div>
            </div>

            {/* Right: Bio & Qualifications */}
            <div className="w-full md:w-1/2">
              <div className="inline-flex items-center gap-2 border border-black rounded-full px-4 py-1.5 mb-6">
                <Award size={14} />
                <span className="text-xs font-bold uppercase tracking-wider">Chief Dermatologist</span>
              </div>
              
              <h2 className="text-4xl font-serif font-medium mb-6">
                Dr. Dixit Chaudhari
              </h2>
              <p className="text-lg font-medium text-gray-900 mb-2">
                MD Skin & V.D. | Consultant Dermatologist & Cosmetologist
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Dr. Dixit is a specialist in clinical dermatology with a focus on evidence-based treatments. Unlike salons that offer superficial fixes, Dr. Dixit believes in a medical approach to skin health. His expertise covers chronic conditions like Psoriasis and Vitiligo, as well as advanced aesthetic procedures like Lasers and Anti-Aging therapies.
              </p>

              {/* Education/Values List */}
              <div className="space-y-4 border-t border-gray-100 pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-50 p-2 rounded-full"><GraduationCap size={20}/></div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wide">Medical Qualification</h4>
                    <p className="text-sm text-gray-500">MD in Skin & Venereal Diseases (V.D.)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gray-50 p-2 rounded-full"><ShieldCheck size={20}/></div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wide">Patient Safety</h4>
                    <p className="text-sm text-gray-500">Strict sterilization & FDA-approved technology.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR PHILOSOPHY (The "Why Us" Grid) */}
      <section className="bg-stone-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white p-10 border border-gray-100 hover:border-black transition-colors duration-300">
              <span className="text-4xl font-serif mb-4 block text-gray-300">01.</span>
              <h3 className="text-xl font-bold mb-3">Diagnosis First</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We don&apos;t guess. We diagnose. Every treatment plan starts with a thorough analysis of your skin type and medical history.
              </p>
            </div>

            <div className="bg-white p-10 border border-gray-100 hover:border-black transition-colors duration-300">
              <span className="text-4xl font-serif mb-4 block text-gray-300">02.</span>
              <h3 className="text-xl font-bold mb-3">Honest Counseling</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We believe in setting realistic expectations (&quot;Margdarshan&quot;). No false promises, just achievable, sustainable results.
              </p>
            </div>

            <div className="bg-white p-10 border border-gray-100 hover:border-black transition-colors duration-300">
              <span className="text-4xl font-serif mb-4 block text-gray-300">03.</span>
              <h3 className="text-xl font-bold mb-3">Advanced Tech</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We invest in the best technology, from Triple Wavelength Diode Lasers to advanced RF Cautery machines.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CLINIC OVERVIEW (Text & CTA) */}
      <section className="py-24 px-4 text-center">
        <h2 className="text-3xl font-serif font-medium mb-6">Visit Our Facility</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Located in Avadh Pride Complex, Vastral, our clinic offers a private, hygienic, and comfortable environment for all your dermatological needs.
        </p>
        <Link 
          href="/appointment" 
          className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-stone-800 transition-colors"
        >
          Book Consultation <HeartPulse size={16} />
        </Link>
      </section>

    </div>
  );
}