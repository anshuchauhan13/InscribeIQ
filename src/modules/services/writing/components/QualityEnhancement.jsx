import { motion } from "motion/react";
import { TrendingUp, Sparkles } from "lucide-react";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export default function QualityEnhancement({ data }) {
  const { quality } = data;

  return (
    <SectionViewer className="inter py-16 md:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Left — image area */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-xl shadow-primary/5">
            <img
              src="/service/gallery5.jpeg"
              alt="Editor refining an academic document"
              className="h-72 w-full object-cover md:h-[26rem]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/55 via-primary/10 to-transparent" />
          </div>

          <div className="absolute -bottom-5 right-5 flex items-center gap-3 rounded-2xl border border-border bg-white px-5 py-3.5 shadow-lg shadow-primary/10">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/30 text-secondary-foreground">
              <Sparkles className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-bold text-primary">Quality first</p>
              <p className="text-[11px] text-muted-foreground">Clear, logical, well-cited</p>
            </div>
          </div>
        </motion.div>

        {/* Right — improve checklist */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="order-1 flex flex-col gap-5 lg:order-2"
        >
          <SectionLabel label="Quality Enhancement" />
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl">
            {quality.heading}
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {quality.sub}
          </p>

          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-1 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2"
          >
            {quality.items.map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex items-center gap-3"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-light-blue/10 text-light-blue">
                  <TrendingUp className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium text-primary">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </SectionViewer>
  );
}
