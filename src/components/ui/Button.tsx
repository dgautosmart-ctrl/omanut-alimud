import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-[var(--color-navy-900)] text-white hover:bg-[var(--color-navy-800)] active:bg-[var(--color-navy-950)] shadow-sm",
  secondary:
    "bg-white text-[var(--color-navy-900)] border border-[var(--color-border)] hover:bg-[var(--color-navy-50)] shadow-sm",
  ghost:
    "text-[var(--color-navy-700)] hover:bg-[var(--color-navy-50)]",
  danger:
    "bg-[var(--color-error)] text-white hover:opacity-90 shadow-sm",
};

const sizeStyles: Record<Size, string> = {
  sm: "text-sm px-3 py-1.5 rounded-md",
  md: "text-base px-5 py-2.5 rounded-lg",
  lg: "text-lg px-7 py-3.5 rounded-lg font-semibold",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", loading, className, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-150 cursor-pointer",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {loading && (
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
