# AGENTS.md — go-design-system

このリポジトリは Goシリーズ全プロダクトの共通UIコンポーネントライブラリ。
**フレームワーク非依存**であることが設計上の絶対要件。

## エージェントが守るべき原則

### 1. フレームワーク固有モジュールを import しない
以下は **絶対に** import / dependencies / devDependencies に追加しない:

- `next/*` — `next/dynamic`, `next/link`, `next/image`, `next/router`, `next/headers` 等すべて
- `@vercel/*` — `@vercel/analytics`, `@vercel/og` 等すべて
- React Router (`react-router`, `react-router-dom`)
- Remix (`@remix-run/*`)
- Expo (`expo-*`)、React Native (`react-native`)

これらが必要な処理は **consumer 側（各 Go アプリ）の責務**。
ライブラリ側で吸収しようとすると tsup の DTS ビルドが peerDeps に無いモジュールを
解決できず破壊される（実例: 2026-04-24, MetaGo PR #7 が `next/dynamic` を混入し、
依存する全 Go の Vercel デプロイが連鎖的に失敗）。

### 2. SSR 関連の最適化は consumer 側で
recharts のような「SSR で動かない」ライブラリは、ライブラリ内で `dynamic({ ssr: false })`
ラップせず、**素直に static import する**。consumer 側が必要なら自前で
`dynamic(() => import('@takaki/go-design-system').then(m => m.ChartArea), { ssr: false })`
する。クライアント API を使うコンポーネントは `"use client"` ディレクティブだけ付ける。

### 3. 新しいライブラリを追加する前に
- 既存の `peerDependencies` / `dependencies` で代替できないか確認
- 追加するなら、それがフレームワーク非依存か確認
- フレームワークレベルの最適化が欲しい場合は consumer 側に書く

### 4. ビルドの仕組み
- `tsup` で ESM/CJS/DTS を `dist/` に出力
- `prepare` スクリプトで自動ビルドされるため、consumer が `npm install` した時点で
  ビルドが走る → import エラーがあるとここで失敗し、**全 Go のデプロイを止める**
- DTS ビルドは型解決のため peerDeps 外のモジュールを参照すると失敗する

## レビュー観点

エージェントが PR を作る／レビューする際:

- [ ] 新規 import に `next/*`, `@vercel/*` 等のフレームワーク依存が含まれていないか
- [ ] `dependencies` / `devDependencies` に上記が混入していないか
- [ ] `dynamic()` 等のフレームワーク API でラップしていないか
- [ ] `"use client"` を必要なファイルに付けているか
