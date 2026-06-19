import { motion } from "motion/react";
import { UserRound } from "lucide-react";
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

export default function WhoThisIsFor({ data }) {
  const { whoFor } = data;

  return (
    <SectionViewer className="inter py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center"
      >
        <SectionLabel label="Who It's For" />
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl">
          {whoFor.heading}
        </h2>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
      >
        {whoFor.items.map((item) => (
          <motion.div
            key={item}
            variants={fadeUp}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex items-center gap-2.5 rounded-2xl border border-border bg-white p-3.5 transition-all hover:-translate-y-0.5 hover:border-light-blue/40 hover:shadow-sm hover:shadow-light-blue/10"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-light-blue/10 text-light-blue">
              <UserRound className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold leading-snug text-primary md:text-[13px]">
              {item}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </SectionViewer>
  );
}
