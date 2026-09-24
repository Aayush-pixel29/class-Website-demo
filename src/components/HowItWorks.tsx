import React from 'react';
import { BookOpen, PhoneCall, Laptop, ArrowRight } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

interface HowItWorksProps {
  onOpenEnquiry: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenEnquiry }) => {
  const steps = [
    {
      step: "01",
      title: "Choose Your Course",
      description: "Pick the skill you want to learn: Basic Computers, MS Office, Advanced Excel, Tally, or Typing. If you are unsure, ask us for recommendations.",
      icon: BookOpen
    },
    {
      step: "02",
      title: "Contact The Centre",
      description: "Call +91 98195 04128, send a WhatsApp message, or submit the website enquiry to discuss current course fees and choose your batch timing.",
      icon: PhoneCall
    },
    {
      step: "03",
      title: "Visit & Start Learning",
      description: "Walk into Shop No. 10 at Avishkar Society, Pump House, Andheri East. Sit at your dedicated desktop computer and begin practical training.",
      icon: Laptop
    }
  ];

  return (
    <section className="py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#145EA8]">
            Simple Admission Flow
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#092B49] mt-2 mb-3">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Getting started at Shree Computer Classes is quick, straightforward, and friendly.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-slate-300 transition-colors relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#145EA8]/30">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-blue-100/70 text-[#145EA8] flex items-center justify-center">
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
                  <span className="text-slate-500 font-medium">Step {index + 1} of 3</span>
                  {index === 1 ? (
                    <a
                      href={`tel:${INSTITUTE_DATA.phoneRaw}`}
                      className="font-bold text-[#145EA8] hover:underline"
                    >
                      Call Now →
                    </a>
                  ) : index === 0 ? (
                    <button
                      onClick={onOpenEnquiry}
                      className="font-bold text-[#145EA8] hover:underline"
                    >
                      Enquire →
                    </button>
                  ) : (
                    <span className="font-semibold text-emerald-700">Hands-on Lab</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Bar */}
        <div className="mt-10 p-5 rounded-xl bg-blue-50/80 border border-blue-100 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-slate-700">
            <strong>Ready to speak to the trainer?</strong> Classes run from 9:00 AM to 10:00 PM every day.
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${INSTITUTE_DATA.phoneRaw}`}
              className="px-4 py-2 text-xs font-bold text-white bg-[#092B49] hover:bg-[#145EA8] rounded-md transition-colors"
            >
              Call: {INSTITUTE_DATA.displayPhone}
            </a>
            <button
              onClick={onOpenEnquiry}
              className="px-4 py-2 text-xs font-bold text-[#092B49] bg-[#F4C542] hover:bg-amber-300 rounded-md transition-colors"
            >
              Enquire Online
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
