import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Monitor, 
  FileSpreadsheet, 
  TableProperties, 
  Calculator, 
  Keyboard, 
  BookMarked,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Info,
  Sparkles,
  Clock,
  GraduationCap,
  Layers,
  ChevronRight
} from 'lucide-react';
import { Course, INSTITUTE_DATA } from '../data/instituteData';
import { CourseDetailModal } from './CourseDetailModal';

interface CoursesGridProps {
  onOpenEnquiry: (courseTitle?: string) => void;
  showAll?: boolean;
}

export const CoursesGrid: React.FC<CoursesGridProps> = ({ onOpenEnquiry, showAll = false }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalCourse, setActiveModalCourse] = useState<Course | null>(null);

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'Foundations':
        return {
          badgeBg: 'bg-amber-100 text-amber-900 border-amber-300',
          iconBg: 'bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white',
          hoverBorder: 'hover:border-amber-400',
          glow: 'hover:shadow-amber-100',
          gradientBar: 'from-amber-400 to-amber-500'
        };
      case 'Productivity':
        return {
          badgeBg: 'bg-blue-100 text-blue-900 border-blue-300',
          iconBg: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
          hoverBorder: 'hover:border-blue-400',
          glow: 'hover:shadow-blue-100',
          gradientBar: 'from-blue-500 to-indigo-600'
        };
      case 'Data & Analysis':
        return {
          badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-300',
          iconBg: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white',
          hoverBorder: 'hover:border-emerald-400',
          glow: 'hover:shadow-emerald-100',
          gradientBar: 'from-emerald-500 to-teal-600'
        };
      case 'Accounting':
        return {
          badgeBg: 'bg-purple-100 text-purple-900 border-purple-300',
          iconBg: 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
          hoverBorder: 'hover:border-purple-400',
          glow: 'hover:shadow-purple-100',
          gradientBar: 'from-purple-500 to-indigo-600'
        };
      case 'Digital Literacy':
        return {
          badgeBg: 'bg-rose-100 text-rose-900 border-rose-300',
          iconBg: 'bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white',
          hoverBorder: 'hover:border-rose-400',
          glow: 'hover:shadow-rose-100',
          gradientBar: 'from-rose-400 to-pink-500'
        };
      default:
        return {
          badgeBg: 'bg-slate-100 text-slate-800 border-slate-300',
          iconBg: 'bg-blue-50 text-[#145EA8] group-hover:bg-[#145EA8] group-hover:text-white',
          hoverBorder: 'hover:border-blue-400',
          glow: 'hover:shadow-blue-100',
          gradientBar: 'from-[#092B49] to-[#145EA8]'
        };
    }
  };

  const getCourseIcon = (id: string) => {
    switch (id) {
      case 'basic-computer-skills':
        return Monitor;
      case 'ms-office':
        return FileSpreadsheet;
      case 'advanced-excel':
        return TableProperties;
      case 'tally-accounting':
        return Calculator;
      case 'typing-digital-skills':
        return Keyboard;
      default:
        return BookMarked;
    }
  };

  const categories = ['All', 'Foundations', 'Productivity', 'Data & Analysis', 'Accounting', 'Digital Literacy'];

  const filteredCourses = selectedCategory === 'All'
    ? INSTITUTE_DATA.courses
    : INSTITUTE_DATA.courses.filter(c => c.category === selectedCategory);

  const displayCourses = showAll ? filteredCourses : filteredCourses.slice(0, 6);

  return (
    <section id="courses" className="py-16 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#145EA8] text-xs font-extrabold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#F4C542]" />
              <span>Interactive Course Explorer</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092B49] tracking-tight">
              What Would You Like To Learn?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Explore 100% practical, hands-on computer courses tailored to students, job seekers, and working adults.
            </p>
          </div>

          <div className="text-left md:text-right shrink-0">
            <button
              onClick={() => onOpenEnquiry()}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#145EA8] hover:text-[#092B49] bg-blue-50 hover:bg-blue-100 px-4 py-2.5 rounded-xl transition-all shadow-2xs hover:scale-105 cursor-pointer"
            >
              <span>Need help choosing? Ask Trainer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-10 no-scrollbar text-xs font-bold">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#092B49] to-[#145EA8] text-white shadow-md scale-105 font-black'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 hover:scale-102'
              }`}
            >
              {cat === 'All' ? '🌟 All Courses' : cat}
            </button>
          ))}
        </div>

        {/* Courses Cards Grid with Smooth Motion Layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {displayCourses.map((course) => {
              const Icon = getCourseIcon(course.id);
              const theme = getCategoryTheme(course.category);
              const whatsappCourseUrl = `https://wa.me/${INSTITUTE_DATA.whatsappNumber}?text=${encodeURIComponent(
                `Hello, I would like to enquire about the "${course.title}" course at Shree Computer Classes.`
              )}`;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={course.id}
                  className={`bg-white rounded-2xl border-2 border-slate-200/90 ${theme.hoverBorder} shadow-2xs hover:shadow-xl transition-all duration-300 card-hover-lift flex flex-col justify-between overflow-hidden group relative`}
                >
                  {/* Top dynamic colored gradient bar */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${theme.gradientBar}`}></div>

                  <div className="p-6">
                    {/* Category Badge & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border ${theme.badgeBg}`}>
                        {course.category}
                      </span>
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 shadow-2xs ${theme.iconBg}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Course Title */}
                    <h3 className="text-xl font-extrabold text-[#092B49] group-hover:text-[#145EA8] transition-colors mb-2 leading-snug">
                      {course.title}
                    </h3>

                    {/* Tagline / Short description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {course.description}
                    </p>

                    {/* Key Topics Highlights */}
                    <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs">
                      <div className="font-extrabold text-slate-800 text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Key Practical Modules:</span>
                      </div>
                      <ul className="text-slate-600 space-y-1 pl-1">
                        {course.topicsCovered.slice(0, 3).map((topic, i) => (
                          <li key={i} className="text-xs text-slate-700 truncate flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Audience Badges */}
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                        Best Suited For:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {course.targetAudience.slice(0, 3).map((aud, i) => (
                          <span key={i} className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                            {aud}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="bg-slate-50/90 p-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveModalCourse(course)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#092B49] hover:text-[#145EA8] transition-colors cursor-pointer group-hover:translate-x-0.5"
                    >
                      <span>Full Syllabus</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#145EA8]" />
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={whatsappCourseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-emerald-700 hover:bg-emerald-100 bg-emerald-50 rounded-xl transition-all hover:scale-110"
                        title="Enquire on WhatsApp"
                        aria-label={`Enquire about ${course.title} on WhatsApp`}
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>

                      <button
                        onClick={() => onOpenEnquiry(course.title)}
                        className="px-4 py-2 text-xs font-extrabold text-white bg-gradient-to-r from-[#092B49] to-[#145EA8] hover:from-[#145EA8] hover:to-[#092B49] rounded-xl shadow-2xs hover:shadow-md transition-all hover:scale-105 cursor-pointer"
                      >
                        Enquire
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Informative fee disclaimer */}
        <div className="mt-10 p-5 rounded-2xl bg-amber-50/90 border border-amber-300 text-xs text-amber-950 flex flex-col sm:flex-row items-start gap-3.5 shadow-2xs">
          <div className="w-9 h-9 rounded-xl bg-amber-200 flex items-center justify-center text-amber-900 shrink-0 font-bold">
            <Info className="w-4 h-4" />
          </div>
          <div>
            <strong className="text-amber-900 font-extrabold block mb-0.5">Transparent & Personalized Guidance:</strong>
            Because timing preferences (morning/afternoon/evening slots) and pace vary by learner, fee options and batch allocations are confirmed in person or on phone with the trainer. Call or visit Shop No. 10, Avishkar Society, Pump House, Andheri East.
          </div>
        </div>

      </div>

      {/* Course Detail Modal */}
      <CourseDetailModal
        course={activeModalCourse}
        onClose={() => setActiveModalCourse(null)}
        onOpenEnquiry={(title) => onOpenEnquiry(title)}
      />
    </section>
  );
};
