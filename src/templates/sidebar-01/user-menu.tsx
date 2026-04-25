"use client";

import * as React from "react";
import { ChevronsUpDown, LogOut } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface UserMenuItem {
  title: string;
  icon?: React.ElementType;
  onSelect: () => void;
  isActive?: boolean;
}

export interface UserMenuProps {
  displayName: string;
  email?: string;
  avatarUrl?: string;
  /** ドロップダウン本体に並べる項目（コンセプト・設定・テーマ切替など） */
  items: UserMenuItem[];
  /** ログアウト相当の項目。指定すると区切り線の下に表示される */
  signOut?: {
    title?: string;
    onSelect: () => void;
  };
  /** ドロップダウン展開方向。サイドバーフッター用は "top"（デフォルト） */
  placement?: "top" | "bottom";
  /** トリガー上に表示する小さいラベル。省略時は非表示 */
  triggerLabel?: string;
}

// ---------------------------------------------------------------------------
// UserMenu — サイドバーフッターのアカウント・設定集約ドロップダウン
// ---------------------------------------------------------------------------

export function UserMenu({
  displayName,
  email,
  avatarUrl,
  items,
  signOut,
  placement = "top",
  triggerLabel,
}: UserMenuProps) {
  const initials = (displayName || "U").charAt(0).toUpperCase();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              aria-label="アカウントメニュー"
            >
              <Avatar className="size-7 shrink-0">
                {avatarUrl && <AvatarImage src={avatarUrl} alt={displayName} />}
                <AvatarFallback className="text-xs">{initials}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-0.5 leading-none min-w-0">
                {triggerLabel && (
                  <span className="text-xs text-muted-foreground">
                    {triggerLabel}
                  </span>
                )}
                <span className="font-semibold truncate">
                  {displayName || "—"}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto shrink-0 opacity-50" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-[var(--radix-dropdown-menu-trigger-width)] min-w-56"
            align="start"
            side={placement === "bottom" ? "bottom" : "top"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="flex items-center gap-2 py-2 font-normal">
              <Avatar className="size-7 shrink-0">
                {avatarUrl && <AvatarImage src={avatarUrl} alt={displayName} />}
                <AvatarFallback className="text-xs">{initials}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col leading-tight min-w-0">
                <span className="truncate text-sm font-medium">
                  {displayName || "—"}
                </span>
                {email && (
                  <span className="truncate text-xs text-muted-foreground">
                    {email}
                  </span>
                )}
              </div>
            </DropdownMenuLabel>

            {items.length > 0 && <DropdownMenuSeparator />}

            {items.map((item) => {
              const Icon = item.icon;
              return (
                <DropdownMenuItem
                  key={item.title}
                  onSelect={item.onSelect}
                  className={cn(
                    "gap-2",
                    item.isActive && "bg-accent text-accent-foreground",
                  )}
                >
                  {Icon && <Icon className="size-4 shrink-0" />}
                  <span className="flex-1">{item.title}</span>
                </DropdownMenuItem>
              );
            })}

            {signOut && (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={signOut.onSelect} className="gap-2">
                  <LogOut className="size-4 shrink-0" />
                  <span className="flex-1">
                    {signOut.title ?? "ログアウト"}
                  </span>
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
