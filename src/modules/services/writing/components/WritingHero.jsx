import { motion } from "motion/react";
import { ArrowRight, Check, PenLine, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

// Hero "draft document" mock — a manuscript being written/edited, with a
// chapter checklist and a Topic → Submission progress bar. Pure CSS, so it
// reads as a writing workspace (distinct from the publication journal card).
function DraftDocument({ draft, ServiceIcon }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, rotate: -1.5 }}
      animate={{ opacity: 1, x: 0, rotate: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      className="relative mx-auto w-full max-w-md"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-light-blue/15 blur-3xl"
      />

      {/* Document sheet */}
      <div className="relative overflow-hidden rounded-3xl border border-border bg-white shadow-xl shadow-light-blue/10">
        {/* Window bar */}
        <div className="flex items-center justify-between border-b border-border bg-muted/60 px-5 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-light-blue/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-light-blue">
            <ServiceIcon className="h-3 w-3" />
            {draft.docType}
          </span>
        </div>

        {/* Body */}
        <div className="space-y-5 px-6 py-6">
          {/* Title + writing lines */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-primary">{draft.title}</h3>
              <motion.span
                aria-hidden
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1.1, ease: "easeInOut" }}
                className="inline-block h-4 w-0.5 bg-light-blue"
              />
            </div>
            <div className="h-2 w-full rounded-full bg-muted" />
            <div className="h-2 w-11/12 rounded-full bg-muted" />
            <div className="h-2 w-9/12 rounded-full bg-muted" />
          </div>

          {/* Chapter checklist */}
          <div className="space-y-2 rounded-2xl bg-muted/50 p-4">
            {draft.chapters.map((c, i) => (
              <div key={c} className="flex items-center gap-2.5">
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full ${
                    i < draft.chapters.length - 1
                      ? "bg-secondary/30 text-secondary-foreground"
                      : "border-2 border-light-blue/40 text-light-blue"
                  }`}
                >
                  {i < draft.chapters.length - 1 ? (
                    <Check className="h-3 w-3" strokeWidth={3} />
                  ) : (
                    <span className="h-1.5 w-1.5 rounded-full bg-light-blue" />
                  )}
                </span>
                <span className="text-sm font-medium text-primary/80">{c}</span>
              </div>
            ))}
          </div>

          {/* Progress */}
          <div>
            <div className="mb-1.5 flex items-center justify-between text-[11px] font-semibold text-muted-foreground">
              <span>{draft.progressLabel}</span>
              <span>{draft.progressEnd}</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${draft.progress}%` }}
                transition={{ duration: 1.1, ease: "easeOut", delay: 0.5 }}
                className="h-full rounded-full bg-gradient-to-r from-light-blue to-[#6B52F9]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating "editing" badge */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute -bottom-5 -left-5 flex items-center gap-2 rounded-2xl border border-border bg-white px-4 py-3 shadow-lg shadow-primary/10"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
          <PenLine className="h-4 w-4" />
        </span>
        <div className="leading-tight">
          <p className="text-sm font-bold text-primary">Expert editing</p>
          <p className="text-[10px] text-muted-foreground">Structure & language</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function WritingHero({ data }) {
  const navigate = useNavigate();
  const { hero, icon: ServiceIcon } = data;

  return (
    <div className="relative w-full overflow-hidden light-gradiant">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-light-blue/15 blur-[110px]"
      />

      <SectionViewer className="inter relative z-10 py-14 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left — content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-5"
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }}>
              <SectionLabel label={hero.label} />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl xl:text-5xl"
            >
              {hero.titleLead}{" "}
              {/* highlighter-marker accent — evokes editing */}
              <span className="relative inline-block">
                <span className="absolute inset-x-0 bottom-1 -z-0 h-3 -rotate-1 bg-secondary/60 md:h-4" />
                <span className="relative z-10 text-primary">{hero.titleAccent}</span>
              </span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col gap-3"
            >
              {hero.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base"
                >
                  {p}
                </p>
              ))}
            </motion.div>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="max-w-xl border-l-2 border-light-blue pl-3 text-sm font-medium text-primary"
            >
              {hero.tagline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center"
            >
              <Button
                variant="gradiant"
                size="lg"
                className="rounded-full pl-7 pr-6 font-semibold"
                onClick={() => navigate("/consultation")}
              >
                {hero.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                asChild
                variant="primary"
                size="lg"
                className="rounded-full px-6 font-semibold"
              >
                <a href="#writing-form">{hero.secondaryCta}</a>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-wrap gap-2 pt-3"
            >
              {hero.highlights.map((h) => (
                <span
                  key={h}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-primary shadow-sm shadow-primary/5 md:text-xs"
                >
                  <Sparkles className="h-3.5 w-3.5 text-light-blue" />
                  {h}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — draft document visual */}
          <div className="relative">
            <DraftDocument draft={hero.draft} ServiceIcon={ServiceIcon} />
          </div>
        </div>
      </SectionViewer>
    </div>
  );
}
