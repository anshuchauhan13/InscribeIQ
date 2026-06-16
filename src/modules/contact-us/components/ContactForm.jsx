import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useState } from "react";

const EMPTY = {
    firstName: "",
    lastName: "",
    email: "",
    country: "IN",
    phone: "",
    message: "",
    services: [],
};


// Service interests offered as checkboxes (matches the two-column layout).
const SERVICES = [
    "Thesis & Dissertation",
    "Research Papers",
    "Publication Support",
    "PhD / DBA Guidance",
    "Honorary Doctorate",
    "Other",
];

// Country dial codes for the phone field.
const DIAL_CODES = [
    { code: "IN", dial: "+91" },
    { code: "US", dial: "+1" },
    { code: "GB", dial: "+44" },
    { code: "AU", dial: "+61" },
];

function ContactForm() {
     
    const [form, setForm] = useState(EMPTY);
    const [errors, setErrors] = useState({});

    const setField = (key) => (value) => {
        setForm((prev) => ({ ...prev, [key]: value }));
        setErrors((prev) => ({ ...prev, [key]: "" }));
    };

    const toggleService = (service) =>
        setForm((prev) => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter((s) => s !== service)
                : [...prev.services, service],
        }));

    const validate = () => {
        const next = {};
        if (!form.firstName.trim()) next.firstName = "Please enter your first name.";
        if (!form.lastName.trim()) next.lastName = "Please enter your last name.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
            next.email = "Please enter a valid email address.";
        if (!form.message.trim()) next.message = "Please leave us a message.";
        return next;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const next = validate();
        setErrors(next);
        if (Object.keys(next).length > 0) return;
        console.log("Contact submitted:", form);
        toast.success("Thanks for reaching out! Our team will get back to you shortly.");
        setForm(EMPTY);
    };

  return (
    <div>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
                            {/* First + last name */}
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div className="flex flex-col gap-1.5">
                                    <Label htmlFor="firstName">
                                        First name <span className="text-destructive">*</span>
                                    </Label>
                                    <Input
                                        id="firstName"
                                        placeholder="First name"
                                        className="!bg-white/70 backdrop-blur-xs border-light-blue/40"
                                        value={form.firstName}
                                        aria-invalid={!!errors.firstName}
                                        onChange={(e) => setField("firstName")(e.target.value)}
                                    />
                                    {errors.firstName && (
                                        <p className="text-destructive text-xs">{errors.firstName}</p>
                                    )}
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <Label htmlFor="lastName">
                                        Last name <span className="text-destructive">*</span>
                                    </Label>
                                    <Input
                                        id="lastName"
                                        placeholder="Last name"
                                        className="!bg-white/70 backdrop-blur-xs border-light-blue/40"
                                        value={form.lastName}
                                        aria-invalid={!!errors.lastName}
                                        onChange={(e) => setField("lastName")(e.target.value)}
                                    />
                                    {errors.lastName && (
                                        <p className="text-destructive text-xs">{errors.lastName}</p>
                                    )}
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex flex-col gap-1.5">
                                <Label htmlFor="email">
                                    Email <span className="text-destructive">*</span>
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    className="!bg-white/70 backdrop-blur-xs border-light-blue/40"
                                    value={form.email}
                                    aria-invalid={!!errors.email}
                                    onChange={(e) => setField("email")(e.target.value)}
                                />
                                {errors.email && (
                                    <p className="text-destructive text-xs">{errors.email}</p>
                                )}
                            </div>

                            {/* Phone with dial-code select */}
                            <div className="flex flex-col gap-1.5">
                                <Label htmlFor="phone">Phone number</Label>
                                <div className="flex h-10 md:h-11 items-center overflow-hidden rounded-md sm:rounded-lg border border-light-blue/40 bg-white/70 backdrop-blur-xs transition focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50">
                                    <Select value={form.country} onValueChange={setField("country")}>
                                        <SelectTrigger
                                            aria-label="Country code"
                                            className="!h-10 md:!h-11 w-[92px] shrink-0 rounded-none !border-0 !bg-transparent px-3 shadow-none focus-visible:ring-0"
                                        >
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent className="p-1">
                                            {DIAL_CODES.map((c) => (
                                                <SelectItem key={c.code} value={c.code} className="!px-3">
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
                            </div>

                            {/* Message */}
                            <div className="flex flex-col gap-1.5">
                                <Label htmlFor="message">
                                    Message <span className="text-destructive">*</span>
                                </Label>
                                <Textarea
                                    id="message"
                                    placeholder="Leave us a message…"
                                    className="min-h-32 resize-none p-4 !bg-white/70 backdrop-blur-xs border-light-blue/40"
                                    value={form.message}
                                    aria-invalid={!!errors.message}
                                    onChange={(e) => setField("message")(e.target.value)}
                                />
                                {errors.message && (
                                    <p className="text-destructive text-xs">{errors.message}</p>
                                )}
                            </div>

                            {/* Services */}
                            <div className="flex flex-col gap-3">
                                <Label>Services</Label>
                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    {SERVICES.map((service) => {
                                        const id = `service-${service}`;
                                        return (
                                            <div key={service} className="flex items-center gap-2.5">
                                                <Checkbox
                                                    id={id}
                                                    checked={form.services.includes(service)}
                                                    onCheckedChange={() => toggleService(service)}
                                                    className="bg-white/70 backdrop-blur-xs border-light-blue/40"
                                                />
                                                <Label htmlFor={id} className="font-normal text-foreground">
                                                    {service}
                                                </Label>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <Button type="submit" size="lg" className="mt-4 w-full">
                                Send message
                            </Button>
                        </form>
    </div>
  )
}

export default ContactForm