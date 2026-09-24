import React from 'react';
import { Phone, MessageCircle, MessageSquare } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

interface MobileStickyCTAProps {
  onOpenEnquiry: () => void;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({ onOpenEnquiry }) => {
  const whatsappUrl = `https://wa.me/${INSTITUTE_DATA.whatsappNumber}?text=${encodeURIComponent(
    INSTITUTE_DATA.whatsappDefaultMessage
  )}`;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-300 shadow-xl px-2 py-2 safe-area-inset-bottom">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Button */}
        <a
          href={`tel:${INSTITUTE_DATA.phoneRaw}`}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#092B49] text-xs font-bold transition-colors shadow-2xs"
          aria-label="Call Shree Computer Classes"
        >
          <Phone className="w-4 h-4 text-[#145EA8]" />
          <span className="truncate">Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-[#159447] hover:bg-[#12803c] text-white text-xs font-bold transition-colors shadow-2xs"
          aria-label="Message Shree Computer Classes on WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="truncate">WhatsApp</span>
        </a>

        {/* Enquire Button */}
        <button
          onClick={onOpenEnquiry}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-[#092B49] hover:bg-[#145EA8] text-[#F4C542] text-xs font-bold transition-colors shadow-2xs"
          aria-label="Enquire about computer classes"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="truncate">Enquire</span>
        </button>
      </div>
    </div>
  );
};
