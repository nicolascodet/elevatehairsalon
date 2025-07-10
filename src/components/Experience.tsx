'use client';

import { useEffect, useRef } from 'react';

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-8">
              WHERE INNOVATION
              <br />
              MEETS INTUITION
            </h2>
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Experience the perfect blend of cutting-edge techniques and artistic vision.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our skilled stylists bring years of expertise to every cut, color, and style.
              </p>
            </div>
          </div>

          <div className="reveal relative">
            <div className="glassmorphism rounded-lg p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-12 h-12 bg-gold rounded-full animate-float opacity-20"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-gold rounded-full animate-float opacity-30" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gold rounded-full animate-float opacity-10" style={{animationDelay: '2s'}}></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">THE ELEVATE DIFFERENCE</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                    Personalized consultations
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                    Premium products and techniques
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                    Luxurious salon environment
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                    Expert stylist team
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}