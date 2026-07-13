import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import {
  IconBrandWhatsapp,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import SectionViewer from "../common/SectionViewer";
import { sendLead } from "@/lib/emailjs";
import { CONTACT, waLink } from "@/lib/contact";

const socials = [
  { icon: IconBrandFacebook, label: "Facebook", href: CONTACT.socials.facebook },
  { icon: IconBrandInstagram, label: "Instagram", href: CONTACT.socials.instagram },
  { icon: IconBrandLinkedin, label: "LinkedIn", href: CONTACT.socials.linkedin },
];

const services = [
  { label: "PhD", href: "/courses/phd" },
  { label: "DBA", href: "/courses/dba" },
  { label: "Honorary Doctorate", href: "/courses/honary_doctorate" },
  { label: "Publications", href: "/services?domain=publications" },
  { label: "Thesis Writing", href: "/writing/thesis" },
  { label: "Research Papers", href: "/writing/research_paper" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact_us" },
  { label: "Partner with Us", href: "/partner_with_us" },
];

const resources = [
  { label: "Free Consultation", href: "/consultation" },
  { label: "FAQs", href: "/faqs" },
  { label: "Payment", href: "/payment" },
];

// Internal routes use react-router <Link> for SPA navigation; anything else
// (mailto:, tel:, external, or a bare #) falls back to a plain anchor.
const FooterLink = ({ href, className, children }) =>
  href?.startsWith("/") ? (
    <Link to={href} className={className}>
      {children}
    </Link>
  ) : (
    <a href={href} className={className}>
      {children}
    </a>
  );

const contactDetails = [
  {
    icon: IconBrandWhatsapp,
    label: `Enquiry: ${CONTACT.enquiry.display}`,
    href: waLink(),
    external: true,
  },
  {
    icon: Phone,
    label: `Support: ${CONTACT.support.display}`,
    href: `tel:${CONTACT.support.tel}`,
  },
  {
    icon: Mail,
    label: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: MapPin,
    label: CONTACT.address,
    href: CONTACT.mapUrl,
    external: true,
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const value = email.trim();
    if (!value) return;
    setSubmitting(true);
    try {
      await sendLead(
        "Newsletter Subscription",
        { email: value },
        "Thank you for subscribing to Inscribe IQ. You'll now receive our latest academic insights and updates straight to your inbox."
      );
      toast.success("You're subscribed!", {
        description: "We'll keep you posted on academic insights & updates.",
      });
      setEmail("");
    } catch (err) {
      console.error(err);
      toast.error("Subscription failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer
      className="relative overflow-hidden text-white
        bg-[radial-gradient(circle_at_bottom_center,_#242E3E_0%,_#0C0E18_70%)] inter"
    >
      {/* SVG filter definition for noise grain on the watermark */}
      <svg aria-hidden="true" style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <filter id="footer-noise-filter">
            {/* ── Inner shadow (Figma: X 0, Y 4, Blur 4, #C1E7FF @ 3%) ── */}
            <feColorMatrix in="SourceAlpha" type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1 1"
              result="outside" />
            <feFlood floodColor="#C1E7FF" floodOpacity="0.4" result="shadowColor" />
            <feComposite in="shadowColor" in2="outside" operator="in" result="coloredOutside" />
            <feGaussianBlur stdDeviation="4" in="coloredOutside" result="blurredShadow" />
            <feOffset dx="0" dy="4" in="blurredShadow" result="offsetShadow" />
            <feComposite in="offsetShadow" in2="SourceAlpha" operator="in" result="innerShadow" />
            <feMerge result="withShadow">
              <feMergeNode in="SourceGraphic" />
              <feMergeNode in="innerShadow" />
            </feMerge>
            {/* ── Noise grain ── */}
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" result="noise" />
            <feColorMatrix type="saturate" values="0" in="noise" result="greyNoise" />
            <feBlend in="withShadow" in2="greyNoise" mode="overlay" result="blended" />
            <feComposite in="blended" in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>

      <SectionViewer>
        <div className="py-6 md:py-12 xl:py-18">
          {/* Main grid */}
          <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-10 mb-10">
            {/* Col 1: Brand */}
            <div className="flex flex-col gap-4 col-span-2 md:col-span-3">
              <div className="flex items-center gap-2">
                <div className="h-8 w-auto">
                  <Link to="/" className="shrink-0">
                    <img
                      src="/faviconIcon.png"
                      alt="Logo"
                      className="h-10 md:h-12 w-auto"
                    />
                  </Link>
                </div>
                <span className="text-lg font-bold tracking-tight text-white">
                  Inscribe IQ
                </span>
              </div>
              <p className="text-sm md:text-base text-slate-400 leading-relaxed sm:max-w-sm">
                Empowering your ideas with expert writing and publishing
                solutions. Let's create impactful stories together—crafted with
                precision, delivered with excellence.
              </p>
              <div className="flex items-center gap-3 mt-1">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="h-9 w-9 rounded-lg border border-slate-700 flex items-center justify-center text-white transition-colors hover:border-light-blue hover:bg-light-blue/10 hover:text-light-blue"
                  >
                    <Icon className="h-[18px] w-[18px]" stroke={1.75} />
                  </a>
                ))}
              </div>
            </div>

            {/* Col: Services */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-base md:text-xl font-semibold text-white mb-4 tracking-wide">
                Services
              </h3>
              <ul className="flex flex-col gap-2.5">
                {services.map(({ label, href }) => (
                  <li key={label}>
                    <FooterLink
                      href={href}
                      className="text-sm md:text-base text-slate-400 hover:text-white transition-colors"
                    >
                      {label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col: Company */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-base md:text-xl font-semibold text-white mb-4 tracking-wide">
                Company
              </h3>
              <ul className="flex flex-col gap-2.5">
                {company.map(({ label, href }) => (
                  <li key={label}>
                    <FooterLink
                      href={href}
                      className="text-sm md:text-base text-slate-400 hover:text-white transition-colors"
                    >
                      {label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col: Resources */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-base md:text-xl font-semibold text-white mb-4 tracking-wide">
                Resources
              </h3>
              <ul className="flex flex-col gap-2.5">
                {resources.map(({ label, href }) => (
                  <li key={label}>
                    <FooterLink
                      href={href}
                      className="text-sm md:text-base text-slate-400 hover:text-white transition-colors"
                    >
                      {label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col: Get in Touch */}
            <div className="col-span-2 md:col-span-3">
              <h3 className="text-base md:text-xl font-semibold text-white mb-4 tracking-wide">
                Get in Touch
              </h3>

              {/* Newsletter subscribe */}
              <form onSubmit={handleSubscribe} className="mb-6">
                <label
                  htmlFor="footer-email"
                  className="mb-2 block text-xs md:text-sm leading-relaxed text-slate-400"
                >
                  Subscribe for academic insights & updates.
                </label>
                <div className="flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/40 p-1 transition-colors focus-within:border-light-blue/70 focus-within:ring-2 focus-within:ring-light-blue/20">
                  <input
                    id="footer-email"
                    type="email"
                    required
                    placeholder="you@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm md:text-base text-white placeholder:text-slate-500 outline-none"
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-gradient-to-b from-[#6B52F9] to-[#8B79F2] px-3.5 py-2 text-sm md:text-base font-semibold text-white shadow-sm shadow-light-blue/30 transition-transform duration-200 hover:-translate-y-0.5 disabled:opacity-60"
                  >
                    <Send className="h-3.5 w-3.5" />
                    {submitting ? "…" : "Join"}
                  </button>
                </div>
              </form>

              {/* Contact info */}
              <ul className="flex flex-col gap-2.5">
                {contactDetails.map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                      className="group flex items-center gap-3 text-sm md:text-base text-slate-400 transition-colors hover:text-white"
                    >
                      {/* <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/40 text-light-blue transition-colors group-hover:border-light-blue/50 group-hover:bg-slate-800/70"> */}
                        <Icon className="h-4 w-4 text-secondary/70" />
                      {/* </span> */}
                      <span className="min-w-0 break-words">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="relative my-2">
            <Separator className="border-t border-dashed border-slate-600 bg-transparent" />
            <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[#0f172a] to-transparent" />
            <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#0f172a] to-transparent" />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs md:text-sm text-slate-400">
            <span>©2026 InscribeIQ • All right reserved.</span>
            <div className="flex items-center gap-5">
              <Link to="/privacy_policy" className="hover:text-slate-300 transition-colors cursor-pointer">
                Privacy Policy
              </Link>
              <Link to="/refund_policy" className="hover:text-slate-300 transition-colors cursor-pointer">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>

        {/*
        Watermark — lives OUTSIDE SectionViewer so it spans the full footer width
        with no horizontal padding constraints. font-size ~19vw fills the viewport
        at any screen size; overflow-hidden on <footer> clips any excess.
        */}
        <div
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="block whitespace-nowrap font-extrabold leading-none tracking-tight md:tracking-tighter text-transparent bg-clip-text"
            style={{
              fontSize: "clamp(3rem, 19vw, 22rem)",
              opacity: 0.1,
              filter: "url(#footer-noise-filter)",
              backgroundImage:
                "linear-gradient(to bottom, #8D7CB1A6 0%, #5B5A5D 100%)",
            }}
          >
            Inscribe IQ
          </span>
        </div>
      </SectionViewer>
    </footer>
  );
};

export default Footer;
