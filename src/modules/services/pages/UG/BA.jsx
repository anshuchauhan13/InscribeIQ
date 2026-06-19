import PageViewer from "@/components/common/PageViewer";
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
import Banner from "../../components/PG/Banner";


import {
  BookOpen,
  MessageSquare,
  Users,
  Globe,
  Lightbulb,
  GraduationCap,
} from "lucide-react";

/* ================= HERO ================= */
const heroData = {
  badgeText: "Admissions Open",
  title: "Shape Your Future with a ",
  highlightedText: "Bachelor of Arts ",
  description:
    "Develop communication, critical thinking, and leadership skills through a comprehensive humanities and social sciences education.",

  highlights: [
    "12+ University Options",
    "Flexible Career Pathways",
    "Strong Communication Skills",
    "Higher Education Opportunities",
  ],

  primaryButtonText: "Apply Now",
  secondaryButtonText: "Free Career Counselling",

  mainImage: "/service/arts.jpg",
  secondaryImage: "/service/MBA2.jpg",

  trustBadgeText: "12+ University Options",
  supportBadgeText: "Humanities & Social Sciences",

  onPrimaryClick: "/apply",
  onSecondaryClick: "/contact",
};

/* ================= PROGRAM OVERVIEW ================= */
const programOverview = {
  badge: "ABOUT PROGRAM",
  title: "Our Arts Education Builds Strong Thinkers & Leaders.",
  description:
    "A Bachelor of Arts (B.A) provides students with broad knowledge across humanities, social sciences, communication, and public affairs while building analytical and leadership capabilities.",

  primaryButtonText: "Discover More",
  phone: "+91 123 456 7890",

  images: [
    "/service/MBA.jpg",
    "/service/hero1.png",
    "/service/books.jpg",
  ],

  features: [
    {
      title: "Humanities Learning",
      description: "Study society, culture, politics & communication.",
    },
    {
      title: "Critical Thinking",
      description: "Develop analytical and reasoning skills.",
    },
  ],
  quoteStat: {
    quote: "Turn your passion for ideas, creativity, and society into a future filled with possibilities.",
  },
};

/* ================= WHY CHOOSE ================= */
const whyChooseThisProgram = {
  badge: "Why Choose This Program",
  heading: "Build Strong Communication & Leadership Skills",
  highlight: "Communication & Leadership Skills",
  accentColor: "bg-rose-600",
  columns: 3,

  items: [
    {
      id: "01",
      icon: MessageSquare,
      title: "Strong Communication Skills",
      description: "Improve writing, speaking, and expression.",
    },
    {
      id: "02",
      icon: Globe,
      title: "Diverse Career Opportunities",
      description: "Open paths in media, civil services, education.",
    },
    {
      id: "03",
      icon: Users,
      title: "Leadership Development",
      description: "Build teamwork and leadership abilities.",
    },
    {
      id: "04",
      icon: BookOpen,
      title: "Civil Services Foundation",
      description: "Strong base for UPSC & competitive exams.",
    },
    {
      id: "05",
      icon: Lightbulb,
      title: "Creative Thinking",
      description: "Enhance creativity and problem solving.",
    },
    {
      id: "06",
      icon: GraduationCap,
      title: "Higher Education Ready",
      description: "Prepare for MA, MBA and global studies.",
    },
  ],
};

/* ================= KEY SUBJECTS ================= */
const keySubjects = {
  eyebrow: "Course Details",
  title: "Key Subjects Covered",
  description:
    "Explore core humanities and social science subjects.",

  buttonText: "View Curriculum",
  onButtonClick: () => console.log("Navigate to curriculum"),

  subjects: [
    "Psychology",
    "Sociology",
    "Political Science",
    "English Literature",
    "History",
    "Public Administration",
    "Economics",
    "Philosophy",
  ],
};

/* ================= CAREER OUTCOMES ================= */
const careerOutcomesData = {
  tagline: "CAREER OUTCOMES",
  heading: "Career Opportunities in Arts",

  description:
    "Build strong communication, analytical, and leadership skills for diverse careers.",

  careers: [
    {
      id: "journalist",
      title: "Journalist",
      description: "Work in media and news reporting.",
    },
    {
      id: "content-strategist",
      title: "Content Strategist",
      description: "Create and manage digital content.",
    },
    {
      id: "pr-executive",
      title: "Public Relations Executive",
      description: "Manage communication and branding.",
    },
    {
      id: "educator",
      title: "Educator",
      description: "Teaching and academic roles.",
    },
    {
      id: "researcher",
      title: "Social Researcher",
      description: "Study social and cultural trends.",
    },
    {
      id: "civil-services",
      title: "Civil Services Aspirant",
      description: "Prepare for UPSC and government exams.",
    },
  ],

  featuredImage: "/service/career.jpg",
  featuredBadge: "Humanities Careers",
  featuredTitle: "Build a Career in Arts & Humanities",
  featuredDescription:
    "Develop communication and analytical skills for diverse opportunities.",

  primaryCta: "Explore Programs",
  secondaryCta: "Contact Us",
};

/* ================= ADMISSION ================= */
const admissionData = {
  eyebrow: "HOW IT WORKS",
  title: "Admission Process",
  highlightWord: "Admission",
  description:
    "Simple step-by-step admission process for BA programs.",

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
    "We guide you in selecting the best arts universities with complete admission support.",

  cards: {
    stat: {
      eyebrow: "Expert Guidance",
      body: "Personalized counselling for arts students.",
      stat: "100%",
      statLabel: "Admission Support",
      badgeText: "Expert Counselling",
    },

    imageCard: {
      badge: "University Selection",
      title: "Best Arts Universities",
      sub: "Choose from top accredited universities.",
      tags: ["BA English", "BA History", "BA Political Science"],
      img: "/service/hero1.png",
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
const BA = () => {
  return (
    <PageViewer>
      <Hero {...heroData} />
      < UniversityPartnership />
      <ProgramOverview {...programOverview} />

      <WhyChooseThisProgram {...whyChooseThisProgram} />

      <KeySubject {...keySubjects} />

      <CareerOutcomes {...careerOutcomesData} />




      <Admission {...admissionData} />
      <WhyChooseUs {...whyChooseUsData} />
      <WhyInscribe {...whyInscribeData} />

      <LeadGeneration />

      <FAQs />
      <Banner />
    </PageViewer>
  );
};

export default BA;