import {
  ShieldCheck,
  BadgeCheck,
  Smartphone,
  Landmark,
  Clock,
} from "lucide-react";
import SectionViewer from "@/components/common/SectionViewer";

const highlights = [
  { icon: Smartphone, label: "UPI in one scan" },
  { icon: Landmark, label: "NEFT / RTGS / IMPS" },
  { icon: Clock, label: "Live in 2 hours" },
];

function PaymentHero() {
  return (
    <div
      className="relative overflow-hidden noise-medium"
      style={{
        background:
          "linear-gradient(160deg, #0C0E18 0%, #1a2235 50%, #242E3E 100%)",
      }}
    >
      {/* Ambient glow orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 select-none">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#320F8C]/40 blur-[130px]" />
        <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-secondary/10 blur-[130px]" />
      </div>

      <SectionViewer className="relative z-10 py-16 md:py-24 xl:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
          {/* Left — copy */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <span
              className="pay-rise inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white shadow-sm backdrop-blur md:text-xs"
              style={{ animationDelay: "0.05s" }}
            >
              <ShieldCheck className="h-3.5 w-3.5 text-secondary" />
              Trusted &amp; encrypted payments
            </span>

            <h1
              className="pay-rise mt-5 max-w-xl text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl xl:text-6xl"
              style={{ animationDelay: "0.15s" }}
            >
              Settle Your Fees in a{" "}
              <span className="relative whitespace-nowrap text-secondary">
                Few Taps
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2 8C40 3 160 3 198 8"
                    stroke="#D1FC3D"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p
              className="pay-rise mt-5 max-w-md text-sm leading-relaxed text-white/60 md:text-base"
              style={{ animationDelay: "0.25s" }}
            >
              Send your service payment straight to Inscribe IQ over UPI or a
              direct bank transfer — no logins, no waiting, fully protected end
              to end.
            </p>

            <div
              className="pay-rise mt-7 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start"
              style={{ animationDelay: "0.35s" }}
            >
              {highlights.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-medium text-white/85 backdrop-blur-sm"
                >
                  <Icon className="h-3.5 w-3.5 text-secondary" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right — floating payment-receipt mock */}
          <div
            className="pay-rise relative mx-auto w-full max-w-sm"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="pay-float relative rounded-3xl border border-white/10 bg-white p-6 shadow-2xl shadow-black/30 md:p-7">
              {/* Header row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#6B52F9] to-[#8B79F2] text-white">
                    <BadgeCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">
                      Inscribe IQ
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Payment received
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-primary">
                  Paid
                </span>
              </div>

              {/* Amount */}
              <div className="mt-6">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  Amount paid
                </p>
                <p className="mt-1 text-3xl font-bold tracking-tight text-primary">
                  ₹ 25,000
                  <span className="ml-2 text-sm font-medium text-light-blue">
                    INR
                  </span>
                </p>
              </div>

              {/* Detail rows */}
              <div className="mt-6 space-y-3 border-t border-violet-100 pt-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Method</span>
                  <span className="font-medium text-primary">UPI · GPay</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Reference</span>
                  <span className="font-medium text-primary">#INS-204815</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Status</span>
                  <span className="inline-flex items-center gap-1.5 font-medium text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Verified
                  </span>
                </div>
              </div>
            </div>

            {/* Floating verified chip */}
            <div className="absolute -bottom-5 -left-4 flex items-center gap-2 rounded-2xl border border-white/10 bg-white px-4 py-3 shadow-xl shadow-black/30">
              <Clock className="h-4 w-4 text-light-blue" />
              <span className="text-xs font-semibold text-primary">
                Activated in 2 hrs
              </span>
            </div>
          </div>
        </div>
      </SectionViewer>
    </div>
  );
}

export default PaymentHero;
