import React, { useState } from 'react';
import { 
  Monitor, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  Upload, 
  Info,
  Maximize2,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

interface ClassroomShowcaseProps {
  onOpenEnquiry: () => void;
  onViewGalleryFull?: () => void;
}

export const ClassroomShowcase: React.FC<ClassroomShowcaseProps> = ({ onOpenEnquiry, onViewGalleryFull }) => {
  const [activeSpot, setActiveSpot] = useState<number>(0);
  const [customPhotos, setCustomPhotos] = useState<string[]>([]);

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

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files);
      const newUrls = files.map(file => URL.createObjectURL(file));
      setCustomPhotos(prev => [...prev, ...newUrls]);
    }
  };

  return (
    <section id="classroom" className="py-16 bg-gradient-to-b from-slate-50 to-[#FFFDF9] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#145EA8] text-xs font-bold uppercase tracking-wider mb-2">
            <Monitor className="w-3.5 h-3.5 text-[#F4C542]" />
            <span>Real Classroom & Lab Setup</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092B49] tracking-tight">
            See Where & How You Will Learn
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            A genuine, traditional, and friendly computer training institute in Andheri East. Dedicated computer desks, patient guidance, and zero fake promises.
          </p>
        </div>

        {/* Classroom Interactive Showcase Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Visual Classroom Environment Representation */}
          <div className="lg:col-span-7 bg-white rounded-3xl border-2 border-slate-200/90 shadow-md p-6 sm:p-8 overflow-hidden">
            
            {/* Visual Classroom Simulator */}
            <div className="relative rounded-2xl bg-gradient-to-br from-[#FFF9E6] to-[#FEF3C7] border-2 border-amber-300/80 p-5 sm:p-7 overflow-hidden">
              
              {/* Back Wall Marker */}
              <div className="flex items-center justify-between text-xs font-bold text-amber-900 mb-4 pb-2 border-b border-amber-300/60">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
                  <span>Classroom Interior (Shop No. 10, Ground Floor)</span>
                </span>
                <span className="bg-white/80 text-amber-900 px-2.5 py-0.5 rounded-full text-[11px] font-bold border border-amber-200">
                  Yellow Walls · Blue Desks
                </span>
              </div>

              {/* Whiteboard Notice Header */}
              <div className="w-48 sm:w-60 mx-auto bg-white border border-slate-200 rounded-xl shadow-xs p-2.5 mb-6 text-center">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-1">
                  Practical Computer Training
                </div>
                <div className="text-xs font-extrabold text-[#092B49] pt-1">
                  Daily Hands-on Batches
                </div>
                <div className="text-[10px] text-emerald-700 font-bold">
                  9:00 AM – 10:00 PM (Mon – Sun)
                </div>
              </div>

              {/* Workstation Lab Rows Diagram */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { id: 1, label: 'PC Station 01', desk: 'Dedicated System' },
                  { id: 2, label: 'PC Station 02', desk: 'Dedicated System' },
                  { id: 3, label: 'PC Station 03', desk: 'Dedicated System' },
                ].map((pc) => (
                  <div
                    key={pc.id}
                    onClick={() => setActiveSpot(0)}
                    className="cursor-pointer group bg-[#092B49] hover:bg-[#145EA8] transition-all rounded-xl p-3 text-white shadow-xs border-b-4 border-blue-900 text-center flex flex-col items-center justify-between hover:scale-105"
                  >
                    {/* Monitor graphic */}
                    <div className="w-12 h-9 bg-slate-900 border-2 border-slate-700 rounded-lg flex items-center justify-center mb-1.5 shadow-2xs group-hover:border-amber-400 transition-colors">
                      <div className="w-8 h-5 bg-blue-400/90 rounded-xs flex items-center justify-center text-[7px] font-mono text-blue-950 font-bold">
                        PRACTICE
                      </div>
                    </div>
                    {/* Keyboard & Mouse */}
                    <div className="w-9 h-1.5 bg-slate-600 rounded-full mb-1"></div>
                    <div className="text-[10px] font-bold text-[#F4C542]">{pc.label}</div>
                    <div className="text-[9px] text-slate-300">{pc.desk}</div>
                  </div>
                ))}
              </div>

              {/* Seating / Lab features */}
              <div className="flex items-center justify-around px-4 py-2.5 bg-amber-200/60 rounded-xl text-[11px] text-amber-950 font-bold border border-amber-300/60">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                  <span>1 Student per PC</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                  <span>Personalized Pace</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
                  <span>Step-by-Step Help</span>
                </span>
              </div>

              {/* Verification watermark */}
              <div className="mt-4 text-center text-[11px] text-amber-900/90 font-medium">
                Accurately modeled on Shree Computer Classes's real classroom setup in Andheri East.
              </div>

            </div>

            {/* Uploaded Owner Photos */}
            {customPhotos.length > 0 && (
              <div className="mt-5 pt-5 border-t border-slate-200">
                <div className="text-xs font-bold text-slate-700 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Custom Loaded Classroom Photos:</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {customPhotos.map((url, idx) => (
                    <div key={idx} className="relative rounded-xl overflow-hidden border border-slate-200 aspect-4/3">
                      <img
                        src={url}
                        alt={`Classroom photo ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Photo upload toggle for owner */}
            <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-dashed border-slate-300 flex items-center justify-between text-xs">
              <div className="text-slate-600">
                <strong>Have direct classroom photos?</strong> Preview them instantly on this website demo.
              </div>
              <label className="cursor-pointer shrink-0 ml-3 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 font-bold text-slate-800 transition-colors shadow-2xs">
                <Upload className="w-3.5 h-3.5 text-[#145EA8]" />
                <span>Upload Photos</span>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>

          </div>

          {/* Right Column: Classroom Specifications & Interactive Points */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Facility & Learning Features
              </h3>

              <div className="space-y-2.5">
                {classroomFeatures.map((feat) => {
                  const isSelected = activeSpot === feat.id;
                  return (
                    <div
                      key={feat.id}
                      onClick={() => setActiveSpot(feat.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-blue-50/90 border-[#145EA8] shadow-xs'
                          : 'bg-slate-50/70 border-slate-200 hover:bg-slate-100/70'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-bold text-slate-900">
                          {feat.title}
                        </span>
                        <span className="text-[11px] font-bold text-[#145EA8] bg-white px-2 py-0.5 rounded-md border border-blue-200">
                          {feat.zone}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed mb-2.5">
                        {feat.detail}
                      </p>
                      <div className="text-[11px] text-slate-500 font-semibold flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat.specs}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Visiting Information */}
            <div className="bg-gradient-to-br from-[#092B49] via-[#0D385E] to-[#145EA8] text-white rounded-2xl p-6 space-y-3 shadow-md">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#F4C542]">
                <MapPin className="w-4 h-4" />
                <span>Visit The Centre in Person</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                Parents & students are welcome to walk in, inspect the computer setup, meet the trainer, and see how classes run before registering.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={onOpenEnquiry}
                  className="px-4 py-2.5 text-xs font-extrabold bg-[#F4C542] hover:bg-amber-300 text-[#092B49] rounded-xl transition-colors shadow-2xs"
                >
                  Schedule A Walk-In Visit
                </button>
                <a
                  href={`tel:${INSTITUTE_DATA.phoneRaw}`}
                  className="px-4 py-2.5 text-xs font-bold bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors border border-white/20"
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


