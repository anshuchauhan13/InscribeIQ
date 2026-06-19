import React from "react";
import HeroSection from "../../components/PG/HeroSection";
import ProgramOverview from "../../components/PG/ProgramOverview";
import WhyChooseThisProgram from "../../components/UG/WhyChoooseThisProgram";
import WhyInscribe from "../../components/Doctorate/WhyInscribe";
import CareerOutcomes from "../../components/Doctorate/CareerOutcomes";
import Admission from "../../components/UG/Admission";
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

const heroData = {
badge: "MASTER OF TECHNOLOGY",

title: "Advance Your Engineering Career with an M.Tech Degree",

titleHighlight: "M.Tech",

subtitle:
"Gain advanced technical expertise, research capabilities, and industry-relevant knowledge through specialized postgraduate engineering programs.",

backgroundImage: "/service/hero1.png",

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
"Choose from top accredited universities offering M.Tech programs.",
},

{
  icon: <Lightbulb size={20} strokeWidth={2} />,
  title: "Advanced Technical Specializations",
  description:
    "Specialize in emerging engineering and technology domains shaping the industry.",
},

{
  icon: <BookOpen size={20} strokeWidth={2} />,
  title: "Research-Oriented Learning",
  description:
    "Build strong research and innovation capabilities through hands-on projects.",
},

{
  icon: <TrendingUp size={20} strokeWidth={2} />,
  title: "Career Advancement Opportunities",
  description:
    "Unlock high-growth career paths in engineering, research, and technology leadership.",
},

],
};


const programOverviewData = {
  badge: "PROGRAM OVERVIEW",
  title: "Advance Your Engineering Career with an M.Tech Degree",
  description:
    "Master of Technology (M.Tech) is designed for graduates seeking advanced technical knowledge, innovation skills, and specialization in emerging engineering and technology domains.",
  primaryButtonText: "Discover More",
  phone: "+91 123 456 7890",
  images: [
    "/service/hero1.png",
    "/service/hero2.png",
    "/service/hero3.png",
  ],
  features: [
    {
      title: "Advanced Technical Expertise",
      description:
        "Gain deep technical knowledge across specialized engineering domains.",
    },
    {
      title: "Research & Innovation",
      description:
        "Develop research capabilities to drive innovation in technology and engineering.",
    },
  ],
};

const whyChooseThisProgram = {
  badge: "Why Choose This Program",
  heading: "Accelerate Your Career Through Technical Expertise & Innovation",
  highlight: "Technical Expertise & Innovation",
  accentColor: "bg-light-blue",
  columns: 3,

  items: [
    {
      id: "01",
      icon: Lightbulb,
      title: "Advanced Technical Expertise",
      description:
        "Build deep, specialized knowledge in emerging engineering domains.",
    },
    {
      id: "02",
      icon: BookOpen,
      title: "Research & Innovation Opportunities",
      description:
        "Engage in cutting-edge research and innovation projects.",
    },
    {
      id: "03",
      icon: Briefcase,
      title: "Industry-Relevant Curriculum",
      description:
        "Learn skills aligned with current industry and technology demands.",
    },
    {
      id: "04",
      icon: GraduationCap,
      title: "Specialized Knowledge",
      description:
        "Master niche technical domains for a competitive career edge.",
    },
    {
      id: "05",
      icon: TrendingUp,
      title: "Higher Career Growth Potential",
      description:
        "Unlock senior and specialized roles with advanced qualifications.",
    },
    {
      id: "06",
      icon: Users,
      title: "Technology Leadership Development",
      description:
        "Build the leadership skills needed to drive technical teams forward.",
    },
  ],
};

const whyInscribeData = {
  heading: "Why Choose Inscribe IQ?",
  subheading:
    "Get expert M.Tech admission guidance, university comparison support, and complete admission assistance.",

  cards: {
    stat: {
      eyebrow: "Expert Admission Guidance",
      body: "Personalized counselling for M.Tech aspirants.",
      stat: "12+",
      statLabel: "University Options",
      badgeText: "Career Counselling",
    },

    imageCard: {
      badge: "Top M.Tech Universities",
      title: "Choose the Right M.Tech Program",
      sub: "Compare universities, specializations, and learning modes.",
      tags: [
        "AI & ML",
        "Data Science",
        "Robotics",
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
      title: "Complete M.Tech Admission Help",
      accent: "Expert Counselling",
      body: "University selection, documentation, and enrollment support.",
    },
  },
};

const careerOutcomesData = {
  tagline: "CAREER OPPORTUNITIES",
  heading: "Career Opportunities After M.Tech",
  description:
    "M.Tech graduates are equipped for advanced technical roles, research positions, and technology leadership across industries.",

  careers: [
    {
      id: "senior-software-engineer",
      title: "Senior Software Engineer",
      description: "Design and build advanced, scalable software systems.",
    },
    {
      id: "research-scientist",
      title: "Research Scientist",
      description: "Lead research and innovation in emerging technologies.",
    },
    {
      id: "technology-consultant",
      title: "Technology Consultant",
      description: "Advise organizations on technology strategy and adoption.",
    },
    {
      id: "ai-specialist",
      title: "AI Specialist",
      description: "Develop and deploy artificial intelligence solutions.",
    },
    {
      id: "product-architect",
      title: "Product Architect",
      description: "Design the technical architecture of complex products.",
    },
    {
      id: "engineering-manager",
      title: "Engineering Manager",
      description: "Lead engineering teams and drive technical delivery.",
    },
    {
      id: "data-scientist",
      title: "Data Scientist",
      description: "Extract insights and build models from complex data.",
    },
    {
      id: "technical-lead",
      title: "Technical Lead",
      description: "Guide technical direction and mentor engineering teams.",
    },
  ],

  featuredImage: "/service/career.jpg",
  featuredBadge: "M.Tech Careers",
  featuredTitle: "Become a Future Technology Leader",
  featuredDescription:
    "Build expertise in advanced technology, research, and engineering leadership.",

  primaryCta: "Explore Programs",
  secondaryCta: "Contact Us",
};
const admissionData = {
  eyebrow: "HOW IT WORKS",
  title: "M.Tech Admission Process",
  highlightWord: "Admission",
  description:
    "Simple and transparent admission process for M.Tech programs.",

  steps: [
    { title: "Inquiry" },
    { title: "Career Counselling" },
    { title: "University Selection" },
    { title: "Documentation" },
    { title: "Admission Confirmation" },
  ],
};
const MTech = () => {
  return (
    <>
      <HeroSection {...heroData} />
      <ProgramOverview {...programOverviewData}/>
      <WhyChooseThisProgram {...whyChooseThisProgram} />
      <WhyInscribe {...whyInscribeData}/>
      <CareerOutcomes {...careerOutcomesData}/>
      <Admission {...admissionData}/>
    </>
  );
};

export default MTech;