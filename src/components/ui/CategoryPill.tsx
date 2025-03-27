import { cn } from "@/lib/utils";

interface CategoryPillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

const CategoryPill = ({
  label,
  active = false,
  onClick,
  className,
}: CategoryPillProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap",
        active
          ? "bg-primary text-primary-foreground shadow-sm"
          : "bg-secondary text-muted-foreground hover:bg-secondary/80",
        className
      )}
    >
      {label}
    </button>
  );
};

export default CategoryPill;
