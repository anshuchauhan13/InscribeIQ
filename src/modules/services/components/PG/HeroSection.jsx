import React from "react";
import { GraduationCap, Users, BookOpen, PiggyBank } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = ({
  badge = "",
  title = "Start Your Beautiful And Bright Future",
  titleHighlight = "Bright",
  subtitle = "There are many variations of passages available but the majority have suffered alteration in some repeat predefined chunks form injected humour.",
  primaryCta = { label: "Apply Now", onClick: () => {} },
  secondaryCta = { label: "Learn More", onClick: () => {} },
  backgroundImage = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80",
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
        <span key={i} className="text-secondary">
          {part}
        </span>
      ) : (
        <React.Fragment key={i}>{part}</React.Fragment>
      )
    );
  };

  return (
    <section className="w-full ">
      {/* HERO SECTION */}
      <div
        className="relative w-full min-h-[520px] flex items-start text-white"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 " />
       <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full  ml-24 ">
  <div className="max-w-2xl">
    {/* Badge */}
    {badge && (
      <p className="flex items-center gap-2 text-secondary tracking-widest text-sm font-semibold uppercase mb-3">
        {badge}
      </p>
    )}

    {/* Title */}
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
      {renderTitle()}
    </h1>

    {/* Subtitle */}
    <p className="mt-5 text-gray-200 text-base leading-relaxed">
      {subtitle}
    </p>

          {/* Buttons */}
        <div className="flex flex-wrap items-center gap-3 mt-9">
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
    className="rounded-full border-primary/30 text-primary hover:bg-primary/5 px-7"
  >
    {secondaryCta.label}
  </Button>
</div>
        </div>
      </div>
      </div>

      {/* FEATURE CARDS */}
      <div className="max-w-6xl ml-auto mr-0 px-6 -mt-16 relative z-20 grid grid-cols-1 md:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition relative"
          >
            {/* Top Row */}
            <div className="flex items-start justify-between mb-4">
              {/* Icon Circle - solid fill, white icon */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white shrink-0"
                style={{ backgroundColor: accentColor }}
              >
                {item.icon}
              </div>

              {/* Number - white fill, colored stroke outline */}
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

            {/* Content */}
            <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;