import { Fragment } from "react";
import {
FileSearch,
PhoneCall,
Landmark,
FileCheck2,
BadgeCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";


const DEFAULT_ICONS = [
FileSearch,
PhoneCall,
Landmark,
FileCheck2,
BadgeCheck,
];

const container = {
hidden: {},
show: {
transition: {
staggerChildren: 0.12,
delayChildren: 0.15,
},
},
};

const itemVariant = {
hidden: {
opacity: 0,
y: 30,
},
show: {
opacity: 1,
y: 0,
transition: {
duration: 0.6,
ease: [0.22, 1, 0.36, 1],
},
},
};

const lineVariant = {
hidden: {
scaleX: 0,
opacity: 0,
},
show: {
scaleX: 1,
opacity: 1,
transition: {
duration: 1.2,
ease: [0.22, 1, 0.36, 1],
},
},
};

function Admission({
  eyebrow,
  title,
  highlightWord,
  description,
  steps = [],
  className = "",
}) {
  const normalizedSteps = (steps || [])
    .map((step) =>
      typeof step === "string"
        ? { title: step.trim() }
        : {
            title: step?.title?.trim() || "",
            desc: step?.desc,
            icon: step?.icon,
          }
    )
    .filter((step) => step.title);

  const stepCount = normalizedSteps.length || 1;

  const titleParts =
    highlightWord && title?.includes(highlightWord)
      ? title.split(highlightWord)
      : null;

  return (
    <section className={cn("relative overflow-hidden bg-primary text-primary-foreground", className)}>
      
      {/* Background effects unchanged */}
      <div aria-hidden className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl pointer-events-none" />

      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">

        {/* HEADER */}
        <div className="mb-16 md:mb-24 text-center">

          {eyebrow && (
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
              {eyebrow}
            </span>
          )}

          {title && (
            <h2 className="mt-4 max-w-4xl mx-auto text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
              {titleParts ? (
                <>
                  {titleParts[0]}
                  <span className="text-secondary">{highlightWord}</span>
                  {titleParts[1]}
                </>
              ) : (
                title
              )}
            </h2>
          )}

          {description && (
            <p className="mt-5 max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-primary-foreground/70">
              {description}
            </p>
          )}

        </div>

        {/* DESKTOP */}
        <div className="hidden lg:block relative">

          <motion.div
            variants={lineVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{
              originX: 0,
              left: `calc(100% / ${stepCount * 2})`,
              right: `calc(100% / ${stepCount * 2})`,
            }}
            className="absolute top-8 h-px bg-gradient-to-r from-secondary/0 via-secondary/80 to-secondary/0"
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid"
            style={{
              gridTemplateColumns: `repeat(${stepCount}, minmax(0,1fr))`,
            }}
          >
            {normalizedSteps.map((step, index) => {
              const Icon =
                step.icon || DEFAULT_ICONS[index % DEFAULT_ICONS.length];

              return (
                <motion.div
                  key={`${step.title}-${index}`}
                  variants={itemVariant}
                  className="group flex flex-col items-center text-center px-2"
                >
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:border-secondary/50">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary/15">
                      <Icon className="h-5 w-5 text-secondary" strokeWidth={1.75} />
                    </div>

                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 h-5 min-w-5 px-1 rounded-full bg-secondary text-[10px] font-bold flex items-center justify-center text-secondary-foreground">
                      {index + 1}
                    </span>
                  </div>

                  <div className="mt-5 w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white/10 group-hover:border-secondary/30">
                    <h3 className="text-sm font-semibold text-primary-foreground">
                      {step.title}
                    </h3>

                    {step.desc && (
                      <p className="mt-2 text-xs leading-relaxed text-primary-foreground/70">
                        {step.desc}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* MOBILE (same logic) */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:hidden flex flex-col"
        >
          {normalizedSteps.map((step, index) => {
            const Icon =
              step.icon || DEFAULT_ICONS[index % DEFAULT_ICONS.length];

            const isLast = index === normalizedSteps.length - 1;

            return (
              <Fragment key={`${step.title}-${index}`}>
                <motion.div
                  variants={itemVariant}
                  className="group flex gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 transition-all duration-300 hover:bg-white/10"
                >
                  <div className="relative shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15 border border-white/10">
                      <Icon className="h-5 w-5 text-secondary" strokeWidth={1.75} />
                    </div>

                    <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-secondary-foreground">
                      {index + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary-foreground">
                      {step.title}
                    </h3>

                    {step.desc && (
                      <p className="mt-1 text-sm text-primary-foreground/70">
                        {step.desc}
                      </p>
                    )}
                  </div>
                </motion.div>

                {!isLast && (
                  <div className="ml-6 py-3">
                    <div className="h-8 border-l border-dashed border-secondary/70" />
                  </div>
                )}
              </Fragment>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
export default Admission;
