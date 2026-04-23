import * as React from "react";
import { TOKENS_CSS, GLOBALS_CSS } from "./design-tokens-css";

export interface DesignTokensProps {
  /** このGoのプライマリカラー（例: "#0052CC"） */
  primaryColor?: string;
  /** ホバー時のプライマリカラー。省略時は primaryColor をそのまま使用 */
  primaryColorHover?: string;
}

/**
 * Goシリーズ共通デザイントークンを <style> タグとして注入するコンポーネント。
 *
 * Tailwind v4 + Turbopack 環境では CSS ファイルを node_modules から
 * @import すると PostCSS エラーが発生するため、このコンポーネントを使う。
 *
 * 使い方（app/layout.tsx の <head> 内）:
 *   <DesignTokens primaryColor="#0052CC" primaryColorHover="#0747A6" />
 */
export function DesignTokens({
  primaryColor,
  primaryColorHover,
}: DesignTokensProps) {
  const overrideCSS = primaryColor
    ? `:root{--color-primary:${primaryColor};--color-primary-hover:${primaryColorHover ?? primaryColor};}`
    : "";

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: TOKENS_CSS }} />
      <style dangerouslySetInnerHTML={{ __html: GLOBALS_CSS }} />
      {overrideCSS && (
        <style dangerouslySetInnerHTML={{ __html: overrideCSS }} />
      )}
    </>
  );
}
