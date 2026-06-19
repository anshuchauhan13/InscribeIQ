import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionViewer from "@/components/common/SectionViewer";
import { useNavigate } from "react-router-dom";


export default function ConsultationCTA() {
  const navigate = useNavigate()

  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #170545 0%, #320F8C 50%, #7A5EE9 100%)",
      }}
    >
      {/* Ambient orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-secondary/10 blur-[100px]" />
        <div className="absolute -right-16 top-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-white/5 blur-[100px]" />
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

          <div className="flex flex-col gap-3 max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl xl:text-5xl leading-tight">
              Your academic journey starts{" "}
              <span className="text-secondary">with one call.</span>
            </h2>
            <p className="text-sm text-white/60 leading-relaxed md:text-base">
              Join 10,000+ scholars who transformed their careers with InscribeIQ's
              expert guidance. Book your free consultation today.
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
              className="rounded-full bg-secondary text-primary hover:bg-secondary/90 font-bold px-8 shadow-lg shadow-secondary/20"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Book Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white/25 text-white hover:bg-white/10 hover:text-white px-8"
              onClick={() => navigate("/contact_us")}
            >
              Contact Us
            </Button>
          </motion.div>

          <p className="text-xs text-white/35">
            No credit card required · No spam · Free of cost
          </p>
        </motion.div>
      </SectionViewer>
    </div>
  );
}
