import { motion } from "motion/react";
import { Phone, Camera, MessageCircle } from "lucide-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import SectionViewer from "@/components/common/SectionViewer";

const WHATSAPP_NUMBER = "918787734234";
const WHATSAPP_DISPLAY = "+91 87877 34234";
const WHATSAPP_MSG = encodeURIComponent(
  "Hi Inscribe IQ, I've completed my payment. Sharing the screenshot for confirmation."
);

const checklist = [
  {
    icon: Camera,
    title: "Capture the receipt",
    desc: "Take a clear screenshot showing the amount and transaction ID.",
  },
  {
    icon: MessageCircle,
    title: "Send it on WhatsApp",
    desc: "Forward the screenshot along with your name and the service you paid for.",
  },
  {
    icon: IconBrandWhatsapp,
    title: "Get verified in 2 hours",
    desc: "Our team confirms the payment and activates your service shortly after.",
  },
];

function PaymentWhatsApp() {
  return (
    <SectionViewer className="pb-20 md:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 70, damping: 18 }}
        className="relative overflow-hidden rounded-3xl px-6 py-12 md:px-12 md:py-16"
        style={{
          background:
            "linear-gradient(135deg, #170545 0%, #320F8C 60%, #1a1240 100%)",
        }}
      >
        {/* Ambient glow */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[#25D366]/20 blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-light-blue/20 blur-3xl" />
        </div>

        <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 14 }}
            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#25D366] shadow-lg shadow-[#25D366]/30"
          >
            <IconBrandWhatsapp className="h-9 w-9 text-white" stroke={2} />
          </motion.span>

          <h2 className="mt-6 text-2xl font-bold leading-tight tracking-tight text-white md:text-4xl">
            Paid Already?{" "}
            <span className="text-secondary">Send Us the Proof</span>
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60 md:text-base">
            Share your payment screenshot with us on WhatsApp and we'll verify it
            and switch on your service within two working hours.
          </p>

          <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-7 inline-flex items-center gap-2.5 rounded-xl bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/30 md:text-base"
          >
            <IconBrandWhatsapp className="h-5 w-5" stroke={2} />
            Share on WhatsApp
          </motion.a>

          <a
            href="tel:+918787734234"
            className="mt-4 inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
          >
            <Phone className="h-4 w-4" />
            Prefer a call? {WHATSAPP_DISPLAY}
          </a>
        </div>

        {/* Steps */}
        <div className="relative mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {checklist.map(({ icon: Icon, title, desc }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 18,
                delay: index * 0.12,
              }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-left backdrop-blur-sm"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-secondary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-white md:text-base">
                {title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-white/55 md:text-sm">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionViewer>
  );
}

export default PaymentWhatsApp;
