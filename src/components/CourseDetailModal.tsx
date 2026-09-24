import React from 'react';
import { X, CheckCircle2, Phone, MessageCircle, AlertCircle, Calendar, Monitor, BookOpen } from 'lucide-react';
import { Course, INSTITUTE_DATA } from '../data/instituteData';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onOpenEnquiry: (courseTitle: string) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({ course, onClose, onOpenEnquiry }) => {
  if (!course) return null;

  const whatsappCourseMessage = `Hello, I am interested in the "${course.title}" course at Shree Computer Classes. Please let me know the fee structure and upcoming batch timings.`;
  const whatsappUrl = `https://wa.me/${INSTITUTE_DATA.whatsappNumber}?text=${encodeURIComponent(
    whatsappCourseMessage
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="bg-[#092B49] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-300 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-block px-2.5 py-0.5 rounded text-xs font-bold bg-[#F4C542] text-[#092B49] mb-2 uppercase tracking-wider">
            {course.category}
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">
            {course.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 mt-1">
            {course.tagline}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto text-slate-700">
          
          {/* Overview */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Course Description
            </h3>
            <p className="text-sm leading-relaxed text-slate-700">
              {course.description}
            </p>
          </div>

          {/* Topics Covered */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Key Topics Covered
              </h3>
              <span className="text-[11px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-medium border border-amber-200">
                Editable syllabus outline
              </span>
            </div>
            <ul className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs sm:text-sm">
              {course.topicsCovered.map((topic, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#159447] shrink-0 mt-0.5" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-slate-500 mt-1.5 italic">
              Note: Detailed printed curriculum module available at the centre. Content customized according to learner level.
            </p>
          </div>

          {/* Learning Format & Environment */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-blue-50/70 p-3.5 rounded-lg border border-blue-100">
              <div className="flex items-center gap-1.5 font-bold text-[#145EA8] mb-1">
                <Monitor className="w-4 h-4" />
                <span>Learning Format</span>
              </div>
              <p className="text-slate-700">{course.learningFormat}</p>
            </div>

            <div className="bg-amber-50/70 p-3.5 rounded-lg border border-amber-100">
              <div className="flex items-center gap-1.5 font-bold text-amber-800 mb-1">
                <BookOpen className="w-4 h-4" />
                <span>Prerequisites</span>
              </div>
              <p className="text-slate-700">{course.prerequisites}</p>
            </div>
          </div>

          {/* Fee & Batch Notice (Honest placeholder) */}
          <div className="p-3.5 rounded-lg bg-slate-100 border border-slate-200 text-xs space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-slate-800">
              <AlertCircle className="w-4 h-4 text-[#145EA8]" />
              <span>Fees & Batch Timing Policy</span>
            </div>
            <p className="text-slate-600">
              Course fees and duration are confirmed directly by the institute based on current batch availability and student schedule. No hidden charges.
            </p>
          </div>

        </div>

        {/* Modal Footer CTAs */}
        <div className="bg-slate-50 p-4 px-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-2"
          >
            Close
          </button>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={`tel:${INSTITUTE_DATA.phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-[#092B49] bg-white border border-slate-300 rounded-md hover:bg-slate-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#145EA8]" />
              <span>Call For Fees</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-[#159447] hover:bg-[#12803c] rounded-md transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Enquiry</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenEnquiry(course.title);
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#092B49] hover:bg-[#145EA8] rounded-md transition-colors"
            >
              <span>Enquire Form</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
