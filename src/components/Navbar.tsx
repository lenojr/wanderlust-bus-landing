
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out-expo py-4',
        scrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a 
            href="/" 
            className="relative z-10 text-2xl font-bold tracking-tight text-primary"
          >
            Voyage
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#routes" className="link-underline text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Routes
            </a>
            <a href="#features" className="link-underline text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#testimonials" className="link-underline text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="link-underline text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </a>
            <Button size="sm" className="ml-4">
              Book Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="relative z-10 p-2 md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

          {/* Mobile Navigation */}
          <div
            className={cn(
              'fixed inset-0 bg-background/95 backdrop-blur-md p-6 flex flex-col justify-center items-center space-y-8 transition-all duration-300 ease-out-expo md:hidden',
              isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            )}
          >
            <a 
              href="#routes" 
              className="text-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              Routes
            </a>
            <a 
              href="#features" 
              className="text-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className="text-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="text-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <Button 
              size="lg" 
              className="mt-4"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
