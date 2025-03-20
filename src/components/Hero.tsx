
import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlurImage from './ui-custom/BlurImage';

const Hero = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <BlurImage
          src="https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
          alt="Premium bus travel experience"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-background"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 pt-24 md:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6">
              The premium travel experience
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Journey in Comfort, <br /> Arrive with Style
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-md">
              Experience travel reimagined. Luxurious amenities, precise scheduling, and unparalleled comfort for your journey.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" onClick={scrollToBooking} className="group">
                Book Your Journey
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                Explore Routes
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            {/* Could add a floating element here if needed */}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float hidden md:block">
        <button 
          onClick={() => {
            const featuresSection = document.getElementById('features');
            if (featuresSection) {
              featuresSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          aria-label="Scroll down"
          className="flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-colors"
        >
          <span className="text-sm font-medium">Discover More</span>
          <ChevronDown className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
