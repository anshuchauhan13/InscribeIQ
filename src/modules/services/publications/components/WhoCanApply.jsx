import { motion } from "motion/react";
import { UserCheck, GraduationCap } from "lucide-react";
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

export default function WhoCanApply({ data }) {
  const { whoCanApply } = data;

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
              src="/service/gallery2.jpeg"
              alt="Scholars and faculty members collaborating on research"
              className="h-72 w-full object-cover md:h-[26rem]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/55 via-primary/10 to-transparent" />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-5 right-5 flex items-center gap-3 rounded-2xl border border-border bg-white px-5 py-3.5 shadow-lg shadow-primary/10">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-light-blue/15 text-light-blue">
              <GraduationCap className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-bold text-primary">For every author</p>
              <p className="text-[11px] text-muted-foreground">Students to professionals</p>
            </div>
          </div>
        </motion.div>

        {/* Right — content + chips */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="order-1 flex flex-col gap-5 lg:order-2"
        >
          <SectionLabel label="Who Can Apply" />
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl">
            {whoCanApply.heading}
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {whoCanApply.sub}
          </p>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-1 flex flex-wrap gap-2.5"
          >
            {whoCanApply.items.map((item) => (
              <motion.span
                key={item}
                variants={fadeUp}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-2 text-xs font-medium text-primary shadow-sm transition-colors hover:border-light-blue/40 hover:bg-light-blue/[0.04] md:text-[13px]"
              >
                <UserCheck className="h-3.5 w-3.5 text-light-blue" />
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SectionViewer>
  );
}
