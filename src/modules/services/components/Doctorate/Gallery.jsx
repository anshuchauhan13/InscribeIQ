import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";

const EASE = [0.22, 0.61, 0.36, 1];

// Coverflow depth styling by distance from the centre card.
// index 0 = centre (largest), 1 = first neighbour, 2 = outer neighbour.
const SCALE = [1, 0.82, 0.64];
const X_FACTOR = [0, 0.58, 1.02]; // multiplied by the card width
const OPACITY = [1, 0.9, 0.66];

/**
 * Breakpoint-aware sizing:
 *   phone  (<768)  → 1 card  (maxOffset 0)
 *   md-xl  (≥768)  → 3 cards (maxOffset 1)
 *   2xl    (≥1536) → 5 cards (maxOffset 2)
 * Card size is derived from the live container width so the fan always fits.
 */
function useCarouselConfig(ref) {
  const [cfg, setCfg] = useState({ maxOffset: 1, cardW: 320, cardH: 440 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const compute = () => {
      const w = el.clientWidth || window.innerWidth;
      const vw = window.innerWidth;
      let maxOffset, cardW, cardH;

      if (vw >= 1536) {
        maxOffset = 2;
        cardW = Math.min(Math.round(w * 0.28), 440);
        cardH = 500;
      } else if (vw >= 768) {
        maxOffset = 1;
        cardW = Math.min(Math.round(w * 0.44), 380);
        cardH = 440;
      } else {
        maxOffset = 0;
        cardW = Math.min(Math.round(w * 0.86), 360);
        cardH = Math.min(Math.round(cardW * 1.22), 400);
      }
      setCfg({ maxOffset, cardW, cardH });
    };

    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, [ref]);

  return cfg;
}

const Gallery = ({
  heading = "A Glimpse Into the Journey",
  caption = "Every image reflects a story of dedication, growth, and achievement.",
  subheading,
  images = [],
  className,
}) => {
  const slides = images.length ? images : Array.from({ length: 6 }, () => ({}));
  const n = slides.length;

  const containerRef = useRef(null);
  const { maxOffset, cardW, cardH } = useCarouselConfig(containerRef);

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (dir) => setActive((a) => (a + dir + n) % n),
    [n]
  );

  // Shortest circular distance from the active card (enables infinite looping).
  const getOffset = (i) => {
    let d = i - active;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  };

  // Autoplay — pauses on hover / interaction.
  useEffect(() => {
    if (paused || n <= 1) return;
    const id = setInterval(() => setActive((a) => (a + 1) % n), 4200);
    return () => clearInterval(id);
  }, [paused, n]);

  // Pointer swipe (works for touch + mouse) without blocking card clicks.
  const dragRef = useRef({ x: 0, down: false });
  const onPointerDown = (e) => {
    dragRef.current = { x: e.clientX, down: true };
  };
  const onPointerUp = (e) => {
    if (!dragRef.current.down) return;
    dragRef.current.down = false;
    const dx = e.clientX - dragRef.current.x;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
  };

  const captionText = subheading || caption;

  return (
    <SectionViewer className={cn("py-10 lg:py-16", className)}>
      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mx-auto mb-8 flex max-w-2xl flex-col items-center gap-3 text-center md:mb-12"
      >
        <SectionLabel label="Gallery" />
        <h2 className="text-2xl font-semibold leading-tight text-foreground sm:text-3xl lg:text-5xl">
          {heading}
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
          {captionText}
        </p>
      </motion.div>

      {/* ── Coverflow carousel ── */}
      <div className="relative">
        <div
          ref={containerRef}
          className="relative w-full touch-pan-y select-none overflow-hidden"
          style={{ height: cardH }}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerLeave={() => (dragRef.current.down = false)}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {slides.map((img, i) => {
            const offset = getOffset(i);
            const abs = Math.abs(offset);
            const visible = abs <= maxOffset;
            const depth = Math.min(abs, 2);
            const x = Math.sign(offset) * X_FACTOR[depth] * cardW;

            return (
              <motion.div
                key={i}
                className="absolute inset-0 m-auto overflow-hidden rounded-2xl bg-muted shadow-xl lg:rounded-3xl"
                style={{
                  width: cardW,
                  height: cardH,
                  zIndex: 50 - abs,
                  pointerEvents: visible ? "auto" : "none",
                  cursor: visible && offset !== 0 ? "pointer" : "default",
                }}
                initial={false}
                animate={{
                  x,
                  scale: SCALE[depth],
                  opacity: visible ? OPACITY[depth] : 0,
                }}
                transition={{ duration: 0.6, ease: EASE }}
                onClick={() => visible && offset !== 0 && setActive(i)}
                aria-hidden={!visible}
              >
                {img?.src ? (
                  <img
                    src={img.src}
                    alt={img.alt || ""}
                    draggable={false}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="text-xs text-muted-foreground">img</span>
                  </div>
                )}

                {/* Caption overlay — only on the focused card */}
                <div
                  className={cn(
                    "pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 transition-opacity duration-500",
                    offset === 0 ? "opacity-100" : "opacity-0"
                  )}
                >
                  {img?.alt && (
                    <p className="text-sm font-medium text-white lg:text-base">
                      {img.alt}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Arrows ── */}
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous image"
          className="absolute left-1 top-1/2 z-[60] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-primary/10 bg-white/90 text-primary shadow-lg backdrop-blur transition-all hover:scale-105 hover:bg-white md:left-3 lg:h-12 lg:w-12"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next image"
          className="absolute right-1 top-1/2 z-[60] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-primary/10 bg-white/90 text-primary shadow-lg backdrop-blur transition-all hover:scale-105 hover:bg-white md:right-3 lg:h-12 lg:w-12"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* ── Dots ── */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {slides.map((_, i) => {
          const isActive = i === active;
          return (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Go to image ${i + 1}`}
              aria-current={isActive}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                isActive
                  ? "w-7 bg-gradient-to-r from-light-blue to-blue"
                  : "w-2 bg-primary/20 hover:bg-primary/40"
              )}
            />
          );
        })}
      </div>
    </SectionViewer>
  );
};

export default Gallery;
