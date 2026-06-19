import { FileText } from "lucide-react";

// ---------------------------------------------------------------------------
// Thesis Writing Services — page content.
// Shared shape consumed by services/writing/components/. Mirrors the source
// brief so copy can be edited here without touching layout code.
// ---------------------------------------------------------------------------
const thesis = {
  slug: "thesis",
  name: "Thesis",
  icon: FileText,

  hero: {
    label: "Thesis Writing Services",
    titleLead: "Complete Thesis Writing Support for",
    titleAccent: "Research Scholars",
    paragraphs: [
      "Struggling with thesis structure, chapter writing, research flow, formatting, or final submission preparation?",
      "We provide structured thesis writing support for PhD scholars, research scholars, working professionals, and students who need expert academic guidance from topic finalization to final documentation.",
    ],
    tagline:
      "Your research deserves a thesis that is clear, well-structured, and academically strong.",
    primaryCta: "Book Free Consultation",
    secondaryCta: "Share Your Thesis Requirement",
    highlights: [
      "Chapter-Wise Thesis Support",
      "Research Methodology Guidance",
      "Literature Review Assistance",
      "Editing & Formatting Support",
      "Plagiarism Improvement Guidance",
      "University Guideline-Based Support",
    ],
    // Draft-document mock shown in the hero visual.
    draft: {
      docType: "PhD Thesis",
      title: "Topic & Research Direction",
      progressLabel: "Topic",
      progressEnd: "Submission",
      progress: 72,
      chapters: ["Introduction", "Literature Review", "Methodology", "Analysis"],
    },
  },

  problem: {
    heading: "Is Your Thesis Work Stuck at Any Stage?",
    intro:
      "Thesis writing is not just about writing pages. It requires research clarity, academic structure, proper references, methodology alignment, formatting accuracy, and supervisor-approved presentation.",
    challenges: [
      "Unable to start the thesis",
      "Confused about chapter structure",
      "Literature review is not organized",
      "Research methodology is unclear",
      "Data analysis explanation is difficult",
      "Supervisor corrections are pending",
      "Formatting doesn't match guidelines",
      "Plagiarism percentage needs improvement",
      "Final submission deadline is near",
    ],
    closing:
      "Inscribe IQ helps you move from confusion to completion with structured thesis support.",
    fromTo: ["Confusion", "Completion"],
  },

  roadmap: {
    heading: "From Topic to Final Thesis Submission",
    sub: "We support your thesis journey stage by stage.",
    stages: [
      {
        title: "Topic & Research Direction",
        desc: "We refine your research topic, objectives, scope, and research problem.",
      },
      {
        title: "Synopsis & Proposal Support",
        desc: "We assist with synopsis structure, objectives, hypothesis, methodology outline, and expected outcomes.",
      },
      {
        title: "Chapter-Wise Thesis Development",
        desc: "We support introduction, literature review, methodology, analysis explanation, discussion, conclusion, and references.",
      },
      {
        title: "Review & Improvement",
        desc: "We improve academic language, research flow, formatting, citations, and supervisor correction points.",
      },
      {
        title: "Final Documentation",
        desc: "We assist with final formatting, references, plagiarism improvement guidance, annexures, and a submission-ready presentation.",
      },
    ],
  },

  support: {
    label: "Chapter-Wise Support",
    heading: "Get Support for Every Thesis Chapter",
    sub: "Structured help for each part of your thesis — from the first chapter to your references.",
    items: [
      {
        tag: "Chapter 1",
        title: "Introduction",
        desc: "Research background, problem statement, objectives, scope, hypothesis, and significance of the study.",
      },
      {
        tag: "Chapter 2",
        title: "Review of Literature",
        desc: "Thematic literature review, research gap identification, citation support, and academic flow improvement.",
      },
      {
        tag: "Chapter 3",
        title: "Research Methodology",
        desc: "Research design, sampling, data collection tools, variables, hypothesis, and methodology explanation.",
      },
      {
        tag: "Chapter 4",
        title: "Data Analysis & Interpretation",
        desc: "Support in explaining findings, tables, charts, statistical outputs, and result interpretation.",
      },
      {
        tag: "Chapter 5",
        title: "Discussion, Conclusion & Suggestions",
        desc: "Clear explanation of findings, contribution of research, conclusion, limitations, and future scope.",
      },
      {
        tag: "Final",
        title: "References & Annexures",
        desc: "Citation formatting, bibliography, appendices, questionnaires, tables, figures, and final documentation.",
      },
    ],
  },

  packages: {
    heading: "Choose Support Based on Your Current Stage",
    sub: "Flexible thesis support — whether you're just starting or preparing your final submission.",
    items: [
      {
        name: "Starter Support",
        desc: "Help with topic, synopsis, objectives, and thesis planning.",
        bestFor: "Early-stage scholars",
      },
      {
        name: "Chapter Support",
        desc: "Help with selected chapters like literature review, methodology, or analysis explanation.",
        bestFor: "Scholars with partial work completed",
      },
      {
        name: "Complete Thesis Support",
        desc: "Structured support from beginning to final documentation.",
        bestFor: "Scholars needing end-to-end guidance",
        popular: true,
      },
      {
        name: "Final Submission Support",
        desc: "Editing, formatting, plagiarism improvement guidance, and supervisor correction support for an existing draft.",
        bestFor: "Scholars near final submission",
      },
    ],
  },

  quality: {
    heading: "Improve the Academic Strength of Your Thesis",
    sub: "A good thesis should not only be lengthy — it should be logical, research-based, well-cited, and easy to understand.",
    items: [
      "Research flow",
      "Academic tone",
      "Chapter connectivity",
      "Literature strength",
      "Research gap clarity",
      "Methodology explanation",
      "Citation accuracy",
      "Formatting quality",
      "Readability & presentation",
      "Supervisor correction response",
    ],
  },

  formatting: {
    heading: "Thesis Formatting as Per University Requirements",
    sub: "Every university has different thesis formatting rules. We help align your thesis with the required academic guidelines.",
    includes: [
      "Title page formatting",
      "Declaration & certificate pages",
      "Abstract formatting",
      "Table of contents",
      "List of tables & figures",
      "Chapter numbering",
      "Margins & spacing",
      "Citation style formatting",
      "References & bibliography",
      "Annexures & appendices",
      "Final PDF/Word preparation",
    ],
    stylesLabel: "Supported referencing styles",
    styles: ["APA", "MLA", "Harvard", "Chicago", "IEEE", "Vancouver", "University-specific"],
  },

  specialized: {
    heading: "Specialized for NAAC Accredited & NIRF-Ranked University Thesis",
    sub: "We provide structured thesis support for scholars from reputed, NAAC accredited, and NIRF-ranked universities.",
    items: [
      "Academic originality",
      "Research documentation",
      "Supervisor expectations",
      "University submission format",
      "Quality presentation",
      "Ethical research writing",
      "Timely completion",
    ],
  },

  whoFor: {
    heading: "Thesis Writing Support for Serious Research Scholars",
    items: [
      "PhD scholars",
      "Research scholars",
      "Working professionals",
      "Faculty members",
      "Doctoral candidates",
      "MPhil scholars",
      "Scholars with pending thesis work",
      "Scholars needing supervisor correction support",
      "Scholars near final submission",
      "Scholars needing formatting & editing support",
    ],
  },

  domains: {
    heading: "Multidisciplinary Thesis Writing Assistance",
    sub: "We support thesis work across multiple domains:",
    items: [
      "Management",
      "Marketing",
      "Finance",
      "Human Resource Management",
      "Commerce",
      "Economics",
      "Education",
      "Psychology",
      "Law",
      "Social Sciences",
      "Nursing",
      "Public Health",
      "Pharmacy",
      "Engineering",
      "Computer Science",
      "Artificial Intelligence",
      "Life Sciences",
      "Environmental Science",
      "Humanities",
      "Interdisciplinary Research",
    ],
  },

  whyChoose: {
    heading: "Research Guidance That Makes Thesis Writing Easier",
    intro:
      "Thesis writing can become stressful when there is no clear structure, timeline, or expert support. With Inscribe IQ, you get:",
    items: [
      "Chapter-wise guidance",
      "Dedicated academic writing support",
      "Clear research structuring",
      "University guideline-based formatting",
      "Literature review support",
      "Methodology explanation support",
      "Data analysis explanation support",
      "Editing & proofreading",
      "Plagiarism improvement guidance",
      "Supervisor correction support",
      "Regular communication",
      "End-to-end thesis documentation",
    ],
  },

  ethical: {
    heading: "Responsible Thesis Writing Assistance",
    paragraphs: [
      "Inscribe IQ provides academic writing guidance, research structuring, editing, formatting, documentation support, and improvement assistance.",
      "Clients are responsible for reviewing, approving, and using the final work as per their university or institution's academic policies.",
      "We support ethical academic development and do not promote false claims, fabricated data, or academic misconduct.",
    ],
  },

  leadForm: {
    heading: "Get Expert Thesis Writing Support",
    sub: "Share your thesis requirement and our academic writing expert will guide you with the best support option.",
    fields: [
      { key: "subject", label: "Research Subject", type: "text", placeholder: "e.g. Management, Nursing…" },
      { key: "topic", label: "Thesis Topic", type: "text", placeholder: "Your thesis topic" },
      { key: "stage", label: "Current Stage", type: "text", placeholder: "e.g. Writing chapters" },
      { key: "guidelines", label: "University Guidelines Available?", type: "yesno" },
    ],
    needHelp: {
      label: "Need Help With",
      options: [
        "Topic",
        "Synopsis",
        "Literature Review",
        "Methodology",
        "Data Analysis Explanation",
        "Editing",
        "Formatting",
        "Complete Thesis",
      ],
    },
    uploadLabel: "Upload file",
    submitCta: "Get Free Thesis Consultation",
  },

  faqs: [
    {
      q: "Do you provide complete thesis writing support?",
      a: "Yes, we provide thesis structuring, chapter-wise support, editing, formatting, literature review assistance, methodology guidance, data analysis explanation support, and final documentation assistance.",
    },
    {
      q: "Can you help if my thesis is already half completed?",
      a: "Yes, we can review your existing work and help with pending chapters, corrections, formatting, and final improvement.",
    },
    {
      q: "Can you help with only one thesis chapter?",
      a: "Yes, we can assist with individual chapters such as introduction, literature review, methodology, data analysis explanation, discussion, conclusion, and references.",
    },
    {
      q: "Do you help with supervisor corrections?",
      a: "Yes, we can help improve your thesis based on supervisor comments and required corrections.",
    },
    {
      q: "Do you provide plagiarism improvement support?",
      a: "Yes, we provide plagiarism improvement guidance through rewriting support, citation correction, referencing, paraphrasing support, and academic language improvement.",
    },
    {
      q: "Can you format the thesis according to my university guidelines?",
      a: "Yes, we can format the thesis according to your university format, citation style, spacing, margins, chapter structure, and final submission requirements.",
    },
    {
      q: "Is this service useful for working professionals?",
      a: "Yes, it is especially useful for working professionals who need structured academic support due to limited time.",
    },
  ],

  finalCta: {
    heading: "Complete Your Thesis with Expert Academic Support",
    accent: "Expert Academic Support",
    sub: "Do not let thesis writing delay your research journey. Get structured, professional, and ethical thesis writing support from Inscribe IQ.",
    primaryCta: "Book Free Consultation",
    secondaryCta: "Share Your Thesis Requirement",
    contactLine:
      "Speak with an Inscribe IQ thesis expert today and move one step closer to final submission.",
  },
};

export default thesis;
