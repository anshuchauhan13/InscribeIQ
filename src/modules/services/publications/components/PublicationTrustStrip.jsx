import { motion } from "motion/react";
import SectionViewer from "@/components/common/SectionViewer";

export default function PublicationTrustStrip({ data }) {
  const items = data.trustStrip;

  return (
    <div className="border-y border-border/60 bg-white py-7 md:py-9">
      <SectionViewer>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 md:gap-x-5"
        >
          {items.map((item, i) => (
            <span key={item} className="flex items-center gap-3 md:gap-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:text-primary md:text-sm">
                {item}
              </span>
              {i < items.length - 1 && (
                <span className="h-1.5 w-1.5 rounded-full bg-light-blue/40" />
              )}
            </span>
          ))}
        </motion.div>
      </SectionViewer>
    </div>
  );
}
