import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  // section / accent icons
  BrainCircuit, Bot, GraduationCap, ShieldCheck, Landmark, Code2, Database, Server,
  Sparkles, CheckCircle2, Users, Layers, Wrench, Building2, BookOpen, Trophy,
  ArrowRight, Target, Lightbulb, Briefcase, ClipboardCheck,
  GaugeCircle, MonitorPlay, BadgeCheck, Plus, Minus,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import PageViewer from "@/components/common/PageViewer";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";
import Reveal from "@/components/common/Reveal";
import ProgramHero from "./ProgramHero";
import ProgramLeadForm from "./ProgramLeadForm";

const EASE = [0.22, 0.61, 0.36, 1];

// Map the data-file icon string → lucide component.
const ICONS = {
  BrainCircuit, Bot, GraduationCap, ShieldCheck, Landmark, Code2, Database, Server,
};

// Snapshot rows get a contextual icon by label.
const SNAPSHOT_ICONS = {
  "Program Type": ClipboardCheck,
  Level: GaugeCircle,
  Mode: MonitorPlay,
  "Ideal For": Users,
  Domain: Target,
  Certification: BadgeCheck,
};

/* ── Section title block ──────────────────────────────────────────────── */
function SectionTitle({ label, title, desc, center = true }) {
  return (
    <div className={cn("flex flex-col gap-3", center && "items-center text-center")}>
      <SectionLabel label={label} />
      <h2
        className={cn(
          "text-2xl font-bold leading-tight tracking-tight text-primary md:text-3xl xl:text-4xl",
          center && "max-w-3xl"
        )}
      >
        {title}
      </h2>
      {desc && (
        <p className={cn("text-sm leading-relaxed text-muted-foreground md:text-base", center && "max-w-2xl")}>
          {desc}
        </p>
      )}
    </div>
  );
}

/* ── 2. Program Snapshot ──────────────────────────────────────────────── */
function Snapshot({ snapshot }) {
  const entries = Object.entries(snapshot);
  return (
    <SectionViewer className="py-12 md:py-16">
      <Reveal>
        <div className="rounded-3xl border border-border bg-gradient-to-b from-muted to-white p-6 shadow-[0_4px_30px_rgba(23,5,69,0.05)] md:p-10">
          <div className="mb-8 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-b from-[#6B52F9] to-[#8B79F2] text-white">
              <Sparkles className="h-5 w-5" />
            </span>
            <h2 className="text-xl font-bold tracking-tight text-primary md:text-2xl">
              Program Snapshot
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {entries.map(([label, value], i) => {
              const Icon = SNAPSHOT_ICONS[label] ?? CheckCircle2;
              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, ease: EASE, delay: i * 0.05 }}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-white p-4 transition-shadow hover:shadow-md"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-light-blue/10 text-light-blue">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                      {label}
                    </p>
                    <p className="mt-0.5 text-sm font-bold text-primary">{value}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </SectionViewer>
  );
}

/* ── 3. Program Overview ──────────────────────────────────────────────── */
function Overview({ overview, fullTitle }) {
  return (
    <SectionViewer className="py-12 md:py-16">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <Reveal direction="left">
          <SectionTitle
            center={false}
            label="Program Overview"
            title={<>A complete grounding in <span className="text-light-blue">{fullTitle}</span></>}
          />
        </Reveal>
        <Reveal direction="right" delay={0.1}>
          <div className="flex flex-col gap-4 rounded-3xl border border-border bg-white p-6 shadow-sm md:p-8">
            {overview.map((p, i) => (
              <p key={i} className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionViewer>
  );
}

/* ── Generic icon-card grid (Why Choose, Who Can Enroll, Applications, Why IQ) ── */
function IconCardGrid({ label, title, desc, items, accentIcon: Accent, cols = 3 }) {
  return (
    <SectionViewer className="py-12 md:py-16">
      <Reveal>
        <SectionTitle label={label} title={title} desc={desc} />
      </Reveal>
      <div
        className={cn(
          "mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2",
          cols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
        )}
      >
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: EASE, delay: (i % cols) * 0.06 }}
            className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-light-blue/30 hover:shadow-[0_12px_30px_rgba(23,5,69,0.10)]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-light-blue/10 text-light-blue transition-colors group-hover:bg-gradient-to-b group-hover:from-[#6B52F9] group-hover:to-[#8B79F2] group-hover:text-white">
              <Accent className="h-5 w-5" />
            </span>
            <h3 className="text-base font-bold leading-snug text-primary">{item.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionViewer>
  );
}

/* ── 6. Key Areas of Learning — numbered curriculum ───────────────────── */
function KeyAreas({ items }) {
  return (
    <div className="relative overflow-hidden bg-primary py-16 md:py-24">
      {/* Ambient glows */}
      <div aria-hidden className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-light-blue/20 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#6B52F9]/20 blur-[120px]" />
      <SectionViewer className="relative z-10">
        <Reveal>
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary manrope md:text-sm">
              Curriculum
            </span>
            <h2 className="max-w-3xl text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl xl:text-4xl">
              Key Areas of Learning
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-primary-foreground/70 md:text-base">
              A structured, modular curriculum that takes you from core foundations to
              advanced, industry-relevant application.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: EASE, delay: (i % 2) * 0.06 }}
              className="group flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-colors hover:border-secondary/40 hover:bg-white/[0.07]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/15 text-base font-bold text-secondary tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-base font-bold leading-snug text-white">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-primary-foreground/65">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionViewer>
    </div>
  );
}

/* ── 7. Skills You Will Develop ───────────────────────────────────────── */
function Skills({ skills }) {
  const groups = [
    { title: "Technical & Conceptual Skills", icon: Wrench, items: skills.technical },
    { title: "Professional Skills", icon: Lightbulb, items: skills.professional },
  ];
  return (
    <SectionViewer className="py-12 md:py-16">
      <Reveal>
        <SectionTitle
          label="Outcomes"
          title="Skills You Will Develop"
          desc="Graduate with a balanced toolkit of technical capability and professional judgement."
        />
      </Reveal>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {groups.map((g, gi) => (
          <Reveal key={g.title} delay={gi * 0.1} direction={gi === 0 ? "left" : "right"}>
            <div className="h-full rounded-3xl border border-border bg-white p-7 shadow-sm md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-b from-[#6B52F9] to-[#8B79F2] text-white">
                  <g.icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold tracking-tight text-primary">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-1.5 rounded-full border border-light-blue/20 bg-light-blue/5 px-3.5 py-2 text-sm font-medium text-primary transition-colors hover:bg-light-blue/10"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-light-blue" />
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionViewer>
  );
}

/* ── 9. Recommended Reading ───────────────────────────────────────────── */
function Reading({ reading }) {
  return (
    <SectionViewer className="py-12 md:py-16">
      <Reveal>
        <SectionTitle
          label="Resources"
          title="Recommended Reading"
          desc="Curated texts that complement the program and deepen your mastery."
        />
      </Reveal>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reading.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: EASE, delay: (i % 3) * 0.06 }}
            className="group flex gap-4 rounded-2xl border border-border bg-white p-5 transition-all hover:border-light-blue/30 hover:shadow-md"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/15 text-secondary-foreground transition-colors group-hover:bg-secondary/30">
              <BookOpen className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <h3 className="text-sm font-bold leading-snug text-primary">{b.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{b.author}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionViewer>
  );
}

/* ── 11. Career & Academic Benefits ───────────────────────────────────── */
const BENEFIT_ICONS = [GraduationCap, BrainCircuit, Briefcase, Building2];
function Benefits({ benefits }) {
  return (
    <SectionViewer className="py-12 md:py-16">
      <Reveal>
        <SectionTitle
          label="Impact"
          title="Career & Academic Benefits"
          desc="Tangible value for every kind of learner — and the institutions they serve."
        />
      </Reveal>
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b, i) => {
          const Icon = BENEFIT_ICONS[i % BENEFIT_ICONS.length];
          return (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: EASE, delay: i * 0.07 }}
              className="relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-white to-muted p-6 transition-shadow hover:shadow-[0_12px_30px_rgba(23,5,69,0.10)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-base font-bold text-primary">{b.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </SectionViewer>
  );
}

/* ── 12. FAQ accordion ────────────────────────────────────────────────── */
function Faq({ faqs }) {
  const [open, setOpen] = useState(0);
  return (
    <SectionViewer className="py-12 md:py-16">
      <Reveal>
        <SectionTitle
          label="FAQs"
          title="Frequently Asked Questions"
          desc="Everything you need to know before you enroll."
        />
      </Reveal>
      <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={f.q} delay={i * 0.04}>
              <div
                className={cn(
                  "overflow-hidden rounded-2xl border bg-white transition-colors",
                  isOpen ? "border-light-blue/40 shadow-sm" : "border-border"
                )}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-bold text-primary md:text-base">{f.q}</span>
                  <span
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors",
                      isOpen ? "bg-gradient-to-b from-[#6B52F9] to-[#8B79F2] text-white" : "bg-muted text-primary"
                    )}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground md:px-6">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </SectionViewer>
  );
}

/* ── Final CTA band ───────────────────────────────────────────────────── */
function FinalCta({ fullTitle }) {
  const navigate = useNavigate();
  return (
    <SectionViewer className="pb-16 md:pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#170545] via-[#320F8C] to-[#6B52F9] px-6 py-12 text-center md:px-12 md:py-16">
          <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-secondary/20 blur-[80px]" />
          <div aria-hidden className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-light-blue/30 blur-[80px]" />
          <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-5">
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl xl:text-4xl">
              Ready to advance with the {fullTitle} program?
            </h2>
            <p className="text-sm text-primary-foreground/80 md:text-base">
              Join faculty, researchers, and professionals building future-ready skills with InscribeIQ.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="secondary" className="rounded-full px-7 font-semibold">
                <a href="#apply">
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                className="rounded-full border border-white/20 bg-white/10 px-7 font-semibold text-white hover:bg-white/20"
                onClick={() => navigate("/consultation")}
              >
                Book Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionViewer>
  );
}

/* ── Composition ──────────────────────────────────────────────────────── */
export default function ProgramDetail({ program }) {
  const Icon = ICONS[program.icon] ?? Trophy;

  return (
    <PageViewer>
      <ProgramHero program={program} Icon={Icon} />
      <Snapshot snapshot={program.snapshot} />
      <Overview overview={program.overview} fullTitle={program.fullTitle} />

      <IconCardGrid
        label="Benefits"
        title="Why Choose This Program?"
        desc="Built to give you a decisive edge in a fast-moving, technology-driven world."
        items={program.whyChoose}
        accentIcon={Sparkles}
      />

      <IconCardGrid
        label="Eligibility"
        title="Who Can Enroll?"
        desc="Designed for a broad spectrum of academic and professional learners."
        items={program.whoCanEnroll}
        accentIcon={Users}
      />

      <KeyAreas items={program.keyAreas} />

      <Skills skills={program.skills} />

      <IconCardGrid
        label="In Practice"
        title={program.applicationsHeading}
        desc="See how this knowledge translates into real-world impact across sectors."
        items={program.applications}
        accentIcon={Layers}
      />

      <Reading reading={program.reading} />

      <IconCardGrid
        label="The InscribeIQ Edge"
        title="Why Choose Inscribe IQ?"
        desc="A learning partner committed to your academic and professional growth."
        items={program.whyInscribe}
        accentIcon={Trophy}
      />

      <Benefits benefits={program.benefits} />

      <ProgramLeadForm program={program} />

      <Faq faqs={program.faqs} />

      <FinalCta fullTitle={program.fullTitle} />
    </PageViewer>
  );
}
