import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, SunIcon as Sunburst } from "lucide-react";
import SectionViewer from "@/components/common/SectionViewer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const SERVICES = [
  "Publication Services",
  "Thesis Support",
  "Research Services",
  "Honorary Doctorate",
  "UG/PG Admissions",
  "Certification Programs",
];

export default function LeadForm() {
  const [form, setForm] = useState({
    service: "",
    name: "",
    phone: "",
    email: "",
    message: "",
    date: undefined,
    time: "",
  });
  const [errors, setErrors] = useState({});
  const [dateOpen, setDateOpen] = useState(false);

  const setField = (key) => (value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const validate = () => {
    const next = {};
    if (!form.service) next.service = "Please select a service.";
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^[+\d][\d\s-]{6,}$/.test(form.phone))
      next.phone = "Please enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Please enter a valid email address.";
    if (!form.date) next.date = "Please pick a preferred date.";
    if (!form.time) next.time = "Please pick a preferred time.";
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    console.log("Lead submitted:", form);
    alert("Thanks! One of our advisors will reach out shortly.");
    setForm({ service: "", name: "", phone: "", email: "", message: "", date: undefined, time: "" });
  };

  return (
    <SectionViewer className="flex items-center justify-center overflow-hidden pb-24">
      <div className="w-full relative max-w-6xl overflow-hidden flex flex-col md:flex-row">
        {/* Decorative overlay elements */}
        <div className="w-full h-full z-2 absolute bg-linear-to-t from-transparent to-black"></div>
        <div className="flex absolute z-2 overflow-hidden backdrop-blur-2xl">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-[60rem] z-2 w-[4rem] bg-linear-90 from-[#ffffff00] via-[#000000] via-[69%] to-[#ffffff30] opacity-30 overflow-hidden" />
          ))}
        </div>
        <div className="w-[15rem] h-[15rem] bg-orange-500 absolute z-1 rounded-full bottom-0"></div>
        <div className="w-[8rem] h-[5rem] bg-white absolute z-1 rounded-full bottom-0"></div>

        {/* Left panel */}
        <div className="bg-primary text-white p-8 md:p-12 md:w-1/2 relative rounded-bl-3xl overflow-hidden">
          <h1 className="text-2xl md:text-3xl font-medium leading-tight z-10 tracking-tight relative">
            How Can We Help You?
          </h1>
          <p className="text-xs md:text-sm text-muted mt-4 z-10 relative">
            Tell us what you need and pick a time that works for you. One of our
            academic advisors will reach out to guide you through the next steps.
          </p>
        </div>

        {/* Right panel — form */}
        <div className="p-8 md:p-12 md:w-1/2 flex flex-col bg-muted z-15">
          <div className="flex flex-col mb-8">
            <h2 className="text-3xl font-medium mb-2 tracking-tight">Get Started</h2>
            <p className="opacity-80">Fill in your details and we'll be in touch.</p>
          </div>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
            {/* Service */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="service">Service you need</Label>
              <Select value={form.service} onValueChange={setField("service")}>
                <SelectTrigger
                  id="service"
                  className={"w-full !bg-white !h-11 px-4"}
                >
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className={"p-1 mt-1"}>
                  {SERVICES.map((s) => (
                    <SelectItem className="!px-4 h-10" key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.service && <p className="text-destructive text-xs">{errors.service}</p>}
            </div>

            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="name">Your name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Jane Doe"
                className="!bg-white h-11 px-4"
                value={form.name}
                aria-invalid={!!errors.name}
                onChange={(e) => setField("name")(e.target.value)}
              />
              {errors.name && <p className="text-destructive text-xs">{errors.name}</p>}
            </div>

            {/* Phone + Email side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="phone">Phone number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="!bg-white h-11 px-4"
                  value={form.phone}
                  aria-invalid={!!errors.phone}
                  onChange={(e) => setField("phone")(e.target.value)}
                />
                {errors.phone && <p className="text-destructive text-xs">{errors.phone}</p>}
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="!bg-white h-11 px-4"
                  value={form.email}
                  aria-invalid={!!errors.email}
                  onChange={(e) => setField("email")(e.target.value)}
                />
                {errors.email && <p className="text-destructive text-xs">{errors.email}</p>}
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="message">Message <span className="text-muted-foreground font-normal">(optional)</span></Label>
              <Textarea
                id="message"
                placeholder="Briefly describe what you need help with…"
                className="!bg-white p-4 min-h-20 resize-none"
                value={form.message}
                onChange={(e) => setField("message")(e.target.value)}
              />
            </div>

            {/* Date picker + Time side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Date — Calendar in Popover */}
              <div className="flex flex-col gap-1.5">
                <Label>Preferred date</Label>
                <Popover open={dateOpen} onOpenChange={setDateOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className={cn(
                        "h-11 justify-start text-left font-normal !bg-white border-input px-4",
                        !form.date && "text-muted-foreground",
                        errors.date && "border-destructive ring-3 ring-destructive/20"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 shrink-0" />
                      {form.date ? format(form.date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={form.date}
                      onSelect={(d) => { setField("date")(d); setDateOpen(false); }}
                      disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {errors.date && <p className="text-destructive text-xs">{errors.date}</p>}
              </div>

              {/* Time */}
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="time">Preferred time</Label>
                <Input
                  id="time"
                  type="time"
                  className="!bg-white h-11 px-4"
                  value={form.time}
                  aria-invalid={!!errors.time}
                  onChange={(e) => setField("time")(e.target.value)}
                />
                {errors.time && <p className="text-destructive text-xs">{errors.time}</p>}
              </div>
            </div>

            <Button type="submit" size="lg" variant="gradiant" className="mt-2">
              Submit your Inquiry
            </Button>
          </form>
        </div>
      </div>
    </SectionViewer>
  );
}
