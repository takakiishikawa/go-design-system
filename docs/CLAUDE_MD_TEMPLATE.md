# CLAUDE.md

このプロダクトは **Goシリーズ** の一員です。  
Goシリーズ共通のデザインシステムは `@takaki/go-design-system` リポで管理されています。

## 絶対に守るルール（最重要）

### 1. UIコンポーネントは必ず @takaki/go-design-system から import する

- ✅ 正しい：`import { Button, Card } from '@takaki/go-design-system'`
- ❌ NG：独自に `components/ui/button.tsx` を作る
- ❌ NG：shadcn/ui CLI で直接コンポーネントを追加する（このプロダクトには不要）

### 2. 必要なコンポーネントがない場合

独自に作らず、以下のいずれかを選ぶ：
- 既存コンポーネントの組み合わせで実現できないか検討
- どうしても必要な場合は、go-design-systemリポに追加する旨を明記して作業を止める

独自実装は絶対にしない。

### 3. デザイントークンの上書き禁止

許可されている上書き：
- `--color-primary`（このプロダクトのブランドカラー）
- `--color-primary-hover`

禁止されている上書き：
- 色（上記以外全て）
- 角丸（`--radius-*`）
- フォントサイズ（`--text-*`）
- 余白（`--space-*`）
- シャドウ（`--shadow-*`）

### 4. className の使用範囲

許可：
- レイアウト（`flex`, `grid`, `gap`, `justify-*`, `items-*`）
- 配置（`margin`, `padding` でトークン値を使う場合）
- レスポンシブ制御（`md:`, `lg:`）

禁止：
- 色の直接指定（`bg-red-500`, `text-blue-600` など）
- 固定値の角丸（`rounded-lg` など、トークン経由で使う）
- 独自のシャドウ
- カスタムフォントサイズ

### 5. アイコンは lucide-react に統一

- ✅ `import { Zap } from 'lucide-react'`
- ❌ 他のアイコンライブラリを追加しない

### 6. レイアウトパターンはテンプレートから派生させる

新規画面を作る時：
- ダッシュボード系 → `DashboardPage` テンプレートから派生
- サイドバー → `AppSidebar` をそのまま使用
- 認証画面 → `LoginPage` テンプレート
- コンセプト画面 → `ConceptPage` テンプレート

ゼロからレイアウトを組まない。

### 7. AppSwitcher の設定

`AppSidebar` には `AppSwitcher` が組み込まれています。以下の設定を `app/layout.tsx` で行ってください：

```tsx
const apps = [
  { name: 'NativeGo', url: 'https://native-go.vercel.app', color: '#E74C3C' },
  { name: 'CareGo',   url: 'https://care-go.vercel.app',   color: '#22C55E' },
  // ... 全Goを記述
]

<AppSidebar currentApp="NativeGo" apps={apps} />
```

## CSS の読み込み方（Tailwind v4 + Turbopack 必須）

**⚠️ `layout.tsx` に CSS を直接 import してはいけない。** Turbopack が node_modules の CSS を PostCSS で処理しようとしてクラッシュする。

**正しい方法：`app/globals.css` に `@import` で書く**

```css
/* app/globals.css */
@import "tailwindcss";
@import "@takaki/go-design-system/tokens.css";
@import "@takaki/go-design-system/globals.css";

:root {
  --color-primary: {PRIMARY_COLOR};
  --color-primary-hover: {PRIMARY_COLOR_HOVER};
}
```

```tsx
/* app/layout.tsx — globals.css のみ import する */
import './globals.css'
```

Tailwind がコンポーネントのクラス名をスキャンできるよう `@source` も追加：

```css
@import "tailwindcss";
@source "../node_modules/@takaki/go-design-system/dist";
@import "@takaki/go-design-system/tokens.css";
@import "@takaki/go-design-system/globals.css";
```

## デザインシステムの更新への追従

このプロダクトは `@takaki/go-design-system` に依存しており、デザインシステムの更新はVercelのBuild Commandで自動反映されます：

```json
// vercel.json
{
  "buildCommand": "npm update @takaki/go-design-system && npm run build"
}
```

ローカル開発時に最新を取りに行きたい場合：

```bash
npm update @takaki/go-design-system
```

## プライマリカラーの決定ルール

各Goのプライマリカラー（および必要に応じてセカンダリカラー）は、以下の判断材料を総合してClaude Codeが自律的に決定する：

1. このプロダクトのコンセプト
   - コアバリュー
   - 解決している課題
   - ターゲットユーザーの心理状態

2. 既存のデザインで使われていた色（あれば参照）

3. go-design-system のデザイン原則（角丸控えめ、ニュートラル主役、機能美）

事前にTakakiの判断を仰ぐ必要はない。コンセプト起点で適切に判断し、globals.css に適用する。

選定理由は CLAUDE.md の「プライマリカラー」セクションに簡潔に記載し、将来の見直し時に参照できるようにする。

## このプロダクト固有のルール

（各Goでカスタマイズする領域）

- プロダクト名：`{PRODUCT_NAME}`
- プライマリカラー：`{PRIMARY_COLOR}`
- ドメイン：`{DOMAIN}`
- データモデルの概要：`{DATA_MODEL}`
- 外部連携：`{EXTERNAL_INTEGRATIONS}`

## 作業時の判断基準

1. 新しいUIが必要 → まず `@takaki/go-design-system` に該当コンポーネントがあるか確認
2. ある → それを使う
3. ない → 既存の組み合わせで実現できないか検討
4. それも無理 → 作業を止めて、go-design-system 側への追加を提案

独自実装は最後の手段であり、原則として行わない。
