import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, Monitor } from 'lucide-react';
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
    { id: 'about', label: 'About Us' },
    { id: 'courses', label: 'Courses' },
    { id: 'batches', label: 'Batch Timings' },
    { id: 'classroom', label: 'Classroom & Setup' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo Zone */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-lg bg-[#092B49] flex items-center justify-center text-[#F4C542] font-black text-xl tracking-wider shadow-xs border-b-2 border-[#F4C542]">
              SC
            </div>
            <div>
              <div className="text-lg font-extrabold text-[#092B49] tracking-tight group-hover:text-[#145EA8] transition-colors leading-tight">
                Shree Computer Classes
              </div>
              <div className="text-xs text-slate-500 font-medium">
                Andheri East · Mumbai
              </div>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                    isActive
                      ? 'text-[#092B49] bg-slate-100/90'
                      : 'text-slate-600 hover:text-[#092B49] hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={`tel:${INSTITUTE_DATA.phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-[#092B49] bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
              title="Call Shree Computer Classes"
            >
              <Phone className="w-3.5 h-3.5 text-[#145EA8]" />
              <span>Call Now</span>
            </a>

            <button
              onClick={() => onOpenEnquiry()}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#145EA8] hover:bg-[#092B49] rounded-md shadow-xs transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#F4C542]" />
              <span>Enquire Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenEnquiry()}
              className="px-2.5 py-1.5 text-xs font-bold text-white bg-[#145EA8] rounded-md"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#092B49] rounded-md focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-1 shadow-lg">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
            Navigation Menu
          </div>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-semibold transition-colors ${
                currentTab === link.id
                  ? 'bg-blue-50 text-[#145EA8]'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${INSTITUTE_DATA.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-bold text-[#092B49] bg-slate-100 rounded-md"
            >
              <Phone className="w-4 h-4 text-[#145EA8]" />
              <span>Call: {INSTITUTE_DATA.displayPhone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-bold text-white bg-[#145EA8] rounded-md"
            >
              <MessageSquare className="w-4 h-4 text-[#F4C542]" />
              <span>Enquire About Courses</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
