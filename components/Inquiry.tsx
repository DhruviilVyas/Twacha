'use client';

import React, { useState } from 'react';
import { Send, Star } from 'lucide-react';

const InquiryForm = () => {
  // 1. State to store the input data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: ''
  });

  // 2. Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 3. Handle Form Submission (Send to WhatsApp)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Stop page reload

    // Create the message text
    const message = `Hello Dr. Dixit, I would like to request a Priority Appointment via the website.

👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
🏥 *Interest:* ${formData.service}

Please confirm my slot.`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp with the specific number (Country code 91 + Number)
    const whatsappUrl = `https://wa.me/919104775531?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="book" className="py-16 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white rounded-3xl shadow-2xl shadow-stone-200 overflow-hidden border border-stone-100 flex flex-col md:flex-row">
          
          {/* LEFT SIDE */}
          <div className="bg-stone-900 p-8 md:w-1/3 flex flex-col justify-center text-center md:text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
            
            <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-stone-800 border border-stone-700 rounded-full px-3 py-1 mb-6 self-start">
                    <Star size={12} className="text-amber-500" fill="currentColor" />
                    <span className="text-[10px] font-bold text-stone-300 uppercase tracking-widest">Priority Access</span>
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-white mb-4">
                    Ready to Glow?
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-6">
                    Dr. Dixit accepts limited appointments daily. Fill this form to secure your slot without waiting.
                </p>
                
                <div className="hidden md:block">
                    <p className="text-xs text-stone-500 uppercase tracking-wider font-bold mb-2">Direct Support</p>
                    <p className="text-xl text-white font-serif">+91 9104 77 5531</p>
                </div>
            </div>
          </div>

          {/* RIGHT SIDE: Functional Form */}
          <div className="p-8 md:w-2/3 bg-white">
            <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Row 1: Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="relative group">
                        <input 
                            required
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder=" "
                            className="peer w-full bg-stone-50 border-b-2 border-stone-200 px-3 py-3 outline-none focus:border-stone-800 transition-colors bg-transparent pt-4"
                        />
                        <label className="absolute left-3 top-1 text-[10px] font-bold text-stone-400 uppercase tracking-wider transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-stone-500 peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-stone-800">
                            Full Name
                        </label>
                    </div>

                    <div className="relative group">
                        <input 
                            required
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder=" "
                            className="peer w-full bg-stone-50 border-b-2 border-stone-200 px-3 py-3 outline-none focus:border-stone-800 transition-colors bg-transparent pt-4"
                        />
                        <label className="absolute left-3 top-1 text-[10px] font-bold text-stone-400 uppercase tracking-wider transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-stone-500 peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-stone-800">
                            Phone Number
                        </label>
                    </div>
                </div>

                {/* Row 2: Service Selection */}
                <div className="relative">
                    <select 
                        required
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b-2 border-stone-200 px-3 py-3 text-stone-700 outline-none focus:border-stone-800 cursor-pointer appearance-none"
                    >
                        <option value="" disabled>Select Treatment Interest</option>
                        <option value="Skin Consultation">Skin Consultation (Acne/Pigmentation)</option>
                        <option value="Hair Treatment">Hair Treatment (PRP/Mesotherapy)</option>
                        <option value="Laser Removal">Laser Hair Removal</option>
                        <option value="Dermatosurgery">Dermatosurgery (Mole/Wart Removal)</option>
                        <option value="Other Inquiry">Other Inquiry</option>
                    </select>
                     {/* Custom Arrow Icon */}
                     <div className="absolute right-3 top-4 pointer-events-none text-stone-400">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                    </div>
                </div>

                {/* Submit Button */}
                <button 
                    type="submit"
                    className="w-full bg-stone-900 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-stone-800 hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                    <span>Request Priority Call</span>
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <p className="text-center text-[10px] text-stone-400">
                    Redirects to WhatsApp for instant confirmation.
                </p>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InquiryForm;