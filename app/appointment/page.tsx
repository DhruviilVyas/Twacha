'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Phone, ArrowLeft, Clock, MapPin, CheckCircle2, CreditCard } from 'lucide-react';

export default function AppointmentPage() {
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    gender: 'Female',
    service: 'Skin Consultation',
    date: new Date().toISOString().split('T')[0],
    slot: '4:00 PM - 6:00 PM',
    payment: 'Pay at Clinic', // Added Payment State
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*APPOINTMENT REQUEST*\n\n` +
      `👤 ${formData.name} (${formData.age}/${formData.gender})\n` +
      `📞 ${formData.phone}\n` +
      `🏥 ${formData.service}\n` +
      `📅 ${formData.date} @ ${formData.slot}\n` +
      `💳 *Payment:* ${formData.payment}\n\n` + // Added Payment to WhatsApp Message
      `Please confirm slot.`;
      
    window.open(`https://wa.me/919104775531?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans">
      
      {/* --- HEADER --- */}
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

      {/* --- MAIN FORM --- */}
      <main className="flex-1 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-bold text-[#4A332A] mb-2">Book Your Appointment</h1>
            <p className="text-stone-600">Fill the details below to schedule a visit with Dr. Dixit.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg border border-stone-200 overflow-hidden">
            
            {/* DOCTOR INFO STRIP */}
            <div className="bg-[#FAF9F6] border-b border-stone-100 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-[#B59459] uppercase tracking-wider mb-1">Consulting Doctor</p>
                <p className="font-bold text-[#4A332A] text-lg">Dr. Dixit Chaudhari (MD Skin)</p>
              </div>
              <div className="text-sm text-stone-500 space-y-1">
                <div className="flex items-center gap-2"><MapPin size={14}/> Vastral, Ahmedabad</div>
                <div className="flex items-center gap-2"><Clock size={14}/> 4:00 PM - 8:00 PM</div>
              </div>
            </div>

            {/* INPUT FIELDS */}
            <div className="p-6 md:p-8 space-y-6">
              
              {/* Name & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-stone-700">Patient Name <span className="text-red-500">*</span></label>
                  <input required name="name" onChange={handleChange} className="w-full bg-white border border-stone-300 text-gray-900 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#B59459] focus:border-[#B59459] outline-none transition-all placeholder-stone-400 font-medium" placeholder="Enter full name" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-stone-700">Phone Number <span className="text-red-500">*</span></label>
                  <input required type="tel" name="phone" onChange={handleChange} className="w-full bg-white border border-stone-300 text-gray-900 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#B59459] focus:border-[#B59459] outline-none transition-all placeholder-stone-400 font-medium" placeholder="10-digit mobile number" />
                </div>
              </div>

              {/* Age & Gender */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-stone-700">Age</label>
                  <input type="number" name="age" onChange={handleChange} className="w-full bg-white border border-stone-300 text-gray-900 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#B59459] focus:border-[#B59459] outline-none transition-all font-medium" placeholder="Years" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-stone-700">Gender</label>
                  <select name="gender" onChange={handleChange} className="w-full bg-white border border-stone-300 text-gray-900 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#B59459] focus:border-[#B59459] outline-none transition-all font-medium cursor-pointer">
                    <option>Female</option>
                    <option>Male</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-stone-700">Treatment Required <span className="text-red-500">*</span></label>
                <select name="service" onChange={handleChange} className="w-full bg-white border border-stone-300 text-gray-900 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#B59459] focus:border-[#B59459] outline-none transition-all font-medium cursor-pointer">
                  <option>Skin Consultation (Acne/General)</option>
                  <option>Laser Hair Removal</option>
                  <option>Hydra Facial / Glow</option>
                  <option>PRP / Hair Fall Treatment</option>
                  <option>Mole / Wart Removal</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-stone-700">Preferred Date <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3.5 text-stone-400" size={18} />
                    <input required type="date" name="date" onChange={handleChange} className="w-full bg-white border border-stone-300 text-gray-900 rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-[#B59459] focus:border-[#B59459] outline-none transition-all font-medium" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-stone-700">Preferred Time</label>
                  <select name="slot" onChange={handleChange} className="w-full bg-white border border-stone-300 text-gray-900 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#B59459] focus:border-[#B59459] outline-none transition-all font-medium cursor-pointer">
                    <option>4:00 PM - 6:00 PM</option>
                    <option>6:00 PM - 8:00 PM</option>
                  </select>
                </div>
              </div>

              {/* --- NEW FIELD: PAYMENT METHOD --- */}
              <div className="space-y-2 pt-2">
                <label className="block text-sm font-bold text-stone-700 flex items-center gap-2">
                    <CreditCard size={16} className="text-[#B59459]" /> 
                    Payment Method
                </label>
                <div className="grid grid-cols-2 gap-4">
                    {/* Option 1: Pay at Clinic */}
                    <label className={`cursor-pointer border rounded-lg p-4 flex items-center gap-3 transition-all ${formData.payment === 'Pay at Clinic' ? 'border-[#B59459] bg-[#B59459]/5' : 'border-stone-200 hover:border-stone-300'}`}>
                        <input 
                            type="radio" 
                            name="payment" 
                            value="Pay at Clinic" 
                            checked={formData.payment === 'Pay at Clinic'} 
                            onChange={handleChange}
                            className="text-[#B59459] focus:ring-[#B59459]"
                        />
                        <span className="font-medium text-stone-700">Pay at Clinic</span>
                    </label>

                    {/* Option 2: Online Payment */}
                    <label className={`cursor-pointer border rounded-lg p-4 flex items-center gap-3 transition-all ${formData.payment === 'Online Payment' ? 'border-[#B59459] bg-[#B59459]/5' : 'border-stone-200 hover:border-stone-300'}`}>
                        <input 
                            type="radio" 
                            name="payment" 
                            value="Online Payment" 
                            checked={formData.payment === 'Online Payment'} 
                            onChange={handleChange}
                            className="text-[#B59459] focus:ring-[#B59459]"
                        />
                        <span className="font-medium text-stone-700">Online (UPI/QR)</span>
                    </label>
                </div>
              </div>

            </div>

            {/* FOOTER ACTION */}
            <div className="bg-stone-50 p-6 border-t border-stone-100">
              <button 
                type="submit" 
                className="w-full bg-[#B59459] hover:bg-[#967a45] text-white text-lg font-bold py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                <span>Confirm Appointment via WhatsApp</span>
              </button>
              <p className="text-center text-xs text-stone-400 mt-3 flex items-center justify-center gap-1">
                <CheckCircle2 size={12} /> Instant confirmation from clinic
              </p>
            </div>

          </form>
        </div>
      </main>
    </div>
  );
}