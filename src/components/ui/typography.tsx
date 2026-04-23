import * as React from "react";
import { cn } from "@/lib/utils";
import { TrendingDown, TrendingUp } from "lucide-react";

// ---------------------------------------------------------------------------
// Heading
// ---------------------------------------------------------------------------

const headingStyles = {
  1: "scroll-m-20 text-4xl font-bold tracking-tight",
  2: "scroll-m-20 text-3xl font-semibold tracking-tight",
  3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  4: "scroll-m-20 text-xl font-semibold tracking-tight",
  5: "scroll-m-20 text-lg font-semibold",
  6: "scroll-m-20 text-base font-semibold",
} as const;

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  as?: React.ElementType;
}

export function Heading({
  level = 2,
  as,
  className,
  children,
  ...props
}: HeadingProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag = (as ?? `h${level}`) as any;
  return (
    <Tag
      className={cn("text-foreground", headingStyles[level], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}

// ---------------------------------------------------------------------------
// Text
// ---------------------------------------------------------------------------

const textSizes = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
} as const;

const textWeights = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
} as const;

const textColors = {
  default: "text-foreground",
  muted: "text-muted-foreground",
  primary: "text-primary",
  success: "text-[color:var(--color-success)]",
  warning: "text-[color:var(--color-warning)]",
  danger: "text-[color:var(--color-danger)]",
} as const;

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  size?: keyof typeof textSizes;
  weight?: keyof typeof textWeights;
  color?: keyof typeof textColors;
  as?: React.ElementType;
}

export function Text({
  size = "base",
  weight = "normal",
  color = "default",
  as: Tag = "p",
  className,
  children,
  ...props
}: TextProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const El = Tag as any;
  return (
    <El
      className={cn(
        textSizes[size],
        textWeights[weight],
        textColors[color],
        className,
      )}
      {...props}
    >
      {children}
    </El>
  );
}

// ---------------------------------------------------------------------------
// MetricText
// ---------------------------------------------------------------------------

export interface MetricTextProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string | number;
  unit?: string;
  trend?: {
    direction: "up" | "down" | "neutral";
    label: string;
    positive?: boolean;
  };
  size?: "sm" | "md" | "lg";
}

const metricSizes = {
  sm: { value: "text-2xl", unit: "text-sm", trend: "text-xs" },
  md: { value: "text-3xl", unit: "text-base", trend: "text-sm" },
  lg: { value: "text-5xl", unit: "text-xl", trend: "text-base" },
};

export function MetricText({
  value,
  unit,
  trend,
  size = "md",
  className,
  ...props
}: MetricTextProps) {
  const s = metricSizes[size];

  let trendColor = "text-muted-foreground";
  if (trend) {
    const isPositive =
      trend.positive !== false
        ? trend.direction === "up"
        : trend.direction === "down";
    trendColor = isPositive
      ? "text-[color:var(--color-success)]"
      : "text-[color:var(--color-danger)]";
    if (trend.direction === "neutral") trendColor = "text-muted-foreground";
  }

  return (
    <div className={cn("flex flex-col gap-1", className)} {...props}>
      <div className="flex items-baseline gap-1">
        <span className={cn(s.value, "font-bold tabular-nums text-foreground")}>
          {value}
        </span>
        {unit && (
          <span className={cn(s.unit, "text-muted-foreground")}>{unit}</span>
        )}
      </div>
      {trend && (
        <div className={cn("flex items-center gap-1", trendColor)}>
          {trend.direction === "up" && <TrendingUp className="size-3.5" />}
          {trend.direction === "down" && <TrendingDown className="size-3.5" />}
          <span className={s.trend}>{trend.label}</span>
        </div>
      )}
    </div>
  );
}
