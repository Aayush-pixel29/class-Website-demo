import React from 'react';
import { 
  Building2, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Users, 
  Monitor, 
  HeartHandshake,
  Phone,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Award,
  Star
} from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

interface AboutSectionProps {
  onOpenEnquiry: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="about" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#145EA8] text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-[#F4C542]" />
              <span>About Shree Computer Classes</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092B49] tracking-tight leading-tight">
              Dedicated Computer Education <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#145EA8] to-[#092B49]">
                Serving Andheri East Since 2014
              </span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Located at Shop No. 10 in Avishkar Society, Pump House, Shree Computer Classes was founded with a single mission: to empower local students, homemakers, job seekers, and office professionals with practical, confident computer literacy.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700">
                  <strong className="block text-slate-900 font-bold mb-0.5">1-on-1 Desktop Practice</strong>
                  No theory-only sessions; every student learns directly by operating their own PC station.
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700">
                  <strong className="block text-slate-900 font-bold mb-0.5">Patient Instructor Support</strong>
                  Clear, friendly guidance that respects your learning pace without rushing.
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenEnquiry}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#092B49] to-[#145EA8] text-white text-xs font-bold shadow-sm transition-all hover:scale-105"
              >
                Enquire About Courses
              </button>
              <a
                href={`tel:${INSTITUTE_DATA.phoneRaw}`}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#092B49] text-xs font-bold transition-colors"
              >
                Call: {INSTITUTE_DATA.displayPhone}
              </a>
            </div>
          </div>

          {/* Right Column: Visual Photo Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 group">
              <img
                src="/images/teacher-guidance.jpg"
                alt="Teacher explaining practical computer concepts to student"
                className="w-full h-80 sm:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#092B49]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4C542] text-[#092B49] text-xs font-black uppercase tracking-wider w-fit mb-1.5">
                  <span>10+ Years of Trusted Teaching</span>
                </div>
                <div className="text-sm font-bold text-slate-100">
                  Personalized attention for every enrolled student
                </div>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-3.5 shadow-lg border border-slate-200 flex items-center gap-3 animate-float">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <Star className="w-5 h-5 fill-amber-400 text-amber-500" />
              </div>
              <div>
                <div className="text-xs font-extrabold text-slate-900">4.8 / 5 Rating</div>
                <div className="text-[10px] text-slate-500">23 Google Reviews</div>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200/90 space-y-3 card-hover-lift">
            <div className="w-11 h-11 rounded-xl bg-blue-100 text-[#145EA8] flex items-center justify-center">
              <Monitor className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#092B49]">
              Hands-On Learning Environment
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We believe computers cannot be learned through theory alone. Every student gets dedicated practice time on a personal desktop computer system.
            </p>
          </div>

          <div className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200/90 space-y-3 card-hover-lift">
            <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#092B49]">
              Who We Guide
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              From school children mastering basic digital skills, to commerce students learning Tally and Excel, to homemakers and seniors seeking digital independence.
            </p>
          </div>

          <div className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200/90 space-y-3 card-hover-lift">
            <div className="w-11 h-11 rounded-xl bg-emerald-100 text-[#159447] flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#092B49]">
              Open Daily · 9 AM to 10 PM
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Extended 7-day timings mean you can attend classes before college, after work, or on weekends without disrupting your regular daytime schedule.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

