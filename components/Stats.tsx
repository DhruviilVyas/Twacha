import React from 'react';
import { Users, Stethoscope, Clock, Award } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      id: 1,
      number: "5,000+",
      label: "Happy Patients",
      icon: <Users size={48} />,
      bgColor: "bg-stone-800" // Dark Stone
    },
    {
      id: 2,
      number: "20+",
      label: "Skin Services",
      icon: <Stethoscope size={48} />,
      bgColor: "bg-[#B59459]" // Medium Emerald
    },
    {
      id: 3,
      number: "10+",
      label: "Years Experience",
      icon: <Clock size={48} />,
      bgColor: "bg-stone-800" // Dark Stone
    },
    {
      id: 4,
      number: "100%",
      label: "Care & Safety",
      icon: <Award size={48} />,
      bgColor: "bg-[#B59459]" // Medium Emerald
    }
  ];

  return (
    <section className="bg-[#FAF9F6]  py-10"> {/* Minimal vertical padding to save space */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid Layout: 2 cols on mobile, 4 cols on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className={`${stat.bgColor} rounded-2xl p-6 relative overflow-hidden shadow-lg group hover:-translate-y-1 transition-transform duration-300`}
            >
              {/* Content */}
              <div className="relative z-10 text-white">
                <h3 className="text-3xl lg:text-4xl font-bold mb-1 font-serif">
                  {stat.number}
                </h3>
                <p className="text-white text-sm font-medium uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>

              {/* Faded Background Icon (Like in your reference image) */}
              <div className="absolute -right-2 -bottom-4 text-white opacity-10 transform rotate-12 group-hover:scale-110 transition-transform duration-500">
                {stat.icon}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Stats;