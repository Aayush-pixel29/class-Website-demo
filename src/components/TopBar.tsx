import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#092B49] text-white text-xs border-b border-blue-950/40">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-y-1.5 gap-x-4">
        {/* Left: Location & Hours */}
        <div className="flex items-center flex-wrap gap-x-5 gap-y-1 text-slate-200">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#F4C542] shrink-0" />
            <span>Andheri East, Mumbai · Pump House / WEH</span>
          </div>
          <span className="hidden sm:inline text-slate-400">·</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#F4C542] shrink-0" />
            <span>Open Daily · 9:00 AM – 10:00 PM</span>
          </div>
        </div>

        {/* Right: Phone clickable */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${INSTITUTE_DATA.phoneRaw}`}
            className="flex items-center gap-1.5 font-medium text-white hover:text-[#F4C542] transition-colors"
            title="Call Shree Computer Classes"
          >
            <Phone className="w-3.5 h-3.5 text-[#F4C542] shrink-0" />
            <span className="tracking-wide">{INSTITUTE_DATA.displayPhone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
