import React, { useState } from 'react';
import { Phone, MessageCircle, ArrowRight, Star, MapPin, Clock, CheckCircle2, ShieldCheck, Monitor, Sparkles, Award, Users, Play, BookOpen, FileSpreadsheet, Calculator } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

interface HeroProps {
  onOpenEnquiry: (courseTitle?: string) => void;
  onExploreCourses: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry, onExploreCourses }) => {
  const [activeScreen, setActiveScreen] = useState<number>(0);

  const whatsappUrl = `https://wa.me/${INSTITUTE_DATA.whatsappNumber}?text=${encodeURIComponent(
    INSTITUTE_DATA.whatsappDefaultMessage
  )}`;

  const popularCourses = [
    { name: 'Basic Computer Skills', color: 'hover:bg-amber-500 hover:text-white border-amber-300 text-amber-900 bg-amber-50/80', badge: 'Beginners' },
    { name: 'MS Office (Word/Excel/PPT)', color: 'hover:bg-blue-600 hover:text-white border-blue-300 text-blue-900 bg-blue-50/80', badge: 'Productivity' },
    { name: 'Advanced Excel & Reports', color: 'hover:bg-emerald-600 hover:text-white border-emerald-300 text-emerald-900 bg-emerald-50/80', badge: 'Hot Skill' },
    { name: 'Tally & Accounting', color: 'hover:bg-purple-600 hover:text-white border-purple-300 text-purple-900 bg-purple-50/80', badge: 'Commerce' },
  ];

  const pcScreenDemos = [
    {
      id: 0,
      title: 'PC Station 01 · Excel Formulas & Tables',
      subtitle: 'SUM, VLOOKUP, Pivot Tables & Data Entry',
      badgeColor: 'bg-emerald-500',
      icon: FileSpreadsheet,
      textColor: 'text-emerald-300',
      codeSnippet: '=VLOOKUP(A2, StudentData!$A$1:$F$100, 3, FALSE)',
      highlights: ['Practical Formulas', 'Data Formatting', 'Salary & Bill Sheets']
    },
    {
      id: 1,
      title: 'PC Station 02 · Tally & GST Accounting',
      subtitle: 'Ledgers, Vouchers, Invoices & Balance Sheets',
      badgeColor: 'bg-purple-500',
      icon: Calculator,
      textColor: 'text-purple-300',
      codeSnippet: 'GATEWAY OF TALLY > ACCOUNTING VOUCHERS > SALES (F8)',
      highlights: ['GST Invoicing', 'Voucher Entry', 'Stock & Inventory']
    },
    {
      id: 2,
      title: 'PC Station 03 · Basic Computer & Typing',
      subtitle: 'Windows Navigation, Shortcuts, Internet & Email',
      badgeColor: 'bg-amber-500',
      icon: Monitor,
      textColor: 'text-amber-300',
      codeSnippet: 'TYPING SPEED DRILL: 42 WPM | ACCURACY: 98%',
      highlights: ['Keyboard Touch Typing', 'Email Attachments', 'Folder Safety']
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#FFFDF9] via-white to-slate-50 py-12 md:py-16 overflow-hidden border-b border-slate-200">
      {/* Decorative ambient glowing orbs */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-gradient-to-br from-amber-300/30 to-rose-300/20 rounded-full blur-3xl pointer-events-none animate-float"></div>
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-gradient-to-tr from-blue-300/30 to-emerald-300/20 rounded-full blur-3xl pointer-events-none animate-float-delayed"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Core Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Real Google Rating & Reputation Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-50 to-amber-100/70 border border-amber-300/90 text-xs font-semibold text-slate-900 shadow-2xs hover:scale-105 transition-transform cursor-default">
                <div className="flex items-center text-amber-500">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-500 animate-pulse" />
                  <span className="ml-1 font-extrabold text-slate-900">{INSTITUTE_DATA.googleBusiness.rating} ★</span>
                </div>
                <span className="text-amber-400">|</span>
                <span className="text-slate-700 font-medium">{INSTITUTE_DATA.googleBusiness.reviewCount} Google Reviews</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-xs font-bold text-[#145EA8] shadow-2xs hover:scale-105 transition-transform cursor-default">
                <Award className="w-3.5 h-3.5 text-blue-600" />
                <span>{INSTITUTE_DATA.googleBusiness.businessDuration} in Andheri</span>
              </div>
            </div>

            {/* Main Headline with dynamic gradient text */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#092B49] tracking-tight leading-[1.12]">
              Practical Computer Training <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#145EA8] via-[#2583E8] to-[#092B49]">
                With 1-on-1 Desktop Practice
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Learn essential digital & office skills at your own pace in a friendly classroom near Pump House, Andheri East. Dedicated system for every student with patient, step-by-step coaching.
            </p>

            {/* 3 Color-Coded Core Highlights with Interactive Hover */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="group flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-blue-100 hover:border-blue-400 shadow-2xs hover:shadow-md transition-all hover:-translate-y-1">
                <div className="w-9 h-9 rounded-xl bg-blue-50 group-hover:bg-[#145EA8] group-hover:text-white text-[#145EA8] flex items-center justify-center shrink-0 font-bold transition-colors">
                  💻
                </div>
                <div className="text-xs font-bold text-slate-800 leading-tight">
                  Dedicated PC <br />
                  <span className="text-[11px] font-semibold text-blue-600">100% Practical</span>
                </div>
              </div>

              <div className="group flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-emerald-100 hover:border-emerald-400 shadow-2xs hover:shadow-md transition-all hover:-translate-y-1">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 group-hover:bg-emerald-600 group-hover:text-white text-[#159447] flex items-center justify-center shrink-0 font-bold transition-colors">
                  ⏰
                </div>
                <div className="text-xs font-bold text-slate-800 leading-tight">
                  Flexible Batches <br />
                  <span className="text-[11px] font-semibold text-emerald-600">9 AM – 10 PM Daily</span>
                </div>
              </div>

              <div className="group flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-amber-100 hover:border-amber-400 shadow-2xs hover:shadow-md transition-all hover:-translate-y-1">
                <div className="w-9 h-9 rounded-xl bg-amber-50 group-hover:bg-amber-500 group-hover:text-white text-amber-700 flex items-center justify-center shrink-0 font-bold transition-colors">
                  🎓
                </div>
                <div className="text-xs font-bold text-slate-800 leading-tight">
                  Beginner Friendly <br />
                  <span className="text-[11px] font-semibold text-amber-700">All Age Groups</span>
                </div>
              </div>
            </div>

            {/* Action Trigger Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenEnquiry()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-extrabold text-white bg-gradient-to-r from-[#092B49] via-[#0D385E] to-[#145EA8] hover:from-[#145EA8] hover:to-[#092B49] rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-[1.03] active:scale-95"
              >
                <span>Enquire About Batches</span>
                <ArrowRight className="w-4 h-4 text-[#F4C542]" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#159447] to-[#12803C] hover:from-[#12803C] hover:to-[#0E6830] rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-[1.03]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>

              <a
                href={`tel:${INSTITUTE_DATA.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-[#092B49] bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-2xs hover:shadow-xs transition-all hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4 text-[#145EA8]" />
                <span>Call Centre</span>
              </a>
            </div>

            {/* Popular Courses Quick Tags */}
            <div className="pt-2">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Popular Hands-on Courses:
              </div>
              <div className="flex flex-wrap gap-2">
                {popularCourses.map((c, idx) => (
                  <button
                    key={idx}
                    onClick={() => onOpenEnquiry(c.name)}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all duration-200 flex items-center gap-1.5 shadow-2xs hover:scale-105 cursor-pointer ${c.color}`}
                  >
                    <span>+ {c.name}</span>
                    <span className="text-[10px] uppercase font-bold opacity-75">({c.badge})</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive PC Lab Live Simulator */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl border-2 border-slate-200/90 shadow-xl p-6 overflow-hidden relative glow-interactive">
              
              {/* Header with interactive live indicator */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                    Interactive Lab Stations
                  </span>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Click Stations Below ↓
                </span>
              </div>

              {/* Simulated PC Station Selector Buttons */}
              <div className="grid grid-cols-3 gap-2 mb-3">
                {pcScreenDemos.map((demo) => {
                  const isSelected = activeScreen === demo.id;
                  return (
                    <button
                      key={demo.id}
                      onClick={() => setActiveScreen(demo.id)}
                      className={`p-2.5 rounded-xl text-center transition-all flex flex-col items-center justify-between border-2 ${
                        isSelected
                          ? 'bg-[#092B49] text-white border-[#F4C542] shadow-md scale-105'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-transparent'
                      }`}
                    >
                      <Monitor className={`w-4 h-4 mb-1 ${isSelected ? 'text-[#F4C542]' : 'text-slate-500'}`} />
                      <span className="text-[10px] font-extrabold block">PC {demo.id + 1}</span>
                      <span className="text-[9px] opacity-80 block truncate w-full">
                        {demo.id === 0 ? 'Excel' : demo.id === 1 ? 'Tally' : 'Basics'}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Simulated Active Monitor Screen Display */}
              <div className="rounded-2xl bg-slate-900 border-2 border-slate-800 p-4 text-white space-y-3 relative shadow-inner overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${pcScreenDemos[activeScreen].badgeColor}`}></span>
                    <span className="text-xs font-bold text-slate-200 truncate">
                      {pcScreenDemos[activeScreen].title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                    LIVE DEMO
                  </span>
                </div>

                {/* Simulated Screen Code / Interface snippet */}
                <div className="bg-slate-950/90 rounded-lg p-3 font-mono text-xs border border-slate-800/80 space-y-1">
                  <div className="text-slate-400 text-[10px]">// Active Classroom Exercise:</div>
                  <div className={`font-bold ${pcScreenDemos[activeScreen].textColor}`}>
                    {pcScreenDemos[activeScreen].codeSnippet}
                  </div>
                </div>

                {/* Topic Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {pcScreenDemos[activeScreen].highlights.map((h, i) => (
                    <span key={i} className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                      ✓ {h}
                    </span>
                  ))}
                </div>

                <div className="text-[10px] text-slate-400 text-right pt-1">
                  Personal system with 1-on-1 trainer guidance
                </div>
              </div>

              {/* Action Button inside card */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="text-slate-500 font-medium">
                  Shop No. 10, Avishkar Society, Pump House
                </div>
                <button
                  onClick={() => onOpenEnquiry(pcScreenDemos[activeScreen].title.split(' · ')[1])}
                  className="font-bold text-[#145EA8] hover:text-[#092B49] flex items-center gap-1"
                >
                  <span>Book This Module</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


