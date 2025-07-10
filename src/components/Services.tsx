'use client';

import { useEffect, useRef } from 'react';

export default function Services() {
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

  const services = [
    {
      number: '01',
      title: 'PRECISION CUTS',
      description: 'Expert styling for men and women with attention to detail'
    },
    {
      number: '02',
      title: 'COLOR MASTERY',
      description: 'Professional coloring techniques that enhance your natural beauty'
    },
    {
      number: '03',
      title: 'HAIR TREATMENTS',
      description: 'Nourishing treatments for healthy, vibrant hair'
    },
    {
      number: '04',
      title: 'STYLING SERVICES',
      description: 'Complete styling for special occasions and everyday elegance'
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-4 reveal">
            ARTISTRY IN MOTION
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.number}
              className="reveal glassmorphism rounded-lg p-8 hover:scale-105 transition-transform duration-300 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-gold text-xl font-bold mb-4">{service.number}</div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}