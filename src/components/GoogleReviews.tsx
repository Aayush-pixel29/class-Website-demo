import React from 'react';
import { Star, ExternalLink, ShieldCheck, CheckCircle2, MessageSquare, ThumbsUp } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

export const GoogleReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#145EA8]">
            <span>Verified Public Feedback</span>
            <span className="text-slate-300">·</span>
            <span>Google Business Profile</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#092B49] mt-2 mb-3">
            What Students See On Google
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            We value genuine learning feedback. All ratings shown here reflect the actual public ratings on our Google Business Profile in Andheri East, Mumbai.
          </p>
        </div>

        {/* Google Trust Banner Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Score Spotlight */}
            <div className="md:col-span-4 text-center md:text-left md:border-r md:border-slate-200 md:pr-8">
              <div className="text-5xl sm:text-6xl font-black text-[#092B49] tracking-tight">
                4.8
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-1 text-amber-500 my-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-500" />
                ))}
              </div>

              <div className="text-sm font-bold text-slate-800">
                23 Google Reviews
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                10+ Years in Business · Andheri East
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-center md:justify-start gap-1.5 text-xs text-emerald-700 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verified Google Business Listing</span>
              </div>
            </div>

            {/* Why Students Rate Shree Computer Classes */}
            <div className="md:col-span-8 space-y-4">
              <h3 className="text-base font-bold text-slate-900">
                Key Aspects Highlighted By Learners & Parents
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-[#159447] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Patient, Step-by-Step Teaching</strong>
                    Trainers explain each topic clearly until beginners feel confident operating computers.
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-[#159447] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Independent Desktop Systems</strong>
                    Adequate hands-on time so learners practice directly rather than just taking notes.
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-[#159447] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Convenient Daily Hours</strong>
                    Open until 10:00 PM every day, making evening batches easy for working adults.
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-[#159447] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Local Andheri East Accessibility</strong>
                    Located near Pump House and the Western Express Highway with simple transit access.
                  </div>
                </div>
              </div>

              {/* Direct Link to Google Reviews */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={INSTITUTE_DATA.googleBusiness.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#092B49] hover:bg-[#145EA8] rounded-lg shadow-xs transition-colors"
                >
                  <span>See all reviews on Google</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <span className="text-xs text-slate-500">
                  Do not invent review text — read directly on Google Maps.
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
