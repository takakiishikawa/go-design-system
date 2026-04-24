import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface MetricCardProps {
  title: string;
  description: string;
  /** KGI の場合 true —— primary border でハイライト */
  isPrimary?: boolean;
  className?: string;
}

export function MetricCard({
  title,
  description,
  isPrimary = false,
  className,
}: MetricCardProps) {
  return (
    <Card
      className={cn(
        "transition-shadow",
        isPrimary && "border-primary border border-border",
        className,
      )}
      style={
        isPrimary
          ? {
              borderColor: "var(--color-primary)",
              boxShadow:
                "0 0 0 1px var(--color-primary), var(--border border-border)",
            }
          : undefined
      }
    >
      <CardHeader className="pb-1">
        <CardTitle
          className={cn(
            "leading-snug",
            isPrimary ? "text-primary" : "text-foreground",
          )}
          style={{
            fontSize: isPrimary ? "var(--text-lg)" : "var(--text-base)",
            fontWeight: "var(--font-weight-semibold)",
            color: isPrimary
              ? "var(--color-primary)"
              : "var(--color-text-primary)",
          }}
        >
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p
          className="leading-relaxed text-muted-foreground"
          style={{
            fontSize: "var(--text-sm)",
            color: "var(--color-text-secondary)",
          }}
        >
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
