import { motion } from "motion/react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { waLink } from "@/lib/contact";

// Floating WhatsApp CTA — pinned bottom-right on every page (mounted in Layout).
// Pulsing rings + hover tooltip give it a premium, alive feel.
export default function WhatsAppButton() {
  return (
    <motion.a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.9 }}
      whileTap={{ scale: 0.92 }}
      className="group fixed bottom-6 right-5 z-50 flex items-center md:bottom-8 md:right-8"
    >
      {/* Hover tooltip */}
      <span className="pointer-events-none absolute right-full mr-3 hidden translate-x-2 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary opacity-0 shadow-xl ring-1 ring-black/5 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Chat with us
        <span className="absolute right-[-5px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 bg-white" />
      </span>

      {/* Button + pulsing rings */}
      <span className="relative flex h-14 w-14 items-center justify-center">
        <motion.span
          aria-hidden
          className="absolute h-full w-full rounded-full bg-[#25D366]"
          animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.span
          aria-hidden
          className="absolute h-full w-full rounded-full bg-[#25D366]"
          animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 1.1 }}
        />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#12b855] text-white shadow-xl shadow-[#25D366]/40 ring-4 ring-white/50 transition-transform duration-300 group-hover:scale-110">
          <IconBrandWhatsapp className="h-7 w-7" stroke={2} />
        </span>
      </span>
    </motion.a>
  );
}
