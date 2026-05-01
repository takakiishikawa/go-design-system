@AGENTS.md

# go-design-system — CLAUDE.md

## プロジェクト概要
Goシリーズ全プロダクト（NativeGo, KenyakuGo, TaskGo, CookGo）が依存する共通UIコンポーネントライブラリ。
- 全Goで一貫したUX
- デザイン修正コストの最小化
- 新規Go立ち上げ時の速度向上
- 落ち着いた、情報密度に耐える、機能美のあるUI（Atlassian / Linear / Backlog 系トーン）

## 技術スタック
- React 18/19 + TypeScript 6
- Tailwind CSS v3/v4 両対応
- Radix UI Primitives（内部使用、外には公開しない）
- shadcn/ui ベースのコンポーネント
- lucide-react（統一アイコン）
- ビルド: `tsup`（ESM/CJS/DTS 出力）

## 配布形態
GitHub 直 install（npm registry に publish しない）:
```json
"dependencies": {
  "@takaki/go-design-system": "github:takakiishikawa/go-design-system"
}
```

## デザイン原則
- 角丸は控えめ（3〜4px）
- シャドウより border で境界を作る
- ニュートラルカラーが主役、色は意味のある場所だけ
- 4px グリッドの余白
- 見出しは semibold 優先（bold は控えめに）
- タイポグラフィスケールは絞る

## トークン構造（3層）
1. **プリミティブトークン** — 生の値（例: `--space-4: 16px`）
2. **セマンティックトークン** — 意味を持つ値（例: `--color-primary`）
3. **コンポーネント** — セマンティックを参照

各 Go で上書きするのは原則 `--color-primary` / `--color-primary-hover` のみ。
それだけで `bg-primary` / `text-primary` / `ring` 等、全コンポーネントに反映される。

## 採用している shadcn/ui blocks
- sidebar-01（サイドバー、全Go共通）
- dashboard-01（ダッシュボード画面）
- login-01（認証画面、Google OAuth）

加えて Goシリーズ独自テンプレート: `ConceptPage`（各Goのコンセプト説明画面）

## 重要なルール（絶対遵守）
1. **フレームワーク非依存を維持する** — このリポジトリは Goシリーズ全体で共有される共通UIライブラリ。Next.js / Remix / 他のメタフレームワーク固有のモジュール（`next/dynamic`, `next/link`, `next/image`, `next/router`, `next/headers`, `@vercel/analytics`, `@vercel/og` など）を **import / dependencies / devDependencies** に入れてはならない。SSR最適化は consumer 側の責務
2. **peerDependencies に列挙された以外のフレームワーク依存を増やさない** — `react`, `react-dom`, `tailwindcss` 以外のフレームワークレベル依存は NG
3. **Breaking change は慎重に** — 全 Go が依存するため後方互換性を維持。propsの名前・型は変更しない
4. **セマンティックバージョニング厳守** — patch / minor / major を正確に判断
5. **Tailwind v4 を前提に動かす** — 各 Go は Tailwind v4 を使用。v3 互換も維持

## "use client" について
クライアント API（`useState`, `useEffect`, event handlers 等）を使うコンポーネントには
ファイル先頭に `"use client"` を付ける。これで Next.js App Router の Server Component
ビルドでも安全に使える。`next/dynamic({ ssr: false })` でラップする必要は無い
（それはフレームワーク依存を増やすだけ）。

## consumer 側の使い方

### import
```tsx
// app/layout.tsx か app/globals.css 経由で
import "@takaki/go-design-system/tokens.css"
import "@takaki/go-design-system/globals.css"  // shadcn/ui 変数のブリッジ

import { Button, Card, Sidebar } from "@takaki/go-design-system"
```

### プライマリカラーの上書き
各 Go の `globals.css` で:
```css
:root {
  --color-primary: #E74C3C;       /* 各Goのブランドカラー */
  --color-primary-hover: #C0392B;
}
```

### Vercel 自動更新設定
各 Go の `vercel.json` に以下を設定し、デプロイ時に go-design-system を自動更新:
```json
{
  "buildCommand": "npm update @takaki/go-design-system && npm run build"
}
```

### アイコン
`lucide-react` を直接 import。`@takaki/go-design-system` は `lucide-react` を peerDependency として要求するので、consumer 側でバージョンを揃える。

## ビルドの仕組み
- `tsup` で ESM/CJS/DTS を `dist/` に出力
- `prepare` スクリプトで自動ビルドされるため、consumer が `npm install` した時点でビルドが走る → import エラーがあるとここで失敗し、**全 Go のデプロイを止める**
- DTS ビルドは型解決のため peerDeps 外のモジュールを参照すると失敗する

## レビュー観点（PR 作成・レビュー時のチェック）
- [ ] 新規 import に `next/*`, `@vercel/*` 等のフレームワーク依存が含まれていないか
- [ ] `dependencies` / `devDependencies` に上記が混入していないか
- [ ] `dynamic()` 等のフレームワーク API でラップしていないか
- [ ] `"use client"` を必要なファイルに付けているか
- [ ] 既存コンポーネントの props 互換性を壊していないか

## 開発コマンド
```bash
npm install
npm run build       # tsup でビルド
npm run dev         # tsup --watch
npm run type-check  # tsc --noEmit
npm run lint        # eslint src
```

## 技術スタックの更新方針
- **Goシリーズの起点**: ここで Next.js/React/Tailwind 互換のバージョンを上げ、各 Go アプリが追従する
- patch / minor: 随時 `npm update`。各 Go は `vercel.json` の `buildCommand` で自動取り込み
- major: 全 Go の互換性を確認してから上げる。breaking change がある場合はメジャーバージョンを上げ、CHANGELOG を書く
- React 19 / Tailwind v4 への対応は完了済み。v3 互換も保つ
- deprecated になった Radix UI コンポーネントは早めに置き換え
- `npm outdated` を月1で確認

## セキュリティ
- **依存の脆弱性**: `npm audit` を定期実行。high 以上は即解決。consumer の脆弱性も連動して上がるので軽視しない
- **公開範囲**: Private repository。ライセンスは shadcn/ui (MIT) ベース
- **xss/サニタイズ**: 内部で `dangerouslyInnerHTML` を使う場合は consumer から渡された値を必ずサニタイズ。原則使わない
- **依存追加時のチェック**: 新規ライブラリは npm registry の weekly download / 最終更新日 / 既知 CVE を確認してから追加
