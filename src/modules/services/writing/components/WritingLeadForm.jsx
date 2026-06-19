import { useState } from "react";
import { motion } from "motion/react";
import { Send, Upload, PenLine } from "lucide-react";
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

const inputClass = "!bg-muted/40 border-border/60 h-11";

export default function WritingLeadForm({ data }) {
  const { leadForm, name } = data;
  const extraFields = leadForm.fields || [];

  const buildEmpty = () => {
    const base = { name: "", country: "IN", phone: "", email: "", message: "" };
    extraFields.forEach((f) => (base[f.key] = ""));
    return base;
  };

  const [form, setForm] = useState(buildEmpty);
  const [needHelp, setNeedHelp] = useState([]);
  const [fileName, setFileName] = useState("");
  const [errors, setErrors] = useState({});

  const setField = (key) => (value) => {
    setForm((p) => ({ ...p, [key]: value }));
    setErrors((p) => ({ ...p, [key]: "" }));
  };

  const toggleHelp = (option) =>
    setNeedHelp((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email.";
    if (!form.phone.trim()) e.phone = "Please enter your mobile number.";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    console.log(`${name} writing request:`, { ...form, needHelp, fileName });
    toast.success(
      "Request received! Our academic writing expert will reach out with the best support option shortly."
    );
    setForm(buildEmpty());
    setNeedHelp([]);
    setFileName("");
  };

  const renderField = (f) => {
    if (f.type === "select") {
      return (
        <div key={f.key} className="flex flex-col gap-2">
          <Label htmlFor={`wf-${f.key}`}>{f.label}</Label>
          <Select value={form[f.key]} onValueChange={setField(f.key)}>
            <SelectTrigger id={`wf-${f.key}`} className="!h-11 w-full px-4 !bg-muted/40 border-border/60">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent className="p-1">
              {f.options.map((opt) => (
                <SelectItem key={opt} value={opt} className="!px-3">
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      );
    }
    if (f.type === "yesno") {
      return (
        <div key={f.key} className="flex flex-col gap-2">
          <Label>{f.label}</Label>
          <div className="flex gap-2">
            {["Yes", "No"].map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setField(f.key)(opt)}
                className={`h-11 flex-1 rounded-lg border text-sm font-medium transition-all ${
                  form[f.key] === opt
                    ? "border-primary bg-primary text-white shadow-sm"
                    : "border-border/60 bg-muted/40 text-muted-foreground hover:border-primary/40 hover:text-primary"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      );
    }
    return (
      <div key={f.key} className="flex flex-col gap-2">
        <Label htmlFor={`wf-${f.key}`}>{f.label}</Label>
        <Input
          id={`wf-${f.key}`}
          placeholder={f.placeholder || ""}
          className={inputClass}
          value={form[f.key]}
          onChange={(e) => setField(f.key)(e.target.value)}
        />
      </div>
    );
  };

  return (
    <section id="writing-form" className="scroll-mt-24 bg-muted/40">
      <SectionViewer className="inter py-16 md:py-24">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-light-blue">Lead Form</p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl">
            {leadForm.heading}
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {leadForm.sub}
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl border border-border bg-white shadow-lg shadow-primary/5"
        >
          {/* Header */}
          <div
            className="px-6 py-5 md:px-8 md:py-6"
            style={{
              background: "linear-gradient(135deg, #170545 0%, #320F8C 55%, #6B52F9 100%)",
            }}
          >
            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15">
                <PenLine className="h-5 w-5 text-white" />
              </span>
              <div>
                <h3 className="text-base font-bold text-white md:text-lg">
                  Tell us about your requirement
                </h3>
                <p className="mt-0.5 text-xs text-white/60">
                  We'll match you with the right support — no obligation.
                </p>
              </div>
            </div>
          </div>

          {/* Body */}
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 p-6 md:p-8">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="wf-name">
                Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="wf-name"
                placeholder="Your full name"
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
                <Label htmlFor="wf-phone">
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
                    id="wf-phone"
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
                <Label htmlFor="wf-email">
                  Email ID <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="wf-email"
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

            {/* Dynamic fields */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {extraFields.map(renderField)}
            </div>

            {/* Need help with (multi-select chips) */}
            {leadForm.needHelp && (
              <div className="flex flex-col gap-2">
                <Label>{leadForm.needHelp.label}</Label>
                <div className="flex flex-wrap gap-2">
                  {leadForm.needHelp.options.map((opt) => {
                    const active = needHelp.includes(opt);
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggleHelp(opt)}
                        className={`rounded-lg border px-3.5 py-2 text-xs font-medium transition-all ${
                          active
                            ? "border-light-blue bg-light-blue/10 text-blue"
                            : "border-border/60 bg-muted/40 text-muted-foreground hover:border-light-blue/40 hover:text-primary"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Upload */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="wf-file">{leadForm.uploadLabel}</Label>
              <label
                htmlFor="wf-file"
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
                id="wf-file"
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="wf-message">
                Message <span className="text-xs font-normal text-muted-foreground">(optional)</span>
              </Label>
              <Textarea
                id="wf-message"
                placeholder="Tell us more about your requirement, timeline, or any specifics…"
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
              Your details are confidential and used only to guide your writing requirement.
            </p>
          </form>
        </motion.div>
      </SectionViewer>
    </section>
  );
}
