import { MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { getWhatsappNumber, redirectToWhatsapp } from "@/lib/whatsapp-service";

export default function FloatingContactIcons() {
	const { toast } = useToast();
	const [clicked, setClicked] = useState(false);
	
	const handleWhatsAppClick = (e: React.MouseEvent) => {
		e.preventDefault();
		
		// Always allow the floating button (it's one of our priority buttons)
		const text = "Hi, I'm interested in Smith Tours services!";
		redirectToWhatsapp("floating-whatsapp", text, toast);
	};
	
	return (
		<div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
			<button
				onClick={handleWhatsAppClick}
				className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-3 flex items-center transition-all duration-200"
				aria-label="WhatsApp"
			>
				<MessageCircle className="w-6 h-6" />
			</button>
			<a
				href="https://www.instagram.com/smithtours.kolhapur?utm_source=qr&igsh=MWV0dWgzdjk0ZGoyMQ=="
				target="_blank"
				rel="noopener noreferrer"
				className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 text-white rounded-full shadow-lg p-3 flex items-center transition-all duration-200"
				aria-label="Instagram"
			>
				<FaInstagram className="w-6 h-6" />
			</a>
		</div>
	);
}
