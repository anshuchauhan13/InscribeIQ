import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

// ─── Static options ───────────────────────────────────────────────────────────

const QUALIFICATIONS = [
  "High School / Secondary",
  "Bachelor's Degree",
  "Postgraduate Diploma",
  "Master's Degree",
  "MBA",
  "PhD / Doctorate",
  "Other",
];

const EXPERIENCE_RANGES = [
  "0–2 years",
  "3–5 years",
  "6–10 years",
  "11–15 years",
  "16–20 years",
  "20+ years",
];

const SPECIALIZATIONS = [
  "Business Strategy",
  "Leadership & Organisational Behaviour",
  "Finance & Economics",
  "Marketing & Brand Management",
  "Healthcare Management",
  "Technology & Innovation",
  "Entrepreneurship",
  "Sustainability & ESG",
  "International Business",
  "Human Resource Management",
];

const COUNTRIES = [
  "India",
  "United States",
  "United Kingdom",
  "United Arab Emirates",
  "Canada",
  "Australia",
  "Singapore",
  "Germany",
  "South Africa",
  "Other",
];

// ─── Reusable field label ─────────────────────────────────────────────────────

function FieldLabel({ children, required }) {
  return (
    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
      {children}
      {required && <span className="text-violet-500 ml-0.5">*</span>}
    </label>
  );
}


const  LeadGeneration=({
  heading         = "Ready to Take Your Leadership Journey to the Next Level?",
  subheading      = "Fill in your details and our advisors will reach out within 24 hours with a personalised DBA roadmap.",
  ctaText         = "Book a Free DBA Consultation",
  onSubmit,
  qualifications  = QUALIFICATIONS,
  experienceRanges = EXPERIENCE_RANGES,
  specializations = SPECIALIZATIONS,
  countries       = COUNTRIES,
  className,
}) =>{
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    qualification: "",
    experience: "",
    designation: "",
    specialization: "",
    country: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // ── helpers ──
  const set = (key) => (e) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  const setSelect = (key) => (val) =>
    setValues((v) => ({ ...v, [key]: val }));

  const validate = () => {
    const e = {};
    if (!values.name.trim())         e.name         = "Name is required";
    if (!values.phone.trim())        e.phone        = "Phone is required";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) e.email = "Enter a valid email";
    if (!values.qualification)       e.qualification = "Select a qualification";
    if (!values.experience)          e.experience   = "Select experience range";
    if (!values.designation.trim())  e.designation  = "Designation is required";
    if (!values.specialization)      e.specialization = "Select a specialization";
    if (!values.country)             e.country      = "Select a country";
    return e;
  };

  const handleSubmit = async () => {
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    try {
      await onSubmit?.(values);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  // ── error helper ──
  const err = (key) =>
    errors[key] ? (
      <p className="mt-1 text-[11px] text-rose-500">{errors[key]}</p>
    ) : null;

  // ── success state ──
  if (submitted) {
    return (
      <section className={cn("py-20 bg-slate-50", className)}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-violet-100 mb-6">
            <svg className="w-7 h-7 text-violet-600" viewBox="0 0 24 24" fill="none">
              <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">You're on the list!</h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            Our DBA advisors will reach out within 24 hours with a tailored roadmap.
            Keep an eye on <strong className="text-slate-700">{values.email}</strong>.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className={cn("", className)}>
      <div className="container  mx-auto px-5 md:px-16 lg:px-20 py-12 md:py-16 lg:py-16">

        {/* ── Two-column wrapper ── */}
        <div className="grid lg:grid-cols-[1fr_1.7fr] gap-12 items-start">

          {/* ── Left: headline ── */}
          <div className="lg:sticky lg:top-24">
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-violet-500 mb-4">
              Get Started
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-5">
              {heading}
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed mb-8">
              {subheading}
            </p>

            {/* Trust signals */}
            <ul className="space-y-3">
              {[
                "No commitment required",
                "Response within 24 hours",
                "Personalised DBA roadmap",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2.5 text-sm text-slate-600">
                  <span className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-violet-600" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right: form card ── */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 lg:p-10">

            {/* Row 1: Name + Phone */}
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <FieldLabel required>Full Name</FieldLabel>
                <Input
                  placeholder="Dr. Arjun Mehta"
                  value={values.name}
                  onChange={set("name")}
                  className={cn("h-11 text-sm rounded-xl border-slate-200 focus-visible:ring-violet-500", errors.name && "border-rose-400")}
                />
                {err("name")}
              </div>
              <div>
                <FieldLabel required>Phone Number</FieldLabel>
                <Input
                  placeholder="+91 98765 43210"
                  value={values.phone}
                  onChange={set("phone")}
                  className={cn("h-11 text-sm rounded-md border-slate-200 focus-visible:ring-violet-500", errors.phone && "border-rose-400")}
                />
                {err("phone")}
              </div>
            </div>

            {/* Row 2: Email + Designation */}
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <FieldLabel required>Email Address</FieldLabel>
                <Input
                  type="email"
                  placeholder="arjun@company.com"
                  value={values.email}
                  onChange={set("email")}
                  className={cn("h-11 text-sm rounded-xl border-slate-200 focus-visible:ring-violet-500", errors.email && "border-rose-400")}
                />
                {err("email")}
              </div>
              <div>
                <FieldLabel required>Current Designation</FieldLabel>
                <Input
                  placeholder="VP Strategy"
                  value={values.designation}
                  onChange={set("designation")}
                  className={cn("h-11 text-sm rounded-xl border-slate-200 focus-visible:ring-violet-500", errors.designation && "border-rose-400")}
                />
                {err("designation")}
              </div>
            </div>

            {/* Row 3: Qualification + Experience */}
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <FieldLabel required>Highest Qualification</FieldLabel>
                <Select onValueChange={setSelect("qualification")} value={values.qualification}>
                  <SelectTrigger className={cn("h-11 text-sm rounded-xl border-slate-200 focus:ring-violet-500", errors.qualification && "border-rose-400")}>
                    <SelectValue placeholder="Select qualification" />
                  </SelectTrigger>
                  <SelectContent>
                    {qualifications.map((q) => (
                      <SelectItem key={q} value={q}>{q}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {err("qualification")}
              </div>
              <div>
                <FieldLabel required>Years of Experience</FieldLabel>
                <Select onValueChange={setSelect("experience")} value={values.experience}>
                  <SelectTrigger className={cn("h-11 text-sm rounded-xl border-slate-200 focus:ring-violet-500", errors.experience && "border-rose-400")}>
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    {experienceRanges.map((r) => (
                      <SelectItem key={r} value={r}>{r}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {err("experience")}
              </div>
            </div>

            {/* Row 4: Specialization + Country */}
            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              <div>
                <FieldLabel required>Preferred Specialization</FieldLabel>
                <Select onValueChange={setSelect("specialization")} value={values.specialization}>
                  <SelectTrigger className={cn("h-11 text-sm rounded-xl border-slate-200 focus:ring-violet-500", errors.specialization && "border-rose-400")}>
                    <SelectValue placeholder="Select specialization" />
                  </SelectTrigger>
                  <SelectContent>
                    {specializations.map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {err("specialization")}
              </div>
              <div>
                <FieldLabel required>Country Preference</FieldLabel>
                <Select onValueChange={setSelect("country")} value={values.country}>
                  <SelectTrigger className={cn("h-11 text-sm rounded-xl border-slate-200 focus:ring-violet-500", errors.country && "border-rose-400")}>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((c) => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {err("country")}
              </div>
            </div>

            {/* CTA */}
            <Button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full h-12 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm tracking-wide transition-colors"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting…
                </>
              ) : (
                <>
                  {ctaText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>

            <p className="mt-4 text-center text-[11px] text-slate-400">
              By submitting, you agree to our{" "}
              <a href="#" className="underline underline-offset-2 hover:text-violet-600 transition-colors">
                Privacy Policy
              </a>
              . No spam, ever.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default LeadGeneration;