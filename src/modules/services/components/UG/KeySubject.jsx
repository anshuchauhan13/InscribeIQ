import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  LineChart,
  Users,
  Briefcase,
  Calculator,
  Lightbulb,
  MessageSquare,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";
import SectionViewer from "@/components/common/SectionViewer";


const ACCENTS = [
  { bg: "bg-[var(--blue)]/10", icon: "text-[var(--blue)]" },
  { bg: "bg-[var(--light-blue)]/15", icon: "text-[var(--light-blue)]" },
  { bg: "bg-[var(--blue)]/10", icon: "text-[var(--blue)]" },
  { bg: "bg-[var(--light-blue)]/15", icon: "text-[var(--light-blue)]" },
];

const DEFAULT_ICONS = [
  BookOpen,
  LineChart,
  Users,
  Briefcase,
  Calculator,
  Lightbulb,
  MessageSquare,
  Settings,
];

/**
 * Single pill: a circular icon badge followed by the subject label.
 * Matches a compact "tag cloud" pattern — entries flow and wrap rather
 * than locking into a rigid grid, since subjects don't need equal weight.
 */
const SubjectPill = ({ name, icon, index }) => {
  const accent = ACCENTS[index % ACCENTS.length];
  const Icon = icon || DEFAULT_ICONS[index % DEFAULT_ICONS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.4) }}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-full border border-[var(--primary)]/25",
        "bg-white pl-2 pr-4 py-1.5 shadow-sm transition-all duration-200",
        "hover:border-[var(--primary)]/60 hover:shadow-md hover:-translate-y-0.5"
      )}
    >
      <span
        className={cn(
          "flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
          accent.bg
        )}
      >
        <Icon className={cn("h-3.5 w-3.5", accent.icon)} strokeWidth={2.25} />
      </span>

      <span className="text-sm sm:text-[15px] font-medium text-slate-700 whitespace-nowrap">
        {name}
      </span>
    </motion.div>
  );
};

const KeySubject = ({
  eyebrow,
  title,
  description,
  subjects = [],
  className = "",
}) => {
  const normalizedSubjects = (subjects || [])
    .map((subject) =>
      typeof subject === "string"
        ? { name: subject.trim(), icon: undefined }
        : { name: subject?.name?.trim() || "", icon: subject?.icon }
    )
    .filter((subject) => subject.name.length > 0);

  const hasSubjects = normalizedSubjects.length > 0;

  return (
    <section
      className={cn(
        "relative py-16 lg:py-24 2xl:py-32 overflow-hidden bg-[var(--background)]",
        className
      )}
    >
      {/* Ambient color glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-[var(--light-blue)]/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-16 h-96 w-96 rounded-full bg-[var(--light-blue)]/10 blur-3xl"
      />

      {/* Grain texture overlay */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18] mix-blend-overlay"
      >
        <filter id="keysubject-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix in="noise" type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#keysubject-grain)" />
      </svg>

      <SectionViewer className="relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT */}
          <div className="lg:sticky lg:top-24">
            {eyebrow && (
              <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase text-[var(--primary)]">
               
                {eyebrow}
              </span>
            )}

            {title && (
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold leading-tight text-slate-900">
                {title}
              </h2>
            )}

            {description && (
              <p className="mt-5 text-slate-500 leading-relaxed max-w-md">
                {description}
              </p>
            )}
          </div>

          {/* RIGHT */}
          <div>
            {hasSubjects ? (
              <div className="flex flex-wrap gap-3 sm:gap-3.5">
                {normalizedSubjects.map((subject, index) => (
                  <SubjectPill
                    key={`${subject.name}-${index}`}
                    name={subject.name}
                    icon={subject.icon}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-200 p-10 text-center text-slate-400 text-sm">
                No subjects to display yet.
              </div>
            )}
          </div>

        </div>
      </SectionViewer>
    </section>
  );
};

export default KeySubject;