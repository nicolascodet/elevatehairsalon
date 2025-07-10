'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);

  useEffect(() => {
    const particleCount = 50;
    const newParticles = [];
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 3
      });
    }
    
    setParticles(newParticles);
  }, []);

  const handleReservation = () => {
    const phoneNumber = '9493240301';
    const message = 'Hi, I would like to make a reservation at Elevate Salon';
    window.open(`sms:${phoneNumber}?body=${encodeURIComponent(message)}`, '_self');
  };

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black animate-gradient-y"></div>
      
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle opacity-20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold gradient-text mb-6 animate-glow">
          ELEVATE
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-white mb-8 tracking-widest">
          REDEFINING BEAUTY
        </p>
        <p className="text-base sm:text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Southern California's premier destination for luxury hair styling and coloring.
          <br />
          Specializing in men's and women's cuts that transform.
        </p>
        
        <button
          onClick={handleReservation}
          className="bg-gold hover:bg-gold-dark text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          RESERVE YOUR EXPERIENCE
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-gold text-sm tracking-widest mb-4">SCROLL TO EXPLORE</p>
        <button
          onClick={scrollToServices}
          className="text-gold hover:text-gold-light transition-colors duration-300 animate-bounce-slow"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}