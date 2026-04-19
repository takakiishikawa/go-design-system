import * as React from "react"
import { cn } from "@/lib/utils"

const sizeMap = {
  sm: 32,
  md: 48,
  lg: 64,
  xl: 96,
} as const

const colorMap = {
  primary: "var(--color-primary)",
  success: "var(--color-success)",
  warning: "var(--color-warning)",
  danger: "var(--color-danger)",
} as const

export interface ProgressCircularProps extends React.SVGAttributes<SVGSVGElement> {
  value: number
  size?: keyof typeof sizeMap
  color?: keyof typeof colorMap
  showLabel?: boolean
  strokeWidth?: number
}

export function ProgressCircular({
  value,
  size = "md",
  color = "primary",
  showLabel = false,
  strokeWidth,
  className,
  ...props
}: ProgressCircularProps) {
  const px = sizeMap[size]
  const sw = strokeWidth ?? Math.max(2, Math.round(px * 0.1))
  const radius = (px - sw) / 2
  const circumference = 2 * Math.PI * radius
  const clampedValue = Math.min(100, Math.max(0, value))
  const offset = circumference - (clampedValue / 100) * circumference
  const center = px / 2
  const strokeColor = colorMap[color]
  const fontSize = px * 0.22

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: px, height: px }}>
      <svg
        width={px}
        height={px}
        viewBox={`0 0 ${px} ${px}`}
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        className={cn("rotate-[-90deg]", className)}
        {...props}
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="var(--color-border-default)"
          strokeWidth={sw}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={strokeColor}
          strokeWidth={sw}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.35s ease" }}
        />
      </svg>
      {showLabel && (
        <span
          className="absolute font-medium tabular-nums text-foreground"
          style={{ fontSize }}
          aria-hidden
        >
          {clampedValue}%
        </span>
      )}
    </div>
  )
}
