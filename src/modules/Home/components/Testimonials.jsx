import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    quote:
      `"I spent over a decade building businesses and mentoring startups — but never imagined I'd be called "Dr." In just weeks, InscribeIQ helped me earn that recognition."`,
    name: "Dr. Karan Mehta",
    role: "Entrepreneur, Mumbai",
    experience: "15 Years of Experience",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      `"The publication support was world-class. My research reached an indexed journal far quicker than I thought possible, and the team guided me through every revision."`,
    name: "Dr. Ananya Rao",
    role: "Researcher, Bengaluru",
    experience: "9 Years of Experience",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      `"From thesis structuring to my final defence, InscribeIQ stood beside me at every step. The honorary recognition opened doors I never expected to walk through."`,
    name: "Dr. Rajiv Menon",
    role: "Educator, Chennai",
    experience: "20 Years of Experience",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
  },
  {
    quote:
      `"A truly personalised experience. My dedicated consultant understood my goals and delivered beyond expectations. The honorary doctorate is now a proud part of my journey."`,
    name: "Dr. Sofia Williams",
    role: "Social Worker, Delhi",
    experience: "12 Years of Experience",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

// Decorative avatars that orbit around the active testimonial
const ORBIT = {
  outer: [
    "https://randomuser.me/api/portraits/men/12.jpg",
    "https://randomuser.me/api/portraits/women/24.jpg",
    "https://randomuser.me/api/portraits/men/45.jpg",
    "https://randomuser.me/api/portraits/women/9.jpg",
  ],
  inner: [
    "https://randomuser.me/api/portraits/women/15.jpg",
    "https://randomuser.me/api/portraits/men/76.jpg",
    "https://randomuser.me/api/portraits/women/33.jpg",
  ],
};

// Card top-corner notch dimensions (px) — the arrow buttons nest inside these.
const NOTCH_W = 100;
const NOTCH_H = 90;
const BTM_R = 28; // bottom corner radius
const NOTCH_R = 16; // rounding radius for the notch corners

// Build a clip-path with rounded corners. polygon() only draws straight edges,
// so every corner is approximated by sampling points along a quarter-circle arc.
// Coordinates stay responsive: x/y are kept as [pct, px] -> `calc(100% ± Npx)`.
const CARD_CLIP = (() => {
  // Vertices clockwise. x/y = [pct, px]; r = corner radius;
  // in/out = travel directions in screen coords (x → right, y → down).
  const V = [
    { x: [0, NOTCH_W],    y: [0, 0],       r: NOTCH_R, in: [0, -1], out: [1, 0] },  // top of left notch
    { x: [100, -NOTCH_W], y: [0, 0],       r: NOTCH_R, in: [1, 0],  out: [0, 1] },  // top of right notch
    { x: [100, -NOTCH_W], y: [0, NOTCH_H], r: NOTCH_R, in: [0, 1],  out: [1, 0] },  // right notch inner
    { x: [100, 0],        y: [0, NOTCH_H], r: NOTCH_R, in: [1, 0],  out: [0, 1] },  // right notch outer
    { x: [100, 0],        y: [100, 0],     r: BTM_R,   in: [0, 1],  out: [-1, 0] }, // bottom-right
    { x: [0, 0],          y: [100, 0],     r: BTM_R,   in: [-1, 0], out: [0, -1] }, // bottom-left
    { x: [0, 0],          y: [0, NOTCH_H], r: NOTCH_R, in: [0, -1], out: [1, 0] },  // left notch outer
    { x: [0, NOTCH_W],    y: [0, NOTCH_H], r: NOTCH_R, in: [1, 0],  out: [0, -1] }, // left notch inner
  ];
  const SEG = 4; // samples per corner arc
  const fmt = (pct, px) => {
    const p = Math.round(px * 100) / 100;
    if (pct === 0) return `${p}px`;
    if (p === 0) return `100%`;
    return `calc(100% ${p < 0 ? "-" : "+"} ${Math.abs(p)}px)`;
  };

  const pts = [];
  for (const c of V) {
    const r = c.r;
    const cx = c.x[1] - r * c.in[0] + r * c.out[0]; // arc centre px (x)
    const cy = c.y[1] - r * c.in[1] + r * c.out[1]; // arc centre px (y)
    const tIn = [c.x[1] - r * c.in[0] - cx, c.y[1] - r * c.in[1] - cy];
    const tOut = [c.x[1] + r * c.out[0] - cx, c.y[1] + r * c.out[1] - cy];
    const a0 = Math.atan2(tIn[1], tIn[0]);
    let d = Math.atan2(tOut[1], tOut[0]) - a0;
    while (d > Math.PI) d -= 2 * Math.PI;
    while (d < -Math.PI) d += 2 * Math.PI;
    for (let i = 0; i <= SEG; i++) {
      const a = a0 + (d * i) / SEG;
      pts.push(
        `${fmt(c.x[0], cx + r * Math.cos(a))} ${fmt(c.y[0], cy + r * Math.sin(a))}`
      );
    }
  }
  return `polygon(${pts.join(", ")})`;
})();

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
  const outerD = width * 1;
  const innerD = width * 0.88;
  const outerA = clamp(48, width * 0.085, 68);
  const innerA = clamp(44, width * 0.075, 60);

  return (
    <SectionViewer className={"flex flex-col justify-center items-center overflow-hidden"}>
      <div className="flex flex-col justify-center items-center gap-4">
        <SectionLabel label={"Testimonials"} />
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          Hear Success Stories from Our Recipients
        </h2>
      </div>


      <div className="mx-auto flex w-full max-w-4xl flex-col items-end mt-[15%]">
        {/* Orbit stage — its width drives the ring diameters */}
        <div ref={stageRef} className="relative h-[260px] w-full sm:h-[320px]">
          {width > 0 && (
            <>
              <OrbitRing
                diameter={innerD}
                duration={90}
                direction={1}
                avatars={ORBIT.inner}
                avatarSize={innerA}
                className={"-mb-[6%]"}
              />
              <OrbitRing
                diameter={outerD}
                duration={120}
                direction={-1}
                avatars={ORBIT.outer}
                avatarSize={outerA}
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
                className="h-32 w-32 rounded-full border-6 md:border-8 border-white object-cover sm:h-40 sm:w-40"
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
            style={{ width: NOTCH_W, height: NOTCH_H }}
          >
            <Button
              size="icon"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="h-16 w-16 rounded-2xl bg-primary-foreground text-light-blue hover:bg-light-blue hover:text-white"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </div>
          <div
            className="absolute right-0 top-0 z-30 flex items-center justify-center"
            style={{ width: NOTCH_W, height: NOTCH_H }}
          >
            <Button
              size="icon"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="h-16 w-16 rounded-2xl bg-primary-foreground text-light-blue hover:bg-light-blue hover:text-white"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Quote card — top corners notched via clip-path */}
          <div
            className="w-full bg-primary-foreground px-6 pb-10 pt-24 text-center sm:px-12 sm:pt-28"
            style={{ clipPath: CARD_CLIP }}
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
                <p className="max-w-xl text-lg font-medium italic leading-relaxed text-[#3F6B66] sm:text-xl">
                  {current.quote}
                </p>

                <div className="flex flex-col items-center gap-1">
                  <h4 className="text-2xl font-bold tracking-tight text-primary">
                    {current.name}
                  </h4>
                  <p className="text-base text-muted-foreground">
                    {current.role}
                  </p>
                  <p className="text-sm font-medium text-muted-foreground">
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
