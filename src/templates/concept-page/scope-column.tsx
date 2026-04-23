import * as React from "react";
import { CheckIcon, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScopeItemProps {
  text: string;
  type: "solve" | "notSolve";
}

function ScopeItem({ text, type }: ScopeItemProps) {
  const isSolve = type === "solve";
  return (
    <li className="flex items-start gap-2.5 text-sm">
      <span
        className={cn(
          "mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full",
          isSolve
            ? "bg-primary/10 text-primary"
            : "bg-muted text-muted-foreground",
        )}
        aria-hidden
      >
        {isSolve ? (
          <CheckIcon className="size-2.5 stroke-[2.5]" />
        ) : (
          <XIcon className="size-2.5 stroke-[2.5]" />
        )}
      </span>
      <span
        className={cn(isSolve ? "text-foreground" : "text-muted-foreground")}
        style={{
          fontSize: "var(--text-sm)",
          color: isSolve
            ? "var(--color-text-primary)"
            : "var(--color-text-subtle)",
        }}
      >
        {text}
      </span>
    </li>
  );
}

export interface ScopeColumnProps {
  title: string;
  items: string[];
  type: "solve" | "notSolve";
}

export function ScopeColumn({ title, items, type }: ScopeColumnProps) {
  const isSolve = type === "solve";
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-border bg-surface-subtle p-4">
      <p
        className="text-xs font-semibold uppercase tracking-wider"
        style={{
          fontSize: "var(--text-xs)",
          fontWeight: "var(--font-weight-semibold)",
          color: isSolve
            ? "var(--color-primary)"
            : "var(--color-text-secondary)",
        }}
      >
        {title}
      </p>
      <ul className="flex flex-col gap-2.5">
        {items.map((item, i) => (
          <ScopeItem key={i} text={item} type={type} />
        ))}
      </ul>
    </div>
  );
}
