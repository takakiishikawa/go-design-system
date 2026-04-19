"use client"

import * as React from "react"

export type ProductColor = {
  name: string
  color: string
  hover: string
  secondary: string
  secondaryHover: string
}

export const PRODUCT_COLORS: ProductColor[] = [
  { name: "Go Design System", color: "#6366F1", hover: "#4f46e5", secondary: "#8B5CF6", secondaryHover: "#7c3aed" },
  { name: "NativeGo",         color: "#E74C3C", hover: "#C0392B", secondary: "#F59E0B", secondaryHover: "#D97706" },
  { name: "CareGo",           color: "#22C55E", hover: "#16a34a", secondary: "#06B6D4", secondaryHover: "#0891b2" },
  { name: "KenyakuGo",        color: "#F59E0B", hover: "#D97706", secondary: "#10B981", secondaryHover: "#059669" },
  { name: "TaskGo",           color: "#6366F1", hover: "#4f46e5", secondary: "#EC4899", secondaryHover: "#db2777" },
  { name: "CookGo",           color: "#10B981", hover: "#059669", secondary: "#F97316", secondaryHover: "#ea6600" },
  { name: "PhysicalGo",       color: "#3B82F6", hover: "#2563EB", secondary: "#14B8A6", secondaryHover: "#0d9488" },
]

const STORAGE_KEY = "go-ds-primary-color"

function getSavedColor(): ProductColor {
  if (typeof window === "undefined") return PRODUCT_COLORS[0]
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed: ProductColor = JSON.parse(raw)
      const found = PRODUCT_COLORS.find((p) => p.name === parsed.name)
      if (found) return found
    }
  } catch {}
  return PRODUCT_COLORS[0]
}

type ColorContextValue = {
  selected: ProductColor
  setSelected: (p: ProductColor) => void
}

const ColorContext = React.createContext<ColorContextValue>({
  selected: PRODUCT_COLORS[0],
  setSelected: () => {},
})

export function ColorProvider({ children }: { children: React.ReactNode }) {
  const [selected, setSelectedState] = React.useState<ProductColor>(PRODUCT_COLORS[0])

  // Read from localStorage after mount (avoids SSR mismatch)
  React.useEffect(() => {
    setSelectedState(getSavedColor())
  }, [])

  const setSelected = React.useCallback((p: ProductColor) => {
    setSelectedState(p)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(p))
    } catch {}
  }, [])

  return (
    <ColorContext.Provider value={{ selected, setSelected }}>
      {children}
    </ColorContext.Provider>
  )
}

export function useColor() {
  return React.useContext(ColorContext)
}
