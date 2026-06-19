import { motion } from "motion/react";
import { Flag } from "lucide-react";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function JourneyRoadmap({ data }) {
  const { roadmap } = data;

  return (
    <div className="light-gradiant">
      <SectionViewer className="inter py-16 md:py-24">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center"
        >
          <SectionLabel label="The Roadmap" />
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl xl:text-5xl">
            {roadmap.heading}
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {roadmap.sub}
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.ol
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative mx-auto mt-12 max-w-3xl"
        >
          {/* Vertical rail */}
          <span
            aria-hidden
            className="absolute bottom-6 left-6 top-6 w-px -translate-x-1/2 bg-gradient-to-b from-light-blue/50 via-light-blue/30 to-transparent md:left-7"
          >
            <span className="process-ray-v" />
          </span>

          {roadmap.stages.map((stage, i) => {
            const last = i === roadmap.stages.length - 1;
            return (
              <motion.li
                key={stage.title}
                variants={fadeUp}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="relative flex gap-5 pb-8 last:pb-0 md:gap-7"
              >
                {/* Node */}
                <div className="relative z-10 shrink-0">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-bold shadow-lg md:h-14 md:w-14 ${
                      last
                        ? "bg-secondary text-secondary-foreground shadow-secondary/30"
                        : "bg-primary text-white shadow-primary/20"
                    }`}
                  >
                    {last ? <Flag className="h-5 w-5" /> : String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Card */}
                <div className="flex-1 rounded-2xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md hover:shadow-light-blue/10 md:p-6">
                  <div className="mb-1.5 flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-light-blue">
                      Stage {i + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-primary">{stage.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {stage.desc}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </motion.ol>
      </SectionViewer>
    </div>
  );
}
