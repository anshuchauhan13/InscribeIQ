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
  Cpu,
  BrainCircuit,
  Cloud,
  Globe2,
  Briefcase,
  Code2,
} from "lucide-react";


const whyChooseThisProgram = {
  badge: "Why Choose This Program",
  heading: "Build Future-Ready Skills with AI & Machine Learning",
  highlight: "AI & Machine Learning",
  accentColor: "bg-light-blue",
  columns: 3,

  items: [
    {
      id: "01",
      icon: Cpu,
      title: "Future-Ready Skills",
      description: "Build skills aligned with emerging technologies.",
    },
    {
      id: "02",
      icon: BrainCircuit,
      title: "AI & Machine Learning Focus",
      description: "Gain hands-on expertise in AI and ML systems.",
    },
    {
      id: "03",
      icon: Code2,
      title: "Industry-Relevant Curriculum",
      description: "Learn skills aligned with real industry practices.",
    },
    {
      id: "04",
      icon: Globe2,
      title: "Global Career Opportunities",
      description: "Open doors to technology careers worldwide.",
    },
    {
      id: "05",
      icon: Briefcase,
      title: "Strong Employability",
      description: "Build a resume employers actively look for.",
    },
    {
      id: "06",
      icon: Cloud,
      title: "Technology Leadership",
      description: "Prepare for leadership roles in technology teams.",
    },
  ],
};

const whyInscribeData = {
  heading: "Why Choose Inscribe IQ?",
  subheading:
    "We guide you in selecting the best universities for MCA (AI Integrated) with complete admission support.",

  cards: {
    stat: {
      eyebrow: "Expert Guidance",
      body: "Personalized counselling for technology and AI students.",
      stat: "100%",
      statLabel: "Admission Support",
      badgeText: "Expert Counselling",
    },

    imageCard: {
      badge: "University Selection",
      title: "Multiple University Options",
      sub: "Choose from top reputed universities for MCA (AI Integrated).",
      tags: ["AI", "Machine Learning", "Cloud Computing"],
      img: "/service/hero1.png",
    },

    lightCard: {
      eyebrow: "Documentation Support",
      title: "End-to-End Admission Assistance",
      accent: "Verified Documentation",
      body: "We handle all paperwork for you, end to end.",
      pills: ["Forms", "Verification", "Submission"],
    },

    darkCard1: {
      badge: "Student Support",
      title: "Dedicated Student Support",
      accent: "Always Available",
      body: "Continuous assistance from enquiry to admission.",
    },

    darkCard2: {
      badge: "End-to-End Support",
      title: "Multiple University Options",
      accent: "Full Guidance",
      body: "Counselling to final enrollment, fully supported.",
    },
  },
};

const careerOutcomesData = {
  tagline: "CAREER OUTCOMES",
  heading: "Career Opportunities in AI",
  description:
    "Build advanced technology and AI skills for high-demand careers in software engineering, data science, and cloud computing.",

  careers: [
    {
      id: "ai-engineer",
      title: "AI Engineer",
      description: "Design and build intelligent AI-driven systems.",
    },
    {
      id: "software-architect",
      title: "Software Architect",
      description: "Lead the design of scalable software systems.",
    },
    {
      id: "data-scientist",
      title: "Data Scientist",
      description: "Extract insights from complex data sets.",
    },
    {
      id: "cloud-engineer",
      title: "Cloud Engineer",
      description: "Build and manage cloud-based infrastructure.",
    },
    {
      id: "ml-specialist",
      title: "Machine Learning Specialist",
      description: "Develop and optimize machine learning models.",
    },
    {
      id: "technology-consultant",
      title: "Technology Consultant",
      description: "Advise organizations on technology strategy.",
    },
  ],

  featuredImage: "/service/career.jpg",
  featuredBadge: "Technology Careers",
  featuredTitle: "Build a Career in AI & Emerging Technology",
  featuredDescription:
    "Develop advanced technology skills for high-growth careers across software, AI, and cloud computing.",

  primaryCta: "Explore Programs",
  secondaryCta: "Contact Us",
};

const admissionData = {
  eyebrow: "HOW IT WORKS",
  title: "Admission Process",
  highlightWord: "Admission",
  description:
    "Simple step-by-step admission process for MCA (AI Integrated) programs.",

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
  title: "Master Technologies with an MCA (AI Integrated) Degree",
  description:
    "The MCA (AI Integrated) program prepares students for careers in software engineering, artificial intelligence, cloud computing, machine learning, and digital transformation through an industry-focused, technology-driven curriculum.",

  primaryButtonText: "Discover More",

  phone: "+91 123 456 7890",

  images: [
    "/service/mbagrads.jpg",
    "/service/accounting.jpg",
    "/service/bcom2.jpg",
  ],

  features: [
    {
      title: "AI, Machine Learning & Data Science",
      description:
        "Develop advanced expertise in artificial intelligence, machine learning, and data-driven technologies.",
    },
    {
      title: "Software Engineering & Cloud Computing",
      description:
        "Build strong technical skills in software development, cloud systems, and database technologies.",
    },
  ],

    quoteStat :{
    quote:"Master advanced computing and become the architect of tomorrow's digital world.",
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
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Cloud Computing",
    "Advanced Programming",
    "Software Engineering",
    "Cyber Security",
    "Database Systems ",
  ],
};

const MCA = () => {
  return (
    <PageViewer>
      <HeroSection
        backgroundImage="/service/career.jpg"
        title="Master Emerging Technologies with MCA (AI Integrated)"
        titleHighlight="(AI Integrated)"
        subtitle="Build expertise in software development, artificial intelligence, machine learning, and data-driven technologies through an industry-focused postgraduate program."
        primaryCta={{
          label: "Apply Now",
          onClick: () => alert("Apply Clicked"),
        }}
        secondaryCta={{
          label: "Download Brochure",
          onClick: () => alert("Brochure"),
        }}
        features={[
          {
            icon: "🤖",
            title: "AI Integrated Curriculum",
            description: "Learn alongside core AI and ML modules.",
          },
          {
            icon: "💻",
            title: "Advanced Technology Skills",
            description: "Industry-focused, hands-on learning.",
          },
          {
            icon: "📈",
            title: "High-Demand Career Paths",
            description: "Open doors to fast-growing tech roles.",
          },
          {
            icon: "🏢",
            title: "Industry-Focused Learning",
            description: "Curriculum aligned with real industry needs.",
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

export default MCA;