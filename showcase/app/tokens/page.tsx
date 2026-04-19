import { Separator } from "@takaki/go-design-system"

interface ColorSwatchProps {
  name: string
  variable: string
  value?: string
  textClass?: string
}

function ColorSwatch({ name, variable, textClass = "text-white" }: ColorSwatchProps) {
  return (
    <div className="flex flex-col gap-1">
      <div
        className={`flex h-12 w-32 items-end rounded-md px-2 pb-1 ${textClass}`}
        style={{ backgroundColor: `var(${variable})` }}
      >
        <span className="text-xs font-mono opacity-80">{variable}</span>
      </div>
      <p className="text-xs text-muted-foreground">{name}</p>
    </div>
  )
}

function SpaceSwatch({ token, px }: { token: string; px: string }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="rounded bg-primary/40"
        style={{ width: `var(${token})`, height: "var(--space-4)" }}
      />
      <div>
        <p className="text-xs font-mono text-foreground">{token}</p>
        <p className="text-xs text-muted-foreground">{px}</p>
      </div>
    </div>
  )
}

function RadiusSwatch({ token, label }: { token: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className="h-12 w-12 border-2 border-primary bg-primary/10"
        style={{ borderRadius: `var(${token})` }}
      />
      <p className="text-xs font-mono text-foreground">{token}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  )
}

export default function TokensPage() {
  return (
    <div className="flex flex-col gap-8 py-4">
      <div>
        <h1 className="text-xl font-bold text-foreground">デザイントークン</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Goシリーズ共通の CSS カスタムプロパティ一覧。<code className="rounded bg-surface-subtle px-1 font-mono text-xs">tokens.css</code> で定義されています。
        </p>
      </div>

      {/* Primary */}
      <section className="flex flex-col gap-3">
        <h2 className="text-base font-semibold text-foreground">プライマリカラー</h2>
        <p className="text-xs text-muted-foreground">各Goで <code className="font-mono">--color-primary</code> と <code className="font-mono">--color-secondary</code> を上書きすることで変更できます。</p>
        <div className="flex flex-wrap gap-4">
          <ColorSwatch name="Primary" variable="--color-primary" />
          <ColorSwatch name="Primary Hover" variable="--color-primary-hover" />
          <ColorSwatch name="Secondary" variable="--color-secondary" />
          <ColorSwatch name="Secondary Hover" variable="--color-secondary-hover" />
        </div>
        <p className="text-xs text-muted-foreground">
          <code className="font-mono">DesignTokens</code> コンポーネントで <code className="font-mono">secondaryColor</code> props を渡すことで各Goのセカンダリカラーを設定できます。
        </p>
        <Separator />
      </section>

      {/* Semantic colors */}
      <section className="flex flex-col gap-3">
        <h2 className="text-base font-semibold text-foreground">セマンティックカラー</h2>
        <div className="flex flex-wrap gap-4">
          <ColorSwatch name="Background" variable="--color-background" textClass="text-foreground" />
          <ColorSwatch name="Surface" variable="--color-surface" textClass="text-foreground" />
          <ColorSwatch name="Surface Subtle" variable="--color-surface-subtle" textClass="text-foreground" />
          <ColorSwatch name="Text Primary" variable="--color-text-primary" />
          <ColorSwatch name="Text Secondary" variable="--color-text-secondary" />
          <ColorSwatch name="Border Default" variable="--color-border-default" textClass="text-foreground" />
        </div>
        <Separator />
      </section>

      {/* Status colors */}
      <section className="flex flex-col gap-3">
        <h2 className="text-base font-semibold text-foreground">ステータスカラー</h2>
        <div className="flex flex-wrap gap-4">
          <ColorSwatch name="Success" variable="--color-success" />
          <ColorSwatch name="Success Subtle" variable="--color-success-subtle" textClass="text-foreground" />
          <ColorSwatch name="Warning" variable="--color-warning" />
          <ColorSwatch name="Warning Subtle" variable="--color-warning-subtle" textClass="text-foreground" />
          <ColorSwatch name="Danger" variable="--color-danger" />
          <ColorSwatch name="Danger Subtle" variable="--color-danger-subtle" textClass="text-foreground" />
          <ColorSwatch name="Info" variable="--color-info" />
          <ColorSwatch name="Info Subtle" variable="--color-info-subtle" textClass="text-foreground" />
        </div>
        <Separator />
      </section>

      {/* Spacing */}
      <section className="flex flex-col gap-3">
        <h2 className="text-base font-semibold text-foreground">スペーシング（4px グリッド）</h2>
        <div className="flex flex-col gap-2">
          <SpaceSwatch token="--space-1" px="4px" />
          <SpaceSwatch token="--space-2" px="8px" />
          <SpaceSwatch token="--space-3" px="12px" />
          <SpaceSwatch token="--space-4" px="16px" />
          <SpaceSwatch token="--space-5" px="20px" />
          <SpaceSwatch token="--space-6" px="24px" />
          <SpaceSwatch token="--space-8" px="32px" />
          <SpaceSwatch token="--space-10" px="40px" />
        </div>
        <Separator />
      </section>

      {/* Border radius */}
      <section className="flex flex-col gap-3">
        <h2 className="text-base font-semibold text-foreground">角丸（控えめなデザイン）</h2>
        <div className="flex flex-wrap gap-6">
          <RadiusSwatch token="--radius-sm" label="3px" />
          <RadiusSwatch token="--radius-md" label="4px" />
          <RadiusSwatch token="--radius-lg" label="6px" />
          <RadiusSwatch token="--radius-full" label="9999px" />
        </div>
        <Separator />
      </section>

      {/* Typography */}
      <section className="flex flex-col gap-4">
        <h2 className="text-base font-semibold text-foreground">タイポグラフィ</h2>
        <div className="flex flex-col gap-3">
          {[
            { token: "--text-xs", size: "12px", label: "xs — ラベル・補足" },
            { token: "--text-sm", size: "14px", label: "sm — 本文小" },
            { token: "--text-base", size: "16px", label: "base — 本文" },
            { token: "--text-lg", size: "18px", label: "lg — 強調テキスト" },
            { token: "--text-xl", size: "20px", label: "xl — セクション見出し" },
            { token: "--text-2xl", size: "24px", label: "2xl — ページ見出し小" },
            { token: "--text-3xl", size: "32px", label: "3xl — ページ見出し" },
            { token: "--text-4xl", size: "40px", label: "4xl — Hero" },
          ].map(({ token, size, label }) => (
            <div key={token} className="flex items-baseline gap-4">
              <span
                className="text-foreground font-medium"
                style={{ fontSize: `var(${token})` }}
              >
                あABCabc
              </span>
              <div>
                <span className="text-xs font-mono text-muted-foreground">{token}</span>
                <span className="ml-2 text-xs text-muted-foreground">({size}) — {label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
