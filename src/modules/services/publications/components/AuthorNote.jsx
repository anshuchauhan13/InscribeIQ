import { motion } from "motion/react";
import { ShieldCheck, Info } from "lucide-react";
import SectionViewer from "@/components/common/SectionViewer";

export default function AuthorNote({ data }) {
  const { authorNote } = data;

  return (
    <SectionViewer className="inter pb-16 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl border border-light-blue/20 bg-muted/60 p-7 md:p-10"
      >
        {/* Accent bar */}
        <span className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-light-blue to-[#6B52F9]" />

        <div className="flex flex-col gap-5 md:flex-row md:gap-8">
          {/* Icon column */}
          <div className="flex shrink-0 items-start gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
              <ShieldCheck className="h-6 w-6" />
            </span>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-primary md:text-2xl">
                {authorNote.heading}
              </h2>
              <span className="inline-flex items-center gap-1 rounded-full bg-light-blue/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-light-blue">
                <Info className="h-3 w-3" />
                Important note
              </span>
            </div>
            {authorNote.paragraphs.map((p, i) => (
              <p key={i} className="text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                {p}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionViewer>
  );
}
