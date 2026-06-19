import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, GraduationCap, Crown, ArrowRight } from "lucide-react";
import SectionLabel from "@/components/common/SectionLabel";

const ShapeImage = ({ src, shape = "circle", dashed = false, className = "" }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      {/* Decorative dashed ring */}
      {dashed && (
        <div
          className={`
            absolute
            -inset-3
            border-2
            border-dashed
            border-light-blue
            ${shape === "circle" ? "rounded-full" : "rounded-[2.5rem]"}
          `}
        />
      )}

      {/* Image */}
      <div
        className={`
          relative
          w-full
          h-full
          overflow-hidden
          shadow-lg
          ${shape === "circle" ? "rounded-full" : "rounded-[2rem]"}
        `}
      >
        <img
          src={src}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
};

const ExperienceBadge = ({ years = "30", label = "Years Of Quality Service" }) => (
  <div
    className="
      flex
      items-center
      gap-3
      bg-secondary
      rounded-full
      pl-2
      pr-6
      py-2
      shadow-lg
      w-fit
    "
  >
    <div
      className="
        h-14
        w-14
        rounded-full
        bg-white
        flex
        flex-col
        items-center
        justify-center
        shrink-0
      "
    >
      <span className="text-primary font-bold text-sm leading-none">
        {years}
      </span>
      <span className="text-blue text-[9px] font-medium leading-none mt-0.5">
        Years
      </span>
    </div>

    <p className="text-primary text-sm font-semibold leading-snug">
      {label}
    </p>
  </div>
);

const FeatureRow = ({ title, description }) => (
  <div className="flex gap-4">
    <div
      className="
        h-12 w-12
        rounded-full
        bg-white
        shadow-sm
        flex
        items-center
        justify-center
        shrink-0
      "
    >
      <GraduationCap className="w-5 h-5 text-light-blue" />
    </div>

    <div>
      <h4 className="font-semibold text-slate-900">
        {title}
      </h4>

      <p className="text-sm text-slate-600 mt-1 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const QuoteStatCard = ({ quote, stat }) => (
  <div
    className="
      bg-white
      rounded-2xl
      p-6
      flex
      flex-col
      justify-between
      h-full
      min-h-[180px]
      shadow-sm
    "
  >
    <p className="text-sm text-slate-500 leading-relaxed">
      {quote}
    </p>

    <span className="text-4xl font-bold text-teal-700 mt-4">
      {stat}
    </span>
  </div>
);

const ProgramOverview = ({
  badge = "ABOUT US",

  title = "Our Edukation System Inspires You More.",

  highlightWord = "Inspires",

  description = "There are many variations of passages available but the majority have suffered alteration in some form by injected humour randomised words which don't look even slightly believable. If you are going to use passage.",

  primaryButtonText = "Discover More",

  phone = "+91 123 456 7890",

  images = [],

  experienceBadge = {
    years: "30",
    label: "Years Of Quality Service",
  },

  features = [
    {
      title: "Edukation Services",
      description: "It is a long established fact that reader will be using content.",
    },
    {
      title: "International Hubs",
      description: "It is a long established fact that reader will be using content.",
    },
  ],

  quoteStat = {
    quote:
      "It is a long established fact that a reader will be distracted by the content of a page when looking at its reader for the long words layout.",
    stat: "99",
  },
}) => {
  const titleParts = title.split(highlightWord);

  return (
<section className="relative overflow-hidden bg-gradient-to-b from-white via-light-blue/15 to-white">
      <div className="container mx-auto px-5 md:px-12 lg:px-16 py-8 md:py-16 lg:py-16 ">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT IMAGE CLUSTER */}
          <div className="relative  w-full max-w-[420px] lg:max-w-[480px] aspect-[480/460] gap-2">

            {/* Top-left tall image */}
            <ShapeImage
              src={images?.[0]}
              shape="rounded"
              className="absolute top-0 left-0 w-[50%] h-[62%]"
            />

            {/* Top-right circle image with dashed ring */}
            <ShapeImage
              src={images?.[1]}
              shape="circle"
              dashed
              className="absolute top-0 right-0 w-[40%] h-[40%]"
            />

            {/* Bottom-right tall image */}
            <ShapeImage
              src={images?.[2]}
              shape="rounded"
              className="absolute bottom-0 right-0 w-[46%] h-[55%]"
            />

            {/* Experience badge under top-left image */}
            <div className="absolute bottom-8 -left-4">
              <ExperienceBadge {...experienceBadge} />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>

            <span
              className="
                inline-flex
                items-center
                gap-2
                text-md
                font-semibold
                tracking-[0.2em]
                uppercase
                text-blue
              "
            >
              {badge}
            </span>
         

            <h2
              className="
                mt-3
                text-3xl
                sm:text-4xl
                lg:text-5xl
                2xl:text-6xl
                font-bold
                leading-tight
                text-slate-900
              "
            >
              {titleParts[0]}
              {titleParts.length > 1 && (
                <>
                  <span className="text-secondary">{highlightWord}</span>
                  {titleParts[1]}
                </>
              )}
            </h2>

            <p className="mt-6 text-slate-600 leading-relaxed max-w-xl">
              {description}
            </p>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8 mt-10 items-start">
              <div className="flex flex-col gap-8">
                {features.map((feature, index) => (
                  <FeatureRow key={index} {...feature} />
                ))}
              </div>

              <QuoteStatCard {...quoteStat} />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProgramOverview;