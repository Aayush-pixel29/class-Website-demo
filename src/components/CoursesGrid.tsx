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
  Info
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
    <section id="courses" className="py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#145EA8]">
            <span>Course Catalog</span>
            <span className="text-slate-300">·</span>
            <span>Andheri East Centre</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#092B49] mt-2 mb-3">
            What Would You Like To Learn?
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Explore our practical computer training courses. Because fees and batch schedules depend on your timing preferences, contact the centre directly for fee quotes and batch enrollment.
          </p>
        </div>

        {/* Interactive Category Filter Tabs (Zero-pill button styling as per frontend skill) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-8 no-scrollbar text-xs font-semibold">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 rounded-md transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#092B49] text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
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
                className="bg-white rounded-xl border border-slate-200 hover:border-[#145EA8]/50 shadow-2xs hover:shadow-xs transition-standard flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-6">
                  {/* Category & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-slate-500">
                      {course.category}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#145EA8] flex items-center justify-center group-hover:bg-[#145EA8] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-xl font-bold text-[#092B49] group-hover:text-[#145EA8] transition-colors mb-2">
                    {course.title}
                  </h3>

                  {/* Tagline / Short description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {course.description}
                  </p>

                  {/* Who It's For list */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs">
                    <div className="font-semibold text-slate-700 text-[11px] uppercase tracking-wider">
                      Ideal for:
                    </div>
                    <div className="text-slate-600 flex flex-wrap gap-x-2 gap-y-1">
                      {course.targetAudience.slice(0, 3).map((aud, i) => (
                        <span key={i} className="text-slate-700">
                          • {aud}
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
                    <span>View Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={whatsappCourseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-emerald-700 hover:bg-emerald-50 rounded-md transition-colors"
                      title="Enquire on WhatsApp"
                      aria-label={`Enquire about ${course.title} on WhatsApp`}
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>

                    <button
                      onClick={() => onOpenEnquiry(course.title)}
                      className="px-3 py-1.5 text-xs font-bold text-white bg-[#145EA8] hover:bg-[#092B49] rounded-md transition-colors"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative fee disclaimer as required by client instructions */}
        <div className="mt-8 p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950 flex items-start gap-3">
          <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong>Transparent & Honest Information:</strong> Shree Computer Classes does not publish speculative fee figures or durations online without student consultation. Please call or visit the centre in Pump House, Andheri East to get exact, updated fees and choose your convenient batch timing.
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
