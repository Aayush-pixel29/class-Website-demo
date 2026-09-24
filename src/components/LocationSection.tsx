import React from 'react';
import { MapPin, Navigation, Clock, Phone, ExternalLink, Bus, Train, Car } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#145EA8]">
            <span>Centre Location</span>
            <span className="text-slate-300">·</span>
            <span>Andheri East, Mumbai</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#092B49] mt-2 mb-3">
            Find Shree Computer Classes
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Conveniently situated in Avishkar Society near Pump House with direct proximity to the Western Express Highway.
          </p>
        </div>

        {/* Location Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Address, Hours & Get Directions CTA */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Address Box */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#145EA8] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#092B49]">
                    Shree Computer Classes
                  </h3>
                  <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                    {INSTITUTE_DATA.address.shop},<br />
                    {INSTITUTE_DATA.address.street},<br />
                    {INSTITUTE_DATA.address.area}, Mumbai,<br />
                    {INSTITUTE_DATA.address.state} {INSTITUTE_DATA.address.pincode}
                  </p>
                  <p className="text-xs text-slate-500 mt-1.5 font-medium">
                    Landmark: {INSTITUTE_DATA.address.landmark}
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="pt-4 border-t border-slate-200 flex items-start gap-3 text-xs sm:text-sm">
                <Clock className="w-4 h-4 text-[#159447] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-semibold">Opening Hours:</strong>
                  <span className="text-slate-700">{INSTITUTE_DATA.hours.days}</span>
                  <div className="text-slate-900 font-bold">{INSTITUTE_DATA.hours.timings}</div>
                  <span className="text-xs text-slate-500">{INSTITUTE_DATA.hours.note}</span>
                </div>
              </div>

              {/* Direct Phone */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#145EA8]" />
                  <span className="text-slate-700 font-medium">Contact Number:</span>
                  <a
                    href={`tel:${INSTITUTE_DATA.phoneRaw}`}
                    className="font-bold text-[#092B49] hover:text-[#145EA8]"
                  >
                    {INSTITUTE_DATA.displayPhone}
                  </a>
                </div>
              </div>

              {/* Get Directions Action */}
              <div className="pt-2">
                <a
                  href={INSTITUTE_DATA.googleBusiness.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 text-sm font-bold text-white bg-[#092B49] hover:bg-[#145EA8] rounded-xl shadow-xs transition-colors"
                >
                  <Navigation className="w-4 h-4 text-[#F4C542]" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-300 ml-1" />
                </a>
              </div>
            </div>

            {/* Local Transit Guide */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                How to Reach Us
              </h4>
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2.5">
                  <Bus className="w-4 h-4 text-blue-600 shrink-0" />
                  <span><strong>By BEST Bus:</strong> Get down at Pump House bus stop on Jijamata Marg / Western Express Highway.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Train className="w-4 h-4 text-blue-600 shrink-0" />
                  <span><strong>By Metro / Local Train:</strong> Andheri Station (East) or WEH Metro Line 7 / Line 1 stations are nearby with auto/bus connections.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Car className="w-4 h-4 text-blue-600 shrink-0" />
                  <span><strong>By Two-Wheeler / Car:</strong> Direct turn from Western Express Highway into Jijamata Marg, Avishkar Society.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Map Card (Designed with clean Google Map aesthetic) */}
          <div className="lg:col-span-6">
            <div className="bg-slate-100 rounded-2xl border-2 border-slate-200 overflow-hidden shadow-xs relative">
              
              {/* Map Canvas Visual Mockup with actual coordinates & pins */}
              <div className="h-96 w-full bg-[#E5E9EC] relative flex flex-col justify-between p-4 overflow-hidden">
                
                {/* Visual Street Grid Lines */}
                <div className="absolute inset-0 opacity-40 pointer-events-none">
                  {/* Western Express Highway representation */}
                  <div className="absolute left-1/3 top-0 bottom-0 w-8 bg-amber-200 border-x-2 border-amber-300 transform -rotate-12 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-amber-800 tracking-wider -rotate-90 whitespace-nowrap">
                      WESTERN EXPRESS HIGHWAY
                    </span>
                  </div>
                  {/* Jijamata Marg */}
                  <div className="absolute top-1/2 left-0 right-0 h-6 bg-slate-300 border-y border-slate-400 transform -rotate-6 flex items-center px-4">
                    <span className="text-[9px] font-bold text-slate-700">
                      JIJAMATA MARG
                    </span>
                  </div>
                </div>

                {/* Top Overlay: Location Badge */}
                <div className="relative z-10 self-start bg-white/95 backdrop-blur-xs p-3 rounded-xl border border-slate-200 shadow-sm max-w-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-600 animate-pulse"></div>
                    <span className="text-xs font-bold text-[#092B49]">
                      Shree Computer Classes
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-600 mt-1">
                    Shop No. 10, Avishkar Society, Pump House, Andheri East
                  </div>
                </div>

                {/* Center Pin Marker */}
                <div className="relative z-10 self-center text-center">
                  <div className="inline-flex flex-col items-center">
                    <div className="bg-[#092B49] text-white px-3 py-1.5 rounded-lg shadow-md text-xs font-bold flex items-center gap-1.5 border border-[#F4C542]">
                      <MapPin className="w-3.5 h-3.5 text-[#F4C542] fill-[#F4C542]" />
                      <span>Shree Computer Classes</span>
                    </div>
                    <div className="w-0.5 h-6 bg-[#092B49]"></div>
                    <div className="w-3 h-1.5 bg-black/30 rounded-full blur-2xs"></div>
                  </div>
                </div>

                {/* Bottom Overlay: Direct Google Maps Launch Link */}
                <div className="relative z-10 bg-white/95 backdrop-blur-xs p-3 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                  <div className="text-xs">
                    <strong className="text-slate-900 block">4.8 ★ (23 Reviews)</strong>
                    <span className="text-slate-500">Google Business Verified</span>
                  </div>
                  <a
                    href={INSTITUTE_DATA.googleBusiness.mapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 text-xs font-bold text-white bg-[#145EA8] hover:bg-[#092B49] rounded-md transition-colors inline-flex items-center gap-1"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
