
import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';

const BookingSection = () => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    passengers: '1',
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formStep === 1) {
      setFormStep(2);
    } else {
      // In a real app, this would submit the booking
      alert('Thank you for your booking! A confirmation has been sent to your email.');
      setFormStep(1);
      setFormData({
        from: '',
        to: '',
        date: '',
        passengers: '1',
      });
    }
  };

  return (
    <section id="booking" className="section-padding">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 opacity-0 animate-slide-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
              Secure Your Seat
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Premium Travel Experience?</h2>
            <p className="text-muted-foreground mb-6">
              Book your journey today and experience travel reimagined. With just a few clicks, you'll be on your way to a comfortable, reliable journey.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-full text-primary mt-1">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Simple Booking Process</h3>
                  <p className="text-muted-foreground">
                    Our streamlined booking system gets you from selection to confirmation in minutes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-full text-primary mt-1">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Flexible Options</h3>
                  <p className="text-muted-foreground">
                    Change your travel plans with ease using our flexible booking policies.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 opacity-0 animate-slide-in" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            <div className="bg-white rounded-2xl elegant-shadow p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                {formStep === 1 ? 'Book Your Journey' : 'Complete Your Booking'}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {formStep === 1 ? (
                  <>
                    <div className="grid grid-cols-1 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="from" className="text-sm font-medium flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                          Departure City
                        </label>
                        <Input
                          id="from"
                          placeholder="Enter departure city"
                          value={formData.from}
                          onChange={(e) => handleChange('from', e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="to" className="text-sm font-medium flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                          Destination City
                        </label>
                        <Input
                          id="to"
                          placeholder="Enter destination city"
                          value={formData.to}
                          onChange={(e) => handleChange('to', e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="date" className="text-sm font-medium flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                          Travel Date
                        </label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => handleChange('date', e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="passengers" className="text-sm font-medium flex items-center">
                          <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                          Passengers
                        </label>
                        <Select 
                          value={formData.passengers} 
                          onValueChange={(value) => handleChange('passengers', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select number of passengers" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 10 }, (_, i) => (
                              <SelectItem key={i} value={(i + 1).toString()}>
                                {i + 1} {i === 0 ? 'passenger' : 'passengers'}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <Button type="submit" className="w-full" size="lg">
                      Search Available Buses
                    </Button>
                  </>
                ) : (
                  <>
                    <div className="border border-border rounded-lg p-4 mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-muted-foreground">Journey</span>
                        <span className="font-medium">{formData.from} to {formData.to}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-muted-foreground">Date</span>
                        <span className="font-medium">{formData.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Passengers</span>
                        <span className="font-medium">{formData.passengers}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name
                        </label>
                        <Input id="name" placeholder="Enter your full name" required />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </label>
                        <Input id="email" type="email" placeholder="Enter your email" required />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone Number
                        </label>
                        <Input id="phone" placeholder="Enter your phone number" required />
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => setFormStep(1)}
                      >
                        Back
                      </Button>
                      <Button type="submit" className="flex-1">
                        Complete Booking
                      </Button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
