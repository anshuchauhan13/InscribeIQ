import React from "react";
import { motion } from "motion/react";
import { GraduationCap, Users, BookOpen, PiggyBank, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionViewer from "@/components/common/SectionViewer";

const EASE = [0.22, 0.61, 0.36, 1];

const fadeUp = (delay = 0, y = 22) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: EASE, delay },
});

const HeroSection = ({
  badge = "",
  title = "Start Your Beautiful And Bright Future",
  titleHighlight = "Bright",
  subtitle = "There are many variations of passages available but the majority have suffered alteration in some repeat predefined chunks form injected humour.",
  primaryCta = { label: "Apply Now", onClick: () => {} },
  secondaryCta = { label: "Learn More", onClick: () => {} },
  backgroundImage = "",
  features = [
    {
      icon: <GraduationCap size={20} strokeWidth={2} />,
      title: "Scholarship Facility",
      description: "It is a long established fact that a reader will be distracted.",
    },
    {
      icon: <Users size={20} strokeWidth={2} />,
      title: "Skilled Lecturers",
      description: "It is a long established fact that a reader will be distracted.",
    },
    {
      icon: <BookOpen size={20} strokeWidth={2} />,
      title: "Book Library Facility",
      description: "It is a long established fact that a reader will be distracted.",
    },
    {
      icon: <PiggyBank size={20} strokeWidth={2} />,
      title: "Affordable Price",
      description: "It is a long established fact that a reader will be distracted.",
    },
  ],
  accentColor = "#320F8C",
}) => {
  const renderTitle = () => {
    if (!titleHighlight) return title;
    const escaped = titleHighlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const parts = title.split(new RegExp(`(${escaped})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === titleHighlight.toLowerCase() ? (
        <span key={i} className="text-secondary">{part}</span>
      ) : (
        <React.Fragment key={i}>{part}</React.Fragment>
      )
    );
  };

  return (
    <section className="w-full">
      {/* ── Hero banner ── */}
      <div
        className="relative w-full min-h-[520px] flex items-start text-white"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <SectionViewer className="relative z-10 py-20">
          <div className="max-w-2xl">

            {/* Badge */}
            {badge && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="flex items-center gap-2 text-secondary tracking-widest text-sm lg:text-sm font-semibold uppercase mb-3"
              >
                {badge}
              </motion.p>
            )}

            {/* Title */}
            <motion.h1
              {...fadeUp(0.1)}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold leading-tight"
            >
              {renderTitle()}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              {...fadeUp(0.22)}
              className="mt-5 text-gray-200 text-sm lg:text-base xl:text-lg leading-relaxed"
            >
              {subtitle}
            </motion.p>

            {/* Buttons */}
            <motion.div
              {...fadeUp(0.32)}
              className="flex flex-wrap items-center gap-3 mt-9"
            >
              <Button
                size="lg"
                variant="gradiant"
                onClick={primaryCta.onClick}
                className="rounded-full px-8"
              >
                {primaryCta.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={secondaryCta.onClick}
                className="rounded-full border-primary/30 text-primary !bg-white hover:!bg-white/90 px-7"
              >
                {secondaryCta.label}
              </Button>
            </motion.div>
          </div>
        </SectionViewer>
      </div>

      {/* ── Feature cards (float up from the banner edge) ── */}
      <SectionViewer>
        <div className="max-w-6xl ml-auto mr-0 px-6 -mt-16 relative z-20 grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.18 + index * 0.09 }}
              className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition relative"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white shrink-0"
                  style={{ backgroundColor: accentColor }}
                >
                  {item.icon}
                </div>
                <span
                  className="text-3xl font-extrabold leading-none select-none"
                  style={{
                    color: "#ffffff",
                    WebkitTextStroke: `1.5px ${accentColor}`,
                    textStroke: `1.5px ${accentColor}`,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionViewer>
    </section>
  );
};

export default HeroSection;
