"use client"

import * as React from "react"
import { Check, ChevronsUpDown, Search } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface AppInfo {
  name: string
  url: string
  color: string
}

export interface NavSubItem {
  title: string
  url: string
  isActive?: boolean
}

export interface NavItem {
  title: string
  url: string
  icon?: React.ElementType
  isActive?: boolean
  items?: NavSubItem[]
}

export interface AppSwitcherProps {
  currentApp: string
  apps: AppInfo[]
  /** 遷移処理を外から注入。省略時は window.location.href を使用 */
  onNavigate?: (url: string) => void
  /** ドロップダウンの開く方向。"top"(default) はフッター用、"bottom" はヘッダー用 */
  placement?: "top" | "bottom"
}

export interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  currentApp: string
  apps: AppInfo[]
  navItems: NavItem[]
  logo?: React.ReactNode
  searchPlaceholder?: string
  onNavigate?: (url: string) => void
}

// ---------------------------------------------------------------------------
// ColorDot — インラインで色を指定するため Tailwind クラスは使わない
// ---------------------------------------------------------------------------

function ColorDot({ color, size = 8 }: { color: string; size?: number }) {
  return (
    <span
      className="shrink-0 rounded-full"
      style={{ width: size, height: size, backgroundColor: color }}
      aria-hidden
    />
  )
}

// ---------------------------------------------------------------------------
// SearchForm
// ---------------------------------------------------------------------------

export function SearchForm({
  placeholder = "Search...",
  ...props
}: React.ComponentProps<"form"> & { placeholder?: string }) {
  return (
    <form {...props}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="sidebar-search" className="sr-only">
            Search
          </Label>
          <SidebarInput
            id="sidebar-search"
            placeholder={placeholder}
            className="pl-8"
          />
          <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  )
}

// ---------------------------------------------------------------------------
// AppSwitcher — サイドバー最下部のアプリ切り替えドロップダウン
// ---------------------------------------------------------------------------

export function AppSwitcher({
  currentApp,
  apps,
  onNavigate,
  placement = "top",
}: AppSwitcherProps) {
  const current = apps.find((a) => a.name === currentApp) ?? apps[0]

  function handleSelect(url: string) {
    if (onNavigate) {
      onNavigate(url)
    } else {
      window.location.href = url
    }
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              aria-label="アプリを切り替え"
            >
              <ColorDot color={current?.color ?? "#888"} size={10} />
              <div className="flex flex-col gap-0.5 leading-none min-w-0">
                <span className="text-xs text-muted-foreground">App</span>
                <span className="font-semibold truncate">
                  {current?.name ?? currentApp}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto shrink-0 opacity-50" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-[var(--radix-dropdown-menu-trigger-width)] min-w-52"
            align="start"
            side={placement === "bottom" ? "bottom" : "top"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              Goシリーズ
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {apps.map((app) => (
              <DropdownMenuItem
                key={app.name}
                onSelect={() => handleSelect(app.url)}
                className="gap-2"
              >
                <ColorDot color={app.color} size={8} />
                <span className="flex-1">{app.name}</span>
                {app.name === currentApp && (
                  <Check className="size-4 shrink-0 opacity-70" />
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

// ---------------------------------------------------------------------------
// AppSidebar — Goシリーズ共通サイドバー
// ---------------------------------------------------------------------------

export function AppSidebar({
  currentApp,
  apps,
  navItems,
  logo,
  searchPlaceholder,
  onNavigate,
  ...props
}: AppSidebarProps) {
  return (
    <Sidebar {...props}>
      {/* ヘッダー：ロゴ + 検索 */}
      <SidebarHeader>
        {logo && (
          <div className="flex items-center gap-2 px-2 py-1">{logo}</div>
        )}
        <SearchForm placeholder={searchPlaceholder} />
      </SidebarHeader>

      {/* メインナビ */}
      <SidebarContent>
        {navItems.map((section) =>
          section.items ? (
            // グループ付きナビ（セクション見出し + サブ項目）
            <SidebarGroup key={section.title}>
              <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {section.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={item.isActive}
                      >
                        <a href={item.url}>{item.title}</a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ) : (
            // フラットなナビ項目
            <SidebarGroup key={section.title}>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={section.isActive}
                      className={cn(
                        section.icon && "gap-2"
                      )}
                    >
                      <a href={section.url}>
                        {section.icon && (
                          <section.icon className="size-4 shrink-0" />
                        )}
                        {section.title}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          )
        )}
      </SidebarContent>

      {/* フッター：アプリ切り替え */}
      <SidebarFooter>
        <AppSwitcher
          currentApp={currentApp}
          apps={apps}
          onNavigate={onNavigate}
        />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
