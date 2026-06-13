import SectionViewer from "@/components/common/SectionViewer";
import HeroSection from "../components/Doctorate/HeroSection";
import QuickInfo from "../components/Doctorate/QuickInfo";
import WhoShould from "../components/Doctorate/WhoShould";
import WhatIsCourse from "../components/Doctorate/WhatIsCourse";
import PopularCourse from "../components/Doctorate/PopularCourse";
import WhyGlobal from "../components/Doctorate/WhyGlobal";
import {  Search, Target, GraduationCap } from "lucide-react";

import Journey from "../components/Doctorate/Journey";
import WhyInscribe from "../components/Doctorate/WhyInscribe";
import Benefit from "../components/Doctorate/Benefit";
import LeadGeneration from "../components/Doctorate/LeadGeneration";
import CareerOutcomes from "../components/Doctorate/CareerOutcomes";
import {
  Megaphone,
  DollarSign,
  Users,
  Settings,
  Cpu,
  Briefcase,
} from "lucide-react";
// import Process from '../components/Doctorate/Process';
// import FAQ from '../components/Doctorate/FAQ';

function PhD() {
 const heroSectionData = {
  // ✅ New props
  eyebrow: "PhD Admissions & Research Advisory",
  subheadline:
    "Get expert guidance for PhD admission, university selection, research area planning, thesis support, and publication assistance.",
  badges: [
    "UGC Recognized Options",
    "Global Universities",
    "Flexible Learning",
    "Research Support",
  ],

  titleLine1: "Global PhD Programs for Working Professionals",
  titleLine2: "& Research Aspirants",
  duration: "UGC Recognized",

  imageSrc1: "/service/hero1.png",
  imageSrc2: "/service/hero2.png",
  imageSrc3: "/service/hero3.png",
  imageSrc4: "/service/hero4.png",

  imageAlt1: "Person 1",
  imageAlt2: "Person 2",
  imageAlt3: "Person 3",
  imageAlt4: "Person 4",

  location: "Global Universities",
  credential: "UGC Recognized Options",
  credentialLabel: "Flexible Learning",

  breadcrumbs: ["Home", "Doctorate Courses", "PhD"],

  applyLabel: "Apply for this program",
  expertLabel: "Talk to Expert",

  onApply: () => console.log("Apply clicked"),
  onTalkToExpert: () => console.log("Talk to Expert clicked"),
};
  const quickInfoData = [
    {
      value: "3 – 4 Years",
      label: "Duration",
    },
    {
      value: "Online / Hybrid / Regular",
      label: "Mode",
    },
    {
      value: "Master’s Degree",
      label: "Eligibility",
    },
    {
      value: "Thesis + Publication",
      label: "Support",
    },
  
  ];

  const whatIsCourseData = {
    title: "What is a PhD?",

    heading: "What Makes a PhD Different from a Traditional Doctorate?",

    description: [
      "A Doctor of Business Administration (DBA) is a professional doctoral degree designed for experienced business professionals who want to solve real-world business challenges through applied research.",

      "Unlike traditional academic doctorates, DBA programs focus on practical business impact, leadership, innovation, and organizational transformation.",
    ],

    sideImage: "/images/dba.jpg",

    badge: {
      title: "Designed for",
      highlight: "Impact",
      subtitle: "Built for",
      emphasis: "Leaders",
      icon: GraduationCap,
    },

    comparison: {
      left: {
        title: "DBA",
        icon: Briefcase,
        items: [
          {
            icon: Search,
            label: "Applied Research",
          },
          {
            icon: Target,
            label: "Business Impact",
          },
          {
            icon: Target,
            label: "Executive Leadership",
          },
          {
            icon: Target,
            label: "Corporate Problems",
          },
        ],
      },

      right: {
        title: "Traditional PhD",
        icon: GraduationCap,
        items: [
          {
            icon: Search,
            label: "Academic Research",
          },
          {
            icon: Target,
            label: "Theoretical Contribution",
          },
          {
            icon: Target,
            label: "Academic Career",
          },
          {
            icon: Target,
            label: "Research Problems",
          },
        ],
      },
    },

    highlights: [
      {
        icon: Target,
        title: "Practical. Relevant.",
        description: "Industry-focused research",
      },
    ],
  };

  const whoShouldJoinData = {
  heading: "Who Should Choose a PhD?",

  accentColor: "bg-blue-600",

  items: [
    {
      id: "01",
      label: "Working Professionals - For professionals who want doctoral recognition and career growth.",
    },
    {
      id: "02",
      label: "Faculty Members - For professors aiming for academic promotion, research profile building, and institutional ranking support.",
    },
    {
      id: "03",
      label: "Research Scholars - For students who want structured research guidance.",
    },
    {
      id: "04",
      label: "Corporate Leaders - For leaders looking to build expertise in management, technology, education, or other domains.",
    },

  ],

  images: [
    {
      src: "/service/hero1.png",
      alt: "Student",
      shape: "circle",
    },
    {
      src: "/service/hero2.png",
      alt: "Graduate",
      shape: "circle",
    },
    {
      src: "/service/hero4.png",
      alt: "Campus",
      shape: "rounded",
    },
  ],
};

const popularCourseData = {
  heading: "Popular PhD Specializations",
  highlight: "DBA Specializations",
  accentColor: "bg-purple-700",
  columns: 3,

  items: [
    {
      id: "business",
      title: "Business & Management",
      icon: Briefcase,
      points: [
        "Strategic Management",
        "Leadership",
        "Organizational Behavior",
      ],
    },
    {
      id: "marketing",
      title: "Marketing",
      icon: Megaphone,
      points: [
        "Digital Marketing",
        "Consumer Behaviour",
        "Brand Management",
      ],
    },
    {
      id: "finance",
      title: "Finance",
      icon: DollarSign,
      points: [
        "Corporate Finance",
        "Investment Management",
        "Financial Strategy",
      ],
    },
    {
      id: "hr",
      title: "Human Resource Management",
      icon: Users,
      points: [
        "Talent Management",
        "Organizational Development",
        "HR Analytics",
      ],
    },
    {
      id: "operations",
      title: "Operations",
      icon: Settings,
      points: [
        "Supply Chain Management",
        "Logistics",
        "Quality Management",
      ],
    },
    {
      id: "tech",
      title: "Technology & Innovation",
      icon: Cpu,
      points: [
        "Business Analytics",
        "Artificial Intelligence",
        "Digital Transformation",
      ],
    },
  ],
};

const journeyData = {
  eyebrow: "Your PhD journey",

  headingMain: "How It Works",

  headingAccent: "",

  subheading:
    "From your first profile evaluation to receiving your doctorate — a structured, guided path built around your professional life.",

  steps: [
    {
      id: 1,
      title: "Profile Evaluation",
      shortTitle: "Profile Evaluation",
      desc: "We assess your professional background, achievements, and academic readiness for the DBA program.",
    },
    {
      id: 2,
      title: "University Shortlisting",
      shortTitle: "University Shortlisting",
      desc: "We match you with accredited universities that align with your goals, industry, and research interests.",
    },
    {
      id: 3,
      title: "Admission Process",
      shortTitle: "Admission Process",
      desc: "Our team guides you through every step of the application and enrollment process seamlessly.",
    },
    {
      id: 4,
      title: "Research Proposal Development",
      shortTitle: "Research Proposal",
      desc: "You craft a focused research proposal with mentorship from our academic committee.",
    },
    {
      id: 5,
      title: "Coursework & Research",
      shortTitle: "Coursework & Research",
      desc: "Engage in rigorous coursework and begin your applied research journey under expert supervision.",
    },
    {
      id: 6,
      title: "Thesis Writing Support",
      shortTitle: "Thesis Writing",
      desc: "Conduct real-world business research that creates measurable impact in your industry.",
    },
    {
      id: 7,
      title: "Publication Support",
      shortTitle: "Publication",
      desc: "Submit your doctoral thesis or capstone project for formal academic evaluation.",
    },
    {
      id: 8,
      title: "Final Submission & Viva Preparation",
      shortTitle: "Doctorate Awarded",
      desc: "Your DBA is formally awarded and all credentials are dispatched within 30 days.",
    },
  ],
};

 
const whyInscribeData = {
  heading: "Why Choose Us?",

  subheading:
    "Pursuing a PhD or DBA can be overwhelming without the right guidance. From university selection to thesis completion and publication, our experts provide end-to-end academic support designed to help you succeed with confidence.",

  cards: {
    stat: {
      eyebrow: "Admission Guidance",
      body:
        "Get expert assistance with university selection, eligibility assessment, documentation, and application submission.",
      stat: "100%",
      statLabel: "Application Support",
      badgeText: "Admission\nGuidance",
    },

    imageCard: {
      badge: "Research Topic Finalization",
      title: "Choose a Research Topic That Gets Approved.",
      sub:
        "Identify a strong, relevant, and research-worthy topic aligned with your academic goals and university expectations.",
      tags: ["Topic Selection", "Research Gap", "Proposal Ready"],
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    },

    lightCard: {
      eyebrow: "Synopsis Support",
      title: "Proposal & Synopsis Development.",
      accent: "Structured according to university guidelines",
      body:
        "We help you prepare a well-organized synopsis and research proposal that meets academic standards and increases approval chances.",
      pills: ["Synopsis Writing", "Research Design", "Proposal Review"],
    },

    darkCard1: {
      badge: "Data Analysis Support",
      title: "SPSS. AMOS. SmartPLS. R. Python.",
      accent: "Accurate statistical analysis for your research",
      body:
        "Comprehensive quantitative and qualitative data analysis support using industry-standard tools, including interpretation and reporting.",
    },

    darkCard2: {
      badge: "Thesis & Publication Support",
      title: "From Thesis Writing to Journal Publication.",
      accent: "Complete research assistance under one roof",
      body:
        "End-to-end thesis writing support, formatting, review, and publication assistance for Scopus, WoS, PubMed, ABDC, and international journals.",
    },
  },
};



const benefitsData = {
  eyebrow: "Benefits",

  heading: "Career Benefits After PhD",

  subheading:
    "Elevate your leadership, strengthen your credibility.",

  items: [
    {
      id: "Academic promotions",
      image: "/service/hero1.png",
      name: "Academic promotions",
      role: "Professional Recognition",
      quote:
        "Strengthen your professional reputation with a doctoral qualification that demonstrates expertise, leadership, and commitment to excellence.",
    },
    {
      id: "thinking",
      image: "/service/hero2.png",
      name: "Professor / lecturer opportunities",
      role: "Education Consultant",
      quote:
        "Develop advanced analytical and decision-making capabilities to solve complex business challenges and lead with confidence.",
    },
    {
      id: "global",
      image: "/service/hero3.png",
      name: "Research career growth",
      role: "Education Consultant",
      company: "Founder, HopeBridge Foundation",
      quote:
        "Earn a respected doctoral credential that enhances your profile and opens opportunities across international markets and industries.",
    },
    {
      id: "consulting",
      image: "/service/hero4.png",
      name: "Better credibility",
      role: "Mindset Coach",
      quote:
        "Expand your influence as a trusted advisor by leveraging doctoral-level expertise to guide organizations and business leaders.",
    },
    {
      id: "thought-leadership",
      image: null,
      name: "Thought Leadership",
      role: "Corporate Strategist",
      quote:
        "Establish yourself as an industry expert through applied research, publishing, speaking engagements, and knowledge sharing.",
    },
    {
      id: "decision-making",
      image: null,
      name: "Research-Based Decision Making",
      role: "Research Fellow",
      quote:
        "Use evidence-driven insights and advanced research methodologies to improve organizational performance and strategic outcomes.",
    },
  ],
};

const whyChooseUsData = {
  eyebrow: "Why Choose Global PhD Programs?",

  heading: "Build Your Research Career with International Doctoral Opportunities",

  subheading:
    "A Global Phd is a great way to accelerate your career and provides an excellent balance between ease of access and powerful executive outcomes.",

  services: [
    {
      id: 1,
      iconType: "executive",
      title: "Executive Credibility",
      description:
        "Strengthen your professional profile with a globally recognised doctoral credential that signals research authority to boards and clients.",
    },
    {
      id: 2,
      iconType: "strategy",
      title: "Strategic Thinking",
      description:
        "Master advanced business frameworks — systems thinking, scenario planning, and evidence-based strategy — moving your organisation from reactive to proactive.",
    },
    {
      id: 3,
      iconType: "global",
      title: "Global Recognition",
      description:
        "A DBA is accepted across borders — opening doors in multinational corporations, international advisory roles, and top-tier academic institutions.",
    },
    {
      id: 4,
      iconType: "research",
      title: "Research-Based Decisions",
      description:
        "Move beyond intuition. Apply systematic research methods to complex organisational challenges and drive measurable performance improvements.",
    },
  ],
};

const careerOutcomesData = {
  tagline: "CAREER OUTCOMES",

  heading: "Career Opportunities After PhD",

  description:
    "A DBA empowers experienced professionals to move into leadership, consulting, entrepreneurship, and academic roles through advanced business knowledge and applied research expertise.",

  careers: [
    {
      id: "ceo",
      title: "Chief Executive Officer",
      description:
        "Lead organizations with strategic vision and research-driven decision making.",
    },
    {
      id: "director",
      title: "Managing Director",
      description:
        "Oversee business growth, operations, and enterprise-wide transformation.",
    },
    {
      id: "consultant",
      title: "Business Consultant",
      description:
        "Provide evidence-based solutions to complex business challenges.",
    },
    {
      id: "strategy",
      title: "Strategy Consultant",
      description:
        "Shape long-term business strategy using advanced analytical frameworks.",
    },
    {
      id: "academic",
      title: "Academic Leadership",
      description:
        "Move into teaching, research, and executive education leadership roles.",
    },
    {
      id: "entrepreneur",
      title: "Entrepreneur",
      description:
        "Launch and scale ventures using doctoral-level business expertise.",
    },
  ],

  featuredImage:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",

  featuredBadge: "Executive Leadership",

  featuredTitle: "Transform Experience Into Executive Authority",

  featuredDescription:
    "A Doctor of Business Administration equips professionals with advanced strategic thinking, leadership expertise, and research-driven decision-making capabilities that open doors to high-impact roles across industries.",

  primaryCta: "Explore Program",

  secondaryCta: "Visit Site",
};
  return (
    <>
      <HeroSection {...heroSectionData} />
      <QuickInfo items={quickInfoData} />
      <WhatIsCourse {...whatIsCourseData} />
      <WhoShould {...whoShouldJoinData}
      />

      <PopularCourse {...popularCourseData} />
      <Journey {...journeyData} />
      <WhyInscribe  {...whyInscribeData}/>
      <Benefit {...benefitsData} />
      <WhyGlobal {...whyChooseUsData}/>
      <CareerOutcomes {...careerOutcomesData} />
      <LeadGeneration />
    </>
  );
}

export default PhD;
