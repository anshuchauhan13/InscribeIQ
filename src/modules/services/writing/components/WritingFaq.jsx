import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div
      className={cn(
        "rounded-2xl border transition-colors duration-200",
        isOpen ? "border-light-blue/30 bg-light-blue/[0.03]" : "border-border bg-white hover:border-blue/20"
      )}
    >
      <button
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
        onClick={onToggle}
      >
        <span
          className={cn(
            "text-sm font-semibold leading-snug transition-colors md:text-base",
            isOpen ? "text-blue" : "text-foreground"
          )}
        >
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.22, ease: "easeInOut" }}
          className={cn(
            "flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors",
            isOpen ? "bg-light-blue text-white" : "bg-muted text-muted-foreground"
          )}
        >
          <Plus className="h-4 w-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.26, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-xs leading-relaxed text-muted-foreground md:px-6 md:pb-6 md:text-sm">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function WritingFaq({ data }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <SectionViewer className="inter py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto mb-10 flex max-w-3xl flex-col items-center gap-3 text-center"
      >
        <SectionLabel label="FAQs" />
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl">
          Frequently asked questions
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        className="mx-auto flex max-w-3xl flex-col gap-3"
      >
        {data.faqs.map((item, idx) => (
          <FaqItem
            key={idx}
            item={item}
            isOpen={openIndex === idx}
            onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
          />
        ))}
      </motion.div>
    </SectionViewer>
  );
}
