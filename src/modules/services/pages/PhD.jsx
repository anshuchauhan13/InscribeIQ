import PageViewer from "@/components/common/PageViewer";
import HeroSection from "../components/Doctorate/HeroSection";
import QuickInfo from "../components/Doctorate/QuickInfo";
import WhoShould from "../components/Doctorate/WhoShould";
import WhatIsCourse from "../components/Doctorate/WhatIsCourse";
import PopularCourse from "../components/Doctorate/PopularCourse";
import WhyGlobal from "../components/Doctorate/WhyGlobal";
import { Search, Target, GraduationCap } from "lucide-react";

import Journey from "../components/Doctorate/Journey";
import WhyInscribe from "../components/Doctorate/WhyInscribe";
import Benefit from "../components/Doctorate/Benefit";
import LeadGeneration from "../components/Doctorate/LeadGeneration";
import CareerOutcomes from "../components/Doctorate/CareerOutcomes";
import UniversityPartnership from "@/modules/home/components/UniversityPartnership";
import {
  Megaphone,
  DollarSign,
  Users,
  Settings,
  Cpu,
  Briefcase,
} from "lucide-react";
import Gallery from "../components/Doctorate/Gallery";
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

    imageSrc1: "/service/hero1.jpg",
    imageSrc2: "/home/graduatephd.jpg",
    imageSrc3: "/home/graduate1.jpg",
    imageSrc4: "/service/hero5.jpg",

    imageAlt1: "Person 1",
    imageAlt2: "Person 2",
    imageAlt3: "Person 3",
    imageAlt4: "Person 4",

    location: "Global Universities",
    credential: "UGC Recognized Options",
    credentialLabel: "Flexible Learning",

    breadcrumbs: ["Services", "Doctorate Courses", "PhD"],

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
    tagline: "What is a PhD?",

    heading: "What Makes a PhD Different from a Professional Doctorate?",

    description: [
      "A PhD (Doctor of Philosophy) is the highest academic degree, designed for scholars who want to make an original contribution to knowledge through rigorous, in-depth research.",

      "Unlike professional doctorates, a PhD focuses on advancing theory, developing new frameworks, and building a long-term academic and research career.",
    ],


    sideImage: "/service/MBA2.jpg",


    badge: {
      title: "Designed for",
      highlight: "Depth",
      subtitle: "Built for",
      emphasis: "Researchers",
      icon: GraduationCap,
    },

    comparison: {
      left: {
        title: "Professional Doctorate",
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
        title: "PhD",
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
        title: "Original. Rigorous.",
        description: "Knowledge-focused research",
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
        src: "/service/hero1.jpg",
        alt: "Student",
        shape: "circle",
      },
      {
        src: "/service/hero1.jpg",
        alt: "Graduate",
        shape: "circle",
      },
      {
        src: "/service/hero5.jpg",
        alt: "Campus",
        shape: "rounded",
      },
    ],
  };

  const popularCourseData = {
    heading: "Popular PhD Specializations",
    highlight: "PhD Specializations",
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
    tagline: "Your PhD journey",

    headingMain: "How It Works",

    headingAccent: "",

    subheading:
      "From your first profile evaluation to receiving your doctorate — a structured, guided path built around your professional life.",

    steps: [
      {
        id: 1,
        title: "Profile Evaluation",
        shortTitle: "Profile Evaluation",
        desc: "We assess your professional background, achievements, and academic readiness for the PhD program.",
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
        desc: "Your PhD is formally awarded and all credentials are dispatched within 30 days.",
      },
    ],
  };


  const whyInscribeData = {
    heading: "Why Choose Us?",

    subheading:
      "Pursuing a PhD can be overwhelming without the right guidance. From university selection to thesis completion and publication, our experts provide end-to-end academic support designed to help you succeed with confidence.",

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
        img:"/home/hero-1.jpg",
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
        image: "/service/hero1.jpg",
        name: "Academic promotions",
        role: "Professional Recognition",
        quote:
          "Strengthen your professional reputation with a doctoral qualification that demonstrates expertise, leadership, and commitment to excellence.",
      },
      {
        id: "thinking",
        image: "/service/hero1.jpg",
        name: "Professor / lecturer opportunities",
        role: "Education Consultant",
        quote:
          "Develop advanced analytical and decision-making capabilities to solve complex business challenges and lead with confidence.",
      },
      {
        id: "global",
        image: "/service/hero3.jpg",
        name: "Research career growth",
        role: "Education Consultant",
        company: "Founder, HopeBridge Foundation",
        quote:
          "Earn a respected doctoral credential that enhances your profile and opens opportunities across international markets and industries.",
      },
      {
        id: "consulting",
        image: "/service/hero5.jpg",
        name: "Better credibility",
        role: "Mindset Coach",
        quote:
          "Expand your influence as a trusted advisor by leveraging doctoral-level expertise to guide organizations and business leaders.",
      },
      {
        id: "thought-leadership",
        image: "/service/mbagrads.jpg",
        name: "Thought Leadership",
        role: "Corporate Strategist",
        quote:
          "Establish yourself as an industry expert through applied research, publishing, speaking engagements, and knowledge sharing.",
      },
      {
        id: "decision-making",
        image: "/service/bba4.jpg",
        name: "Research-Based Decision Making",
        role: "Research Fellow",
        quote:
          "Use evidence-driven insights and advanced research methodologies to improve organizational performance and strategic outcomes.",
      },
    ],
  };

  const whyChooseUsData = {
    tagline: "Why Choose Global PhD Programs?",

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
          "A PhD is accepted across borders — opening doors in universities, research institutions, and top-tier organisations worldwide.",
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

  heading: "Career Opportunities After a PhD",

    description:
      "A PhD empowers scholars and professionals to move into research, academic leadership, consulting, and specialist roles through advanced expertise and original research.",

  careers: [
    {
      id: "professor",
      title: "Professor",
      description:
        "Teach, mentor students, and contribute to academic research at universities.",
    },
    {
      id: "researcher",
      title: "Research Scientist",
      description:
        "Conduct advanced research and develop innovative solutions in your field of expertise.",
    },
    {
      id: "postdoc",
      title: "Postdoctoral Researcher",
      description:
        "Expand your research portfolio while collaborating with leading academic institutions.",
    },
    {
      id: "consultant",
      title: "Research Consultant",
      description:
        "Provide research-based insights and recommendations to organizations.",
    },
    {
      id: "policy",
      title: "Policy Analyst",
      description:
        "Influence public policy through evidence-based research and data-driven recommendations.",
    },
    {
      id: "industry",
      title: "Industry Specialist",
      description:
        "Lead innovation, R&D, and technical initiatives across corporate and industrial sectors.",
    },
  ],

  featuredImage: "/service/career.jpg",

  featuredBadge: "Research Excellence",

  featuredTitle: "Transform Knowledge Into Impact",

    featuredDescription:
      "A PhD equips scholars with advanced research expertise, critical thinking, and subject authority that open doors to high-impact roles across academia and industry.",

  primaryCta: "Explore Program",

    secondaryCta: "Visit Site",
  };

  const galleryImages = [
    { src: "/service/Gallery1.jpeg", alt: "PhD Research Presentation" },
    { src: "/service/gallery2.jpeg", alt: "Academic Collaboration" },
    { src: "/service/gallery3.jpeg", alt: "Thesis Defense" },
    { src: "/service/gallery4.jpeg", alt: "Research Laboratory" },
    { src: "/service/gallery5.jpeg", alt: "University Campus" },
    { src: "/service/gallery6.jpeg", alt: "Academic Achievement" },
  ];
  return (
    <PageViewer>
      <div>
        <HeroSection {...heroSectionData} />
        <QuickInfo items={quickInfoData} />
      </div>
      
      <WhoShould {...whoShouldJoinData} />
      <PopularCourse {...popularCourseData} />
      <Journey {...journeyData} />
      <WhyInscribe {...whyInscribeData} />
      <Gallery images={galleryImages} />
      <Benefit {...benefitsData} />
      <WhyGlobal {...whyChooseUsData} />
      <UniversityPartnership/>
      <CareerOutcomes {...careerOutcomesData} />
      <LeadGeneration programName="PhD" />
    </PageViewer>
  );
}

export default PhD;
