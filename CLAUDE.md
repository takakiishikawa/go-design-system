@AGENTS.md

# go-design-system — CLAUDE.md

## プロジェクト概要
goシリーズ全プロダクトが依存する共通UIコンポーネントライブラリ。Atlassian風デザインで統一感を提供。

## 技術スタック
- React + TypeScript
- Tailwind CSS
- Radix UI Primitives（内部使用）
- shadcn/ui ベース

## 重要なルール
1. **Breaking changeは慎重に** — 全goが依存するため後方互換性を維持
2. **セマンティックバージョニング厳守** — patch/minor/majorを正確に判断
3. **コンポーネントのAPIを安定させる** — propsの名前・型は変更しない
4. **Tailwind v4を前提** — 各goはTailwind v4を使用している

## MetaGo連携
MetaGoがこのリポジトリを中央管理しています。
- **L1（自動マージ）**: ESLint修正、patch/minor依存更新
- **L2（承認待ち）**: major依存更新
