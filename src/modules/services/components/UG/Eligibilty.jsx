import React from "react";
import { CheckCircle2 } from "lucide-react";
import SectionViewer from "@/components/common/SectionViewer";

const Eligibility = ({
  title = "Eligibility Criteria",
  description = "Ensure you meet the following requirements before applying for admission.",
  criteria = [
    "Bachelor’s Degree from a recognized university",
    "Minimum qualifying marks as per university guidelines",
    "Valid academic documents during admission",
  ],
}) => {
  return (
    <section className="py-16 lg:py-24">
      <SectionViewer>
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#F8F6FC] via-white to-[#F4F0FF]">

          {/* Background Glow */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-[#7A5EE9]/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#320F8C]/5 blur-3xl" />
          </div>

          <div className="relative z-10 p-8 sm:p-10 md:p-14 lg:p-16">

            {/* Heading */}
            <div className="max-w-3xl">
              <span className="inline-block h-1.5 w-20 rounded-full bg-[#7A5EE9]" />

              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#170545] leading-tight">
                {title}
              </h2>

              <p className="mt-5 text-base sm:text-lg text-[#5B5A5D] leading-relaxed">
                {description}
              </p>
            </div>

            {/* Eligibility Cards */}
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {criteria.map((item, index) => (
                <div
                  key={index}
                  className="
                    group
                    flex
                    items-start
                    gap-4
                    rounded-2xl
                    bg-white/70
                    backdrop-blur-sm
                    p-5
                    transition-all
                    duration-300
                    hover:bg-white
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7A5EE9]/10">
                    <CheckCircle2
                      size={20}
                      className="text-[#7A5EE9]"
                    />
                  </div>

                  <p className="text-[#170545] font-medium leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Decorative Wave */}
          <div className="absolute bottom-0 left-0 right-0 opacity-40">
            <svg
              viewBox="0 0 1440 220"
              preserveAspectRatio="none"
              className="w-full h-20"
            >
              <path
                fill="rgba(122,94,233,0.12)"
                d="M0,160 C280,80 450,220 720,140 C950,70 1150,210 1440,120 L1440,320 L0,320 Z"
              />
            </svg>
          </div>
        </div>
      </SectionViewer>
    </section>
  );
};

export default Eligibility;