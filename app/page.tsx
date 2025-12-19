import react from 'react';    
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="mt-20">
        {/* Main content goes here */}
      </main>
      <Footer />
    </div>
  );
}
