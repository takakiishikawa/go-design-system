# 各Goへのマイグレーションガイド

このドキュメントは、既存のGoプロダクトをgo-design-systemベースに移行する手順をまとめたものです。

## 前提

- go-design-system リポがmainにpush済み
- 対象のGoは既にshadcn/ui + TailwindCSS で動いている
- Next.js App Router を使用

## マイグレーション手順

### Step 1: 依存関係の追加

対象Goの `package.json` を開き、`dependencies` に追加：

```json
"@takaki/go-design-system": "github:takakiishikawa/go-design-system"
```

```bash
npm install
```

### Step 2: tokens.css の読み込み

`app/layout.tsx` の最上部で tokens.css と globals.css を読み込み：

```tsx
import '@takaki/go-design-system/tokens.css'
import '@takaki/go-design-system/globals.css'
import './globals.css'
```

> **順序が重要です。** `./globals.css` は最後に読み込むことで、プライマリカラーの上書きが正しく機能します。

### Step 3: プライマリカラーの設定

`app/globals.css` に各Goのプライマリカラーを記述：

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
import '@takaki/go-design-system/tokens.css'
import '@takaki/go-design-system/globals.css'
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
  // 各Goのナビ項目を定義
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
              currentApp="NativeGo"  // このGoのプロダクト名
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

### 「型が合わない」エラー

go-design-system のバージョンが古い可能性があります。

```bash
npm update @takaki/go-design-system
```

### 「コンポーネントが見つからない」エラー

`@takaki/go-design-system` の `src/index.ts` でexportされているか確認してください。  
なければgo-design-system側への追加が必要です（自己実装は禁止）。

### スタイルが適用されない

`tokens.css` が正しく読み込まれているか確認します。  
`app/layout.tsx` の import 順序をチェックしてください：

```tsx
// ✅ 正しい順序
import '@takaki/go-design-system/tokens.css'  // 1番目
import '@takaki/go-design-system/globals.css' // 2番目
import './globals.css'                         // 3番目（上書き用）
```

### プライマリカラーが反映されない

`globals.css` の `:root` スコープで上書きしているか確認してください。  
また、`tokens.css` の読み込みより**後**に `globals.css` を読み込む順序になっているかチェックしてください。

### tailwind.config.ts の content に go-design-system を追加する必要がある場合

Tailwind がビルド済み CSS を参照する場合は不要ですが、クラスが purge される場合は以下を追加します：

```ts
// tailwind.config.ts
content: [
  './app/**/*.{ts,tsx}',
  './components/**/*.{ts,tsx}',
  './node_modules/@takaki/go-design-system/dist/**/*.js', // 追加
],
```
