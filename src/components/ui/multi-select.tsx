"use client"

import * as React from "react"
import { X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export type MultiSelectOption = {
  value: string
  label: string
}

export interface MultiSelectProps {
  options: MultiSelectOption[]
  value?: string[]
  defaultValue?: string[]
  placeholder?: string
  disabled?: boolean
  className?: string
  onChange?: (value: string[]) => void
}

export function MultiSelect({
  options,
  value: controlledValue,
  defaultValue = [],
  placeholder = "選択してください",
  disabled = false,
  className,
  onChange,
}: MultiSelectProps) {
  const isControlled = controlledValue !== undefined
  const [internalValue, setInternalValue] = React.useState<string[]>(defaultValue)
  const [open, setOpen] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const selected = isControlled ? controlledValue : internalValue

  function toggle(optionValue: string) {
    const next = selected.includes(optionValue)
      ? selected.filter((v) => v !== optionValue)
      : [...selected, optionValue]
    if (!isControlled) setInternalValue(next)
    onChange?.(next)
  }

  function remove(optionValue: string, e: React.MouseEvent) {
    e.stopPropagation()
    toggle(optionValue)
  }

  React.useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", onClickOutside)
    return () => document.removeEventListener("mousedown", onClickOutside)
  }, [])

  const selectedOptions = options.filter((o) => selected.includes(o.value))

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <div
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        tabIndex={disabled ? -1 : 0}
        onClick={() => !disabled && setOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); !disabled && setOpen((v) => !v) }
          if (e.key === "Escape") setOpen(false)
        }}
        className={cn(
          "flex min-h-9 w-full cursor-pointer flex-wrap items-center gap-1 rounded-md border border-border bg-background px-2 py-1 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
          disabled && "cursor-not-allowed opacity-50"
        )}
      >
        {selectedOptions.length === 0 ? (
          <span className="py-0.5 text-muted-foreground">{placeholder}</span>
        ) : (
          selectedOptions.map((o) => (
            <span
              key={o.value}
              className="inline-flex items-center gap-1 rounded bg-surface-subtle px-1.5 py-0.5 text-xs font-medium text-foreground"
            >
              {o.label}
              <button
                type="button"
                aria-label={`${o.label}を削除`}
                onClick={(e) => remove(o.value, e)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="size-3" />
              </button>
            </span>
          ))
        )}
        <ChevronDown
          className={cn(
            "ml-auto size-4 shrink-0 text-muted-foreground transition-transform",
            open && "rotate-180"
          )}
        />
      </div>

      {open && (
        <ul
          role="listbox"
          aria-multiselectable="true"
          className="absolute z-50 mt-1 max-h-56 w-full overflow-auto rounded-md border border-border bg-background py-1 shadow-md"
        >
          {options.map((o) => {
            const isSelected = selected.includes(o.value)
            return (
              <li
                key={o.value}
                role="option"
                aria-selected={isSelected}
                onClick={() => toggle(o.value)}
                className={cn(
                  "flex cursor-pointer items-center gap-2 px-3 py-1.5 text-sm hover:bg-surface-subtle",
                  isSelected && "font-medium text-primary"
                )}
              >
                <span
                  className={cn(
                    "flex size-3.5 items-center justify-center rounded-sm border border-border",
                    isSelected && "border-primary bg-primary"
                  )}
                >
                  {isSelected && (
                    <svg viewBox="0 0 10 10" className="size-2.5 text-white" fill="currentColor">
                      <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                {o.label}
              </li>
            )
          })}
          {options.length === 0 && (
            <li className="px-3 py-2 text-sm text-muted-foreground">選択肢がありません</li>
          )}
        </ul>
      )}
    </div>
  )
}
