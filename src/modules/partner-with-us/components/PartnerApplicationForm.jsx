import { useState } from "react";
import { motion } from "motion/react";
import {
    BadgeCheck,
    Headphones,
    ShieldCheck,
    Users,
    Lock,
    Send,
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

const TIERS = [
    { value: "referral", label: "Referral Partner" },
    { value: "channel", label: "Channel Partner" },
    { value: "strategic", label: "Strategic Partner" },
    { value: "not-sure", label: "Not sure yet — help me decide" },
];

const DIAL_CODES = [
    { code: "IN", dial: "+91" },
    { code: "US", dial: "+1" },
    { code: "GB", dial: "+44" },
    { code: "AU", dial: "+61" },
    { code: "AE", dial: "+971" },
];

const TRUST = [
    { icon: BadgeCheck, title: "Paid on Time", desc: "Transparent payouts, every cycle." },
    { icon: Headphones, title: "Dedicated Support", desc: "A real partner team behind you." },
    { icon: ShieldCheck, title: "Transparent Terms", desc: "No hidden clauses, ever." },
    { icon: Users, title: "750+ Active Partners", desc: "Join a thriving global network." },
];

const EMPTY = {
    fullName: "",
    organisation: "",
    email: "",
    country: "IN",
    phone: "",
    location: "",
    tier: "",
    network: "",
};

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const inputClass = "!bg-white/70 backdrop-blur-xs border-light-blue/40";

export default function PartnerApplicationForm() {
    const [form, setForm] = useState(EMPTY);
    const [errors, setErrors] = useState({});

    const setField = (key) => (value) => {
        setForm((prev) => ({ ...prev, [key]: value }));
        setErrors((prev) => ({ ...prev, [key]: "" }));
    };

    const validate = () => {
        const next = {};
        if (!form.fullName.trim()) next.fullName = "Please enter your full name.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
            next.email = "Please enter a valid email address.";
        if (!form.tier) next.tier = "Please select a partnership tier.";
        return next;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const next = validate();
        setErrors(next);
        if (Object.keys(next).length > 0) return;
        console.log("Partner application submitted:", form);
        toast.success(
            "Application received! Our Partner Relations team will reach out within 48 hours."
        );
        setForm(EMPTY);
    };

    return (
        <section id="apply" className="scroll-mt-24 bg-muted">
            <SectionViewer className="inter py-16 md:py-24">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left — pitch + trust */}
                    <motion.div
                        className="flex flex-col gap-8"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="flex flex-col gap-3">
                            <SectionLabel label="Apply Now" />
                            <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl">
                                Become an Inscribe IQ partner
                            </h2>
                            <p className="text-base leading-relaxed text-muted-foreground">
                                Fill in the form and our Partner Relations team will review your
                                application and get in touch within 48 hours to map out your
                                onboarding.
                            </p>
                        </div>

                        <motion.div
                            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                            variants={stagger}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {TRUST.map(({ icon: Icon, title, desc }) => (
                                <motion.div
                                    key={title}
                                    variants={fadeUp}
                                    transition={{ duration: 0.45, ease: "easeOut" }}
                                    className="flex items-start gap-3 rounded-2xl border border-border bg-white/70 p-4 backdrop-blur-xs"
                                >
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <Icon className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <p className="text-sm font-bold text-primary">{title}</p>
                                        <p className="text-xs text-muted-foreground">{desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Lock className="h-3.5 w-3.5 text-blue" />
                            Your information is confidential. We respond within 48 business hours.
                        </div>
                    </motion.div>

                    {/* Right — form */}
                    <motion.form
                        className="flex flex-col gap-5 rounded-3xl border border-light-blue/20 bg-white/60 p-6 shadow-xl shadow-light-blue/5 backdrop-blur-sm md:p-8"
                        onSubmit={handleSubmit}
                        noValidate
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {/* Full name */}
                        <div className="flex flex-col gap-1.5">
                            <Label htmlFor="fullName">
                                Full name <span className="text-destructive">*</span>
                            </Label>
                            <Input
                                id="fullName"
                                placeholder="Your full name"
                                className={inputClass}
                                value={form.fullName}
                                aria-invalid={!!errors.fullName}
                                onChange={(e) => setField("fullName")(e.target.value)}
                            />
                            {errors.fullName && (
                                <p className="text-xs text-destructive">{errors.fullName}</p>
                            )}
                        </div>

                        {/* Organisation */}
                        <div className="flex flex-col gap-1.5">
                            <Label htmlFor="organisation">Organisation / business name</Label>
                            <Input
                                id="organisation"
                                placeholder="Company or institution (optional)"
                                className={inputClass}
                                value={form.organisation}
                                onChange={(e) => setField("organisation")(e.target.value)}
                            />
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
                                className={inputClass}
                                value={form.email}
                                aria-invalid={!!errors.email}
                                onChange={(e) => setField("email")(e.target.value)}
                            />
                            {errors.email && (
                                <p className="text-xs text-destructive">{errors.email}</p>
                            )}
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col gap-1.5">
                            <Label htmlFor="phone">Phone number</Label>
                            <div className="flex h-10 items-center overflow-hidden rounded-md border border-light-blue/40 bg-white/70 backdrop-blur-xs transition focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 sm:rounded-lg md:h-11">
                                <Select value={form.country} onValueChange={setField("country")}>
                                    <SelectTrigger
                                        aria-label="Country code"
                                        className="!h-10 w-[92px] shrink-0 rounded-none !border-0 !bg-transparent px-3 shadow-none focus-visible:ring-0 md:!h-11"
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

                        {/* Location */}
                        <div className="flex flex-col gap-1.5">
                            <Label htmlFor="location">City / country</Label>
                            <Input
                                id="location"
                                placeholder="e.g. New Delhi, India"
                                className={inputClass}
                                value={form.location}
                                onChange={(e) => setField("location")(e.target.value)}
                            />
                        </div>

                        {/* Tier */}
                        <div className="flex flex-col gap-1.5">
                            <Label htmlFor="tier">
                                Partnership tier of interest{" "}
                                <span className="text-destructive">*</span>
                            </Label>
                            <Select value={form.tier} onValueChange={setField("tier")}>
                                <SelectTrigger
                                    id="tier"
                                    aria-invalid={!!errors.tier}
                                    className={`w-full !h-11 px-4 ${inputClass}`}
                                >
                                    <SelectValue placeholder="Select a tier" />
                                </SelectTrigger>
                                <SelectContent className={"p-2"}>
                                    {TIERS.map((t) => (
                                        <SelectItem key={t.value} value={t.value}>
                                            {t.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors.tier && (
                                <p className="text-xs text-destructive">{errors.tier}</p>
                            )}
                        </div>

                        {/* Network */}
                        <div className="flex flex-col gap-1.5">
                            <Label htmlFor="network">Your current business / network</Label>
                            <Textarea
                                id="network"
                                placeholder="Tell us about the audience or network you reach…"
                                className={`min-h-28 resize-none p-4 ${inputClass}`}
                                value={form.network}
                                onChange={(e) => setField("network")(e.target.value)}
                            />
                        </div>

                        <Button type="submit" size="lg" className="mt-2 h-13 w-full bg-blue text-white font-semibold">
                            Submit Partner Application <Send className="h-4 w-4" />
                        </Button>
                    </motion.form>
                </div>
            </SectionViewer>
        </section>
    );
}
