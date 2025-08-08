import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const priceMap: Record<string, string> = {
  "Mahalaxmi Temple": "₹700",
  "Rankala Lake": "₹800",
  "New Palace": "₹1500",
  "Jyotiba Temple": "₹1800",
  "Kopeshwar Temple": "₹2500",
  "Ganpatipule": "₹8500",
  "Kaneri Math": "₹1000",
  "Sindhudurg Fort": "₹7000",
  "Balumamachi Wadi": "₹1600",
  "Malvan": "₹9200",
  "Narsobachi Wadi": "₹1400",
  "Ramlinga": "₹1000",
  "Sanglicha Ganpati": "₹1300",
  "Vishalgad Fort": "₹3800",

  "Sangli": "₹2500",
  "Satara": "₹2999",
  "Goa": "₹7000",
  "Mumbai": "₹12000",
  "Pune": "₹7000",
  "Mahabaleshwar": "₹5999",
  "Belgaum": "₹2999",
  
  // Car categories with their prices
  "Kia Carens": "₹15/km",
  "Hyundai Xcent": "₹11/km",
  "Toyota Crista": "₹11/km"
};

export default function GetQuoteButton({ placeName }: { placeName: string }) {
  const [quoteText, setQuoteText] = useState("Get Quote");
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  
  const handleQuoteClick = () => {
    const price = priceMap[placeName] || "₹2999";
    setQuoteText(price);
    setShowDisclaimer(true);
  };
  
  return (
    <div className="flex-1">
      <Button
        size="sm"
        variant="outline"
        className="w-full"
        onClick={handleQuoteClick}
      >
        {quoteText}
      </Button>
      {showDisclaimer && (
        <p className="text-xs text-muted-foreground mt-1 text-center italic">
          *Price may vary
        </p>
      )}
    </div>
  );
}
