"use client";

import { useState } from "react";
import { NumberInput } from "@takaki/go-design-system";
import { PageHeader, DemoSection } from "@/app/ui/demo-section";

export default function NumberInputPage() {
  const [value, setValue] = useState(5);

  return (
    <div className="flex flex-col gap-6 py-4">
      <PageHeader
        title="NumberInput"
        description="＋／－ボタン付きの数値入力。min・max・step をサポート。"
        import="import { NumberInput } from '@takaki/go-design-system'"
      />

      <DemoSection title="デフォルト">
        <NumberInput defaultValue={0} />
      </DemoSection>

      <DemoSection title="min/max 制限">
        <NumberInput defaultValue={5} min={0} max={10} />
        <p className="text-xs text-muted-foreground">min=0, max=10</p>
      </DemoSection>

      <DemoSection title="step=0.5">
        <NumberInput defaultValue={1} min={0} max={5} step={0.5} />
      </DemoSection>

      <DemoSection title="制御コンポーネント">
        <div className="flex items-center gap-3">
          <NumberInput value={value} onChange={setValue} min={0} max={20} />
          <span className="text-sm text-muted-foreground">値: {value}</span>
        </div>
      </DemoSection>

      <DemoSection title="disabled">
        <NumberInput defaultValue={3} disabled />
      </DemoSection>
    </div>
  );
}
