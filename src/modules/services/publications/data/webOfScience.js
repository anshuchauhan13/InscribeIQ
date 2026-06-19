import { Globe } from "lucide-react";

// ---------------------------------------------------------------------------
// Web of Science Publication Services — page content.
// ---------------------------------------------------------------------------
const webOfScience = {
  slug: "web-of-science",
  name: "Web of Science",
  icon: Globe,

  hero: {
    label: "Web of Science Publication Services",
    titleLead: "Publish Your Research in",
    titleAccent: "Web of Science Indexed Journals",
    paragraphs: [
      "Get expert support for publishing your research in suitable Web of Science indexed and internationally recognized journals.",
      "We help researchers, PhD scholars, faculty members, doctors, professors, and working professionals choose the right journal, prepare their manuscript, and complete the publication process with confidence.",
    ],
    tagline:
      "Make your research visible. Build your academic profile. Publish with expert guidance.",
    primaryCta: "Book Free Consultation",
    secondaryCta: "Check Journal Availability",
    highlights: [
      "Web of Science Journal Options",
      "ESCI / Zoological Record Indexed",
      "Medical, Life Science & Research Journals",
      "Manuscript Formatting Support",
      "Submission & Reviewer Response Assistance",
    ],
    featured: {
      badge: "ESCI · DOAJ · Embase",
      name: "Journal of Clinical & Diagnostic Research",
      field: "Medical · Clinical · Diagnostic Research",
      issn: "0973-709X",
    },
  },

  trustStrip: [
    "Web of Science",
    "ESCI",
    "Zoological Record",
    "DOAJ",
    "Embase",
    "Research Paper Publication",
    "Journal Selection Support",
  ],

  whyChoose: {
    label: "Why Choose Web of Science",
    heading: "Give Your Research Global Academic Visibility",
    paragraphs: [
      "Web of Science indexed journals are recognized by researchers, universities, academic institutions, medical professionals, and subject experts across the world.",
      "Publishing in a suitable Web of Science journal can help improve your research visibility, academic credibility, faculty profile, PhD profile, and institutional research record.",
      "At Inscribe IQ, we identify suitable journal options based on your subject area, manuscript quality, indexing requirement, and publication goal.",
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
    label: "Featured Web of Science Journals",
    heading: "Explore Suitable Web of Science Journal Options",
    sub: "Choose from selected Web of Science, ESCI, DOAJ, Embase, and Zoological Record indexed journal options based on your research area, subject category, and publication requirement.",
    items: [
      {
        id: "jcdr",
        name: "Journal of Clinical & Diagnostic Research (JCDR)",
        badge: "ESCI · DOAJ · Embase",
        meta: [{ label: "ISSN", value: "0973-709X" }],
        suitableFor:
          "Medical, Clinical, Diagnostic, Healthcare & Biomedical Research",
        bestFor: [
          "Clinical research",
          "Diagnostic studies",
          "Medical case reports",
          "Healthcare research",
          "Pathology",
          "Medical education",
        ],
        highlight:
          "A strong option for doctors, medical researchers, clinical scholars, and biomedical researchers looking for recognized indexing exposure.",
        cta: "Check Suitability",
      },
      {
        id: "flora-fauna",
        name: "Flora and Fauna",
        badge: "Zoological Record Indexed",
        meta: [{ label: "ISSN", value: "2456-9364" }],
        suitableFor:
          "Biological Science, Zoology, Botany, Ecology, Biodiversity & Environmental Research",
        bestFor: [
          "Botany",
          "Zoology",
          "Life sciences",
          "Biodiversity",
          "Ecology",
          "Nature conservation",
        ],
        highlight:
          "A relevant option for researchers working in biological sciences, environmental studies, biodiversity, botany, zoology, and ecology-focused research.",
        cta: "Check Suitability",
      },
      {
        id: "bioscan",
        name: "The Bioscan",
        badge: "Life Sciences Journal",
        meta: [{ label: "ISSN", value: "0973-7049" }],
        suitableFor:
          "Life Sciences, Biology, Environmental Science & Applied Biological Research",
        bestFor: [
          "Life sciences",
          "Biology",
          "Environmental science",
          "Microbiology",
          "Biotechnology",
          "Applied biological sciences",
        ],
        highlight:
          "A suitable option for researchers across life sciences, biology, environmental studies, and applied biological research. Current Web of Science status should be checked before final selection.",
        cta: "Check Current Status",
      },
      {
        id: "jft",
        name: "Journal of Fish Taxonomy",
        badge: "Zoological Record Indexed",
        meta: [{ label: "E-ISSN", value: "2458-942X" }],
        suitableFor:
          "Fish Taxonomy, Zoology, Ichthyology, Marine Biology & Freshwater Biology",
        bestFor: [
          "Fish taxonomy",
          "Ichthyology",
          "Marine biology",
          "Freshwater fish studies",
          "Systematics & phylogeny",
          "Biogeography of fishes",
        ],
        highlight:
          "A strong option for researchers working on fish taxonomy, systematics, phylogeny, freshwater and marine fishes, and zoological research.",
        cta: "Check Suitability",
      },
    ],
  },

  process: {
    heading: "Our Web of Science Publication Support Process",
    sub: "Simple, transparent and guided publication assistance — from your first draft to a tracked submission.",
    steps: [
      {
        title: "Share Your Paper",
        desc: "Send your manuscript, abstract, title, keywords, or research topic.",
      },
      {
        title: "Journal Suitability Check",
        desc: "We check your subject area, paper quality, indexing requirement, and publication goal.",
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
    heading: "Web of Science Support for Every Academic Requirement",
    sub: "Our Web of Science publication assistance is suitable for:",
    items: [
      "PhD scholars",
      "Research scholars",
      "Faculty members",
      "Professors",
      "Doctors & healthcare professionals",
      "Life science researchers",
      "Biology researchers",
      "Zoology researchers",
      "Environmental science researchers",
      "Medical researchers",
      "Independent authors",
      "University departments",
    ],
  },

  subjectAreas: {
    heading: "Multidisciplinary Web of Science Publication Assistance",
    sub: "We support research papers across multiple domains, including:",
    items: [
      "Medical & clinical research",
      "Diagnostic research",
      "Healthcare research",
      "Biomedical sciences",
      "Life sciences",
      "Botany",
      "Zoology",
      "Fish taxonomy",
      "Ichthyology",
      "Environmental science",
      "Ecology",
      "Biodiversity",
      "Microbiology",
      "Biotechnology",
      "Marine biology",
      "Freshwater biology",
      "Applied science research",
    ],
  },

  whyInscribe: {
    heading: "Support That Saves Time & Reduces Confusion",
    paragraphs: [
      "Choosing the right Web of Science journal can be confusing. Every journal has a different indexing coverage, manuscript scope, formatting rule, review process, and publication timeline.",
      "Inscribe IQ simplifies the process with expert guidance and structured publication support.",
    ],
    benefits: [
      "Web of Science journal guidance",
      "ESCI & Zoological Record options",
      "Subject-wise journal matching",
      "Medical & life science journal support",
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
      "Journal indexing, database coverage, publication timelines, and availability may change from time to time. Authors are advised to verify the latest journal status before final submission.",
    ],
  },

  leadForm: {
    heading: "Find the Right Web of Science Journal for Your Research",
    sub: "Share your details and our publication expert will help you check suitable Web of Science journal options for your paper.",
    categoryLabel: "Preferred Indexing",
    categoryOptions: ["ESCI", "Zoological Record", "DOAJ", "Embase", "Any"],
    subjectLabel: "Research Subject",
    submitCta: "Get Free Journal Recommendation",
  },

  faqs: [
    {
      q: "Do you help with Web of Science indexed journals?",
      a: "Yes, we provide journal selection support, manuscript preparation guidance, formatting support, submission assistance, and publication process guidance for suitable Web of Science journal options.",
    },
    {
      q: "What is ESCI?",
      a: "ESCI stands for Emerging Sources Citation Index. It is a Web of Science Core Collection index for journals that meet specific editorial and publishing standards.",
    },
    {
      q: "What is the Zoological Record?",
      a: "The Zoological Record is a Web of Science database focused on animal biology, zoology, taxonomy, and related biological literature.",
    },
    {
      q: "Can I publish medical or clinical research?",
      a: "Yes, we support suitable medical, clinical, diagnostic, biomedical, healthcare, and related research areas.",
    },
    {
      q: "Can I publish biology or life science research?",
      a: "Yes, we support life sciences, biology, botany, zoology, fish taxonomy, ecology, biodiversity, and environmental science research.",
    },
    {
      q: "How do I know which journal is suitable for my paper?",
      a: "Our team reviews your paper title, abstract, keywords, subject area, manuscript quality, and indexing requirement to suggest suitable journal options.",
    },
    {
      q: "Is publication guaranteed?",
      a: "No. Final acceptance depends on the journal's editorial board, peer review process, manuscript quality, originality, and subject fit.",
    },
    {
      q: "Can you help with formatting and reviewer comments?",
      a: "Yes, we can assist with journal formatting, plagiarism improvement guidance, revision support, and reviewer response preparation.",
    },
  ],

  finalCta: {
    heading: "Ready to Publish in a Web of Science Indexed Journal?",
    accent: "Web of Science Indexed Journal?",
    sub: "Get expert guidance for journal selection, manuscript preparation, submission support, and publication assistance.",
    primaryCta: "Book Free Consultation",
    secondaryCta: "Share Your Manuscript",
    contactLine:
      "Speak with an Inscribe IQ publication expert today and check suitable Web of Science journal options for your research.",
  },
};

export default webOfScience;
