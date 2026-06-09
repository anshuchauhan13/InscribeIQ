import { useState } from "react";
import { Briefcase, User, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  "Publication Services",
  "Thesis Support",
  "Research Services",
  "Honorary Doctorate",
  "UG/PG Admissions",
  "Certification Programs",
];

// Field wrapper with a leading lucide icon
function IconField({ icon: Icon, children }) {
  return (
    <div className="flex h-12 items-center gap-2.5 rounded-xl border border-input bg-background px-3.5 transition-colors focus-within:border-light-blue focus-within:ring-2 focus-within:ring-light-blue/20">
      <Icon className="h-5 w-5 shrink-0 text-muted-foreground" strokeWidth={1.75} />
      {children}
    </div>
  );
}

const inputCls =
  "h-full w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground";

function LeadForm() {
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // hook up submission here
  };

  return (
    <SectionViewer className="py-14 md:py-24">
      <div className=" flex flex-col items-center gap-10">
        {/* Left — heading */}
        <div className="flex flex-col items-center">
          <SectionLabel label="Lead Form" className="mb-3" />
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl xl:text-5xl">
            How Can We Help You?
          </h2>
          <p className="mt-4 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
            Tell us what you need and pick a time that works for you. One of our
            academic advisors will reach out to guide you through the next steps.
          </p>
        </div>

        {/* Right — form card */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 md:p-8 w-full max-w-xl"
        >
          {/* Service dropdown */}
          <Select value={service} onValueChange={setService}>
            <SelectTrigger className="h-12! w-full rounded-xl px-3.5">
              <div className="flex items-center gap-2.5">
                <Briefcase
                  className="h-5 w-5 text-muted-foreground"
                  strokeWidth={1.75}
                />
                <SelectValue placeholder="Select a service" />
              </div>
            </SelectTrigger>
            <SelectContent>
              {SERVICES.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Name */}
          <IconField icon={User}>
            <input type="text" placeholder="Name" required className={inputCls} />
          </IconField>

          {/* Phone */}
          <IconField icon={Phone}>
            <input type="tel" placeholder="Phone" required className={inputCls} />
          </IconField>

          {/* Email */}
          <IconField icon={Mail}>
            <input type="email" placeholder="Email" required className={inputCls} />
          </IconField>

          {/* Book your slot (time) */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">
              Book your Slot
            </label>
            <IconField icon={Clock}>
              <input type="time" required className={inputCls} />
            </IconField>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="mt-2 h-12 rounded-xl bg-gradient-to-b from-[#6B52F9] to-[#8B79F2] text-white hover:opacity-90"
          >
            Submit
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </form>
      </div>
    </SectionViewer>
  );
}

export default LeadForm;
