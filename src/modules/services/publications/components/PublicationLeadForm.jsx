import { useState } from "react";
import { motion } from "motion/react";
import {
  Send,
  Upload,
  ShieldCheck,
  Gift,
  Clock,
  FileText,
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

const DIAL_CODES = [
  { code: "IN", dial: "+91" },
  { code: "US", dial: "+1" },
  { code: "GB", dial: "+44" },
  { code: "AU", dial: "+61" },
  { code: "AE", dial: "+971" },
];

const TRUST = [
  { icon: Gift, title: "100% Free", desc: "No-cost journal recommendation." },
  { icon: ShieldCheck, title: "Confidential", desc: "Your manuscript stays private." },
  { icon: Clock, title: "Quick Response", desc: "We reach out within 24 hours." },
];

const inputClass = "!bg-muted/40 border-border/60 h-11";

export default function PublicationLeadForm({ data }) {
  const { leadForm, name } = data;

  const EMPTY = {
    name: "",
    country: "IN",
    phone: "",
    email: "",
    subject: "",
    title: "",
    category: "",
    message: "",
  };

  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [fileName, setFileName] = useState("");

  const setField = (key) => (value) => {
    setForm((p) => ({ ...p, [key]: value }));
    setErrors((p) => ({ ...p, [key]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email.";
    if (!form.phone.trim()) e.phone = "Please enter your mobile number.";
    if (!form.subject.trim()) e.subject = "Please enter your research subject.";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    console.log(`${name} journal recommendation request:`, { ...form, fileName });
    toast.success(
      "Request received! Our publication expert will review and share suitable journal options shortly."
    );
    setForm(EMPTY);
    setFileName("");
  };

  return (
    <section id="find-journal" className="scroll-mt-24 bg-muted/40">
      <SectionViewer className="inter py-16 md:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left — pitch + trust */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex flex-col gap-7 lg:sticky lg:top-24"
          >
            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold uppercase tracking-widest text-light-blue">
                Lead Form
              </p>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl">
                {leadForm.heading}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {leadForm.sub}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {TRUST.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-white p-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-light-blue/10 text-light-blue">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-primary">{title}</p>
                    <p className="text-xs text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="overflow-hidden rounded-3xl border border-border bg-white shadow-lg shadow-primary/5"
          >
            {/* Header */}
            <div
              className="px-6 py-5 md:px-8 md:py-6"
              style={{
                background:
                  "linear-gradient(135deg, #170545 0%, #320F8C 55%, #6B52F9 100%)",
              }}
            >
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15">
                  <FileText className="h-5 w-5 text-white" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-white md:text-lg">
                    Get Your Free Journal Match
                  </h3>
                  <p className="mt-0.5 text-xs text-white/60">
                    Share your details — our expert will do the rest.
                  </p>
                </div>
              </div>
            </div>

            {/* Body */}
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 p-6 md:p-8">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="pub-name">
                  Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="pub-name"
                  placeholder="Dr. Jane Smith"
                  className={inputClass}
                  value={form.name}
                  aria-invalid={!!errors.name}
                  onChange={(e) => setField("name")(e.target.value)}
                />
                {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
              </div>

              {/* Phone + Email */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="pub-phone">
                    Mobile number <span className="text-destructive">*</span>
                  </Label>
                  <div className="flex h-11 items-center overflow-hidden rounded-md border border-border/60 bg-muted/40 transition focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50">
                    <Select value={form.country} onValueChange={setField("country")}>
                      <SelectTrigger
                        aria-label="Country code"
                        className="!h-11 w-[84px] shrink-0 rounded-none !border-0 !bg-transparent pl-4 pr-2 text-xs shadow-none focus-visible:ring-0"
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
                      id="pub-phone"
                      type="tel"
                      placeholder="98765 43210"
                      className="h-full flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground"
                      value={form.phone}
                      onChange={(e) => setField("phone")(e.target.value)}
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="pub-email">
                    Email ID <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="pub-email"
                    type="email"
                    placeholder="you@example.com"
                    className={inputClass}
                    value={form.email}
                    aria-invalid={!!errors.email}
                    onChange={(e) => setField("email")(e.target.value)}
                  />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>

              {/* Subject + Category */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="pub-subject">
                    {leadForm.subjectLabel} <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="pub-subject"
                    placeholder="e.g. Marketing, Pharmacology…"
                    className={inputClass}
                    value={form.subject}
                    aria-invalid={!!errors.subject}
                    onChange={(e) => setField("subject")(e.target.value)}
                  />
                  {errors.subject && (
                    <p className="text-xs text-destructive">{errors.subject}</p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="pub-category">{leadForm.categoryLabel}</Label>
                  <Select value={form.category} onValueChange={setField("category")}>
                    <SelectTrigger
                      id="pub-category"
                      className="!h-11 w-full px-4 !bg-muted/40 border-border/60"
                    >
                      <SelectValue placeholder="Select preference" />
                    </SelectTrigger>
                    <SelectContent className="p-1">
                      {leadForm.categoryOptions.map((opt) => (
                        <SelectItem key={opt} value={opt} className="!px-3">
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Paper title */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="pub-title">Paper title / topic</Label>
                <Input
                  id="pub-title"
                  placeholder="Working title or research topic"
                  className={inputClass}
                  value={form.title}
                  onChange={(e) => setField("title")(e.target.value)}
                />
              </div>

              {/* Upload manuscript */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="pub-file">Upload manuscript</Label>
                <label
                  htmlFor="pub-file"
                  className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-light-blue/40 bg-muted/40 px-4 py-3 transition-colors hover:border-light-blue hover:bg-light-blue/[0.04]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-light-blue/10 text-light-blue">
                    <Upload className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 flex-1 truncate text-sm text-muted-foreground">
                    {fileName || "PDF, DOC or DOCX — optional"}
                  </span>
                  <span className="shrink-0 text-xs font-semibold text-blue">Browse</span>
                </label>
                <input
                  id="pub-file"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="pub-message">
                  Message{" "}
                  <span className="text-xs font-normal text-muted-foreground">(optional)</span>
                </Label>
                <Textarea
                  id="pub-message"
                  placeholder="Tell us about your paper, timeline or any specific requirement…"
                  className="!bg-muted/40 border-border/60 min-h-24 resize-none p-3.5 text-sm"
                  value={form.message}
                  onChange={(e) => setField("message")(e.target.value)}
                />
              </div>

              <Button type="submit" size="lg" className="mt-1 h-12 w-full bg-blue font-semibold text-white">
                {leadForm.submitCta}
                <Send className="ml-1 h-4 w-4" />
              </Button>

              <p className="text-center text-[11px] text-muted-foreground">
                Your information is confidential and used only to recommend journals.
              </p>
            </form>
          </motion.div>
        </div>
      </SectionViewer>
    </section>
  );
}
