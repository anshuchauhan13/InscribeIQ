import SectionLabel from "@/components/common/SectionLabel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";

const PartnershipHero = React.forwardRef(
    ({ className, title, subtitle, primaryCta, secondaryCta, badges = [], backgroundImage, ...props }, ref) => {

        // Animation variants for the container to orchestrate children animations
        const containerVariants = {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.2,
                },
            },
        };

        // Animation variants for individual text/UI elements
        const itemVariants = {
            hidden: { y: 20, opacity: 0 },
            visible: {
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.5,
                    ease: "easeOut",
                },
            },
        };

        return (
            <motion.section
                ref={ref}
                className={cn(
                    "relative flex w-full flex-col overflow-hidden bg-background text-foreground md:flex-row",
                    className
                )}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                {...props}>
                {/* Left Side: Content */}
                <div
                    className="flex w-full flex-col justify-between md:w-1/2 md:p-12 lg:w-3/5 py-6 md:py-8  px-4 md:px-8 lg:py-12 xl:py-16 lg:px-10 xl:px-20">
                    {/* Top Section: Label & Main Content */}
                    <div>
                        <motion.header className="mb-3 md:mb-6" variants={itemVariants}>
                            <SectionLabel label={"Partner Program"} />
                        </motion.header>

                        <motion.main variants={containerVariants}>
                            <motion.h1
                                className="text-4xl font-bold leading-tight text-primary md:text-5xl"
                                variants={itemVariants}>
                                {title}
                            </motion.h1>
                            <motion.div className="mt-4 mb-6 h-1 w-20 bg-light-blue" variants={itemVariants}></motion.div>
                            <motion.p
                                className="mb-8 max-w-md text-base text-muted-foreground"
                                variants={itemVariants}>
                                {subtitle}
                            </motion.p>

                            {/* Two CTAs */}
                            <motion.div
                                className="flex flex-col gap-3 sm:flex-row sm:items-center"
                                variants={itemVariants}>
                                {primaryCta && (
                                    <Button asChild variant="gradiant" size="lg" className="font-semibold rounded-full pl-7 pr-6">
                                        <a href={primaryCta.href}>
                                            {primaryCta.text}
                                            <ArrowRight className="h-4 w-4" />
                                        </a>
                                    </Button>
                                )}
                                {secondaryCta && (
                                    <Button asChild variant="primary" size="lg" className="font-semibold rounded-full px-5">
                                        <a href={secondaryCta.href}>{secondaryCta.text}</a>
                                    </Button>
                                )}
                            </motion.div>
                        </motion.main>
                    </div>

                    {/* Bottom Section: Category badges */}
                    {badges.length > 0 && (
                        <motion.footer className="mt-10 w-full lg:mt-12" variants={itemVariants}>
                            <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                                Built for
                            </p>
                            <div className="flex flex-wrap gap-2.5">
                                {badges.map((badge) => (
                                    <Badge
                                        key={badge}
                                        variant="blue"
                                        className="px-3 py-1"
                                    >
                                       
                                        {badge}
                                    </Badge>
                                ))}
                            </div>
                        </motion.footer>
                    )}
                </div>
                {/* Right Side: Image with Clip Path Animation */}
                <motion.div
                    className="w-full min-h-[300px] bg-cover bg-center md:w-1/2 md:min-h-full lg:w-2/5"
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                    }}
                    initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
                    animate={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
                    transition={{ duration: 1.2, ease: "circOut" }}>
                </motion.div>
            </motion.section>
        );
    }
);

PartnershipHero.displayName = "PartnershipHero";

export { PartnershipHero };
