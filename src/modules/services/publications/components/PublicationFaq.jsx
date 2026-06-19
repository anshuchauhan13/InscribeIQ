import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import SectionViewer from "@/components/common/SectionViewer";
import { Button } from "@/components/ui/button";

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div
      className={cn(
        "rounded-xl border transition-colors duration-200",
        isOpen
          ? "border-primary/15 bg-primary/[0.02] shadow-sm shadow-blue/10"
          : "border-border bg-white hover:border-blue/20"
      )}
    >
      <button
        className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left xl:px-7 xl:py-5"
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
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.22, ease: "easeInOut" }}
          className="shrink-0"
        >
          <ChevronDown
            className={cn("h-4 w-4 transition-colors", isOpen ? "text-blue" : "text-muted-foreground")}
          />
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
            <p className="px-5 pb-5 text-xs leading-relaxed text-muted-foreground md:text-sm xl:px-7 xl:pb-6">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PublicationFaq({ data }) {
  const [openIndex, setOpenIndex] = useState(0);
  const navigate = useNavigate();

  return (
    <SectionViewer className="inter py-16 md:py-24">
      <div className="grid items-start gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
        {/* Left — heading */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-5 lg:sticky lg:top-24"
        >
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-light-blue">
              FAQs
            </p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Everything you need to know about publishing with {data.name} journal
              support at Inscribe IQ.
            </p>
          </div>

          <div className="h-px w-16 bg-gradient-to-r from-light-blue/60 to-transparent" />

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold text-muted-foreground">Still have questions?</p>
            <Button
              variant="link"
              className="w-fit rounded-full px-0"
              onClick={() => navigate("/contact_us")}
            >
              Contact our team <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </motion.div>

        {/* Right — accordion */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col gap-3"
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
      </div>
    </SectionViewer>
  );
}
