import { motion } from "motion/react";
import { ArrowRight, MessageSquareText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionViewer from "@/components/common/SectionViewer";

export default function PublicationFinalCta({ data }) {
  const navigate = useNavigate();
  const { finalCta } = data;

  // Split the heading so the trailing phrase can take the lime accent.
  const lead = finalCta.accent
    ? finalCta.heading.replace(finalCta.accent, "").trim()
    : finalCta.heading;

  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #170545 0%, #320F8C 50%, #7A5EE9 100%)",
      }}
    >
      {/* Ambient orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-secondary/10 blur-[100px]" />
        <div className="absolute -right-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-white/5 blur-[100px]" />
      </div>

      {/* Dot pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <SectionViewer className="relative z-10 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <div className="flex max-w-4xl flex-col gap-3">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl xl:text-5xl">
              {lead}{" "}
              {finalCta.accent && <span className="text-secondary">{finalCta.accent}</span>}
            </h2>
            <p className="text-sm leading-relaxed text-white/60 md:text-base">
              {finalCta.sub}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <Button
              size="lg"
              className="rounded-full bg-secondary px-8 font-bold text-primary shadow-lg shadow-secondary/20 hover:bg-secondary/90"
              onClick={() => navigate("/consultation")}
            >
              {finalCta.primaryCta} <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/25 px-8 text-white hover:bg-white/10 hover:text-white"
            >
              <a href="#find-journal">
                <MessageSquareText className="mr-1 h-4 w-4" />
                {finalCta.secondaryCta}
              </a>
            </Button>
          </motion.div>

          <p className="max-w-2xl text-xs leading-relaxed text-white/45 md:text-sm">
            {finalCta.contactLine}
          </p>
        </motion.div>
      </SectionViewer>
    </div>
  );
}
