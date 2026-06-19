import { motion } from "motion/react";
import {
  BookOpen,
  Users,
  Clock,
  ChevronDown,
} from "lucide-react";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";

const STATS = [
  { icon: BookOpen, value: "25+", label: "Questions Answered" },
  { icon: Users, value: "10K+", label: "Scholars Helped" },
  { icon: Clock, value: "Always", label: "Up to Date" },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function FaqsHero() {
  return (
    <div className="w-full relative">
    

      {/* Soft purple glow centre */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-64 w-[300px] md:w-[600px] rounded-full bg-light-blue/10 blur-[100px]"
      />

      <SectionViewer className="inter relative z-10 pt-16 md:pt-20">
        {/* ── Centered text block ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center"
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }}>
            <SectionLabel label="Frequently Asked Questions" />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="text-3xl font-bold tracking-tight text-primary md:text-4xl xl:text-5xl leading-tight"
          >
            Your Questions,{" "}
            <span className="relative inline-block text-light-blue">
              Clearly Answered
              <span className="absolute left-0 -bottom-1 h-[4px] w-full rounded-full bg-light-blue" />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="text-base text-muted-foreground leading-relaxed md:text-lg max-w-2xl"
          >
            Browse our comprehensive knowledge base — everything you need to know
            about InscribeIQ's programs, processes, and policies, all in one place.
          </motion.p>

          {/* Stat pills */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-2 flex flex-wrap items-center justify-center gap-3"
          >
            {STATS.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="inline-flex items-center gap-2.5 rounded-full bg-white pl-2 pr-4 py-2 shadow-sm shadow-primary/15"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-light-blue/10">
                  <Icon className="h-3.5 w-3.5 text-primary" />
                </span>
                <span className="text-xs font-bold text-primary">{value}</span>
                <span className="text-xs md:text-[13px] text-muted-foreground">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom fade hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex flex-col items-center gap-1.5"
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-light-blue/30 to-transparent" />
          <p className="text-xs text-muted-foreground/60 tracking-wide">
            Scroll down to explore
          </p>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="mt-0.5 h-5 w-5 rounded-full border-2 border-light-blue/30 flex items-center justify-center"
          >
            <ChevronDown className="text-light-blue/50" />
          </motion.div>
        </motion.div>
      </SectionViewer>
    </div>
  );
}

export default FaqsHero;
