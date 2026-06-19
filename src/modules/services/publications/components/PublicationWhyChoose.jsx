import { motion } from "motion/react";
import { Check, FileText } from "lucide-react";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function PublicationWhyChoose({ data }) {
  const { whyChoose } = data;

  return (
    <SectionViewer className="inter py-16 md:py-24">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — narrative + image area */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex flex-col gap-5"
        >
          <SectionLabel label={whyChoose.label} />
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl">
            {whyChoose.heading}
          </h2>
          <div className="flex flex-col gap-3">
            {whyChoose.paragraphs.map((p, i) => (
              <p key={i} className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {p}
              </p>
            ))}
          </div>

          {/* Image area */}
          <div className="relative mt-3 overflow-hidden rounded-3xl border border-border shadow-lg shadow-primary/5">
            <img
              src="/service/gallery3.jpeg"
              alt="Researchers preparing a manuscript for publication"
              className="h-56 w-full object-cover md:h-64"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2.5 rounded-2xl bg-white/95 px-4 py-2.5 shadow-md backdrop-blur">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-light-blue/15 text-light-blue">
                <FileText className="h-4.5 w-4.5" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-bold text-primary">Expert-guided</p>
                <p className="text-[11px] text-muted-foreground">Manuscript to submission</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right — "We help with" checklist card */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="lg:sticky lg:top-24 rounded-3xl border border-light-blue/20 bg-muted/60 p-6 md:p-8"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-light-blue">
            We Help With
          </p>
          <h3 className="mt-2 text-xl font-bold text-primary md:text-2xl">
            Everything from selection to submission
          </h3>

          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {whyChoose.helpWith.map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex items-start gap-3 rounded-2xl border border-border bg-white p-3.5 transition-shadow hover:shadow-sm hover:shadow-light-blue/10"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/30 text-secondary-foreground">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium leading-snug text-primary">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </SectionViewer>
  );
}
