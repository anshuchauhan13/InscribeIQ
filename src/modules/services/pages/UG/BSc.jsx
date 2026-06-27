import PageViewer from "@/components/common/PageViewer";

import Hero from "../../components/UG/Hero";
import ProgramOverview from "../../components/UG/ProgramOverview";
import WhyChooseThisProgram from "../../components/UG/WhyChoooseThisProgram";
import KeySubject from "../../components/UG/KeySubject";
import CareerOutcomes from "../../components/Doctorate/CareerOutcomes";
import WhyInscribe from "../../components/Doctorate/WhyInscribe";
import Admission from "../../components/UG/Admission";
import FAQs from "@/modules/home/components/FAQs";
import LeadGeneration from "../../components/Doctorate/LeadGeneration";
import UniversityPartnership from "@/modules/home/components/UniversityPartnership";
import WhyChooseUs from "../../components/Doctorate/WhyGlobal";
import Banner from "../../components/PG/Banner";

import {
  FlaskConical,
  Microscope,
  BookOpen,
  TrendingUp,
  GraduationCap,
  Brain,
} from "lucide-react";

/* ================= HERO ================= */
const heroData = {
  badgeText: "Admissions Open",
  title: "Build a Strong Foundation in Science with a",
  highlightedText: "B.Sc Degree",
  description:
    "Explore scientific concepts, analytical thinking, and practical learning through industry-relevant science programs from leading universities.",

  highlights: [
    "12+ University Options",
    "Research-Oriented Learning",
    "Industry-Relevant Curriculum",
    "Higher Education Opportunities",
  ],

  primaryButtonText: "Apply Now",
  secondaryButtonText: "Free Career Counselling",

  mainImage: "/service/bschero.jpg",
  secondaryImage: "/service/hero4.jpg",

  trustBadgeText: "12+ University Options",
  supportBadgeText: "Research-Oriented Learning",

  onPrimaryClick: "/apply",
  onSecondaryClick: "/contact",
};

/* ================= PROGRAM OVERVIEW ================= */
const programOverview = {
  badge: "ABOUT PROGRAM",
  title: "Our Science Education Inspires You More.",
  description:
    "A Bachelor of Science (B.Sc) equips students with scientific knowledge, analytical skills, and practical expertise across various disciplines. The program prepares students for careers in research, healthcare, technology, and higher education.",

  primaryButtonText: "Discover More",
  phone: "+91 123 456 7890",

  images: ["/service/chemistry.png", "/service/bscabout.jpg", "/service/bsc3.jpg"],

  features: [
    {
      title: "Scientific Learning",
      description: "Understand Physics, Chemistry & Biology concepts.",
    },
    {
      title: "Research Exposure",
      description: "Hands-on lab work and experimentation.",
    },
  ],

  quoteStat :{
    quote:"Explore, discover, and innovate through the power of scientific knowledge",
},
};

/* ================= WHY CHOOSE ================= */
const whyChooseThisProgram = {
  badge: "Why Choose This Program",
  heading: "Build Strong Scientific Thinking & Analytical Skills",
  highlight: "Scientific Thinking",
  accentColor: "bg-blue-600",
  columns: 3,

  items: [
    {
      id: "01",
      icon: FlaskConical,
      title: "Strong Scientific Foundation",
      description: "Build core understanding of science principles.",
    },
    {
      id: "02",
      icon: Microscope,
      title: "Research & Innovation",
      description: "Explore experiments and research opportunities.",
    },
    {
      id: "03",
      icon: BookOpen,
      title: "Practical Learning",
      description: "Hands-on lab experience and applications.",
    },
    {
      id: "04",
      icon: TrendingUp,
      title: "Diverse Career Paths",
      description: "Opportunities in healthcare, IT, analytics.",
    },
    {
      id: "05",
      icon: GraduationCap,
      title: "Higher Studies",
      description: "Strong base for M.Sc and research careers.",
    },
    {
      id: "06",
      icon: Brain,
      title: "Analytical Skills",
      description: "Improve logic and problem-solving skills.",
    },
  ],
};

/* ================= KEY SUBJECTS ================= */
const keySubjects = {
  eyebrow: "Course Details",
  title: "Key Subjects Covered",
  description:
    "Study core scientific subjects that build analytical expertise.",

  buttonText: "View Curriculum",
  onButtonClick: () => console.log("Navigate to curriculum"),

  subjects: [
    "Physics",
    "Chemistry",
    "Biology",
    "Mathematics",
    "Statistics",
    "Environmental Science",
    "Computer Applications",
    "Research Methodology",
  ],
};

/* ================= CAREER OUTCOMES ================= */
const careerOutcomesData = {
  tagline: "CAREER OUTCOMES",
  heading: "Career Opportunities in Science",
  description:
    "Build strong scientific and analytical skills for careers in research, healthcare, IT, and education.",

  careers: [
    {
      id: "research-assistant",
      title: "Research Assistant",
      description: "Assist in scientific research projects.",
    },
    {
      id: "lab-technician",
      title: "Lab Technician",
      description: "Operate lab equipment and testing.",
    },
    {
      id: "data-analyst",
      title: "Data Analyst",
      description: "Analyze and interpret data.",
    },
    {
      id: "scientific-officer",
      title: "Scientific Officer",
      description: "Work in research laboratories.",
    },
    {
      id: "healthcare",
      title: "Healthcare Professional",
      description: "Work in medical and healthcare fields.",
    },
    {
      id: "academician",
      title: "Academic Researcher",
      description: "Pursue teaching and higher studies.",
    },
  ],

  featuredImage: "/service/career.jpg",
  featuredBadge: "Science Careers",
  featuredTitle: "Build a Career in Science & Research",
  featuredDescription:
    "Develop scientific and analytical skills for high-growth careers.",

  primaryCta: "Explore Programs",
  secondaryCta: "Contact Us",
};

/* ================= ADMISSION ================= */
const admissionData = {
  eyebrow: "HOW IT WORKS",
  title: "Admission Process",
  highlightWord: "Admission",
  description:
    "Simple step-by-step admission process for B.Sc programs.",

  steps: [
    { title: "Submit Inquiry" },
    { title: "Career Counselling" },
    { title: "University Selection" },
    { title: "Documentation" },
    { title: "Admission Confirmation" },
  ],
};

/* ================= WHY INSCRIBE ================= */
const whyInscribeData = {
  heading: "Why Choose Inscribe IQ?",
  subheading:
    "We guide you in selecting the best science universities with complete admission support.",

  cards: {
    stat: {
      eyebrow: "Expert Guidance",
      body: "Personalized counselling for science students.",
      stat: "100%",
      statLabel: "Admission Support",
      badgeText: "Expert Counselling",
    },

    imageCard: {
      badge: "University Selection",
      title: "Best Science Universities",
      sub: "Choose from top accredited universities.",
      tags: ["B.Sc Physics", "B.Sc Chemistry", "B.Sc Biology"],
      img: "/service/hero1.png",
    },

    lightCard: {
      eyebrow: "Documentation Support",
      title: "Smooth Admission Process",
      accent: "Verified Documentation",
      body: "We handle all paperwork for you.",
      pills: ["Forms", "Verification", "Submission"],
    },

    darkCard1: {
      badge: "Student Support",
      title: "Continuous Assistance",
      accent: "Always Available",
      body: "Support from enquiry to admission.",
    },

    darkCard2: {
      badge: "End-to-End Support",
      title: "Complete Admission Help",
      accent: "Full Guidance",
      body: "Counselling to final enrollment.",
    },
  },
};

const whyChooseUsData = {
  tagline: "Skills You Will Develop",

  heading: "Build Essential Leadership & Business Skills",

  subheading:
    "Develop the practical, strategic, and analytical capabilities required to lead teams, solve complex business challenges, and drive organizational success.",

  services: [
    {
      id: 1,
      iconType: "global",
      title: "Leadership Skills",
      description:
        "Learn to inspire teams, drive organizational growth, and make impactful decisions in dynamic business environments.",
    },
   
    {
      id: 3,
      iconType: "strategy",
      title: "Business Strategy",
      description:
        "Develop strategic thinking abilities to identify opportunities, create competitive advantages, and achieve business objectives.",
    },
    {
      id: 4,
      iconType: "executive",
      title: "Team Management",
      description:
        "Gain expertise in managing diverse teams, delegating responsibilities, and fostering a productive work culture.",
    },
    {
      id: 5,
      iconType: "research",
      title: "Problem Solving",
      description:
        "Strengthen your ability to analyze challenges, evaluate solutions, and make informed decisions under pressure.",
    },
  
  ],
};
/* ================= PAGE ================= */
const BSc = () => {
  return (
    <PageViewer>
      <Hero {...heroData} />
      <UniversityPartnership/>

      <ProgramOverview {...programOverview} />

      <WhyChooseThisProgram {...whyChooseThisProgram} />

      <KeySubject {...keySubjects} />

      <CareerOutcomes {...careerOutcomesData} />

     
      <Admission {...admissionData} />

      <WhyChooseUs {...whyChooseUsData}/>
      <WhyInscribe {...whyInscribeData} />

      <LeadGeneration />

      <FAQs />
      <Banner></Banner>
    </PageViewer>
  );
};

export default BSc;