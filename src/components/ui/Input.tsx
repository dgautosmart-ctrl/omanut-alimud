import { type InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, className, id, ...props }, ref) => {
    const inputId = id ?? label?.replace(/\s+/g, "-").toLowerCase();

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-[var(--color-navy-900)]"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full px-4 py-2.5 rounded-lg border text-base",
            "bg-white text-[var(--color-navy-900)] placeholder:text-[var(--color-muted)]",
            "transition-colors duration-150",
            error
              ? "border-[var(--color-error)] focus:outline-none focus:ring-2 focus:ring-[var(--color-error)]/30"
              : "border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-navy-900)]/20 focus:border-[var(--color-navy-700)]",
            className
          )}
          {...props}
        />
        {hint && !error && (
          <p className="text-xs text-[var(--color-muted)]">{hint}</p>
        )}
        {error && (
          <p className="text-xs text-[var(--color-error)]">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
