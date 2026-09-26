import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageSquare, Menu, X, Sparkles, ChevronRight, MapPin, GraduationCap } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

interface NavbarProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  onOpenEnquiry: (prefillCourse?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onNavigate, onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'courses', label: 'Courses' },
    { id: 'batches', label: 'Batch Timings' },
    { id: 'classroom', label: 'Classroom & Lab' },
    { id: 'reviews', label: 'Reviews (4.8★)' },
    { id: 'about', label: 'About Us' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${INSTITUTE_DATA.whatsappNumber}?text=${encodeURIComponent(
    INSTITUTE_DATA.whatsappDefaultMessage
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Tagline */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 cursor-pointer group select-none"
          >
            <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-[#092B49] via-[#0D385E] to-[#145EA8] flex items-center justify-center text-[#F4C542] font-black text-xl tracking-wider shadow-md border border-white/20 group-hover:scale-105 group-hover:rotate-1 transition-all">
              <span className="drop-shadow-xs">SC</span>
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#F4C542] rounded-full border-2 border-white"></span>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-extrabold text-[#092B49] tracking-tight group-hover:text-[#145EA8] transition-colors leading-tight flex items-center gap-2">
                <span>Shree Computer Classes</span>
              </div>
              <div className="text-xs text-slate-500 font-medium flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-[#145EA8]" />
                <span>Andheri East, Mumbai · Since 2014</span>
              </div>
            </div>
          </div>

          {/* Desktop Nav Links with Animated Active Indicator */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3.5 py-2 text-xs xl:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                    isActive
                      ? 'text-[#092B49]'
                      : 'text-slate-600 hover:text-[#092B49] hover:bg-slate-100/60'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-slate-100/90 rounded-xl -z-0 border border-slate-200/80 shadow-2xs"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs: Direct Call & Enquire */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={`tel:${INSTITUTE_DATA.phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-800 bg-slate-100/90 hover:bg-slate-200 border border-slate-200 rounded-xl transition-all shadow-2xs hover:scale-[1.02]"
              title="Call Shree Computer Classes"
            >
              <Phone className="w-3.5 h-3.5 text-[#145EA8]" />
              <span>Call Now</span>
            </a>

            <button
              onClick={() => onOpenEnquiry()}
              className="btn-shimmer inline-flex items-center gap-2 px-4 py-2 text-xs font-black text-white bg-gradient-to-r from-[#092B49] via-[#0D385E] to-[#145EA8] hover:from-[#145EA8] hover:to-[#092B49] rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-[1.03] cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#F4C542]" />
              <span>Enquire Now</span>
            </button>
          </div>

          {/* Mobile Menu & Quick CTA Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenEnquiry()}
              className="px-3 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-[#092B49] to-[#145EA8] rounded-xl shadow-2xs"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#092B49] hover:bg-slate-100 rounded-xl focus:outline-hidden transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-1.5 shadow-xl overflow-hidden"
          >
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
              Browse Sections
            </div>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  currentTab === link.id
                    ? 'bg-blue-50 text-[#145EA8] font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`tel:${INSTITUTE_DATA.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-[#092B49] bg-slate-100 rounded-xl border border-slate-200"
              >
                <Phone className="w-4 h-4 text-[#145EA8]" />
                <span>Direct Call: {INSTITUTE_DATA.displayPhone}</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white bg-[#159447] hover:bg-[#12803C] rounded-xl shadow-2xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
