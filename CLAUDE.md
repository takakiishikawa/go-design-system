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
   - 各Goで上書き可能なのは `--color-primary` と `--color-primary-hover` のみ（セカンダリカラーは廃止）

5. **アクセシビリティ**
   - Radix UIベースのコンポーネントを改変しない
   - `aria-label`, `role` 等を削除しない
   - キーボード操作を壊さない

## デザイン哲学：サーフェスは黒子、コンテンツが主役

Atlassianの設計原則「UIの領域を差別化するには、色ではなく whitespace と border を使う」を踏襲。

- **背景は基本白**（サイドバー・ボディ・カード、全て `#ffffff`）
- **領域区切りは whitespace と border のみ**（背景色で区切らない）
- **shadow は「浮き上がる要素」限定**（Dialog・Popover・Dropdown・Tooltip等のみ）
- **色は「意味を伝える時」だけ使う**（CTA・ステータス・警告・リンク・アイコンアクセント）
- **`--color-surface-subtle` は sunken 例外用**（kanban 列背景等、明確なグルーピングが必要な場面のみ）
- ライトモードはこの哲学に従う。**ダークモードは多段サーフェス**で輝度差を使った elevation を維持する

## Goシリーズの設計方針

- 落ち着いた、情報密度に耐える、機能美のあるUI
- 角丸は控えめ（3〜4px）
- shadcn/ui（New Yorkスタイル）をベースに、上記デザイン哲学に沿うようトークンで調整
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

## Banner と Alert の使い分け

- **Alert**（`<Alert>`）: ページ内のインラインフィードバック。フォームバリデーション結果・操作の結果通知など、コンテンツ中に埋め込む
- **Banner**（`<Banner>`）: ページ上部または全体に関わるシステム通知。メンテナンス告知・機能リリース案内・重要なアカウント警告など、全ページで表示すべき情報
- `variant` は共通: `default` / `info` / `success` / `warning` / `destructive`
- **ルール**: 1アクションに対してどちらか1つだけ使う。BannerとAlertを同時に同じ意味で使わない

## `--color-surface-subtle` の使用ガイドライン

`--color-surface-subtle`（`#f7f8f9`）は「sunken」表現専用。以下の場合のみ使う:

- kanbanボード等の列背景（カード群をグループとして認識させる）
- テーブルのストライプ行（`tr:nth-child(even)`）
- コードブロック・引用ブロック背景
- フォームの「読み取り専用」フィールド背景

**使ってはいけない場面**:
- サイドバー・ヘッダー・ボディの背景（白を維持する）
- カードの背景（白を維持する）
- 通常の区切り（borderを使う）

## フォームレイアウト規約

- `FormLayout` > `FormSection` > `FormRow` > `FormField` の階層で構成
- `FormActions` は `<form>` の末尾に配置。Cancel を左、Submit を右
- モーダル内フォームも同じ規約。DialogFooter と FormActions を混在させない
- ラベルはフィールドの上（`flex-col`）、インラインラベルは使わない

## 作業の進め方

- 大きな変更は、まず設計意図を説明してから実装
- 既存コンポーネントの大幅な改修は、影響範囲（どのGoが使っているか）を先に確認
- テンプレート（`templates/*`）の変更は、各Goのマイグレーションコストも考慮
