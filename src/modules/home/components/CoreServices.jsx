import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/common/SectionLabel";
import SectionViewer from "@/components/common/SectionViewer";

const SERVICES = [
  {
    title: "PhD / DBA Programs",
    description:
      "End-to-end doctoral guidance — from research topic selection and proposal writing to final viva defence, backed by domain-expert mentors.",
    accent: "bg-blue/10 text-blue",
    image: "https://picsum.photos/seed/phd-research/800/450",
  },
  {
    title: "Publication Services",
    description:
      "Get your research published in Scopus, UGC, or Web of Science indexed journals with full editorial, formatting, and submission support.",
    accent: "bg-light-blue/10 text-light-blue",
    image: "https://picsum.photos/seed/journal-publish/800/450",
  },
  {
    title: "Thesis Writing",
    description:
      "Structured thesis writing, chapter-wise editing, plagiarism reduction, and formatting aligned to your university guidelines.",
    accent: "bg-primary/10 text-primary",
    image: "https://picsum.photos/seed/thesis-writing/800/450",
  },
  {
    title: "Honorary Doctorate",
    description:
      "Facilitating globally recognised honorary doctorate nominations for distinguished achievers across diverse fields of human achievement.",
    accent: "bg-secondary/40 text-blue",
    image: "https://picsum.photos/seed/honorary-degree/800/450",
  },
  {
    title: "UG / PG Admissions",
    description:
      "Personalised admissions consulting to secure seats at top universities — domestically and internationally — across all disciplines.",
    accent: "bg-blue/10 text-blue",
    image: "https://picsum.photos/seed/university-campus/800/450",
  },
  {
    title: "Certification Programs",
    description:
      "Industry-aligned certification courses built for working professionals, designed to accelerate career growth and domain expertise.",
    accent: "bg-light-blue/10 text-light-blue",
    image: "https://picsum.photos/seed/certification-course/800/450",
  },
];

const ServiceCard = ({ icon: Icon, title, description, accent, image }) => (
  <div className="group flex flex-col gap-3 cursor-pointer">
    {/* Image / Placeholder */}
    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-muted flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
      {image ? (
        <img src={image} alt={title} className="w-full h-full object-cover" />
      ) : (
        <div className={`flex items-center justify-center h-16 w-16 rounded-2xl ${accent}`}>
          <Icon className="h-8 w-8" />
        </div>
      )}
    </div>

    {/* Text */}
    <div className="flex flex-col gap-1.5">
      <h3 className="text-lg font-semibold text-foreground tracking-tight group-hover:text-light-blue transition-colors duration-200">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
      <span className="inline-flex items-center gap-1 text-sm font-medium text-light-blue mt-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
        Learn more <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </div>
  </div>
);

export default function CoreServices() {
  return (
    <SectionViewer className="py-16 md:py-24">
      <div className="flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-3 items-start">
          <SectionLabel label="Core Services" />
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 w-full">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight text-primary max-w-xl leading-tight">
              Everything Scholars Need,{" "}
              <span className="text-light-blue">Under One Roof</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-sm leading-relaxed">
              From doctoral research to global publication — our six core pillars cover every stage of your academic journey.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

      </div>
    </SectionViewer>
  );
}
