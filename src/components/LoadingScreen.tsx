'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl sm:text-8xl font-bold gradient-text mb-8 animate-glow">
          ELEVATE
        </h1>
        
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden mb-4">
          <div 
            className="h-full bg-gradient-to-r from-gold to-gold-light transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="text-gold text-sm tracking-widest">
          {progress}% LOADED
        </p>
      </div>
    </div>
  );
}