import React from 'react';
import { MapPin, Clock, Phone, Sparkles } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#051A2E] text-white text-xs border-b border-blue-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-y-1.5 gap-x-4">
        {/* Left: Location, Hours & Live Status */}
        <div className="flex items-center flex-wrap gap-x-4 gap-y-1 text-slate-300">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[11px] font-semibold text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Admissions Open for New Batches</span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-[#F4C542] shrink-0" />
            <span className="hidden sm:inline">Pump House, Andheri East, Mumbai</span>
            <span className="sm:hidden">Andheri East</span>
          </div>

          <span className="hidden md:inline text-slate-600">|</span>

          <div className="hidden md:flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-[#F4C542] shrink-0" />
            <span>Daily: 9:00 AM – 10:00 PM (Mon–Sun)</span>
          </div>
        </div>

        {/* Right: Direct Call Helpline */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${INSTITUTE_DATA.phoneRaw}`}
            className="inline-flex items-center gap-1.5 font-bold text-slate-100 hover:text-[#F4C542] transition-colors py-0.5 px-2 rounded hover:bg-white/5"
            title="Call Centre Helpline"
          >
            <Phone className="w-3.5 h-3.5 text-[#F4C542] shrink-0" />
            <span className="tracking-wide">{INSTITUTE_DATA.displayPhone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

