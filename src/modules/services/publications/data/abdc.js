import { Landmark } from "lucide-react";

// ---------------------------------------------------------------------------
// ABDC Publication Services — page content.
// Shared shape consumed by the data-driven sections in
// services/publications/components/. Mirrors the source brief 1:1 so copy can
// be edited here without touching layout code.
// ---------------------------------------------------------------------------
const abdc = {
  slug: "abdc",
  name: "ABDC",
  icon: Landmark,

  hero: {
    label: "ABDC Publication Services",
    titleLead: "Publish Your Research in",
    titleAccent: "ABDC Indexed Journals",
    paragraphs: [
      "Get expert support for publishing your research in suitable ABDC listed journals across business, management, marketing, finance, economics, law, taxation, entrepreneurship, and social research.",
      "We help researchers, PhD scholars, faculty members, law researchers, and business scholars choose the right ABDC journal, prepare their manuscript, and complete the publication process with confidence.",
    ],
    tagline:
      "Make your research visible. Strengthen your academic profile. Publish with expert guidance.",
    primaryCta: "Book Free Consultation",
    secondaryCta: "Check Journal Availability",
    highlights: [
      "ABDC B & C Category Options",
      "Business, Management, Law & Economics",
      "Marketing & Consumer Research",
      "Manuscript Formatting Support",
      "Submission & Reviewer Response Assistance",
    ],
    // Featured card shown in the hero visual.
    featured: {
      badge: "ABDC B Category",
      name: "Advances in Consumer Research",
      field: "Consumer Behaviour · Marketing · Branding",
      issn: "0098-9258",
    },
  },

  trustStrip: [
    "ABDC Journal Options",
    "B Category",
    "C Category",
    "Business Research",
    "Marketing Research",
    "Law & Taxation",
    "Economics",
    "Journal Selection Support",
  ],

  whyChoose: {
    label: "Why Choose ABDC",
    heading: "Give Your Research Global Academic Visibility",
    paragraphs: [
      "ABDC listed journals are widely considered important across business, management, commerce, economics, finance, marketing, law, entrepreneurship, and related research areas.",
      "Publishing in a suitable ABDC journal can help improve your academic profile, faculty research record, PhD profile, institutional recognition, and professional credibility.",
      "At Inscribe IQ, we simplify the journey by identifying suitable ABDC options based on your subject area, manuscript quality, indexing requirement, category preference, and publication goal.",
    ],
    helpWith: [
      "Journal selection",
      "Manuscript review",
      "Formatting as per journal guidelines",
      "Plagiarism improvement guidance",
      "Submission support",
      "Reviewer comment handling",
      "Publication process assistance",
    ],
  },

  journals: {
    label: "Featured ABDC Journals",
    heading: "Explore Suitable ABDC Journal Options",
    sub: "Choose from selected ABDC B and C category journal options based on your research area, subject category, journal preference, and publication requirement.",
    items: [
      {
        id: "jad",
        name: "Journal of African Development (JAD)",
        badge: "ABDC C Category",
        tier: "C",
        meta: [{ label: "ISSN", value: "1060-6076" }],
        suitableFor:
          "Development Studies, Economics, African Studies, Policy Research & Social Development",
        bestFor: [
          "Development economics",
          "African development studies",
          "Public policy",
          "Social development",
          "Economic growth",
          "Sustainable development",
        ],
        highlight:
          "A relevant ABDC C category option for researchers working on economic development, African studies, public policy, and emerging-market research.",
        cta: "Check Suitability",
      },
      {
        id: "acr",
        name: "Advances in Consumer Research (ACR)",
        badge: "ABDC B Rated",
        tier: "B",
        meta: [{ label: "ISSN Online", value: "0098-9258" }],
        suitableFor:
          "Consumer Behaviour, Marketing, Branding, Retail, Advertising & Market Research",
        bestFor: [
          "Consumer behaviour",
          "Marketing strategy",
          "Brand management",
          "Retail management",
          "Advertising research",
          "Customer psychology",
        ],
        highlight:
          "A strong ABDC B rated option for researchers working on consumer behaviour, marketing, branding, retail, and market research.",
        cta: "Check Suitability",
      },
      {
        id: "mjble",
        name: "Minnesota Journal of Business Law & Entrepreneurship",
        badge: "ABDC B Category",
        tier: "B",
        meta: [{ label: "ISSN", value: "1540-3270" }],
        suitableFor:
          "Business Law, Entrepreneurship, Corporate Law, Commercial Law & Legal Research",
        bestFor: [
          "Business law",
          "Entrepreneurship law",
          "Corporate governance",
          "Commercial law",
          "Regulatory studies",
          "Innovation policy",
        ],
        highlight:
          "A premium ABDC B category option for researchers working at the intersection of business, law, entrepreneurship, policy, and corporate governance.",
        cta: "Check Suitability",
      },
      {
        id: "cjmr",
        name: "The Canadian Journal of Marketing Research (CJMR)",
        badge: "ABDC C Category",
        tier: "C",
        meta: [{ label: "ISSN", value: "0829-4836" }],
        suitableFor:
          "Marketing Research, Digital Marketing, CRM, Consumer Insights & Strategic Marketing",
        bestFor: [
          "Marketing research",
          "Digital marketing",
          "Consumer insights",
          "CRM",
          "Brand strategy",
          "Market analytics",
        ],
        highlight:
          "A suitable ABDC C category option for marketing researchers, management scholars, and professionals working on consumer insights, CRM, and strategic marketing.",
        cta: "Check Suitability",
      },
      {
        id: "jeeh",
        name: "Journal of European Economic History",
        badge: "ABDC B Category",
        tier: "B",
        meta: [{ label: "ISSN Print", value: "0391-5115" }],
        suitableFor:
          "Economic History, European Studies, Development Economics, Finance History & Policy Research",
        bestFor: [
          "Economic history",
          "European economic studies",
          "Financial history",
          "Development economics",
          "Policy research",
          "Institutional economics",
        ],
        highlight:
          "A strong ABDC B category option for scholars working on economic history, European economic development, finance history, and policy-focused studies.",
        cta: "Check Suitability",
      },
      {
        id: "jiclt",
        name: "Journal of International Commercial Law & Technology",
        badge: "ABDC C Category",
        tier: "C",
        meta: [{ label: "ISSN", value: "1901-8401" }],
        suitableFor:
          "International Commercial Law, Technology Law, Business Law, Trade Law & Digital Regulation",
        bestFor: [
          "International commercial law",
          "Technology law",
          "E-commerce law",
          "Trade regulation",
          "Cyber law",
          "Cross-border business law",
        ],
        highlight:
          "A relevant ABDC C category option for researchers working on commercial law, international trade, technology law, and digital business policy.",
        cta: "Check Suitability",
      },
      {
        id: "jmsr",
        name: "Journal of Marketing & Social Research (JMSR)",
        badge: "ABDC C Category",
        tier: "C",
        meta: [{ label: "ISSN Online", value: "3008-0711" }],
        suitableFor:
          "Marketing, Social Research, Consumer Behaviour, HR, Management & Business Research",
        bestFor: [
          "Marketing management",
          "Social research",
          "Consumer behaviour",
          "Human resource management",
          "Business strategy",
          "Management research",
        ],
        highlight:
          "A suitable ABDC C category option for researchers working on marketing, social research, management, HR, and business strategy.",
        cta: "Check Suitability",
      },
      {
        id: "jier",
        name: "Journal of Informatics Education & Research (JIER)",
        badge: "ABDC C Category",
        tier: "C",
        meta: [{ label: "ISSN", value: "1526-4726" }],
        suitableFor:
          "Informatics, Education, Finance, Insurance, Management & Interdisciplinary Business Research",
        bestFor: [
          "Informatics education",
          "Finance",
          "Insurance studies",
          "Management research",
          "Business education",
          "Research methodology",
        ],
        highlight:
          "A suitable ABDC C category option for researchers in informatics education, finance, insurance, business education, and interdisciplinary research.",
        cta: "Check Suitability",
      },
      {
        id: "itj",
        name: "The International Tax Journal",
        badge: "ABDC C Category",
        tier: "C",
        meta: [{ label: "ISSN", value: "0097-7314" }],
        suitableFor:
          "Taxation, International Tax, Business Law, Finance, Economics & Accounting Research",
        bestFor: [
          "International taxation",
          "Tax law",
          "Corporate tax",
          "Accounting",
          "Finance",
          "Tax policy",
        ],
        highlight:
          "A relevant ABDC C category option for researchers working on taxation, international tax law, corporate tax, accounting, finance, and legal policy research.",
        cta: "Check Suitability",
      },
    ],
  },

  process: {
    heading: "Our ABDC Publication Support Process",
    sub: "Simple, transparent and guided publication assistance — from your first draft to a tracked submission.",
    steps: [
      {
        title: "Share Your Paper",
        desc: "Send your manuscript, abstract, title, keywords, or research topic.",
      },
      {
        title: "Journal Suitability Check",
        desc: "We check your subject area, paper quality, ABDC category requirement, and publication goal.",
      },
      {
        title: "Manuscript Formatting",
        desc: "We help align your paper with journal formatting, structure, references, and submission guidelines.",
      },
      {
        title: "Submission Assistance",
        desc: "We guide you through the journal submission process and required documentation.",
      },
      {
        title: "Reviewer Response Support",
        desc: "If reviewer comments are received, we help you prepare proper responses and revisions.",
      },
      {
        title: "Publication Tracking",
        desc: "We keep you updated throughout the publication journey.",
      },
    ],
  },

  whoCanApply: {
    heading: "ABDC Publication Support for Every Academic Requirement",
    sub: "Our ABDC publication assistance is suitable for:",
    items: [
      "PhD scholars",
      "Research scholars",
      "Faculty members",
      "Professors",
      "MBA & management researchers",
      "Business school faculty",
      "Law researchers",
      "Commerce researchers",
      "Economics researchers",
      "Marketing researchers",
      "Finance & taxation researchers",
      "Independent authors",
      "Working professionals",
      "University departments",
    ],
  },

  subjectAreas: {
    heading: "Multidisciplinary ABDC Publication Assistance",
    sub: "We support research papers across multiple domains, including:",
    items: [
      "Business management",
      "Marketing management",
      "Consumer behaviour",
      "Brand management",
      "Digital marketing",
      "Human resource management",
      "Finance",
      "Accounting",
      "Taxation",
      "International tax law",
      "Economics",
      "Economic history",
      "Development studies",
      "Entrepreneurship",
      "Business law",
      "Commercial law",
      "Technology law",
      "Informatics education",
      "Social research",
      "Policy research",
      "Interdisciplinary management research",
    ],
  },

  whyInscribe: {
    heading: "Support That Saves Time & Reduces Confusion",
    paragraphs: [
      "Choosing the right ABDC journal can be confusing. Every journal has a different category status, subject scope, formatting rules, review process, acceptance standard, and publication timeline.",
      "Inscribe IQ simplifies the process with expert guidance and structured publication support.",
    ],
    benefits: [
      "ABDC journal guidance",
      "B and C category journal options",
      "Subject-wise journal matching",
      "Business, law, economics & marketing journal support",
      "Manuscript formatting support",
      "Plagiarism improvement guidance",
      "Submission assistance",
      "Revision & reviewer response support",
      "Clear communication",
      "End-to-end process tracking",
    ],
  },

  authorNote: {
    heading: "Ethical Publication Support",
    paragraphs: [
      "Inscribe IQ provides publication guidance, manuscript support, formatting assistance, journal selection support, and submission assistance.",
      "Final acceptance depends on the journal's editorial board, peer review process, manuscript quality, originality, subject fit, and current journal policies.",
      "Journal indexing, ABDC category, database coverage, publication timelines, and availability may change from time to time. Authors are advised to verify the latest ABDC Journal Quality List and current journal status before final submission.",
    ],
  },

  leadForm: {
    heading: "Find the Right ABDC Journal for Your Research",
    sub: "Share your details and our publication expert will help you check suitable ABDC journal options for your paper.",
    categoryLabel: "Preferred ABDC Category",
    categoryOptions: ["B", "C", "Any"],
    subjectLabel: "Research Subject",
    submitCta: "Get Free Journal Recommendation",
  },

  faqs: [
    {
      q: "Do you help with ABDC indexed journals?",
      a: "Yes, we provide journal selection support, manuscript preparation guidance, formatting support, submission assistance, and publication process guidance for suitable ABDC journal options.",
    },
    {
      q: "What is ABDC?",
      a: "ABDC stands for Australian Business Deans Council. Its Journal Quality List is commonly used in business and management research to identify journal quality categories.",
    },
    {
      q: "Can I choose ABDC B or C category journals?",
      a: "Yes, journal suggestions can be shared based on your research subject, manuscript quality, category preference, and publication requirement.",
    },
    {
      q: "Which subjects are suitable for ABDC publication?",
      a: "ABDC publication is suitable for business, management, marketing, finance, accounting, economics, entrepreneurship, law, taxation, commerce, and related interdisciplinary research areas.",
    },
    {
      q: "How do I know which ABDC journal is suitable for my paper?",
      a: "Our team reviews your paper title, abstract, keywords, subject area, manuscript quality, and category requirement to suggest suitable ABDC journal options.",
    },
    {
      q: "Is publication guaranteed?",
      a: "No. Final acceptance depends on the journal's editorial board, peer review process, manuscript quality, originality, and subject fit.",
    },
    {
      q: "Can you help with formatting and reviewer comments?",
      a: "Yes, we can assist with journal formatting, plagiarism improvement guidance, revision support, and reviewer response preparation.",
    },
    {
      q: "Do ABDC ratings change?",
      a: "Yes, ABDC categories and journal status may change from time to time. Authors should verify the latest ABDC Journal Quality List before final submission.",
    },
  ],

  finalCta: {
    heading: "Ready to Publish in an ABDC Indexed Journal?",
    accent: "ABDC Indexed Journal?",
    sub: "Get expert guidance for journal selection, manuscript preparation, submission support, and publication assistance.",
    primaryCta: "Book Free Consultation",
    secondaryCta: "Share Your Manuscript",
    contactLine:
      "Speak with an Inscribe IQ publication expert today and check suitable ABDC journal options for your research.",
  },
};

export default abdc;
