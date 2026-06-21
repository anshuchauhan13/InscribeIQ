import { motion } from "motion/react";
import { LogoCloud } from "@/modules/home/components/UniversityPartnership";
import SectionViewer from "@/components/common/SectionViewer";

const logos = [
  { src: "/gla-logo.webp", alt: "GLA" },
  { src: "/lpu-logo.svg", alt: "LPU" },
  { src: "/kuru.png", alt: "Kurushetra" },
  { src: "/euroasian.png", alt: "Amity" },
  { src: "/amu.png", alt: "AMU" },
  { src: "/jain.png", alt: "Jain University" },
  { src: "/Kennedy.png", alt: "Kennedy" },
];

export default function ConsultationTrust() {
  return (
    <div className="border-y border-border/50 bg-white py-10 md:py-12">
      <SectionViewer>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-7 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground"
        >
          Trusted by exceptional institutions around the world
        </motion.p>
        <div className="space-y-3 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <LogoCloud logos={logos} reverse={false} />
          <LogoCloud logos={logos} reverse={true} />
        </div>
      </SectionViewer>
    </div>
  );
}
