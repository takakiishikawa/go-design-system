import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const colorVariants = {
  default: "bg-surface-subtle text-foreground border-border",
  primary: "bg-[color:var(--color-primary)]/10 text-primary border-primary/30",
  success:
    "bg-[color:var(--color-success-subtle)] text-[color:var(--color-success)] border-[color:var(--color-success)]/30",
  warning:
    "bg-[color:var(--color-warning-subtle)] text-[color:var(--color-warning)] border-[color:var(--color-warning)]/30",
  danger:
    "bg-[color:var(--color-danger-subtle)] text-[color:var(--color-danger)] border-[color:var(--color-danger)]/30",
  info: "bg-[color:var(--color-info-subtle)] text-[color:var(--color-info)] border-[color:var(--color-info)]/30",
} as const;

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: keyof typeof colorVariants;
  removable?: boolean;
  onRemove?: () => void;
}

export function Tag({
  color = "default",
  removable = false,
  onRemove,
  className,
  children,
  ...props
}: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        colorVariants[color],
        className,
      )}
      {...props}
    >
      {children}
      {removable && (
        <button
          type="button"
          aria-label="削除"
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.();
          }}
          className="ml-0.5 flex size-3.5 items-center justify-center rounded-full opacity-60 hover:opacity-100"
        >
          <X className="size-2.5" />
        </button>
      )}
    </span>
  );
}

// ---------------------------------------------------------------------------
// TagGroup
// ---------------------------------------------------------------------------

export interface TagGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  wrap?: boolean;
}

export function TagGroup({
  wrap = true,
  className,
  children,
  ...props
}: TagGroupProps) {
  return (
    <div
      className={cn(
        "flex gap-1.5",
        wrap && "flex-wrap",
        !wrap && "overflow-x-auto",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
