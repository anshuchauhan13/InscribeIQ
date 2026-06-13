import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, ChevronDown } from "lucide-react";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon fill="#0f172a" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const services = [
  { label: "Publication", href: "#" },
  { label: "Thesis", href: "#" },
  { label: "Research", href: "#" },
  { label: "University Partnership", href: "#" },
  { label: "Honorary Doctorate", href: "#" },
  { label: "Admissions", href: "#" },
];

const company = [
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Careers", href: "#" },
];

const resources = [
  { label: "Blogs", href: "#" },
  { label: "Guides", href: "#" },
  { label: "FAQs", href: "#" },
];

// Accordion item — only renders chevron & toggle on mobile
const AccordionLinkGroup = ({ title, links }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-700/60 sm:border-none">
      {/* Header — clickable only on mobile */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-3.5 sm:py-0 sm:cursor-default sm:pointer-events-none"
      >
        <h3 className="text-sm font-semibold text-white tracking-wide">
          {title}
        </h3>
        <ChevronDown
          className={`h-4 w-4 text-slate-400 transition-transform duration-300 sm:hidden ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Links — always visible on sm+, toggleable on mobile */}
      <ul
        className={`flex flex-col gap-2.5 overflow-hidden transition-all duration-300 ease-in-out
          sm:max-h-none sm:opacity-100 sm:pb-0 sm:mt-4
          ${open ? "max-h-96 opacity-100 pb-3.5" : "max-h-0 opacity-0"}
        `}
      >
        {links.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer
      className="relative overflow-hidden text-white min-h-[75vh]
      bg-[radial-gradient(circle_at_bottom_center,_#242E3E_0%,_#0C0E18_70%)] inter"
    >
      {/* Watermark */}
      <div
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 pointer-events-none select-none whitespace-nowrap"
        aria-hidden="true"
      >
        <span
          className="text-[clamp(6rem,18vw,16rem)] font-extrabold tracking-[-0.04em] leading-none text-transparent bg-clip-text opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(141,124,177,0.65) 0%, rgba(91,90,93,1) 100%)",
            fontFamily: "Inter Variable, Inter, sans-serif",
          }}
        >
          Inscribe IQ
        </span>
      </div>

      <div className="relative z-10 container mx-auto px-5 sm:px-8 lg:px-12 pt-10 sm:pt-12 pb-6">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-0 sm:gap-10 mb-6 sm:mb-10">

          {/* Col 1: Brand — always fully visible */}
          <div className="flex flex-col gap-4 pb-6 sm:pb-0 border-b border-slate-700/60 sm:border-none mb-2 sm:mb-0">
            <div className="flex items-center gap-3">
              <div className="h-auto w-auto">
                <a href="/" className="shrink-0">
                  <img
                    src="/faviconIcon.png"
                    alt="Logo"
                    className="h-14 sm:h-10 md:h-12 w-auto"
                  />
                </a>
              </div>
              <span className="text-2xl sm:text-lg font-bold tracking-tight text-white">
                Inscribe IQ
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-[280px] sm:max-w-[220px]">
              Empowering your ideas with expert writing and publishing
              solutions. Let's create impactful stories together—crafted with
              precision, delivered with excellence.
            </p>
            <div className="flex items-center gap-3 mt-1">
              {[
                { icon: <FacebookIcon />, label: "Facebook" },
                { icon: <YoutubeIcon />, label: "YouTube" },
                { icon: <XIcon />, label: "X" },
              ].map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="h-8 w-8 rounded-md border border-slate-700 flex items-center justify-center text-white hover:text-white hover:border-slate-500 transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services */}
          <AccordionLinkGroup title="Services" links={services} />

          {/* Col 3: Company */}
          <AccordionLinkGroup title="Company" links={company} />

          {/* Col 4: Resources */}
          <AccordionLinkGroup title="Resources" links={resources} />

          {/* Col 5: Get in Touch */}
          <div className="pt-5 sm:pt-0">
            <h3 className="text-sm font-semibold text-white mb-4 tracking-wide">
              Get in Touch
            </h3>

            {/* Email subscribe */}
            <div className="flex items-center mb-5 rounded-md overflow-hidden border border-slate-700 bg-slate-800/50">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder:text-slate-500 outline-none min-w-0"
              />
              <button className="px-3 py-2 text-sm font-medium bg-white hover:bg-indigo-500 transition-colors text-black whitespace-nowrap">
                Subscribe
              </button>
            </div>

            {/* Contact info */}
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5 text-sm text-slate-400">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-slate-500" />
                <span>+91 87877 34234</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-slate-500" />
                <a
                  href="mailto:inscribe.iq@example.com"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  inscribe.iq@example.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-400">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-slate-500" />
                <span>Rajendra Nagar, Ghaziabad, India 201007.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative my-2">
          <Separator className="border-t border-dashed border-slate-600 bg-transparent" />
          <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[#0f172a] to-transparent" />
          <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#0f172a] to-transparent" />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 pt-2">
          <span>©2026 InscribeIQ • All rights reserved.</span>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Terms of Services
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;