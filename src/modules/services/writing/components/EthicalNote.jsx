import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";
import SectionViewer from "@/components/common/SectionViewer";

export default function EthicalNote({ data }) {
  const { ethical } = data;

  return (
    <SectionViewer className="inter pb-16 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-3xl border border-border bg-muted/40 p-8 text-center md:p-10"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
          <ShieldCheck className="h-6 w-6" />
        </span>
        <h2 className="text-xl font-bold text-primary md:text-2xl">{ethical.heading}</h2>
        <div className="flex flex-col gap-3">
          {ethical.paragraphs.map((p, i) => (
            <p key={i} className="text-sm leading-relaxed text-muted-foreground md:text-[15px]">
              {p}
            </p>
          ))}
        </div>
      </motion.div>
    </SectionViewer>
  );
}
