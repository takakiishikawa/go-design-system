"use client";

import * as React from "react";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useControlledState } from "@/hooks/use-controlled-state";

export interface NumberInputProps {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  className?: string;
  onChange?: (value: number) => void;
}

export const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  function NumberInput(
    {
      value: controlledValue,
      defaultValue = 0,
      min = -Infinity,
      max = Infinity,
      step = 1,
      disabled = false,
      className,
      onChange,
    },
    ref,
  ) {
    const [value, setInternalValue] = useControlledState(
      controlledValue,
      defaultValue,
    );

    function update(next: number) {
      const clamped = Math.min(max, Math.max(min, next));
      setInternalValue(clamped);
      onChange?.(clamped);
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
      const parsed = parseFloat(e.target.value);
      if (!isNaN(parsed)) update(parsed);
    }

    return (
      <div
        className={cn(
          "inline-flex h-9 items-center rounded-md border border-border bg-background",
          disabled && "cursor-not-allowed opacity-50",
          className,
        )}
      >
        <button
          type="button"
          aria-label="減らす"
          disabled={disabled || value <= min}
          onClick={() => update(value - step)}
          className="flex h-full w-8 items-center justify-center text-muted-foreground transition-colors hover:text-foreground disabled:pointer-events-none"
        >
          <Minus className="size-3.5" />
        </button>
        <input
          ref={ref}
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          onChange={handleInputChange}
          className="w-12 bg-transparent text-center text-sm text-foreground focus:outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        <button
          type="button"
          aria-label="増やす"
          disabled={disabled || value >= max}
          onClick={() => update(value + step)}
          className="flex h-full w-8 items-center justify-center text-muted-foreground transition-colors hover:text-foreground disabled:pointer-events-none"
        >
          <Plus className="size-3.5" />
        </button>
      </div>
    );
  },
);
NumberInput.displayName = "NumberInput";
