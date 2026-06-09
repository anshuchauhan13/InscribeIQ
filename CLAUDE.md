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

This is the **Inscribe IQ** marketing website — an academic writing and publishing services company. It's a React 19 + Vite app using JavaScript (not TypeScript).

### Routing

`main.jsx` renders `<App>` which renders `<Layout>`. The `Layout` component uses `react-router-dom`'s `<Outlet>` to slot in page content, but **the Router provider is not yet wired up** in `main.jsx`. Pages and routes need to be added as the site grows.

### Directory structure

```
src/
  modules/          # Feature modules (one folder per UI section)
    Navbar/NavbarMenu.jsx
    Footer/Footer.jsx
  components/ui/    # shadcn/ui primitives (do not edit directly)
  lib/utils.js      # cn() helper (clsx + tailwind-merge)
  Layout.jsx        # Shell: NavbarMenu + <Outlet> + Footer
  App.jsx           # Entry; just renders <Layout>
  index.css         # Tailwind directives + CSS variables (design tokens)
```

New page sections belong in `src/modules/<FeatureName>/`. Import and compose them inside the relevant page component or `Layout.jsx`.

### Styling

- Tailwind CSS with CSS variable–based design tokens defined in `src/index.css`.
- `@` path alias resolves to `src/` (e.g. `@/components/ui/button`).
- Brand gradient: `bg-gradient-to-b from-[#6B52F9] to-[#8B79F2]` (purple). Used on CTAs and the search button.
- Footer uses a dark radial gradient background (`#242E3E` → `#0C0E18`).

### Adding shadcn components

```bash
npx shadcn add <component>
```

Config is in `components.json` (style: `radix-nova`, no TSX, icon library: `lucide`).
