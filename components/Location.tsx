'use client';

import React from 'react';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export const ClinicLocation: React.FC = () => {
  const clinicData = {
    address: '112/A, Avadh Pride Complex, Nr. Nirant Cross Road, Vastral, Ahmedabad.',
    phone: '+91 9104 77 5531',
    timings: '4:00 PM to 8:00 PM',
  };

  return (
    <section id="contact" className="py-12 bg-[#FAF9F6] lg:h-screen lg:max-h-[800px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-stretch">
          
          {/* LEFT SIDE: Images & Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            
            {/* Heading */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-stone-800 mb-2">
                Visit Twacha Clinic
              </h2>
              <p className="text-stone-600">Premium skin care in the heart of Vastral.</p>
            </div>

            {/* Images Row - As requested */}
            <div className="flex space-x-4 h-40 sm:h-48">
               {/* Replace src with your actual image paths */}
               <div className="w-1/2 relative rounded-xl overflow-hidden shadow-md border-4 border-white group">
                  {/* Placeholder for Outside View */}
                  <div className="absolute inset-0 bg-stone-200 flex items-center justify-center text-stone-500 font-medium">
                    Outside View
                  </div>
                  <img 
                    src="/clinic-outside.jpg" 
                    alt="Clinic Outside" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => e.currentTarget.style.display = 'none'} // Hides img tag if file missing
                  />
               </div>
               
               <div className="w-1/2 relative rounded-xl overflow-hidden shadow-md border-4 border-white group">
                  {/* Placeholder for Inside View */}
                  <div className="absolute inset-0 bg-stone-200 flex items-center justify-center text-stone-500 font-medium">
                    Reception/Inside
                  </div>
                  <img 
                    src="/clinic-inside.jpg" 
                    alt="Clinic Inside" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => e.currentTarget.style.display = 'none'}
                  />
               </div>
            </div>

            {/* Contact Details Grid - Compact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Address */}
                <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#B59459]">
                    <div className="flex items-center gap-3 mb-2">
                        <MapPin className="text-[#B59459]" size={20} />
                        <h3 className="font-bold text-stone-800">Address</h3>
                    </div>
                    <p className="text-sm text-stone-600 leading-snug">
                        {clinicData.address}
                    </p>
                </div>

                {/* Timings */}
                <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#B59459]">
                    <div className="flex items-center gap-3 mb-2">
                        <Clock className="text-[#B59459]" size={20} />
                        <h3 className="font-bold text-stone-800">Timings</h3>
                    </div>
                    <p className="text-sm text-stone-600 font-medium">
                        {clinicData.timings}
                    </p>
                    <p className="text-xs text-stone-400 mt-1">Daily (Sun Closed)</p>
                </div>
            </div>

            {/* Phone & WhatsApp Action */}
            <div className="bg-stone-800 text-white p-5 rounded-xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="bg-stone-700 p-2 rounded-full">
                        <Phone size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-stone-400">Book Appointment</p>
                        <Link href={`tel:${clinicData.phone.replace(/\s/g, '')}`} className="text-lg font-bold hover:text-[#B59459] transition-colors">
                            {clinicData.phone}
                        </Link>
                    </div>
                </div>
                <Link 
                    href="https://wa.me/9104775531" 
                    target="_blank"
                    className="w-full sm:w-auto bg-[#25D366] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#20BA5A] transition-colors flex items-center justify-center gap-2"
                >
                    <MessageCircle size={18} />
                    WhatsApp
                </Link>
            </div>

          </div>

          {/* RIGHT SIDE: Map */}
          {/* h-[300px] on mobile, auto-fill height on desktop */}
          <div className="h-[300px] lg:h-auto min-h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.396796336496!2d72.66160937505876!3d23.009187979182855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8644e5555555%3A0x1234567890abcdef!2sAvadh%20Pride!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};