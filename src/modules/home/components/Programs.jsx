import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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
    image: "/home/ai1.jpg",
    slug: "foundations-of-artificial-intelligence",
  },
  {
    institution: "InscribeIQ Certification Academy",
    title: "Certificate Advanced Program in Applied Machine Learning",
    category: "AI & ML",
    duration: "10 Weeks",
    feature: "Live Online + Industry Certificate",
    image: "/home/machinelearning.jpg",
    slug: "applied-machine-learning",
  },
  {
    institution: "InscribeIQ Certification Academy",
    title: "Certificate Advanced Program in Using ChatGPT and AI Tools for Teaching",
    category: "Education",
    duration: "6 Weeks",
    feature: "Live Online + Industry Certificate",
    image: "/home/aitools.jpg",
    slug: "chatgpt-ai-tools-for-teaching",
  },
  {
    institution: "InscribeIQ Certification Academy",
    title: "Certificate Advanced Program in Cybersecurity Fundamentals and Network Defense",
    category: "Cybersecurity",
    duration: "10 Weeks",
    feature: "Live Online + Industry Certificate",
    image: "/home/cybersecurity.jpg",
    slug: "cybersecurity-network-defense",
  },
  {
    institution: "InscribeIQ Certification Academy",
    title: "Certificate Advanced Program in FinTech Ecosystems, Digital Banking, and Payment Systems",
    category: "FinTech",
    duration: "8 Weeks",
    feature: "Live Online + Industry Certificate",
    image: "/home/fintech.jpg",
    slug: "fintech-digital-banking",
  },
  {
    institution: "InscribeIQ Certification Academy",
    title: "Certificate Advanced Program in Python for Engineering and Applied Sciences",
    category: "Engineering",
    duration: "8 Weeks",
    feature: "Live Online + Industry Certificate",
    image: "/home/codingman.jpg",
    slug: "python-for-engineering",
  },
  {
    institution: "InscribeIQ Certification Academy",
    title: "Certificate Advanced Program in Applied Data Mining Techniques",
    category: "Data Science",
    duration: "8 Weeks",
    feature: "Live Online + Industry Certificate",
    image: "/home/data.jpg",
    slug: "applied-data-mining",
  },
  {
    institution: "InscribeIQ Certification Academy",
    title: "Certificate Advanced Program in Database Systems and SQL for Enterprise Application",
    category: "Data Science",
    duration: "8 Weeks",
    feature: "Live Online + Industry Certificate",
    image: "/home/databse.jpg",
    slug: "database-systems-sql",
  },
];

const EASE = [0.22, 0.61, 0.36, 1];

const headerVar = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

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
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center gap-3 text-center"
        >
          <motion.h2
            variants={headerVar}
            className="text-3xl font-bold tracking-tight text-foreground md:text-5xl"
          >
            Certification Programs
          </motion.h2>
          <motion.p
            variants={headerVar}
            className="max-w-2xl text-base text-muted-foreground md:text-lg"
          >
            Industry-recognised certificates across AI, technology, data science,
            and more — designed for working professionals
          </motion.p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: EASE, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3"
        >
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
        </motion.div>

        {/* Grid — cards animate in on filter change */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((program, index) => (
              <motion.div
                key={program.title}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -8 }}
                transition={{ duration: 0.35, ease: EASE, delay: index * 0.05 }}
              >
                <ProgramCard {...program} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionViewer>
  );
}

export default Programs;
