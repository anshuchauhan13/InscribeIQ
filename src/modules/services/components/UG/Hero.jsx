import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, GraduationCap, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionViewer from "@/components/common/SectionViewer";

const EASE = [0.22, 0.61, 0.36, 1];

const fadeUp = (delay = 0, y = 20) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.52, ease: EASE, delay },
});

const HighlightItem = ({ text, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: -12 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4, ease: EASE, delay }}
    className="flex items-center gap-2.5"
  >
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/30">
      <CheckCircle2 className="h-3.5 w-3.5 text-secondary-foreground" />
    </span>
    <span className="text-sm font-medium text-foreground">{text}</span>
  </motion.div>
);

const InfoBadge = ({ icon: Icon, text, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.82 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.45, ease: EASE, delay }}
    className={cn(
      "absolute flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-lg",
      className
    )}
  >
    <Icon className="h-4 w-4 text-blue" />
    <span className="text-xs font-medium text-foreground whitespace-nowrap">{text}</span>
  </motion.div>
);

const Hero = ({
  badgeText = "Admissions Open",
  title = "Become a Future Business Leader with a",
  highlightedText = "BBA Degree",
  description = "Develop leadership, management, and strategic thinking skills through industry-focused business education.",
  highlights = [
    "12+ University Options",
    "Industry-Oriented Curriculum",
    "Career-Focused Learning",
    "Placement-Oriented Programs",
  ],
  primaryButtonText = "Apply Now",
  secondaryButtonText = "Free Career Counselling",
  mainImage = "/service/hero2.png",
  secondaryImage = "/service/hero3.png",
  trustBadgeText = "12+ University Options",
  supportBadgeText = "Research-Oriented Learning",
  onPrimaryClick,
  onSecondaryClick,
}) => {
  const visibleHighlights = (highlights || []).filter(Boolean).slice(0, 4);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-light-blue/15 via-white to-white">
      <SectionViewer className="py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* ── LEFT ── */}
          <div className="max-w-4xl">
            {/* Badge */}
            {badgeText && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 mb-6"
              >
                <ShieldCheck className="h-4 w-4 text-primary-foreground" />
                <span className="text-sm font-medium text-primary-foreground">{badgeText}</span>
              </motion.div>
            )}

            {/* Title */}
            <motion.h1
              {...fadeUp(0.1, 26)}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold leading-tight tracking-tight text-foreground"
            >
              {title}{" "}
              <span className="text-blue relative inline-block">
                {highlightedText}
                <svg
                  className="absolute -bottom-5 left-0 w-full"
                  viewBox="0 0 200 20"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M5 15C50 5 150 5 195 15"
                    stroke="#d2fa4d"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Description */}
            {description && (
              <motion.p
                {...fadeUp(0.22)}
                className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed"
              >
                {description}
              </motion.p>
            )}

            {/* Highlights grid */}
            {visibleHighlights.length > 0 && (
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                {visibleHighlights.map((item, index) => (
                  <HighlightItem key={index} text={item} delay={0.32 + index * 0.07} />
                ))}
              </div>
            )}

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.48)}
              className="flex flex-wrap items-center gap-3 mt-9"
            >
              <Button
                size="lg"
                variant="gradiant"
                onClick={onPrimaryClick}
                className="rounded-full px-8"
              >
                {primaryButtonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={onSecondaryClick}
                className="rounded-full border-primary/30 text-primary hover:bg-primary/5 px-7"
              >
                {secondaryButtonText}
              </Button>
            </motion.div>
          </div>

          {/* ── RIGHT — visuals ── */}
          <div className="relative flex justify-center items-center min-h-[420px] lg:min-h-[500px]">

            {/* Main capsule image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.15 }}
              className="relative"
            >
              <div className="bg-secondary/40 w-[260px] h-[360px] md:w-[320px] md:h-[440px] rounded-[160px] overflow-hidden relative shadow-xl">
                <img
                  src={mainImage}
                  alt="Student pursuing a degree"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 border-[3px] border-primary/15 rounded-[160px] translate-x-4 -translate-y-3" />
            </motion.div>

            {/* Secondary circular image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 16 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.3 }}
              className="absolute bottom-4 right-0 md:right-6"
            >
              <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-blue/10 overflow-hidden relative shadow-lg border-4 border-background">
                <img
                  src={secondaryImage}
                  alt="Classroom"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Info badges */}
            {trustBadgeText && (
              <InfoBadge
                icon={GraduationCap}
                text={trustBadgeText}
                className="top-6 right-0 md:right-2"
                delay={0.45}
              />
            )}
            {supportBadgeText && (
              <InfoBadge
                icon={ShieldCheck}
                text={supportBadgeText}
                className="bottom-28 left-0 md:left-2"
                delay={0.55}
              />
            )}
          </div>

        </div>
      </SectionViewer>
    </section>
  );
};

export default Hero;
