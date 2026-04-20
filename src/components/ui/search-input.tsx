"use client"

import * as React from "react"
import { Search, X } from "lucide-react"
import { cn } from "@/lib/utils"

export interface SearchInputProps
  extends Omit<React.ComponentProps<"input">, "type" | "onChange"> {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  onClear?: () => void
  containerClassName?: string
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      value: controlledValue,
      defaultValue = "",
      onValueChange,
      onClear,
      className,
      containerClassName,
      ...props
    },
    ref
  ) => {
    const isControlled = controlledValue !== undefined
    const [internalValue, setInternalValue] = React.useState(defaultValue)
    const value = isControlled ? controlledValue : internalValue

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      if (!isControlled) setInternalValue(e.target.value)
      onValueChange?.(e.target.value)
    }

    function handleClear() {
      if (!isControlled) setInternalValue("")
      onValueChange?.("")
      onClear?.()
    }

    return (
      <div className={cn("relative flex items-center", containerClassName)}>
        <Search className="pointer-events-none absolute left-2.5 size-4 text-muted-foreground" />
        <input
          ref={ref}
          type="search"
          value={value}
          onChange={handleChange}
          className={cn(
            "flex h-9 w-full rounded-md border border-border bg-background py-1 pl-8 pr-8 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 [&::-webkit-search-cancel-button]:hidden",
            className
          )}
          {...props}
        />
        {value && (
          <button
            type="button"
            aria-label="クリア"
            onClick={handleClear}
            className="absolute right-2 flex items-center justify-center text-muted-foreground hover:text-foreground"
          >
            <X className="size-3.5" />
          </button>
        )}
      </div>
    )
  }
)
SearchInput.displayName = "SearchInput"
