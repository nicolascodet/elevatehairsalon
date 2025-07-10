'use client';

import { Instagram, Facebook, Twitter, MapPin } from 'lucide-react';

export default function Footer() {
  const handleReservation = () => {
    const phoneNumber = '9493240301';
    const message = 'Hi, I would like to make a reservation at Elevate Salon';
    window.open(`sms:${phoneNumber}?body=${encodeURIComponent(message)}`, '_self');
  };

  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">ELEVATE</h3>
            <p className="text-gray-400 text-sm">
              Redefining beauty through precision, artistry, and innovation.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">LOCATION</h4>
            <div className="flex items-start space-x-2 text-gray-400 text-sm">
              <MapPin size={16} className="mt-1 flex-shrink-0" />
              <div>
                <p>24356 Swartz Dr</p>
                <p>Suite 24</p>
                <p>Lake Forest, CA 92630</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">RESERVATIONS</h4>
            <div className="space-y-2">
              <a 
                href="tel:9493240301"
                className="block text-gold hover:text-gold-light transition-colors duration-300"
              >
                (949) 324-0301
              </a>
              <button
                onClick={handleReservation}
                className="block text-gold hover:text-gold-light transition-colors duration-300 text-left"
              >
                Text to Reserve
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">FOLLOW US</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Elevate Hair Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}