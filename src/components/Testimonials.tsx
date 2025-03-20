
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Business Traveler",
    quote: "The level of comfort and punctuality has completely changed how I view bus travel. It's now my preferred method for business trips within the region.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Frequent Commuter",
    quote: "As someone who commutes weekly, the reliable schedule and comfortable amenities make a huge difference in my travel experience.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Tourist",
    quote: "The scenic routes and knowledgeable drivers enhanced our family vacation. We saw places we would have missed driving ourselves.",
    rating: 4
  },
  {
    id: 4,
    name: "David Thompson",
    position: "Student",
    quote: "Affordable luxury and the Wi-Fi connection means I can study while traveling between home and university. It's a game-changer.",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Words from Our Travelers</h2>
          <p className="text-muted-foreground">
            Hear what our passengers say about their experience traveling with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-white elegant-shadow">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "p-10 transition-all duration-500 ease-out-expo",
                  index === activeIndex 
                    ? "opacity-100 translate-x-0" 
                    : index < activeIndex 
                      ? "opacity-0 -translate-x-full absolute top-0 left-0 right-0" 
                      : "opacity-0 translate-x-full absolute top-0 left-0 right-0"
                )}
              >
                <div className="flex flex-col items-center text-center">
                  <Quote className="h-10 w-10 text-primary/20 mb-6" />
                  <p className="text-lg md:text-xl mb-6 font-serif italic">"{testimonial.quote}"</p>
                  <div className="flex items-center space-x-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={cn(
                          "h-5 w-5",
                          i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                        )}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div>
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-muted-foreground">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "h-2 transition-all ease-out-expo duration-300",
                    index === activeIndex ? "w-8 bg-primary" : "w-2 bg-primary/30",
                    "rounded-full"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="rounded-full h-10 w-10"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="rounded-full h-10 w-10"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
