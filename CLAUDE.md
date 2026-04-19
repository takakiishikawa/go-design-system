# CLAUDE.md

このリポはGoシリーズの共通デザインシステム。各GoがGit URL参照でimportして使う。

## 絶対に守るルール

1. **Next.js互換性を維持すること**
   - `useState`, `useEffect`, `onClick` などを使うコンポーネントは `"use client"` を付ける
   - `next/link` 等Next.js固有のモジュールに依存しない（LinkはpropsまたはasChildで受け取る）

2. **peerDependenciesで管理されているライブラリをdependenciesに移動しない**
   - `react`, `react-dom`, `tailwindcss`, `react-hook-form`, `zod`, `recharts`, `date-fns`, `lucide-react`
   - `@dnd-kit/core`, `@dnd-kit/sortable`, `@dnd-kit/utilities`, `react-dropzone`

3. **コンポーネント追加時**
   - shadcn/uiに既存のコンポーネントがある場合は必ずそれを使う（`npx shadcn@2 add <name>`）
   - 独自コンポーネントは `src/components/custom/` に配置
   - 必ず `src/index.ts` にエクスポートを追加
   - TypeScriptの型定義も必ず付ける

4. **トークン変更時**
   - `tokens.css` の変更は全Goに影響するため慎重に
   - セマンティックトークン名の変更は既存の全Goのimportに影響する
   - プリミティブトークンの追加はOK、削除は慎重に
   - 各Goで上書き可能なのは `--color-primary` と `--color-primary-hover` のみ

5. **アクセシビリティ**
   - Radix UIベースのコンポーネントを改変しない
   - `aria-label`, `role` 等を削除しない
   - キーボード操作を壊さない

## Goシリーズの設計思想

- 落ち着いた、情報密度に耐える、機能美のあるUI
- 角丸は控えめ（3〜4px）
- シャドウより border で境界を作る
- ニュートラルカラーが主役
- 4pxグリッドの余白
- 見出しは semibold 優先

## ダークモード対応

- 全コンポーネントはダークモードで崩れないこと
- `.dark` セレクタ配下のCSS変数で色を切り替える設計
- ダークモード固有のバグが出た場合、まず `tokens.css` の `.dark` を確認

## 日本語UI前提

- 全プロダクトが日本語UI
- `date-fns/locale/ja` を使った日付表示を想定
- フォントは Inter + システムフォントで日本語は各OSのシステム日本語フォントに任せる

## 採用している外部ライブラリ

- shadcn/ui（New Yorkスタイル）
- Radix UI
- lucide-react（アイコン）
- recharts（チャート）
- react-hook-form + zod（フォーム）
- date-fns（日付）
- Tailwind CSS
- @dnd-kit/core + @dnd-kit/sortable（ドラッグ&ドロップ）
- react-dropzone（ファイルアップロード）

新しい外部ライブラリを追加する前に、既存で代替できないか必ず確認。

## 作業の進め方

- 大きな変更は、まず設計意図を説明してから実装
- 既存コンポーネントの大幅な改修は、影響範囲（どのGoが使っているか）を先に確認
- テンプレート（`templates/*`）の変更は、各Goのマイグレーションコストも考慮
