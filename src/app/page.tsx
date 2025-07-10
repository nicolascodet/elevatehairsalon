'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Experience from '@/components/Experience';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <Hero />
        <Services />
        <Experience />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
