import { motion } from "motion/react";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export default function SupportItems({ data }) {
  const { support } = data;

  return (
    <SectionViewer className="inter py-16 md:py-24">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center"
      >
        <SectionLabel label={support.label} />
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl">
          {support.heading}
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
          {support.sub}
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {support.items.map((item, i) => (
          <motion.article
            key={item.title}
            variants={fadeUp}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="group/item relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-light-blue/40 hover:shadow-lg hover:shadow-light-blue/10"
          >
            {/* Big watermark index */}
            <span className="pointer-events-none absolute -right-2 -top-3 text-7xl font-black leading-none text-primary/[0.05] transition-colors group-hover/item:text-light-blue/10">
              {String(i + 1).padStart(2, "0")}
            </span>

            <div className="relative flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-white shadow-md shadow-primary/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.tag && (
                <span className="rounded-full bg-light-blue/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-light-blue">
                  {item.tag}
                </span>
              )}
            </div>

            <h3 className="relative mt-4 text-lg font-bold text-primary">{item.title}</h3>
            <p className="relative mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {item.desc}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </SectionViewer>
  );
}
