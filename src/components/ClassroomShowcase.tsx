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
  ShieldAlert
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
      title: "Individual Desktop Workstations",
      zone: "Core Computer Lab",
      detail: "Each student is assigned their own desktop computer system during the class. You are never forced to share screens or wait for a turn.",
      specs: "Standard desktop PC with keyboard, optical mouse & monitor"
    },
    {
      id: 1,
      title: "Signature Yellow & Blue Classroom",
      zone: "Classroom Interior",
      detail: "Clean, brightly lit learning space with cheerful yellow walls and dedicated blue study benches, as seen on our official Google Business listing.",
      specs: "Well-ventilated, focused study space at Avishkar Society"
    },
    {
      id: 2,
      title: "Trainer Guidance & Explanation Area",
      zone: "Instructor Desk & Board",
      detail: "Trainer sits right alongside students to observe their screen, correct mistakes immediately, and explain concepts patiently until clear.",
      specs: "Personalized step-by-step doubt clearing"
    },
    {
      id: 3,
      title: "Ground Floor Shop Convenience",
      zone: "Entrance & Reception",
      detail: "Located at Shop No. 10 on the ground floor of Avishkar Society, easily accessible without navigating complex interior corridors.",
      specs: "Pump House landmark, Western Express Highway side"
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
    <section id="classroom" className="py-14 bg-gradient-to-b from-slate-50 to-[#FFFAF0] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#145EA8]">
            <span>Authentic Learning Environment</span>
            <span className="text-slate-300">·</span>
            <span>Andheri East</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#092B49] mt-2 mb-3">
            See Where You'll Learn
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            A genuine, traditional, and friendly local computer training classroom in Andheri East. No exaggerated corporate claims — just dedicated computer desks, patient guidance, and hands-on practice.
          </p>
        </div>

        {/* Classroom Interactive Showcase Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Visual Classroom Environment Representation */}
          <div className="lg:col-span-7 bg-white rounded-2xl border-2 border-slate-200 shadow-sm p-6 overflow-hidden">
            
            {/* Visual Classroom Simulator styled after real Google listing: yellow walls, blue furniture, desktop monitors */}
            <div className="relative rounded-xl bg-[#FFF6D6] border-2 border-amber-300/80 p-5 sm:p-7 overflow-hidden">
              
              {/* Back Wall Marker */}
              <div className="flex items-center justify-between text-xs font-bold text-amber-900 mb-4 pb-2 border-b border-amber-300/60">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  <span>Classroom Interior (Shop No. 10)</span>
                </span>
                <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded text-[11px]">
                  Yellow Walls · Blue Workstations
                </span>
              </div>

              {/* Whiteboard / Notice Board on Yellow Wall */}
              <div className="w-40 sm:w-52 mx-auto bg-white border-2 border-slate-300 rounded shadow-xs p-2 mb-6 text-center">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-1">
                  Classroom Board
                </div>
                <div className="text-[11px] font-extrabold text-[#092B49] pt-1">
                  Daily Practical Batches
                </div>
                <div className="text-[9px] text-slate-500">
                  9:00 AM – 10:00 PM
                </div>
              </div>

              {/* Workstation Lab Rows Diagram */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { id: 1, label: 'PC Station 01', desk: 'Blue Workstation' },
                  { id: 2, label: 'PC Station 02', desk: 'Blue Workstation' },
                  { id: 3, label: 'PC Station 03', desk: 'Blue Workstation' },
                ].map((pc) => (
                  <div
                    key={pc.id}
                    onClick={() => setActiveSpot(0)}
                    className="cursor-pointer group bg-[#092B49] hover:bg-[#145EA8] transition-colors rounded-lg p-3 text-white shadow-xs border-b-4 border-blue-900 text-center flex flex-col items-center justify-between"
                  >
                    {/* Monitor graphic */}
                    <div className="w-12 h-9 bg-slate-900 border-2 border-slate-700 rounded flex items-center justify-center mb-1.5 shadow-2xs group-hover:border-cyan-400">
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

              {/* Seating / Stools indication */}
              <div className="flex items-center justify-around px-4 py-2 bg-amber-200/50 rounded-lg text-[11px] text-amber-900 font-semibold border border-amber-300/50">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                  <span>Blue Student Stools</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                  <span>Red Student Stools</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                  <span>Individual PC Access</span>
                </span>
              </div>

              {/* Verification watermark */}
              <div className="mt-4 text-center text-[11px] text-amber-800/80 font-medium">
                Accurately modeled from real classroom photographs in the Google Business listing.
              </div>

            </div>

            {/* Uploaded Owner Photos (if owner or visitor selects real pictures) */}
            {customPhotos.length > 0 && (
              <div className="mt-5 pt-5 border-t border-slate-200">
                <div className="text-xs font-bold text-slate-700 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Client-Loaded High-Resolution Classroom Photos:</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {customPhotos.map((url, idx) => (
                    <div key={idx} className="relative rounded-lg overflow-hidden border border-slate-200 aspect-4/3">
                      <img
                        src={url}
                        alt={`Shree Computer Classes Classroom photo ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Owner Photo Staging Button */}
            <div className="mt-4 p-3 rounded-lg bg-slate-50 border border-dashed border-slate-300 flex items-center justify-between text-xs">
              <div className="text-slate-600">
                <strong>Institute Owner Notice:</strong> Have original classroom photos? Preview them instantly on this website.
              </div>
              <label className="cursor-pointer shrink-0 ml-3 inline-flex items-center gap-1 px-3 py-1.5 rounded bg-white border border-slate-300 hover:bg-slate-100 font-bold text-slate-800">
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
            
            <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Facility & Infrastructure Overview
              </h3>

              <div className="space-y-2.5">
                {classroomFeatures.map((feat) => {
                  const isSelected = activeSpot === feat.id;
                  return (
                    <div
                      key={feat.id}
                      onClick={() => setActiveSpot(feat.id)}
                      className={`p-3.5 rounded-lg border cursor-pointer transition-standard ${
                        isSelected
                          ? 'bg-blue-50/90 border-[#145EA8] shadow-2xs'
                          : 'bg-slate-50/70 border-slate-200 hover:bg-slate-100/70'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-slate-900">
                          {feat.title}
                        </span>
                        <span className="text-[11px] font-semibold text-[#145EA8] bg-white px-2 py-0.5 rounded border border-blue-200">
                          {feat.zone}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed mb-2">
                        {feat.detail}
                      </p>
                      <div className="text-[11px] text-slate-500 font-medium flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-[#159447] shrink-0" />
                        <span>{feat.specs}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Visiting Information */}
            <div className="bg-[#092B49] text-white rounded-xl p-5 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F4C542]">
                <MapPin className="w-4 h-4" />
                <span>Visit The Classroom In Person</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                Parents, students, and working professionals are welcome to walk in, see the computer systems, meet the instructor, and try a demo before taking admission.
              </p>
              <div className="pt-1 flex items-center gap-3">
                <button
                  onClick={onOpenEnquiry}
                  className="px-4 py-2 text-xs font-bold bg-[#F4C542] hover:bg-amber-300 text-[#092B49] rounded-md transition-colors"
                >
                  Schedule A Visit
                </button>
                <a
                  href={`tel:${INSTITUTE_DATA.phoneRaw}`}
                  className="px-4 py-2 text-xs font-bold bg-white/10 hover:bg-white/20 text-white rounded-md transition-colors"
                >
                  Call Centre
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
