import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Fuel, Cog, Star } from "lucide-react";
import carsImage from "@/assets/cars-fleet.jpg";
import car1 from "@/assets/cars/car1.jpg";
import car2 from "@/assets/cars/car2.jpg";
import car3 from "@/assets/cars/car3.jpg";
import car4 from "@/assets/cars/car4.jpg";
import { useToast } from "@/hooks/use-toast";
import GetQuoteButton from "./GetQuoteButton";
import { redirectToWhatsapp } from "@/lib/whatsapp-service";

const API_BASE = "http://localhost:5000"; // Change to your backend base URL

const Fleet = () => {
  const { toast } = useToast();
  const carCategories = [
    {
      category: "Kia Carens",
      image: car1,
      models: ["SUV" ],
      seating: "7 ",
      fuelType: "Petrol/Diesel",
     
      priceRange: "₹14 / km",
      features: ["AC", "Music System", "Power Steering"],
      ideal: "City trips, Long distances"
    },
    {
      category: "Hyundai Xcent",
      image: car2,
      models: [""],
      seating: "4-5",
      fuelType: "Petrol/Diesel",
     
      priceRange: "₹11 / km",
      features: ["AC", "Music System", "Comfortable Seats"],
      ideal: "Business travel, Comfort rides"
    },
    {
      category: "Toyota Crista",
      image: car3,
      models: [""],
      seating: "5-6",
      fuelType: "Diesel",
     
      priceRange: "₹11 / km",
      features: ["AC", "Luggage Space", "High Ground Clearance"],
      ideal: "Family trips, Outstation travel"
    },
    
  ];

  return (
    <section id="fleet" className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Fleet
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose from our wide range of well-maintained vehicles, perfect for every occasion and budget. 
              All cars come with experienced drivers and comprehensive insurance.
            </p>
          </div>

          {/* Fleet Image */}
          <div className="mb-16 rounded-2xl overflow-hidden shadow-large">
            <img 
              src={carsImage} 
              alt="Our Fleet of Cars" 
              className="w-full h-64 lg:h-96 object-cover"
            />
          </div>

          {/* Car Categories */}
          <div className="grid md:grid-cols-2 gap-8">
            {carCategories.map((car, index) => (
              <Card key={index} className="p-6 bg-card-gradient hover:shadow-large transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground">{car.category}</h3>
                  <Badge variant="secondary" className="bg-accent-gradient text-primary-foreground">
                    {car.priceRange}
                  </Badge>
                </div>
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img src={car.image} alt={car.category + ' car'} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-4">
                  {/* Models */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Available Models:</h4>
                    <p className="text-muted-foreground">{car.models.join(", ")}</p>
                  </div>
                  {/* Specifications */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-2 text-primary" />
                      <span>{car.seating} Seater</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Fuel className="w-4 h-4 mr-2 text-primary" />
                      <span>{car.fuelType}</span>
                    </div>
                    
                  </div>
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {car.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {/* Ideal For */}
                  <div className="bg-muted/50 rounded-lg p-3">
                    <h4 className="font-semibold text-foreground mb-1 flex items-center">
                      <Star className="w-4 h-4 mr-2 text-primary" />
                      Ideal For:
                    </h4>
                    <p className="text-sm text-muted-foreground">{car.ideal}</p>
                  </div>
                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() => {
                        const text = `*Smith Tours Car Booking*\n\n*Category*: ${car.category}\n*Models*: ${car.models.join(", ")}\n*Seating*: ${car.seating}\n*Fuel Type*: ${car.fuelType}\n*Price Range*: ${car.priceRange}\n*Features*: ${car.features.join(", ")}\n\nI would like to book this car. Please provide availability and final pricing.`;
                        redirectToWhatsapp("fleet-book-now", text, toast);
                      }}
                    >
                      Book Now
                    </Button>
                    <GetQuoteButton placeName={car.category} />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <Card className="p-8 bg-card-gradient">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                All Our Cars Include
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Professional Driver</h4>
                  <p className="text-sm text-muted-foreground">Experienced, licensed drivers with local knowledge</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Comprehensive Insurance</h4>
                  <p className="text-sm text-muted-foreground">Full coverage for your peace of mind</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">24x7 Support</h4>
                  <p className="text-sm text-muted-foreground">Round-the-clock assistance during your trip</p>
                </div>
              </div>
              
              {/* Pricing Disclaimer */}
              <div className="mt-6 pt-4 border-t border-border/20">
                <p className="text-xs text-muted-foreground text-center italic">
                  * All quoted prices are indicative and may vary based on time, season, fuel prices, distance, and specific travel conditions. Final pricing will be confirmed at the time of booking.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;