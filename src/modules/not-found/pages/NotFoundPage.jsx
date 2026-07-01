import { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Home, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const EASE = [0.22, 0.61, 0.36, 1];

function useParticles(count) {
  return useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.07,
        driftX: (Math.random() - 0.5) * 50,
        driftY: (Math.random() - 0.5) * 50,
        duration: Math.random() * 10 + 8,
        delay: Math.random() * 6,
      })),
    []
  );
}

const QUICK_LINKS = [
  { label: "Services", to: "/services" },
  { label: "Publications", to: "/publications/scopus" },
  { label: "Courses", to: "/courses/phd" },
  { label: "Consultation", to: "/consultation" },
  { label: "FAQs", to: "/faqs" },
];

const LIME_DOTS = [
  { left: "8%", top: "20%", dur: 4.5, delay: 0 },
  { left: "20%", top: "65%", dur: 5.2, delay: 1.1 },
  { left: "38%", top: "12%", dur: 6.0, delay: 0.6 },
  { left: "62%", top: "80%", dur: 4.8, delay: 2.1 },
  { left: "78%", top: "18%", dur: 5.6, delay: 0.3 },
  { left: "90%", top: "55%", dur: 4.2, delay: 1.7 },
  { left: "50%", top: "90%", dur: 5.9, delay: 0.9 },
  { left: "15%", top: "45%", dur: 4.6, delay: 2.4 },
];

export default function NotFoundPage() {
  const particles = useParticles(55);

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-[#0e0330]">

      {/* ── Deep ambient glows ─────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Central purple bloom */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#6B52F9]/20 blur-[140px]" />
        {/* Top-left blue */}
        <div className="absolute -top-32 -left-32 w-[450px] h-[450px] rounded-full bg-[#320F8C]/30 blur-[100px]" />
        {/* Bottom-right cool */}
        <div className="absolute -bottom-24 -right-24 w-[380px] h-[380px] rounded-full bg-[#7A5EE9]/15 blur-[90px]" />
        {/* Top vignette */}
        <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-[#0e0330]/80 to-transparent" />
        {/* Bottom vignette */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#0e0330]/70 to-transparent" />
      </div>

      {/* ── White particles ────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
            }}
            animate={{
              x: [0, p.driftX, 0],
              y: [0, p.driftY, 0],
              opacity: [p.opacity, p.opacity * 3, p.opacity],
            }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        {/* Lime accent floaters */}
        {LIME_DOTS.map((d, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#d2fa4d]"
            style={{ left: d.left, top: d.top, width: 2.5, height: 2.5, opacity: 0.35 }}
            animate={{ y: [0, -24, 0], opacity: [0.35, 0.85, 0.35] }}
            transition={{ duration: d.dur, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* ── Rotating rings ─────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute w-[340px] h-[340px] rounded-full border border-white/[0.06]"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#d2fa4d] shadow-[0_0_8px_3px_rgba(210,250,77,0.5)]" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
          className="absolute w-[500px] h-[500px] rounded-full border border-white/[0.04]"
        >
          <div className="absolute bottom-[10%] right-[8%] w-2 h-2 rounded-full bg-[#7A5EE9] shadow-[0_0_8px_3px_rgba(122,94,233,0.5)]" />
        </motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
          className="absolute w-[650px] h-[650px] rounded-full border border-dashed border-white/[0.025]"
        />
      </div>

      {/* ── Main content ──────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-20 max-w-2xl w-full mx-auto">

        {/* 404 numeral */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative select-none mb-4"
        >
          {/* Ghost outline behind */}
          <span
            aria-hidden="true"
            className="absolute inset-0 text-[clamp(9rem,24vw,16rem)] font-black leading-none text-transparent"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.06)" }}
          >
            404
          </span>
          {/* Primary numeral */}
          <span
            className="relative text-[clamp(9rem,24vw,16rem)] font-black leading-none text-white"
            style={{ textShadow: "0 0 80px rgba(107,82,249,0.9), 0 0 160px rgba(107,82,249,0.45)" }}
          >
            404
          </span>
          {/* Animated lime bar */}
          <motion.div
            animate={{ scaleX: [0.5, 1.1, 0.5], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[3px] w-28 rounded-full bg-gradient-to-r from-transparent via-[#d2fa4d] to-transparent"
          />
        </motion.div>

        {/* Lime badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.2 }}
          className="mb-7"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#d2fa4d]/25 bg-[#d2fa4d]/10 px-5 py-1.5 text-[11px] font-semibold tracking-widest text-[#d2fa4d] uppercase manrope">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d2fa4d] animate-pulse" />
            Page not found
          </span>
        </motion.div>

        {/* Glass content card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
          className="w-full rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl px-8 py-10 flex flex-col items-center gap-8 shadow-[0_0_60px_rgba(107,82,249,0.1),inset_0_1px_0_rgba(255,255,255,0.08)]"
        >

          {/* Heading + sub-copy */}
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
              Looks like this page
              <br />
              <span className="text-[#7A5EE9]">went off-script.</span>
            </h1>
            <p className="text-[15px] text-white/50 leading-relaxed max-w-sm mx-auto">
              The page you&apos;re looking for doesn&apos;t exist or may have been moved.
              Head back home — we&apos;ll point you in the right direction.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
            <Button
              asChild
              size="lg"
              variant="gradiant"
              className="rounded-full pl-6 pr-7 w-full sm:w-auto shadow-[0_4px_24px_rgba(107,82,249,0.4)]"
            >
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-full px-7 w-full sm:w-auto bg-white/8 border border-white/15 text-white hover:bg-white/15 transition-colors duration-200"
            >
              <Link to="/contact_us">
                <MessageCircle className="mr-2 h-4 w-4" />
                Contact Us
              </Link>
            </Button>
          </div>

          {/* Quick links */}
          <div className="w-full">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-[11px] text-white/25 font-medium tracking-widest uppercase">
                or explore
              </span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {QUICK_LINKS.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className="rounded-full px-4 py-1.5 text-sm font-medium text-white/50 bg-white/5 hover:bg-white/12 hover:text-white transition-colors duration-200 border border-white/10"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Go back */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-8"
        >
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-1.5 text-sm text-white/30 hover:text-white/60 transition-colors duration-200"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Go back
          </button>
        </motion.div>

      </div>
    </div>
  );
}
