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
  BookOpen,
  Lightbulb,
  Briefcase,
  GraduationCap,
  Users,
  Landmark,
} from "lucide-react";

const whyChooseThisProgram = {
  badge: "Why Choose This Program",
  heading: "Build Future-Ready Skills in Humanities & Social Sciences",
  highlight: "Humanities & Social Sciences",
  accentColor: "bg-light-blue",
  columns: 3,

  items: [
    {
      id: "01",
      icon: BookOpen,
      title: "Specialized Subject Expertise",
      description: "Gain in-depth knowledge across humanities and social sciences.",
    },
    {
      id: "02",
      icon: Lightbulb,
      title: "Strong Research & Analytical Skills",
      description: "Build the ability to research, analyze, and interpret complex ideas.",
    },
    {
      id: "03",
      icon: Briefcase,
      title: "Wide Career Opportunities",
      description: "Open doors to roles across education, media, and public policy.",
    },
    {
      id: "04",
      icon: GraduationCap,
      title: "Academic & Professional Growth",
      description: "Strengthen your profile for both academic and corporate paths.",
    },
    {
      id: "05",
      icon: Users,
      title: "Leadership Development",
      description: "Develop the confidence and skills to lead teams and initiatives.",
    },
    {
      id: "06",
      icon: Landmark,
      title: "Pathway to Higher Education",
      description: "Use your M.A as a qualifying step toward a PhD.",
    },
  ],
};

const whyInscribeData = {
  heading: "Why Choose Inscribe IQ?",
  subheading:
    "We guide you in selecting the best universities for M.A with complete admission support.",

  cards: {
    stat: {
      eyebrow: "Expert Guidance",
      body: "Personalized counselling for M.A aspirants.",
      stat: "12+",
      statLabel: "University Options",
      badgeText: "Expert Counselling",
    },

    imageCard: {
      badge: "University Selection",
      title: "Multiple University Options",
      sub: "Choose from top reputed universities for M.A.",
      tags: ["Psychology", "Sociology", "Political Science"],
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
  heading: "Career Opportunities After M.A",
  description:
    "Build expertise in humanities and social sciences for rewarding careers in education, research, media, and public policy.",

  careers: [
    {
      id: "educator-lecturer",
      title: "Educator / Lecturer",
      description: "Teach and mentor students in academic institutions.",
    },
    {
      id: "research-associate",
      title: "Research Associate",
      description: "Conduct in-depth research across social science domains.",
    },
    {
      id: "public-policy-analyst",
      title: "Public Policy Analyst",
      description: "Analyze and help shape policies that impact society.",
    },
    {
      id: "journalist",
      title: "Journalist",
      description: "Report and investigate stories across media platforms.",
    },
    {
      id: "social-researcher",
      title: "Social Researcher",
      description: "Study social trends and human behavior patterns.",
    },
    {
      id: "communication-specialist",
      title: "Communication Specialist",
      description: "Craft and manage strategic communication for organizations.",
    },
    {
      id: "content-strategist",
      title: "Content Strategist",
      description: "Plan and develop content strategies across platforms.",
    },
    {
      id: "academic-consultant",
      title: "Academic Consultant",
      description: "Advise students and institutions on academic pathways.",
    },
  ],

  featuredImage: "/service/career.jpg",
  featuredBadge: "Academic Careers",
  featuredTitle: "Build a Career in Humanities & Social Sciences",
  featuredDescription:
    "Develop advanced academic and research skills for high-impact careers in education, media, and public policy.",

  primaryCta: "Explore Programs",
  secondaryCta: "Contact Us",
};

const admissionData = {
  eyebrow: "HOW IT WORKS",
  title: "Admission Process",
  highlightWord: "Admission",
  description:
    "Simple step-by-step admission process for M.A programs.",

  steps: [
    { title: "Submit Inquiry" },
    { title: "Free Career Counselling" },
    { title: "University Selection" },
    { title: "Documentation" },
    { title: "Admission Confirmation" },
  ],
};

const programOverviewData = {
  badge: "PROGRAM OVERVIEW",
  title: "Expand Your Knowledge with a M.A Degree",
  description:
    "The Master of Arts (M.A) program is designed to provide in-depth knowledge in humanities and social sciences. It enhances your critical thinking, research capabilities, communication skills, and leadership potential, preparing you for both academic and professional success.",

  primaryButtonText: "Discover More",

  phone: "+91 123 456 7890",

  images: [
    "/service/hero1.png",
    "/service/hero2.png",
    "/service/hero3.png",
  ],

  features: [
    {
      title: "Humanities & Social Sciences Expertise",
      description:
        "Develop specialized knowledge across psychology, sociology, literature, and political science.",
    },
    {
      title: "Research & Critical Thinking",
      description:
        "Build strong analytical, research, and communication skills for academic and professional success.",
    },
  ],

    quoteStat :{
    quote:"Deepen your understanding, sharpen your perspective, and make a meaningful impact.",
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

const MA = () => {
  return (
    <PageViewer>
      <HeroSection
        backgroundImage="/service/career.jpg"
        title="Expand Your Knowledge & Career Opportunities with a M.A"
        titleHighlight="M.A"
        subtitle="Gain deep expertise in humanities, social sciences, communication, and public administration while building strong analytical and leadership skills."
        primaryCta={{
          label: "Apply Now",
          onClick: () => alert("Apply Clicked"),
        }}
        secondaryCta={{
          label: "Get Free Career Counselling",
          onClick: () => alert("Career Counselling"),
        }}
        features={[
          {
            icon: "🏫",
            title: "12+ University Options",
            description: "Choose from leading universities offering M.A programs.",
          },
          {
            icon: "📘",
            title: "Specialized Academic Learning",
            description: "Deep-dive into humanities and social science domains.",
          },
          {
            icon: "🔍",
            title: "Research-Oriented Curriculum",
            description: "Build strong research and analytical capabilities.",
          },
          {
            icon: "💼",
            title: "Diverse Career Opportunities",
            description: "Open doors to education, media, and public policy roles.",
          },
        ]}
      />
      <ProgramOverview {...programOverviewData} />
      <WhyChooseThisProgram {...whyChooseThisProgram} />
      <KeySubject {...keySubjects}/>
      <WhyInscribe {...whyInscribeData} />
      <CareerOutcomes {...careerOutcomesData} />
      <Admission {...admissionData} />
      <LeadGeneration/>
      <FAQs></FAQs>
      <Banner
/>
    </PageViewer>
  );
};

export default MA;