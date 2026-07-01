import { cn } from "@/lib/utils";

function SectionViewer({ children, className, ...props }) {

    return (
        <div
            {...props}
            className={cn(
                "w-full",
                "max-width px-4 md:px-6 lg:px-10 xl:px-20",
                className
            )}>
            {children}
        </div>
    );
}

export default SectionViewer;