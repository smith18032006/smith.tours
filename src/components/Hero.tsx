import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Phone } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { useToast } from "@/hooks/use-toast";
import { redirectToWhatsapp, formatBookingMessage } from "@/lib/whatsapp-service";

const Hero = () => {
  const { toast } = useToast();
  
  return (
    <>
      <section id="home" className="relative min-h-[100svh] md:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with responsive handling */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300"
            style={{ 
              backgroundImage: `url(${heroImage})`
            }}
          />
        </div>

        {/* Content positioned in cloud section */}

      {/* Mobile Hero Content (cloud region, higher above building) */}
<div className="block sm:hidden">
  <div className="absolute z-10 left-[50%] -translate-x-1/2
 top-[7%] w-[65vw] px-4 text-center">
     <br></br>

    <div className="space-y-2 bg-white/60 backdrop-blur-md p-3 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-black leading-tight">
        Smith Tours & Travels 
       
      </h1>
      <p className="text-xs text-black/70">24x7 Car Rentals at Kolhapur Airport</p>
      
    </div>
    
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <br></br><br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <br></br>
     <br></br>

    <br></br> 

    

    

    
    

    

































    <br></br>
    <Button
        size="sm"
        className="shadow-md bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 text-xs w-full"
        onClick={() => window.location.href = 'tel:+918888831115'}
      >
        <Phone className="w-4 h-4 mr-1 animate-pulse" />
        Call Now: +91 8888831115
      </Button>
  </div>
</div>


        {/* Desktop/Tablet Hero Content (left-aligned, higher, unchanged) */}
        <div className="hidden sm:block">
          <div className="absolute z-10 left-[8%] top-[10%] sm:max-w-sm md:top-[8%] md:left-[10%] md:max-w-md lg:max-w-lg text-left">
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-black/90 leading-tight">
                <br></br>
                Smith Tours
                <span className="block text-2xl md:text-3xl font-normal text-black/80 mt-1">& Travels</span>
              </h1>
              <p className="text-base md:text-lg text-black/80">24x7 Car Rentals at Kolhapur Airport</p>
              <Button
                size="sm"
                className="shadow-md bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-base w-fit min-w-[150px] border border-green-500"
                onClick={() => window.location.href = 'tel:+919876543210'}
              >
                <Phone className="w-5 h-5 mr-2 animate-pulse" />
                Call Now:  +91 8888831115
              </Button>
            </div>
          </div>
        </div>

      </section>

      {/* Book Your Ride Section Below Hero */}
      <section id="book-your-ride" className="bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <Card className="bg-card/95 backdrop-blur-sm shadow-large p-6">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Book Your Ride
              </h3>
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const pickup = formData.get('pickup') as string;
                  const drop = formData.get('drop') as string;
                  const date = formData.get('date') as string;
                  const passengers = formData.get('passengers') as string;
                  const carType = formData.get('carType') as string;

                  const text = `*New Booking Request*\n\nPickup: ${pickup}\nDrop: ${drop}\nDate: ${date}\nPassengers: ${passengers}\nCar Type: ${carType}\n\nPlease confirm availability and provide final quote.`;
                  
                  // Use our service to limit WhatsApp redirects
                  redirectToWhatsapp("hero-book-ride", text, toast);
                  
                  // Reset form
                  (e.target as HTMLFormElement).reset();
                }} 
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center">
                      <MapPin className="w-3.5 h-3.5 mr-1.5 text-primary" />
                      Pickup Location
                    </label>
                    <div className="relative">
                      <Input 
                        name="pickup" 
                        placeholder="Enter pickup location" 
                        className="pl-3" 
                        required 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Drop Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <Input name="drop" placeholder="Enter drop location" className="pl-10" required />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Pickup Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <Input name="date" type="date" className="pl-10" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Passengers</label>
                    <select 
                      name="passengers" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" 
                      required
                    >
                      <option value="" disabled selected>Select passengers</option>
                      <option value="1">1 Passenger</option>
                      <option value="2">2 Passengers</option>
                      <option value="3">3 Passengers</option>
                      <option value="4">4 Passengers</option>
                      <option value="5+">5+ Passengers</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Car Type</label>
                  <select 
                    name="carType" 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" 
                    required
                  >
                    <option value="" disabled selected>Select car type</option>
                    <option value="Hatchback">Hatchback</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="Luxury">Luxury</option>
                  </select>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold mt-2"
                >
                  Book Your Ride Now
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
