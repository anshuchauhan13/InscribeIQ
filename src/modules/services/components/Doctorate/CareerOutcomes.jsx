import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import noise from "@/assets/noise.webp";

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
    <div className="group border border-[#ECE8F7] p-6 transition-all duration-300 hover:bg-[#FAF9FF]">
      <h3 className="text-[15px] font-bold text-[#170545] mb-3">{title}</h3>
      <p className="text-sm text-[#5B5A5D] leading-relaxed">{description}</p>

      <div className="mt-5 flex items-center gap-2 text-[#7A5EE9] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
        Learn More
        <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  );
}

const CareerOutcomes = ({
   tagline,
  heading,
  description,

  careers = [],

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
    <section className={cn("w-full py-12 lg:py-20", className)}>
      <div className="container ">
        {/* Mobile / Tablet Layout */}
       <div className="xl:hidden relative overflow-hidden bg-light-blue/30">
  
  {/* Noise Background */}
  <img
    src={noise}
    aria-hidden="true"
    className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
    style={{
      opacity: 0.8,
      mixBlendMode: "overlay",
      zIndex: 0,
    }}
  />

  {/* Content */}
  <div className="relative z-10 ">
    <div className="mb-6 text-center lg:text-left container px-4 py-8">
      <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7A5EE9]">
        {tagline}
      </span>

      <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#170545]">
        {heading}
      </h2>

      <p className="mt-4 text-sm md:text-base leading-relaxed text-[#5B5A5D] max-w-2xl mx-auto lg:mx-0">
        {description}
      </p>
    </div>

    <div className="grid  grid-cols-2">
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

        {/* Desktop Editorial Layout - Kept exactly as requested for large screens */}
        <div className="hidden xl:block relative overflow-hidden min-h-[520px]">
          {/* Full Background Image */}
          <img
            src={featuredImage}
            alt={featuredTitle}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Glass Panel - Fixed width on xl and above */}
          <div className="absolute inset-y-0 left-0 w-[75%]  backdrop-blur-md bg-white/75 border-r border-white/40">
            <div className="grid  grid-cols-[380px_1fr_1fr] divide-x divide-white/30">
              {/* Left Content */}
              <div className="p-10 lg:p-16 flex flex-col justify-center">
                <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#7A5EE9]">
                  {tagline}
                </span>

                <h2 className="mt-6 text-4xl xl:text-5xl font-bold leading-tight text-[#170545]">
                  {heading}
                </h2>

                <p className="mt-6 text-base leading-relaxed text-[#5B5A5D]">
                  {description}
                </p>
              </div>

              {/* Career Cards Column 1 */}
              <div className="flex flex-col divide-y divide-white/30">
                {careers.slice(0, 3).map((career) => (
                  <CareerCard
                    key={career.id}
                    title={career.title}
                    description={career.description}
                  />
                ))}
              </div>

              {/* Career Cards Column 2 */}
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