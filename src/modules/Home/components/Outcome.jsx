import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";

const OUTCOMES = [
  {
    id: 0,
    emoji: "🎓",
    category: "PhD / DBA",
    title: "Be Among the Elite 1% of Doctoral Scholars",
    description: "Guided by expert mentors through every stage — from proposal to viva — with full institutional support.",
    image: "https://picsum.photos/seed/phd-graduation/700/480",
  },
  {
    id: 1,
    emoji: "📚",
    category: "Publication Services",
    title: "Get Published in Journals That Influence Global Research",
    description: "We navigate the submission process with you, targeting high-impact indexed journals worldwide.",
    image: "https://picsum.photos/seed/academic-library/700/480",
  },
  {
    id: 2,
    emoji: "📝",
    category: "Thesis Support",
    title: "Submit Your Thesis with Confidence and Academic Excellence",
    description: "Professional structuring, editing, and review to meet every institutional and scholarly standard.",
    image: "https://picsum.photos/seed/thesis-writing/700/480",
  },
  {
    id: 3,
    emoji: "🏅",
    category: "Honorary Doctorate",
    title: "Earn Recognition for Your Lifetime Achievements",
    description: "Facilitated honorary doctorates through our global network of accredited and recognised universities.",
    image: "https://picsum.photos/seed/award-ceremony/700/480",
  },
  {
    id: 4,
    emoji: "🎯",
    category: "UG / PG Admissions",
    title: "Unlock New Career Opportunities Through Higher Education",
    description: "Expert counselling and end-to-end application support for top universities across 50+ countries.",
    image: "https://picsum.photos/seed/university-campus/700/480",
  },
  {
    id: 5,
    emoji: "📜",
    category: "Certification Programs",
    title: "Future-Proof Your Career with In-Demand Skills",
    description: "Industry-aligned certifications to keep you ahead in a constantly evolving professional landscape.",
    image: "https://picsum.photos/seed/certification-skills/700/480",
  },
];

function Outcome() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const itemRefs = useRef([]);
  const containerRef = useRef(null);

  // Tick the progress bar forward — 100 steps × 100 ms = 10 s per item
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 100);
    return () => clearInterval(interval);
  }, [active]);

  // Advance when progress completes
  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        setActive((prev) => (prev + 1) % OUTCOMES.length);
        setProgress(0);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  // Keep the active item centred in the horizontal scroll (mobile)
  useEffect(() => {
    const el = itemRefs.current[active];
    const container = containerRef.current;
    if (el && container) {
      const cRect = container.getBoundingClientRect();
      const eRect = el.getBoundingClientRect();
      container.scrollTo({
        left: el.offsetLeft - (cRect.width - eRect.width) / 2,
        behavior: "smooth",
      });
    }
  }, [active]);

  const handleClick = (index) => {
    setActive(index);
    setProgress(0);
  };

  return (
    <SectionViewer className="py-14 md:pt-20 pb-10">
      {/* Header */}
      <div className="flex flex-col gap-3 mb-12">
        <SectionLabel label="The InscribeIQ Advantage" />
        <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl xl:text-5xl leading-tight">
          Outcomes Only We Deliver
        </h2>
        <span className="h-1 w-28 rounded-full bg-light-blue" />
      </div>

      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left — interactive outcome list */}
        <div
          ref={containerRef}
          className="flex flex-row overflow-x-auto no-scrollbar scroll-smooth pb-2 lg:flex-col lg:overflow-visible lg:pb-0 gap-0"
        >
          {OUTCOMES.map((outcome, index) => {
            const isActive = active === index;
            return (
              <div
                key={outcome.id}
                ref={(el) => (itemRefs.current[index] = el)}
                className="shrink-0 cursor-pointer"
                onClick={() => handleClick(index)}
              >
                <div
                  className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300 max-w-[17rem] lg:max-w-none ${
                    isActive
                      ? "bg-muted border border-gray-100"
                      : "hover:bg-muted/60"
                  }`}
                >
                  {/* Emoji icon bubble */}
                  <div
                    className={`hidden md:flex mt-1 h-11 w-11 shrink-0 items-center justify-center rounded-full text-xl transition-all duration-300 ${
                      isActive
                        ? "bg-light-blue shadow-sm"
                        : "bg-light-blue/10"
                    }`}
                  >
                    {outcome.emoji}
                  </div>

                  {/* Text + progress bar */}
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {outcome.category}
                    </span>
                    <h3
                      className={`mt-0.5 text-base font-semibold leading-snug transition-colors duration-300 ${
                        isActive ? "text-primary" : "text-foreground/60"
                      }`}
                    >
                      {outcome.title}
                    </h3>
                    {isActive && (
                      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                        {outcome.description}
                      </p>
                    )}
                    {/* Progress bar */}
                    <div className="mt-3 h-0.5 w-full overflow-hidden rounded-full bg-border">
                      {isActive && (
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue to-light-blue"
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.1, ease: "linear" }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right — animated image */}
        <div className="relative order-first lg:order-last max-w-lg mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={OUTCOMES[active].image}
                alt={OUTCOMES[active].title}
                className="w-full rounded-2xl border border-gray-100 shadow-xl object-cover aspect-[4/3]"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionViewer>
  );
}

export default Outcome;
