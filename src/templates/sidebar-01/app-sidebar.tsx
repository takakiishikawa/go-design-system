"use client";

import * as React from "react";
import {
  Check,
  ChevronsUpDown,
  AppWindow,
  Languages,
  Wallet,
  ChefHat,
  Zap,
} from "lucide-react";

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
  /** lucide-react などのアイコンコンポーネント。未指定時は AppWindow をフォールバック */
  icon?: React.ElementType;
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
// GO_APPS — Goシリーズ全プロダクト共通の app switcher エントリ
//   各プロダクトの sidebar から `apps={GO_APPS}` で渡す
// ---------------------------------------------------------------------------

export const GO_APPS: AppInfo[] = [
  {
    name: "NativeGo",
    url: "https://native-go.vercel.app",
    color: "#0052CC",
    icon: Languages,
  },
  {
    name: "KenyakuGo",
    url: "https://kenyaku-go.vercel.app",
    color: "#F5A623",
    icon: Wallet,
  },
  {
    name: "TaskGo",
    url: "https://taskgo-dun.vercel.app",
    color: "#5E6AD2",
    icon: Zap,
  },
  {
    name: "CookGo",
    url: "https://cook-go-lovat.vercel.app",
    color: "#16A34A",
    icon: ChefHat,
  },
];

// ---------------------------------------------------------------------------
// AppIcon — 各アプリのブランドアイコン。color を文字色として適用
// ---------------------------------------------------------------------------

function AppIcon({
  icon: Icon = AppWindow,
  color,
  className,
}: {
  icon?: React.ElementType;
  color?: string;
  className?: string;
}) {
  return (
    <Icon
      className={cn("size-4 shrink-0", className)}
      style={color ? { color } : undefined}
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
              tooltip={current?.name ?? currentApp}
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              aria-label="アプリを切り替え"
            >
              <AppIcon icon={current?.icon} color={current?.color} />
              <span className="font-semibold truncate">
                {current?.name ?? currentApp}
              </span>
              <ChevronsUpDown className="ml-auto shrink-0 opacity-50 group-data-[collapsible=icon]:hidden" />
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
                <AppIcon icon={app.icon} color={app.color} />
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
