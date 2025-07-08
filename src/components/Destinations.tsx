import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Camera, Star } from "lucide-react";
import kolhapurPalace from "@/assets/kolhapur-palace.jpg";
import historicalFort from "@/assets/historical-fort.jpg";
import scenicLake from "@/assets/scenic-lake.jpg";

const Destinations = () => {
  const destinations = [
    {
      name: "Mahalaxmi Temple",
      image: kolhapurPalace,
      distance: "5 km",
      duration: "15 mins",
      rating: "4.8",
      description: "One of the most revered temples in Maharashtra, dedicated to Goddess Mahalaxmi. Famous for its beautiful architecture and spiritual significance.",
      highlights: ["Ancient Architecture", "Religious Significance", "Cultural Heritage"],
      bestTime: "Early morning or evening"
    },
    {
      name: "Panhala Fort",
      image: historicalFort,
      distance: "20 km",
      duration: "45 mins",
      rating: "4.6",
      description: "Historic hill fort known for its strategic importance and stunning views. A perfect blend of history and natural beauty.",
      highlights: ["Historical Fort", "Scenic Views", "Trekking"],
      bestTime: "October to March"
    },
    {
      name: "Rankala Lake",
      image: scenicLake,
      distance: "8 km",
      duration: "20 mins",
      rating: "4.4",
      description: "Beautiful artificial lake perfect for evening walks and boating. A popular spot for families and nature lovers.",
      highlights: ["Boating", "Evening Walks", "Peaceful Environment"],
      bestTime: "Evening hours"
    }
  ];

  const nearbyPlaces = [
    {
      name: "Sangli",
      distance: "50 km",
      duration: "1.5 hrs",
      attractions: ["Ganapati Temple", "Miraj", "Turmeric Market"]
    },
    {
      name: "Satara",
      distance: "85 km",
      duration: "2 hrs",
      attractions: ["Kaas Plateau", "Thoseghar Falls", "Sajjangad Fort"]
    },
    {
      name: "Goa",
      distance: "230 km",
      duration: "4.5 hrs",
      attractions: ["Beaches", "Churches", "Nightlife"]
    },
    {
      name: "Mumbai",
      distance: "385 km",
      duration: "7 hrs",
      attractions: ["Gateway of India", "Marine Drive", "Bollywood"]
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Places to Visit
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover the rich heritage and natural beauty of Kolhapur and nearby destinations. 
              Let us take you on memorable journeys to these amazing places.
            </p>
          </div>

          {/* Main Destinations */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {destinations.map((destination, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-large transition-all duration-300 bg-card-gradient">
                <div className="relative">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent-gradient text-primary-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      {destination.rating}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {destination.name}
                  </h3>
                  
                  <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1 text-primary" />
                      {destination.distance}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-primary" />
                      {destination.duration}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {destination.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2 text-sm">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {destination.highlights.map((highlight, highlightIndex) => (
                        <Badge key={highlightIndex} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-3 mb-4">
                    <h4 className="font-semibold text-foreground mb-1 text-sm flex items-center">
                      <Camera className="w-3 h-3 mr-1 text-primary" />
                      Best Time to Visit:
                    </h4>
                    <p className="text-xs text-muted-foreground">{destination.bestTime}</p>
                  </div>

                  <Button size="sm" className="w-full">
                    Plan Trip
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Nearby Places */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              Outstation Destinations
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {nearbyPlaces.map((place, index) => (
                <Card key={index} className="p-6 bg-card-gradient hover:shadow-medium transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-foreground">{place.name}</h4>
                    <div className="text-right text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1 text-primary" />
                        {place.distance}
                      </div>
                      <div className="flex items-center mt-1">
                        <Clock className="w-4 h-4 mr-1 text-primary" />
                        {place.duration}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="font-semibold text-foreground mb-2 text-sm">Top Attractions:</h5>
                    <p className="text-muted-foreground text-sm">
                      {place.attractions.join(", ")}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Button size="sm" className="flex-1">
                      Book Trip
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      Get Quote
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="p-8 bg-card-gradient">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Explore?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contact us to plan your perfect trip. We offer customized tour packages, 
                experienced local guides, and comfortable transportation for all destinations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Plan Custom Trip
                </Button>
                <Button size="lg" variant="outline">
                  Download Brochure
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;