'use client';

import { useEffect, useRef } from 'react';

export default function CTA() {
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

  const handleReservation = () => {
    const phoneNumber = '9493240301';
    const message = 'Hi, I would like to make a reservation at Elevate Salon';
    window.open(`sms:${phoneNumber}?body=${encodeURIComponent(message)}`, '_self');
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-8 reveal">
          BEGIN YOUR
          <br />
          TRANSFORMATION
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 reveal">
          Ready to elevate your look? Book your appointment today.
        </p>
        
        <div className="reveal">
          <button
            onClick={handleReservation}
            className="bg-gradient-to-r from-gold to-gold-light hover:from-gold-dark hover:to-gold text-black px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            RESERVE YOUR EXPERIENCE
          </button>
        </div>
        
        <div className="mt-12 reveal">
          <p className="text-gray-400 text-sm">
            Call or text us at{' '}
            <a 
              href="tel:9493240301"
              className="text-gold hover:text-gold-light transition-colors duration-300"
            >
              (949) 324-0301
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}