"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface AppInfo {
  name: string;
  url: string;
  color: string;
}

export interface NavSubItem {
  title: string;
  url: string;
  isActive?: boolean;
}

export interface NavItem {
  title: string;
  url: string;
  icon?: React.ElementType;
  isActive?: boolean;
  items?: NavSubItem[];
}

export interface AppSwitcherProps {
  currentApp: string;
  apps: AppInfo[];
  /** 遷移処理を外から注入。省略時は window.location.href を使用 */
  onNavigate?: (url: string) => void;
  /** ドロップダウンの開く方向。"top"(default) はフッター用、"bottom" はヘッダー用 */
  placement?: "top" | "bottom";
}

export interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  currentApp: string;
  apps: AppInfo[];
  navItems: NavItem[];
  logo?: React.ReactNode;
  onNavigate?: (url: string) => void;
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
  );
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
  const current = apps.find((a) => a.name === currentApp) ?? apps[0];

  function handleSelect(url: string) {
    if (onNavigate) {
      onNavigate(url);
    } else {
      window.location.href = url;
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
  );
}

// ---------------------------------------------------------------------------
// AppSidebar — Goシリーズ共通サイドバー
// ---------------------------------------------------------------------------

export function AppSidebar({
  currentApp,
  apps,
  navItems,
  logo,
  onNavigate,
  ...props
}: AppSidebarProps) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        {logo && (
          <div className="flex items-center gap-2 px-2 py-1">{logo}</div>
        )}
        <AppSwitcher
          currentApp={currentApp}
          apps={apps}
          onNavigate={onNavigate}
          placement="bottom"
        />
      </SidebarHeader>

      <SidebarContent>
        {navItems.map((section) =>
          section.items ? (
            <SidebarGroup key={section.title}>
              <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {section.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={item.isActive}>
                        <a href={item.url}>{item.title}</a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ) : (
            <SidebarGroup key={section.title}>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={section.isActive}
                      className={cn(section.icon && "gap-2")}
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
          ),
        )}
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
