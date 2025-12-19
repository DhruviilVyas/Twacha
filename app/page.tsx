import react from 'react';    
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SpecializedCare from '@/components/Service';
import { ClinicLocation } from '@/components/Location';
import Stats from '@/components/Stats';
import WhyChooseUs from '@/components/WhyChooseUs';
import FloatingCTA from '@/components/Cta';
import InquiryForm from '@/components/Inquiry';

export default function Home() {
  return (
    <div>
     
        {/* Main content goes here */}
         <Navbar />
      <Hero/>
      <SpecializedCare />
      <ClinicLocation />
                <Stats />
      <WhyChooseUs />
      <FloatingCTA /> 
      <InquiryForm />
<Footer />
      
    </div>
  );
}
