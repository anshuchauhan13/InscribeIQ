import {
  GraduationCap, BookOpen, Library, PenLine, BookText,
  Award, Briefcase, FlaskConical, Calculator, Cpu, Code,
  FileText, ScrollText, BookMarked, Globe, Landmark, Microscope,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Navbar configuration — single source of truth for every nav item.
// Shared by NavbarMenu (the bar + extended menu) and the /services page.
//
// Each entry is EITHER:
//   • a plain route link   -> { label, to }
//   • a menu with children -> { label, key, match, menu: { label, domains } }
//
// For a menu item:
//   key   -> identifier for which extended menu is open
//   match -> route prefix that marks the item active (e.g. "/services")
//   menu  -> dataset for the shared <ExtendedMenu /> (left column + right panel)
//
// To add another mega menu, copy the Services entry: give it a unique key,
// a `match` prefix, and its own `menu.domains`. No other wiring needed.
// ---------------------------------------------------------------------------
export const navbarMenu = [
  { label: "Home", to: "/" },
  {
    label: "Services",
    key: "services",
    match: "/services",
    menu: {
      label: "Domains",
      domains: [
        {
          id: "doctoral",
          label: "Global Doctoral Programs",
          icon: GraduationCap,
          heading: "Doctoral Programs",
          href: "/services",
          groups: [
            {
              label: "Program Type",
              items: [
                { label: "DBA", href: "/courses", icon: Briefcase },
                { label: "PhD", href: "/courses/phd", icon: GraduationCap },
                { label: "Honorary Doctorate", href: "/courses/honary-doctorate", icon: Award },
              ],
            },
          ],
        },
        {
          id: "ug",
          label: "UG Programs",
          icon: BookOpen,
          heading: "Undergraduate Programs",
          href: "/services",
          groups: [
            {
              label: "Programs",
              items: [
                { label: "Bachelor of Science (B.Sc)", href: "/services", icon: FlaskConical },
                { label: "Bachelor of Commerce (B.Com)", href: "/services", icon: Calculator },
                { label: "Bachelor of Arts (B.A)", href: "/services", icon: BookOpen },
                { label: "B.Tech", href: "/services", icon: Cpu },
                { label: "BBA", href: "/services", icon: Briefcase },
                { label: "BCA", href: "/services", icon: Code },
              ],
            },
          ],
        },
        {
          id: "pg",
          label: "PG Programs",
          icon: Library,
          heading: "Postgraduate Programs",
          href: "/services",
          groups: [
            {
              label: "Programs",
              items: [
                { label: "MBA", href: "/services", icon: Briefcase },
                { label: "M.Tech", href: "/services", icon: Cpu },
                { label: "M.Com", href: "/services", icon: Calculator },
                { label: "M.A", href: "/services", icon: BookOpen },
                { label: "MCA", href: "/services", icon: Code },
              ],
            },
          ],
        },
        {
          id: "writing",
          label: "Writing Services",
          icon: PenLine,
          heading: "Research & Academic Writing",
          href: "/services",
          groups: [
            {
              label: "Services",
              items: [
                { label: "Thesis Writing", href: "/services", icon: FileText },
                { label: "Dissertation Writing", href: "/services", icon: ScrollText },
                { label: "Research & Review Papers", href: "/services", icon: BookText },
                { label: "Other Academic Writing", href: "/services", icon: PenLine },
              ],
            },
          ],
        },
        {
          id: "publications",
          label: "Publications",
          icon: BookText,
          heading: "Publication Services",
          href: "/services",
          groups: [
            {
              label: "Services",
              items: [
                { label: "Scopus Publications", href: "/services", icon: BookMarked },
                { label: "Web of Science", href: "/services", icon: Globe },
                { label: "ABDC Publications", href: "/services", icon: Landmark },
                { label: "PUBMED / EMBASE", href: "/services", icon: Microscope },
              ],
            },
          ],
        },
      ],
    },
  },
  { label: "Partner with Us", to: "/partner_with_us" },
  { label: "Free Consultation", to: "/consultation" },
  { label: "FAQs", to: "/faqs" },
];
