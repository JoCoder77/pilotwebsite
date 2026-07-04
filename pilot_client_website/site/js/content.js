/* ============================================================
   CORAL SKY AVIATION — CONTENT FILE (Your Simple CMS)
   ============================================================
   
   HOW TO UPDATE CONTENT:
   1. Open this file in any text editor (even Notepad)
   2. Change the text between the quote marks " "
   3. Save the file
   4. Refresh your website — done!
   
   RULES:
   - Only change text between quote marks " "
   - Don't delete any commas, brackets, or colons
   - Keep the structure exactly as it is
   - If unsure, make a backup copy first
   
   ============================================================ */

const SITE_CONTENT = {

  /* ----------------------------------------------------------
     COMPANY INFO
     ---------------------------------------------------------- */
  company: {
    name: "Coral Sky Aviation",
    legalName: "Coral Sky Aviation (Pty) Ltd",
    tagline: "Where Your Aviation Career Begins",
    description: "South Africa's premier SACAA-approved aviation training organisation — delivering flight training, cabin crew, and aircraft maintenance programmes from Rand Airport, Germiston.",
    credibilityHeadline: "SACAA Approved | 20 Years of Excellence | 400+ Pilots Trained",
    copyrightYear: "2026",
  },

  /* ----------------------------------------------------------
     CONTACT DETAILS
     Change these when your details change
     ---------------------------------------------------------- */
  contact: {
    email: "coralskyaviation@gmail.com",
    whatsapp: "+27633166313",           // No spaces, used for links
    whatsappDisplay: "+27 63 316 6313", // Display format
    phone: "+27633166313",
    phoneDisplay: "+27 63 316 6313",
    address: "Rand Airport, Germiston, Gauteng, South Africa",
    addressNote: "Temporary location — will be updated when the school relocates.",
    hours: "Monday to Friday | 09:00 – 15:00",
    formspreeId: "xwpovqzd",  // Replace with your Formspree form ID
  },

  /* ----------------------------------------------------------
     SOCIAL MEDIA LINKS
     Replace "#" with your actual URLs when accounts are created
     ---------------------------------------------------------- */
  social: {
    facebook: "#",
    linkedin: "#",
    instagram: "#",
  },

  /* ----------------------------------------------------------
     HERO SECTION
     ---------------------------------------------------------- */
  hero: {
    headline: "Where Your Aviation Career Begins",
    subheadline: "SACAA-approved flight training at Rand Airport, Germiston — from Private Pilot to Commercial Pilot in as little as 14 months.",
    ctaPrimary: "Enquire Now",
    ctaSecondary: "Chat on WhatsApp",
    badge: "SACAA Approved Aviation Training Organisation",
  },

  /* ----------------------------------------------------------
     ANIMATED COUNTER STATISTICS
     ---------------------------------------------------------- */
  stats: [
    { number: 400, suffix: "+", label: "Pilots Trained" },
    { number: 20, suffix: "+", label: "Years of Excellence" },
    { number: 14, suffix: "", label: "Months to CPL" },
    { number: 7, prefix: "1:", suffix: "", label: "Aircraft-to-Student Ratio" },
  ],

  /* ----------------------------------------------------------
     PROGRAMMES
     ---------------------------------------------------------- */
  programmes: [
    {
      id: "flight-training",
      title: "Flight Training",
      subtitle: "PPL / CPL / IR / Multi-Engine",
      status: "Live",
      statusClass: "live",
      image: "images/hero-runway.png",
      shortDescription: "Complete professional flight training pathway from beginner to airline-ready Commercial Pilot Licence.",
      description: "Begin with your Private Pilot Licence (PPL) and progress through to your Commercial Pilot Licence (CPL), Instrument Rating (IR), and Multi-Engine Rating. Our airline captain instructors guide you through every stage.",
      details: [
        { label: "PPL Duration", value: "4 – 6 months" },
        { label: "CPL Duration", value: "6 – 10 months" },
        { label: "IR Duration", value: "10 – 12 months" },
        { label: "Full Pathway", value: "15 months" },
        { label: "Qualification", value: "SACAA PPL / CPL / IR Certificate" },
      ],
      requirements: "Min. age 17 (PPL) or 18 (CPL) | Grade 12 / Matric | Class 1 or 2 Medical | English proficiency",
      pricing: "Enquire for Pricing",
    },
    {
      id: "cadet-programme",
      title: "Cadet Pilot Programme",
      subtitle: "Full Structured Pathway",
      status: "Enrolling Soon",
      statusClass: "enrolling",
      image: "images/multi-engine.png",
      shortDescription: "Structured cadet pathway from zero experience to airline-ready commercial pilot with CPL, IR, and Multi-Engine Rating.",
      description: "The Cadet Pilot Programme is designed for aspiring pilots who want a complete, guided experience from day one to airline readiness. Full ground school, structured flight training, and career placement support included.",
      details: [
        { label: "Duration", value: "Full structured pathway" },
        { label: "Qualification", value: "CPL + IR + Multi-Engine Rating" },
        { label: "Includes", value: "Ground school, flight training, career support" },
      ],
      requirements: "Min. age 18 | Matric | Class 1 Medical | English proficiency",
      pricing: "Enquire for Pricing",
    },
    {
      id: "cabin-crew",
      title: "Cabin Crew Training",
      subtitle: "Professional Certification",
      status: "Coming Soon",
      statusClass: "coming-soon",
      image: "images/aerial-view.png",
      shortDescription: "Professional cabin crew certification preparing you for a career in the skies with domestic and international airlines.",
      description: "Our Cabin Crew Training programme covers safety procedures, emergency protocols, passenger service excellence, and grooming standards.",
      details: [
        { label: "Duration", value: "3 – 4 months" },
        { label: "Qualification", value: "Cabin Crew Certificate" },
      ],
      requirements: "Min. age 18 | Matric | Medically fit | English proficiency | Presentable appearance",
      pricing: "Enquire for Pricing",
    },
    {
      id: "aircraft-maintenance",
      title: "Aircraft Maintenance (AMO)",
      subtitle: "SACAA Maintenance Certification",
      status: "Coming Soon",
      statusClass: "coming-soon",
      image: "images/hero-runway.png",
      shortDescription: "Practical aircraft maintenance training to earn your SACAA Maintenance Certification.",
      description: "Learn the technical skills required to maintain and service aircraft. Our AMO programme covers airframe, engine, and avionics maintenance with hands-on practical training.",
      details: [
        { label: "Duration", value: "Varies by course" },
        { label: "Qualification", value: "SACAA Maintenance Certification" },
      ],
      requirements: "Min. age 18 | Matric with Mathematics & Physical Science",
      pricing: "Enquire for Pricing",
    },
  ],

  /* ----------------------------------------------------------
     UNIQUE SELLING POINTS (Why Choose Coral Sky)
     ---------------------------------------------------------- */
  usps: [
    { title: "Zero to CPL in 14 Months", description: "Structured pathway from beginner to Commercial Pilot Licence (subject to terms and conditions)." },
    { title: "Airline Captain Instructors", description: "Learn from instructors who are active airline captains, bringing real-world aviation experience to your training." },
    { title: "State-of-the-Art Simulator", description: "Train on our advanced flight simulator, ensuring commercial aviation familiarity from day one." },
    { title: "1:7 Aircraft-to-Student Ratio", description: "Maximum 7 students per aircraft to ensure scheduling availability and maximum flying time." },
    { title: "1:10 Instructor-to-Student Ratio", description: "Maximum 10 students per instructor, guaranteeing dedicated personal attention." },
    { title: "Everything Under One Roof", description: "Flight Training, Cabin Crew, and Aircraft Maintenance training aligned under a single organisation." },
    { title: "Truly International Student Community", description: "Students from across Southern Africa and globally, fostering a rich multicultural environment." },
    { title: "Custom Currency Quotations", description: "Detailed, custom payment structures calculated in your local currency upon request." },
  ],

  /* ----------------------------------------------------------
     OUR VISION
     ---------------------------------------------------------- */
  vision: [
    { title: "World-Class Facility Expansion", description: "Growing into a larger, dedicated aviation campus at a premier aerodrome." },
    { title: "Global Student Recruitment", description: "Welcoming aspiring pilots and crew from every corner of the world." },
    { title: "Student Accommodation", description: "Comfortable, safe housing for international and out-of-town students." },
    { title: "Airline Partnerships", description: "Connecting graduates directly with regional operators. Announcements coming soon." },
    { title: "Full Structured Ground School", description: "Comprehensive theoretical ground instruction taught and guided entirely in-house." },
    { title: "Career Placement Support", description: "Assisting graduates with interview preparations and airline entry requirements." },
  ],

  /* ----------------------------------------------------------
     ACCREDITATIONS
     ---------------------------------------------------------- */
  accreditations: [
    { name: "SACAA ATO Licence", status: "Active", display: "SACAA Approved Aviation Training Organisation" },
    { name: "20 Years Operating History", status: "Confirmed", display: "20 Years of Aviation Training Excellence" },
    { name: "400+ CPL Graduates", status: "Confirmed", display: "Over 400 Commercial Pilots Trained" },
    { name: "AMO Licence", status: "In Progress", display: "AMO Certification — Coming Soon" },
    { name: "Cabin Crew Accreditation", status: "To be confirmed", display: "Accredited Cabin Crew Training — details coming soon" },
    { name: "Airline Partnerships", status: "In Progress", display: "Airline partnerships — announcement coming soon" },
  ],

  /* ----------------------------------------------------------
     TESTIMONIALS
     Placeholder structure for real testimonials to be collected.
     ---------------------------------------------------------- */
  testimonialsPlaceholder: {
    title: "Student Testimonials",
    note: "Official student testimonies and success stories are being compiled and will be published prior to full school operations in September 2026. For past graduate validations, please contact our admissions office.",
  },

  /* ----------------------------------------------------------
     INSTRUCTORS / TEAM
     Placeholder structure for real team members to be added.
     ---------------------------------------------------------- */
  teamPlaceholder: {
    title: "Our Instructional Team",
    note: "Full names, credentials, and photos of our flight instructors (including active domestic airline captains) will be updated once operational setup is complete. All instructors are fully certified by the SACAA.",
  },

  /* ----------------------------------------------------------
     GALLERY IMAGES
     The only AI-generated images used are strictly for the planes/runways as requested.
     ---------------------------------------------------------- */
  gallery: [
    { src: "images/hero-runway.png", alt: "Training aircraft on the runway at sunset", category: "aircraft" },
    { src: "images/multi-engine.png", alt: "Multi-engine training aircraft in flight", category: "aircraft" },
    { src: "images/aerial-view.png", alt: "Aerial view of South Africa from the wing", category: "aircraft" }
  ],

  /* ----------------------------------------------------------
     STUDENT ORIGIN COUNTRIES (for recruiting lists)
     ---------------------------------------------------------- */
  studentCountries: [
    "South Africa", "Zimbabwe", "Zambia", "Botswana", "Mozambique",
    "Nigeria", "Kenya", "Tanzania", "Ghana", "Uganda",
    "India", "Pakistan", "United Kingdom", "United Arab Emirates"
  ],
};
