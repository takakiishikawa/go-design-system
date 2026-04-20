import * as React from "react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export interface BreadcrumbEntry {
  label: string
  href?: string
}

export interface PageHeaderProps {
  title: string
  description?: string
  /** 右側に配置するアクションボタン群 */
  actions?: React.ReactNode
  breadcrumbs?: BreadcrumbEntry[]
}

export function PageHeader({
  title,
  description,
  actions,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-1">
      {/* パンくずリスト */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((crumb, i) => {
              const isLast = i === breadcrumbs.length - 1
              return (
                <React.Fragment key={i}>
                  {i > 0 && <BreadcrumbSeparator />}
                  <BreadcrumbItem>
                    {isLast || !crumb.href ? (
                      <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink href={crumb.href}>
                        {crumb.label}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </React.Fragment>
              )
            })}
          </BreadcrumbList>
        </Breadcrumb>
      )}

      {/* タイトル行 */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1 min-w-0">
          <h1
            className="text-2xl font-semibold leading-tight text-foreground truncate"
            style={{ fontSize: "var(--text-2xl)", fontWeight: "var(--font-weight-semibold)" }}
          >
            {title}
          </h1>
          {description && (
            <p
              className="text-sm text-muted-foreground"
              style={{ fontSize: "var(--text-sm)" }}
            >
              {description}
            </p>
          )}
        </div>

        {/* アクション */}
        {actions && (
          <div className="flex shrink-0 items-center gap-2">{actions}</div>
        )}
      </div>

    </div>
  )
}
