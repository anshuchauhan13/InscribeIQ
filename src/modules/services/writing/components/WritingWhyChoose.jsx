import { motion } from "motion/react";
import { Check } from "lucide-react";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function WritingWhyChoose({ data }) {
  const { whyChoose } = data;

  return (
    <SectionViewer className="inter py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center"
      >
        <SectionLabel label="Why Inscribe IQ" />
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl">
          {whyChoose.heading}
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
          {whyChoose.intro}
        </p>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
      >
        {whyChoose.items.map((item) => (
          <motion.div
            key={item}
            variants={fadeUp}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex items-center gap-3 rounded-2xl border border-border bg-white p-4 transition-shadow hover:shadow-sm hover:shadow-light-blue/10"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/30 text-secondary-foreground">
              <Check className="h-3.5 w-3.5" strokeWidth={3} />
            </span>
            <span className="text-sm font-medium leading-snug text-primary">{item}</span>
          </motion.div>
        ))}
      </motion.div>
    </SectionViewer>
  );
}
