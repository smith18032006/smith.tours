import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { redirectToWhatsapp } from "@/lib/whatsapp-service";

const Contact = () => {
  const { toast } = useToast();
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
                      <p className="text-muted-foreground">+91 8888831115</p>
                      <p className="text-muted-foreground">+91 9011156088</p>
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
                      <p className="text-muted-foreground">smithtours.kop@gmail.com</p>
                     
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
                      {/* Google Map Embed */}
                      <div className="mt-4 rounded-xl overflow-hidden shadow-lg">
                        <iframe
                          title="Smith Tours Location"
                          src="https://www.google.com/maps?q=Kolhapur+Airport,+Kolhapur,+Maharashtra+416005&output=embed"
                          width="100%"
                          height="220"
                          style={{ border: 0 }}
                          allowFullScreen={true}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
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
                  <Button className="w-full justify-start" size="lg" asChild>
                    <a href="tel:+918888831115">
                      <Phone className="w-5 h-5 mr-3" />
                      Call Now: +91 8888831115
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="lg" asChild>
                    <a href="https://wa.me/919011156088" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-3" />
                      WhatsApp: +91 9011156088
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="lg" asChild>
                    <a href="mailto:smithtours.kop@gmail.com">
                      <Mail className="w-5 h-5 mr-3" />
                      Email: smithtours.kop@gmail.com
                    </a>
                  </Button>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8 bg-card-gradient">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
              
              <form className="space-y-6" onSubmit={e => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
                const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value;
                const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
                const service = (form.elements.namedItem("service") as HTMLSelectElement)?.value;
                const date = (form.elements.namedItem("date") as HTMLInputElement)?.value;
                const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value;

                // Send directly to WhatsApp
                const text = `*New Inquiry from Smith Tours*\n\n*Name*: ${name}\n*Phone*: ${phone}\n*Email*: ${email}\n*Service*: ${service}\n*Date*: ${date}\n*Message*: ${message}\n\nPlease contact me to discuss this inquiry.`;
                redirectToWhatsapp("contact-send-message", text, toast);
                
                // Show success message
                toast({ 
                  title: "WhatsApp Opening", 
                  description: "Redirecting you to WhatsApp to send your inquiry." 
                });
                
                // Reset form
                form.reset();
              }}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Full Name *</label>
                    <Input name="name" placeholder="Enter your full name" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone Number *</label>
                    <Input name="phone" placeholder="Enter your phone number" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <Input name="email" type="email" placeholder="Enter your email address" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Service Type</label>
                    <select name="service" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" required>
                      <option value="" disabled selected>Select service</option>
                      <option value="Airport Transfer">Airport Transfer</option>
                      <option value="Local Trip">Local Trip</option>
                      <option value="Outstation Trip">Outstation Trip</option>
                      <option value="Wedding/Event">Wedding/Event</option>
                      <option value="Corporate Travel">Corporate Travel</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Travel Date</label>
                    <Input name="date" type="date" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea name="message" placeholder="Please provide details about your travel requirements, pickup location, destination, number of passengers, etc." rows={4} />
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
              <div className="space-y-6">
                {/* Google Maps Embed */}
                <div className="rounded-lg overflow-hidden h-80 shadow-lg">
                  <iframe
                    className="w-full h-full border-0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.6697900454156!2d74.2882382!3d16.7047247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc10074f7b09ea5%3A0x8dd5a3e35582e2d5!2sKolhapur%20Airport!5e0!3m2!1sen!2sin!4v1658305748974!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Smith Tours Location"
                  ></iframe>
                </div>
                
                {/* Address and Navigation Options */}
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="bg-card rounded-lg p-4 text-center shadow-md">
                    <h4 className="font-semibold mb-2">Our Address</h4>
                    <p className="text-sm text-muted-foreground">
                      Near Kolhapur Airport,<br />
                      Kolhapur, Maharashtra 416005
                    </p>
                  </div>
                  
                  <div className="bg-card rounded-lg p-4 text-center shadow-md">
                    <h4 className="font-semibold mb-2">Get Directions</h4>
                    <div className="flex justify-center space-x-2 mt-3">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.open("https://maps.google.com/?q=Kolhapur+Airport", "_blank")}
                      >
                        Google Maps
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.open("https://maps.apple.com/?address=Kolhapur+Airport", "_blank")}
                      >
                        Apple Maps
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-card rounded-lg p-4 text-center shadow-md">
                    <h4 className="font-semibold mb-2">Contact for Pickup</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Need a ride from your location?
                    </p>
                    <Button 
                      size="sm"
                      onClick={() => {
                        // First show toast that we're getting location
                        toast({
                          title: "Getting Your Location",
                          description: "Please allow access to your location when prompted.",
                        });
                        
                        // Try to get the user's current location
                        if (navigator.geolocation) {
                          navigator.geolocation.getCurrentPosition(
                            (position) => {
                              // Success - include coordinates in WhatsApp message
                              const lat = position.coords.latitude;
                              const lng = position.coords.longitude;
                              const googleMapsLink = `https://maps.google.com/?q=${lat},${lng}`;
                              
                              const text = `Hi, I need a pickup from my current location.%0A%0AMy location: ${googleMapsLink}%0A%0APlease send a car to pick me up.`;
                              redirectToWhatsapp("contact-pickup", text, toast);
                            },
                            (error) => {
                              // Error getting location
                              console.error("Error getting location:", error);
                              toast({
                                title: "Location Access Denied",
                                description: "We couldn't access your location. Please enter it manually in the message.",
                                variant: "destructive"
                              });
                              
                              // Send message without location
                              const text = "Hi, I need a pickup from my location. I'll provide my address in the chat.";
                              redirectToWhatsapp("contact-pickup", text, toast);
                            }
                          );
                        } else {
                          // Browser doesn't support geolocation
                          toast({
                            title: "Location Not Supported",
                            description: "Your browser doesn't support geolocation. Please enter your location manually.",
                            variant: "destructive"
                          });
                          
                          // Send message without location
                          const text = "Hi, I need a pickup from my location. I'll provide my address in the chat.";
                          redirectToWhatsapp("contact-pickup", text, toast);
                        }
                      }}
                    >
                      Request Pickup
                    </Button>
                  </div>
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