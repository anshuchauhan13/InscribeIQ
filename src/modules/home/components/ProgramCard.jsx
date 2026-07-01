import { CircleCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

function ProgramCard({
  institution,
  title,
  category,
  duration,
  feature,
  image,
  slug,
}) {
  const navigate = useNavigate();
  const to = slug ? `/programs/${slug}` : null;
  const goToProgram = () => to && navigate(to);
  const goToApply = () => to && navigate(`${to}#apply`);

  return (
    <div
      onClick={goToProgram}
      role={to ? "link" : undefined}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-card shadow-[0_2px_20px_rgba(23,5,69,0.06)] transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(23,5,69,0.12)]"
    >
      {/* Image */}
      <div className="aspect-[16/10] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-sm text-muted-foreground">{institution}</p>

        <h3 className="text-lg font-bold leading-snug tracking-tight text-foreground line-clamp-2">
          {title}
        </h3>

        {/* Meta badges */}
        <div className="flex items-center gap-2">
          <Badge className="h-6 rounded-full bg-muted px-3 text-primary">
            {category}
          </Badge>
          <Badge
            variant="outline"
            className="h-6 rounded-full px-3 text-muted-foreground"
          >
            {duration}
          </Badge>
        </div>

        {/* Feature */}
        <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
          <CircleCheck className="h-4 w-4 text-light-blue" />
          <span>{feature}</span>
        </div>

        <Separator className="my-2" />

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button
            onClick={(e) => { e.stopPropagation(); goToProgram(); }}
            className="rounded-full bg-primary px-5 text-primary-foreground hover:bg-primary/90"
          >
            View Program
          </Button>
          <Button
            onClick={(e) => { e.stopPropagation(); goToApply(); }}
            variant="link"
            className="px-0 font-semibold text-foreground hover:text-light-blue"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProgramCard;