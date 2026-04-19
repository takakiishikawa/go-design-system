"use client"

import * as React from "react"

export type ProductColor = {
  name: string
  color: string
  hover: string
}

export const PRODUCT_COLORS: ProductColor[] = [
  { name: "Showcase",    color: "#6366F1", hover: "#4f46e5" },
  { name: "NativeGo",   color: "#E74C3C", hover: "#C0392B" },
  { name: "CareGo",     color: "#22C55E", hover: "#16a34a" },
  { name: "KenyakuGo",  color: "#F59E0B", hover: "#D97706" },
  { name: "TaskGo",     color: "#6366F1", hover: "#4f46e5" },
  { name: "CookGo",     color: "#10B981", hover: "#059669" },
  { name: "PhysicalGo", color: "#3B82F6", hover: "#2563EB" },
]

type ColorContextValue = {
  selected: ProductColor
  setSelected: (p: ProductColor) => void
}

const ColorContext = React.createContext<ColorContextValue>({
  selected: PRODUCT_COLORS[0],
  setSelected: () => {},
})

export function ColorProvider({ children }: { children: React.ReactNode }) {
  const [selected, setSelected] = React.useState(PRODUCT_COLORS[0])
  return (
    <ColorContext.Provider value={{ selected, setSelected }}>
      {children}
    </ColorContext.Provider>
  )
}

export function useColor() {
  return React.useContext(ColorContext)
}
