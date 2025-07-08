import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get in touch with Smith Tours and Travels for all your car rental needs. 
              We're here to make your journey comfortable and memorable.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-6 bg-card-gradient">
                <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">24x7 Phone Support</h4>
                      <p className="text-muted-foreground">+91 9876543210</p>
                      <p className="text-muted-foreground">+91 8765432109</p>
                      <p className="text-sm text-muted-foreground mt-1">Available round the clock for bookings and assistance</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email Address</h4>
                      <p className="text-muted-foreground">info@smithtours.com</p>
                      <p className="text-muted-foreground">bookings@smithtours.com</p>
                      <p className="text-sm text-muted-foreground mt-1">Send us your queries and booking requests</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Office Address</h4>
                      <p className="text-muted-foreground">
                        Smith Tours & Travels<br />
                        Near Kolhapur Airport<br />
                        Kolhapur, Maharashtra 416005
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">Visit us for in-person consultation</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Service Hours</h4>
                      <p className="text-muted-foreground">24 Hours a Day, 7 Days a Week</p>
                      <p className="text-sm text-muted-foreground mt-1">Office: 9:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Quick Contact Options */}
              <Card className="p-6 bg-card-gradient">
                <h3 className="text-xl font-bold text-foreground mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <Button className="w-full justify-start" size="lg">
                    <Phone className="w-5 h-5 mr-3" />
                    Call Now: +91 9876543210
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="lg">
                    <MessageCircle className="w-5 h-5 mr-3" />
                    WhatsApp: +91 9876543210
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="lg">
                    <Mail className="w-5 h-5 mr-3" />
                    Email: info@smithtours.com
                  </Button>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8 bg-card-gradient">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Full Name *</label>
                    <Input placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone Number *</label>
                    <Input placeholder="Enter your phone number" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <Input type="email" placeholder="Enter your email address" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Service Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="airport">Airport Transfer</SelectItem>
                        <SelectItem value="local">Local Trip</SelectItem>
                        <SelectItem value="outstation">Outstation Trip</SelectItem>
                        <SelectItem value="wedding">Wedding/Event</SelectItem>
                        <SelectItem value="corporate">Corporate Travel</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Travel Date</label>
                    <Input type="date" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea 
                    placeholder="Please provide details about your travel requirements, pickup location, destination, number of passengers, etc."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * Required fields. We'll get back to you within 2 hours.
                </p>
              </form>
            </Card>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <Card className="p-6 bg-card-gradient">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Find Us</h3>
              <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Interactive map showing our location near Kolhapur Airport
                  </p>
                  <Button className="mt-4" variant="outline">
                    Get Directions
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;