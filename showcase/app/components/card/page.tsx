import {
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
  Button, Badge,
} from "@takaki/go-design-system"
import { PageHeader, DemoSection } from "@/app/ui/demo-section"

export default function CardPage() {
  return (
    <div className="flex flex-col gap-6 py-4">
      <PageHeader
        title="Card"
        description="コンテンツをグループ化するコンテナコンポーネント。Header・Content・Footer・Title・Description を組み合わせて使う。"
        import="import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@takaki/go-design-system'"
      />

      <DemoSection title="基本">
        <Card className="w-72">
          <CardHeader>
            <CardTitle>カードタイトル</CardTitle>
            <CardDescription>補足説明テキストをここに記載します。</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">本文コンテンツがここに入ります。</p>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button size="sm">確認</Button>
            <Button size="sm" variant="outline">キャンセル</Button>
          </CardFooter>
        </Card>
      </DemoSection>

      <DemoSection title="KPI カード（数値表示）">
        {[
          { label: "今月の売上", value: "¥1,240,000", trend: "+12.3%", positive: true },
          { label: "アクティブユーザー", value: "3,482", trend: "+5.1%", positive: true },
          { label: "解約率", value: "2.4%", trend: "+0.3%", positive: false },
        ].map((item) => (
          <Card key={item.label} className="w-52">
            <CardHeader className="pb-1">
              <CardDescription>{item.label}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-foreground">{item.value}</p>
              <Badge
                variant={item.positive ? "default" : "destructive"}
                className="mt-1 text-xs"
              >
                {item.trend}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </DemoSection>

      <DemoSection title="コンテンツのみ">
        <Card className="w-72">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">CardHeader なしでシンプルに使えます。</p>
          </CardContent>
        </Card>
      </DemoSection>
    </div>
  )
}
