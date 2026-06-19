import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import SectionViewer from "@/components/common/SectionViewer";
import ProgramCard from "./ProgramCard";

const FILTERS = [
  "All",
  "AI & ML",
  "Data Science",
  "Cybersecurity",
  "FinTech",
  "Engineering",
  "Education",
];

const PROGRAMS = [
  {
    institution: "InscribeIQ Certification Academy",
    title: "Certificate Advanced Program in Foundations of Artificial Intelligence",
    category: "AI & ML",
    duration: "8 Weeks",
    feature: "Live Online + Industry Certificate",
    image: "https://picsum.photos/seed/cert-ai-foundations/800/500",
  },
  {
    institution: "InscribeIQ Certification Academy",
    title: "Certificate Advanced Program in Applied Machine Learning",
    category: "AI & ML",
    duration: "10 Weeks",
    feature: "Live Online + Industry Certificate",
    image: "https://picsum.photos/seed/cert-machine-learning/800/500",
  },
  {
    institution: "InscribeIQ Certification Academy",
    title: "Certificate Advanced Program in Using ChatGPT and AI Tools for Teaching",
    category: "Education",
    duration: "6 Weeks",
    feature: "Live Online + Industry Certificate",
    image: "https://picsum.photos/seed/cert-chatgpt-teaching/800/500",
  },
  {
    institution: "InscribeIQ Certification Academy",
    title: "Certificate Advanced Program in Cybersecurity Fundamentals and Network Defense",
    category: "Cybersecurity",
    duration: "10 Weeks",
    feature: "Live Online + Industry Certificate",
    image: "https://picsum.photos/seed/cert-cybersecurity/800/500",
  },
  {
    institution: "InscribeIQ Certification Academy",
    title: "Certificate Advanced Program in FinTech Ecosystems, Digital Banking, and Payment Systems",
    category: "FinTech",
    duration: "8 Weeks",
    feature: "Live Online + Industry Certificate",
    image: "https://picsum.photos/seed/cert-fintech/800/500",
  },
  {
    institution: "InscribeIQ Certification Academy",
    title: "Certificate Advanced Program in Python for Engineering and Applied Sciences",
    category: "Engineering",
    duration: "8 Weeks",
    feature: "Live Online + Industry Certificate",
    image: "https://picsum.photos/seed/cert-python-eng/800/500",
  },
  {
    institution: "InscribeIQ Certification Academy",
    title: "Certificate Advanced Program in Applied Data Mining Techniques",
    category: "Data Science",
    duration: "8 Weeks",
    feature: "Live Online + Industry Certificate",
    image: "https://picsum.photos/seed/cert-data-mining/800/500",
  },
  {
    institution: "InscribeIQ Certification Academy",
    title: "Certificate Advanced Program in Database Systems and SQL for Enterprise Application",
    category: "Data Science",
    duration: "8 Weeks",
    feature: "Live Online + Industry Certificate",
    image: "https://picsum.photos/seed/cert-database-sql/800/500",
  },
];

function Programs() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? PROGRAMS
      : PROGRAMS.filter((p) => p.category === active);

  return (
    <SectionViewer className="py-16 md:py-24">
      <div className="flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Certification Programs
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
            Industry-recognised certificates across AI, technology, data science,
            and more — designed for working professionals
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
