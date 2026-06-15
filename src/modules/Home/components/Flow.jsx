import { Fragment } from "react";
import {
  UserRound,
  Users,
  FileText,
  ClipboardCheck,
  UserCheck,
  Headset,
  Award,
} from "lucide-react";
import { motion } from "motion/react";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";

const STEPS = [
  { icon: UserRound, title: "Aspirant", desc: "Your journey starts here" },
  { icon: Users, title: "Advisor", desc: "1:1 expert consultation" },
  { icon: FileText, title: "Documentation", desc: "We prepare your file" },
  { icon: ClipboardCheck, title: "Enrolment", desc: "Secure your seat" },
  { icon: UserCheck, title: "Mentorship", desc: "Personalised guidance" },
  { icon: Headset, title: "Academic Support", desc: "Always by your side" },
  { icon: Award, title: "Recognition", desc: "Earn your credential" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const lineVariant = {
  hidden: { scaleX: 0, opacity: 0 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
  },
};

function Flow() {
  return (
    <div className="relative overflow-hidden bg-primary">
      {/* Ambient glow orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 select-none">
        <div className="absolute -left-32 top-1/2 h-[500px] w-[600px] -translate-y-1/2 rounded-full bg-[#320F8C]/40 blur-[130px]" />
        <div className="absolute -right-32 top-1/2 h-[400px] w-[500px] -translate-y-1/2 rounded-full bg-[#7A5EE9]/20 blur-[110px]" />
        <div className="absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-[#7A5EE9]/10 blur-[80px]" />
      </div>

      <SectionViewer className="relative z-10 py-16 md:py-28">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center gap-3 text-center md:mb-20">
          <SectionLabel label="Our Ecosystem" className="text-secondary/70" />
          <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl xl:text-5xl">
            A Seamless Journey Guided by Experts at{" "}
            <span className="text-secondary">Every Milestone</span>
          </h2>
          <p className="mt-1 max-w-md text-sm leading-relaxed text-white/45 md:text-base">
            From first enquiry to final credential — we walk every step with you.
          </p>
        </div>

        {/* ── Desktop: horizontal timeline ─────────────────── */}
        <div className="relative hidden lg:block">
          {/* Animated connecting line, drawn from node-center to node-center */}
          <motion.div
            variants={lineVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{ originX: 0, left: "calc(100% / 14)", right: "calc(100% / 14)" }}
            aria-hidden
            className="absolute top-7 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-7"
          >
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  variants={itemVariant}
                  className="group flex flex-col items-center gap-0 px-1.5 text-center"
                >
                  {/* Node — sits on the connecting line */}
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/15 bg-primary transition-all duration-300 group-hover:border-secondary/50 group-hover:shadow-[0_0_28px_rgba(210,250,77,0.2)]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.07] transition-all duration-300 group-hover:bg-secondary/15">
                      <Icon
                        className="h-5 w-5 text-white/60 transition-colors duration-300 group-hover:text-secondary"
                        strokeWidth={1.75}
                      />
                    </div>
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 flex h-[1.125rem] min-w-[1.125rem] items-center justify-center rounded-full bg-secondary px-1 text-[8px] font-black leading-none text-primary shadow-sm">
                      {i + 1}
                    </span>
                  </div>

                  {/* Content card under the node */}
                  <div className="mt-4 w-full rounded-xl border border-white/[0.07] bg-white/[0.03] p-3 pt-3.5 transition-all duration-300 group-hover:border-secondary/15 group-hover:bg-white/[0.06]">
                    <h3 className="mb-1 text-xs font-semibold leading-snug text-white/90 transition-colors duration-300 group-hover:text-secondary">
                      {step.title}
                    </h3>
                    <p className="text-[10px] leading-relaxed text-white/35">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ── Mobile / tablet: vertical timeline ───────────── */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="flex flex-col gap-0 lg:hidden"
        >
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === STEPS.length - 1;
            return (
              <Fragment key={step.title}>
                <motion.div
                  variants={itemVariant}
                  className="group flex items-start gap-4 rounded-xl p-4 transition-colors duration-200 hover:bg-white/[0.04]"
                >
                  {/* Icon node */}
                  <div className="relative shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] transition-all duration-300 group-hover:border-secondary/30 group-hover:bg-secondary/10">
                      <Icon
                        className="h-5 w-5 text-white/60 transition-colors duration-300 group-hover:text-secondary"
                        strokeWidth={1.75}
                      />
                    </div>
                    <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-[9px] font-black leading-none text-primary shadow-sm">
                      {i + 1}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-0.5 pt-1.5">
                    <h3 className="text-sm font-semibold leading-snug text-white/90 transition-colors duration-300 group-hover:text-secondary">
                      {step.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-white/40">{step.desc}</p>
                  </div>
                </motion.div>

                {/* Vertical connector between steps */}
                {!isLast && (
                  <motion.div
                    variants={itemVariant}
                    aria-hidden
                    className="ml-10 pl-5"
                  >
                    <span className="block h-5 border-l border-dashed border-white/15" />
                  </motion.div>
                )}
              </Fragment>
            );
          })}
        </motion.div>
      </SectionViewer>
    </div>
  );
}

export default Flow;
