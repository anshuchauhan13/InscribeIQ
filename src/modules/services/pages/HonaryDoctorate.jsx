import PageViewer from "@/components/common/PageViewer";
import HeroSection from "../components/Doctorate/HeroSection";
import QuickInfo from "../components/Doctorate/QuickInfo";
import WhoShould from "../components/Doctorate/WhoShould";
import WhatIsCourse from "../components/Doctorate/WhatIsCourse";
import PopularCourse from "../components/Doctorate/PopularCourse";
import WhyGlobal from "../components/Doctorate/WhyGlobal";
import { Search, Target, GraduationCap , Award} from "lucide-react";

import Journey from "../components/Doctorate/Journey";
import WhyInscribe from "../components/Doctorate/WhyInscribe";
import Benefit from "../components/Doctorate/Benefit";
import LeadGeneration from "../components/Doctorate/LeadGeneration";
import CareerOutcomes from "../components/Doctorate/CareerOutcomes";
import WhatIsHonary from "../components/Doctorate/WhatIsHonary";
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

    imageSrc1: "/service/hero1.jpg",
    imageSrc2: "/service/hero1.jpg",
    imageSrc3: "/service/hero3.jpg",
    imageSrc4: "/service/hero5.jpg",

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
    heading: "Recognition in Your Field",
    highlight: "Fields of Excellence",

    columns: 3,

    items: [
      {
        id: "business",
        title: "Business & Entrepreneurship",
        icon: Briefcase,
        points: [
          "Business Innovation",
          "Leadership Excellence",
          "Economic Impact",
        ],
      },
      {
        id: "education",
        title: "Education & Academia",
        icon: GraduationCap,
        points: [
          "Academic Contribution",
          "Educational Impact",
          "Mentorship Excellence",
        ],
      },
      {
        id: "healthcare",
        title: "Healthcare & Wellness",
        icon: Award,
        points: [
          "Medical Innovation",
          "Patient Care Excellence",
          "Health Leadership",
        ],
      },
      {
        id: "arts",
        title: "Arts & Culture",
        icon: Megaphone,
        points: [
          "Creative Achievement",
          "Cultural Contribution",
          "Artistic Excellence",
        ],
      },
      {
        id: "technology",
        title: "Technology & Innovation",
        icon: Cpu,
        points: [
          "Tech Innovation",
          "Digital Transformation",
          "Future Leadership",
        ],
      },
      {
        id: "social",
        title: "Social Impact & Community",
        icon: Users,
        points: [
          "Community Development",
          "Social Contribution",
          "Impact Leadership",
        ],
      },
    ],
  };

  const journeyData = {
    eyebrow: "How the Recognition Process Works",

    headingMain: "Recognition Journey",

    headingAccent: "It Works",

    subheading:
      "From your first profile submission to receiving your honorary doctorate — a prestigious path recognizing your lifetime of achievement.",

    steps: [
      {
        id: 1,
        title: "Profile Submission",
        shortTitle: "Profile Submission",
        desc: "Submit your professional achievements, contributions, and impact across your career journey.",
      },
      {
        id: 2,
        title: "Achievement Review",
        shortTitle: "Achievement Review",
        desc: "Our panel evaluates your lifetime contributions, leadership, and impact in your field.",
      },
      {
        id: 3,
        title: "Institution Matching",
        shortTitle: "Institution Matching",
        desc: "We identify prestigious global institutions that recognize and honor your specific achievements.",
      },
      {
        id: 4,
        title: "Nomination Process",
        shortTitle: "Nomination Process",
        desc: "Your profile is formally nominated to partner universities for honorary recognition.",
      },
      {
        id: 5,
        title: "University Approval",
        shortTitle: "University Approval",
        desc: "Distinguished universities review and approve your honorary doctorate candidacy.",
      },
      {
        id: 6,
        title: "Award & Recognition",
        shortTitle: "Award & Recognition",
        desc: "Receive your honorary doctorate credential and join an elite community of global leaders.",
      },
    ],
  };

  const whyInscribeData = {
    heading: "How Inscribe IQ Supports Your Honorary Doctorate Journey",

    subheading:
      "Most distinguished leaders approach honorary recognition without proper guidance—unsure which institutions align with their achievements, uncertain about nomination processes, and lacking expert support. Inscribe IQ is built differently. Not just guidance — but a full-stack support system for every stage of your honorary recognition journey.",

    cards: {
      stat: {
        eyebrow: "Achievement Evaluation",
        body: "We thoroughly assess your achievements & match you with prestigious institutions worldwide.",
        stat: "<21",
        statLabel: "Days to Institution Match",
        badgeText: "Recognition\nGuidance",
      },

      imageCard: {
        badge: "Profile Excellence",
        title: "Your Achievement Story, Perfectly Crafted.",
        sub: "From career narrative to impact documentation — presented at every stage.",
        tags: ["Profile Dev", "Achievement Doc", "Impact Analysis"],
        img: "/home/hero-1.jpg",
      },

      lightCard: {
        eyebrow: "Institution Support",
        title: "Nomination. Recognition. Credentials.",
        accent: "End-to-end support from nomination to diploma",
        body: "We handle every institutional requirement, every deadline, and all documentation — so you focus on your legacy, not paperwork.",
        pills: ["Nomination Prep", "Credential Verification", "Documentation"],
      },

      darkCard1: {
        badge: "Global Network",
        title: "Prestigious Institutions. Worldwide Recognition.",
        accent: "Your doctorate, globally honoured",
        body: "We connect you with top-tier universities across the world and guide you through their entire recognition process.",
      },

      darkCard2: {
        badge: "Legacy Building",
        title: "Recognition Certified. Impact Amplified.",
        accent: "Legacy documentation & certification",
        body: "Get your honorary doctorate formally certified with professional documentation that positions you as a global leader.",
      },
    },
  };

  const benefitsData = {
    eyebrow: "Benefits",

    heading: "Why Distinguished Leaders Pursue Honorary Doctorate",

    subheading:
      "Elevate your global recognition, strengthen your legacy.",

    items: [
      {
        id: "executive-credibility",
        image: "/service/hero1.jpg",
        name: "Executive Credibility",
        role: "Professional Recognition",
        quote:
          "Strengthen your professional reputation with a doctoral qualification that demonstrates expertise, leadership, and commitment to excellence.",
      },
      {
        id: "thinking",
        image: "/service/hero1.jpg",
        name: "Strategic Thinking",
        role: "Education Consultant",
        quote:
          "Develop advanced analytical and decision-making capabilities to solve complex business challenges and lead with confidence.",
      },
      {
        id: "global",
        image: "/service/hero3.jpg",
        name: "Global Recognition",
        role: "Education Consultant",
        company: "Founder, HopeBridge Foundation",
        quote:
          "Earn a respected doctoral credential that enhances your profile and opens opportunities across international markets and industries.",
      },
      {
        id: "consulting",
        image: "/service/hero5.jpg",
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


const whatIsHonaryData = {
  tagline: "About the Program",
  heading: "A Recognition of Excellence and Impact",
  description: [
    "An Honorary Doctorate is a prestigious recognition awarded to individuals demonstrating exceptional achievements, leadership, innovation, philanthropy, or significant societal contributions. It honors lifelong impact and excellence.",
  ],
  sideImage: "/service/MBA2.jpg",
  imagePosition: "right", // "right" | "left"
  badge: {
    icon: Award,
    title: "Awarded For",
    highlight: "Excellence",
    subtitle: "&",
    emphasis: "Impact",
  },
};




  const careerOutcomesData = {
    tagline: "RECOGNITION OUTCOMES",

    heading: "Your Honorary Doctorate Opens Doors",

    description:
      "An Honorary Doctorate positions you as a globally recognized leader, elevating your influence, credibility, and opportunities across industries, academia, and society.",

    careers: [
      {
        id: "executive",
        title: "Board Leadership",
        description:
          "Sit on prestigious corporate and nonprofit boards as a recognized thought leader.",
      },
      {
        id: "advisory",
        title: "Strategic Advisory",
        description:
          "Serve as a trusted advisor to C-suite executives and government bodies.",
      },
      {
        id: "speaker",
        title: "Keynote Speaker",
        description:
          "Command global platforms at international conferences and prestigious forums.",
      },
      {
        id: "mentor",
        title: "Mentorship & Coaching",
        description:
          "Guide the next generation through executive coaching and mentorship programs.",
      },
      {
        id: "academic",
        title: "Academic Positions",
        description:
          "Hold visiting professor roles and academic leadership positions worldwide.",
      },
      {
        id: "innovation",
        title: "Innovation Leadership",
        description:
          "Lead industry transformation and establish your thought leadership platform.",
      },
    ],

    featuredImage:
      "/service/career.jpg",

    featuredBadge: "Global Recognition",

    featuredTitle: "Your Achievements, Globally Honored",

    featuredDescription:
      "An Honorary Doctorate from a globally recognized institution validates your lifetime of achievement, opening doors to international influence, legacy building, and unprecedented opportunities across industries and continents.",

    primaryCta: "Begin Your Recognition",

    secondaryCta: "Learn More",
  };
  return (
    <PageViewer>
      <div>
        <HeroSection {...heroSectionData} />
        <QuickInfo items={quickInfoData} />
      </div>
    <WhatIsHonary {...whatIsHonaryData}/>
      <WhoShould {...whoShouldJoinData} />
      <PopularCourse {...popularCourseData} />
      <Journey {...journeyData} />
      <WhyInscribe {...whyInscribeData} />
      <Gallery {...galleryData} />
      <Benefit {...benefitsData} />
      <WhyGlobal {...whyChooseUsData} />
      <CareerOutcomes {...careerOutcomesData} />
      <LeadGeneration programName="Honorary Doctorate" />
    </PageViewer>
  );
}

export default HonaryDoctorate;
