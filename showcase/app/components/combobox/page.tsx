"use client"

import * as React from "react"
import { Combobox, Label } from "@takaki/go-design-system"
import { PageHeader, DemoSection } from "@/app/ui/demo-section"

const FRUITS = [
  { value: "apple", label: "りんご" },
  { value: "banana", label: "バナナ" },
  { value: "orange", label: "オレンジ" },
  { value: "grape", label: "ぶどう" },
  { value: "strawberry", label: "いちご" },
  { value: "watermelon", label: "すいか" },
]

const PREFECTURES = [
  { value: "tokyo", label: "東京都" },
  { value: "osaka", label: "大阪府" },
  { value: "kanagawa", label: "神奈川県" },
  { value: "aichi", label: "愛知県" },
  { value: "fukuoka", label: "福岡県" },
  { value: "hokkaido", label: "北海道" },
  { value: "kyoto", label: "京都府" },
  { value: "hyogo", label: "兵庫県" },
]

export default function ComboboxPage() {
  const [fruit, setFruit] = React.useState("")
  const [prefecture, setPrefecture] = React.useState("")

  return (
    <div className="flex flex-col gap-6 py-4">
      <PageHeader
        title="Combobox"
        description="検索可能なドロップダウン選択。Command + Popover パターンで実装。"
        import="import { Combobox } from '@takaki/go-design-system'"
      />

      <DemoSection title="基本">
        <div className="flex w-64 flex-col gap-1.5">
          <Label>くだもの</Label>
          <Combobox
            options={FRUITS}
            value={fruit}
            onValueChange={setFruit}
            placeholder="くだものを選択"
            searchPlaceholder="検索..."
          />
          {fruit && <p className="text-xs text-muted-foreground">選択: {fruit}</p>}
        </div>
      </DemoSection>

      <DemoSection title="多数の選択肢 (検索)">
        <div className="flex w-64 flex-col gap-1.5">
          <Label>都道府県</Label>
          <Combobox
            options={PREFECTURES}
            value={prefecture}
            onValueChange={setPrefecture}
            placeholder="都道府県を選択"
            searchPlaceholder="都道府県を検索..."
            emptyText="該当する都道府県がありません"
          />
        </div>
      </DemoSection>

      <DemoSection title="無効">
        <div className="flex w-64 flex-col gap-1.5">
          <Label>選択不可</Label>
          <Combobox
            options={FRUITS}
            disabled
            placeholder="変更不可"
          />
        </div>
      </DemoSection>
    </div>
  )
}
