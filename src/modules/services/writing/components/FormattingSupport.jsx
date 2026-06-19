import { motion } from "motion/react";
import { Check, FileCheck2 } from "lucide-react";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export default function FormattingSupport({ data }) {
  const { formatting } = data;

  return (
    <div className="light-gradiant">
      <SectionViewer className="inter py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center"
        >
          <SectionLabel label="Formatting Support" />
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl">
            {formatting.heading}
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {formatting.sub}
          </p>
        </motion.div>

        {/* Includes + styles card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl border border-border bg-white shadow-sm"
        >
          {/* Includes grid */}
          <div className="p-6 md:p-9">
            <div className="mb-5 flex items-center gap-2">
              <FileCheck2 className="h-4 w-4 text-light-blue" />
              <p className="text-xs font-bold uppercase tracking-widest text-light-blue">
                Support includes
              </p>
            </div>
            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3"
            >
              {formatting.includes.map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="flex items-center gap-2.5"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/30 text-secondary-foreground">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-sm text-primary/85">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Styles strip */}
          <div className="border-t border-border bg-muted/50 px-6 py-6 md:px-9">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {formatting.stylesLabel}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {formatting.styles.map((s) => (
                <span
                  key={s}
                  className="rounded-lg border border-light-blue/20 bg-white px-3.5 py-1.5 text-xs font-bold text-blue shadow-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </SectionViewer>
    </div>
  );
}
