import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUp } from "lucide-react";

// Floating back-to-top control. Appears once the user has scrolled past the
// first viewport-ish, and smoothly returns to the top on click. Enter/exit and
// hover/tap micro-interactions are handled by framer-motion.
export default function BackToTop({ threshold = 600 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 24 }}
          className="fixed bottom-6 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-b from-[#6B52F9] to-[#8B79F2] text-white shadow-lg shadow-light-blue/40 ring-1 ring-white/25 md:bottom-8 md:right-8"
        >
          <ArrowUp className="h-5 w-5" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
