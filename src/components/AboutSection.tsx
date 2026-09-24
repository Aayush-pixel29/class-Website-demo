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
  ArrowRight
} from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

interface AboutSectionProps {
  onOpenEnquiry: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="about" className="py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#145EA8]">
            <span>About The Centre</span>
            <span className="text-slate-300">·</span>
            <span>Andheri East, Mumbai</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#092B49] mt-2 mb-4">
            Practical Computer Education for the Local Community
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Shree Computer Classes is an established local computer training centre located at Avishkar Society, Pump House in Andheri East, Mumbai. For over 10 years, we have provided accessible, practical computer skills training to neighborhood students, job seekers, beginners, and working professionals.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#145EA8] flex items-center justify-center">
              <Monitor className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#092B49]">
              Our Learning Environment
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We believe computers cannot be learned through theory alone. Every student gets dedicated practice time on a desktop computer system to perform exercises with their own hands.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#092B49]">
              Who We Help
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              From school children mastering computer basics, to commerce students learning Tally and Excel, to homemakers and senior citizens navigating digital tools safely.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-[#159447] flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#092B49]">
              Open 7 Days · 9 AM to 10 PM
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our extended daily hours mean you can attend classes before college, after work, or on weekends without disrupting your regular daytime schedule.
            </p>
          </div>

        </div>

        {/* Detailed Classroom & Local Presence Story */}
        <div className="bg-gradient-to-r from-blue-50/70 to-amber-50/50 rounded-2xl p-6 sm:p-8 border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#092B49] bg-white px-3 py-1 rounded-full border border-slate-200">
                <Building2 className="w-3.5 h-3.5 text-[#145EA8]" />
                <span>Shop No. 10, Avishkar Society</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#092B49]">
                Why Local Students Choose Shree Computer Classes
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Rather than huge impersonal batches where students get lost, our classroom maintains a personal, focused atmosphere. The trainer is directly available to check your work, answer your questions immediately, and adjust the pace of teaching to your comfort.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#159447] shrink-0" />
                  <span>No rushed lectures — learn at your pace</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#159447] shrink-0" />
                  <span>Individual PC for every registered student</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#159447] shrink-0" />
                  <span>Transparent course communication</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#159447] shrink-0" />
                  <span>Direct contact with the centre trainer</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-3 text-center">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Local Fact Verification
              </div>
              <div className="text-3xl font-black text-[#092B49]">
                10+ Years
              </div>
              <div className="text-xs text-slate-600">
                Operating continuously in Andheri East, Mumbai
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenEnquiry}
                  className="w-full py-2.5 px-4 text-xs font-bold text-white bg-[#092B49] hover:bg-[#145EA8] rounded-lg transition-colors"
                >
                  Contact Centre Directly
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
