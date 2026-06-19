import { motion } from "motion/react";
import { ArrowUpRight, BookMarked } from "lucide-react";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function JournalCard({ journal }) {
  return (
    <motion.article
      variants={fadeUp}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="group/journal relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-light-blue/40 hover:shadow-xl hover:shadow-light-blue/10"
    >
      {/* Top accent line */}
      <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-light-blue to-[#6B52F9] transition-transform duration-300 group-hover/journal:scale-x-100" />

      {/* Header: badge + ISSN */}
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-light-blue/10 px-3 py-1 text-[11px] font-bold tracking-wide text-light-blue">
          <BookMarked className="h-3 w-3" />
          {journal.badge}
        </span>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-muted text-blue transition-colors group-hover/journal:bg-blue group-hover/journal:text-white">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      {/* Name */}
      <h3 className="mt-4 text-base font-bold leading-snug text-primary md:text-lg">
        {journal.name}
      </h3>

      {/* ISSN meta */}
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
        {journal.meta.map((m) => (
          <span key={m.label} className="text-xs text-muted-foreground">
            <span className="font-semibold text-primary/70">{m.label}:</span> {m.value}
          </span>
        ))}
      </div>

      {/* Suitable for */}
      <div className="mt-4 rounded-2xl bg-muted/70 p-3.5">
        <p className="text-[10px] font-bold uppercase tracking-widest text-light-blue">
          Suitable For
        </p>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          {journal.suitableFor}
        </p>
      </div>

      {/* Best for chips */}
      <div className="mt-4">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          Best for researchers in
        </p>
        <div className="flex flex-wrap gap-1.5">
          {journal.bestFor.map((b) => (
            <span
              key={b}
              className="rounded-md bg-primary/[0.04] px-2 py-1 text-[11px] font-medium text-primary/80"
            >
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* Highlight (optional) */}
      {journal.highlight && (
        <p className="mt-4 border-l-2 border-secondary/70 pl-3 text-xs italic leading-relaxed text-muted-foreground">
          {journal.highlight}
        </p>
      )}

      {/* CTA pinned to bottom */}
      <div className="mt-auto pt-5">
        <a
          href="#find-journal"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue transition-colors hover:text-light-blue"
        >
          {journal.cta}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/journal:translate-x-0.5 group-hover/journal:-translate-y-0.5" />
        </a>
      </div>
    </motion.article>
  );
}

export default function JournalOptions({ data }) {
  const { journals } = data;

  return (
    <div className="bg-gradient-to-b from-muted/50 to-transparent">
      <SectionViewer className="inter py-16 md:py-24">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center"
        >
          <SectionLabel label={journals.label} />
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl xl:text-5xl">
            {journals.heading}
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {journals.sub}
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {journals.items.map((journal) => (
            <JournalCard key={journal.id} journal={journal} />
          ))}
        </motion.div>
      </SectionViewer>
    </div>
  );
}
