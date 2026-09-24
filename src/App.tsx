/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickStats } from './components/QuickStats';
import { WhoIsThisFor } from './components/WhoIsThisFor';
import { CoursesGrid } from './components/CoursesGrid';
import { BatchTimings } from './components/BatchTimings';
import { ClassroomShowcase } from './components/ClassroomShowcase';
import { HowItWorks } from './components/HowItWorks';
import { GoogleReviews } from './components/GoogleReviews';
import { LocationSection } from './components/LocationSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { EnquiryModal } from './components/EnquiryModal';
import { Phone, MessageCircle, ArrowRight, Star, ShieldCheck, MapPin } from 'lucide-react';
import { INSTITUTE_DATA } from './data/instituteData';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [prefilledCourse, setPrefilledCourse] = useState('');

  // Handle URL Hash navigation if present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'courses', 'batches', 'classroom', 'reviews', 'faq', 'contact'].includes(hash)) {
        setCurrentTab(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (tab: string) => {
    setCurrentTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnquiry = (courseTitle?: string) => {
    if (courseTitle) {
      setPrefilledCourse(courseTitle);
    } else {
      setPrefilledCourse('');
    }
    setEnquiryModalOpen(true);
  };

  const whatsappUrl = `https://wa.me/${INSTITUTE_DATA.whatsappNumber}?text=${encodeURIComponent(
    INSTITUTE_DATA.whatsappDefaultMessage
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#172235]">
      {/* Top Notification / Information Bar */}
      <TopBar />

      {/* Main Sticky Navbar */}
      <Navbar
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <>
            <Hero
              onOpenEnquiry={() => handleOpenEnquiry()}
              onExploreCourses={() => {
                const el = document.getElementById('courses');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />
            <QuickStats />
            <WhoIsThisFor onOpenEnquiry={() => handleOpenEnquiry()} />
            <CoursesGrid onOpenEnquiry={handleOpenEnquiry} showAll={false} />
            <BatchTimings onOpenEnquiry={handleOpenEnquiry} />
            <ClassroomShowcase
              onOpenEnquiry={() => handleOpenEnquiry()}
              onViewGalleryFull={() => handleNavigate('classroom')}
            />
            <HowItWorks onOpenEnquiry={() => handleOpenEnquiry()} />
            <GoogleReviews />
            <LocationSection />
          </>
        )}

        {currentTab === 'about' && (
          <div className="py-6">
            <AboutSection onOpenEnquiry={() => handleOpenEnquiry()} />
            <ClassroomShowcase onOpenEnquiry={() => handleOpenEnquiry()} />
            <LocationSection />
          </div>
        )}

        {currentTab === 'courses' && (
          <div className="py-6">
            <CoursesGrid onOpenEnquiry={handleOpenEnquiry} showAll={true} />
            <BatchTimings onOpenEnquiry={handleOpenEnquiry} />
            <WhoIsThisFor onOpenEnquiry={() => handleOpenEnquiry()} />
            <FaqSection onOpenEnquiry={() => handleOpenEnquiry()} />
          </div>
        )}

        {currentTab === 'batches' && (
          <div className="py-6">
            <BatchTimings onOpenEnquiry={handleOpenEnquiry} />
            <HowItWorks onOpenEnquiry={() => handleOpenEnquiry()} />
            <LocationSection />
          </div>
        )}

        {currentTab === 'classroom' && (
          <div className="py-6">
            <ClassroomShowcase onOpenEnquiry={() => handleOpenEnquiry()} />
            <LocationSection />
          </div>
        )}

        {currentTab === 'reviews' && (
          <div className="py-6">
            <GoogleReviews />
            <LocationSection />
          </div>
        )}

        {currentTab === 'faq' && (
          <div className="py-6">
            <FaqSection onOpenEnquiry={() => handleOpenEnquiry()} />
            <ContactSection />
          </div>
        )}

        {currentTab === 'contact' && (
          <div className="py-6">
            <ContactSection />
            <LocationSection />
          </div>
        )}

        {/* Global Final CTA Banner before Footer */}
        <section className="bg-gradient-to-r from-[#092B49] via-[#0D385E] to-[#145EA8] text-white py-14 border-t border-blue-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#F4C542] border border-[#F4C542]/30">
              <Star className="w-3.5 h-3.5 fill-[#F4C542]" />
              <span>4.8 Google Rating · 23 Reviews · 10+ Years in Andheri East</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Ready To Start Learning?
            </h2>

            <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Contact Shree Computer Classes to ask about courses, fees, and batch timings.
              We are open daily from 9:00 AM to 10:00 PM to assist you.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={`tel:${INSTITUTE_DATA.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-[#092B49] text-xs font-bold hover:bg-slate-100 transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#145EA8]" />
                <span>Call Now: {INSTITUTE_DATA.displayPhone}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#159447] text-white text-xs font-bold hover:bg-[#12803c] transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              <button
                onClick={() => handleOpenEnquiry()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#F4C542] text-[#092B49] text-xs font-black hover:bg-amber-300 transition-colors shadow-sm"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* Mobile Sticky CTA Bar (Strictly <15% of viewport) */}
      <MobileStickyCTA onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Floating WhatsApp Action for Desktop / Tablet */}
      <FloatingWhatsApp />

      {/* Global Enquiry & Admission Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        initialCourse={prefilledCourse}
      />
    </div>
  );
}
