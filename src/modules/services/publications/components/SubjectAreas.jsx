import { motion } from "motion/react";
import { Hash } from "lucide-react";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.035 } },
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

export default function SubjectAreas({ data }) {
  const { subjectAreas } = data;

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
          <SectionLabel label="Subject Areas" />
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl">
            {subjectAreas.heading}
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {subjectAreas.sub}
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-3"
        >
          {subjectAreas.items.map((item) => (
            <motion.span
              key={item}
              variants={fadeIn}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="group inline-flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-2.5 text-sm font-medium text-primary shadow-sm transition-all hover:-translate-y-0.5 hover:border-light-blue/40 hover:shadow-md hover:shadow-light-blue/10"
            >
              <Hash className="h-3.5 w-3.5 text-light-blue/70 transition-colors group-hover:text-light-blue" />
              {item}
            </motion.span>
          ))}
        </motion.div>
      </SectionViewer>
    </div>
  );
}
