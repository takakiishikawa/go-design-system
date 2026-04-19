"use client"

import { useEffect } from "react"
import { useColor } from "./color-provider"

export function DynamicColor() {
  const { selected } = useColor()

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty("--color-primary", selected.color)
    root.style.setProperty("--color-primary-hover", selected.hover)
    root.style.setProperty("--primary", selected.color)
    root.style.setProperty("--color-secondary", selected.secondary)
    root.style.setProperty("--color-secondary-hover", selected.secondaryHover)
  }, [selected])

  return null
}
