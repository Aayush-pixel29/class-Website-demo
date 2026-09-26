import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  Star, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Monitor, 
  Sparkles, 
  Award, 
  Users, 
  FileSpreadsheet, 
  Calculator,
  ChevronRight,
  Laptop
} from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

interface HeroProps {
  onOpenEnquiry: (courseTitle?: string) => void;
  onExploreCourses: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry, onExploreCourses }) => {
  const [activeMediaTab, setActiveMediaTab] = useState<number>(0);

  const whatsappUrl = `https://wa.me/${INSTITUTE_DATA.whatsappNumber}?text=${encodeURIComponent(
    INSTITUTE_DATA.whatsappDefaultMessage
  )}`;

  const popularCourses = [
    { name: 'Basic Computer Skills', color: 'hover:bg-amber-500 hover:text-white border-amber-300 text-amber-900 bg-amber-50/80', badge: 'Beginners' },
    { name: 'MS Office (Word/Excel/PPT)', color: 'hover:bg-blue-600 hover:text-white border-blue-300 text-blue-900 bg-blue-50/80', badge: 'Productivity' },
    { name: 'Advanced Excel & Reports', color: 'hover:bg-emerald-600 hover:text-white border-emerald-300 text-emerald-900 bg-emerald-50/80', badge: 'High Demand' },
    { name: 'Tally & Accounting', color: 'hover:bg-purple-600 hover:text-white border-purple-300 text-purple-900 bg-purple-50/80', badge: 'Commerce' },
  ];

  const showcaseSlides = [
    {
      id: 0,
      label: 'Classroom & Lab',
      icon: Monitor,
      image: '/images/classroom-lab.jpg',
      title: 'Personal Desktop Station For Every Student',
      subtitle: 'Clean, distraction-free environment with individual PC, monitor & keyboard.',
      tag: '100% Practical Lab',
      tagColor: 'bg-[#092B49] text-white',
      badge1: { text: '1 Student = 1 PC', sub: 'Zero screen sharing' },
      badge2: { text: 'Flexible Slots', sub: '9 AM – 10 PM Daily' }
    },
    {
      id: 1,
      label: '1-on-1 Coaching',
      icon: Users,
      image: '/images/teacher-guidance.jpg',
      title: 'Dedicated Trainer Sitting Right By Your Side',
      subtitle: 'Patient, step-by-step coaching at your own learning pace with instant doubt clearance.',
      tag: 'Personalized Support',
      tagColor: 'bg-emerald-600 text-white',
      badge1: { text: 'Beginner Friendly', sub: 'Kids to Seniors' },
      badge2: { text: '10+ Years Experience', sub: 'Trusted in Andheri' }
    },
    {
      id: 2,
      label: 'Live Practice',
      icon: FileSpreadsheet,
      image: '/images/excel-practical.jpg',
      title: 'Practical Work on Excel, Tally & Office Tools',
      subtitle: 'Master formulas, VLOOKUP, pivot tables, invoices, GST billing, and typing speed.',
      tag: 'Job-Ready Skills',
      tagColor: 'bg-[#145EA8] text-white',
      badge1: { text: 'Real Exercises', sub: 'Office & Business sheets' },
      badge2: { text: 'Govt. / ISO Syllabus', sub: 'Verified Curriculum' }
    }
  ];

  return (
    <section className="relative hero-mesh-bg py-12 lg:py-18 overflow-hidden border-b border-slate-200">
      {/* Background Animated Ambient Glowing Blobs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-amber-200/30 via-orange-100/20 to-transparent rounded-full blur-3xl pointer-events-none animate-float-slow"></div>
      <div className="absolute -bottom-10 left-10 w-[450px] h-[450px] bg-gradient-to-tr from-blue-200/35 via-emerald-100/25 to-transparent rounded-full blur-3xl pointer-events-none animate-float-delayed"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & High Impact CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            
            {/* Real Google Rating & Trust Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50/90 border border-amber-300 text-xs font-bold text-slate-900 shadow-2xs">
                <div className="flex items-center text-amber-500">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-500 animate-pulse" />
                  <span className="ml-1 font-extrabold text-slate-900">{INSTITUTE_DATA.googleBusiness.rating} ★</span>
                </div>
                <span className="text-amber-400">|</span>
                <span className="text-slate-700 font-semibold">{INSTITUTE_DATA.googleBusiness.reviewCount} Verified Google Reviews</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50/90 border border-blue-200 text-xs font-bold text-[#145EA8] shadow-2xs">
                <Award className="w-3.5 h-3.5 text-blue-600" />
                <span>{INSTITUTE_DATA.googleBusiness.businessDuration} in Andheri</span>
              </div>
            </div>

            {/* Main Headline with Dynamic Gradient */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold text-[#092B49] tracking-tight leading-[1.12]">
              Practical Computer Training <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#145EA8] via-[#2583E8] to-[#092B49]">
                With 1-on-1 Desktop Practice
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Learn essential digital & office skills at your own pace in a friendly classroom near Pump House, Andheri East. Dedicated system for every student with patient, step-by-step coaching.
            </p>

            {/* 3 Color-Coded Core Highlights with Interactive Hover */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="group flex items-center gap-2.5 p-3 rounded-2xl bg-white/90 border border-blue-100 hover:border-blue-400 shadow-2xs hover:shadow-md transition-all hover:-translate-y-1">
                <div className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-[#145EA8] group-hover:text-white text-[#145EA8] flex items-center justify-center shrink-0 font-bold transition-colors">
                  <Laptop className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-slate-800 leading-tight">
                  Dedicated PC <br />
                  <span className="text-[11px] font-semibold text-blue-600">100% Practical</span>
                </div>
              </div>

              <div className="group flex items-center gap-2.5 p-3 rounded-2xl bg-white/90 border border-emerald-100 hover:border-emerald-400 shadow-2xs hover:shadow-md transition-all hover:-translate-y-1">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 group-hover:bg-emerald-600 group-hover:text-white text-[#159447] flex items-center justify-center shrink-0 font-bold transition-colors">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-slate-800 leading-tight">
                  Flexible Batches <br />
                  <span className="text-[11px] font-semibold text-emerald-600">9 AM – 10 PM Daily</span>
                </div>
              </div>

              <div className="group flex items-center gap-2.5 p-3 rounded-2xl bg-white/90 border border-amber-100 hover:border-amber-400 shadow-2xs hover:shadow-md transition-all hover:-translate-y-1">
                <div className="w-10 h-10 rounded-xl bg-amber-50 group-hover:bg-amber-500 group-hover:text-white text-amber-700 flex items-center justify-center shrink-0 font-bold transition-colors">
                  <Users className="w-5 h-5" />
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
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-extrabold text-white bg-gradient-to-r from-[#092B49] via-[#0D385E] to-[#145EA8] hover:from-[#145EA8] hover:to-[#092B49] rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <span>Enquire About Batches</span>
                <ArrowRight className="w-4 h-4 text-[#F4C542]" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#159447] to-[#12803C] hover:from-[#12803C] hover:to-[#0E6830] rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>

              <a
                href={`tel:${INSTITUTE_DATA.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-bold text-[#092B49] bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-2xs hover:shadow-xs transition-all hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4 text-[#145EA8]" />
                <span>Call Centre</span>
              </a>
            </div>

            {/* Popular Hands-on Courses Tags */}
            <div className="pt-2">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#145EA8]" />
                <span>Popular Hands-on Courses:</span>
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

          </motion.div>

          {/* Right Column: Animated Interactive 3D Classroom & Lab Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-6"
          >
            <div className="bg-white rounded-3xl border-2 border-slate-200/90 shadow-2xl p-4 sm:p-5 overflow-hidden relative">
              
              {/* Top Interactive Tab Bar */}
              <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                    Live Lab Experience
                  </span>
                </div>
                
                {/* Switcher Pills */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                  {showcaseSlides.map((slide) => {
                    const Icon = slide.icon;
                    const isSelected = activeMediaTab === slide.id;
                    return (
                      <button
                        key={slide.id}
                        onClick={() => setActiveMediaTab(slide.id)}
                        className={`flex items-center gap-1 px-2.5 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#092B49] text-white shadow-xs'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                        }`}
                      >
                        <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#F4C542]' : 'text-slate-500'}`} />
                        <span className="hidden sm:inline">{slide.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Main Visual Frame with Image & Layered Badges */}
              <div className="relative rounded-2xl overflow-hidden aspect-4/3 sm:aspect-16/10 bg-slate-900 shadow-inner group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeMediaTab}
                    src={showcaseSlides[activeMediaTab].image}
                    alt={showcaseSlides[activeMediaTab].title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Dark Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-between p-4 sm:p-6">
                  
                  {/* Top Floating Badge */}
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md ${showcaseSlides[activeMediaTab].tagColor}`}>
                      {showcaseSlides[activeMediaTab].tag}
                    </span>

                    <div className="glass-pill px-3 py-1 rounded-full text-xs font-bold text-slate-800 flex items-center gap-1.5 shadow-sm">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                      <span>4.8 ★ Google Rated</span>
                    </div>
                  </div>

                  {/* Bottom Captions & Floating Highlights */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-black text-white leading-snug drop-shadow-sm">
                        {showcaseSlides[activeMediaTab].title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-200 font-medium line-clamp-2 mt-1">
                        {showcaseSlides[activeMediaTab].subtitle}
                      </p>
                    </div>

                    {/* Dual Micro Badges */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <div className="glass-card-dark p-2.5 rounded-xl border border-white/20 text-white">
                        <div className="text-xs font-extrabold text-[#F4C542]">
                          ✓ {showcaseSlides[activeMediaTab].badge1.text}
                        </div>
                        <div className="text-[10px] text-slate-300 font-medium truncate">
                          {showcaseSlides[activeMediaTab].badge1.sub}
                        </div>
                      </div>

                      <div className="glass-card-dark p-2.5 rounded-xl border border-white/20 text-white">
                        <div className="text-xs font-extrabold text-emerald-300">
                          ✓ {showcaseSlides[activeMediaTab].badge2.text}
                        </div>
                        <div className="text-[10px] text-slate-300 font-medium truncate">
                          {showcaseSlides[activeMediaTab].badge2.sub}
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

              {/* Bottom Interactive Feature Strip */}
              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#145EA8]" />
                  <span>Shop No. 10, Avishkar Society, Pump House</span>
                </div>
                
                <button
                  onClick={() => onOpenEnquiry()}
                  className="font-extrabold text-[#145EA8] hover:text-[#092B49] flex items-center gap-1 cursor-pointer transition-colors group"
                >
                  <span>Book Free Demo</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
