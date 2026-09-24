import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, Star, ShieldCheck, Heart } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnquiry }) => {
  const whatsappUrl = `https://wa.me/${INSTITUTE_DATA.whatsappNumber}?text=${encodeURIComponent(
    INSTITUTE_DATA.whatsappDefaultMessage
  )}`;

  return (
    <footer className="bg-[#092B49] text-white pt-14 pb-20 md:pb-12 border-t-4 border-[#F4C542]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-blue-900/60">
          
          {/* Col 1: Institute Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#F4C542] font-black text-lg border border-[#F4C542]/40">
                SC
              </div>
              <div>
                <div className="text-lg font-black tracking-tight text-white leading-tight">
                  Shree Computer Classes
                </div>
                <div className="text-xs text-slate-300">
                  Computer Training School · Andheri East
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Serving students, beginners, job seekers, and working professionals in Andheri East, Mumbai with practical, hands-on computer training on individual desktop systems.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-200">
              <Star className="w-3.5 h-3.5 fill-[#F4C542] text-[#F4C542]" />
              <span className="font-bold text-white">4.8 Rating</span>
              <span className="text-slate-400">·</span>
              <span>23 Google Reviews</span>
              <span className="text-slate-400">·</span>
              <span className="text-[#F4C542] font-semibold">10+ Years</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#F4C542]">
              Quick Navigation
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              {['home', 'about', 'courses', 'batches', 'classroom', 'reviews', 'faq', 'contact'].map((tab) => (
                <li key={tab}>
                  <button
                    onClick={() => {
                      onNavigate(tab);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white capitalize transition-colors text-left"
                  >
                    {tab === 'home' ? 'Home' : tab === 'classroom' ? 'Classroom Setup' : tab === 'batches' ? 'Batch Timings' : tab}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Computer Courses */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#F4C542]">
              Computer Courses
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              {INSTITUTE_DATA.courses.map((course) => (
                <li key={course.id}>
                  <button
                    onClick={() => {
                      onNavigate('courses');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors text-left"
                  >
                    {course.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Centre Address & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#F4C542]">
              Location & Timings
            </div>
            
            <div className="text-xs text-slate-300 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#F4C542] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {INSTITUTE_DATA.address.shop}, {INSTITUTE_DATA.address.street}, {INSTITUTE_DATA.address.area}, Mumbai 400093
                </span>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[#F4C542] shrink-0 mt-0.5" />
                <span>
                  Open Daily (Mon – Sun):<br />
                  <strong className="text-white">9:00 AM – 10:00 PM</strong>
                </span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-3.5 h-3.5 text-[#F4C542] shrink-0" />
                <a
                  href={`tel:${INSTITUTE_DATA.phoneRaw}`}
                  className="font-bold text-white hover:text-[#F4C542] transition-colors"
                >
                  {INSTITUTE_DATA.displayPhone}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenEnquiry}
                className="w-full py-2 px-3 text-xs font-bold text-[#092B49] bg-[#F4C542] hover:bg-amber-300 rounded transition-colors"
              >
                Enquire for Batch Timings
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Note & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Shree Computer Classes. All verified business information sourced from official Google Business listing.
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span>Andheri East · Mumbai · Maharashtra 400093</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
