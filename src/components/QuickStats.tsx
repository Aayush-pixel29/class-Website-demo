import React from 'react';
import { Calendar, Star, MessageSquareQuote, MapPin, CheckCircle, Monitor } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

export const QuickStats: React.FC = () => {
  const stats = [
    {
      icon: Calendar,
      value: "10+ Years",
      label: "Established Trust",
      subtext: "Serving Andheri East community",
      iconBg: "bg-blue-50 text-[#145EA8]"
    },
    {
      icon: Star,
      value: "4.8 ★",
      label: "Google Rating",
      subtext: "Based on 23+ authentic reviews",
      iconBg: "bg-amber-50 text-amber-600"
    },
    {
      icon: Monitor,
      value: "100% Practical",
      label: "Hands-on Learning",
      subtext: "1 student per computer workstation",
      iconBg: "bg-emerald-50 text-emerald-600"
    },
    {
      icon: MapPin,
      value: "Daily 9 AM – 10 PM",
      label: "Convenient Hours",
      subtext: "Near Pump House, Avishkar Society",
      iconBg: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <section className="bg-white py-10 border-b border-slate-200 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/70 hover:bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-blue-200 transition-all card-hover-lift flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${stat.iconBg}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#092B49] tracking-tight mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-600 font-medium">
                    {stat.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

