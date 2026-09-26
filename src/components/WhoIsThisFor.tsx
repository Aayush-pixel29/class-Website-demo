import React from 'react';
import { User, GraduationCap, Briefcase, Award, Users, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface WhoIsThisForProps {
  onSelectAudience?: (audience: string) => void;
  onOpenEnquiry: (prefillCourse?: string) => void;
}

export const WhoIsThisFor: React.FC<WhoIsThisForProps> = ({ onOpenEnquiry }) => {
  const learnerProfiles = [
    {
      title: "Absolute Beginners & Seniors",
      subtitle: "Zero experience needed",
      description: "Learn how to use mouse, keyboard, Windows, create folders, browse websites safely, and send emails step-by-step.",
      icon: User,
      recommended: "Basic Computer Skills",
      color: "bg-blue-50 text-[#145EA8]"
    },
    {
      title: "School Students",
      subtitle: "Curriculum practicals & typing speed",
      description: "Master computer fundamentals, school syllabus assignments, fast typing, and creating neat project presentations.",
      icon: GraduationCap,
      recommended: "Basic Computers · MS Office",
      color: "bg-amber-50 text-amber-700"
    },
    {
      title: "College & Commerce Learners",
      subtitle: "Essential academic & project tools",
      description: "Learn Excel calculations, project formatting, PowerPoint presentation decks, and computerized bookkeeping.",
      icon: Users,
      recommended: "MS Office · Tally · Advanced Excel",
      color: "bg-emerald-50 text-emerald-700"
    },
    {
      title: "Job Seekers & Admin Staff",
      subtitle: "Office computer proficiency",
      description: "Acquire mandatory skills required for back-office, administrative assistant, data entry, and accounting roles.",
      icon: Briefcase,
      recommended: "MS Office · Tally · Typing",
      color: "bg-purple-50 text-purple-700"
    },
    {
      title: "Working Professionals",
      subtitle: "Flexible morning & late evening slots",
      description: "Upgrade your productivity with VLOOKUP, pivot tables, dashboard reports, and advanced shortcuts after office hours.",
      icon: Award,
      recommended: "Advanced Excel · Tally Accounting",
      color: "bg-indigo-50 text-indigo-700"
    }
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#145EA8] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#F4C542]" />
            <span>Tailored for Every Learner</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092B49] tracking-tight">
            Who Are These Classes Designed For?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Whether starting from square one or upskilling for a job promotion, training is adapted to your personal pace.
          </p>
        </div>

        {/* Audience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learnerProfiles.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 shadow-2xs hover:shadow-lg transition-all card-hover-lift flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${item.color} shadow-2xs`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded">
                      Profile {index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs font-bold text-[#145EA8] mb-3">
                    {item.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] font-bold uppercase tracking-wider">Suggested Course:</span>
                    <strong className="text-slate-800 font-bold">{item.recommended}</strong>
                  </div>
                  <button
                    onClick={() => onOpenEnquiry(item.recommended.split(' · ')[0])}
                    className="inline-flex items-center gap-1 font-bold text-[#145EA8] hover:text-[#092B49] bg-blue-50 px-2.5 py-1.5 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* Quick Consultation Highlight Card */}
          <div className="bg-gradient-to-br from-[#092B49] via-[#0D385E] to-[#145EA8] text-white rounded-2xl p-6 flex flex-col justify-between shadow-md relative overflow-hidden">
            <div className="relative z-10">
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-[#F4C542] bg-white/10 px-2.5 py-1 rounded-full border border-white/10 mb-3">
                Free Guidance
              </span>
              <h3 className="text-xl font-bold text-white mb-2">
                Unsure Where To Start?
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">
                Talk directly with the trainer. We will evaluate your goals and suggest the best module and batch timing for you.
              </p>
            </div>
            <button
              onClick={() => onOpenEnquiry()}
              className="relative z-10 w-full py-3 px-4 text-xs font-black text-[#092B49] bg-[#F4C542] hover:bg-amber-300 rounded-xl transition-all shadow-sm text-center"
            >
              Get Free Course Advice →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

