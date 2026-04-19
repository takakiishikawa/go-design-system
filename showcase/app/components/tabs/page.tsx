import { Tabs, TabsContent, TabsList, TabsTrigger, Card, CardContent } from "@takaki/go-design-system"
import { PageHeader, DemoSection } from "@/app/ui/demo-section"

export default function TabsPage() {
  return (
    <div className="flex flex-col gap-6 py-4">
      <PageHeader
        title="Tabs"
        description="コンテンツを複数のタブで切り替えるコンポーネント。水平方向のナビゲーションに使用。"
        import="import { Tabs, TabsList, TabsTrigger, TabsContent } from '@takaki/go-design-system'"
      />

      <DemoSection title="基本">
        <Tabs defaultValue="overview" className="w-full max-w-lg">
          <TabsList>
            <TabsTrigger value="overview">概要</TabsTrigger>
            <TabsTrigger value="activity">アクティビティ</TabsTrigger>
            <TabsTrigger value="settings">設定</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card><CardContent className="pt-4 text-sm text-muted-foreground">概要コンテンツ</CardContent></Card>
          </TabsContent>
          <TabsContent value="activity">
            <Card><CardContent className="pt-4 text-sm text-muted-foreground">アクティビティログ</CardContent></Card>
          </TabsContent>
          <TabsContent value="settings">
            <Card><CardContent className="pt-4 text-sm text-muted-foreground">設定フォーム</CardContent></Card>
          </TabsContent>
        </Tabs>
      </DemoSection>

      <DemoSection title="無効タブ">
        <Tabs defaultValue="tab1" className="w-full max-w-lg">
          <TabsList>
            <TabsTrigger value="tab1">タブ1</TabsTrigger>
            <TabsTrigger value="tab2">タブ2</TabsTrigger>
            <TabsTrigger value="tab3" disabled>無効タブ</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <Card><CardContent className="pt-4 text-sm text-muted-foreground">タブ1のコンテンツ</CardContent></Card>
          </TabsContent>
          <TabsContent value="tab2">
            <Card><CardContent className="pt-4 text-sm text-muted-foreground">タブ2のコンテンツ</CardContent></Card>
          </TabsContent>
        </Tabs>
      </DemoSection>
    </div>
  )
}
