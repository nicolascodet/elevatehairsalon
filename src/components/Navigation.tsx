'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'SERVICES', href: '#services' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleReservation = () => {
    const phoneNumber = '9493240301';
    const message = 'Hi, I would like to make a reservation at Elevate Salon';
    window.open(`sms:${phoneNumber}?body=${encodeURIComponent(message)}`, '_self');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glassmorphism' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold gradient-text">ELEVATE</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-gold transition-colors duration-300 px-3 py-2 text-sm font-medium tracking-wider"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={handleReservation}
              className="bg-gold hover:bg-gold-dark text-black px-6 py-2 rounded-full font-medium transition-colors duration-300"
            >
              RESERVE
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={handleReservation}
              className="bg-gold hover:bg-gold-dark text-black px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
            >
              RESERVE
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gold transition-colors duration-300 p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden glassmorphism">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-gold transition-colors duration-300 block px-3 py-2 text-base font-medium tracking-wider w-full text-left"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}