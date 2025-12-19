import React from 'react';
import { ShieldCheck, Scissors, Microscope, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const SpecializedCare = () => {
  const specializedServices = [
    {
      title: "Clinical Dermatology",
      description: "Expert diagnosis for chronic conditions like Vitiligo (Safed Dagh), Psoriasis, Eczema, and Fungal Infections.",
      icon: <ShieldCheck size={32} />,
      link: "#treatments"
    },
    {
      title: "Dermatosurgery",
      description: "Precise removal of Moles (Til), Warts (Masa), Skin Tags, and Cysts using advanced RF Cautery.",
      icon: <Scissors size={32} />,
      link: "#treatments"
    },
    {
      title: "Hair & Scalp Solutions",
      description: "Combating hair fall with medical-grade therapies like PRP (Platelet Rich Plasma) and Meso Therapy.",
      icon: <Microscope size={32} />,
      link: "#treatments"
    }
  ];

  return (
    // Changed py-20 to py-12 to reduce top/bottom space
    <section id="specialized-care" className="bg-[#FAF9F6] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-[#4A332A] mb-3">
            Specialized Medical Care
          </h2>
          <div className="h-1 w-24 bg-[#B59459] mx-auto rounded-full mb-4"></div>
          <p className="text-stone-600 text-sm">
            Expert medical attention for conditions that require a doctor's diagnosis.
          </p>
        </div>

        {/* 3 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specializedServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-[#B59459] relative group top-0 hover:-top-1"
            >
              {/* Icon */}
              <div className="mb-5 inline-block p-3 bg-[#B59459]/10 rounded-lg text-[#B59459] group-hover:bg-[#4A332A] group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-[#4A332A] mb-3">
                {service.title}
              </h3>
              
              <p className="text-stone-600 text-sm mb-6 leading-relaxed min-h-[60px]">
                {service.description}
              </p>
              
              <Link href={"/treatments"} className="inline-flex items-center text-sm font-bold text-[#B59459] group-hover:text-[#4A332A] transition-colors uppercase tracking-wide">
                Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SpecializedCare;