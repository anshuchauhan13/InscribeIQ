import { motion } from "motion/react";
import { ArrowRight, Check, PenLine, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";
import Breadcrumbs from "@/components/common/Breadcrumbs";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

// Default hero portrait — overridable per dataset via `hero.image`.
const DEFAULT_IMAGE = "/service/arts.jpg";

// Writing hero visual: an arch-framed portrait of a scholar at work, with the
// service's live "draft" data floating over it as glass cards. The arch shape +
// lime/editing motifs keep it distinct from the UG capsule hero and from the
// publication hero's rectangular journal card.
function WritingVisual({ draft, image, ServiceIcon }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
      className="relative mx-auto w-full max-w-[19rem] sm:max-w-sm lg:mr-2"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-light-blue/15 blur-3xl"
      />

      {/* Offset arch outline behind the photo — adds depth + the lime accent */}
      <div
        aria-hidden
        className="absolute inset-0 -z-0 translate-x-4 translate-y-4 rounded-t-[140px] rounded-b-[2rem] border-2 border-secondary/60"
      />

      {/* Arch photo */}
      <div className="relative overflow-hidden rounded-t-[140px] rounded-b-[2rem] border border-white/70 shadow-xl shadow-light-blue/20">
        <img
          src={image}
          alt="Research scholar working on academic writing"
          className="h-[420px] w-full object-cover object-[50%_22%] sm:h-[460px]"
          loading="eager"
          decoding="async"
        />
        {/* Soft top scrim so the floating pill stays legible */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent"
        />
      </div>

      {/* Floating "live editing" pill — top right */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute -right-3 top-7 flex items-center gap-2 rounded-2xl border border-border bg-white/90 px-3.5 py-2.5 shadow-lg shadow-primary/10 backdrop-blur-sm"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-white">
          <PenLine className="h-3.5 w-3.5" />
        </span>
        <div className="leading-tight">
          <p className="flex items-center gap-1 text-xs font-bold text-primary">
            {draft.docType}
            <motion.span
              aria-hidden
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1.1, ease: "easeInOut" }}
              className="inline-block h-3 w-0.5 bg-light-blue"
            />
          </p>
          <p className="text-[10px] text-muted-foreground">Live editing</p>
        </div>
      </motion.div>

      {/* Floating progress card (glass) — bottom left */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.6 }}
        className="absolute -bottom-6 -left-3 w-[15rem] rounded-2xl border border-white/70 bg-white/85 p-4 shadow-xl shadow-primary/10 backdrop-blur-md sm:-left-6"
      >
        <div className="mb-2.5 flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-secondary/30 text-secondary-foreground">
            <ServiceIcon className="h-3.5 w-3.5" />
          </span>
          <p className="text-xs font-bold text-primary">{draft.title}</p>
        </div>

        <div className="mb-1.5 flex items-center justify-between text-[10px] font-semibold text-muted-foreground">
          <span>{draft.progressLabel}</span>
          <span>{draft.progressEnd}</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${draft.progress}%` }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.9 }}
            className="h-full rounded-full bg-gradient-to-r from-light-blue to-[#6B52F9]"
          />
        </div>

        {/* Chapter chips — completed vs in-progress */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {draft.chapters.map((c, i) => {
            const done = i < draft.chapters.length - 1;
            return (
              <span
                key={c}
                className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-semibold ${
                  done
                    ? "bg-secondary/25 text-secondary-foreground"
                    : "bg-light-blue/10 text-light-blue"
                }`}
              >
                {done && <Check className="h-2.5 w-2.5" strokeWidth={3} />}
                {c}
              </span>
            );
          })}
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
              {/* <Breadcrumbs
                className="mb-4"
                items={[
                  { label: "Services", to: "/services" },
                  { label: "Writing" },
                  { label: data.name },
                ]}
              /> */}
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

          {/* Right — arch-framed portrait visual */}
          <div className="relative">
            <WritingVisual
              draft={hero.draft}
              image={hero.image || DEFAULT_IMAGE}
              ServiceIcon={ServiceIcon}
            />
          </div>
        </div>
      </SectionViewer>
    </div>
  );
}
