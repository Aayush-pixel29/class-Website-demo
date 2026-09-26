import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Star, MapPin, Monitor, CheckCircle, Award } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

export const QuickStats: React.FC = () => {
  const stats = [
    {
      icon: Calendar,
      value: "10+ Years",
      label: "Established Trust",
      subtext: "Serving Andheri East community",
      badgeColor: "bg-blue-100 text-[#145EA8] border-blue-200",
      accentBorder: "group-hover:border-blue-300"
    },
    {
      icon: Star,
      value: "4.8 ★",
      label: "Google Rating",
      subtext: "23+ Authentic reviews",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
      accentBorder: "group-hover:border-amber-300"
    },
    {
      icon: Monitor,
      value: "100% Practical",
      label: "Hands-on Learning",
      subtext: "1 student per computer workstation",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      accentBorder: "group-hover:border-emerald-300"
    },
    {
      icon: MapPin,
      value: "Daily 9 AM – 10 PM",
      label: "Convenient Batches",
      subtext: "Near Pump House, Avishkar Society",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
      accentBorder: "group-hover:border-purple-300"
    }
  ];

  return (
    <section className="bg-white py-8 lg:py-10 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`group bg-gradient-to-br from-slate-50/90 to-white hover:to-blue-50/30 rounded-2xl p-4 sm:p-5 border-2 border-slate-200/90 ${stat.accentBorder} transition-all duration-300 card-hover-lift flex flex-col justify-between`}
              >
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className="text-[10px] sm:text-[11px] font-extrabold text-slate-500 uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center border ${stat.badgeColor} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-[#092B49] tracking-tight mb-0.5">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-600 font-medium leading-snug">
                    {stat.subtext}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
