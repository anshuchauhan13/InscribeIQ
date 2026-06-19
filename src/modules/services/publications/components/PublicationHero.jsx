import { motion } from "motion/react";
import { ArrowRight, BadgeCheck, Quote, Sparkles } from "lucide-react";
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

// The hero "publication" visual — a featured journal card with floating
// indexing badges. Pure CSS/SVG so it always renders crisply (no image deps).
function FeaturedJournalCard({ featured, ServiceIcon }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, rotate: 1.5 }}
      animate={{ opacity: 1, x: 0, rotate: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      className="relative mx-auto w-full max-w-md"
    >
      {/* Soft glow behind the stack */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-light-blue/15 blur-3xl"
      />

      {/* Back card (depth) */}
      <div className="absolute -right-3 -top-3 h-full w-full rounded-3xl border border-light-blue/20 bg-white/50 shadow-sm" />
      <div className="absolute -left-3 top-4 h-full w-full rounded-3xl border border-light-blue/10 bg-white/30" />

      {/* Front card */}
      <div className="relative overflow-hidden rounded-3xl border border-light-blue/20 bg-white shadow-xl shadow-light-blue/10">
        {/* Header band */}
        <div
          className="relative px-6 py-5"
          style={{
            background:
              "linear-gradient(135deg, #170545 0%, #320F8C 55%, #6B52F9 100%)",
          }}
        >
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold tracking-wide text-white backdrop-blur-sm">
              <Sparkles className="h-3 w-3 text-secondary" />
              {featured.badge}
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white">
              <ServiceIcon className="h-4.5 w-4.5" />
            </span>
          </div>
          <p className="mt-4 text-[11px] uppercase tracking-widest text-white/55">
            Featured Journal Option
          </p>
          <h3 className="mt-1 text-lg font-bold leading-snug text-white">
            {featured.name}
          </h3>
        </div>

        {/* Body */}
        <div className="space-y-4 px-6 py-5">
          <div className="flex items-start gap-2.5">
            <Quote className="mt-0.5 h-4 w-4 shrink-0 text-light-blue" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              {featured.field}
            </p>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-muted px-4 py-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                ISSN
              </p>
              <p className="text-sm font-bold text-primary">{featured.issn}</p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/25 px-3 py-1 text-[11px] font-bold text-secondary-foreground">
              <BadgeCheck className="h-3.5 w-3.5" />
              Indexed
            </span>
          </div>

          <div className="flex items-center gap-2 border-t border-border pt-4">
            <div className="flex -space-x-2">
              {["#320F8C", "#6B52F9", "#7A5EE9"].map((c) => (
                <span
                  key={c}
                  className="h-6 w-6 rounded-full border-2 border-white"
                  style={{ background: c }}
                />
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              Reviewed by our publication experts
            </p>
          </div>
        </div>
      </div>

      {/* Floating mini badge */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute -bottom-5 -left-5 flex items-center gap-2 rounded-2xl border border-border bg-white px-4 py-3 shadow-lg shadow-primary/10"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/30 text-secondary-foreground">
          <BadgeCheck className="h-4 w-4" />
        </span>
        <div className="leading-tight">
          <p className="text-sm font-bold text-primary">Verified</p>
          <p className="text-[10px] text-muted-foreground">Journal status</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PublicationHero({ data }) {
  const navigate = useNavigate();
  const { hero, icon: ServiceIcon } = data;

  return (
    <div className="relative w-full overflow-hidden light-gradiant">
      {/* Ambient glow */}
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
              <span className="relative inline-block text-light-blue">
                {hero.titleAccent}
                <span className="absolute left-0 -bottom-1 h-[4px] w-full rounded-full bg-light-blue/70" />
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
              className="max-w-xl border-l-2 border-secondary pl-3 text-sm font-medium text-primary"
            >
              {hero.tagline}
            </motion.p>

            {/* CTAs */}
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
                <a href="#find-journal">{hero.secondaryCta}</a>
              </Button>
            </motion.div>

            {/* Highlight chips */}
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
                  <BadgeCheck className="h-3.5 w-3.5 text-light-blue" />
                  {h}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — featured journal visual */}
          <div className="relative">
            <FeaturedJournalCard featured={hero.featured} ServiceIcon={ServiceIcon} />
          </div>
        </div>
      </SectionViewer>
    </div>
  );
}
