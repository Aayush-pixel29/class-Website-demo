import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

interface FaqSectionProps {
  onOpenEnquiry: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenEnquiry }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#145EA8] mb-1">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#092B49] mt-2 mb-3">
            Common Questions About Classes
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Honest and straightforward answers about courses, location, classroom practice, and how to get started.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {INSTITUTE_DATA.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#092B49] hover:text-[#145EA8] focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-[#145EA8]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3">
          <h3 className="text-base font-bold text-slate-900">
            Have a question not listed here?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            Please feel free to call or WhatsApp us anytime between 9:00 AM and 10:00 PM. We are happy to clarify course modules and batches.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${INSTITUTE_DATA.phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#092B49] hover:bg-[#145EA8] rounded-md transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F4C542]" />
              <span>Call: {INSTITUTE_DATA.displayPhone}</span>
            </a>
            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#092B49] bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
            >
              <span>Submit Enquiry</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
