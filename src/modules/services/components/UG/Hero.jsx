import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, GraduationCap, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";


const HighlightItem = ({ text }) => (
  <div className="flex items-center gap-2.5">
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/30">
      <CheckCircle2 className="h-3.5 w-3.5 text-secondary-foreground" />
    </span>
    <span className="text-sm font-medium text-foreground">{text}</span>
  </div>
);


const InfoBadge = ({ icon: Icon, text, className }) => (
  <div
    className={cn(
      "absolute flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-lg",
      className
    )}
  >
    <Icon className="h-4 w-4 text-blue" />
    <span className="text-xs font-medium text-foreground whitespace-nowrap">{text}</span>
  </div>
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
  // Edge case: cap highlights at 4 so the 2x2 grid never breaks.
  const visibleHighlights = (highlights || []).filter(Boolean).slice(0, 4);

  return (
  <section className="relative overflow-hidden bg-gradient-to-b from-light-blue/15 via-white to-white">
      <div className="container mx-auto px-5 md:px-12 lg:px-16 py-8 md:py-16 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 ">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            {badgeText && (
              <div className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 mb-6">
                <ShieldCheck className="h-4 w-4 text-primary-foreground" />
                <span className="text-sm font-medium text-primary-foreground">
                  {badgeText}
                </span>
              </div>
            )}

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-foreground  ">
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
            </h1>

            {description && (
              <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">
                {description}
              </p>
            )}

            {/* Highlights — 2x2 grid */}
            {visibleHighlights.length > 0 && (
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                {visibleHighlights.map((item, index) => (
                  <HighlightItem key={index} text={item} />
                ))}
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mt-9">
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
            </div>
          </motion.div>

          {/* RIGHT — VISUAL */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative flex justify-center items-center min-h-[420px] lg:min-h-[500px]"
          >
            {/* Main capsule image */}
            <div className="relative">
              <div className="bg-secondary/40 w-[260px] h-[360px] md:w-[320px] md:h-[440px] rounded-[160px] overflow-hidden relative shadow-xl">
                <img
                  src={mainImage}
                  alt="Student pursuing a BBA degree"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 border-[3px] border-primary/15 rounded-[160px] translate-x-4 -translate-y-3" />
            </div>

            {/* Secondary circular image */}
            <div className="absolute bottom-4 right-0 md:right-6">
              <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-blue/10 overflow-hidden relative shadow-lg border-4 border-background">
                <img
                  src={secondaryImage}
                  alt="Business administration classroom"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Static info badges — no motion, for a calmer feel */}
            {trustBadgeText && (
              <InfoBadge
                icon={GraduationCap}
                text={trustBadgeText}
                className="top-6 right-0 md:right-2"
              />
            )}

            {supportBadgeText && (
              <InfoBadge
                icon={ShieldCheck}
                text={supportBadgeText}
                className="bottom-28 left-0 md:left-2"
              />
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;