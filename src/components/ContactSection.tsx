import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Send, CheckCircle2, Navigation, ExternalLink } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [course, setCourse] = useState('Basic Computer Skills');
  const [contactMethod, setContactMethod] = useState('Call');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !mobile) return;
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/${INSTITUTE_DATA.whatsappNumber}?text=${encodeURIComponent(
    `Hello Shree Computer Classes, my name is ${name || 'Prospective Student'}. I would like to enquire about ${course}. Please contact me.`
  )}`;

  return (
    <section id="contact" className="py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#145EA8]">
            <span>Get in Touch</span>
            <span className="text-slate-300">·</span>
            <span>Immediate Response</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#092B49] mt-2 mb-3">
            Contact Shree Computer Classes
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Have questions about course fees, batch schedules, or beginner registration? Reach out directly via phone, WhatsApp, or drop by in person.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details & Quick Links */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${INSTITUTE_DATA.phoneRaw}`}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-standard text-center"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 text-[#145EA8] flex items-center justify-center mb-2">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-900">Direct Phone Call</span>
                <span className="text-[11px] text-slate-500 mt-0.5">{INSTITUTE_DATA.displayPhone}</span>
              </a>

              <a
                href={`https://wa.me/${INSTITUTE_DATA.whatsappNumber}?text=${encodeURIComponent(INSTITUTE_DATA.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-xs transition-standard text-center"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#159447] flex items-center justify-center mb-2">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-900">WhatsApp Chat</span>
                <span className="text-[11px] text-slate-500 mt-0.5">Quick enquiry chat</span>
              </a>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#145EA8] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <strong className="block text-slate-900 font-bold mb-1">
                    Centre Address:
                  </strong>
                  <span className="text-slate-700 leading-relaxed">
                    {INSTITUTE_DATA.address.fullAddress}
                  </span>
                  <div className="text-xs text-slate-500 mt-1">
                    Landmark: {INSTITUTE_DATA.address.landmark}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#159447] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <strong className="block text-slate-900 font-bold mb-1">
                    Visiting Hours:
                  </strong>
                  <div className="text-slate-700 font-medium">Monday – Sunday (All 7 Days)</div>
                  <div className="text-slate-900 font-bold">9:00 AM – 10:00 PM</div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={INSTITUTE_DATA.googleBusiness.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-[#092B49] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  <Navigation className="w-4 h-4 text-[#145EA8]" />
                  <span>Open Directions on Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-extrabold text-[#092B49]">
                  Thank You for Your Enquiry!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  We have recorded your details. A representative from Shree Computer Classes will get back to you shortly via <strong>{contactMethod}</strong> at <strong>{mobile}</strong>.
                </p>
                <div className="pt-3">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setMobile('');
                      setMessage('');
                    }}
                    className="px-5 py-2.5 text-xs font-bold text-white bg-[#092B49] hover:bg-[#145EA8] rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-100 pb-3 mb-4">
                  <h3 className="text-lg font-bold text-[#092B49]">
                    Send a Course Enquiry
                  </h3>
                  <p className="text-xs text-slate-500">
                    Fill this quick form and we will revert with complete batch details.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sunil Patil"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#145EA8]/20 focus:border-[#145EA8]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98195 00000"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#145EA8]/20 focus:border-[#145EA8]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Course Interested In
                    </label>
                    <select
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      className="w-full px-3 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#145EA8]/20 focus:border-[#145EA8]"
                    >
                      {INSTITUTE_DATA.courses.map((c) => (
                        <option key={c.id} value={c.title}>
                          {c.title}
                        </option>
                      ))}
                      <option value="General Computer Training">General Computer Training</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Preferred Contact Method
                    </label>
                    <select
                      value={contactMethod}
                      onChange={(e) => setContactMethod(e.target.value)}
                      className="w-full px-3 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#145EA8]/20 focus:border-[#145EA8]"
                    >
                      <option value="WhatsApp">WhatsApp Message</option>
                      <option value="Phone Call">Phone Call</option>
                      <option value="In-person Visit">In-person Visit at Centre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Message / Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ask about fees, timings, syllabus, or beginner support..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#145EA8]/20 focus:border-[#145EA8]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-5 text-xs font-bold text-white bg-[#092B49] hover:bg-[#145EA8] rounded-lg shadow-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-[#F4C542]" />
                    <span>Send Enquiry</span>
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:w-auto py-3 px-5 text-xs font-bold text-white bg-[#159447] hover:bg-[#12803c] rounded-lg shadow-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
