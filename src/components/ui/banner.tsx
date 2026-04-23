"use client";

import * as React from "react";
import {
  X,
  AlertCircle,
  CheckCircle2,
  Info,
  AlertTriangle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const variantConfig = {
  default: {
    container: "bg-surface-subtle border-border text-foreground",
    icon: <Info className="size-4 shrink-0" />,
  },
  info: {
    container:
      "bg-[color:var(--color-info-subtle)] border-[color:var(--color-info)] text-foreground",
    icon: <Info className="size-4 shrink-0 text-[color:var(--color-info)]" />,
  },
  success: {
    container:
      "bg-[color:var(--color-success-subtle)] border-[color:var(--color-success)] text-foreground",
    icon: (
      <CheckCircle2 className="size-4 shrink-0 text-[color:var(--color-success)]" />
    ),
  },
  warning: {
    container:
      "bg-[color:var(--color-warning-subtle)] border-[color:var(--color-warning)] text-foreground",
    icon: (
      <AlertTriangle className="size-4 shrink-0 text-[color:var(--color-warning)]" />
    ),
  },
  danger: {
    container:
      "bg-[color:var(--color-danger-subtle)] border-[color:var(--color-danger)] text-foreground",
    icon: (
      <AlertCircle className="size-4 shrink-0 text-[color:var(--color-danger)]" />
    ),
  },
} as const;

export interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof variantConfig;
  title?: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  dismissible?: boolean;
  onDismiss?: () => void;
}

export function Banner({
  variant = "default",
  title,
  description,
  action,
  dismissible = false,
  onDismiss,
  className,
  children,
  ...props
}: BannerProps) {
  const [visible, setVisible] = React.useState(true);

  if (!visible) return null;

  const config = variantConfig[variant];

  function handleDismiss() {
    setVisible(false);
    onDismiss?.();
  }

  return (
    <div
      role="alert"
      className={cn(
        "flex items-start gap-3 rounded-md border px-4 py-3",
        config.container,
        className,
      )}
      {...props}
    >
      <span className="mt-0.5">{config.icon}</span>
      <div className="flex flex-1 flex-col gap-1">
        {title && <p className="text-sm font-medium leading-tight">{title}</p>}
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
        {children}
        {action && (
          <Button
            variant="link"
            size="sm"
            className="h-auto p-0 text-sm font-medium underline-offset-2"
            onClick={action.onClick}
          >
            {action.label}
          </Button>
        )}
      </div>
      {dismissible && (
        <button
          type="button"
          aria-label="閉じる"
          onClick={handleDismiss}
          className="ml-auto shrink-0 rounded p-0.5 opacity-70 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <X className="size-4" />
        </button>
      )}
    </div>
  );
}
