import { cn } from "@/lib/utils";

function PageViewer({ children, className }) {

    return (
        <div className={cn(
            "w-full",
            "space-y-6 overflow-x-hidden",
            className
        )}>
            {children}
        </div>
    );
}

export default PageViewer;