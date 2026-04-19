"use client"

import {
  Button, Dialog, DialogContent, DialogDescription, DialogFooter,
  DialogHeader, DialogTitle, DialogTrigger,
  Input, Label,
} from "@takaki/go-design-system"
import { PageHeader, DemoSection } from "@/app/ui/demo-section"
import { Trash2 } from "lucide-react"

export default function DialogPage() {
  return (
    <div className="flex flex-col gap-6 py-4">
      <PageHeader
        title="Dialog"
        description="モーダルダイアログ。確認・フォーム入力・詳細表示などに使用。AlertDialog（破壊的操作の確認）も参照。"
        import="import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@takaki/go-design-system'"
      />

      <DemoSection title="基本">
        <Dialog>
          <DialogTrigger asChild>
            <Button>ダイアログを開く</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>基本ダイアログ</DialogTitle>
              <DialogDescription>
                ここに説明文が入ります。ユーザーに確認を促す内容を記載してください。
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline">キャンセル</Button>
              <Button>確認</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </DemoSection>

      <DemoSection title="フォームダイアログ">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">メンバーを招待</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>メンバーを招待</DialogTitle>
              <DialogDescription>
                招待するメンバーのメールアドレスを入力してください。
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-3 py-2">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="invite-name">名前</Label>
                <Input id="invite-name" placeholder="山田太郎" />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="invite-email">メールアドレス</Label>
                <Input id="invite-email" type="email" placeholder="yamada@example.com" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">キャンセル</Button>
              <Button>招待する</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </DemoSection>

      <DemoSection title="破壊的操作の確認">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="destructive">
              <Trash2 className="mr-2 size-4" />削除
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>削除の確認</DialogTitle>
              <DialogDescription>
                このデータを削除すると元に戻せません。本当に削除しますか？
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline">キャンセル</Button>
              <Button variant="destructive">削除する</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </DemoSection>
    </div>
  )
}
