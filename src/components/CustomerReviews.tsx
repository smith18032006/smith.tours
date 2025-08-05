import { useEffect, useState } from "react";
import { Star, MessageCircle } from "lucide-react";
// ...existing code...

// Sample review data
const reviews = [
	{
		rating: 5,
		text: "I used Smit travel suv kia from 10 th June till 14 th June.i had my parents with me . Rakesh Kamble is an excellent ,safe and very helpful owner/driver of the car. . He kept the car very clean. I would hire his services each time required because it is totally a worry free journey. !",
		author: "Supriya Pilgoankar",
	},
	{
		rating: 5,
		text: "Amazing and helpful person and really enjoyed the time while traveling. He is running brand new Kia Carens and ride was smooth and comfy.Keep it up !!",
		author: "Gagan Thakur",
	},
	{
		rating: 4,
		text: "Rajesh ji is a very good driver, and the car's ambiance is also very nice.",
		author: "Ashish Jain",
	},
	{
		rating: 5,
		text: "Good service, friendly driver and suggests good spots for tea",
		author: "Ayush Saini",
	},
];

const pastelColors = [
	"bg-[#f8fafc]", // light gray
	"bg-[#f1f5f9]", // slightly blue-gray
	"bg-[#fef6fb]", // light pink
	"bg-[#f6f8fe]", // light blue
];

// FloatingContactIcons moved to its own file for global use

export default function CustomerReviews() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		// Trigger animation on mount
		setTimeout(() => setVisible(true), 100);
	}, []);

 return (
   <section id="customer-reviews" className="py-16 px-4 bg-[#f6f8fa]">
	 <div className="max-w-3xl mx-auto">
	   <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-foreground">
		 What Our Customers Say
	   </h2>
	   <div className="grid gap-8 md:grid-cols-2">
		 {reviews.map((review, idx) => (
		   <div
			 key={idx}
			 className={`transition-all duration-700 ease-in-out rounded-2xl shadow-lg p-7 flex flex-col items-center ${pastelColors[
			   idx % pastelColors.length
			 ]} ${
			   visible
				 ? "opacity-100 translate-y-0"
				 : "opacity-0 translate-y-8"
			 } hover:shadow-xl hover:-translate-y-1`}
		   >
			 <div className="flex mb-3">
			   {[...Array(5)].map((_, i) => (
				 <Star
				   key={i}
				   className={`w-5 h-5 mr-1 ${
					 i < review.rating
					   ? "text-yellow-400 fill-yellow-400"
					   : "text-gray-300"
				   }`}
				   fill={
					 i < review.rating ? "#facc15" : "none"
				   }
				 />
			   ))}
			 </div>
			 <blockquote className="text-lg italic text-center text-muted-foreground mb-4">
			   “{review.text}”
			 </blockquote>
			 <div className="text-base font-semibold text-primary mt-2">
			   {review.author}
			 </div>
		   </div>
		 ))}
	   </div>
	 </div>
   </section>
 );
}
