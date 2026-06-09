import { cn } from '@/lib/utils';

function SubHeading({desc, className}) {
  return (
    <div className={cn(className, "text-sm text-muted-foreground")}>{desc}</div>
  )
}

export default SubHeading