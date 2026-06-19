import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import SectionViewer from "@/components/common/SectionViewer";

const Banner = ({
  badge = "🚀 YOUR FUTURE STARTS HERE",
  title = "Ready to Advance Your Future?",
  highlightText = "Future",
  description =
    "Take the next step towards academic excellence and career growth with expert guidance.",
  buttonText = "Book Free Career Counselling",
  image,
  buttonLink="/consultation",
}) => {
  const parts = title.split(highlightText);
  const navigate= useNavigate();

  return (
    <section className="">
      <div
        className="
          relative
          overflow-hidden
      
          bg-[#F8F6FC]
        "
      >
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-[#7A5EE9]/10 blur-3xl" />

          <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-[#320F8C]/5 blur-3xl" />
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 220"
            preserveAspectRatio="none"
            className="w-full"
          >
            <path
              fill="rgba(122,94,233,0.08)"
              d="M0,160 C280,80 450,220 720,140 C950,70 1150,210 1440,120 L1440,320 L0,320 Z"
            />
          </svg>
        </div>

       <SectionViewer className="relative z-10 py-10 sm:py-12 lg:py-14">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 lg:gap-12">
    
    {/* Content */}
    <div className="flex-1">
      <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#170545]">
        {parts[0]}
        <span className="text-[#7A5EE9]">{highlightText}</span>
        {parts[1]}
      </h2>

      <p className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-[#5B5A5D] leading-relaxed">
        {description}
      </p>
    </div>

    {/* Button */}
    <div className="w-full md:w-auto flex md:justify-end">
      <Button
        onClick={() => navigate(buttonLink)}
        variant="gradient"
        className="
          w-full
          sm:w-auto
          inline-flex
          items-center
          justify-center
          gap-3
          rounded-full
          bg-[#170545]
          px-6
          sm:px-7
          py-5
          sm:py-6
          font-semibold
          text-white
          transition-all
          hover:bg-[#320F8C]
          hover:-translate-y-0.5
        "
      >
        {buttonText}
        <ArrowRight size={18} />
      </Button>
    </div>

  </div>
</SectionViewer>
      </div>
    </section>
  );
};

export default Banner;