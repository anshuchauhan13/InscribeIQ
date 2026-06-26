# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Production build
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

No test suite is configured.

## Architecture

**Inscribe IQ** is a marketing website for an academic writing and publishing services company. Stack: React 19 + Vite 8, JavaScript (not TypeScript), Tailwind CSS v4, Motion (Framer Motion successor), shadcn/ui.

### Routing

Routing lives in `App.jsx` (not `main.jsx`). `main.jsx` mounts `<App>`; `App.jsx` wraps everything in `react-router-dom` v7's `<Router>`, mounts `<ScrollToTop />` and the global `<Toaster />` (sonner). `StrictMode` is commented out in `main.jsx`.

`Layout.jsx` (at `src/Layout.jsx`) is the root shell — `flex flex-col` with `NavbarMenu`, `<main>` wrapping `<Outlet>`, `Footer`, and `<BackToTop />`.

Full route tree:

```
/                       → Layout
  index                 → HomePage
  /about                → AboutUsPage          ⚠ stub — needs real content
  /payment              → PaymentPage
  /contact_us           → ContactUsPage
  /consultation         → ConsultationPage
  /partner_with_us      → PartnershipPage
  /faqs                 → FaqsPage
  /services             → ServicePageLayout (Outlet shell)
    index               → HonaryDoctorate
  /courses/dba          → DBA
  /courses/phd          → PhD
  /courses/honorary-doctorate → HonaryDoctorate
  /courses/bba          → BBA
  /courses/bsc          → BSc
  /courses/bcom         → BCom
  /courses/ba           → BA
  /courses/bca          → BCA
  /courses/btech        → BTech
  /courses/mba          → MBA
  /courses/mcom         → MCom
  /courses/mtech        → MTech
  /courses/ma           → MA
  /courses/mca          → MCA
  /publications/abdc    → AbdcPublication
  /publications/scopus  → ScopusPublication
  /publications/pubmed  → PubMedPublication
  /publications/web-of-science → WebOfSciencePublication
  /writing/thesis       → ThesisWriting
  /writing/dissertation → DissertationWriting
  /writing/research-paper → ResearchPaperWriting
  /writing/other        → OtherWriting
```

To add a route: import the page in `App.jsx` and add a `<Route>`. Nested page groups get their own `*PageLayout` shell with an `<Outlet>`.

### Module / page / section pattern

All features live under `src/modules/<feature>/` split into:

- `pages/` — top-level route components, compose sections inside `<PageViewer>`.
- `components/` — individual page sections.

Modules: `home`, `about`, `services`, `contact-us`, `consultations`, `partner-with-us`, `faqs`, `payment`, `services/publications`, `services/writing`.

`HomePage.jsx` is the canonical example: it stacks `HeroSection → Impact → WhyInscribe → CoreServices → Flow → Outcome → Programs → Testimonials → UniversityPartnership → LeadForm → Resources → FAQs` inside a `<PageViewer>`.

#### Data-driven service pages

Publication and writing pages share a single generic shell component fed by a data file:

- `src/modules/services/publications/components/PublicationPage.jsx` — renders any publication from props
- `src/modules/services/publications/data/{abdc,scopus,pubmed,webOfScience}.js` — page-specific content
- `src/modules/services/writing/components/WritingPage.jsx` — renders any writing service from props
- `src/modules/services/writing/data/{thesis,dissertation,researchPaper,otherWriting}.js`

Each route page just imports the shell and its data file and renders `<PublicationPage {...data} />`.

### Shared building blocks (`src/components/common/`)

Prefer these over ad-hoc markup:

| Component | Purpose |
|---|---|
| `PageViewer` | Full-width page wrapper with `space-y-6`; wraps all sections of a page |
| `SectionViewer` | Content-width container: `max-width 1800px` centered + `px-4 md:px-6 lg:px-10 xl:px-20` |
| `Heading` | `<h6 className="text-2xl">` — prop: `title`, optional `className` |
| `SubHeading` | `text-sm text-muted-foreground` div — prop: `desc` |
| `SectionLabel` | Uppercase tracking-widest label badge in Manrope — prop: `label` |
| `ScrollToTop` | Resets scroll on route change (skips hash anchors); renders nothing |
| `BackToTop` | Floating button (bottom-right) that appears after 600px scroll; motion entrance/exit |
| `Reveal` | Scroll-entrance animation wrapper; fades + slides children from direction (`up`/`down`/`left`/`right`/`none`); props: `delay`, `duration`, `amount`, `className`; `once=true` default |
| `Breadcrumbs` | Accessible `<nav><ol>` trail; items with `to` prop become router links; final item is bold + `aria-current="page"` |

`NavbarMenu` and `Footer` live in `src/components/` (not `modules/`) — they're global chrome.

### Navigation

**`src/components/Navbar/navbarMenu.data.js`** is the single source of truth for all nav links. It drives both the `NavbarMenu` and the `/services` page UI. Structure:

- Plain route: `{ label, to }`
- Mega menu: `{ label, key, match, menu: { label, domains: [{ id, label, icon, heading, href, groups }] } }`

Five mega menus: Doctoral, UG, PG, Writing Services, Publications.

**`ExtendedMenu`** (`src/components/Navbar/ExtendedMenu.jsx`) renders the shared mega-menu dropdown panel: left column = domain list (scrollable), right column = active domain's heading + grouped links. Animated height reveal via motion.

`NavbarMenu` uses `<Sheet>` for mobile nav with `<Accordion>` for nested items.

### Styling

- **Tailwind CSS v4**, configured CSS-first via `@tailwindcss/vite`. **No `tailwind.config.js`** — design tokens live in the `@theme` block in `src/index.css`.
- `@` path alias → `src/` (configured in `vite.config.js` and `jsconfig.json`).
- `cn()` in `src/lib/utils.js` (clsx + tailwind-merge) — standard class-merging helper.

**Brand color tokens** (`:root` in `index.css`) — use via Tailwind utilities (`text-blue`, `bg-secondary`, etc.):

| Token | Value | Usage |
|---|---|---|
| `--primary` | `#170545` | Dark purple, main brand color |
| `--blue` | `#320F8C` | Medium purple |
| `--light-blue` | `#7A5EE9` | Accent purple |
| `--secondary` | `#d2fa4d` | Lime/yellow-green accent |
| `--muted` | `#F8F6FC` | Light background tint |
| `--primary-foreground` | `#E0E8F8` | Light text on dark backgrounds |

**The purple CTA gradient** is `bg-gradient-to-b from-[#6B52F9] to-[#8B79F2]`. It is exposed as the **`gradiant` button variant** (intentional misspelling — the real variant name); use `<Button variant="gradiant">`.

**Custom utility classes** in `index.css`:

| Class | Effect |
|---|---|
| `.max-width` | `max-width: 1800px; margin: auto` |
| `.light-gradiant` | Light purple top-fade background |
| `.inter` / `.manrope` | Font-family overrides |
| `.no-copy` | `user-select: none` |
| `.hide-scrollbar` / `.scrollbar-hide` / `.no-scrollbar` | Hide browser scrollbar |
| `.noise` / `.noise-subtle` / `.noise-medium` / `.noise-strong` | Film grain overlays |
| `.process-ray` / `.process-ray-v` | Animated blue light traveling horizontally/vertically (4s loop, used in process flow diagrams) |
| `.pay-rise` / `.pay-float` | Payment page entrance/float animations |

**Dark mode**: full dark theme CSS variables are defined in `.dark` class in `index.css`, but there is no theme switcher in the UI — the app is effectively light-only.

**Fonts**: Inter (default `font-sans`), Manrope, Poppins — loaded via Google Fonts + `@fontsource-variable`.

### Animation

`motion` (the Framer Motion successor, package `motion`) is the animation library. Do **not** import from `framer-motion` — use `motion/react` instead.

```jsx
import { motion, AnimatePresence, useInView } from "motion/react";
```

Common patterns used in the codebase:

- **Entrance**: `initial={{ opacity: 0, y: 20 }}` + `animate={{ opacity: 1, y: 0 }}` + staggered `transition.delay`
- **Scroll trigger**: `whileInView={{ opacity: 1, y: 0 }}` + `viewport={{ once: true }}`
- **Exit**: wrap with `<AnimatePresence>` + add `exit` prop
- **Hover/tap**: `whileHover`, `whileTap`
- **Counter animation**: `motion.animate(0, target, { onUpdate, duration })` + `useInView` trigger

Prefer `<Reveal>` from `src/components/common/Reveal.jsx` for standard scroll-entrance animations rather than writing raw motion boilerplate.

Note: `gsap` (3.15.0) is installed but not used anywhere — don't import it.

### shadcn/ui

Primitives are in `src/components/ui/` — treat these as generated; don't hand-edit. Add more with:

```bash
npx shadcn add <component>
```

Config: `components.json` (style: `radix-nova`, `tsx: false`, icon library: `lucide`). Icons come from both `lucide-react` and `@tabler/icons-react`.

**Installed shadcn components:**
`accordion`, `avatar`, `badge`, `button`, `calendar`, `card`, `checkbox`, `dialog`, `dropdown-menu`, `input`, `label`, `navigation-menu`, `popover`, `select`, `separator`, `sheet`, `sonner`, `switch`, `table`, `tabs`, `textarea`

**Custom non-shadcn UI components** (also in `src/components/ui/`):
- `infinite-slider.jsx` — auto-scrolling carousel using motion's `useMotionValue`/`animate`; props: `gap`, `duration`, `durationOnHover`, `direction`, `reverse`, `className`; slows on hover.
- `logo-cloud-2.jsx` — logo marquee built on top of `InfiniteSlider`.

**Button variants** (defined with CVA in `button.jsx`):

| Variant | Style |
|---|---|
| `default` | Primary bg |
| `outline` | Border-based |
| `secondary` | Lime/secondary color |
| `ghost` | Hover-only bg |
| `destructive` | Red |
| `link` | Underlined text |
| `gradiant` | **Purple gradient** `from-[#6B52F9] to-[#8B79F2]` — canonical CTA button (misspelled intentionally) |
| `primary` | Light bg with primary text |

**Date picker pattern** — compose from `Calendar` + `Popover` (no standalone component):
```jsx
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
// Trigger: <Button variant="outline">{date ? format(date, "PPP") : "Pick a date"}</Button>
// Content: <Calendar mode="single" selected={date} onSelect={setDate} />
```

**Form field pattern** — always pair `Label` (htmlFor) with `Input`/`Textarea`/`Select`; pass `aria-invalid={!!error}` for automatic red-border error styling:
```jsx
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
<Label htmlFor="email">Email</Label>
<Input id="email" aria-invalid={!!errors.email} />
```

**Toast notifications** — use sonner's `toast`:
```jsx
import { toast } from "sonner";
toast.success("Form submitted!");
toast.error("Something went wrong.");
```

### Form handling pattern

All lead/contact forms in the codebase follow this pattern:
1. `useState` for form data object + per-field errors object
2. Validate on submit, set `errors` state to show inline messages
3. Country dial code selector + phone number field (see `LeadForm.jsx` or `ContactForm.jsx` for reference)
4. `toast.success` / `toast.error` from sonner for feedback
5. `aria-invalid={!!errors.fieldName}` on inputs — no extra className needed for red border

### Public assets (`public/`)

Key asset paths (import as string in JSX):

- `/logo.png` — main logo
- `/faviconIcon.png` — favicon
- `/home/HeroImage.png` — hero section image
- `/home/Resources[1-4].png` — resource section images
- `/service/` — course images (`bsc.jpg`, `BBA.jpg`, `Gallery[1-6].jpeg`, etc.)
- `/payment/card.png` — payment page card image
- `/partner/partnerhero.jpg` — partnership page hero
- University logos: `gla-logo.webp`, `lpu-logo.svg`, `amu.png`, `amitylogo.png`, etc.

### Known issues / stubs

- **`/about` page** — `AboutUsPage` is a stub with only `AboutHeroSection`; needs full content.
- **`next-themes`** is installed but unused — dark mode CSS exists but there's no theme toggle in the UI.
- **`framer-motion`** package is installed alongside `motion` — always import from `motion/react`, not `framer-motion`.
- **`@paper-design/shaders-react`** is installed but not used in any component.
