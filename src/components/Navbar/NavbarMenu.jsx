import { MenuIcon } from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu, NavigationMenuContent, NavigationMenuItem,
  NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowRight, Search } from "lucide-react";

export const NavbarMenu = () => {
  const features = [
    { title: "Dashboard", description: "Overview of your activity", href: "#" },
    { title: "Analytics", description: "Track your performance", href: "#" },
    { title: "Settings", description: "Configure your preferences", href: "#" },
    { title: "Integrations", description: "Connect with other tools", href: "#" },
    { title: "Storage", description: "Manage your files", href: "#" },
    { title: "Support", description: "Get help when needed", href: "#" },
  ];

  return (
    <section className="inter">
      <div className="container">
        <nav className="flex items-center justify-between border-b px-4 py-3 md:px-6 lg:px-10">
          {/* Left Section */}
          <div className="flex items-center gap-3 lg:gap-6 flex-1">
            <a href="/" className="shrink-0">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-10 md:h-12 w-auto"
              />
            </a>

            {/* Search Bar - Desktop Only */}
            <div className="hidden lg:flex items-center rounded-full border border-black/10 overflow-hidden max-w-sm w-full">
              <input
                type="text"
                placeholder="Begin Your Journey..."
                className="flex-1 px-4 py-2 outline-none bg-transparent"
              />
              <button className="bg-gradient-to-b from-[#6B52F9] to-[#8B79F2] text-white p-3">
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Center Navigation - Desktop Only */}
          <div className="hidden lg:flex justify-center flex-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                  <NavigationMenuContent className="z-50">
                    <div className="grid w-[600px] grid-cols-2 p-3 ">
                      {features.map((feature, index) => (
                        <NavigationMenuLink
                          href={feature.href}
                          key={index}
                          className="rounded-md p-3 transition-colors hover:bg-muted/70"
                        >
                          <div>
                            <p className="mb-1 font-semibold text-foreground">{feature.title}</p>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                          </div>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>


                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#"
                    className={navigationMenuTriggerStyle()}
                  >
                    Services
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#"
                    className={navigationMenuTriggerStyle()}
                  >
                    FAQs
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#"
                    className={navigationMenuTriggerStyle()}
                  >
                    Payment
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Section */}
          <div className="flex items-center justify-end gap-2 flex-1">
            <Button className="hidden lg:flex text-white rounded-full bg-gradient-to-b from-[#6B52F9] to-[#8B79F2] hover:opacity-90">
              Contact Us
              <ArrowRight />
            </Button>

            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon">
                  <MenuIcon className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="max-h-screen overflow-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href="https://www.shadcnblocks.com" className="flex items-center gap-2">
                      <img
                        src="https://shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg"
                        className="max-h-8"
                        alt="Shadcnblocks"
                      />
                      <span className="text-lg font-semibold tracking-tighter">Shadcnblocks.com</span>
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col p-4">
                  <Accordion type="single" collapsible className="mt-4 mb-2">
                    <AccordionItem value="solutions" className="border-none">
                      <AccordionTrigger className="text-base hover:no-underline">Features</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid md:grid-cols-2">
                          {features.map((feature, index) => (
                            <a href={feature.href} key={index} className="rounded-md p-3 transition-colors hover:bg-muted/70">
                              <div>
                                <p className="mb-1 font-semibold text-foreground">{feature.title}</p>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <div className="flex flex-col gap-6">
                    <a href="#" className="font-medium">Templates</a>
                    <a href="#" className="font-medium">Blog</a>
                    <a href="#" className="font-medium">Pricing</a>
                  </div>
                  <div className="mt-6 flex flex-col gap-4">
                    <Button variant="outline">Sign in</Button>
                    <Button>Start for free</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </nav>
      </div>
    </section>
  );
};