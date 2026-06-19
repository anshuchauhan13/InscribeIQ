import { motion } from "motion/react";
import { LogoCloud } from "@/modules/home/components/UniversityPartnership";
import SectionViewer from "@/components/common/SectionViewer";

const logos = [
  { src: "https://svgl.app/library/nvidia-wordmark-light.svg", alt: "Nvidia" },
  { src: "https://svgl.app/library/supabase_wordmark_light.svg", alt: "Supabase" },
  { src: "https://svgl.app/library/openai_wordmark_light.svg", alt: "OpenAI" },
  { src: "https://svgl.app/library/turso-wordmark-light.svg", alt: "Turso" },
  { src: "https://svgl.app/library/vercel_wordmark.svg", alt: "Vercel" },
  { src: "https://svgl.app/library/github_wordmark_light.svg", alt: "GitHub" },
  { src: "https://svgl.app/library/clerk-wordmark-light.svg", alt: "Clerk" },
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
