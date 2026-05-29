import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function PrimaryButton({
  className,
  children,
  disabled,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      disabled={disabled}
      className={cn(
        "w-full rounded-full py-4 text-white text-base font-semibold uppercase tracking-wide transition-all",
        disabled
          ? "bg-primary-soft cursor-not-allowed"
          : "bg-primary hover:brightness-105 active:scale-[0.99] shadow-[0_8px_24px_-8px_oklch(0.62_0.19_5/0.5)]",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
