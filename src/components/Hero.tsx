import React from 'react';
import { Phone, MessageCircle, ArrowRight, Star, MapPin, Clock, CheckCircle2, ShieldCheck, Monitor, Sparkles, Award, Users } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

interface HeroProps {
  onOpenEnquiry: (courseTitle?: string) => void;
  onExploreCourses: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry, onExploreCourses }) => {
  const whatsappUrl = `https://wa.me/${INSTITUTE_DATA.whatsappNumber}?text=${encodeURIComponent(
    INSTITUTE_DATA.whatsappDefaultMessage
  )}`;

  const popularCourses = [
    'Basic Computer Skills',
    'MS Office (Word/Excel/PPT)',
    'Advanced Excel',
    'Tally & Accounting',
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#FFFDF9] via-white to-slate-50 py-12 md:py-16 overflow-hidden border-b border-slate-200">
      {/* Decorative subtle background elements */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-blue-200/25 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Core Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Real Google Rating & Reputation Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300/80 text-xs font-semibold text-slate-900 shadow-2xs">
                <div className="flex items-center text-amber-500">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                  <span className="ml-1 font-extrabold text-slate-900">{INSTITUTE_DATA.googleBusiness.rating} ★</span>
                </div>
                <span className="text-slate-300">|</span>
                <span className="text-slate-700 font-medium">{INSTITUTE_DATA.googleBusiness.reviewCount} Google Reviews</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-[#145EA8] shadow-2xs">
                <Award className="w-3.5 h-3.5" />
                <span>{INSTITUTE_DATA.googleBusiness.businessDuration} in Andheri</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#092B49] tracking-tight leading-[1.12]">
              Practical Computer Training <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#145EA8] to-[#092B49]">
                With 1-on-1 Desktop Practice
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Learn essential digital & office skills at your own pace in a friendly classroom near Pump House, Andheri East. Dedicated system for every student with patient, step-by-step coaching.
            </p>

            {/* 3 Core Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#145EA8] shrink-0 font-bold">
                  💻
                </div>
                <div className="text-xs font-bold text-slate-800 leading-tight">
                  Dedicated PC <br />
                  <span className="text-[11px] font-normal text-slate-500">100% Practical</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-[#159447] shrink-0 font-bold">
                  ⏰
                </div>
                <div className="text-xs font-bold text-slate-800 leading-tight">
                  Flexible Batches <br />
                  <span className="text-[11px] font-normal text-slate-500">9 AM – 10 PM Daily</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-700 shrink-0 font-bold">
                  🎓
                </div>
                <div className="text-xs font-bold text-slate-800 leading-tight">
                  Beginner Friendly <br />
                  <span className="text-[11px] font-normal text-slate-500">All Age Groups</span>
                </div>
              </div>
            </div>

            {/* Primary Action Trigger Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenEnquiry()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-extrabold text-white bg-gradient-to-r from-[#092B49] to-[#145EA8] hover:from-[#145EA8] hover:to-[#092B49] rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-[1.02]"
              >
                <span>Enquire About Batches</span>
                <ArrowRight className="w-4 h-4 text-[#F4C542]" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-white bg-[#159447] hover:bg-[#12803C] rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>

              <a
                href={`tel:${INSTITUTE_DATA.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-[#092B49] bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-2xs hover:shadow-xs transition-all"
              >
                <Phone className="w-4 h-4 text-[#145EA8]" />
                <span>Call Centre</span>
              </a>
            </div>

            {/* Trust Footer Note */}
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Avishkar Society, Near Pump House, Western Express Highway, Andheri East</span>
            </div>
          </div>

          {/* Right Column: Interactive Centre Showcase Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border-2 border-slate-200/90 shadow-lg p-6 overflow-hidden relative">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Live Centre Overview
                  </span>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Open Today · Closes 10 PM
                </span>
              </div>

              {/* Classroom Environment Card Styled after the Real Centre */}
              <div className="rounded-xl bg-gradient-to-br from-[#FFF8DE] to-[#FEF3C7] border border-amber-300/80 p-4 space-y-3">
                <div className="flex items-center justify-between text-xs text-amber-900 font-bold">
                  <span>Classroom & Computer Lab</span>
                  <span className="text-[11px] bg-white/80 px-2 py-0.5 rounded text-amber-800">
                    Shop No. 10, Ground Floor
                  </span>
                </div>

                {/* Visual Workstation Simulation */}
                <div className="grid grid-cols-3 gap-2 py-1">
                  {[1, 2, 3].map((num) => (
                    <div
                      key={num}
                      className="bg-[#092B49] rounded-lg p-2.5 text-center text-white shadow-xs flex flex-col items-center justify-between border-t-2 border-[#145EA8]"
                    >
                      <Monitor className="w-5 h-5 text-blue-300 mb-1" />
                      <span className="text-[10px] font-bold text-[#F4C542]">PC Unit {num}</span>
                    </div>
                  ))}
                </div>

                {/* Key Classroom Points */}
                <div className="bg-white/95 rounded-lg p-3 text-xs space-y-1.5 text-slate-700 shadow-2xs">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#145EA8]"></span>
                    <span>1 Student per Computer (No Screen Sharing)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    <span>Friendly, patient trainer sitting with you</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                    <span>Morning, afternoon & evening batch options</span>
                  </div>
                </div>
              </div>

              {/* Popular Courses Quick Enquire */}
              <div className="mt-4 space-y-2">
                <div className="text-xs font-bold text-slate-700">
                  Popular Courses In Demand:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {popularCourses.map((course, idx) => (
                    <button
                      key={idx}
                      onClick={() => onOpenEnquiry(course)}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-100 hover:bg-[#145EA8] hover:text-white text-slate-700 transition-colors border border-slate-200"
                    >
                      + {course}
                    </button>
                  ))}
                </div>
              </div>

              {/* Google Reviews Direct Link Badge */}
              <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                  <span className="font-bold text-slate-900">4.8 / 5 Rating</span>
                  <span className="text-slate-400">·</span>
                  <span className="text-slate-500">23 Google Reviews</span>
                </div>
                <a
                  href={INSTITUTE_DATA.googleBusiness.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#145EA8] hover:underline"
                >
                  View on Maps →
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

