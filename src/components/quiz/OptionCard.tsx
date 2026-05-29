import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  label: string;
  description?: string;
  onClick?: () => void;
  icon?: ReactNode;
  thumb?: string;
  thumbShape?: "round" | "square";
  selected?: boolean;
  showArrow?: boolean;
  showRadio?: boolean;
  variant?: "default" | "ghost";
}

export function OptionCard({
  label,
  description,
  onClick,
  icon,
  thumb,
  thumbShape = "round",
  selected,
  showArrow,
  showRadio,
  variant = "default",
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all group",
        variant === "default"
          ? "bg-card shadow-[0_2px_10px_-4px_oklch(0_0_0/0.08)] hover:shadow-[0_6px_18px_-6px_oklch(0_0_0/0.12)]"
          : "bg-secondary/60 hover:bg-secondary",
        selected && "ring-2 ring-primary",
      )}
    >
      {thumb && (
        <img
          src={thumb}
          alt=""
          className={cn(
            "w-12 h-12 object-cover flex-shrink-0",
            thumbShape === "square" ? "rounded-xl" : "rounded-full",
          )}
          loading="lazy"
        />
      )}
      {icon && (
        <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary flex-shrink-0">
          {icon}
        </span>
      )}
      <span className="flex-1 min-w-0">
        <span className="block font-semibold text-foreground text-[0.95rem]">{label}</span>
        {description && (
          <span className="block text-xs text-muted-foreground mt-0.5">{description}</span>
        )}
      </span>
      {showArrow && (
        <ArrowRight
          size={20}
          className="text-muted-foreground group-hover:text-primary transition flex-shrink-0"
        />
      )}
      {showRadio && (
        <span
          className={cn(
            "w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition",
            selected ? "border-primary bg-primary" : "border-border",
          )}
        >
          {selected && <span className="w-2 h-2 rounded-full bg-white" />}
        </span>
      )}
    </button>
  );
}

