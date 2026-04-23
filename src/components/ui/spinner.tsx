import * as React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const sizeMap = {
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48,
} as const;

export interface SpinnerProps extends React.HTMLAttributes<SVGSVGElement> {
  size?: keyof typeof sizeMap;
  color?: "current" | "primary";
  "aria-label"?: string;
}

export function Spinner({
  size = "md",
  color = "current",
  className,
  "aria-label": ariaLabel = "読み込み中",
  ...props
}: SpinnerProps) {
  const px = sizeMap[size];
  return (
    <Loader2
      width={px}
      height={px}
      aria-label={ariaLabel}
      role="status"
      className={cn(
        "animate-spin",
        color === "primary" && "text-primary",
        className,
      )}
      {...props}
    />
  );
}
