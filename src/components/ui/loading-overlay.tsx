import * as React from "react"
import { cn } from "@/lib/utils"
import { Spinner } from "./spinner"

export interface LoadingOverlayProps {
  loading: boolean
  children: React.ReactNode
  label?: string
  className?: string
}

export function LoadingOverlay({
  loading,
  children,
  label = "読み込み中",
  className,
}: LoadingOverlayProps) {
  return (
    <div className={cn("relative", className)}>
      {children}
      {loading && (
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 rounded-[inherit] bg-background/70 backdrop-blur-[1px]"
          aria-busy="true"
          aria-label={label}
        >
          <Spinner size="md" color="primary" />
          {label && (
            <p className="text-xs text-muted-foreground">{label}</p>
          )}
        </div>
      )}
    </div>
  )
}
LoadingOverlay.displayName = "LoadingOverlay"
