import * as React from "react"
import { cn } from "@/lib/utils"

export interface TimelineItem {
  id?: string
  title: string
  description?: React.ReactNode
  timestamp?: string
  icon?: React.ReactNode
  variant?: "default" | "success" | "warning" | "error"
}

export interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

const variantDotClass: Record<NonNullable<TimelineItem["variant"]>, string> = {
  default: "bg-border",
  success: "bg-[color:var(--color-success)]",
  warning: "bg-[color:var(--color-warning)]",
  error: "bg-destructive",
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <ol className={cn("flex flex-col", className)}>
      {items.map((item, i) => (
        <li key={item.id ?? i} className="relative flex gap-4 pb-6 last:pb-0">
          {/* Line */}
          {i < items.length - 1 && (
            <span
              className="absolute left-[11px] top-6 h-full w-px bg-border"
              aria-hidden
            />
          )}
          {/* Dot / Icon */}
          <div className="relative z-10 mt-0.5 flex size-6 shrink-0 items-center justify-center">
            {item.icon ? (
              <span className="flex size-6 items-center justify-center rounded-full border border-border bg-background text-muted-foreground">
                {item.icon}
              </span>
            ) : (
              <span
                className={cn(
                  "size-2.5 rounded-full",
                  variantDotClass[item.variant ?? "default"]
                )}
              />
            )}
          </div>
          {/* Content */}
          <div className="flex min-w-0 flex-1 flex-col gap-0.5">
            <div className="flex flex-wrap items-baseline justify-between gap-x-2">
              <span className="text-sm font-medium text-foreground">
                {item.title}
              </span>
              {item.timestamp && (
                <time className="shrink-0 text-xs text-muted-foreground">
                  {item.timestamp}
                </time>
              )}
            </div>
            {item.description && (
              <p className="text-sm text-muted-foreground">{item.description}</p>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}
