import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Users, Phone } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Smith Tours
                <span className="block text-3xl lg:text-4xl font-normal text-primary-foreground/90">
                  & Travels
                </span>
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-4">
                24x7 Car Rentals at Kolhapur Airport
              </p>
              <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
                Safe, Comfortable & Hassle-Free Rides. Your go-to solution for reliable car rental services in Kolhapur. Whether it's airport pickup, city rides, or outstation trips, we've got you covered.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" variant="secondary" className="shadow-large">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: +91 9876543210
                </Button>
                <Button size="lg" variant="outline" className="bg-card/20 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  View Our Fleet
                </Button>
              </div>
            </div>

            {/* Booking Form */}
            <Card className="bg-card/95 backdrop-blur-sm shadow-large p-6">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Book Your Ride
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Pickup Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <Input 
                        placeholder="Enter pickup location" 
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Drop Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <Input 
                        placeholder="Enter drop location" 
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Pickup Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <Input 
                        type="date" 
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Passengers</label>
                    <Select>
                      <SelectTrigger>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2 text-muted-foreground" />
                          <SelectValue placeholder="Select passengers" />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Passenger</SelectItem>
                        <SelectItem value="2">2 Passengers</SelectItem>
                        <SelectItem value="3">3 Passengers</SelectItem>
                        <SelectItem value="4">4 Passengers</SelectItem>
                        <SelectItem value="5">5+ Passengers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Car Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select car type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hatchback">Hatchback</SelectItem>
                      <SelectItem value="sedan">Sedan</SelectItem>
                      <SelectItem value="suv">SUV</SelectItem>
                      <SelectItem value="luxury">Luxury</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" size="lg" className="w-full shadow-medium">
                  Check Availability & Book
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;