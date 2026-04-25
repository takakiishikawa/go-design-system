@AGENTS.md

# go-design-system — CLAUDE.md

## プロジェクト概要
goシリーズ全プロダクトが依存する共通UIコンポーネントライブラリ。Atlassian風デザインで統一感を提供。

## 技術スタック
- React + TypeScript
- Tailwind CSS
- Radix UI Primitives（内部使用）
- shadcn/ui ベース

## 重要なルール（絶対遵守）
1. **フレームワーク非依存を維持する** — このリポジトリは Goシリーズ全体で
   共有される共通UIライブラリ。Next.js / Remix / 他のメタフレームワーク固有の
   モジュール（`next/dynamic`, `next/link`, `next/image`, `next/router`,
   `@vercel/analytics` など）を **import / dependencies / devDependencies** に
   入れてはならない。SSR最適化はconsumer側の責務。
2. **peerDependencies に列挙された以外のフレームワーク依存を増やさない** —
   `react`, `react-dom`, `tailwindcss` 以外のフレームワークレベル依存はNG。
3. **Breaking changeは慎重に** — 全goが依存するため後方互換性を維持
4. **セマンティックバージョニング厳守** — patch/minor/majorを正確に判断
5. **コンポーネントのAPIを安定させる** — propsの名前・型は変更しない
6. **Tailwind v4を前提** — 各goはTailwind v4を使用している

## "use client" について
クライアントAPI（`useState`, `useEffect`, event handlers 等）を使うコンポーネントには
ファイル先頭に `"use client"` を付ける。これによりNext.js App Routerの
Server Componentビルドでも安全に使える。`next/dynamic({ ssr: false })` でラップ
する必要は無い（それはフレームワーク依存を増やすだけ）。

## MetaGo連携
このリポジトリは tech-stack-compliance 自動修正の対象**外**（matrixから除外済み）。
- **L1（自動マージ）**: ESLint修正、patch/minor依存更新、デザインシステム違反修正
- **L2（承認待ち）**: major依存更新
- **対象外**: tech-stack-compliance v2.0 — フレームワーク非依存維持のため
