import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import noise from "@/assets/noise.webp";
import SectionViewer from "@/components/common/SectionViewer";

const EASE = [0.22, 0.61, 0.36, 1];

const fadeUp = (delay = 0, y = 22) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: EASE, delay },
});

const IMAGE_SHAPES = [
  "rounded-tl-3xl",
  "rounded-full",
  "rounded-b-[90px]",
  "rounded-tr-[64px] rounded-br-[64px] rounded-bl-[64px]",
];

const HeroSection = ({
  eyebrow,
  titleLine1,
  titleLine2,
  subheadline,
  badges = [],
  imageSrc1,
  imageSrc2,
  imageSrc3,
  imageSrc4,
  imageAlt1,
  imageAlt2,
  imageAlt3,
  imageAlt4,
  duration,
  location,
  credential,
  credentialLabel,
  breadcrumbs = [],
  onApply,
  onTalkToExpert,
  applyLabel = "Apply Now",
  expertLabel = "Talk to an Expert",
  className,
}) => {
  const images = [
    { src: imageSrc1, alt: imageAlt1 },
    { src: imageSrc2, alt: imageAlt2 },
    { src: imageSrc3, alt: imageAlt3 },
    { src: imageSrc4, alt: imageAlt4 },
  ];

  return (
    <section
      className={cn("relative w-full overflow-hidden text-primary-foreground", className)}
      style={{ background: "linear-gradient(160deg, #0C0E18 0%, #1a2235 50%, #242E3E 100%)" }}
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

      {/* Content */}
      <div className="relative z-10">
        <SectionViewer className="py-8 md:py-16">
          <div className="grid items-start gap-8 lg:gap-8 lg:grid-cols-2">

            {/* ── Left ── */}
            <div className="order-2 lg:order-1 space-y-6 lg:space-y-8">

              {/* Headline */}
              <motion.h1
                {...fadeUp(0)}
             className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight text-primary max-w-xl  leading-tight text-center lg:text-left text-slate-200" >
                {titleLine1 && <span>{titleLine1}</span>}
                {titleLine1 && titleLine2 && <br />}
                {titleLine2 && (
                  <span className="font-bold italic text-white  text-3xl md:text-4xl xl:text-5xl ">
                    {titleLine2}
                  </span>
                )}
              </motion.h1>

              {/* Subheadline */}
              {subheadline && (
                <motion.p
                  {...fadeUp(0.12)}
                  className="text-sm sm:text-base text-primary-foreground/70 leading-relaxed text-center lg:text-left max-w-2xl"
                >
                  {subheadline}
                </motion.p>
              )}

              {/* Badges */}
              {badges.length > 0 && (
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {badges.map((badge, i) => (
                    <motion.span
                      key={badge}
                      initial={{ opacity: 0, scale: 0.82 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.38, ease: EASE, delay: 0.22 + i * 0.07 }}
                      className="rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-1.5 text-xs font-medium text-sky-300 tracking-wide"
                    >
                      {badge}
                    </motion.span>
                  ))}
                </div>
              )}

              {/* Buttons */}
              <motion.div
                {...fadeUp(0.34)}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                {onApply && (
                  <Button
                    onClick={onApply}
                    size="lg"
                    className="rounded-full bg-white px-8 cursor-pointer py-6 text-base font-semibold text-black hover:bg-white/90 transition-all w-full sm:w-auto"
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
                    className="rounded-full border-white/30 bg-transparent px-8 py-6 text-base font-semibold text-white  cursor-pointer transition-all w-full sm:w-auto"
                  >
                    {expertLabel}
                    <ArrowRight size={16} />
                  </Button>
                )}
              </motion.div>
            </div>

            {/* ── Right — image grid ── */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
              className="order-1 lg:order-2 flex justify-center lg:justify-end pt-4 lg:pt-0"
            >
              <div className="relative">
                {/* Glow */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
                  className="absolute inset-0 rounded-3xl bg-sky-400/20 blur-3xl"
                />

                {/* Grid */}
                <div className="relative h-[240px] w-[240px] sm:h-[300px] sm:w-[300px] md:h-[300px] md:w-[300px] lg:h-[380px] lg:w-[380px] xl:h-[450px] xl:w-[450px] overflow-hidden">
                  <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-3">
                    {images.map(({ src, alt }, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.78 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.52, ease: EASE, delay: 0.25 + i * 0.1 }}
                        className={cn(
                          "relative overflow-hidden border border-white/90 shadow-md aspect-square",
                          IMAGE_SHAPES[i]
                        )}
                      >
                        <img
                          src={src}
                          alt={alt}
                          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Duration badge */}
                {duration && (
                  <motion.div
                    initial={{ opacity: 0, y: -12, scale: 0.85 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.45, ease: EASE, delay: 0.65 }}
                    className="absolute -right-3 -top-5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 text-sm md:text-base font-bold text-white shadow-[0_8px_32px_rgba(255,255,255,0.15)]"
                  >
                    {duration}
                  </motion.div>
                )}
              </div>
            </motion.div>

          </div>
        </SectionViewer>
      </div>
    </section>
  );
};

export default HeroSection;
