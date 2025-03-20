
import React, { useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlurImage from './ui-custom/BlurImage';
import { cn } from '@/lib/utils';

interface Destination {
  id: number;
  city: string;
  image: string;
  description: string;
  price: string;
  duration: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    city: "New York",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    description: "Experience the vibrant culture and iconic landmarks of the city that never sleeps.",
    price: "$45",
    duration: "4h 30m"
  },
  {
    id: 2,
    city: "San Francisco",
    image: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    description: "Discover the charm of this beautiful coastal city with its famous Golden Gate Bridge.",
    price: "$55",
    duration: "5h 15m"
  },
  {
    id: 3,
    city: "Chicago",
    image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    description: "Explore the architectural marvels and vibrant cultural scene of the Windy City.",
    price: "$40",
    duration: "3h 45m"
  },
  {
    id: 4,
    city: "Los Angeles",
    image: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    description: "Bask in the sunshine of California's entertainment capital with endless attractions.",
    price: "$50",
    duration: "6h 00m"
  },
];

const DestinationCard = ({ destination, index }: { destination: Destination; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "group relative rounded-2xl overflow-hidden elegant-shadow h-[400px] opacity-0 animate-fade-in",
      )}
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <BlurImage
        src={destination.image}
        alt={destination.city}
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out-expo",
          isHovered ? "scale-110" : "scale-100"
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2 flex items-center">
          <MapPin className="h-5 w-5 mr-2" />
          {destination.city}
        </h3>
        <p className="text-white/80 mb-4 line-clamp-2">{destination.description}</p>
        
        <div className="flex justify-between items-center">
          <div>
            <div className="text-xs text-white/60 mb-1">From</div>
            <div className="text-xl font-bold">{destination.price}</div>
          </div>
          <div>
            <div className="text-xs text-white/60 mb-1">Duration</div>
            <div className="text-sm">{destination.duration}</div>
          </div>
          <Button 
            size="sm" 
            variant="outline" 
            className="bg-white/10 border-white/20 hover:bg-white/20 text-white"
          >
            Explore
          </Button>
        </div>
      </div>
    </div>
  );
};

const Destinations = () => {
  return (
    <section id="routes" className="section-padding">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
              Popular Routes
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Destinations</h2>
            <p className="text-muted-foreground">
              Discover our most popular routes connecting major cities with comfort and convenience.
            </p>
          </div>
          <Button variant="ghost" className="mt-4 md:mt-0 group">
            View All Destinations
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <DestinationCard key={destination.id} destination={destination} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
