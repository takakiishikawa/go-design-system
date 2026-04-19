"use client"

import { Button } from "@takaki/go-design-system"
import { PageHeader, DemoSection } from "@/app/ui/demo-section"
import { Download, Plus, Trash2 } from "lucide-react"

export default function ButtonPage() {
  return (
    <div className="flex flex-col gap-6 py-4">
      <PageHeader
        title="Button"
        description="主要なアクションを促す汎用ボタンコンポーネント。variant・size・disabled・asChild をサポート。"
        import="import { Button } from '@takaki/go-design-system'"
      />

      <DemoSection title="variant">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="destructive">Destructive</Button>
      </DemoSection>

      <DemoSection title="size">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="icon"><Plus className="size-4" /></Button>
      </DemoSection>

      <DemoSection title="with icon">
        <Button><Plus className="mr-2 size-4" />追加</Button>
        <Button variant="outline"><Download className="mr-2 size-4" />エクスポート</Button>
        <Button variant="destructive"><Trash2 className="mr-2 size-4" />削除</Button>
      </DemoSection>

      <DemoSection title="disabled">
        <Button disabled>Default</Button>
        <Button variant="outline" disabled>Outline</Button>
        <Button variant="secondary" disabled>Secondary</Button>
      </DemoSection>

      <DemoSection title="loading (spinner)" description="Spinner と組み合わせた読み込み中状態">
        <Button disabled>
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          保存中...
        </Button>
      </DemoSection>
    </div>
  )
}
