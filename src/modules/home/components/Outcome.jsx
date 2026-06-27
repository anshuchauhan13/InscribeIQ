import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";

const OUTCOMES = [
  {
    id: 0,
    emoji: "🎓",
    category: "PhD / DBA",
    title: "Step Into the World as a Doctoral Scholar",
    description: "Guided by expert mentors through every stage — from proposal to viva — with full institutional support.",
    image: "/home/phd1.jpg",
  },
  {
    id: 1,
    emoji: "📚",
    category: "Publication Services",
    title: "Put Your Research in Front of the Right Academic Audience",
    description: "We navigate the submission process with you, targeting high-impact indexed journals worldwide.",
    image: "/home/graduationcapwithbooks.jpg",
  },
  {
    id: 2,
    emoji: "📝",
    category: "Thesis Support",
    title: "Submit Work That Reflects Your True Academic Ability",
    description: "Professional structuring, editing, and review to meet every institutional and scholarly standard.",
    image: "/home/writing2.jpg",
  },
  {
    id: 3,
    emoji: "🏅",
    category: "Honorary Doctorate",
    title: "Let Your Life's Work Receive the Title It Has Always Earned",
    description: "InscribeIQ connects accomplished individuals with accredited institutions across its global university network to nominate and facilitate the recognition of honorary doctorates that last a lifetime.",
    image: "/home/honary.jpg",
  },
  {
    id: 4,
    emoji: "🎯",
    category: "UG / PG Admissions",
    title: "Find the Programme That Actually Moves Your Career Forward",
    description: "Expert counselling and end-to-end application support for top universities across 50+ countries.",
    image: "/home/hero.jpg",
  },
  {
    id: 5,
    emoji: "📜",
    category: "Certification Programs",
    title: "Gain Credentials That Professionals in Your Industry Respect",
    description: "Industry-aligned certifications to keep you ahead in a constantly evolving professional landscape.",
    image: "/home/certification.jpg",
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
          Results That Speak for Themselves
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
                  className={`flex items-start gap-4 rounded-xl transition-all duration-300 max-w-[17rem] lg:max-w-none ${
                    isActive
                      ? "bg-white border border-light-blue/20 border-l-4 border-l-light-blue shadow-xl shadow-primary/8 p-5"
                      : "hover:bg-muted/50 p-4 border border-transparent"
                  }`}
                >
                  {/* Emoji icon bubble */}
                  <div
                    className={`hidden md:flex mt-0.5 h-11 w-11 shrink-0 items-center justify-center rounded-full text-xl transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-br from-blue to-light-blue shadow-md shadow-light-blue/30 scale-110"
                        : "bg-light-blue/10"
                    }`}
                  >
                    {outcome.emoji}
                  </div>

                  {/* Text + progress bar */}
                  <div className="flex-1 min-w-0">
                    <span className={`text-xs font-semibold uppercase tracking-wide transition-colors duration-300 ${isActive ? "text-light-blue" : "text-muted-foreground"}`}>
                      {outcome.category}
                    </span>
                    <h3
                      className={`mt-0.5 text-base font-semibold leading-snug transition-colors duration-300 ${
                        isActive ? "text-primary" : "text-foreground/50"
                      }`}
                    >
                      {outcome.title}
                    </h3>
                    {isActive && (
                      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                        {outcome.description}
                      </p>
                    )}
                    {/* Progress bar — only rendered for the active item */}
                    {isActive && (
                      <div className="mt-3 h-0.5 w-full overflow-hidden rounded-full bg-light-blue/15">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue to-light-blue"
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.1, ease: "linear" }}
                        />
                      </div>
                    )}
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