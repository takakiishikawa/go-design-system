"use client"

import { useState } from "react"
import { LoadingOverlay, Button, Card, CardContent, CardHeader, CardTitle } from "@takaki/go-design-system"
import { PageHeader, DemoSection } from "@/app/ui/demo-section"

export default function LoadingOverlayPage() {
  const [loading, setLoading] = useState(false)

  function simulate() {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="flex flex-col gap-6 py-4">
      <PageHeader
        title="LoadingOverlay"
        description="セクション単位のローディング表示。children の上にスピナーをオーバーレイする。"
        import="import { LoadingOverlay } from '@takaki/go-design-system'"
      />

      <DemoSection title="カードに適用">
        <div className="flex flex-col gap-3">
          <LoadingOverlay loading={loading} className="w-72 rounded-lg">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">データ一覧</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">コンテンツがここに表示されます。</p>
                <p className="text-sm text-muted-foreground">コンテンツがここに表示されます。</p>
                <p className="text-sm text-muted-foreground">コンテンツがここに表示されます。</p>
              </CardContent>
            </Card>
          </LoadingOverlay>
          <Button size="sm" variant="outline" onClick={simulate} className="w-fit">
            2秒間ローディング
          </Button>
        </div>
      </DemoSection>

      <DemoSection title="loading=true（静的）">
        <LoadingOverlay loading={true} label="データを取得中" className="w-72 rounded-lg">
          <Card>
            <CardContent className="py-8">
              <p className="text-center text-sm text-muted-foreground">コンテンツ</p>
            </CardContent>
          </Card>
        </LoadingOverlay>
      </DemoSection>
    </div>
  )
}
