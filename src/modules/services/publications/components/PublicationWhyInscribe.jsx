import { motion } from "motion/react";
import { Check, Sparkles } from "lucide-react";
import SectionViewer from "@/components/common/SectionViewer";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function PublicationWhyInscribe({ data }) {
  const { whyInscribe, name } = data;

  return (
    <SectionViewer className="inter py-16 md:py-24">
      <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left — gradient narrative panel */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl p-8 md:p-10"
          style={{
            background:
              "linear-gradient(135deg, #170545 0%, #320F8C 55%, #6B52F9 100%)",
          }}
        >
          {/* Dot pattern */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "26px 26px",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-secondary/10 blur-3xl"
          />

          <div className="relative flex h-full flex-col">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/12 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-secondary">
              <Sparkles className="h-3 w-3" />
              Why Inscribe IQ
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
              {whyInscribe.heading}
            </h2>
            <div className="mt-5 flex flex-col gap-3">
              {whyInscribe.paragraphs.map((p, i) => (
                <p key={i} className="text-sm leading-relaxed text-white/70 md:text-base">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-auto flex items-center gap-3 pt-8">
              <div className="h-px flex-1 bg-white/15" />
              <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
                {name} Publication
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right — key benefits */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col gap-5 rounded-3xl border border-border bg-white p-8 md:p-10"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-light-blue">
            Key Benefits
          </p>
          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-x-6 gap-y-3.5 sm:grid-cols-2"
          >
            {whyInscribe.benefits.map((b) => (
              <motion.li
                key={b}
                variants={fadeUp}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/30 text-secondary-foreground">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium leading-snug text-primary">{b}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </SectionViewer>
  );
}
