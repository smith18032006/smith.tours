// This counter ensures only 3 buttons can redirect to WhatsApp
let whatsappRedirectCounter = 0;
const MAX_REDIRECTS = 3;
const WHATSAPP_NUMBER = "918888831115";

// List of allowed button IDs
const ALLOWED_BUTTON_IDS = [
  "hero-book-ride",        // Book Your Ride (Hero section)
  "fleet-book-now",        // Book Now (Our Cars section)
  "contact-send-message"   // Send us a message (Contact section)
];

// Function to check if redirect is allowed
export function canRedirectToWhatsapp(buttonId: string): boolean {
  return ALLOWED_BUTTON_IDS.includes(buttonId) || whatsappRedirectCounter < MAX_REDIRECTS;
}

// Function to redirect to WhatsApp if allowed
export function redirectToWhatsapp(buttonId: string, message: string, toast: any): boolean {
  if (canRedirectToWhatsapp(buttonId)) {
    const encodedText = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
    window.open(url, "_blank");
    
    if (!ALLOWED_BUTTON_IDS.includes(buttonId)) {
      whatsappRedirectCounter++;
    }
    
    toast({
      title: "WhatsApp Opening",
      description: "Redirecting you to WhatsApp to discuss details."
    });
    
    return true;
  } else {
    toast({
      title: "Redirect Limit Reached",
      description: "You've reached the maximum number of WhatsApp redirects. Please use one of the main contact buttons.",
      variant: "destructive"
    });
    
    return false;
  }
}
// Function to format WhatsApp message for booking
export function formatBookingMessage(details: Record<string, any>): string {
  let message = "*Smith Tours Booking Request*\n\n";
  
  for (const [key, value] of Object.entries(details)) {
    if (value) {
      message += `*${key}*: ${value}\n`;
    }
  }
  
  return message;
}

// Function to get WhatsApp number
export function getWhatsappNumber(): string {
  return WHATSAPP_NUMBER;
}
