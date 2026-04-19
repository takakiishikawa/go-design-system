"use client"

import { EmptyState } from "@takaki/go-design-system"
import { PageHeader, DemoSection } from "@/app/ui/demo-section"
import { FileText, Search, Inbox, Users } from "lucide-react"

export default function EmptyStatePage() {
  return (
    <div className="flex flex-col gap-6 py-4">
      <PageHeader
        title="EmptyState"
        description="データが存在しない場合に表示するコンポーネント。icon・title・description・action・secondaryAction をサポート。"
        import="import { EmptyState } from '@takaki/go-design-system'"
      />

      <DemoSection title="基本">
        <div className="w-full rounded-lg border border-border">
          <EmptyState
            icon={<Inbox className="size-6" />}
            title="データがありません"
            description="まだ登録されたデータがありません。最初のデータを追加してみましょう。"
            action={{ label: "追加する", onClick: () => {} }}
          />
        </div>
      </DemoSection>

      <DemoSection title="検索結果なし">
        <div className="w-full rounded-lg border border-border">
          <EmptyState
            icon={<Search className="size-6" />}
            title="検索結果が見つかりません"
            description="別のキーワードで検索してみてください。"
            action={{ label: "検索をリセット", onClick: () => {}, variant: "outline" }}
          />
        </div>
      </DemoSection>

      <DemoSection title="アクションなし">
        <div className="w-full rounded-lg border border-border">
          <EmptyState
            icon={<Users className="size-6" />}
            title="メンバーがいません"
            description="チームメンバーを招待してください。"
          />
        </div>
      </DemoSection>

      <DemoSection title="primary + secondary action">
        <div className="w-full rounded-lg border border-border">
          <EmptyState
            icon={<FileText className="size-6" />}
            title="レポートがありません"
            description="最初のレポートを作成するか、テンプレートからインポートできます。"
            action={{ label: "レポートを作成", onClick: () => {} }}
            secondaryAction={{ label: "インポート", onClick: () => {} }}
          />
        </div>
      </DemoSection>
    </div>
  )
}
