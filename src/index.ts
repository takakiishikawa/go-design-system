// --- Styles ---
// 各Goプロダクトのエントリーで import "@takaki/go-design-system/styles" としてください。
// package.json の exports["./styles"] が src/styles/tokens.css を指しています。

// --- UI Components (shadcn/ui) ---
// npx shadcn@2 add <component> で追加後、ここに export を追記する
// export * from "./components/ui/button";
// export * from "./components/ui/input";

// --- Templates (Goシリーズ共通テンプレート) ---
// export * from "./templates/SomeTemplate";

// --- Utilities ---
export { cn } from "./lib/utils";
