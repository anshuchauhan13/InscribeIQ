import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionViewer from '@/components/common/SectionViewer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import HeroImage from './HeroImage';

const AVATARS = [
  { initials: "RS", bg: "bg-blue" },
  { initials: "AP", bg: "bg-light-blue" },
  { initials: "KM", bg: "bg-primary" },
  { initials: "NJ", bg: "bg-muted-foreground" },
];

const EASE = [0.22, 0.61, 0.36, 1];

const SLIDES = [
  {
    badge: "10,000+ Scholars and Researchers Choose InscribeIQ",
    headline: (
      <>
        Trusted by{" "}
        <span className="text-light-blue">Researchers.</span>
        {" "}Recognised by{" "}
        <span className="text-light-blue">Universities.</span>
        {" "}Built for{" "}
        <span>Academic Success.</span>
      </>
    ),
    desc: "From doctoral admission and thesis writing to indexed journal publication and honorary doctorate facilitation. InscribeIQ supports serious scholars at every stage of their academic life.",
    cta1: "Begin Your Journey",
    cta2: "See What We Offer",
    imageVariant: 1,
  },
  {
    badge: "5,000+ Theses & Dissertations Delivered",
    headline: (
      <>
        Expert{" "}
        <span className="text-light-blue">Writing.</span>
        {" "}Zero{" "}
        <span className="text-light-blue">Plagiarism.</span>
        {" "}Delivered{" "}
        <span>On Time.</span>
      </>
    ),
    desc: "From thesis writing and dissertation support to research papers and beyond — our academic writing experts ensure your work meets the highest scholarly standards.",
    cta1: "Start Writing Today",
    cta2: "Explore Writing Services",
    imageVariant: 2,
  },
  {
    badge: "2,000+ Papers Published in Indexed Journals",
    headline: (
      <>
        Publish in{" "}
        <span className="text-light-blue">SCOPUS.</span>
        {" "}ABDC{" "}
        <span className="text-light-blue">Listed.</span>
        {" "}Research that{" "}
        <span>Gets Noticed.</span>
      </>
    ),
    desc: "Get your research published in internationally recognised indexed journals — SCOPUS, ABDC, Web of Science, and PubMed. We guide you from manuscript to acceptance.",
    cta1: "Publish Your Research",
    cta2: "View Publications",
    imageVariant: 3,
  },
];

const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir * 30 }),
  center: { opacity: 1, x: 0 },
  exit: (dir) => ({ opacity: 0, x: dir * -30 }),
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: EASE, delay },
});

function HeroSection() {
  const [[current, direction], setSlide] = useState([0, 0]);
  const [paused, setPaused] = useState(false);

  const prev = () =>
    setSlide(([c]) => [(c - 1 + SLIDES.length) % SLIDES.length, -1]);

  const next = () =>
    setSlide(([c]) => [(c + 1) % SLIDES.length, 1]);

  const goTo = (i) =>
    setSlide(([c]) => [i, i >= c ? 1 : -1]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setSlide(([c]) => [(c + 1) % SLIDES.length, 1]);
    }, 8500);
    return () => clearInterval(t);
  }, [paused]);

  const slide = SLIDES[current];

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Chevron buttons — outside SectionViewer ───────────────── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-1 md:left-3 top-[38%] sm:top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/80 backdrop-blur-sm border border-primary/10 shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-200"
      >
        <ChevronLeft className="size-4 md:size-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-1 md:right-3 top-[38%] sm:top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/80 backdrop-blur-sm border border-primary/10 shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-200"
      >
        <ChevronRight className="size-4 md:size-5" />
      </button>

      {/* ── Slides ────────────────────────────────────────────────── */}
      <AnimatePresence mode="wait" custom={direction} initial={false}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: EASE }}
        >
          <SectionViewer className="flex flex-col-reverse md:flex-row justify-center items-center gap-20 md:gap-10 py-16 md:py-10 lg:py-14 xl:py-24 !pb-16">

            {/* LEFT */}
            <div className="w-full md:w-1/2 flex flex-col gap-6">

              {/* Trust badge */}
              <motion.div
                {...fadeUp(0.05)}
                className="inline-flex items-center gap-2 self-start rounded-full bg-light-blue/10 px-4 py-1.5"
              >
                <span className="h-2 w-2 rounded-full bg-light-blue animate-pulse" />
                <span className="text-[11px] md:text-xs lg:text-sm font-medium text-light-blue">
                  {slide.badge}
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                {...fadeUp(0.15)}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold leading-[1.15] tracking-tight text-primary"
              >
                {slide.headline}
              </motion.h1>

              {/* Description */}
              <motion.p
                {...fadeUp(0.25)}
                className="text-sm lg:text-base xl:text-lg text-muted-foreground leading-relaxed max-w-lg"
              >
                {slide.desc}
              </motion.p>

              {/* CTAs */}
              <motion.div {...fadeUp(0.32)} className="flex flex-wrap items-center gap-3">
                <Button
                  size="lg"
                  variant="gradiant"
                  className="pl-7 pr-6 rounded-full w-full sm:w-fit"
                >
                  {slide.cta1}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="primary"
                  className="rounded-full border border-primary/10 px-7 w-full sm:w-fit"
                >
                  {slide.cta2}
                </Button>
              </motion.div>

              {/* Social proof */}
              <motion.div {...fadeUp(0.4)} className="flex items-center gap-4 pt-1">
                <div className="flex -space-x-3">
                  {AVATARS.map(({ initials, bg }) => (
                    <div
                      key={initials}
                      className={`h-9 w-9 rounded-full border-2 border-white ${bg} flex items-center justify-center text-white text-[11px] font-bold shrink-0`}
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-1.5 text-sm font-semibold text-foreground">4.9</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">500+ Happy Scholars</p>
                </div>
              </motion.div>

            </div>

            {/* RIGHT */}
            <div className="w-full md:w-1/2">
              <HeroImage variant={slide.imageVariant} />
            </div>

          </SectionViewer>
        </motion.div>
      </AnimatePresence>

      {/* ── Dots ──────────────────────────────────────────────────── */}
      <div className="flex justify-center items-center gap-2 pb-6">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-6 h-2 bg-primary"
                : "w-2 h-2 bg-primary/25 hover:bg-primary/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
