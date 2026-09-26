import React from 'react';
import { BookOpen, PhoneCall, Laptop, ArrowRight, Sparkles } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

interface HowItWorksProps {
  onOpenEnquiry: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenEnquiry }) => {
  const steps = [
    {
      step: "01",
      title: "Choose Your Course",
      description: "Pick the skill you want to master: Basic Computers, MS Office, Advanced Excel, Tally, or Typing. If unsure, get free guidance.",
      icon: BookOpen,
      color: "bg-blue-50 text-[#145EA8]"
    },
    {
      step: "02",
      title: "Confirm Your Batch Timing",
      description: "Connect via Phone, WhatsApp, or online enquiry to pick a convenient slot (morning, afternoon, or evening) matching your schedule.",
      icon: PhoneCall,
      color: "bg-emerald-50 text-[#159447]"
    },
    {
      step: "03",
      title: "Sit at Your Dedicated PC & Learn",
      description: "Visit Shop No. 10 at Avishkar Society, Pump House. Get your dedicated system with step-by-step guidance from the first day.",
      icon: Laptop,
      color: "bg-amber-50 text-amber-700"
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#145EA8] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#F4C542]" />
            <span>3 Simple Steps</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092B49] tracking-tight">
            How Getting Started Works
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Quick, straightforward, and zero complicated procedures.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/90 hover:border-blue-300 transition-all card-hover-lift relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-slate-300">
                      {item.step}
                    </span>
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${item.color} shadow-2xs`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#092B49] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-bold">Step {index + 1} of 3</span>
                  {index === 1 ? (
                    <a
                      href={`tel:${INSTITUTE_DATA.phoneRaw}`}
                      className="font-bold text-[#145EA8] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Call Now</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  ) : index === 0 ? (
                    <button
                      onClick={onOpenEnquiry}
                      className="font-bold text-[#145EA8] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Enquire</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  ) : (
                    <span className="font-bold text-emerald-700">100% Practical</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Bar */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-blue-50/90 via-slate-50 to-amber-50/60 border border-blue-200/70 flex flex-wrap items-center justify-between gap-4 shadow-2xs">
          <div className="text-xs sm:text-sm text-slate-700">
            <strong className="text-slate-900 font-bold block sm:inline">Have Questions or Want to Start Today?</strong> Classes run from 9:00 AM to 10:00 PM daily.
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${INSTITUTE_DATA.phoneRaw}`}
              className="px-4 py-2.5 text-xs font-bold text-white bg-[#092B49] hover:bg-[#145EA8] rounded-xl transition-all shadow-2xs"
            >
              Call: {INSTITUTE_DATA.displayPhone}
            </a>
            <button
              onClick={onOpenEnquiry}
              className="px-4 py-2.5 text-xs font-bold text-[#092B49] bg-[#F4C542] hover:bg-amber-300 rounded-xl transition-all shadow-2xs font-black"
            >
              Enquire Online
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

