import type { Metadata } from "next"
import "./globals.css"
import { DesignTokens, AppLayout } from "@takaki/go-design-system"
import { ShowcaseSidebar } from "./showcase-sidebar"
import { ColorProvider } from "./color-provider"
import { DynamicColor } from "./dynamic-color"
import { ColorSwitcher } from "./color-switcher"

export const metadata: Metadata = {
  title: "go-design-system Showcase",
  description: "Goシリーズ共通デザインシステムのコンポーネント・トークン・テンプレートを確認できるShowcaseサイト",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <DesignTokens
          primaryColor="#6366F1"
          primaryColorHover="#4f46e5"
        />
      </head>
      <body>
        <ColorProvider>
          <DynamicColor />
          <AppLayout
            sidebar={<ShowcaseSidebar />}
            header={<ColorSwitcher />}
          >
            {children}
          </AppLayout>
        </ColorProvider>
      </body>
    </html>
  )
}
