import { BookMarked } from "lucide-react";

// ---------------------------------------------------------------------------
// Scopus Publication Services — page content.
// ---------------------------------------------------------------------------
const scopus = {
  slug: "scopus",
  name: "Scopus",
  icon: BookMarked,

  hero: {
    label: "Scopus Publication Services",
    titleLead: "Publish Your Research in",
    titleAccent: "Scopus Indexed Journals",
    paragraphs: [
      "Get expert support for selecting the right Scopus indexed journal, preparing your manuscript, submission guidance, reviewer response support, and complete publication assistance.",
      "We help you identify suitable Scopus indexed journals based on your subject area, research quality, timeline, and publication goals.",
    ],
    tagline:
      "Make your research visible. Build your academic profile. Publish with confidence.",
    primaryCta: "Book Free Consultation",
    secondaryCta: "Check Journal Availability",
    highlights: [
      "Scopus Indexed Journals",
      "Q2, Q3 & Q4 Journal Options",
      "Multidisciplinary Subjects",
      "End-to-End Publication Support",
      "Transparent Guidance",
    ],
    featured: {
      badge: "Q2 Scopus Journal",
      name: "Journal of Daoist Studies",
      field: "Humanities · Philosophy · Cultural Studies",
      issn: "1941-5516",
    },
  },

  trustStrip: [
    "Scopus",
    "Research Paper Publication",
    "Journal Selection",
    "Manuscript Formatting",
    "Submission Assistance",
    "Reviewer Response Support",
    "Q2 · Q3 · Q4 Options",
  ],

  whyChoose: {
    label: "Why Choose Scopus",
    heading: "Give Your Research Global Academic Visibility",
    paragraphs: [
      "Scopus indexed journals are widely recognized by universities, academic institutions, researchers, and professionals across the world.",
      "Publishing in a Scopus indexed journal can help strengthen your academic profile, research visibility, and professional credibility.",
      "At Inscribe IQ, we help you identify suitable Scopus indexed journals based on your subject area, research quality, timeline, and publication goals.",
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
    label: "Featured Scopus Journals",
    heading: "Explore Suitable Scopus Journal Options",
    sub: "Choose from discipline-specific and multidisciplinary Scopus journal options based on your research area, journal quartile preference, and publication requirement.",
    items: [
      {
        id: "ijddt",
        name: "International Journal of Drug Delivery Technology (IJDDT)",
        badge: "Q3 Scopus Journal",
        tier: "Q3",
        meta: [{ label: "E-ISSN", value: "0975-4415" }],
        suitableFor:
          "Pharmacy, Drug Delivery, Pharmaceutical Science, Formulation & Drug Development",
        bestFor: [
          "Pharmaceutics",
          "Drug delivery systems",
          "Dosage form design",
          "Pharmaceutical technology",
          "Biomedical pharmacy research",
        ],
        cta: "Check Suitability",
      },
      {
        id: "jds",
        name: "Journal of Daoist Studies (JDS)",
        badge: "Q2 Scopus Journal",
        tier: "Q2",
        meta: [
          { label: "ISSN", value: "1941-5516" },
          { label: "E-ISSN", value: "1941-5524" },
        ],
        suitableFor:
          "Humanities, Philosophy, Religious Studies, Cultural Studies & History",
        bestFor: [
          "Philosophy",
          "Humanities",
          "Daoism studies",
          "Asian studies",
          "Religion and culture",
          "Historical & textual research",
        ],
        cta: "Check Suitability",
      },
      {
        id: "ijse",
        name: "International Journal of Special Education (IJSE)",
        badge: "Q3 Scopus Journal",
        tier: "Q3",
        meta: [
          { label: "ISSN", value: "0827-3383" },
          { label: "E-ISSN", value: "1917-7844" },
        ],
        suitableFor:
          "Education, Special Education, Inclusive Education & Learning Disabilities",
        bestFor: [
          "Special education",
          "Inclusive learning",
          "Educational psychology",
          "Learning disabilities",
          "Teacher education",
          "Policy & practice in education",
        ],
        cta: "Check Suitability",
      },
      {
        id: "edm",
        name: "Enterprise Development & Microfinance",
        badge: "Q4 Scopus Journal",
        tier: "Q4",
        meta: [
          { label: "ISSN", value: "1755-1978" },
          { label: "E-ISSN", value: "1755-1986" },
        ],
        suitableFor:
          "Business, Finance, Development Studies, Entrepreneurship & Microfinance",
        bestFor: [
          "Microfinance",
          "Enterprise development",
          "Entrepreneurship",
          "Financial inclusion",
          "Development economics",
          "SME & rural business research",
        ],
        cta: "Check Suitability",
      },
      {
        id: "jastt",
        name: "Journal of Applied Science & Technology Trends (JASTT)",
        badge: "Q4 Scopus Journal",
        tier: "Q4",
        meta: [{ label: "E-ISSN", value: "2708-0757" }],
        suitableFor:
          "Applied Science, Engineering, Technology, Computer Science & Emerging Technologies",
        bestFor: [
          "Applied science",
          "Engineering",
          "Technology trends",
          "Computer science",
          "Artificial intelligence",
          "Sustainable technology",
        ],
        cta: "Check Suitability",
      },
      {
        id: "jchr",
        name: "Journal of Chemical Health Risks",
        badge: "Q4 Multidisciplinary",
        tier: "Q4",
        meta: [
          { label: "ISSN", value: "2251-6719" },
          { label: "E-ISSN", value: "2251-6727" },
        ],
        suitableFor:
          "Chemistry, Toxicology, Biology, Public Health & Environmental Health",
        bestFor: [
          "Chemical health risks",
          "Toxicology",
          "Public health",
          "Environmental analysis",
          "Chemical safety",
          "Multidisciplinary chemical research",
        ],
        cta: "Check Suitability",
      },
      {
        id: "waterlines",
        name: "Waterlines",
        badge: "Q3 Scopus Journal",
        tier: "Q3",
        meta: [
          { label: "ISSN", value: "0262-8104" },
          { label: "E-ISSN", value: "1756-3488" },
        ],
        suitableFor:
          "Water, Sanitation, WASH, Public Health, Environmental Science & Development Studies",
        bestFor: [
          "Water management",
          "Sanitation",
          "WASH sector",
          "Environmental science",
          "Public health",
          "Sustainable development research",
        ],
        cta: "Check Suitability",
      },
    ],
  },

  process: {
    heading: "Our Scopus Publication Support Process",
    sub: "Simple, transparent and guided publication assistance — from your first draft to a tracked submission.",
    steps: [
      {
        title: "Share Your Manuscript",
        desc: "Send us your research paper, abstract, or topic details.",
      },
      {
        title: "Journal Suitability Check",
        desc: "We review your subject area, manuscript quality, journal category, and publication requirement.",
      },
      {
        title: "Formatting & Improvement Guidance",
        desc: "We align your manuscript with journal guidelines, formatting, plagiarism standards, and submission structure.",
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
        desc: "We keep you updated through the publication journey until the final outcome.",
      },
    ],
  },

  whoCanApply: {
    heading: "Scopus Publication Support for Every Academic Requirement",
    sub: "Our Scopus publication assistance is suitable for:",
    items: [
      "PhD scholars",
      "Research scholars",
      "Faculty members",
      "Professors",
      "Working professionals",
      "Healthcare researchers",
      "Management researchers",
      "Engineering researchers",
      "Education researchers",
      "Humanities researchers",
      "Independent authors",
    ],
  },

  subjectAreas: {
    heading: "Multidisciplinary Scopus Publication Assistance",
    sub: "We support research papers across multiple domains, including:",
    items: [
      "Pharmacy & Pharmaceutical Sciences",
      "Education & Special Education",
      "Management & Business Studies",
      "Microfinance & Development Studies",
      "Humanities & Philosophy",
      "Applied Science & Technology",
      "Chemistry & Public Health",
      "Environmental Science",
      "Water, Sanitation & WASH Research",
      "Social Sciences",
      "Engineering & Computer Science",
    ],
  },

  whyInscribe: {
    heading: "Support That Saves Time & Reduces Confusion",
    paragraphs: [
      "Choosing the right Scopus journal can be difficult. Every journal has a different scope, formatting rule, review process, acceptance standard, and publication timeline.",
      "Inscribe IQ simplifies the process with expert guidance and structured publication support.",
    ],
    benefits: [
      "Verified journal guidance",
      "Subject-wise journal matching",
      "Q2, Q3 & Q4 options",
      "Clear communication",
      "Manuscript formatting support",
      "Plagiarism improvement guidance",
      "Submission assistance",
      "Revision & reviewer response support",
      "End-to-end process tracking",
    ],
  },

  authorNote: {
    heading: "Ethical Publication Support",
    paragraphs: [
      "Inscribe IQ provides publication guidance, manuscript support, formatting assistance, journal selection support, and submission assistance.",
      "Final acceptance depends on the journal's editorial board, peer review process, manuscript quality, originality, subject fit, and current journal policies.",
      "Journal indexing, quartile, availability, and publication timelines may change from time to time. Authors are advised to confirm the latest journal status before final submission.",
    ],
  },

  leadForm: {
    heading: "Find the Right Scopus Journal for Your Research",
    sub: "Share your details and our publication expert will help you check suitable Scopus journal options for your paper.",
    categoryLabel: "Preferred Quartile",
    categoryOptions: ["Q2", "Q3", "Q4", "Any"],
    subjectLabel: "Research Subject",
    submitCta: "Get Free Journal Recommendation",
  },

  faqs: [
    {
      q: "Do you help with Scopus indexed journals?",
      a: "Yes, we provide journal selection support, manuscript preparation guidance, formatting support, submission assistance, and publication process guidance for Scopus indexed journal options.",
    },
    {
      q: "Can I choose Q2, Q3, or Q4 journals?",
      a: "Yes, journal recommendations can be shared based on your subject area, manuscript quality, and preferred quartile category.",
    },
    {
      q: "Is publication guaranteed?",
      a: "No. Final acceptance depends on the journal's editorial board, peer review process, manuscript quality, originality, and journal scope.",
    },
    {
      q: "Do you support multidisciplinary papers?",
      a: "Yes, we support multidisciplinary papers across education, management, science, technology, health, pharmacy, humanities, environmental science, and related areas.",
    },
    {
      q: "How do I know which journal is right for my paper?",
      a: "Our team reviews your paper topic, abstract, keywords, subject area, and publication goal to suggest suitable journal options.",
    },
    {
      q: "Can you help with formatting and reviewer comments?",
      a: "Yes, we can assist with journal formatting, plagiarism improvement guidance, and reviewer response preparation.",
    },
  ],

  finalCta: {
    heading: "Ready to Publish in a Scopus Indexed Journal?",
    accent: "Scopus Indexed Journal?",
    sub: "Get expert guidance for journal selection, manuscript preparation, submission support, and publication assistance.",
    primaryCta: "Book Free Consultation",
    secondaryCta: "Share Your Manuscript",
    contactLine:
      "Speak with an Inscribe IQ publication expert today and check suitable Scopus journal options for your research.",
  },
};

export default scopus;
