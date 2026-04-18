# @takaki/go-design-system

NativeGo / CareGo / KenyakuGo / TaskGo / CookGo / PhysicalGo など、**Goシリーズ全プロダクト共通のデザインシステム**です。

shadcn/ui をベースにした React コンポーネントライブラリと、Goシリーズ固有のテンプレートを提供します。

---

## ディレクトリ構造

```
src/
├── components/
│   └── ui/          # shadcn/ui コンポーネント（Button, Input, Dialog など）
├── templates/       # Goシリーズ共通テンプレート（画面レイアウトなど）
├── styles/
│   └── tokens.css   # CSS変数トークン（カラー・ラジウスなど）
├── lib/
│   └── utils.ts     # cn() などユーティリティ関数
└── index.ts         # 全エクスポートの集約
```

---

## 各GoプロダクトからのImport方法

### 1. `package.json` に追加

```json
{
  "dependencies": {
    "@takaki/go-design-system": "github:takaki/go-design-system"
  }
}
```

### 2. CSSトークンをインポート（`_app.tsx` や `layout.tsx` など）

```tsx
import "@takaki/go-design-system/styles";
```

### 3. コンポーネントを使用

```tsx
import { Button, cn } from "@takaki/go-design-system";

export function MyPage() {
  return <Button variant="outline">保存</Button>;
}
```

### 4. tailwind.config でコンテンツパスを追加

各Goプロダクトの `tailwind.config.ts` に以下を追加してください（ビルド済みCSSを使わずTailwindクラスを直接使う場合）：

```ts
content: [
  // ... 既存のパス
  "./node_modules/@takaki/go-design-system/dist/**/*.js",
],
```

---

## コンポーネント追加・修正ルール

### shadcn/uiコンポーネントの追加

このリポジトリで `shadcn/ui` CLI を実行してコンポーネントを追加します：

```bash
npx shadcn@latest add button
```

追加後、`src/index.ts` に export を追記してください：

```ts
export * from "./components/ui/button";
```

### Goシリーズ共通テンプレートの追加

`src/templates/` に配置し、`src/index.ts` からエクスポートしてください。

### デザイントークンの変更

`src/styles/tokens.css` のCSS変数を編集します。変更は全Goプロダクトに影響するため、必ずチームに共有してください。

### ビルド

```bash
npm run build
```

`dist/` に出力されます。各Goプロダクトが参照するのはこの `dist/` です。

---

## 開発

```bash
npm install
npm run dev   # watch モードでビルド
npm run type-check
```
