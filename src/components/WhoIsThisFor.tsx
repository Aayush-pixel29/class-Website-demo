import React from 'react';
import { User, GraduationCap, Briefcase, Award, Users } from 'lucide-react';

interface WhoIsThisForProps {
  onSelectAudience?: (audience: string) => void;
  onOpenEnquiry: () => void;
}

export const WhoIsThisFor: React.FC<WhoIsThisForProps> = ({ onOpenEnquiry }) => {
  const learnerProfiles = [
    {
      title: "Beginners Learning Computers",
      subtitle: "Never touched a PC? Start here.",
      description: "Learn how to use mouse, keyboard, Windows, create folders, browse websites, and send emails step-by-step with patient instruction.",
      icon: User,
      recommended: "Basic Computer Skills"
    },
    {
      title: "School Students",
      subtitle: "Academic computer curriculum support",
      description: "Understand computer concepts, school syllabus practicals, typing speed, and preparing school presentations neatly.",
      icon: GraduationCap,
      recommended: "Basic Computers · MS Office"
    },
    {
      title: "College Students",
      subtitle: "Essential tools for college & projects",
      description: "Master document writing, Excel tables, presentation slides, and basic accounting required for assignments and commerce courses.",
      icon: Users,
      recommended: "MS Office · Tally · Advanced Excel"
    },
    {
      title: "Job Seekers",
      subtitle: "Practical office computer skills",
      description: "Acquire the standard computer skills required in modern back-office, administrative, data entry, and accounting roles.",
      icon: Briefcase,
      recommended: "MS Office · Tally · Typing"
    },
    {
      title: "Working Professionals",
      subtitle: "Upskilling with flexible timings",
      description: "Enhance your spreadsheet formulas, VLOOKUP, pivot tables, and accounting workflows with convenient morning or late evening batches.",
      icon: Award,
      recommended: "Advanced Excel · Tally Accounting"
    }
  ];

  return (
    <section className="py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#145EA8]">
            For All Age Groups & Backgrounds
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#092B49] mt-2 mb-3">
            Computer Classes For Every Learning Level
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Whether you are starting from zero or want to brush up on specific office applications, our practical classroom training is structured around your personal learning speed.
          </p>
        </div>

        {/* Audience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {learnerProfiles.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-5 border border-slate-200 hover:border-blue-300 shadow-2xs hover:shadow-xs transition-standard flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#145EA8] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#145EA8] mb-2.5">
                    {item.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">
                    Suggested: <strong className="text-slate-800">{item.recommended}</strong>
                  </span>
                  <button
                    onClick={onOpenEnquiry}
                    className="font-bold text-[#145EA8] hover:text-[#092B49]"
                  >
                    Enquire →
                  </button>
                </div>
              </div>
            );
          })}

          {/* Quick Custom Advice Card */}
          <div className="bg-[#092B49] text-white rounded-xl p-5 flex flex-col justify-between shadow-xs">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F4C542]">
                Not sure which course?
              </span>
              <h3 className="text-lg font-bold text-white mt-2 mb-2">
                Need Guidance on What to Learn?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Visit the centre or call us directly. We will recommend the right computer module based on your current knowledge and goal.
              </p>
            </div>
            <button
              onClick={onOpenEnquiry}
              className="w-full py-2.5 px-4 text-xs font-bold text-[#092B49] bg-[#F4C542] hover:bg-amber-300 rounded-md transition-colors text-center"
            >
              Ask Trainer For Advice
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
