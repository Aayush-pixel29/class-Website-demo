export interface Course {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  targetAudience: string[];
  topicsCovered: string[];
  learningFormat: string;
  feesNotice: string;
  durationNotice: string;
  prerequisites: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  highlight: string;
  snippet: string;
  source: string;
}

export const INSTITUTE_DATA = {
  name: "Shree Computer Classes",
  tagline: "Learn Computer Skills With Confidence.",
  subTagline: "Practical computer training in a friendly classroom environment in Andheri East.",
  category: "Computer Training School / Computer Classes",
  phone: "+91 98195 04128",
  phoneRaw: "+919819504128",
  displayPhone: "+91 98195 04128",
  whatsappNumber: "919819504128",
  whatsappDefaultMessage: "Hello, I would like to enquire about computer classes at Shree Computer Classes. Please share the available courses, fees and batch timings.",
  
  address: {
    shop: "Shop No. 10, Avishkar Society",
    street: "Western Express Highway, Pump House, Jijamata Marg",
    area: "Andheri East",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400093",
    country: "India",
    fullAddress: "Shop No. 10, Avishkar Society, Western Express Highway, Pump House, Jijamata Marg, Andheri East, Mumbai, Maharashtra 400093",
    landmark: "Near Pump House, Avishkar Society, Western Express Highway side"
  },
  
  hours: {
    days: "Monday – Sunday (Open Daily)",
    timings: "9:00 AM – 10:00 PM",
    note: "Open all 7 days for morning, afternoon, and evening batches."
  },
  
  googleBusiness: {
    rating: 4.8,
    reviewCount: 23,
    businessDuration: "10+ Years in Business",
    statusOnListing: "Open · Closes 10 pm",
    mapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Shree+Computer+Classes+Shop+No+10+Avishkar+Society+Pump+House+Andheri+East+Mumbai+400093",
    listingNote: "Verified Google Business Profile rating (4.8 ★ from 23 reviews)."
  },

  classroomHighlights: [
    {
      title: "Individual Desktop Stations",
      description: "Dedicated computer system for every learner during class sessions so you learn by doing."
    },
    {
      title: "Friendly Learning Space",
      description: "Distraction-free environment with bright yellow walls, proper blue student workstations, and comfortable seating."
    },
    {
      title: "Convenient Ground Floor Location",
      description: "Located at Shop No. 10, Avishkar Society, right near Pump House with easy bus and metro transit access."
    },
    {
      title: "Flexible Daily Timings",
      description: "Open from 9:00 AM to 10:00 PM every day to accommodate school students, college learners, and office professionals."
    }
  ],

  courses: [
    {
      id: "basic-computer-skills",
      title: "Basic Computer Skills",
      category: "Foundations",
      tagline: "Master foundational computer usage from keyboard & mouse to everyday internet tasks.",
      description: "Designed for absolute beginners, school students, homemakers, and senior citizens. Learn how computers work, navigate operating systems, manage files safely, create documents, and use the internet with complete confidence.",
      targetAudience: ["Absolute Beginners", "School Students", "Parents & Homemakers", "Seniors seeking digital independence"],
      topicsCovered: [
        "Computer Hardware & Peripherals overview (CPU, Monitor, Mouse, Keyboard)",
        "Operating System navigation, desktop customization & folder management",
        "Typing practice, shortcut keys & text editing basics",
        "Web browsers, secure search techniques & bookmarks",
        "Email account creation, sending attachments & inbox safety",
        "Basic file downloading, printing & pen-drive usage"
      ],
      learningFormat: "In-person hands-on classroom training with personal computer time",
      feesNotice: "Contact the centre directly for fee details and current offers.",
      durationNotice: "Batches available across morning, afternoon, and evening slots. Timings confirmed at centre.",
      prerequisites: "No prior computer experience required."
    },
    {
      id: "ms-office",
      title: "MS Office Suite",
      category: "Productivity",
      tagline: "Build solid office productivity skills with Microsoft Word, Excel, and PowerPoint.",
      description: "Essential productivity package required for all office, administrative, and academic work. Learn to draft formal letters, organize numerical data in spreadsheets, and assemble neat presentations.",
      targetAudience: ["College Students", "Job Seekers", "Office Assistants", "Graduates preparing for interviews"],
      topicsCovered: [
        "MS Word: Letter drafting, formatting, tables, page setup, header/footer & printing",
        "MS Excel: Rows & columns, basic formulas (SUM, AVERAGE, COUNT), formatting & charts",
        "MS PowerPoint: Slide creation, text layout, transitions & presentation export",
        "Document conversion (PDF export), cloud storage basics & file organization"
      ],
      learningFormat: "Guided practical exercises on individual desktop PCs",
      feesNotice: "Contact the centre directly for current course fee.",
      durationNotice: "Flexible weekday and weekend batches available. Enquire for details.",
      prerequisites: "Basic familiarity with computer keyboard and mouse."
    },
    {
      id: "advanced-excel",
      title: "Advanced Excel",
      category: "Data & Analysis",
      tagline: "In-depth spreadsheet calculations, lookup functions, pivot tables, and reporting.",
      description: "Take your spreadsheet capabilities to an employment-ready level. Learn how to handle large datasets, write lookup formulas, build pivot tables, and clean data for office reporting.",
      targetAudience: ["Working Professionals", "Commerce & Management Students", "Accounts Executives", "Back-office Staff"],
      topicsCovered: [
        "Advanced Formula Construction (Logical IF, AND, OR, Nested IFs)",
        "Lookup Functions (VLOOKUP, HLOOKUP, INDEX/MATCH, XLOOKUP concepts)",
        "Pivot Tables, Pivot Charts & Data Summarization",
        "Data Validation, Conditional Formatting & Duplicate Removal",
        "Text and Date manipulation functions",
        "Sorting, Multi-level Filtering & Print optimization for large reports"
      ],
      learningFormat: "Problem-solving on realistic business data sets in the classroom",
      feesNotice: "Contact centre for fee structure.",
      durationNotice: "Batch schedules discussed upon enquiry.",
      prerequisites: "Basic knowledge of MS Excel is recommended."
    },
    {
      id: "tally-accounting",
      title: "Tally & Computerized Accounting",
      category: "Accounting",
      tagline: "Computerized accounting, ledger management, vouchers, and GST introduction.",
      description: "Practical accounting training on standard computerized software. Ideal for commerce students and accounts job aspirants who want practical exposure to ledger entries, vouchers, and inventory records.",
      targetAudience: ["Commerce Students (B.Com, M.Com, 11th/12th)", "Junior Accountants", "Small Business Owners"],
      topicsCovered: [
        "Company creation, financial year setup & account configuration",
        "Chart of Accounts: Groups, Ledgers & opening balances",
        "Voucher entries: Payment, Receipt, Contra, Journal, Sales & Purchase",
        "Inventory management basics: Stock groups, items & units of measure",
        "GST basics: CGST, SGST, IGST tax invoice entries",
        "Viewing Balance Sheet, Profit & Loss Statement and Trial Balance"
      ],
      learningFormat: "Classroom practical accounting with real voucher scenarios",
      feesNotice: "Contact centre for fees.",
      durationNotice: "Timings confirmed based on student convenience.",
      prerequisites: "Familiarity with basic commerce or accounting concepts is helpful."
    },
    {
      id: "typing-digital-skills",
      title: "Typing & Digital Skills",
      category: "Digital Literacy",
      tagline: "Improve keyboard speed, typing accuracy, online form submissions, and digital literacy.",
      description: "Develop touch typing speed and accuracy for government examinations, clerical applications, data entry roles, or everyday typing tasks. Also covers online services and portal navigation.",
      targetAudience: ["Govt exam candidates", "Data Entry aspirants", "Students", "Job seekers"],
      topicsCovered: [
        "Touch typing techniques & ergonomic finger positioning",
        "Speed building drills and real-time accuracy tracking",
        "Paragraph typing with punctuation and numerical pad practice",
        "Online government portal navigation & digital document uploads",
        "Cyber safety, strong password creation & online fraud awareness"
      ],
      learningFormat: "Daily guided typing sessions on desktop systems",
      feesNotice: "Contact the centre for fee details.",
      durationNotice: "Enquire for daily practice slots.",
      prerequisites: "None."
    },
    {
      id: "custom-computer-courses",
      title: "Other Specialized Computer Courses",
      category: "Specialized Training",
      tagline: "Customized computer skill building for specific academic, career, or personal goals.",
      description: "Need help with a specific software program, school curriculum computer syllabus, or senior citizen digital training? Shree Computer Classes accommodates custom learning requirements.",
      targetAudience: ["School Students needing curriculum help", "Senior Citizens", "Professionals with specific tool needs"],
      topicsCovered: [
        "School computer curriculum syllabus assistance",
        "Smartphone & computer synergy (WhatsApp Web, Drive, Zoom, Google Meet)",
        "Online utility bill payments, banking portal safety & net banking navigation",
        "Tailored 1-on-1 practical computer sessions"
      ],
      learningFormat: "Customized pace and dedicated computer time",
      feesNotice: "Contact the centre for specific module pricing.",
      durationNotice: "Flexible timing arranged based on schedule.",
      prerequisites: "Varies depending on chosen syllabus."
    }
  ] as Course[],

  faqs: [
    {
      question: "What courses are available at Shree Computer Classes?",
      answer: "We offer training in Basic Computer Skills, MS Office (Word, Excel, PowerPoint), Advanced Excel, Tally & Computerized Accounting, Typing & Digital Skills, and other customized computer training modules."
    },
    {
      question: "Where is Shree Computer Classes located?",
      answer: "We are located at Shop No. 10, Avishkar Society, Western Express Highway, Pump House, Jijamata Marg, Andheri East, Mumbai, Maharashtra 400093. We are easily accessible from Pump House bus stop and the Western Express Highway."
    },
    {
      question: "What are the class timings and opening hours?",
      answer: "The institute is open daily (Monday through Sunday) from 9:00 AM to 10:00 PM. Morning, afternoon, and evening batch options are available to fit students and working professionals."
    },
    {
      question: "How can I enquire about course fees and batch dates?",
      answer: "Because course packages and batch schedules vary by individual need and module, please call us directly at +91 98195 04128, message us on WhatsApp, or visit the centre in person at Shop No. 10, Avishkar Society."
    },
    {
      question: "Do I need previous computer knowledge to join?",
      answer: "Not at all. We have beginner-friendly courses tailored specifically for learners who have never operated a computer before. Our trainers guide you step-by-step from switching on the PC and using the mouse."
    },
    {
      question: "Are classes hands-on with computers?",
      answer: "Yes. Practical learning is the core approach at Shree Computer Classes. Students learn directly on desktop computer stations so you gain real muscle memory and confidence."
    },
    {
      question: "Can working professionals join evening or weekend batches?",
      answer: "Yes. With hours extending until 10:00 PM every day including Sundays, we can arrange convenient timings that work around your college or office schedule."
    },
    {
      question: "How do I reach the institute?",
      answer: "If travelling along the Western Express Highway, take the turn near Pump House / Jijamata Marg into Avishkar Society. Shop No. 10 is situated on the ground floor. You can click 'Get Directions' on our website to open the location directly in Google Maps."
    }
  ],

  reviewsSummary: {
    rating: 4.8,
    totalReviews: 23,
    years: "10+",
    source: "Google Business Profile",
    verifiedBadges: [
      "4.8 ★ Google Rating",
      "23 Google Reviews",
      "10+ Years in Andheri East",
      "Open 7 Days a Week"
    ]
  }
};
