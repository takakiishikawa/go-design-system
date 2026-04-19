"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface InlineEditProps {
  value: string
  onChange: (value: string) => void
  validate?: (value: string) => string | undefined
  placeholder?: string
  multiline?: boolean
  disabled?: boolean
  className?: string
  inputClassName?: string
  renderDisplay?: (value: string) => React.ReactNode
}

export function InlineEdit({
  value,
  onChange,
  validate,
  placeholder = "クリックして編集",
  multiline = false,
  disabled = false,
  className,
  inputClassName,
  renderDisplay,
}: InlineEditProps) {
  const [editing, setEditing] = React.useState(false)
  const [draft, setDraft] = React.useState(value)
  const [error, setError] = React.useState<string | undefined>()
  const inputRef = React.useRef<HTMLInputElement & HTMLTextAreaElement>(null)

  React.useEffect(() => {
    if (editing) {
      setDraft(value)
      setError(undefined)
      setTimeout(() => inputRef.current?.focus(), 0)
    }
  }, [editing, value])

  function save() {
    const err = validate?.(draft)
    if (err) {
      setError(err)
      return
    }
    onChange(draft)
    setEditing(false)
  }

  function cancel() {
    setDraft(value)
    setError(undefined)
    setEditing(false)
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !multiline) {
      e.preventDefault()
      save()
    }
    if (e.key === "Escape") {
      e.preventDefault()
      cancel()
    }
    if (e.key === "Enter" && multiline && e.metaKey) {
      e.preventDefault()
      save()
    }
  }

  const sharedInputClass = cn(
    "w-full rounded-sm border border-primary bg-background px-1 py-0.5 text-sm text-foreground outline-none ring-2 ring-primary/30",
    error && "border-destructive ring-destructive/30",
    inputClassName
  )

  if (editing) {
    return (
      <div className={cn("flex flex-col gap-1", className)}>
        {multiline ? (
          <textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={save}
            rows={3}
            className={cn(sharedInputClass, "resize-y")}
          />
        ) : (
          <input
            ref={inputRef as React.RefObject<HTMLInputElement>}
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={save}
            className={sharedInputClass}
          />
        )}
        {error && <p className="text-xs text-destructive">{error}</p>}
        {multiline && (
          <p className="text-xs text-muted-foreground">⌘+Enter で保存、Esc でキャンセル</p>
        )}
      </div>
    )
  }

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => !disabled && setEditing(true)}
      className={cn(
        "group w-full rounded-sm px-1 py-0.5 text-left text-sm transition-colors",
        !disabled && "hover:bg-surface-subtle hover:ring-1 hover:ring-border",
        disabled && "cursor-not-allowed opacity-50",
        className
      )}
    >
      {value ? (
        renderDisplay ? renderDisplay(value) : (
          <span className="text-foreground">{value}</span>
        )
      ) : (
        <span className="text-muted-foreground">{placeholder}</span>
      )}
    </button>
  )
}
