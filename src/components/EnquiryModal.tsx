import React, { useState, useEffect } from 'react';
import { X, Send, Phone, MessageCircle, CheckCircle2, AlertCircle, Loader2, Mail } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourse?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose, initialCourse = '' }) => {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState(initialCourse);
  const [preferredBatch, setPreferredBatch] = useState('Morning (9 AM – 12 PM)');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialCourse) {
      setCourse(initialCourse);
    }
  }, [initialCourse]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !mobileNumber) return;

    setIsSubmitting(true);
    setErrorMessage('');

    const id = `ENQ-${Math.floor(100000 + Math.random() * 900000)}`;

    try {
      const response = await fetch(INSTITUTE_DATA.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Admission Enquiry: ${fullName} - ${course || 'General Enquiry'}`,
          "Student Name": fullName,
          "Mobile Number": mobileNumber,
          "Email Address": email || 'Not provided',
          "Course Interested": course || 'Not Selected / General Guidance',
          "Preferred Batch": preferredBatch,
          "Message": message || 'None',
          "Enquiry Reference ID": id,
          "Form Source": "Direct Centre Admission & Enquiry Modal",
          "_replyto": email || undefined,
        }),
      });

      if (response.ok) {
        setSubmissionId(id);
        setIsSubmitted(true);
      } else {
        const data = await response.json().catch(() => ({}));
        if (data.errors && data.errors.length > 0) {
          setErrorMessage(data.errors.map((err: { message: string }) => err.message).join(', '));
        } else {
          setErrorMessage('Failed to send enquiry. Please check your connection or contact us on WhatsApp.');
        }
      }
    } catch {
      setErrorMessage('Network error occurred. Please reach out to us directly on WhatsApp or Call.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello Shree Computer Classes,\nName: ${fullName || 'Student'}\nMobile: ${mobileNumber || 'Not provided'}${email ? `\nEmail: ${email}` : ''}\nCourse Interested In: ${course || 'General Enquiry'}\nPreferred Batch: ${preferredBatch}\nMessage: ${message || 'Please share fees and batch timings.'}`;
    const url = `https://wa.me/${INSTITUTE_DATA.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setMobileNumber('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="bg-white rounded-2xl max-w-lg w-full border border-slate-200 shadow-xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-[#092B49] text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-300 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="text-xs font-bold text-[#F4C542] uppercase tracking-wider mb-1">
            Direct Centre Admission & Enquiry
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Enquire About Classes
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            Shree Computer Classes · Shop No. 10, Avishkar Society, Andheri East
          </p>
        </div>

        {/* Content Area */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-extrabold text-[#092B49]">
                Thank you! Enquiry Received.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                The institute has received your details and will contact you at <strong>{mobileNumber}</strong> {email ? `or via email (${email})` : ''} to provide current course fees, syllabus details, and confirm your batch.
              </p>
              <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg text-xs text-slate-500 inline-block font-mono">
                Enquiry Reference: {submissionId}
              </div>

              <div className="pt-4 flex flex-col gap-2.5">
                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#159447] text-white text-xs font-bold hover:bg-[#12803c] transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send This Directly to WhatsApp Also</span>
                </button>
                <button
                  onClick={handleReset}
                  className="w-full py-2.5 px-4 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  Close & Back to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#145EA8]/20 focus:border-[#145EA8]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98195 00000"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#145EA8]/20 focus:border-[#145EA8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address <span className="text-slate-400 font-normal">(Direct Email)</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="e.g. student@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#145EA8]/20 focus:border-[#145EA8]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Course Interested In
                  </label>
                  <select
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#145EA8]/20 focus:border-[#145EA8]"
                  >
                    <option value="">-- Select a Course --</option>
                    {INSTITUTE_DATA.courses.map((c) => (
                      <option key={c.id} value={c.title}>
                        {c.title}
                      </option>
                    ))}
                    <option value="Not sure / General Guidance">Not sure / General Guidance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Batch
                  </label>
                  <select
                    value={preferredBatch}
                    onChange={(e) => setPreferredBatch(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#145EA8]/20 focus:border-[#145EA8]"
                  >
                    <option value="Morning (9 AM – 12 PM)">Morning (9 AM – 12 PM)</option>
                    <option value="Afternoon (12 PM – 4 PM)">Afternoon (12 PM – 4 PM)</option>
                    <option value="Evening (4 PM – 8 PM)">Evening (4 PM – 8 PM)</option>
                    <option value="Late Evening (8 PM – 10 PM)">Late Evening (8 PM – 10 PM)</option>
                    <option value="Weekend (Saturday / Sunday)">Weekend (Saturday / Sunday)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Message / Special Request (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ask about batch timings, fees, or beginner assistance..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#145EA8]/20 focus:border-[#145EA8]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 px-4 text-xs font-bold text-white bg-[#092B49] hover:bg-[#145EA8] disabled:opacity-60 disabled:cursor-not-allowed rounded-lg shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-[#F4C542]" />
                      <span>Submitting Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 text-[#F4C542]" />
                      <span>Send Enquiry</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  disabled={isSubmitting}
                  className="sm:w-auto py-3 px-4 text-xs font-bold text-white bg-[#159447] hover:bg-[#12803c] disabled:opacity-60 rounded-lg shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Send on WhatsApp</span>
                </button>
              </div>

              <div className="text-[11px] text-slate-500 text-center pt-2 flex items-center justify-center gap-1.5">
                <Phone className="w-3 h-3 text-[#145EA8]" />
                <span>Or directly call: <strong>{INSTITUTE_DATA.displayPhone}</strong></span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
