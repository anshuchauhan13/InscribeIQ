import PageViewer from "@/components/common/PageViewer";
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
import Banner from "../../components/PG/Banner";

import {
  Code,
  Database,
  Cpu,
  Cloud,
  Wrench,
  Rocket,
} from "lucide-react";

/* ================= HERO ================= */
const heroData = {
  badgeText: "Admissions Open",
  title: "Engineer the Future with a",
  highlightedText: "B.Tech Degree",
  description:
    "Gain industry-ready technical skills, hands-on project experience, and exposure to emerging technologies through leading engineering programs.",

  highlights: [
    "12+ University Options",
    "Industry-Focused Curriculum",
    "Emerging Technology Specializations",
    "Career & Placement Support",
  ],

  primaryButtonText: "Apply Now",
  secondaryButtonText: "Free Career Counselling",

  mainImage: "/service/BTech-hero1.jpg",
  secondaryImage: "/service/BTech-hero2.jpg",

  trustBadgeText: "12+ University Options",
  supportBadgeText: "Industry-Focused Learning",

  onPrimaryClick: "/apply",
  onSecondaryClick: "/contact",
};

/* ================= PROGRAM OVERVIEW ================= */
const programOverview = {
  badge: "ABOUT PROGRAM",
  title: "Our Engineering Education Builds Future Innovators.",
  description:
    "A Bachelor of Technology (B.Tech) prepares students with strong engineering fundamentals, technical expertise, innovation skills, and practical problem-solving capabilities required in today's technology-driven world.",

  primaryButtonText: "Discover More",
  phone: "+91 123 456 7890",

  images: [
    "/service/BTechabout3.jpg",
    "/service/bca.jpg",
    "/service/Btech3.jpg",
  ],

  features: [
    {
      title: "Technical Expertise",
      description: "Learn core engineering and programming concepts.",
    },
    {
      title: "Practical Projects",
      description: "Hands-on experience with real-world systems.",
    },
  ],
  quoteStat :{
    quote:"Build the future with innovation, technology, and the skills that power tomorrow's world.",
},
};

/* ================= WHY CHOOSE ================= */
const whyChooseThisProgram = {
  badge: "Why Choose This Program",
  heading: "Build Strong Engineering & Technology Skills",
  highlight: "Engineering & Technology Skills",
  accentColor: "bg-indigo-600",
  columns: 3,

  items: [
    {
      id: "01",
      icon: Code,
      title: "Industry-Relevant Skills",
      description: "Learn programming and engineering fundamentals.",
    },
    {
      id: "02",
      icon: Cpu,
      title: "Technology Focus",
      description: "Exposure to AI, ML, Cloud & modern tech.",
    },
    {
      id: "03",
      icon: Database,
      title: "Data & Systems",
      description: "Master data structures and databases.",
    },
    {
      id: "04",
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Learn deployment and cloud technologies.",
    },
    {
      id: "05",
      icon: Wrench,
      title: "Practical Learning",
      description: "Build real-world engineering projects.",
    },
    {
      id: "06",
      icon: Rocket,
      title: "Innovation Focus",
      description: "Develop problem-solving & innovation skills.",
    },
  ],
};

/* ================= KEY SUBJECTS ================= */
const keySubjects = {
  eyebrow: "Course Details",
  title: "Key Subjects Covered",
  description:
    "Study core engineering subjects for strong technical expertise.",

  buttonText: "View Curriculum",
  onButtonClick: () => console.log("Navigate to curriculum"),

  subjects: [
    "Engineering Mathematics",
    "Programming Fundamentals",
    "Data Structures",
    "Artificial Intelligence",
    "Computer Networks",
    "Electronics & Communication",
    "Software Engineering",
    "Database Management Systems",
  ],
};

/* ================= CAREER OUTCOMES ================= */
const careerOutcomesData = {
  tagline: "CAREER OUTCOMES",
  heading: "Career Opportunities in Engineering",

  description:
    "Build strong technical skills for high-growth careers in IT, software, AI, and engineering industries.",

  careers: [
    {
      id: "software-engineer",
      title: "Software Engineer",
      description: "Develop software applications and systems.",
    },
    {
      id: "data-scientist",
      title: "Data Scientist",
      description: "Analyze data and build predictive models.",
    },
    {
      id: "ai-engineer",
      title: "AI Engineer",
      description: "Work on artificial intelligence solutions.",
    },
    {
      id: "cloud-engineer",
      title: "Cloud Engineer",
      description: "Manage cloud infrastructure and deployment.",
    },
    {
      id: "devops-engineer",
      title: "DevOps Engineer",
      description: "Automate and optimize deployment pipelines.",
    },
    {
      id: "technical-consultant",
      title: "Technical Consultant",
      description: "Provide technical solutions to businesses.",
    },
  ],

  featuredImage: "/service/career.jpg",
  featuredBadge: "Tech Careers",
  featuredTitle: "Build a Career in Engineering & Technology",
  featuredDescription:
    "Develop technical, analytical, and problem-solving skills for global tech careers.",

  primaryCta: "Explore Programs",
  secondaryCta: "Contact Us",
};

/* ================= ADMISSION ================= */
const admissionData = {
  eyebrow: "HOW IT WORKS",
  title: "Admission Process",
  highlightWord: "Admission",
  description:
    "Simple step-by-step admission process for B.Tech programs.",

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
    "We guide you in selecting the best engineering universities with complete admission support.",

  cards: {
    stat: {
      eyebrow: "Expert Guidance",
      body: "Personalized counselling for engineering students.",
      stat: "100%",
      statLabel: "Admission Support",
      badgeText: "Expert Counselling",
    },

    imageCard: {
      badge: "University Selection",
      title: "Best Engineering Universities",
      sub: "Choose from top accredited universities.",
      tags: ["B.Tech CSE", "IT", "AI & ML", "Data Science"],
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
const BTech = () => {
  return (
    <PageViewer>
      <Hero {...heroData} />

     < UniversityPartnership/>

      <ProgramOverview {...programOverview} />

      <WhyChooseThisProgram {...whyChooseThisProgram} />

      <KeySubject {...keySubjects} />

      <CareerOutcomes {...careerOutcomesData} />

      <Eligibility />

      <Admission {...admissionData} />

       <WhyChooseUs {...whyChooseUsData}/>

      <WhyInscribe {...whyInscribeData} />

      <LeadGeneration />

      <FAQs />

      <Banner></Banner>
    </PageViewer>
  );
};

export default BTech;