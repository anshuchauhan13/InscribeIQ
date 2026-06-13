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

function DBA() {
  const heroSectionData = {
  eyebrow: "Doctoral Programs for Business Leaders",
  titleLine1: "Doctor of Business Administration (DBA)",
  titleLine2: "for Business Leaders & Executives",
  subheadline:
    "Advance your leadership profile with a globally recognized doctoral qualification designed for experienced professionals, entrepreneurs, and decision-makers.",
  badges: [
    "Designed for Working Professionals",
    "Global University Options",
    "Flexible Learning Pathways",
    "Executive Research Focus",
  ],

  duration: "Global University",

  imageSrc1: "/service/hero1.png",
  imageSrc2: "/service/hero2.png",
  imageSrc3: "/service/hero3.png",
  imageSrc4: "/service/hero4.png",

  imageAlt1: "CEO in boardroom",
  imageAlt2: "Business executive presenting",
  imageAlt3: "Global corporate skyline",
  imageAlt4: "Executive leadership meeting",

  location: "Global Leadership Academy, India",
  credential: "Hon. DBA",
  credentialLabel: "Flexible Learning Pathways",

  breadcrumbs: [
    "Home",
    "Doctorate Courses",
    "Doctor of Business Administration",
  ],

  applyLabel: "Apply for this program",
  expertLabel: "Talk to Expert",

  onApply: () => console.log("Apply clicked"),
  onTalkToExpert: () => console.log("Talk to Expert clicked"),
};

  const quickInfoData = [
    {
      value: "3–4 Years",
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
    {
      value: "Expert Counselling",
      label: "Guidance",
    },
  ];

  const whatIsCourseData = {
    title: "What is a DBA?",

    heading: "What Makes a DBA Different from a Traditional Doctorate?",

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
  heading: "Designed for Leaders Who Want More",

  accentColor: "bg-blue-600",

  items: [
    {
      id: "01",
      label: "Students enrolled in a degree program",
    },
    {
      id: "02",
      label: "Recent graduates within 2 years",
    },
    {
      id: "03",
      label: "Working professionals seeking upskilling",
    },
    {
      id: "04",
      label: "Students enrolled in a degree program",
    },
    {
      id: "05",
      label: "Recent graduates within 2 years",
    },
    {
      id: "06",
      label: "Working professionals seeking upskilling",
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
  heading: "Popular DBA Specializations",
  highlight: "DBA Specializations",

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
  eyebrow: "Your DBA journey",

  headingMain: "How It Works",

  headingAccent: "It Works",

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
      title: "Applied Business Research",
      shortTitle: "Applied Research",
      desc: "Conduct real-world business research that creates measurable impact in your industry.",
    },
    {
      id: 7,
      title: "Final Thesis / Project",
      shortTitle: "Final Thesis",
      desc: "Submit your doctoral thesis or capstone project for formal academic evaluation.",
    },
    {
      id: 8,
      title: "Doctoral Qualification Completion",
      shortTitle: "Doctorate Awarded",
      desc: "Your DBA is formally awarded and all credentials are dispatched within 30 days.",
    },
  ],
};

 const whyInscribeData = {
  heading: "How Inscribe IQ Supports Your DBA Journey",

  subheading:
    "Most DBA aspirants come to us after struggling alone — unsure which university fits, uncertain about proposals, and overwhelmed by research. Inscribe IQ is built differently. Not just guidance — but a full-stack support system for every stage of your doctoral journey.",

  cards: {
    stat: {
      eyebrow: "Program Guidance",
      body: "Eligibility checks & university shortlisting — matched to your profile and research goals.",
      stat: "<10",
      statLabel: "Days to University Shortlist",
      badgeText: "Admission\nAssistance",
    },

    imageCard: {
      badge: "Research Support",
      title: "Thesis & Proposal That Stands Out.",
      sub: "From research topic selection to final doctoral report — guided at every step.",
      tags: ["Proposal Dev", "SPSS / AMOS", "SmartPLS"],
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    },

    lightCard: {
      eyebrow: "Application Assistance",
      title: "Documentation. Admissions. Done Right.",
      accent: "End-to-end support from SOP to offer letter",
      body: "We handle every document, every deadline, and every university requirement — so you focus on your research vision, not paperwork.",
      pills: ["SOP Writing", "LOR Guidance", "Interview Prep"],
    },

    darkCard1: {
      badge: "Data Analysis",
      title: "SPSS. SmartPLS. AMOS. R.",
      accent: "Your data, expertly analysed",
      body: "We run your quantitative & qualitative analysis and walk you through every output — ready for your viva.",
    },

    darkCard2: {
      badge: "Publication Support",
      title: "Research Published. Career Advanced.",
      accent: "Journals & conferences, covered",
      body: "Get your research submitted to indexed journals and conferences with expert editorial guidance.",
    },
  },
};

const benefitsData = {
  eyebrow: "Benefits",

  heading: "Why Business Leaders Choose DBA Programs",

  subheading:
    "Elevate your leadership, strengthen your credibility.",

  items: [
    {
      id: "executive-credibility",
      image: "/service/hero1.png",
      name: "Executive Credibility",
      role: "Professional Recognition",
      quote:
        "Strengthen your professional reputation with a doctoral qualification that demonstrates expertise, leadership, and commitment to excellence.",
    },
    {
      id: "thinking",
      image: "/service/hero2.png",
      name: "Strategic Thinking",
      role: "Education Consultant",
      quote:
        "Develop advanced analytical and decision-making capabilities to solve complex business challenges and lead with confidence.",
    },
    {
      id: "global",
      image: "/service/hero3.png",
      name: "Global Recognition",
      role: "Education Consultant",
      company: "Founder, HopeBridge Foundation",
      quote:
        "Earn a respected doctoral credential that enhances your profile and opens opportunities across international markets and industries.",
    },
    {
      id: "consulting",
      image: "/service/hero4.png",
      name: "Consulting Opportunities",
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
  eyebrow: "Why Choose a Global DBA ?",

  heading: "Global Business Perspective. Executive Excellence.",

  subheading:
    "A Global DBA is a great way to accelerate your career and provides an excellent balance between ease of access and powerful executive outcomes.",

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

  heading: "Career Opportunities After DBA",

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

export default DBA;
