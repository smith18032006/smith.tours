import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Camera, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { redirectToWhatsapp } from "@/lib/whatsapp-service";

import React, { useState } from "react";


import mahalaxmiTemple from "@/assets/Mahalaxmi-Temple/mahakaxmi1.jpg";
import mahalaxmiTemple1 from "@/assets/Mahalaxmi-Temple/mahakaxmi.jpg"; 
import newPalace from "@/assets/New Palace/new-palace.jpg";
import newPalace1 from "@/assets/New Palace/new-palace1.jpg";
import newPalace2 from "@/assets/New Palace/new-palace2.jpg";
import rankala from "@/assets/rankala/rankala.jpg"; // Replace with actual Rankala Lake image
import rankala1 from "@/assets/rankala/rankala1.jpg"; // Replace with actual Rankala Lake image
import malvan from "@/assets/malvan/malvan.jpg"; // Ensure this image exists

import jyotibaTemple from "@/assets/jyotiba1/jyotiba.jpg";
import kopeshwarTemple from "@/assets/kopeshwar/kopeshwar.jpg";
import kopeshwarTemple1 from "@/assets/kopeshwar/kopeshwar1.jpg";
import ganpatipule from "@/assets/ganpatipule/ganpatipule.jpg";
import kaneri from "@/assets/kaneri/kaneri.jpg"; // Ensure this image exists
import kaneri1 from "@/assets/kaneri/kaneri1.jpg"; // Ensure this image exists
import sindhudurg from "@/assets/sindhudurg/sindhudurg.jpg";
import balumama from "@/assets/balumama/balumama.jpg"; // Ensure this image exists
import ramling from "@/assets/ramling/ramling.jpg";
import sangli from "@/assets/sangli-ganpati/sangli.jpg";
import vishalgad from "@/assets/vishal/vishal.jpg";
import narsoba from "@/assets/narsobachiwadi/narsobachiwadi.jpg"


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import GetQuoteButton from "./GetQuoteButton";



const Destinations = () => {
  const { toast } = useToast();
  const destinations = [
  {

    name: "Mahalaxmi Temple",
    images: [mahalaxmiTemple, mahalaxmiTemple1], // Ensure all images are imported and exist
    distance: "10 km from airport",
    duration: "30 mins",
    rating: "5.0",
    description: "A sacred temple dedicated to Goddess Mahalaxmi, this is one of the most revered sites in Kolhapur. Known for its stunning architecture and spiritual significance.",
    highlights: ["Spiritual Significance", "Architectural Beauty", "Cultural Heritage"],
    bestTime: "Early morning or evening"
  },
  {
    name: "Rankala Lake",
    images: [rankala, rankala1], // Replace with actual Rankala Lake image
    distance: "3 km from airport",
    duration: "10 mins",
    rating: "4.5",
    description: "A picturesque lake surrounded by lush gardens and historical monuments. Ideal for evening strolls and enjoying local snacks at the lakeside.",
    highlights: ["Scenic Views", "Local Cuisine", "Historical Significance"],
    bestTime: "Evening hours"






  },
    {
      name: "New Palace",
    images: [newPalace, newPalace1, newPalace2], // Make sure all images are imported and exist
      distance: "12 km from airport",
      duration: "25 mins",
      rating: "4.7",
      description: "Built in 1884, the New Palace is a stunning example of Indo-Saracenic architecture. Now a museum showcasing royal artifacts and Kolhapur's rich history.",
      highlights: ["Royal Architecture", "Museum", "Historical Artifacts"],
      bestTime: "Morning hours"
    },
    {
      name: "Jyotiba Temple",
      images: [jyotibaTemple],
      distance: "35 km from airport",
      duration: "1 hour",
      rating: "4.8",
      description: "One of the most revered temples in Maharashtra, dedicated to Lord Jyotiba. Located on a hilltop, offering spectacular views and spiritual peace.",
      highlights: ["Hilltop Temple", "Spiritual Significance", "Panoramic Views"],
      bestTime: "Early morning or evening"
    },
    {
      name: "Kopeshwar Temple",
      images: [kopeshwarTemple, kopeshwarTemple1],
      distance: "65 km from airport",
      duration: "1.5 hours",
      rating: "4.6",
      description: "Ancient 12th-century temple known for its exquisite stone carvings and unique architecture. A masterpiece of Chalukyan and Rashtrakuta styles.",
      highlights: ["Ancient Architecture", "Stone Carvings", "Historical Heritage"],
      bestTime: "October to March"
    },
    {
      name: "Ganpatipule",
      images: [ganpatipule],
      distance: "95 km from airport",
      duration: "2 hours",
      rating: "4.9",
      description: "Famous beach destination with pristine coastline and the revered Ganpati temple. Perfect blend of spirituality and natural beauty by the Arabian Sea.",
      highlights: ["Beach Resort", "Ganpati Temple", "Coastal Beauty"],
      bestTime: "October to March"
    },
    {
      name: "Kaneri Math",
      images: [kaneri, kaneri1],
      distance: "8 km from airport",
      duration: "20 mins ",
      rating: "4.6",
      description: "Kaneri Math, also known as Siddhagiri Gramjivan Museum, is a historic site near Kolhapur, Maharashtra, known for its unique blend of cultural, historical, and religious attractions",
      highlights: ["Ancient Architecture", "Stone Carvings", "Historical Heritage"],
      bestTime: "Afternoon"

    },
  {
    name: "Sindhudurg Fort",
    images: [sindhudurg], // Replace with actual Dajipur Wildlife Sanctuary images
    distance: "160 km from airport",
    duration: "4 hours",
    rating: "4.5",
    description: "Sindhudurg Fort is a historic sea fort located in the Sindhudurg district of Maharashtra, India. It was built by the Maratha king Shivaji Maharaj in the 17th century and is known for its impressive architecture and strategic location.",
    highlights: ["Fort Architecture", "Historical Significance", "Scenic Views"],
    bestTime: " March to June"

  },
  { 
    name: "Balumamachi Wadi",
    images: [balumama], // Replace with actual Dajipur Wildlife Sanctuary images
    distance: "50 km from airport",
    duration: "1 hours",
    rating: "4.3",
    description: "Balumamachi Wadi is a serene village near Kolhapur, known for its lush greenery and traditional Maharashtrian culture. It's an ideal spot for nature lovers and those seeking a peaceful retreat.",
    highlights: ["Godden Temple", "Village Culture", "Nature Retreat"],
    bestTime: "All year round"
  },
  {
    name: "Malvan",
    images: [malvan], // Replace with actual Dajipur Wildlife Sanctuary images
    distance: "160 km from airport",
    duration: "4 hours",
    rating: "4.2",
    description: "Malvan is a coastal town in Maharashtra, famous for its beautiful beaches, water sports, and the historic Sindhudurg Fort. It's a perfect getaway for beach lovers and history enthusiasts.",
    highlights: ["Beaches", "Water Sports", "Sindhudurg Fort"],
    bestTime: "March to June"

  },
  {
    name: "Narsobachi Wadi",
    images: [narsoba], // Replace with actual Dajipur Wildlife Sanctuary images
    distance: "50 km from airport",
    duration: "1 hours",
    rating: "4.4",
    description: "Narsobachi Wadi is a small village near Kolhapur, known for its serene environment and the famous Narsoba temple. It's a great place for spiritual seekers and those looking to experience rural Maharashtra.",
    highlights: ["temple", "Village Life", "Spiritual Retreat"],
    bestTime: "All year round"

  },
  {
    name: "Ramlinga",
    images: [ramling], // Replace with actual Dajipur Wildlife Sanctuary images
    distance: "22 km from airport",
    duration: "30 Mins",
    rating: "4.1",
    description: "Ramlinga is a scenic spot near Kolhapur, known for its lush greenery and tranquil environment. It's an ideal place for nature lovers and those seeking a peaceful getaway.",
    highlights: ["Shiva Temple", "Nature Trails", "Peaceful Ambiance"],
    bestTime: "All year round"
  },
  {
    name: "Sanglicha Ganpati",
    images: [sangli], // Replace with actual Dajipur Wildlife Sanctuary images
    distance: "45 km from airport",
    duration: "1.15 Hours",
    rating: "4.1",
    description: "Sangli",
    highlights: ["Shiva Temple", "Nature Trails", "Peaceful Ambiance"],
    bestTime: "All year round"

  },
   {
    name: "Vishalgad Fort",
    images: [vishalgad], // Replace with actual Dajipur Wildlife Sanctuary images
    distance: "160 km from airport",
    duration: "4 hours",
    rating: "4.5",
    description: "Vishalgad ",
    highlights: ["Fort Architecture", "Historical Significance", "Scenic Views"],
    bestTime: " March to June"

  },

  ];

  const nearbyPlaces = [
    
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
    },
    {
      name: "Pune",
      distance: "240 km",
      duration: "5 hrs",
      attractions: ["Aga Khan Palace", "Shaniwar Wada", "Sinhagad Fort"]
    },{
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
      name: "Mahabaleshwar",
      distance: "180 km",
      duration: "4 hrs",
      attractions: ["Venna Lake", "Pratapgad Fort", "Mapro Garden"]
    },
   
    {
      name: "Belgaum",
      distance: "110 km",
      duration: "2.5 hrs",
      attractions: ["Belgaum Fort", "Gokak Falls", "Military Mahadev Temple"]
    },
   
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {destinations.map((destination, index) => {
              // WhatsApp message text
              const whatsappNumber = "918888831115"; // Your WhatsApp number with country code, no plus
              const text = `Hi, I'm interested in planning a trip to ${destination.name}!\nDetails:\nDistance: ${destination.distance}\nDuration: ${destination.duration}\nHighlights: ${destination.highlights.join(", ")}\nBest Time: ${destination.bestTime}`;
              const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
              return (
                <Card key={index} className="overflow-hidden hover:shadow-large transition-all duration-300 bg-card-gradient flex flex-col">
                  <div className="relative">
                    <Carousel>
                      <CarouselContent>
                        {destination.images.map((img, i) => (
                          <CarouselItem key={i}>
                            <img
                              src={img}
                              alt={destination.name}
                              className="w-full h-48 object-cover sm:h-56 md:h-48 lg:h-44 xl:h-52"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                        {destination.images.map((_, dotIdx) => (
                          <span
                            key={dotIdx}
                            className="w-2 h-2 rounded-full bg-primary/60 border border-primary/80 transition-all duration-200"
                          />
                        ))}
                      </div>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-accent-gradient text-primary-foreground">
                        <Star className="w-3 h-3 mr-1" />
                        {destination.rating}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {destination.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-muted-foreground">
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
                    <div className="flex gap-3">
                      <Button size="sm" className="flex-1" type="button" onClick={() => {
                        const text = `Hi, I'm interested in planning a trip to ${destination.name}!\nDetails:\nDistance: ${destination.distance}\nDuration: ${destination.duration}\nHighlights: ${destination.highlights.join(", ")}\nBest Time: ${destination.bestTime}`;
                        // Non-priority button, can be limited
                        redirectToWhatsapp("destination-plan-trip", text, toast);
                      }}>
                        Plan Trip
                      </Button>
                      <GetQuoteButton placeName={destination.name} />
                    </div>
                  </div>
                </Card>
              );
            })}
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
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => {
                        const text = `*Outstation Trip Booking*\n\nDestination: ${place.name}\nDistance: ${place.distance}\nDuration: ${place.duration}\nAttractions: ${place.attractions.join(", ")}\n\nI would like to book a trip to ${place.name}. Please provide package details and pricing.`;
                        redirectToWhatsapp("destination-plan-trip", text, toast);
                      }}
                    >
                      Book Trip
                    </Button>
                    <GetQuoteButton placeName={place.name} />
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
                <Button 
                  size="lg"
                  onClick={() => {
                    const text = `*Custom Trip Planning Request*\n\nI'm interested in planning a custom trip. Please help me with planning and pricing options.`;
                    redirectToWhatsapp("custom-trip-planning", text, toast);
                  }}
                >
                  Plan Custom Trip
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => {
                    const text = `*Brochure Request*\n\nI would like to receive your tour packages brochure with detailed information about destinations and pricing.`;
                    redirectToWhatsapp("brochure-request", text, toast);
                  }}
                >
                  Request Brochure
                </Button>
              </div>
              
              {/* Pricing Disclaimer */}
              <div className="mt-6 pt-4 border-t border-border/20">
                <p className="text-xs text-muted-foreground text-center italic">
                  * All quoted prices are approximate and subject to change based on season, availability, fuel costs, and specific travel requirements. Final pricing will be provided upon inquiry.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;