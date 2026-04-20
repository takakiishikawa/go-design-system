"use client"

import { useState } from "react"
import { SearchInput } from "@takaki/go-design-system"
import { PageHeader, DemoSection } from "@/app/ui/demo-section"

export default function SearchInputPage() {
  const [value, setValue] = useState("")

  return (
    <div className="flex flex-col gap-6 py-4">
      <PageHeader
        title="SearchInput"
        description="検索アイコン付き・クリアボタン付きの検索フィールド。"
        import="import { SearchInput } from '@takaki/go-design-system'"
      />

      <DemoSection title="デフォルト">
        <SearchInput placeholder="検索..." className="w-64" />
      </DemoSection>

      <DemoSection title="制御コンポーネント">
        <div className="flex flex-col gap-2">
          <SearchInput
            value={value}
            onValueChange={setValue}
            placeholder="キーワードを入力"
            className="w-64"
          />
          {value && (
            <p className="text-xs text-muted-foreground">検索中: {value}</p>
          )}
        </div>
      </DemoSection>

      <DemoSection title="disabled">
        <SearchInput placeholder="検索..." disabled className="w-64" />
      </DemoSection>
    </div>
  )
}
