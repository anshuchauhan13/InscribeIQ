import { Microscope } from "lucide-react";

// ---------------------------------------------------------------------------
// PubMed / NLM Publication Services — page content.
// ---------------------------------------------------------------------------
const pubmed = {
  slug: "pubmed",
  name: "PubMed",
  icon: Microscope,

  hero: {
    label: "PubMed Publication Services",
    titleLead: "Publish Your Research in",
    titleAccent: "PubMed / NLM Listed Journals",
    paragraphs: [
      "Get expert support for publishing your medical, clinical, healthcare, public health, pediatric, pharmacology, orthopedic, gynecology, clinical trial, and biomedical research in suitable PubMed / NLM listed journal options.",
      "We help doctors, researchers, PhD scholars, faculty members, and medical authors choose the right journal, prepare their manuscript, and complete the publication process with confidence.",
    ],
    tagline:
      "Make your medical research visible. Build your academic profile. Publish with expert guidance.",
    primaryCta: "Book Free Consultation",
    secondaryCta: "Check Journal Availability",
    highlights: [
      "PubMed / NLM Journal Options",
      "Medical & Clinical Research Journals",
      "Pharmacology, Pediatrics, Orthopedics & Public Health",
      "Manuscript Formatting Support",
      "Submission & Reviewer Response Assistance",
    ],
    featured: {
      badge: "Clinical Trials Journal",
      name: "International Journal of Clinical Trials",
      field: "Clinical Trials · Drug Trials · Evidence-Based Medicine",
      issn: "2349-3259",
    },
  },

  trustStrip: [
    "PubMed",
    "NLM Listed Journals",
    "PMC Options",
    "Medical Research",
    "Clinical Research",
    "Healthcare Publication",
    "Journal Selection Support",
  ],

  whyChoose: {
    label: "Why Choose PubMed",
    heading: "Give Your Research Global Academic Visibility",
    paragraphs: [
      "PubMed is one of the most recognized biomedical literature platforms used by doctors, researchers, healthcare professionals, institutions, and medical scholars across the world.",
      "Publishing in a suitable PubMed / NLM listed journal can help improve your research visibility, academic credibility, faculty profile, PhD profile, and clinical research record.",
      "At Inscribe IQ, we identify suitable PubMed / NLM journal options based on your subject area, manuscript quality, indexing requirement, medical specialty, and publication goal.",
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
    label: "Featured PubMed Journals",
    heading: "Explore Suitable PubMed Journal Options",
    sub: "Choose from selected medical, clinical, public health, pharmacology, pediatrics, orthopedics, clinical trial, and biomedical journal options based on your medical specialty and publication requirement.",
    items: [
      {
        id: "ijbcp",
        name: "International Journal of Basic & Clinical Pharmacology",
        badge: "Pharmacology Journal",
        meta: [{ label: "Online ISSN", value: "2279-0780" }],
        suitableFor:
          "Pharmacology, Clinical Pharmacology, Drug Research, Therapeutics & Medical Science",
        bestFor: [
          "Basic pharmacology",
          "Clinical pharmacology",
          "Drug safety",
          "Therapeutics",
          "Pharmaceutical research",
          "Drug response studies",
        ],
        highlight:
          "A suitable option for researchers working on basic and clinical pharmacology, drug studies, therapeutic research, and applied medical pharmacology.",
        cta: "Check Suitability",
      },
      {
        id: "ijrcog",
        name: "Int. Journal of Reproduction, Contraception, Obstetrics & Gynecology",
        badge: "Reproduction & Gynecology",
        meta: [{ label: "Online ISSN", value: "2320-1789" }],
        suitableFor:
          "Obstetrics, Gynecology, Reproductive Health, Contraception & Women's Health",
        bestFor: [
          "Obstetrics",
          "Gynecology",
          "Reproductive medicine",
          "Contraception",
          "Maternal health",
          "Women's health research",
        ],
        highlight:
          "A strong option for researchers in obstetrics, gynecology, reproductive health, maternal care, contraception, infertility, and women's health.",
        cta: "Check Suitability",
      },
      {
        id: "ijrms",
        name: "International Journal of Research in Medical Sciences",
        badge: "Medical Sciences Journal",
        meta: [{ label: "Online ISSN", value: "2320-6012" }],
        suitableFor:
          "General Medicine, Clinical Research, Medical Science & Healthcare Research",
        bestFor: [
          "General medicine",
          "Clinical research",
          "Healthcare research",
          "Internal medicine",
          "Public health",
          "Biomedical research",
        ],
        highlight:
          "A suitable option for doctors, medical researchers, healthcare professionals, and scholars working across general medical science and clinical research.",
        cta: "Check Suitability",
      },
      {
        id: "ijct",
        name: "International Journal of Clinical Trials",
        badge: "Clinical Trials Journal",
        meta: [{ label: "Online ISSN", value: "2349-3259" }],
        suitableFor:
          "Clinical Trials, Medical Research, Drug Trials, Healthcare Studies & Evidence-Based Medicine",
        bestFor: [
          "Clinical trials",
          "Drug trials",
          "Medical interventions",
          "Trial protocols",
          "Evidence-based medicine",
          "Research methodology",
        ],
        highlight:
          "A strong option for researchers working on clinical trials, medical interventions, trial methodology, drug studies, and evidence-based healthcare research.",
        cta: "Check Suitability",
      },
      {
        id: "ijcp",
        name: "International Journal of Contemporary Pediatrics",
        badge: "Pediatrics Journal",
        meta: [{ label: "Online ISSN", value: "2349-3291" }],
        suitableFor:
          "Pediatrics, Child Health, Neonatology, Adolescent Health & Pediatric Medicine",
        bestFor: [
          "Pediatrics",
          "Child health",
          "Neonatology",
          "Adolescent health",
          "Pediatric medicine",
          "Vaccination research",
        ],
        highlight:
          "A suitable option for pediatricians, child health researchers, and scholars working on infant, child, and adolescent health.",
        cta: "Check Suitability",
      },
      {
        id: "ijcmph",
        name: "Int. Journal of Community Medicine & Public Health",
        badge: "Public Health Journal",
        meta: [{ label: "Online ISSN", value: "2394-6040" }],
        suitableFor:
          "Community Medicine, Public Health, Epidemiology, Preventive Medicine & Healthcare Delivery",
        bestFor: [
          "Community medicine",
          "Public health",
          "Epidemiology",
          "Preventive medicine",
          "Healthcare delivery",
          "Health policy research",
        ],
        highlight:
          "A strong option for researchers in community medicine, public health, epidemiology, preventive healthcare, and healthcare delivery systems.",
        cta: "Check Suitability",
      },
      {
        id: "ijro",
        name: "International Journal of Research in Orthopedics",
        badge: "Orthopedics Journal",
        meta: [{ label: "ISSN", value: "2455-4510" }],
        suitableFor:
          "Orthopedics, Trauma, Bone Health, Joint Research & Musculoskeletal Medicine",
        bestFor: [
          "Orthopedics",
          "Trauma care",
          "Bone disorders",
          "Joint replacement",
          "Musculoskeletal research",
          "Orthopedic surgery",
        ],
        highlight:
          "A suitable option for orthopedic doctors, surgeons, and scholars working on bone, joint, trauma, and musculoskeletal research.",
        cta: "Check Suitability",
      },
      {
        id: "bioinformation",
        name: "Bioinformation",
        badge: "Bioinformatics & Biomedical Data",
        meta: [{ label: "ISSN", value: "0973-2063" }],
        suitableFor:
          "Bioinformatics, Computational Biology, Biomedical Data, Biological Discovery & Life Science",
        bestFor: [
          "Bioinformatics",
          "Computational biology",
          "Biomedical data analysis",
          "Genomics",
          "Proteomics",
          "Molecular biology",
        ],
        highlight:
          "A suitable option for researchers at the interface of biology, biomedical data, and computational methods. Current PubMed/MEDLINE/PMC status should be verified before final submission.",
        cta: "Check Current Status",
      },
    ],
  },

  process: {
    heading: "Our PubMed Publication Support Process",
    sub: "Simple, transparent and guided publication assistance — from your first draft to a tracked submission.",
    steps: [
      {
        title: "Share Your Paper",
        desc: "Send your manuscript, abstract, title, keywords, or research topic.",
      },
      {
        title: "Journal Suitability Check",
        desc: "We check your medical specialty, paper quality, PubMed / NLM suitability, and publication goal.",
      },
      {
        title: "Manuscript Formatting",
        desc: "We align your paper with journal formatting, references, author guidelines, ethics statements, and submission requirements.",
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
    heading: "PubMed Publication Support for Every Academic Requirement",
    sub: "Our PubMed publication assistance is suitable for:",
    items: [
      "Doctors",
      "Medical researchers",
      "PhD scholars",
      "Faculty members",
      "Professors",
      "Healthcare professionals",
      "Clinical researchers",
      "Pharmacology researchers",
      "Gynecology researchers",
      "Pediatric researchers",
      "Public health researchers",
      "Orthopedic researchers",
      "Biomedical researchers",
      "Bioinformatics researchers",
      "Medical colleges & hospitals",
      "University departments",
    ],
  },

  subjectAreas: {
    heading: "Multidisciplinary PubMed Publication Assistance",
    sub: "We support research papers across multiple medical and biomedical domains, including:",
    items: [
      "Pharmacology",
      "Clinical pharmacology",
      "General medicine",
      "Clinical research",
      "Reproductive medicine",
      "Obstetrics & gynecology",
      "Contraception research",
      "Pediatrics",
      "Child health",
      "Community medicine",
      "Public health",
      "Epidemiology",
      "Preventive medicine",
      "Orthopedics",
      "Trauma & bone health",
      "Clinical trials",
      "Biomedical science",
      "Bioinformatics",
      "Computational biology",
      "Evidence-based medicine",
      "Hospital & healthcare studies",
    ],
  },

  whyInscribe: {
    heading: "Support That Saves Time & Reduces Confusion",
    paragraphs: [
      "Choosing the right PubMed / NLM journal can be confusing. Every journal has a different indexing coverage, specialty focus, manuscript scope, formatting rule, ethical requirement, and publication timeline.",
      "Inscribe IQ simplifies the process with expert guidance and structured publication support.",
    ],
    benefits: [
      "PubMed / NLM journal guidance",
      "Medical and clinical journal options",
      "Subject-wise journal matching",
      "Specialty-wise journal recommendations",
      "Manuscript formatting support",
      "Plagiarism improvement guidance",
      "Submission assistance",
      "Ethics & declaration guidance",
      "Revision & reviewer response support",
      "End-to-end process tracking",
    ],
  },

  authorNote: {
    heading: "Ethical Publication Support",
    paragraphs: [
      "Inscribe IQ provides publication guidance, manuscript support, formatting assistance, journal selection support, and submission assistance.",
      "Final acceptance depends on the journal's editorial board, peer review process, manuscript quality, originality, subject fit, ethical compliance, and current journal policies.",
      "Journal indexing, PubMed/NLM/PMC/MEDLINE coverage, publication timelines, and availability may change from time to time. Authors are advised to verify the latest journal status before final submission.",
    ],
  },

  leadForm: {
    heading: "Find the Right PubMed Journal for Your Research",
    sub: "Share your details and our publication expert will help you check suitable PubMed / NLM journal options for your paper.",
    categoryLabel: "Preferred Journal Category",
    categoryOptions: ["PubMed", "NLM", "PMC", "Any"],
    subjectLabel: "Medical Specialty / Research Subject",
    submitCta: "Get Free Journal Recommendation",
  },

  faqs: [
    {
      q: "Do you help with PubMed journals?",
      a: "Yes, we provide journal selection support, manuscript preparation guidance, formatting support, submission assistance, and publication process guidance for suitable PubMed / NLM journal options.",
    },
    {
      q: "What is PubMed?",
      a: "PubMed is a major biomedical literature search platform used by medical researchers, doctors, healthcare professionals, scholars, and institutions worldwide.",
    },
    {
      q: "What is the NLM Catalog?",
      a: "The NLM Catalog provides journal information for PubMed and other NCBI databases. It helps authors check journal details and indexing-related information.",
    },
    {
      q: "What is the difference between PubMed, PMC, and MEDLINE?",
      a: "PubMed is a biomedical literature search platform, MEDLINE is a major bibliographic database indexed with NLM standards, and PMC is a full-text archive for biomedical and life science literature.",
    },
    {
      q: "Can I publish medical or clinical research?",
      a: "Yes, we support suitable journal options for general medicine, clinical research, pharmacology, gynecology, pediatrics, orthopedics, public health, clinical trials, and biomedical research.",
    },
    {
      q: "Can I publish public health or community medicine research?",
      a: "Yes, we support community medicine, public health, epidemiology, healthcare delivery, preventive medicine, social medicine, and health policy research.",
    },
    {
      q: "How do I know which journal is suitable for my paper?",
      a: "Our team reviews your paper title, abstract, keywords, medical specialty, manuscript quality, and indexing requirement to suggest suitable journal options.",
    },
    {
      q: "Is publication guaranteed?",
      a: "No. Final acceptance depends on the journal's editorial board, peer review process, manuscript quality, originality, subject fit, ethical compliance, and current journal policies.",
    },
    {
      q: "Does PubMed status change?",
      a: "Yes, journal coverage and indexing status may change from time to time. Authors should verify the latest PubMed, NLM, PMC, and MEDLINE status before final submission.",
    },
  ],

  finalCta: {
    heading: "Ready to Publish in a PubMed Indexed Journal?",
    accent: "PubMed Indexed Journal?",
    sub: "Get expert guidance for journal selection, manuscript preparation, submission support, and publication assistance.",
    primaryCta: "Book Free Consultation",
    secondaryCta: "Share Your Manuscript",
    contactLine:
      "Speak with an Inscribe IQ publication expert today and check suitable PubMed journal options for your medical research.",
  },
};

export default pubmed;
