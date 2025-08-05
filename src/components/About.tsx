import { Card } from "@/components/ui/card";
import { Shield, Clock, Star, Users, Car, MapPin } from "lucide-react";
import aboutImg from "@/assets/owner.jpg"; // Change to your preferred image

const About = () => {
  const features = [
    {
      icon: Car,
      title: "Clean & Comfort Cars",
      description: "Well-maintained, sanitized vehicles for your comfort and safety"
    },
    {
      icon: Shield,
      title: "Safe Journey",
      description: "Experienced drivers and safety measures for worry-free travel"
    },
    {
      icon: Users,
      title: "Experienced Drivers",
      description: "Professional, licensed drivers with local knowledge"
    },
    {
      icon: Star,
      title: "Reasonable Tariff",
      description: "Competitive pricing with no hidden charges"
    },
    {
      icon: Clock,
      title: "24x7 Service",
      description: "Round-the-clock availability for all your travel needs"
    },
    {
      icon: MapPin,
      title: "Airport Pickup",
      description: "Convenient pickup and drop services at Kolhapur Airport"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Choose Smith Tours?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Are you searching for an affordable & best car on rent in Kolhapur? 
              Smith Tours is your go-to car rental service in Kolhapur, catering to tourists and locals alike with a reputation for reliability and excellence.
            </p>
          </div>

          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: Image */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="aspect-[3/4] w-full max-w-xs rounded-2xl overflow-hidden shadow-xl">
                <img src={aboutImg} alt="Smith Tours" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Right: Paragraph */}
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Experience the Art of Travel
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p><h3>
                  <b>Hi, I’m Ramesh – Welcome to My Journey </b>

I started Smith Tours and Travels with one simple goal – to give people safe, reliable, and comfortable rides, just like I’d want for my own family. Every car you book with us is personally looked after by me and my team. Whether you’re heading out for work, a holiday, or a family function – I’m here to make sure your journey is smooth and stress-free.

Hop in, relax, and leave the rest to me.
                  Smith Tours and Travels has been serving Kolhapur with premium car rental services</h3>
                </p>
                <p>
                  Our fleet of well-maintained vehicles and experienced drivers ensure that you reach 
                  your destination safely and on time. We pride ourselves on transparent pricing, 
                  professional service, and 24x7 availability.
                </p>
                <p>
                  From the historic palaces of Kolhapur to nearby tourist destinations, we make every 
                  journey an experience to remember. Trust Smith Tours for all your transportation needs 
                  in and around Kolhapur.
                </p>
              </div>
            </div>

            {/* Services Card stays below or right depending on screen size */}
            <div className="bg-card-gradient rounded-2xl p-8 shadow-large lg:col-span-2 mt-8">
              <h4 className="text-2xl font-bold text-foreground mb-6">Our Services Include</h4>
              <ul className="space-y-3">
                {[
                  "Airport Pickup & Drop",
                  "Local City Tours",
                  "Outstation Trips",
                  "Wedding & Event Transportation",
                  "Corporate Travel Solutions",
                  "Hourly Car Rentals"
                ].map((service, index) => (
                  <li key={index} className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-large transition-all duration-300 bg-card-gradient">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent-gradient rounded-xl flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">{feature.title}</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;