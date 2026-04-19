import * as React from "react"

import { Section } from "./section"
import { ScopeColumn } from "./scope-column"
import { ProductLogicFlow, type LogicStep } from "./product-logic-flow"
import { MetricCard } from "./metric-card"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ConceptPageProps {
  productName: string
  productLogo?: React.ReactNode
  /** 一言説明（例: "家計を守るツール"） */
  tagline: string
  /** コアメッセージ（1〜2文） */
  coreMessage: string
  /** コアバリュー */
  coreValue: string
  scope: {
    solve: string[]
    notSolve: string[]
  }
  productLogic: {
    steps: LogicStep[]
    /** ロジックが達成する目標 */
    outcome: string
  }
  /** 結果指標（KGI） */
  resultMetric: {
    title: string
    description: string
  }
  /** 行動指標（KPI） */
  behaviorMetrics: Array<{
    title: string
    description: string
  }>
}

export type { MetricCardProps } from "./metric-card"

// ---------------------------------------------------------------------------
// ConceptPage
// ---------------------------------------------------------------------------

export function ConceptPage({
  productName,
  productLogo,
  tagline,
  coreMessage,
  coreValue,
  scope,
  productLogic,
  resultMetric,
  behaviorMetrics,
}: ConceptPageProps) {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 md:px-8 md:py-14">
      <div className="flex flex-col gap-10">

        {/* ── Hero ───────────────────────────────────────────── */}
        <header className="flex flex-col gap-4">
          {/* ロゴ + プロダクト名 */}
          <div className="flex items-center gap-3">
            {productLogo && (
              <div
                className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-subtle"
                aria-hidden
              >
                {productLogo}
              </div>
            )}
            <h1
              className="font-bold text-foreground"
              style={{
                fontSize: "var(--text-3xl)",
                fontWeight: "var(--font-weight-bold)",
              }}
            >
              {productName}
            </h1>
          </div>

          {/* タグライン */}
          <p
            className="text-muted-foreground"
            style={{ fontSize: "var(--text-base)", color: "var(--color-text-secondary)" }}
          >
            {tagline}
          </p>

          {/* コアメッセージ */}
          <p
            className="max-w-2xl leading-relaxed text-foreground"
            style={{
              fontSize: "var(--text-xl)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--color-text-primary)",
            }}
          >
            {coreMessage}
          </p>
        </header>

        {/* ── コアバリュー ────────────────────────────────────── */}
        <Section title="コアバリュー">
          <p
            className="max-w-2xl leading-relaxed text-foreground"
            style={{ fontSize: "var(--text-base)", color: "var(--color-text-primary)" }}
          >
            {coreValue}
          </p>
        </Section>

        {/* ── スコープ ────────────────────────────────────────── */}
        <Section title="スコープ" description="このプロダクトが対象とする課題の範囲">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <ScopeColumn title="解決すること" items={scope.solve} type="solve" />
            <ScopeColumn title="解決しないこと" items={scope.notSolve} type="notSolve" />
          </div>
        </Section>

        {/* ── プロダクトロジック ──────────────────────────────── */}
        <Section
          title="プロダクトロジック"
          description="ユーザーの行動がどのように価値につながるか"
        >
          <ProductLogicFlow steps={productLogic.steps} outcome={productLogic.outcome} />
        </Section>

        {/* ── 結果指標 (KGI) ─────────────────────────────────── */}
        <Section title="結果指標（KGI）" description="最終的に達成すべき成果">
          <MetricCard
            title={resultMetric.title}
            description={resultMetric.description}
            isPrimary
          />
        </Section>

        {/* ── 行動指標 (KPI) ─────────────────────────────────── */}
        <Section title="行動指標（KPI）" description="KGI につながる中間的な行動の指標">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {behaviorMetrics.map((m, i) => (
              <MetricCard key={i} title={m.title} description={m.description} />
            ))}
          </div>
        </Section>

      </div>
    </div>
  )
}
