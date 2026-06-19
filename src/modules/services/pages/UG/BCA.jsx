
import React from "react";

import Hero from "../../components/UG/Hero";
import ProgramOverview from "../../components/UG/ProgramOverview";
import WhyChooseThisProgram from "../../components/UG/WhyChoooseThisProgram";
import Eligibilty from "../../components/UG/Eligibilty";
import KeySubject from "../../components/UG/KeySubject";
import CareerOutcomes from "../../components/Doctorate/CareerOutcomes";
import WhyInscribe from "../../components/Doctorate/WhyInscribe";
import Admission from "../../components/UG/Admission";
import FAQs from "@/modules/home/components/FAQs";
import LeadGeneration from "../../components/Doctorate/LeadGeneration";
import UniversityPartnership from "@/modules/home/components/UniversityPartnership";
import WhyChooseUs from "../../components/Doctorate/WhyGlobal";
import {
  BookOpen,
  Brain,
  Database,
  Cloud,
  Shield,
  Code,
} from "lucide-react";

/* ================= HERO ================= */
const heroData = {
  badgeText: "Admissions Open",
  title: "Build Your Future with a",
  highlightedText: "BCA (AI Integrated)",
  description:
    "Master programming, Artificial Intelligence, Machine Learning, Data Science, and modern technologies to become a future-ready technology professional.",

  highlights: [
    "AI-Integrated Curriculum",
    "Industry-Relevant Technologies",
    "Project-Based Learning",
    "High-Demand Career Opportunities",
  ],

  primaryButtonText: "Apply Now",
  secondaryButtonText: "Free Career Counselling",

  mainImage: "/service/bca-ai-hero1.png",
  secondaryImage: "/service/bca-ai-hero2.png",

  trustBadgeText: "Multiple University Options",
  supportBadgeText: "AI & Technology Focused",

  onPrimaryClick: "/apply",
  onSecondaryClick: "/contact",
};

/* ================= PROGRAM OVERVIEW ================= */
const programOverview = {
  badge: "ABOUT PROGRAM",
  title: "Future-Ready Technology Education with AI Integration",
  description:
    "The Bachelor of Computer Applications (BCA) with Artificial Intelligence Integration combines computer applications, software development, machine learning, data science, cloud computing, and intelligent systems to prepare students for next-generation technology careers.",

  primaryButtonText: "Discover More",
  phone: "+91 123 456 7890",

  images: [
    "/service/bca1.png",
    "/service/bca2.png",
    "/service/bca3.png",
  ],

  features: [
    {
      title: "Artificial Intelligence",
      description:
        "Learn intelligent systems, automation, and AI-powered technologies.",
    },
    {
      title: "Industry-Focused Learning",
      description:
        "Gain practical experience through projects and real-world applications.",
    },
  ],
};

/* ================= WHY CHOOSE THIS PROGRAM ================= */
const whyChooseThisProgram = {
  badge: "Why Choose This Program",
  heading: "Build Future-Ready Skills in AI & Technology",
  highlight: "AI & Technology",
  accentColor: "bg-blue-600",
  columns: 3,

  items: [
    {
      id: "01",
      icon: Brain,
      title: "AI-Integrated Curriculum",
      description:
        "Learn Artificial Intelligence and Machine Learning alongside core computing concepts.",
    },
    {
      id: "02",
      icon: Code,
      title: "Industry-Relevant Technologies",
      description:
        "Gain exposure to modern development tools and technologies used by top companies.",
    },
    {
      id: "03",
      icon: Database,
      title: "Data Science Learning",
      description:
        "Build strong analytical and data-driven decision-making skills.",
    },
    {
      id: "04",
      icon: Cloud,
      title: "Cloud Computing",
      description:
        "Understand cloud infrastructure and modern deployment environments.",
    },
    {
      id: "05",
      icon: Shield,
      title: "Cyber Security Awareness",
      description:
        "Learn security fundamentals and best practices for modern applications.",
    },
    {
      id: "06",
      icon: BookOpen,
      title: "High Employability",
      description:
        "Prepare for in-demand technology careers across industries.",
    },
  ],
};

/* ================= ELIGIBILITY ================= */
const eligibilityData = {
  badge: "Eligibility Criteria",
  title: "Who Can Apply?",

  eligibilityCriteria: [
    "10+2 from a recognized board",
    "Students from any stream are eligible",
    "No prior coding knowledge required",
  ],
};

/* ================= KEY SUBJECTS ================= */
const keySubjects = {
  eyebrow: "Course Details",
  title: "Key Subjects Covered",
  description:
    "Study emerging technologies and industry-focused subjects designed for future technology careers.",

  buttonText: "View Curriculum",

  subjects: [
    "Programming Languages",
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Cloud Computing",
    "Cyber Security",
    "Database Management",
    "Software Development",
  ],
};

/* ================= CAREER OUTCOMES ================= */
const careerOutcomesData = {
  tagline: "CAREER OUTCOMES",
  heading: "Career Opportunities After BCA (AI)",

  description:
    "Graduates are equipped with technical, analytical, and AI-focused skills that open doors to exciting technology careers.",

  careers: [
    {
      id: "software-developer",
      title: "Software Developer",
      description:
        "Design and develop software applications for various industries.",
    },
    {
      id: "ai-engineer",
      title: "AI Engineer",
      description:
        "Build intelligent systems powered by artificial intelligence.",
    },
    {
      id: "machine-learning-associate",
      title: "Machine Learning Associate",
      description:
        "Create predictive models and machine learning solutions.",
    },
    {
      id: "data-analyst",
      title: "Data Analyst",
      description:
        "Analyze and interpret business and customer data.",
    },
    {
      id: "full-stack-developer",
      title: "Full Stack Developer",
      description:
        "Develop complete web applications from frontend to backend.",
    },
    {
      id: "cloud-engineer",
      title: "Cloud Engineer",
      description:
        "Manage cloud infrastructure and deployment solutions.",
    },
    {
      id: "business-intelligence-analyst",
      title: "Business Intelligence Analyst",
      description:
        "Transform business data into actionable insights.",
    },
    {
      id: "cyber-security-associate",
      title: "Cyber Security Associate",
      description:
        "Protect systems and networks from security threats.",
    },
  ],

  featuredImage: "/service/bca-career.png",
  featuredBadge: "Technology Careers",
  featuredTitle: "Launch Your Career in AI & Emerging Technologies",
  featuredDescription:
    "Gain practical experience and future-ready skills for the modern digital economy.",

  primaryCta: "Explore Programs",
  secondaryCta: "Contact Us",
};

/* ================= ADMISSION ================= */
const admissionData = {
  eyebrow: "HOW IT WORKS",
  title: "Admission Process",
  highlightWord: "Admission",
  description:
    "Simple and hassle-free admission process for BCA (AI Integrated) programs.",

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
    "Get expert guidance in selecting the best AI-integrated BCA programs and universities.",

  cards: {
    stat: {
      eyebrow: "Expert Guidance",
      body: "Personalized counselling for technology-focused careers.",
      stat: "100%",
      statLabel: "Admission Support",
      badgeText: "Career Counselling",
    },

    imageCard: {
      badge: "University Selection",
      title: "Top AI-Focused Universities",
      sub: "Choose from leading universities offering AI-integrated BCA programs.",
      tags: ["Artificial Intelligence", "Machine Learning", "Data Science"],
      img: "/service/bca-university.png",
    },

    lightCard: {
      eyebrow: "Documentation Support",
      title: "Smooth Admission Journey",
      accent: "Verified Documentation",
      body: "End-to-end assistance throughout the admission process.",
      pills: ["Forms", "Verification", "Submission"],
    },

    darkCard1: {
      badge: "Student Support",
      title: "Dedicated Assistance",
      accent: "Always Available",
      body: "Support from inquiry to successful enrollment.",
    },

    darkCard2: {
      badge: "End-to-End Support",
      title: "Complete Admission Help",
      accent: "Full Guidance",
      body: "Helping students make confident academic decisions.",
    },
  },
};

/* ================= FAQS ================= */
const faqData = [
  {
    question:
      "What is the difference between a traditional BCA and BCA with AI Integration?",
    answer:
      "BCA with AI Integration includes Artificial Intelligence, Machine Learning, Data Science, and emerging technologies in addition to the traditional BCA curriculum.",
  },
  {
    question: "Do I need prior coding knowledge to join this program?",
    answer:
      "No. Students from any stream can apply, and programming concepts are taught from the fundamentals.",
  },
  {
    question: "What career opportunities are available after graduation?",
    answer:
      "Graduates can pursue careers as Software Developers, AI Engineers, Data Analysts, Full Stack Developers, Cloud Engineers, and Cyber Security Associates.",
  },
  {
    question: "Can I pursue MCA after completing BCA (AI Integrated)?",
    answer:
      "Yes. Graduates are eligible to pursue MCA and other postgraduate programs in computer science and technology.",
  },
];

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
const BCA = () => {
  return (
    <>
      <Hero {...heroData} />

      <UniversityPartnership />

      <ProgramOverview {...programOverview} />

      <WhyChooseThisProgram {...whyChooseThisProgram} />

      {/* <Eligibilty {...eligibilityData} /> */}

      <KeySubject {...keySubjects} />

      <CareerOutcomes {...careerOutcomesData} />

      <Admission {...admissionData} />
       <WhyChooseUs {...whyChooseUsData}/>

      <WhyInscribe {...whyInscribeData} />

      <LeadGeneration />

      <FAQs faqData={faqData} />
    </>
  );
};

export default BCA;
