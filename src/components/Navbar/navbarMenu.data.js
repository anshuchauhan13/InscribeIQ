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
                { label: "DBA", href: "/courses/dba", icon: Briefcase },
                { label: "PhD", href: "/courses/phd", icon: GraduationCap },
                { label: "Honorary Doctorate", href: "/courses/honary_doctorate", icon: Award },
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
          href: "/writing/thesis",
          groups: [
            {
              label: "Services",
              items: [
                { label: "Thesis Writing", href: "/writing/thesis", icon: FileText },
                { label: "Dissertation Writing", href: "/writing/dissertation", icon: ScrollText },
                { label: "Research & Review Papers", href: "/writing/research_paper", icon: BookText },
                { label: "Other Academic Writing", href: "/writing/other", icon: PenLine },
              ],
            },
          ],
        },
        {
          id: "publications",
          label: "Publications",
          icon: BookText,
          heading: "Publication Services",
          href: "/publications/scopus",
          groups: [
            {
              label: "Services",
              items: [
                { label: "Scopus Publications", href: "/publications/scopus", icon: BookMarked },
                { label: "Web of Science", href: "/publications/web_of_science", icon: Globe },
                { label: "ABDC Publications", href: "/publications/abdc", icon: Landmark },
                { label: "PubMed / NLM", href: "/publications/pubmed", icon: Microscope },
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
