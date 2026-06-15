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

This is the **Inscribe IQ** marketing website — an academic writing and publishing services company. It's a React 19 + Vite app written in JavaScript (not TypeScript).

### Routing

Routing lives in `App.jsx` (not `main.jsx`). `main.jsx` mounts `<App>`; `App.jsx` wraps everything in `react-router-dom`'s `<Router>` and also mounts the global `<Toaster />` (sonner). `StrictMode` is currently commented out in `main.jsx`.

Route tree:

- `/` → `Layout` (NavbarMenu + `<Outlet>` + Footer)
  - index → `HomePage`
  - `/services` → `ServicePageLayout` (also an `<Outlet>` shell)
    - index → `HonaryDoctorate`
  - `/about` → `AboutUsPage`
  - `/payment` → `PaymentPage`

A page lives at `src/modules/<Feature>/pages/<Name>.jsx`. To add a route, import the page in `App.jsx` and add a `<Route>`. Nested page groups (like `/services`) get their own `*PageLayout` shell with an `<Outlet>`.

### Module / page / section pattern

Each feature is a folder under `src/modules/` (`Home`, `about`, `services`, `payment`) split into:

- `pages/` — top-level route components. A page imports section components and composes them, usually wrapped in `<PageViewer>`.
- `components/` — the individual page sections (e.g. `HeroSection`, `FAQs`, `LeadForm`, `Testimonials`).

`HomePage.jsx` is the canonical example: it stacks `HeroSection`, `Impact`, `WhyInscribe`, `CoreServices`, etc. inside a `PageViewer`.

### Shared building blocks (`src/components/common/`)

Layout/typography primitives used by sections — prefer these over ad-hoc markup:

- `PageViewer` — full-width page wrapper (`space-y-6`); wrap a page's sections in this.
- `SectionViewer` — the **content-width container**: applies `max-width` (1800px, centered) + responsive horizontal padding (`px-4 md:px-6 lg:px-10 xl:px-20`). Wrap each section's inner content in this so widths/gutters stay consistent.
- `Heading`, `SubHeading`, `SectionLabel` — typography helpers; each takes a prop (`title` / `desc` / `label`) plus an optional `className`.

`NavbarMenu` and `Footer` live in `src/components/` (not `modules/`) since they're chrome, not page sections.

### Styling

- **Tailwind CSS v4**, configured CSS-first via the `@tailwindcss/vite` plugin and an `@theme` block in `src/index.css`. There is **no `tailwind.config.js`** despite `components.json` pointing at one — design tokens and theme live entirely in `index.css`.
- `@` path alias resolves to `src/` (configured in both `vite.config.js` and `jsconfig.json`).
- `cn()` in `src/lib/utils.js` (clsx + tailwind-merge) is the standard class-merging helper.
- Brand color tokens (in `:root`): `--primary #170545`, `--blue #320F8C`, `--light-blue #7A5EE9`, `--secondary #D1FC3D` (lime accent), `--muted #F8F6FC`. Use them via Tailwind utilities like `text-blue`, `bg-secondary`.
- The purple CTA gradient is `bg-gradient-to-b from-[#6B52F9] to-[#8B79F2]`. It is exposed as the **`gradiant` button variant** (note the misspelling — that's the real variant name in `components/ui/button.jsx`); `Button variant="gradiant"` is the canonical way to use it.
- Custom utility classes in `index.css`: `.max-width` (1800px centered), `.light-gradiant` (light purple top-fade background), `.inter` / `.manrope` (font-family overrides), `.no-copy`, and several scrollbar-hiding utilities (`.hide-scrollbar`, `.scrollbar-hide`, `.no-scrollbar`).
- Fonts: Inter (default `font-sans`), Manrope, and Poppins, loaded via Google Fonts + `@fontsource-variable`.
- `motion` (the Framer Motion successor) is available for animation (used in `Testimonials`).

### shadcn/ui

Primitives are in `src/components/ui/` — treat these as generated; don't hand-edit. Add more with:

```bash
npx shadcn add <component>
```

Config is in `components.json` (style: `radix-nova`, `tsx: false`, icon library: `lucide`). Icons come from both `lucide-react` and `@tabler/icons-react`.

**Installed components:**
`accordion`, `avatar`, `badge`, `button`, `calendar`, `card`, `checkbox`, `dialog`, `dropdown-menu`, `input`, `label`, `navigation-menu`, `popover`, `select`, `separator`, `sheet`, `sonner`, `switch`, `table`, `tabs`, `textarea`

**Date picker pattern** — no standalone date-picker component; compose it from `Calendar` + `Popover`:
```jsx
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// Trigger: <Button variant="outline"> showing format(date, "PPP") or placeholder
// Content: <Calendar mode="single" selected={date} onSelect={setDate} />
// Requires date-fns for formatting: import { format } from "date-fns"
```

**Form field pattern** — always pair `Label` (htmlFor) with `Input`/`Textarea`/`Select`, pass `aria-invalid={!!error}` for automatic red-border error styling (no extra className needed):
```jsx
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
```
