import React from 'react';
import { Star, ExternalLink, ShieldCheck, CheckCircle2, MessageSquare, ThumbsUp, Sparkles, MapPin } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

export const GoogleReviews: React.FC = () => {
  const reviewHighlights = [
    {
      title: "Patient, Step-by-Step Teaching",
      desc: "Trainers explain each topic clearly with repetition until beginners and elders feel completely comfortable.",
      tag: "Teaching Quality"
    },
    {
      title: "1-on-1 Dedicated Desktop Systems",
      desc: "Ample hands-on practice on your assigned computer workstation — no screen sharing or waiting.",
      tag: "Infrastructure"
    },
    {
      title: "Flexible Daily Slots (9 AM – 10 PM)",
      desc: "Open 7 days a week, making it easy for school kids, college students, and office workers to attend.",
      tag: "Convenience"
    },
    {
      title: "Prime Andheri East Location",
      desc: "Ground floor Shop No. 10 at Avishkar Society, right next to Pump House & Western Express Highway.",
      tag: "Accessibility"
    }
  ];

  return (
    <section id="reviews" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
            <span>Public Reputation on Google Maps</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092B49] tracking-tight">
            Verified Feedback & Google Reviews
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Real student experiences from our verified Google Business Profile in Andheri East, Mumbai.
          </p>
        </div>

        {/* Google Trust Banner Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Score Spotlight */}
            <div className="md:col-span-4 text-center md:text-left md:border-r md:border-slate-200 md:pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#145EA8] text-xs font-bold mb-3">
                <ShieldCheck className="w-4 h-4 text-[#145EA8]" />
                <span>Verified Business Profile</span>
              </div>

              <div className="text-6xl sm:text-7xl font-black text-[#092B49] tracking-tight leading-none">
                4.8
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-1.5 text-amber-500 my-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-6 h-6 fill-amber-400 text-amber-500" />
                ))}
              </div>

              <div className="text-base font-extrabold text-slate-900">
                23 Google Reviews
              </div>
              <div className="text-xs text-slate-500 mt-1">
                10+ Years in Business · Andheri East, Mumbai
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100">
                <a
                  href={INSTITUTE_DATA.googleBusiness.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-[#092B49] hover:bg-[#145EA8] rounded-xl shadow-xs transition-all hover:scale-[1.02]"
                >
                  <span>Open Google Maps Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Why Students Rate Shree Computer Classes */}
            <div className="md:col-span-8 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#F4C542]" />
                <span>What Students & Parents Appreciate Most</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {reviewHighlights.map((item, idx) => (
                  <div key={idx} className="bg-slate-50/80 hover:bg-slate-50 p-4 rounded-2xl border border-slate-200/80 transition-all card-hover-lift">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#145EA8] bg-blue-50 px-2 py-0.5 rounded">
                        {item.tag}
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                    <strong className="block text-sm text-slate-900 font-bold mb-1">
                      {item.title}
                    </strong>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Direct Link & Trust footer */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#145EA8]" />
                  <span>Shop No. 10, Avishkar Society, Pump House, Andheri East</span>
                </div>
                <span className="font-medium text-slate-600">
                  Read 100% genuine reviews on Google Search & Maps
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

