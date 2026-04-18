# go-design-system

Goシリーズ（NativeGo, CareGo, KenyakuGo, TaskGo, CookGo, PhysicalGo）の共通デザインシステム。

## 目的

- 全Goで一貫したUX
- デザイン修正コストの最小化
- 新規Go立ち上げ時の速度向上
- 落ち着いた、情報密度に耐える、機能美のあるUI

## 技術基盤

- **shadcn/ui** (MIT License) - ベースコンポーネントライブラリ
- **Radix UI** - アクセシビリティ基盤
- **Tailwind CSS** - スタイリング
- **lucide-react** - 統一アイコンライブラリ
- **CSS変数** - 3層トークン構造（プリミティブ → セマンティック → コンポーネント）

## デザイン原則

- 角丸は控えめ（3〜4px）
- シャドウより border で境界を作る
- ニュートラルカラーが主役、色は意味のある場所だけ
- 4pxグリッドの余白
- 見出しは semibold 優先（bold は控えめに）
- タイポグラフィスケールは絞る

## 各Goでの使い方

### インストール

各Goの `package.json` に以下を追加：

```json
"dependencies": {
  "@takaki/go-design-system": "github:takakiishikawa/go-design-system"
}
```

```bash
npm install
```

### tokens.css の読み込み

各Goの `app/layout.tsx`（Next.js App Router）で：

```tsx
import '@takaki/go-design-system/tokens.css'
import '@takaki/go-design-system/globals.css' // shadcn/ui変数のブリッジ（shadcnコンポーネントを使う場合）
```

### コンポーネントのimport

```tsx
import { Button, Card, Sidebar } from '@takaki/go-design-system'
```

### プライマリカラーの上書き

各Goの `globals.css` で：

```css
:root {
  --color-primary: #E74C3C;       /* 各Goのブランドカラー */
  --color-primary-hover: #C0392B;
}
```

この2行だけで `bg-primary` / `text-primary` / `ring` 等、全コンポーネントに反映される。

### アイコン

lucide-react を直接importして使う：

```tsx
import { Zap, Heart } from 'lucide-react'
```

### Vercel 自動更新設定

各Goの `vercel.json` に以下を設定し、デプロイ時に go-design-system を自動更新：

```json
{
  "buildCommand": "npm update @takaki/go-design-system && npm run build"
}
```

## トークン構造

3層で管理：

1. **プリミティブトークン** — 生の値（`--space-4: 16px`）
2. **セマンティックトークン** — 意味を持つ値（`--color-primary`）
3. **コンポーネント** — セマンティックを参照

各Goで上書き可能なのは `--color-primary` と `--color-primary-hover` のみ。

## 採用している shadcn/ui blocks

- sidebar-01（サイドバー、全Go共通）
- dashboard-01（ダッシュボード画面）
- login-01（認証画面、Google OAuth）

## Goシリーズ独自テンプレート

- ConceptPage（各Goのコンセプト説明画面）

## ライセンス

Private repository.  
Based on shadcn/ui (MIT License).
