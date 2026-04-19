import * as React from "react"
import { TOKENS_CSS, GLOBALS_CSS } from "./design-tokens-css"

export interface DesignTokensProps {
  /** このGoのプライマリカラー（例: "#E74C3C"） */
  primaryColor?: string
  /** ホバー時のプライマリカラー。省略時は primaryColor をそのまま使用 */
  primaryColorHover?: string
  /** セカンダリブランドカラー（例: "#F59E0B"） */
  secondaryColor?: string
  /** ホバー時のセカンダリカラー。省略時は secondaryColor をそのまま使用 */
  secondaryColorHover?: string
}

/**
 * Goシリーズ共通デザイントークンを <style> タグとして注入するコンポーネント。
 *
 * Tailwind v4 + Turbopack 環境では CSS ファイルを node_modules から
 * @import すると PostCSS エラーが発生するため、このコンポーネントを使う。
 *
 * 使い方（app/layout.tsx）:
 *   import { DesignTokens } from '@takaki/go-design-system'
 *
 *   export default function RootLayout({ children }) {
 *     return (
 *       <html lang="ja">
 *         <head>
 *           <DesignTokens
 *             primaryColor="#E74C3C"
 *             primaryColorHover="#C0392B"
 *             secondaryColor="#F59E0B"
 *             secondaryColorHover="#D97706"
 *           />
 *         </head>
 *         <body>{children}</body>
 *       </html>
 *     )
 *   }
 */
export function DesignTokens({
  primaryColor,
  primaryColorHover,
  secondaryColor,
  secondaryColorHover,
}: DesignTokensProps) {
  const parts: string[] = []
  if (primaryColor) {
    parts.push(
      `--color-primary:${primaryColor};`,
      `--color-primary-hover:${primaryColorHover ?? primaryColor};`,
    )
  }
  if (secondaryColor) {
    parts.push(
      `--color-secondary:${secondaryColor};`,
      `--color-secondary-hover:${secondaryColorHover ?? secondaryColor};`,
    )
  }
  const overrideCSS = parts.length ? `:root{${parts.join("")}}` : ""

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: TOKENS_CSS }} />
      <style dangerouslySetInnerHTML={{ __html: GLOBALS_CSS }} />
      {overrideCSS && <style dangerouslySetInnerHTML={{ __html: overrideCSS }} />}
    </>
  )
}
