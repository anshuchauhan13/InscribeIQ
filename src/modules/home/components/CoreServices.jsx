import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import SectionLabel from "@/components/common/SectionLabel";
import SectionViewer from "@/components/common/SectionViewer";

const SERVICES = [
  {
    title: "PhD / DBA Programs",
    description:
      "Doctoral support that covers every stage from choosing your research topic and writing your proposal to clearing your final viva, with expert mentors beside you throughout.",
    accent: "bg-blue/10 text-blue",
    image: "/home/phd1.jpg",
  },
  {
    title: "Publication Services",
    description:
      "Research that deserves to be read deserves the right journal. We support you through editing, formatting, and submission to Scopus, UGC, and Web of Science-indexed publications.",
    accent: "bg-light-blue/10 text-light-blue",
    image: "/home/hero-3.jpg",
  },
  {
    title: "Thesis Writing",
    description:
      "Structured, chapter-wise writing support with academic editing, plagiarism reduction, and formatting aligned precisely to your university requirements.",
    accent: "bg-primary/10 text-primary",
    image: "/home/graduationcapwithbooks.jpg",
  },
  {
    title: "Honorary Doctorate",
    description:
      "For individuals whose contributions to their field, community, or society have been exceptional. We facilitate the nomination process with accredited institutions worldwide.",
    accent: "bg-secondary/40 text-blue",
    image: "/home/honary.jpg",
  },
  {
    title: "UG / PG Admissions",
    description:
      "Personalised guidance to secure your seat at the right university, in the right programme, across India and internationally, in any discipline.",
    accent: "bg-blue/10 text-blue",
    image: "/service/BTech-hero2.jpg",
  },
  {
    title: "Certification Programs",
    description:
      "Short, focused, industry-relevant certification courses for working professionals who want to grow faster and stay ahead in their domain.",
    accent: "bg-light-blue/10 text-light-blue",
    image: "/home/certification.jpg",
  },
];

const EASE = [0.22, 0.61, 0.36, 1];

const headerVar = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const gridContainerVar = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const cardVar = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const ServiceCard = ({ icon: Icon, title, description, accent, image }) => (
  <motion.div variants={cardVar} className="group flex flex-col gap-3 cursor-pointer">
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
  </motion.div>
);

export default function CoreServices() {
  return (
    <SectionViewer className="py-16 md:py-24">
      <div className="flex flex-col gap-12">

        {/* Header */}
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-3 items-start"
        >
          <motion.div variants={headerVar}>
            <SectionLabel label="Core Services" />
          </motion.div>
          <motion.div
            variants={headerVar}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 w-full"
          >
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight text-primary max-w-xl leading-tight">
              One Platform.{" "}
              <span className="text-light-blue">Six Paths</span>{" "}
              to Academic Success.
            </h2>
            <p className="text-base text-muted-foreground max-w-sm leading-relaxed">
              Each service is built for a specific stage of your academic journey, so you get focused support exactly where you need it.
            </p>
          </motion.div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={gridContainerVar}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </motion.div>

      </div>
    </SectionViewer>
  );
}
