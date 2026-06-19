import React from "react";
import PageViewer from "@/components/common/PageViewer";
import HeroSection from "../../components/PG/HeroSection";
import ProgramOverview from "../../components/PG/ProgramOverview";
import WhyChooseThisProgram from "../../components/UG/WhyChoooseThisProgram";
import WhyInscribe from "../../components/Doctorate/WhyInscribe";
import CareerOutcomes from "../../components/Doctorate/CareerOutcomes";
import Admission from "../../components/UG/Admission";
import KeySubject from "../../components/UG/KeySubject";
import LeadGeneration from "../../components/Doctorate/LeadGeneration";
import FAQs from "@/modules/home/components/FAQs";
import Banner from "../../components/PG/Banner";
import {
  TrendingUp,
  Briefcase,
  ShieldCheck,
  Users,
  Award,
  GraduationCap,
} from "lucide-react";

const whyChooseThisProgram = {
  badge: "Why Choose This Program",
  heading: "Build Advanced Financial Expertise & Corporate Career Growth",
  highlight: "Financial Expertise & Corporate Career Growth",
  accentColor: "bg-light-blue",
  columns: 3,

  items: [
    {
      id: "01",
      icon: TrendingUp,
      title: "Advanced Financial Expertise",
      description: "Gain deep knowledge in finance, taxation, and auditing.",
    },
    {
      id: "02",
      icon: Briefcase,
      title: "Corporate Career Growth",
      description: "Open paths into leading finance and corporate roles.",
    },
    {
      id: "03",
      icon: ShieldCheck,
      title: "Industry-Relevant Knowledge",
      description: "Learn skills aligned with real corporate practices.",
    },
    {
      id: "04",
      icon: Users,
      title: "Professional Development",
      description: "Build professional competence for the finance sector.",
    },
    {
      id: "05",
      icon: Award,
      title: "Leadership Opportunities",
      description: "Prepare for leadership roles in finance and business.",
    },
    {
      id: "06",
      icon: GraduationCap,
      title: "Higher Education Readiness",
      description: "Build a strong base for further academic pursuits.",
    },
  ],
};

const whyInscribeData = {
  heading: "Why Choose Inscribe IQ?",
  subheading:
    "We guide you in selecting the best universities for M.Com with complete admission support.",

  cards: {
    stat: {
      eyebrow: "Expert Guidance",
      body: "Personalized counselling for finance and commerce students.",
      stat: "100%",
      statLabel: "Admission Support",
      badgeText: "Expert Counselling",
    },

    imageCard: {
      badge: "University Selection",
      title: "Multiple University Options",
      sub: "Choose from top reputed universities for M.Com.",
      tags: ["Finance", "Accounting", "Taxation"],
      img: "/service/hero1.png",
    },

    lightCard: {
      eyebrow: "Documentation Support",
      title: "Documentation Assistance",
      accent: "Verified Documentation",
      body: "We handle all paperwork for you, end to end.",
      pills: ["Forms", "Verification", "Submission"],
    },

    darkCard1: {
      badge: "Student Support",
      title: "Dedicated Student Support",
      accent: "Personalized Counselling",
      body: "Continuous assistance from enquiry to admission.",
    },

    darkCard2: {
      badge: "End-to-End Support",
      title: "End-to-End Admission Support",
      accent: "Full Guidance",
      body: "Counselling to final enrollment, fully supported.",
    },
  },
};

const careerOutcomesData = {
  tagline: "CAREER OUTCOMES",
  heading: "Career Opportunities in Finance & Commerce",
  description:
    "Build strong financial and analytical expertise for careers in banking, auditing, taxation, and corporate finance.",

  careers: [
    {
      id: "financial-analyst",
      title: "Financial Analyst",
      description: "Analyze financial data to guide business decisions.",
    },
    {
      id: "finance-manager",
      title: "Finance Manager",
      description: "Oversee financial planning and strategy.",
    },
    {
      id: "auditor",
      title: "Auditor",
      description: "Examine financial records for accuracy and compliance.",
    },
    {
      id: "tax-consultant",
      title: "Tax Consultant",
      description: "Advise on tax planning and compliance.",
    },
    {
      id: "investment-advisor",
      title: "Investment Advisor",
      description: "Guide clients on investment decisions.",
    },
    {
      id: "banking-professional",
      title: "Banking Professional",
      description: "Work across core banking and financial services.",
    },
    {
      id: "corporate-accountant",
      title: "Corporate Accountant",
      description: "Manage accounting operations within a corporation.",
    },
    {
      id: "financial-controller",
      title: "Financial Controller",
      description: "Lead financial reporting and control functions.",
    },
  ],

  featuredImage: "/service/career.jpg",
  featuredBadge: "Finance Careers",
  featuredTitle: "Build a Career in Finance & Commerce",
  featuredDescription:
    "Develop financial and analytical skills for high-growth careers in the corporate world.",

  primaryCta: "Explore Programs",
  secondaryCta: "Contact Us",
};

const admissionData = {
  eyebrow: "HOW IT WORKS",
  title: "Admission Process",
  highlightWord: "Admission",
  description:
    "Simple step-by-step admission process for M.Com programs.",

  steps: [
    { title: "Submit Inquiry" },
    { title: "Career Counselling" },
    { title: "University Selection" },
    { title: "Documentation" },
    { title: "Admission Confirmation" },
  ],
};

const programOverviewData = {
  badge: "PROGRAM OVERVIEW",
  title: "Advance Your Expertise with an M.Com Degree",
  description:
    "Master of Commerce (M.Com) provides in-depth knowledge of accounting, finance, taxation, auditing, economics, and business management while preparing students for leadership roles in the corporate world.",

  primaryButtonText: "Discover More",

  phone: "+91 123 456 7890",

  images: [
    "/service/mbagrads.jpg",
    "/service/accounting.jpg",
    "/service/bcom2.jpg",
  ],

  features: [
    {
      title: "Accounting, Finance & Taxation",
      description:
        "Develop advanced expertise in accounting principles, financial management, taxation, and auditing practices.",
    },
    {
      title: "Business Leadership & Strategy",
      description:
        "Build analytical, managerial, and strategic decision-making skills required for modern business leadership.",
    },
  ],

    quoteStat :{
    quote:"Advance your expertise in finance, accounting, and commerce to lead with confidence.",
},
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

const MCom = () => {
  return (
    <PageViewer>
      <HeroSection
        backgroundImage="/service/career.jpg"
        title="Build Expertise in Finance, Accounting & Commerce with an M.Com Degree"
        titleHighlight="M.COM Degree"
        subtitle="Develop advanced knowledge in finance, taxation, auditing, and business management through industry-focused postgraduate education."
        primaryCta={{
          label: "Apply Now",
          onClick: () => alert("Apply Clicked"),
        }}
        secondaryCta={{
          label: "Free Career Counselling",
          onClick: () => alert("Counselling"),
        }}
        features={[
          {
            icon: "🏛",
            title: "12+ University Options",
            description: "Choose from top reputed universities.",
          },
          {
            icon: "📘",
            title: "Advanced Finance Curriculum",
            description: "Industry-focused learning modules.",
          },
          {
            icon: "📊",
            title: "Professional Career Growth",
            description: "Boost your job opportunities.",
          },
          {
            icon: "🏢",
            title: "Corporate Leadership Pathways",
            description: "Prepare for leadership roles.",
          },
        ]}
      />
      <ProgramOverview {...programOverviewData} />
      <WhyChooseThisProgram {...whyChooseThisProgram} />
      <WhyInscribe {...whyInscribeData} />
      <KeySubject {...keySubjects}/>
      <CareerOutcomes {...careerOutcomesData} />
      <Admission {...admissionData} />
      <LeadGeneration></LeadGeneration>
      <FAQs></FAQs>
      <Banner></Banner>
    </PageViewer>
  );
};

export default MCom;