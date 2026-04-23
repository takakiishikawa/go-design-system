import * as React from "react";
import { ArrowRightIcon, ArrowDownIcon, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface LogicStep {
  title: string;
  description: string;
}

export interface ProductLogicFlowProps {
  steps: LogicStep[];
  outcome: string;
}

function StepCard({
  step,
  index,
  total,
}: {
  step: LogicStep;
  index: number;
  total: number;
}) {
  const isLast = index === total - 1;
  return (
    <>
      {/* カード */}
      <div className="flex flex-col gap-1.5 rounded-lg border border-border bg-card p-4 shadow-sm min-w-0">
        <div className="flex items-center gap-2">
          <span
            className="flex size-5 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-primary-foreground"
            style={{
              backgroundColor: "var(--color-primary)",
              fontSize: "var(--text-xs)",
              fontWeight: "var(--font-weight-semibold)",
            }}
          >
            {index + 1}
          </span>
          <p
            className="font-semibold leading-tight text-foreground"
            style={{
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-weight-semibold)",
            }}
          >
            {step.title}
          </p>
        </div>
        <p
          className="text-muted-foreground leading-relaxed"
          style={{
            fontSize: "var(--text-xs)",
            color: "var(--color-text-secondary)",
          }}
        >
          {step.description}
        </p>
      </div>

      {/* 矢印（最後のカードの後は表示しない） */}
      {!isLast && (
        <>
          {/* デスクトップ: 右矢印 */}
          <div className="hidden md:flex shrink-0 items-center text-muted-foreground">
            <ArrowRightIcon className="size-5" aria-hidden />
          </div>
          {/* モバイル: 下矢印 */}
          <div className="flex md:hidden justify-center text-muted-foreground">
            <ArrowDownIcon className="size-5" aria-hidden />
          </div>
        </>
      )}
    </>
  );
}

export function ProductLogicFlow({ steps, outcome }: ProductLogicFlowProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* ステップ群 */}
      <div className="flex flex-col gap-3 md:flex-row md:items-stretch md:gap-2">
        {steps.map((step, i) => (
          <StepCard key={i} step={step} index={i} total={steps.length} />
        ))}
      </div>

      {/* → アウトカム */}
      <div className="flex items-center gap-3">
        <ArrowRight
          className="size-5 shrink-0 text-primary"
          aria-hidden
          style={{ color: "var(--color-primary)" }}
        />
        <div
          className="flex-1 rounded-lg border px-4 py-3 font-semibold text-foreground"
          style={{
            borderColor: "var(--color-primary)",
            backgroundColor:
              "color-mix(in srgb, var(--color-primary) 6%, transparent)",
            fontSize: "var(--text-base)",
            fontWeight: "var(--font-weight-semibold)",
          }}
        >
          {outcome}
        </div>
      </div>
    </div>
  );
}
