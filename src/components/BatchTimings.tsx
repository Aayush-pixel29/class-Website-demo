import React, { useState } from 'react';
import { Clock, Calendar, AlertCircle, Edit3, Check, RefreshCw, MessageSquare, Phone } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

export interface BatchSlot {
  id: string;
  courseName: string;
  days: string;
  timeSlot: string;
  slotType: 'Morning' | 'Afternoon' | 'Evening' | 'Weekend';
  status: 'Seats Available' | 'Few Seats Left' | 'Filling Fast' | 'Confirm with Centre';
  note: string;
}

const DEFAULT_BATCHES: BatchSlot[] = [
  {
    id: 'b1',
    courseName: 'Basic Computer Skills',
    days: 'Monday to Friday',
    timeSlot: '10:00 AM – 11:30 AM',
    slotType: 'Morning',
    status: 'Seats Available',
    note: 'Ideal for school students & beginners'
  },
  {
    id: 'b2',
    courseName: 'MS Office (Word, Excel, PPT)',
    days: 'Monday to Friday',
    timeSlot: '11:30 AM – 1:00 PM',
    slotType: 'Morning',
    status: 'Seats Available',
    note: 'Guided desktop hands-on sessions'
  },
  {
    id: 'b3',
    courseName: 'Tally & Computerized Accounting',
    days: 'Monday to Friday',
    timeSlot: '2:30 PM – 4:00 PM',
    slotType: 'Afternoon',
    status: 'Few Seats Left',
    note: 'Ideal for commerce students'
  },
  {
    id: 'b4',
    courseName: 'Typing & Digital Skills',
    days: 'Daily (Mon – Sat)',
    timeSlot: '4:00 PM – 5:30 PM',
    slotType: 'Evening',
    status: 'Seats Available',
    note: 'Dedicated keyboard drill slots'
  },
  {
    id: 'b5',
    courseName: 'Advanced Excel & Reporting',
    days: 'Monday to Friday',
    timeSlot: '6:30 PM – 8:00 PM',
    slotType: 'Evening',
    status: 'Filling Fast',
    note: 'Convenient after-office slot'
  },
  {
    id: 'b6',
    courseName: 'Office Automation & MS Office',
    days: 'Monday to Friday',
    timeSlot: '8:00 PM – 9:30 PM',
    slotType: 'Evening',
    status: 'Few Seats Left',
    note: 'Late evening batch for working professionals'
  },
  {
    id: 'b7',
    courseName: 'Weekend Comprehensive Batch',
    days: 'Saturday & Sunday',
    timeSlot: '10:00 AM – 1:00 PM',
    slotType: 'Weekend',
    status: 'Seats Available',
    note: 'Special 3-hour intensive sessions'
  }
];

interface BatchTimingsProps {
  onOpenEnquiry: (prefillCourse?: string) => void;
}

export const BatchTimings: React.FC<BatchTimingsProps> = ({ onOpenEnquiry }) => {
  const [batches, setBatches] = useState<BatchSlot[]>(() => {
    const saved = localStorage.getItem('shree_batch_timings');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return DEFAULT_BATCHES;
      }
    }
    return DEFAULT_BATCHES;
  });

  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [tempBatches, setTempBatches] = useState<BatchSlot[]>(batches);
  const [selectedSlotForEnquiry, setSelectedSlotForEnquiry] = useState<string>('');

  const filterOptions = ['All', 'Morning', 'Afternoon', 'Evening', 'Weekend'];

  const filteredBatches = activeFilter === 'All'
    ? batches
    : batches.filter(b => b.slotType === activeFilter);

  const handleStartEdit = () => {
    setTempBatches(JSON.parse(JSON.stringify(batches)));
    setIsEditing(true);
  };

  const handleSaveEdits = () => {
    setBatches(tempBatches);
    localStorage.setItem('shree_batch_timings', JSON.stringify(tempBatches));
    setIsEditing(false);
  };

  const handleResetDefaults = () => {
    setBatches(DEFAULT_BATCHES);
    localStorage.removeItem('shree_batch_timings');
    setIsEditing(false);
  };

  const handleFieldChange = (id: string, field: keyof BatchSlot, value: string) => {
    setTempBatches(prev =>
      prev.map(slot => slot.id === id ? { ...slot, [field]: value } : slot)
    );
  };

  const getStatusBadge = (status: BatchSlot['status']) => {
    switch (status) {
      case 'Seats Available':
        return 'bg-emerald-50 text-emerald-700 border-emerald-300 ring-1 ring-emerald-400/20';
      case 'Few Seats Left':
        return 'bg-amber-50 text-amber-800 border-amber-300 ring-1 ring-amber-400/20';
      case 'Filling Fast':
        return 'bg-blue-50 text-blue-800 border-blue-300 ring-1 ring-blue-400/20';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-300';
    }
  };

  const getSlotTypeBadge = (type: BatchSlot['slotType']) => {
    switch (type) {
      case 'Morning':
        return 'bg-amber-100/80 text-amber-900 border-amber-300';
      case 'Afternoon':
        return 'bg-sky-100/80 text-sky-900 border-sky-300';
      case 'Evening':
        return 'bg-indigo-100/80 text-indigo-900 border-indigo-300';
      case 'Weekend':
        return 'bg-purple-100/80 text-purple-900 border-purple-300';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-300';
    }
  };

  return (
    <section id="batches" className="py-16 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Live Batch Timetable</span>
              <span className="text-slate-300">·</span>
              <span>Open 9 AM – 10 PM Daily</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092B49] tracking-tight">
              Class Batch Timings & Seat Status
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mt-2">
              Structured morning, afternoon, evening, and weekend slots for students, beginners, and working adults.
            </p>
          </div>

          {/* User / Centre Owner Edit Control Button */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            {!isEditing ? (
              <button
                onClick={handleStartEdit}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all border border-slate-200 hover:scale-105"
                title="Update real-time batch slot availability"
              >
                <Edit3 className="w-3.5 h-3.5 text-[#145EA8]" />
                <span>Update Slots</span>
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={handleSaveEdits}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-2xs hover:scale-105"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Save Changes</span>
                </button>
                <button
                  onClick={handleResetDefaults}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-xl transition-colors"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Live Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 text-xs font-bold no-scrollbar">
          {filterOptions.map(option => (
            <button
              key={option}
              onClick={() => setActiveFilter(option)}
              className={`px-4 py-2 rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer ${
                activeFilter === option
                  ? 'bg-gradient-to-r from-[#092B49] to-[#145EA8] text-white shadow-sm scale-105 font-black'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 hover:scale-102'
              }`}
            >
              {option === 'All' ? '⚡ All Batches' : `${option} Batches`}
            </button>
          ))}
        </div>


        {/* Editing mode banner */}
        {isEditing && (
          <div className="mb-4 p-3.5 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <span><strong>Edit Mode Active:</strong> You can edit batch times, days, notes, or availability status directly in the table below. Changes persist in your browser.</span>
            </div>
            <button
              onClick={() => setIsEditing(false)}
              className="text-xs font-bold underline ml-2"
            >
              Cancel
            </button>
          </div>
        )}

        {/* Clean Responsive Batch Timings Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-600 uppercase tracking-wider">
                  <th className="py-3.5 px-4 sm:px-6">Course Name</th>
                  <th className="py-3.5 px-4">Days</th>
                  <th className="py-3.5 px-4">Time Slot</th>
                  <th className="py-3.5 px-4">Availability</th>
                  <th className="py-3.5 px-4 hidden lg:table-cell">Batch Details</th>
                  <th className="py-3.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                {(isEditing ? tempBatches : filteredBatches).map((slot) => (
                  <tr key={slot.id} className="hover:bg-slate-50/70 transition-colors">
                    
                    {/* Course */}
                    <td className="py-4 px-4 sm:px-6 font-bold text-[#092B49]">
                      {isEditing ? (
                        <input
                          type="text"
                          value={slot.courseName}
                          onChange={(e) => handleFieldChange(slot.id, 'courseName', e.target.value)}
                          className="w-full px-2 py-1 text-xs bg-white border border-slate-300 rounded font-normal"
                        />
                      ) : (
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1.5">
                          <span className="font-extrabold text-slate-900">{slot.courseName}</span>
                          <span className={`inline-block text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full border w-fit ${getSlotTypeBadge(slot.slotType)}`}>
                            {slot.slotType}
                          </span>
                        </div>
                      )}
                    </td>

                    {/* Days */}
                    <td className="py-4 px-4 text-slate-600 whitespace-nowrap">
                      {isEditing ? (
                        <input
                          type="text"
                          value={slot.days}
                          onChange={(e) => handleFieldChange(slot.id, 'days', e.target.value)}
                          className="w-full px-2 py-1 text-xs bg-white border border-slate-300 rounded font-normal"
                        />
                      ) : (
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>{slot.days}</span>
                        </div>
                      )}
                    </td>

                    {/* Time Slot */}
                    <td className="py-4 px-4 font-bold text-slate-900 whitespace-nowrap">
                      {isEditing ? (
                        <input
                          type="text"
                          value={slot.timeSlot}
                          onChange={(e) => handleFieldChange(slot.id, 'timeSlot', e.target.value)}
                          className="w-full px-2 py-1 text-xs bg-white border border-slate-300 rounded font-normal"
                        />
                      ) : (
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#145EA8] shrink-0" />
                          <span>{slot.timeSlot}</span>
                        </div>
                      )}
                    </td>

                    {/* Availability Status */}
                    <td className="py-4 px-4 whitespace-nowrap">
                      {isEditing ? (
                        <select
                          value={slot.status}
                          onChange={(e) => handleFieldChange(slot.id, 'status', e.target.value)}
                          className="px-2 py-1 text-xs bg-white border border-slate-300 rounded"
                        >
                          <option value="Seats Available">Seats Available</option>
                          <option value="Few Seats Left">Few Seats Left</option>
                          <option value="Filling Fast">Filling Fast</option>
                          <option value="Confirm with Centre">Confirm with Centre</option>
                        </select>
                      ) : (
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border ${getStatusBadge(slot.status)}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${slot.status === 'Seats Available' ? 'bg-emerald-500' : slot.status === 'Few Seats Left' ? 'bg-amber-500' : 'bg-blue-500'}`}></span>
                          <span>{slot.status}</span>
                        </span>
                      )}
                    </td>

                    {/* Batch note */}
                    <td className="py-4 px-4 text-xs text-slate-500 hidden lg:table-cell">
                      {isEditing ? (
                        <input
                          type="text"
                          value={slot.note}
                          onChange={(e) => handleFieldChange(slot.id, 'note', e.target.value)}
                          className="w-full px-2 py-1 text-xs bg-white border border-slate-300 rounded"
                        />
                      ) : (
                        <span>{slot.note}</span>
                      )}
                    </td>

                    {/* Action */}
                    <td className="py-4 px-4 text-right whitespace-nowrap">
                      <button
                        onClick={() => onOpenEnquiry(`${slot.courseName} (${slot.timeSlot})`)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-extrabold text-white bg-gradient-to-r from-[#092B49] to-[#145EA8] hover:from-[#145EA8] hover:to-[#092B49] rounded-xl transition-all shadow-2xs hover:scale-105 cursor-pointer"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-[#F4C542]" />
                        <span>Reserve Slot</span>
                      </button>
                    </td>


                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer info note */}
          <div className="bg-slate-50/80 px-4 sm:px-6 py-3 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Individual desktop systems provided in all batches · Personalized pace</span>
            </div>
            <div>
              Custom timings available on request. Call <a href={`tel:${INSTITUTE_DATA.phoneRaw}`} className="font-bold text-[#092B49] hover:underline">{INSTITUTE_DATA.displayPhone}</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
