import { useState } from "react";
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

// Styling for a nav item whose route is currently active.
const ACTIVE_NAV =
  "bg-secondary/70 text-secondary-foreground font-semibold hover:bg-secondary hover:text-secondary-foreground";

// Lookup of every extended menu, keyed by item.key — built from navbarMenu.
const EXTENDED_MENUS = Object.fromEntries(
  navbarMenu.filter((item) => item.menu).map((item) => [item.key, item.menu])
);

// A center-nav button that opens an extended menu (used for items with children).
const MenuTrigger = ({ item, isOpen, isRouteActive, onToggle }) => (
  <button
    type="button"
    onClick={() => onToggle(item.key)}
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

  // A menu item counts as active when the route matches its `match` prefix.
  const isRouteActive = (item) => (item.match ? pathname.startsWith(item.match) : false);

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
                    {navbarMenu.map((item) =>
                      item.menu ? (
                        <Accordion key={item.key} type="single" collapsible>
                          <AccordionItem value={item.key} className="border-none">
                            <AccordionTrigger className="px-4 py-3 text-sm font-medium hover:no-underline">
                              {item.label}
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="flex flex-col gap-1">
                                {item.menu.domains.map((domain) => {
                                  const Icon = domain.icon;
                                  return (
                                    <Link
                                      key={domain.id}
                                      to={`${domain.href}?domain=${domain.id}`}
                                      onClick={() => setMobileOpen(false)}
                                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-foreground transition-colors hover:bg-muted hover:text-blue"
                                    >
                                      <Icon className="h-5 w-5 shrink-0 text-blue" />
                                      <span className="font-medium">{domain.label}</span>
                                    </Link>
                                  );
                                })}
                              </div>
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
