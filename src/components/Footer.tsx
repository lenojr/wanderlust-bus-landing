
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary text-foreground pt-16 pb-8">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Voyage</h3>
            <p className="text-muted-foreground mb-6">
              Premium bus transportation reimagined for modern travelers. Experience comfort, reliability, and excellence in every journey.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-foreground hover:bg-primary hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-foreground hover:bg-primary hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-foreground hover:bg-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-foreground hover:bg-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="link-underline text-muted-foreground hover:text-foreground transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="link-underline text-muted-foreground hover:text-foreground transition-colors">Services</a>
              </li>
              <li>
                <a href="#" className="link-underline text-muted-foreground hover:text-foreground transition-colors">Routes</a>
              </li>
              <li>
                <a href="#" className="link-underline text-muted-foreground hover:text-foreground transition-colors">Booking</a>
              </li>
              <li>
                <a href="#" className="link-underline text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="link-underline text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary mt-0.5" />
                <span className="text-muted-foreground">
                  1234 Transport Avenue<br />
                  San Francisco, CA 94103
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <a href="tel:+14155550123" className="text-muted-foreground hover:text-foreground transition-colors">
                  (415) 555-0123
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <a href="mailto:info@voyagebus.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  info@voyagebus.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Subscribe</h4>
            <p className="text-muted-foreground mb-4">
              Stay updated with our latest offers and news.
            </p>
            <div className="space-y-4">
              <Input
                placeholder="Your email address"
                type="email"
                className="bg-white"
              />
              <Button className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Voyage Bus Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
