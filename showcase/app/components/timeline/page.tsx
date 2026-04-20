import { Timeline } from "@takaki/go-design-system"
import { PageHeader, DemoSection } from "@/app/ui/demo-section"
import { CheckCircle, AlertCircle, Clock } from "lucide-react"

const ACTIVITY = [
  {
    id: "1",
    title: "注文が完了しました",
    description: "注文番号 #12345 が確定されました。",
    timestamp: "14:32",
    variant: "success" as const,
  },
  {
    id: "2",
    title: "支払い処理中",
    description: "クレジットカードの決済を処理しています。",
    timestamp: "14:30",
    variant: "warning" as const,
  },
  {
    id: "3",
    title: "カートに追加",
    description: "商品をカートに追加しました。",
    timestamp: "14:25",
    variant: "default" as const,
  },
  {
    id: "4",
    title: "エラーが発生しました",
    description: "最初の支払い試行が失敗しました。",
    timestamp: "14:20",
    variant: "error" as const,
  },
]

const WITH_ICONS = [
  {
    id: "1",
    title: "デプロイ完了",
    description: "本番環境へのデプロイが成功しました。",
    timestamp: "今日 10:00",
    icon: <CheckCircle className="size-3 text-[color:var(--color-success)]" />,
  },
  {
    id: "2",
    title: "ビルド実行中",
    description: "CI パイプラインが実行されています。",
    timestamp: "今日 09:55",
    icon: <Clock className="size-3 text-[color:var(--color-warning)]" />,
  },
  {
    id: "3",
    title: "テスト失敗",
    description: "ユニットテストが3件失敗しています。",
    timestamp: "今日 09:40",
    icon: <AlertCircle className="size-3 text-destructive" />,
  },
]

export default function TimelinePage() {
  return (
    <div className="flex flex-col gap-6 py-4">
      <PageHeader
        title="Timeline"
        description="時系列でイベントや活動を表示するコンポーネント。アクティビティフィードや履歴表示に使う。"
        import="import { Timeline } from '@takaki/go-design-system'"
      />

      <DemoSection title="基本 (バリアント)">
        <div className="w-80">
          <Timeline items={ACTIVITY} />
        </div>
      </DemoSection>

      <DemoSection title="アイコン付き">
        <div className="w-80">
          <Timeline items={WITH_ICONS} />
        </div>
      </DemoSection>
    </div>
  )
}
