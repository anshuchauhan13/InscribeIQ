import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import SectionViewer from "@/components/common/SectionViewer";
import ProgramCard from "./ProgramCard";

const FILTERS = [
  "All",
  "Domestic",
  "International",
  "Business",
  "Education",
  "Social Work",
  "Technology",
];

const PROGRAMS = [
  {
    institution: "Global Leadership Academy, India",
    title: "Honorary Doctorate in Business Administration",
    category: "Business",
    region: "Domestic",
    duration: "30 days",
    feature: "1:1 Expert Profile Consultation",
    image: "https://picsum.photos/seed/honorary-business/800/500",
  },
  {
    institution: "Global Leadership Academy, India",
    title: "Honorary Doctorate in Architecture & Design",
    category: "Education",
    region: "International",
    duration: "30 days",
    feature: "1:1 Expert Profile Consultation",
    image: "https://picsum.photos/seed/honorary-architecture/800/500",
  },
  {
    institution: "Global Leadership Academy, India",
    title: "Honorary Doctorate in Literature & Research",
    category: "Education",
    region: "Domestic",
    duration: "30 days",
    feature: "1:1 Expert Profile Consultation",
    image: "https://picsum.photos/seed/honorary-literature/800/500",
  },
  {
    institution: "Global Leadership Academy, India",
    title: "Honorary Doctorate in Innovation & Technology",
    category: "Technology",
    region: "International",
    duration: "30 days",
    feature: "1:1 Expert Profile Consultation",
    image: "https://picsum.photos/seed/honorary-technology/800/500",
  },
  {
    institution: "Global Leadership Academy, India",
    title: "Honorary Doctorate in Humanitarian Service",
    category: "Social Work",
    region: "Domestic",
    duration: "30 days",
    feature: "1:1 Expert Profile Consultation",
    image: "https://picsum.photos/seed/honorary-humanitarian/800/500",
  },
  {
    institution: "Global Leadership Academy, India",
    title: "Honorary Doctorate in Management Studies",
    category: "Business",
    region: "International",
    duration: "30 days",
    feature: "1:1 Expert Profile Consultation",
    image: "https://picsum.photos/seed/honorary-management/800/500",
  },
];

function Programs() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? PROGRAMS
      : PROGRAMS.filter(
          (p) => p.category === active || p.region === active
        );

  return (
    <SectionViewer className="py-16 md:py-24">
      <div className="flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Honorary Doctorate Programs
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
            Recognised by globally affiliated institutions across diverse fields
            of human achievement
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3">
          {FILTERS.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActive(filter)}
              className={cn(
                "h-10 rounded-full px-5 text-sm font-medium transition-colors",
                active === filter
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-[#E9EBF7] text-primary hover:bg-[#dfe2f3]"
              )}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </SectionViewer>
  );
}

export default Programs;
