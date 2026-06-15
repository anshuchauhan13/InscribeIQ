import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin } from "lucide-react";
import SectionViewer from "../common/SectionViewer";

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

const Footer = () => {
  const [email, setEmail] = useState("");

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
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-5 gap-10 mb-10">
            {/* Col 1: Brand */}
            <div className="flex flex-col gap-4 col-span-2">
              <div className="flex items-center gap-2">
                <div className="h-8 w-auto">
                  <a href="/" className="shrink-0">
                    <img
                      src="/faviconIcon.png"
                      alt="Logo"
                      className="h-10 md:h-12 w-auto"
                    />
                  </a>
                </div>
                <span className="text-lg font-bold tracking-tight text-white">
                  Inscribe IQ
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed sm:max-w-sm">
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

            {/* Col: Company */}
            <div>
              <h3 className="text-md font-semibold text-white mb-4 tracking-wide">
                Company
              </h3>
              <ul className="flex flex-col gap-2.5">
                {company.map(({ label, href }) => (
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

            {/* Col: Resources */}
            <div>
              <h3 className="text-md font-semibold text-white mb-4 tracking-wide">
                Resources
              </h3>
              <ul className="flex flex-col gap-2.5">
                {resources.map(({ label, href }) => (
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

            {/* Col: Get in Touch */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-md font-semibold text-white mb-4 tracking-wide">
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
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <span>©2026 InscribeIQ • All right reserved.</span>
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

        {/*
        Watermark — lives OUTSIDE SectionViewer so it spans the full footer width
        with no horizontal padding constraints. font-size ~19vw fills the viewport
        at any screen size; overflow-hidden on <footer> clips any excess.
        */}
        <div
          className="pointer-events-none select-none overflow-hidden translate-y-4 md:translate-y-16"
          aria-hidden="true"
        >
          <span
            className="block whitespace-nowrap font-extrabold leading-none tracking-tight md:tracking-tighter text-transparent bg-clip-text"
            style={{
              fontSize: "clamp(3rem, 19vw, 22rem)",
              opacity: 0.2,
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
