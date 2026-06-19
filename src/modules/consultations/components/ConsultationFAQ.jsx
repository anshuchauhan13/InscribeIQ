import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionViewer from "@/components/common/SectionViewer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FAQS = [
  {
    q: "Is the consultation really free?",
    a: "Yes — completely. There is no charge, no hidden fee, and no commitment required. The goal of the consultation is to understand your goals and recommend the best path forward for you.",
  },
  {
    q: "Who will I be speaking with?",
    a: "You'll be connected with one of our senior academic advisors — specialists who have guided thousands of scholars, professionals, and business leaders through PhD programs, honorary doctorates, and publication journeys.",
  },
  {
    q: "How long does a consultation session last?",
    a: "A typical session runs 20–30 minutes. We keep it focused and actionable, covering your goals, eligibility, recommended programs, and next steps.",
  },
  {
    q: "What should I prepare before the consultation?",
    a: "Nothing specific — just a clear idea of what you're hoping to achieve academically or professionally. Our advisors are trained to draw out the right information and guide the conversation.",
  },
  {
    q: "How soon will I be contacted after submitting the form?",
    a: "Our team will reach out within 2–4 business hours during Mon–Sat, 9 AM – 8 PM IST. We'll confirm your preferred callback time and connect you with an advisor.",
  },
  {
    q: "Can I book a consultation for someone else?",
    a: "Absolutely. If you're booking on behalf of a colleague, family member, or employee, just mention that in the message field and we'll tailor the session accordingly.",
  },
];

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div
      className={cn(
        "rounded-xl border transition-colors duration-200",
        isOpen
          ? "border-primary/15 bg-primary/2 shadow-sm shadow-blue/10"
          : "border-border bg-white hover:border-blue/20"
      )}
    >
      <button
        className="flex w-full items-start justify-between gap-4 px-5 xl:px-7 py-4 xl:py-5 text-left"
        onClick={onToggle}
      >
        <span className={cn("text-sm md:text-base font-semibold leading-snug transition-colors", isOpen ? "text-blue" : "text-foreground")}>
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.22, ease: "easeInOut" }}
          className="shrink-0"
        >
          <ChevronDown className={cn("h-4 w-4 transition-colors", isOpen ? "text-blue" : "text-muted-foreground")} />
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
            <p className="px-5 xl:px-7 pb-5 xl:pb-6 text-xs md:text-sm leading-relaxed text-muted-foreground">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ConsultationFAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const navigate = useNavigate();

  return (
    <SectionViewer className="py-16 md:py-24">
      <div className="grid items-start gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">

        {/* Left — heading */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:sticky lg:top-24 flex flex-col gap-5"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-light-blue mb-3">FAQs</p>
            <h2 className="text-3xl font-bold tracking-tight text-primary leading-tight md:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Got questions about our consultation process? We've got answers.
            </p>
          </div>

          <div className="h-px w-16 bg-gradient-to-r from-light-blue/60 to-transparent" />

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold text-muted-foreground">Still have questions?</p>
            <Button variant="link" className={"w-fit rounded-full px-0"} onClick={() => navigate("/contact_us")}>
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
          {FAQS.map((item, idx) => (
            <AccordionItem
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
