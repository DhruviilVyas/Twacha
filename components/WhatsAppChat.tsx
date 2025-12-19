import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppChat() {
  return (
    <a
      href="https://wa.me/9104775531?text=Hi%20Twacha clinic%2C%20I'Want to%20Book%20Appointment."
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
