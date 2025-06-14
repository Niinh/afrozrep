'use client';

import { useState, useEffect } from 'react';
import { Play, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10" />
        <img
          src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg"
          alt="Rock Concert Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floating ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center justify-center min-h-screen pt-16">
        {/* Logo da Banda */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex justify-center items-center floating-animation">
            <img
              src="/LOGO-HERO.png"
              alt="Afro'z Rep Logo"
              className="max-w-full h-auto w-80 md:w-96 lg:w-[480px] drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(220, 38, 38, 0.5))',
              }}
            />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col md:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button className="btn-rock group">
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Ouça Agora
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button className="btn-rock-outline group">
            <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Próximos Shows
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;