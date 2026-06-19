import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import noise from "@/assets/noise.webp";
import SectionLabel from "@/components/common/SectionLabel";

const DEFAULT_CAREERS = [
  {
    id: "ceo",
    title: "Chief Executive Officer",
    description:
      "Lead organizations with strategic vision and research-driven decision making.",
  },
  {
    id: "director",
    title: "Managing Director",
    description:
      "Oversee business growth, operations, and enterprise-wide transformation.",
  },
  {
    id: "consultant",
    title: "Business Consultant",
    description:
      "Provide evidence-based solutions to complex business challenges.",
  },
  {
    id: "strategy",
    title: "Strategy Consultant",
    description:
      "Shape long-term business strategy using advanced analytical frameworks.",
  },
  {
    id: "academic",
    title: "Academic Leadership",
    description:
      "Move into teaching, research, and executive education leadership roles.",
  },
  {
    id: "entrepreneur",
    title: "Entrepreneur",
    description:
      "Launch and scale ventures using doctoral-level business expertise.",
  },
];

function CareerCard({ title, description }) {
  return (
    <div className="group border border-[#ECE8F7] p-5 xl:p-6 2xl:p-8 transition-all duration-300 hover:bg-[#FAF9FF]">
      <h3 className="text-[14px] xl:text-[15px] 2xl:text-[17px] font-bold text-[#170545] mb-2 xl:mb-3">
        {title}
      </h3>
      <p className="text-xs xl:text-sm 2xl:text-base text-[#5B5A5D] leading-relaxed">
        {description}
      </p>

      <div className="mt-4 xl:mt-5 flex items-center gap-2 text-[#7A5EE9] text-xs xl:text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
        Learn More
        <ArrowRight className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
      </div>
    </div>
  );
}

const CareerOutcomes = ({
  tagline,
  heading,
  description,
  careers = DEFAULT_CAREERS,
  featuredImage,
  featuredBadge,
  featuredTitle,
  featuredDescription,
  primaryCta,
  secondaryCta,
  onPrimaryCta,
  onSecondaryCta,
  className,
}) => {
  return (
    <section className={cn("w-full py-12 lg:py-20 2xl:py-28", className)}>
      {/* Outer wrapper: constrain max width on very large screens, center the content */}
      <div className="w-full max-w-screen-2xl mx-auto  ">

        {/* ─── Mobile / Tablet Layout (< xl) ─── */}
        <div className="xl:hidden relative overflow-hidden bg-light-blue/30 rounded-sm">

          {/* Noise texture overlay */}
          <img
            src={noise}
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
            style={{ opacity: 0.8, mixBlendMode: "overlay", zIndex: 0 }}
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Header */}
            <div className="px-4 sm:px-8 md:px-12 py-8 sm:py-10 text-center sm:text-left">
              {/* <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7A5EE9]">
                {tagline}
              </span> */}
                <SectionLabel label={tagline} />

              <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-[#170545] leading-tight">
                {heading}
              </h2>

              <p className="mt-4 text-sm md:text-base leading-relaxed text-[#5B5A5D] max-w-2xl mx-auto sm:mx-0">
                {description}
              </p>
            </div>

            {/* Career Cards: 1 col on xs, 2 cols on sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {careers.map((career) => (
                <CareerCard
                  key={career.id}
                  title={career.title}
                  description={career.description}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ─── Desktop Editorial Layout (xl+) ─── */}
        <div className="hidden xl:block relative overflow-hidden min-h-[520px] 2xl:min-h-[620px] ">

          {/* Full Background Image */}
          <img
            src={featuredImage}
            alt={featuredTitle}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark overlay on exposed right strip */}
          <div className="absolute inset-0 bg-black/20" />

          <div
            className="
              absolute inset-y-0 left-0
              w-[75%]
              max-w-[1400px]
              backdrop-blur-md bg-white/65
              border-r border-white/40
            "
          >
            {/*
              Three-column grid inside the glass panel:
              - Col 1 (intro): fixed at 320px on xl, 380px on 2xl, 440px on 3xl+
              - Col 2 & 3 (cards): equal, take remaining space
            */}
            <div
              className="
                grid h-full
                grid-cols-[320px_1fr_1fr]
                xl:grid-cols-[320px_1fr_1fr]
                2xl:grid-cols-[400px_1fr_1fr]
                min-[1920px]:grid-cols-[460px_1fr_1fr]
                divide-x divide-white/30
              "
            >
              {/* Left: tagline + heading + description */}
              <div className="p-10 xl:p-12 2xl:p-16 flex flex-col justify-center">
                {/* <span className="text-sm font-bold uppercase tracking-[0.25em] text-light-blue">
                  {tagline}
                </span> */}
                  <SectionLabel label={tagline}/>

                <h2 className="mt-6 text-4xl xl:text-4xl 2xl:text-5xl font-bold leading-tight text-black">
                  {heading}
                </h2>

                <p className="mt-6 text-base 2xl:text-lg leading-relaxed text-[#5B5A5D]">
                  {description}
                </p>
              </div>

              {/* Career Cards — column 1 (first 3) */}
              <div className="flex flex-col divide-y divide-white/30">
                {careers.slice(0, 3).map((career) => (
                  <CareerCard
                    key={career.id}
                    title={career.title}
                    description={career.description}
                  />
                ))}
              </div>

              {/* Career Cards — column 2 (next 3) */}
              <div className="flex flex-col divide-y divide-white/30">
                {careers.slice(3, 6).map((career) => (
                  <CareerCard
                    key={career.id}
                    title={career.title}
                    description={career.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CareerOutcomes;