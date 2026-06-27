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
import {
  Megaphone,
  DollarSign,
  Users,
  Settings,
  Cpu,
  Briefcase,
} from "lucide-react";
import Gallery from "../components/Doctorate/Gallery";

function HonaryDoctorate() {
  const heroSectionData = {
    eyebrow: "Honorary Doctorate Recognition",
    titleLine1: "Honorary Doctorate Recognition for",
    titleLine2: "Exceptional Achievements",
    subheadline:
      "Celebrate outstanding contributions in business, education, healthcare, social impact, entrepreneurship, arts, innovation, and leadership through globally recognized honorary recognition opportunities.",
    badges: [
      "Global Recognition",
      "International Opportunities",
      "Distinguished Achievements",
      "Prestigious Academic Recognition",
    ],

    duration: "3 Months",

    imageSrc1: "/service/hero1.png",
    imageSrc2: "/service/hero2.png",
    imageSrc3: "/service/hero3.png",
    imageSrc4: "/service/hero4.png",

    imageAlt1: "Foreign dignitary receiving award",
    imageAlt2: "Convocation ceremony",
    imageAlt3: "Doctoral robe and honorary medal",
    imageAlt4: "Luxury stage background",

    location: "Global Leadership Academy, India",
    credential: "Global Recognition",
    credentialLabel: "Distinguished Achievements",

    breadcrumbs: [
      "Services",
      "Doctorate Courses",
      "Honorary Doctorate in Business Administration",
    ],

    applyLabel: "Apply for this program",
    expertLabel: "Talk to Expert",

    onApply: () => console.log("Apply clicked"),
    onTalkToExpert: () => console.log("Talk to Expert clicked"),
  };
  const quickInfoData = [
    {
      value: "500+",
      label: "Recipients Honoured",
    },
    {
      value: "21 Days",
      label: "Avg. Processing Time",
    },
    {
      value: "100%",
      label: "Fully Guided Process",
    },
    {
      value: "12+",
      label: "Partner Institutions",
    },
    {
      value: "4.9 ★",
      label: "Satisfaction Rating",
    },
  ];

  const whatIsCourseData = {
    tagline: "What is an Honorary Doctorate?",

    heading: "A Recognition of Excellence and Impact",

    description: [
      "An Honorary Doctorate is a prestigious recognition awarded to individuals who have demonstrated exceptional achievements, leadership, innovation, philanthropy, or significant contributions to society and their respective fields.",

      "It is designed to honor distinguished accomplishments and lifelong impact.",
    ],


    sideImage: "/service/MBA2.jpg",


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
    heading: "Recognizing Leaders Across Diverse Fields",

    accentColor: "bg-blue-600",

    items: [
      {
        id: "01",
        label: "Entrepreneurs - Visionaries who have built successful businesses and generated economic impact.",
      },
      {
        id: "02",
        label: "Business Leaders -  Executives who have transformed industries and organizations.",
      },
      {
        id: "03",
        label: "Educators - Individuals contributing significantly to education and academic advancement.",
      },
      {
        id: "04",
        label: "Healthcare Professionals - Leaders creating positive healthcare outcomes and innovations.",
      },
      {
        id: "05",
        label: "Artists & Creatives - Thought leaders influencing communities through knowledge and inspiration.",
      },
      {
        id: "06",
        label: "Innovators & Technologists - Individuals driving technological advancement and innovation.",
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
    eyebrow: "How the Recognition Process Works",

    headingMain: "Recognition Journey",

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
        title: "Achievement Evaluation",
        shortTitle: "University Shortlisting",
        desc: "We match you with accredited universities that align with your goals, industry, and research interests.",
      },
      {
        id: 3,
        title: "Documentation Review",
        shortTitle: "Admission Process",
        desc: "Our team guides you through every step of the application and enrollment process seamlessly.",
      },
      {
        id: 4,
        title: "Nomination Guidance",
        shortTitle: "Research Proposal",
        desc: "You craft a focused research proposal with mentorship from our academic committee.",
      },
      {
        id: 5,
        title: "Recognition Consideration",
        shortTitle: "Coursework & Research",
        desc: "Engage in rigorous coursework and begin your applied research journey under expert supervision.",
      },
      {
        id: 6,
        title: "Award & Convocation Ceremony",
        shortTitle: "Applied Research",
        desc: "Conduct real-world business research that creates measurable impact in your industry.",
      },
      // {
      //   id: 7,
      //   title: "Final Thesis / Project",
      //   shortTitle: "Final Thesis",
      //   desc: "Submit your doctoral thesis or capstone project for formal academic evaluation.",
      // },
      // {
      //   id: 8,
      //   title: "Doctoral Qualification Completion",
      //   shortTitle: "Doctorate Awarded",
      //   desc: "Your DBA is formally awarded and all credentials are dispatched within 30 days.",
      // },
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
        img: "/home/hero-1.jpg",
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
        image: "/service/bcom.jpg",
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
    tagline: "Why Individuals Pursue Honorary Recognition",

    heading: "A Symbol of Achievement and Legacy",

    subheading:
      "",

    services: [
      {
        id: 1,
        iconType: "executive",
        title: "Global Recognition",
        description:
          "Strengthen your professional profile with a globally recognised doctoral credential that signals research authority to boards and clients.",
      },
      {
        id: 2,
        iconType: "strategy",
        title: "Professional Credibility",
        description:
          "Master advanced business frameworks — systems thinking, scenario planning, and evidence-based strategy — moving your organisation from reactive to proactive.",
      },
      {
        id: 3,
        iconType: "global",
        title: "Legacy Building",
        description:
          "A DBA is accepted across borders — opening doors in multinational corporations, international advisory roles, and top-tier academic institutions.",
      },
      {
        id: 4,
        iconType: "research",
        title: "Personal Milestone",
        description:
          "Move beyond intuition. Apply systematic research methods to complex organisational challenges and drive measurable performance improvements.",
      },
    ],
  };

  const galleryData = {
    heading: "Life as an Honorary Doctorate Recipient",
    subheading: "Every image reflects a journey of leadership, innovation, and impact—celebrating those who have shaped industries and left a lasting legacy.",
    accentColor: "",
    images: [
      { src: "/service/Gallery1.jpeg", alt: "Campus" },
      { src: "/service/gallery2.jpeg", alt: "Lecture" },
      { src: "/service/gallery3.jpeg", alt: "Discussion" },
      { src: "/service/gallery4.jpeg", alt: "Workshop" },
      { src: "/service/gallery5.jpeg", alt: "Graduation" },
      { src: "/service/gallery6.jpeg", alt: "Hero shot" }, // tall right panel
    ]
  }

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
      "/service/career.jpg",

    featuredBadge: "Executive Leadership",

    featuredTitle: "Transform Experience Into Executive Authority",

    featuredDescription:
      "A Doctor of Business Administration equips professionals with advanced strategic thinking, leadership expertise, and research-driven decision-making capabilities that open doors to high-impact roles across industries.",

    primaryCta: "Explore Program",

    secondaryCta: "Visit Site",
  };
  return (
    <PageViewer>
      <div>
        <HeroSection {...heroSectionData} />
        <QuickInfo items={quickInfoData} />
      </div>
      <WhatIsCourse {...whatIsCourseData} />
      <WhoShould {...whoShouldJoinData} />
      <PopularCourse {...popularCourseData} />
      <Journey {...journeyData} />
      <WhyInscribe {...whyInscribeData} />
      <Gallery {...galleryData} />
      <Benefit {...benefitsData} />
      <WhyGlobal {...whyChooseUsData} />
      <CareerOutcomes {...careerOutcomesData} />
      <LeadGeneration />
    </PageViewer>
  );
}

export default HonaryDoctorate;
