import { ScrollText } from "lucide-react";

// ---------------------------------------------------------------------------
// Dissertation Writing Services — page content.
// ---------------------------------------------------------------------------
const dissertation = {
  slug: "dissertation",
  name: "Dissertation",
  icon: ScrollText,

  hero: {
    label: "Dissertation Writing Services",
    titleLead: "Complete Dissertation Support for",
    titleAccent: "Students & Researchers",
    paragraphs: [
      "Need help with dissertation proposal, chapter structure, literature review, methodology, editing, formatting, or final submission preparation?",
      "We provide structured dissertation writing support for students, postgraduate learners, doctoral candidates, research scholars, and working professionals — from topic selection to final documentation.",
    ],
    tagline:
      "Turn your research idea into a well-structured, professionally presented dissertation.",
    primaryCta: "Book Free Consultation",
    secondaryCta: "Share Your Dissertation Requirement",
    highlights: [
      "Dissertation Proposal Support",
      "Chapter-Wise Writing Guidance",
      "Literature Review Assistance",
      "Methodology Support",
      "Editing & Proofreading",
      "University Format-Based Documentation",
    ],
    draft: {
      docType: "Dissertation",
      title: "Proposal & Research Direction",
      progressLabel: "Topic",
      progressEnd: "Submission",
      progress: 64,
      chapters: ["Introduction", "Literature Review", "Methodology", "Findings"],
    },
  },

  problem: {
    heading: "Is Your Dissertation Becoming Difficult to Manage?",
    intro:
      "Many students start their dissertation with confidence but get stuck when they have to organize the topic, collect literature, frame objectives, explain methodology, and present findings properly.",
    challenges: [
      "Topic is not finalized",
      "Proposal is not approved",
      "Research objectives are unclear",
      "Literature review is weak",
      "Methodology chapter is confusing",
      "Data interpretation is difficult",
      "Supervisor corrections are pending",
      "Formatting doesn't match guidelines",
      "Final draft needs editing & polishing",
    ],
    closing:
      "Inscribe IQ helps you bring clarity, structure, and confidence to your dissertation journey.",
    fromTo: ["Confusion", "Confidence"],
  },

  roadmap: {
    heading: "From Topic Selection to Final Submission",
    sub: "We support your dissertation journey stage by stage.",
    stages: [
      {
        title: "Topic Selection & Research Direction",
        desc: "We refine your topic, research problem, objectives, questions, and scope.",
      },
      {
        title: "Proposal Development",
        desc: "We assist with proposal structure, background, research gap, methodology outline, and expected outcomes.",
      },
      {
        title: "Chapter-Wise Dissertation Support",
        desc: "We support introduction, literature review, methodology, findings, discussion, conclusion, and references.",
      },
      {
        title: "Review & Improvement",
        desc: "We improve academic tone, chapter flow, citation quality, formatting, and supervisor correction points.",
      },
      {
        title: "Final Documentation",
        desc: "We assist with final formatting, proofreading, references, appendices, and a submission-ready presentation.",
      },
    ],
  },

  support: {
    label: "Chapter-Wise Support",
    heading: "Get Support for Every Dissertation Chapter",
    sub: "Structured help for each part of your dissertation — from the first chapter to your references.",
    items: [
      {
        tag: "Chapter 1",
        title: "Introduction",
        desc: "Background of the study, research problem, objectives, research questions, scope, and significance.",
      },
      {
        tag: "Chapter 2",
        title: "Literature Review",
        desc: "Theme-based literature organization, citation support, research gap identification, and academic flow.",
      },
      {
        tag: "Chapter 3",
        title: "Research Methodology",
        desc: "Research design, sampling method, tools, variables, data collection method, and methodology explanation.",
      },
      {
        tag: "Chapter 4",
        title: "Data Analysis & Findings",
        desc: "Support in explaining results, tables, charts, findings, and interpretation.",
      },
      {
        tag: "Chapter 5",
        title: "Discussion & Conclusion",
        desc: "Summary of findings, discussion, implications, limitations, recommendations, and future scope.",
      },
      {
        tag: "Final",
        title: "References & Appendices",
        desc: "Citation formatting, bibliography, questionnaires, annexures, tables, figures, and final documentation.",
      },
    ],
  },

  packages: {
    heading: "Choose Support Based on Your Current Stage",
    sub: "Flexible dissertation support — whether you're at the proposal stage or preparing your final submission.",
    items: [
      {
        name: "Proposal Support",
        desc: "Help with topic finalization, objectives, research questions, and proposal preparation.",
        bestFor: "Students at the starting stage",
      },
      {
        name: "Chapter Support",
        desc: "Help with specific chapters like literature review, methodology, findings, or conclusion.",
        bestFor: "Students with partial work completed",
      },
      {
        name: "Complete Dissertation Support",
        desc: "Structured support from proposal to final documentation.",
        bestFor: "Students needing end-to-end guidance",
        popular: true,
      },
      {
        name: "Final Submission Support",
        desc: "Editing, formatting, proofreading, plagiarism improvement guidance, and correction support for an existing draft.",
        bestFor: "Students near final submission",
      },
    ],
  },

  quality: {
    heading: "Improve the Academic Strength of Your Dissertation",
    sub: "A good dissertation should be clear, logical, research-based, properly referenced, and professionally presented.",
    items: [
      "Research clarity",
      "Chapter flow",
      "Academic tone",
      "Literature strength",
      "Research gap explanation",
      "Methodology clarity",
      "Finding interpretation",
      "Citation accuracy",
      "Formatting quality",
      "Readability & presentation",
      "Supervisor correction response",
    ],
  },

  formatting: {
    heading: "Dissertation Formatting as Per University Requirements",
    sub: "Every university or college may have different dissertation formatting rules. We help align your dissertation with the required academic format.",
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
      "Appendices & annexures",
      "Final Word/PDF preparation",
    ],
    stylesLabel: "Supported referencing styles",
    styles: ["APA", "MLA", "Harvard", "Chicago", "IEEE", "Vancouver", "University-specific"],
  },

  specialized: {
    heading: "Support for UG, PG, MBA, MPhil & Doctoral Dissertations",
    sub: "We provide dissertation support for multiple academic levels and research requirements.",
    items: [
      "Topic approval",
      "Research originality",
      "Academic presentation",
      "Supervisor expectations",
      "University guidelines",
      "Proper documentation",
      "Timely completion",
      "Ethical research writing",
    ],
  },

  whoFor: {
    heading: "Dissertation Writing Support for Students & Professionals",
    items: [
      "UG students",
      "PG students",
      "MBA students",
      "MPhil scholars",
      "Doctoral candidates",
      "Research scholars",
      "Working professionals",
      "International students",
      "Students with pending work",
      "Students needing correction support",
      "Students near final submission",
      "Students needing editing & formatting",
    ],
  },

  domains: {
    heading: "Multidisciplinary Dissertation Writing Assistance",
    sub: "We support dissertation work across multiple domains:",
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
      "Business Studies",
      "Interdisciplinary Research",
    ],
  },

  whyChoose: {
    heading: "Dissertation Guidance That Makes Academic Writing Easier",
    intro:
      "Dissertation writing becomes stressful when there is no clear structure, research direction, timeline, or academic support. With Inscribe IQ, you get:",
    items: [
      "Topic & proposal guidance",
      "Chapter-wise academic support",
      "Literature review support",
      "Research methodology explanation",
      "Data interpretation assistance",
      "Editing & proofreading",
      "University guideline-based formatting",
      "Plagiarism improvement guidance",
      "Supervisor correction support",
      "Regular communication",
      "End-to-end dissertation documentation",
    ],
  },

  ethical: {
    heading: "Responsible Dissertation Writing Assistance",
    paragraphs: [
      "Inscribe IQ provides academic writing guidance, research structuring, editing, formatting, documentation support, and improvement assistance.",
      "Clients are responsible for reviewing, approving, and using the final work as per their university or institution's academic policies.",
      "We support ethical academic development and do not promote false claims, fabricated data, or academic misconduct.",
    ],
  },

  leadForm: {
    heading: "Get Expert Dissertation Writing Support",
    sub: "Share your dissertation requirement and our academic writing expert will guide you with the best support option.",
    fields: [
      { key: "level", label: "Academic Level", type: "select", options: ["UG", "PG", "MBA", "MPhil", "Doctoral", "Other"] },
      { key: "subject", label: "Research Subject", type: "text", placeholder: "e.g. Marketing, Education…" },
      { key: "topic", label: "Dissertation Topic", type: "text", placeholder: "Your dissertation topic" },
      { key: "stage", label: "Current Stage", type: "text", placeholder: "e.g. Proposal stage" },
      { key: "guidelines", label: "University Guidelines Available?", type: "yesno" },
    ],
    needHelp: {
      label: "Need Help With",
      options: [
        "Topic",
        "Proposal",
        "Literature Review",
        "Methodology",
        "Data Analysis Explanation",
        "Editing",
        "Formatting",
        "Complete Dissertation",
      ],
    },
    uploadLabel: "Upload file",
    submitCta: "Get Free Dissertation Consultation",
  },

  faqs: [
    {
      q: "Do you provide complete dissertation writing support?",
      a: "Yes, we provide dissertation structuring, proposal support, chapter-wise guidance, editing, formatting, proofreading, and final documentation assistance.",
    },
    {
      q: "Can you help with dissertation proposal writing?",
      a: "Yes, we assist with topic refinement, objectives, research questions, scope, methodology outline, and proposal structure.",
    },
    {
      q: "Can you help if my dissertation is already half completed?",
      a: "Yes, we can review your existing draft and help with pending chapters, corrections, editing, formatting, and final improvement.",
    },
    {
      q: "Can you help with only one chapter?",
      a: "Yes, we can assist with individual chapters such as introduction, literature review, methodology, findings, discussion, conclusion, and references.",
    },
    {
      q: "Do you help with supervisor corrections?",
      a: "Yes, we can help improve your dissertation based on supervisor comments and required corrections.",
    },
    {
      q: "Can you format the dissertation according to my university guidelines?",
      a: "Yes, we can format the dissertation according to your university format, citation style, spacing, margins, chapter structure, and final submission requirements.",
    },
    {
      q: "Is this service suitable for MBA students?",
      a: "Yes, our dissertation support is suitable for MBA, PG, MPhil, doctoral, and other academic programs.",
    },
  ],

  finalCta: {
    heading: "Complete Your Dissertation with Expert Academic Support",
    accent: "Expert Academic Support",
    sub: "Do not let dissertation writing delay your academic progress. Get structured, professional, and ethical dissertation support from Inscribe IQ.",
    primaryCta: "Book Free Consultation",
    secondaryCta: "Share Your Dissertation Requirement",
    contactLine:
      "Speak with an Inscribe IQ dissertation expert today and move one step closer to final submission.",
  },
};

export default dissertation;
