
import React from 'react';
import { Whatsapp } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://api.whatsapp.com/send/?phone=573106574475&text&type=phone_number&app_absent=0" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <Whatsapp className="w-10 h-10 text-white" />
    </a>
  );
};

export default WhatsAppButton;
