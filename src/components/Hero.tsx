import React from 'react';
import { Phone, MessageCircle, ArrowRight, Star, MapPin, Clock, CheckCircle2, ShieldCheck, Monitor } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

interface HeroProps {
  onOpenEnquiry: () => void;
  onExploreCourses: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry, onExploreCourses }) => {
  const whatsappUrl = `https://wa.me/${INSTITUTE_DATA.whatsappNumber}?text=${encodeURIComponent(
    INSTITUTE_DATA.whatsappDefaultMessage
  )}`;

  return (
    <section className="relative bg-gradient-to-b from-[#FFFAF0] via-white to-slate-50 py-12 md:py-18 overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Core Message & Direct CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Real Google Rating Trust Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-xs font-semibold text-slate-800">
              <div className="flex items-center text-amber-500">
                <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                <span className="ml-1 font-bold text-slate-900">{INSTITUTE_DATA.googleBusiness.rating} ★</span>
              </div>
              <span className="text-slate-400">·</span>
              <span className="text-slate-700">{INSTITUTE_DATA.googleBusiness.reviewCount} Google Reviews</span>
              <span className="text-slate-400">·</span>
              <span className="text-blue-900 font-bold">{INSTITUTE_DATA.googleBusiness.businessDuration}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#092B49] tracking-tight leading-[1.15]">
              Learn Computer Skills With Confidence.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal">
              Practical computer training in a friendly classroom environment in Andheri East.
              Personal desktop attention for students, college learners, beginners, and job seekers.
            </p>

            {/* Quick Location & Schedule Proof */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-slate-600">
              <div className="flex items-start gap-2 bg-white/90 p-2.5 rounded-lg border border-slate-200/80 shadow-2xs">
                <MapPin className="w-4 h-4 text-[#145EA8] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900 font-semibold">Location:</strong> Near Pump House, Western Express Highway, Andheri East
                </span>
              </div>
              <div className="flex items-start gap-2 bg-white/90 p-2.5 rounded-lg border border-slate-200/80 shadow-2xs">
                <Clock className="w-4 h-4 text-[#159447] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900 font-semibold">Hours:</strong> Open daily 9:00 AM – 10:00 PM (Monday – Sunday)
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-[#092B49] hover:bg-[#145EA8] rounded-lg shadow-sm transition-standard"
              >
                <span>Enquire About Classes</span>
                <ArrowRight className="w-4 h-4 text-[#F4C542]" />
              </button>

              <a
                href={`tel:${INSTITUTE_DATA.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-[#092B49] bg-white hover:bg-slate-50 border border-slate-300 rounded-lg shadow-2xs transition-standard"
              >
                <Phone className="w-4 h-4 text-[#145EA8]" />
                <span>Call Now</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-[#159447] hover:bg-[#12803c] rounded-lg shadow-sm transition-standard"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Honest local guarantee note */}
            <p className="text-xs text-slate-500 flex items-center gap-1.5 pt-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#159447] shrink-0" />
              <span>Friendly atmosphere · Individual desktop practice · No fake claims</span>
            </p>
          </div>

          {/* Right Column: Classroom Environment Visual Representation (No fake stock images) */}
          <div className="lg:col-span-5">
            <div className="relative bg-white rounded-2xl border-2 border-slate-200/90 shadow-md p-5 overflow-hidden">
              
              {/* Classroom Atmosphere Header */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Classroom & Lab Setup
                  </span>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-[#145EA8]">
                  Andheri East
                </span>
              </div>

              {/* Classroom Architecture Diagram recreating the Google Business visible environment */}
              <div className="rounded-xl bg-[#FEF9E7] border border-amber-200 p-4 space-y-3 relative">
                {/* Yellow Wall Visual Accent Header */}
                <div className="flex items-center justify-between text-xs text-amber-900/80 font-medium">
                  <span>Classroom Interior Overview</span>
                  <span className="font-bold text-amber-800">Warm Yellow Learning Space</span>
                </div>

                {/* Simulated Desktop Workstations Grid */}
                <div className="grid grid-cols-3 gap-2 py-2">
                  {[1, 2, 3].map((num) => (
                    <div
                      key={num}
                      className="bg-[#092B49] rounded-lg p-2.5 text-center text-white shadow-xs flex flex-col items-center justify-between border-t-2 border-[#145EA8]"
                    >
                      <div className="w-8 h-6 bg-slate-800 border border-slate-600 rounded flex items-center justify-center mb-1">
                        <div className="w-5 h-3.5 bg-blue-500/80 rounded-xs"></div>
                      </div>
                      <div className="w-7 h-1 bg-slate-500 rounded-full mb-1"></div>
                      <span className="text-[10px] font-bold text-[#F4C542]">PC Station {num}</span>
                    </div>
                  ))}
                </div>

                {/* Seating & Environment Features */}
                <div className="bg-white/90 rounded-lg p-3 text-xs space-y-2 border border-amber-100 text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#145EA8]"></span>
                    <span>Dedicated desktop systems for hands-on practice</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    <span>Comfortable blue workstations with dedicated trainer support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    <span>Step-by-step guidance tailored to each student's pace</span>
                  </div>
                </div>
              </div>

              {/* Quick Google Profile Verification Card */}
              <div className="mt-4 p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-900">Google Business Verified</div>
                  <div className="text-slate-500">4.8 Rating · 23 Reviews · 10+ Years</div>
                </div>
                <a
                  href={INSTITUTE_DATA.googleBusiness.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#145EA8] hover:underline"
                >
                  View on Google →
                </a>
              </div>

              {/* Action Prompt */}
              <div className="mt-3 text-center">
                <button
                  onClick={onExploreCourses}
                  className="w-full py-2 text-xs font-bold text-slate-700 hover:text-[#092B49] hover:bg-slate-100 rounded transition-colors"
                >
                  Explore Available Computer Courses ↓
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
