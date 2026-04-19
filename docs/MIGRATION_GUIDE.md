# 各Goへのマイグレーションガイド

このドキュメントは、既存のGoプロダクトをgo-design-systemベースに移行する手順をまとめたものです。

## 前提

- go-design-system リポがmainにpush済み
- 対象のGoは既にshadcn/ui + TailwindCSS で動いている
- **Next.js App Router + Tailwind v4 + Turbopack** を使用（各Goの標準スタック）

---

## マイグレーション手順

### Step 1: 依存関係の追加

対象Goの `package.json` を開き、`dependencies` に追加：

```json
"@takaki/go-design-system": "github:takakiishikawa/go-design-system"
```

```bash
npm install
```

### Step 2: CSS の読み込み（Tailwind v4 対応）

**⚠️ Tailwind v4 + Turbopack では `layout.tsx` に CSS import を書いてはいけません。**  
Turbopack が node_modules の CSS を PostCSS 経由で処理しようとしてクラッシュします。

代わりに、**Tailwind が処理する CSS エントリファイル**（通常 `app/globals.css`）に `@import` で読み込みます：

```css
/* app/globals.css */
@import "tailwindcss";
@import "@takaki/go-design-system/tokens.css";
@import "@takaki/go-design-system/globals.css";

/* このGoのプライマリカラー（Step 3 で設定） */
:root {
  --color-primary: #E74C3C;
  --color-primary-hover: #C0392B;
}
```

`app/layout.tsx` には **`globals.css` のみ** を import します：

```tsx
// app/layout.tsx
import './globals.css'  // ← これだけ。tokens.css / globals.css の直接 import は書かない

import { AppLayout, AppSidebar } from '@takaki/go-design-system'
// ...
```

> **順序が重要です。**  
> `@import "tailwindcss"` → `tokens.css` → `globals.css` → プライマリカラー上書き の順を守ること。

### Step 3: プライマリカラーの設定

Step 2 の `app/globals.css` 内の `:root` に各Goのプライマリカラーを記述（既に含めた場合はスキップ）：

```css
:root {
  --color-primary: #E74C3C;       /* 該当Goの色 */
  --color-primary-hover: #C0392B;
}
```

### Step 4: 既存の components/ui/ の削除

対象Goの `components/ui/` ディレクトリを丸ごと削除：

```bash
rm -rf components/ui
```

> shadcn/ui コンポーネントは `@takaki/go-design-system` 経由で提供されるため、各Goが個別に持つ必要はありません。

### Step 5: import先の一括置換

プロジェクト全体で以下を置換（エディタの一括置換または `sed` で実行）：

| 置換前 | 置換後 |
|---|---|
| `from '@/components/ui/button'` | `from '@takaki/go-design-system'` |
| `from '@/components/ui/card'` | `from '@takaki/go-design-system'` |
| `from '@/components/ui/input'` | `from '@takaki/go-design-system'` |
| `from '@/components/ui/dialog'` | `from '@takaki/go-design-system'` |
| `from '@/components/ui/...'` | `from '@takaki/go-design-system'` |

```bash
# sed による一括置換の例（macOS）
find . -name '*.tsx' -not -path '*/node_modules/*' | \
  xargs sed -i '' "s|from '@/components/ui/[^']*'|from '@takaki/go-design-system'|g"
```

> `import { A } from '...'` `import { B } from '...'` のように分散していた import が、  
> `import { A, B } from '@takaki/go-design-system'` に統合されます。

### Step 6: AppSidebar の設置

既存のサイドバーを `AppSidebar` に置き換え：

```tsx
// app/layout.tsx
import './globals.css'

import { AppLayout, AppSidebar } from '@takaki/go-design-system'

const apps = [
  { name: 'NativeGo',   url: 'https://native-go.vercel.app',   color: '#E74C3C' },
  { name: 'CareGo',     url: 'https://care-go.vercel.app',     color: '#22C55E' },
  { name: 'KenyakuGo',  url: 'https://kenyaku-go.vercel.app',  color: '#F59E0B' },
  { name: 'TaskGo',     url: 'https://task-go.vercel.app',     color: '#6366F1' },
  { name: 'CookGo',     url: 'https://cook-go.vercel.app',     color: '#10B981' },
  { name: 'PhysicalGo', url: 'https://physical-go.vercel.app', color: '#3B82F6' },
]

const navItems = [
  { title: 'ダッシュボード', url: '/' },
  {
    title: '設定',
    url: '#',
    items: [
      { title: 'プロフィール', url: '/settings/profile' },
    ],
  },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <AppLayout
          sidebar={
            <AppSidebar
              currentApp="NativeGo"
              apps={apps}
              navItems={navItems}
            />
          }
        >
          {children}
        </AppLayout>
      </body>
    </html>
  )
}
```

### Step 7: Vercel Build Command の設定

対象Goリポに `vercel.json` を作成（既にあれば `buildCommand` を追記）：

```json
{
  "buildCommand": "npm update @takaki/go-design-system && npm run build"
}
```

> これにより、デプロイのたびにgo-design-systemの最新を自動取得します。

### Step 8: CLAUDE.md の配置

go-design-system の `docs/CLAUDE_MD_TEMPLATE.md` をコピーして、対象Goのルートに `CLAUDE.md` として配置。  
「このプロダクト固有のルール」セクションのプレースホルダーを埋める：

```bash
curl -o CLAUDE.md \
  https://raw.githubusercontent.com/takakiishikawa/go-design-system/main/docs/CLAUDE_MD_TEMPLATE.md
```

その後、以下を実際の値に置き換える：

| プレースホルダー | 設定例 |
|---|---|
| `{PRODUCT_NAME}` | `NativeGo` |
| `{PRIMARY_COLOR}` | `#E74C3C` |
| `{DOMAIN}` | `native-go.vercel.app` |
| `{DATA_MODEL}` | ユーザー・学習記録・単語帳 |
| `{EXTERNAL_INTEGRATIONS}` | Google OAuth, OpenAI API |

### Step 9: ビルド確認

```bash
npm run build
```

エラーがあれば import 漏れや型の不一致を修正してください。

### Step 10: ローカルでの見た目確認

```bash
npm run dev
```

以下を目視確認：

- [ ] サイドバーが表示される
- [ ] Apps切り替えドロップダウンが動作する
- [ ] プライマリカラーが該当Goの色になっている
- [ ] フォントサイズ・余白・角丸が共通デザインと統一されている
- [ ] ダークモードで崩れていない（対応している場合）

### Step 11: コミット & デプロイ

```bash
git add .
git commit -m "migrate: adopt go-design-system"
git push
```

Vercelが自動デプロイを開始します。本番での表示も確認してください。

---

## トラブルシューティング

### tokens.css の PostCSS エラー（Tailwind v4 + Turbopack）

```
Error: ./node_modules/@takaki/go-design-system/dist/styles/tokens.css
Import trace: ./app/layout.tsx
```

**原因：** `layout.tsx` に `import '@takaki/go-design-system/tokens.css'` を書いている。  
**修正：** Step 2 の通り、`app/globals.css` に `@import` で移動し、`layout.tsx` から削除する。

```css
/* ✅ 正しい: app/globals.css に @import で書く */
@import "tailwindcss";
@import "@takaki/go-design-system/tokens.css";
@import "@takaki/go-design-system/globals.css";
```

```tsx
/* ❌ NG: layout.tsx に直接 import しない */
import '@takaki/go-design-system/tokens.css'
import '@takaki/go-design-system/globals.css'
```

### 「型が合わない」エラー

go-design-system のバージョンが古い可能性があります。

```bash
npm update @takaki/go-design-system
```

### 「コンポーネントが見つからない」エラー

`@takaki/go-design-system` の `src/index.ts` でexportされているか確認してください。  
なければgo-design-system側への追加が必要です（自己実装は禁止）。

### スタイルが適用されない

`app/globals.css` の `@import` 順序を確認してください：

```css
/* ✅ 正しい順序 */
@import "tailwindcss";                                    /* 1番目 */
@import "@takaki/go-design-system/tokens.css";           /* 2番目 */
@import "@takaki/go-design-system/globals.css";          /* 3番目 */

:root {
  --color-primary: #E74C3C;  /* 4番目: プライマリカラー上書き */
}
```

### プライマリカラーが反映されない

`app/globals.css` の `:root` スコープで上書きしているか確認してください。  
`@import "@takaki/go-design-system/tokens.css"` より**後**に記述すること。

### Tailwind クラスが効かない（bg-primary 等）

`dist/index.js` がスキャン対象に含まれているか確認します。  
`next.config.ts` または Tailwind の設定で以下を追加：

```ts
// next.config.ts (Tailwind v4 の場合は globals.css に @source を追加)
```

```css
/* app/globals.css */
@import "tailwindcss";
@source "../node_modules/@takaki/go-design-system/dist";  /* 追加 */
@import "@takaki/go-design-system/tokens.css";
@import "@takaki/go-design-system/globals.css";
```
