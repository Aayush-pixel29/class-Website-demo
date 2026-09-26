import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Monitor, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight, 
  ShieldCheck, 
  Camera, 
  Eye,
  Award
} from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

interface ClassroomShowcaseProps {
  onOpenEnquiry: () => void;
  onViewGalleryFull?: () => void;
}

export const ClassroomShowcase: React.FC<ClassroomShowcaseProps> = ({ onOpenEnquiry }) => {
  const [activeSpot, setActiveSpot] = useState<number>(0);
  const [activePhotoTab, setActivePhotoTab] = useState<number>(0);

  const galleryPhotos = [
    {
      id: 0,
      src: '/images/classroom-lab.jpg',
      title: 'Practical Computer Lab Setup',
      subtitle: 'Dedicated systems with individual monitors, keyboards & mouse',
      badge: 'Dedicated Workstations',
      tagColor: 'bg-[#092B49]'
    },
    {
      id: 1,
      src: '/images/teacher-guidance.jpg',
      title: '1-on-1 Step-by-Step Instructor Support',
      subtitle: 'Patient explanations and doubt clearance for all students',
      badge: 'Personalized Coaching',
      tagColor: 'bg-emerald-700'
    },
    {
      id: 2,
      src: '/images/excel-practical.jpg',
      title: 'Live Software & Excel Training',
      subtitle: 'Hands-on practice on spreadsheets, formulas, invoices & reports',
      badge: 'Live Office Exercises',
      tagColor: 'bg-[#145EA8]'
    }
  ];

  const classroomFeatures = [
    {
      id: 0,
      title: "1:1 Dedicated Computer Systems",
      zone: "Practical Lab",
      detail: "Each student is assigned their own desktop computer system during the class. You are never forced to share screens or wait for a turn.",
      specs: "100% hands-on training with personal keyboard & mouse"
    },
    {
      id: 1,
      title: "Cheerful & Focused Learning Environment",
      zone: "Classroom Interior",
      detail: "Clean, brightly lit learning space with cheerful yellow walls and dedicated blue study workstations, designed for distraction-free concentration.",
      specs: "Well-ventilated ground floor space at Avishkar Society"
    },
    {
      id: 2,
      title: "Step-by-Step Personal Instructor Guidance",
      zone: "Trainer Desk",
      detail: "The trainer sits right alongside students to observe your screen, correct errors immediately, and answer every question patiently.",
      specs: "Customized pace according to student capability"
    },
    {
      id: 3,
      title: "Prime Ground Floor Access (Shop No. 10)",
      zone: "Entrance & Reception",
      detail: "Conveniently located at Shop No. 10 on the ground floor of Avishkar Society, right next to Pump House & Western Express Highway.",
      specs: "Quick walking distance from bus stops & Andheri metro"
    }
  ];

  return (
    <section id="classroom" className="py-16 bg-gradient-to-b from-slate-50 to-[#FFFDF9] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#145EA8] text-xs font-extrabold uppercase tracking-wider mb-2">
              <Camera className="w-3.5 h-3.5 text-[#F4C542]" />
              <span>Real Classroom & Facility Tour</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092B49] tracking-tight">
              See Inside Shree Computer Classes
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Clean air-conditioned classroom, individual desktop stations, and friendly trainer support in Andheri East.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all hover:scale-105 cursor-pointer"
            >
              <span>Schedule Free Classroom Visit</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Real Classroom Interactive Photo Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Main Active Photo Container */}
          <div className="lg:col-span-8 bg-white rounded-3xl border-2 border-slate-200/90 shadow-lg overflow-hidden flex flex-col justify-between">
            
            <div className="relative aspect-16/10 sm:aspect-16/9 overflow-hidden bg-slate-900">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activePhotoTab}
                  src={galleryPhotos[activePhotoTab].src}
                  alt={galleryPhotos[activePhotoTab].title}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Overlay Gradient with Information */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#092B49]/95 via-[#092B49]/30 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-white text-xs font-black uppercase tracking-wider w-fit mb-2 shadow-sm ${galleryPhotos[activePhotoTab].tagColor}`}>
                  <span>{galleryPhotos[activePhotoTab].badge}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-1">
                  {galleryPhotos[activePhotoTab].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 font-medium">
                  {galleryPhotos[activePhotoTab].subtitle}
                </p>
              </div>
            </div>

            {/* Photo Switcher Thumbnails */}
            <div className="p-4 bg-slate-50 border-t border-slate-200/90 grid grid-cols-3 gap-3">
              {galleryPhotos.map((photo) => {
                const isCurrent = activePhotoTab === photo.id;
                return (
                  <button
                    key={photo.id}
                    onClick={() => setActivePhotoTab(photo.id)}
                    className={`relative rounded-xl overflow-hidden text-left p-2 border-2 transition-all flex items-center gap-2.5 cursor-pointer ${
                      isCurrent
                        ? 'bg-white border-[#145EA8] shadow-sm ring-2 ring-blue-400/30'
                        : 'bg-white/60 hover:bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-12 h-10 object-cover rounded-lg shrink-0"
                    />
                    <div className="hidden sm:block overflow-hidden">
                      <div className="text-[11px] font-bold text-slate-900 truncate">
                        {photo.badge}
                      </div>
                      <div className="text-[10px] text-slate-500 truncate">
                        Click to view
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Right Column: Classroom Specifications & Interactive Points */}
          <div className="lg:col-span-4 space-y-4">
            
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#F4C542]" />
                <span>Classroom Highlights</span>
              </h3>

              <div className="space-y-2.5">
                {classroomFeatures.map((feat) => {
                  const isSelected = activeSpot === feat.id;
                  return (
                    <div
                      key={feat.id}
                      onClick={() => setActiveSpot(feat.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-blue-50/90 border-[#145EA8] shadow-xs'
                          : 'bg-slate-50/70 border-slate-200 hover:bg-slate-100/70'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-slate-900">
                          {feat.title}
                        </span>
                        <span className="text-[10px] font-bold text-[#145EA8] bg-white px-2 py-0.5 rounded-md border border-blue-200">
                          {feat.zone}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed mb-1.5">
                        {feat.detail}
                      </p>
                      <div className="text-[10px] text-slate-500 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>{feat.specs}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Visiting Information */}
            <div className="bg-gradient-to-br from-[#092B49] via-[#0D385E] to-[#145EA8] text-white rounded-2xl p-5 space-y-2.5 shadow-md">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#F4C542]">
                <MapPin className="w-4 h-4" />
                <span>Visit Us in Person</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                Parents & students are welcome to walk into Shop No. 10 at Avishkar Society, try a sample PC session, and meet the faculty.
              </p>
              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={onOpenEnquiry}
                  className="px-3.5 py-2 text-xs font-extrabold bg-[#F4C542] hover:bg-amber-300 text-[#092B49] rounded-xl transition-colors shadow-2xs cursor-pointer"
                >
                  Book Walk-In Visit
                </button>
                <a
                  href={`tel:${INSTITUTE_DATA.phoneRaw}`}
                  className="px-3.5 py-2 text-xs font-bold bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors border border-white/20"
                >
                  Call Helpline
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
