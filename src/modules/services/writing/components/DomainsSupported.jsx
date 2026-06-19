import { motion } from "motion/react";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } },
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

export default function DomainsSupported({ data }) {
  const { domains } = data;

  return (
    <div className="bg-muted/40">
      <SectionViewer className="inter py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center"
        >
          <SectionLabel label="Subjects & Domains" />
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl">
            {domains.heading}
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {domains.sub}
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-2.5"
        >
          {domains.items.map((item) => (
            <motion.span
              key={item}
              variants={fadeIn}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="rounded-full border border-light-blue/25 bg-white px-4 py-2 text-sm font-medium text-primary/85 transition-all hover:-translate-y-0.5 hover:border-light-blue hover:text-blue hover:shadow-sm hover:shadow-light-blue/10"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </SectionViewer>
    </div>
  );
}
