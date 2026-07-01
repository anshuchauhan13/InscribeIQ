import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Download, BadgeCheck } from "lucide-react";
import { toast } from "sonner";
import SectionViewer from "@/components/common/SectionViewer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const EASE = [0.22, 0.61, 0.36, 1];

// Lead-capture block that closes every program page. Anchored at #apply so the
// hero CTAs scroll here. Follows the codebase form convention: local state,
// per-field errors, aria-invalid, sonner toast feedback.
export default function ProgramLeadForm({ program }) {
  const { lead, fullTitle, hero } = program;
  const highlights = hero.highlights;
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    profession: "",
    organization: "",
    interest: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const setField = (key) => (value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your full name.";
    if (!/^[+\d][\d\s-]{6,}$/.test(form.phone))
      next.phone = "Please enter a valid mobile number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Please enter a valid email address.";
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      toast.error("Please fix the highlighted fields.");
      return;
    }
    console.log("Program lead:", { program: fullTitle, ...form });
    toast.success("Thank you! Our program advisor will reach out shortly.");
    setForm({ name: "", phone: "", email: "", profession: "", organization: "", interest: "", message: "" });
  };

  return (
    <SectionViewer id="apply" className="scroll-mt-24 py-16 md:py-24">
      <div className="grid overflow-hidden rounded-3xl border border-border shadow-[0_8px_40px_rgba(23,5,69,0.10)] lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left — pitch panel */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="relative overflow-hidden bg-primary p-8 text-white md:p-12"
        >
          {/* Ambient glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-light-blue/30 blur-[90px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-[#6B52F9]/20 blur-[80px]"
          />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-1.5 text-xs font-semibold tracking-widest text-secondary uppercase manrope">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
              Limited Seats
            </span>

            <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
              {lead.heading}
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-primary-foreground/80">
              {lead.subheading}
            </p>

            <ul className="mt-7 flex flex-col gap-3">
              {highlights.slice(0, 4).map((h) => (
                <li key={h} className="flex items-center gap-3 text-sm text-primary-foreground/90">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <BadgeCheck className="h-3.5 w-3.5 text-secondary" />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Right — form panel */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className="bg-card p-8 md:p-12"
        >
          <h3 className="text-xl font-bold tracking-tight text-primary md:text-2xl">
            Request Program Details
          </h3>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Fill out the form to receive the brochure, curriculum, and fee structure.
          </p>

          <form className="mt-7 flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="pl-name">Full name</Label>
                <Input
                  id="pl-name"
                  placeholder="Jane Doe"
                  className="h-11 px-4"
                  value={form.name}
                  aria-invalid={!!errors.name}
                  onChange={(e) => setField("name")(e.target.value)}
                />
                {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="pl-phone">Mobile number</Label>
                <Input
                  id="pl-phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="h-11 px-4"
                  value={form.phone}
                  aria-invalid={!!errors.phone}
                  onChange={(e) => setField("phone")(e.target.value)}
                />
                {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="pl-email">Email address</Label>
              <Input
                id="pl-email"
                type="email"
                placeholder="you@example.com"
                className="h-11 px-4"
                value={form.email}
                aria-invalid={!!errors.email}
                onChange={(e) => setField("email")(e.target.value)}
              />
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="pl-profession">Current profession</Label>
                <Input
                  id="pl-profession"
                  placeholder="e.g. Assistant Professor"
                  className="h-11 px-4"
                  value={form.profession}
                  onChange={(e) => setField("profession")(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="pl-org">Organization / Institution</Label>
                <Input
                  id="pl-org"
                  placeholder="e.g. Delhi University"
                  className="h-11 px-4"
                  value={form.organization}
                  onChange={(e) => setField("organization")(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="pl-message">
                Message <span className="font-normal text-muted-foreground">(optional)</span>
              </Label>
              <Textarea
                id="pl-message"
                placeholder="Tell us about your goals or any questions…"
                className="min-h-20 resize-none p-4"
                value={form.message}
                onChange={(e) => setField("message")(e.target.value)}
              />
            </div>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Button type="submit" size="lg" variant="gradiant" className="rounded-full px-7 font-semibold">
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button type="submit" size="lg" variant="primary" className="rounded-full px-7 font-semibold">
                <Download className="h-4 w-4" />
                Request Brochure
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </SectionViewer>
  );
}
