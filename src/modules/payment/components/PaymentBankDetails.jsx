import { useState } from "react";
import { motion } from "motion/react";
import { Landmark, Copy, Check, QrCode, ScanLine } from "lucide-react";
import SectionLabel from "@/components/common/SectionLabel";
import SectionViewer from "@/components/common/SectionViewer";
import { cn } from "@/lib/utils";

// ⚠️ Replace these placeholders with Inscribe IQ's real banking details.
const bankFields = [
  { label: "Account Holder", value: "Inscribe IQ Pvt. Ltd.", copyable: false },
  { label: "Account Number", value: "50100 1234 5678 90", copyable: true },
  { label: "IFSC Code", value: "HDFC0001234", copyable: true },
  { label: "Bank Name", value: "HDFC Bank", copyable: false },
  { label: "Branch", value: "Rajendra Nagar, Ghaziabad", copyable: false },
  { label: "Account Type", value: "Current Account", copyable: false },
];

// ⚠️ Replace with the official Inscribe IQ UPI ID and QR image.
const UPI_ID = "inscribeiq@hdfcbank";
const QR_SRC = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=0&data=${encodeURIComponent(
  `upi://pay?pa=${UPI_ID}&pn=Inscribe IQ&cu=INR`
)}`;

const slideIn = (fromX) => ({
  initial: { opacity: 0, x: fromX },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { type: "spring", stiffness: 80, damping: 18 },
});

function CopyButton({ value, fieldKey, copiedKey, onCopy }) {
  const copied = copiedKey === fieldKey;
  return (
    <button
      type="button"
      onClick={() => onCopy(value, fieldKey)}
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors",
        copied
          ? "bg-secondary text-primary"
          : "bg-violet-50 text-light-blue hover:bg-violet-100"
      )}
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

function PaymentBankDetails() {
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (value, key) => {
    navigator.clipboard?.writeText(value.replace(/\s+/g, ""));
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <SectionViewer className="py-16 md:py-24">
      <div className="mb-12 flex flex-col items-center gap-3 text-center md:mb-16">
        <SectionLabel label="Account Details" />
        <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl xl:text-5xl">
          Bank Transfer & <span className="text-light-blue">UPI Payment</span>
        </h2>
        <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Use the details below to pay the way you prefer — a quick UPI scan or a
          standard NEFT, RTGS or IMPS transfer.
        </p>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
        {/* Bank transfer card */}
        <motion.div
          {...slideIn(-40)}
          className="flex flex-col overflow-hidden rounded-3xl border border-violet-100 bg-white shadow-sm"
        >
          <div
            className="relative overflow-hidden p-7"
            style={{
              background:
                "linear-gradient(135deg, #170545 0%, #320F8C 55%, #6B52F9 100%)",
            }}
          >
            <div
              aria-hidden
              className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-light-blue/30 blur-2xl"
            />
            <div className="relative flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <Landmark className="h-6 w-6" />
              </div>
              <div>
                <span className="inline-block rounded-md bg-secondary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary">
                  HDFC Bank · Current A/c
                </span>
                <h3 className="mt-1.5 text-xl font-bold text-white">
                  Bank Transfer Details
                </h3>
                <p className="text-xs text-white/60">NEFT · RTGS · IMPS</p>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-2.5 p-5 md:p-6">
            {bankFields.map((field) => (
              <div
                key={field.label}
                className="flex items-center justify-between gap-3 rounded-xl border border-violet-100 bg-muted px-4 py-3"
              >
                <div className="min-w-0">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                    {field.label}
                  </p>
                  <p className="truncate text-sm font-semibold text-primary md:text-base">
                    {field.value}
                  </p>
                </div>
                {field.copyable && (
                  <CopyButton
                    value={field.value}
                    fieldKey={field.label}
                    copiedKey={copiedKey}
                    onCopy={handleCopy}
                  />
                )}
              </div>
            ))}

            <div className="mt-2 rounded-xl border border-secondary/40 bg-secondary/10 px-4 py-3">
              <p className="text-xs leading-relaxed text-primary/80 md:text-sm">
                Once the transfer is done, WhatsApp the screenshot to{" "}
                <span className="font-semibold text-primary">
                  +91 87877 34234
                </span>
                . Your service is activated within 2 hours.
              </p>
            </div>
          </div>
        </motion.div>

        {/* UPI / QR card */}
        <motion.div
          {...slideIn(40)}
          className="flex flex-col items-center justify-center rounded-3xl border border-violet-100 bg-white p-7 text-center shadow-sm md:p-10"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-light-blue">
            <QrCode className="h-4 w-4" /> Scan & Pay
          </span>

          <h3 className="mt-5 text-xl font-bold text-primary md:text-2xl">
            Pay Instantly via UPI
          </h3>
          <p className="mt-1.5 max-w-xs text-sm text-muted-foreground">
            Open any UPI app and scan the code below to complete your payment.
          </p>

          <motion.div
            className="relative mt-6 rounded-2xl border border-violet-100 bg-white p-4 shadow-md"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={QR_SRC}
              alt={`UPI QR code for ${UPI_ID}`}
              className="h-44 w-44 rounded-lg md:h-52 md:w-52"
            />
            {/* Animated scanning line */}
            <motion.span
              className="pointer-events-none absolute inset-x-4 h-0.5 rounded-full bg-gradient-to-r from-transparent via-light-blue to-transparent"
              animate={{ top: ["12%", "88%", "12%"] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <div className="mt-6 flex w-full max-w-xs items-center justify-between gap-3 rounded-xl border border-violet-100 bg-muted px-4 py-3">
            <div className="flex items-center gap-2 truncate">
              <ScanLine className="h-4 w-4 shrink-0 text-light-blue" />
              <span className="truncate text-sm font-semibold text-primary">
                {UPI_ID}
              </span>
            </div>
            <CopyButton
              value={UPI_ID}
              fieldKey="upi"
              copiedKey={copiedKey}
              onCopy={handleCopy}
            />
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Works with Google Pay · PhonePe · Paytm · BHIM
          </p>
        </motion.div>
      </div>
    </SectionViewer>
  );
}

export default PaymentBankDetails;
