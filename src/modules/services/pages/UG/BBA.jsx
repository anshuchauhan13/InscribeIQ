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
  Building2,
  Users,
  Briefcase,
  Rocket,
  Compass,
  GraduationCap,
} from "lucide-react";

const heroData = {
  badgeText: "Admissions Open",
  title: "Become a Future Business Leader with a",
  highlightedText: "BBA Degree",
  description:
    "Develop leadership, management, and strategic thinking skills through industry-focused business education.",
  highlights: [
    "12+ University Options",
    "Industry-Oriented Curriculum",
    "Career-Focused Learning",
    "Placement-Oriented Programs",
  ],
  primaryButtonText: "Apply Now",
  secondaryButtonText: "Free Career Counselling",
  mainImage: "/service/BBA.png",
  secondaryImage: "/service/bba3.png",
  trustBadgeText: "12+ University Options",
  supportBadgeText: "Research-Oriented Learning",
  onPrimaryClick: "/bba.jpg",
  onSecondaryClick: "",
};
const programOverview = {
  badge: "ABOUT US",
  title: "Our Education System Inspires You More.",
  description:
    "A Bachelor of Business Administration (BBA) equips students with essential business, management, marketing, and leadership skills required to succeed in today's competitive corporate environment.",
  primaryButtonText: "Discover More",
  phone: "+91 123 456 7890",
  images: ["/service/bba1.png", "/service/hero2.png", "/service/bba4.jpg"],
  features: [
    {
      title: "Business Management",
      description:
        "Learn core business operations, leadership, and organizational skills.",
    },
    {
      title: "Marketing & Strategy",
      description:
        "Develop analytical and strategic decision-making abilities.",
    },
  ],

  quoteStat :{
    quote:"Develop the leadership mindset and business skills to become tomorrow's industry leader.",
},
};
const whyChooseThisProgram = {
  badge: "Why Choose This Program",
  heading: "Build Skills. Gain Confidence. Create Your Future.",
  highlight: "Create Your Future.",
  accentColor: "bg-purple-600",
  columns: 3,
  containerClass: "",

  items: [
    {
      id: "01",
      icon: Building2,
      title: "Strong Business Foundation",
      description:
        "Develop a comprehensive understanding of business operations, management principles, and organizational practices.",
    },
    {
      id: "02",
      icon: Users,
      title: "Leadership Development",
      description:
        "Build communication, leadership, and team-management skills required for modern organizations.",
    },
    {
      id: "03",
      icon: Briefcase,
      title: "Industry Exposure",
      description:
        "Gain practical knowledge through projects, case studies, and interaction with industry professionals.",
    },
    {
      id: "04",
      icon: Rocket,
      title: "Entrepreneurial Mindset",
      description:
        "Learn innovation, critical thinking, and business problem-solving to create future opportunities.",
    },
    {
      id: "05",
      icon: Compass,
      title: "Diverse Career Opportunities",
      description:
        "Explore multiple career paths in finance, marketing, operations, HR, consulting, and more.",
    },
    {
      id: "06",
      icon: GraduationCap,
      title: "Higher Education Pathways",
      description:
        "Prepare for MBA programs, specialized postgraduate studies, and global academic opportunities.",
    },
  ],
};
const keySubjects = {
  eyebrow: "Course Details",
  title: "Key Subjects Covered",
  description:
    "Build a strong foundation across business, management, and analytics for real-world readiness.",
  buttonText: "View Curriculum",
  onButtonClick: () => console.log("Navigate to curriculum"),

  subjects: [
    "Principles of Management",
    "Marketing Management",
    "Human Resource Management",
    "Business Economics",
    "Financial Accounting",
    "Entrepreneurship",
    "Business Communication",
    "Operations Management",
  ],
};
const eligibilty = {};
const admissionData = {
  eyebrow: "HOW IT WORKS",
  title: "Admission Process",
  highlightWord: "Admission",
  description:
    "A simple, guided journey from your first enquiry to successful admission.",

  steps: [
    { title: "Submit Inquiry" },
    { title: "Career Counselling" },
    { title: "University Selection" },
    { title: "Documentation" },
    { title: "Admission Confirmation" },
  ],
};
const careerOutcomesData = {
  tagline: "CAREER OUTCOMES",

  heading: "Career Opportunities",

  description:
    "Build a strong foundation in business management and develop the skills needed to pursue diverse career opportunities across analytics, marketing, human resources, operations, and entrepreneurship.",

  careers: [
    {
      id: "business-analyst",
      title: "Business Analyst",
      description:
        "Analyze business data, identify trends, and support strategic decision-making.",
    },
    {
      id: "marketing-executive",
      title: "Marketing Executive",
      description:
        "Plan and execute marketing campaigns to drive brand awareness and business growth.",
    },
    {
      id: "hr-executive",
      title: "HR Executive",
      description:
        "Manage recruitment, employee engagement, and organizational development initiatives.",
    },
    {
      id: "operations-executive",
      title: "Operations Executive",
      description:
        "Coordinate business processes and ensure efficient day-to-day operations.",
    },
    {
      id: "management-trainee",
      title: "Management Trainee",
      description:
        "Gain cross-functional business exposure and prepare for future leadership roles.",
    },
    {
      id: "entrepreneur",
      title: "Entrepreneur",
      description:
        "Start and grow your own business using practical management and leadership skills.",
    },
  ],

  featuredImage:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w:1200&q:80",

  featuredBadge: "Career Growth",

  featuredTitle: "Build a Successful Career in Business",

  featuredDescription:
    "Develop industry-relevant skills in management, marketing, analytics, human resources, and operations to unlock rewarding career opportunities across multiple sectors.",

  primaryCta: "Explore Program",

  secondaryCta: "Visit Site",
};
const whyInscribeData = {
  heading: "Why Choose Inscribe IQ?",

  subheading:
    "At Inscribe IQ, we simplify the admission journey by providing expert guidance, personalized counselling, and complete application support. From choosing the right university to securing admission, our team is with you at every step.",

  cards: {
    stat: {
      eyebrow: "Expert Guidance",
      body: "Get professional advice on course selection, eligibility, and university options that align with your academic and career goals.",
      stat: "100%",
      statLabel: "Admission Support",
      badgeText: "Expert\nCounselling",
    },

    imageCard: {
      badge: "University Selection",
      title: "Multiple Universities. One Trusted Partner.",
      sub: "Explore a wide range of accredited universities and programs with expert guidance.",
      tags: ["UG Programs", "PG Programs", "Doctoral Programs"],
      img: "/service/hero1.png",
    },

    lightCard: {
      eyebrow: "Documentation Support",
      title: "Hassle-Free Application Process",
      accent: "Every document reviewed and verified",
      body: "Our team assists with application forms, academic records, SOPs, and other required documents to ensure a smooth admission process.",
      pills: ["Application Forms", "Document Review", "Submission Support"],
    },

    darkCard1: {
      badge: "Student Support",
      title: "Dedicated Assistance Throughout",
      accent: "We're here whenever you need help",
      body: "Receive continuous support from our admission experts for queries, follow-ups, application tracking, and university communication.",
    },

    darkCard2: {
      badge: "End-to-End Support",
      title: "From Counselling to Admission",
      accent: "Complete admission assistance under one roof",
      body: "From personalized counselling and university shortlisting to documentation and final enrollment, Inscribe IQ supports your entire admission journey.",
    },
  },
};
const leadGeneration = {};
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
const BBA = () => {
  return (
    <PageViewer>
      <Hero {...heroData}></Hero>
      <UniversityPartnership />
      <ProgramOverview {...programOverview} />

      <WhyChooseThisProgram {...whyChooseThisProgram}></WhyChooseThisProgram>

      <KeySubject {...keySubjects} />
      <CareerOutcomes {...careerOutcomesData}></CareerOutcomes>
      {/* <Eligibility></Eligibility> */}
      <Admission {...admissionData}></Admission>
      <WhyChooseUs {...whyChooseUsData}/>
      <WhyInscribe {...whyInscribeData}></WhyInscribe>
      <LeadGeneration></LeadGeneration>
      <FAQs></FAQs>
      <Banner></Banner>
    </PageViewer>
  );
};

export default BBA;
