"use client"

import { PRODUCT_COLORS, useColor } from "./color-provider"

export function ColorSwitcher() {
  const { selected, setSelected } = useColor()

  return (
    <div className="flex items-center gap-2">
      <span className="hidden text-xs text-muted-foreground sm:block">プロダクト:</span>
      <div className="flex items-center gap-1">
        {PRODUCT_COLORS.map((p) => (
          <button
            key={p.name}
            onClick={() => setSelected(p)}
            title={p.name}
            aria-label={`${p.name} カラーに切り替え`}
            className="relative flex size-5 items-center justify-center rounded-full transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {/* Split circle: left = primary, right = secondary */}
            <span className="block size-4 overflow-hidden rounded-full">
              <span className="flex h-full">
                <span className="flex-1" style={{ backgroundColor: p.color }} />
                <span className="flex-1" style={{ backgroundColor: p.secondary }} />
              </span>
            </span>
            {selected.name === p.name && (
              <span
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{ boxShadow: `0 0 0 2px white, 0 0 0 4px ${p.color}` }}
              />
            )}
          </button>
        ))}
      </div>
      <span
        className="hidden rounded px-1.5 py-0.5 text-xs font-medium text-white sm:block"
        style={{ backgroundColor: selected.color }}
      >
        {selected.name}
      </span>
    </div>
  )
}
