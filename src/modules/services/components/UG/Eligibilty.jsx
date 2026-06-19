import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Single criterion row: a check badge followed by the criterion text.
 * Pure presentational piece, kept separate so spacing/animation stays
 * consistent regardless of how many criteria are passed in.
 */
const CriterionItem = ({ text, index }) => (
  <motion.li
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: Math.min(index * 0.06, 0.4) }}
    className="flex items-start gap-3 sm:gap-4"
  >
    <span
      className={cn(
        "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
        "bg-[var(--secondary)]"
      )}
    >
      <Check
        className="h-3.5 w-3.5 text-[var(--secondary-foreground)]"
        strokeWidth={3}
      />
    </span>

    <p className="text-base sm:text-lg leading-relaxed text-[var(--foreground)]">
      {text}
    </p>
  </motion.li>
);


const Eligibilty= ({
  eyebrow,
  title = "Eligibility Criteria",
  description,
  criteria = [],
  imageSrc,
  imageAlt = "",
  className = "",
}) => {
  const normalizedCriteria = (criteria || [])
    .map((item) => (typeof item === "string" ? item.trim() : item?.text?.trim() || ""))
    .filter((text) => text.length > 0);

  const hasCriteria = normalizedCriteria.length > 0;

  return (
    <section className={cn("py-16 lg:py-24 2xl:py-28", className)}>
      <div className="container mx-auto px-5 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT — image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] overflow-hidden rounded-[var(--radius)]"
          >
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-[var(--muted)] text-sm text-[var(--muted-foreground)]">
                Add an image via the imageSrc prop
              </div>
            )}

            {/* Accent badge overlapping the image corner, surfaces the first criterion */}
            {hasCriteria && (
              <div
                className={cn(
                  "absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center gap-2",
                  "rounded-full bg-[var(--secondary)] px-4 py-2 shadow-lg w-fit max-w-[calc(100%-2rem)]"
                )}
              >
                <Check className="h-4 w-4 shrink-0 text-[var(--secondary-foreground)]" strokeWidth={3} />
                <span className="text-xs sm:text-sm font-semibold text-[var(--secondary-foreground)] truncate">
                  {normalizedCriteria[0]}
                </span>
              </div>
            )}
          </motion.div>

          {/* RIGHT — content */}
          <div>
            {eyebrow && (
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[var(--primary)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--light-blue)]" />
                {eyebrow}
              </span>
            )}

            {title && (
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[var(--primary)]">
                {title}
              </h2>
            )}

            {description && (
              <p className="mt-4 text-sm sm:text-base text-[var(--muted-foreground)] leading-relaxed max-w-md">
                {description}
              </p>
            )}

            {hasCriteria ? (
              <ul className="mt-8 flex flex-col gap-5 sm:gap-6">
                {normalizedCriteria.map((text, index) => (
                  <CriterionItem key={`${text}-${index}`} text={text} index={index} />
                ))}
              </ul>
            ) : (
              <div className="mt-8 rounded-xl bg-[var(--muted)] p-8 text-center text-sm text-[var(--muted-foreground)]">
                No eligibility criteria to display yet.
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Eligibilty;