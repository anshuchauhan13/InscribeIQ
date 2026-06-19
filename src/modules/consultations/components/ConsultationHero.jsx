import { useState } from "react";
import { motion } from "motion/react";
import {
  ShieldCheck,
  Ban,
  Gift,
  Send,
  ArrowRight,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";

const SERVICES = [
  "PhD Admission Guidance",
  "DBA Admission Guidance",
  "Honorary Doctorate",
  "Thesis & Dissertation Writing",
  "Research Publication",
  "Book Publication",
  "UG / PG Programs",
  "Certification Programs",
  "Profile Enhancement",
  "Other",
];

const EDUCATION_LEVELS = [
  "10th / 12th Pass",
  "Graduate (Bachelor's)",
  "Post Graduate (Master's)",
  "Working Professional",
  "Business Owner / Entrepreneur",
  "PhD / Doctorate Holder",
];

const EXPERIENCE = [
  "Fresher / Student",
  "0 – 2 Years",
  "2 – 5 Years",
  "5 – 10 Years",
  "10+ Years",
];

const CALLBACK_TIMES = [
  "Any Time",
  "Morning (9 AM – 12 PM)",
  "Afternoon (12 PM – 4 PM)",
  "Evening (4 PM – 8 PM)",
];

const DIAL_CODES = [
  { code: "IN", dial: "+91" },
  { code: "US", dial: "+1" },
  { code: "GB", dial: "+44" },
  { code: "AU", dial: "+61" },
  { code: "AE", dial: "+971" },
];

const TRUST_BADGES = [
  { icon: ShieldCheck, text: "100% Secure" },
  { icon: Ban, text: "No Spam" },
  { icon: Gift, text: "Completely Free" },
];

const EMPTY = {
  name: "", email: "", country: "IN", phone: "",
  service: "", education: "", experience: "", callbackTime: "", message: "",
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ConsultationHero() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});

  const setField = (key) => (value) => {
    setForm((p) => ({ ...p, [key]: value }));
    setErrors((p) => ({ ...p, [key]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email.";
    if (!form.phone.trim()) e.phone = "Please enter your phone number.";
    if (!form.service) e.service = "Please select a service.";
    if (!form.education) e.education = "Please select your education level.";
    if (!form.experience) e.experience = "Please select your work experience.";
    if (!form.callbackTime) e.callbackTime = "Please select a preferred time.";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    console.log("Consultation submitted:", form);
    toast.success("Consultation booked! Our advisor will call you at your preferred time.");
    setForm(EMPTY);
  };

  return (
    <div className="w-full relative overflow-hidden light-gradiant">


      <SectionViewer className="inter relative z-10 py-16 md:py-20">
        <div className="grid items-start gap-12 md:grid-cols-2 lg:gap-16">

          {/* ── Left panel ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-3 lg:sticky lg:top-24"
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }}>
              <SectionLabel label="Free Consultation" />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="text-3xl font-bold tracking-tight text-primary leading-tight md:text-4xl xl:text-5xl"
            >
              How can we{" "}
              <span className="relative inline-block text-light-blue">
                help you
                <span className="absolute left-0 -bottom-1 h-[4px] w-full rounded-full bg-light-blue" />
              </span>{" "}
              today?
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-base text-muted-foreground leading-relaxed mt-4"
            >
              Our dedicated academic advisory team is just a call away. Share
              your goals and we'll match you with the right program — free of
              cost, no commitment required.
            </motion.p>

            {/* Trust badges */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-wrap gap-3 pt-3 md:pt-6"
            >
              {TRUST_BADGES.map(({ icon: Icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-2 md:gap-2 rounded-full bg-white px-3 md:px-3.5 py-2 text-[11px] md:text-xs font-semibold text-primary shadow-sm"
                >
                  <Icon className="size-3 md:size-3.5 text-light-blue" />
                  {text}
                </span>
              ))}
            </motion.div>

            {/* Benefits list */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-3 md:space-y-4 mt-6 md:mt-10"
            >
              <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-primary mb-3">
                What you'll get
              </p>
              {[
                "One-on-one session with a senior academic advisor",
                "Personalised program recommendations for your profile",
                "Clarity on eligibility, timelines & investment",
                "Zero pressure — no commitment required",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2.5">
                  <span className="flex h-4 md:h-6 w-4 md:w-6 shrink-0 items-center justify-center rounded-full bg-secondary">
                    <ArrowRight className="size-2.5 md:size-3 text-primary" />
                  </span>
                  <p className="text-sm md:text-base text-muted-foreground leading-snug">{benefit}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right panel — Form card ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <div className="rounded-3xl border border-border bg-white shadow-lg shadow-primary/5 overflow-hidden max-w-xl mx-auto">
              {/* Card header */}
              <div
                className="px-6 py-5 md:px-8 md:py-6"
                style={{
                  background:
                    "linear-gradient(135deg, #170545 0%, #320F8C 55%, #6B52F9 100%)",
                }}
              >
                <div className="flex items-center gap-3 md:gap-4 xl:gap-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15">
                    <Send className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-base md:text-lg xl:text-xl font-bold text-white">Book Your Free Consultation</h2>
                    <p className="text-xs xl:text-sm text-white/60 mt-0.5">Fill in the details below — we'll be in touch!</p>
                  </div>
                </div>
              </div>

              {/* Form body */}
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-4 p-6 md:p-8"
              >
                {/* Full name */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Full name <span className="text-destructive">*</span></Label>
                  <Input
                    id="name"
                    placeholder="Dr. Jane Smith"
                    className="!bg-muted/40 border-border/60 h-11"
                    value={form.name}
                    aria-invalid={!!errors.name}
                    onChange={(e) => setField("name")(e.target.value)}
                  />
                  {errors.name && <p className="text-destructive text-xs">{errors.name}</p>}
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Work email <span className="text-destructive">*</span></Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="!bg-muted/40 border-border/60 h-11"
                      value={form.email}
                      aria-invalid={!!errors.email}
                      onChange={(e) => setField("email")(e.target.value)}
                    />
                    {errors.email && <p className="text-destructive text-xs">{errors.email}</p>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="phone">Phone number <span className="text-destructive">*</span></Label>
                    <div className="flex h-11 items-center overflow-hidden rounded-md border border-border/60 bg-muted/40 transition focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50">
                      <Select value={form.country} onValueChange={setField("country")}>
                        <SelectTrigger
                          aria-label="Country code"
                          className="!h-11 w-[88px] shrink-0 rounded-none !border-0 !bg-transparent pl-4 pr-2 shadow-none focus-visible:ring-0 text-xs"
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="p-1">
                          {DIAL_CODES.map((c) => (
                            <SelectItem key={c.code} value={c.code} className="!px-3 text-xs">
                              {c.code} {c.dial}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <span className="h-5 w-px shrink-0 bg-border" />
                      <input
                        id="phone"
                        type="tel"
                        placeholder="98765 43210"
                        className="h-full flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground"
                        value={form.phone}
                        onChange={(e) => setField("phone")(e.target.value)}
                      />
                    </div>
                    {errors.phone && <p className="text-destructive text-xs">{errors.phone}</p>}
                  </div>
                </div>

                {/* Service interest */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="service">Service interest <span className="text-destructive">*</span></Label>
                  <Select value={form.service} onValueChange={setField("service")}>
                    <SelectTrigger id="service" className="!h-11 w-full px-4 !bg-muted/40 border-border/60" aria-invalid={!!errors.service}>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="p-2">
                      {SERVICES.map((s) => (
                        <SelectItem key={s} value={s} className="!px-3">{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.service && <p className="text-destructive text-xs">{errors.service}</p>}
                </div>

                {/* Education + Experience */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label>Education level <span className="text-destructive">*</span></Label>
                    <Select value={form.education} onValueChange={setField("education")}>
                      <SelectTrigger className="!h-11 w-full px-4 !bg-muted/40 border-border/60" aria-invalid={!!errors.education}>
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent className="p-2">
                        {EDUCATION_LEVELS.map((l) => (
                          <SelectItem key={l} value={l} className="!px-3">{l}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.education && <p className="text-destructive text-xs">{errors.education}</p>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label>Work experience <span className="text-destructive">*</span></Label>
                    <Select value={form.experience} onValueChange={setField("experience")}>
                      <SelectTrigger className="!h-11 w-full px-4 !bg-muted/40 border-border/60" aria-invalid={!!errors.experience}>
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent className="p-1">
                        {EXPERIENCE.map((x) => (
                          <SelectItem key={x} value={x} className="!px-3">{x}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.experience && <p className="text-destructive text-xs">{errors.experience}</p>}
                  </div>
                </div>

                {/* Preferred callback time */}
                <div className="flex flex-col gap-2">
                  <Label>Preferred callback time <span className="text-destructive">*</span></Label>
                  <div className="flex flex-wrap gap-2">
                    {CALLBACK_TIMES.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setField("callbackTime")(t)}
                        className={`rounded-lg border h-10 px-4 py-2 text-xs font-medium transition-all duration-150 ${form.callbackTime === t
                            ? "border-primary bg-primary text-white shadow-sm"
                            : "border-border/60 bg-muted/40 text-muted-foreground hover:border-primary/40 hover:text-primary"
                          }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  {errors.callbackTime && <p className="text-destructive text-xs">{errors.callbackTime}</p>}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">
                    Message <span className="text-muted-foreground font-normal text-xs">(optional)</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Briefly describe your goal or any specific questions…"
                    className="!bg-muted/40 border-border/60 min-h-20 resize-none p-3.5 text-sm"
                    value={form.message}
                    onChange={(e) => setField("message")(e.target.value)}
                  />
                </div>

                <Button type="submit" size="lg" variant="" className="mt-1 w-full bg-blue text-white h-12">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-center text-[11px] text-muted-foreground">
                  By submitting, you agree to our{" "}
                  <a href="#" className="underline underline-offset-2 hover:text-primary">Privacy Policy</a>.
                  We never share your data.
                </p>
              </form>
            </div>
          </motion.div>

        </div>
      </SectionViewer>
    </div>
  );
}
