'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight,ArrowLeft, ChevronRight, Dot } from 'lucide-react';
import Image from 'next/image';
export default function TreatmentsPage() {
  
  // Data derived from your brochure images
  const categories = [
    {
      title: "Clinical Dermatology",
      description: "Medical treatments for skin diseases.",
      items: [
        {
          problem: "Acne & Pimples",
          solution: "Medical management combined with Chemical Peels to reduce active acne and prevent scarring.",
          tags: ["Teenage Acne", "Hormonal", "Marks"]
        },
        {
          problem: "Pigmentation & Dark Spots",
          solution: "Targeted treatments for Melasma, Sun Spots, and uneven skin tone using Medicated Creams and Peels.",
          tags: ["Melasma", "Sun Damage", "Glow"]
        },
        {
          problem: "Vitiligo (Safed Dagh)",
          solution: "Advanced Photo Therapy and medical management to restore skin pigment.",
          tags: ["Chronic", "Medical"]
        },
        {
          problem: "Fungal Infections",
          solution: "Comprehensive antifungal therapy for ringworm (Dadar) and other stubborn infections.",
          tags: ["Itching", "Infection"]
        }
      ]
    },
    {
      title: "Aesthetic Procedures",
      description: "Advanced cosmetic treatments for glowing skin.",
      items: [
        {
          problem: "Unwanted Hair",
          solution: "Triple Wavelength Diode Laser Hair Removal. Painless, safe, and effective for Indian skin.",
          tags: ["Laser", "Permanent Reduction"]
        },
        {
          problem: "Dull Skin & Tanning",
          solution: "Hydra Facial and Carbon Peels to exfoliate dead skin and provide instant deep hydration.",
          tags: ["Party Glow", "Hydration"]
        },
        {
          problem: "Acne Scars & Pores",
          solution: "Microneedling (Dermapen) and CO2 Fractional Laser to resurface skin texture.",
          tags: ["Resurfacing", "Smooth Skin"]
        },
        {
          problem: "Aging (Wrinkles)",
          solution: "Anti-aging treatments including Botox, Fillers, and Skin Tightening therapies.",
          tags: ["Anti-Aging", "Lift"]
        }
      ]
    },
    {
      title: "Hair & Scalp",
      description: "Solutions for hair fall and thinning.",
      items: [
        {
          problem: "Hair Fall & Thinning",
          solution: "PRP (Platelet Rich Plasma) Therapy using your own growth factors to stimulate hair follicles.",
          tags: ["Natural", "Regrowth"]
        },
        {
          problem: "Dandruff & Scalp Issues",
          solution: "Medical shampoos and Meso Therapy to clean the scalp and strengthen roots.",
          tags: ["Scalp Health", "Hygiene"]
        }
      ]
    }
  ];

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
      {/* 1. Minimalist Header */}
      <header className="border-b border-gray-200 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-4">Twacha Skin Clinic</p>
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6">
            Skin Solutions & Treatments
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            A comprehensive guide to common skin concerns and our scientifically proven medical solutions.
          </p>
        </div>
      </header>

      {/* 2. Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        
        {/* Loop through Categories */}
        {categories.map((category, catIndex) => (
          <div key={catIndex} className="mb-24 last:mb-0">
            
            {/* Category Title */}
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black pb-4 mb-10">
              <div>
                <h2 className="text-3xl font-bold mb-1">{category.title}</h2>
                <p className="text-gray-500">{category.description}</p>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mt-4 md:mt-0">
                0{catIndex + 1} / Section
              </span>
            </div>

            {/* Grid of Treatments */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {category.items.map((item, index) => (
                <div key={index} className="group cursor-pointer">
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.tags.map((tag, tIndex) => (
                      <span key={tIndex} className="text-[10px] font-bold uppercase tracking-wider border border-gray-200 px-2 py-1 rounded-full text-gray-500 group-hover:border-black group-hover:text-black transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Problem Title */}
                  <h3 className="text-2xl font-serif font-medium mb-3 group-hover:underline decoration-1 underline-offset-4">
                    {item.problem}
                  </h3>

                  {/* Solution Text */}
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {item.solution}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center text-sm font-bold gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                    <span className="uppercase tracking-widest">View Treatment</span>
                    <ArrowRight size={16} />
                  </div>

                </div>
              ))}
            </div>

          </div>
        ))}

        {/* 3. CTA Section (Bottom) */}
        <div className="mt-20 bg-gray-50 border border-gray-100 p-12 text-center rounded-sm">
          <h3 className="text-2xl font-serif font-medium mb-4">Not sure what you need?</h3>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            Skin conditions can be complex. Book a consultation with Dr. Dixit for a personalized diagnosis.
          </p>
          <Link 
            href="/appointment" 
            className="inline-block bg-black text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-all"
          >
            Book Consultation
          </Link>
        </div>

      </main>

    </div>
  );
}