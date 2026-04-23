import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section
      className={cn(
        "flex flex-col gap-4 border-t border-border pt-8",
        className,
      )}
    >
      <div className="flex flex-col gap-1">
        <h2
          className="font-semibold text-foreground"
          style={{
            fontSize: "var(--text-xl)",
            fontWeight: "var(--font-weight-semibold)",
          }}
        >
          {title}
        </h2>
        {description && (
          <p
            className="text-muted-foreground"
            style={{
              fontSize: "var(--text-sm)",
              color: "var(--color-text-secondary)",
            }}
          >
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}
