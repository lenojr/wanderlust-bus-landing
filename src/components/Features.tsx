
import React from 'react';
import { Clock, MapPin, Coffee, Wifi, Shield, Battery } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature = ({ icon, title, description, delay }: FeatureProps) => (
  <div 
    className={cn(
      "flex flex-col items-start p-6 rounded-2xl bg-white elegant-shadow",
      "opacity-0 animate-fade-in",
    )}
    style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
  >
    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-medium mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Punctual Departures",
      description: "Our buses adhere to strict punctuality with real-time tracking for your planned journey.",
      delay: 100
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Strategic Stops",
      description: "Carefully selected stops in city centers and transport hubs for convenient connections.",
      delay: 200
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Premium Comfort",
      description: "Spacious seating, climate control, and complimentary refreshments for a luxurious ride.",
      delay: 300
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "Connected Travel",
      description: "High-speed Wi-Fi and power outlets at every seat keep you connected throughout.",
      delay: 400
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Safety First",
      description: "Rigorous safety protocols, professional drivers, and regular fleet maintenance.",
      delay: 500
    },
    {
      icon: <Battery className="h-6 w-6" />,
      title: "Eco-Friendly",
      description: "Modern, fuel-efficient fleet reducing carbon footprint without compromising luxury.",
      delay: 600
    }
  ];

  return (
    <section id="features" className="section-padding bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Elevating Your Journey</h2>
          <p className="text-muted-foreground">
            We've reimagined bus travel to provide an experience that combines luxury, reliability, and sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
