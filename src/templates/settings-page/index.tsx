"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

// ---------------------------------------------------------------------------
// SettingsItem
// ---------------------------------------------------------------------------

export interface SettingsItemProps {
  label: string;
  description?: string;
  control: React.ReactNode;
  className?: string;
}

export function SettingsItem({
  label,
  description,
  control,
  className,
}: SettingsItemProps) {
  return (
    <div
      className={cn("flex items-center justify-between gap-4 py-4", className)}
    >
      <div className="flex flex-col gap-0.5">
        <p className="text-sm font-medium text-foreground">{label}</p>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="shrink-0">{control}</div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// SettingsGroup
// ---------------------------------------------------------------------------

export interface SettingsGroupProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function SettingsGroup({
  title,
  description,
  children,
  className,
}: SettingsGroupProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="mb-2">
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="rounded-lg border border-border bg-card divide-y divide-border">
        {React.Children.map(children, (child, i) => (
          <div key={i} className="px-4">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// SettingsPage
// ---------------------------------------------------------------------------

export interface SettingsSection {
  id: string;
  label: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

export interface SettingsPageProps {
  sections: SettingsSection[];
  defaultSection?: string;
  title?: string;
  className?: string;
}

export function SettingsPage({
  sections,
  defaultSection,
  title = "設定",
  className,
}: SettingsPageProps) {
  const [activeId, setActiveId] = React.useState(
    defaultSection ?? sections[0]?.id,
  );
  const activeSection = sections.find((s) => s.id === activeId) ?? sections[0];

  return (
    <div
      className={cn("mx-auto w-full max-w-5xl px-4 py-8 md:px-8", className)}
    >
      <h1 className="mb-6 text-2xl font-semibold text-foreground">{title}</h1>
      <div className="flex gap-8">
        {/* Sidebar nav */}
        <nav className="hidden w-48 shrink-0 md:block">
          <ul className="flex flex-col gap-1">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => setActiveId(s.id)}
                  className={cn(
                    "flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
                    activeId === s.id
                      ? "bg-surface-subtle font-medium text-foreground"
                      : "text-muted-foreground hover:bg-surface-subtle hover:text-foreground",
                  )}
                >
                  {s.icon && <span className="shrink-0">{s.icon}</span>}
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile tab row */}
        <div className="mb-4 flex gap-1 overflow-x-auto md:hidden">
          {sections.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveId(s.id)}
              className={cn(
                "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
                activeId === s.id
                  ? "bg-surface-subtle font-medium text-foreground"
                  : "text-muted-foreground hover:bg-surface-subtle",
              )}
            >
              {s.icon}
              {s.label}
            </button>
          ))}
        </div>

        <Separator orientation="vertical" className="hidden h-auto md:block" />

        {/* Content */}
        <div className="min-w-0 flex-1">
          {activeSection && (
            <div className="flex flex-col gap-6">{activeSection.content}</div>
          )}
        </div>
      </div>
    </div>
  );
}
