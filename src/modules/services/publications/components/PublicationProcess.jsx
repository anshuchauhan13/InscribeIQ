import { motion } from "motion/react";
import {
  FileUp,
  ScanSearch,
  FilePenLine,
  Send,
  MessagesSquare,
  LineChart,
} from "lucide-react";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";

const ICONS = [FileUp, ScanSearch, FilePenLine, Send, MessagesSquare, LineChart];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function PublicationProcess({ data }) {
  const { process } = data;

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
          <SectionLabel label="Our Process" />
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl xl:text-5xl">
            {process.heading}
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {process.sub}
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {process.steps.map((step, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={step.title}
                variants={fadeUp}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="group/step relative flex flex-col gap-4 rounded-3xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-light-blue/10"
              >
                {/* Step number watermark */}
                <span className="pointer-events-none absolute right-5 top-4 text-5xl font-black leading-none text-primary/[0.05]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20 transition-colors group-hover/step:bg-blue">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-[11px] font-bold text-secondary-foreground">
                    {i + 1}
                  </span>
                </div>

                <div className="relative flex flex-col gap-1.5">
                  <h3 className="text-lg font-bold text-primary">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </SectionViewer>
    </div>
  );
}
