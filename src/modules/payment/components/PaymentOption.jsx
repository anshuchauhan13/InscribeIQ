import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Smartphone, CreditCard, Landmark, ArrowLeftRight } from "lucide-react";
import SectionLabel from "@/components/common/SectionLabel";
import SectionViewer from "@/components/common/SectionViewer";
import { cn } from "@/lib/utils";

const options = [
  { icon: Smartphone, title: "UPI Apps", desc: "Google Pay, PhonePe & Paytm" },
  { icon: CreditCard, title: "Credit / Debit Card", desc: "Visa, Mastercard & RuPay" },
  { icon: Landmark, title: "Internet Banking", desc: "Every leading Indian bank" },
  { icon: ArrowLeftRight, title: "Direct Bank Transfer", desc: "NEFT, RTGS & IMPS" },
];

function PaymentOption() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((prev) => (prev + 1) % options.length),
      3000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <SectionViewer className="py-16 md:py-24">
      <div className="mb-12 flex flex-col gap-3 md:mb-16">
        <SectionLabel label="Ways to Pay" />
        <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl xl:text-5xl">
          Choose the Method That{" "}
          <span className="text-light-blue">Works for You</span>
        </h2>
        <span className="h-1 w-28 rounded-full bg-light-blue" />
        <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Pick any of the supported channels below to send your payment safely
          and without a hitch — every option is fully encrypted.
        </p>
      </div>

      <div className="grid grid-cols-1 items-center md:grid-cols-2 ">
        {/* Left — illustration */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -40, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
        >
          <motion.img
            src="/payment/card-image.png"
            alt="Secure online payment cards"
            className="w-full max-w-lg select-none"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            draggable={false}
          />
        </motion.div>

        {/* Right — option cards (auto-cycling active state) */}
        <div className="mx-auto flex w-full max-w-md flex-col gap-4">
          {options.map((option, index) => {
            const Icon = option.icon;
            const isActive = index === active;
            return (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  type: "spring",
                  stiffness: 110,
                  damping: 18,
                  delay: index * 0.12,
                }}
              >
                <motion.button
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  animate={{ scale: isActive ? 1.03 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className={cn(
                    "relative flex w-full items-center gap-5 overflow-hidden rounded-2xl border p-4 text-left transition-colors duration-500 md:p-5",
                    isActive
                      ? "border-transparent bg-gradient-to-br from-[#6B52F9] to-[#8B79F2] shadow-xl shadow-light-blue/30"
                      : "border-violet-100 bg-white hover:border-violet-200"
                  )}
                >
                  {/* Accent bar on the active card */}
                  <motion.span
                    className="absolute left-0 top-0 h-full w-1.5 rounded-r-full bg-secondary"
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div
                    className={cn(
                      "flex aspect-square w-14 shrink-0 items-center justify-center rounded-xl transition-colors duration-500",
                      isActive
                        ? "bg-white/15 text-white"
                        : "bg-violet-50 text-light-blue"
                    )}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h3
                      className={cn(
                        "text-base font-semibold transition-colors duration-500 md:text-lg",
                        isActive ? "text-white" : "text-primary"
                      )}
                    >
                      {option.title}
                    </h3>
                    <p
                      className={cn(
                        "text-sm transition-colors duration-500",
                        isActive ? "text-white/80" : "text-muted-foreground"
                      )}
                    >
                      {option.desc}
                    </p>
                  </div>
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionViewer>
  );
}

export default PaymentOption;
