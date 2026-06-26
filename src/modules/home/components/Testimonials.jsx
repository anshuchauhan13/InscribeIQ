import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const TESTIMONIALS = [
  {
    quote:
      `"I spent two decades in education before InscribeIQ helped me formalise what I had built. The process was clear, the team was professional, and the recognition I received has opened conversations I never thought possible at this stage of my career."`,
    name: "Dr. Rajiv Menon",
    role: "Educator, Chennai",
    experience: "20 Years of Experience",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
  },
  {
    quote:
      `"I had published research, led teams, and built programmes that thousands of students benefited from. InscribeIQ helped me translate all of that into a credential that finally matched the work. The support I received was thorough, respectful, and completely reliable."`,
    name: "Dr. Priya Nair",
    role: "Academic Director, Bengaluru",
    experience: "17 Years of Experience",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      `"Getting my PhD felt like an impossible task while managing a full-time role. InscribeIQ broke the entire process into manageable steps, assigned me a mentor who understood my subject, and kept me on track from proposal to viva. I could not have done it without that structure."`,
    name: "Dr. Amandeep Singh",
    role: "Senior Research Consultant, Chandigarh",
    experience: "14 Years of Experience",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      `"My research paper had been sitting incomplete for over a year. Within weeks of working with InscribeIQ, it was edited, formatted, and submitted to a Scopus-indexed journal. Seeing my name in print in an internationally recognised publication was a moment I will not forget."`,
    name: "Dr. Meera Krishnamurthy",
    role: "Associate Professor, Hyderabad",
    experience: "11 Years of Experience",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    quote:
      `"I was sceptical at first. I had tried other services and walked away disappointed. InscribeIQ was different from the first call. They were honest about timelines, clear about what was involved, and delivered exactly what they promised. My honorary doctorate nomination was handled with complete professionalism."`,
    name: "Dr. Farhan Siddiqui",
    role: "Business Leader and Philanthropist, Mumbai",
    experience: "25 Years of Experience",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

// Decorative avatars that orbit around the active testimonial
const ORBIT = {
  outer: [
    "https://randomuser.me/api/portraits/men/12.jpg",
    "https://randomuser.me/api/portraits/women/24.jpg",
    "https://randomuser.me/api/portraits/men/45.jpg",
    "https://randomuser.me/api/portraits/women/9.jpg",
    "https://randomuser.me/api/portraits/men/12.jpg",
    "https://randomuser.me/api/portraits/women/24.jpg",
  ],
  inner: [
    "https://randomuser.me/api/portraits/women/15.jpg",
    "https://randomuser.me/api/portraits/men/76.jpg",
    "https://randomuser.me/api/portraits/women/33.jpg",
    "https://randomuser.me/api/portraits/men/12.jpg",
    "https://randomuser.me/api/portraits/women/24.jpg",
  ],
};



// Card top-corner notch dimensions (px) — the arrow buttons nest inside these.
const NOTCH_W = 100;
const NOTCH_H = 90;
const NOTCH_W_SM = 64;
const NOTCH_H_SM = 58;

// Build a clip-path with rounded corners. polygon() only draws straight edges,
// so every corner is approximated by sampling points along a quarter-circle arc.
// Coordinates stay responsive: x/y are kept as [pct, px] -> `calc(100% ± Npx)`.
function buildCardClip(nW, nH, btmR = 28, notchR = 16) {
  const V = [
    { x: [0, nW],    y: [0, 0],   r: notchR, in: [0, -1], out: [1, 0] },
    { x: [100, -nW], y: [0, 0],   r: notchR, in: [1, 0],  out: [0, 1] },
    { x: [100, -nW], y: [0, nH],  r: notchR, in: [0, 1],  out: [1, 0] },
    { x: [100, 0],   y: [0, nH],  r: notchR, in: [1, 0],  out: [0, 1] },
    { x: [100, 0],   y: [100, 0], r: btmR,   in: [0, 1],  out: [-1, 0] },
    { x: [0, 0],     y: [100, 0], r: btmR,   in: [-1, 0], out: [0, -1] },
    { x: [0, 0],     y: [0, nH],  r: notchR, in: [0, -1], out: [1, 0] },
    { x: [0, nW],    y: [0, nH],  r: notchR, in: [1, 0],  out: [0, -1] },
  ];
  const SEG = 4;
  const fmt = (pct, px) => {
    const p = Math.round(px * 100) / 100;
    if (pct === 0) return `${p}px`;
    if (p === 0) return `100%`;
    return `calc(100% ${p < 0 ? "-" : "+"} ${Math.abs(p)}px)`;
  };
  const pts = [];
  for (const c of V) {
    const r = c.r;
    const cx = c.x[1] - r * c.in[0] + r * c.out[0];
    const cy = c.y[1] - r * c.in[1] + r * c.out[1];
    const tIn  = [c.x[1] - r * c.in[0]  - cx, c.y[1] - r * c.in[1]  - cy];
    const tOut = [c.x[1] + r * c.out[0] - cx, c.y[1] + r * c.out[1] - cy];
    const a0 = Math.atan2(tIn[1], tIn[0]);
    let d = Math.atan2(tOut[1], tOut[0]) - a0;
    while (d > Math.PI)  d -= 2 * Math.PI;
    while (d < -Math.PI) d += 2 * Math.PI;
    for (let i = 0; i <= SEG; i++) {
      const a = a0 + (d * i) / SEG;
      pts.push(`${fmt(c.x[0], cx + r * Math.cos(a))} ${fmt(c.y[0], cy + r * Math.sin(a))}`);
    }
  }
  return `polygon(${pts.join(", ")})`;
}

const CARD_CLIP    = buildCardClip(NOTCH_W,    NOTCH_H,    28, 16);
const CARD_CLIP_SM = buildCardClip(NOTCH_W_SM, NOTCH_H_SM, 20, 10);

const clamp = (min, val, max) => Math.max(min, Math.min(val, max));

/**
 * A single rotating ring. The ring spins; each avatar counter-rotates so the
 * faces stay upright while orbiting the common centre (bottom-centre of the stage).
 */
function OrbitRing({ diameter, duration, direction = 1, avatars, avatarSize, className }) {
  return (
    <motion.div
      className={cn("absolute left-1/2 bottom-0 rounded-full border-3 border-[#B7C2D7]/30", className)}
      style={{
        width: diameter,
        height: diameter,
        x: "-50%",
        y: "50%",
      }}
      animate={{ rotate: 360 * direction }}
      transition={{ duration, ease: "linear", repeat: Infinity }}
    >
      {avatars.map((src, i) => {
        const angle = (360 / avatars.length) * i;
        return (
          <div
            key={i}
            className="absolute inset-0"
            style={{ transform: `rotate(${angle}deg)` }}
          >
            <motion.img
              src={src}
              alt=""
              className="absolute left-1/2 top-0 rounded-full border-2 border-white object-cover shadow-md"
              style={{
                width: avatarSize,
                height: avatarSize,
                x: "-50%",
                y: "-50%",
              }}
              animate={{ rotate: [-angle, -angle - 360 * direction] }}
              transition={{ duration, ease: "linear", repeat: Infinity }}
            />
          </div>
        );
      })}
    </motion.div>
  );
}

function Testimonials() {
  const isMobile = useIsMobile()
  const [active, setActive] = useState(0);
  const [width, setWidth] = useState(0);
  const stageRef = useRef(null);
  const count = TESTIMONIALS.length;

  // Measure the section width to size the orbit rings responsively
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const go = useCallback(
    (dir) => setActive((prev) => (prev + dir + count) % count),
    [count]
  );

  // Auto-advance the content
  useEffect(() => {
    const id = setInterval(() => go(1), 5000);
    return () => clearInterval(id);
  }, [go]);

  const current = TESTIMONIALS[active];

  // Ring diameters derived from the measured section width
  const outerD = width * 0.94;
  const innerD = width * 0.80;
  const outerA = clamp(48, width * 0.085, 68);
  const innerA = clamp(44, width * 0.075, 60);

  return (
    <SectionViewer className={"flex flex-col justify-center items-center overflow-hidden"}>
      <div className="flex flex-col justify-center items-center gap-4">
        <SectionLabel label={"Testimonials"} />
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl text-center">
          Success Stories from Scholars Across the World
        </h2>
      </div>


      <div className="mx-auto flex w-full max-w-4xl flex-col items-end sm:mt-[10%]">
        {/* Orbit stage — its width drives the ring diameters */}
        <div ref={stageRef} className="relative h-[200px] sm:h-[260px] w-full sm:h-[320px]">
          {width > 0 && (
            <>
              <OrbitRing
                diameter={innerD}
                duration={90}
                direction={1}
                avatars={ORBIT.inner}
                avatarSize={innerA}
                className={"-mb-[16%]"}
              />
              <OrbitRing
                diameter={outerD}
                duration={120}
                direction={-1}
                avatars={ORBIT.outer}
                avatarSize={outerA}
                className={"-mb-[10%]"}
              />
            </>
          )}

          {/* Active avatar at the common centre (bottom-centre) */}
          <div className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2 translate-y-1/2">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.image}
                src={current.image}
                alt={current.name}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.4 }}
                className="h-28 md:h-30 lg:h-32 w-28 md:w-30 lg:w-32 rounded-full border-6 md:border-8 border-white object-cover sm:h-40 sm:w-40"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Card wrapper — holds the clipped card and the (unclipped) arrows */}
        <div className="relative z-10 -mt-2 w-full">
          {/* Arrows nest into the card's notched top corners.
                Kept as siblings (outside the clip) so they aren't cut off. */}
          <div
            className="absolute left-0 top-0 z-30 flex items-center justify-center"
            style={{ width: isMobile ? NOTCH_W_SM : NOTCH_W, height: isMobile ? NOTCH_H_SM : NOTCH_H }}
          >
            <Button
              size="icon"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="h-9 w-9 sm:h-16 sm:w-16 lg:rounded-xl sm:rounded-2xl bg-muted text-primary/30 hover:bg-light-blue hover:text-white shadow-md"
            >
              <ArrowLeft strokeWidth={2.5} className="size-4 sm:size-6" />
            </Button>
          </div>
          <div
            className="absolute right-0 top-0 z-30 flex items-center justify-center"
            style={{ width: isMobile ? NOTCH_W_SM : NOTCH_W, height: isMobile ? NOTCH_H_SM : NOTCH_H }}
          >
            <Button
              size="icon"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="h-9 w-9 sm:h-16 sm:w-16 lg:rounded-xl sm:rounded-2xl bg-muted text-primary/30 hover:bg-light-blue hover:text-white shadow-md"
            >
              <ArrowRight strokeWidth={2.5} className="size-4 sm:size-6" />
            </Button>
          </div>

          {/* Quote card — top corners notched via clip-path */}
          <div
            className="w-full bg-muted px-6 pb-10 pt-24 sm:pt-20 text-center sm:px-12 sm:pt-28 shadow-md min-h-80"
            style={{ clipPath: isMobile ? CARD_CLIP_SM : CARD_CLIP }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center gap-6"
              >
                <p className="max-w-xl font-medium italic leading-relaxed text-[#3F6B66]text-sm md:text-base lg:text-lg">
                  {current.quote}
                </p>

                <div className="flex flex-col items-center gap-1">
                  <h4 className="text-xl md:text-2xl font-bold tracking-tight text-primary">
                    {current.name}
                  </h4>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {current.role}
                  </p>
                  <p className="text-xs md:text-sm font-medium text-muted-foreground">
                    {current.experience}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="mt-8 flex items-center justify-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-light-blue" : "w-2 bg-muted-foreground/30"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionViewer>

  );
}

export default Testimonials;