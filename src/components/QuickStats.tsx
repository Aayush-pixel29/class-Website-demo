import React from 'react';
import { Calendar, Star, MessageSquareQuote, MapPin } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

export const QuickStats: React.FC = () => {
  const stats = [
    {
      icon: Calendar,
      value: "10+ Years",
      label: "Business Duration",
      subtext: "Serving local learners in Andheri East",
      iconColor: "text-[#145EA8]"
    },
    {
      icon: Star,
      value: "4.8 ★",
      label: "Google Rating",
      subtext: "Based on real student reviews",
      iconColor: "text-amber-500"
    },
    {
      icon: MessageSquareQuote,
      value: "23 Reviews",
      label: "Google Reviews",
      subtext: "Shown on public Google profile",
      iconColor: "text-blue-600"
    },
    {
      icon: MapPin,
      value: "Andheri East",
      label: "Local Location",
      subtext: "Pump House, Western Express Highway",
      iconColor: "text-[#159447]"
    }
  ];

  return (
    <section className="bg-white py-8 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/80 rounded-xl p-4 border border-slate-200 hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <Icon className={`w-4 h-4 ${stat.iconColor}`} />
                </div>
                <div className="text-2xl font-black text-[#092B49] tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-600">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
