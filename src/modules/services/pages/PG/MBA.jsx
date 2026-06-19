import React from "react";
import PageViewer from "@/components/common/PageViewer";
import HeroSection from "../../components/PG/HeroSection";
import ProgramOverview from "../../components/PG/ProgramOverview";
import WhyChooseThisProgram from "../../components/UG/WhyChoooseThisProgram";
import WhyInscribe from "../../components/Doctorate/WhyInscribe";
import CareerOutcomes from "../../components/Doctorate/CareerOutcomes";
import Admission from "../../components/UG/Admission";
import UniversityPartnership from "@/modules/home/components/UniversityPartnership";
import Eligibility from "../../components/UG/Eligibilty";
import {
  BookOpen,
  MessageSquare,
  Users,
  Globe,
  Lightbulb,
  GraduationCap,
  Briefcase,
  TrendingUp,
} from "lucide-react";
import FAQs from "@/modules/home/components/FAQs";
import LeadGeneration from "../../components/Doctorate/LeadGeneration";
import KeySubject from "../../components/UG/KeySubject";
import Banner from "../../components/PG/Banner";

const heroData = {
badge: "MASTER OF BUSINESS ADMINISTRATION",

title: "Lead the Future with an MBA Degree",

titleHighlight: "MBA",

subtitle:
"Develop strategic leadership, management, and business decision-making skills through industry-focused postgraduate education.",

backgroundImage: "/service/career.jpg",

accentColor: "#320F8C",

primaryCta: {
label: "Apply Now",
onClick: () => {
console.log("Apply Now");
},
},

secondaryCta: {
label: "Free Career Counselling",
onClick: () => {
console.log("Career Counselling");
},
},

features: [
{
icon:<Globe size={20} strokeWidth={2} /> ,
title: "12+ University Options",
description:
"Choose from top accredited universities offering MBA programs.",
},

{
  icon: <Briefcase size={20} strokeWidth={2} />,
  title: "Industry-Oriented Curriculum",
  description:
    "Learn practical business concepts, leadership frameworks, and real-world management strategies.",
},

{
  icon: <Users size={20} strokeWidth={2} />,
  title: "Leadership Development",
  description:
    "Build strong leadership, communication, and team management skills required for managerial roles.",
},

{
  icon: <TrendingUp size={20} strokeWidth={2} />,
  title: "Career Advancement Opportunities",
  description:
    "Unlock high-growth career paths in management, consulting, marketing, finance, and entrepreneurship.",
},

],
};


const programOverviewData = {
  badge: "PROGRAM OVERVIEW",
  title: "Lead the Future with an MBA Degree",
  description:
    "An MBA equips professionals and graduates with advanced business knowledge, leadership capabilities, and strategic thinking skills required to excel in today's corporate environment.",
  primaryButtonText: "Discover More",
  phone: "+91 123 456 7890",
  images: [
    "/service/MBA.jpg",
    "/service/MBA2.jpg",
    "/service/bba4.jpg",
  ],
  features: [
    {
      title: "Leadership Development",
      description:
        "Build leadership capabilities to manage teams and organizations effectively.",
    },
    {
      title: "Strategic Management",
      description:
        "Learn business strategy, planning, and decision-making skills.",
    },
  ],

    quoteStat :{
    quote:"Lead organizations, drive innovation, and unlock limitless career opportunities.",
},
};

const whyChooseThisProgram = {
  badge: "Why Choose This Program",
  heading: "Accelerate Your Career Through Leadership & Strategy",
  highlight: "Leadership & Strategy",
  accentColor: "bg-light-blue",
  columns: 3,

  items: [
    {
      id: "01",
      icon: Users,
      title: "Leadership Development",
      description:
        "Develop strong leadership and people management skills.",
    },
    {
      id: "02",
      icon: GraduationCap,
      title: "Career Growth",
      description:
        "Unlock senior-level and management career opportunities.",
    },
    {
      id: "03",
      icon: Globe,
      title: "Industry Exposure",
      description:
        "Gain practical knowledge through real-world business cases.",
    },
    {
      id: "04",
      icon: Lightbulb,
      title: "Entrepreneurial Mindset",
      description:
        "Learn how to build and manage successful businesses.",
    },
    {
      id: "05",
      icon: BookOpen,
      title: "Global Business Perspective",
      description:
        "Understand international markets and business operations.",
    },
    {
      id: "06",
      icon: MessageSquare,
      title: "Higher Salary Potential",
      description:
        "Increase earning potential through advanced business skills.",
    },
  ],
};

const whyInscribeData = {
  heading: "Why Choose Inscribe IQ?",
  subheading:
    "Get expert MBA admission guidance, university comparison support, and complete admission assistance.",

  cards: {
    stat: {
      eyebrow: "Expert Admission Guidance",
      body: "Personalized counselling for MBA aspirants.",
      stat: "12+",
      statLabel: "University Options",
      badgeText: "Career Counselling",
    },

    imageCard: {
      badge: "Top MBA Universities",
      title: "Choose the Right MBA Program",
      sub: "Compare universities, specializations, and learning modes.",
      tags: [
        "Marketing",
        "Finance",
        "HR",
      ],
      img: "/service/hero1.png",
    },

    lightCard: {
      eyebrow: "Admission Support",
      title: "Hassle-Free Enrollment",
      accent: "Documentation Assistance",
      body: "We help you throughout the admission journey.",
      pills: ["Forms", "Verification", "Submission"],
    },

    darkCard1: {
      badge: "Student Support",
      title: "Dedicated Assistance",
      accent: "Always Available",
      body: "Guidance from inquiry to admission confirmation.",
    },

    darkCard2: {
      badge: "End-to-End Support",
      title: "Complete MBA Admission Help",
      accent: "Expert Counselling",
      body: "University selection, documentation, and enrollment support.",
    },
  },
};

const careerOutcomesData = {
  tagline: "CAREER OPPORTUNITIES",
  heading: "Career Opportunities After MBA",
  description:
    "MBA graduates are equipped for leadership, management, consulting, and entrepreneurial roles across industries.",

  careers: [
    {
      id: "business-manager",
      title: "Business Manager",
      description: "Manage operations, teams, and business growth.",
    },
    {
      id: "marketing-manager",
      title: "Marketing Manager",
      description: "Lead marketing campaigns and brand strategies.",
    },
    {
      id: "hr-manager",
      title: "HR Manager",
      description: "Handle talent acquisition and workforce management.",
    },
    {
      id: "business-consultant",
      title: "Business Consultant",
      description: "Provide strategic advice to organizations.",
    },
    {
      id: "operations-manager",
      title: "Operations Manager",
      description: "Optimize business processes and productivity.",
    },
    {
      id: "entrepreneur",
      title: "Entrepreneur",
      description: "Launch and grow your own business venture.",
    },
  ],

  featuredImage: "/service/career.jpg",
  featuredBadge: "MBA Careers",
  featuredTitle: "Become a Future Business Leader",
  featuredDescription:
    "Build expertise in management, leadership, and strategic decision-making.",

  primaryCta: "Explore Programs",
  secondaryCta: "Contact Us",
};
const admissionData = {
  eyebrow: "HOW IT WORKS",
  title: "MBA Admission Process",

  description:
    "Simple and transparent admission process for MBA programs.",

  steps: [
    { title: "Inquiry" },
    { title: "Career Counselling" },
    { title: "University Selection" },
    { title: "Documentation" },
    { title: "Admission Confirmation" },
  ],
};
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


const MBA = () => {
  return (
    <PageViewer>
      <HeroSection {...heroData} />
      <UniversityPartnership/>
      <ProgramOverview {...programOverviewData}/>
      <WhyChooseThisProgram {...whyChooseThisProgram} />
      <WhyInscribe {...whyInscribeData}/>
      <KeySubject {...keySubjects}/>
      <CareerOutcomes {...careerOutcomesData}/>
     
      <Admission {...admissionData}/>
       <LeadGeneration/>
       <FAQs/>
       <Banner></Banner>
      

    </PageViewer>
  );
};

export default MBA;
