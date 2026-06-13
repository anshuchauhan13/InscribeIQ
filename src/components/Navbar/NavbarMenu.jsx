import { ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { homeFeatures } from "./NavbarData";
import { ServicesPanel } from "./ServicePanel";
import { MobileNav } from "./MobileNav";

export const NavbarMenu = () => {
  return (
    <section>
      <div className="container">
        <nav className="flex items-center justify-between border-b border-border px-4 py-3 md:px-6 lg:px-10">

          {/* ── Left: Logo + Search ── */}
          <div className="flex items-center gap-3 lg:gap-5 flex-1">
            <a href="/" className="shrink-0">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-10 md:h-12 w-auto"
              />
            </a>

            <div className="hidden lg:flex items-center rounded-full border border-black/10 overflow-hidden max-w-sm w-full">
              <input
                type="text"
                placeholder="Begin your journey..."
                className="flex-1 px-4 py-2 text-sm outline-none bg-transparent text-foreground placeholder:text-muted-foreground"
              />
              <button
                aria-label="Search"
                className="bg-gradient-to-b from-[#6B52F9] to-[#8B79F2] text-white p-3 hover:opacity-90 transition-opacity"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* ── Center: Desktop Nav ── */}
          <div className="hidden lg:flex justify-center flex-1">
            <NavigationMenu>
              <NavigationMenuList>

                {/* Home */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                  <NavigationMenuContent className="z-50">
                    <div className="grid w-[580px] grid-cols-2 p-3">
                      {homeFeatures.map((feature, i) => (
                        <NavigationMenuLink
                          key={i}
                          href={feature.href}
                          className="rounded-md p-3 transition-colors hover:bg-muted/70"
                        >
                          <p className="mb-0.5 text-sm font-semibold text-foreground">
                            {feature.title}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {feature.description}
                          </p>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Services — mega menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent className="z-50">
                    <ServicesPanel />
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* FAQs */}
                <NavigationMenuItem>
                  <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
                    FAQs
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Payment */}
                <NavigationMenuItem>
                  <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
                    Payment
                  </NavigationMenuLink>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* ── Right: CTA + Mobile ── */}
          <div className="flex items-center justify-end gap-2 flex-1">
            <Button className="hidden lg:flex text-white rounded-full bg-gradient-to-b from-[#6B52F9] to-[#8B79F2] hover:opacity-90 transition-opacity">
              Contact us
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>

            <MobileNav />
          </div>

        </nav>
      </div>
    </section>
  );
};