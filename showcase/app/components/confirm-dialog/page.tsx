"use client";

import { Button, ConfirmDialog } from "@takaki/go-design-system";
import { PageHeader, DemoSection } from "@/app/ui/demo-section";

export default function ConfirmDialogPage() {
  return (
    <div className="flex flex-col gap-6 py-4">
      <PageHeader
        title="ConfirmDialog"
        description="「本当に実行しますか？」の確認ダイアログ。AlertDialog のラッパー。"
        import="import { ConfirmDialog } from '@takaki/go-design-system'"
      />

      <DemoSection title="デフォルト">
        <ConfirmDialog
          trigger={
            <Button variant="outline" size="sm">
              削除
            </Button>
          }
          title="本当に削除しますか？"
          description="この操作は取り消せません。データは完全に削除されます。"
          confirmLabel="削除する"
          cancelLabel="キャンセル"
          onConfirm={() => alert("削除しました")}
        />
      </DemoSection>

      <DemoSection title="variant=destructive">
        <ConfirmDialog
          trigger={
            <Button variant="destructive" size="sm">
              アカウント削除
            </Button>
          }
          title="アカウントを削除しますか？"
          description="すべてのデータが失われます。この操作は元に戻せません。"
          confirmLabel="削除する"
          variant="destructive"
          onConfirm={() => alert("削除しました")}
        />
      </DemoSection>

      <DemoSection title="シンプル（説明なし）">
        <ConfirmDialog
          trigger={<Button size="sm">送信</Button>}
          title="送信してよろしいですか？"
          confirmLabel="送信"
          onConfirm={() => alert("送信しました")}
        />
      </DemoSection>
    </div>
  );
}
