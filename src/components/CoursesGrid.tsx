import React, { useState } from 'react';
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
  GraduationCap
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

  // Map icon by course ID
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
    <section id="courses" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#145EA8] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#F4C542]" />
              <span>Job-Ready & Skill-Based Modules</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092B49] tracking-tight">
              Explore Available Computer Courses
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              100% practical, hands-on computer courses for students, beginners, commerce learners, and professionals.
            </p>
          </div>

          <div className="text-left md:text-right shrink-0">
            <button
              onClick={() => onOpenEnquiry()}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#145EA8] hover:text-[#092B49] bg-blue-50 hover:bg-blue-100/70 px-3.5 py-2 rounded-lg transition-colors"
            >
              <span>Need help choosing a course?</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-10 no-scrollbar text-xs font-bold">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#092B49] to-[#145EA8] text-white shadow-sm scale-105'
                  : 'bg-slate-100/90 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat === 'All' ? 'All Courses' : cat}
            </button>
          ))}
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayCourses.map((course) => {
            const Icon = getCourseIcon(course.id);
            const whatsappCourseUrl = `https://wa.me/${INSTITUTE_DATA.whatsappNumber}?text=${encodeURIComponent(
              `Hello, I would like to enquire about the "${course.title}" course at Shree Computer Classes.`
            )}`;

            return (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-blue-400/60 shadow-2xs hover:shadow-lg transition-all card-hover-lift flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-6">
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-[#145EA8] transition-colors">
                      {course.category}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#145EA8] flex items-center justify-center group-hover:bg-[#092B49] group-hover:text-[#F4C542] transition-all shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-xl font-bold text-[#092B49] group-hover:text-[#145EA8] transition-colors mb-2">
                    {course.title}
                  </h3>

                  {/* Tagline / Short description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {course.description}
                  </p>

                  {/* Key Topics Highlights */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs">
                    <div className="font-bold text-slate-800 text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Key Topics Covered:</span>
                    </div>
                    <ul className="text-slate-600 space-y-1 pl-1">
                      {course.topicsCovered.slice(0, 3).map((topic, i) => (
                        <li key={i} className="text-xs text-slate-700 truncate">
                          • {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Audience Pills */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Ideal for:
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
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#092B49] hover:text-[#145EA8] transition-colors"
                  >
                    <span>Full Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={whatsappCourseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-emerald-700 hover:bg-emerald-100/70 bg-emerald-50 rounded-lg transition-colors"
                      title="Enquire on WhatsApp"
                      aria-label={`Enquire about ${course.title} on WhatsApp`}
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>

                    <button
                      onClick={() => onOpenEnquiry(course.title)}
                      className="px-3.5 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-[#092B49] to-[#145EA8] hover:from-[#145EA8] hover:to-[#092B49] rounded-lg shadow-2xs transition-all"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative fee disclaimer */}
        <div className="mt-10 p-5 rounded-2xl bg-amber-50/80 border border-amber-300/80 text-xs text-amber-950 flex flex-col sm:flex-row items-start gap-3.5 shadow-2xs">
          <div className="w-8 h-8 rounded-lg bg-amber-200/80 flex items-center justify-center text-amber-800 shrink-0 font-bold">
            <Info className="w-4 h-4 text-amber-800" />
          </div>
          <div>
            <strong className="text-amber-900 font-bold block mb-0.5">Transparent & Personalized Consultation:</strong>
            Because course modules, batch timings (morning/afternoon/evening), and individual pace vary, exact fees and scheduling are finalized with you at the centre. Call or visit Shop No. 10, Avishkar Society, Pump House, Andheri East for immediate enrollment guidance.
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

