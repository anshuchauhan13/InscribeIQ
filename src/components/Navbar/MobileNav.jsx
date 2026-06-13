import { useNavigate } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { homeFeatures, servicesDomains } from "./NavbarData";

// ─── Mobile Services Accordion ───────────────────────────────────────────────

function MobileServicesAccordion({ onNavigate }) {
  return (
    <Accordion type="single" collapsible>
      {servicesDomains.map((domain, i) => (
        <AccordionItem key={i} value={`service-${i}`} className="border-none">
          <AccordionTrigger className="flex items-center gap-2 text-sm font-medium hover:no-underline py-2.5 text-foreground">
            <span className="text-[#6B52F9]">{domain.icon}</span>
            {domain.label}
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-0.5 pl-5 pb-1">
              {domain.items.map((item, j) => (
                <button
                  key={j}
                  onClick={() => onNavigate(item.href)}
                  className="flex items-center gap-2.5 rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors text-left w-full"
                >
                  <span className="text-[#6B52F9] shrink-0">{item.icon}</span>
                  {item.name}
                </button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

// ─── Mobile Home Accordion ────────────────────────────────────────────────────

function MobileHomeAccordion() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="home" className="border-none">
        <AccordionTrigger className="text-sm font-medium hover:no-underline py-2.5">
          Home
        </AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-1 gap-0.5">
            {homeFeatures.map((feature, index) => (
              <a
                href={feature.href}
                key={index}
                className="rounded-md p-3 transition-colors hover:bg-muted/70"
              >
                <p className="text-sm font-semibold text-foreground">{feature.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{feature.description}</p>
              </a>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

// ─── MobileNav (Sheet) ────────────────────────────────────────────────────────

export function MobileNav() {
  const navigate = useNavigate();

  const handleNavigate = (href) => {
    navigate(href);
  };

  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="outline" size="icon">
          <MenuIcon className="h-4 w-4" />
        </Button>
      </SheetTrigger>

      <SheetContent side="top" className="max-h-[90dvh] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>
            <a href="/" className="flex items-center gap-2">
              <img src="/logo.png" className="max-h-8 w-auto" alt="Logo" />
            </a>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col px-4 pb-6 pt-2">
          {/* Search */}
          <div className="flex items-center mt-3 mb-2 rounded-full border border-black/10 overflow-hidden">
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

          {/* Home */}
          <MobileHomeAccordion />

          {/* Services */}
          <div>
            <p className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground px-1 pt-2 pb-1">
              Services
            </p>
            <MobileServicesAccordion onNavigate={handleNavigate} />
          </div>

          {/* Simple links */}
          <div className="flex flex-col gap-0.5 mt-2 border-t border-border pt-4">
            <a
              href="#"
              className="text-sm font-medium py-2 px-1 text-foreground hover:text-[#6B52F9] transition-colors"
            >
              FAQs
            </a>
            <a
              href="#"
              className="text-sm font-medium py-2 px-1 text-foreground hover:text-[#6B52F9] transition-colors"
            >
              Payment
            </a>
          </div>

          {/* CTA */}
          <Button className="mt-5 w-full text-white bg-gradient-to-b from-[#6B52F9] to-[#8B79F2] hover:opacity-90 rounded-full">
            Contact us
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}