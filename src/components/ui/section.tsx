import * as React from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  description?: string;
  actions?: React.ReactNode;
  variant?: "default" | "bordered" | "elevated";
  divider?: boolean;
  as?: React.ElementType;
}

export function Section({
  title,
  description,
  actions,
  variant = "default",
  divider = false,
  as: Tag = "section",
  className,
  children,
  ...props
}: SectionProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const El = Tag as any;
  return (
    <El
      className={cn(
        "flex flex-col gap-4",
        variant === "bordered" && "rounded-lg border border-border p-6",
        variant === "elevated" && "rounded-lg bg-card p-6 shadow-sm",
        className,
      )}
      {...props}
    >
      {(title || actions) && (
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            {title && (
              <h2 className="text-base font-semibold text-foreground">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>
          {actions && <div className="shrink-0">{actions}</div>}
        </div>
      )}
      {divider && <Separator />}
      {children}
    </El>
  );
}
