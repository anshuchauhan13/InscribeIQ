import React from "react";

import Hero from "../../components/UG/Hero";
import ProgramOverview from "../../components/UG/ProgramOverview";
import WhyChooseThisProgram from "../../components/UG/WhyChoooseThisProgram";
import Eligibility from "../../components/UG/Eligibilty";
import KeySubject from "../../components/UG/KeySubject";
import CareerOutcomes from "../../components/Doctorate/CareerOutcomes";
import WhyInscribe from "../../components/Doctorate/WhyInscribe";
import Admission from "../../components/UG/Admission";
import FAQs from "@/modules/home/components/FAQs";
import LeadGeneration from "../../components/Doctorate/LeadGeneration";
import UniversityPartnership from "@/modules/home/components/UniversityPartnership";
import WhyChooseUs from "../../components/Doctorate/WhyGlobal";

import {
  Landmark,
  Calculator,
  FileText,
  TrendingUp,
  Briefcase,
  Banknote,
} from "lucide-react";

/* ================= HERO ================= */
const heroData = {
  badgeText: "Admissions Open",
  title: "Master Finance, Accounting & Business with a",
  highlightedText: "B.Com Degree",
  description:
    "Develop expertise in commerce, taxation, accounting, finance, and business operations through industry-oriented education.",

  highlights: [
    "12+ University Options",
    "Finance-Focused Curriculum",
    "Corporate Career Opportunities",
    "Professional Growth Pathways",
  ],

  primaryButtonText: "Apply Now",
  secondaryButtonText: "Free Career Counselling",

  mainImage: "/service/accounting.jpg",
  secondaryImage: "/service/hero4.jpg",

  trustBadgeText: "12+ University Options",
  supportBadgeText: "Finance-Focused Learning",

  onPrimaryClick: "/apply",
  onSecondaryClick: "/contact",
};

/* ================= PROGRAM OVERVIEW ================= */
const programOverview = {
  badge: "ABOUT PROGRAM",
  title: "Our Commerce Education Builds Strong Financial Experts.",
  description:
    "A Bachelor of Commerce (B.Com) provides a strong foundation in accounting, finance, taxation, economics, and business management while preparing students for corporate and professional careers.",

  primaryButtonText: "Discover More",
  phone: "+91 123 456 7890",

  images: [
    "/service/bcom.jpg",
    "/service/bcom2.jpg",
    "/service/BTech-hero2.jpg",
  ],

  features: [
    {
      title: "Financial Expertise",
      description: "Learn accounting, taxation, and finance fundamentals.",
    },
    {
      title: "Corporate Skills",
      description: "Develop business and analytical decision-making skills.",
    },
  ],
};

/* ================= WHY CHOOSE ================= */
const whyChooseThisProgram = {
  badge: "Why Choose This Program",
  heading: "Build Strong Financial & Corporate Skills",
  highlight: "Financial & Corporate Skills",
  accentColor: "bg-green-600",
  columns: 3,

  items: [
    {
      id: "01",
      icon: Landmark,
      title: "Strong Financial Foundation",
      description: "Build expertise in accounting and finance.",
    },
    {
      id: "02",
      icon: Calculator,
      title: "Industry-Relevant Curriculum",
      description: "Learn real-world financial practices.",
    },
    {
      id: "03",
      icon: FileText,
      title: "Professional Certifications",
      description: "Pathway to CA, CMA, CFA, MBA.",
    },
    {
      id: "04",
      icon: TrendingUp,
      title: "Corporate Career Growth",
      description: "Opportunities in banking and finance sectors.",
    },
    {
      id: "05",
      icon: Briefcase,
      title: "Entrepreneurial Knowledge",
      description: "Understand business and startup basics.",
    },
    {
      id: "06",
      icon: Banknote,
      title: "Higher Education Readiness",
      description: "Strong base for MBA and finance studies.",
    },
  ],
};

/* ================= KEY SUBJECTS ================= */
const keySubjects = {
  eyebrow: "Course Details",
  title: "Key Subjects Covered",
  description:
    "Study core commerce subjects for strong financial knowledge.",

  buttonText: "View Curriculum",
  onButtonClick: () => console.log("Navigate to curriculum"),

  subjects: [
    "Financial Accounting",
    "Taxation",
    "Auditing",
    "Business Economics",
    "Banking & Finance",
    "Business Law",
    "Cost Accounting",
    "Corporate Accounting",
  ],
};

/* ================= CAREER OUTCOMES ================= */
const careerOutcomesData = {
  tagline: "CAREER OUTCOMES",
  heading: "Career Opportunities in Commerce",

  description:
    "Build strong financial, accounting, and analytical skills for corporate careers.",

  careers: [
    {
      id: "accountant",
      title: "Accountant",
      description: "Manage financial records and accounting systems.",
    },
    {
      id: "auditor",
      title: "Auditor",
      description: "Review financial statements and compliance.",
    },
    {
      id: "financial-analyst",
      title: "Financial Analyst",
      description: "Analyze investments and financial data.",
    },
    {
      id: "tax-consultant",
      title: "Tax Consultant",
      description: "Handle taxation planning and compliance.",
    },
    {
      id: "banking-professional",
      title: "Banking Professional",
      description: "Work in banking and financial institutions.",
    },
    {
      id: "finance-executive",
      title: "Finance Executive",
      description: "Manage corporate finance operations.",
    },
  ],

  featuredImage: "/service/career.jpg",
  featuredBadge: "Finance Careers",
  featuredTitle: "Build a Career in Finance & Commerce",
  featuredDescription:
    "Develop strong accounting and financial skills for corporate success.",

  primaryCta: "Explore Programs",
  secondaryCta: "Contact Us",
};

/* ================= ADMISSION ================= */
const admissionData = {
  eyebrow: "HOW IT WORKS",
  title: "Admission Process",
  highlightWord: "Admission",
  description:
    "Simple step-by-step admission process for B.Com programs.",

  steps: [
    { title: "Submit Inquiry" },
    { title: "Career Counselling" },
    { title: "University Selection" },
    { title: "Documentation" },
    { title: "Admission Confirmation" },
  ],
};

/* ================= WHY INSCRIBE ================= */
const whyInscribeData = {
  heading: "Why Choose Inscribe IQ?",
  subheading:
    "We guide you in selecting the best commerce universities with complete admission support.",

  cards: {
    stat: {
      eyebrow: "Expert Guidance",
      body: "Personalized counselling for commerce students.",
      stat: "100%",
      statLabel: "Admission Support",
      badgeText: "Expert Counselling",
    },

    imageCard: {
      badge: "University Selection",
      title: "Best Commerce Universities",
      sub: "Choose from top accredited universities.",
      tags: ["B.Com", "Finance", "Accounting", "Taxation"],
      img: "/service/bcom-university.png",
    },

    lightCard: {
      eyebrow: "Documentation Support",
      title: "Smooth Admission Process",
      accent: "Verified Documentation",
      body: "We handle all paperwork for you.",
      pills: ["Forms", "Verification", "Submission"],
    },

    darkCard1: {
      badge: "Student Support",
      title: "Continuous Assistance",
      accent: "Always Available",
      body: "Support from enquiry to admission.",
    },

    darkCard2: {
      badge: "End-to-End Support",
      title: "Complete Admission Help",
      accent: "Full Guidance",
      body: "Counselling to final enrollment.",
    },
  },
};

const whyChooseUsData = {
  tagline: "Skills You Will Develop",

  heading: "Build Essential Leadership & Business Skills",

  subheading:
    "Develop the practical, strategic, and analytical capabilities required to lead teams, solve complex business challenges, and drive organizational success.",

  services: [
    {
      id: 1,
      iconType: "global",
      title: "Leadership Skills",
      description:
        "Learn to inspire teams, drive organizational growth, and make impactful decisions in dynamic business environments.",
    },
   
    {
      id: 3,
      iconType: "strategy",
      title: "Business Strategy",
      description:
        "Develop strategic thinking abilities to identify opportunities, create competitive advantages, and achieve business objectives.",
    },
    {
      id: 4,
      iconType: "executive",
      title: "Team Management",
      description:
        "Gain expertise in managing diverse teams, delegating responsibilities, and fostering a productive work culture.",
    },
    {
      id: 5,
      iconType: "research",
      title: "Problem Solving",
      description:
        "Strengthen your ability to analyze challenges, evaluate solutions, and make informed decisions under pressure.",
    },
  
  ],
};

/* ================= PAGE ================= */
const BCom = () => {
  return (
    <>
      <Hero {...heroData} />
      <UniversityPartnership/>

      <ProgramOverview {...programOverview} />

      <WhyChooseThisProgram {...whyChooseThisProgram} />

      <KeySubject {...keySubjects} />

      <CareerOutcomes {...careerOutcomesData} />

    
      <Admission {...admissionData} />
       <WhyChooseUs {...whyChooseUsData}/>

      <WhyInscribe {...whyInscribeData} />

      <LeadGeneration />

      <FAQs />
    </>
  );
};

export default BCom;