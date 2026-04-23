"use client";

import { Banner } from "@takaki/go-design-system";
import { PageHeader, DemoSection } from "@/app/ui/demo-section";

export default function BannerPage() {
  return (
    <div className="flex flex-col gap-6 py-4">
      <PageHeader
        title="Banner"
        description="情報・警告・成功・エラーをページ上部に表示するバナー。dismissible・action ボタンをサポート。"
        import="import { Banner } from '@takaki/go-design-system'"
      />

      <DemoSection title="variant">
        <div className="flex w-full flex-col gap-2">
          <Banner
            variant="default"
            title="お知らせ"
            description="デザインシステムがアップデートされました。"
          />
          <Banner
            variant="info"
            title="情報"
            description="次回のメンテナンスは2024年5月1日を予定しています。"
          />
          <Banner
            variant="success"
            title="完了"
            description="設定が正常に保存されました。"
          />
          <Banner
            variant="warning"
            title="警告"
            description="この操作は元に戻せません。続行しますか？"
          />
          <Banner
            variant="danger"
            title="エラー"
            description="認証に失敗しました。再度ログインしてください。"
          />
        </div>
      </DemoSection>

      <DemoSection title="dismissible">
        <div className="flex w-full flex-col gap-2">
          <Banner
            variant="info"
            title="新機能のご案内"
            description="ダッシュボードに新しいグラフが追加されました。"
            dismissible
          />
          <Banner
            variant="warning"
            title="更新が必要です"
            description="ブラウザを最新バージョンに更新してください。"
            dismissible
            action={{ label: "更新する", onClick: () => {} }}
          />
        </div>
      </DemoSection>
    </div>
  );
}
