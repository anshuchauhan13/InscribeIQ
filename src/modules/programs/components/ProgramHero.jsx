import { motion } from "motion/react";
import { ArrowRight, BadgeCheck, Clock, Award, Download, CalendarCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";
import Breadcrumbs from "@/components/common/Breadcrumbs";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

// Hero visual — a tall framed program portrait with stacked depth cards, a
// category badge, a glass "certificate" panel overlapping the base, and a
// floating duration stamp. Mirrors the publication hero language (purple glow,
// rounded frame) so program pages feel native to the brand.
function HeroVisual({ image, title, category, duration, Icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
      className="relative mx-auto w-full max-w-[20rem] sm:max-w-sm lg:mr-2"
    >
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-light-blue/15 blur-3xl"
      />
      {/* Depth cards */}
      <div
        aria-hidden
        className="absolute -right-3 -top-3 h-full w-full rounded-[2rem] border border-light-blue/20 bg-white/40"
      />
      <div
        aria-hidden
        className="absolute -left-3 top-5 h-full w-full rounded-[2rem] border border-light-blue/10 bg-white/20"
      />

      {/* Main image card */}
      <div className="relative overflow-hidden rounded-[2rem] border border-white/70 shadow-xl shadow-light-blue/20">
        <img
          src={image}
          alt={title}
          className="h-[440px] w-full object-cover sm:h-[480px]"
          loading="eager"
          decoding="async"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent"
        />

        {/* Category badge — top left */}
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-primary shadow-sm backdrop-blur-sm">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-b from-[#6B52F9] to-[#8B79F2] text-white">
            <Icon className="h-2.5 w-2.5" />
          </span>
          {category}
        </span>

        {/* Glass certificate panel */}
        <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-lg backdrop-blur-md">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                Certification Program
              </p>
              <h3 className="mt-0.5 text-sm font-bold leading-snug text-primary">
                {title}
              </h3>
            </div>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-b from-[#6B52F9] to-[#8B79F2] text-white">
              <Award className="h-4 w-4" />
            </span>
          </div>

          <div className="mt-2.5 flex items-center justify-between border-t border-border pt-2.5">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary">
              <Clock className="h-3.5 w-3.5 text-light-blue" />
              {duration}
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-secondary/30 px-2.5 py-1 text-[10px] font-bold text-secondary-foreground">
              <BadgeCheck className="h-3 w-3" />
              Certificate
            </span>
          </div>
        </div>
      </div>

      {/* Floating advanced-level stamp */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute -right-3 top-9 flex items-center gap-2 rounded-2xl border border-border bg-white/90 px-3.5 py-2.5 shadow-lg shadow-primary/10 backdrop-blur-sm"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-secondary/30 text-secondary-foreground">
          <BadgeCheck className="h-4 w-4" />
        </span>
        <div className="leading-tight">
          <p className="text-xs font-bold text-primary">Advanced</p>
          <p className="text-[10px] text-muted-foreground">Program level</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProgramHero({ program, Icon }) {
  const navigate = useNavigate();
  const { hero, fullTitle, category, duration, image } = program;

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
                  { label: "Home", to: "/" },
                  { label: "Programs" },
                  { label: fullTitle },
                ]}
              /> */}
              <SectionLabel label="Certification Program" />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl xl:text-5xl"
            >
              {hero.heading}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base"
            >
              {hero.subheading}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center"
            >
              <Button
                asChild
                variant="gradiant"
                size="lg"
                className="rounded-full pl-7 pr-6 font-semibold"
              >
                <a href="#apply">
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="primary"
                size="lg"
                className="rounded-full px-6 font-semibold"
                onClick={() => navigate("/consultation")}
              >
                <CalendarCheck className="h-4 w-4" />
                Book Free Consultation
              </Button>
              <Button
                asChild
                variant="link"
                size="lg"
                className="font-semibold text-primary hover:text-light-blue"
              >
                <a href="#apply">
                  <Download className="h-4 w-4" />
                  Download Brochure
                </a>
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

          {/* Right — visual */}
          <div className="relative">
            <HeroVisual
              image={image}
              title={fullTitle}
              category={category}
              duration={duration}
              Icon={Icon}
            />
          </div>
        </div>
      </SectionViewer>
    </div>
  );
}
