import { motion } from "motion/react";
import { X, ArrowRight, Sparkles } from "lucide-react";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function ProblemAware({ data }) {
  const { problem } = data;

  return (
    <SectionViewer className="inter py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center"
      >
        <SectionLabel label="Sound Familiar?" />
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl">
          {problem.heading}
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
          {problem.intro}
        </p>
      </motion.div>

      {/* Challenge chips */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
      >
        {problem.challenges.map((c) => (
          <motion.div
            key={c}
            variants={fadeUp}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex items-center gap-3 rounded-2xl border border-border bg-muted/40 px-4 py-3.5"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
              <X className="h-3.5 w-3.5" strokeWidth={3} />
            </span>
            <span className="text-sm font-medium leading-snug text-primary/80">{c}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* From → To transformation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-5 rounded-3xl border border-light-blue/20 bg-light-blue/[0.04] p-7 text-center md:p-9"
      >
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <span className="rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-muted-foreground line-through decoration-destructive/50">
            {problem.fromTo[0]}
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-light-blue to-[#6B52F9] text-white shadow-md shadow-light-blue/30">
            <ArrowRight className="h-4 w-4" />
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-5 py-2.5 text-sm font-bold text-secondary-foreground">
            <Sparkles className="h-4 w-4" />
            {problem.fromTo[1]}
          </span>
        </div>
        <p className="max-w-xl text-sm font-medium leading-relaxed text-primary md:text-base">
          {problem.closing}
        </p>
      </motion.div>
    </SectionViewer>
  );
}
