import { motion } from "motion/react";
import {
  GraduationCap, TrendingUp, Check, Clock,
  ScrollText,
  PenLine,
} from "lucide-react";
import { IconChecklist, IconNotebook } from "@tabler/icons-react";

const EASE = [0.22, 0.61, 0.36, 1];

/* ─── Variant 1: Academic / Doctoral ─────────────────────────────────── */
function HeroImageV1() {
  const BARS = [
    { h: "28%", color: "#D4C5FF" },
    { h: "50%", color: "#A78BFA" },
    { h: "72%", color: "#7A5EE9" },
    { h: "95%", color: "#320F8C" },
  ];
  const shape = { borderRadius: "20% 40% 20% 20%" };

  return (
    <div className="relative w-[75%] sm:w-[55%] md:w-[75%] aspect-square mx-auto">
      <div
        className="relative z-3 overflow-hidden bg-[#E4E4EF] w-full h-full border-8 xl:border-10 border-white shadow-xl shadow-primary/10"
        style={shape}
      >
        <img src="/home/hero-1.jpg" alt="Graduate celebrating academic success" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-0 left-0 z-0 overflow-hidden bg-primary/10 w-full h-full -rotate-5 scale-102" style={shape} />

      {/* Badge — top-left */}
      <div className="absolute -top-4 md:top-0 -left-2 md:left-2 z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-md border-5 border-white">
        <GraduationCap className="text-white size-7" />
      </div>

      {/* Growth stats card — right */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
        className="absolute z-10 top-[12%] -right-14 bg-white/75 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-4 md:p-5 lg:p-6 shadow-xl shadow-black/10 w-44 md:w-54 lg:w-58 aspect-7/4"
      >
        <div className="flex items-start justify-between mb-2">
          <div>
            <p className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-gray-500 leading-tight">
              Doctorate Growth
            </p>
            <p className="text-2xl font-bold text-blue mt-0.5">+32.4%</p>
          </div>
          <div className="w-7 md:w-8 lg:w-9 h-7 md:h-8 lg:h-9 rounded-full bg-light-blue/10 flex items-center justify-center shrink-0">
            <TrendingUp className="size-3.5 md:size-4 lg:size-4.5 text-light-blue" />
          </div>
        </div>
        <div className="flex items-end gap-1.5 h-full mt-1">
          {BARS.map(({ h, color }, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-sm"
              style={{ backgroundColor: color }}
              initial={{ height: 0 }}
              animate={{ height: h }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.75 + i * 0.1 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Scholar success card — bottom-left */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.65 }}
        className="absolute z-10 -bottom-8 -left-10 bg-white/75 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-4 md:p-5 lg:p-6 shadow-xl shadow-black/10 min-w-[230px] md:min-w-[245px] lg:min-w-[260px]"
      >
        <div className="flex items-center gap-3 mb-3 lg:mb-5">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0 shadow-md shadow-secondary-foreground/10">
            <Check className="w-5 h-5 text-secondary-foreground" strokeWidth={3} />
          </div>
          <div>
            <p className="font-bold text-sm text-gray-900">Thesis Approved</p>
            <p className="text-xs text-gray-500 mt-0.5">Expert Quality Verified</p>
          </div>
        </div>
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-secondary-foreground">
            Scholar Success Rate
          </p>
          <p className="text-xs font-bold text-gray-700">96%</p>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
          <motion.div
            className="h-1.5 rounded-full bg-secondary"
            initial={{ width: 0 }}
            animate={{ width: "96%" }}
            transition={{ duration: 1, ease: EASE, delay: 0.9 }}
          />
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Variant 2: Writing Services ────────────────────────────────────── */
function HeroImageV2() {
  const BARS = [
    { h: "35%", color: "#C7E6FF" },
    { h: "55%", color: "#93C5FD" },
    { h: "78%", color: "#7A5EE9" },
    { h: "92%", color: "#320F8C" },
  ];
  /* diagonal blob — round top-left + bottom-right, sharp top-right + bottom-left */
  const shape = { borderRadius: "40% 20% 40% 20%" };

  return (
    <div className="relative w-[75%] sm:w-[55%] md:w-[75%] aspect-square mx-auto">
      <div
        className="relative z-3 overflow-hidden bg-[#EAF1FB] w-full h-full border-8 xl:border-10 border-white shadow-xl shadow-light-blue/15"
        style={shape}
      >
        <img src="/home/hero-2.jpg" alt="Academic writing services" className="w-full h-full object-cover" />
        {/* Subtle cool tint overlay */}
        <div className="absolute inset-0 bg-blue/10 mix-blend-multiply z-1" />
      </div>
      <div className="absolute top-0 left-0 z-0 overflow-hidden bg-light-blue/15 w-full h-full rotate-4 scale-102" style={shape} />

      {/* Badge — top-right */}
      <div className="absolute -top-4 md:top-0 -right-4 md:right-2 z-10 w-16 h-16 rounded-full bg-blue flex items-center justify-center shadow-md border-5 border-white">
        <ScrollText className="text-white size-7" />
      </div>

      {/* Words crafted card — left side */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
        className="absolute z-10 top-[12%] -left-14 bg-white/75 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-4 md:p-5 lg:p-6 shadow-xl shadow-black/10 w-44 md:w-54 lg:w-58 aspect-7/4"
      >
        <div className="flex items-start justify-between mb-2">
          <div>
            <p className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-gray-500 leading-tight">
              Words Crafted
            </p>
            <p className="text-2xl font-bold text-blue mt-0.5">2.4B+</p>
          </div>
          <div className="w-7 md:w-8 lg:w-9 h-7 md:h-8 lg:h-9 rounded-full bg-light-blue/10 flex items-center justify-center shrink-0">
            <PenLine className="size-3.5 md:size-4 lg:size-4.5 text-blue" />
          </div>
        </div>
        <div className="flex items-end gap-1.5 h-full mt-1">
          {BARS.map(({ h, color }, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-sm"
              style={{ backgroundColor: color }}
              initial={{ height: 0 }}
              animate={{ height: h }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.75 + i * 0.1 }}
            />
          ))}
        </div>
      </motion.div>

      {/* On-time delivery card — bottom-right */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.65 }}
        className="absolute z-10 -bottom-8 -right-10 bg-white/75 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-4 md:p-5 lg:p-6 shadow-xl shadow-black/10 min-w-[230px] md:min-w-[245px] lg:min-w-[260px]"
      >
        <div className="flex items-center gap-3 mb-3 lg:mb-5">
          <div className="w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center shrink-0">
            <Clock className="w-5 h-5 text-blue" strokeWidth={2.5} />
          </div>
          <div>
            <p className="font-bold text-sm text-gray-900">Delivered On Time</p>
            <p className="text-xs text-gray-500 mt-0.5">Zero Missed Deadlines</p>
          </div>
        </div>
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-blue">
            On-Time Delivery Rate
          </p>
          <p className="text-xs font-bold text-gray-700">100%</p>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
          <motion.div
            className="h-1.5 rounded-full bg-blue"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, ease: EASE, delay: 0.9 }}
          />
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Variant 3: Publications ─────────────────────────────────────────── */
function HeroImageV3() {
  const BARS = [
    { h: "40%", color: "#FDE68A" },
    { h: "60%", color: "#FBBF24" },
    { h: "80%", color: "#F59E0B" },
    { h: "95%", color: "#D97706" },
  ];
  /* inverted blob — round top-right + bottom-left, sharp top-left + bottom-right */
  const shape = { borderRadius: "20% 40% 20% 40%" };

  return (
    <div className="relative w-[75%] sm:w-[55%] md:w-[75%] aspect-square mx-auto">
      <div
        className="relative z-3 overflow-hidden bg-[#FFF8ED] w-full h-full border-8 xl:border-10 border-white shadow-xl shadow-secondary/20"
        style={shape}
      >
        <img src="/home/hero-3.jpg" alt="Academic publications and journals" className="w-full h-full object-cover" />
        {/* Subtle warm tint overlay */}
        <div className="absolute inset-0 bg-amber-400/15 mix-blend-multiply z-1" />
      </div>
      <div className="absolute top-0 left-0 z-0 overflow-hidden bg-secondary/25 w-full h-full -rotate-3 scale-102" style={shape} />

      {/* Badge — bottom-left */}
      <div className="absolute bottom-0 md:bottom-6 left-0 md:left-10 z-10 w-16 h-16 rounded-full bg-secondary flex items-center justify-center shadow-md border-5 border-white">
        <IconNotebook className="text-secondary-foreground size-7" />
      </div>

      {/* Indexed journals chip — top, spanning left-center */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
        className="absolute z-10 -top-8 -left-8 md:left-4 bg-white/75 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-4 md:p-5 shadow-xl shadow-black/10 min-w-[200px] md:min-w-[220px]"
      >
        <p className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 leading-tight">
          Indexed In
        </p>
        <div className="flex flex-wrap gap-1.5">
          {["SCOPUS", "ABDC", "WoS", "PubMed"].map((j) => (
            <span
              key={j}
              className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/8 text-primary border border-primary/15"
            >
              {j}
            </span>
          ))}
        </div>
        <p className="text-lg font-bold text-primary mt-2">
          2,000+{" "}
          <span className="text-xs font-medium text-gray-500">papers published</span>
        </p>
      </motion.div>

      {/* Acceptance rate card — right */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.65 }}
        className="absolute z-10 top-[30%] -right-14 bg-white/75 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-4 md:p-5 lg:p-6 shadow-xl shadow-black/10 w-44 md:w-54 lg:w-58 aspect-7/4"
      >
        <div className="flex items-start justify-between mb-2">
          <div>
            <p className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-gray-500 leading-tight">
              Acceptance Rate
            </p>
            <p className="text-2xl font-bold text-primary mt-0.5">98%</p>
          </div>
          <div className="w-7 md:w-8 lg:w-9 h-7 md:h-8 lg:h-9 rounded-full bg-secondary/40 flex items-center justify-center shrink-0">
            <IconChecklist className="size-3.5 md:size-4 lg:size-4.5 text-secondary-foreground" />
          </div>
        </div>
        <div className="flex items-end gap-1.5 h-full mt-1">
          {BARS.map(({ h, color }, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-sm"
              style={{ backgroundColor: color }}
              initial={{ height: 0 }}
              animate={{ height: h }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.75 + i * 0.1 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Public component ────────────────────────────────────────────────── */
function HeroImage({ variant = 1 }) {
  if (variant === 2) return <HeroImageV2 />;
  if (variant === 3) return <HeroImageV3 />;
  return <HeroImageV1 />;
}

export default HeroImage;
