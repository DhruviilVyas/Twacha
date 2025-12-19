import React from 'react';
import { UserCheck, ShieldCheck, Sparkles } from 'lucide-react';

const WhyChooseUs = () => {
  const qas = [
    {
      id: 1,
      question: "Why consult an M.D. Dermatologist?",
      answer: "Medical diagnosis is key. Dr. Dixit (MD Skin & V.D.) treats the root cause of acne and hair loss, unlike salons that offer temporary fixes.",
      icon: <UserCheck size={28} />,
    },
    {
      id: 2,
      question: "Are the treatments safe?",
      answer: "Yes. We use FDA-standard Diode Lasers and RF technology calibrated for Indian skin. Our sterilization protocols ensure 100% patient safety.",
      icon: <ShieldCheck size={28} />,
    },
    {
      id: 3,
      question: "What about results?",
      answer: "We promise realistic, medical-grade results. Therapies like PRP and Peels are scientifically proven to improve skin health sustainably.",
      icon: <Sparkles size={28} />,
    }
  ];

  return (
    <section className="bg-stone-100 py-12"> {/* Reduced padding to save space */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-800">
            Common Questions
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mt-2 rounded-full"></div>
        </div>

        {/* 3 Horizontal Cards (Saves Vertical Space) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {qas.map((qa) => (
            <div 
              key={qa.id} 
              className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 text-amber-700 bg-amber-50 p-3 rounded-lg">
                  {qa.icon}
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="font-bold text-stone-900 text-lg mb-2 leading-tight">
                    {qa.question}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {qa.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;