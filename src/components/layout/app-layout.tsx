"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

export interface AppLayoutProps {
  /** AppSidebar を渡す */
  sidebar: React.ReactNode;
  /** 任意のヘッダー（PageHeader 等） */
  header?: React.ReactNode;
  /** メインコンテンツ */
  children: React.ReactNode;
  /** SidebarProvider の defaultOpen（デフォルト: true） */
  defaultOpen?: boolean;
  /** main 要素に追加するクラス（デフォルト: "gap-4 p-4"） */
  mainClassName?: string;
}

export function AppLayout({
  sidebar,
  header,
  children,
  defaultOpen = true,
  mainClassName,
}: AppLayoutProps) {
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      {sidebar}

      <SidebarInset>
        {/* トップバー：ハンバーガー + ヘッダーコンテンツ */}
        <header className="flex h-12 shrink-0 items-center gap-2 border-b border-border px-4">
          <SidebarTrigger className="-ml-1" />
          {header && (
            <>
              <Separator orientation="vertical" className="h-4" />
              <div className="flex flex-1 items-center">{header}</div>
            </>
          )}
        </header>

        {/* メインコンテンツ */}
        <main
          className={cn(
            "@container/main flex flex-1 flex-col",
            mainClassName ?? "gap-4 p-4",
          )}
        >
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
