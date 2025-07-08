import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Cars", href: "#fleet" },
    { name: "Places to Visit", href: "#destinations" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Airport Pickup & Drop",
    "Local City Tours",
    "Outstation Trips",
    "Wedding Transportation",
    "Corporate Travel",
    "Hourly Rentals"
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-accent-gradient rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">S</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Smith Tours</h3>
                  <p className="text-sm text-muted-foreground">& Travels</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Your trusted partner for safe, comfortable, and reliable car rental services in Kolhapur. 
                Available 24x7 for all your transportation needs.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <Phone className="w-4 h-4 mr-2 text-primary" />
                  <span>+91 9876543210</span>
                </div>
                <div className="flex items-center text-sm">
                  <Mail className="w-4 h-4 mr-2 text-primary" />
                  <span>info@smithtours.com</span>
                </div>
                <div className="flex items-start text-sm">
                  <MapPin className="w-4 h-4 mr-2 text-primary mt-1 flex-shrink-0" />
                  <span>Near Kolhapur Airport, Kolhapur, Maharashtra</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-muted-foreground text-sm">
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0" />
                      {service}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Stay Connected</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Subscribe to get updates on special offers and travel tips.
              </p>
              <div className="space-y-3 mb-6">
                <Input 
                  placeholder="Enter your email"
                  className="bg-background"
                />
                <Button size="sm" className="w-full">
                  Subscribe
                </Button>
              </div>

              {/* Business Hours */}
              <div className="bg-muted/20 rounded-lg p-4">
                <h5 className="font-semibold mb-3 flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-primary" />
                  Service Hours
                </h5>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Car Service:</span>
                    <span>24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Office:</span>
                    <span>9 AM - 9 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-sm text-muted-foreground mb-4 md:mb-0">
                © 2024 Smith Tours and Travels. All rights reserved.
              </div>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground mr-2">Follow us:</span>
                <div className="flex space-x-2">
                  <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                    <Instagram className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                    <Youtube className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;