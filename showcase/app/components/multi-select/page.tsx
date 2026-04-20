"use client"

import { useState } from "react"
import { MultiSelect } from "@takaki/go-design-system"
import { PageHeader, DemoSection } from "@/app/ui/demo-section"

const FRUITS = [
  { value: "apple", label: "りんご" },
  { value: "banana", label: "バナナ" },
  { value: "cherry", label: "さくらんぼ" },
  { value: "grape", label: "ぶどう" },
  { value: "kiwi", label: "キウイ" },
  { value: "mango", label: "マンゴー" },
]

const CATEGORIES = [
  { value: "food", label: "食品・飲料" },
  { value: "clothing", label: "衣類・ファッション" },
  { value: "electronics", label: "家電・電子機器" },
  { value: "health", label: "健康・美容" },
  { value: "sports", label: "スポーツ・アウトドア" },
]

export default function MultiSelectPage() {
  const [selected, setSelected] = useState<string[]>([])

  return (
    <div className="flex flex-col gap-6 py-4">
      <PageHeader
        title="MultiSelect"
        description="タグ形式の複数選択コンポーネント。クリックでドロップダウンを開き、選択中のアイテムをタグ表示する。"
        import="import { MultiSelect } from '@takaki/go-design-system'"
      />

      <DemoSection title="デフォルト">
        <MultiSelect options={FRUITS} placeholder="フルーツを選択" className="w-80" />
      </DemoSection>

      <DemoSection title="制御コンポーネント">
        <div className="flex flex-col gap-2">
          <MultiSelect
            options={CATEGORIES}
            value={selected}
            onChange={setSelected}
            placeholder="カテゴリーを選択"
            className="w-80"
          />
          <p className="text-xs text-muted-foreground">
            選択中: {selected.length === 0 ? "なし" : selected.join(", ")}
          </p>
        </div>
      </DemoSection>

      <DemoSection title="初期値あり">
        <MultiSelect
          options={FRUITS}
          defaultValue={["apple", "grape"]}
          className="w-80"
        />
      </DemoSection>

      <DemoSection title="disabled">
        <MultiSelect options={FRUITS} defaultValue={["banana"]} disabled className="w-80" />
      </DemoSection>
    </div>
  )
}
