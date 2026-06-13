import {
  MapPin,
  Clock,
  FileText,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import noise from "@/assets/noise.webp";

const HeroSection = ({
  // Left side
  eyebrow,
  titleLine1,
  titleLine2,
  subheadline,
  badges = [],

  // Right side images
  imageSrc1,
  imageSrc2,
  imageSrc3,
  imageSrc4,
  imageAlt1,
  imageAlt2,
  imageAlt3,
  imageAlt4,
  duration,

  // Meta info row (optional — pass null/undefined to hide)
  location,
  credential,
  credentialLabel,

  // Breadcrumb
  breadcrumbs = [],

  // Buttons
  onApply,
  onTalkToExpert,
  applyLabel = "Apply Now",
  expertLabel = "Talk to an Expert",

  className,
}) => {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden text-primary-foreground",
        className,
      )}
      style={{
        background:
          "linear-gradient(160deg, #0C0E18 0%, #1a2235 50%, #242E3E 100%)",
      }}
    >
      {/* Noise overlay */}
      <img
        src={noise}
        aria-hidden="true"
        className="pointer-events-none select-none"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.35,
          mixBlendMode: "overlay",
          zIndex: 0,
        }}
      />

      {/* All content above noise */}
      <div className="relative z-10">

        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <div className="pt-4">
            <div className="container">
              <div className="inline-flex flex-wrap items-center gap-1.5 rounded-r-full bg-muted-foreground/80 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm text-primary-foreground/80 max-w-[90vw]">
                {breadcrumbs.map((crumb, index) => (
                  <div key={index} className="flex items-center gap-1.5 min-w-0">
                    {index > 0 && <ChevronRight className="h-3 w-3 shrink-0" />}
                    <span
                      className={cn(
                        "transition-colors hover:text-primary-foreground",
                        index < breadcrumbs.length - 1 && "hidden sm:inline",
                        index === breadcrumbs.length - 1 &&
                          "font-semibold text-white truncate max-w-[55vw] sm:max-w-none",
                      )}
                    >
                      {crumb}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Hero Content */}
        <div className="container mx-auto px-5 md:px-16 lg:px-20 py-8 md:py-16 lg:py-16">
          <div className="grid items-center gap-8 lg:gap-8 lg:grid-cols-2">

            {/* Left Side */}
            <div className="order-2 lg:order-1 space-y-6 lg:space-y-8">

            

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-5xl leading-tight font-semibold tracking-tight text-center lg:text-left text-slate-200">
                {titleLine1 && <span>{titleLine1}</span>}
                {titleLine1 && titleLine2 && <br />}
                {titleLine2 && (
                  <span className="font-bold italic text-white text-3xl sm:text-5xl md:text-5xl lg:text-6xl">
                    {titleLine2}
                  </span>
                )}
              </h1>

              {/* Subheadline */}
              {subheadline && (
                <p className="text-sm sm:text-base text-primary-foreground/70 leading-relaxed text-center lg:text-left max-w-lg">
                  {subheadline}
                </p>
              )}

              {/* Highlight Badges */}
              {badges.length > 0 && (
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-1.5 text-xs font-medium text-sky-300 tracking-wide"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {onApply && (
                  <Button
                    onClick={onApply}
                    size="lg"
                    className="rounded-full bg-white px-8 py-6 text-base font-semibold text-black hover:bg-white/90 transition-all w-full sm:w-auto"
                  >
                    {applyLabel}
                    <ArrowRight size={16} />
                  </Button>
                )}
                {onTalkToExpert && (
                  <Button
                    variant="outline"
                    onClick={onTalkToExpert}
                    size="lg"
                    className="rounded-full border-white/30 bg-transparent px-8 py-6 text-base font-semibold text-white hover:bg-white/10 transition-all w-full sm:w-auto"
                  >
                    {expertLabel}
                    <ArrowRight size={16} />
                  </Button>
                )}
              </div>

            
            </div>

            {/* Right Side — unchanged */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end pt-4 lg:pt-0">
              <div className="relative">
                <div className="absolute inset-0 scale-95 rounded-3xl bg-sky-400/20 blur-3xl" />

                <div className="relative h-[240px] w-[240px] sm:h-[300px] sm:w-[300px] md:h-[300px] md:w-[300px] lg:h-[380px] lg:w-[380px] xl:h-[450px] xl:w-[450px] overflow-hidden">
                  <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-3">
                    <div className="relative overflow-hidden rounded-tl-3xl border border-white/90 shadow-md aspect-square">
                      <img src={imageSrc1} alt={imageAlt1} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                    </div>
                    <div className="relative overflow-hidden rounded-full border border-white/90 shadow-md aspect-square">
                      <img src={imageSrc2} alt={imageAlt2} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                    </div>
                    <div className="relative overflow-hidden rounded-b-[90px] border border-white/90 shadow-md aspect-square">
                      <img src={imageSrc3} alt={imageAlt3} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                    </div>
                    <div className="relative overflow-hidden rounded-tr-[64px] rounded-br-[64px] rounded-bl-[64px] border border-white/90 shadow-md aspect-square">
                      <img src={imageSrc4} alt={imageAlt4} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                    </div>
                  </div>
                </div>

                {/* Duration Badge */}
                {duration && (
                  <div className="absolute -right-3 -top-5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 text-sm md:text-base font-bold text-white shadow-[0_8px_32px_rgba(255,255,255,0.15)]">
                    {duration}
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;