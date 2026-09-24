import React from 'react';
import { MessageCircle } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${INSTITUTE_DATA.whatsappNumber}?text=${encodeURIComponent(
    INSTITUTE_DATA.whatsappDefaultMessage
  )}`;

  return (
    <aside aria-label="WhatsApp Assistance" className="hidden md:block fixed bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#159447] hover:bg-[#12803c] text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 group focus:outline-hidden focus:ring-4 focus:ring-emerald-300"
        aria-label="Direct WhatsApp Enquiry"
      >
        <MessageCircle className="w-5 h-5 fill-white text-emerald-600 group-hover:scale-110 transition-transform" />
        <span className="text-xs font-bold tracking-wide">
          WhatsApp Us
        </span>
      </a>
    </aside>
  );
};
