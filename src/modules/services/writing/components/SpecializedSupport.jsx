import { motion } from "motion/react";
import { BadgeCheck } from "lucide-react";
import SectionViewer from "@/components/common/SectionViewer";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function SpecializedSupport({ data }) {
  const { specialized } = data;

  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #170545 0%, #320F8C 55%, #6B52F9 100%)",
      }}
    >
      {/* Dot pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-secondary/10 blur-[100px]"
      />

      <SectionViewer className="inter relative z-10 py-16 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/12 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-secondary">
              Specialized Support
            </span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
              {specialized.heading}
            </h2>
            <p className="text-sm leading-relaxed text-white/65 md:text-base">
              {specialized.sub}
            </p>
          </motion.div>

          {/* Importance chips */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="flex flex-wrap gap-2.5"
          >
            {specialized.items.map((item) => (
              <motion.span
                key={item}
                variants={fadeUp}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
              >
                <BadgeCheck className="h-4 w-4 text-secondary" />
                {item}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </SectionViewer>
    </div>
  );
}
