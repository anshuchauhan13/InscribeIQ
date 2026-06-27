import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";

function ReasonCard({ item }) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl p-5 sm:p-6 flex flex-col gap-4 hover:scale-[1.02] transition-transform duration-200"
    >
      {/* Icon + Title row */}
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-purple-700 flex items-center justify-center text-white flex-shrink-0">
          <Icon size={20} />
        </div>
        <h3 className="text-[14px] sm:text-[15px] font-bold text-gray-900 leading-snug">
          {item.title}
        </h3>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-100" />

      {/* Description */}
      <p className="text-[12.5px] sm:text-[13px] text-gray-500 leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );
}

const WhyChooseThisProgram = ({
  badge = "Why Choose This Program",
  heading = "Build Skills. Gain Confidence. Create Your Future.",
  highlight = "Create Your Future.",
  items = [],
  columns = 3,
  containerClass,
}) => {
  const colClass =
    {
      2: "grid-cols-1 sm:grid-cols-2",
      3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    }[columns] ?? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  const headingParts = highlight
    ? heading.split(new RegExp(`(${highlight})`, "i"))
    : [heading];

  return (
    <SectionViewer className="py-12 md:py-16">

      {/* Heading */}
      <div className="mb-6">
        <SectionLabel label={badge} />
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold text-gray-900 leading-snug">
          {headingParts.map((part, i) =>
            part.toLowerCase() === highlight?.toLowerCase() ? (
              <span key={i} className="relative inline-block">
                {part}

              </span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </h2>
      </div>

      {/* Dark container */}
      <div
        className={cn(
          "relative overflow-hidden rounded-3xl p-6 sm:p-8 lg:p-12",
          containerClass
        )}
        style={{
          background:
            "linear-gradient(160deg, #0C0E18 0%, #1e273d 50%, #2e3e5a 100%)",
        }}
      >
        <div className="relative z-10">
          <div className={cn("grid gap-4 md:gap-6 lg:gap-10", colClass)}>
            {items.map((item) => (
              <ReasonCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </SectionViewer>
  );
};

export default WhyChooseThisProgram;