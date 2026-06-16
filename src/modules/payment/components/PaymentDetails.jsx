import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { MousePointerClick, IndianRupee, BadgeCheck, Send } from "lucide-react";
import SectionLabel from "@/components/common/SectionLabel";
import SectionViewer from "@/components/common/SectionViewer";
import { cn } from "@/lib/utils";

const steps = [
  {
    no: "01",
    icon: MousePointerClick,
    title: "Pick a Channel",
    desc: "Go with a UPI transfer or a direct bank deposit — whatever feels easiest for you.",
  },
  {
    no: "02",
    icon: IndianRupee,
    title: "Fill in the Amount",
    desc: "Key in the exact service fee and drop your full name into the remarks field.",
  },
  {
    no: "03",
    icon: BadgeCheck,
    title: "Complete the Transfer",
    desc: "Finish paying and hold on to the reference ID or a clear screenshot of the receipt.",
  },
  {
    no: "04",
    icon: Send,
    title: "Send the Proof",
    desc: "Message the screenshot to us on WhatsApp and your service goes live within two hours.",
  },
];

function PaymentDetails() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((prev) => (prev + 1) % steps.length),
      2000
    );
    return () => clearInterval(id);
  }, []);

  const progress = ((active + 1) / steps.length) * 100;

  return (
    <div className="bg-muted">
      <SectionViewer className="py-16 md:py-24">
        <div className="mb-12 flex flex-col items-center gap-3 text-center md:mb-16">
          <SectionLabel label="The Process" />
          <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl xl:text-5xl">
            Wrap Up Your Payment in{" "}
            <span className="text-light-blue">Four Quick Steps</span>
          </h2>
          <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Follow this short walkthrough and your service will be up and running
            in no time at all.
          </p>
        </div>

        {/* Progress track (desktop) */}
        <div className="relative mx-auto mb-10 hidden h-1 max-w-5xl overflow-hidden rounded-full bg-violet-100 lg:block">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-[#6B52F9] to-[#8B79F2]"
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 24 }}
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === active;
            return (
              <motion.div
                key={step.no}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 22,
                  delay: index * 0.12,
                }}
              >
              <motion.div
                animate={{ y: isActive ? -8 : 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className={cn(
                  "relative h-full overflow-hidden rounded-2xl border p-6 transition-colors duration-500",
                  isActive
                    ? "border-transparent bg-white shadow-xl shadow-light-blue/20"
                    : "border-violet-100 bg-white/60"
                )}
              >
                {/* Top accent line on the active card */}
                <motion.span
                  className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#6B52F9] to-[#8B79F2] md:hidden"
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  style={{ originX: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />

                <div className="mb-5 flex items-center justify-between">
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-500",
                      isActive
                        ? "bg-gradient-to-br from-[#6B52F9] to-[#8B79F2] text-white shadow-lg shadow-light-blue/30"
                        : "bg-violet-50 text-light-blue"
                    )}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <span
                    className={cn(
                      "text-3xl font-bold tracking-tight transition-colors duration-500",
                      isActive ? "text-light-blue" : "text-violet-200"
                    )}
                  >
                    {step.no}
                  </span>
                </div>

                <h3 className="mb-2 text-lg font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </motion.div>
              </motion.div>
            );
          })}
        </div>
      </SectionViewer>
    </div>
  );
}

export default PaymentDetails;
