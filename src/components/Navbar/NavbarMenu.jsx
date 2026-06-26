/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  Sheet, SheetContent, SheetHeader, SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import SectionViewer from "../common/SectionViewer";
import ExtendedMenu from "./ExtendedMenu";
import { navbarMenu } from "./navbarMenu.data";
import { ScrollArea } from "../ui/scroll-area";

// Styling for a nav item whose route is currently active.
const ACTIVE_NAV =
  "bg-secondary/70 text-secondary-foreground font-semibold hover:bg-secondary hover:text-secondary-foreground";

// Lookup of every extended menu, keyed by item.key — built from navbarMenu.
const EXTENDED_MENUS = Object.fromEntries(
  navbarMenu.filter((item) => item.menu).map((item) => [item.key, item.menu])
);

// Returns the domain.id whose items contain the current pathname (for auto-expand).
function getActiveDomainId(domains, pathname) {
  for (const domain of domains) {
    for (const group of domain.groups ?? []) {
      if (group.items.some((it) => pathname === it.href || pathname.startsWith(it.href + "/"))) {
        return domain.id;
      }
    }
  }
  return undefined;
}

// A center-nav button that opens an extended menu (used for items with children).
const MenuTrigger = ({ item, isOpen, isRouteActive, onToggle }) => (
  <button
    type="button"
    onMouseDown={(e) => e.preventDefault()}
    onClick={(e) => { e.currentTarget.blur(); onToggle(item.key); }}
    aria-expanded={isOpen}
    className={cn(
      "!pr-3 ml-2",
      navigationMenuTriggerStyle(),
      "gap-2",
      isOpen && "bg-muted text-foreground",
      !isOpen && isRouteActive && ACTIVE_NAV
    )}
  >
    {item.label}
    <ChevronDown
      className={cn("h-4 w-4 transition-transform duration-300", isOpen && "rotate-180")}
    />
  </button>
);

export const NavbarMenu = () => {
  // Which extended menu is open (a key of EXTENDED_MENUS), or null.
  const navigate = useNavigate()
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = (key) => setActiveMenu((cur) => (cur === key ? null : key));
  const closeMenu = () => setActiveMenu(null);

  // Close dropdown and mobile sheet whenever the route changes.
  useEffect(() => {
    closeMenu();
    setMobileOpen(false);
  }, [pathname]);

  // A menu item counts as active when the route matches its `match` prefix.
  // For Services, also match the sub-page prefixes that live outside /services.
  const isRouteActive = (item) => {
    if (!item.match) return false;
    if (pathname.startsWith(item.match)) return true;
    if (item.key === "services" && (
      pathname.startsWith("/courses") ||
      pathname.startsWith("/writing") ||
      pathname.startsWith("/publications")
    )) return true;
    return false;
  };

  return (
    <header className="relative z-100 sticky top-0">
      {/* Nav row — solid bg + shadow, kept above the extended menu (z-50). */}
      <div className="relative z-50 bg-background shadow-md shadow-primary/10">
        <SectionViewer className="inter">
          <nav className="flex items-center justify-between py-3">
            {/* Left Section */}
            <div className="flex items-center gap-3 lg:gap-6 flex-1">
              <Link to="/" className="shrink-0">
                <img src="/logo.png" alt="Logo" className="h-12 md:h-14 w-auto" />
              </Link>
            </div>

            {/* Center Navigation - Desktop Only */}
            <div className="hidden lg:flex items-center justify-center gap-4 flex-1">
              {navbarMenu.map((item) =>
                item.menu ? (
                  <MenuTrigger
                    key={item.key}
                    item={item}
                    isOpen={activeMenu === item.key}
                    isRouteActive={isRouteActive(item)}
                    onToggle={toggleMenu}
                  />
                ) : (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === "/"}
                    onMouseDown={(e) => e.preventDefault()}
                    className={({ isActive }) =>
                      cn(navigationMenuTriggerStyle(), isActive && ACTIVE_NAV)
                    }
                  >
                    {item.label}
                  </NavLink>
                )
              )}
            </div>

            {/* Right Section */}
            <div className="flex items-center justify-end gap-2 flex-1">
              <Button size="lg" variant="primary" className="hidden lg:inline-flex px-5 rounded-full font-semibold" onClick={() => navigate("/payment")}>
                Pay Now
              </Button>

              <Button size="lg" variant="gradiant" className="hidden lg:inline-flex px-5 rounded-full" onClick={() => navigate("/contact_us")}>
                Contact Us
                <ArrowRight />
              </Button>

              {/* Animated hamburger — mobile only */}
              <div className="lg:hidden">
                <button
                  type="button"
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                  onClick={() => setMobileOpen((o) => !o)}
                  className={cn("hamburger-btn lg:hidden", mobileOpen && "open")}
                >
                  <div className="hamburger-bar hamburger-bar-1" />
                  <div className="hamburger-bar hamburger-bar-2" />
                  <div className="hamburger-bar hamburger-bar-3" />
                </button>
              </div>

              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetContent side="top" className="max-h-screen overflow-auto">
                  <SheetHeader>
                    <SheetTitle>
                      <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                        <img src="/logo.png" className="h-10 w-auto" alt="Logo" />
                      </Link>
                    </SheetTitle>
                  </SheetHeader>

                  <div className="flex flex-col p-4">
                    <ScrollArea>
                      <div className="max-h-[65svh] flex flex-col">
                        {navbarMenu.map((item) =>
                          item.menu ? (
                            /* Level 1 — top-level label (e.g. "Services") */
                            <Accordion
                              key={item.key}
                              type="single"
                              collapsible
                              defaultValue={isRouteActive(item) ? item.key : undefined}
                            >
                              <AccordionItem value={item.key} className="border-none">
                                <AccordionTrigger className="px-4 py-3 text-sm font-medium hover:no-underline">
                                  {item.label}
                                </AccordionTrigger>
                                <AccordionContent className="!h-fit pb-0">
                                  {/* Level 2 — domains (Doctoral, UG, PG, Writing, Publications) */}
                                  <Accordion
                                    type="single"
                                    collapsible
                                    defaultValue={getActiveDomainId(item.menu.domains, pathname)}
                                    className="pl-2"
                                  >
                                    {item.menu.domains.map((domain) => {
                                      const Icon = domain.icon;
                                      const allItems = domain.groups?.flatMap((g) => g.items) ?? [];
                                      return (
                                        <AccordionItem key={domain.id} value={domain.id} className="border-none">
                                          <AccordionTrigger className="px-3 py-2.5 text-sm font-medium hover:no-underline rounded-lg hover:bg-muted/60">
                                            <span className="flex items-center gap-2.5">
                                              <Icon className="h-4 w-4 shrink-0 text-blue" />
                                              {domain.label}
                                            </span>
                                          </AccordionTrigger>
                                          <AccordionContent className="pb-1 !h-fit">
                                            {/* Level 3 — individual program / service links */}
                                            <div className="flex flex-col gap-0.5 pl-6">
                                              {allItems.map((prog) => {
                                                const PIcon = prog.icon;
                                                const isActive =
                                                  pathname === prog.href ||
                                                  pathname.startsWith(prog.href + "/");
                                                return (
                                                  <Link
                                                    key={prog.href}
                                                    to={prog.href}
                                                    onClick={() => setMobileOpen(false)}
                                                    className={cn(
                                                      "flex items-center gap-2.5 rounded-md px-3 py-2 text-sm transition-colors",
                                                      isActive
                                                        ? "text-blue font-semibold bg-blue/8"
                                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                                    )}
                                                  >
                                                    <PIcon className="h-3.5 w-3.5 shrink-0 text-blue/60" />
                                                    {prog.label}
                                                  </Link>
                                                );
                                              })}
                                            </div>
                                          </AccordionContent>
                                        </AccordionItem>
                                      );
                                    })}
                                  </Accordion>
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          ) : (
                            <NavLink
                              key={item.to}
                              to={item.to}
                              end={item.to === "/"}
                              onClick={() => setMobileOpen(false)}
                              className={({ isActive }) =>
                                cn(
                                  "rounded-md px-4 py-3 font-medium",
                                  isActive ? ACTIVE_NAV : "hover:bg-muted"
                                )
                              }
                            >
                              {item.label}
                            </NavLink>
                          )
                        )}
                      </div>
                    </ScrollArea>

                    <div className="mt-6 flex gap-3">
                      <Button size="lg" variant="primary" className="flex-1 rounded-full font-semibold" onClick={() => navigate("/payment")}>
                        Pay Now
                      </Button>
                      <Button size="lg" variant="gradiant" className="flex-1 rounded-full" onClick={() => navigate("/contact_us")}>
                        Contact Us
                        <ArrowRight />
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </SectionViewer>
      </div>

      {/* One shared panel for every trigger — slides down from under the nav row */}
      <ExtendedMenu
        open={activeMenu !== null}
        menu={activeMenu ? EXTENDED_MENUS[activeMenu] : null}
        onClose={closeMenu}
      />
    </header>
  );
};
