import { Separator } from "@takaki/go-design-system"

interface DemoSectionProps {
  title: string
  description?: string
  children: React.ReactNode
}

export function DemoSection({ title, description, children }: DemoSectionProps) {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <h2 className="text-sm font-semibold text-foreground">{title}</h2>
        {description && <p className="text-xs text-muted-foreground mt-0.5">{description}</p>}
      </div>
      <div className="flex flex-wrap items-start gap-3">{children}</div>
      <Separator />
    </div>
  )
}

interface PageHeaderProps {
  title: string
  description: string
  import?: string
}

export function PageHeader({ title, description, import: importStr }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-2 pb-2">
      <h1 className="text-xl font-bold text-foreground">{title}</h1>
      <p className="text-sm text-muted-foreground">{description}</p>
      {importStr && (
        <pre className="inline-flex w-fit rounded bg-surface-subtle px-3 py-1.5 text-xs font-mono text-foreground border border-border">
          {importStr}
        </pre>
      )}
    </div>
  )
}
